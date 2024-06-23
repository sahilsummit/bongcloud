import gradient from "gradient-string";
import { GRADIENT_TYPES } from "../types/enums.js";
export const gradientText = (text, type = GRADIENT_TYPES.PASTEL) => {
    const gradientFunction = gradient[type];
    return gradientFunction.multiline(text) + "\n";
};
//# sourceMappingURL=gradient.js.map