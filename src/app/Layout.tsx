import { PropsWithChildren } from "react"

import { Header } from "../widgets/Header"

type Props = PropsWithChildren<unknown>

export const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="content-container">{children}</div>
    </>
  )
}
