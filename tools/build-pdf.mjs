// Makes the printable manual: one PDF per language, from the same chapters
// as the website.
//
//   node tools/build-pdf.mjs          both languages
//   node tools/build-pdf.mjs nl       one language
//
// The result is static/pdf/kweenb-manual-<language>.pdf, which the website
// offers as a download. Needs Google Chrome on this computer (it does the
// printing); nothing else is installed.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { marked } from "marked";
import { openWindow, sleep } from "./window.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const CHROME =
  process.env.CHROME ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PORT = 9341;

const LANGUAGES = {
  en: {
    folder: path.join(ROOT, "docs", "manual"),
    title: "Manual",
    subtitle: "Working with KweenB, the bees and the satellite",
    contents: "Contents",
    chapter: "Chapter",
    page: "page",
    edition: (date) => `Edition of ${date}`,
    online: "The newest version of this manual is online:",
    locale: "en-GB",
  },
  nl: {
    folder: path.join(ROOT, "i18n", "nl", "docusaurus-plugin-content-docs", "current", "manual"),
    title: "Handleiding",
    subtitle: "Werken met KweenB, de bees en de satelliet",
    contents: "Inhoud",
    chapter: "Hoofdstuk",
    page: "pagina",
    edition: (date) => `Uitgave van ${date}`,
    online: "De nieuwste versie van deze handleiding staat online:",
    locale: "nl-BE",
  },
};
const SITE = "zwerm3-docs.onrender.com";

/** Width and height of a PNG, from its first bytes */
const pngSize = (file) => {
  const header = Buffer.alloc(24);
  const handle = fs.openSync(file, "r");
  fs.readSync(handle, header, 0, 24, 0);
  fs.closeSync(handle);
  return { width: header.readUInt32BE(16), height: header.readUInt32BE(20) };
};

const escape = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** One chapter (a Markdown file) as HTML */
const chapterHtml = (markdown, number, words) => {
  // :::note … ::: blocks
  const blocks = [];
  markdown = markdown.replace(
    /^:::(note|tip|warning|info|danger)[^\n]*\n([\s\S]*?)\n:::\s*$/gm,
    (_, kind, inside) => {
      blocks.push(`<aside class="box box-${kind}">${marked.parse(inside)}</aside>`);
      return `\n\nBOXPLACEHOLDER${blocks.length - 1}\n\n`;
    }
  );
  let html = marked.parse(markdown);
  html = html.replace(/<p>BOXPLACEHOLDER(\d+)<\/p>/g, (_, i) => blocks[Number(i)]);

  // the title of the chapter
  let title = "";
  html = html.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/, (_, inside) => {
    title = inside;
    return `<header class="opener"><div class="opener-number">${words.chapter} ${number}</div><h1>${inside}</h1></header>`;
  });

  // links to other chapters become links inside the PDF
  html = html.replace(/href="\.\/(\d\d)-[^"]*\.md"/g, 'href="#chapter-$1"');

  // pictures: from the website's folder, at a size that fits the page, and
  // kept together with the numbered list that explains them
  html = html.replace(
    /<p><img src="(\/img\/[^"]+)" alt="([^"]*)"\s*\/?><\/p>(\s*<ol>[\s\S]*?<\/ol>)?/g,
    (_, src, alt, legend = "") => {
      const file = path.join(ROOT, "static", src);
      const { width, height } = pngSize(file);
      // a full window (2400 pixels) fills the width of the text, but a
      // tall picture may not become higher than about two thirds of a page
      const fits = Math.round(((165 * width) / height / 172) * 100);
      const share = Math.min(100, fits, Math.round((width / 2400) * 100));
      return `<figure><img src="${pathToFileURL(file)}" alt="${alt}" style="width:${Math.max(share, Math.min(45, fits))}%">${
        legend ? legend.replace("<ol>", '<ol class="legend">') : ""
      }</figure>`;
    }
  );
  return { html: `<section class="chapter" id="chapter-${String(number).padStart(2, "0")}">${html}</section>`, title };
};

const page = (body, words, { contentsHtml = "", cover = true } = {}) => `<!doctype html>
<html lang="${words.locale.slice(0, 2)}">
<head>
<meta charset="utf-8">
<title>KweenB · ${words.title}</title>
<style>${fs.readFileSync(path.join(ROOT, "tools", "pdf.css"), "utf8")}</style>
</head>
<body>
${cover ? coverHtml(words) : ""}
${contentsHtml}
${body}
</body>
</html>`;

