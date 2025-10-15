// WaveMixTV v6 — DOM Utility Helpers

export function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

export function qsa(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

export function createEl(tag, options = {}) {
  const el = document.createElement(tag);
  Object.assign(el, options);
  return el;
}
