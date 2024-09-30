import { Task } from './task';

export const Tasks = ({ tasks, updateTask, removeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateTask={updateTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};
