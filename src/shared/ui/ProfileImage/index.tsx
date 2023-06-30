import Avatar from "@mui/material/Avatar"
import { SxProps, Theme } from "@mui/material/styles"

type ImageAvatarProps = {
  isStringAvatar: false

  src: string
}

type StringAvatarProps = {
  isStringAvatar: true

  firstName: string
  lastName: string
}

type Props = { sx?: SxProps<Theme> } & (ImageAvatarProps | StringAvatarProps)

export const ProfileImage = (props: Props) => {
  let avatarParams = {}

  if (props.isStringAvatar) {
    avatarParams = {
      sx: {
        bgcolor: "red",
      },
      children: `${props.firstName[0]}${props.lastName[0]}`,
    }
  } else {
    avatarParams = {
      src: props.src,
    }
  }

  return <Avatar {...avatarParams} sx={props.sx} />
}
