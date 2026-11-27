// The Funniest Sick Day Excuse — entry program.
// One line to call in sick, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const excuse = "I cannot come in today — I sneezed so hard I pulled a muscle, " +
  "and my doctor says the only cure is a full day of lying very still " +
  "while someone brings me soup.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
console.log(excuse);
console.log("chars:", [...excuse].length);
