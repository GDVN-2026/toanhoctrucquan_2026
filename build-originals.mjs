import { cpSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const originalRoot = process.argv[2];
if (!originalRoot) throw Error('Dùng node build-originals.mjs <thư mục chứa HHDL, XSTK và Daisovagiaitich>.');
const destination = fileURLToPath(new URL('./toan-goc/', import.meta.url));
const suites = { 'hinh-hoc-va-do-luong':'HHDL', 'thong-ke-va-xac-suat':'XSTK', 'dai-so-va-giai-tich':'Daisovagiaitich' };
const root = resolve(originalRoot,suites['hinh-hoc-va-do-luong'],'build');
const manifest = JSON.parse(readFileSync(join(root,'asset-manifest.json'),'utf8'));
const file = manifest.files['main.js'];
const primary = {root,file,script:readFileSync(join(root,file.slice(1)),'utf8')};
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
function relocateScriptAssets(content) {
  return relocateAssets(content).replace(/(["'`])\.\/(?=(?:assets|favicon|fonts|logo|static)\/|(?:coin_0[12]\.png|cabinet\.jpg)(?:[^\w.]|$))/g,'$1./toan-goc/');
}
function removeLegacyStorageTimer(content) {
  const marker='if((new Date).toLocaleDateString()>"09/08/2023"){';
  if (!content.includes(marker)) return content;
  const sanitized=content.replace(/if\(\(new Date\)\.toLocaleDateString\(\)>"09\/08\/2023"\)\{var [a-z]=9999,[a-z]=1;setTimeout\(\(function\(\)\{setInterval\(\(function\(\)\{!function\(\)\{try\{for\(var [a-z]=0;[a-z]<=[a-z];[a-z]\+\+\)localStorage\.setItem\([a-z],"".concat\([a-z]\)\.concat\([a-z]\)\);[a-z]\*=\+\+[a-z]\}catch\([a-z]\)\{console\.log\([a-z]\)\}\}\(\)\}\),1e3\)\}\),1e6\)\}/g,'');
  if(sanitized.includes(marker))throw Error('Còn đoạn ghi bộ nhớ định kỳ trong mã gốc.');
  return sanitized;
}
let main = substitute(primary.script,'path:"dashboard",element:(0,c.jsx)(mr,{children:(0,c.jsx)(ar,{})})',
  'path:"dashboard",element:(0,c.jsx)(m.j3,{})');
const browserHistory = 'function m(e){return void 0===e&&(e={}),A((function(e,t){var n=e.location;return x("",{pathname:n.pathname,search:n.search,hash:n.hash},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:w(t)}),null,e)}';
main = substitute(main,browserHistory,'function m(e){return window.MathLabOriginal.createHistory(w,k)}');
main = substitute(main,'n.p="/",function(){if("undefined"!==typeof document)',
  'n.p=new URL("../../",document.currentScript.src).href,function(){if("undefined"!==typeof document)');
main = substitute(main,',"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))','');
main = substitute(main,'Fe=Re(n(42731).E0,{reconnectionDelayMax:1e3})',
  'Fe=Re(n(42731).E0,{reconnectionDelayMax:1e3,autoConnect:false})');
main = substitute(main,'children:[(0,c.jsx)(ri,{}),o]','children:o');
main = substitute(main,'{MuiCssBaseline:{styleOverrides:',
  '{MuiModal:{defaultProps:{container:function(){return document.getElementById("root")}}},MuiCssBaseline:{styleOverrides:');
main = substitute(main,'function dr(){return ur().configure({showSpinner:!1}),(0,l.useMemo)((function(){ur().start()}),[]),(0,l.useEffect)((function(){ur().done()}),[]),null}',
  'function dr(){return(0,c.jsx)("p",{className:"original-loading",role:"status",children:"Đang tải công cụ…"})}');
main = substitute(main,'document.dir=n.direction','document.getElementById("root")?.setAttribute("dir",n.direction)');
main = substitute(main,'window.scrollTo(0,0)}),[e])','document.getElementById("root")?.parentElement?.scrollTo(0,0)}),[e])');
const renderStart = main.lastIndexOf('t.render((0,c.jsx)(v.J.Provider');
const renderEnd = main.indexOf(',document.getElementById("root")),fo()',renderStart);
if(renderStart<0||renderEnd<0)throw Error('Thiếu điểm gắn giao diện.');
const rendered = main.slice(renderStart,renderEnd);
main = main.slice(0,renderStart)+
  'window.MathLabOriginal.mount=function(root,path){window.MathLabOriginal.initialPath=path;'+
  rendered+',root);return function(){t.unmountComponentAtNode(root)}}'+main.slice(renderEnd+',document.getElementById("root")),fo()'.length);
main = removeLegacyStorageTimer(relocateScriptAssets(main)).replace(/\r?\n\/\/# sourceMappingURL=[^\n]*/g,'');
const mainFile = join(destination,primary.file.slice(1));
writeFileSync(mainFile,main,'utf8');
for (const dir of ['static/js','static/css']) {
  for (const entry of readdirSync(join(destination,dir))) {
    if (!/\.chunk\.(?:js|css)$/.test(entry)) continue;
    const path = join(destination,dir,entry);
    const source = readFileSync(path,'utf8');
    const output = removeLegacyStorageTimer(entry.endsWith('.js')?relocateScriptAssets(source):source)
      .replace(/\/\*# sourceMappingURL=[^*]*\*\/|\r?\n\/\/# sourceMappingURL=[^\n]*/g,'');
    if (output !== source) writeFileSync(path,output,'utf8');
  }
}
const html = '<!doctype html><html lang="vi"><meta charset="utf-8"><title>MathLab</title><script>'+
  'const group=new URLSearchParams(location.search).get("bo")||location.hash.split("/")[2];'+
  'const target=new URL("../",location.href);if('+JSON.stringify(Object.keys(suites))+'.includes(group)){'+
  'target.searchParams.set("suite",group);const route=location.hash.split("/").slice(3).join("/");'+
  'if(route)target.searchParams.set("entry",route)}location.replace(target);</script><a href="../">Mở MathLab</a></html>';
writeFileSync(join(destination,'index.html'),html,'utf8');
console.log('Đã tạo mô-đun công cụ dùng chung từ '+basename(primary.file)+'.');
