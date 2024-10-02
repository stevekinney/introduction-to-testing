function getStoredSecret() {
  try {
    return localStorage.getItem('secret') || '';
  } catch {
    return '';
  }
}

export function createSecretInput() {
  const id = 'secret-input';

  const container = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const submitButton = document.createElement('button');
  const clearButton = document.createElement('button');

  input.id = id;
  input.type = 'password';
  input.name = 'secret';
  input.placeholder = 'Enter your secret…';
  input.value = getStoredSecret();

  label.htmlFor = id;
  label.textContent = 'Secret';

  submitButton.id = `${id}-button`;
  submitButton.textContent = 'Store Secret';
  submitButton.addEventListener('click', () => {
    localStorage.setItem('secret', input.value);
    input.value = '';
  });

  clearButton.id = `${id}-clear-button`;
  clearButton.textContent = 'Clear Secret';
  clearButton.addEventListener('click', () => {
    localStorage.removeItem('secret');
    input.value = '';
  });

  container.appendChild(label);
  container.appendChild(input);
  container.appendChild(submitButton);
  container.appendChild(clearButton);

  return container;
}
