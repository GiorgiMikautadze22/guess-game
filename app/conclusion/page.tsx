"use client";

import React from "react";
import "./page.css";
import Actions from "../components/Actions";

const page = () => {
  const { correctlyAnswered } = Actions();
  console.log(correctlyAnswered, "inside");

  return (
    <div className="conclusion">You guessed {correctlyAnswered} out of 5</div>
  );
};

export default page;
