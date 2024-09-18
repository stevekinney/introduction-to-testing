import { Task } from './task';
import { useTaskState } from '../contexts/task-context';

export const Tasks = () => {
  const tasks = useTaskState();

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};
