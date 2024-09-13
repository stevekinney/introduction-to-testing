import { describe, it, expect } from 'vitest';
import { calculatorReducer } from './calculator.js'; // Assume this is the path to the reducer

/**
 * @typedef {import('./types.js').CalculatorState} CalculatorState
 * @typedef {import('./types.js').CalculatorAction} CalculatorAction
 */

/** @type {import('./types.js').CalculatorState} */
const initialState = {
  currentValue: '0',
  previousValue: null,
  operator: null,
  waitingForOperand: false,
};

describe('calculatorReducer', () => {
  it('should handle a digit input', () => {
    /** @type {CalculatorAction}  */
    const action = { type: 'DIGIT', payload: '5' };

    const newState = calculatorReducer(initialState, action);

    expect(newState.currentValue).toBe('5');
  });

  it('should append digits to the current input', () => {
    /** @type {CalculatorAction}  */
    const firstAction = { type: 'DIGIT', payload: '5' };
    /** @type {CalculatorAction}  */
    const secondAction = { type: 'DIGIT', payload: '3' };

    let state = calculatorReducer(initialState, firstAction);
    state = calculatorReducer(state, secondAction);

    expect(state.currentValue).toBe('53');
  });

  it('should handle operator input', () => {
    const stateWithDigit = { ...initialState, currentValue: '10' };
    /** @type {CalculatorAction}  */
    const action = { type: 'OPERATOR', payload: '+' };

    const newState = calculatorReducer(stateWithDigit, action);

    expect(newState.previousValue).toBe('10');
    expect(newState.operator).toBe('+');
    expect(newState.waitingForOperand).toBe(true);
  });

  it('should perform addition when equals is pressed', () => {
    /** @type {CalculatorState}  */
    const stateWithOperator = {
      currentValue: '5',
      previousValue: '10',
      operator: '+',
      waitingForOperand: false,
    };

    /** @type {CalculatorAction}  */
    const action = { type: 'EQUALS' };
    const newState = calculatorReducer(stateWithOperator, action);

    expect(newState.currentValue).toBe('15');
  });

  it('should perform subtraction when equals is pressed', () => {
    /** @type {CalculatorState}  */
    const stateWithOperator = {
      currentValue: '3',
      previousValue: '8',
      operator: '-',
      waitingForOperand: false,
    };

    /** @type {CalculatorAction} */
    const action = { type: 'EQUALS' };
    const newState = calculatorReducer(stateWithOperator, action);

    expect(newState.currentValue).toBe('5');
  });

  it('should perform multiplication when equals is pressed', () => {
    /** @type {CalculatorState}  */
    const stateWithOperator = {
      currentValue: '4',
      previousValue: '6',
      operator: '*',
      waitingForOperand: false,
    };

    /** @type {CalculatorAction} */
    const action = { type: 'EQUALS' };
    const newState = calculatorReducer(stateWithOperator, action);

    expect(newState.currentValue).toBe('24');
  });

  it('should perform division when equals is pressed', () => {
    /** @type {CalculatorState}  */
    const stateWithOperator = {
      currentValue: '2',
      previousValue: '10',
      operator: '/',
      waitingForOperand: false,
    };

    /** @type {CalculatorAction} */
    const action = { type: 'EQUALS' };
    const newState = calculatorReducer(stateWithOperator, action);

    expect(newState.currentValue).toBe('5');
  });

  it('should return "Error" when dividing by zero', () => {
    /** @type {CalculatorState} */
    const stateWithOperator = {
      currentValue: '0',
      previousValue: '10',
      operator: '/',
      waitingForOperand: false,
    };

    /** @type {CalculatorAction} */
    const action = { type: 'EQUALS' };
    const newState = calculatorReducer(stateWithOperator, action);

    expect(newState.currentValue).toBe('Error');
  });

  it('should reset the state when "CLEAR" action is dispatched', () => {
    /** @type {CalculatorState} */
    const stateWithValue = {
      currentValue: '25',
      previousValue: '5',
      operator: '+',
      waitingForOperand: true,
    };

    /** @type {CalculatorAction} */
    const action = { type: 'CLEAR' };
    const newState = calculatorReducer(stateWithValue, action);

    expect(newState).toEqual(initialState);
  });
});
