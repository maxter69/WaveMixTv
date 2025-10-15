// src/hooks/useDeviceMode.js
// Detects device type (desktop, tablet, or mobile)

export default function useDeviceMode() {
  const width = window.innerWidth;

  if (width <= 768) {
    return "mobile";
  } else if (width <= 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
}
