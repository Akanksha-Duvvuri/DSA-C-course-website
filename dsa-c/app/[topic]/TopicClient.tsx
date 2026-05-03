'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useProgress } from '../hooks/useProgess'
import { Topic } from '../types'
import styles from './topic.module.css'

interface TopicClientProps {
  topic: Topic
  topicIndex: number
  prev: Topic | null
  next: Topic | null
  allTopics: Topic[]
}

const codeMap: Record<string, Record<string, string>> = {
  searching: {
    'Linear Search': `#include<stdio.h>

int linearSearch(int *arr, int n, int key){
    for(int i=0; i<n; i++){
      if(arr[i] == key){
        return i;
      }
    }
    return -1;
}

int main(){
    int arr[6] = {1, 4, 3, 9, 10};
    int n = sizeof(arr) / sizeof(int);

    printf("%d", linearSearch(arr, n, 9));

    return 0;
}`,

    'Binary Search': `#include<stdio.h>

int binarySearch(int *arr, int start, int end, int key){
    while(start <= end){
        int mid = start + (end - start) / 2;

        if(arr[mid] == key){
            return mid;
        } else if(key > arr[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

int main(){
    int arr[7] = {1, 2, 18, 39, 54, 81, 109};
    int n = sizeof(arr) / sizeof(int);

    printf("%d", binarySearch(arr, 0, n-1, 18));

    return 0;
}`,

    'Jump Search': `// coming soon...`,
    'Interpolation Search': `// coming soon...`,
    'Exponential Search': `// coming soon...`,
  },

  sorting: {
    'Bubble Sort': `#include<stdio.h>

void bubbleSort(int *arr, int n) {
    for(int i=0; i<n-1; i++) {
        for(int j=0; j<n-i-1; j++) { 
            if(arr[j] > arr[j+1]){ 
                int temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

void printArr(int *arr, int n) {
    for(int i=0; i<n; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
    int n = sizeof(arr) / sizeof(int);

    bubbleSort(arr, n);
    printArr(arr, n);

    return 0;
}
    `,
    'Selection Sort': ``,
    'Insertion Sort': ``,
    'Merge Sort': ``,
    'Quick Sort': ``,
    'Heap Sort': ``,
    'Radix Sort': ``,
  },

}

