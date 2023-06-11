import { AppLayout } from "./layout"
import { CustomThemeProvider, ReduxProvider, RouterProvider } from "./providers"

import { Router } from "~/pages"

import "./index.css"

function App() {
  return (
    <>
      <CustomThemeProvider>
        <RouterProvider>
          <ReduxProvider>
            <AppLayout>
              <Router />
            </AppLayout>
          </ReduxProvider>
        </RouterProvider>
      </CustomThemeProvider>
    </>
  )
}

export default App
