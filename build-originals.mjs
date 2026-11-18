import { cpSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const originalRoot = process.argv[2];
if (!originalRoot) throw Error('Dùng node build-originals.mjs <thư mục chứa HHDL, XSTK và Daisovagiaitich>.');
const destination = fileURLToPath(new URL('./toan-goc/', import.meta.url));
const suites = { 'hinh-hoc-va-do-luong':'HHDL', 'thong-ke-va-xac-suat':'XSTK', 'dai-so-va-giai-tich':'Daisovagiaitich' };
const app = Object.fromEntries(Object.entries(suites).map(([route, folder]) => {
  const root = resolve(originalRoot, folder, 'build');
  const manifest = JSON.parse(readFileSync(join(root,'asset-manifest.json'),'utf8'));
  const file = manifest.files['main.js'];
  const script = readFileSync(join(root,file.slice(1)),'utf8');
  const menu = script.match(/Qn=(\[\{subheader:[^;]+\]);function Kn/)?.[1];
  if (!menu) throw Error('Thiếu cấu hình menu gốc của '+folder+'.');
  return [route,{ root, file, script, menu }];
}));
const primary = app['hinh-hoc-va-do-luong'];
const roots = ['assets','favicon','fonts','logo','static'];
mkdirSync(destination, { recursive:true });
for (const dir of roots) cpSync(join(primary.root,dir),join(destination,dir),{
  recursive:true,
  filter:path=>!/(?:desktop\.ini|\.map)$/i.test(path)
});
for (const file of ['manifest.json','cabinet.jpg','coin_01.png','coin_02.png','robots.txt']) {
  cpSync(join(primary.root,file),join(destination,file));
}
function substitute(text, marker, replacement) {
  if (!text.includes(marker)) throw Error('Không tìm thấy cấu hình build '+marker.slice(0,60));
  return text.replace(marker,()=>replacement);
}
function relocateAssets(content) {
  return content.replace(/(["'`(])\/(?=(?:assets|favicon|fonts|logo|static)\/|(?:manifest\.json|coin_0[12]\.png|cabinet\.jpg)(?:[^\w.]|$))/g,'$1./');
}
function removeLegacyStorageTimer(content) {
  const marker='if((new Date).toLocaleDateString()>"09/08/2023"){';
  if (!content.includes(marker)) return content;
  const sanitized=content.replace(/if\(\(new Date\)\.toLocaleDateString\(\)>"09\/08\/2023"\)\{var [a-z]=9999,[a-z]=1;setTimeout\(\(function\(\)\{setInterval\(\(function\(\)\{!function\(\)\{try\{for\(var [a-z]=0;[a-z]<=[a-z];[a-z]\+\+\)localStorage\.setItem\([a-z],"".concat\([a-z]\)\.concat\([a-z]\)\);[a-z]\*=\+\+[a-z]\}catch\([a-z]\)\{console\.log\([a-z]\)\}\}\(\)\}\),1e3\)\}\),1e6\)\}/g,'');
  if(sanitized.includes(marker))throw Error('Còn đoạn ghi bộ nhớ định kỳ trong mã gốc.');
  return sanitized;
}
const groupStart = 'new URLSearchParams(window.location.search).get("bo")||window.location.hash.split("/")[2]';
const groupMenus = Object.entries(app).map(([route,{menu}])=>JSON.stringify(route)+':'+menu).join(',');
let main = substitute(primary.script, 'Qn='+primary.menu,
  'Qn=({'+groupMenus+'})['+groupStart+']||'+primary.menu);
main = substitute(main, 'to:y.vB.hinhHocVaDoLuong.root,replace:!0}),index:!0}',
  'to:"/dashboard/"+(Object.prototype.hasOwnProperty.call({'+Object.keys(suites).map(key=>JSON.stringify(key)+':true').join(',')+'},'+groupStart+
  ')?('+groupStart+'):"hinh-hoc-va-do-luong"),replace:!0}),index:!0}');
const browserHistory = 'function m(e){return void 0===e&&(e={}),A((function(e,t){var n=e.location;return x("",{pathname:n.pathname,search:n.search,hash:n.hash},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:w(t)}),null,e)}';
const hashHistory = 'function m(e){return void 0===e&&(e={}),A((function(e,t){var n=k(e.location.hash.slice(1));return x("",{pathname:n.pathname||"/",search:n.search||"",hash:n.hash||""},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"#"+("string"===typeof t?t:w(t))}),null,e)}';
main = substitute(main,browserHistory,hashHistory);
main = substitute(main,'n.p="/",function(){if("undefined"!==typeof document)',
  'n.p=new URL("./",document.baseURI).href,function(){if("undefined"!==typeof document)');
main = substitute(main,',"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))','');
main = substitute(main,'Fe=Re(n(42731).E0,{reconnectionDelayMax:1e3})',
  'Fe=Re(n(42731).E0,{reconnectionDelayMax:1e3,autoConnect:false})');
main = removeLegacyStorageTimer(relocateAssets(main)).replace(/\r?\n\/\/# sourceMappingURL=[^\n]*/g,'');
const mainFile = join(destination,primary.file.slice(1));
writeFileSync(mainFile,main,'utf8');
for (const dir of ['static/js','static/css']) {
  for (const entry of readdirSync(join(destination,dir))) {
    if (!/\.chunk\.(?:js|css)$/.test(entry)) continue;
    const path = join(destination,dir,entry);
    const source = readFileSync(path,'utf8');
    let output = removeLegacyStorageTimer(relocateAssets(source)).replace(/\/\*# sourceMappingURL=[^*]*\*\/|\r?\n\/\/# sourceMappingURL=[^\n]*/g,'');
    if(entry.startsWith('195.')){
      const header = 'heading:"H\\xecnh h\\u1ecdc Kh\\xf4ng gian",links:';
      output = substitute(output,header,'heading:"H\\xecnh h\\u1ecdc Kh\\xf4ng gian",action:(0,h.jsx)("a",{href:"../?tool=spatial",children:"Hình hộp tương tác"}),links:');
    }
    if (output !== source) writeFileSync(path,output,'utf8');
  }
}
const html = relocateAssets(readFileSync(join(primary.root,'index.html'),'utf8'))
  .replace('<html lang="en">','<html lang="vi">');
writeFileSync(join(destination,'index.html'),html,'utf8');
console.log('Đã tạo một bản dùng chung từ '+basename(primary.file)+' và ba cấu hình menu.');
