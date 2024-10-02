it('should properly assign to localStorage', () => {
  const key = 'secret';
  const message = "It's a secret to everybody.";

  localStorage.setItem(key, message);
  expect(localStorage.getItem(key)).toBe(message);
});

it('should properly clear localStorage', () => {
  const key = 'secret';
  const message = "It's a secret to everybody.";

  localStorage.setItem(key, message);
  localStorage.clear();

  expect(localStorage.getItem(key)).toBeNull();
});
