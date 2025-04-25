"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="about-us" 
      className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 bg-gradient-to-b from-background to-background/95 scroll-mt-20"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-300 font-medium text-sm">
              <Shield className="w-4 h-4 mr-2" />
               Security Training
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-foreground">
              Empower Your Team.<br />
              <span className="text-red-600">Outsmart the Threat.</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              At Breachers, we don't just train—we transform your organization's security posture through specialized training, advanced threat simulation, and strategic security consulting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => scrollToSection('contact')}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('services')}
              >
                Explore Services
              </Button>
            </div>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Certified Security Experts",
                "Custom Training Programs",
                "Realistic phishing Simulations",
                "Comprehensive Support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/80 to-black/40 z-10" />
            <img 
              src="https://images.pexels.com/photos/1181281/pexels-photo-1181281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Security professionals working" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 z-20 max-w-[80%]">
              <div className="text-white font-bold text-2xl mb-2">
                Security is not a product, but a process.
              </div>
              <p className="text-white/90 text-sm">
                Bruce Schneier — Security Technologist
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}