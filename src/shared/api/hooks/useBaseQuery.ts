import { QueryFunction, UseQueryOptions, useQuery } from "react-query"

import { BaseError } from "../types"

type QueryKey = [string, Record<string, unknown>?]

const useBaseQuery = <TQueryFnData, TError = BaseError, TData = TQueryFnData>(
  key: QueryKey,
  queryFn: QueryFunction<TQueryFnData, QueryKey>,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, QueryKey>, "queryKey" | "queryFn">,
) => {
  return useQuery(key, queryFn, {
    ...options,
    onError: (error: BaseError) => {
      // Some logic for custom error handling

      if (options?.onError) {
        options?.onError(error as TError)
      }
    },
  } as typeof options)
}

export default useBaseQuery
