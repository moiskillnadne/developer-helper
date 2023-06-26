import axiosService from "../axios"
import {
  LoginPayload,
  LoginSuccessResponse,
  RefreshTokensPayload,
  RefreshTokensSuccessResponse,
  SignupPayload,
  SignupSuccessResponse,
} from "../types"

function authorizationService() {
  return {
    login(data: LoginPayload) {
      return axiosService.post<LoginSuccessResponse>("/login", data)
    },
    signup(data: SignupPayload) {
      return axiosService.post<SignupSuccessResponse>("/signup", data)
    },
    refreshTokens: (data: RefreshTokensPayload) => {
      return axiosService.post<RefreshTokensSuccessResponse>("/refresh-tokens", data)
    },
  }
}

export default authorizationService()
