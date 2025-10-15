// WaveMixTV v6 — Layout Loader
// Dynamically chooses layout based on screen width.

import { setMode } from '../registry/modeRegistry.js';
import { initDesktop } from './desktop.js';
import { initMobile } from './mobile.js';

export function initLayout() {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    setMode('mobile');
    initMobile();
  } else {
    setMode('desktop');
    initDesktop();
  }
}
