import gradient from "gradient-string";
import { GRADIENT_TYPES } from "../types/enums.js";

export const gradientText = (
  text: string,
  type: GRADIENT_TYPES = GRADIENT_TYPES.PASTEL
) => {
  const gradientFunction = gradient[type as GRADIENT_TYPES];
  return gradientFunction.multiline(text) + "\n";
};
