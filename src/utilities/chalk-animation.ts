import chalkAnimation from "chalk-animation";
import { sleep } from "./sleep.js";
import { ANIMATION_TYPES, DEFAULT_SLEEP_TIME } from "../types/enums.js";

export const animate = async (
  text: string,
  design: ANIMATION_TYPES = ANIMATION_TYPES.RAINBOW,
  time: number = DEFAULT_SLEEP_TIME
): Promise<any> => {
  const animateFunction = chalkAnimation[design as ANIMATION_TYPES];
  const animatedText = animateFunction(`\n ${text}`);
  await sleep(time);
  animatedText.stop();
};
