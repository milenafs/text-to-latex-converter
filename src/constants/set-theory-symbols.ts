import type { Symbol } from "../types";

export const SetTheorySymbols = {
  ELEMENT_OF: {
    label: "∈",
    description: "Element of",
    latex: "\\in",
  },
  NOT_ELEMENT_OF: {
    label: "∉",
    description: "Not element of",
    latex: "\\notin",
  },
  SUBSET: {
    label: "⊆",
    description: "Subset",
    latex: "\\subseteq",
  },
  PROPER_SUBSET: {
    label: "⊂",
    description: "Proper subset",
    latex: "\\subset",
  },
  SUPERSET: {
    label: "⊇",
    description: "Superset",
    latex: "\\supseteq",
  },
  PROPER_SUPERSET: {
    label: "⊃",
    description: "Proper superset",
    latex: "\\supset",
  },
  EMPTY_SET: {
    label: "∅",
    description: "Empty set",
    latex: "\\emptyset",
  },
  NATURAL_NUMBERS: {
    label: "ℕ",
    description: "Natural numbers",
    latex: "\\mathbb{N}",
  },
  INTEGERS: {
    label: "ℤ",
    description: "Integers",
    latex: "\\mathbb{Z}",
  },
  RATIONALS: {
    label: "ℚ",
    description: "Rationals",
    latex: "\\mathbb{Q}",
  },
  REALS: {
    label: "ℝ",
    description: "Reals",
    latex: "\\mathbb{R}",
  },
  COMPLEX_NUMBERS: {
    label: "ℂ",
    description: "Complex numbers",
    latex: "\\mathbb{C}",
  },
  UNION: {
    label: "∪",
    description: "Union",
    latex: "\\cup",
  },
  INTERSECTION: {
    label: "∩",
    description: "Intersection",
    latex: "\\cap",
  },
  SET_DIFFERENCE: {
    label: "\\setminus",
    description: "Set difference",
    latex: "\\setminus",
  },
  NOT_SUBSET: {
    label: "⊈",
    description: "Not subset",
    latex: "\\nsubseteq",
  },
  POWER_SET: {
    label: "P(A)",
    description: "Power set",
    latex: "\\mathcal{P}(A)",
  },
} satisfies Record<string, Symbol>;
