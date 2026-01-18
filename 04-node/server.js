import { randomUUID } from 'node:crypto';
import { createServer } from 'node:http';
import { json } from 'node:stream/consumers';

process.loadEnvFile();

const port = process.env.PORT ?? 3000;

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(data));
}

const users = [
  { id: 1, name: 'Lukestas' },
  { id: 2, name: 'Midudev' },
  { id: 'e063b846-8a0a-41b1-9fe1-883b4f0e3841', name: 'Osvaldo' },
  { id: 'c81cf4c0-a8c3-4425-a505-830a02c360f5', name: 'Rodrigo' },
  { id: 'c09cd454-4529-4119-80fa-286f9a0bcd84', name: 'Josue' },
  { id: '041ee1af-4fa3-477b-bdcd-80e932f678ab', name: 'Marlon' },
  { id: 'beaf0fcd-0916-47d3-bc71-17e316d76872', name: 'Kemonito' },
  { id: '09b72b78-df6d-44de-8a8d-cf61fd8a2b9a', name: 'TodoCode' },
];

const server = createServer(async (req, res) => {
  const { method, url } = req;

  const [pathname, querystring] = url.split('?');

  const searchParams = new URLSearchParams(querystring);

  if (method === 'GET') {
    if (pathname === '/users') {
      if (
        Number.isNaN(
          Number(searchParams.get('limit')) ||
            Number(searchParams.get('offset')),
        )
      ) {
        return sendJson(res, 400, {
          error: 'Limit and offset musb be numbers',
        });
      }
      const limit = Number(searchParams.get('limit')) || users.length;
      const offset = Number(searchParams.get('offset')) || 0;
      const paginatedUsers = users.slice(offset, offset + limit);
      return sendJson(res, 200, paginatedUsers);
    }

    if (pathname === '/health') {
      return sendJson(res, 200, { status: 'ok', uptime: process.uptime() });
    }
  }
  if (method === 'POST') {
    if (pathname === '/users') {
      const { name } = await json(req);
      if (!name) {
        return sendJson(res, 400, { error: 'Name is required' });
      }
      const newUser = {
        id: randomUUID(),
        name,
      };
      users.push(newUser);
      return sendJson(res, 201, { message: 'creado' });
    }
  }

  return sendJson(res, 404, { message: 'Not Found' });
});

server.listen(port, () => {
  const address = server.address();
  console.log(`servidor escuchando en http://localhost:${address.port}`);
});
