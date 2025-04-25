'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { CookieConsent } from '@/components/cookie-consent';
import { useEffect, useState } from 'react';

export default function ClientLayout({
  children,
  inter,
}: {
  children: React.ReactNode;
  inter: any;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <CookieConsent />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}