export type CalculatorState = {
  currentValue: string;
  previousValue: string | null;
  operator: Operator | null;
  waitingForOperand: boolean;
};

export type CalculatorAction =
  | DigitAction
  | OperatorAction
  | EqualsAction
  | ClearAction;

export type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type Operator = '+' | '-' | '*' | '/';

export type ActionType = 'DIGIT' | 'OPERATOR' | 'EQUALS' | 'CLEAR';

type DigitAction = {
  type: 'DIGIT';
  payload: Digit;
};

type OperatorAction = {
  type: 'OPERATOR';
  payload: Operator;
};

type EqualsAction = {
  type: 'EQUALS';
  payload?: never;
};

type ClearAction = {
  type: 'CLEAR';
  payload?: never;
};
