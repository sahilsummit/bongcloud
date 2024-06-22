import chalkAnimation from "chalk-animation";
import { sleep } from "./sleep.js";
import { ANIMATION_TYPES, DEFAULT_SLEEP_TIME } from "../types/enums.js";

export const animate = async (
  text: string,
  design: ANIMATION_TYPES,
  time: number = DEFAULT_SLEEP_TIME
) => {
  const animateFunction = chalkAnimation[design as ANIMATION_TYPES];
  const animatedText = animateFunction(`${text} \n`);
  await sleep(time);
  animatedText.stop();
};
