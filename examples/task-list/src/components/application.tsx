import { CreateTask } from './create-task';
import { TaskProvider } from '../contexts/task-context';
import { Tasks } from './tasks';

export const Application = () => {
  return (
    <TaskProvider>
      <main className="container my-10 max-w-xl space-y-8">
        <CreateTask onSubmit={(title) => console.log(title)} />
        <Tasks />
      </main>
    </TaskProvider>
  );
};
