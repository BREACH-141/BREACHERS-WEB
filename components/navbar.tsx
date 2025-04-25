"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useRouter, usePathname } from 'next/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      router.push('/');
      // Add a small delay to ensure the page loads before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-red-600/95 shadow-md py-3" : "bg-red-600 py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Shield className="w-full h-full text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
              BREACHERS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks scrollToSection={scrollToSection} />
            <ThemeToggle />
            <Button 
              variant="outline" 
              size="sm" 
              className="font-medium text-red-600 bg-white hover:bg-white/90 hover:text-red-700"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-1"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-[60px] left-0 right-0 bg-red-600/95 shadow-lg z-40 backdrop-blur-sm"
        >
          <div className="container mx-auto py-6 px-4 flex flex-col space-y-4">
            <div className="flex flex-col space-y-3">
              <NavLinks scrollToSection={scrollToSection} isMobile />
            </div>
            <Button 
              className="w-full bg-white text-red-600 hover:bg-white/90 hover:text-red-700"
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}

function NavLinks({ 
  scrollToSection, 
  isMobile = false 
}: { 
  scrollToSection: (id: string) => void, 
  isMobile?: boolean 
}) {
  const links = [
    { name: "About Us", id: "about-us" },
    { name: "Services", id: "services" },
    { name: "Our Commitment to You", id: "testimonials" },
    { name: "Contact", id: "contact" }
  ];

  return links.map((link) => (
    <button
      key={link.id}
      onClick={() => scrollToSection(link.id)}
      className={`text-white font-medium hover:text-white/80 transition-colors ${
        isMobile ? "text-lg py-2" : ""
      }`}
    >
      {link.name}
    </button>
  ));
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full text-white hover:bg-red-700/50 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </button>
  );
}