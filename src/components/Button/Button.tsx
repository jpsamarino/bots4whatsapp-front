import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { getClassNameButton, type buttonVariantsType } from "./Button.styles";
import { LoadingIcon } from "../icons/LoadingIcon";

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
        {isLoading && size != "icon" && <LoadingIcon />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, getClassNameButton };
