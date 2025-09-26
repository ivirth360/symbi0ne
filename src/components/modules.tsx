
'use client';

import { SectionWrapper } from './section-wrapper';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Asterisk } from 'lucide-react';

const innerModules = [
  { name: 'HELIX', description: 'The Strand of Identity: Your unique, verifiable, and evolving digital twin.' },
  { name: 'SOMA', description: 'The Body of Experience: The living embodiment of your physical and digital presence.' },
  { name: 'EKAM', description: 'The Soul of Unity: The principle of oneness, ensuring a coherent and integrated identity.' },
];

const outerModules = [
  { name: 'ONE', description: 'The Foundation: Your singular, verifiable self in the digital universe.' },
  { name: '360', description: 'The Ecosystem View: Holistic, 360-degree insights into your symbolic world.' },
  { name: '360NE', description: 'The Unified Vision: A singular, all-encompassing perspective powering predictive intelligence.' },
]

export function Modules() {
  const isMobile = useIsMobile();

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

      {isMobile ? (
        <div className="mt-12 space-y-8">
            <Card className="text-center bg-primary/5 border-primary/20">
                <CardHeader>
                    <CardTitle className="text-primary">Inner Ring</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {innerModules.map(module => (
                        <div key={module.name}>
                            <h3 className="font-bold text-lg text-primary">{module.name}</h3>
                            <p className="text-sm text-muted-foreground">{module.description}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
            <Card className="text-center bg-secondary/5 border-secondary/20">
                <CardHeader>
                    <CardTitle className="text-secondary">Outer Ring</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {outerModules.map(module => (
                        <div key={module.name}>
                            <h3 className="font-bold text-lg text-secondary">{module.name}</h3>
                            <p className="text-sm text-muted-foreground">{module.description}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      ) : (
        <div className="relative mt-12 flex h-[500px] w-full items-center justify-center lg:h-[600px] lg:mt-20">
          {/* Orbital Paths */}
          <motion.div
            className="absolute h-[240px] w-[240px] rounded-full border border-dashed border-primary/30 md:h-[320px] md:w-[320px]"
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 60, repeat: Infinity }}
          />
          <motion.div
            className="absolute h-[420px] w-[420px] rounded-full border border-dashed border-secondary/30 md:h-[560px] md:w-[560px]"
            animate={{ rotate: -360 }}
            transition={{ ease: 'linear', duration: 120, repeat: Infinity }}
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
                  transition={{ duration: 60, ease: 'linear', repeat: Infinity, delay: -20 * index }}
                >
                  <motion.div
                    className="group absolute"
                    style={{
                      transform: `rotate(${angle}deg) translateX(160px) rotate(-${angle}deg)`,
                    }}
                    whileHover={{ scale: 1.15, zIndex: 10, transition: { duration: 0.2 } }}
                  >
                    <div
                      className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-full bg-card p-2 text-center shadow-lg transition-all group-hover:bg-primary/10"
                    >
                      <Asterisk className="h-6 w-6 text-primary/70 transition-colors group-hover:text-primary" />
                      <h3 className="mt-1 text-sm font-bold text-primary/80 transition-colors group-hover:text-primary">{module.name}</h3>
                    </div>
                    <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-48 -translate-x-1/2 rounded-md bg-popover p-3 text-center text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                      <p className="font-bold">{module.name}</p>
                      <p>{module.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Outer Planets */}
          <div className="absolute inset-0">
            {outerModules.map((module, index) => {
              const angle = 15 + (index / outerModules.length) * 360;
              return (
                <motion.div
                  key={module.name}
                  className="absolute left-1/2 top-1/2"
                  style={{ transformOrigin: '0 0' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 120, ease: 'linear', repeat: Infinity, delay: -40 * index }}
                >
                  <motion.div
                    className="group absolute"
                    style={{
                      transform: `rotate(${angle}deg) translateX(280px) rotate(-${angle}deg)`,
                    }}
                    whileHover={{ scale: 1.15, zIndex: 10, transition: { duration: 0.2 } }}
                  >
                    <div
                      className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-full bg-card p-2 text-center shadow-lg transition-all group-hover:bg-secondary/10"
                    >
                      <Asterisk className="h-6 w-6 text-secondary/70 transition-colors group-hover:text-secondary" />
                      <h3 className="mt-1 text-sm font-bold text-secondary/80 transition-colors group-hover:text-secondary">{module.name}</h3>
                    </div>
                    <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-48 -translate-x-1/2 rounded-md bg-popover p-3 text-center text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                      <p className="font-bold">{module.name}</p>
                      <p>{module.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Button size="lg" variant="outline">
          Learn More About The Modules
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
