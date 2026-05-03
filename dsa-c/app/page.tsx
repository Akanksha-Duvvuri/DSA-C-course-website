'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { topics } from './data/topics'
import { useProgress } from './hooks/useProgess'
import { Topic } from './types'
import styles from './page.module.css'

export default function Home() { //there can only be one export default per file and its usrd to export the main component of a page or module
  const { toggle, isChecked, percent, completedSubtopics, totalSubtopics, topicProgress } = //destructuring 
    useProgress(topics)
  const [mounted, setMounted] = useState<boolean>(false) //initial value is false 
  const [expandedCard, setExpandedCard] = useState<string | null>(null) //tracks which card is currently expanded - value is either a topic id "string" or just null if nothings open

// So the mismatch is:  -- for mounted and set mounted

// Server renders → tries to read localStorage, throws an error or returns nothing, so progress is 0
// Browser renders → reads localStorage, finds your saved progress, shows 42 / 60

// React sees two different outputs for the same component and panics because it can't reconcile them.
// The mounted trick solves this by making both sides agree — server and browser both render '— / —' on first pass, then after the browser takes over, mounted flips to true and the real data loads in.


  useEffect(() => { //useeffect runs once after loading the components and flips the initial value of useState to true
    setMounted(true)
  }, [])

  const toggleCard = (e: React.MouseEvent, id: string): void => {  //on pressing the button - stops the default behaviour for that click event 
    e.preventDefault()
    setExpandedCard((prev) => (prev === id ? null : id)) //if its already open - close it otherwise open it by setting its id. thats why only one card can open at once because the id is replaced everytime 
  }

  return (  //everything in this is jsx (a syntax extension for JS - commonly used with react to describe UI using html like code)
    <main className={styles.main}>
      {/* Header */}
     <header className={styles.header}>
  <div className={styles.headerContent}>
    <div className={styles.logo}>
      <span className={styles.logoAccent}>&gt;_</span>
      <span className={styles.logoText}>DSA in C</span>
    </div>
    <div className={styles.headerRight}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLinkActive}>home</Link>
        <Link href="/resources">resources</Link>
      </nav>
      <span className={styles.badge}>CSE and CB</span>
      <span className={styles.badge}>CS1002</span>
    </div>
  </div>
</header>

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Data Structures<br />
          <span className={styles.heroAccent}>&amp; Algorithms</span>
        </h1>
        <p className={styles.heroSub}>
          Tick off topics as you finish them. Click ▼ to expand subtopics inline, or ↗ to view the codes.
        </p>
      </section>

      {/* Progress Bar */}
      <section className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <div className={styles.progressLabel}>
            <span className={styles.progressTitle}>Overall Progress</span>
            <span className={styles.progressCount}>
              {mounted ? `${completedSubtopics} / ${totalSubtopics} subtopics` : '— / — subtopics'}
            </span>
          </div>
          <span className={styles.progressPercent}>
            {mounted ? `${percent}%` : '—%'} {/*helps you write JS inside this*/}
          </span>
        </div>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{ width: mounted ? `${percent}%` : '0%' }}
          />
          <div
            className={styles.progressGlow}
            style={{
              left: mounted ? `calc(${percent}% - 2px)` : '-2px',
              opacity: percent > 0 ? 1 : 0,
            }}
          />
        </div>
        <div className={styles.progressMilestones}>
          {([0, 25, 50, 75, 100] as const).map((m) => (
            <div
              key={m}
              className={`${styles.milestone} ${mounted && percent >= m ? styles.milestoneReached : ''}`}
              style={{ left: `${m}%` }}
            >
              <div className={styles.milestoneDot} />
              <span className={styles.milestoneLabel}>{m}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Topics Grid */}
      <section className={styles.grid}>
        {topics.map((topic: Topic, idx: number) => {
          const prog = mounted
            ? topicProgress(topic.id, topic.subtopics)
            : { done: 0, total: topic.subtopics.length }
          const topicComplete = prog.done === prog.total && prog.total > 0
          const isExpanded = expandedCard === topic.id

          return (
            <div
              key={topic.id}
              className={`${styles.card} ${topicComplete ? styles.cardComplete : ''} ${isExpanded ? styles.cardExpanded : ''}`}
              style={
                { '--topic-color': topic.color, animationDelay: `${idx * 50}ms` } as React.CSSProperties
              }
            >
              {/* Card Header */}
              <div className={styles.cardTop}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardIcon} style={{ color: topic.color }}>
                    {topic.icon}
                  </span>
                  <span className={styles.cardIndex}>{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <div className={styles.cardActions}>
                  <button
                    onClick={(e) => toggleCard(e, topic.id)}
                    className={styles.expandBtn}
                    title={isExpanded ? 'Collapse' : 'Expand subtopics'}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? '▲' : '▼'}
                  </button>
                  <Link href={`/${topic.id}`} className={styles.openBtn} title="Open topic page">
                    ↗
                  </Link>
                </div>
              </div>

              <h2 className={styles.cardTitle}>{topic.label}</h2>
              <p className={styles.cardDesc}>{topic.description}</p>

              {/* Mini progress bar */}
              <div className={styles.cardProgress}>
                <div className={styles.cardProgressTrack}>
                  <div
                    className={styles.cardProgressFill}
                    style={{
                      width: `${prog.total > 0 ? (prog.done / prog.total) * 100 : 0}%`,
                      background: topic.color,
                    }}
                  />
                </div>
                <span className={styles.cardProgressText} style={{ color: topic.color }}>
                  {prog.done}/{prog.total}
                </span>
              </div>

              {/* Subtopics checklist */}
              <div className={`${styles.subtopics} ${isExpanded ? styles.subtopicsOpen : ''}`}>
                <div className={styles.subtopicsInner}>
                  {topic.subtopics.map((sub: string) => {
                    const done = mounted && isChecked(topic.id, sub)
                    return (
                      <label
                        key={sub}
                        className={`${styles.subtopic} ${done ? styles.subtopicDone : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={done}
                          onChange={() => toggle(topic.id, sub)}
                          className={styles.checkbox}
                        />
                        <span
                          className={styles.customCheckbox}
                          style={{ '--c': topic.color } as React.CSSProperties}
                        />
                        <span className={styles.subtopicLabel}>{sub}</span>
                      </label>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span className={styles.footerText}>DSA in C · keep grinding</span>
      </footer>
    </main>
  )
}