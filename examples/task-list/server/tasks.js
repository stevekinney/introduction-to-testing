import { v4 as id } from 'uuid';

/** @typedef {import('../src/types').Task} Task */

/** @type {Task[]} tasks - An array to store tasks. */
let tasks = [];

/**
 * Get all tasks.
 * @returns {Task[]} An array of tasks.
 */
export const getTasks = () => tasks;

/**
 * Create a new task.
 * @param {string} title - The title of the task.
 * @returns {Task} The newly created task.
 */
export const createTask = (title) => {
  /** @type {Task} */
  const task = {
    id: id(),
    title,
    completed: false,
    createdAt: new Date(),
    lastModified: new Date(),
  };
  tasks.push(task);
  return task;
};

/**
 * Find a task by ID.
 * @param {string} id - The ID of the task to find.
 * @returns {Task | undefined} The found task or undefined if not found.
 */
export const getTask = (id) => tasks.find((task) => task.id === id);

/**
 * Update a task by ID.
 * @param {string} id - The ID of the task to update.
 * @param {Partial<Pick<Task, 'title' | 'description'>>} updates - The updates to apply to the task.
 * @returns {Task | undefined} The updated task or undefined if not found.
 */
export const updateTask = (id, updates) => {
  const task = getTask(id);

  if (!task) return undefined;

  for (const key in updates) {
    if (updates[key] !== undefined) {
      task[key] = updates[key];
    }
  }

  Object.assign(task, { lastModified: new Date() });
  return task;
};

/**
 * Delete a task by ID.
 * @param {string} id - The ID of the task to delete.
 * @returns {boolean} `true` if the task was deleted, `false` if not found.
 */
export const deleteTask = (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};
