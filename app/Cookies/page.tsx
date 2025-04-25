"use client";

import { motion } from "framer-motion";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Shield, Cookie, Settings, Globe, Bell } from "lucide-react";

export default function CookiePolicy() {
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
              <h1 className="text-4xl font-bold m-0">Cookie Policy</h1>
            </div>
            
            <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="relative mb-12 rounded-lg overflow-hidden h-48">
              <img 
                src="https://images.pexels.com/photos/5473954/pexels-photo-5473954.jpeg" 
                alt="Data Privacy" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8">
                <p className="text-white text-xl font-semibold max-w-md">
                  Transparent cookie usage for a better experience
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <Cookie className="h-6 w-6 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-3">Essential Cookies</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Authentication</li>
                  <li>Security features</li>
                  <li>Basic functionality</li>
                  <li>Session management</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <Settings className="h-6 w-6 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-3">Functional Cookies</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Preferences</li>
                  <li>Language settings</li>
                  <li>User choices</li>
                  <li>Site features</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <Globe className="h-6 w-6 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-3">Third-Party Cookies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Analytics</h3>
                    <ul className="space-y-1">
                      <li>Usage patterns</li>
                      <li>Site performance</li>
                      <li>User behavior</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Marketing</h3>
                    <ul className="space-y-1">
                      <li>Ad preferences</li>
                      <li>Campaign tracking</li>
                      <li>Content targeting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <Bell className="h-6 w-6 text-red-600 mb-4" />
                <h2 className="text-xl font-semibold mb-3">Cookie Management</h2>
                <p className="text-muted-foreground mb-4">
                  You have full control over your cookie preferences:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Browser settings</li>
                  <li>Consent management</li>
                  <li>Individual opt-outs</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-100 dark:border-red-900">
              <h2 className="text-xl font-semibold mb-4">Questions About Cookies?</h2>
              <p className="text-muted-foreground mb-2">
                For questions about our cookie practices:
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