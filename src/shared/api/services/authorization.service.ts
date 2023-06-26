import axiosService from "../axios"
import { LoginPayload, LoginSuccessResponse, SignupPayload, SignupSuccessResponse } from "../types"

function authorizationService() {
  return {
    login(data: LoginPayload) {
      return axiosService.post<LoginSuccessResponse>("/auth/login", data)
    },
    signup(data: SignupPayload) {
      return axiosService.post<SignupSuccessResponse>("/users", data)
    },
  }
}

export default authorizationService()
