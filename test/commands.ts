import { program } from "../src/commands";

describe("commands tests", () => {
  test("check program name", () => {
    expect(program.name()).toEqual("node-cli-template");
  });

  test("check program command count", () => {
    expect(program.commands.length).toEqual(3);
  });

  test("check program command names", () => {
    const commandNames = program.commands.map(cmd => cmd.name());
    expect(commandNames[0]).toEqual("print");
    expect(commandNames[1]).toEqual("fetch");
    expect(commandNames[2]).toEqual("interactive");
  });
});
