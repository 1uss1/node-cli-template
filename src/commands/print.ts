import { Command } from "commander";
import chalk from "chalk";

const printCmd = new Command();

printCmd
  .name("print")
  .argument("<text>")
  .option("-b, --bold", "Use bold text")
  .action((text: string, opts: { bold?: boolean }) => {
    console.log(opts.bold ? chalk.bold(text) : text);
  })
  .description("prints text on screen");

export { printCmd };
