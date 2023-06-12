import { animated, useSpring } from "@react-spring/web"

import { QuestionCard } from "./QuestionCard"
import { Quiz } from "../model"
import { useDemoQuiz } from "../model/hooks/useQuiz"

type Props = {
  quiz: Quiz
}

export const QuizStepper = ({ quiz }: Props) => {
  const [springs, api] = useSpring(() => ({
    from: { opacity: 1 },
  }))

  const { currentQuestion, nextStep, saveQuestionAnswer, step } = useDemoQuiz({ quiz })

  const onChange = (value: string) => {
    if (!currentQuestion) return

    saveQuestionAnswer({
      questionId: currentQuestion.id,
      answer: value,
    })

    api.start({ from: { opacity: 1 }, to: { opacity: 0 }, delay: 500, config: { duration: 500 } })
    setTimeout(() => {
      nextStep()
      api.start({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 500 } })
    }, 1000)
  }

  if (!currentQuestion) {
    return <div>Quiz completed!</div>
  }

  return (
    <animated.div style={{ ...springs }}>
      <QuestionCard question={currentQuestion} onChange={onChange} step={step + 1} quizLength={quiz.questions.length} />
    </animated.div>
  )
}
