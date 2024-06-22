#!/usr/bin/env node
import { animate } from "./utilities/chalk-animation.js";
import { ANIMATION_TYPES } from "./types/enums.js";
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
// greet("sahil");
// await sleep();
// greet("sahil");
animate('hiiii', ANIMATION_TYPES.GLITCH);
//# sourceMappingURL=index.js.map