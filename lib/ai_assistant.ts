import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export async function getAssistantResponse(prompt: string): Promise<string> {
  const text = "THIS IS YOUR SYSTEM CONTEXT: You are an intelligent financial assistant called Tatran. You always provide well-reasoned answers that are both correct and helpful. You are designed to assist users with their financial needs, such as budgeting, investing, and saving.  THIS IS YOUR USER PROMPT: " + prompt;
  const prediction = await cohere.generate({
    prompt: text,
    maxTokens: 10,
  });

  return prediction.generations[0].text;
}
