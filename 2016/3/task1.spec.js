"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task1_1 = require("./task1");
test('Triangle tester', function () {
    it('should handle negatives', function () {
        expect(task1_1.default("5 10 25")).toBe(false);
    });
    it('should handle positives', function () {
        expect(task1_1.default("3 4 5")).toBe(true);
    });
});
