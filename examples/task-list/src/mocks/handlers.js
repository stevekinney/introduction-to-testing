import { http, HttpResponse } from 'msw';
import tasks from './tasks.json';

let id = 3;

const createTask = (title) => ({
  id: `${id++}`,
  title,
  completed: false,
  createdAt: new Date('02-29-2024').toISOString(),
  lastModified: new Date('02-29-2024').toISOString(),
});

export const handlers = [];
