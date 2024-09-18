export type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  lastModified: Date;
};

export type TaskData = Partial<Omit<Task, 'id'>>;

export interface TaskContextProps {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  addTask: (title: string) => void;
  updateTask: (id: string, updatedTask: Partial<Omit<Task, 'id'>>) => void;
  removeTask: (id: string) => void;
}

export type TaskState = {
  tasks: Task[];
  loading: boolean;
  error: string | null;
};

export type TaskAction =
  | SetTasksAction
  | AddTaskAction
  | UpdateTaskAction
  | RemoveTaskAction
  | SetLoadingAction
  | SetErrorAction;

export type SetTasksAction = {
  type: 'set-tasks';
  payload: Task[];
};

export type AddTaskAction = {
  type: 'add-task';
  payload: Task;
};

export type UpdateTaskAction = {
  type: 'update-task';
  payload: TaskData & { id: string };
};

export type RemoveTaskAction = {
  type: 'remove-task';
  payload: string;
};

export type SetLoadingAction = {
  type: 'set-loading';
  payload?: never;
};

export type SetErrorAction = {
  type: 'set-error';
  payload: string;
};
