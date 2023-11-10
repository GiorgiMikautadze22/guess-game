import React, { useState } from "react";

const Actions = () => {
  interface QuestionProps {
    id: number;
    riddle: string;
    guessWord: string;
    hint: string;
    isCorrect: boolean;
  }

  const questions: QuestionProps[] = [
    {
      id: 1,
      riddle:
        "The more you code, the more of me there is. I may be gone for now but you can’t get rid of me forever. What am I?",
      guessWord: "Bug",
      hint: "B",
      isCorrect: false,
    },
    {
      id: 2,
      riddle: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
      guessWord: "Candle",
      hint: "C",
      isCorrect: false,
    },
    {
      id: 3,
      riddle:
        "David’s parents have three sons: Snap, Crackle, and what’s the name of the third son?",
      guessWord: "David",
      hint: "D",
      isCorrect: false,
    },
    {
      id: 4,
      riddle: "What invention lets you look right through a wall?",
      guessWord: "Window",
      hint: "W",
      isCorrect: false,
    },
    {
      id: 5,
      riddle:
        "If you’ve got me, you want to share me; if you share me, you haven’t kept me. What am I?",
      guessWord: "Secret",
      hint: "S",
      isCorrect: false,
    },
  ];

  const [input, setInput] = useState("");
  const [questionsNum, setQuestionNum] = useState(Number);
  const [correctlyAnswered, setCorrectlyAnswered] = useState(Number);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    if (trimmedInput !== "") {
      if (input === questions[questionsNum].guessWord) {
        questions[questionsNum].isCorrect = true;
        setCorrectlyAnswered(correctlyAnswered + 1);
      }

      console.log(questions);

      if (questionsNum <= 3) {
        setQuestionNum(questionsNum + 1);
      }

      setInput("");
    } else {
      setInput("");
    }
    console.log(correctlyAnswered);
  };
  return {
    input,
    setInput,
    questionsNum,
    correctlyAnswered,
    handleSubmit,
    questions,
  };
};

export default Actions;
