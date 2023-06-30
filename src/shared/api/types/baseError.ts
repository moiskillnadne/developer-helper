interface BaseServerError {
  cause: string
  message: string
  statusCode: number
  meta: {
    path: string
    timestamp: string
  }
}

export type BaseError = {
  message?: string
  response: { data: BaseServerError }
  evaluatedMessage?: string
  evaluatedCause?: string

  fallbackMessage: string
}
