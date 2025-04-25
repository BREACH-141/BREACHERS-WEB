"use client";

import { motion } from "framer-motion";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Shield, Scale, Users, FileText, AlertCircle } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8">
              <Shield className="h-8 w-8 text-red-600" />
              <h1 className="text-4xl font-bold m-0">Terms of Service</h1>
            </div>
            
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="relative mb-12 rounded-lg overflow-hidden h-48">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                alt="Business Agreement" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8">
                <p className="text-white text-xl font-semibold max-w-md">
                  Professional security services you can trust
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <Scale className="h-6 w-6 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-3">Service Agreement</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Professional training</li>
                  <li>Phishing Simulations</li>
                  <li>Consultation services</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <Users className="h-6 w-6 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-3">Client Obligations</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Accurate information</li>
                  <li>Timely communication</li>
                  <li>Access authorisation</li>
                  <li>Compliance with policies</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <FileText className="h-6 w-6 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Our Rights</h3>
                    <ul className="space-y-1">
                      <li>Training materials</li>
                      <li>Assessment methods</li>
                      <li>Security tools</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Client License</h3>
                    <ul className="space-y-1">
                      <li>Usage rights</li>
                      <li>Distribution limits</li>
                      <li>Modification terms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <AlertCircle className="h-6 w-6 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-3">Liability & Indemnification</h2>
                <p className="text-muted-foreground mb-4">
                  Our commitment to professional service while maintaining clear boundaries of liability:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Service warranties</li>
                  <li>Limitation of liability</li>
                  <li>Force majeure conditions</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-100 dark:border-red-900">
              <h2 className="text-xl font-semibold mb-4">Legal Contact</h2>
              <p className="text-muted-foreground mb-2">
                For legal inquiries and terms clarification:
              </p>
              <p className="text-muted-foreground">
                Email: contact.breachers@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}