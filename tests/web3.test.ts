import { expect, test } from "@playwright/test";
import { errorFromExitCode, FlexWalletAccount } from "../contracts";

test("error from exit code", () => {
    expect(errorFromExitCode(FlexWalletAccount, 102).message).toBe(
        "FlexWalletAccount failed with exit code 102. Message sender is not RootTokenContract address.",
    );
});
