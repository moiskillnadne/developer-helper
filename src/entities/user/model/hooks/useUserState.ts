import { useCallback } from "react"

import { userSelector } from "../selectors"
import { User } from "../types"
import { actions } from "../user.slice"

import { useAppDispatch, useAppSelector } from "~/shared/utils"

export const useUserState = () => {
  const dispatch = useAppDispatch()

  const user = useAppSelector(userSelector)

  const setUser = useCallback(
    (payload: User) => {
      dispatch(actions.setUser(payload))
    },
    [dispatch],
  )

  const clearUser = useCallback(() => {
    dispatch(actions.clearUser())
  }, [dispatch])

  return { user, setUser, clearUser }
}
