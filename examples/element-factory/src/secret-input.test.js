import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { createSecretInput } from './secret-input.js';

import '@testing-library/jest-dom/vitest';

describe('createSecretInput', async () => {
  beforeEach(() => {
    vi.spyOn(localStorage, 'getItem').mockReturnValue('test secret');
    vi.spyOn(localStorage, 'setItem');

    document.body.innerHTML = '';
    document.body.appendChild(createSecretInput());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should have loaded the secret from localStorage', async () => {
    expect(screen.getByLabelText('Secret')).toHaveValue('test secret');
    expect(localStorage.getItem).toHaveBeenCalledWith('secret');
  });

  it('should save the secret to localStorage', async () => {
    const input = screen.getByLabelText('Secret');
    const button = screen.getByText('Store Secret');

    await userEvent.clear(input);
    await userEvent.type(input, 'new secret');
    await userEvent.click(button);

    expect(localStorage.setItem).toHaveBeenCalledWith('secret', 'new secret');
  });
});
