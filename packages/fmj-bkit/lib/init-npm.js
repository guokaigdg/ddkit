const { exec } = require("child_process");
const chalk = require("chalk");
const path = require("path");
const ora = require("ora");

function initNpm(projectName) {
  const gitInitSpinner = ora(
    `cd ${chalk.green.bold(projectName)} 目录, 执行 ${chalk.green.bold(
      "git init"
    )}`
  );
  gitInitSpinner.start();
  const gitInit = exec("git init");
  gitInit.on("close", (code) => {
    if (code === 0) {
      gitInitSpinner.color = "red";
      gitInitSpinner.succeed(gitInit.stdout.read());
    } else {
      gitInitSpinner.color = "red";
      gitInitSpinner.fail(gitInit.stderr.read());
    }
    // 安装依赖
    const installSpinner = ora(
      `安装项目依赖 ${chalk.green.bold("npm install")}, 请稍后...`
    );
    installSpinner.start();
    exec("npm install", (error, stdout, stderr) => {
      if (error) {
        installSpinner.color = "red";
        installSpinner.fail(chalk.red("安装项目依赖失败，请自行重新安装！"));
        console.log(error);
      } else {
        installSpinner.color = "green";
        installSpinner.succeed("安装成功");
        console.log(`${stderr}${stdout}`);
        console.log(chalk.green("创建项目成功！"));
        console.log(chalk.green("输入npm run serve启动项目"));
      }
    });
  });
}

module.exports = initNpm;
