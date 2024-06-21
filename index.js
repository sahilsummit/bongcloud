#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName = 'Player';

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("Yo! Whats up? \n");

  await sleep();
  rainbowTitle.stop();

  const glitchTitle = chalkAnimation.karaoke(
    "Lets test your geographical knowledge"
  );
  await sleep();
  glitchTitle.stop();

  console.log(`
    ${chalk.bgBlue("HOW TO PLAY")}\n 
    If you get any question wrong the CLI will be ${chalk.bgRed("killed!")}
    So get all the questions right...
  `);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "Firstly lets know your name..",
    default() {
      return "Player";
    },
  });

  playerName = answers.player_name;
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner("Checking answer...").start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}

function winner() {
  console.clear();
  const winnerMessage = `Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`;
  figlet(winnerMessage, (err, data) => {
    console.log(gradient.pastel.multiline(data) + "\n");
    process.exit(0);
  });
}

async function question1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "JavaScript was created in 10 days then released on\n",
    choices: [
      "May 23rd, 1995",
      "Nov 24th, 1995",
      "Dec 4th, 1995",
      "Dec 17, 1996",
    ],
  });

  return handleAnswer(answers.question_1 === "Dec 4th, 1995");
}

async function question2() {
  const answers = await inquirer.prompt({
    name: "question_2",
    type: "list",
    message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
    choices: ["4", '"4"', '"1111"', "69420"],
  });
  return handleAnswer(answers.question_2 === '"1111"');
}

await welcome();
await sleep();
await askName();
await question1();
await question2();
winner();
