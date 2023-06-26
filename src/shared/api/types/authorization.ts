import { BaseSuccessResponse } from "./baseSuccess"

export type LoginPayload = {
  email: string
  password: string
}

export type LoginSuccessResponse = BaseSuccessResponse<{
  user: {
    id: string
    email: string
    firstName: string
    lastName: string
    cognitoId: string
    username: string
  }
  accessToken: string
  refreshToken: string
  idToken: string
}>

export type SignupPayload = {
  firstName: string
  lastName: string
  email: string
  password: string
}

export type SignupSuccessResponse = BaseSuccessResponse<{
  id: string
  createAt: string
  updateAt: string
  email: string
  firstName: string
  lastName: string
  cognitoId: string
  username: string
}>

export type RefreshTokensPayload = {
  refreshToken: string
}

export type RefreshTokensSuccessResponse = BaseSuccessResponse<{
  idToken: string
  accessToken: string
  refreshToken: string
}>
