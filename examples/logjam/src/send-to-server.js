/**
 *
 * @param {'info' | 'error' | 'warn'} level
 * @param {string} message
 */
export const sendToServer = (level, message) => {
  return `You must mock this function: sendToServer(${level}, ${message})`;
};
