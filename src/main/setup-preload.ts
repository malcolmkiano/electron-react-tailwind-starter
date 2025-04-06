import { contextBridge } from "electron";

// Expose safe APIs to renderer if needed
export default function setupPreload() {
  contextBridge.exposeInMainWorld("api", {
    // example method
    ping: () => "pong",
  });
}
