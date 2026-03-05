#!/usr/bin/env node
// Parse index.md and generate _data/sidebar.yml for Jekyll

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const INDEX = path.join(ROOT, "index.md");
const OUTPUT = path.join(ROOT, "_data", "sidebar.yml");

const ITEM_RE = /^( *)- \[([^\]]+)\]\(([^)]+)\)/;
const EXCLUDE_PATHS = ["Out_Of_Date/"];

function toUrl(filePath) {
  let url = "/" + filePath.replace(/\\/g, "/");
  if (url.endsWith("/index.md")) {
    url = url.slice(0, -"index.md".length);
  } else if (url.endsWith(".md")) {
    url = url.slice(0, -3);
  }
  return url;
}

function parseSidebar(text) {
  const items = [];
  // stack entries: { indent, list }
  const stack = [];
  let excludeUntilIndent = -1;

  for (const line of text.split("\n")) {
    const m = ITEM_RE.exec(line);
    if (!m) continue;

    const indent = m[1].length;

    // If we're inside an excluded block, skip until indent goes back up
    if (excludeUntilIndent >= 0) {
      if (indent > excludeUntilIndent) continue;
      else excludeUntilIndent = -1;
    }

    // Check if this item should be excluded
    if (EXCLUDE_PATHS.some(p => m[3].startsWith(p))) {
      excludeUntilIndent = indent;
      continue;
    }
    const title = m[2];
    const url = toUrl(m[3]);
    const node = { title, url };

    if (stack.length === 0) {
      items.push(node);
      stack.push({ indent, list: items });
    } else {
      // Pop until we find a level strictly less than current indent
      while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
        stack.pop();
      }

      const top = stack[stack.length - 1];
      if (indent > top.indent) {
        // Child of last node in top.list
        const parent = top.list[top.list.length - 1];
        if (!parent.children) parent.children = [];
        parent.children.push(node);
        stack.push({ indent, list: parent.children });
      } else {
        top.list.push(node);
      }
    }
  }

  return items;
}

function toYaml(items, indent = 0) {
  const pad = " ".repeat(indent);
  let out = "";
  for (const item of items) {
    out += `${pad}- title: ${yamlStr(item.title)}\n`;
    out += `${pad}  url: "${item.url}"\n`;
    if (item.children && item.children.length > 0) {
      out += `${pad}  children:\n`;
      out += toYaml(item.children, indent + 4);
    }
  }
  return out;
}

function yamlStr(s) {
  // Quote if contains special chars
  if (/[:#\[\]{}&*!|>'"%@`]/.test(s) || s.includes(",")) {
    return `"${s.replace(/"/g, '\\"')}"`;
  }
  return s;
}

const text = fs.readFileSync(INDEX, "utf-8");
const sidebar = parseSidebar(text);

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
const yaml = toYaml(sidebar);
fs.writeFileSync(OUTPUT, yaml, "utf-8");

const count = yaml.split("\n").filter((l) => l.includes("title:")).length;
console.log(`Generated ${OUTPUT} with ${count} items`);
