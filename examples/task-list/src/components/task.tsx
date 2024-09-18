import { memo } from 'react';
import { ChevronRightCircle } from 'lucide-react';
import { DateTime } from './date-time';
import { useTaskActions } from '../contexts/task-context';

type TaskProps = {
  task: import('../types').Task;
};

export const Task = memo(({ task }: TaskProps) => {
  const { updateTask, removeTask } = useTaskActions();

  return (
    <li className="block p-4 space-y-2 border-t first:rounded-t-md border-x last:border-b last:rounded-b-md dark:border-slate-700 border-slate-300">
      <header className="flex flex-row items-center gap-4">
        <label htmlFor={`toggle-${task.id}`} className="sr-only">
          Mark Task as {task.completed ? 'Incomplete' : 'Complete'}
        </label>
        <input
          id={`toggle-${task.id}`}
          type="checkbox"
          className="block w-6 h-6"
          checked={task.completed}
          onChange={() => updateTask(task.id, { completed: !task.completed })}
        />
        <h2 className="w-full font-semibold">{task.title}</h2>
        <button
          className="button-small button-destructive button-ghost"
          onClick={() => removeTask(task.id)}
        >
          ❌
        </button>
      </header>
      <label className="text-xs grid grid-cols-[1.25rem_1fr] gap-1 cursor-pointer rounded-md bg-primary-50 dark:bg-slate-800 border-2 border-primary-100 dark:border-slate-900 p-2">
        <input type="checkbox" className="sr-only peer" />
        <ChevronRightCircle className="block w-4 h-4 transition-transform peer-checked:rotate-90" />
        <h3 className="select-none">Metadata</h3>
        <div className="hidden col-span-2 gap-2 peer-checked:flex">
          <DateTime date={task.createdAt} title="Created" />
          <DateTime date={task.lastModified} title="Modified" />
        </div>
      </label>
    </li>
  );
});
