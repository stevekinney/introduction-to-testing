import { beforeEach, describe, expect, it } from 'vitest';
import { fireEvent } from '@testing-library/dom';
import { renderCalculator } from './calculator.js';

it('is running our test in a browser-like environment', () => {
  expect(typeof window).not.toBe('undefined');
});

describe('Calculator', () => {
  let display;

  beforeEach(() => {
    renderCalculator(document.body);

    display = document.getElementById('display');
  });

  it('displays number when a number button is clicked', () => {
    /** @type {NodeListOf<HTMLButtonElement>} */
    const [button] = document.querySelectorAll('button');
    const value = button.dataset.value;

    fireEvent.click(button);

    expect(display.value).toBe(value);
  });

  it('display the sum of multiple numbers when the equals button is clicked', () => {
    const one = document.getElementById('digit-1');
    const two = document.getElementById('digit-2');
    const three = document.getElementById('digit-3');

    fireEvent.click(one);
    fireEvent.click(two);
    fireEvent.click(three);

    expect(display.value).toBe('123');
  });

  it('supports addings two numbers and displaying the result', () => {
    const one = document.getElementById('digit-1');
    const two = document.getElementById('digit-2');
    const add = document.getElementById('add');
    const equals = document.getElementById('equals');

    fireEvent.click(one);
    fireEvent.click(add);
    fireEvent.click(two);
    fireEvent.click(equals);

    expect(display.value).toBe('3');
  });

  it('clears the display when the clear button is clicked', () => {
    const one = document.getElementById('digit-1');
    const clear = document.getElementById('clear');

    fireEvent.click(one);
    fireEvent.click(clear);

    expect(display.value).toBe('');
  });
});
