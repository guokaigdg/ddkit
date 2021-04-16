// const memFs = require('mem-fs');
// const editor = require('mem-fs-editor');
// const INJECT_FILES = ['package.json']


// function saveApp() {
//     function getDirFileName (dir) {
//     try {
//         const files = fse.readdirSync(dir)
//         const fileToCopy = []
//         files. forEach(file => {
//         if (file.indexOf(INJECT_FILES) > -1) return
//         fileToCopy.push(file)
//         })
//         return fileToCopy
//     } catch (e) {
//         return []
//     }
//     }

//     const store = memFs.create()
//     let memFsEditor = editor.create(store)
//     function injectTemplate(source, dest, data) {
//     memFsEditor.copyTpl( source, dest, data )
//     }

//     const copyFiles = getDirFileName(downloadPath) // 要复制的文件

//     copyFiles.forEach((file) => {
//         fse.copySync(path.join(downloadPath, file), path.join(projectPath, file))
//         console.log(`${chalk.green('✔ ')}${chalk.green(`创建${projectName}/${file}`)}`)
//     })

//     INJECT_FILES.forEach(file => {
//         injectTemplate(path.join(downloadPath, file), path.join(projectName, file), {
//         projectName,
//         description
//         })
//     })

//     // 将内存中的文件操作，全部提交到磁盘
//     memFsEditor.commit(() => {
//         INJECT_FILES.forEach(file => {
//         console.log(`${chalk.green('✔ ')}${chalk.green(`创建${projectName}/${file}`)}`)
//     })

//     // 删除临时文件
//     fse.remove(downloadPath);
//     process.chdir(projectPath);
// }
// // module.exports = saveApp;
