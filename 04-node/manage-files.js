import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { basename, extname } from 'node:path';

if (!process.permission.has('fs.read', 'archivo.txt')) {
  console.log('No tienes permiso para leer el archivo.');
}

const file1 = await readFile('./archivo.txt', 'utf-8');
console.log(file1);

const outputDir = join('output', 'files', 'documents');

if (!process.permission.has('fs.write', outputDir)) {
  console.log('No tienes permiso para escribir en el directorio especificado.');
}

await mkdir(outputDir, { recursive: true });
const upperCaseContent = file1.toUpperCase();
const outputFilePath = join(outputDir, 'archivo3.txt');

console.log('La extension es: ', extname(outputFilePath));
console.log('El nombre del archivo es: ', basename(outputFilePath));

await writeFile(outputFilePath, upperCaseContent);
console.log('Archivo creado con contenido en mayusculas');
