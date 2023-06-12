import { useCallback, useState } from "react"

type Return = {
  step: number
  nextStep: () => void
}

export const useStepper = (initialStep?: number): Return => {
  const [step, setStep] = useState(initialStep ?? 0)

  const nextStep = useCallback(() => {
    return setStep(step => step + 1)
  }, [])

  return {
    step,
    nextStep,
  }
}
