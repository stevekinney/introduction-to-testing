/**
 * Converts a string to a number or throws an error if the string is not a number.
 * @param {string} value
 * @returns {number} The number.
 */
export const stringToNumber = (value) => {
  const number = Number(value);

  if (isNaN(number)) {
    throw new Error(`'${value}' cannot be parsed as a number.`);
  }

  return number;
};
