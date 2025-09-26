
import type { ReactNode } from 'react';

export function LegalPageLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <header className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter md:text-5xl">
            {title}
          </h1>
        </header>
        <article className="prose prose-neutral mx-auto dark:prose-invert prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
          {children}
        </article>
      </div>
    </div>
  );
}
