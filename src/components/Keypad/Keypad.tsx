type Letter = {
  key: string;
};
interface KeypadProps {
  letters: Letter[];
}

const Keypad = (props: KeypadProps) => {
  const { letters } = props;
  return (
    <div className="flex flex-wrap justify-center max-w-[500px] mx-5">
      {letters.map((l) => (
        <div
          key={l.key}
          className="flex justify-center items-center w-10 h-[50px] m-1 leading-[50px] bg-[#eee] rounded-md"
        >
          {l.key}
        </div>
      ))}
    </div>
  );
};

export default Keypad;
export type { KeypadProps, Letter };
