import { PropsWithChildren, useEffect } from "react"

import { SxProps, Theme } from "@mui/material"
import Button from "@mui/material/Button"
import { animated, useSpring } from "@react-spring/web"

type Props = PropsWithChildren<{
  type?: "button" | "submit" | "reset"
  variant?: "text" | "outlined" | "contained"
  isDisabled?: boolean
  isLoading?: {
    status: boolean
    icon: React.ReactNode
  }
  isSuccess?: {
    status: boolean
    icon: React.ReactNode
  }
  sx?: SxProps<Theme> | undefined

  onClick?: () => void
}>

export const BasicButton = (props: Props) => {
  const [fadeSprings, fadeApi] = useSpring(() => ({
    from: { opacity: 1 },
  }))

  useEffect(() => {
    fadeApi({
      from: { opacity: 0 },
      to: { opacity: 1 },
    })
  }, [fadeApi, props.isLoading, props.isSuccess])

  return (
    <Button
      type={props.type}
      variant={props.variant}
      disabled={props.isDisabled}
      onClick={props.onClick}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...props.sx,
      }}>
      {props.isLoading?.status && <animated.span style={{ ...fadeSprings }}>{props.isLoading.icon}</animated.span>}

      {props.isSuccess?.status && <animated.span style={{ ...fadeSprings }}>{props.isSuccess.icon}</animated.span>}

      {!props.isLoading?.status && !props.isSuccess?.status && (
        <animated.div style={{ ...fadeSprings }}>{props.children}</animated.div>
      )}
    </Button>
  )
}
