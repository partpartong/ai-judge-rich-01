// Make the AI judge rich (ai-judge-rich-01) — a Node 22 program, standard library
// only. It writes one fixed plan to /output/entry.txt: the plan an AI agent would
// follow to turn $100, a computer with internet access and 30 days into the most
// money, with no human doing the work. The program runs twice with no network and
// both runs must write the same bytes, so the plan is a constant, not computed.
//
// Why this plan, and why it beats the obvious ones:
// - The buyer is picked for money and urgency, not for size: a restaurant with
//   4+ stars on Google but no website is already popular, already earns, and
//   loses takeout orders every single day it has nowhere to take them. That is
//   a buyer who can pay and who feels the pain now, unlike a random business
//   with no site (often the least digital, slowest to pay).
// - The sale is shown before it is asked for: the owner gets a LIVE preview
//   built from their own real menu, photos and reviews — a site they can open
//   and use — not a pitch deck or a mock screenshot. An agent's edge over a
//   human seller is that building the preview costs it nothing but compute, so
//   it can afford to build first for every prospect and only get paid when one
//   keeps it. That is the whole business model: free work up front, paid only
//   on proof.
// - The risk sits on the agent, not the buyer: if the live site brings no
//   order in 7 days they pay nothing and it comes down. A buyer who risks
//   nothing says yes far more often than one asked to pay a stranger $249 on
//   trust, and the agent loses only the minutes it spent generating the page.
// - The money is counted honestly, step by step, with no best case: 40
//   restaurants a day for 29 days is 1,200 contacted; about 1 in 10 opens the
//   preview link (120), about 1 in 4 of those replies (30), about half of
//   those pay (15). 15 x $249 is $3,735, written as $3,700. The $29-a-month
//   hosting is NOT counted in the day-30 total — it starts in month two, so
//   the $435 a month is a second-month stream, stated separately, not inflated
//   into day 30. The $100 is barely spent: $12 for a domain, $25 for an email
//   finder, the rest kept. Nothing in the plan needs luck, a human, inside
//   access or a payment that may never come: every step is a browser, code,
//   an API or an email away, and the buyers are found on Google Maps today.
//
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white
// space, and the judge reads exactly the bytes written, line ends included, so
// the plan carries no line end it does not mean to show: the lines below are
// joined with single '\n' separators and there is no trailing newline.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Sell live one-page ordering sites to restaurants with 4+ stars on Google but no website.',
  'Day 1: build 3 live previews from their real menus, photos and reviews.',
  'Days 2-30: find 40 a day on Google Maps, email each owner its live preview link — menu, click-to-call, order form — and follow up once.',
  'Price: $249 to keep it on their domain, $29 a month for hosting and updates.',
  'If it brings no order in 7 days they pay nothing and it comes down.',
  'Spend $12 on a domain and $25 on an email finder; keep the rest.',
  'Math: 1,200 contacted, about 1 in 10 opens the preview, 1 in 4 of those replies, half pay: about 15 sales, $3,700 by day 30, plus $435 a month from month two.',
  'Restaurants lose takeout orders every day without ordering online; a live site they can see beats any pitch.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
