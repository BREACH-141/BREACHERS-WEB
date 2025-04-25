"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      author: "Why Choose Us",
      title: "",
      content: "We're a passionate, security-focused startup built for agility and clarity, No bloated enterprise packages — just tailored, effective solutions and a hands-on team that actually cares."
    },
    {
      author: "Our Mission",
      title: "",
      content: "To make high-quality cybersecurity accessible to businesses of all sizes, We’re driven to bridge the gap between technical expertise and real-world protection, especially for startups and growing teams"
    },
    {
      author: "What You Can Expect",
      title: "",
      content: "Transparent communication, fast turnarounds, and clear, actionable reports, We make cybersecurity simple, so you can focus on what you do best — running your business with confidence."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">The BREACHERS Difference</h2>
          <p className="text-lg text-muted-foreground">
            We’re building a new standard in cybersecurity — transparent, accessible, and relentlessly focused on your protection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-#">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border bg-card hover:shadow-md transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{testimonial.author}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-foreground italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}