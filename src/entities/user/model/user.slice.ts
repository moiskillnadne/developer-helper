import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { User, UserInitialState } from "./types"

const initialState: UserInitialState = {
  details: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<User>) => {
      state.details = actions.payload
    },
    clearUser: () => {
      return initialState
    },
  },
})

export const actions = userSlice.actions
export const reducer = userSlice.reducer
