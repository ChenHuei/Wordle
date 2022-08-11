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
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <>
      <div>solution - {solution}</div>
      <div>current guess - {currentGuess}</div>
      <div>
        {guesses.map((guess, index) => (
          <div key={index} className="flex justify-center items-center">
            {guess ? (
              <>
                {guess.map((item, i) => (
                  <Cell key={i} color={item.color}>
                    {item.key}
                  </Cell>
                ))}
              </>
            ) : (
              [...Array(5)].fill(0).map((_, i) => <Cell key={i} />)
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Wordle;
export type { WordleProps };
