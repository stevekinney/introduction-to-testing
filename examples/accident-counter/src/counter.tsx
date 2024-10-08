import React from 'react';
import { useReducer, useEffect } from 'react';
import { reducer } from './reducer';

export const Counter = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  const unit = state.count === 1 ? 'day' : 'days';

  useEffect(() => {
    window.document.title = `${state.count} ${unit} — Accident Counter`;
  }, [state.count]);

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="space-y-8 rounded-md border border-slate-400 bg-white p-8 text-center shadow-lg">
        <div className="space-y-4">
          <div data-testid="counter-count" className="text-8xl font-semibold">
            {state.count}
          </div>
          <p>
            <span data-testid="counter-unit">{unit}</span> since the last
            JavaScript-related accident.
          </p>
        </div>
        <div className="flex gap-4">
          <button onClick={() => dispatch({ type: 'increment' })}>
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: 'decrement' })}
            disabled={state.count === 0}
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch({ type: 'reset' })}
            disabled={state.count === 0}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
};
