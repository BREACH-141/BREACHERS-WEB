"use client";

import { motion } from "framer-motion";
import { Shield, Siren, Users, Crosshair, BookOpen, HeartPulse, Fish } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = [
    
    
    {
      icon: <Users className="h-12 w-12 text-red-600 mb-4" />,
      title: "Security Training",
      description: "Customized training programs for employees at all levels, from awareness to advanced techniques.",
      detail: "Practical, engaging sessions delivered in-person or virtually."
    },
    {
      icon: <Fish className="h-12 w-12 text-red-600 mb-4" />,
      title: "Phishing Simulation",
      description: "Simulated phishing attacks designed to assess and train your team's ability to recognize social engineering threats.",
      detail: "Custom campaigns that simulate real-world phishing tactics to boost employee awareness and response."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-red-600 mb-4" />,
      title: "Security Consulting",
      description: "Strategic guidance on building and improving your security program from our seasoned experts.",
      detail: "Long-term partnerships to evolve your security posture."
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            We provide comprehensive security solutions to protect your organization from evolving threats
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-border bg-card hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.detail}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full mt-2"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}