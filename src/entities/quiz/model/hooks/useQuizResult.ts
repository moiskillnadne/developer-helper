import { useMemo } from "react"

import { useQuizState } from "./useQuizState"
import { Question } from "../types"

type Props = {
  quizId: string
}

type Return = {
  correctAnswers: Question[]
  correctAnswersCount: number
  questionsCount: number
}

export const useQuizResult = ({ quizId }: Props): Return => {
  const { quiz } = useQuizState({ quizId })

  const correctAnswers = useMemo(() => {
    if (!quiz) return []

    const correctAnswersResult = quiz.questions.filter(question => question.correctOptionId === question.answer)

    return correctAnswersResult
  }, [quiz])

  return {
    correctAnswers,
    correctAnswersCount: correctAnswers.length,
    questionsCount: quiz?.questions.length || 0,
  }
}
