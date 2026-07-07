'use client' //used to render this page on the client side, as it uses localStorage and React hooks - Next js has server-side rendering by default, so we need to specify this for client-side rendering

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { topics } from './data/topics'
import { useProgress } from './hooks/useProgess' //custom hook to manage progress state and localStorage
import { Topic } from './types'
import styles from './page.module.css'


const resourceCategories = [
  {
    id: 'handouts',
    label: 'Handouts',
    color: '#00cfff',
    items: [
      { label: 'Handouts', url: 'https://mahindraecolecentrale-my.sharepoint.com/personal/yayati_gupta_mahindrauniversity_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyayati%5Fgupta%5Fmahindrauniversity%5Fedu%5Fin%2FDocuments%2FCS1002%2C%20Data%20Structures%2FHandouts&viewid=46178875%2D5206%2D4fb2%2Dbfc9%2D3efce5b6ceba&ct=1777819275370&or=OWA%2DNT%2DMail' },
    ],
  },
  {
    id: 'prev-year',
    label: 'Prev Year Papers',
    color: '#fbbf24',
    items: [
      { label: 'Papers', url: 'https://mahindraecolecentrale-my.sharepoint.com/personal/yayati_gupta_mahindrauniversity_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyayati%5Fgupta%5Fmahindrauniversity%5Fedu%5Fin%2FDocuments%2FCS1002%2C%20Data%20Structures%2FPrevious%20Year%20QPs&viewid=46178875%2D5206%2D4fb2%2Dbfc9%2D3efce5b6ceba&ct=1777819275370&or=OWA%2DNT%2DMail' },
    ],
  },
  {
    id: 'slides',
    label: 'Slides',
    color: '#a78bfa',
    items: [
      { label: 'Slides', url: 'https://mahindraecolecentrale-my.sharepoint.com/personal/yayati_gupta_mahindrauniversity_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyayati%5Fgupta%5Fmahindrauniversity%5Fedu%5Fin%2FDocuments%2FCS1002%2C%20Data%20Structures%2FSlides&viewid=46178875%2D5206%2D4fb2%2Dbfc9%2D3efce5b6ceba&ct=1777819275370&or=OWA%2DNT%2DMail' },
    ],
  },
  {
    id: 'lab-q',
    label: 'Lab Questions',
    color: '#00ff88',
    items: [
      { label: 'Labs', url: 'https://mahindraecolecentrale-my.sharepoint.com/personal/yayati_gupta_mahindrauniversity_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyayati%5Fgupta%5Fmahindrauniversity%5Fedu%5Fin%2FDocuments%2FCS1002%2C%20Data%20Structures%2FLab%20problems&viewid=46178875%2D5206%2D4fb2%2Dbfc9%2D3efce5b6ceba&ct=1777819275370&or=OWA%2DNT%2DMail' },
    ],
  },
  {
    id: '',
    label: "Animations by Yayati Ma'am",
    color: '#00ff88',
    items: [
      { label: 'Animation', url: 'https://mahindraecolecentrale-my.sharepoint.com/personal/yayati_gupta_mahindrauniversity_edu_in/_layouts/15/onedrive.aspx?ct=1777819275370&or=OWA%2DNT%2DMail&id=%2Fpersonal%2Fyayati%5Fgupta%5Fmahindrauniversity%5Fedu%5Fin%2FDocuments%2FCS1002%2C%20Data%20Structures%2FAnimations%28Install%20python%20and%20pygame%29' },
    ],
  },
  {
    id: 'tutorials',
    label: 'Tutorials',
    color: '#f472b6',
    items: [
      { label: 'Recap of C syntax', url: '/pdfs/tutorials/Tutorial - [Recap of C Syntax].pdf' },
      { label: 'Arrays and Pointers', url: 'pdfs/tutorials/Arrays and Pointers_ Where we stand_.pdf' },
      { label: 'Pointers - practice q', url: '/pdfs/tutorials/Pointers - Practice Questions.pdf' },
      { label: 'Arrays - Tutorial 2 and 3', url: '/pdfs/tutorials/Tutorials on arrays - 2 and 3.pdf' },


      { label: 'Basic Searching and Sorting in C', url: '/pdfs/tutorials/Basic Searching and Sorting in C.pdf' },
      { label: 'Sorting - Tutorial 2', url: '/pdfs/tutorials/Tutorial on Sorting - 2.pdf' },

      { label: 'TC', url: '/pdfs/tutorials/Time Complexity.pdf' },
      { label: 'TC - Tutorial 7', url: '/pdfs/tutorials/Solved_Tutorial_Complexity-7.pdf' },
      { label: 'TC - tutorial', url: '/pdfs/tutorials/Tutorial - Time Complexity.pdf' },

      { label: 'LL - tutorial 4', url: '/pdfs/tutorials/Tutorial-4 Linked List.pdf' },
      { label: 'LL tutorial - 5', url: '/pdfs/tutorials/Linked List Tut-5.pdf' },
      { label: 'LL- tutorial', url: '/pdfs/tutorials/Tutorial - Linked List.pdf' },
      { label: 'Stacks - tutorial', url: '/pdfs/tutorials/Tutorial (Stacks).pdf' },

      { label: 'Tutorial 6', url: '/pdfs/tutorials/Tutorial-6.pdf' },
      { label: 'Tutorial 6 - extra questions', url: '/pdfs/tutorials/Tutorial-6 extra question With Solution.pdf' },
      { label: 'Stacks and Queues - tutorial 6', url: '/pdfs/tutorials/Tutorial-6 Stack and Queue.pdf' },

      { label: 'Queue - tutorial 7', url: '/pdfs/tutorials/Tutorial 7 Queue.pdf' },

      { label: 'Trees - Tutorial 9', url: '/pdfs/tutorials/Tutorial 9 - trees.pdf' },
      { label: 'Trees - Tutorial 3', url: '/pdfs/tutorials/Tutorial-Trees.pdf' },
      { label: 'Heaps and AVL - Tutorial 11', url: '/pdfs/tutorials/Tutorial 11 Heap and AVL Tree with solution.pdf' },

      { label: 'Misc Q -1 ', url: '/pdfs/tutorials/Misc_Questions-1.pdf' },
      { label: 'Practice sheet - 1', url: '/pdfs/tutorials/Practice sheet -1.pdf' },
      { label: 'Practice questions - 2', url: '/pdfs/tutorials/Practice_Questions_2.pdf' },
    ],
  },
]


