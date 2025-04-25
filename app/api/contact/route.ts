export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { RateLimiterMemory } from "rate-limiter-flexible";
import xss from "xss";  // Importing the xss package for input sanitization

// Validation schema
const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string(),
});

// Set up in-memory rate limiter (limit to 5 requests per minute)
const rateLimiter = new RateLimiterMemory({
  points: 5, // Number of requests allowed
  duration: 60, // Time window in seconds (1 minute)
});

export async function POST(req: Request) {
  try {
    // Get IP address from the `x-forwarded-for` header
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '';

    // Check if the IP has exceeded the rate limit
    try {
      await rateLimiter.consume(ip); // Consume one point for each request from this IP
    } catch (rateLimitErr) {
      // If rate limit exceeded, return a 429 response
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const data = formSchema.parse(body);

    // Sanitize user input to remove any malicious content
    const sanitizedData = {
      name: xss(data.name),  // Sanitizing the name
      email: xss(data.email),  // Sanitizing the email
      company: xss(data.company || ""),  // Sanitizing the company (if provided)
      message: xss(data.message),  // Sanitizing the message
    };

    // Configure nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"${sanitizedData.name}" <${sanitizedData.email}>`,
      to: "contact.breachers@gmail.com", // your email
      subject: `New Contact Message from ${sanitizedData.name}`,
      text: `
Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Company: ${sanitizedData.company || "N/A"}

Message:
${sanitizedData.message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
