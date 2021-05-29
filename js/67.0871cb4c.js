(self["webpackChunkcare"]=self["webpackChunkcare"]||[]).push([[67],{1499:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(5462);const o=class{};var r=function(e,t,a,n){function o(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,r){function s(e){try{l(n.next(e))}catch(t){r(t)}}function i(e){try{l(n["throw"](e))}catch(t){r(t)}}function l(e){e.done?a(e.value):o(e.value).then(s,i)}l((n=n.apply(e,t||[])).next())}))};class s extends o{constructor(){super(...arguments),this.baseUrl="https://my.tanda.co/api/v2"}getDepartments(){return r(this,void 0,void 0,(function*(){const e=yield n.Z.get(`${this.baseUrl}/departments`);return e.sort(((e,t)=>{const a=e.name.toUpperCase(),n=t.name.toUpperCase();return a<n?-1:a>n?1:0}))}))}getPublicHolidays(e){return r(this,void 0,void 0,(function*(){const t=yield n.Z.get(`${this.baseUrl}/public_holidays?regions=au_nsw&years=${e.join(",")}`);return t["au_nsw"]}))}getUsers(){return r(this,void 0,void 0,(function*(){const e=yield n.Z.get(`${this.baseUrl}/users`);return e.sort(((e,t)=>{const a=e.name.toUpperCase(),n=t.name.toUpperCase();return a<n?-1:a>n?1:0}))}))}getUserShifts(e){return r(this,void 0,void 0,(function*(){const t=parseInt(e.from.substring(0,4),10),a=parseInt(e.to.substring(0,4),10),o=[t];t!=a&&o.push(a);const r=yield this.getPublicHolidays(o),s=yield n.Z.get(`${this.baseUrl}/shifts`,{user_ids:[e.user_id],from:e.from,to:e.to});return s.filter((e=>"APPROVED"===e.status&&null===e.leave_request_id&&e.start&&e.finish)).map((e=>{const t=new Date(Date.parse(e.date)),a=t.getDay(),n=Math.round(10*e.allowances.reduce(((e,t)=>e+t.value),0))/10,o=e.breaks.map((e=>e.finish-e.start)).reduce(((e,t)=>e+t),0),s=Math.round((e.finish-e.start-o)/360)/10,i=r.findIndex((t=>t.date===e.date))>=0;return{date:e.date,weekday:!i&&1<=a&&a<=5?s:0,saturday:i||6!==a?0:s,sunday:i||0!==a?0:s,holiday:i?s:0,total:s,mileage:n}})).reduce(((e,t)=>{let a=e.find((e=>e.date===t.date));return a?(a.weekday=Math.round(10*(a.weekday+t.weekday))/10,a.saturday=Math.round(10*(a.saturday+t.saturday))/10,a.sunday=Math.round(10*(a.sunday+t.sunday))/10,a.holiday=Math.round(10*(a.holiday+t.holiday))/10,a.total=Math.round(10*(a.total+t.total))/10,a.mileage=Math.round(10*(a.mileage+t.mileage))/10):(a=Object.assign({},t),e.push(a)),e}),[]).sort(((e,t)=>{const a=new Date(Date.parse(e.date)),n=new Date(Date.parse(t.date));return a<n?-1:a>n?1:0}))}))}getDepartmentShifts(e){return r(this,void 0,void 0,(function*(){const t=yield n.Z.get(`${this.baseUrl}/shifts`,{from:e.from,to:e.to});return t.filter((t=>t.department_id===e.department_id&&"APPROVED"===t.status&&null===t.leave_request_id&&t.start&&t.finish)).map((e=>{const t=Math.round(10*e.allowances.reduce(((e,t)=>e+t.value),0))/10,a=e.breaks.map((e=>e.finish-e.start)).reduce(((e,t)=>e+t),0),n=Math.round((e.finish-e.start-a)/360)/10;return{date:e.date,hours:n,mileage:t}})).filter((e=>e.hours>0)).reduce(((e,t)=>{let a=e.find((e=>e.date===t.date));return a?(a.hours=Math.round(10*(a.hours+t.hours))/10,a.mileage=Math.round(10*(a.mileage+t.mileage))/10):(a=Object.assign({},t),e.push(a)),e}),[]).sort(((e,t)=>{const a=new Date(Date.parse(e.date)),n=new Date(Date.parse(t.date));return a<n?-1:a>n?1:0}))}))}}const i=new s},6067:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>H});a(107);var n=a(3673),o=a(8880),r=a(2323);const s={class:"row",style:{"margin-bottom":"15px"}},i={class:"col",style:{"padding-right":"10px"}},l=(0,n.Uk)(" No results "),u={class:"col",style:{"padding-left":"10px"}},d={class:"row items-center justify-end"},c=(0,n.Uk)("Summary");function m(e,t,a,m,p,h){const f=(0,n.up)("q-item-section"),v=(0,n.up)("q-item"),g=(0,n.up)("q-select"),w=(0,n.up)("q-btn"),y=(0,n.up)("q-date"),b=(0,n.up)("q-popup-proxy"),_=(0,n.up)("q-icon"),Z=(0,n.up)("q-input"),W=(0,n.up)("q-form"),D=(0,n.up)("q-td"),x=(0,n.up)("q-tr"),k=(0,n.up)("q-table"),U=(0,n.up)("q-card-section"),q=(0,n.up)("q-card"),M=(0,n.up)("q-page"),Q=(0,n.Q2)("close-popup");return(0,n.wg)(),(0,n.j4)(M,{class:"items-center justify-evenly",style:{padding:"40px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(U,null,{default:(0,n.w5)((()=>[(0,n.Wm)(W,{style:{width:"100%"},onSubmit:(0,o.iM)(e.onSubmit,["stop"])},{default:(0,n.w5)((()=>[(0,n.Wm)("div",s,[(0,n.Wm)("div",i,[(0,n.Wm)(g,{modelValue:e.department,"onUpdate:modelValue":t[1]||(t[1]=t=>e.department=t),label:"Client",options:e.options,style:{width:"100%"}},{"no-option":(0,n.w5)((()=>[(0,n.Wm)(v,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f,{class:"text-grey"},{default:(0,n.w5)((()=>[l])),_:1})])),_:1})])),_:1},8,["modelValue","options"])]),(0,n.Wm)("div",u,[(0,n.Wm)(Z,{label:"Date Range *","model-value":e.dateRangeFormatted},{append:(0,n.w5)((()=>[(0,n.Wm)(_,{name:"event",class:"cursor-pointer"},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{"transition-show":"scale","transition-hide":"scale"},{default:(0,n.w5)((()=>[(0,n.Wm)(y,{range:"",modelValue:e.dateRange,"onUpdate:modelValue":t[2]||(t[2]=t=>e.dateRange=t),mask:"YYYY-MM-DD"},{default:(0,n.w5)((()=>[(0,n.Wm)("div",d,[(0,n.wy)((0,n.Wm)(w,{label:"Close",color:"primary",flat:""},null,512),[[Q]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["model-value"])])]),(0,n.Wm)(w,{label:"Load Timesheet",type:"submit",color:"primary",loading:e.loading,disable:!e.canSubmit},null,8,["loading","disable"])])),_:1},8,["onSubmit"]),(0,n.Wm)(k,{style:{"margin-top":"30px"},rows:e.rows,"row-key":"name",title:"Timesheet",color:"primary",loading:e.loading,"hide-pagination":!0,pagination:{rowsPerPage:100}},(0,n.Nv)({_:2},[e.rows.length>0?{name:"top-right",fn:(0,n.w5)((()=>[(0,n.Wm)(w,{color:"primary","icon-right":"archive",label:"Export to csv","no-caps":"",onClick:e.exportTable},null,8,["onClick"])]))}:void 0,e.rows.length>0?{name:"top-row",fn:(0,n.w5)((()=>[(0,n.Wm)(x,{style:{background:"#eee","font-weight":"bold"}},{default:(0,n.w5)((()=>[(0,n.Wm)(D,null,{default:(0,n.w5)((()=>[c])),_:1}),(0,n.Wm)(D,{class:"text-right"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(Math.round(10*e.rows.reduce(((e,t)=>e+t.hours),0))/10),1)])),_:1}),(0,n.Wm)(D,{class:"text-right"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(Math.round(10*e.rows.reduce(((e,t)=>e+t.mileage),0))/10),1)])),_:1})])),_:1})]))}:void 0]),1032,["rows","loading"])])),_:1})])),_:1})])),_:1})}var p=a(1959),h=a(1499),f=a(2841),v=a(8825),g=a(5998),w=function(e,t,a,n){function o(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,r){function s(e){try{l(n.next(e))}catch(t){r(t)}}function i(e){try{l(n["throw"](e))}catch(t){r(t)}}function l(e){e.done?a(e.value):o(e.value).then(s,i)}l((n=n.apply(e,t||[])).next())}))};const y=(0,n.aZ)({components:{},setup(){const e=(0,v.Z)(),t=(0,p.iH)(!1),a=(0,p.iH)({from:"",to:""}),o=(0,p.iH)(null),r=(0,p.iH)([]),s=(0,n.Fl)((()=>{var e,t,n,o;return(null===(e=a.value)||void 0===e?void 0:e.from)&&(null===(t=a.value)||void 0===t?void 0:t.to)?`${null===(n=a.value)||void 0===n?void 0:n.from} - ${null===(o=a.value)||void 0===o?void 0:o.to}`:""})),i=(0,n.Fl)((()=>a.value.from&&a.value.to));h.Z.getDepartments().then((e=>{r.value=e.map((e=>({label:e.name,value:e.id})))})).catch((e=>{console.log(e)}));const l=(0,p.iH)([]);function u(){var e;return w(this,void 0,void 0,(function*(){t.value=!0;try{const n=a.value.from.replace(/\//g,"-"),r=a.value.to.replace(/\//g,"-"),s=yield h.Z.getDepartmentShifts({department_id:null===(e=o.value)||void 0===e?void 0:e.value,from:n,to:r});l.value=s}finally{setTimeout((()=>{t.value=!1}),500)}}))}function d(){var t;const n=["date","hours","mileage"],r={fields:n},s=new g.Parser(r),i=s.parse(l.value),u=(0,f.Z)(`${null===(t=o.value)||void 0===t?void 0:t.label}_${a.value.from}_${a.value.to}.csv`,i,"text/csv");!0!==u&&e.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}return{loading:t,department:o,dateRange:a,dateRangeFormatted:s,options:r,rows:l,canSubmit:i,onSubmit:u,exportTable:d}}});var b=a(4379),_=a(151),Z=a(5589),W=a(5269),D=a(1900),x=a(3414),k=a(2035),U=a(4842),q=a(4554),M=a(3944),Q=a(3124),P=a(4607),C=a(2659),S=a(8186),$=a(3884),R=a(677),T=a(7518),V=a.n(T);y.render=m;const H=y;V()(y,"components",{QPage:b.Z,QCard:_.Z,QCardSection:Z.Z,QForm:W.Z,QSelect:D.Z,QItem:x.Z,QItemSection:k.Z,QInput:U.Z,QIcon:q.Z,QPopupProxy:M.Z,QDate:Q.Z,QBtn:P.Z,QTable:C.Z,QTr:S.Z,QTd:$.Z}),V()(y,"directives",{ClosePopup:R.Z})}}]);