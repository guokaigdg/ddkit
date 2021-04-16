const updateNotifier = require("update-notifier");
const pkg = require("../package.json");

const notifier = updateNotifier({
  pkg, // 设定检查更新周期，默认为 1000 * 60 * 60 * 24（1 天）
  updateCheckInterval: 1000,
});

function updateChk() {
  if (notifier.update) {
    notifier.notify();
  } else {
    console.log("No new version is available.");
  }
}
module.exports = updateChk;
