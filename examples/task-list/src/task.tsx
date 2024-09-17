import { DateTime } from './date-time';
import { useTaskContext } from './task-context';

type TaskProps = {
  task: import('../types').Task;
};

export const Task = ({ task }: TaskProps) => {
  const { updateTask, deleteTask } = useTaskContext();

  return (
    <li className="block p-4 space-y-2 border-t-2 border-x-2 last:border-b-2">
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
          className="py-1 px-1.5 text-xs button-destructive button-ghost"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
      </header>
      <div className="flex flex-col md:gap-2 md:flex-row">
        <DateTime date={task.createdAt} title="Created" />
        <DateTime date={task.lastModified} title="Modified" />
      </div>
    </li>
  );
};
