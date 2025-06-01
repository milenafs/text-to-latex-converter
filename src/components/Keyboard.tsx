import { useCallback } from "react";
import { SymbolKey } from "./";
import { SymbolGroups } from "../constants";

interface KeyboardProps {
  onKeyClick: (keyValue: string) => void;
}

export const Keyboard = ({ onKeyClick }: KeyboardProps) => {
  const handleKeyClick = useCallback(
    (latex: string) => {
      onKeyClick(latex);
    },
    [onKeyClick]
  );

  return (
    <div className="keyboard">
      {SymbolGroups.map((symbolGroup, index) => (
        <div
          key={index}
          className="mb-2.5 flex flex-wrap gap-2.5 justify-center "
        >
          {Object.values(symbolGroup).map((symbol) => (
            <SymbolKey
              key={symbol.description}
              symbol={symbol}
              onClick={() => handleKeyClick(symbol.latex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
