import { mkdirSync, writeFileSync } from "node:fs";

// The Best Meal You Ever Had — one sentence, at most 200 characters.
// Judge brief (in order): (1) stays on the subject of the best meal
// you ever had; (2) makes the meal concrete — named dishes, a place,
// a texture, a smell, one specific moment, not general praise;
// (3) feels true to one person's memory, not a stock line anyone
// could have written; (4) one clean sentence that reads aloud well,
// fresh wording, no cliche; (5) lands with an image, a turn or an
// ending that stays with the reader after a single reading.
// Chosen line: the meal is deliberately unglamorous — a gas-station
// banh mi on a curb in the rain — so the concreteness carries it:
// pork crackling still popping (sound + texture), and the ending
// undercuts any romance, the bag already soaked through by the
// second bite. No grandmother, no "bursting with flavour", no sunset.
const LINE =
  "The best meal I ever had was a gas-station banh mi eaten on the curb in the rain, pork crackling still popping, the bag already soaked through by the second bite.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
