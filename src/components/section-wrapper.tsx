import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function SectionWrapper({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('container mx-auto px-4 py-16 md:px-6 md:py-24', className)}>
      {children}
    </section>
  );
}
