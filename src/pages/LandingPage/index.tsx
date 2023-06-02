import { useState } from "react"

import { Button, Container, FormControl, InputLabel, MenuItem, Select, Slider, Typography } from "@mui/material"

export const LandingPage = () => {
  const [ageValue, setAgeValue] = useState<number | undefined>(undefined)

  return (
    <Container>
      <Typography variant="h3">It is Landing page</Typography>

      <Button variant="contained" color="primary">
        Example button
      </Button>

      <Slider defaultValue={30} />

      <Typography variant="body1">{`Your selected age: ${ageValue ?? ""}`}</Typography>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ageValue}
          label="Age"
          onChange={e => {
            setAgeValue(Number(e.target.value))
          }}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl>
    </Container>
  )
}
