import { useEffect, useState } from "react"

import { Tokens, secureTokensStorage } from "../../lib"

import { eventEmitter } from "~/shared/utils"

export const useTokensState = () => {
  const [tokens, setTokens] = useState<Tokens | null>(secureTokensStorage.getTokens())

  const updateTokens = () => {
    setTokens(secureTokensStorage.getTokens())
  }

  useEffect(() => {
    eventEmitter.on("onTokensChange", updateTokens)

    return () => {
      eventEmitter.off("onTokensChange", updateTokens)
    }
  }, [setTokens])

  return tokens
}
