const fs = require('fs');
import * as vscode from 'vscode';
import { JSTEMPLATE,CSSTEMPLATE,JSONTEMPLATE,WXMLTEMPLATE } from './template';
export function generateComponent(path:string,comName:string){
    const filePath = `${path}/${comName}/`;
    try{
        fs.statSync(filePath);
        return vscode.window.showErrorMessage('当前已有组件模块');
    }catch(e){ 
        //写入文件夹 
        fs.mkdirSync(filePath,{recursive:true});
        //写入js文件
        fs.writeFileSync(`${filePath}index.js`, JSTEMPLATE());
        //写入css文件
        fs.writeFileSync(`${filePath}index.less`, CSSTEMPLATE(comName));
        //写入json文件
        fs.writeFileSync(`${filePath}index.json`, JSONTEMPLATE(comName));
        //写入wxml文件
        fs.writeFileSync(`${filePath}index.wxml`, WXMLTEMPLATE(comName));
        vscode.window.showInformationMessage('创建成功');
    }
}