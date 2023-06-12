import { useCallback } from "react"

import { SetQuestionAnswerPayload } from "../payload.types"
import { actions } from "../quiz.slice"
import { demoQuizSelector } from "../selectors"
import { Quiz } from "../types"

import { useAppSelector } from "~/shared/utils"
import { useAppDispatch } from "~/shared/utils"

type Return = {
  demoQuiz: Quiz | null
  setDemoQuiz: (quiz: Quiz) => void
  saveQuestionAnswer: (payload: SetQuestionAnswerPayload) => void
}

export const useDemoQuizState = (): Return => {
  const dispatch = useAppDispatch()

  const demoQuiz = useAppSelector(demoQuizSelector)

  const setDemoQuiz = useCallback(
    (quiz: Quiz) => {
      return dispatch(actions.setDemoQuiz(quiz))
    },
    [dispatch],
  )

  const saveQuestionAnswer = useCallback(
    (payload: SetQuestionAnswerPayload) => {
      dispatch(actions.saveDemoQuizAnswerByQuestionId(payload))
    },
    [dispatch],
  )

  return { demoQuiz, setDemoQuiz, saveQuestionAnswer }
}
