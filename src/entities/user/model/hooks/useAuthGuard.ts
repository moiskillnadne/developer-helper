import { useUserState } from "./useUserState"
import { secureTokensStorage } from "../../lib"

export const useAuthGuard = () => {
  const tokens = secureTokensStorage.getTokens()

  const { user } = useUserState()

  const isUserAuthenticated = Boolean(tokens && user.details)

  return { isUserAuthenticated, tokens, user }
}
