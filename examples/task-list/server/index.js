import * as url from 'node:url';
import express from 'express';
import bodyParser from 'body-parser';
import chalk from 'chalk';

import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from './tasks.js';

const app = express();
app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
  const tasks = getTasks();
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'A title is required' });
  }
  const task = createTask(title);
  res.status(201).json(task);
});

app.get('/api/tasks/:id', (req, res) => {
  const task = getTask(req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
});

app.patch('/api/tasks/:id', (req, res) => {
  const { title, completed } = req.body;

  const task = updateTask(req.params.id, { title, completed });

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.sendStatus(204);
});

app.delete('/api/tasks/:id', (req, res) => {
  const task = deleteTask(req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.sendStatus(204); // No content to send back
});

if (import.meta.url.startsWith('file:')) {
  const modulePath = url.fileURLToPath(import.meta.url);
  if (process.argv[1] === modulePath) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(
        chalk.magenta(`Server is running on port ${chalk.green(PORT)}…`),
      );
    });
  }
}

export default app;
