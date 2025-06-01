import { MathJax } from "better-react-mathjax";
import type { Symbol } from "../types";
import { useCallback } from "react";

interface SymbolKeyProps {
  symbol: Symbol;
  onClick: VoidFunction;
}
export const SymbolKey = ({ symbol, onClick }: SymbolKeyProps) => {
  const defaultBackgroundColor = symbol.backgroundColor || "bg-gray-100";

  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <button
      type="button"
      onClick={handleClick}
      title={symbol.description}
      aria-label={symbol.description}
      className={`border border-gray-300 rounded-md p-2 cursor-pointer ${defaultBackgroundColor} text-lg hover:box-shadow-md transition-all duration-200`}
    >
      <MathJax inline>{`\\(${symbol.label}\\)`}</MathJax>
    </button>
  );
};
