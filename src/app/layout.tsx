import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { SymbiFAB } from '@/components/symbi-fab';
import { cn } from '@/lib/utils';
import { Space_Grotesk, Work_Sans } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'SYMBI0N | Symbolic Intelligence & Digital Identity Ecosystem',
  description:
    'Explore SYMBI0N, the world’s first symbolic intelligence ecosystem. Create your unique digital identity (HELIX), engage with your personalized AI companion (SYMBI), and unlock the power of symbolic branding.',
  keywords: [
    'Symbolic Intelligence',
    'Digital Identity',
    'AI Companion',
    'Brand Symbolism',
    'HELIX',
    'SYMBI',
    'Ekam Lipi',
    'Symbolic AI',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-body antialiased", spaceGrotesk.variable, workSans.variable)}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
          <SymbiFAB />
        </div>
      </body>
    </html>
  );
}
