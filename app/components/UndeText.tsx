import React from "react";
import "./UnderText.style.css";

interface Props {
  questions: string;
}

const UndeText = ({ questions }: Props) => {
  const splitedWord = questions.split("");

  let count = 0;
  return (
    <div className="flex">
      {splitedWord.map((el) => {
        count++;
        return <div key={count} className="underText"></div>;
      })}
    </div>
  );
};

export default UndeText;
