import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

const dir = process.argv[2] ?? '.';

const formatBytes = (size) => {
  if (size < 1024) return `${size} B`;
  return `${(size / 1024).toFixed(2)} KB`;
};

const files = await readdir(dir);

const entries = await Promise.all(
  files.map(async (name) => {
    const fullPath = join(dir, name);
    const info = await stat(fullPath);
    return {
      name,
      isDir: info.isDirectory(),
      size: formatBytes(info.size),
    };
  })
);
const entriesSortedZtoA = entries.sort((a, b) => b.name.localeCompare(a.name));
const entriesSortedAtoZ = entries.sort((a, b) => a.name.localeCompare(b.name));
console.log('--Z to A--');
for (const entry of entriesSortedZtoA) {
  const icon = entry.isDir ? '📁' : '📄';
  const size = entry.isDir ? '-' : `${entry.size}`;
  console.log(`${icon} ${entry.name.padEnd(25)} ${size}`);
}

console.log('--A to Z--');
for (const entry of entriesSortedAtoZ) {
  const icon = entry.isDir ? '📁' : '📄';
  const size = entry.isDir ? '-' : `${entry.size}`;
  console.log(`${icon} ${entry.name.padEnd(25)} ${size}`);
}
