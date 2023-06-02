import React from "react"

import { CustomThemeProvider, RouterProvider } from "./providers"

import { Router } from "~/pages"

function App() {
  return (
    <>
      <CustomThemeProvider>
        <RouterProvider>
          <Router />
        </RouterProvider>
      </CustomThemeProvider>
    </>
  )
}

export default App
