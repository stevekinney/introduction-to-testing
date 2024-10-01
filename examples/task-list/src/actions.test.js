import { setTasks } from './actions';

describe('setTasks', () => {
  it('creates a set-tasks action', () => {
    const tasks = [{ id: '1', text: 'Task 1', completed: false }];
    expect(setTasks(tasks)).toEqual({
      type: 'set-tasks',
      payload: tasks,
    });
  });
});
