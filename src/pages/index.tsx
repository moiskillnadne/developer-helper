import { Route, Routes } from "react-router-dom"

import { DashboardPage } from "./DashboardPage"
import { LandingPage } from "./LandingPage"
import { LoginPage } from "./LoginPage"
import { SignupPage } from "./SignupPage"

import { userModel } from "~/entities/user"
import { ROUTES } from "~/shared/utils"
import { ProtectedRoute } from "~/widgets/ProtectedRoute"

export const Router = () => {
  const { isUserAuthenticated, tokens } = userModel.useAuthGuard()

  if (isUserAuthenticated) {
    return (
      <Routes>
        <Route element={<ProtectedRoute token={tokens!.accessToken} />}>
          <Route path={ROUTES.dashboard.path} element={<DashboardPage />} />
        </Route>
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path={ROUTES.landing.path} element={<LandingPage />} />
      <Route path={ROUTES.login.path} element={<LoginPage />} />
      <Route path={ROUTES.signup.path} element={<SignupPage />} />
    </Routes>
  )
}
