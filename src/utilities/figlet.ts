import figlet, { Fonts } from "figlet";
import { FIGLET_TYPES } from "../types/enums.js";

export const generateFigletText = async (
  text: string,
  type: FIGLET_TYPES = FIGLET_TYPES.STANDARD
): Promise<string> => {
  return new Promise((resolve, reject) => {
    figlet(text, type as Fonts, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data as string);
      }
    });
  });
};
