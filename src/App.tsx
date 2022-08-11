import { useState, useEffect } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState<null | string>(null);

  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((res) => {
        const randomSolution = res[Math.floor(Math.random() * res.length)];
        setSolution(randomSolution.word);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="py-5 mb-[30px] text-xl border-b border-slate-400">
        Wordle
      </h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
