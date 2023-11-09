import React from "react";

interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setQuestionNum: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputForm = ({ input, setInput, handleSubmit }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="პასუხი"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button>Submit</button>
    </form>
  );
};

export default InputForm;
