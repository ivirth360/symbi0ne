'use client';
import Image from 'next/image';
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
import { Layers, List } from 'lucide-react';
import { motion } from 'framer-motion';

const assets = [
  {
    id: '1',
    name: 'Glyph of Ascendance',
    price: '1.5 ETH',
    type: 'Ekam Lipi',
    image: PlaceHolderImages.find((img) => img.id === 'glyph-1'),
  },
  {
    id: '2',
    name: 'Symbol of Harmony',
    price: '2.2 ETH',
    type: 'Lipi Glyph',
    image: PlaceHolderImages.find((img) => img.id === 'glyph-2'),
  },
  {
    id: '3',
    name: 'Cipher of the Cosmos',
    price: '3.0 ETH',
    type: 'Ekam Lipi',
    image: PlaceHolderImages.find((img) => img.id === 'glyph-3'),
  },
];

export function Marketplace() {
  return (
    <SectionWrapper id="marketplace">
      <div className="text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          Marketplace of Symbols
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Sell, showcase, and collect symbolic assets — digital & physical. Each asset is tracked with Ekam Lipi provenance, ensuring uniqueness.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {assets.map((asset) => (
          <Card
            key={asset.id}
            className="group overflow-hidden border-primary/20 bg-card/50 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
          >
            {asset.image && (
              <div className="overflow-hidden">
                <Image
                  src={asset.image.imageUrl}
                  alt={asset.image.description}
                  data-ai-hint={asset.image.imageHint}
                  width={600}
                  height={600}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{asset.name}</CardTitle>
                <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">{asset.type}</Badge>
              </div>
              <CardDescription className="pt-2 text-lg font-semibold text-primary">
                {asset.price}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A unique symbolic representation crafted within the Symbi0n
                ecosystem, holding deep personal and digital significance.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Layers className="mr-2 h-4 w-4" />
                Place Bid
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 flex justify-center gap-4">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          Browse Auction
        </Button>
        <Button size="lg" variant="outline">
          <List className="mr-2 h-4 w-4" />
          List Your Asset
        </Button>
      </div>
    </SectionWrapper>
  );
}
