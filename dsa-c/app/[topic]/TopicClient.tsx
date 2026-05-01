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

// ─────────────────────────────────────────────────────────────────────────────
// ADD YOUR CODE HERE — keep adding topic ids and subtopic names as keys
// ─────────────────────────────────────────────────────────────────────────────

const codeMap: Record<string, Record<string, string>> = {
  searching: {
    'Linear Search': `#include <stdio.h>

int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target)
            return i;
    }
    return -1;
}

int main() {
    int arr[] = {10, 25, 3, 47, 8, 15};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 47;

    int result = linearSearch(arr, n, target);

    if (result != -1)
        printf("Element found at index %d\\n", result);
    else
        printf("Element not found\\n");

    return 0;
}`,

    'Binary Search': `#include <stdio.h>

int binarySearch(int arr[], int low, int high, int target) {
    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
}

int main() {
    // Array MUST be sorted for binary search
    int arr[] = {3, 8, 10, 15, 25, 47};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 15;

    int result = binarySearch(arr, 0, n - 1, target);

    if (result != -1)
        printf("Element found at index %d\\n", result);
    else
        printf("Element not found\\n");

    return 0;
}`,

    'Jump Search': `// coming soon...`,
    'Interpolation Search': `// coming soon...`,
    'Exponential Search': `// coming soon...`,
  },

  // Paste your next topic in below, e.g.:
  // sorting: {
  //   'Bubble Sort': `#include <stdio.h> ...`,
  // },
}

const notesMap: Record<string, Record<string, string>> = {
  searching: {
    'Linear Search': `Checks every element one by one from left to right until the target is found or the array ends.

Time Complexity:
  Best Case  → O(1)    target is the first element
  Worst Case → O(n)    target is last or not present
  Average    → O(n)

Space Complexity: O(1) — no extra space used

Works on both sorted and unsorted arrays.
Use when the array is small or unsorted.`,

    'Binary Search': `Repeatedly divides the search space in half by comparing the target with the middle element.

Time Complexity:
  Best Case  → O(1)      target is the middle element
  Worst Case → O(log n)
  Average    → O(log n)

Space Complexity:
  Iterative → O(1)
  Recursive → O(log n)   due to call stack

IMPORTANT: Array must be sorted before applying binary search.
Use mid = low + (high - low) / 2 instead of (low + high) / 2 to avoid integer overflow.`,

    'Jump Search': `Notes coming soon...`,
    'Interpolation Search': `Notes coming soon...`,
    'Exponential Search': `Notes coming soon...`,
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
            <p className={styles.notesPlaceholder} style={{ whiteSpace: 'pre-line' }}>
              {notesMap[topic.id]?.[activeSubtopicName] ?? 'Notes coming soon...'}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}