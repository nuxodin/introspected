/*! (c) Andrea Giammarchi - @WebReflection - ISC License */
var Introspected=(t=>{"use strict";function n(t,n,o){const r=n.length,s=Array(r);for(let e=0;e<r;e++)c(t,s,o,e,n[e]);return e(t,s,o)}function o(t,n,o){const r=d(n),s=r.length,i=f(null);for(let e,u=0;u<s;u++)c(t,i,o,e=r[u],n[e]);return e(t,i,o)}function e(t,n,o){const e={_:r(n),$:o,O:t};return g.set(n,e),e}function c(t,e,c,r,s){if(O(s))e[r]=(g.get(s)||n(t,s,c.concat(r)))._;else if("object"==typeof s&&null!=s){const n=p(s)===i?s.toJSON():s;e[r]="[object Date]"===u.call(n)?n:(g.get(n)||o(t,n,c.concat(r)))._}else e[r]=s}function r(t){return O(t)?a(t,$):new Proxy(t,S)}function s(t,n){const o=null==t;if(o||p(t)!==i&&!g.has(t)){const r=o||!O(t)?f(null):[],s=e(function(t){const n=this.$.concat(t);s.O.$.forEach(t=>t(s._,n))},r,l);return s.O.$=new Set,o||d(t).forEach(n=>c(s.O,r,l,n,t[n])),n&&(s.O.$.add(n),n(s._,[])),s._}return n&&(g.get(t.toJSON()).O.$.add(n),n(t,[])),t}const i=s.prototype;const u=t.prototype.toString;const f=t.create;const a=t.defineProperties;const l=[];const h=()=>"";const p=t.getPrototypeOf;const O=Array.isArray;const d=t.keys;const y=Symbol.toPrimitive;const g=new WeakMap;const $=["copyWithin","fill","pop","push","reverse","shift","sort","splice","unshift"].reduce((t,n)=>{const o=l[n];o&&(t[n]={value(){const t=o.apply(this,arguments),n=this.length,e=g.get(this);for(let t=0;t<n;t++){const n=this[t];"object"==typeof n&&null!=n&&c(e.O,this,e.$,t,n)}return e.O(l),t}});return t},{});const S={deleteProperty(t,n){n in t&&delete t[n]&&g.has(t)&&g.get(t).O(n)},getPrototypeOf(){return i},has(t,n){return n in t},get(t,n){switch(!0){case n in t:return t[n];case n===y:case"toString"===n:return h;case"toJSON"===n:return()=>t;default:const o=g.get(t);return t[n]=e(o.O,f(null),o.$.concat(n))._}},set(t,n,o){if((n in t?t[n]:void 0)!==o){const e=g.get(t);c(e.O,t,e.$,n,o),e.O(n)}return!0}};s.observe=s;s.pathValue=((t,n)=>n.reduce((t,n)=>t&&n in t?t[n]:void 0,t));return s})(Object);try{module.exports=Introspected}catch(t){}