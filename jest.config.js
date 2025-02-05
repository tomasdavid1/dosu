const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", 
    "^.+\\.(js|jsx|mjs|cjs)$": "babel-jest",
  },

  transformIgnorePatterns: [
    "/node_modules/(?!(next)/)",
  ],

  projects: [
    {
      displayName: "backend",
      testEnvironment: "node",
      preset: "ts-jest",
      testMatch: ["**/__tests__/backend/**/*.test.ts"],
    },
    {
      displayName: "frontend",
      testEnvironment: "jest-environment-jsdom",  
      preset: "ts-jest",
      testMatch: ["**/__tests__/frontend/**/*.test.tsx"],
      setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    },
  ],
};

module.exports = createJestConfig(customJestConfig);
