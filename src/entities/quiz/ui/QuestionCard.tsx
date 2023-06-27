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
  useMediaQuery,
} from "@mui/material"
import { animated } from "@react-spring/web"

import { Question } from "../model"

import { UseFadeOutInAnimationSprings } from "~/shared/utils"

type Props = {
  question: Question
  step: number
  quizLength: number
  springs?: UseFadeOutInAnimationSprings
  onChange: (value: string) => void
}

export const QuestionCard = (props: Props) => {
  const { question, onChange, step, quizLength, springs } = props

  const mobileMatches = useMediaQuery("(max-width:600px)")

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return onChange(e.target.value)
  }

  return (
    <Card sx={{ width: mobileMatches ? 315 : 600 }}>
      <CardContent>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 50px" }}>
          <animated.div style={{ ...springs }}>
            <Typography gutterBottom variant="h5" component="div">
              {question.question}
            </Typography>
          </animated.div>
          <Box display="flex">
            <animated.div style={{ ...springs }}>
              <Typography gutterBottom variant="subtitle1" component="div">
                {`${step}`}
              </Typography>
            </animated.div>
            <Typography gutterBottom variant="subtitle1" component="div">
              {`/${quizLength}`}
            </Typography>
          </Box>
        </Box>
        <animated.div style={{ ...springs }}>
          <Typography variant="body2" color="text.secondary">
            {question.description}
          </Typography>
        </animated.div>
      </CardContent>
      <animated.div style={{ ...springs }}>
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
      </animated.div>
    </Card>
  )
}
