import { useEffect } from "react";
import useWordle from "../../hooks/useWordle";
import Cell from "./Cell";
import Keypad from "./Keypad";

interface WordleProps {
  solution: string;
  letters: { key: string }[];
}

const Wordle = (props: WordleProps) => {
  const { solution, letters } = props;
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  return (
    <>
      <div>solution - {solution}</div>
      <div>current guess - {currentGuess}</div>
      <div>
        {guesses.map((guess, index) => (
          <div key={index} className="flex justify-center items-center">
            {guess ? (
              <>
                {guess.map((item) => (
                  <Cell key={item.key} color={item.color}>
                    {item.key}
                  </Cell>
                ))}
              </>
            ) : turn === index ? (
              <>
                {[...currentGuess.split(""), ...Array(5)]
                  .slice(0, 5)
                  .map((item) => (
                    <Cell key={item} isCurrent>
                      {item}
                    </Cell>
                  ))}
              </>
            ) : (
              [...Array(5)].map((_, i) => <Cell key={i} />)
            )}
          </div>
        ))}
      </div>
      <Keypad letters={letters} usedKeys={usedKeys} />
    </>
  );
};

export default Wordle;
export type { WordleProps };
