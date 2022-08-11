import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

interface WordleProps {}

const Wordle = (props: WordleProps) => {
  const { currentGuess, handleKeyup } = useWordle();

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  return (
    <>
      <div>current guess - {currentGuess}</div>
    </>
  );
};

export default Wordle;
export type { WordleProps };
