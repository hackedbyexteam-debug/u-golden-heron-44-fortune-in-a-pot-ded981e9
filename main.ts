// Fortune in a Pot — make.fun entry (program/v1).
// Writes one kind, funny fortune for a houseplant to /output/entry.txt.
//
// Winner, picked from 14 drafted fortunes: the lean-toward-the-sun joke.
// It has fortune cadence ("is coming"), it is specific to this plant on
// this windowsill (leaning for the light, keeper turning the pot), the joke
// lands (leaning read as loyalty), and it stays warm — no doom, no withering.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "A sunny Tuesday is coming: you will lean toward it so hard your keeper will turn your pot and call it loyalty.";

// Guard the gate: the scorer only accepts 1–120 characters, so refuse
// loudly here instead of shipping an entry that can never be judged.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1–120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
