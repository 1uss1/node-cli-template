import { Command } from "commander";
import chalk from "chalk";
import { prompt } from "inquirer";

function splash() {
  const title = `
    Welcome to the Node CLI Template Tool
  `;
  console.log(chalk.yellow.bold(title));
}

async function askQuestions() {
  const answers1 = await prompt([
    {
      name: "question-1",
      type: "input",
      message: "What is your name?",
    },
  ]);
  console.log(chalk.green(`Nice to meet you ${answers1["question-1"]}!`));
  const answers2 = await prompt([
    {
      name: "question-2",
      type: "list",
      message: "What operating system is your computer running?",
      choices: ["Windows", "macOS", "Linux", "Android", "iOS"],
    },
  ]);
  console.log(chalk.green(`Nice, you're running ${answers2["question-2"]}!`));
  const answers3 = await prompt([
    {
      name: "question-3",
      type: "confirm",
      message: "Proceed with the questions?",
    },
  ]);
  const proceed: boolean = answers3["question-3"];
  if (!proceed) {
    console.log(chalk.red("Too bad! Bye bye!"));
    return;
  }
  const answers4 = await prompt([
    {
      name: "question-4",
      type: "checkbox",
      message: "Which animals do you like?",
      choices: ["Cats", "Dogs", "Horses", "Tigers", "Sharks"],
    },
  ]);
  const animals: string[] = answers4["question-4"];
  console.log(
    chalk.green(animals.length ? `Wow! You like ${animals}!` : `You don't seem to like animals!`),
  );
  console.log(`
    That's it! Bye bye!
  `);
}

const interactiveCmd = new Command();

interactiveCmd
  .name("interactive")
  .action(async () => {
    splash();
    await askQuestions();
  })
  .description("open interactive mode");

export { interactiveCmd };
