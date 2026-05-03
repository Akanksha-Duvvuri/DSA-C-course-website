import Link from 'next/link'
import { resources, quickLinks, ResourceCategory } from '../data/resources'
import type { Metadata } from 'next'
import styles from './resources.module.css'

export const metadata: Metadata = {
  title: 'Resources — DSA in C',
}

export default function ResourcesPage() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoAccent}>&gt;_</span>
            <span className={styles.logoText}>DSA in C</span>
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>home</Link>
            <Link href="/resources" className={`${styles.navLink} ${styles.navLinkActive}`}>resources</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroTag}>{'// resources'}</div>
        <h1 className={styles.heroTitle}>Study <span className={styles.heroAccent}>Materials</span></h1>
        <p className={styles.heroSub}>Handouts, lab questions, previous year papers and slides — all in one place.</p>
      </section>

      {/* Quick Links */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>{'// quick links'}</span>
        </div>
        <div className={styles.quickLinks}>
          {quickLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quickLink}
            >
              <span>{link.label}</span>
              <span className={styles.quickLinkArrow}>↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Resource Categories */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>{'// files'}</span>
        </div>
        <div className={styles.grid}>
          {resources.map((category: ResourceCategory) => (
            <div
              key={category.id}
              className={styles.card}
              style={{ '--cat-color': category.color } as React.CSSProperties}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon} style={{ color: category.color }}>
                  {category.icon}
                </span>
                <h2 className={styles.cardTitle}>{'// '}{category.title.toLowerCase()}</h2>
              </div>
              <div className={styles.cardItems}>
                {category.items.length === 0 ? (
                  <p className={styles.empty}>coming soon...</p>
                ) : (
                  category.items.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.item}
                    >
                      <span className={styles.itemLabel}>{item.label}</span>
                      <span className={styles.itemArrow}>↗</span>
                    </a>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <span>{'// DSA in C · keep grinding'}</span>
      </footer>
    </main>
  )
}