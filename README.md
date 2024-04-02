# node-cli-template

Template for building a [Node.js](https://nodejs.org/en) CLI tool. This was made in order to reduce the time it takes to setup a new Node.js CLI project with common libraries, tests, CI, etc. so you can **immediately** start being productive.

## Contents

- [x] TypeScript
- [x] [jest](https://github.com/jestjs/jest) for testing
- [x] [GitHub Actions](https://docs.github.com/en/actions) for CI

## How To Use

Install [nvm](https://github.com/nvm-sh/nvm) and run the following commands in this directory:

```
nvm use
npm ci
```

You are good to go!

# Building a SEA [(Single Executable Application)](https://nodejs.org/api/single-executable-applications.html)

To build the executable, run the command:

```
npm run build-sea
```

This will produce the file `bin/cli-tool`. You can run the **interactive** example with the command:

```
./bin/cli-tool interactive
```

## Improvement ideas

- [ ] Write a description of the directory structure

## License

[MIT](./LICENSE)
