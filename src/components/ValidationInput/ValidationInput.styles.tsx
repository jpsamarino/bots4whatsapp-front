import {
  defineStylesWithVariants,
  VariantProposType,
} from "@/utils/stylesVariantsFunctions";

const {
  styleVariants: validationInputStyleVariants,
  cvaFn: getClassNameValidationInput,
  getParamsOfVariant: getValidationInputVariant,
} = defineStylesWithVariants([
  "flex",
  "w-full",
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
]);

type ValidationInputVariantsType = VariantProposType<
  typeof getClassNameValidationInput
>;

export {
  getClassNameValidationInput,
  type ValidationInputVariantsType,
  validationInputStyleVariants,
  getValidationInputVariant,
};
