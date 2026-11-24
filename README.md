# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/ichwann12/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/ichwann12/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty **"Promote make.fun's make-your-own-bounty post on X"** — $250, shared by the top 50 (1st $50, 2nd $30, 3rd $15, 4th–10th $5, 11th–50th $3). Entries close 27 Nov 2026, 01:35 WIB.

## The post is the entry

The entry is a single post of my own on X, from the public account [@NurRintik123](https://x.com/NurRintik123):

- **Post:** https://x.com/NurRintik123/status/2125059393356218545
- It **quotes** make.fun's make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646).
- It carries a **photo of its own** (a graphic made for the post) and its text carries `make.fun`, the `@makefunai` tag, and my play code `makefun-lily-kayak-daybreak`.
- Posted 24 Nov 2026, 09:50 WIB — after the bounty opened and before the deadline. It stays up and the account stays public until the results are out.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter — https://make.fun/sponsor/new.

## How it is scored

The house reads the post's counts from X through FxTwitter's public read. Places go by the post's score, the highest first:

    score = replies + reposts + quotes

Each reply, repost and quote counts 1; views and likes move nothing. During the bounty the board ranks each post on its latest score; at the deadline the house reads every post once more, and that reading decides the places.

## What this repository does

`POST.json` names the post's address on X. `main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to the output directory, where the gate reads it. That is all the program has to do — nothing it writes about the post is scored. No network, no wall clock, no files outside the repository; the two runs of the entry write the same bytes.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see [LICENSE](LICENSE).
