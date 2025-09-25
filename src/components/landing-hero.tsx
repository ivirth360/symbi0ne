'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, ChevronRight, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';

export function LandingHero() {
  const [identity, setIdentity] = useState('');

  return (
    <section className="relative overflow-hidden py-24 text-center md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background/50"></div>
        <div className="absolute h-full w-full animate-glow rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute left-1/4 top-1/4 h-1/2 w-1/2 animate-glow rounded-full bg-accent/10 blur-3xl animation-delay-[-2s]"></div>
      </div>
      <div className="container relative mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            variant="outline"
            className="mb-6 rounded-full border-primary/30 bg-primary/10 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary/20"
          >
            The Future of Identity is Here <ChevronRight className="ml-2 h-4 w-4" />
          </Button>

          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Unlock Your Digital Soul with{' '}
            <span className="relative inline-block">
              Symbi
              <span className="text-accent">0</span>
              n
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent"></span>
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Reserve your unique SYMBI0N identity and create your HELIX—an
            indivisible synthesis of UID, Digital Twin, and Elemental
            Alignment.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row"
        >
          <div className="relative flex-grow">
            <Fingerprint className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Choose your identity..."
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
              className="h-12 w-full rounded-full bg-card/80 pl-10 text-base"
            />
          </div>
          <Button size="lg" className="h-12 flex-shrink-0 rounded-full text-base animate-subtle-pulse">
            Reserve My Identity <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
