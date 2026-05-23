# DSA in C — Study Tracker (A FRONTEND BASED PROJECT)

A clean and interactive **DSA Study Tracker** built using **Next.js** for learning **Data Structures & Algorithms in C** — designed specifically for **CS1002**.

Track your syllabus progress, revise theory notes, view complete C implementations, and keep all your DSA prep organized in one place.

---

## Features

- Track completed topics and subtopics
- Persistent progress using `localStorage`
- Topic-wise DSA organization
- Clean and responsive UI
- Built-in C code implementations
- Short exam-oriented theory notes
- PDF / handout support
- Graphs, Trees, Heaps, Sorting, Searching and more
- Simple lightweight architecture

---

## Topics Covered

| # | Topic | ID |
|---|---|---|
| 1 | Time & Space Complexity | `tc-sc` |
| 2 | Searching Algorithms | `searching` |
| 3 | Sorting Algorithms | `sorting` |
| 4 | Linked Lists | `linked-list` |
| 5 | Stacks | `stacks` |
| 6 | Queues | `queues` |
| 7 | Hashing | `hashing` |
| 8 | Binary Trees | `binary-trees` |
| 9 | Binary Search Trees | `bst` |
| 10 | Heaps | `heaps` |
| 11 | Graphs | `graphs` |

---

## Included Implementations

- Linear Search
- Binary Search
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort
- Radix Sort
- Linked Lists
- Stack using Array / Linked List
- Queue using Array / Linked List
- Binary Trees
- BST Operations
- Max Heap / Min Heap
- BFS / DFS
- Graph Representations

and more
---

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- CSS Modules
- localStorage

---

## Run Locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

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

## Adding C Programs

Edit:

```txt
app/data/codeMap.ts
```

Example:

```ts
export const codeMap = {
  searching: {
    'Linear Search': `#include <stdio.h>
...`,
  },
}
```

Rules:
- Topic ID must match exactly
- Subtopic names are case-sensitive

---

## Adding Notes

Edit:

```txt
app/data/notesMap.ts
```

Example:

```ts
export const notesMap = {
  searching: {
    'Linear Search': `Search each element one by one.`,
  },
}
```

---

## Adding PDFs

Place PDFs inside:

```txt
public/pdfs/
```

Example:

```txt
public/pdfs/searching/linear-search.pdf
```

Then update:

```txt
app/data/pdfMap.ts
```

Example:

```ts
export const pdfMap = {
  searching: {
    'Linear Search': [
      '/pdfs/searching/linear-search.pdf'
    ],
  },
}
```

Always use arrays even for one file.

---

## Homepage Resources

Edit:

```txt
app/page.tsx
```

Inside:

```ts
resourceCategories
```

Example:

```ts
{
  id: 'handouts',
  label: 'Handouts',
  color: '#00cfff',
  items: [
    {
      label: 'Unit 1',
      url: '/pdfs/unit1.pdf'
    }
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

Or connect the GitHub repository directly on Vercel.

---

## Future Improvements

- Search Topics
- Quiz Mode
- Code Runner
- Copy Paste option
- Cloud Sync

---

## Notes

- Built for quick DSA revision
- Focused on concise theory + C implementation
- Optimized for semester preparation and labs