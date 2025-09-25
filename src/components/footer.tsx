import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <Logo className="text-xl" />
          <p className="mt-4 text-sm text-muted-foreground">
            The world’s first symbolic intelligence ecosystem.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-headline text-lg font-semibold">About</h4>
          <Link href="#about" className="text-muted-foreground hover:text-foreground">
            iViRTH / SYMBI0N
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-headline text-lg font-semibold">Legal</h4>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground">
            Membership Licenses
          </Link>
        </div>
        <div>
          <h4 className="font-headline text-lg font-semibold">
            Subscribe for Symbolic Updates
          </h4>
          <div className="mt-2 flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" className="bg-card" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Symbi0n. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Instagram
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Pinterest
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
