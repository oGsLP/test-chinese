# test-chinese [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> A tool to test whether a string is chinese (in)completely

## Installation

```sh
$ npm install --save test-chinese
```

## Api

```js
/**
 * 测试字符串是否（完全）是中文，其中空格换行符等会被忽略
 * @param {string} content 传入字符串
 * @param {boolean} complete 是否完全检查，不传默认为false
 * @return {boolean} 判断结果
 */
testChinese(content,complete);
```

## Usage

```javascript
const testChinese = require("test-chinese");

console.log(testChinese("张翔宇捞的一",true)); // true
console.log(testChinese("张翔宇x捞的一",true)); // false
console.log(testChinese("zhangxiangyu捞deyi",false)); // true
console.log(testChinese("张翔宇lao的一")); // true
```

## License

MIT © [oGsLP](http://github.com/oGsLP)

[npm-image]: https://badge.fury.io/js/test-chinese.svg
[npm-url]: https://npmjs.org/package/test-chinese
[travis-image]: https://travis-ci.org/oGsLP/test-chinese.svg?branch=master
[travis-url]: https://travis-ci.org/oGsLP/test-chinese
[daviddm-image]: https://david-dm.org/oGsLP/test-chinese.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/oGsLP/test-chinese
[coveralls-image]: https://coveralls.io/repos/oGsLP/test-chinese/badge.svg
[coveralls-url]: https://coveralls.io/r/oGsLP/test-chinese
