const { version } = require("../../package.json");
const boxen = require("boxen");
const chalk = require("chalk");

const bigText = `
    __    __   _ __ 
   / /__ / /__(_) /_
  / _ _ \/ //_/ / __/
 / /_/ / ,< / / /_  
/_.___/_/|_/_/\___/ 
`;

const versionBoxen = boxen(
  `   ${chalk.magenta(bigText)}\n 版本号: ${chalk.green(
    version
  )} \n\n Run ${chalk.blue("npm i -g bkit")} to update `,
  {
    padding: 1,
    margin: 1,
    borderColor: "yellow",
  }
);

module.exports = { versionBoxen, bigText };
