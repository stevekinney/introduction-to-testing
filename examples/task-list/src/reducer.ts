import type { TaskAction, TaskState } from './types';

export const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  switch (action.type) {
    case 'set-tasks':
      return { ...state, tasks: action.payload, loading: false };
    case 'add-task':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
      };
    case 'update-task':
      const { id, ...payload } = action.payload;

      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, ...payload } : task,
        ),
        loading: false,
      };
    case 'remove-task':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        loading: false,
      };
    case 'set-loading':
      return { ...state, loading: action.payload };
    case 'set-error':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
