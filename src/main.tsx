import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MathJaxContext } from "better-react-mathjax";
import { App } from "./App.tsx";
import { LatexProvider } from "./context/LatextContext.tsx";

const MathJaxConfig = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};
// todo - ver newline
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MathJaxContext config={MathJaxConfig}>
      <LatexProvider>
        <App />
      </LatexProvider>
    </MathJaxContext>
  </StrictMode>
);
