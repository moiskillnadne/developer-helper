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
    {
      id: "4",
      order: 4,
      question: "Основы JS",
      description: "Какой оператор завершает выполнение текущей функции и возвращает её значение?",
      correctOptionId: "385074ca-37de-4033-ab64-79661132f0e2",
      answer: null,
      options: [
        {
          id: "f9c9f758-1502-4796-bb01-e2ba8456b082",
          name: "Case",
        },
        {
          id: "385074ca-37de-4033-ab64-79661132f0e2",
          name: "Return",
        },
        {
          id: "f819840d-d9a9-42bf-beb1-0d355c2feccf",
          name: "Break",
        },
        {
          id: "1a766e07-315c-4a97-815c-19921c391492",
          name: "Finally",
        },
      ],
    },
    {
      id: "5",
      order: 5,
      question: "Основы JS",
      description: "Как в JavaScript создать массив?",
      correctOptionId: "e09a6329-bf40-4a73-a25f-4a7317307e15",
      answer: null,
      options: [
        {
          id: "5ba2c7aa-7982-4900-995b-bc60218bd0c1",
          name: "const array = new Array{ } или const new array = [ ]",
        },
        {
          id: "4204832d-42d9-4d0a-b301-0ae250b77016",
          name: "int new Array( ) или const new Array( )",
        },
        {
          id: "e09a6329-bf40-4a73-a25f-4a7317307e15",
          name: "const array = new Array( ) или const array = [ ]",
        },
        {
          id: "f829d147-2ec8-4c2a-bc1e-30c28e4e02c1",
          name: "const array = Array",
        },
      ],
    },
    {
      id: "6",
      order: 6,
      question: "Основы JS",
      description: "Расшифруйте аббревиатуру DOM.",
      correctOptionId: "830b7df9-ace0-4fbf-bb47-7a5c6903cca3",
      answer: null,
      options: [
        {
          id: "830a7cg9-bee0-4fbf-bb47-7a5c6903cca3",
          name: "Domestic Object Mode",
        },
        {
          id: "330a7df9-bee0-4fbf-bb47-7a5c6903cca3",
          name: "Digital Optical Modulation",
        },
        {
          id: "851b7df9-bee0-4fbf-bb47-7a5c6903cca3",
          name: "Document Object Module",
        },
        {
          id: "830b7df9-ace0-4fbf-bb47-7a5c6903cca3",
          name: "Document Object Model",
        },
      ],
    },
    {
      id: "7",
      order: 7,
      question: "Основы HTML",
      description: "Какой атрибут используется для определения URL-адреса в ссылке?",
      correctOptionId: "830b7df9-ace0-4fbf-bb47-7a5c6903ccn5",
      answer: null,
      options: [
        {
          id: "830a7cg9-bce1-4fbf-bb47-7a5c6903cca3",
          name: "alt",
        },
        {
          id: "830b7df9-ace0-4fbf-bb47-7a5c6903ccn5",
          name: "href",
        },
        {
          id: "851b7df9-bea6-4fbf-bb47-7a5c6903cca3",
          name: "name",
        },
        {
          id: "830b7df9-aea3-4fbf-bb47-7a5c6903cca3",
          name: "src",
        },
      ],
    },
    {
      id: "8",
      order: 8,
      question: "Основы HTML",
      description: "Каким типом является элемент div?",
      correctOptionId: "7c226fb4-b1ac-4bc7-b627-36cf9e9ff665",
      answer: null,
      options: [
        {
          id: "830a7cg9-bce1-4fbf-bb47-7a5c6903cca3",
          name: "Строчным",
        },
        {
          id: "7c226fb4-b1ac-4bc7-b627-36cf9e9ff665",
          name: "Блочным",
        },
        {
          id: "851b7df9-bea6-4fbf-bb47-7a5c6903cca3",
          name: "И тем и тем",
        },
        {
          id: "830b7df9-aea3-4fbf-bb47-7a5c6903cca3",
          name: "Никаким из перечисленных",
        },
      ],
    },
    {
      id: "9",
      order: 9,
      question: "Основы HTML",
      description: "Какую кодировку следует использовать на сайте?",
      correctOptionId: "5c08c4e6-bae2-4a64-82e8-898dbb5f7ab5",
      answer: null,
      options: [
        {
          id: "15bad337-c37f-4aad-bf53-f89fa0f8e690",
          name: "WINDOWS-1251",
        },
        {
          id: "5c08c4e6-bae2-4a64-82e8-898dbb5f7ab5",
          name: "UTF-8",
        },
        {
          id: "cfa94a29-1e29-49b2-9042-5a5c712cf0b3",
          name: "UTF-16",
        },
        {
          id: "ab69ec45-a20f-48cd-a0e5-174f1f68c3e2",
          name: "UTF-32",
        },
      ],
    },
    {
      id: "10",
      order: 10,
      question: "Основы HTML",
      description: "Какая переменная записана неверно?",
      correctOptionId: "193db7a4-4c5f-4b8f-b44a-22e9548341a4",
      answer: null,
      options: [
        {
          id: "d6566725-1c85-49f4-a47a-53a8a497a02e",
          name: "const num = 'STRING'",
        },
        {
          id: "71f8b02d-cf3f-4838-a8cd-ee6d846df76e",
          name: "const isDone = 0",
        },
        {
          id: "c561066b-a0df-47c2-a5ef-d0dbfe159a6d",
          name: "const b = false",
        },
        {
          id: "193db7a4-4c5f-4b8f-b44a-22e9548341a4",
          name: "const number = 12,5",
        },
      ],
    },
    {
      id: "11",
      order: 11,
      question: "Основы CSS",
      description: "Укажите свойство стиля position:",
      correctOptionId: "f4f4b43a-d7b3-4bd3-8caf-9abc92b1a86b",
      answer: null,
      options: [
        {
          id: "1c72a056-aa5b-418e-adf0-37bad93521f3",
          name: "top",
        },
        {
          id: "f4f4b43a-d7b3-4bd3-8caf-9abc92b1a86b",
          name: "fixed",
        },
        {
          id: "c42470c1-677c-4f89-b3c5-e3508a91213e",
          name: "block",
        },
        {
          id: "9126e0dc-f7ac-48f1-878d-58870aaaeb5c",
          name: "flex",
        },
      ],
    },
    {
      id: "12",
      order: 12,
      question: "Основы CSS",
      description: "Укажите правильный синтаксис CSS для выделения всех элементов <p> жирным шрифтом?",
      correctOptionId: "3f97c69a-ec21-4366-93ee-015bbad95d9c",
      answer: null,
      options: [
        {
          id: "3f97c69a-ec21-4366-93ee-015bbad95d9c",
          name: " p { font-weight: bold; }",
        },
        {
          id: "85aefafe-25a5-4f83-aa86-f1ffed164ce1",
          name: "<p style='font-size:bold;'>",
        },
        {
          id: "5b592a3e-88d6-47ec-be58-89e5507b48aa",
          name: "p { text-size: bold; }",
        },
        {
          id: "eec20d58-181a-4d0a-9ca3-cd6affb29cbf",
          name: "p { weight: bold; }",
        },
      ],
    },
  ],
}
