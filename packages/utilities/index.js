/**
 *
 * @param {unknown} error The error object to check.
 * @returns {error is Error}
 */
export const isError = (error) => error instanceof Error;

/**
 * Get the error message from an error object or return a default message.
 * @param {unknown} error The error object to check.
 * @param {string} defaultMessage The default message to return if the error is not an instance of Error.
 * @returns {string} The error message or the default message.
 */
export const getErrorMessage = (error, defaultMessage) => {
  return isError(error) ? error.message : defaultMessage;
};
