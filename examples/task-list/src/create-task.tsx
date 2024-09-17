import { useState } from 'react';
import { useTaskContext } from './task-context';

type CreateTaskProps = {
  onSubmit: (title: string) => void;
};

export const CreateTask = ({ onSubmit }: CreateTaskProps) => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState('');

  return (
    <form
      method="POST"
      action="/api/tasks"
      onSubmit={(event) => {
        event.preventDefault();
        addTask(title);
        setTitle('');
      }}
    >
      <div>
        <label htmlFor="new-task-title" className="sr-only">
          Title
        </label>
        <div className="flex">
          <input
            type="text"
            name="title"
            id="new-task-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What do you need to get done?"
            required
          />
          <button type="submit" disabled={!title}>
            Create Task
          </button>
        </div>
      </div>
    </form>
  );
};
