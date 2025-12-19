import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Naomina121's RSS Feed",
    description: "Latest articles from Naomina121.com",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.mdx")),
    customData: `<language>en-us</language>`,
  });
}
