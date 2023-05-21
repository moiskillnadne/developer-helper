import { PropsWithChildren } from "react"

import { BrowserRouter } from "react-router-dom"

type Props = PropsWithChildren<unknown>

export const RouterProvider = ({ children }: Props) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
