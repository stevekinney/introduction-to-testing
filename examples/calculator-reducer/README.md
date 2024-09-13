# Calculator Reducer

## Breakdown of the Code

## 1. **JSDoc Type Imports**

```javascript
/**
 * @typedef {import('./types.js').CalculatorState} CalculatorState
 * @typedef {import('./types.js').CalculatorAction} CalculatorAction
 */
```

- These lines use **JSDoc** to import types from `types.js`.
- `CalculatorState` represents the shape of the calculator's state, and `CalculatorAction` represents the shape of an action dispatched to the reducer.
- These types provide type checking and documentation within the IDE, even though the code is in plain JavaScript.

## 2. **Initial State**

```javascript
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
```

- `initialState` defines the starting values for the calculator.
  - `currentValue`: Represents the value currently being input or the last calculated result. It starts as `'0'`.
  - `previousValue`: Holds the value before an operator is pressed. Initially `null`.
  - `operator`: Stores the operator (`+`, `-`, `*`, `/`) currently in use. It starts as `null`.
  - `waitingForOperand`: A boolean flag that indicates if the calculator is waiting for the next operand after an operator is pressed.

## 3. **Reducer Function**

```javascript
/**
 * A reducer function for the calculator state.
 * @param {CalculatorState} state
 * @param {CalculatorAction} action
 * @returns {CalculatorState}
 */
export function calculatorReducer(state = initialState, action) {
```

- This is a **reducer function** that takes the current state and an action, and returns the new state based on the type of the action.
- **Default value**: If no state is provided (e.g., at initialization), it uses `initialState`.

## 4. **Handling Action Types**

```javascript
switch (action.type) {
  case 'DIGIT':
```

- The `switch` statement handles different `action.type` values.

### 4.1 **Handling `'DIGIT'` Action**

```javascript
case 'DIGIT':
  if (state.waitingForOperand) {
    return {
      ...state,
      currentValue: action.payload,
      waitingForOperand: false,
    };
  }
  return {
    ...state,
    currentValue:
      state.currentValue === '0'
        ? action.payload
        : state.currentValue + action.payload,
  };
```

- **When a digit is pressed** (`'DIGIT'` action):
  - If the calculator is waiting for the next operand (`waitingForOperand` is `true`), it replaces the `currentValue` with the digit and resets the `waitingForOperand` flag.
  - Otherwise, it appends the digit to the `currentValue`. If `currentValue` is `'0'`, it replaces it with the new digit.

### 4.2 **Handling `'OPERATOR'` Action**

```javascript
case 'OPERATOR':
  if (state.operator && state.previousValue !== null) {
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
```

- **When an operator is pressed** (`'OPERATOR'` action):
  - If there's already a `previousValue` and an operator is set, the function evaluates the current expression and stores the result as the `previousValue`.
  - Otherwise, it sets the `currentValue` as the `previousValue` and assigns the operator from `action.payload`.
  - It also sets `waitingForOperand` to `true` to signal that the calculator is waiting for the next number to be entered.

### 4.3 **Handling `'EQUALS'` Action**

```javascript
case 'EQUALS':
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
```

- **When the equals button is pressed** (`'EQUALS'` action):
  - If an operator and a `previousValue` are set, it evaluates the current expression and updates `currentValue` with the result. It also clears the operator and `previousValue`.
  - If the necessary data for evaluation is not present, it simply returns the current state unchanged.

### 4.4 **Handling `'CLEAR'` Action**

```javascript
case 'CLEAR':
  return initialState;
```

- **When the clear button is pressed** (`'CLEAR'` action):
  - It resets the calculator state to the `initialState`.

### 4.5 **Default Case**

```javascript
default:
  return state;
```

- If an action type is not recognized, the reducer returns the current state without any changes.

## 5. **Evaluate Function**

```javascript
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
```

- The `evaluate` function takes `currentValue`, `previousValue`, and `operator` to perform the calculation.
- **Steps**:
  1.  It converts the `previousValue` and `currentValue` from strings to numbers using `parseFloat`.
  2.  Based on the operator, it performs the corresponding arithmetic operation (`+`, `-`, `*`, `/`).
  3.  **Divide by zero handling**: If the operation is division (`/`) and `currentValue` is `0`, it returns `'Error'` to avoid division by zero.
  4.  The result of the operation is returned as a string.

## Summary

- The `calculatorReducer` function handles the state changes of a calculator by interpreting different actions (`'DIGIT'`, `'OPERATOR'`, `'EQUALS'`, `'CLEAR'`).
- The `evaluate` helper function performs the arithmetic operations when required.
- The state is updated incrementally as the user presses digits, operators, and other controls, making it suitable for a basic calculator UI.

## Breakdown of the Tests

### 1. **Imports and Initial Setup**

```javascript
import { describe, it, expect } from 'vitest';
import { calculatorReducer } from './calculator.js'; // Assume this is the path to the reducer
```

- **Vitest** is being imported for testing, using `describe` to group the test cases, `it` for individual test cases, and `expect` for assertions.
- The `calculatorReducer` is imported from a file called `calculator.js` for testing.
- The `CalculatorState` and `CalculatorAction` types are imported using **JSDoc** for static type checking.

### 2. **Initial State**

```javascript
const initialState = {
  currentValue: '0',
  previousValue: null,
  operator: null,
  waitingForOperand: false,
};
```

- This defines the `initialState`, representing the calculator's default state when no input has been provided yet.

### 3. **Test: Handling Digit Input**

