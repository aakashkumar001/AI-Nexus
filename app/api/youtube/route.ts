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
      "x-rapidapi-key": "390729af46msh7b07557baa7bc37p14270ajsndc8cbbaf3852",
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