const notesMap: Record<string, Record<string, string>> = {
  searching: {
    'Linear Search':
`Checks every element one by one from left to right until the target is found or the array ends.
If it doesnt exist / cant be found -> return -1.
Index always starts at 0 and goes on to n-1.

Time Complexity:
    Best Case  → O(1)    target is the first element
    Worst Case → O(n)    target is last or not present
    Average    → O(n)

Space Complexity: O(1) — no extra space used

Works on both sorted and unsorted arrays.
Use when the array is small or unsorted.`,

    'Binary Search':
`Repeatedly divides the search space in half by comparing the target with the middle value.

Time Complexity:
    Best Case  → O(1)      target is the middle element
    Worst Case → O(log n)  keeps dividing so search space repeatedly becomes half
    Average    → O(log n)

Calculating TC:
    1. Check input size(n) vs number of operations
    2. Each iteration halves the array:

        1st itr  →  n
        2nd itr  →  n/2
        3rd itr  →  n/4
        ...
        kth itr  →  1

    n → n/2 → n/4 → n/8 → ... → 1

    After k iterations: n / 2^k = 1
    So 2^k = n
    Therefore k = log₂(n)

    Total = O(log n)   ignore constants in TC

Space Complexity:
    Iterative → O(1)
    Recursive → O(log n)   due to call stack

IMPORTANT: Array must be sorted before applying binary search.
Use mid = start + (end - start) / 2 to avoid integer overflow.`,
  },

  sorting: {
    'Bubble Sort' : `Repeatedly iterates over the array and compares adjacent elements to push the largest element to the end.

Time Complexity:
  Best Case  → O(n)     //already sorted - with optimisation 
  Worst Case → O(n^2)    //reverse array 
  Average    → O(n^2)    

Space Complexity: O(1) — no extra space used

Only use for small or nearly sorted arrays.
One of the simplest but least efficient sorting algorithms.
    `,

    'Selection Sort' : `Finds the minimum element from the unsorted portion and places it
at the beginning. Repeats for the remaining unsorted portion.

Time Complexity:
    Best Case  → O(n²)     //always scans the full unsorted portion
    Worst Case → O(n²)
    Average    → O(n²)

Space Complexity: O(1) — No extra space used

NOT stable — swapping can change relative order of equal elements.
Makes the minimum number of swaps — at most n-1 swaps total.
    `,
    'Insertion Sort' : `Builds the sorted array one element at a time by picking each element
and inserting it into its correct position in the already sorted portion.
Like sorting a hand of playing cards.

Time Complexity:
    Best Case  → O(n)      array is already sorted
    Worst Case → O(n²)     array is reversed
    Average    → O(n²)

Space Complexity: O(1) — in-place sorting

Stable sort.
Very efficient for small arrays and nearly sorted arrays.
Used as a base case in hybrid algorithms like TimSort.
    `,

    'Merge Sort' : `Divide and conquer algorithm.
Recursively splits the array in half until each half has one element,
then merges the halves back together in sorted order.

Time Complexity:
    Best Case  → O(n log n)
    Worst Case → O(n log n)
    Average    → O(n log n)

Calculating TC:
    Dividing  → log n levels of recursion (same as binary search)
    Merging   → O(n) work at each level to merge
    Total     → O(n) × O(log n) = O(n log n)

Space Complexity: O(n) — needs auxiliary array for merging

Stable sort.
Guaranteed O(n log n) in all cases — unlike Quick Sort.
Preferred for sorting linked lists.
Used when stability matters and extra memory is acceptable.
    `,

    'Quick Sort' : `Divide and conquer algorithm.
Picks a pivot element, partitions the array so all elements less than
the pivot go left and all greater go right, then recursively sorts both sides.

Time Complexity:
    Best Case  → O(n log n)   pivot always splits array in half
    Worst Case → O(n²)        pivot is always the smallest or largest element
    Average    → O(n log n)

Calculating TC (average):
    Partitioning → O(n) work per level
    Depth        → O(log n) levels on average
    Total        → O(n log n)

Space Complexity:
    Average → O(log n)   due to recursive call stack
    Worst   → O(n)

NOT stable.
Fastest in practice for most inputs despite same Big O as Merge Sort
— better cache performance and lower constant factors.
Worst case avoided by random pivot selection or median-of-three.
    `,
  },
}

const pdfMap: Record<string, Record<string, string>> = {
  searching: {
    'Linear Search': '/pdfs/searching/linear-search.pdf',
    'Binary Search': '/pdfs/searching/binary-search.pdf',
  },
  sorting: {
    'Bubble Sort': '/pdfs/sorting/bubble-sort.pdf',
  },
}

// ─────────────────────────────────────────────────────────────────────────────

