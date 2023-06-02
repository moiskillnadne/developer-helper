import { AppLayout } from "./layout"
import { CustomThemeProvider, RouterProvider } from "./providers"

import { Router } from "~/pages"

import "./index.css"

function App() {
  return (
    <>
      <CustomThemeProvider>
        <RouterProvider>
          <AppLayout>
            <Router />
          </AppLayout>
        </RouterProvider>
      </CustomThemeProvider>
    </>
  )
}

export default App
