import { BrowserWindow } from "electron";

import createWindow from "./create-window";

jest.mock("electron", () => {
  const original = jest.requireActual("electron");
  return {
    ...original,
    BrowserWindow: jest.fn().mockImplementation(() => ({
      loadURL: jest.fn(),
      loadFile: jest.fn(),
      webContents: { openDevTools: jest.fn() },
    })),
  };
});

describe("createWindow", () => {
  it("should create a BrowserWindow and load Vite URL", () => {
    const mockUrl = "http://localhost:3000";
    const window = createWindow(mockUrl);

    expect(BrowserWindow).toHaveBeenCalled();
    expect(window.loadURL).toHaveBeenCalledWith(mockUrl);
  });

  it("should fall back to loading local index.html", () => {
    const mockLoadFile = jest.fn();
    (BrowserWindow as unknown as jest.Mock).mockImplementation(() => ({
      loadFile: mockLoadFile,
      webContents: { openDevTools: jest.fn() },
    }));

    createWindow(undefined);

    expect(BrowserWindow).toHaveBeenCalled();
    expect(mockLoadFile).toHaveBeenCalledWith(expect.stringContaining("main_window/index.html"));
  });
});
