import axios, { AxiosError, AxiosRequestConfig } from "axios"

import { authorizationService } from "./services"
import { secureTokensStorage } from "../../entities/user"
import { eventEmitter } from "../utils"

type RequestConfig = AxiosRequestConfig<any> & {
  retry?: boolean
}

const axiosService = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  withCredentials: true,
})

axiosService.defaults.headers.common["Content-Type"] = "application/json"

axiosService.interceptors.request.use(
  config => {
    const tokens = secureTokensStorage.getTokens()

    if (tokens?.accessToken) {
      config.headers.Authorization = `Bearer ${tokens.accessToken}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  },
)

axiosService.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const config = error?.config as RequestConfig

    if (error.response?.status === 401 && !config?.retry) {
      config.retry = true

      const tokens = secureTokensStorage.getTokens()

      if (!tokens?.refreshToken) {
        return Promise.reject(error)
      }

      try {
        const { data } = await authorizationService.refreshTokens({ refreshToken: tokens?.refreshToken })

        secureTokensStorage.setTokens(data.details)

        config.headers!.Authorization = `Bearer ${data.details.accessToken}`
      } catch (e) {
        eventEmitter.emit("onLogout")
        Promise.reject(e)
      }

      return axiosService(config)
    }

    return Promise.reject(error)
  },
)

export default axiosService
