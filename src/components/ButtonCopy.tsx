import React, { useCallback, useEffect, useRef, useState } from "react";
import { Copy, CopyCheck } from "lucide-react";

interface ButtonCopyProps {
  text: string;
}

export const ButtonCopy: React.FC<ButtonCopyProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  // Never let the reset land on an unmounted button.
  useEffect(() => () => clearTimeout(resetTimeout.current), []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard access is denied outside a secure context; stay silent
      // rather than claim a copy that did not happen.
      return;
    }

    setIsCopied(true);
    clearTimeout(resetTimeout.current);
    resetTimeout.current = setTimeout(() => setIsCopied(false), 2000);
  }, [text]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!text}
      aria-label={
        isCopied ? "Formula copied to clipboard" : "Copy formula to clipboard"
      }
      className={`btn ${isCopied ? "btn-success" : ""}`}
    >
      <span className="mr-2.5">Copy formula</span>
      {isCopied ? <CopyCheck /> : <Copy />}
    </button>
  );
};
