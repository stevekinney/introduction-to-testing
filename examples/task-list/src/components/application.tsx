import { CreateTask } from './create-task';
import { TaskProvider } from '../contexts/task-context';
import { Tasks } from './tasks';

export const Application = () => {
  return (
    <TaskProvider>
      <main className="container max-w-xl my-10 space-y-8">
        <CreateTask onSubmit={(title) => console.log(title)} />
        <Tasks />
      </main>
    </TaskProvider>
  );
};
