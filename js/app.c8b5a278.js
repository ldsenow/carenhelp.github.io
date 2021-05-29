(()=>{"use strict";var e={3044:(e,t,n)=>{n(5363),n(71);var r=n(8880),o=n(9592),a=n(921);const i={config:{loadingBar:{color:"primary",size:"3px"}},plugins:{LoadingBar:a.Z}};var s=n(3673);function c(e,t,n,r,o,a){const i=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(i)}const l=(0,s.aZ)({name:"App"});l.render=c;const u=l;var d=n(8879),h=n(7083),p=n(9582);const f=[{path:"/",component:()=>Promise.all([n.e(736),n.e(497)]).then(n.bind(n,2497)),children:[{name:"home",path:"",component:()=>Promise.all([n.e(736),n.e(472)]).then(n.bind(n,8472))}]},{path:"/login",component:()=>Promise.all([n.e(736),n.e(519)]).then(n.bind(n,6519)),children:[{name:"login",path:"",component:()=>Promise.all([n.e(736),n.e(323)]).then(n.bind(n,1323))}],meta:{allowAnonymous:!0}},{path:"/payrolls",component:()=>Promise.all([n.e(736),n.e(497)]).then(n.bind(n,2497)),children:[{name:"payrolls",path:"",component:()=>Promise.all([n.e(736),n.e(904)]).then(n.bind(n,2904))}]},{path:"/invoices",component:()=>Promise.all([n.e(736),n.e(497)]).then(n.bind(n,2497)),children:[{name:"invoices",path:"",component:()=>Promise.all([n.e(736),n.e(67)]).then(n.bind(n,6067))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([n.e(736),n.e(519)]).then(n.bind(n,6519)),children:[{path:"",component:()=>Promise.all([n.e(736),n.e(989)]).then(n.bind(n,8989))}]}],m=f,v=(0,h.BC)((function({store:e}){const t=p.PO,n=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:t("/")});return n.beforeEach(((t,n,r)=>{a.Z.start();const o=e.state.auth.authenticated||null!=window.localStorage.getItem("access_token");t.meta.allowAnonymous||o?r():r("login")})),n.afterEach((()=>{a.Z.stop()})),n}));async function y(e){const t="function"===typeof d.default?await(0,d.default)({}):d.default,{storeKey:r}=await Promise.resolve().then(n.bind(n,8879)),a="function"===typeof v?await v({store:t}):v;t.$router=a;const s=e(u);return s.use(o.Z,i),{app:s,store:t,storeKey:r,router:a}}const g="/";async function b({app:e,router:t,store:n,storeKey:r},o){let a=!1;const i=e=>{a=!0;const n=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=n},s=window.location.href.replace(window.location.origin,"");for(let l=0;!1===a&&l<o.length;l++)try{await o[l]({app:e,router:t,store:n,ssrContext:null,redirect:i,urlPath:s,publicPath:g})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(n,r),e.mount("#q-app"))}y(r.ri).then((e=>Promise.all([Promise.resolve().then(n.bind(n,3545))]).then((t=>{const n=t.map((e=>e.default)).filter((e=>"function"===typeof e));b(e,n)}))))},3545:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(7083),o=n(8500),a=n(317);const i=(0,r.xr)((()=>{(0,o.aH)("required",a.C1),(0,o.aH)("email",a.Do),(0,o.aH)("min",a.VV)}))},5462:(e,t,n)=>{n.d(t,{Z:()=>a});var r=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function s(e){try{c(r["throw"](e))}catch(t){a(t)}}function c(e){e.done?n(e.value):o(e.value).then(i,s)}c((r=r.apply(e,t||[])).next())}))};class o{constructor(){this.get=(e,t={})=>r(this,void 0,void 0,(function*(){const n=this.buildHeaders();let r=e;t&&(r=`${r}?${this.objectToQuerystring(t)}`);const o=yield fetch(r,{method:"GET",headers:n});return o.json()})),this.post=(e,t={})=>r(this,void 0,void 0,(function*(){const n=this.buildHeaders(),r=yield fetch(e,{method:"POST",headers:n,body:JSON.stringify(t)});return r.json()}))}objectToQuerystring(e){return Object.keys(e).map((t=>{const n=e[t];if("undefined"===typeof n)return null;let r="";if(n instanceof Array){if(0===n.length)return null;r=n.join(",")}else r=n instanceof String?n:n instanceof Number?n.toString():String(n);return`${encodeURIComponent(t)}=${encodeURIComponent(r)}`})).filter((e=>e)).join("&")}buildHeaders(){const e={"Content-Type":"application/json"},t=window.localStorage.getItem("access_token");return t&&(e["Authorization"]=`Bearer ${t}`),e}}const a=new o},8879:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y,storeKey:()=>v,useStore:()=>g});var r=n(7083),o=n(7874);function a(){return{authenticated:!1}}const i=a;var s=n(5462);const c={login({commit:e},t){return s.Z.post("https://my.tanda.co/api/oauth/token",{username:t.username,password:t.password,scope:"timesheet department user leave",grant_type:"password"}).then((t=>{t.access_token&&(window.localStorage.setItem("access_token",t.access_token),e("success"))}))}},l=c,u={someAction(){}},d=u,h={success(e){e.authenticated=!0}},p=h,f={namespaced:!0,actions:l,getters:d,mutations:p,state:i},m=f,v=Symbol("vuex-key"),y=(0,r.h)((function(){const e=(0,o.MT)({modules:{auth:m},strict:!1});return e}));function g(){return(0,o.oR)(v)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(l=0;l<e.length;l++){for(var[r,o,a]=e[l],s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(s=!1,a<i&&(i=a));s&&(e.splice(l--,1),t=o())}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{67:"0871cb4c",323:"c0246e86",472:"d8abf17e",497:"f354c208",519:"7937ad2a",904:"d1d82efc",989:"40e32908"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{497:"1e5f0ccf",519:"1e5f0ccf",736:"0d743f82"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="care:";n.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var h=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/"})(),(()=>{var e=(e,t,n,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=r=>new Promise(((o,a)=>{var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,o,a)})),o={143:0};n.f.miniCss=(e,t)=>{var n={497:1,519:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,c=r=>{if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,s,c]=r,l=0;for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n);for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[i[l]]=0;return n.O(u)},r=self["webpackChunkcare"]=self["webpackChunkcare"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[736],(()=>n(3044)));r=n.O(r)})();