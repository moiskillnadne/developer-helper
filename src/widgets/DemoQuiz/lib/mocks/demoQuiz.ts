import { quizModel } from "~/entities/quiz"

export const mockQuiz: quizModel.Quiz = {
  id: "1",
  title: "Демонстрационый квиз",
  description: "Это ознакомительный квиз, чтобы проверить ваши знания",
  questions: [
    {
      id: "1",
      order: 1,
      question: "HTML Тэги",
      description: "За что отвечает тэг <br>?",
      correctOptionId: "3b5fad3f-538b-4de0-8cb9-4beca7a02865",
      answer: null,
      options: [
        {
          id: "3b5fad3f-538b-4de0-8cb9-4beca7a02865",
          name: "Перенос строки",
        },
        {
          id: "a3468073-734c-46e7-95e9-d3efe6760ce3",
          name: "Создание таблицы",
        },
        {
          id: "e6cc2eb0-ab5b-4ba8-bd0f-ece3454ddae5",
          name: "Разделение страницы на части",
        },
        {
          id: "7b378357-e43b-4479-ba9f-d287c24291bd",
          name: "Редирект на другую страницу",
        },
      ],
    },
    {
      id: "2",
      order: 2,
      question: "Основы JavaScript",
      description: "Каким типом является NaN?",
      correctOptionId: "830b7df9-ace0-4fbf-bb47-7a5c6903cca3",
      answer: null,
      options: [
        {
          id: "830b7df9-ace0-4fbf-bb47-7a5c6903cca3",
          name: "Number",
        },
        {
          id: "830b7df9-ace0-4fbf-bb47-3c5c6903cca3",
          name: "String",
        },
        {
          id: "832a7df9-ace0-4fbf-bb47-7a5c6903cca3",
          name: "Boolean",
        },
        {
          id: "830b7df9-bee0-4fbf-bb47-7a5c6903cca3",
          name: "NaN",
        },
      ],
    },
    {
      id: "3",
      order: 3,
      question: "Основы CSS",
      description: "Как добавить внешний отступ в CSS?",
      correctOptionId: "a4e3aabf-a60f-4bd3-bcaa-2534ea0af40e",
      answer: null,
      options: [
        {
          id: "a769efcd-1389-4bdf-8916-b3030cf48ab2",
          name: "Padding",
        },
        {
          id: "442aa49f-765e-42a7-a559-b7a63f268ade",
          name: "Space",
        },
        {
          id: "1477de8b-7c9c-46a5-8b86-8eb798705cc3",
          name: "Space-around",
        },
        {
          id: "a4e3aabf-a60f-4bd3-bcaa-2534ea0af40e",
          name: "Margin",
        },
      ],
    },
  ],
}
