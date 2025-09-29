'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '../logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#shop', label: 'Shop' },
  { href: '#personalisation', label: 'Personalisation' },
  { href: '#about', label: 'About Us' },
  { href: '#eco-impact', label: 'Eco-Impact' },
  { href: '#contact', label: 'Contact' },
];

export function StoreNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Logo />
        <nav className="ml-10 hidden md:flex">
          <ul className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col p-6">
                <Logo className="text-2xl mb-8" />
                <nav>
                  <ul className="flex flex-col space-y-4">
                    {navLinks.map(({ href, label }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                          onClick={() => setIsOpen(false)}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
