import express from 'express';
import { DEFAULTS } from './config.js';
process.loadEnvFile();

const PORT = process.env.PORT ?? DEFAULTS.PORT;

const app = express();

app.use((req, res, next) => {
  const timeString = new Date().toLocaleDateString();
  console.log(`[${timeString}] ${req.method} ${req.url}`);
  next();
});

app.get('/a{b}cd', (req, res) => {
  return res.send('abcd o acd');
});

app.get('/bb*bb', (req, res) => {
  return res.send('bb*bb');
});

app.get('/file/*filename', (req, res) => {
  return res.send('file/*');
});

app.get(/.*fly$/, (req, res) => {
  return res.send('Termiando en fly');
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en: http://localhost:${PORT}`);
});
