import { languageList, MESSAGES, QUESTION_TYPES, } from "../../types/enums.js";
import { gradientText } from "../../utilities/gradient.js";
import { askQuestion } from "../../utilities/inquirer.js";
import MySpinner from "../../utilities/spinner.js";
import translate from "google-translate-api-x";
import { checkTextLength } from "../../utilities/validations.js";
const selectLanguage = async () => {
    const language = await askQuestion(MESSAGES.LANGUAGE_SELECTION, QUESTION_TYPES.LIST, languageList);
    return language;
};
const askForText = async () => {
    await MySpinner.start(MESSAGES.LOADING, 1);
    MySpinner.success();
    const text = await askQuestion(MESSAGES.TEXT_TO_BE_TRANSLATTED, QUESTION_TYPES.INPUT);
    checkTextLength(text);
    return text;
};
export const languageTranslator = async () => {
    const text = await askForText();
    const lagnuage = await selectLanguage();
    const res = await translate(text, { to: lagnuage });
    const resGradient = gradientText(res?.text);
    console.log(`\n${resGradient}`);
};
//# sourceMappingURL=translator.js.map