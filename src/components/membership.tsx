'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { SectionWrapper } from './section-wrapper';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Individual Basic',
    price: '₹5,000',
    period: '/ year',
    features: ['HELIX ID Creation', 'SYMBI AI Companion', 'Basic Asset Wallet'],
    cta: 'Get Started',
    isPopular: false,
  },
  {
    name: 'Individual Pro',
    price: '₹15,000',
    period: '/ year',
    features: ['HELIX ID & Digital Twin', 'Full Asset Management', 'Marketplace Auction Access'],
    cta: 'Go Pro',
    isPopular: true,
  },
  {
    name: 'Brand Basic',
    price: '₹50,000',
    period: '/ year',
    features: ['Brand HELIX Identity', 'SYMBI AI Integration', 'Audience Insights'],
    cta: 'For Brands',
    isPopular: false,
  },
  {
    name: 'Brand Pro',
    price: '₹2,50,000',
    period: '/ year',
    features: ['Full Brand Identity Suite', 'SYMBI AI as a Service', 'Asset Monetization'],
    cta: 'Brand Pro',
    isPopular: false,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    period: '',
    features: ['Custom AI Solutions', 'Symbolic Modeling', 'Dedicated Research'],
    cta: 'Book Consultation',
    isPopular: false,
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


export function Membership() {
  return (
    <SectionWrapper id="membership">
      <motion.div 
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={itemVariants}
      >
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          Join the Symbolic Awakening
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Choose the membership tier that aligns with your journey into the symbolic economy. Unlock powerful tools for identity, creation, and growth.
        </p>
      </motion.div>
      <motion.div 
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
      >
        {tiers.map((tier) => (
          <motion.div key={tier.name} variants={itemVariants}>
            <Card
              className={cn(
                'flex h-full flex-col transition-all hover:shadow-lg hover:shadow-primary/10',
                tier.isPopular ? 'border-2 border-accent shadow-2xl shadow-accent/10' : 'border-border'
              )}
            >
              <CardHeader>
                {tier.isPopular && (
                  <div className="mb-2 text-center text-sm font-semibold text-accent">
                    Most Popular
                  </div>
                )}
                <CardTitle className="text-center text-2xl">{tier.name}</CardTitle>
                <CardDescription className="text-center text-4xl font-bold text-foreground">
                  {tier.price}
                  <span className="text-base font-normal text-muted-foreground">
                    {tier.period}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className={cn(
                    'w-full',
                    tier.isPopular || tier.cta === 'Book Consultation' ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''
                  )}
                  variant={tier.isPopular ? 'default' : 'outline'}
                >
                  <Link href="#contact">
                    {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
