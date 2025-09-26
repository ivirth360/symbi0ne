
'use client';

import { SectionWrapper } from './section-wrapper';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const innerModules = [
  { name: 'HELIX', description: 'The Strand of Identity: Your unique, verifiable, and evolving digital twin.' },
  { name: 'SOMA', description: 'The Body of Experience: The living embodiment of your physical and digital presence.' },
  { name: 'EKAM', description: 'The Soul of Unity: The principle of oneness, ensuring a coherent and integrated identity.' },
];

const outerModules = [
  { name: 'ONE', description: 'The Foundation: Your singular, verifiable self in the digital universe.' },
  { name: '360', description: 'The Ecosystem View: Holistic, 360-degree insights into your symbolic world.' },
  { name: '360ne', description: 'The Unified Vision: A singular, all-encompassing perspective powering predictive intelligence.' },
]

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

      <div className="relative mt-20 flex min-h-[500px] items-center justify-center">
        {/* Orbital Paths */}
        <motion.div
          className="absolute h-[280px] w-[280px] rounded-full border-2 border-dashed border-primary/20"
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
        />
        <motion.div
          className="absolute h-[480px] w-[480px] rounded-full border border-dashed border-secondary/20"
          animate={{ rotate: -360 }}
          transition={{ ease: 'linear', duration: 60, repeat: Infinity }}
        />

        {/* Central Sun */}
        <motion.div
          className="relative flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 text-center font-bold text-primary shadow-2xl shadow-primary/20"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          SYMBI
        </motion.div>

        {/* Inner Planets */}
        <div className="absolute inset-0">
          {innerModules.map((module, index) => {
            const angle = (index / innerModules.length) * 360;
            return (
              <motion.div
                key={module.name}
                className="absolute left-1/2 top-1/2"
                style={{ transformOrigin: '0 0' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
              >
                <motion.div
                  className="group absolute flex flex-col items-center text-center"
                  style={{
                    transform: `rotate(${angle}deg) translateX(140px) rotate(-${angle}deg)`,
                  }}
                  whileHover={{ scale: 1.1, zIndex: 10, animationPlayState: 'paused' }}
                >
                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-full bg-card p-2 text-center shadow-lg transition-all group-hover:bg-primary/20 group-hover:scale-110"
                  >
                    <h3 className="text-sm font-bold text-primary">{module.name}</h3>
                  </div>
                  <div className="absolute left-1/2 top-full z-10 mt-2 w-48 -translate-x-1/2 rounded-md bg-popover p-2 text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {module.description}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Outer Planets */}
        <div className="absolute inset-0">
          {outerModules.map((module, index) => {
            const angle = (index / outerModules.length) * 360;
            return (
              <motion.div
                key={module.name}
                className="absolute left-1/2 top-1/2"
                style={{ transformOrigin: '0 0' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
              >
                <motion.div
                  className="group absolute flex flex-col items-center text-center"
                  style={{
                    transform: `rotate(${angle}deg) translateX(240px) rotate(-${angle}deg)`,
                  }}
                  whileHover={{ scale: 1.1, zIndex: 10, animationPlayState: 'paused' }}
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
