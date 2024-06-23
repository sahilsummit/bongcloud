import { languageList, MESSAGES, QUESTION_TYPES } from "../../types/enums.js";
import { askQuestion } from "../../utilities/inquirer.js";
import MySpinner from "../../utilities/spinner.js";

const selectLanguage = async () => {
  const language = await askQuestion(
    MESSAGES.LANGUAGE_SELECTION,
    QUESTION_TYPES.LIST,
    languageList
  );
  return language;
};

const askForText = async () => {
  console.log("\n");
  await MySpinner.start("Loading....", 1);
  MySpinner.success();

  const text = await askQuestion(
    MESSAGES.TEXT_TO_BE_TRANSLATTED,
    QUESTION_TYPES.INPUT
  );
  return text;
};

export const languageTranslator = async () => {
  const text = await askForText();
  const lagnuage = await selectLanguage();
  console.log(lagnuage, text);
};
