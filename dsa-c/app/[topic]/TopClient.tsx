'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useProgress } from '../hooks/useProgress'
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
// ADD YOUR CODE HERE
// Create a nested object: { [topicId]: { [subtopicName]: string } }
// Example:
//
// const codeMap: Record<string, Record<string, string>> = {
//   itc: {
//     'Arrays': `
// #include <stdio.h>
// int main() {
//     int arr[] = {1, 2, 3};
//     printf("%d", arr[0]);
//     return 0;
// }`,
//     'Recursion': `...`,
//   },
//   searching: {
//     'Binary Search': `...`,
//   },
// }
//
// Then in the JSX below, replace the codePlaceholder div with:
// <pre className={styles.pre}><code>{codeMap[topic.id]?.[topic.subtopics[activeSubtopic]] ?? '// coming soon...'}</code></pre>
// ─────────────────────────────────────────────────────────────────────────────

// Similarly for theory notes:
// const notesMap: Record<string, Record<string, string>> = { ... }

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
            {/*
              ── REPLACE THIS PLACEHOLDER WITH YOUR CODE ──
              After creating a codeMap above, swap this div for:
              <pre className={styles.pre}>
                <code>{codeMap[topic.id]?.[activeSubtopicName] ?? '// coming soon...'}</code>
              </pre>
            */}
            <div className={styles.codePlaceholder}>
              <div className={styles.codePlaceholderIcon} style={{ color: topic.color }}>
                {'{ }'}
              </div>
              <p className={styles.codePlaceholderTitle}>{activeSubtopicName}</p>
              <p className={styles.codePlaceholderSub}>
                Add your C code for this subtopic in{' '}
                <code className={styles.inlineCode}>TopicClient.tsx</code> using the{' '}
                <code className={styles.inlineCode}>codeMap</code> pattern described in the
                comments above.
              </p>
            </div>
          </div>
        </div>

        {/* Notes section */}
        <div className={styles.notesSection}>
          <div className={styles.notesHeader}>{'// notes & theory'}</div>
          <div className={styles.notesBody}>
            {/*
              Similarly for notes — create a notesMap and replace this with:
              <p>{notesMap[topic.id]?.[activeSubtopicName] ?? 'Notes coming soon...'}</p>
            */}
            <p className={styles.notesPlaceholder}>
              Add theory, complexity analysis, or notes for{' '}
              <strong>{activeSubtopicName}</strong> here. Use a{' '}
              <code className={styles.inlineCode}>notesMap</code> object in{' '}
              <code className={styles.inlineCode}>TopicClient.tsx</code>.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}