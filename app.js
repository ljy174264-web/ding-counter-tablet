const SHOE_MEN_ID='__shoe_men_b';
const SHOE_MIXED_ID='__shoe_mixed';
const BAG_LEATHER_ID='__bag_leather';
const NORMAL_ITEMS = [
  ['22D','男士棉袄',80],['22H','男拉链夹',90],['99N','男呢子',90],['013','男西服',90],['74HL','女西装',90],
  ['028','儿童冬衣',95],['026','儿童春秋',90],['015M','带帽运动',90],['003J','无帽运动',90],['003P','运动裤',90],
  ['03H','绒料运动',80],['094','呢龙运动',90],['113H','厚滑料运',90],['33CH','女牛仔裤',90],['29CH','男牛仔裤',90],
  ['H075','男休闲裤',90],['H062','厚衬衣',90],['32NH','厚小脚裤',90],['023','女拉链夹',90],['55Q','弹力毛衣',80],
  ['55M','男毛衣',80],['55K','开衫毛衣',80],['55L','长毛衣',80],['55H','女毛衣',80],['55CH','高领毛衣',80],
  ['28W','童毛衣',80],['K042','牛仔衣',90],['K001','厚牛仔衣',90],['K002','马甲',90],['K005','呢子马甲',90],
  ['K105','人造毛',80],['K006','男T',90],['K009','金丝绒',80],['K008','窗帘',80],['HHR-1','床上用品',80],
  ['HHR-2','毛巾浴巾',80],['HHR-3','薄毛毯',80],['111C','儿童校服',90],['K018','风衣马甲',90],['K004','滑料马甲',80],['089','冬下半身',90],
  ['NW-L','长呢子',90],['089S','秋连',90],['K31','校服',90],['43PH','打底裤',90],['K046','围巾',80],
  ['047','毛线裙',80],['48P','条绒裤',90],['019B','校服B',90],['24E','工作裙',90],['028K','文胸',80],
  ['B028','冬童B',95],['B026','秋童B',90],['N-29CH','男牛仔裤B',90],['N-003P','棉料运动',90],['N-003J','B开衫运动',90],
  ['N15','B戴帽运动',90],['N2D','男夹克B',80],['N-33P','女牛B',90],['N-H075','男休闲裤B',90],
  [SHOE_MEN_ID,'男鞋B',20,''],[SHOE_MIXED_ID,'统货鞋',20,''],[BAG_LEATHER_ID,'皮包',20,''],['C/B','书包',20],['S/B','双肩包',20]
];
const B_ITEMS = [
  ['028','冬童',95],['K028','冬童A',95],['026','秋童',90],['003P','运动裤',90],['22D','男棉袄',80],['22H','男夹克',80],
  ['015M','带帽卫衣',90],['44N','冬衬',90],['MM18','棒球服',90],['55M','男毛衣',80],['K006','男TB',90],
  ['88K','开衫运动',90],['K31','校服B',90],['K003J','无帽卫衣',80],['N-003J','B开衫运动',90],['H075','男休闲裤B',90],
  ['K008','窗帘',80],['028K','文胸',80],['K113H','风裤',90],['HHR-1','床上用品',80],['HHR-3','薄毛毯',80],['75D','多袋裤',90],
  [SHOE_MEN_ID,'男鞋B',20,''],[BAG_LEATHER_ID,'皮包',20,''],['C/B','书包',20],['S/B','双肩包',20]
];
const TEMPLATES = {normal:NORMAL_ITEMS,b:B_ITEMS};
const LOGO_OPTIONS={normal:['足球','BOSS'],b:['爱心','老鹰','牡丹']};
const ALL_PRESET_LOGOS=Object.values(LOGO_OPTIONS).flat();
const PRICE_MAPS={
  normal:{'22D':4.8,'22H':4.8,'99N':4.8,'013':4.8,'74HL':4.8,'028':4.3,'026':3,'015M':4.8,'003J':3.5,'003P':4.8,'03H':4.8,'094':4.8,'113H':4.8,'33CH':3.5,'29CH':4.8,'H075':4.8,'H062':4.5,'32NH':2.5,'023':4.8,'55Q':4.8,'55M':4.8,'55K':4.5,'55L':4.8,'55H':4.8,'55CH':4.8,'28W':4,'K042':4.8,'K001':4.8,'K002':4.8,'K005':4.8,'K105':4.8,'K006':4.8,'K009':3,'K008':4.8,'HHR-1':4.8,'HHR-2':4.8,'HHR-3':7,'111C':4.5,'K018':4.8,'K004':4.8,'089':4.5,'NW-L':4.8,'089S':4.8,'K31':4.8,'43PH':4.8,'K046':4.8,'047':4.8,'48P':4.8,'019B':2,'24E':4.8,'028K':15,'B028':1,'B026':1.5,'N-29CH':2,'N-003P':2,'N-003J':2,'N15':1.8,'N2D':2,'N-33P':2,'N-H075':2,[SHOE_MEN_ID]:5,[SHOE_MIXED_ID]:9.5,[BAG_LEATHER_ID]:17,'C/B':14,'S/B':18},
  b:{'028':1,'K028':3.5,'026':1.5,'003P':2,'22D':2,'22H':2,'015M':1.8,'44N':2,'MM18':4,'55M':2,'K006':2,'88K':2,'K31':2.5,'K003J':3,'N-003J':2,'H075':2,'K008':4.8,'028K':15,'K113H':7,'HHR-1':4.8,'HHR-3':7,'75D':7,[SHOE_MEN_ID]:5,[BAG_LEATHER_ID]:17,'C/B':14,'S/B':18}
};
const STORAGE_KEY='ding-counter-state-v3';
const DB_NAME='ding-counter-offline-v3';
const APP_VERSION='2026.10.10.1';
const $=id=>document.getElementById(id);
const uid=()=>globalThis.crypto?.randomUUID?.()||`v-${Date.now()}-${Math.random().toString(16).slice(2)}`;
const today=()=>{const d=new Date(),z=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${z(d.getMonth()+1)}-${z(d.getDate())}`};
const monthKey=date=>/^\d{4}-\d{2}/.test(String(date||''))?String(date).slice(0,7):today().slice(0,7);
const monthDate=key=>key===today().slice(0,7)?today():`${key}-01`;
const monthLabel=key=>{const [y,m]=String(key).split('-').map(Number);return `${y}年${m}月`};
const newVehicle=(index=1,date=today())=>({id:uid(),name:`车辆${index}`,date,logo:'',container:'',freight:'',template:'normal',counts:{},createdAt:Date.now()});
let state={vehicles:[newVehicle(1)],activeId:null,viewMonth:today().slice(0,7),lastOpenedMonth:today().slice(0,7),history:[],updatedAt:0}; state.activeId=state.vehicles[0].id;
let onlyCounted=false, searchText='', metaExpanded=false, editingCode='', quantityPreviewSound=false, lastQuantityTap=0, db=null, audioCtx=null, toastTimer=null;

function openDb(){return new Promise(resolve=>{try{const req=indexedDB.open(DB_NAME,1);req.onupgradeneeded=()=>req.result.createObjectStore('state');req.onsuccess=()=>{db=req.result;resolve(db)};req.onerror=()=>resolve(null)}catch{resolve(null)}})}
function dbGet(key='main'){return new Promise(resolve=>{if(!db)return resolve(null);const req=db.transaction('state','readonly').objectStore('state').get(key);req.onsuccess=()=>resolve(req.result||null);req.onerror=()=>resolve(null)})}
function dbPut(value,key='main'){return new Promise(resolve=>{if(!db)return resolve(false);const tx=db.transaction('state','readwrite');tx.objectStore('state').put(value,key);tx.oncomplete=()=>resolve(true);tx.onerror=()=>resolve(false)})}
function migratedItemId(template,id){if(template==='normal'&&id==='C10')return'028K';if(template==='b'&&id==='mm18')return'MM18';if(template==='b'&&id==='44N-B')return'44N';if(id==='鞋子'||id==='男鞋B')return SHOE_MEN_ID;if(id==='统货鞋')return SHOE_MIXED_ID;if(id==='皮包')return BAG_LEATHER_ID;return id}
function migrateVehicleCounts(v){Object.keys(v.counts).forEach(id=>{const next=migratedItemId(v.template,id);if(next===id)return;v.counts[next]=Number(v.counts[next]||0)+Number(v.counts[id]||0);delete v.counts[id]})}
function normalizeState(raw){
  if(!raw||!Array.isArray(raw.vehicles)||!raw.vehicles.length)return state;
  raw.vehicles.forEach((v,i)=>{v.id=v.id||uid();v.name=`车辆${i+1}`;v.counts=v.counts||{};v.template=TEMPLATES[v.template]?v.template:'normal';migrateVehicleCounts(v);v.date=v.date||today();v.logo=v.logo||'';v.container=v.container||'';v.freight=v.freight??'';v.createdAt=Number(v.createdAt)||Number(raw.updatedAt)||Date.now()+i});
  const templates=new Map(raw.vehicles.map(v=>[v.id,v.template]));
  raw.history=Array.isArray(raw.history)?raw.history.slice(-1000).map(h=>({...h,code:migratedItemId(templates.get(h.vehicleId),h.code)})):[];
  raw.activeId=raw.vehicles.some(v=>v.id===raw.activeId)?raw.activeId:raw.vehicles[0].id;
  raw.viewMonth=monthKey(raw.viewMonth||raw.vehicles.find(v=>v.id===raw.activeId)?.date);
  raw.lastOpenedMonth=monthKey(raw.lastOpenedMonth||raw.viewMonth);
  return raw;
}
function rollToCurrentMonth(){const nowMonth=today().slice(0,7);if(state.lastOpenedMonth===nowMonth)return false;let vehicles=state.vehicles.filter(v=>monthKey(v.date)===nowMonth);if(!vehicles.length){const v=newVehicle(1);state.vehicles.push(v);vehicles=[v]}state.viewMonth=nowMonth;state.activeId=vehicles[0].id;state.lastOpenedMonth=nowMonth;return true}
async function loadState(){
  let localSaved=null;
  try{localSaved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null')}catch{}
  const dbSaved=await Promise.race([openDb().then(()=>dbGet()),new Promise(resolve=>setTimeout(()=>resolve(null),500))]);
  const saved=Number(localSaved?.updatedAt||0)>=Number(dbSaved?.updatedAt||0)?localSaved:dbSaved;
  state=normalizeState(saved);
  rollToCurrentMonth();
  ensureActiveMonth();
}
async function persist(){
  $('saveState').className='save-state saving';$('saveState').innerHTML='<span></span>正在保存';
  state.updatedAt=Date.now();
  const snapshot=JSON.parse(JSON.stringify(state));
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(snapshot));const ok=await dbPut(snapshot);$('saveState').className='save-state';$('saveState').innerHTML=`<span></span>${ok?'已自动保存':'已保存在本机'}`}catch{$('saveState').className='save-state error';$('saveState').innerHTML='<span></span>保存失败'}
}
function vehiclesForMonth(key=state.viewMonth){return state.vehicles.filter(v=>monthKey(v.date)===key).sort((a,b)=>String(a.date).localeCompare(String(b.date))||Number(a.createdAt)-Number(b.createdAt))}
function ensureActiveMonth(){let vehicles=vehiclesForMonth();if(!vehicles.length){const v=newVehicle(1,monthDate(state.viewMonth));state.vehicles.push(v);vehicles=[v]}if(!vehicles.some(v=>v.id===state.activeId))state.activeId=vehicles[0].id;return vehicles}
function activeVehicle(){return state.vehicles.find(v=>v.id===state.activeId)||ensureActiveMonth()[0]}
function itemsFor(v=activeVehicle()){return TEMPLATES[v.template]}
function itemDisplayCode(item){return item.length>3?item[3]:item[0]}
function stats(v=activeVehicle()){
  let qty=0,weight=0,kinds=0;itemsFor(v).forEach(([code,,kg])=>{const n=Number(v.counts[code]||0);qty+=n;weight+=n*kg;if(n>0)kinds++});return{qty,weight,kinds};
}
function priceTotal(v=activeVehicle()){const prices=PRICE_MAPS[v.template]||{};return itemsFor(v).reduce((sum,[code,,kg])=>sum+Number(v.counts[code]||0)*kg*Number(prices[code]||0),0)}
function exportVehicles(key=state.viewMonth){return vehiclesForMonth(key).filter(v=>stats(v).qty>0)}
function formatMoney(value){return Number(value||0).toLocaleString('zh-CN',{minimumFractionDigits:0,maximumFractionDigits:2})}
function esc(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function showToast(message){const el=$('toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),1800)}
function playSound(kind){try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();const sound=()=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=kind==='add'?'sine':'triangle';o.frequency.value=kind==='add'?760:330;g.gain.setValueAtTime(.14,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+.12);o.connect(g).connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+.13)};if(audioCtx.state==='suspended')audioCtx.resume().then(sound).catch(()=>{});else sound()}catch{}}

function renderMonths(){const months=[...new Set(state.vehicles.map(v=>monthKey(v.date)))].sort().reverse();if(!months.includes(state.viewMonth))months.unshift(state.viewMonth);$('monthSelect').innerHTML=months.map(key=>`<option value="${key}" ${key===state.viewMonth?'selected':''}>${monthLabel(key)}</option>`).join('');const vehicles=vehiclesForMonth(),filled=vehicles.filter(v=>stats(v).qty>0);$('monthSummary').textContent=`${monthLabel(state.viewMonth)} · ${vehicles.length}辆车 · ${filled.length}辆已计数`}

function renderTabs(){
  const vehicles=ensureActiveMonth();
  $('vehicleTabs').innerHTML=vehicles.map((v,i)=>{const s=stats(v);return `<button class="vehicle-card ${v.id===state.activeId?'active':''}" data-id="${v.id}"><span class="vehicle-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg><i>${i+1}</i></span><span class="vehicle-copy"><strong>${esc(v.logo||'未填Logo')}</strong><small>${v.template==='b'?'B货柜':'A货柜'} · ${esc(v.container||'柜号未填')}</small></span><b>${s.qty}包</b></button>`}).join('');
  document.querySelectorAll('.vehicle-card').forEach(btn=>btn.onclick=()=>{state.activeId=btn.dataset.id;renderAll();persist()});
}
function renderMeta(){const v=activeVehicle();$('dateInput').value=v.date;$('templateInput').value=v.template;$('logoInput').value=v.logo;$('logoOptions').innerHTML=LOGO_OPTIONS[v.template].map(x=>`<option value="${x}"></option>`).join('');$('containerInput').value=v.container;$('freightInput').value=v.freight}
function renderDrawer(){const drawer=$('metaDrawer');drawer.classList.toggle('hidden',!metaExpanded);$('toggleMeta').textContent=metaExpanded?'收起信息⌃':'编辑信息⌄'}
function renderStats(){const v=activeVehicle(),s=stats(v);$('totalQty').textContent=s.qty.toLocaleString();$('totalWeight').textContent=s.weight.toLocaleString();$('totalPrice').textContent=formatMoney(priceTotal(v));$('footerLogo').textContent=v.logo||'未填Logo';$('footerQty').textContent=s.qty.toLocaleString()}
function renderGrid(){
  const v=activeVehicle(),needle=searchText.trim().toLowerCase();
  const visible=itemsFor(v).filter(item=>{const[id,name]=item,code=itemDisplayCode(item);return(!onlyCounted||Number(v.counts[id]||0)>0)&&(!needle||code.toLowerCase().includes(needle)||name.includes(needle))});
  $('countGrid').innerHTML=visible.map(item=>{const[id,name]=item,code=itemDisplayCode(item),n=Number(v.counts[id]||0),badge=n?`<button class="qty-pill direct-badge" aria-label="修改${esc(name)}数量">${n}</button>`:'';return `<article class="item-card ${v.template==='b'?'direct-card':''} ${code?'':'no-code'} ${n?'counted':''}" data-code="${esc(id)}">${code?`<div class="item-code">${esc(code)}</div>`:''}<div class="item-name">${esc(name)}</div>${badge}</article>`}).join('');
  $('emptyState').classList.toggle('hidden',visible.length>0);
  if(v.template==='b')document.querySelectorAll('.item-card').forEach(card=>card.onclick=()=>openQuantityEditor(card.dataset.code));
  else document.querySelectorAll('.item-card').forEach(card=>{card.onclick=e=>{if(e.target.closest('.qty-pill'))return openQuantityEditor(card.dataset.code);changeCount(card.dataset.code,1)}})
}
function renderAll(){ensureActiveMonth();renderMonths();renderTabs();renderMeta();renderDrawer();renderStats();renderGrid();$('toggleCounted').classList.toggle('on',onlyCounted)}
function changeCount(code,delta){
  const v=activeVehicle(),before=Number(v.counts[code]||0),after=Math.max(0,before+delta);if(after===before){playSound('sub');return}
  state.history.push({vehicleId:v.id,code,before,after,timestamp:Date.now()});state.history=state.history.slice(-1000);v.counts[code]=after;playSound(delta>0?'add':'sub');renderTabs();renderStats();renderGrid();persist();
}
function openQuantityEditor(code){const v=activeVehicle(),item=itemsFor(v).find(x=>x[0]===code);if(!item)return;editingCode=code;quantityPreviewSound=false;lastQuantityTap=0;const direct=v.template==='b',input=$('quantityInput');$('quantityCode').textContent=itemDisplayCode(item)||'无编码';$('quantityName').textContent=item[1];$('quantityHint').textContent=direct?'直接输入数量，或点减号减一':'双击数字可手动输入';input.readOnly=!direct;input.setAttribute('aria-label',direct?'当前数量，可直接输入':'当前数量，双击后可手动输入');input.value=Number(v.counts[code]||0)||'';$('quantityDialog').showModal();if(direct){input.focus();input.select()}}
function saveQuantity(){const v=activeVehicle(),before=Number(v.counts[editingCode]||0),raw=$('quantityInput').value.trim(),parsed=raw===''?0:Math.floor(Number(raw)),after=Number.isFinite(parsed)&&parsed>0?parsed:0;if(before!==after){state.history.push({vehicleId:v.id,code:editingCode,before,after,timestamp:Date.now()});state.history=state.history.slice(-1000);v.counts[editingCode]=after;if(!(quantityPreviewSound&&after<before))playSound(after>=before?'add':'sub');renderTabs();renderStats();renderGrid();persist()}$('quantityDialog').close();$('quantityInput').readOnly=true;editingCode='';quantityPreviewSound=false}
function historyTime(timestamp){if(!timestamp)return '时间未记录';const d=new Date(timestamp),z=n=>String(n).padStart(2,'0');return `${z(d.getMonth()+1)}/${z(d.getDate())} ${z(d.getHours())}:${z(d.getMinutes())}:${z(d.getSeconds())}`}
function showHistory(){const v=activeVehicle(),idx=state.vehicles.indexOf(v)+1,items=new Map(itemsFor(v).map(item=>[item[0],{name:item[1],code:itemDisplayCode(item)}])),records=state.history.filter(x=>x.vehicleId===v.id).slice().reverse();$('historyVehicle').textContent=`${v.logo||`车辆${idx}`} · ${records.length}条`;$('historyList').innerHTML=records.length?records.map(x=>{const item=items.get(x.code);return `<div class="history-row"><time>${historyTime(x.timestamp)}</time><span class="history-product"><b>${esc(item?.code||'无编码')}</b><small>${esc(item?.name||'品名未记录')}</small></span><strong>${Number(x.before||0)} → ${Number(x.after||0)}包</strong></div>`}).join(''):'<div class="history-empty">当前车辆还没有计数记录</div>';$('historyDialog').showModal()}
function updateMeta(field,value){const v=activeVehicle();v[field]=value;renderTabs();renderStats();persist()}
$('monthSelect').onchange=e=>{state.viewMonth=e.target.value;ensureActiveMonth();renderAll();persist()};
$('addVehicle').onclick=()=>{const v=newVehicle(vehiclesForMonth().length+1,monthDate(state.viewMonth));state.vehicles.push(v);state.activeId=v.id;metaExpanded=true;renderAll();persist();showToast(`已添加${monthLabel(state.viewMonth)}的新车辆`)};
$('toggleMeta').onclick=()=>{metaExpanded=!metaExpanded;renderDrawer()};
$('closeMeta').onclick=()=>{metaExpanded=false;renderDrawer()};
$('dateInput').onchange=e=>{const v=activeVehicle();v.date=e.target.value||monthDate(state.viewMonth);state.viewMonth=monthKey(v.date);renderAll();persist()};
$('logoInput').oninput=e=>updateMeta('logo',e.target.value);
$('containerInput').oninput=e=>updateMeta('container',e.target.value);
$('freightInput').oninput=e=>updateMeta('freight',e.target.value);
$('templateInput').onchange=e=>{const v=activeVehicle(),has=stats(v).qty>0;if(has&&!confirm('切换货柜类型会清空当前车辆已经记录的数量，确定切换吗？')){e.target.value=v.template;return}v.template=e.target.value;if(ALL_PRESET_LOGOS.includes(v.logo)&&!LOGO_OPTIONS[v.template].includes(v.logo))v.logo='';v.counts={};state.history=state.history.filter(h=>h.vehicleId!==v.id);renderAll();persist()};
$('searchInput').oninput=e=>{searchText=e.target.value;renderGrid()};
$('toggleCounted').onclick=()=>{onlyCounted=!onlyCounted;renderGrid();$('toggleCounted').classList.toggle('on',onlyCounted)};
$('historyBtn').onclick=showHistory;
$('clearBtn').onclick=()=>{const v=activeVehicle();if(!stats(v).qty)return showToast('当前车辆还没有数量');if(confirm(`确定清空${v.name}的全部计数吗？此操作只清数量，不删除车辆。`)){v.counts={};state.history=state.history.filter(h=>h.vehicleId!==v.id);renderAll();persist();showToast('当前车辆数量已清空')}};
$('deleteVehicleBtn').onclick=()=>{const v=activeVehicle();if(!confirm(`确定删除${v.name}吗？删除后该车辆的计数和记录都会清除。`))return;state.vehicles=state.vehicles.filter(x=>x.id!==v.id);state.history=state.history.filter(h=>h.vehicleId!==v.id);const vehicles=ensureActiveMonth();state.activeId=vehicles[0].id;renderAll();persist();showToast('车辆已删除')};
$('quantityForm').onsubmit=e=>{e.preventDefault();saveQuantity()};
$('quantityInput').onkeydown=e=>{if(['-','+','.','e','E'].includes(e.key))e.preventDefault()};
function enableQuantityKeyboard(input){input.readOnly=false;quantityPreviewSound=false;input.focus()}
$('quantityInput').ondblclick=e=>enableQuantityKeyboard(e.currentTarget);
$('quantityInput').onpointerup=e=>{if(e.pointerType!=='touch'||!e.currentTarget.readOnly)return;const now=Date.now();if(now-lastQuantityTap<380){lastQuantityTap=0;enableQuantityKeyboard(e.currentTarget)}else lastQuantityTap=now};
$('quantityInput').oninput=()=>{quantityPreviewSound=false};
$('decreaseQuantity').onclick=()=>{const input=$('quantityInput'),current=Math.max(0,Math.floor(Number(input.value)||0)),next=Math.max(0,current-1);input.value=next||'';if(next!==current){quantityPreviewSound=true;playSound('sub')}};
$('cancelQuantity').onclick=$('cancelQuantityBottom').onclick=()=>{$('quantityDialog').close();$('quantityInput').readOnly=true;editingCode='';quantityPreviewSound=false};

