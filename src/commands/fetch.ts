import { Command } from "commander";
import chalk from "chalk";

const fetchCmd = new Command();

fetchCmd
  .name("fetch")
  .argument("<url>")
  .action(async (url: string) => {
    try {
      const response = await fetch(url);
      const text = await response.text();
      console.log(chalk.green(text));
    } catch (err) {
      console.log(chalk.red.bold(`Failed to fetch contents of URL: ${url}`));
    }
  })
  .description("fetch and print contents of a URL");

export { fetchCmd };
