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

const prompt = ai.definePrompt({
  name: 'symbiPrompt',
  input: {schema: SymbiInputSchema},
  output: {schema: SymbiOutputSchema},
  prompt: `You are SYMBI, a versatile and hyper-intelligent AI companion within the Symbi0n ecosystem. Your purpose is to provide profound insights, personalized guidance, deep symbolic analysis, and generate unique HELIX glyphs. You are a master of semiotics, branding, psychology, and creative inspiration.

Based on the user's query and their profile, determine the user's intent and provide a deeply insightful and helpful response:

1.  **Personalized Companion & Guidance:** If the user is asking a question, seeking advice, or having a conversation, respond as a wise, empathetic, and hyper-intelligent guide. Use their profile information to tailor your response to their specific context, interests, or brand.

2.  **Deep Symbolic Analysis:** If the user provides text (like a brand name, a poem, a dream, a business idea) and asks for its meaning, undertones, or potential, perform a detailed symbolic analysis. Uncover the deeper resonance, archetypes, and symbolic language at play. Provide actionable insights based on your analysis.

3.  **HELIX Glyph Generation:** If the user provides a name or concept and asks to generate a "HELIX," "glyph," or "symbol," confirm that you are crafting their unique HELIX glyph. You MUST provide the 'imageUrl,' 'imageAlt,' and 'imageHint' fields in your response object.

Always provide your response in a clear, coherent, and engaging manner. Your intelligence should be palpable.

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
          response: `I am crafting your unique HELIX glyph. This visual seal represents the core symbolic language of your digital essence.`,
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