export default function TopicClient({
  topic,
  topicIndex,
  prev,
  next,
  allTopics,
}: TopicClientProps) {
  const { toggle, isChecked, topicProgress } = useProgress(allTopics)
  const [mounted, setMounted] = useState<boolean>(false)
  const [activeSubtopic, setActiveSubtopic] = useState<number>(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const prog = mounted
    ? topicProgress(topic.id, topic.subtopics)
    : { done: 0, total: topic.subtopics.length }
  const percent = prog.total > 0 ? Math.round((prog.done / prog.total) * 100) : 0

  const activeSubtopicName = topic.subtopics[activeSubtopic] ?? ''
  const pdfUrl = pdfMap[topic.id]?.[activeSubtopicName]

  return (
    <div className={styles.wrapper}>
      {/* ── Sidebar ── */}
      <aside className={styles.sidebar}>
        <Link href="/" className={styles.backLink}>
          <span>←</span> back to topics
        </Link>

        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarIcon} style={{ color: topic.color }}>
            {topic.icon}
          </span>
          <div>
            <div className={styles.sidebarIndex}>{String(topicIndex + 1).padStart(2, '0')}</div>
            <h1 className={styles.sidebarTitle}>{topic.label}</h1>
          </div>
        </div>

        <p className={styles.sidebarDesc}>{topic.description}</p>

        {/* Topic progress */}
        <div className={styles.topicProgressBox}>
          <div className={styles.topicProgressHeader}>
            <span className={styles.topicProgressLabel}>Progress</span>
            <span style={{ color: topic.color }} className={styles.topicProgressPercent}>
              {mounted ? `${percent}%` : '—%'}
            </span>
          </div>
          <div className={styles.topicProgressTrack}>
            <div
              className={styles.topicProgressFill}
              style={{
                width: mounted ? `${percent}%` : '0%',
                background: topic.color,
              }}
            />
          </div>
        </div>

        {/* Subtopic checklist */}
        <div className={styles.checklistTitle}>{'// subtopics'}</div>
        <ul className={styles.checklist}>
          {topic.subtopics.map((sub: string, i: number) => {
            const done = mounted && isChecked(topic.id, sub)
            return (
              <li
                key={sub}
                className={[
                  styles.checkItem,
                  done ? styles.checkItemDone : '',
                  activeSubtopic === i ? styles.checkItemActive : '',
                ].join(' ')}
                style={{ '--tc': topic.color } as React.CSSProperties}
              >
                <button
                  className={styles.checkItemBtn}
                  onClick={() => {
                    toggle(topic.id, sub)
                    setActiveSubtopic(i)
                  }}
                >
                  <span className={styles.checkBox}>
                    {done && (
                      <span className={styles.checkMark} style={{ color: topic.color }}>
                        ✓
                      </span>
                    )}
                  </span>
                  <span className={styles.checkLabel}>{sub}</span>
                </button>
                <button
                  className={styles.viewBtn}
                  onClick={() => setActiveSubtopic(i)}
                  title="View code"
                >
                  →
                </button>
              </li>
            )
          })}
        </ul>

        {/* Prev / Next nav */}
        <div className={styles.navLinks}>
          {prev && (
            <Link href={`/${prev.id}`} className={styles.navLink}>
              <span className={styles.navLinkDir}>← prev</span>
              <span className={styles.navLinkName}>{prev.label}</span>
            </Link>
          )}
          {next && (
            <Link href={`/${next.id}`} className={styles.navLink} style={{ textAlign: 'right' }}>
              <span className={styles.navLinkDir}>next →</span>
              <span className={styles.navLinkName}>{next.label}</span>
            </Link>
          )}
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className={styles.content}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/">home</Link>
          <span>/</span>
          <span style={{ color: topic.color }}>{topic.id}</span>
          <span>/</span>
          <span>{activeSubtopicName.toLowerCase().replace(/ /g, '-')}</span>
        </div>

        {/* Code section */}
        <div className={styles.codeSection}>
          <div className={styles.codeHeader}>
            <div className={styles.codeTabs}>
              <span
                className={styles.codeTab}
                style={{ borderBottomColor: topic.color, color: topic.color }}
              >
                {activeSubtopicName.toLowerCase().replace(/ /g, '_')}.c
              </span>
            </div>
            <div className={styles.codeWindowBtns}>
              <span /><span /><span />
            </div>
          </div>

          <div className={styles.codeBody}>
            <pre className={styles.pre}>
              <code>{codeMap[topic.id]?.[activeSubtopicName] ?? '// coming soon...'}</code>
            </pre>
          </div>
        </div>

        {/* Notes section */}
        <div className={styles.notesSection}>
          <div className={styles.notesHeader}>{'// notes & theory'}</div>
          <div className={styles.notesBody}>
            <p className={styles.notesPlaceholder} style={{ whiteSpace: 'pre' }}>
              {notesMap[topic.id]?.[activeSubtopicName] ?? 'Notes coming soon...'}
            </p>
          </div>
        </div>

        {/* PDF section */}
        {pdfUrl && (
          <div className={styles.pdfSection}>
            <div className={styles.notesHeader}>{'//PDFs'}</div>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfLink}
            >
              <span>open notes pdf</span>
              <span>↗</span>
            </a>
          </div>
        )}

      </main>
    </div>
  )
}