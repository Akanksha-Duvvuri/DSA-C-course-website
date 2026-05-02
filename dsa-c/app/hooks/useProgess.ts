'use client'

import { useState, useEffect } from 'react'
import { Topic, TopicProgress, CheckedState } from '../types'

interface UseProgressReturn {
  toggle: (topicId: string, subtopic: string) => void  //marks and unmarks
  isChecked: (topicId: string, subtopic: string) => boolean  //checks if it is completed
  percent: number  //overall percentage
  completedSubtopics: number //number of subtopics finished
  totalSubtopics: number //total subtopics 
  topicProgress: (topicId: string, subtopics: string[]) => TopicProgress  //progress of one topic
}

export function useProgress(topics: Topic[]): UseProgressReturn {  //here topics is the parameter name and Topic[] is the array here so the type of the parameter must be an array with the name Topic -- basically a list of Topic objects
  const [checked, setChecked] = useState<CheckedState>({})  //initially it starts out as empty - the progess of the subtopics

  useEffect(() => { //runs once when the page loads
    const stored = localStorage.getItem('dsa-progress')  //looks in the browser storage for any saved progress
    if (stored) {  //if data exists
      try {
        setChecked(JSON.parse(stored) as CheckedState)  //load old progress  -- this is a JS snippet used to load, convert and update a state variable with data previously saved as a string - often from localstorage. 
        //set checked is a state setter function that takes the parsed object and updates  the applications state - triggering a re render
      } catch {  //if corrupter JSON, ignore instead of crashing
        // ignore malformed data
      }
    }
  }, [])


//used when my checkbox is clicked
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