"use client";

import { motion } from "framer-motion";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Shield, Lock, UserCheck, Bell, FileCheck } from "lucide-react";

export default function PrivacyPolicy() {
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
              <h1 className="text-4xl font-bold m-0">Privacy Policy</h1>
            </div>
            
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <Lock className="h-6 w-6 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-3">Information Collection</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Contact information</li>
                  <li>Company details</li>
                  <li>Training data</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <UserCheck className="h-6 w-6 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-3">Data Usage</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Service improvement</li>
                  <li>Communication</li>
                  <li>Security updates</li>
                  <li>Support responses</li>
                </ul>
              </div>
            </div>

            <div className="relative mb-12 rounded-lg overflow-hidden h-48">
              <img 
                src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg" 
                alt="Data Security" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8">
                <p className="text-white text-xl font-semibold max-w-md">
                  Your data security is our top priority
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <Bell className="h-6 w-6 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-3">Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We maintain strict confidentiality and never sell your data. Sharing is limited to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Essential service providers</li>
                  <li>Legal requirements</li>
                  <li>Authorized partners</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <FileCheck className="h-6 w-6 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Access & Control</h3>
                    <ul className="space-y-1">
                      <li>View personal data</li>
                      <li>Request corrections</li>
                      <li>Data deletion</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Communication</h3>
                    <ul className="space-y-1">
                      <li>Opt-out options</li>
                      <li>Preference updates</li>
                      <li>Marketing choices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-100 dark:border-red-900">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-2">
                For privacy-related inquiries, reach out to our dedicated privacy team:
              </p>
              <p className="text-muted-foreground">
                Email: privacy@breachers-security.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}