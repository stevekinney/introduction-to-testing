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
    <li className="block space-y-2 border-x border-t border-slate-300 p-4 first:rounded-t-md last:rounded-b-md last:border-b dark:border-slate-700">
      <header className="flex flex-row items-center gap-4">
        <label htmlFor={`toggle-${task.id}`} className="sr-only">
          Mark Task as {task.completed ? 'Incomplete' : 'Complete'}
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
        >
          ❌
        </button>
      </header>
      <label className="bg-primary-50 border-primary-100 grid cursor-pointer grid-cols-[1.25rem_1fr] gap-1 rounded-md border-2 p-2 text-xs dark:border-slate-900 dark:bg-slate-800">
        <input type="checkbox" className="peer sr-only" />
        <ChevronRightCircle className="block h-4 w-4 transition-transform peer-checked:rotate-90" />
        <h3 className="select-none">Metadata</h3>
        <div className="col-span-2 hidden gap-2 peer-checked:flex">
          <DateTime date={task.createdAt} title="Created" />
          <DateTime date={task.lastModified} title="Modified" />
        </div>
      </label>
    </li>
  );
});