const coverHtml = (words) => {
  const date = new Date().toLocaleDateString(words.locale, { month: "long", year: "numeric" });
  const logo = fs.readFileSync(path.join(ROOT, "static", "img", "logo_dark.svg"), "utf8").replace(/<\?xml[^>]*>/, "");
  return `<section class="cover">
  <div class="cover-logo">${logo}</div>
  <div class="cover-words">
    <div class="cover-product">KweenB</div>
    <div class="cover-title">${words.title}</div>
    <div class="cover-subtitle">${words.subtitle}</div>
  </div>
  <div class="cover-foot">
    <div>Zwerm3 · aifoon</div>
    <div>${words.edition(date)}</div>
    <div class="cover-online">${words.online} <b>${SITE}</b></div>
  </div>
</section>`;
};

/** Print an HTML file to PDF and tell how many pages it has */
const print = async (window, htmlFile, pdfFile) => {
  await window.send("Page.navigate", { url: pathToFileURL(htmlFile).href });
  await sleep(1500);
  await window.run(`Promise.all([...document.images].map((i) => i.decode().catch(() => {}))).then(() => true)`);
  const { data } = await window.send("Page.printToPDF", {
    printBackground: true,
    preferCSSPageSize: true,
  });
  const pdf = Buffer.from(data, "base64");
  fs.writeFileSync(pdfFile, pdf);
  return (pdf.toString("latin1").match(/\/Type\s*\/Page\b(?!s)/g) || []).length;
};

const build = async (window, language) => {
  const words = LANGUAGES[language];
  if (!fs.existsSync(words.folder)) {
    console.warn(`No chapters for "${language}" (${words.folder}), skipped.`);
    return;
  }
  const work = fs.mkdtempSync(path.join(os.tmpdir(), "kweenb-manual-"));
  const files = fs.readdirSync(words.folder).filter((f) => /^\d\d-.*\.md$/.test(f)).sort();
  const chapters = files.map((f, i) =>
    chapterHtml(fs.readFileSync(path.join(words.folder, f), "utf8"), i + 1, words)
  );

  // How many pages each chapter takes: print each one on its own. That
  // gives the page numbers for the table of contents.
  const lengths = [];
  for (const [i, chapter] of chapters.entries()) {
    const file = path.join(work, `chapter-${i}.html`);
    fs.writeFileSync(file, page(chapter.html, words, { cover: false }));
    lengths.push(await print(window, file, path.join(work, `chapter-${i}.pdf`)));
  }
  let at = 3; // the cover and the contents come first
  const rows = chapters.map((chapter, i) => {
    const row = `<a class="contents-row" href="#chapter-${String(i + 1).padStart(2, "0")}"><span class="contents-number">${i + 1}</span><span class="contents-title">${chapter.title}</span><span class="contents-dots"></span><span class="contents-page">${at}</span></a>`;
    at += lengths[i];
    return row;
  });
  const contentsHtml = `<section class="contents"><h1>${words.contents}</h1>${rows.join("\n")}</section>`;

  const file = path.join(work, "manual.html");
  fs.writeFileSync(file, page(chapters.map((c) => c.html).join("\n"), words, { contentsHtml }));
  const target = path.join(ROOT, "static", "pdf", `kweenb-manual-${language}.pdf`);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const pages = await print(window, file, target);
  console.log(`${path.relative(ROOT, target)}: ${pages} pages (expected ${at - 1})`);
  fs.rmSync(work, { recursive: true, force: true });
};

// ---- a Chrome of our own to do the printing ----
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "kweenb-manual-chrome-"));
const chrome = spawn(
  CHROME,
  ["--headless=new", `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, "--no-first-run", "about:blank"],
  { stdio: "ignore" }
);
try {
  let window = null;
  for (let i = 0; i < 40 && !window; i++) {
    await sleep(500);
    window = await openWindow(PORT).catch(() => null);
  }
  if (!window) throw new Error("Chrome did not start.");
  for (const language of process.argv[2] ? [process.argv[2]] : Object.keys(LANGUAGES))
    await build(window, language);
  window.close();
} finally {
  chrome.kill();
  await sleep(500);
  fs.rmSync(profile, { recursive: true, force: true });
}
