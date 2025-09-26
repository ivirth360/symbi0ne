'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionWrapper } from './section-wrapper';
import { ArrowRight, Layers, List } from 'lucide-react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const backgroundImage = PlaceHolderImages.find((img) => img.id === 'auction-bg');

export function Marketplace() {
  return (
    <SectionWrapper id="marketplace" className="relative !py-24 md:!py-32">
       {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          data-ai-hint={backgroundImage.imageHint}
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background/60" />
      <motion.div 
        className="relative z-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
      >
        <h2 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
          Symbolic Asset Auction
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          A curated marketplace for acquiring and listing unique physical, digital, and symbolic collections. Secure your piece of the symbolic economy, with provenance guaranteed by Ekam Lipi.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="https://publika.in/forms/helix" target="_blank" rel="noopener noreferrer">
                    <Layers className="mr-2 h-4 w-4" />
                    Express Interest to Buy
                </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="https://publika.in/forms/helix" target="_blank" rel="noopener noreferrer">
                    <List className="mr-2 h-4 w-4" />
                    Apply to List Your Asset
                </Link>
            </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
