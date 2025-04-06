import base from "./jest.config.base";

export default {
  ...base,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/renderer/jest.setup.ts"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  roots: ["<rootDir>/src/renderer"],
};
