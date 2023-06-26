import React from "react"

import { QueryClient, QueryClientProvider } from "react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

interface ReactQueryProps {
  children: React.ReactNode
}

export const ReactQueryProvider = (props: ReactQueryProps) => {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
}
