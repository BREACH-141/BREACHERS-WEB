import './globals.css';
import { Inter } from 'next/font/google';
import { metadata } from './metadata';
import ClientLayout from '@/components/client-layout';

const inter = Inter({ subsets: ['latin'] });

// Server Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout inter={inter}>{children}</ClientLayout>;
}

export { metadata };