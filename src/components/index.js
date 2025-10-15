// WaveMixTV v6 — Components Loader
import { initHeader } from './header.js';
import { initVideoPanel } from './videoPanel.js';
import { initChatPanel } from './chatPanel.js';

export function initComponents() {
  initHeader();
  initVideoPanel();
  initChatPanel();
}
