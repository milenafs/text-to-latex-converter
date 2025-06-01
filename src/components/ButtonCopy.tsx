import React, { useState } from "react";
import { Copy } from "lucide-react";

interface ButtonCopyProps {
  text: string;
}

export const ButtonCopy: React.FC<ButtonCopyProps> = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000); // Reset after 2 seconds
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      className={`px-3 py-1 rounded flex items-center justify-center transition-colors duration-300 ease-in-out ${
        isClicked ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
      } text-white`}
    >
      <Copy />
    </button>
  );
};
