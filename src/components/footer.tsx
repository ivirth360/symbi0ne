
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-12 md:px-6">
        <div className="md:col-span-4">
          <Logo className="text-xl" />
          <p className="mt-4 text-sm text-muted-foreground">
            The world’s first symbolic intelligence ecosystem.
          </p>
           <p className="mt-2 text-xs text-muted-foreground">
            Powered by <a href="https://ivirth.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">iViRTH</a>.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Contact us: <a href="mailto:hello@ivirth.com" className="underline hover:text-primary">hello@ivirth.com</a>
          </p>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-headline text-lg font-semibold">Ecosystem</h4>
          <div className="flex flex-col gap-2 mt-4">
            <Link href="/#about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
             <Link href="/#services" className="text-muted-foreground hover:text-foreground">
              Services
            </Link>
            <Link href="/#marketplace" className="text-muted-foreground hover:text-foreground">
              Marketplace
            </Link>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-headline text-lg font-semibold">Legal</h4>
          <div className="flex flex-col gap-2 mt-4">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="md:col-span-4">
          <h4 className="font-headline text-lg font-semibold">
            Subscribe for Symbolic Updates
          </h4>
          <p className="mt-2 text-sm text-muted-foreground">Join our newsletter to receive the latest news about the Symbi0n ecosystem.</p>
          <div className="mt-4 flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Symbi0n by iViRTH. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/symbion.ivirth?igsh=MTQ4a3JlMXQzajFtdQ==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              Instagram
            </Link>
            <Link href="https://www.linkedin.com/showcase/360verse/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
