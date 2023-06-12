import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "~/shared/utils"

export const quizSelector = (state: RootState) => state.quiz
export const demoQuizSelector = createSelector(quizSelector, quiz => quiz.demoQuiz)
