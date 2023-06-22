import { SpringValue, useSpring } from "@react-spring/web"

export type UseFadeOutInAnimationSprings = {
  opacity: SpringValue<number>
}

export const useFadeOutOnAnimation = () => {
  const [springs, api] = useSpring(() => ({
    from: { opacity: 1 },
  }))

  const startFadeOutInAnimation = () => {
    return api.start({ from: { opacity: 1 }, to: { opacity: 0 }, delay: 500, config: { duration: 500 } })
  }

  const endFadeOutInAnimation = () => {
    api.start({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 500 } })
  }

  return {
    springs,
    api,
    startFadeOutInAnimation,
    endFadeOutInAnimation,
  }
}
