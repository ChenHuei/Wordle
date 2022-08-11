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
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {solution && <Wordle />}
    </div>
  );
}

export default App;
