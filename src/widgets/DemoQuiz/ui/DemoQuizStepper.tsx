import { useCallback, useState } from "react"

import { animated, useSpring } from "@react-spring/web"

import { DemoQuizResult } from "./DemoQuizResult"
import { mockQuiz } from "../lib"

import { QuizStepper } from "~/entities/quiz"

export const DemoQuiz = () => {
  const [isDemoQuizCompleted, setIsDemoQuizCompleted] = useState<boolean>(false)

  const [springs, api] = useSpring(() => ({
    from: { opacity: 0 },
  }))

  const onQuizComplete = useCallback(() => {
    setIsDemoQuizCompleted(true)
    api.start({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 500 } })
  }, [api])

  if (isDemoQuizCompleted) {
    return (
      <animated.div style={{ ...springs }}>
        <DemoQuizResult quizId={mockQuiz.id} />
      </animated.div>
    )
  }

  return <QuizStepper quiz={mockQuiz} onComplete={onQuizComplete} />
}
