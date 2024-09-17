import type { Task } from '../types';

export enum TasksActions {
  FETCH_TASKS = 'fetch-tasks',
  ADD_TASK = 'add-task',
  UPDATE_TASK = 'update-task',
  DELETE_TASK = 'delete-task',
  SET_LOADING = 'set-loading',
  SET_ERROR = 'set-error',
}

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

export interface Action {
  type: TasksActions;
  payload?: any;
}

export const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const taskReducer = (state: TaskState, action: Action): TaskState => {
  switch (action.type) {
    case TasksActions.FETCH_TASKS:
      return { ...state, tasks: action.payload, loading: false };
    case TasksActions.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        loading: false,
      };
    case TasksActions.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task,
        ),
        loading: false,
      };
    case TasksActions.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        loading: false,
      };
    case TasksActions.SET_LOADING:
      return { ...state, loading: true };
    case TasksActions.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
