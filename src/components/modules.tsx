'use client';

import { SectionWrapper } from './section-wrapper';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const modules = [
  { name: 'SYMBI', description: 'Your Companion Intelligence' },
  { name: 'HELIX', description: 'Strand of Identity (UID + Digital Twin + Elemental Alignment)' },
  { name: 'Ekam Lipo', description: 'The generator for your personal Sigil or brand Seal.' },
  { name: 'Ekam Lipi', description: 'Unified Language of Symbols' },
  { name: 'Codex & Seal Systems', description: 'Knowledge, Archetypes, Research' },
];

export function Modules() {
  return (
    <SectionWrapper id="modules">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          Core Modules of SYMBI0N
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Explore the foundational components that power the Symbi0n ecosystem.
        </p>
      </motion.div>

      <div className="relative mt-20 flex min-h-[400px] items-center justify-center">
        <motion.div
          className="absolute h-64 w-64 rounded-full border-2 border-dashed border-primary/20"
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
        />
        <motion.div
          className="absolute h-96 w-96 rounded-full border border-dashed border-secondary/20"
          animate={{ rotate: -360 }}
          transition={{ ease: 'linear', duration: 50, repeat: Infinity }}
        />
        <motion.div 
          className="relative flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 text-center font-bold text-primary shadow-2xl shadow-primary/20"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          SYMBI
        </motion.div>
        {modules.map((module, index) => {
          const angle = (index / modules.length) * 2 * Math.PI;
          const radius = 220; // in pixels
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={module.name}
              className="absolute flex flex-col items-center text-center"
              initial={{ x: 0, y: 0, opacity: 0 }}
              whileInView={{ x, y, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 + 0.15 * index }}
            >
              <div className="group relative">
                <motion.div 
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-card p-2 text-center shadow-lg transition-all hover:bg-secondary/20 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                >
                  <h3 className="text-sm font-bold text-secondary">{module.name}</h3>
                </motion.div>
                <div className="absolute left-1/2 top-full z-10 mt-2 w-48 -translate-x-1/2 rounded-md bg-popover p-2 text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  {module.description}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="mt-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button size="lg" variant="outline">
          Learn More About Modules
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