export default function Home() {
  const { toggle, isChecked, percent, completedSubtopics, totalSubtopics, topicProgress } =
    useProgress(topics)
  const [mounted, setMounted] = useState<boolean>(false)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleCard = (e: React.MouseEvent, id: string): void => {
    e.preventDefault()
    setExpandedCard((prev) => (prev === id ? null : id))
  }

  const toggleDropdown = (id: string): void => {
    setOpenDropdown((prev) => (prev === id ? null : id))
  }

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-dropdown]')) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <span className={styles.logoAccent}>&gt;_</span>
            <span className={styles.logoText}>DSA in C</span>
          </div>
          <div className={styles.headerRight}>
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
          Tick off topics as you finish them. Click ▼ to expand subtopics inline, or ↗ to view the codes. This website purely runs on localStorage, so your data will be saved only in that respective browser.
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
            {mounted ? `${percent}%` : '—%'}
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

      {/* Quick Links */}
      <section className={styles.quickLinksSection}>
        <div className={styles.quickLinksHeader}>{'// quick links'}</div>
        <div className={styles.quickLinksGrid}>
          <a
            href="https://docs.google.com/spreadsheets/d/18Ed_IwybqsLi5Aqyybk3m8mxmZkD86C321xHbbkxcZ8/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickLink}
          >
            <span>Link to the Spread Sheet</span>
            <span>↗</span>
          </a>
          <a
            href="https://mahindraecolecentrale-my.sharepoint.com/personal/yayati_gupta_mahindrauniversity_edu_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fyayati%5Fgupta%5Fmahindrauniversity%5Fedu%5Fin%2FDocuments%2FCS1002%2C%20Data%20Structures&ct=1777819275370&or=OWA%2DNT%2DMail&cid=61ae916e%2D10ce%2D5959%2D1a81%2D35490a02f453&ga=1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.quickLink}
          >
            <span>Link to the One Drive</span>
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* Resources Dropdowns */}
      <section className={styles.resourcesSection}>
        <div className={styles.quickLinksHeader}>{'// resources'}</div>
        <div className={styles.dropdownsRow}>
          {resourceCategories.map((cat) => (
            <div
              key={cat.id}
              className={styles.dropdownWrapper}
              data-dropdown
            >
              <button
                className={`${styles.dropdownBtn} ${openDropdown === cat.id ? styles.dropdownBtnOpen : ''}`}
                style={{ '--cat-color': cat.color } as React.CSSProperties}
                onClick={() => toggleDropdown(cat.id)}
              >
                <span>{cat.label}</span>
                <span className={styles.dropdownArrow}>
                  {openDropdown === cat.id ? '▲' : '▼'}
                </span>
              </button>
              {openDropdown === cat.id && (
                <div className={styles.dropdownMenu}>
                  {cat.items.map((item) => (
                    <a
                      key={item.url}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.dropdownItem}
                      style={{ '--cat-color': cat.color } as React.CSSProperties}
                    >
                      <span>{item.label}</span>
                      <span>↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="https://visualgo.net/en" className={styles.heroSub}>
          To help you visualise data structures, click here. 
        </Link>
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
        <p className={styles.heroSub}>
            If you find any errors, feel free to drop me a message - it would help everyone
        </p>
        <p className={styles.heroSub}>Akanksha D - se25ucse070@mahindrauniversity.edu.in</p>
      </footer>
    </main>
  )
}