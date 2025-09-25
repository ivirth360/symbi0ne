import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo className="text-xl" />
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Symbi0n. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
