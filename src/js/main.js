// WaveMixTV v6 — Main Entry Point
// Wires together registry, layouts, and components.

import { initLayout } from '../layouts/index.js';
import { initComponents } from '../components/index.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('[WaveMixTV] Initializing core systems...');
  initLayout();
  initComponents();
});
