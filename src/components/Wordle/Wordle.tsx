import { useEffect } from "react";
import useWordle from "../../hooks/useWordle";
import Cell from "./Cell";

interface WordleProps {
  solution: string;
}

const Wordle = (props: WordleProps) => {
  const { solution } = props;
  const { currentGuess, guesses, turn, isCorrect, handleKeyup } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect, currentGuess);
  }, [guesses, turn, isCorrect, currentGuess]);

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
    </>
  );
};

export default Wordle;
export type { WordleProps };
