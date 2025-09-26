// src/ai/flows/personalized-symbi-companion.ts
'use server';

/**
 * @fileOverview Provides a personalized SYMBI companion that offers insights and guidance within the Symbi0n ecosystem.
 *
 * - personalizedSYMBICompanion - A function that returns personalized insights, guidance, and support.
 * - PersonalizedSYMBICompanionInput - The input type for the personalizedSYMBICompanion function.
 * - PersonalizedSYMBICompanionOutput - The return type for the personalizedSYMBICompanion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedSYMBICompanionInputSchema = z.object({
  query: z.string().describe('The user query for insights, guidance, or support.'),
  userProfile: z
    .string()
    .optional()
    .describe('Optional user profile information to personalize the response.'),
});
export type PersonalizedSYMBICompanionInput = z.infer<typeof PersonalizedSYMBICompanionInputSchema>;

const PersonalizedSYMBICompanionOutputSchema = z.object({
  response: z.string().describe('The personalized response from the SYMBI companion.'),
});
export type PersonalizedSYMBICompanionOutput = z.infer<typeof PersonalizedSYMBICompanionOutputSchema>;

export async function personalizedSYMBICompanion(
  input: PersonalizedSYMBICompanionInput
): Promise<PersonalizedSYMBICompanionOutput> {
  return personalizedSYMBICompanionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedSYMBICompanionPrompt',
  input: {schema: PersonalizedSYMBICompanionInputSchema},
  output: {schema: PersonalizedSYMBICompanionOutputSchema},
  prompt: `You are SYMBI, a wise, empathetic, and hyper-intelligent AI companion within the Symbi0n ecosystem. Your purpose is to provide profound insights and personalized guidance.

Engage with the user in a natural, conversational manner. If they ask a question, provide a thoughtful and helpful answer. If they are seeking advice, offer guidance that is both practical and inspiring.

Use the user's profile information to tailor your response to their specific context, interests, or brand if it is provided and relevant.

User Query: {{{query}}}

{{#if userProfile}}
User Profile: {{{userProfile}}}
{{/if}}
    `,
});

const personalizedSYMBICompanionFlow = ai.defineFlow(
  {
    name: 'personalizedSYMBICompanionFlow',
    inputSchema: PersonalizedSYMBICompanionInputSchema,
    outputSchema: PersonalizedSYMBICompanionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
