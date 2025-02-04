
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

// Define your scraping logic
const fetchDetailsFromLink = async () => {
  const puppeteer = require("puppeteer");

  const url = "https://www.bbc.com/news";
  const browser = await puppeteer.launch({ headless: true });
  const pageObj = await browser.newPage();

  await pageObj.goto(url, { waitUntil: "networkidle2" });

  const details = await pageObj.evaluate(() => {
    const headings = document.querySelectorAll(".sc-8ea7699c-0 h2");
    const descriptions = document.querySelectorAll(".sc-b8778340-4");
    const times = document.querySelectorAll(
      '.sc-6fba5bd4-0 span[data-testid="card-metadata-lastupdated"]',
    );
    const locations = document.querySelectorAll(
      '.sc-6fba5bd4-0 span[data-testid="card-metadata-tag"]',
    );
    const images = document.querySelectorAll(".sc-a34861b-1 img");
    const articleLinks = Array.from(
      document.querySelectorAll(
        'div[data-testid="anchor-inner-wrapper"] a[data-testid="internal-link"]',
      ),
    )
      .map((a: any) => a.href)
      .filter((link: string) => link.includes("/news/articles/"));

    const data = [];
    for (let index = 0; index < headings.length; index++) {
      const heading = headings[index];
      const description = descriptions[index];
      const time = times[index];
      const location = locations[index];
      const image = images[index];
      const articleLink = articleLinks[index];

      data.push({
        heading: heading ? heading.textContent.trim() : "N/A",
        description: description ? description.textContent.trim() : "N/A",
        time: time ? time.textContent.trim() : "N/A",
        location: location ? location.textContent.trim() : "N/A",
        imageUrl:
          image && (image as HTMLImageElement).src
            ? (image as HTMLImageElement).src
            : "N/A",
        articleLink: articleLink ? articleLink : "N/A",
      });
    }
    return data;
  });

  await browser.close();
  return details;
};

export default async function NewsPage() {
  const allNews = await fetchDetailsFromLink();

  return (
    <div>
      <Breadcrumb
        pageName="Latest News"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allNews.map((article, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
            >
              {/* Only render the image if the URL is not "N/A" */}
              {article.imageUrl && article.imageUrl !== "N/A" && (
                <Link href={article.articleLink} passHref>
                  <Image
                    src={article.imageUrl}
                    alt={article.heading}
                    className="h-48 w-full object-cover"
                    width={500}
                    height={300}
                  />
                </Link>
              )}

              {/* If the image URL is "N/A", don't render the image or the placeholder */}
              {article.imageUrl === "N/A" && (
                <div className="hidden h-48 w-full bg-gray-300">
                  No Image Available
                </div>
              )}

              <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                <h3>
                  <Link
                    href={article.articleLink}
                    passHref
                    className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                  >
                    {article.heading}
                  </Link>
                </h3>
                <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                  {article.description}
                </p>
                {/* Time, Location, and Read More with separator */}
                <div className="mb-4 flex items-center text-sm text-gray-500">
                  <p>{article.time}</p>
                  <span className="mx-2">|</span>
                  <p>{article.location}</p>
                  <span className="mx-2">|</span>
                  <a
                    href={article.articleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
