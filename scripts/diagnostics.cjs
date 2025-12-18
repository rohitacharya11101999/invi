#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const projectRoot = process.cwd();

function header(title) {
  console.log(`\n=== ${title} ===`);
}

header("Environment");
console.log(`Node.js version: ${process.version}`);
console.log(`Working directory: ${projectRoot}`);

header("Required Assets");
const requiredImages = [
  "public/images/haldi/haldi.png",
  "public/images/mehendi/mehendi.png",
  "public/images/sangeet/sangeet.png",
  "public/images/wedding/wedding.png",
];
let missing = false;
for (const relPath of requiredImages) {
  const fullPath = path.join(projectRoot, relPath);
  const exists = fs.existsSync(fullPath);
  console.log(`${relPath}: ${exists ? "OK" : "MISSING"}`);
  if (!exists) {
    missing = true;
  }
}
if (!missing) {
  console.log("All invite images are present.");
}

header("package.json scripts");
const pkg = JSON.parse(fs.readFileSync(path.join(projectRoot, "package.json"), "utf8"));
console.log(Object.keys(pkg.scripts).map((name) => ` - ${name}: ${pkg.scripts[name]}`).join("\n"));

header("Next.js configuration");
try {
  const configPath = path.join(projectRoot, "next.config.ts");
  const configSource = fs.readFileSync(configPath, "utf8");
  console.log("next.config.ts detected");
  console.log(`Size: ${configSource.length} bytes`);
} catch (error) {
  console.error("Unable to read next.config.ts", error);
}

header("Netlify configuration");
const netlifyPath = path.join(projectRoot, "netlify.toml");
if (fs.existsSync(netlifyPath)) {
  console.log("netlify.toml found");
  console.log(fs.readFileSync(netlifyPath, "utf8"));
} else {
  console.log("netlify.toml missing");
}

header("Summary");
if (missing) {
  console.log("❌ Missing required assets. Review the list above.");
} else {
  console.log("✅ Diagnostics complete. No missing assets detected.");
}
