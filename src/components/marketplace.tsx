'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionWrapper } from './section-wrapper';
import { Layers, List, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const featuredAsset = {
  id: '1',
  name: 'Glyph of Ascendance',
  price: '₹1,25,000',
  type: 'Ekam Lipi',
  endDate: 'This week',
  image: PlaceHolderImages.find((img) => img.id === 'glyph-1'),
};


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

export function Marketplace() {
  return (
    <SectionWrapper id="marketplace">
      <motion.div 
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
      >
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          Featured Auction of the Week
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Sell, showcase, and collect symbolic assets — digital & physical. Each asset is tracked with Ekam Lipi provenance, ensuring uniqueness.
        </p>
      </motion.div>
      <motion.div 
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
      >
        {featuredAsset.image && (
             <motion.div className="md:col-span-2" variants={itemVariants}>
                <Card
                    className="group overflow-hidden border-primary/20 bg-card/50 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                >
                    <div className="overflow-hidden">
                    <Image
                        src={featuredAsset.image.imageUrl}
                        alt={featuredAsset.image.description}
                        data-ai-hint={featuredAsset.image.imageHint}
                        width={600}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    </div>
                </Card>
             </motion.div>
        )}
        <motion.div className="md:col-span-3" variants={itemVariants}>
             <Card
              className="group flex flex-col justify-between h-full overflow-hidden border-primary/20 bg-card/50 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-3xl">{featuredAsset.name}</CardTitle>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">{featuredAsset.type}</Badge>
                </div>
                <CardDescription className="pt-2 text-2xl font-semibold text-primary">
                  {featuredAsset.price}
                </CardDescription>
                 <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Auction ends: {featuredAsset.endDate}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  A unique symbolic representation crafted within the Symbi0n
                  ecosystem, holding deep personal and digital significance. This featured glyph is a one-of-a-kind asset available for a limited time.
                </p>
              </CardContent>
              <CardFooter className="flex-col items-start gap-4 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="#contact">
                    <Layers className="mr-2 h-4 w-4" />
                    Place Bid
                  </Link>
                </Button>
                 <Button asChild size="lg" variant="outline" className="w-full sm-w-auto">
                    <Link href="#contact">
                      <List className="mr-2 h-4 w-4" />
                      List Your Asset
                    </Link>
                </Button>
              </CardFooter>
            </Card>
        </motion.div>

      </motion.div>
    </SectionWrapper>
  );
}
