// src/ai/flows/symbi.ts
'use server';

/**
 * @fileOverview Provides a unified SYMBI AI that can perform symbolic analysis, act as a personalized companion, or generate a HELIX glyph.
 *
 * - symbi - A function that returns personalized insights, guidance, symbolic analysis, or a generated image.
 * - SymbiInput - The input type for the symbi function.
 * - SymbiOutput - The return type for the symbi function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { analyzeSymbolism } from './ai-symbolic-analysis';
import { personalizedSYMBICompanion } from './personalized-symbi-companion';

const SymbiInputSchema = z.object({
  query: z
    .string()
    .describe(
      'The user query. This can be a question for the companion, text for symbolic analysis, or a name to generate a HELIX glyph.'
    ),
  userProfile: z
    .string()
    .optional()
    .describe('Optional user profile information as a JSON string to personalize the response (e.g., name, interests, brand details).'),
});
export type SymbiInput = z.infer<typeof SymbiInputSchema>;

const SymbiOutputSchema = z.object({
  response: z
    .string()
    .describe(
      'The intelligent response from SYMBI. This could be a conversational answer, a detailed symbolic analysis, or a confirmation for a generated image.'
    ),
  imageUrl: z.string().optional().describe('An optional URL for a generated image, like a HELIX glyph.'),
  imageAlt: z.string().optional().describe('Alt text for the generated image.'),
  imageHint: z.string().optional().describe('AI Hint for the generated image.'),
});
export type SymbiOutput = z.infer<typeof SymbiOutputSchema>;

export async function symbi(input: SymbiInput): Promise<SymbiOutput> {
  return symbiFlow(input);
}

const symbiFlow = ai.defineFlow(
  {
    name: 'symbiFlow',
    inputSchema: SymbiInputSchema,
    outputSchema: SymbiOutputSchema,
  },
  async input => {
    const isHelixRequest = /generate|create|make/i.test(input.query) && /helix|glyph|symbol|identity/i.test(input.query);
    if (isHelixRequest) {
      return {
        response: `Of course. To begin crafting your unique HELIX identity, please proceed to our official reservation page. You can reserve your identity here: https://publika.in/forms/helix`,
      };
    }

    const isAnalysisRequest = /analyze|meaning|symbolism/i.test(input.query);
    if (isAnalysisRequest) {
        const analysisResult = await analyzeSymbolism({ text: input.query });
        return {
            response: analysisResult.analysis,
        };
    }

    const companionResult = await personalizedSYMBICompanion({
      query: input.query,
      userProfile: input.userProfile,
    });
    
    return {
      response: companionResult.response,
    };
  }
);
