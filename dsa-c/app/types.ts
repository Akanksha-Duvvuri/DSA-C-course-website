export interface Topic {
  id: string
  label: string
  icon: string
  color: string
  subtopics: string[]
  description: string
}

export interface TopicProgress {
  done: number
  total: number
}

export interface CheckedState {
  [key: string]: boolean
}