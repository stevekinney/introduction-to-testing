/// <reference types="vite/client" />

export function log(...args) {
  if (import.meta.env.MODE !== 'production') {
    console.log(...args);
  }
}

log.error = function error(...args) {
  if (import.meta.env.MODE !== 'production') {
    console.log(...args);
  }
};

log.warn = function warn(...args) {
  if (import.meta.env.MODE !== 'production') {
    console.warn(...args);
  }
};
