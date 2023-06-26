export type BaseSuccessResponse<T> = {
  isSuccess: true
  code: string
  details: T
}
