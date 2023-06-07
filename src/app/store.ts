import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { quizModel } from "../entities/quiz"

export const rootReducer = combineReducers({
  quiz: quizModel.reducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
