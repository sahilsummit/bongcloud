import chalkAnimation from "chalk-animation";
import { sleep } from "./sleep.js";
import { DEFAULT_SLEEP_TIME } from "../types/enums.js";
export const animate = async (text, design, time = DEFAULT_SLEEP_TIME) => {
    const animateFunction = chalkAnimation[design];
    const animatedText = animateFunction(`${text} \n`);
    await sleep(time);
    animatedText.stop();
};
//# sourceMappingURL=chalk-animation.js.map