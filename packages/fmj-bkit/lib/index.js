const updateChk = require("../lib/update");
// upgrade 检测更新
program
  // 声明的命令
  .command("upgrade")
  // 描述信息，在帮助信息时显示
  .description("Check the js-plugin-cli version.")
  .action(() => {
    // 执行 lib/update.js 里面的操作
    updateChk();
  });
