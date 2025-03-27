import{a0 as E,a1 as U,k as x,l as z,a2 as T,a3 as D,a4 as W,a as N,m as L,j as y,d as R,a5 as G,r as A,o as C,t as F,H as J,v as Q,a6 as I,Y as q,a7 as V}from"./Bu6cHcz8.js";async function X(e,t){return await Y(t).catch(r=>(console.error("Failed to get image meta for "+t,r+""),{width:0,height:0,ratio:0}))}async function Y(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,i)=>{const r=new Image;r.onload=()=>{const s={width:r.width,height:r.height,ratio:r.width/r.height};t(s)},r.onerror=s=>i(s),r.src=e})}function j(e){return t=>t?e[t]||t:e.missingValue}function O({formatter:e,keyMap:t,joinWith:i="/",valueMap:r}={}){e||(e=(n,o)=>`${n}=${o}`),t&&typeof t!="function"&&(t=j(t));const s=r||{};return Object.keys(s).forEach(n=>{typeof s[n]!="function"&&(s[n]=j(s[n]))}),(n={})=>Object.entries(n).filter(([c,d])=>typeof d<"u").map(([c,d])=>{const u=s[c];return typeof u=="function"&&(d=u(n[c])),c=typeof t=="function"?t(c):c,e(c,d)}).join(i)}function v(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function Z(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const i of e.split(" ")){const r=Number.parseInt(i.replace("x",""));r&&t.add(r)}return Array.from(t)}function K(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ee(e){const t={};if(typeof e=="string")for(const i of e.split(/[\s,]+/).filter(r=>r)){const r=i.split(":");r.length!==2?t["1px"]=r[0].trim():t[r[0].trim()]=r[1].trim()}else Object.assign(t,e);return t}function te(e){const t={options:e},i=(s,n={})=>k(t,s,n),r=(s,n={},o={})=>i(s,{...o,modifiers:E(n,o.modifiers||{})}).url;for(const s in e.presets)r[s]=(n,o,c)=>r(n,o,{...e.presets[s],...c});return r.options=e,r.getImage=i,r.getMeta=(s,n)=>re(t,s,n),r.getSizes=(s,n)=>ne(t,s,n),t.$img=r,r}async function re(e,t,i){const r=k(e,t,{...i});return typeof r.getMeta=="function"?await r.getMeta():await X(e,r.url)}function k(e,t,i){var u,l;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:r,defaults:s}=ie(e,i.provider||e.options.provider),n=se(e,i.preset);if(t=x(t)?t:U(t),!r.supportsAlias){for(const h in e.options.alias)if(t.startsWith(h)){const m=e.options.alias[h];m&&(t=z(m,t.slice(h.length)))}}if(r.validateDomains&&x(t)){const h=T(t).host;if(!e.options.domains.find(m=>m===h))return{url:t}}const o=E(i,n,s);o.modifiers={...o.modifiers};const c=o.modifiers.format;(u=o.modifiers)!=null&&u.width&&(o.modifiers.width=v(o.modifiers.width)),(l=o.modifiers)!=null&&l.height&&(o.modifiers.height=v(o.modifiers.height));const d=r.getImage(t,o,e);return d.format=d.format||c||"",d}function ie(e,t){const i=e.options.providers[t];if(!i)throw new Error("Unknown provider: "+t);return i}function se(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ne(e,t,i){var b,$,_,a,f;const r=v((b=i.modifiers)==null?void 0:b.width),s=v(($=i.modifiers)==null?void 0:$.height),n=ee(i.sizes),o=(_=i.densities)!=null&&_.trim()?Z(i.densities.trim()):e.options.densities;K(o);const c=r&&s?s/r:0,d=[],u=[];if(Object.keys(n).length>=1){for(const g in n){const p=M(g,String(n[g]),s,c,e);if(p!==void 0){d.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const w of o)u.push({width:p._cWidth*w,src:P(e,t,i,p,w)})}}oe(d)}else for(const g of o){const p=Object.keys(n)[0];let w=p?M(p,String(n[p]),s,c,e):void 0;w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(a=i.modifiers)==null?void 0:a.width,_cHeight:(f=i.modifiers)==null?void 0:f.height}),u.push({width:g,src:P(e,t,i,w,g)})}ae(u);const l=u[u.length-1],h=d.length?d.map(g=>`${g.media?g.media+" ":""}${g.size}`).join(", "):void 0,m=h?"w":"x",S=u.map(g=>`${g.src} ${g.width}${m}`).join(", ");return{sizes:h,srcset:S,src:l==null?void 0:l.src}}function M(e,t,i,r,s){const n=s.options.screens&&s.options.screens[e]||Number.parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let c=Number.parseInt(t);if(!n||!c)return;o&&(c=Math.round(c/100*n));const d=r?Math.round(c*r):i;return{size:t,screenMaxWidth:n,_cWidth:c,_cHeight:d}}function P(e,t,i,r,s){return e.$img(t,{...i.modifiers,width:r._cWidth?r._cWidth*s:void 0,height:r._cHeight?r._cHeight*s:void 0},i)}function oe(e){var i;e.sort((r,s)=>r.screenMaxWidth-s.screenMaxWidth);let t=null;for(let r=e.length-1;r>=0;r--){const s=e[r];s.media===t&&e.splice(r,1),t=s.media}for(let r=0;r<e.length;r++)e[r].media=((i=e[r+1])==null?void 0:i.media)||""}function ae(e){e.sort((i,r)=>i.width-r.width);let t=null;for(let i=e.length-1;i>=0;i--){const r=e[i];r.width===t&&e.splice(i,1),t=r.width}}const ce=O({joinWith:"&"}),de=(e,{modifiers:t={}}={})=>{const i=ce({...t,hide_border:"true"});return{url:z("https://github-readme-stats.vercel.app",e+(i?"?"+i:""))}},ue=Object.freeze(Object.defineProperty({__proto__:null,getImage:de},Symbol.toStringTag,{value:"Module"})),le=O({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>W(e)+"_"+W(t)}),fe=(e,{modifiers:t={},baseURL:i}={},r)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=le(t)||"_";return i||(i=z(r.options.nuxt.baseURL,"/_ipx")),{url:z(i,s,D(e))}},ge=!0,he=!0,me=Object.freeze(Object.defineProperty({__proto__:null,getImage:fe,supportsAlias:he,validateDomains:ge},Symbol.toStringTag,{value:"Module"})),B={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};B.providers={GithubStatus:{provider:ue,defaults:void 0},ipxStatic:{provider:me,defaults:{}}};const H=()=>{const e=L(),t=N();return t.$img||t._img||(t._img=te({...B,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))};function pe(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const ve={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},ye=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),i=y(()=>({width:v(e.width),height:v(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),r=H(),s=y(()=>({...e.modifiers,width:v(e.width),height:v(e.height),format:e.format,quality:e.quality||r.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:i,modifiers:s}},we={...ve,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1},custom:{type:Boolean,required:!1}},Se=["src"],_e=R({__name:"NuxtImg",props:we,emits:["load","error"],setup(e,{emit:t}){const i=e,r=G(),s=t,n=!1,o=H(),c=ye(i),d=A(!1),u=A(),l=y(()=>o.getSizes(i.src,{...c.options.value,sizes:i.sizes,densities:i.densities,modifiers:{...c.modifiers.value,width:v(i.width),height:v(i.height)}})),h=y(()=>{const a={...c.attrs.value,"data-nuxt-img":""};return(!i.placeholder||d.value)&&(a.sizes=l.value.sizes,a.srcset=l.value.srcset),a}),m=y(()=>{let a=i.placeholder;if(a===""&&(a=!0),!a||d.value)return!1;if(typeof a=="string")return a;const f=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return o(i.src,{...c.modifiers.value,width:f[0],height:f[1],quality:f[2]||50,blur:f[3]||3},c.options.value)}),S=y(()=>i.sizes?l.value.src:o(i.src,c.modifiers.value,c.options.value)),b=y(()=>m.value?m.value:S.value),_=N().isHydrating;return C(()=>{if(m.value||i.custom){const a=new Image;S.value&&(a.src=S.value),i.sizes&&(a.sizes=l.value.sizes||"",a.srcset=l.value.srcset),a.onload=f=>{d.value=!0,s("load",f)},a.onerror=f=>{s("error",f)},pe("nuxt-image");return}u.value&&(u.value.complete&&_&&(u.value.getAttribute("data-error")?s("error",new Event("error")):s("load",new Event("load"))),u.value.onload=a=>{s("load",a)},u.value.onerror=a=>{s("error",a)})}),(a,f)=>a.custom?J(a.$slots,"default",V(I({key:1},{...q(n)?{onerror:"this.setAttribute('data-error', 1)"}:{},imgAttrs:{...h.value,...q(r)},isLoaded:d.value,src:b.value}))):(Q(),F("img",I({key:0,ref_key:"imgEl",ref:u,class:m.value&&!d.value?a.placeholderClass:void 0},{...q(n)?{onerror:"this.setAttribute('data-error', 1)"}:{},...h.value,...q(r)},{src:b.value}),null,16,Se))}});export{_e as _};
