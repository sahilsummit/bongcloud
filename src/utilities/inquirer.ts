import inquirer from "inquirer";
import { QUESTION_TYPES } from "../types/enums.js";

export const askQuestion = async (
  message: string,
  type: QUESTION_TYPES,
  choices?: string[],
  name: string = 'question',
): Promise<any> => {
  const answers = await inquirer.prompt({
    name: name,
    type: type,
    message: message,
    choices: choices,
  });
  return answers[name];
};
