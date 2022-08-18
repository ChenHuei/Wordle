import { PropsWithChildren } from "react";
// style
import "./style.css";

interface CellProps {
  color?: "grey" | "yellow" | "green";
  isCurrent?: boolean;
}

const Cell = (props: PropsWithChildren<CellProps>) => {
  const { children, color, isCurrent = false } = props;
  return (
    <div
      className={`w-[60px] h-[60px] m-1 text-center text-4xl font-bold leading-[60px] border uppercase will-change-[border-color,background-color,color] ${
        color ? `cell cell--${color}` : ""
      } ${
        children && isCurrent
          ? "animate-[new-bounce_0.2s_ease-in-out_forwards] "
          : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Cell;
export type { CellProps };
