import { NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(String(process.env.GEMINI_API_KEY));
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request: NextRequest) {
  const body = await request.json();

  const result = await model.generateContent(body.prompt);
  console.log(result);
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
