import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { SetQuestionAnswerPayload } from "./payload.types"
import { Quiz, QuizInitialState } from "./types"

const initialState: QuizInitialState = {
  active: {},
}

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuiz: (state, action: PayloadAction<Quiz>) => {
      state.active[action.payload.id] = action.payload
    },
    saveQuizAnswerByIds: (state, action: PayloadAction<SetQuestionAnswerPayload>) => {
      const { questionId, answer, quizId } = action.payload

      const foundQuiz = state.active[quizId]

      if (!foundQuiz) return

      const questionIndex = foundQuiz.questions.findIndex(question => question.id === questionId)

      if (questionIndex === -1) return

      state.active[quizId].questions[questionIndex].answer = answer
    },
  },
})

export const actions = quizSlice.actions
export const reducer = quizSlice.reducer
