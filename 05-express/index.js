import express from 'express';
import cors from 'cors';
import jobs from './jobs.json' with { type: 'json' };
import { DEFAULTS } from './config.js';
process.loadEnvFile();

const PORT = process.env.PORT ?? DEFAULTS.PORT;

const app = express();

app.use(express.json());

const ACCEPTED_ORIGINS = ['http://localhost:5173'];

app.use(
  cors({
    origin: (origin, callback) => {
      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Origen no permitido'));
    },
  }),
);

app.use((req, res, next) => {
  const timeString = new Date().toLocaleDateString();
  console.log(`[${timeString}] ${req.method} ${req.url}`);
  next();
});

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/health', (request, response) => {
  return response.json({
    status: 'ok',
    uptime: process.uptime(),
  });
});

//CRUD: Create, Read, Update, Delete

app.get('/jobs', async (req, res) => {
  const {
    text,
    title,
    level,
    limit = DEFAULTS.LIMIT_PAGINATION,
    technology,
    offset = DEFAULTS.LIMIT_OFFSET,
  } = req.query;
  let filteredJobs = jobs;
  if (text) {
    const searchTerm = text.toLowerCase();
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.titulo.toLowerCase().includes(searchTerm) ||
        job.descripcion.toLowerCase().includes(searchTerm),
    );
  }
  if (technology) {
    const technologyTerm = technology.toLowerCase();
    filteredJobs = filteredJobs.filter((job) =>
      job.data.technology.toLowerCase().includes(technologyTerm),
    );
  }
  const limitNumber = Number(limit);
  const offsetNumber = Number(offset);

  const paginatedJobs = filteredJobs.slice(
    offsetNumber,
    offsetNumber + limitNumber,
  );
  return res.status(200).json({
    data: paginatedJobs,
    total: filteredJobs.length,
    limit: limitNumber,
    offset: offsetNumber,
  });
});

app.get('/jobs/:id', (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id == id);
  if (!job) {
    return res.status(404).json({ error: 'Job not found' });
  }
  return res.json(job);
});

app.post('/jobs', (req, res) => {
  const { titulo, empresa, ubicacion, descripcion, data, content } = req.body;
  const newJob = {
    id: crypto.randomUUID(),
    titulo,
    empresa,
    ubicacion,
    descripcion,
    data,
    content,
  };

  jobs.push(newJob);

  return res.status(201).json(newJob);
});

app.put('/jobs/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, empresa, ubicacion, descripcion, data, content } = req.body;
  if (!id) {
    return res.status(400).json({ message: 'Job identification is required' });
  }
  const updateJob = jobs.find((job) => job.id === id);

  if (!updateJob) {
    return res.status(404).json({ message: 'Job Not Found' });
  }

  if (!titulo || !empresa || !ubicacion || !descripcion || !data || !content) {
    return res.status(400).json({
      message:
        'Method put require all job information, use Patch to replace parts of a job',
    });
  }

  const newJob = {
    ...updateJob,
    titulo,
    empresa,
    ubicacion,
    descripcion,
    data,
    content,
  };

  jobs[updateJob.id] = newJob;

  return res.status(200).json(newJob);
});

app.patch('/jobs/:id', (req, res) => {
  return res.json({ newJob: 'Job updated' });
});

app.delete('/jobs/:id', (req, res) => {
  return res.json({ deletedJob: 'A Job was delete' });
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en: http://localhost:${PORT}`);
});
