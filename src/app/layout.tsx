import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { SymbiFAB } from '@/components/symbi-fab';
import { ThemeProvider, ElementalThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Symbi0n Ecosystem',
  description: 'The next evolution of digital identity and symbolic interaction.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ElementalThemeProvider>
            <div className="min-h-screen bg-background font-body antialiased">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <Toaster />
              <SymbiFAB />
            </div>
          </ElementalThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
