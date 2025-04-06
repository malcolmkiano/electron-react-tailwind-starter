import base from "./jest.config.base";

export default {
  ...base,
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  roots: ["<rootDir>/src/main"],
};
