import { ValidationFieldInterface } from "@/utils/validationsInterface";

export const validateToken: ValidationFieldInterface = (currentValue) => {
  if (currentValue === "") {
    return { isError: true, erroMessage: "Token is required" };
  }
  return { isError: false, erroMessage: "" };
};
