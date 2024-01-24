import * as React from "react";
import {
  getClassNameValidationInput,
  type ValidationInputVariantsType,
} from "./ValidationInput.styles";

export type ValidationInputProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    errorMsg?: string;
  };

const ValidationInput = React.forwardRef<
  HTMLInputElement,
  ValidationInputProps
>(({ className, type, errorMsg, ...props }, ref) => {
  return (
    <>
      <input
        className={getClassNameValidationInput({ className })}
        ref={ref}
        {...props}
      />

      {errorMsg && (
        <label className="text-xs pl-1 text-[--error] font-medium">
          ✖ {errorMsg}
        </label>
      )}
    </>
  );
});
ValidationInput.displayName = "ValidationInput";

export { ValidationInput, getClassNameValidationInput };
