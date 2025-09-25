'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function LandingHero() {
  return (
    <section className="relative overflow-hidden py-24 text-center md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="absolute h-full w-full animate-glow rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute left-1/4 top-1/4 h-1/2 w-1/2 animate-glow rounded-full bg-secondary/10 blur-3xl animation-delay-[-2s]"></div>
      </div>
      <div className="container relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 font-headline text-lg text-primary">
            🔮 Your Companion, Your Seal, Your Universe.
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient">
              SYMBI0N – The World’s First Symbolic Intelligence Ecosystem
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            From Code to Consciousness. From Words to Symbols.
          </p>
          <p className="mt-4 text-muted-foreground">
            Join the awakening this Diwali 2025.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="h-12 flex-grow rounded-full text-base text-accent-foreground animate-subtle-pulse"
          >
            Reserve Your Identity <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 flex-grow rounded-full border-primary/50 text-base"
          >
            Learn More <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
