'use client';

import { SectionWrapper } from './section-wrapper';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Sparkles, Leaf, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const indexes = [
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Cosmic Resonance Index',
    description:
      'Measures the alignment of your digital identity with universal symbolic patterns, enhancing resonance and impact.',
  },
  {
    icon: <Leaf className="h-8 w-8 text-green-500" />,
    title: 'Carbon Footprint Index',
    description:
      'Tracks the environmental impact of your digital activities within the ecosystem, promoting sustainability.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-secondary" />,
    title: 'Quantum Development Index',
    description:
      'Gauges the complexity and evolution of your HELIX identity, reflecting your growth in the digital and symbolic realms.',
  },
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

export function Indexes() {
  return (
    <SectionWrapper id="indexes">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
      >
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          SYMBI0N Indexes
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Track your growth, impact, and alignment within the symbolic economy with our proprietary indexes.
        </p>
      </motion.div>
      <motion.div
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {indexes.map((index) => (
          <motion.div key={index.title} variants={itemVariants}>
            <Card className="flex h-full flex-col text-center transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                  {index.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">{index.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">
                  {index.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
