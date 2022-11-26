#!/usr/bin/env node
import arg from "arg";
import chalk from "chalk";

const help = () => {
  console.log(`there are 2 comands:
  --start\tLets start
  --build\tLets build
    `);
};

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });

  // console.log(process.argv.splice(2));
  if (args["--start"]) {
    console.log(chalk.bgWhiteBright("starting..."));
  }
} catch (e) {
  console.log(chalk.bgRedBright(e.message));
  help();
}
