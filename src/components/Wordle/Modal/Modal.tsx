interface ModalProps {
  isCorrect: boolean;
  turn: number;
  solution: string;
}

const Modal = (props: ModalProps) => {
  const { isCorrect, turn, solution } = props;

  return (
    <div className="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-10">
      <div className="max-w-[480px] p-10 mx-auto my-[10%] bg-white rounded-lg shadow-md">
        {isCorrect ? (
          <>
            <h1>You Win!</h1>
            <p className="text-green-500 font-bold uppercase">{solution}</p>
            <p>You found the solution in {turn} guesses :)</p>
          </>
        ) : (
          <>
            <h1>Nevermind</h1>
            <p className="text-rose-500 font-bold uppercase">{solution}</p>
            <p>Better luck next time :)</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
export type { ModalProps };
