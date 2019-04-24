const assert = require("assert");
const testChinese = require("./../lib/test-chinese");

describe("#test-chinese",()=>{
    it("should be true",()=>{
        assert.strictEqual(testChinese("张翔宇捞的一",true),true);
    });
    it("should be true",()=>{
        assert.strictEqual(testChinese("：【】张翔宇， 捞的《》、一！",true),true);
    });
    it("should be false",()=>{
        assert.strictEqual(testChinese("ahh张翔宇lao de yi",false),true);
    });
    it("should be false",()=>{
        assert.strictEqual(testChinese("张翔宇lao得一",true),false);
    });
    it("should be true",()=>{
        assert.strictEqual(testChinese("张翔宇o捞得一"),true);
    });
});