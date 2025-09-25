import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#helix', label: 'HELIX Demo' },
  { href: '#marketplace', label: 'Marketplace' },
  { href: '#analysis', label: 'Analysis' },
  { href: '#companion', label: 'Companion' },
  { href: '#membership', label: 'Membership' },
];

export function Header() {
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
          <Button variant="ghost">Log In</Button>
          <Button className="bg-accent hover:bg-accent/90">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
