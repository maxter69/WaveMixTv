// modeRegistry.js
// Central registry for all device modes in WaveMixTV
// Each mode should be isolated to prevent layout crossover between devices.

import desktopMode from "./desktopMode.js";
import mobileLandscapeMode from "./mobileLandscapeMode.js";
import mobilePortraitMode from "./mobilePortraitMode.js";

const modeRegistry = {
  desktop: desktopMode,
  mobileLandscape: mobileLandscapeMode,
  mobilePortrait: mobilePortraitMode,
};

export default modeRegistry;
