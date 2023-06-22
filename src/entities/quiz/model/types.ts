export type QuizInitialState = {
  active: Record<string, Quiz> // string = quizId
}

export type Quiz = {
  id: string
  title: string
  description: string
  questions: Question[]
}

export type Question = {
  id: string
  order: number
  question: string
  description: string
  options: Option[]
  correctOptionId: string
  answer: string | null // optionId
}

export type Option = {
  id: string
  name: string
}
