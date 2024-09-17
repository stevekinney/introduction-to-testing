import { useReducer, useEffect } from 'react';
import { reducer } from './reducer';

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const unit = state.count === 1 ? 'day' : 'days';

  useEffect(() => {
    window.document.title = `${state.count} ${unit}`;
  }, [state.count]);

  return (
    <div className="p-8 space-y-8 text-center bg-white border rounded-md shadow-lg border-slate-400">
      <div className="space-y-4">
        <div data-testid="counter-count" className="font-semibold text-8xl">
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
  );
};
