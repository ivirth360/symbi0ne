
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { SymbiFAB } from '@/components/symbi-fab';
import { cn } from '@/lib/utils';
import { Archivo } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: 'SYMBI0N | Symbolic Intelligence, Digital Identity & Personalized AI',
  description:
    'Explore SYMBI0N, the world’s first symbolic intelligence ecosystem. Create your unique digital identity (HELIX), engage with your personalized AI companion (SYMBI), and build resonant digital spaces.',
  keywords: [
    'Symbolic Intelligence',
    'Digital Identity',
    'AI Companion',
    'Brand Symbolism',
    'HELIX',
    'SYMBI',
    'Ekam Lipi',
    'Symbolic AI',
    'Digital Spaces',
    'Personalized AI',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-body antialiased", archivo.variable)}>
        <div className="relative flex min-h-dvh flex-col items-center bg-background">
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <Toaster />
          <SymbiFAB />
        </div>
      </body>
    </html>
  );
}
