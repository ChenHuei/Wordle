import { useState, useEffect } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState<null | string>(null);
  const [letters, setLetters] = useState<{ key: string }[]>([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3001/solutions")
        .then((res) => res.json())
        .then((res) => {
          const randomSolution = res[Math.floor(Math.random() * res.length)];
          setSolution(randomSolution.word);
        }),
      fetch("http://localhost:3001/letters")
        .then((res) => res.json())
        .then(setLetters),
    ]);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="py-5 mb-[30px] text-xl border-b border-slate-400">
        Wordle
      </h1>
      {solution && <Wordle solution={solution} letters={letters} />}
    </div>
  );
}

export default App;
