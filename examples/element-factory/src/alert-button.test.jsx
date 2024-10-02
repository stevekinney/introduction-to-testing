import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should render an alert button', async () => {});

  it.only('should trigger an alert', async () => {
    // const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    render(<AlertButton />);
    const input = screen.getByLabelText('Message');
    const button = screen.getByRole('button', { name: /trigger alert/i });

    await act(async () => {
      await userEvent.type(input, 'Hello');
    });

    // Click on the button.
    // Look and see if alert() was called with the message.
  });
});
