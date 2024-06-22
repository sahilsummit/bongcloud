#!/usr/bin/env node
import { GRADIENT_TYPES } from "./types/enums.js";
import { generateFigletText } from "./utilities/figlet.js";
import { gradientText } from "./utilities/gradient.js";
// colorizeText('sahilll', COLOR_TYPES.BG_RED);
const x = await generateFigletText('SAHIL');
// const y = colorizeText(x, COLOR_TYPES.CYAN);
// await animate('hiiii');
const z = gradientText(x, GRADIENT_TYPES.INSTAGRAM);
console.log(z);
//# sourceMappingURL=index.js.map