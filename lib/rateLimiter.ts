import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Max 5 requests per minute
  message: "Too many requests, please try again later.", // Message if rate limit exceeded
  headers: true, // Optionally, include rate limit headers in the response
});
