/**
 *
 * @param {'info' | 'error' | 'warn'} level
 * @param {string} message
 */
export const sendToServer = (level, message) => {
  throw new Error('I should not run!');
  return `You must mock this function: sendToServer(${level}, ${message})`;
};
