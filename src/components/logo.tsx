import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="outline-none">
      <div className={cn('font-headline text-2xl font-bold tracking-wider', className)}>
        <span className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
          SYMBI<span className="text-accent">0</span>N
        </span>
      </div>
    </Link>
  );
}
