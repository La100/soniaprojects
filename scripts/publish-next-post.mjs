#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.join(__dirname, "..");
const planPath = path.join(repoRoot, "content", "queue", "plan-30.json");
const statePath = path.join(repoRoot, "content", "queue", "state.json");

const queuePostsDir = path.join(repoRoot, "content", "queue", "posts");
const blogDir = path.join(repoRoot, "content", "blog");

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

function todayISO(tz = "Europe/Warsaw") {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const yyyy = parts.find((p) => p.type === "year")?.value;
  const mm = parts.find((p) => p.type === "month")?.value;
  const dd = parts.find((p) => p.type === "day")?.value;
  if (!yyyy || !mm || !dd) throw new Error("Failed to format date parts");
  return `${yyyy}-${mm}-${dd}`;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function publishFromQueue({ slug, title, date }) {
  ensureDir(queuePostsDir);
  ensureDir(blogDir);

  const src = path.join(queuePostsDir, `${slug}.mdx`);
  if (!fs.existsSync(src)) {
    throw new Error(
      `Missing queued post file: ${path.relative(repoRoot, src)}.\n` +
        `Put drafts in content/queue/posts/<slug>.mdx before running publish.`
    );
  }

  const raw = fs.readFileSync(src, "utf8");
  const parsed = matter(raw);

  const data = { ...(parsed.data || {}) };
  data.title = data.title || title;
  data.date = date;

  const out = matter.stringify(parsed.content.trimStart(), data);

  const dest = path.join(blogDir, `${slug}.mdx`);
  fs.writeFileSync(dest, out.trimEnd() + "\n", "utf8");

  return { src, dest };
}

const plan = readJson(planPath);
const state = readJson(statePath);

if (!Array.isArray(plan) || plan.length === 0) {
  console.error("Plan is empty.");
  process.exit(1);
}

const idx = state.nextIndex ?? 0;
if (idx >= plan.length) {
  console.log("All posts already published.");
  process.exit(0);
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const dateArg = args.find((a) => a.startsWith("--date="))?.slice("--date=".length);

const date = dateArg || todayISO(state.timezone || "Europe/Warsaw");

// Safety: don't publish twice on the same day unless forced.
if (!force && state.lastPublished?.date === date) {
  console.log(`Already published today (${date}). Use --force to override.`);
  process.exit(0);
}

const entry = plan[idx];
const { dest } = publishFromQueue({ slug: entry.slug, title: entry.title, date });

state.nextIndex = idx + 1;
state.lastPublished = {
  index: idx,
  slug: entry.slug,
  title: entry.title,
  date,
  file: path.relative(repoRoot, dest),
};

writeJson(statePath, state);
console.log(
  `Published ${entry.slug} -> ${path.relative(repoRoot, dest)} and advanced state to nextIndex=${state.nextIndex}`
);
