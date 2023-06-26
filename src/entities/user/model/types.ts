export type UserInitialState = {
  user: User | null
}

export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
}
