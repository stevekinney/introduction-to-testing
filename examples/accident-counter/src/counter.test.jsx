import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  it('renders with an initial count of 0', () => {
    render(<Counter />);
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });

    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    render(<Counter />);
    const unit = screen.getByTestId('counter-unit');
    expect(unit).toHaveTextContent('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const counter = screen.getByTestId('counter-count');

    await act(async () => {
      await userEvent.click(incrementButton);
    });

    expect(counter).toHaveTextContent('1');
  });

  it('displays "day" when the count is 1', async () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const unit = screen.getByTestId('counter-unit');

    await act(async () => {
      await userEvent.click(incrementButton);
    });

    expect(unit).toHaveTextContent('day');
  });

  it('decrements the count when the "Decrement" button is clicked', async () => {
    render(<Counter initialCount={1} />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const count = screen.getByTestId('counter-count');

    expect(decrementButton).not.toBeDisabled();

    await act(async () => {
      await userEvent.click(decrementButton);
    });

    expect(count).toHaveTextContent('0');
    expect(decrementButton).toBeDisabled();
  });

  it('does not allow decrementing below 0', async () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const count = screen.getByTestId('counter-count');

    await act(async () => {
      await userEvent.click(decrementButton);
    });

    expect(count).toHaveTextContent('0');
  });

  it.todo(
    'resets the count when the "Reset" button is clicked',
    async () => {},
  );

  it.todo(
    'disables the "Decrement" and "Reset" buttons when the count is 0',
    () => {},
  );

  it('updates the document title based on the count', async () => {
    const { getByRole } = render(<Counter />);
    const incrementButton = getByRole('button', { name: /increment/i });

    await act(async () => {
      await userEvent.click(incrementButton);
    });

    expect(document.title).toEqual(expect.stringContaining('1 day'));
  });
});
