import { test, describe, before, after } from 'node:test';
import assert from 'node:assert';
import app from './app.js';
import { json } from 'node:stream/consumers';

let server;
const PORT = 3456;
const BASE_URL = `http://localhost:${PORT}`;

//Apertura de servidor
before(async () => {
  return new Promise((resolve, reject) => {
    server = app.listen(PORT, () => resolve());
    server.on('error', reject);
  });
});

describe('GET /jobs', () => {
  test('debe responder con 200 y un array de trabajos', async () => {
    const response = await fetch(`${BASE_URL}/jobs`);
    assert.strictEqual(response.status, 200);

    const json = await response.json();
    assert.ok(Array.isArray(json.data), 'La respuesta debe ser un array');
  });

  test('Debes filtrar trabajos por tecnología', async () => {
    const technology = 'react';
    const response = await fetch(`${BASE_URL}/jobs?technology=${technology}`);
    assert.strictEqual(response.status, 200);

    const json = await response.json();
    console.log(json.data);
    assert.ok(
      json.data.every((job) => job.data.technology.includes(technology)),
      `Todos los trabajos deben incluir la tecnologia ${technology}`,
    );
  });
});

//Cierre de servidor
after(async () => {
  return new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) return reject(err);
      resolve();
    });
  });
});
