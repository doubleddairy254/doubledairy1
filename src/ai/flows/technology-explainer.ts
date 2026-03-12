'use server';
/**
 * @fileOverview An AI agent that provides jargon-free explanations for mobile technologies.
 *
 * - technologyExplainer - A function that handles the explanation process for a given technology.
 * - TechnologyExplainerInput - The input type for the technologyExplainer function.
 * - TechnologyExplainerOutput - The return type for the technologyExplainer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TechnologyExplainerInputSchema = z.object({
  technology: z
    .string()
    .describe('The name of the mobile technology to explain.'),
});
export type TechnologyExplainerInput = z.infer<typeof TechnologyExplainerInputSchema>;

const TechnologyExplainerOutputSchema = z.object({
  shortExplanation: z
    .string()
    .describe('A short, jargon-free explanation of the technology.'),
});
export type TechnologyExplainerOutput = z.infer<typeof TechnologyExplainerOutputSchema>;

export async function technologyExplainer(
  input: TechnologyExplainerInput
): Promise<TechnologyExplainerOutput> {
  return technologyExplainerFlow(input);
}

const explainTechnologyPrompt = ai.definePrompt({
  name: 'explainTechnologyPrompt',
  input: {schema: TechnologyExplainerInputSchema},
  output: {schema: TechnologyExplainerOutputSchema},
  prompt: `You are an AI assistant specialized in explaining complex mobile technologies in a simple, jargon-free way for a general audience. Your goal is to make the technology understandable and highlight its core purpose or benefit without using overly technical terms.

Explain the following mobile technology:

Technology: {{{technology}}}

Provide a concise explanation, focusing on clarity and ease of understanding.`,
});

const technologyExplainerFlow = ai.defineFlow(
  {
    name: 'technologyExplainerFlow',
    inputSchema: TechnologyExplainerInputSchema,
    outputSchema: TechnologyExplainerOutputSchema,
  },
  async input => {
    const {output} = await explainTechnologyPrompt(input);
    return output!;
  }
);
