import { spawnSync } from 'node:child_process';

const sourceDirectories = ['real_images', 'ai_outpainted'];

for (const directory of sourceDirectories) {
  const input = `./${directory}/**/*.{jpg,jpeg,png}`;
  const result = spawnSync(
    'npx',
    [
      '--yes',
      'sharp-cli@6.1.0',
      '--input',
      input,
      '--output',
      '{dir}/{name}.webp',
      '--format',
      'webp',
      '--quality',
      '82',
    ],
    { stdio: 'inherit', shell: process.platform === 'win32' }
  );

  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`WebP conversion failed for ${directory} (exit code ${result.status})`);
  }
}

console.log('WebP conversion complete. Original JPEG and PNG files were preserved.');
