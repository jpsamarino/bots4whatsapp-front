import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { getClassNameButton, type buttonVariantsType } from "./Button.styles";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  buttonVariantsType & {
    asChild?: boolean;
    isLoading?: boolean;
  };

const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      children,
      asChild = false,
      isLoading = false,
      disabled: buttonDisabled,
      ...props
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const Comp = asChild ? Slot : "button";
    const disabled = isLoading || buttonDisabled;
    return (
      <Comp
        className={getClassNameButton({ variant, size, className })}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {isLoading && size != "icon" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 animate-spin"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        )}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, getClassNameButton };
