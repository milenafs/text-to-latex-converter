import { useContext } from "react";
import { LatexContext } from "./latex-context";
import type { LatexContextType } from "./latex-context";

export const useLatexContext = (): LatexContextType => {
  const context = useContext(LatexContext);
  if (!context) {
    throw new Error("useLatexContext must be used within a LatexProvider");
  }
  return context;
};
