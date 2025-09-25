'use client';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#modules', label: 'Modules' },
  { href: '#membership', label: 'Memberships' },
  { href: '#marketplace', label: 'Marketplace' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center px-4 md:px-6">
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
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" className="hidden sm:inline-flex">Log In</Button>
          <Button className="hidden bg-accent hover:bg-accent/90 sm:inline-flex">Sign Up</Button>
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
                <div className="mt-8 flex flex-col space-y-4">
                  <Button variant="ghost">Log In</Button>
                  <Button className="bg-accent hover:bg-accent/90">Sign Up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
