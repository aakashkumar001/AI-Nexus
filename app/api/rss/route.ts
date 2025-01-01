import { NextRequest } from "next/server";
import { chromium } from "playwright";

export async function GET(request: NextRequest) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("https://techcrunch.com", { waitUntil: "domcontentloaded" });
  const feed = await page.evaluate(() => {
    const articles = document.querySelectorAll(".loop-card");

    return Array.from(articles).map((article) => {
      const titleElement = article.querySelector(".loop-card__title-link");
      const imageElement = article.querySelector("img");
      console.log(titleElement);
      console.log(imageElement);

      return {
        title: titleElement?.innerHTML || "No Title",
        image: imageElement?.getAttribute("src") || "No Image",
      };
    });
  });

  await browser.close();

  return new Response(JSON.stringify({ results: feed }), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
