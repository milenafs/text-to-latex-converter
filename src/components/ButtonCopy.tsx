import React, { useState } from "react";
import { Copy, CopyCheck } from "lucide-react";

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
      className={`mr-120 ml-120 flex items-center justify-center transition-colors duration-300 ease-in-out ${
      isClicked ? "bg-green-700" : "bg-gray-700 hover:bg-gray-500"
      } text-white`}
    >
      <span className="mr-2.5">Copy formula</span>
      {isClicked ? <CopyCheck /> : <Copy />} 
    </button>
  );
};
