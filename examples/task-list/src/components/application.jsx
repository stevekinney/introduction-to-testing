import { useEffect, useReducer } from 'react';

import * as api from '../api';
import { initialState, taskReducer } from '../reducer';

import { CreateTask } from './create-task';
import { Tasks } from './tasks';

export const Application = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { tasks } = state;

  useEffect(() => {
    api.all().then((payload) => {
      dispatch({ type: 'set-tasks', payload });
    });
  }, [dispatch]);

  const addTask = (title) => {
    api.add(title).then((payload) => {
      dispatch({ type: 'add-task', payload });
    });
  };

  const updateTask = (id, updatedTask) => {
    api.update(id, updatedTask).then(() => {
      dispatch({ type: 'update-task', payload: { id, ...updatedTask } });
    });
  };

  const removeTask = (id) => {
    api.remove(id).then(() => {
      dispatch({ type: 'remove-task', payload: id });
    });
  };

  return (
    <main className="container my-10 max-w-xl space-y-8">
      <CreateTask onSubmit={addTask} />
      <Tasks tasks={tasks} updateTask={updateTask} removeTask={removeTask} />
    </main>
  );
};
