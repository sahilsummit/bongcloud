import { openLinkedin } from "./modules/linkedin/linkedin.js";
import { languageTranslator } from "./modules/translator/translator.js";
import {
  ANIMATION_TYPES,
  FIGLET_TYPES,
  GRADIENT_TYPES,
  MODULE_TYPES,
  moduleList,
  QUESTION_TYPES,
  MESSAGES,
} from "./types/enums.js";
import { animate } from "./utilities/chalk-animation.js";
import { generateFigletText } from "./utilities/figlet.js";
import { gradientText } from "./utilities/gradient.js";
import { askQuestion } from "./utilities/inquirer.js";

export const welcome = async () => {
  const welcomeTextFiglet = await generateFigletText(MESSAGES.WELCOME);
  const welcomeTextGradient = gradientText(
    welcomeTextFiglet,
    GRADIENT_TYPES.RAINBOW
  );
  console.log(welcomeTextGradient);
  await animate(MESSAGES.RULER, ANIMATION_TYPES.RAINBOW, 4);
};

export const collectUserData = async () => {
  const userName = await askQuestion(MESSAGES.ASK_NAME, QUESTION_TYPES.INPUT);
  await animate(`Hi ${userName}`);
};

export const introToApp = () => {
  const introMsgGradient = gradientText(MESSAGES.INTRO);
  console.clear();
  console.log(introMsgGradient);
};

const selectModule = async () => {
  const selectedModule = await askQuestion(
    MESSAGES.MODULE_SELECTION,
    QUESTION_TYPES.LIST,
    moduleList
  );
  return selectedModule;
};

export const handleModules = async () => {
  const selectedModule = await selectModule();

  switch (selectedModule) {
    case MODULE_TYPES.TYPING_SPEED:
      break;

    case MODULE_TYPES.TRANSLATOR:
      await languageTranslator();
      await selectModule();
      break;

    case MODULE_TYPES.WEATHER:
      break;

    case MODULE_TYPES.FIGLET:
      break;

    case MODULE_TYPES.TIC_TAC_TOE:
      break;

    case MODULE_TYPES.HANGMAN:
      break;

    case MODULE_TYPES.NOTIFICATION:
      break;

    case MODULE_TYPES.LINKEDIN:
      await openLinkedin();
      await selectModule();
      break;

    default:
      break;
  }
};
