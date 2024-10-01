import { useMemo } from 'react';
import { getErrorMessage } from 'get-error-message';

import {
  Task,
  SetTasksAction,
  AddTaskAction,
  UpdateTaskAction,
  RemoveTaskAction,
  SetLoadingAction,
  SetErrorAction,
  TaskAction,
  TaskData,
} from './types';

export const setTasks = (tasks: Task[]): SetTasksAction => ({
  type: 'set-tasks',
  payload: tasks,
});

export const addTask = (task: Task): AddTaskAction => ({
  type: 'add-task',
  payload: task,
});

export const updateTask = (id: string, task: TaskData): UpdateTaskAction => ({
  type: 'update-task',
  payload: { ...task, id },
});

export const removeTask = (id: string): RemoveTaskAction => ({
  type: 'remove-task',
  payload: id,
});

export const setLoading = (): SetLoadingAction => ({
  type: 'set-loading',
});

export const setError = (
  error: unknown,
  fallback: string = 'Unknown error',
): SetErrorAction => {
  const message = getErrorMessage(error, fallback);
  return { type: 'set-error', payload: message };
};

export const bindActionCreators = (dispatch: React.Dispatch<TaskAction>) => {
  return useMemo(
    () => ({
      setTasks: (tasks: Task[]) => dispatch(setTasks(tasks)),
      addTask: (task: Task) => dispatch(addTask(task)),
      updateTask: (id: string, task: TaskData) =>
        dispatch(updateTask(id, task)),
      removeTask: (id: string) => dispatch(removeTask(id)),
      setLoading: () => dispatch(setLoading()),
      setError: (error: unknown, fallback: string) =>
        dispatch(setError(error, fallback)),
    }),
    [dispatch],
  );
};
