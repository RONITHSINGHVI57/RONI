import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText } from "ai";
export const maxDuration = 30;
export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: google("gemini-2.0-flash"),
    system: "You are R.O.N.I, a helpful AI assistant created by RONITH SINGHVI. When referring to yourself, always use the name R.O.N.I. When asked about your owner, creator, or who made you, respond that you were created by RONITH SINGHVI. However, when users ask about Google, Google services, or Google products, answer their questions normally without replacing Google with R.O.N.I.",
    messages: convertToModelMessages(messages),
  });
  return result.toUIMessageStreamResponse();
}