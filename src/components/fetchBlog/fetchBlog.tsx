import puppeteer from "puppeteer";

const url = "https://www.fespak.com/blogs/";

export async function fetchBlogData() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  const data = await page.evaluate(() => {
    const posts = document.querySelectorAll(".w-grid-item-h");
    const blogData: any[] = [];

    posts.forEach((post) => {
      const postLinkElement = post.querySelector(".w-grid-item-anchor") as HTMLAnchorElement;
      const imageLinkElement = post.querySelector(".w-post-elm.post_image img") as HTMLImageElement;
      const postTitleElement = post.querySelector(".w-post-elm.post_title a") as HTMLAnchorElement;
      const postDateElement = post.querySelector(".w-post-elm.post_date");
      const categoryElement = post.querySelector(".w-post-elm.post_taxonomy a") as HTMLAnchorElement;

      const postLink = postLinkElement ? postLinkElement.href : "N/A";
      const imageLink = imageLinkElement ? imageLinkElement.src : "N/A";
      const postTitle = postTitleElement ? postTitleElement.textContent : "N/A";
      const postDate = postDateElement ? postDateElement.textContent : "N/A";
      const category = categoryElement ? categoryElement.textContent : "N/A";

      blogData.push({
        postLink,
        imageLink,
        postTitle,
        postDate,
        category,
      });
    });

    return blogData;
  });

  await browser.close();
  return data;
}