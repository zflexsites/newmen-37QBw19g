import{_ as I}from"./app-CGbP0Fqg.js";import{l as N}from"./analytics-Dfyu_B3T.js";import{s as R}from"./dialog-BU67H1bK.js";/* empty css             */function u(t=""){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function S(t){try{if(!t)return new Date;if(typeof t=="string"){const i=new Date(t);if(!isNaN(i.getTime()))return i;const n=Number(t);return isNaN(n)?new Date:new Date(n)}if(typeof t=="number")return t>1e12?new Date(t):t>1e9?new Date(t):new Date(t*1e3);if(t instanceof Date)return t;if(t&&typeof t.toDate=="function")try{return t.toDate()}catch{}const r=new Date(t);if(!isNaN(r.getTime()))return r}catch{}return new Date}function A(t){if(!t)return!1;try{return new URL(t,location.href).origin===location.origin}catch{return!1}}async function D(t,r=160){if(!t)return null;try{if(window.QRCode){const n=window.QRCode;if(typeof n.toDataURL=="function")return await new Promise((a,c)=>n.toDataURL(t,{width:r},(e,o)=>e?c(e):a(o)));if(typeof n.toCanvas=="function")return await new Promise((a,c)=>{try{const e=document.createElement("canvas");n.toCanvas(e,t,{width:r},o=>o?c(o):a(e.toDataURL("image/png")))}catch(e){c(e)}})}const i=await I(()=>import("./browser-rpPU-9HU.js").then(n=>n.b),[]).catch(()=>null);if(i){const n=i,a=n.toDataURL||n.default&&n.default.toDataURL;if(typeof a=="function")return await a(t,{width:r})}}catch(i){console.warn("[QR] génération échouée:",i)}return null}function C(t,r){const i=t.readableId||t.id||"N/A",a=(t.createdAt instanceof Date?t.createdAt:new Date).toLocaleString("fr-FR",{day:"2-digit",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),c=Array.isArray(t.items)&&t.items.length?t.items.map(d=>{const h=d.quantity||1,p=d.title||d.id||"Produit",v=typeof d.price=="object"?Number(d.price?.amount||0):Number(d.price||0),b=typeof d.price=="object"?d.price?.currency||t.currency||"":t.currency||"",x=(v*h).toFixed(2);return`<div style="display:flex;justify-content:space-between;margin:8px 0;font-size:14px;line-height:1.2;border-bottom:1px dashed #e5e7eb;padding-bottom:8px">
                    <div style="font-weight:700;text-transform:uppercase">${u(`${h} × ${p}`)}</div>
                    <div style="white-space:nowrap;font-family:monospace;font-weight:700">${u(x)} ${u(b)}</div>
                  </div>`}).join(""):'<div style="font-size:14px;color:#6b7280">Aucun item disponible</div>',e=(typeof t.total=="object"?Number(t.total?.amount||0):Number(t.total||0)).toFixed(2),o=(typeof t.total=="object"?t.total?.currency:t.currency)||"",l=t.store?.logoUrl||null,m=l&&A(l);t.store&&t.store.name&&String(t.store.name).trim().charAt(0);const f=`
    :root{
      --bg-color: #ffffff;
      --text-color: #000000;
      --primary-color: #000000;
      --secondary-color: #6B7280;
      --card-bg-color: #ffffff;
      --card-border-color: #000000;
      --text-muted-color: #6B7280;
      --font-family: Inter, sans-serif;
    }
    html,body{margin:0;padding:0;font-family:var(--font-family);background:var(--bg-color);color:var(--text-color)}
    .receipt{box-sizing:border-box;width:600px;padding:32px;background:var(--card-bg-color);color:var(--text-color);border:2px solid var(--card-border-color);}
    .header{text-align:center;margin-bottom:24px;border-bottom:2px solid black;padding-bottom:16px}
    .meta{display:flex;justify-content:space-between;margin:24px 0;font-size:14px;text-transform:uppercase;font-weight:700}
    .items{margin-bottom:24px}
    .footer{display:flex;justify-content:space-between;align-items:center;border-top:2px solid black;padding-top:24px}
    .qrbox{width:120px;height:120px;display:flex;align-items:center;justify-content:center;border:1px solid #e5e7eb}
    .title-main{font-size:24px;font-weight:900;text-transform:uppercase;margin:0}
    .store-name{font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-top:4px}
  `,s=`
    (function() {
      // Intentionally empty or minimal transfer to keep Pulse look strict
    })();
  `,y=m?`<img src="${u(l)}" alt="Logo" style="max-height:50px;margin-bottom:8px">`:"",g=r?`<img src="${r}" alt="QR" style="width:100%;height:100%;object-fit:contain"/>`:'<div style="font-size:10px;">NO QR</div>',w=u(t.store?.name||"Boutique");return`<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <script>${s}<\/script>
  <style>${f}</style>
</head>
<body>
  <div class="receipt" id="receipt-root">
    <div class="header">
      ${y}
      <h2 class="title-main">Reçu de Transaction</h2>
      <div class="store-name">${w}</div>
    </div>

    <div class="meta">
      <div>
        <div style="color:var(--text-muted-color);font-size:10px">ID SESSION</div>
        <div>${i}</div>
      </div>
      <div style="text-align:right">
        <div style="color:var(--text-muted-color);font-size:10px">TIMESTAMP</div>
        <div>${u(a)}</div>
      </div>
    </div>

    <div class="items">${c}</div>

    <div class="footer">
      <div style="text-align:left">
        <div style="font-size:10px;color:var(--text-muted-color);font-weight:700">TOTAL SIGNAL</div>
        <div style="font-weight:900;font-size:24px">${u(e)} <span style="font-size:14px">${u(o)}</span></div>
      </div>
      <div class="qrbox">${g}</div>
    </div>
  </div>
</body>
</html>`}async function L(t,r={}){const{timeoutMs:i=15e3,html2canvasCdn:n="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"}=r;return new Promise((a,c)=>{const e=document.createElement("iframe");e.style.position="fixed",e.style.left="-9999px",e.style.top="0",e.style.width="900px",e.style.height="900px",e.setAttribute("aria-hidden","true"),document.body.appendChild(e);let o=!1;const l=()=>{try{e&&e.parentNode&&e.parentNode.removeChild(e)}catch{}o=!0},m=setTimeout(()=>{o||(l(),c(new Error("Timeout: génération du récapitulatif trop longue.")))},i),f=t.replace("</body>",`<script src="${n}"><\/script></body>`);e.srcdoc=f,e.onload=async()=>{if(!o)try{const s=e.contentWindow,y=e.contentDocument;if(!y)throw new Error("Iframe document inaccessible");const g=Date.now(),w=100;await new Promise((b,x)=>{const E=setInterval(()=>{if(o)return clearInterval(E),x(new Error("Aborted"));if(s.html2canvas)return clearInterval(E),b();if(Date.now()-g>Math.min(i,8e3))return clearInterval(E),x(new Error("html2canvas not loaded in iframe"))},w)});const h=y.getElementById("receipt-root")||y.body;if(!h)return l(),clearTimeout(m),c(new Error("No receipt node inside iframe"));const v=(await s.html2canvas(h,{backgroundColor:"#ffffff",scale:2})).toDataURL("image/png");l(),clearTimeout(m),a(v)}catch(s){l(),clearTimeout(m),c(s)}}})}function T(t,r){const i=t.readableId||t.id||"",n=document.getElementById("order-id");n&&(n.textContent=i);const a=document.getElementById("qrcode-container");a&&(a.innerHTML="",(async()=>{if(!t.id||!r){a.textContent="Erreur QR";return}const c=`zflex-order://${r}/${t.id}`,e=await D(c,160);if(e){const o=document.createElement("img");o.src=e,o.alt="QR Code",o.style.width="100%",o.style.height="100%",o.style.objectFit="contain",a.appendChild(o)}else{const o=document.createElement("span");o.textContent="QR HS",a.appendChild(o)}})())}async function B(){const t=document.getElementById("loading-state"),r=document.getElementById("success-state"),i=document.getElementById("error-state"),n=document.getElementById("error-message");try{const c=new URLSearchParams(window.location.search).get("id");if(!c)throw new Error("IDENTIFIANT MANQUANT");const e=document.getElementById("zflex-data")||document.querySelector(".zflex-fragment-data");if(!e)throw new Error("DONNES PAGE MANQUANTES");const l=JSON.parse(e.textContent||"{}").storeId;if(!l)throw new Error("ID STORE MANQUANT");const m=await N(c,l);if(!m?.valid||!m?.order)throw new Error(m?.message||"COMMANDE INVALIDE");const f=m.order;f.createdAt=S(f.createdAt),T(f,l);const s=document.getElementById("download-receipt-btn");s&&s.addEventListener("click",async()=>{s.disabled=!0;const y=s.textContent;s.textContent="GÉNÉRATION EN COURS...";try{const g=`zflex-order://${l}/${f.id}`,w=await D(g,300),d=C(f,w),h=await L(d),p=document.createElement("a");p.href=h,p.download=`PULSE-RECU-${f.id}.png`,document.body.appendChild(p),p.click(),p.remove()}catch(g){console.error("Erreur génération du récapitulatif:",g),R("ERREUR","IMPOSSIBLE DE GÉNÉRER LE TICKET.",{variant:"error"})}finally{s.disabled=!1,s.textContent=y}}),t&&(t.style.display="none"),r&&r.classList.remove("hidden")}catch(a){console.error("[OrderSuccess] Erreur:",a),n&&(n.textContent=a?.message||"IMPOSSIBLE DE RECUPERER LE SIGNAL"),t&&(t.style.display="none"),i&&i.classList.remove("hidden")}}export{B as initOrderSuccess};
