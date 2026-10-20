import { createContext } from "react";

export interface LatexContextType {
  text: string;
  setText: (newText: string) => void;
}

// Kept out of the provider file so that file only exports a component, which is
// what react-refresh needs to hot-reload it.
export const LatexContext = createContext<LatexContextType | undefined>(
  undefined
);
