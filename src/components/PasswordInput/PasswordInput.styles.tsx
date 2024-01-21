import {
  defineStylesWithVariants,
  VariantProposType,
} from "@/utils/stylesVariantsFunctions";

const {
  styleVariants: PasswordInputDivStyleVariants,
  cvaFn: getClassNamePasswordInputDiv,
  getParamsOfVariant: getPasswordInputDivVariant,
} = defineStylesWithVariants(["flex", "w-full", "text-sm"], {
  variants: {
    variant: {
      btOutside: ["border-none", "bg-transparent"],
      btInside: [
        "h-9",
        "rounded-md",
        "border",
        "border-input",
        "bg-transparent",
        "px-3",
        "py-1",
        "shadow-sm",
        "transition-colors",
        "has-[:focus-visible]:outline-none",
        "has-[:focus-visible]:ring-1",
        "has-[:focus-visible]:ring-ring",
      ],
    },
  },
  defaultVariants: {
    variant: "btInside",
  },
});

const {
  styleVariants: PasswordInputStyleVariants,
  cvaFn: getClassNamePasswordInput,
  getParamsOfVariant: getPasswordInputVariant,
} = defineStylesWithVariants(["flex", "w-full"], {
  variants: {
    variant: {
      btOutside: [
        "h-9",
        "rounded-md",
        "border",
        "border-input",
        "bg-transparent",
        "px-3",
        "py-1",
        "text-sm",
        "shadow-sm",
        "transition-colors",
        "file:border-0",
        "file:bg-transparent",
        "file:text-sm",
        "file:font-medium",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none",
        "focus-visible:ring-1",
        "focus-visible:ring-ring",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
      ],
      btInside: ["focus-within:outline-none"],
    },
  },
  defaultVariants: {
    variant: "btInside",
  },
});

type PasswordInputVariantsType = VariantProposType<
  typeof getClassNamePasswordInput
>;

export {
  getClassNamePasswordInputDiv,
  getClassNamePasswordInput,
  type PasswordInputVariantsType,
  PasswordInputStyleVariants,
  getPasswordInputVariant,
};
