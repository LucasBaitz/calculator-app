"use client";
import React, { useEffect, useState, useCallback } from "react";
import CalculatorButton from "../CalculatorButton/CalculatorButton";
import parseExpression from "@/lib/parseExpression";

interface CalculatorProps {
  theme: Theme;
}

const Calculator: React.FC<CalculatorProps> = ({ theme }) => {
  const [expression, setExpression] = useState<string[]>([]);

  const onAddToExpression = useCallback((value: number | string) => {
    if (value === "RESET") {
      setExpression([]);
      return;
    }
    setExpression((prev) => [...prev, value.toString()]);
  }, []);

  const calculateExpression = useCallback(() => {
    try {
      const result = parseExpression(expression.join("")).toString();
      setExpression([result]);
    } catch {
      setExpression(["Error"]);
    }
  }, [expression]);

  const resetCalculator = useCallback(() => {
    setExpression([]);
  }, []);

  const removeLastElementFromExpression = useCallback(() => {
    setExpression((prev) => {
      const newExpression = [...prev];
      newExpression.pop();
      return newExpression;
    });
  }, []);

  useEffect(() => {
    const handleKeyboardInput = (e: KeyboardEvent) => {
      const key = e.key;
      if (key >= "0" && key <= "9") {
        onAddToExpression(key);
      } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        onAddToExpression(key);
      } else if (key === "Enter") {
        calculateExpression();
      } else if (key === "Backspace") {
        removeLastElementFromExpression();
      } else if (key === "Escape") {
        resetCalculator();
      } else if (key === ".") {
        onAddToExpression(key);
      }
    };

    window.addEventListener("keydown", handleKeyboardInput);

    return () => {
      window.removeEventListener("keydown", handleKeyboardInput);
    };
  }, [
    onAddToExpression,
    calculateExpression,
    removeLastElementFromExpression,
    resetCalculator,
  ]);

  const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

  const rows = [];
  for (let i = 0; i < numbers.length; i += 3) {
    rows.push(numbers.slice(i, i + 3));
  }

  const buttons = [
    {
      value: "7",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "7",
      action: onAddToExpression,
    },
    {
      value: "8",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "8",
      action: onAddToExpression,
    },
    {
      value: "9",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "9",
      action: onAddToExpression,
    },
    {
      value: "DEL",
      color: "#FFFFFF",
      backgroundColor: theme.buttonSecondaryColor,
      borderColor: theme.buttonBorderSecondaryColor,
      text: "DEL",
      action: removeLastElementFromExpression,
    },
    {
      value: "4",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "4",
      action: onAddToExpression,
    },
    {
      value: "5",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "5",
      action: onAddToExpression,
    },
    {
      value: "6",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "6",
      action: onAddToExpression,
    },
    {
      value: "+",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "+",
      action: onAddToExpression,
    },
    {
      value: "1",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "1",
      action: onAddToExpression,
    },
    {
      value: "2",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "2",
      action: onAddToExpression,
    },
    {
      value: "3",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "3",
      action: onAddToExpression,
    },
    {
      value: "-",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "-",
      action: onAddToExpression,
    },
    {
      value: ".",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: ".",
      action: onAddToExpression,
    },
    {
      value: "0",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "0",
      action: onAddToExpression,
    },
    {
      value: "/",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "/",
      action: onAddToExpression,
    },
    {
      value: "*",
      color: theme.buttonTextPrimaryColor,
      backgroundColor: theme.buttonPrimaryColor,
      borderColor: theme.buttonBorderPrimaryColor,
      text: "x",
      action: onAddToExpression,
    },
  ];

  return (
    <div className="gap-5 w-full max-w-md rounded-xl">
      <div
        className="p-5 text-white w-full min-h-28 flex align-middle items-center rounded-md my-5"
        style={{ backgroundColor: theme.displayColor }}
      >
        <p
          className="text-5xl text-end w-full font-bold bg-inherit"
          style={{ color: theme.textColor }}
        >
          {expression.join(" ")}
        </p>
      </div>
      <div
        className="p-7 space-y-5 rounded-lg"
        style={{ backgroundColor: theme.buttonsContainerBackgroundColor }}
      >
        <div className="grid grid-cols-4 gap-5">
          {buttons.map((item) => (
            <CalculatorButton
              key={item.value}
              value={item.value}
              text={item.text}
              onClick={item.action}
              color={item.color}
              backgroundColor={item.backgroundColor}
              borderColor={item.borderColor}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5">
          <CalculatorButton
            text="RESET"
            value=""
            backgroundColor={theme.buttonSecondaryColor}
            borderColor={theme.buttonBorderSecondaryColor}
            color="#ffffff"
            onClick={resetCalculator}
          />
          <CalculatorButton
            text="="
            value="="
            backgroundColor={theme.equalButtonColor}
            borderColor={theme.equalButtonBorderColor}
            color="#ffffff"
            onClick={calculateExpression}
          />
        </div>
      </div>
    </div>
  );

  return <div></div>
};

export default Calculator;