function formatDateCN(iso){if(!iso)return '';const [y,m,d]=iso.split('-').map(Number);return `${y}年${m}月${d}日`}
function reviewExport(){
  const vehicles=exportVehicles(),missing=vehicles.find(v=>!v.logo.trim());if(!vehicles.length)return showToast(`${monthLabel(state.viewMonth)}还没有已计数车辆`);if(missing){state.activeId=missing.id;renderAll();return showToast('请先填写当前月份每辆车的Logo')}
  const totals=vehicles.reduce((a,v)=>{const s=stats(v);a.qty+=s.qty;a.weight+=s.weight;return a},{qty:0,weight:0});
  $('confirmTitle').textContent=`丁总${Number(state.viewMonth.slice(5))}月计数表`;
  $('confirmMeta').innerHTML=[["月份",monthLabel(state.viewMonth)],["车辆",vehicles.length+' 辆'],["总数量",totals.qty.toLocaleString()+' 包'],["总重量",totals.weight.toLocaleString()+' KG']].map(([a,b])=>`<div><small>${a}</small><strong>${esc(b)}</strong></div>`).join('');
  $('confirmList').innerHTML=vehicles.map(v=>{const s=stats(v);return `<div class="confirm-row"><b>${esc(exportSheetBase(v))}</b><span>${v.template==='b'?'B货柜':'A货柜'}${v.container?` · ${esc(v.container)}`:''}</span><b>${s.qty} 包</b></div>`}).join('');
  $('confirmDialog').showModal();
}
$('reviewExport').onclick=reviewExport;
$('confirmExport').onclick=()=>{downloadMonthlyXlsx(state.viewMonth);$('confirmDialog').close();showToast(`${monthLabel(state.viewMonth)}Excel已导出`);persist()};

