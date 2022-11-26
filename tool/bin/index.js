#!/usr/bin/env node
const arg = require("arg");

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
    console.log("starting...");
  }
} catch (e) {
  console.log(e.message);
  help();
}
