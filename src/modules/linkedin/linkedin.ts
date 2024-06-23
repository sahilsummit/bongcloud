import open from "open";
import MySpinner from "../../utilities/spinner.js";
import { sleep } from "../../utilities/sleep.js";

export const openLinkedin = async () => {
  console.log("\n");
  await MySpinner.start("Loading....", 2);
  MySpinner.success();
  await open("https://www.linkedin.com/in/sahil-jaura/");
  console.clear();
  await sleep(1);
};
