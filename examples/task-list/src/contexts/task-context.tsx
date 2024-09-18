import {
  createContext,
  useReducer,
  useMemo,
  useEffect,
  type PropsWithChildren,
  useContext,
  useCallback,
} from 'react';

import { taskReducer, initialState } from '../reducer';
import { bindActionCreators } from '../actions';
import * as api from '../api';
import type { Task, TaskContextProps } from '../types';

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

const TaskProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { setLoading, setError, ...actions } = bindActionCreators(dispatch);

  // Fetch all tasks
  const getAllTasks = useCallback(async () => {
    setLoading();
    try {
      const tasks = await api.all();
      actions.setTasks(tasks);
    } catch (error) {
      setError(error, 'Failed to fetch tasks');
    }
  }, [dispatch]);

  // Add a new task
  const addTask = useCallback(
    async (title: string) => {
      setLoading();
      try {
        const task = await api.add(title);
        actions.addTask(task);
      } catch (error) {
        setError(error, 'Failed to add task');
      }
    },
    [dispatch],
  );

  // Update a task
  const updateTask = useCallback(
    async (id: string, updatedTask: Partial<Task>) => {
      setLoading();

      try {
        await api.update(id, updatedTask);
        actions.updateTask(id, updatedTask);
      } catch (error) {
        setError(error, 'Failed to update task');
      }
    },
    [dispatch],
  );

  // Delete a task
  const removeTask = useCallback(
    async (id: string) => {
      setLoading();
      try {
        await api.remove(id);
        actions.removeTask(id);
      } catch (error) {
        setError(error, 'Failed to delete task');
      }
    },
    [dispatch],
  );

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        loading: state.loading,
        error: state.error,
        addTask,
        updateTask,
        removeTask,
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
      removeTask: context.removeTask,
    }),
    [context.addTask, context.updateTask, context.removeTask],
  );

  return actions;
};

export { TaskContext, TaskProvider, useTaskState };
