import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material"

import { Question } from "../model"

type Props = {
  question: Question
  step: number
  quizLength: number
  onChange: (value: string) => void
}

export const QuestionCard = (props: Props) => {
  const { question, onChange, step, quizLength } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return onChange(e.target.value)
  }

  return (
    <Card sx={{ width: 600 }}>
      <CardContent>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 50px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {question.question}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            {`${step} / ${quizLength}`}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {question.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: 2 }}>
        <FormControl>
          <RadioGroup
            aria-labelledby={`question-${question.id}-radio-buttons-group-label`}
            name="radio-buttons-group"
            onChange={onChangeHandler}>
            {question.options.map(option => {
              return <FormControlLabel key={option.id} value={option.id} control={<Radio />} label={option.name} />
            })}
          </RadioGroup>
        </FormControl>
      </CardActions>
    </Card>
  )
}
