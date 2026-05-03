# DSA in C — Study Tracker

A clean and interactive **Next.js study tracker** built for learning **Data Structures & Algorithms in C**.  -- Made for CS1002

Track your progress topic-by-topic, read theory notes, view C implementations, and organize all your DSA prep in one place.

---

## Features

* Track completed subtopics with persistent progress
* View C programs for every algorithm / data structure
* Read short notes and theory explanations
* Attach PDFs and study material
* Organized topic-wise learning flow
* Clean responsive UI
* Progress saved automatically using `localStorage`

---

## Topics Covered

| #  | Topic                   | ID             |
| -- | ----------------------- | -------------- |
| 1  | Searching Algorithms    | `searching`    |
| 2  | Sorting Algorithms      | `sorting`      |
| 3  | Linked Lists            | `linked-list`  |
| 4  | Stacks                  | `stacks`       |
| 5  | Queues                  | `queues`       |
| 6  | Hashing                 | `hashing`      |
| 7  | Binary Trees            | `binary-trees` |
| 8  | Binary Search Trees     | `bst`          |
| 9  | Time & Space Complexity | `tc-sc`        |
| 10 |Heaps                    | `heaps`        |
| 11 | Graphs                  | `graphs`       |

---

## Tech Stack

* Next.js (App Router)
* TypeScript
* React
* CSS Modules
* localStorage

---

## Live Demo

Add your deployed link here:

https://your-site.vercel.app

---

## Run Locally

```bash
npm install
npm run dev
```

Open:

http://localhost:3000

---

## Project Structure

```txt
app/
├── data/
│   ├── topics.ts
│   ├── codeMap.ts
│   ├── notesMap.ts
│   └── pdfMap.ts
│
├── hooks/
│   └── useProgress.ts
│
├── [topic]/
│   ├── page.tsx
│   ├── TopicClient.tsx
│   └── topic.module.css
│
├── page.tsx
├── page.module.css
├── layout.tsx
├── globals.css
└── types.ts
```

---

## Customization

### Add C Programs

Edit:

`app/data/codeMap.ts`

```ts
export const codeMap = {
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

Rules:

* Topic key must match topic ID exactly
* Subtopic key must match exactly
* Case sensitive

---

### Add Notes

Edit:

`app/data/notesMap.ts`

```ts
export const notesMap = {
  searching: {
    'Linear Search': `Search each element one by one.`,
  },
}
```

---

### Add PDFs

Put files inside:

`public/pdfs/`

Example:

`public/pdfs/searching/linear-search.pdf`

Then update:

`app/data/pdfMap.ts`

```ts
export const pdfMap = {
  searching: {
    'Linear Search': ['/pdfs/searching/linear-search.pdf'],
  },
}
```

Always use arrays, even for one file.

---

### Add Homepage Resources

Edit:

`app/page.tsx`

Inside `resourceCategories`:

```ts
{
  id: 'handouts',
  label: 'Handouts',
  color: '#00cfff',
  items: [
    { label: 'Unit 1', url: '/pdfs/unit1.pdf' },
    { label: 'Playlist', url: 'https://youtube.com/...' }
  ]
}
```

---

## Deployment

### Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo on Vercel for auto deploys.

---


## Future Improvements

* Dark mode
* Search topics
* Quiz mode
* Code runner
* Cloud sync

---

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
