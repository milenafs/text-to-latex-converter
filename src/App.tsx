import "./App.css";
import { useLatexContext } from "./context";
import { MathJax } from "better-react-mathjax";
import { Keyboard } from "./components/Keyboard";
import { Controller, useForm } from "react-hook-form";
import { useMemo, useRef, useState } from "react";
import { debounce } from "lodash";
import { ButtonCopy, Feedback } from "./components";

export const App = () => {
  const { text, setText } = useLatexContext();
  const { control, setValue } = useForm({
    defaultValues: { latexInput: text },
  });
  const [showFeedback, setShowFeedback] = useState(false);
  const inputValueRef = useRef(text);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSetText = useMemo(
    () => debounce((value: string) => setText(value), 300),
    [setText]
  );

  const handleKeyClick = (latex: string) => {
    const inputEl = inputRef.current;
    if (!inputEl) return;

    const start = inputEl.selectionStart ?? 0;
    const end = inputEl.selectionEnd ?? 0;
    const currentValue = inputValueRef.current;

    const newText =
      currentValue.substring(0, start) +
      ` ${latex} ` +
      currentValue.substring(end);

    setValue("latexInput", newText, { shouldDirty: true });
    inputValueRef.current = newText;
    debouncedSetText(newText);

    // Move cursor right after the inserted latex
    setTimeout(() => {
      inputEl.focus();
      const newPos = start + latex.length + 2; // add 2 for the spaces
      inputEl.setSelectionRange(newPos, newPos);
    }, 0);
  };

  return (
    <form className="flex flex-col gap-5">
      <h1 className="text-2xl mb-10 font-bold text-center">
        Text to LaTeX Converter
      </h1>
      <div className="flex flex-col gap-2.5 mb-10">
        <MathJax inline dynamic>
          {text && (
            <div className="mb-10 overflow-auto max-h-96 max-w-full">
              <span className="text-2xl">{`$$\\begin{gather} ${text} \\end{gather}$$`}</span>
            </div>
          )}
        </MathJax>
        <div className="flex items-center gap-2.5 justify-center mb-2.5">
          <Controller
            name="latexInput"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                ref={inputRef}
                placeholder="Type the formula here!"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleKeyClick("\\\\");
                  }
                }}
                onChange={(e) => {
                  const val = e.target.value;
                  field.onChange(val);
                  inputValueRef.current = val;
                  debouncedSetText(val);
                }}
                className="border-b border-gray-300 w-full text-lg px-2 py-1 focus:outline-none text-center"
              />
            )}
          />
        </div>
        <div className="flex justify-center gap-2.5">
          <button
            type="button"
            className="bg-gray-800"
            onClick={() => setShowFeedback((prev) => !prev)}
          >
            {showFeedback ? "Back to keyboard" : "Send feedback"}
          </button>
          <ButtonCopy text={text} />
        </div>
      </div>
      {showFeedback ? <Feedback /> : <Keyboard onKeyClick={handleKeyClick} />}

      <button type="submit" className="hidden" aria-label="Submit form" />
    </form>
  );
};
