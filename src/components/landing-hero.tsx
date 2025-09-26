'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function LandingHero() {
  return (
    <section className="relative overflow-hidden py-24 text-center md:py-32 lg:py-40">
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, hsl(var(--primary-hsl)), transparent 60%)',
        }}
      />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 font-headline text-lg font-bold text-primary">
            🔮 Your AI Companion, Your Personal Sigil, Your Brand Seal.
          </div>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            <span className="text-gradient">
              SYMBI0N: Where Digital Identity Meets Symbolic Intelligence
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Unleash the power of symbols. We translate the code of your identity into conscious, resonant experiences, transforming brand storytelling, human-AI interaction, and the very fabric of your digital presence.
          </p>
          <p className="mt-4 text-muted-foreground">
            Join the awakening. The future of digital identity launches Diwali 2025.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-10 flex w-full max-w-sm flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto flex-grow"
            asChild
          >
            <Link href="https://publika.in/forms/helix" target="_blank" rel="noopener noreferrer">
              Reserve Your Identity <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto flex-grow"
            asChild
          >
            <Link href="#about">
              Explore The Ecosystem <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
