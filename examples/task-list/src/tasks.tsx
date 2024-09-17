import { Task } from './task';
import { useTaskState } from './task-context';

export const Tasks = () => {
  const tasks = useTaskState();

  return (
    <section>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
};
