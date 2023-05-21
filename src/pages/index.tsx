import { Route, Routes } from "react-router-dom"

export const Router = () => {
  return (
    <Routes>
      <Route path="home" element={<div>hello home page</div>} />
    </Routes>
  )
}
