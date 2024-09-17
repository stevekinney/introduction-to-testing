import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './counter';

import '@testing-library/jest-dom';

describe('Counter Component', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const countElement = screen.getByTestId('counter-count');
    expect(countElement).toHaveTextContent('0');
  });

  it('displays "days" when the count is 0', () => {
    const unitElement = screen.getByTestId('counter-unit');
    expect(unitElement).toHaveTextContent('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    const incrementButton = screen.getByText('Increment');
    await userEvent.click(incrementButton);  // Using userEvent for a real click event

    const countElement = screen.getByTestId('counter-count');
    expect(countElement).toHaveTextContent('1');
  });

  it('displays "day" when the count is 1', async () => {
    const incrementButton = screen.getByText('Increment');
    await userEvent.click(incrementButton);  // Increment the count

    const unitElement = screen.getByTestId('counter-unit');
    expect(unitElement).toHaveTextContent('day');
  });

  it('decrements the count when the "Decrement" button is clicked', async () => {
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    await userEvent.click(incrementButton);  // Increment first
    await userEvent.click(decrementButton);  // Then decrement

    const countElement = screen.getByTestId('counter-count');
    expect(countElement).toHaveTextContent('0');
  });

  it('does not allow decrementing below 0', async () => {
    const decrementButton = screen.getByText('Decrement');
    await userEvent.click(decrementButton);  // Should not decrement below 0

    const countElement = screen.getByTestId('counter-count');
    expect(countElement).toHaveTextContent('0');
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    const incrementButton = screen.getByText('Increment');
    const resetButton = screen.getByText('Reset');

    await userEvent.click(incrementButton);  // Increment first
    await userEvent.click(resetButton);      // Then reset

    const countElement = screen.getByTestId('counter-count');
    expect(countElement).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const decrementButton = screen.getByText('Decrement');
    const resetButton = screen.getByText('Reset');

    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('updates the document title based on the count', async () => {
    const incrementButton = screen.getByText('Increment');
    await userEvent.click(incrementButton);

    expect(document.title).toBe('1 day');
    
    await userEvent.click(incrementButton);
    expect(document.title).toBe('2 days');
  });
});