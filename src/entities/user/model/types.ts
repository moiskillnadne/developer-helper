export type UserInitialState = {
  details: User | null
}

export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
}
