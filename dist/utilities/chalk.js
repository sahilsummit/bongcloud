import chalk from "chalk";
export const colorizeText = (text, color) => {
    const chalkFunction = chalk[color];
    return chalkFunction(text);
};
//# sourceMappingURL=chalk.js.map