import * as vscode from 'vscode';
import { generateComponent } from './generateComponent';
export function activate(context: vscode.ExtensionContext) {
	const config = vscode.commands.registerCommand('gf-wx-template.component', function (param) {
		// 获取文件夹绝对路径
		const filePath: string = param.path.includes(":")?param.path.slice(1):param.path;
        const options = {
            prompt: "请输入组件名: ",
            placeHolder: "组件名"
        }
        // 调出系统输入框获取组件名
        vscode.window.showInputBox(options).then( value => {
            if (!value ) return;
			if ( filePath.includes('.') ){ return vscode.window.showErrorMessage('不能在文件里面创建组件'); }
            const componentName = value;
            // 生成模板代码
            generateComponent(filePath,componentName);
        });
    });
	context.subscriptions.push(config);
}

export function deactivate() {}
