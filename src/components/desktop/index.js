// src/components/desktop/index.js
// Desktop mode logic for WaveMixTV

import { initHeader } from "./header.js";
import { initVideoPanel } from "./videoPanel.js";
import { initChatPanel } from "./chatPanel.js";

export function init() {
  console.log("WaveMixTV: Initializing Desktop Mode");

  // Initialize layout parts
  initHeader();
  initVideoPanel();
  initChatPanel();
}
