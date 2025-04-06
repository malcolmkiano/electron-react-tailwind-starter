jest.mock("electron", () => ({
  contextBridge: { exposeInMainWorld: jest.fn() },
}));

import { contextBridge } from "electron";

import setupPreload from "./setup-preload";

describe("setupPreload", () => {
  it("should expose API to main world", () => {
    setupPreload();
    expect(contextBridge.exposeInMainWorld).toHaveBeenCalledWith("api", expect.any(Object));
  });
});
