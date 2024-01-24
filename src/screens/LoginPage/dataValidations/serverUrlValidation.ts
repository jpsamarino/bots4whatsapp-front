import { ValidationFieldInterface } from "@/utils/validationsInterface";

export const validateServerUrl: ValidationFieldInterface = (currentValue) => {
  if (currentValue === "") {
    return { isError: true, erroMessage: "Server Andress is required" };
  }
  return { isError: false, erroMessage: "" };
};
