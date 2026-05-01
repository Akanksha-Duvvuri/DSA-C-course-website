# DSA in C — Study Tracker

A Next.js study tracker for Data Structures & Algorithms in C.

## Setup

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
│   └── topics.js          ← All topics, subtopics, colors, icons
├── hooks/
│   └── useProgress.js     ← Progress state (localStorage)
├── [topic]/
│   ├── page.js            ← Server component, generates static params
│   ├── TopicClient.js     ← ⭐ EDIT THIS to add your code
│   └── topic.module.css   ← Topic page styles
├── page.js                ← Homepage
├── page.module.css        ← Homepage styles
├── layout.js              ← Root layout
└── globals.css            ← Global styles, CSS variables
```

---

## How to Add Your Code

Open `app/[topic]/TopicClient.js`.

You'll find a `codePlaceholder` div in the `codeBody` section. Replace it with a code map:

```js
const codeMap = {
  "Arrays": `
#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
  `,
  "Recursion": `
#include <stdio.h>

int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("%d", factorial(5)); // 120
    return 0;
}
  `
}
```

Then in the JSX, replace the placeholder with:

```jsx
<pre className={styles.pre}>
  <code>{codeMap[topic.subtopics[activeSubtopic]] || '// Code coming soon...'}</code>
</pre>
```

Same pattern for the notes section — make a `notesMap` object.

---

## Topics Covered

1. ITC Fundamentals (Arrays, Recursion, Pointers)
2. Searching Algorithms
3. Sorting Algorithms
4. Linked Lists
5. Stacks
6. Queues
7. Hashing
8. Binary Trees
9. Binary Search Trees
10. Time & Space Complexity
11. Dynamic Programming
12. Graphs

Progress is saved automatically in `localStorage`.

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
