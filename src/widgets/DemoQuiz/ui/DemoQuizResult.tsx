import { Box, Card, CardContent, Typography, useMediaQuery } from "@mui/material"

import { quizModel } from "~/entities/quiz"
import { SignupButton } from "~/features/Signup"

type Props = {
  quizId: string
}

export const DemoQuizResult = ({ quizId }: Props) => {
  const { correctAnswersCount, questionsCount } = quizModel.useQuizResult({ quizId })

  const mobileMatches = useMediaQuery("(max-width:600px)")

  return (
    <Card>
      <CardContent>
        <Typography variant={mobileMatches ? "h4" : "h3"} sx={{ marginBottom: 2 }}>
          Поздравляем!
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2, color: "secondary.main" }}>
          Вы успешно прошли ваш первый квиз! Вот ваша статистика:
        </Typography>

        <Box sx={{ borderLeft: "2px solid black", paddingLeft: 2 }}>
          <Typography variant="subtitle2">{`Количество вопросов: ${questionsCount}`}</Typography>
          <Typography variant="subtitle2">{`Количество правильных ответов: ${correctAnswersCount}`}</Typography>
          <Typography variant="subtitle2">{`Процент правильных ответов: ${
            ((correctAnswersCount / questionsCount) * 100).toFixed(2) || 0
          }%`}</Typography>
        </Box>

        <Typography variant="subtitle1" sx={{ marginTop: 2, marginBottom: 2 }}>
          Зарегистрируйтесь чтобы пройти другие тесты и улучшить свои навыки.
        </Typography>

        <Box display="flex" justifyContent="center" marginTop={1}>
          <SignupButton />
        </Box>
      </CardContent>
    </Card>
  )
}
