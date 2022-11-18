module.exports = {
    roots: ["<rootDir>"],
    testMatch: ["<rootDir>/tests/*.ts", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
};
