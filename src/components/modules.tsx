
'use client';

import { SectionWrapper } from './section-wrapper';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const modules = [
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
        
        <div className="absolute inset-0">
          {modules.map((module, index) => {
            const angleOffset = Math.PI / 2; // Start from top
            return (
              <motion.div
                key={module.name}
                className="absolute left-1/2 top-1/2"
                style={{
                  transformOrigin: '0 0',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20 + index * 5,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              >
                <motion.div
                  className="group absolute flex flex-col items-center text-center"
                   style={{
                    transform: `translateX(-50%) translateY(-50%) rotate(${(index / modules.length) * 360}deg) translateX(220px) rotate(-${(index / modules.length) * 360}deg)`,
                    animationPlayState: 'running'
                  }}
                  whileHover={{ scale: 1.1, animationPlayState: 'paused' }}
                >
                    <div 
                      className="flex h-24 w-24 items-center justify-center rounded-full bg-card p-2 text-center shadow-lg transition-all group-hover:bg-secondary/20 group-hover:scale-110"
                    >
                      <h3 className="text-sm font-bold text-secondary">{module.name}</h3>
                    </div>
                    <div className="absolute left-1/2 top-full z-10 mt-2 w-48 -translate-x-1/2 rounded-md bg-popover p-2 text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                      {module.description}
                    </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
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

