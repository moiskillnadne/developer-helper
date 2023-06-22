import { Box, Card, CardContent, Divider, Typography } from "@mui/material"

import { quizModel } from "~/entities/quiz"
import { SignupButton } from "~/features/Signup"

type Props = {
  quizId: string
}

export const DemoQuizResult = ({ quizId }: Props) => {
  const { correctAnswersCount, questionsCount } = quizModel.useQuizResult({ quizId })

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Поздравляем!
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          Вы успешно прошли ваш первый квиз! Вот ваша статистика:
        </Typography>

        <Typography variant="subtitle2">{`Количество вопросов: ${questionsCount}`}</Typography>
        <Typography variant="subtitle2">{`Количество правильных ответов: ${correctAnswersCount}`}</Typography>
        <Typography variant="subtitle2">{`Процент правильных ответов: ${
          ((correctAnswersCount / questionsCount) * 100).toFixed(2) || 0
        }%`}</Typography>

        <Divider />

        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          Зарегистрируйтесь чтобы пройти другие тесты и улучшить свои навыки.
        </Typography>

        <Box display="flex" justifyContent="center" marginTop={1}>
          <SignupButton />
        </Box>
      </CardContent>
    </Card>
  )
}
