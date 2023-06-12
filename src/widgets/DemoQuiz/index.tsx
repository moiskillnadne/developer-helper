import { QuizStepper, quizModel } from "~/entities/quiz"

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
      answer: null,
      options: [
        {
          id: "3b5fad3f-538b-4de0-8cb9-4beca7a02865",
          name: "Demo Answer 1",
        },
        {
          id: "a3468073-734c-46e7-95e9-d3efe6760ce3",
          name: "Demo Answer 2",
        },
        {
          id: "e6cc2eb0-ab5b-4ba8-bd0f-ece3454ddae5",
          name: "Demo Answer 3",
        },
        {
          id: "7b378357-e43b-4479-ba9f-d287c24291bd",
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
      answer: null,
      options: [
        {
          id: "830b7df9-ace0-4fbf-bb47-7a5c6903cca3",
          name: "Demo Answer 1",
        },
        {
          id: "dc30587a-b6fd-45df-9439-99660b4637bc",
          name: "Demo Answer 2",
        },
        {
          id: "ceec1689-b08f-4785-bab0-196acc284311",
          name: "Demo Answer 3",
        },
        {
          id: "256b17b8-6db1-42a4-a297-7bbfcc3f00bd",
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
      answer: null,
      options: [
        {
          id: "a769efcd-1389-4bdf-8916-b3030cf48ab2",
          name: "Demo Answer 1",
        },
        {
          id: "442aa49f-765e-42a7-a559-b7a63f268ade",
          name: "Demo Answer 2",
        },
        {
          id: "1477de8b-7c9c-46a5-8b86-8eb798705cc3",
          name: "Demo Answer 3",
        },
        {
          id: "a4e3aabf-a60f-4bd3-bcaa-2534ea0af40e",
          name: "Demo Answer 4",
        },
      ],
    },
  ],
}

export const DemoQuiz = () => {
  return <QuizStepper quiz={mockQuiz} />
}
