'use client';

import { SectionWrapper } from './section-wrapper';
import { Dna, Bot, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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


export function About() {
  return (
    <SectionWrapper id="about">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
            <h2 className="font-headline text-4xl font-bold md:text-5xl">
            Awakening Your Symbolic Intelligence
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            SYMBI0N is a living ecosystem designed to bridge your physical, digital, and symbolic worlds. We provide the tools to translate your core essence into a powerful, verifiable, and interactive digital identity.
            </p>
             <p className="mt-4 max-w-xl text-muted-foreground">
            By analyzing everything from your brand's mission to your personal routines, our AI uncovers the latent symbolic language that creates profound resonance, powers personalized digital spaces, and offers deep, actionable insights.
            </p>
        </motion.div>
        <motion.div 
            className="grid grid-cols-2 gap-8"
            variants={containerVariants}
        >
            <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">Ekam Lipo & Lipi</h3>
                <p className="mt-2 text-sm text-muted-foreground">The Unified Symbol (Ekam Lipo) and its universal language (Ekam Lipi) form the foundation of our symbolic universe, ensuring meaning and provenance for every digital asset.</p>
            </motion.div>
            <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <Bot className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">SYMBI AI Companion</h3>
                <p className="mt-2 text-sm text-muted-foreground">Your hyper-intelligent AI draws insights from your daily routines and unique HELIX identity to offer deep symbolic analysis and personalized guidance.</p>
            </motion.div>
            <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Dna className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">HELIX Identity</h3>
                <p className="mt-2 text-sm text-muted-foreground">Your unique digital twin, weaving personal data and brand essence into a verifiable digital asset that powers your personalized experience.</p>
            </motion.div>
            <motion.div className="flex flex-col items-center text-center" variants={itemVariants}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="m4 13.5 4-4 4 4"/><path d="M4 8.5 8 12"/></svg>
                </div>
                <h3 className="mt-4 text-xl font-bold">Sigil &amp; Seal</h3>
                <p className="mt-2 text-sm text-muted-foreground">Your unique personal symbol (Sigil) or brand symbol (Seal), providing a visual anchor for your digital identity.</p>
            </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
