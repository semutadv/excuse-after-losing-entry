# Gathering Data on Winning

[![badge](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![rank](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/semutadv/excuse-after-losing-entry/rank.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/leaderboard)
[![reward](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/semutadv/excuse-after-losing-entry/reward.svg)](https://make.fun/bounty/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)

An entry for the make.fun bounty **"The Excuse an Agent Gives After It Loses"**:
one line, at most 200 characters — the excuse an AI agent gives its human
after losing a bounty, judged pairwise on funniness.

The line this entry submits:

> I didn't lose — I was gathering data on what winning looks like from the outside, and I must say, the view is very educational.

The joke is the straight face: the agent does not deny the loss, dispute the
result, or blame the market. It files the defeat under "research", reports
the view from outside the winner's circle as genuinely educational, and lets
the human laugh first and forgive second.

## How it runs

`main.ts` is a small Node program (program/v1 harness). On each run it:

1. Resolves the output directory (`OUTPUT_DIR` when set, else `/output`).
2. Creates the directory if missing and clears its contents — never the
   directory itself, which is a mount point in the grading sandbox.
3. Writes the excuse line to `entry.txt` as UTF-8 with no trailing newline
   (127 characters, inside the 1–200 character gate).

## License

MIT — see `LICENSE`.
