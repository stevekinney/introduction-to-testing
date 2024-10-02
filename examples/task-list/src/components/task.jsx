import { memo } from 'react';
import { DateTime } from './date-time';

export const Task = memo(({ task, updateTask, removeTask }) => {
  return (
    <li
      className="block space-y-2 border-x border-t border-slate-300 bg-white p-4 first:rounded-t-md last:rounded-b-md last:border-b dark:border-slate-700 dark:bg-slate-950"
      data-testid={`task-${task.id}`}
    >
      <header className="flex flex-row items-center gap-4">
        <label htmlFor={`toggle-${task.id}`} className="sr-only">
          Completed?
        </label>
        <input
          id={`toggle-${task.id}`}
          type="checkbox"
          className="block h-6 w-6"
          checked={task.completed}
          onChange={() => updateTask(task.id, { completed: !task.completed })}
        />
        <h2 className="w-full font-semibold">{task.title}</h2>
        <button
          className="button-small button-destructive button-ghost"
          onClick={() => removeTask(task.id)}
          aria-label="Remove Task"
        >
          ❌
        </button>
      </header>
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
        <DateTime date={task.createdAt} title="Created" />
        <DateTime date={task.lastModified} title="Modified" />
      </div>
    </li>
  );
});
