module.exports = {
    roots: ["<rootDir>"],
    testMatch: ["<rootDir>/tests/*.ts", "**/?(*.)+(spec|test).+(ts|tsx)"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
};
