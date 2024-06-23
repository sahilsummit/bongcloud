import figlet from "figlet";
import { FIGLET_TYPES } from "../types/enums.js";
export const generateFigletText = async (text, type = FIGLET_TYPES.STANDARD) => {
    return new Promise((resolve, reject) => {
        figlet(text, type, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
//# sourceMappingURL=figlet.js.map