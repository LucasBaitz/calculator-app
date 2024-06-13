import { cn } from "@/lib/cn";
import React from "react";

interface CalculatorButtonProps {
  text: string;
  value: number | string;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  className?: string;
  hoverColor?: string;
  onClick: (value: number | string) => void;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  text,
  value,
  backgroundColor = "theme-one-button",
  borderColor,
  color = "#4B5161",
  className,
  hoverColor,
  onClick,
}) => {
  return (
    <button
      className={cn(
        className,
        hoverColor,
        backgroundColor,
        `border-b-4 text-3xl font-bold px-5 py-2 shadow-sm rounded-lg transition duration-300`
      )}
      style={{ color, borderColor }}
      value={value}
      onClick={() => onClick(value)}
    >
      {text}
    </button>
  );
};

export default CalculatorButton;
