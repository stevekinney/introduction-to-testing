import { Task } from './task';
import { useTaskContext } from './task-context';

export const Tasks = () => {
  const { tasks } = useTaskContext();

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
