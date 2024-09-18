import { Task } from './types';

export const all = async (): Promise<Task[]> => {
  const response = await fetch('/api/tasks');

  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }

  return response.json();
};

export const add = async (title: string): Promise<Task> => {
  const response = await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    throw new Error('Failed to add task');
  }

  return response.json();
};

export const update = async (
  id: string,
  updatedTask: Partial<Task>,
): Promise<void> => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTask),
  });

  if (!response.ok) {
    throw new Error('Failed to update task');
  }
};

export const remove = async (id: string): Promise<void> => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete task');
  }
};
