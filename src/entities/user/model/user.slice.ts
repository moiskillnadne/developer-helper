import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { User, UserInitialState } from "./types"

const initialState: UserInitialState = {
  user: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<User>) => {
      state.user = actions.payload
    },
  },
})

export const actions = userSlice.actions
export const reducer = userSlice.reducer
