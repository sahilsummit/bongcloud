import { createSpinner } from "nanospinner";
import { sleep } from "./sleep.js";
import { DEFAULT_SLEEP_TIME } from "../types/enums.js";
class MySpinner {
    static spinner;
    static async start(text = "", time = DEFAULT_SLEEP_TIME) {
        this.spinner = createSpinner(text).start();
        await sleep(time);
    }
    static success(text = "") {
        if (this.spinner) {
            this.spinner.success({ text });
        }
    }
    static error(text = "") {
        if (this.spinner) {
            this.spinner.error({ text });
        }
    }
    static sleep(seconds) {
        return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    }
}
export default MySpinner;
//# sourceMappingURL=spinner.js.map