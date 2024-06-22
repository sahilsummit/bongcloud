export const sleep = (ms: number = 2) =>
  new Promise((r) => setTimeout(r, ms * 1000));
