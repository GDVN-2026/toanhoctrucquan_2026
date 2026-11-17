import { createReadStream } from 'node:fs';
import { spawn } from 'node:child_process';
import { lstat, realpath, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const base = fileURLToPath(new URL('./pm-goc/', import.meta.url));
const suites = [['HHDL', 47861], ['XSTK', 47862], ['Daisovagiaitich', 47863]];
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.ico': 'image/x-icon', '.woff': 'font/woff',
  '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.otf': 'font/otf',
};

function serve(root, port) {
  return createServer(async (request, response) => {
    if (request.headers.host !== '127.0.0.1:' + port || !['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(403).end();
      return;
    }
    try {
      const path = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
      if (path === '/__gdvn_ready') {
        response.writeHead(200, {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-store',
          'Access-Control-Allow-Origin': '*'
        }).end(request.method === 'HEAD' ? undefined : 'GDVN:' + port);
        return;
      }
      if (/[\\:\0]/.test(path)) throw Error('Invalid path');
      let file = resolve(root, '.' + path);
      if (file !== root && !file.startsWith(root + sep)) throw Error('Invalid path');
      let info = await stat(file).catch(() => null);
      if (info?.isDirectory() || (!info && !extname(path))) {
        file = join(root, 'index.html');
        info = await lstat(file);
      }
      if (!info?.isFile()) throw Error('Missing file');
      file = await realpath(file);
      if (!file.startsWith(root + sep)) throw Error('Invalid asset path');
      response.writeHead(200, {
        'Content-Type': types[extname(file)] ?? 'application/octet-stream',
        'Content-Length': info.size,
        'X-Content-Type-Options': 'nosniff'
      });
      if (request.method === 'HEAD') response.end();
      else createReadStream(file).on('error', () => response.destroy()).pipe(response);
    } catch {
      response.writeHead(404).end('Không tìm thấy tài nguyên.');
    }
  }).listen(port, '127.0.0.1');
}

for (const [name] of suites) {
  await lstat(join(base, name, 'build', 'index.html'));
}
for (const [name, port] of suites) {
  serve(await realpath(join(base, name, 'build')), port)
    .on('listening', () => console.log(name + ' · http://127.0.0.1:' + port))
    .on('error', (error) => { console.error(error.message); process.exit(1); });
}
const dashboardPort = 47860;
const dashboardUrl = 'http://127.0.0.1:' + dashboardPort;
const dashboard = fileURLToPath(new URL('../MathLab.html', import.meta.url));
createServer(async (request, response) => {
  if (request.headers.host !== '127.0.0.1:' + dashboardPort || !['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(403).end();
    return;
  }
  if (request.url !== '/') {
    response.writeHead(404).end();
    return;
  }
  try {
    const info = await stat(dashboard);
    response.writeHead(200, {
      'Content-Type': types['.html'],
      'Content-Length': info.size,
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff'
    });
    if (request.method === 'HEAD') response.end();
    else createReadStream(dashboard).on('error', () => response.destroy()).pipe(response);
  } catch {
    response.writeHead(404).end('Chưa tìm thấy MathLab.html.');
  }
}).listen(dashboardPort, '127.0.0.1', () => {
  console.log('GDVN · ' + dashboardUrl);
  if (process.argv.includes('--open') && process.platform === 'win32') {
    const browser = spawn('explorer.exe', [dashboardUrl], { stdio: 'ignore' });
    browser.on('error', () => console.log('Mở địa chỉ trên trong trình duyệt.'));
  }
}).on('error', error => { console.error(error.message); process.exit(1); });
