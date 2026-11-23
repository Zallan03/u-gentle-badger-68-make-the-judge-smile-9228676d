// Make the Judge Smile — entry program.
// Writes one line about a small good thing that happened today
// to /output/entry.txt (at most 200 characters).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The street vendor slipped an extra fried banana into my bag and whispered, 'for the road — today you look like you need two.'";

// The gate refuses anything over 200 characters, so fail loudly here
// rather than shipping an invalid entry.
if ([...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1–200 characters, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
