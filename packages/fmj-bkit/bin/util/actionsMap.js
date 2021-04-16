const actionsMap = {
  create: {
    // 创建模板
    description: "create project",
    alias: "cr",
    examples: ["bkit create app"],
  },
  config: {
    // 配置配置文件
    description: "config info",
    alias: "c",
    examples: ["bkit config get <k>", "bkit config set <k> <v>"],
  },
  "*": {
    description: "command not found",
  },
};

module.exports = { actionsMap };
