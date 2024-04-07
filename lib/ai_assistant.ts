import { CohereClient } from "cohere-ai";
import { getUserQuestionnaire } from "./db_mongo";
import { getSession } from "@auth0/nextjs-auth0";

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

export async function getAssistantResponse(prompt: string): Promise<string> {
  const session = await getSession();
  const id = session?.user.sub.substring(6) || "";

  let userdata = "";
  if (id !== "") {
      let questionnaire = await getUserQuestionnaire(id);
      let interests = questionnaire?.get("interests") || "BEGINNER";
      let risk = questionnaire?.get("risk") || "MEDIUM";
      let length = questionnaire?.get("length") || "MEDIUM";
      let investmentAmount = questionnaire?.get("investment") || "10";
      let goal = questionnaire?.get("goal")?.name || "AMG C63";
      let goalValue = questionnaire?.get("goal")?.value || "123000";
      userdata = `THIS IS USERDATA: experience-${interests}, length of investment - ${length}, investment amount (in thousands) - ${investmentAmount}, risk - ${risk}, goal - ${goal}, goal value - ${goalValue}.`;
  }

  const text = `THIS IS YOUR SYSTEM CONTEXT: You are an intelligent financial assistant called Tatran. You are designed to assist users with their financial needs, such as budgeting, investing, and saving. Give the best advice you can, recommend specific stocks and never recommend other specialists. Don't talk about you being a large language model. Use short answers, up to 60 words. ${userdata} THIS IS YOUR USER PROMPT: ` + prompt;
  const prediction = await cohere.generate({
    prompt: text,
    maxTokens: 100
  });

  const txt = prediction.generations[0].text
  return txt.includes(".") ? txt.substring(0, txt.lastIndexOf(".")+1) : txt;
}
