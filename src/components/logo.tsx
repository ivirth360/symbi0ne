import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="outline-none">
      <div className={cn('font-headline text-2xl font-bold tracking-wider', className)}>
        <span className="text-foreground transition-colors hover:text-primary">
          SYMBI<span className="text-secondary">0</span>N
        </span>
      </div>
    </Link>
  );
}
