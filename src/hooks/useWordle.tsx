import { useState } from "react";

type FormattedGuess = {
  key: string;
  color: "grey" | "yellow" | "green";
};

const useWordle = (solution: string) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [guesses, setGuesses] = useState<(FormattedGuess[] | undefined)[]>([
    ...Array(6),
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [usedKeys, setUsedKeys] = useState<Record<string, string>>({});
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = (): FormattedGuess[] => {
    const solutions = solution.split("");
    return currentGuess
      .split("")
      .map(
        (item) =>
          ({
            key: item,
            color: "grey",
          } as FormattedGuess)
      )
      .map((item, index) => {
        if (solutions[index] === item.key) {
          // side effect
          solutions[index] = "";
          return {
            ...item,
            color: "green",
          } as FormattedGuess;
        }
        return item;
      })
      .map((item) => {
        if (solutions.includes(item.key) && item.color !== "green") {
          // side effect
          solutions[solutions.indexOf(item.key)] = "";
          return {
            ...item,
            color: "yellow",
          } as FormattedGuess;
        }
        return item;
      });
  };

  const handleKeyup = (event: KeyboardEvent) => {
    const { key } = event;

    if (key === "Enter") {
      if (turn > 5) {
        console.log("you used all your guesses!!");
        return;
      }

      if (history.includes(currentGuess)) {
        console.log("you already tried that word!!");
        return;
      }

      if (currentGuess.length !== 5) {
        console.log("word must be 5 chars!!");
        return;
      }
      const formattedGuess = formatGuess();
      setHistory([...history, currentGuess]);
      setTurn(turn + 1);
      setGuesses((prev) => {
        prev[turn] = formattedGuess;
        return prev;
      });
      setUsedKeys((prevUsedKeys) => {
        return formattedGuess.reduce((acc, item) => {
          if (item.color === "green") {
            acc[item.key] = "green";
            return acc;
          }
          if (item.color === "yellow" && acc[item.key] !== "green") {
            acc[item.key] = "yellow";
            return acc;
          }
          if (
            item.color === "grey" &&
            acc[item.key] !== ("green" || "yellow")
          ) {
            acc[item.key] = "grey";
            return acc;
          }
          return acc;
        }, prevUsedKeys);
      });

      if (currentGuess === solution) {
        setIsCorrect(true);
      }
      setCurrentGuess("");
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (/^[A-Za-z]$/.test(key) === false) return;

    if (currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key);
    }
  };

  return { turn, currentGuess, guesses, usedKeys, isCorrect, handleKeyup };
};

export default useWordle;
export type { FormattedGuess };
