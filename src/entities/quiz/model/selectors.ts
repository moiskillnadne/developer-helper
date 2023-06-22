import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "~/shared/utils"

export const quizSelector = (state: RootState) => state.quiz
export const activeQuizesSelector = createSelector(quizSelector, quiz => quiz.active)
