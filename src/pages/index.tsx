import { Route, Routes } from "react-router-dom"

import { LandingPage } from "./LandingPage"
import { LoginPage } from "./LoginPage"
import { SignupPage } from "./SignupPage"

import { ROUTES } from "~/shared/utils"

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.landing.path} element={<LandingPage />} />
      <Route path={ROUTES.login.path} element={<LoginPage />} />
      <Route path={ROUTES.signup.path} element={<SignupPage />} />
    </Routes>
  )
}
