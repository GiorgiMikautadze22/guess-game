"use client";
import React, { useState } from "react";
import underText from "../../public/Group 62.svg";
import Image from "next/image";
import "./style.css";
import InputForm from "../components/InputForm";

const page = () => {
  const [input, setInput] = useState("");
  const [questionsNum, setQuestionNum] = useState(Number);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setQuestionNum(questionsNum + 1);

    setInput("");
  };

  return (
    <div className="questionCard">
      <div className="hints">
        <h2>{questionsNum}/ 5 კითხვა</h2>
        <p>წუწუნებს - ნამიოკი თ </p>
        <Image src={underText} alt="text" />
      </div>
      <InputForm
        input={input}
        setInput={setInput}
        setQuestionNum={setQuestionNum}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default page;
