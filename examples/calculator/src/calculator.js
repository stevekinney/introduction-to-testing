import calculator from './calculator.html?raw';

/**
 * Renders the calculator component into the target element.
 * @param {HTMLElement} target The target element to render the calculator into.
 */
export function renderCalculator(target) {
  target.innerHTML = calculator;

  let buffer = 0;

  /** @type {HTMLInputElement} */
  const display = target.querySelector('#display');

  /** @type {NodeListOf<HTMLButtonElement>} */
  const numbers = target.querySelectorAll('.number');

  /** @type {NodeListOf<HTMLButtonElement>} */
  const operators = target.querySelectorAll('.operator');

  /** @type {HTMLButtonElement} */
  const clear = target.querySelector('#clear');

  /** @type {HTMLButtonElement} */
  const equals = target.querySelector('#equals');

  numbers.forEach((number) => {
    number.addEventListener('click', () => {
      display.value += number.dataset.value;
    });
  });

  operators.forEach((operator) => {
    operator.addEventListener('click', () => {
      buffer = display.valueAsNumber;
      display.value = '';
    });
  });

  clear.addEventListener('click', () => {
    buffer = 0;
    display.value = '';
  });

  equals.addEventListener('click', () => {
    const result = buffer + display.valueAsNumber;
    display.value = String(result);
  });
}
