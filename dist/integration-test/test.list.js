"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const balances_test_1 = __importDefault(require("./balances.test"));
const trading_1 = __importDefault(require("./trading"));
test_1.test.describe(balances_test_1.default);
test_1.test.describe(trading_1.default);
//# sourceMappingURL=test.list.js.map