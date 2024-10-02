import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<AlertButton />);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render an alert button', async () => {
    const button = screen.getByRole('button', { name: /trigger alert/i });

    expect(button).toBeInTheDocument();
  });

  it('should trigger an alert', async () => {
    const button = screen.getByRole('button', { name: /trigger alert/i });
    const messageInput = screen.getByLabelText(/message/i);

    await act(async () => {
      await userEvent.clear(messageInput);
      await userEvent.type(messageInput, 'Hello, world!');
      await userEvent.click(button);
    });

    expect(window.alert).toHaveBeenCalledWith('Hello, world!');
  });
});
