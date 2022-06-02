import { Flex } from "../flex";
import { initExample } from "./examples";

initExample();

(async () => {
    try {
        await Flex.default.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
