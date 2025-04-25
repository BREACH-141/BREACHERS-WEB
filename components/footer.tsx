"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-red-500 mr-2" />
              <span className="text-xl font-bold tracking-tight">BREACHERS</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Professional security services to protect your organization against evolving cyber threats.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
              <SocialLink href="#" icon={<Instagram size={18} />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <FooterLink href="#services">Security Training</FooterLink>
              <FooterLink href="#services">Phising simulation</FooterLink>
              <FooterLink href="#services">Security consulting</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="#about-us">About Us</FooterLink>
              <FooterLink href="#testimonials">Our Commitment To You</FooterLink>
            </ul>
          </div>
          
          <div>
  <h3 className="text-lg font-semibold mb-6">Security Tip</h3>
  <p className="text-gray-400 mb-4">
    Avoid clicking on suspicious links, even if they seem to come from someone you know. Always double-check the sender.
  </p>
  <p className="text-sm text-gray-500">
    Your digital safety starts with awareness.
  </p>
</div>

        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Breachers Security. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/Privacy-policy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/Terms-of-Service" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/Cookies" className="hover:text-gray-300 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a 
        href={href}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {children}
      </a>
    </li>
  );
}