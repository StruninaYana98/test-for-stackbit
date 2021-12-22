import fs from "fs";
import path from "path";

const pagesDirectory = path.join(process.cwd(), "content/pages/");

export function getPagesPaths() {
  let paths = [];
  searchPagesInFileSystem(pagesDirectory, "", paths);
  let slugs = getSlugs(paths);
  return slugs
}

function searchPagesInFileSystem(pagesPath, path, pathsArr) {
  fs.readdirSync(pagesPath + path).forEach((file) => {
    if (file.includes(".md")) {
      pathsArr.push(path + file.replace(".md", ""));
    } else {
      searchPagesInFileSystem(pagesPath, file + "/", pathsArr);
    }
  });
}

function getSlugs(paths) {
  let slugs = [];
  paths.forEach((path) => {
    let slug = path.split("/").filter((item) => item != "index");
    slugs.push({
        params:{
            slug: slug
        }
    });
  });
  return slugs
}
