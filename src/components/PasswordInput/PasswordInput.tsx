import * as React from "react";
import {
  getClassNamePasswordInput,
  getClassNamePasswordInputDiv,
  type PasswordInputVariantsType,
} from "./PasswordInput.styles";
import { EyeOpenIcon, EyeNoneIcon } from "@radix-ui/react-icons";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  PasswordInputVariantsType & {
    errorMsg?: string;
    textOpen?: boolean;
  };

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, errorMsg, textOpen = false, ...props }, ref) => {
    const [isTextOpen, setIsTextOpen] = React.useState(textOpen);
    React.useEffect(() => {
      setIsTextOpen(textOpen);
    }, [textOpen]);
    const typePassword = isTextOpen ? "text" : "password";

    return (
      <>
        <div className={getClassNamePasswordInputDiv({ variant, className })}>
          <input
            type={typePassword}
            className={getClassNamePasswordInput({ variant })} //"w-full focus-within:outline-none"
            ref={ref}
            {...props}
          />
          <button
            className="ml-2"
            onClick={() => setIsTextOpen((prev) => !prev)}
          >
            {isTextOpen ? (
              <EyeOpenIcon />
            ) : (
              <EyeNoneIcon className="text-gray-400" />
            )}
          </button>
        </div>
        {errorMsg && (
          <label className="text-xs pl-1 text-[--error] font-medium">
            ✖ {errorMsg}
          </label>
        )}
      </>
    );
  }
);
PasswordInput.displayName = "Input";

export { PasswordInput, getClassNamePasswordInput };
