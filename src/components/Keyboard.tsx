import { useCallback } from "react";
import { SymbolKey } from "./"; // Assuming SymbolKey is another component
import {
  BasicMathSyntaxAndCounts,
  DerivativesAndIntegrals,
  FunctionsAndRelations,
  GreekSymbols,
  LogicSymbols,
  OtherUsefulSymbols,
  SetTheorySymbols,
} from "../constants";

const SymbolGroups = [
  BasicMathSyntaxAndCounts,
  SetTheorySymbols,
  FunctionsAndRelations,
  LogicSymbols,
  OtherUsefulSymbols,
  DerivativesAndIntegrals,
  GreekSymbols,
];

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
      {/* Keyboard Section */}
      {SymbolGroups.map((symbolGroup, index) => (
        <div
          key={index}
          className="mb-2.5 flex flex-wrap gap-2.5 justify-center"
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
