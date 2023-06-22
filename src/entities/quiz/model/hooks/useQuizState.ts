import { useCallback, useMemo } from "react"

import { SetQuestionAnswerPayload } from "../payload.types"
import { actions } from "../quiz.slice"
import { activeQuizesSelector } from "../selectors"
import { Quiz } from "../types"

import { useAppSelector } from "~/shared/utils"
import { useAppDispatch } from "~/shared/utils"

type Return = {
  quiz: Quiz | null
  setQuiz: (quiz: Quiz) => void
  saveQuestionAnswer: (payload: SetQuestionAnswerPayload) => void
}

type Props = {
  quizId: string
}

export const useQuizState = ({ quizId }: Props): Return => {
  const dispatch = useAppDispatch()

  const activeQuizes = useAppSelector(activeQuizesSelector)

  const quiz = useMemo(() => {
    return activeQuizes[quizId] ?? null
  }, [quizId, activeQuizes])

  const setQuiz = useCallback(
    (quiz: Quiz) => {
      return dispatch(actions.setQuiz(quiz))
    },
    [dispatch],
  )

  const saveQuestionAnswer = useCallback(
    (payload: SetQuestionAnswerPayload) => {
      dispatch(actions.saveQuizAnswerByIds(payload))
    },
    [dispatch],
  )

  return { quiz, setQuiz, saveQuestionAnswer }
}
