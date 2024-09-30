import { useState } from 'react';
import { useTaskActions } from '../contexts/task-context';

export const CreateTask = () => {
  const { addTask } = useTaskActions();
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
        <div className="flex flex-col sm:flex-row">
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
