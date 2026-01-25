import express from 'express';
import { corsMiddleware } from './middlewares/cors.js';
import { jobsRouter } from './routers/jobs.js';

import { DEFAULTS } from './config.js';
process.loadEnvFile();

const PORT = process.env.PORT ?? DEFAULTS.PORT;

const app = express();

app.use(corsMiddleware());
app.use(express.json());

app.use('/jobs', jobsRouter);

app.listen(PORT, () => {
  console.log(`Servidor levantado: http://localhost:${PORT}`);
});
