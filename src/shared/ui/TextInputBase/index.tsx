import { TextField } from "@mui/material"
import { useController, useFormContext } from "react-hook-form"

type Props = React.ComponentProps<typeof TextField> & {
  name: string
}

export const TextInputBase = (props: Props) => {
  const { name, placeholder } = props

  const { control } = useFormContext()
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({ name, control })

  const onChangeHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    onChange(value)
  }

  return <TextField type={props.type} name={name} placeholder={placeholder} value={value} onChange={onChangeHanlder} />
}
