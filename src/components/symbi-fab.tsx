
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function SymbiFAB() {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: 'SYMBI AI Companion',
      description: 'Coming soon. The future of personalized AI is on its way.',
    });
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <Button
        className="animate-subtle-pulse fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-2xl shadow-accent/40"
        onClick={handleClick}
        aria-label="Open SYMBI Chat"
      >
        <Sparkles className="h-8 w-8" />
      </Button>
    </motion.div>
  );
}
