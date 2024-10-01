import { useState } from 'react';

export const CreateTask = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  return (
    <form
      method="POST"
      action="/api/tasks"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(title);
        setTitle('');
      }}
    >
      <div>
        <label htmlFor="new-task-title" className="sr-only">
          Create Task
        </label>
        <div className="flex flex-row">
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
