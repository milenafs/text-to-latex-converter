import type { Symbol } from "../types";

export const FunctionsAndRelations = {
  FUNCTION_FROM_A_TO_B: {
    label: "f: A → B",
    description: "Function from A to B",
    latex: "f: A \\to B",
  },
  FUNCTION_COMPOSITION: {
    label: "∘",
    description: "Function composition",
    latex: "\\circ",
  },
  MAPS_TO: {
    label: "↦",
    description: "Maps to",
    latex: "\\mapsto",
  },
  EQUIVALENT: {
    label: "∼",
    description: "Equivalent",
    latex: "\\sim",
  },
  CONGRUENT_OR_EQUIVALENT: {
    label: "≡",
    description: "Congruent/equivalent",
    latex: "\\equiv",
  },
  NOT_EQUAL: {
    label: "≠",
    description: "Not equal",
    latex: "\\neq",
  },
  LESS_THAN_OR_EQUAL: {
    label: "≤",
    description: "Less than or equal",
    latex: "\\leq",
  },
  GREATER_THAN_OR_EQUAL: {
    label: "≥",
    description: "Greater than or equal",
    latex: "\\geq",
  },
  DIVIDES: {
    label: "|",
    description: "Divides",
    latex: "\\mid",
  },
  PARALLEL: {
    label: "∥",
    description: "Parallel",
    latex: "\\parallel",
  },
  NOT_A_SUBSET: {
    label: "⊄",
    description: "Not a subset",
    latex: "\\nsubset",
  },
  SPACE: {
    label: " SPACE ",
    description: "space",
    latex: " \\ ",
    category: "control",
  },
} satisfies Record<string, Symbol>;
