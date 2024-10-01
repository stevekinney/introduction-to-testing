import { reducer } from './reducer';

describe('reducer', () => {
  it('should return the initial state', () => {
    const initialState = { count: 0 };
    expect(reducer()).toEqual(initialState);
  });

  it('should handle decrement action', () => {
    const initialState = { count: 0 };
    const action = { type: 'increment' };
    const expectedState = { count: 1 };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle increment action', () => {
    const initialState = { count: 1 };
    const action = { type: 'decrement' };
    const expectedState = { count: 0 };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle unknown action', () => {
    const initialState = { count: 0 };
    const action = { type: 'UNKNOWN' };

    expect(reducer(initialState, action)).toEqual(initialState);
  });
});
