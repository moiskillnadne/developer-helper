import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Box,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material"

import { Quiz } from "../model"

type Props = {
  quiz: Quiz
}

export const QuizCard = (props: Props) => {
  const { quiz } = props

  return (
    <Card sx={{ width: 600 }}>
      <CardContent>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 50px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {quiz.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {`${quiz.questions[0].order}/${quiz.questions.length}`}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {quiz.description}
        </Typography>
      </CardContent>
      <CardActions>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </CardActions>
    </Card>
  )
}