```javascript
it('should handle a digit input', () => {
  const action = { type: 'DIGIT', payload: '5' };
  const newState = calculatorReducer(initialState, action);
  expect(newState.currentValue).toBe('5');
});
```

- **What it does**: Tests that when the `'DIGIT'` action is dispatched with the digit `'5'`, the `currentValue` is updated to `'5'`.
- **Why**: To ensure the reducer correctly updates the state with the inputted digit.

### 4. **Test: Appending Digits to Current Input**

```javascript
it('should append digits to the current input', () => {
  const firstAction = { type: 'DIGIT', payload: '5' };
  const secondAction = { type: 'DIGIT', payload: '3' };

  let state = calculatorReducer(initialState, firstAction);
  state = calculatorReducer(state, secondAction);

  expect(state.currentValue).toBe('53');
});
```

- **What it does**: Tests appending digits `'5'` and `'3'` to form `'53'`.
- **Why**: To verify that digits are appended to `currentValue` correctly and are not overwritten when a new digit is added.

### 5. **Test: Handling Operator Input**

```javascript
it('should handle operator input', () => {
  const stateWithDigit = { ...initialState, currentValue: '10' };
  const action = { type: 'OPERATOR', payload: '+' };

  const newState = calculatorReducer(stateWithDigit, action);

  expect(newState.previousValue).toBe('10');
  expect(newState.operator).toBe('+');
  expect(newState.waitingForOperand).toBe(true);
});
```

- **What it does**: Tests pressing an operator (`'+'`), ensuring the state updates with the current value as `previousValue`, sets the operator, and sets `waitingForOperand` to `true`.
- **Why**: To confirm that when an operator is pressed, the reducer correctly prepares for the next operand.

### 6. **Test: Performing Addition**

```javascript
it('should perform addition when equals is pressed', () => {
  const stateWithOperator = {
    currentValue: '5',
    previousValue: '10',
    operator: '+',
    waitingForOperand: false,
  };

  const action = { type: 'EQUALS' };
  const newState = calculatorReducer(stateWithOperator, action);

  expect(newState.currentValue).toBe('15');
});
```

- **What it does**: Tests the `'EQUALS'` action when the operator is `'+'`, and the values are `10` and `5`. The result should be `'15'`.
- **Why**: To verify that the addition is correctly performed when the equals button is pressed.

### 7. **Test: Performing Subtraction**

```javascript
it('should perform subtraction when equals is pressed', () => {
  const stateWithOperator = {
    currentValue: '3',
    previousValue: '8',
    operator: '-',
    waitingForOperand: false,
  };

  const action = { type: 'EQUALS' };
  const newState = calculatorReducer(stateWithOperator, action);

  expect(newState.currentValue).toBe('5');
});
```

- **What it does**: Tests subtraction (`'8 - 3'`) when the equals button is pressed, with the result being `'5'`.
- **Why**: To confirm that subtraction works correctly with the equals action.

### 8. **Test: Performing Multiplication**

```javascript
it('should perform multiplication when equals is pressed', () => {
  const stateWithOperator = {
    currentValue: '4',
    previousValue: '6',
    operator: '*',
    waitingForOperand: false,
  };

  const action = { type: 'EQUALS' };
  const newState = calculatorReducer(stateWithOperator, action);

  expect(newState.currentValue).toBe('24');
});
```

- **What it does**: Tests multiplication (`'6 * 4'`) when the equals button is pressed, expecting the result `'24'`.
- **Why**: To ensure the multiplication operation is working correctly.

### 9. **Test: Performing Division**

```javascript
it('should perform division when equals is pressed', () => {
  const stateWithOperator = {
    currentValue: '2',
    previousValue: '10',
    operator: '/',
    waitingForOperand: false,
  };

  const action = { type: 'EQUALS' };
  const newState = calculatorReducer(stateWithOperator, action);

  expect(newState.currentValue).toBe('5');
});
```

- **What it does**: Tests division (`'10 / 2'`) with the expected result of `'5'`.
- **Why**: To confirm that division is handled properly.

### 10. **Test: Division by Zero**

```javascript
it('should return "Error" when dividing by zero', () => {
  const stateWithOperator = {
    currentValue: '0',
    previousValue: '10',
    operator: '/',
    waitingForOperand: false,
  };

  const action = { type: 'EQUALS' };
  const newState = calculatorReducer(stateWithOperator, action);

  expect(newState.currentValue).toBe('Error');
});
```

- **What it does**: Tests dividing by zero (`'10 / 0'`) and expects the result to be `'Error'`.
- **Why**: To ensure the reducer correctly handles the edge case of division by zero, avoiding invalid arithmetic results.

### 11. **Test: Clearing the Calculator State**

```javascript
it('should reset the state when "CLEAR" action is dispatched', () => {
  const stateWithValue = {
    currentValue: '25',
    previousValue: '5',
    operator: '+',
    waitingForOperand: true,
  };

  const action = { type: 'CLEAR' };
  const newState = calculatorReducer(stateWithValue, action);

  expect(newState).toEqual(initialState);
});
```

- **What it does**: Tests that the `'CLEAR'` action resets the state back to its initial values (`initialState`).
- **Why**: To verify that pressing the clear button resets the entire calculator back to its default state.

## Summary

- Each test case ensures that the **calculatorReducer** handles individual actions correctly.
- The tests cover all possible scenarios, including handling digits, appending digits, performing operations, evaluating expressions, handling edge cases like division by zero, and resetting the state.
- This ensures that the calculator works as expected in all cases and prevents regressions when changes are made to the code.
