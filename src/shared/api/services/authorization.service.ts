import axiosService from "../axios"
import { LoginPayload, LoginSuccessResponse, SignupPayload, SignupSuccessResponse } from "../types"

function authorizationService() {
  return {
    login(data: LoginPayload) {
      return axiosService.post<LoginSuccessResponse>("/login", data)
    },
    signup(data: SignupPayload) {
      return axiosService.post<SignupSuccessResponse>("/signup", data)
    },
  }
}

export default authorizationService()
