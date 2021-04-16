const inquirer = require("inquirer");
const download = require("download-git-repo");
const fse = require("fs-extra");
const path = require("path");
const ora = require("ora");
const initNpm = require("./init-npm");
const memFs = require('mem-fs');
const editor = require('mem-fs-editor');
const INJECT_FILES = ['package.json'];

function getDirFileName (dir) {
  try {
    const files = fse.readdirSync(dir)
    const fileToCopy = []
    files. forEach(file => {
      if (file.indexOf(INJECT_FILES) > -1) return
      fileToCopy.push(file)
    })
    return fileToCopy
  } catch (e) {
    return []
  }
}

function createApp(projectName) {
  let prompts = [];
  const projectPath = path.join(process.cwd(), projectName);
  const downloadPath = path.join(
    projectPath,
    "https://github.com/guokaigdg/easy-list.git"
  );
  if (typeof projectName !== "string") {
    prompts.push({
      type: "input",
      name: "projectName",
      message: "请输入项目名称:",
      validate(input) {
        if (!input) {
          return "项目名称不能为空";
        }
        if (fse.existsSync(input)) {
          return "已经存在同名项目，请重新输入项目名";
        }
        return true;
      },
    });
  } else if (fse.existsSync(projectName)) {
    prompts.push({
      type: "input",
      name: "projectName",
      message: "请输入项目名称:",
      validate(input) {
        if (!input) {
          return "项目名称不能为空";
        }
        if (fse.existsSync(input)) {
          return "已经存在同名项目，请重新输入项目名";
        }
        return true;
      },
    });
  }

  // 选择模板
  prompts.push({
    type: "list",
    message: "请选择要下载的模板",
    name: "template",
    choices: [
      {
        name: "React",
        value: "react",
      },
      {
        name: "Vue",
        value: "vue",
      },
    ],
  });

  // 选择模板
  prompts.push({
    type: "confirm",
    message: "是否初始化git仓库",
    name: "git",
    default: false,
  });

  // 选择模板
  prompts.push({
    type: "confirm",
    message: "是否安装依赖",
    name: "install",
    default: false,
  });

  inquirer.prompt(prompts).then((answer) => {
      const spinner = ora(`正在下载${answer.template}项目模板`)
      spinner.start()
      const sourcePathReact =  "direct:https://github.com/xzblog/react-template.git";
      const sourcePathVue =  "direct:https://github.com/xzblog/react-template.git";
      const sourcePath = answer.template === "react" ? sourcePathReact : sourcePathVue ;
      download(sourcePath, projectName, { clone: true }, err => {
        if (err) {
          spinner.color = 'red';
          spinner.fail(err);
          console.log(err)
          return
        }
        spinner.color = 'green';
        spinner.succeed('下载成功');
      })
      // initNpm(projectName);
  });

  //复制文件
  // const store = memFs.create()
  // let memFsEditor = editor.create(store)
  // function injectTemplate(source, dest, data) {
  //    memFsEditor.copyTpl( source, dest, data )
  // }
  // const copyFiles = getDirFileName(downloadPath) // 要复制的文件
  
  // copyFiles.forEach((file) => {
  //     fse.copySync(path.join(downloadPath, file), path.join(projectPath, file))
  //     console.log(`${chalk.green('✔ ')}${chalk.green(`创建${projectName}/${file}`)}`)
  // })
  
  // INJECT_FILES.forEach(file => {
  //     injectTemplate(path.join(downloadPath, file), path.join(projectName, file), {
  //       projectName,
  //       description
  //     })
  // })
  // // 将内存中的文件操作，全部提交到磁盘
  // memFsEditor.commit(() => {
  //     INJECT_FILES.forEach(file => {
  //       console.log(`${chalk.green('✔ ')}${chalk.green(`创建${projectName}/${file}`)}`)
  // })
  // // 删除临时文件
  // fse.remove(downloadPath)
  // process.chdir(projectPath)
  

}

module.exports = createApp;


