
'use client';
import { useState } from 'react';
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
import { Switch } from './ui/switch';
import { Label } from './ui/label';

const tiersData = {
  annual: [
    {
      name: 'Individual',
      price: '₹19,999',
      period: '/ year',
      features: [
        'HELIX ID Creation',
        'Personalized SYMBI Companion',
        'Basic Asset Wallet',
        'Basic Daily Routine Analysis',
        'Create your own digital space',
      ],
      cta: 'Get Started',
      isPopular: false,
    },
    {
      name: 'Brand',
      price: '₹1,99,999',
      period: '/ year',
      features: [
        'Brand HELIX Identity',
        'SYMBI AI Integration & Insights',
        'Symbolic Audience Analysis',
        'Brand-level Data Analysis',
        'Create your own digital space',
      ],
      cta: 'For Brands',
      isPopular: false,
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      period: '',
      features: [
        'Custom Symbolic AI Solutions',
        'Proprietary Symbolic Modeling',
        'Full Data & Privacy Control',
        'Dedicated Research & Support',
      ],
      cta: 'Book Consultation',
      isPopular: true,
    },
  ],
  monthly: [
    {
      name: 'Individual',
      price: '₹1,999',
      period: '/ month',
      features: [
        'HELIX ID Creation',
        'Personalized SYMBI Companion',
        'Basic Asset Wallet',
        'Basic Daily Routine Analysis',
        'Create your own digital space',
      ],
      cta: 'Get Started',
      isPopular: false,
    },
    {
      name: 'Brand',
      price: '₹19,999',
      period: '/ month',
      features: [
        'Brand HELIX Identity',
        'SYMBI AI Integration & Insights',
        'Symbolic Audience Analysis',
        'Brand-level Data Analysis',
        'Create your own digital space',
      ],
      cta: 'For Brands',
      isPopular: false,
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      period: '',
      features: [
        'Custom Symbolic AI Solutions',
        'Proprietary Symbolic Modeling',
        'Full Data & Privacy Control',
        'Dedicated Research & Support',
      ],
      cta: 'Book Consultation',
      isPopular: true,
    },
  ]
};

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
  const [isAnnual, setIsAnnual] = useState(true);
  const tiers = isAnnual ? tiersData.annual : tiersData.monthly;

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
          Choose the membership tier that aligns with your journey. Unlock powerful tools for identity, creation, and growth in the symbolic economy.
        </p>
      </motion.div>

      <motion.div
        className="my-8 flex items-center justify-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
      >
        <Label htmlFor="billing-cycle" className={cn(!isAnnual && 'text-muted-foreground')}>
          Monthly
        </Label>
        <Switch
          id="billing-cycle"
          checked={isAnnual}
          onCheckedChange={setIsAnnual}
          aria-label="Toggle between monthly and annual billing"
        />
        <Label htmlFor="billing-cycle" className={cn(isAnnual && 'text-muted-foreground')}>
          Annual (Save 20%)
        </Label>
      </motion.div>

      <motion.div 
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
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
                      <span className="text-sm text-muted-foreground">{feature}</span>
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
                  <Link href="https://publika.in/forms/helix" target="_blank" rel="noopener noreferrer">
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
