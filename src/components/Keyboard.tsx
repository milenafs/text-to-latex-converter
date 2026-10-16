import { memo } from "react";
import { SymbolKey } from "./SymbolKey";
import { SymbolGroups } from "../constants";

interface KeyboardProps {
  onKeyClick: (keyValue: string) => void;
}

const KeyboardComponent = ({ onKeyClick }: KeyboardProps) => {
  return (
    <div className="keyboard" role="group" aria-label="Symbol keyboard">
      {SymbolGroups.map((group) => (
        <div
          key={group.category}
          role="group"
          aria-label={group.label}
          className="mb-2.5 flex flex-wrap gap-2.5 justify-center"
        >
          {Object.values(group.symbols).map((symbol) => (
            <SymbolKey
              key={symbol.description}
              symbol={symbol}
              category={group.category}
              onKeyClick={onKeyClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export const Keyboard = memo(KeyboardComponent);
