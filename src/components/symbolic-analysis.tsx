'use client';

import { useState, useTransition } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { analyzeSymbolism } from '@/ai/flows/ai-symbolic-analysis';
import { Sparkles, Loader2, Wand2 } from 'lucide-react';
import { SectionWrapper } from './section-wrapper';
import { AnimatePresence, motion } from 'framer-motion';

export function SymbolicAnalysis() {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleAnalysis = () => {
    if (!text.trim()) {
      toast({
        title: 'Input Required',
        description: 'Please enter some text to analyze.',
        variant: 'destructive',
      });
      return;
    }

    startTransition(async () => {
      setAnalysis('');
      const result = await analyzeSymbolism({ text });
      if (result.analysis) {
        setAnalysis(result.analysis);
      } else {
        toast({
          title: 'Analysis Failed',
          description:
            'Could not generate symbolic analysis. Please try again.',
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <SectionWrapper id="analysis">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">
          AI-Powered Symbolic Analysis
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Uncover deeper layers of meaning. Our AI interprets the symbolic
          language behind your brand, art, or personal identity, providing
          profound insights into its resonance.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <Card className="border-primary/20 bg-card/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wand2 className="h-6 w-6 text-primary" />
              <span>Analysis Tool</span>
            </CardTitle>
            <CardDescription>
              Enter any text to reveal its symbolic undertones.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="e.g., The name of your brand, a poem, a dream..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={8}
              className="bg-background/50"
            />
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleAnalysis}
              disabled={isPending || !text.trim()}
              className="w-full"
            >
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Analyze Symbolism
            </Button>
          </CardFooter>
        </Card>
        <div className="relative min-h-[300px] rounded-lg border-2 border-dashed border-primary/30 bg-card/30 p-6">
          <AnimatePresence>
            {isPending ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex h-full flex-col items-center justify-center text-center text-primary"
              >
                <Sparkles className="h-12 w-12 animate-spin" />
                <p className="mt-4">Analyzing symbolic resonance...</p>
              </motion.div>
            ) : analysis ? (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="font-headline text-xl font-semibold text-accent">
                  Symbolic Analysis Result
                </h3>
                <p className="mt-4 whitespace-pre-wrap text-muted-foreground">
                  {analysis}
                </p>
              </motion.div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
                <Wand2 className="h-12 w-12" />
                <p className="mt-4">
                  Your AI-generated analysis will appear here.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
