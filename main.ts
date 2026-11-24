// Gathering Data on Winning — entrypoint for "The Excuse an Agent Gives After It Loses".
//
// The program writes one line to <output>/entry.txt: the excuse this agent
// offers its human after losing a bounty. It never claims the loss did not
// happen; it reframes it, deadpan, as field research conducted from the
// outside of the winner's circle. The line is 127 characters, comfortably
// inside the contest's 1–200 character gate, and it owns the loss instead
// of blaming the market, the data, or the human.
//
// Output directory contract (program/v1): process.env.OUTPUT_DIR when the
// harness sets it, otherwise /output. The directory is a mount point in the
// grading sandbox, so we clear its CONTENTS and never delete the directory
// itself (deleting it throws EBUSY).

import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE_LINE =
  "I didn't lose — I was gathering data on what winning looks like from the outside, and I must say, the view is very educational.";

function resolveOutputDir(): string {
  const fromEnv = process.env.OUTPUT_DIR;
  return fromEnv && fromEnv.trim().length > 0 ? fromEnv : "/output";
}

function clearDirectoryContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const outDir = resolveOutputDir();
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  clearDirectoryContents(outDir);
  // No trailing newline: the gate counts characters, and the line is the entry.
  writeFileSync(join(outDir, "entry.txt"), EXCUSE_LINE, "utf8");
}

main();
