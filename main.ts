import { mkdirSync, writeFileSync } from "node:fs";

// One Word for Your Wi-Fi — make.fun entry (program/v1).
// The chosen word: "Liar".
//
// Why this word: home Wi-Fi's most recognisable lie is showing full signal
// while nothing loads. It claims to be connected and then does nothing —
// it looks you in the eye and lies. One word, four letters, funny the
// instant you read it, no explanation needed.
const WORD = "Liar";

// The output is exactly the word and nothing else: no trailing newline,
// no extra whitespace, so the file is byte-identical on every run.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Sanity check at authoring time (not a runtime dependency): the gate
// requires 1-20 UTF-8 characters, not only whitespace.
if (WORD.length < 1 || WORD.length > 20 || WORD.trim().length === 0) {
  throw new Error("chosen word fails the 1-20 character gate");
}
