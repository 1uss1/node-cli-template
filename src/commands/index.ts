import { Command } from "commander";
import { name, description, version } from "../../package.json";
import { printCmd } from "./print";
import { fetchCmd } from "./fetch";
import { interactiveCmd } from "./interactive";

const program = new Command();
program.name(name).description(description).version(version, "-v, --version");

program.addCommand(printCmd);
program.addCommand(fetchCmd);
program.addCommand(interactiveCmd);

export { program };
