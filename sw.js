const VERSION='2026.09.08.1';
const SHELL=`ding-counter-shell-${VERSION}`;
const LAST_GOOD='ding-counter-last-good';
const PREVIOUS_GOOD='ding-counter-previous-good';
const META='ding-counter-meta';
const CORE=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];

async function metaRead(key){const cache=await caches.open(META),res=await cache.match(new Request(new URL(`__${key}`,self.registration.scope)));return res?res.text():''}
async function metaWrite(key,value){const cache=await caches.open(META);await cache.put(new Request(new URL(`__${key}`,self.registration.scope)),new Response(String(value)))}
async function copyCache(fromName,toName){
  const from=await caches.open(fromName),keys=await from.keys();if(!keys.length)return false;
  await caches.delete(toName);const to=await caches.open(toName);
  for(const key of keys){const res=await from.match(key);if(res)await to.put(key,res)}
  return true;
}
async function cachedResponse(request,navigate=false){
  const rollback=await metaRead('rollback');
  const names=[rollback==='1'?PREVIOUS_GOOD:SHELL,LAST_GOOD,PREVIOUS_GOOD];
  for(const name of names){
    const cache=await caches.open(name);let response=await cache.match(request);
    if(!response&&navigate)response=await cache.match(new Request(new URL('index.html',self.registration.scope)));
    if(response)return response;
  }
  return null;
}

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(SHELL).then(cache=>cache.addAll(CORE.map(path=>new Request(path,{cache:'reload'})))));
});
self.addEventListener('activate',event=>event.waitUntil(Promise.all([self.clients.claim(),metaWrite('rollback','0')])));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cached=await cachedResponse(event.request,event.request.mode==='navigate');
    if(cached)return cached;
    try{return await fetch(event.request)}catch{return new Response('<!doctype html><meta charset="utf-8"><title>丁总计数面板</title><style>body{font-family:sans-serif;padding:40px;background:#eef4fa;color:#123a66}button{padding:12px 20px}</style><h1>计数面板正在恢复</h1><p>请重新打开应用，车辆数据仍保存在本机。</p><button onclick="location.reload()">重新打开</button>',{headers:{'Content-Type':'text/html;charset=utf-8'}})}
  })());
});
self.addEventListener('message',event=>{
  const data=event.data||{};
  if(data.type==='APP_READY')event.waitUntil((async()=>{
    const goodVersion=await metaRead('good-version');
    if(goodVersion!==VERSION){await copyCache(LAST_GOOD,PREVIOUS_GOOD);await copyCache(SHELL,LAST_GOOD);await metaWrite('good-version',VERSION)}
    await metaWrite('rollback','0');
  })());
  if(data.type==='ROLLBACK')event.waitUntil(metaWrite('rollback','1'));
});
