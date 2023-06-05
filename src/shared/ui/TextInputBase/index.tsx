import { FormControl, InputLabel, OutlinedInput, TextField } from "@mui/material"
import { useController, useFormContext } from "react-hook-form"

type Props = React.ComponentProps<typeof TextField> & {
  name: string
}

export const TextInputBase = (props: Props) => {
  const { name, onChange, sx } = props

  const { control } = useFormContext()
  const {
    field: { onChange: onFormChange },
  } = useController({ name, control })

  const onChangeHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (onChange) {
      onChange(event)
    }

    onFormChange(value)
  }

  return (
    <FormControl sx={sx}>
      <InputLabel htmlFor="component-outlined">{name}</InputLabel>
      <OutlinedInput id="component-outlined" label={name} onChange={onChangeHanlder} />
    </FormControl>
  )
}
