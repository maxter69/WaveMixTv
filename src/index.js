// src/index.js
// Entry point for WaveMixTV static build
import modeRegistry from "./modes/modeRegistry.js";
import useDeviceMode from "./hooks/useDeviceMode.js";

document.addEventListener("DOMContentLoaded", () => {
  const currentMode = useDeviceMode();
  const modeModule = modeRegistry[currentMode];

  if (modeModule && typeof modeModule.init === "function") {
    console.log(`WaveMixTV → Loaded ${currentMode} mode`);
    modeModule.init();
  } else {
    console.error(`No module found for mode: ${currentMode}`);
  }
});
