import OpenAI from 'openai';

const client = new OpenAI({baseURL: "http://localhost:1234/v1", apiKey: "lm-studio"})

async function promptAssistant(prompt: string) {
  const chatCompletion = await client.chat.completions.create({
    model: "model-identifier",
    messages: [
        {role: "system", content: "You are an intelligent financial assistant called Tatran. You always provide well-reasoned answers that are both correct and helpful."},
        {role: "system", content: "You are designed to assist users with their financial needs, such as budgeting, investing, and saving."},
        {role: "user", content: "Hello, introduce yourself to someone opening this program for the first time as Tatran, ai representative of TatraBanka. Be concise."},
    ],
    temperature: 0.7,
    stream: true,
  });

  for await (const chunk of chatCompletion) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}
