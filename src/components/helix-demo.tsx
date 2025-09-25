'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sparkles, Dna } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionWrapper } from './section-wrapper';
import { AnimatePresence, motion } from 'framer-motion';

export function HelixDemo() {
  const [name, setName] = useState('');
  const [generated, setGenerated] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const helixImage = PlaceHolderImages.find(
    (img) => img.id === 'helix-demo-glyph'
  );

  const handleGenerate = () => {
    if (!name.trim()) return;
    setIsGenerating(true);
    setGenerated(false);
    setTimeout(() => {
      setGenerated(true);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <SectionWrapper id="helix">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            Interactive HELIX Demo
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Experience the birth of your digital twin. Enter your name to generate a
            preview of your personalized Ekam Lipi and Lipi glyph, the core of
            your Symbi0n identity.
          </p>
          <Card className="mt-8 border-primary/20 bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dna className="h-6 w-6 text-primary" />
                <span>Generate Your Glyph</span>
              </CardTitle>
              <CardDescription>
                See a unique visual representation of your digital essence.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 text-base"
                />
                <Button
                  type="submit"
                  size="lg"
                  onClick={handleGenerate}
                  disabled={isGenerating || !name.trim()}
                  className="animate-subtle-pulse"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  {isGenerating ? 'Generating...' : 'Generate'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex min-h-[400px] items-center justify-center rounded-lg border-2 border-dashed border-primary/30 bg-card/30 p-8">
          <AnimatePresence>
            {!generated && !isGenerating && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center text-muted-foreground"
              >
                <Dna className="mx-auto h-12 w-12" />
                <p className="mt-4">Your personalized glyph will appear here.</p>
              </motion.div>
            )}
            {isGenerating && (
              <motion.div
                key="generating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-primary"
              >
                <Sparkles className="mx-auto h-12 w-12 animate-spin" />
                <p className="mt-4">Crafting your unique HELIX...</p>
              </motion.div>
            )}
            {generated && helixImage && (
              <motion.div
                key="generated"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h3 className="font-headline text-2xl text-primary">
                  {name}'s HELIX
                </h3>
                <p className="mb-4 text-muted-foreground">Ekam Lipi Glyph</p>
                <Image
                  src={helixImage.imageUrl}
                  alt={helixImage.description}
                  data-ai-hint={helixImage.imageHint}
                  width={300}
                  height={300}
                  className="mx-auto rounded-full object-cover shadow-2xl shadow-primary/30 animate-in fade-in zoom-in-75 duration-700"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
