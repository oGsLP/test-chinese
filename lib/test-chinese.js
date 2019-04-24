/**
 * 中文标点
 * @type {number[]}
 */
const punctuations = [
    0x00b7, //·
    0x00d7, //×
    0x2014, //—
    0x2018, //‘
    0x2019, //’
    0x201c, //“
    0x201d, //”
    0x2026, //…
    0x3001, //、
    0x3002, //。
    0x300a, //《
    0x300b, //》
    0x300e, //『
    0x300f, //』
    0x3010, //【
    0x3011, //】
    0xff01, //！
    0xff08, //（
    0xff09, //）
    0xff0c, //，
    0xff1a, //：
    0xff1b, //；
    0xff1f, //？
];
/**
 * 全文中文匹配
 * @type {RegExp}
 */
const complete_pattern = /^[\u4E00-\u9FA5]+$/;
/**
 * 存在中文匹配
 * @type {RegExp}
 */
const some_pattern = /[\u4E00-\u9FA5]/;
/**
 * 测试字符串是否（完全）是中文，其中空格换行符等会被忽略
 * @param {string} content 传入字符串
 * @param {boolean} complete 是否完全检查，不传默认为false
 * @return {boolean} 判断结果
 */
module.exports=function (content,complete) {
    let str = content.replace(/\s/g,"");
    if(complete){
        for(let i=0;i<str.length;i++){
            if(punctuations.indexOf(str.codePointAt(i))>-1){
                str = str.replace(new RegExp(str[i],"g"),"");
                i--;
            }
        }
        return complete_pattern.test(str);
    }else return some_pattern.test(str);
};