/**
 * Generates a Fibonacci sequence of a given length.
 * @param {number} n The length of the sequence.
 * @returns {number[]} The Fibonacci sequence.
 */
export const generateFibonacci = (n) => {
  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
};
