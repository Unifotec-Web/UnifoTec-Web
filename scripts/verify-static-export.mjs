import { existsSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "index.html",
  "about/index.html",
  "services/index.html",
  "projects/index.html",
  "process/index.html",
  "team/index.html",
  "contact/index.html",
  "privacy/index.html",
  "terms/index.html",
  "start-project/index.html",
  "sitemap.xml",
  "robots.txt",
  ".htaccess",
];

const missing = requiredFiles.filter((file) => !existsSync(join("out", file)));

if (missing.length > 0) {
  console.error(`Static export is missing: ${missing.join(", ")}`);
  process.exit(1);
}

for (const removed of ["blog/index.html", "dashboard/index.html"]) {
  if (existsSync(join("out", removed))) {
    console.error(`Removed route was exported: ${removed}`);
    process.exit(1);
  }
}

console.log(`Static export verified: ${requiredFiles.length} required files present.`);
