import "./App.css";
import { useLatexContext } from "./context";
import { MathJax } from "better-react-mathjax";
import { Controller, useForm } from "react-hook-form";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "lodash";
import { MessageSquare } from "lucide-react";
import { ButtonCopy, FeedbackDialog, Keyboard } from "./components";

export const App = () => {
  const { text, setText } = useLatexContext();
  const { control, setValue } = useForm({
    defaultValues: { latexInput: text },
  });
  const [showFeedback, setShowFeedback] = useState(false);
  const inputValueRef = useRef(text);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const debouncedSetText = useMemo(
    () => debounce((value: string) => setText(value), 300),
    [setText]
  );

  // Drop a pending update rather than let it land after unmount.
  useEffect(() => () => debouncedSetText.cancel(), [debouncedSetText]);

  // Stable identity, so the memoised Keyboard isn't re-rendered on every keystroke.
  const handleKeyClick = useCallback(
    (latex: string) => {
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
    },
    [debouncedSetText, setValue]
  );

  const closeFeedback = useCallback(() => setShowFeedback(false), []);

  return (
    <>
      <button
        type="button"
        className="icon-btn"
        onClick={() => setShowFeedback(true)}
        aria-label="Send feedback"
        title="Send feedback"
      >
        <MessageSquare />
      </button>

      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
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
                  // Keep react-hook-form's own ref working alongside ours.
                  ref={(el) => {
                    field.ref(el);
                    inputRef.current = el;
                  }}
                  placeholder="Type the formula here!"
                  aria-label="LaTeX formula"
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
                  className="border-b border-divider w-full text-lg px-2 py-1 focus:outline-none text-center"
                />
              )}
            />
          </div>
          <div className="flex justify-center gap-2.5">
            <ButtonCopy text={text} />
          </div>
        </div>

        <Keyboard onKeyClick={handleKeyClick} />

        <button type="submit" className="hidden" aria-label="Submit form" />
      </form>

      <FeedbackDialog open={showFeedback} onClose={closeFeedback} />
    </>
  );
};
