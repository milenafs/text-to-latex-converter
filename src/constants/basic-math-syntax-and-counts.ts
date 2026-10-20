import type { Symbol } from "../types";

export const BasicMathSyntaxAndCounts = {
  SUPERSCRIPT: {
    label: "a^{b}",
    description: "Superscript",
    latex: "a^{b}",
  },
  SUBSCRIPT: {
    label: "a_{b}",
    description: "Subscript",
    latex: "a_{b}",
  },
  FRACTION: {
    label: "\\frac{a}{b}",
    description: "Fraction",
    latex: "\\frac{a}{b}",
  },
  SQUARE_ROOT: {
    label: "\\sqrt{x}",
    description: "Square root",
    latex: "\\sqrt{x}",
  },
  NTH_ROOT: {
    label: "\\sqrt[n]{x}",
    description: "n-th root",
    latex: "\\sqrt[n]{x}",
  },
  ABSOLUTE_VALUE: {
    label: "\\left|{x}\\right|",
    description: "Absolute value",
    latex: "\\left|{x}\\right|",
  },
  AUTOMATIC_SIZED_PARENTHESES: {
    label: "\\left({x}\\right)",
    description: "Automatic sized parentheses",
    latex: "\\left({x}\\right)",
  },
  BRACKETS: {
    label: "\\left\\{{x}\\right\\}",
    description: "Brackets",
    latex: "\\left\\{{x}\\right\\}",
  },
  GENERAL_LOGARITHM: {
    label: "\\log_{b}(a)",
    description: "General logarithm",
    latex: "\\log_{b}(a)",
  },
  MULTIPLICATION_DOT: {
    label: "\\cdot",
    description: "Multiplication dot",
    latex: "\\cdot",
  },
  MULTIPLICATION_CROSS: {
    label: "\\times",
    description: "Multiplication cross",
    latex: "\\times",
  },
  DIVISION: {
    label: "\\div",
    description: "Division",
    latex: "\\div",
  },
  PLUS_MINUS: {
    label: "\\pm",
    description: "Plus-minus",
    latex: "\\pm",
  },
  MINUS_PLUS: {
    label: "\\mp",
    description: "Minus-plus",
    latex: "\\mp",
  },
  ELLIPSIS: {
    label: "\\ldots",
    description: "Ellipsis",
    latex: "\\ldots",
  },
} satisfies Record<string, Symbol>;
