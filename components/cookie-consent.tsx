"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "rejected");
    setShowBanner(false);
  };

  const handlePolicyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBanner(false);
    router.push('/cookie-policy');
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                  <Cookie className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <p className="font-semibold">Cookie Preferences</p>
              </div>
              
              <p className="text-sm text-muted-foreground flex-grow">
                We use cookies to enhance your browsing experience. Read our {" "}
                <Link href="/Cookies" passHref legacyBehavior>
                <a className="text-red-600 hover:text-red-700 underline">Cookie Policy</a>
                </Link>
                 to learn more.
              </p>

              <div className="flex gap-3 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleConsent(false)}
                >
                  Decline
                </Button>
                <Button
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => handleConsent(true)}
                >
                  Accept
                </Button>
              </div>

              <button
                onClick={() => setShowBanner(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground sm:hidden"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}