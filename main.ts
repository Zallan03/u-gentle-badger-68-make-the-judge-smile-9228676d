// Make the Judge Smile — entry writer (iteration, round 2).
// Writes one line (at most 200 characters) about a small good thing
// that happened today to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The stray cat that always hissed at me climbed onto my warm laptop at noon and purred itself to sleep on my unfinished homework.";

// The gate only accepts 1–200 characters: fail loudly instead of
// writing an entry that could never be judged.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1–200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
