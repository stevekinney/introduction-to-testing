/// <reference types="vite/client" />

import { sendToServer } from './send-to-server';

/**
 * Log a message to the console in development mode or send it to the server in production mode.
 * @param  {string} message
 */
export function log(message) {
  if (import.meta.env.MODE !== 'production') {
    console.log(message);
  } else {
    sendToServer('info', message);
  }
}

/**
 * Log a message to the console in development mode or send it to the server in production mode.
 * @param  {string} message
 */
log.warn = function warn(message) {
  if (import.meta.env.MODE !== 'production') {
    console.warn(message);
  } else {
    sendToServer('warn', message);
  }
};

/**
 * Log a message to the console in development mode or send it to the server in production mode.
 * @param  {string} message
 */
log.error = function error(message) {
  if (import.meta.env.MODE !== 'production') {
    console.log(message);
  } else {
    sendToServer('error', message);
  }
};
