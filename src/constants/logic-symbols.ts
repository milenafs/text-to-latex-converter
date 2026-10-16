import type { Symbol } from "../types";

export const LogicSymbols = {
  NEGATION: {
    label: "¬",
    description: "Negation",
    latex: "\\neg",
  },
  CONJUNCTION: {
    label: "∧",
    description: "Conjunction (and)",
    latex: "\\wedge",
  },
  DISJUNCTION: {
    label: "∨",
    description: "Disjunction (or)",
    latex: "\\vee",
  },
  IMPLICATION: {
    label: "→",
    description: "Implication",
    latex: "\\rightarrow",
  },
  BICONDITIONAL: {
    label: "↔",
    description: "Biconditional",
    latex: "\\leftrightarrow",
  },
  PROVABLE: {
    label: "⊢",
    description: "Provable",
    latex: "\\vdash",
  },
  ENTAILS: {
    label: "⊨",
    description: "Entails",
    latex: "\\models",
  },
  FOR_ALL: {
    label: "∀",
    description: "For all (universal)",
    latex: "\\forall",
  },
  THERE_EXISTS: {
    label: "∃",
    description: "There exists",
    latex: "\\exists",
  },
  CONTRADICTION: {
    label: "⊥",
    description: "Contradiction",
    latex: "\\bot",
  },
  TAUTOLOGY: {
    label: "⊤",
    description: "Tautology",
    latex: "\\top",
  },
  ENTER: {
    label: " ENTER ",
    description: "enter",
    latex: "\\\\",
    category: "control",
  },
} satisfies Record<string, Symbol>;
