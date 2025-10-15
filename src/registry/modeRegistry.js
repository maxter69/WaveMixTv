// WaveMixTV v6 — Mode Registry
// Keeps track of which mode (desktop, mobile, etc.) is active.

let currentMode = 'desktop';

export function getMode() {
  return currentMode;
}

export function setMode(mode) {
  currentMode = mode;
  document.body.dataset.mode = mode;
  console.log(`[WaveMixTV] Mode set to: ${mode}`);
}
