import { PropsWithChildren } from "react";

interface CellProps {
  color?: "grey" | "yellow" | "green";
}

const COLOR_CLASSES = {
  grey: "bg-[#a1a1a1] border-[#a1a1a1]",
  yellow: "bg-[#e2cc68] border-[#e2cc68]",
  green: "bg-[#5ac85a] border-[#5ac85a]",
};

const Cell = (props: PropsWithChildren<CellProps>) => {
  const { children, color } = props;
  return (
    <div
      className={`w-[60px] h-[60px] m-1 text-center text-4xl font-bold leading-[60px] border uppercase ${
        color ? COLOR_CLASSES[color] : "border-slate-400"
      }`}
    >
      {children}
    </div>
  );
};

export default Cell;
export type { CellProps };
