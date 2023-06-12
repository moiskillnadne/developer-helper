import { useEffect, useMemo } from "react"

import { useDemoQuizState } from "./useDemoQuizState"
import { useStepper } from "./useStepper"
import { SetQuestionAnswerPayload } from "../payload.types"
import { Question, Quiz } from "../types"

type Props = {
  quiz: Quiz
}

type Return = {
  currentQuestion: Question | null
  isLastQuestion: boolean
  step: number
  nextStep: () => void
  saveQuestionAnswer: (payload: SetQuestionAnswerPayload) => void
}

export const useDemoQuiz = ({ quiz }: Props): Return => {
  const { demoQuiz, setDemoQuiz, saveQuestionAnswer } = useDemoQuizState()
  const { step, nextStep } = useStepper()

  // Save demoQuiz to redux state
  useEffect(() => {
    setDemoQuiz(quiz)
  }, [quiz, setDemoQuiz])

  const currentQuestion = useMemo(() => {
    if (!demoQuiz) return null

    return demoQuiz.questions[step]
  }, [demoQuiz, step])

  const isLastQuestion = useMemo(() => {
    if (!demoQuiz) return false

    return step === demoQuiz.questions.length - 1
  }, [demoQuiz, step])

  return {
    currentQuestion,
    isLastQuestion,
    step,
    nextStep,
    saveQuestionAnswer,
  }
}
