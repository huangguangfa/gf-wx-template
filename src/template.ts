export const JSTEMPLATE = function(){
return`import create from "@omi/create";
import store from "@/store/index";
create.Page(store, {
    data(){

    }
});
`;
};


export const CSSTEMPLATE = function( comname:string ){
return`.${comname}{

}`;
};


export const JSONTEMPLATE = function(comname:string){
return`{
    "navigationBarTitleText": "${comname}"
}
`;
};

export const WXMLTEMPLATE = function(comname:string){
return`<view class="${comname}">

</view>
`;
};
