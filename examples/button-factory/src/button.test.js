import { it, expect, describe } from 'vitest';
import { createButton } from './button.js';

describe('createButton', () => {
  it('should create a button element', () => {
    const button = createButton();
    expect(button.tagName).toBe('BUTTON');
  });

  it('should have the text "Click Me"', () => {
    const button = createButton();
    expect(button.textContent).toBe('Click Me');
  });

  it.todo('should change the text to "Clicked!" when clicked', async () => {});
});
