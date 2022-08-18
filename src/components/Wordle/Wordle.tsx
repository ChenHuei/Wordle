import { useEffect, useState } from "react";
// components
import Cell from "./Cell";
import Keypad, { Letter } from "./Keypad";
import Modal from "./Modal";
// hooks
import useWordle from "../../hooks/useWordle";

interface WordleProps {
  solution: string;
  letters: Letter[][];
}

const Wordle = (props: WordleProps) => {
  const { solution, letters } = props;
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } =
    useWordle(solution);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect || turn > 5) {
      setTimeout(() => setIsShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup, isCorrect, turn]);

  return (
    <>
      {isShowModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
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
