import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface LatexContextType {
  text: string;
  setText: (newText: string) => void;
}

const LatexContext = createContext<LatexContextType | undefined>(undefined);

interface LatexProviderProps {
  children: ReactNode;
}

export const LatexProvider = ({ children }: LatexProviderProps) => {
  const [text, setText] = useState<string>("");

  return (
    <LatexContext.Provider value={{ text, setText }}>
      {children}
    </LatexContext.Provider>
  );
};

export const useLatexContext = (): LatexContextType => {
  const context = useContext(LatexContext);
  if (!context) {
    throw new Error("useLatexContext must be used within a LatexProvider");
  }
  return context;
};
