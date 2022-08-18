// style
import "./style.css";

type Letter = {
  key: string;
};

interface KeypadProps {
  letters: Letter[][];
  usedKeys: Record<string, string>;
}

const Keypad = (props: KeypadProps) => {
  const { letters, usedKeys } = props;
  return (
    <div className="flex flex-col max-w-[500px] my-5">
      {letters.map((row, index) => (
        <div key={index} className="flex justify-center items-center w-full">
          {row.map((item) => (
            <div
              key={item.key}
              className={`flex justify-center items-center w-[40px] h-[50px] m-1 leading-[50px] bg-[#eee] rounded-md will-change-[color,background-color] keypad--${
                usedKeys[item.key]
              }`}
            >
              {item.key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keypad;
export type { KeypadProps, Letter };
