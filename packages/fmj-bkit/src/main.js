const program = require("commander");
// const { version } = require("./utils/constants");

// program.version(version).parse(process.argv);
program
  .version("0.1.0", "-v, --version")
  .option("-i, --init", "init something")
  .option("-g, --generate", "generate something")
  .option("-r, --remove", "remove something");
