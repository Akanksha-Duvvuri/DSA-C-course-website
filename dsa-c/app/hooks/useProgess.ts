'use client'

import { useState, useEffect } from 'react'
import { Topic, TopicProgress, CheckedState } from '../types'

interface UseProgressReturn {
  toggle: (topicId: string, subtopic: string) => void
  isChecked: (topicId: string, subtopic: string) => boolean
  percent: number
  completedSubtopics: number
  totalSubtopics: number
  topicProgress: (topicId: string, subtopics: string[]) => TopicProgress
}

export function useProgress(topics: Topic[]): UseProgressReturn {
  const [checked, setChecked] = useState<CheckedState>({})

  useEffect(() => {
    const stored = localStorage.getItem('dsa-progress')
    if (stored) {
      try {
        setChecked(JSON.parse(stored) as CheckedState)
      } catch {
        // ignore malformed data
      }
    }
  }, [])

  const toggle = (topicId: string, subtopic: string): void => {
    const key = `${topicId}::${subtopic}`
    setChecked((prev) => {
      const next: CheckedState = { ...prev, [key]: !prev[key] }
      localStorage.setItem('dsa-progress', JSON.stringify(next))
      return next
    })
  }

  const isChecked = (topicId: string, subtopic: string): boolean =>
    !!checked[`${topicId}::${subtopic}`]

  const totalSubtopics = topics.reduce((sum, t) => sum + t.subtopics.length, 0)
  const completedSubtopics = Object.values(checked).filter(Boolean).length
  const percent =
    totalSubtopics > 0 ? Math.round((completedSubtopics / totalSubtopics) * 100) : 0

  const topicProgress = (topicId: string, subtopics: string[]): TopicProgress => {
    const done = subtopics.filter((s) => !!checked[`${topicId}::${s}`]).length
    return { done, total: subtopics.length }
  }

  return { toggle, isChecked, percent, completedSubtopics, totalSubtopics, topicProgress }
}