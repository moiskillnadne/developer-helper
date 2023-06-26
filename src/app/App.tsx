import { AppLayout } from "./layout"
import { CustomThemeProvider, ReactQueryProvider, ReduxProvider, RouterProvider } from "./providers"

import { Router } from "~/pages"

import "./index.css"

function App() {
  return (
    <>
      <CustomThemeProvider>
        <RouterProvider>
          <ReduxProvider>
            <ReactQueryProvider>
              <AppLayout>
                <Router />
              </AppLayout>
            </ReactQueryProvider>
          </ReduxProvider>
        </RouterProvider>
      </CustomThemeProvider>
    </>
  )
}

export default App
