export interface ValidationFieldInterface {
  (currentValue: string | boolean | number | undefined): {
    erroMessage: string;
    isError: boolean;
  };
}
