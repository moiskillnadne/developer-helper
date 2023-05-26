import { AxiosResponse } from "axios"
import { MutationFunction, UseMutationOptions, useMutation } from "react-query"

import { BaseError } from "../types"

const useBaseMutation = <TRequest, TResponse>(
  key: string[],
  mutationFn: MutationFunction<AxiosResponse<TResponse, BaseError>, TRequest>,
  options?: Omit<
    UseMutationOptions<AxiosResponse<TResponse, BaseError>, BaseError, TRequest>,
    "mutationKey" | "mutationFn"
  >,
) => {
  return useMutation(key, mutationFn, {
    ...options,
    onError: (error: BaseError, variables: TRequest, context: unknown) => {
      // Custom error handling logic

      if (options?.onError) {
        options?.onError(error, variables, context)
      }
    },
  })
}

export default useBaseMutation
