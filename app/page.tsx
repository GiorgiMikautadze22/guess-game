import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Welcome to "ნამიოკობანა"</h2>
      <h3>How to play</h3>
      <p>
        You will be asked total of 5 questions. In each question there will a
        hint with which you must guess the word. After answer is provided you
        will proceed to the next question. At the end you will be able to see
        your score
      </p>
      <Link href="/questions" className="getStarted">
        Get started
      </Link>
    </main>
  );
}
