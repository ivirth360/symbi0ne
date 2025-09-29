'use client';

import { SectionWrapper } from '../section-wrapper';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Leaf, Sparkles, ShieldCheck, Footprints } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: '100% Eco-Friendly',
    description:
      'All our products are crafted from sustainable bamboo and wood.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-secondary" />,
    title: 'CRI Personalisation',
    description:
      'Personalize products with your unique Cosmic Resonance Index (CRI).',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Unique Sigils & Glyphs',
    description:
      'Receive a unique Sigil and Glyph with your personalized items.',
  },
  {
      icon: <Footprints className="h-8 w-8 text-secondary" />,
      title: 'Carbon Footprint Report',
      description:
        'Get a Carbon Footprint Index (CFI) report with every purchase.',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function WhySymbion() {
  return (
    <SectionWrapper id="why-symbion" className="bg-muted/40">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
      >
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          Why SYMBI0N?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Experience the fusion of eco-craft and symbolic intelligence.
        </p>
      </motion.div>
      <motion.div
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={itemVariants}>
            <Card className="flex h-full flex-col text-center transition-all hover:shadow-lg hover:shadow-primary/10 bg-background">
              <CardHeader className="items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
