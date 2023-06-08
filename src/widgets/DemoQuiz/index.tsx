import { QuizCard, quizModel } from "~/entities/quiz"

const mockQuiz: quizModel.Quiz = {
  id: "1",
  title: "Demo Quiz",
  description: "This is a demo quiz",
  questions: [
    {
      id: "1",
      order: 1,
      question: "Demo Question 1",
      description: "This is a demo question",
      correctOptionId: "1",
      options: [
        {
          id: "1",
          name: "Demo Answer 1",
        },
        {
          id: "2",
          name: "Demo Answer 2",
        },
        {
          id: "3",
          name: "Demo Answer 3",
        },
        {
          id: "4",
          name: "Demo Answer 4",
        },
      ],
    },
    {
      id: "2",
      order: 2,
      question: "Demo Question 2",
      description: "This is a demo question",
      correctOptionId: "3",
      options: [
        {
          id: "1",
          name: "Demo Answer 1",
        },
        {
          id: "2",
          name: "Demo Answer 2",
        },
        {
          id: "3",
          name: "Demo Answer 3",
        },
        {
          id: "4",
          name: "Demo Answer 4",
        },
      ],
    },
    {
      id: "3",
      order: 3,
      question: "Demo Question 3",
      description: "This is a demo question",
      correctOptionId: "4",
      options: [
        {
          id: "1",
          name: "Demo Answer 1",
        },
        {
          id: "2",
          name: "Demo Answer 2",
        },
        {
          id: "3",
          name: "Demo Answer 3",
        },
        {
          id: "4",
          name: "Demo Answer 4",
        },
      ],
    },
  ],
}

export const DemoQuiz = () => {
  return <QuizCard quiz={mockQuiz} />
}
