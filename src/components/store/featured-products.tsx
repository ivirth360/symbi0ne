'use client';
import { SectionWrapper } from '@/components/section-wrapper';
import { ProductCard } from './product-card';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'bamboo-bottle',
    name: 'Bamboo Bottle',
    description: 'Best Seller',
    price: '₹899',
    imageUrl: 'https://picsum.photos/seed/bamboo-bottle/600/400',
    imageHint: 'bamboo bottle'
  },
  {
    id: 'cosmic-rings',
    name: 'Cosmic Rings',
    description: 'Elemental Resonance',
    price: '₹1,499',
    imageUrl: 'https://picsum.photos/seed/cosmic-rings/600/400',
    imageHint: 'wood epoxy ring'
  },
  {
    id: 'bamboo-diary',
    name: 'Bamboo Diary + Pen',
    description: 'Ritual Writing',
    price: '₹899',
    imageUrl: 'https://picsum.photos/seed/bamboo-diary/600/400',
    imageHint: 'bamboo diary pen'
  },
  {
    id: 'yodha-bot',
    name: 'Yodha Fight Bot',
    description: 'Rare B2B',
    price: 'From ₹6,000',
    imageUrl: 'https://picsum.photos/seed/yodha-bot/600/400',
    imageHint: 'wood robot'
  },
  {
    id: 'bamboo-mug',
    name: 'Bamboo Mug',
    description: 'Morning Ritual',
    price: '₹499',
    imageUrl: 'https://picsum.photos/seed/bamboo-mug/600/400',
    imageHint: 'bamboo mug'
  },
  {
    id: 'bamboo-tumblr',
    name: 'Bamboo Tumbler',
    description: 'Eco-conscious journeys',
    price: '₹799',
    imageUrl: 'https://picsum.photos/seed/bamboo-tumbler/600/400',
    imageHint: 'bamboo tumbler'
  },
  {
    id: 'skittles-game',
    name: 'Skittles Game',
    description: 'Heritage Play [B2B]',
    price: 'From ₹15,000',
    imageUrl: 'https://picsum.photos/seed/skittles-game/600/400',
    imageHint: 'wooden skittles'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function FeaturedProducts() {
  return (
    <SectionWrapper id="featured-products">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          Featured Products
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Discover our best-selling, symbolically enriched eco-friendly products.
        </p>
      </motion.div>
      <motion.div
        className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
