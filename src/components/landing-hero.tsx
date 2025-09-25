'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function LandingHero() {
  return (
    <section className="relative overflow-hidden py-24 text-center md:py-32 lg:py-40">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, hsl(var(--primary-hsl)), transparent 60%)',
        }}
      />
      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 font-headline text-lg font-bold text-primary">
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
          className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="h-12 flex-grow text-base"
            asChild
          >
            <Link href="#contact">
              Reserve Your Identity <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 flex-grow rounded-full border-primary/50 text-base"
            asChild
          >
            <Link href="#about">
              Learn More <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
