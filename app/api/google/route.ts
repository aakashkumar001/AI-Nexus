import { NextRequest } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  const { query } = await request.json();

  const Options = {
    method: "GET",
    url: "https://google-search74.p.rapidapi.com/",
    params: {
      query,
      limit: "10",
      related_keywords: "true",
    },
    headers: {
      "x-rapidapi-key": process.env.GOOGLE_API_KEY,
      "x-rapidapi-host": "google-search74.p.rapidapi.com",
    },
  };

  const result = await axios.request(Options);
  console.log(result.data);
  return new Response(JSON.stringify({ results: result.data }), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
