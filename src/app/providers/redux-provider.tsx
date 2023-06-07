import { Provider } from "react-redux"

import store from "../store"

interface ReduxProps {
  children: React.ReactNode
}

export const ReduxProvider = (props: ReduxProps) => {
  return <Provider store={store}>{props.children}</Provider>
}
