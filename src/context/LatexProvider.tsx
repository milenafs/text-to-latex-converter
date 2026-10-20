import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { LatexContext } from "./latex-context";

interface LatexProviderProps {
  children: ReactNode;
}

export const LatexProvider = ({ children }: LatexProviderProps) => {
  const [text, setText] = useState<string>("");

  // Stable identity so consumers only re-render when the text itself changes.
  const value = useMemo(() => ({ text, setText }), [text]);

  return <LatexContext.Provider value={value}>{children}</LatexContext.Provider>;
};
