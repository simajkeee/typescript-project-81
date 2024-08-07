"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectToBe = expectToBe;
const vitest_1 = require("vitest");
function expectToBe(obj, expected) {
    (0, vitest_1.expect)(obj.toString()).toBe(expected);
}
//# sourceMappingURL=helpers.js.map