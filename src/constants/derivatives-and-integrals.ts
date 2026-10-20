import type { Symbol } from "../types";

export const DerivativesAndIntegrals = {
  DERIVATIVE: {
    label: "d/dx",
    description: "Derivative with respect to x",
    latex: "\\frac{d}{dx}",
  },
  PARTIAL_DERIVATIVE: {
    label: "∂f/∂x",
    description: "Partial derivative",
    latex: "\\frac{\\partial f}{\\partial x}",
  },
  INTEGRAL: {
    label: "∫",
    description: "Integral",
    latex: "\\int",
  },
  DEFINITE_INTEGRAL: {
    label: "∫_a^b",
    description: "Definite integral from a to b",
    latex: "\\int_{a}^{b}",
  },
  DOUBLE_INTEGRAL: {
    label: "∬",
    description: "Double integral",
    latex: "\\iint",
  },
  TRIPLE_INTEGRAL: {
    label: "∭",
    description: "Triple integral",
    latex: "\\iiint",
  },
  CONTOUR_INTEGRAL: {
    label: "∮",
    description: "Contour integral",
    latex: "\\oint",
  },
  LIMIT: {
    label: "lim_{x→a}",
    description: "Limit as x approaches a",
    latex: "\\lim_{x \\to a}",
  },
  NABLA: {
    label: "∇",
    description: "Nabla/gradient",
    latex: "\\nabla",
  },
  DISCRETE_DIFFERENCE: {
    label: "Δf",
    description: "Discrete difference",
    latex: "\\Delta f",
  },
  PRIME_NOTATION: {
    label: "f'",
    description: "Derivative notation (prime)",
    latex: "f'",
  },
} satisfies Record<string, Symbol>;