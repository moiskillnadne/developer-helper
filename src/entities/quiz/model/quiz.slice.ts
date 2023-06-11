import { createSlice } from "@reduxjs/toolkit"

import { QuizInitialState } from "./types"

const initialState: QuizInitialState = {
  demoQuiz: null,
}

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
})

export const actions = quizSlice.actions
export const reducer = quizSlice.reducer
