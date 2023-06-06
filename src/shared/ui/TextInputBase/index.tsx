import { FormControl, FormHelperText, InputLabel, OutlinedInput, TextField } from "@mui/material"
import { useController, useFormContext } from "react-hook-form"

type Props = React.ComponentProps<typeof TextField> & {
  name: string
}

export const TextInputBase = (props: Props) => {
  const { name, onChange, sx } = props

  const { control } = useFormContext()
  const {
    field: { onChange: onFormChange },
    fieldState: { error, invalid },
  } = useController({ name, control })

  const onChangeHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    if (onChange) {
      onChange(event)
    }

    onFormChange(value)
  }

  return (
    <FormControl sx={sx} error={invalid}>
      <InputLabel htmlFor="base-text-input">{name}</InputLabel>
      <OutlinedInput id="base-text-input" label={name} onChange={onChangeHanlder} />
      <FormHelperText id="base-text-input">{error?.message}</FormHelperText>
    </FormControl>
  )
}
