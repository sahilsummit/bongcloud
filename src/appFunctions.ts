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
import MySpinner from "./utilities/spinner.js";
import { checkTextLength } from "./utilities/validations.js";

export const welcome = async () => {
  const welcomeTextFiglet: string = await generateFigletText(MESSAGES.WELCOME);
  const welcomeTextGradient: string = gradientText(
    welcomeTextFiglet,
    GRADIENT_TYPES.RAINBOW
  );
  console.log(welcomeTextGradient);
  await animate(MESSAGES.RULER, ANIMATION_TYPES.RAINBOW, 4);
};

export const collectUserData = async () => {
  const userName: string = await askQuestion(
    MESSAGES.ASK_NAME,
    QUESTION_TYPES.INPUT
  );
  checkTextLength(userName, 20);
  await animate(`Hi ${userName}`);
};

export const introToApp = () => {
  const introMsgGradient: string = gradientText(MESSAGES.INTRO);
  console.clear();
  console.log(introMsgGradient);
};

const selectModule = async () => {
  const selectedModule: string = await askQuestion(
    MESSAGES.MODULE_SELECTION,
    QUESTION_TYPES.LIST,
    moduleList
  );
  return selectedModule;
};

export const handleModules = async () => {
  const selectedModule: string = await selectModule();

  switch (selectedModule) {
    case MODULE_TYPES.TYPING_SPEED:
      await MySpinner.start(MESSAGES.LOADING, 1);
      MySpinner.success();
      console.log(gradientText(MESSAGES.STILL_IN_PROGRESS));
      await handleModules();
      break;

    case MODULE_TYPES.TRANSLATOR:
      await languageTranslator();
      await handleModules();
      break;

    case MODULE_TYPES.WEATHER:
      await MySpinner.start(MESSAGES.LOADING, 1);
      MySpinner.success();
      console.log(gradientText(MESSAGES.STILL_IN_PROGRESS));
      await handleModules();
      break;

    case MODULE_TYPES.FIGLET:
      await MySpinner.start(MESSAGES.LOADING, 1);
      MySpinner.success();
      console.log(gradientText(MESSAGES.STILL_IN_PROGRESS));
      await handleModules();
      break;

    case MODULE_TYPES.TIC_TAC_TOE:
      await MySpinner.start(MESSAGES.LOADING, 1);
      MySpinner.success();
      console.log(gradientText(MESSAGES.STILL_IN_PROGRESS));
      await handleModules();
      break;

    case MODULE_TYPES.HANGMAN:
      await MySpinner.start(MESSAGES.LOADING, 1);
      MySpinner.success();
      console.log(gradientText(MESSAGES.STILL_IN_PROGRESS));
      await handleModules();
      break;

    case MODULE_TYPES.NOTIFICATION:
      await MySpinner.start(MESSAGES.LOADING, 1);
      MySpinner.success();
      console.log(gradientText(MESSAGES.STILL_IN_PROGRESS));
      await handleModules();
      break;

    case MODULE_TYPES.EXIT:
      await animate("Byeee 👋");
      process.exit(1);

    case MODULE_TYPES.LINKEDIN:
      await openLinkedin();
      await handleModules();
      break;

    default:
      break;
  }
};
