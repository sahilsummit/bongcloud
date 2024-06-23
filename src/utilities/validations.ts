import { COLOR_TYPES, MESSAGES } from "../types/enums.js";
import { colorizeText } from "./chalk.js";

export const checkTextLength = (text: string, length: number = 50) => {
  if (text.length > length) {
    const errorMsg = colorizeText(MESSAGES.TEXT_SIZE_ERROR, COLOR_TYPES.BG_RED);
    console.log(errorMsg);
    process.exit(0);
  }
};
