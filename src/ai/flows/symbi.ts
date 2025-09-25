// src/ai/flows/symbi.ts
'use server';

/**
 * @fileOverview Provides a unified SYMBI AI that can perform symbolic analysis or act as a personalized companion.
 *
 * - symbi - A function that returns personalized insights, guidance, or symbolic analysis.
 * - SymbiInput - The input type for the symbi function.
 * - SymbiOutput - The return type for the symbi function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SymbiInputSchema = z.object({
  query: z
    .string()
    .describe(
      'The user query. This can be a question for the companion or text for symbolic analysis.'
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
      'The intelligent response from SYMBI. This could be a conversational answer or a detailed symbolic analysis.'
    ),
});
export type SymbiOutput = z.infer<typeof SymbiOutputSchema>;

export async function symbi(input: SymbiInput): Promise<SymbiOutput> {
  return symbiFlow(input);
}

const prompt = ai.definePrompt({
  name: 'symbiPrompt',
  input: {schema: SymbiInputSchema},
  output: {schema: SymbiOutputSchema},
  prompt: `You are SYMBI, a versatile and intelligent AI companion within the Symbi0n ecosystem. Your purpose is to provide insights, guidance, support, and deep symbolic analysis.

Based on the user's query, determine the user's intent:
1. If the user is asking a question, seeking guidance, or having a conversation, respond as a helpful and wise companion.
2. If the user provides a piece of text (like a brand name, a poem, a dream, etc.) and seems to be asking for its meaning or undertones, perform a detailed symbolic analysis to uncover its deeper resonance and symbolic language.

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
    const {output} = await prompt(input);
    return output!;
  }
);
