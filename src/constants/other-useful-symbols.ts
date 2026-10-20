import type { Symbol } from "../types";

export const OtherUsefulSymbols = {
  SUMMATION: {
    label: "∑",
    description: "Summation",
    latex: "\\sum",
  },
  PRODUCT: {
    label: "∏",
    description: "Product",
    latex: "\\prod",
  },
  INTEGRAL: {
    label: "∫",
    description: "Integral",
    latex: "\\int",
  },
  PARTIAL_DERIVATIVE: {
    label: "∂",
    description: "Partial derivative",
    latex: "\\partial",
  },
  INFINITY: {
    label: "∞",
    description: "Infinity",
    latex: "\\infty",
  },
  NABLA: {
    label: "∇",
    description: "Nabla/Gradient",
    latex: "\\nabla",
  },
  DIRECT_SUM: {
    label: "⊕",
    description: "Direct sum",
    latex: "\\oplus",
  },
  TENSOR_PRODUCT: {
    label: "⊗",
    description: "Tensor product",
    latex: "\\otimes",
  },
  IMPLIES: {
    label: "⇒",
    description: "Implies",
    latex: "\\Rightarrow",
  },
  IFF: {
    label: "⇔",
    description: "If and only if",
    latex: "\\Leftrightarrow",
  },
  SUMMATION_WITH_LIMITS: {
    label: "\\sum_{i=1}^{n}",
    description: "Summation with limits",
    latex: "\\sum_{{i=1}}^{{n}}",
  },
  PRODUCT_WITH_LIMITS: {
    label: "\\prod_{i=1}^{n}",
    description: "Product with limits",
    latex: "\\prod_{{i=1}}^{{n}}",
  },
} satisfies Record<string, Symbol>;