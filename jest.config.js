const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  // modulePathIgnorePatterns: ["<rootDir>/next/", "<rootDir>/node_modules/"],
  // testPathIgnorePatterns: ["<rootDir>/e2e"],
};

module.exports = createJestConfig(customJestConfig);
