import "./App.css";
import { useLatexContext } from "./context";
import { MathJax } from "better-react-mathjax";
import { Keyboard } from "./components/Keyboard";
import { Controller, useForm } from "react-hook-form";
import { useMemo, useRef } from "react";
import { debounce } from "lodash";
import { ButtonCopy } from "./components";

export const App = () => {
  const { text, setText } = useLatexContext();
  const { control, setValue } = useForm({
    defaultValues: { latexInput: text },
  });

  const inputValueRef = useRef(text);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSetText = useMemo(
    () => debounce((value: string) => setText(value), 300),
    [setText]
  );

  const handleKeyClick = (latex: string) => {
    const currentValue = inputValueRef.current;
    const newText = currentValue.trim() ? `${currentValue} ${latex} ` : latex;
    setValue("latexInput", newText, { shouldDirty: true });
    inputValueRef.current = newText;
    debouncedSetText(newText);
    inputRef.current?.focus();
  };

  return (
    <form className="flex flex-col gap-5">
      <h1 className="text-2xl mb-10 font-bold text-center">
        Text to LaTeX Converter
      </h1>

      <div className="flex flex-col gap-2.5">
        <MathJax inline dynamic>
          {text && (
            <div className="mb-10 overflow-auto max-h-96 max-w-full">
              <span className="text-2xl">{`$$\\begin{gather} ${text} \\end{gather}$$`}</span>
            </div>
          )}
        </MathJax>

        <div className="flex items-center gap-2.5 justify-center mb-10">
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
                    handleKeyClick('\\\\');
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
          <ButtonCopy text={text} />
        </div>
      </div>

      <Keyboard onKeyClick={handleKeyClick} />

      <button type="submit" className="hidden" aria-label="Submit form" />
    </form>
  );
};
