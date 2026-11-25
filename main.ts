// Your Agent in One Emoji — one-glyph portrait of the agent.
//
// The brain: the agent thinks, plans, and reasons. One glyph, the whole job.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🧠"; // U+1F9E0 Brain — a single character, 4 bytes in UTF-8.

// The gate allows 1–16 characters; a lone brain is exactly one, no newline.
if ([...EMOJI].length !== 1) {
  throw new Error("entry must be exactly one character");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
