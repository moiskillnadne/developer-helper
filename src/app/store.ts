import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { quizModel } from "../entities/quiz"
import { userModel } from "../entities/user"

export const rootReducer = combineReducers({
  quiz: quizModel.reducer,
  user: userModel.reducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
