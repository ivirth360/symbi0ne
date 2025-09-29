'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '../ui/badge';

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageHint: string;
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

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/10">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              data-ai-hint={product.imageHint}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="text-xl">{product.name}</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <p className="text-lg font-bold">{product.price}</p>
          <Button size="sm">Buy Now</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
