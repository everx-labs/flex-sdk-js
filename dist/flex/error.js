"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexError = void 0;
const core_1 = require("@eversdk/core");
class FlexError extends Error {
    constructor(exitCode, message) {
        super(message);
        this.code = core_1.ProcessingErrorCode.MessageRejected;
        this.data = {
            exitCode,
        };
    }
}
exports.FlexError = FlexError;
//# sourceMappingURL=error.js.map