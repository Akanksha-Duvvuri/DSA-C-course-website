import { topics } from '../data/topics'
import TopicClient from './TopicClient'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Topic } from '../types'

interface PageProps {
  params: { topic: string }
}

export function generateStaticParams(): { topic: string }[] {
  return topics.map((t: Topic) => ({ topic: t.id }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const topic = topics.find((t: Topic) => t.id === params.topic)
  if (!topic) return { title: 'Not Found' }
  return { title: `${topic.label} — DSA in C` }
}

export default function TopicPage({ params }: PageProps) {
  const topic = topics.find((t: Topic) => t.id === params.topic)
  if (!topic) notFound()

  const topicIndex = topics.findIndex((t: Topic) => t.id === params.topic)
  const prev: Topic | null = topicIndex > 0 ? topics[topicIndex - 1] : null
  const next: Topic | null = topicIndex < topics.length - 1 ? topics[topicIndex + 1] : null

  return (
    <TopicClient
      topic={topic}
      topicIndex={topicIndex}
      prev={prev}
      next={next}
      allTopics={topics}
    />
  )
}