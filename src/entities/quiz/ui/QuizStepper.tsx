import { QuestionCard } from "./QuestionCard"
import { Quiz } from "../model"
import { useDemoQuiz } from "../model/hooks/useQuiz"

import { useFadeOutOnAnimation } from "~/shared/utils"

type Props = {
  quiz: Quiz
  onComplete?: () => void
}

export const QuizStepper = ({ quiz, onComplete }: Props) => {
  const { startFadeOutInAnimation, endFadeOutInAnimation, springs } = useFadeOutOnAnimation()

  const { currentQuestion, nextStep, saveQuestionAnswer, step, hasNextQuestion } = useDemoQuiz({ quiz })

  const onChange = (value: string) => {
    if (!currentQuestion) return

    saveQuestionAnswer({
      quizId: quiz.id,
      questionId: currentQuestion.id,
      answer: value,
    })

    startFadeOutInAnimation()
    setTimeout(() => {
      if (hasNextQuestion) {
        nextStep()
        endFadeOutInAnimation()
      }

      if (!hasNextQuestion && onComplete) {
        return onComplete()
      }
    }, 1000)
  }

  if (!currentQuestion) {
    return <div>Quiz completed!</div>
  }

  return (
    <QuestionCard
      question={currentQuestion}
      onChange={onChange}
      step={step + 1}
      quizLength={quiz.questions.length}
      springs={springs}
    />
  )
}
