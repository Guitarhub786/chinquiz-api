const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const chinquiz = [
    {
      question:
        "Which country, not including Japan, has the most people of japanese decent?",
      answers: ["Brazil", "China", "South Korea", "United States of America"],
      correct: "Brazil",
      questionId: "4795960"
    },
    {
      question: "Which candy is NOT made by Mars?",
      answers: ["Almond Joy", "M&M's", "Twix", "Snickers"],
      correct: "Almond Joy",
      questionId: "4811162"
    },
    {
      question: "In which fast food chain can you order a Jamocha Shake?",
      answers: ["Arby's", "McDonald's", "Burger King", "Wendy's"],
      correct: "Arby's",
      questionId: "4982981"
    }
  ]

  res.json(chinquiz);
});

const port = 5000;

app.listen(port, () => `Chinquiz Server running on port ${port}`);