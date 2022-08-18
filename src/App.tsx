import { useState, useEffect } from "react";
// components
import Wordle from "./components/Wordle";
// constants
import { SOLUTIONS, LETTERS } from "./constants";

function App() {
  const [solution, setSolution] = useState<string>("");

  useEffect(() => {
    setSolution(SOLUTIONS[Math.floor(Math.random() * SOLUTIONS.length)].word);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="py-5 mb-[30px] text-xl border-b border-slate-400">
        Wordle
      </h1>
      {solution !== "" && <Wordle solution={solution} letters={LETTERS} />}
    </div>
  );
}

export default App;
