import { ProcessingErrorCode } from "@eversdk/core";

export class FlexError extends Error {
    code: number;
    data: {
        exitCode: number;
    };
    constructor(exitCode: number, message: string) {
        super(message);
        this.code = ProcessingErrorCode.MessageRejected;
        this.data = {
            exitCode,
        };
    }
}
