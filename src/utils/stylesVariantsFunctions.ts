import { cva } from "class-variance-authority";
import { ClassValue, Config } from "./stylesVariantsFunctions.interfaces";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//wraper cva to export the keys of variants
export const defineStylesWithVariants = <T>(
  base: ClassValue,
  variant?: Config<T>
) => {
  const cvaFn = cva(base, variant);

  const styleVariants = variant?.variants ? Object.keys(variant?.variants) : [];

  const getParamsOfVariant = (variantName: string) =>
    variant?.variants?.hasOwnProperty(variantName)
      ? Object.keys((variant?.variants)[variantName])
      : [];

  return { styleVariants, cvaFn, getParamsOfVariant };
};

export { type VariantProps as VariantProposType } from "class-variance-authority";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
