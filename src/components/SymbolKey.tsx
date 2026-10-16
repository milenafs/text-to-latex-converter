import { MathJax } from "better-react-mathjax";
import type { Symbol, SymbolCategory } from "../types";
import { memo, useCallback } from "react";

interface SymbolKeyProps {
  symbol: Symbol;
  /** Category of the group the key sits in; the symbol may override it. */
  category: SymbolCategory;
  onKeyClick: (latex: string) => void;
}

const SymbolKeyComponent = ({
  symbol,
  category,
  onKeyClick,
}: SymbolKeyProps) => {
  const handleClick = useCallback(
    () => onKeyClick(symbol.latex),
    [onKeyClick, symbol.latex]
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      title={symbol.description}
      aria-label={symbol.description}
      className={`key key-${symbol.category ?? category}`}
    >
      <MathJax inline>{`\\(${symbol.label}\\)`}</MathJax>
    </button>
  );
};

// Every key typesets its label through MathJax, and the whole keyboard is on
// screen while the user types. Without memo, each keystroke re-renders all of
// them; the props here are stable, so none of that work needs to repeat.
export const SymbolKey = memo(SymbolKeyComponent);
