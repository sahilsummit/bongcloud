import { DEFAULT_SLEEP_TIME } from "../types/enums.js";
export const sleep = (ms = DEFAULT_SLEEP_TIME) => new Promise((r) => setTimeout(r, ms * 1000));
//# sourceMappingURL=sleep.js.map