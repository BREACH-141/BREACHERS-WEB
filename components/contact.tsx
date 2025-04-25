"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send, Loader2, ClockAlertIcon, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      const result = await res.json();
  
      if (result.success) {
        toast({
          title: "Message sent successfully",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Failed to send",
          description: result.error || "Something went wrong.",
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Network error",
        description: "Could not reach the server.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground">
                Ready to strengthen your security posture? Contact us today to discuss how we can help protect your organization.
              </p>
            </div>

            <div className="space-y-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email Us</h3>
                  <p className="text-muted-foreground mt-1">contact.breachers@gmail.com</p>
                </div>
              </div>
              </div>

              <div className="space-y-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <Clock className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Assistance availability</h3>
                  <p className="text-muted-foreground mt-1">Monday to Friday</p>
                  <p className="text-muted-foreground mt-1">9:30 AM to 6:30 AM UTC</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
              
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Send Us a Message</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company <span className="text-muted-foreground">(Optional)</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Your company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your security needs..."
                            className="resize-none min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}