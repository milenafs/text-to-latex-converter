import type { Symbol } from "../types";

export const GreekSymbols = {
  ALPHA: {
    label: "α",
    description: "Alpha",
    latex: "\\alpha",
  },
  BETA: {
    label: "β",
    description: "Beta",
    latex: "\\beta",
  },
  GAMMA_LOWERCASE: {
    label: "γ",
    description: "Gamma (lowercase)",
    latex: "\\gamma",
  },
  GAMMA_UPPERCASE: {
    label: "Γ",
    description: "Gamma (uppercase)",
    latex: "\\Gamma",
  },
  DELTA_LOWERCASE: {
    label: "δ",
    description: "Delta (lowercase)",
    latex: "\\delta",
  },
  DELTA_UPPERCASE: {
    label: "Δ",
    description: "Delta (uppercase)",
    latex: "\\Delta",
  },
  EPSILON: {
    label: "ε",
    description: "Epsilon",
    latex: "\\epsilon",
  },
  THETA_LOWERCASE: {
    label: "θ",
    description: "Theta",
    latex: "\\theta",
  },
  THETA_UPPERCASE: {
    label: "Θ",
    description: "Theta (uppercase)",
    latex: "\\Theta",
  },
  LAMBDA_LOWERCASE: {
    label: "λ",
    description: "Lambda",
    latex: "\\lambda",
  },
  LAMBDA_UPPERCASE: {
    label: "Λ",
    description: "Lambda (uppercase)",
    latex: "\\Lambda",
  },
  MU: {
    label: "μ",
    description: "Mu",
    latex: "\\mu",
  },
  PI_LOWERCASE: {
    label: "π",
    description: "Pi",
    latex: "\\pi",
  },
  PI_UPPERCASE: {
    label: "Π",
    description: "Pi (uppercase)",
    latex: "\\Pi",
  },
  RHO: {
    label: "ρ",
    description: "Rho",
    latex: "\\rho",
  },
  SIGMA_LOWERCASE: {
    label: "σ",
    description: "Sigma",
    latex: "\\sigma",
  },
  SIGMA_UPPERCASE: {
    label: "Σ",
    description: "Sigma (uppercase)",
    latex: "\\Sigma",
  },
  TAU: {
    label: "τ",
    description: "Tau",
    latex: "\\tau",
  },
  PHI_LOWERCASE: {
    label: "φ",
    description: "Phi",
    latex: "\\phi",
  },
  PHI_UPPERCASE: {
    label: "Φ",
    description: "Phi (uppercase)",
    latex: "\\Phi",
  },
  OMEGA_LOWERCASE: {
    label: "ω",
    description: "Omega (lowercase)",
    latex: "\\omega",
  },
  OMEGA_UPPERCASE: {
    label: "Ω",
    description: "Omega (uppercase)",
    latex: "\\Omega",
  },
  INFINITY: {
    label: "∞",
    description: "Infinity",
    latex: "\\infty",
  },
} satisfies Record<string, Symbol>;