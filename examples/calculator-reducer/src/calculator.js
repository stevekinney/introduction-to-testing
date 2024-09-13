/**
 * @typedef {import('./types.js').CalculatorState} CalculatorState
 * @typedef {import('./types.js').CalculatorAction} CalculatorAction
 */

/**
 * The initial state for the calculator.
 * @type {CalculatorState}
 */
const initialState = {
  currentValue: '0', // Current input or result
  previousValue: null, // Previous value before an operation
  operator: null, // The operator (+, -, *, /)
  waitingForOperand: false, // Tracks if we're waiting for the next operand
};

/**
 * A reducer function for the calculator state.
 * @param {CalculatorState} state
 * @param {CalculatorAction} action
 * @returns {CalculatorState}
 */
export function calculatorReducer(state = initialState, action) {
  switch (action.type) {
    case 'DIGIT':
      if (state.waitingForOperand) {
        return {
          ...state,
          currentValue: action.payload, // Start a new value for next operand
          waitingForOperand: false,
        };
      }
      // Append the digit
      return {
        ...state,
        currentValue:
          state.currentValue === '0'
            ? action.payload
            : state.currentValue + action.payload,
      };

    case 'OPERATOR':
      // When an operator is pressed, store the current value and operator
      if (state.operator && state.previousValue !== null) {
        // If there's an operator already, evaluate the expression
        const result = evaluate(state);
        return {
          ...state,
          previousValue: result,
          currentValue: '0',
          operator: action.payload,
          waitingForOperand: true,
        };
      }
      return {
        ...state,
        previousValue: state.currentValue,
        operator: action.payload,
        waitingForOperand: true,
      };

    case 'EQUALS':
      // Perform the operation when '=' is pressed
      if (state.operator && state.previousValue !== null) {
        const result = evaluate(state);
        return {
          ...state,
          currentValue: result,
          previousValue: null,
          operator: null,
          waitingForOperand: false,
        };
      }
      return state;

    case 'CLEAR':
      // Clear the calculator state
      return initialState;

    default:
      return state;
  }
}

function evaluate({ currentValue, previousValue, operator }) {
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);

  switch (operator) {
    case '+':
      return (prev + current).toString();
    case '-':
      return (prev - current).toString();
    case '*':
      return (prev * current).toString();
    case '/':
      return current !== 0 ? (prev / current).toString() : 'Error';
    default:
      return currentValue;
  }
}
