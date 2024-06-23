import inquirer from "inquirer";
export const askQuestion = async (message, type, choices, name = "question") => {
    const answers = await inquirer.prompt({
        name: name,
        type: type,
        message: message,
        choices: choices,
    });
    return answers[name];
};
//# sourceMappingURL=inquirer.js.map