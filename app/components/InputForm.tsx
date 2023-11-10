import Link from "next/link";
import React from "react";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
  questionsNum: number;
}

const InputForm = ({ input, setInput, handleSubmit, questionsNum }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="პასუხი"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {questionsNum <= 3 ? (
        <button>Submit</button>
      ) : (
        <Link href={"/conclusion"} style={{ textDecoration: "underline" }}>
          See results
        </Link>
      )}
    </form>
  );
};

export default InputForm;
