import { vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Notification } from './notification';

describe('Notification', () => {
  beforeEach(() => {
    render(<Notification />);
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render a notification', async () => {
    const input = screen.getByRole('textbox', { name: /message content/i });
    const button = screen.getByRole('button', { name: /show notification/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it.only('should show a notification', async () => {
    const input = screen.getByRole('textbox', { name: /message content/i });
    const button = screen.getByRole('button', { name: /show notification/i });

    await act(async () => {
      await userEvent.type(input, 'Hello, world!');
    });

    await act(async () => {
      await userEvent.click(button);
    });

    const message = await screen.findByTestId('message');

    expect(message).toHaveTextContent('Hello, world!');
  });

  it('should not show a notification if there is no content', async () => {
    const button = screen.getByRole('button', { name: /show notification/i });

    await act(async () => {
      await userEvent.click(button);
    });

    const message = screen.queryByTestId('message');

    expect(message).not.toBeInTheDocument();
  });

  it('should hide a notification after 5 seconds', async () => {
    const input = screen.getByRole('textbox', { name: /message content/i });
    const button = screen.getByRole('button', { name: /show notification/i });

    await act(async () => {
      await userEvent.type(input, 'Hello, world!');
      await userEvent.click(button);
    });

    const message = screen.getByTestId('message');

    expect(message).toHaveTextContent('Hello, world!');

    await act(async () => {
      vi.advanceTimersByTime(5000);
    });

    expect(message).not.toBeInTheDocument();
  });
});
