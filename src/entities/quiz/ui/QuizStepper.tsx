import { QuestionCard } from "./QuestionCard"
import { Quiz } from "../model"
import { useDemoQuiz } from "../model/hooks/useQuiz"

type Props = {
  quiz: Quiz
}

export const QuizStepper = ({ quiz }: Props) => {
  const { currentQuestion, nextStep, saveQuestionAnswer } = useDemoQuiz({ quiz })

  const onChange = (value: string) => {
    if (!currentQuestion) return

    saveQuestionAnswer({
      questionId: currentQuestion.id,
      answer: value,
    })

    setTimeout(() => {
      nextStep()
    }, 1000)
  }

  if (!currentQuestion) {
    return <div>Quiz completed!</div>
  }

  return <QuestionCard question={currentQuestion} onChange={onChange} />
}
