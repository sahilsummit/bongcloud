#!/usr/bin/env node

import { sleep } from "./utilities/sleep.js";
import { animate } from "./utilities/chalk-animation.js";
import {
  ANIMATION_TYPES,
  COLOR_TYPES,
  FIGLET_TYPES,
  GRADIENT_TYPES,
  QUESTION_TYPES,
} from "./types/enums.js";
import { colorizeText } from "./utilities/chalk.js";
import { generateFigletText } from "./utilities/figlet.js";
import { gradientText } from "./utilities/gradient.js";
import { askQuestion } from "./utilities/inquirer.js";
import GenericSpinner from "./utilities/spinner.js";
import MySpinner from "./utilities/spinner.js";

// colorizeText('sahilll', COLOR_TYPES.BG_RED);

const x = await generateFigletText("WOHOOO");

// const y = colorizeText(x, COLOR_TYPES.CYAN);

// await animate('hiiii');

// const z = gradientText(x, GRADIENT_TYPES.INSTAGRAM);

// const answer = await askQuestion("Your first name ?", QUESTION_TYPES.LIST, [
//   "sahil",
//   "kunal",
// ]);

// await MySpinner.start('Checking answer...', 3);

// if (answer == 'sahil') {
//     MySpinner.success(x);
// } else {
//     MySpinner.error('naaah');
// }
