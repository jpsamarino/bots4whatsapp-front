import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { getClassNameButton, type buttonVariantsType } from "./Button.styles";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  buttonVariantsType & {
    asChild?: boolean;
  };

const Button = React.forwardRef(
  (
    { className, variant, size, asChild = false, ...props }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={getClassNameButton({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, getClassNameButton };