function xmlEsc(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&apos;','"':'&quot;'}[c]))}
function cell(ref,value,style=5,type){if(value===null||value===undefined||value==='')return `<c r="${ref}" s="${style}"/>`;if(type==='n'||typeof value==='number')return `<c r="${ref}" s="${style}"><v>${Number(value)}</v></c>`;return `<c r="${ref}" s="${style}" t="inlineStr"><is><t>${xmlEsc(value)}</t></is></c>`}
function exportSheetBase(v){const [,m,d]=String(v.date||'').split('-').map(Number),logo=String(v.logo||'').trim().replace(/[\\/:?*\[\]']/g,'');return `${m||''}月${d||''}日${logo}`||'数量单'}
function exportSheetEntries(vehicles){const used=new Set();return vehicles.map(vehicle=>{const base=exportSheetBase(vehicle);let name=base.slice(0,31),n=1;while(used.has(name)){n++;const suffix=`-${n}`;name=base.slice(0,31-suffix.length)+suffix}used.add(name);return{vehicle,name}})}
function makeSheetXml(v){
  const items=itemsFor(v).filter(([id])=>Number(v.counts[id]||0)>0),start=7,end=start+items.length-1,total=end+1,s=stats(v),rows=[];
  rows.push(`<row r="1" ht="34" customHeight="1">${cell('A1','丁总数量单',1)}</row>`);
  [['日期',formatDateCN(v.date)],['Logo',v.logo],['柜号',v.container],['海运费',v.freight===''?'':Number(v.freight)]].forEach((x,i)=>{const r=i+2;rows.push(`<row r="${r}" ht="26" customHeight="1">${cell(`A${r}`,x[0],2)}${cell(`B${r}`,x[1],3,typeof x[1]==='number'?'n':undefined)}${cell(`C${r}`,'',3)}${cell(`D${r}`,'',3)}</row>`)});
  rows.push(`<row r="6" ht="27" customHeight="1">${cell('A6','编码',4)}${cell('B6','品名',4)}${cell('C6','重量/KG',4)}${cell('D6','数量/包',4)}</row>`);
  items.forEach((item,i)=>{const[id,name,kg]=item,code=itemDisplayCode(item),r=start+i,n=Number(v.counts[id]||0);rows.push(`<row r="${r}" ht="22" customHeight="1">${cell(`A${r}`,code,5)}${cell(`B${r}`,name,5)}${cell(`C${r}`,kg,5,'n')}${cell(`D${r}`,n||'',5,'n')}</row>`)});
  rows.push(`<row r="${total}" ht="28" customHeight="1">${cell(`A${total}`,'合计',6)}<c r="D${total}" s="6"><f>SUM(D${start}:D${end})</f><v>${s.qty}</v></c></row>`);
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView showGridLines="0" workbookViewId="0"><pane ySplit="6" topLeftCell="A7" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><sheetFormatPr defaultRowHeight="20"/><cols><col min="1" max="1" width="18" customWidth="1"/><col min="2" max="2" width="25" customWidth="1"/><col min="3" max="4" width="15" customWidth="1"/></cols><sheetData>${rows.join('')}</sheetData><mergeCells count="6"><mergeCell ref="A1:D1"/><mergeCell ref="B2:D2"/><mergeCell ref="B3:D3"/><mergeCell ref="B4:D4"/><mergeCell ref="B5:D5"/><mergeCell ref="A${total}:C${total}"/></mergeCells><pageMargins left="0.3" right="0.3" top="0.4" bottom="0.4" header="0.2" footer="0.2"/><pageSetup orientation="portrait" fitToWidth="1" fitToHeight="0"/></worksheet>`;
}
const STYLES=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="4"><font><sz val="11"/><name val="Microsoft YaHei"/></font><font><b/><sz val="18"/><color rgb="FFFFFFFF"/><name val="Microsoft YaHei"/></font><font><b/><sz val="12"/><color rgb="FFFFFFFF"/><name val="Microsoft YaHei"/></font><font><b/><sz val="12"/><color rgb="FF17365D"/><name val="Microsoft YaHei"/></font></fonts><fills count="6"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF17365D"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FF1F4E78"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFEEF4FA"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFF4B183"/></patternFill></fill></fills><borders count="2"><border/><border><left style="thin"><color rgb="FFB7C7D6"/></left><right style="thin"><color rgb="FFB7C7D6"/></right><top style="thin"><color rgb="FFB7C7D6"/></top><bottom style="thin"><color rgb="FFB7C7D6"/></bottom><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="7"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf><xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf><xf numFmtId="0" fontId="3" fillId="4" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf><xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf><xf numFmtId="0" fontId="3" fillId="5" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>`;
function makeMonthlyXlsxFiles(vehicles,key){const now=new Date().toISOString(),entries=exportSheetEntries(vehicles),title=`丁总${Number(key.slice(5))}月计数表`,files={
  '[Content_Types].xml':`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>${entries.map((_,i)=>`<Override PartName="/xl/worksheets/sheet${i+1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join('')}<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>`,
  '_rels/.rels':`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>`,
  'xl/workbook.xml':`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${entries.map((x,i)=>`<sheet name="${xmlEsc(x.name)}" sheetId="${i+1}" r:id="rId${i+1}"/>`).join('')}</sheets><calcPr calcId="191029" fullCalcOnLoad="1"/></workbook>`,
  'xl/_rels/workbook.xml.rels':`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${entries.map((_,i)=>`<Relationship Id="rId${i+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i+1}.xml"/>`).join('')}<Relationship Id="rId${entries.length+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`,
  'xl/styles.xml':STYLES,
  'docProps/core.xml':`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${xmlEsc(title)}</dc:title><dc:creator>丁总计数面板</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">${now}</dcterms:created></cp:coreProperties>`,
  'docProps/app.xml':`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>丁总计数面板</Application></Properties>`
};entries.forEach((x,i)=>files[`xl/worksheets/sheet${i+1}.xml`]=makeSheetXml(x.vehicle));return files}
let crcTable=null;function crc32(bytes){if(!crcTable){crcTable=Array.from({length:256},(_,n)=>{let c=n;for(let k=0;k<8;k++)c=(c&1)?0xedb88320^(c>>>1):c>>>1;return c>>>0})}let c=0xffffffff;for(const b of bytes)c=crcTable[(c^b)&255]^(c>>>8);return(c^0xffffffff)>>>0}
function u16(n){return new Uint8Array([n&255,(n>>>8)&255])}function u32(n){return new Uint8Array([n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255])}function join(parts){const len=parts.reduce((a,b)=>a+b.length,0),out=new Uint8Array(len);let p=0;for(const x of parts){out.set(x,p);p+=x.length}return out}
function zipStore(files){const enc=new TextEncoder(),locals=[],central=[];let offset=0;const dt=new Date(),dosTime=(dt.getHours()<<11)|(dt.getMinutes()<<5)|(dt.getSeconds()>>1),dosDate=((dt.getFullYear()-1980)<<9)|((dt.getMonth()+1)<<5)|dt.getDate();for(const [name,text] of Object.entries(files)){const nb=enc.encode(name),data=enc.encode(text),crc=crc32(data);const local=join([u32(0x04034b50),u16(20),u16(0x800),u16(0),u16(dosTime),u16(dosDate),u32(crc),u32(data.length),u32(data.length),u16(nb.length),u16(0),nb,data]);locals.push(local);central.push(join([u32(0x02014b50),u16(20),u16(20),u16(0x800),u16(0),u16(dosTime),u16(dosDate),u32(crc),u32(data.length),u32(data.length),u16(nb.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset),nb]));offset+=local.length}const cd=join(central),body=join(locals);return new Blob([body,cd,join([u32(0x06054b50),u16(0),u16(0),u16(central.length),u16(central.length),u32(cd.length),u32(body.length),u16(0)])],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})}
function downloadMonthlyXlsx(key){const vehicles=exportVehicles(key),blob=zipStore(makeMonthlyXlsxFiles(vehicles,key)),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`丁总${Number(key.slice(5))}月计数表.xlsx`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000)}

document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')persist();else if(rollToCurrentMonth()){renderAll();persist();showToast(`已自动进入${monthLabel(state.viewMonth)}`)}});
window.addEventListener('beforeunload',()=>{try{state.updatedAt=Date.now();localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch{}});
async function prepareOfflineApp(){
  if(!('serviceWorker' in navigator))return;
  try{
    const appRegistration=await navigator.serviceWorker.register('./sw.js');
    const ready=await navigator.serviceWorker.ready;
    (ready.active||navigator.serviceWorker.controller)?.postMessage({type:'APP_READY',version:APP_VERSION});
    setTimeout(()=>appRegistration.update().catch(()=>{}),1800);
  }catch{}
}

(async()=>{
  await loadState();renderAll();await persist();
  window.__counterBootReady=true;clearTimeout(window.__counterBootTimer);$('bootRecovery').hidden=true;
  prepareOfflineApp();
})();
