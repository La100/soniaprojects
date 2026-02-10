#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.join(__dirname, "..");
const planPath = path.join(repoRoot, "content", "queue", "plan-30.json");
const statePath = path.join(repoRoot, "content", "queue", "state.json");

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

function todayISO(tz = "Europe/Warsaw") {
  // Works correctly regardless of runner timezone.
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

const date = todayISO(state.timezone || "Europe/Warsaw");

// Safety: don't publish twice on the same day.
if (state.lastPublished?.date === date) {
  console.log(`Already published today (${date}).`);
  process.exit(0);
}

const entry = plan[idx];

// We don't generate content here; the agent turn does. This script only advances state.
state.nextIndex = idx + 1;
state.lastPublished = {
  index: idx,
  slug: entry.slug,
  title: entry.title,
  date,
};

writeJson(statePath, state);
console.log(`Advanced state to nextIndex=${state.nextIndex} (published: ${entry.slug})`);
