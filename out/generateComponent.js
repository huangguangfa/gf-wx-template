"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateComponent = void 0;
const fs = require('fs');
const vscode = require("vscode");
const template_1 = require("./template");
function generateComponent(path, comName) {
    const filePath = `${path}/${comName}/`;
    try {
        fs.statSync(filePath);
        return vscode.window.showErrorMessage('当前已有组件模块');
    }
    catch (e) {
        //写入文件夹 
        fs.mkdirSync(filePath, { recursive: true });
        //写入js文件
        fs.writeFileSync(`${filePath}index.js`, template_1.JSTEMPLATE());
        //写入css文件
        fs.writeFileSync(`${filePath}index.less`, template_1.CSSTEMPLATE(comName));
        //写入json文件
        fs.writeFileSync(`${filePath}index.json`, template_1.JSONTEMPLATE(comName));
        //写入wxml文件
        fs.writeFileSync(`${filePath}index.wxml`, template_1.WXMLTEMPLATE(comName));
        vscode.window.showInformationMessage('创建成功');
    }
}
exports.generateComponent = generateComponent;
//# sourceMappingURL=generateComponent.js.map