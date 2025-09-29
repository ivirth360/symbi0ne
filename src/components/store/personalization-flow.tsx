'use client';
import { SectionWrapper } from '../section-wrapper';
import { Card, CardContent } from '../ui/card';
import { User, Sparkles, Scan, Pen, Eye, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <User className="h-8 w-8" />,
    title: 'Step 1: Provide Details',
    description: 'Enter your name and birth details to begin your journey.',
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Step 2: Receive Your CRI',
    description: 'Our AI calculates your Cosmic Resonance Index (CRI) profile.',
  },
  {
    icon: <Scan className="h-8 w-8" />,
    title: 'Step 3: Choose Product',
    description: 'Select from our range of eco-friendly, resonant products.',
  },
  {
    icon: <Pen className="h-8 w-8" />,
    title: 'Step 4: Select Engraving',
    description: 'Personalize with your unique Sigil, Glyph, and Initials.',
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: 'Step 5: Preview Your Design',
    description: 'Visualize your final personalized product before ordering.',
  },
  {
    icon: <Package className="h-8 w-8" />,
    title: 'Step 6: Checkout',
    description:
      'Complete your order and receive a Certificate of Authentication.',
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

export function PersonalizationFlow() {
  return (
    <SectionWrapper id="personalization-flow">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
      >
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          Your Personalization Journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Follow these simple steps to create a product that is uniquely yours,
          aligned with your symbolic identity.
        </p>
      </motion.div>
      <motion.div
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step, index) => (
          <motion.div key={step.title} variants={itemVariants}>
            <Card className="flex h-full flex-col text-center transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="flex flex-col items-center p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
