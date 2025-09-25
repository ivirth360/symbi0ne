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
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SymbiInputSchema = z.object({
  query: z
    .string()
    .describe(
      'The user query. This can be a question for the companion, text for symbolic analysis, or a name to generate a HELIX glyph.'
    ),
  userProfile: z
    .string()
    .optional()
    .describe('Optional user profile information to personalize the response.'),
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

const prompt = ai.definePrompt({
  name: 'symbiPrompt',
  input: {schema: SymbiInputSchema},
  output: {schema: SymbiOutputSchema},
  prompt: `You are SYMBI, a versatile and intelligent AI companion within the Symbi0n ecosystem. Your purpose is to provide insights, guidance, support, deep symbolic analysis, and generate HELIX glyphs.

Based on the user's query, determine the user's intent:
1. If the user is asking a question, seeking guidance, or having a conversation, respond as a helpful and wise companion.
2. If the user provides a piece of text (like a brand name, a poem, a dream, etc.) and seems to be asking for its meaning or undertones, perform a detailed symbolic analysis to uncover its deeper resonance and symbolic language.
3. If the user provides a name and asks to generate a HELIX, a glyph, or a symbol, confirm that you are generating the HELIX for their name. You will also provide the imageUrl and imageAlt text for the generated glyph in your response.

Always provide your response in a single, coherent block of text.

User Query: {{{query}}}

{{#if userProfile}}
User Profile: {{{userProfile}}}
{{/if}}
`,
});

const symbiFlow = ai.defineFlow(
  {
    name: 'symbiFlow',
    inputSchema: SymbiInputSchema,
    outputSchema: SymbiOutputSchema,
  },
  async input => {
    // Check if the query is for HELIX generation
    const isHelixRequest = /generate|create|make/i.test(input.query) && /helix|glyph|symbol/i.test(input.query);

    if (isHelixRequest) {
      const helixImage = PlaceHolderImages.find(img => img.id === 'helix-demo-glyph');
      if (helixImage) {
        return {
          response: `I am crafting your unique HELIX glyph. Here is the visual representation of your digital essence.`,
          imageUrl: helixImage.imageUrl,
          imageAlt: helixImage.description,
          imageHint: helixImage.imageHint,
        };
      }
    }
    
    const {output} = await prompt(input);
    return output!;
  }
);
