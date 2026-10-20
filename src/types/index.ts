export type SymbolCategory =
  | "basic"
  | "functions"
  | "logic"
  | "sets"
  | "misc"
  | "calculus"
  | "greek"
  | "control";

export type Symbol = {
  label: string;
  description: string;
  latex: string;
  /** Overrides the category of the group this symbol belongs to. */
  category?: SymbolCategory;
};

export type SymbolGroup = {
  category: SymbolCategory;
  /** Accessible name for the row of keys. */
  label: string;
  symbols: Record<string, Symbol>;
};
