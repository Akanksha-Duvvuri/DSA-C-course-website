export interface Resource {
  label: string
  path: string
}

export interface ResourceCategory {
  id: string
  title: string
  icon: string
  color: string
  items: Resource[]
}

export const resources: ResourceCategory[] = [
  {
    id: 'handouts',
    title: 'Handouts',
    icon: '◉',
    color: '#00cfff',
    items: [
      { label: 'Unit 1 Handout', path: '/resources/handouts/unit1.pdf' },
      { label: 'Unit 2 Handout', path: '/resources/handouts/unit2.pdf' },
      // add more here
    ],
  },
  {
    id: 'lab-questions',
    title: 'Lab Questions',
    icon: '◈',
    color: '#00ff88',
    items: [
      { label: 'Lab 1', path: '/resources/lab/lab1.pdf' },
      { label: 'Lab 2', path: '/resources/lab/lab2.pdf' },
      // add more here
    ],
  },
  {
    id: 'prev-year',
    title: 'Previous Year Questions',
    icon: '⬦',
    color: '#fbbf24',
    items: [
      { label: '2023 Question Paper', path: '/resources/prev-year/2023.pdf' },
      { label: '2022 Question Paper', path: '/resources/prev-year/2022.pdf' },
      // add more here
    ],
  },
  {
    id: 'slides',
    title: 'Slides',
    icon: '▤',
    color: '#a78bfa',
    items: [
      { label: 'Unit 1 Slides', path: '/resources/slides/unit1.pdf' },
      { label: 'Unit 2 Slides', path: '/resources/slides/unit2.pdf' },
      // add more here
    ],
  },
]

export const quickLinks = [
  { label: 'GFG — DSA Roadmap', url: 'https://www.geeksforgeeks.org/dsa-tutorial-learn-data-structures-and-algorithms/' },
  { label: 'Visualgo — Algorithm Visualiser', url: 'https://visualgo.net/en' },
  // add more here
]