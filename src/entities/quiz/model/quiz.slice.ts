import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { SetQuestionAnswerPayload } from "./payload.types"
import { Quiz, QuizInitialState } from "./types"

const initialState: QuizInitialState = {
  demoQuiz: null,
}

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setDemoQuiz: (state, action: PayloadAction<Quiz>) => {
      state.demoQuiz = action.payload
    },
    saveDemoQuizAnswerByQuestionId: (state, action: PayloadAction<SetQuestionAnswerPayload>) => {
      const { questionId, answer } = action.payload

      if (!state.demoQuiz) return

      const questionIndex = state.demoQuiz.questions.findIndex(question => question.id === questionId)

      if (questionIndex === -1) return

      state.demoQuiz.questions[questionIndex].answer = answer
    },
  },
})

export const actions = quizSlice.actions
export const reducer = quizSlice.reducer
