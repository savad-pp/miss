"use strict";
exports.__esModule = true;
var Cars_1 = require("./Cars");
var chai_1 = require("chai");
describe("testing", function () {
    it("test for car milage function,", function () {
        var obj = new Cars_1.Car("Alto", 1000);
        chai_1.assert.equal(obj.getMilage(100), 10);
    });
    it("testing add function", function () {
        var obj = new Cars_1.Car("Alto", 1000);
        chai_1.expect(obj.add(1, 2)).to.equals(3);
    });
});
