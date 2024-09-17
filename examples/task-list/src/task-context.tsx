import {
  createContext,
  useReducer,
  useMemo,
  useEffect,
  type ReactNode,
  useContext,
  useCallback,
} from 'react';
import { TasksActions, taskReducer, initialState } from './task-reducer';
import type { Task } from '../types';

interface TaskContextProps {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  addTask: (title: string) => void;
  updateTask: (id: string, updatedTask: Partial<Task>) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Fetch all tasks
  const fetchTasks = useCallback(async () => {
    dispatch({ type: TasksActions.SET_LOADING });
    try {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      dispatch({ type: TasksActions.FETCH_TASKS, payload: data });
    } catch (error) {
      dispatch({
        type: TasksActions.SET_ERROR,
        payload: 'Failed to fetch tasks',
      });
    }
  }, [dispatch]);

  // Add a new task
  const addTask = useCallback(
    async (title: string) => {
      dispatch({ type: TasksActions.SET_LOADING });
      try {
        const response = await fetch('/api/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title }),
        });
        const data = await response.json();
        dispatch({ type: TasksActions.ADD_TASK, payload: data });
      } catch (error) {
        dispatch({
          type: TasksActions.SET_ERROR,
          payload: 'Failed to add task',
        });
      }
    },
    [dispatch],
  );

  // Update a task
  const updateTask = useCallback(
    async (id: string, updatedTask: Partial<Task>) => {
      dispatch({ type: TasksActions.SET_LOADING });

      try {
        const response = await fetch(`/api/tasks/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedTask),
        });

        if (!response.ok) {
          throw new Error('Failed to update task');
        }

        dispatch({
          type: TasksActions.UPDATE_TASK,
          payload: { id, ...updatedTask },
        });
      } catch (error) {
        dispatch({
          type: TasksActions.SET_ERROR,
          payload: 'Failed to update task',
        });
      }
    },
    [dispatch],
  );

  // Delete a task
  const deleteTask = useCallback(
    async (id: string) => {
      dispatch({ type: TasksActions.SET_LOADING });
      try {
        await fetch(`/api/tasks/${id}`, {
          method: 'DELETE',
        });
        dispatch({ type: TasksActions.DELETE_TASK, payload: id });
      } catch (error) {
        dispatch({
          type: TasksActions.SET_ERROR,
          payload: 'Failed to delete task',
        });
      }
    },
    [dispatch],
  );

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        loading: state.loading,
        error: state.error,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const useTaskState = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }

  return context.tasks;
};

export const useTaskActions = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }

  const actions = useMemo(
    () => ({
      addTask: context.addTask,
      updateTask: context.updateTask,
      deleteTask: context.deleteTask,
    }),
    [context.addTask, context.updateTask, context.deleteTask],
  );

  return actions;
};

export { TaskContext, TaskProvider, useTaskState };
