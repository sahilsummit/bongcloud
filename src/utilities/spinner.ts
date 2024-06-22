import { createSpinner } from "nanospinner";
import { sleep } from "./sleep.js";
import { DEFAULT_SLEEP_TIME } from "../types/enums.js";

class MySpinner {
  private static spinner: any;

  static async start(
    text: string = "",
    time: number = DEFAULT_SLEEP_TIME
  ): Promise<void> {
    this.spinner = createSpinner(text).start();
    await sleep(time);
  }

  static success(text: string = ""): void {
    if (this.spinner) {
      this.spinner.success({ text });
    }
  }

  static error(text: string = ""): void {
    if (this.spinner) {
      this.spinner.error({ text });
    }
  }

  private static sleep(seconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
}

export default MySpinner;
