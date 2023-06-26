import { useLocation, useNavigate } from "react-router-dom"

export const useCustomNavigator = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const canGoBack = location.key !== "default"

  const goBack = () => {
    if (canGoBack) {
      return navigate(-1)
    }
  }

  return {
    navigate,
    goBack,
    canGoBack,
  }
}
