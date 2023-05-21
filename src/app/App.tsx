import React from "react"

import { RouterProvider } from "./providers"

import { Router } from "~/pages"

function App() {
  return (
    <>
      <RouterProvider>
        <Router />
      </RouterProvider>
    </>
  )
}

export default App
