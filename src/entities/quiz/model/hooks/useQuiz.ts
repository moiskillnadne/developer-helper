import { useEffect, useMemo } from "react"

import { useQuizState } from "./useQuizState"
import { useStepper } from "./useStepper"
import { SetQuestionAnswerPayload } from "../payload.types"
import { Question, Quiz } from "../types"

type Props = {
  quiz: Quiz
}

type Return = {
  currentQuestion: Question | null
  isLastQuestion: boolean
  hasNextQuestion: boolean
  step: number
  nextStep: () => void
  saveQuestionAnswer: (payload: SetQuestionAnswerPayload) => void
}

export const useDemoQuiz = ({ quiz }: Props): Return => {
  const { quiz: activeQuiz, setQuiz, saveQuestionAnswer } = useQuizState({ quizId: quiz.id })
  const { step, nextStep } = useStepper()

  // Save demoQuiz to redux state
  useEffect(() => {
    setQuiz(quiz)
  }, [quiz, setQuiz])

  const currentQuestion = useMemo(() => {
    if (!activeQuiz) return null

    return activeQuiz.questions[step]
  }, [activeQuiz, step])

  const isLastQuestion = useMemo(() => {
    if (!activeQuiz) return false

    return step === activeQuiz.questions.length - 1
  }, [activeQuiz, step])

  const hasNextQuestion = useMemo(() => {
    if (!activeQuiz) return false

    return step < activeQuiz.questions.length - 1
  }, [activeQuiz, step])

  return {
    currentQuestion,
    isLastQuestion,
    hasNextQuestion,
    step,
    nextStep,
    saveQuestionAnswer,
  }
}
