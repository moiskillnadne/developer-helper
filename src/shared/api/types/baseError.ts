interface Result {
  message: string
  path: string[]
  type: string
}

export type BaseError = {
  message?: string
  response: { data: { result: Array<Result> } }
  evaluatedMessage?: string
}
