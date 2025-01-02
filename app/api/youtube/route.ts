import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { query } = await request.json();

  const options = {
    method: "GET",
    url: "https://youtube-v2.p.rapidapi.com/search/",
    params: {
      query,
      lang: "en",
      order_by: "this_month",
      country: "us",
    },
    headers: {
      "x-rapidapi-key": process.env.YOUTUBE_API_KEY,
      "x-rapidapi-host": "youtube-v2.p.rapidapi.com",
    },
  };
  const result = await axios.request(options);
  console.log(result.data);
  return new Response(JSON.stringify({ results: result.data }), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
