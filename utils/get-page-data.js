import fs from "fs";
import path from "path";
import matter from "gray-matter";

const pagesDirectory = path.join(process.cwd(), "content/pages/");
const dataPath = path.join(process.cwd(), "content/data");

export function getPageData(slug) {
  const pagePath = slug?.join("/") ? slug?.join("/") : "index";
  const fullPath = path.join(pagesDirectory, pagePath + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  return { site: JSON.parse(getSiteConfig()), page: { ...matterResult.data } };
}

function getSiteConfig() {
  const fullPath = path.join(dataPath, "config.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return fileContents;
}
