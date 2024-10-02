export const add = (a, b) => {
  if (typeof a === 'string') a = Number(a);
  if (typeof b === 'string') b = Number(b);

  if (isNaN(a)) throw new Error('The first argument is not a number');
  if (isNaN(b)) throw new Error('The second argument is not a number');

  return a + b;
};

export const subtract = (a = 0, b = 0) => {
  if (Array.isArray(a)) {
    a = a.reduce((a, b) => {
      return a - b;
    });
  }

  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  if (b === 0) return null;
  return a / b;
};
