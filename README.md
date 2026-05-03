# DSA in C — Study Tracker

A Next.js study tracker for Data Structures & Algorithms in C.
## Live Site

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
app/
├── data/
│   ├── topics.ts          ← all 12 topics and subtopics
│   ├── codeMap.ts         ← C code for each subtopic
│   ├── notesMap.ts        ← theory notes for each subtopic
│   └── pdfMap.ts          ← PDF paths per subtopic
│
├── hooks/
│   └── useProgress.ts     ← localStorage progress tracking
├── [topic]/
│   ├── page.tsx           ← server component, dynamic route
│   ├── TopicClient.tsx    ← client component, interactive UI
│   └── topic.module.css   ← topic page styles
├── page.tsx               ← homepage
├── page.module.css        ← homepage styles
├── layout.tsx             ← root layout
├── globals.css            ← global styles + CSS variables
└── types.ts               ← shared TypeScript interfaces
```

---

## Adding Your Code

Open `app/data/codeMap.ts` and add entries:

```ts
export const codeMap: Record<string, Record<string, string>> = {
  searching: {
    'Linear Search': `#include <stdio.h>
...`,
  },
  sorting: {
    'Bubble Sort': `#include <stdio.h>
...`,
  },
}
```

Key must match `topic.id` from `topics.ts` exactly.
Subtopic key must match the subtopic string exactly — case sensitive.

---

## Adding Notes

Same pattern in `app/data/notesMap.ts`:

```ts
export const notesMap: Record<string, Record<string, string>> = {
  searching: {
    'Linear Search': `your notes here`,
  },
}
```

Use backtick template literals. Indentation is preserved with `white-space: pre-wrap`.

---

## Adding PDFs

Put PDFs in the `public/` folder:

```
public/
  pdfs/
    searching/
      linear-search.pdf
    tc-sc/
      notes.pdf
    tutorials/
      tutorial1.pdf
```

Then reference in `app/data/pdfMap.ts`:

```ts
export const pdfMap: Record<string, Record<string, string[]>> = {
  searching: {
    'Linear Search': ['/pdfs/searching/linear-search.pdf'],
    'Binary Search': ['/pdfs/searching/binary-search.pdf'],
  },
  'tc-sc': {
    'Notes & PDFs': ['/pdfs/tc-sc/notes1.pdf', '/pdfs/tc-sc/notes2.pdf'],
  },
}
```

Always use arrays — even for single PDFs wrap in `[]`.

---

## Adding Resources (Homepage Dropdowns)

Edit the `resourceCategories` array at the top of `app/page.tsx`:

```ts
{
  id: 'handouts',
  label: 'Handouts',
  color: '#00cfff',
  items: [
    { label: 'Unit 1 Handout', url: 'https://your-link.com' },
    { label: 'Unit 2 Handout', url: 'https://your-link.com' },
  ],
},
```

For local PDFs use `/pdfs/...` paths. For external links paste the full URL.

---

## Deploying to Vercel

```bash
# install Vercel CLI
npm i -g vercel

# deploy
vercel
```

Or push to GitHub and connect the repo on [vercel.com](https://vercel.com) — it auto-deploys on every push to main.

---

## Topics Covered

| # | Topic | ID |
|---|-------|----|
| 1 | Searching Algorithms | `searching` |
| 2 | Sorting Algorithms | `sorting` |
| 3 | Linked Lists | `linked-list` |
| 4 | Stacks | `stacks` |
| 5 | Queues | `queues` |
| 6 | Hashing | `hashing` |
| 7 | Binary Trees | `binary-trees` |
| 8 | Binary Search Trees | `bst` |
| 9 | Time & Space Complexity | `tc-sc` |
| 10 | Dynamic Programming | `dp` |
| 11 | Graphs | `graphs` |

Progress is saved automatically in `localStorage` — persists across sessions per browser.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
