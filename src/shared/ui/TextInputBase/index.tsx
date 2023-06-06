import { FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import { useController, useFormContext } from "react-hook-form"

type Props = React.ComponentProps<typeof TextField> & {
  name: string
  rightIconAdornment?: React.ReactNode
}

export const TextInputBase = (props: Props) => {
  const { name, onChange, sx, rightIconAdornment, type } = props

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
      <OutlinedInput
        id="base-text-input"
        type={type}
        label={name}
        onChange={onChangeHanlder}
        endAdornment={<InputAdornment position="end">{rightIconAdornment}</InputAdornment>}
      />
      <FormHelperText id="base-text-input">{error?.message}</FormHelperText>
    </FormControl>
  )
}
