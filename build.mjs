import { watch } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { Script } from 'node:vm';

const folder = new URL('./', import.meta.url);
const output = new URL('../MathLab.html', folder);
const inputs = ['index.html', 'styles.css', 'app.js'];

async function build() {
  const [index, styles, script] = await Promise.all(inputs.map(async (name) =>
    (await readFile(new URL(name, folder), 'utf8')).replace(/^\uFEFF/, '')
  ));
  const styleTag = '<link rel="stylesheet" href="./styles.css">';
  const scriptTag = '<script src="./app.js"></script>';
  if (!index.includes(styleTag) || !index.includes(scriptTag)) {
    throw new Error('Thiếu thẻ liên kết styles.css hoặc app.js trong index.html.');
  }
  new Script(script, { filename: 'app.js' });
  const html = index
    .replace(styleTag, () => '<style>\n' + styles + '\n</style>')
    .replace(scriptTag, () => '<script>\n' + script.replace(/<\/script/gi, '<\\/script') + '\n</script>');
  const previous = await readFile(output, 'utf8').catch((error) => {
    if (error.code !== 'ENOENT') throw error;
  });
  if (html !== previous) {
    await writeFile(output, html, 'utf8');
    console.log(new Date().toLocaleTimeString() + ' · Đã cập nhật MathLab.html');
  }
}

if (process.argv.includes('--watch')) {
  let timer;
  let pending = Promise.resolve();
  const rebuild = () => {
    pending = pending.then(build).catch((error) => console.error(error.message));
  };
  watch(folder, (_event, name) => {
    if (name && !inputs.includes(name)) return;
    clearTimeout(timer);
    timer = setTimeout(rebuild, 300);
  });
  console.log('Đang theo dõi source. Nhấn Ctrl+C để dừng.');
  rebuild();
} else {
  await build();
}
