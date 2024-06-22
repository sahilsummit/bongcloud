import chalk from "chalk";
import { COLOR_TYPES } from "../types/enums.js";

export const colorizeText = (text: string, color: COLOR_TYPES): string => {
  const chalkFunction = chalk[color as COLOR_TYPES];
  return chalkFunction(text);
};
