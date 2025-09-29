'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const backgroundImage = PlaceHolderImages.find((img) => img.id === 'store-hero-bg');

export function StoreHero() {
  return (
    <section className="relative overflow-hidden py-24 text-center md:py-32 lg:py-40">
      {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          data-ai-hint={backgroundImage.imageHint}
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        />
      )}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background/50" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            <span className="text-gradient">
              Align Your Life with Cosmic Resonance
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold text-foreground/80 md:text-xl">
            Eco-friendly | Personalised | Symbolically Enriched
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-10 flex w-full max-w-xs flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto flex-grow"
            asChild
          >
            <Link href="#featured-products">
              Shop Now
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto flex-grow"
            asChild
          >
            <Link href="#why-symbion">
              Discover Your CRI
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
