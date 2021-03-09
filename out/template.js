"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WXMLTEMPLATE = exports.JSONTEMPLATE = exports.CSSTEMPLATE = exports.JSTEMPLATE = void 0;
const JSTEMPLATE = function () {
    return `import create from "@omi/create";
import store from "@/store/index";
create.Page(store, {
    data(){

    }
});
`;
};
exports.JSTEMPLATE = JSTEMPLATE;
const CSSTEMPLATE = function (comname) {
    return `.${comname}{

}`;
};
exports.CSSTEMPLATE = CSSTEMPLATE;
const JSONTEMPLATE = function (comname) {
    return `{
    "navigationBarTitleText": "${comname}"
}
`;
};
exports.JSONTEMPLATE = JSONTEMPLATE;
const WXMLTEMPLATE = function (comname) {
    return `<view class="${comname}">

</view>
`;
};
exports.WXMLTEMPLATE = WXMLTEMPLATE;
//# sourceMappingURL=template.js.map