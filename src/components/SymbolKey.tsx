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
      className={`border border-gray-300 rounded-md p-2 cursor-pointer ${defaultBackgroundColor} text-lg shadow-md hover:shadow-lg active:shadow-none active:translate-y-1 transition-all duration-200`}
      style={{ boxShadow: "0px 4px 1px rgba(0, 0, 0, 0.493)" }}
    >
      <MathJax inline>{`\\(${symbol.label}\\)`}</MathJax>
    </button>
  );
};
