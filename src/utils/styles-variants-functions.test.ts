import { describe, expect, test } from "@jest/globals";
import { defineStylesWithVariants, cn } from "./styles-variants-functions";

describe("test model to process styles (defineStylesWithVariants)", () => {
  test("should extract styleVariants ", () => {
    const result = defineStylesWithVariants(
      ["inline-flex", "items-center", "justify-center"],
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground",
            destructive: "bg-destructive text-destructive-foreground",
            outline: "border border-input bg-background shadow-sm",
          },
          size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
          },
        },
        defaultVariants: {
          variant: "default",
          size: "default",
        },
      }
    );
    expect(result.styleVariants).toEqual(["variant", "size"]);
  });
  test("should extract getParamsOfVariant ", () => {
    const result = defineStylesWithVariants(
      ["inline-flex", "items-center", "justify-center"],
      {
        variants: {
          size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
          },
        },
        defaultVariants: {
          size: "default",
        },
      }
    );
    expect(result.getParamsOfVariant("size")).toEqual(["default", "sm"]);
  });
  test("should return cvaFn ", () => {
    const result = defineStylesWithVariants(
      ["inline-flex", "items-center", "justify-center"],
      {
        variants: {
          size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
          },
        },
        defaultVariants: {
          size: "default",
        },
      }
    );
    expect(result.cvaFn({ size: "sm" })).toEqual(
      "inline-flex items-center justify-center h-8 rounded-md px-3 text-xs"
    );
  });
  test("should return cvaFn with default variant ", () => {
    const result = defineStylesWithVariants(
      ["inline-flex", "items-center", "justify-center"],
      {
        variants: {
          size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
          },
        },
        defaultVariants: {
          size: "default",
        },
      }
    );
    expect(result.cvaFn({})).toEqual(
      "inline-flex items-center justify-center h-9 px-4 py-2"
    );
  });
  test("should return cvaFn a custom class when you use it ", () => {
    const result = defineStylesWithVariants(
      ["inline-flex", "items-center", "justify-center"],
      {
        variants: {
          size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
          },
        },
        defaultVariants: {
          size: "default",
        },
      }
    );
    expect(
      result.cvaFn({ size: "default", className: "my-custom-class" })
    ).toEqual(
      "inline-flex items-center justify-center h-9 px-4 py-2 my-custom-class"
    );
  });
  test("if is not defined return base ", () => {
    const result = defineStylesWithVariants([
      "inline-flex",
      "items-center",
      "justify-center",
    ]);
    expect(result.styleVariants).toEqual([]);
    expect(result.getParamsOfVariant("size")).toEqual([]);
    expect(result.cvaFn({})).toEqual("inline-flex items-center justify-center");
  });
});

test("if is receive a undefined or null in classname generate the classes ", () => {
  const result = defineStylesWithVariants([
    "inline-flex",
    "items-center",
    "justify-center",
  ]);
  expect(result.styleVariants).toEqual([]);
  expect(result.getParamsOfVariant("size")).toEqual([]);
  expect(result.cvaFn({ className: undefined })).toEqual(
    "inline-flex items-center justify-center"
  );
  expect(result.cvaFn({ className: null })).toEqual(
    "inline-flex items-center justify-center"
  );
});

describe("test model to join styles and remove problems (cn)", () => {
  test("should join styles ", () => {
    const result = cn("inline-flex", "items-center", "justify-center");
    expect(result).toEqual("inline-flex items-center justify-center");
  });
  test("should join styles with undefined ", () => {
    const result = cn("inline-flex", undefined, "justify-center");
    expect(result).toEqual("inline-flex justify-center");
  });
  test("should remove duplicate styles classes", () => {
    const result = cn("inline-flex", "items-center", "inline-flex");
    expect(result).toEqual("items-center inline-flex");
  });
});
