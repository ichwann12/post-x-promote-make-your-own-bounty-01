// Entry for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
//
// The post itself is the entry: one post of my own on X that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own attached and make.fun, the @makefunai tag and my play
// code in its text. POST.json names that post's address; the house reads the
// post's replies, reposts and quotes from X and places go by their sum.
// Nothing this program writes about the post is scored.
//
// All this program does is copy POST.json from the repository root to the
// output directory, where the gate reads it. No network, no wall clock, no
// files outside the repository, deterministic: the same input bytes always
// produce the same output bytes. It prints nothing on success.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(
    `POST.json could not be copied from ${BOT_DIR} to ${OUTPUT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}
