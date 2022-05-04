(self["webpackChunknfi_todo"]=self["webpackChunknfi_todo"]||[]).push([[998],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return u},G6:function(){return w},L:function(){return a},LL:function(){return T},Mn:function(){return v},Sg:function(){return l},X3:function(){return q},ZR:function(){return E},b$:function(){return m},d:function(){return g},eu:function(){return b},hl:function(){return _},m9:function(){return F},ne:function(){return R},pd:function(){return x},ru:function(){return p},tV:function(){return c},uI:function(){return d},vZ:function(){return C},w1:function(){return y},xO:function(){return D},xb:function(){return A},z$:function(){return h},zd:function(){return O}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function f(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function p(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function g(){return h().indexOf("Electron/")>=0}function y(){const e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function v(){return h().indexOf("MSAppHost/")>=0}function w(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _(){return"object"===typeof indexedDB}function b(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I="FirebaseError";class E extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=I,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?S(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new E(r,o,n);return a}}function S(e,t){return e.replace(k,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function C(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(N(n)&&N(s)){if(!C(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function O(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function x(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){const n=new L(e,t);return n.subscribe.bind(n)}class L{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=P(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=M),void 0===r.error&&(r.error=M),void 0===r.complete&&(r.complete=M);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function P(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function M(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){return new Promise(((n,r)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;r(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class U{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new j(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new $(this._db.createObjectStore(e,t))}close(){this._db.close()}}class j{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new $(this._transaction.objectStore(e))}}class ${constructor(e){this._store=e}index(e){return new B(this._store.index(e))}createIndex(e,t,n){return new B(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return V(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return V(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return V(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return V(e,"Error clearing IndexedDB object store")}}class B{constructor(e){this._index=e}get(e){const t=this._index.get(e);return V(t,"Error reading from IndexedDB")}}function q(e,t,n){return new Promise(((r,i)=>{try{const s=indexedDB.open(e,t);s.onsuccess=e=>{r(new U(e.target.result))},s.onerror=e=>{var t;i(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},s.onupgradeneeded=e=>{n(new U(s.result),e.oldVersion,e.newVersion,new j(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}}))}},2262:function(e,t,n){"use strict";n.d(t,{Bj:function(){return s},Fl:function(){return Be},IU:function(){return Ae},Jd:function(){return E},PG:function(){return Ee},SU:function(){return Ve},Um:function(){return _e},WL:function(){return je},X$:function(){return A},X3:function(){return ke},XI:function(){return Pe},Xl:function(){return Ce},dq:function(){return Re},iH:function(){return Le},j:function(){return S},lk:function(){return T},qj:function(){return we},qq:function(){return w},yT:function(){return Se}});var r=n(3577);let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const m=30;let g;const y=Symbol(""),v=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=g,t=b;while(e){if(e===this)return;e=e.parent}try{return this.parent=g,g=this,b=!0,p=1<<++f,f<=m?l(this):_(this),this.fn()}finally{f<=m&&h(this),p=1<<--f,g=this.parent,b=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g===this?this.deferStop=!0:this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let b=!0;const I=[];function E(){I.push(b),b=!1}function T(){const e=I.pop();b=void 0===e||e}function S(e,t,n){if(b&&g){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;k(r,i)}}function k(e,t){let n=!1;f<=m?u(e)||(e.n|=p,n=!c(e)):n=!e.has(g),n&&(e.add(g),g.deps.push(e))}function A(e,t,n,i,s,o){const c=d.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&(0,r.kJ)(e))c.forEach(((e,t)=>{("length"===t||t>=i)&&u.push(e)}));else switch(void 0!==n&&u.push(c.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"delete":(0,r.kJ)(e)||(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"set":(0,r._N)(e)&&u.push(c.get(y));break}if(1===u.length)u[0]&&C(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);C(a(e))}}function C(e,t){for(const n of(0,r.kJ)(e)?e:[...e])(n!==g||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(r.yk)),O=M(),x=M(!1,!0),R=M(!0),L=P();function P(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,i=this.length;t<i;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){E();const n=Ae(this)[t].apply(this,e);return T(),n}})),e}function M(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ge:me:t?pe:fe).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(L,i))return Reflect.get(L,i,s);const a=Reflect.get(n,i,s);if((0,r.yk)(i)?D.has(i):N(i))return a;if(e||S(n,"get",i),t)return a;if(Re(a)){const e=!o||!(0,r.S0)(i);return e?a.value:a}return(0,r.Kn)(a)?e?be(a):we(a):a}}const F=U(),V=U(!0);function U(e=!1){return function(t,n,i,s){let o=t[n];if(Te(o)&&Re(o)&&!Re(i))return!1;if(!e&&!Te(i)&&(Se(i)||(i=Ae(i),o=Ae(o)),!(0,r.kJ)(t)&&Re(o)&&!Re(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Ae(s)&&(a?(0,r.aU)(i,o)&&A(t,"set",n,i,o):A(t,"add",n,i)),c}}function j(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&A(e,"delete",t,void 0,i),s}function $(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&D.has(t)||S(e,"has",t),n}function B(e){return S(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}const q={get:O,set:F,deleteProperty:j,has:$,ownKeys:B},G={get:R,set(e,t){return!0},deleteProperty(e,t){return!0}},K=(0,r.l7)({},q,{get:x,set:V}),z=e=>e,H=e=>Reflect.getPrototypeOf(e);function W(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ae(e),s=Ae(t);t!==s&&!n&&S(i,"get",t),!n&&S(i,"get",s);const{has:o}=H(i),a=r?z:n?De:Ne;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Y(e,t=!1){const n=this["__v_raw"],r=Ae(n),i=Ae(e);return e!==i&&!t&&S(r,"has",e),!t&&S(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function J(e,t=!1){return e=e["__v_raw"],!t&&S(Ae(e),"iterate",y),Reflect.get(e,"size",e)}function Q(e){e=Ae(e);const t=Ae(this),n=H(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function X(e,t){t=Ae(t);const n=Ae(this),{has:i,get:s}=H(n);let o=i.call(n,e);o||(e=Ae(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function Z(e){const t=Ae(this),{has:n,get:r}=H(t);let i=n.call(t,e);i||(e=Ae(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&A(t,"delete",e,void 0,s),o}function ee(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function te(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ae(s),a=t?z:e?De:Ne;return!e&&S(o,"iterate",y),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ne(e,t,n){return function(...i){const s=this["__v_raw"],o=Ae(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?z:t?De:Ne;return!t&&S(o,"iterate",u?v:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function re(e){return function(...t){return"delete"!==e&&this}}function ie(){const e={get(e){return W(this,e)},get size(){return J(this)},has:Y,add:Q,set:X,delete:Z,clear:ee,forEach:te(!1,!1)},t={get(e){return W(this,e,!1,!0)},get size(){return J(this)},has:Y,add:Q,set:X,delete:Z,clear:ee,forEach:te(!1,!0)},n={get(e){return W(this,e,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!1)},r={get(e){return W(this,e,!0,!0)},get size(){return J(this,!0)},has(e){return Y.call(this,e,!0)},add:re("add"),set:re("set"),delete:re("delete"),clear:re("clear"),forEach:te(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=ne(i,!1,!1),n[i]=ne(i,!0,!1),t[i]=ne(i,!1,!0),r[i]=ne(i,!0,!0)})),[e,n,t,r]}const[se,oe,ae,ce]=ie();function ue(e,t){const n=t?e?ce:ae:e?oe:se;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const le={get:ue(!1,!1)},he={get:ue(!1,!0)},de={get:ue(!0,!1)};const fe=new WeakMap,pe=new WeakMap,me=new WeakMap,ge=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ve(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,r.W7)(e))}function we(e){return Te(e)?e:Ie(e,!1,q,le,fe)}function _e(e){return Ie(e,!1,K,he,pe)}function be(e){return Ie(e,!0,G,de,me)}function Ie(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=ve(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Ee(e){return Te(e)?Ee(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Te(e){return!(!e||!e["__v_isReadonly"])}function Se(e){return!(!e||!e["__v_isShallow"])}function ke(e){return Ee(e)||Te(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Ce(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ne=e=>(0,r.Kn)(e)?we(e):e,De=e=>(0,r.Kn)(e)?be(e):e;function Oe(e){b&&g&&(e=Ae(e),k(e.dep||(e.dep=a())))}function xe(e,t){e=Ae(e),e.dep&&C(e.dep)}function Re(e){return!(!e||!0!==e.__v_isRef)}function Le(e){return Me(e,!1)}function Pe(e){return Me(e,!0)}function Me(e,t){return Re(e)?e:new Fe(e,t)}class Fe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Ne(e)}get value(){return Oe(this),this._value}set value(e){e=this.__v_isShallow?e:Ae(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ne(e),xe(this,e))}}function Ve(e){return Re(e)?e.value:e}const Ue={get:(e,t,n)=>Ve(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Re(i)&&!Re(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function je(e){return Ee(e)?e:new Proxy(e,Ue)}class $e{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,xe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return Oe(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Be(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new $e(i,s,o||!s,n);return a}},6252:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},FN:function(){return mn},Fl:function(){return On},HY:function(){return Dt},JJ:function(){return Y},Ko:function(){return an},P$:function(){return oe},Q6:function(){return de},U2:function(){return ce},Uk:function(){return Zt},Us:function(){return wt},Wm:function(){return Yt},Y3:function(){return I},Y8:function(){return re},YP:function(){return X},_:function(){return Wt},aZ:function(){return fe},f3:function(){return J},h:function(){return xn},iD:function(){return $t},ic:function(){return Ce},j4:function(){return Bt},kq:function(){return en},nK:function(){return he},up:function(){return kt},w5:function(){return j},wg:function(){return Mt},wy:function(){return ht}});var r=n(2262),i=n(3577);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=[];let y=null,v=0;const w=Promise.resolve();let _=null,b=null;function I(e){const t=_||w;return e?t.then(this?e.bind(this):e):t}function E(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=x(h[r]);i<e?t=r+1:n=r}return t}function T(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||e===b||(null==e.id?h.push(e):h.splice(E(e.id),0,e),S())}function S(){u||l||(l=!0,_=w.then(R))}function k(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function A(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),S()}function C(e){A(e,p,f,m)}function N(e){A(e,y,g,v)}function D(e,t=null){if(f.length){for(b=t,p=[...new Set(f)],f.length=0,m=0;m<p.length;m++)p[m]();p=null,m=0,b=null,D(e,t)}}function O(e){if(g.length){const e=[...new Set(g)];if(g.length=0,y)return void y.push(...e);for(y=e,y.sort(((e,t)=>x(e)-x(t))),v=0;v<y.length;v++)y[v]();y=null,v=0}}const x=e=>null==e.id?1/0:e.id;function R(e){l=!1,u=!0,D(e),h.sort(((e,t)=>x(e)-x(t)));i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,O(e),u=!1,_=null,(h.length||f.length||g.length)&&R(e)}}new Set;new Map;function L(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o?s=n.map((e=>e.trim())):t&&(s=n.map(i.He))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function P(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=P(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),r.set(e,a),a):(r.set(e,null),null)}function M(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let F=null,V=null;function U(e){const t=F;return F=e,V=e&&e.type.__scopeId||null,t}function j(e,t=F,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ut(-1);const i=U(t),s=e(...n);return U(i),r._d&&Ut(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function $(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=e;let v,w;const _=U(e);try{if(4&n.shapeFlag){const e=s||r;v=tn(d.call(e,e,f,o,m,p,g)),w=l}else{const e=t;0,v=tn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:B(l)}}catch(I){Lt.length=0,a(I,e,1),v=Yt(xt)}let b=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=b;e.length&&7&t&&(c&&e.some(i.tR)&&(w=q(w,c)),b=Xt(b,w))}return n.dirs&&(b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,U(_),v}const B=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},q=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function G(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||K(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?K(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!M(u,n))return!0}}return!1}function K(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!M(n,s))return!0}return!1}function z({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const H=e=>e.__isSuspense;function W(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):N(e)}function Y(e,t){if(pn){let n=pn.provides;const r=pn.parent&&pn.parent.provides;r===n&&(n=pn.provides=Object.create(r)),n[e]=t}else 0}function J(e,t,n=!1){const r=pn||F;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const Q={};function X(e,t,n){return Z(e,t,n)}function Z(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=pn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some(r.PG),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ne(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[g])}:i.dG,t&&a){const e=d;d=()=>ne(e())}let g=e=>{f=_.onStop=()=>{s(e,h,4)}};if(bn)return g=i.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,g]):d(),i.dG;let y=m?[]:Q;const v=()=>{if(_.active)if(t){const e=_.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(f&&f(),o(t,h,3,[e,y===Q?void 0:y,g]),y=e)}else _.run()};let w;v.allowRecurse=!!t,w="sync"===c?v:"post"===c?()=>vt(v,h&&h.suspense):()=>{!h||h.isMounted?C(v):v()};const _=new r.qq(d,w);return t?n?v():y=_.run():"post"===c?vt(_.run.bind(_),h&&h.suspense):_.run(),()=>{_.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,_)}}function ee(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?te(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=pn;gn(this);const c=Z(s,o.bind(r),n);return a?gn(a):yn(),c}function te(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ne(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ne(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ne(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ne(e,t)}));else if((0,i.PO)(e))for(const n in e)ne(e[n],t);return e}function re(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ke((()=>{e.isMounted=!0})),Ne((()=>{e.isUnmounting=!0})),e}const ie=[Function,Array],se={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ie,onEnter:ie,onAfterEnter:ie,onEnterCancelled:ie,onBeforeLeave:ie,onLeave:ie,onAfterLeave:ie,onLeaveCancelled:ie,onBeforeAppear:ie,onAppear:ie,onAfterAppear:ie,onAppearCancelled:ie},setup(e,{slots:t}){const n=mn(),i=re();let s;return()=>{const o=t.default&&de(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==xt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return ue(a);const l=le(a);if(!l)return ue(a);const h=ce(l,c,i,n);he(l,h);const d=n.subTree,f=d&&le(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==xt&&(!Gt(l,f)||p)){const e=ce(f,c,i,n);if(he(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},ue(a);"in-out"===u&&l.type!==xt&&(e.delayLeave=(e,t,n)=>{const r=ae(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},oe=se;function ae(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ce(e,t,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:v,onAppearCancelled:w}=t,_=String(e.key),b=ae(n,e),I=(e,t)=>{e&&o(e,r,9,t)},E={mode:s,persisted:a,beforeEnter(t){let r=c;if(!n.isMounted){if(!i)return;r=g||c}t._leaveCb&&t._leaveCb(!0);const s=b[_];s&&Gt(e,s)&&s.el._leaveCb&&s.el._leaveCb(),I(r,[t])},enter(e){let t=u,r=l,s=h;if(!n.isMounted){if(!i)return;t=y||u,r=v||l,s=w||h}let o=!1;const a=e._enterCb=t=>{o||(o=!0,I(t?s:r,[e]),E.delayedLeave&&E.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();I(d,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),I(n?m:p,[t]),t._leaveCb=void 0,b[i]===e&&delete b[i])};b[i]=e,f?(f(t,o),f.length<=1&&o()):o()},clone(e){return ce(e,t,n,r)}};return E}function ue(e){if(me(e))return e=Xt(e),e.children=null,e}function le(e){return me(e)?e.children?e.children[0]:void 0:e}function he(e,t){6&e.shapeFlag&&e.component?he(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function de(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Dt?(128&o.patchFlag&&i++,r=r.concat(de(o.children,t,a))):(t||o.type!==xt)&&r.push(null!=a?Xt(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function fe(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const pe=e=>!!e.type.__asyncLoader;const me=e=>e.type.__isKeepAlive;RegExp,RegExp;function ge(e,t){return(0,i.kJ)(e)?e.some((e=>ge(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function ye(e,t){we(e,"a",t)}function ve(e,t){we(e,"da",t)}function we(e,t,n=pn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Ee(t,r,n),n){let e=n.parent;while(e&&e.parent)me(e.parent.vnode)&&_e(r,t,n,e),e=e.parent}}function _e(e,t,n,r){const s=Ee(t,e,r,!0);De((()=>{(0,i.Od)(r[t],s)}),n)}function be(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Ie(e){return 128&e.shapeFlag?e.ssContent:e}function Ee(e,t,n=pn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),gn(n);const s=o(t,n,e,i);return yn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Te=e=>(t,n=pn)=>(!bn||"sp"===e)&&Ee(e,t,n),Se=Te("bm"),ke=Te("m"),Ae=Te("bu"),Ce=Te("u"),Ne=Te("bum"),De=Te("um"),Oe=Te("sp"),xe=Te("rtg"),Re=Te("rtc");function Le(e,t=pn){Ee("ec",e,t)}let Pe=!0;function Me(e){const t=je(e),n=e.proxy,s=e.ctx;Pe=!1,t.beforeCreate&&Ve(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:I,render:E,renderTracked:T,renderTriggered:S,errorCaptured:k,serverPrefetch:A,expose:C,inheritAttrs:N,components:D,directives:O,filters:x}=t,R=null;if(h&&Fe(h,s,R,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Pe=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=On({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ue(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{Y(t,e[t])}))}function L(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ve(d,e,"c"),L(Se,f),L(ke,p),L(Ae,m),L(Ce,g),L(ye,y),L(ve,v),L(Le,k),L(Re,T),L(xe,S),L(Ne,_),L(De,I),L(Oe,A),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=N&&(e.inheritAttrs=N),D&&(e.components=D),O&&(e.directives=O)}function Fe(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=Ke(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?J(n.from||o,n.default,!0):J(n.from||o):J(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Ve(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ue(e,t,n,r){const s=r.includes(".")?te(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&X(s,n)}else if((0,i.mf)(e))X(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ue(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&X(s,r,e)}else 0}function je(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>$e(c,e,o,!0))),$e(c,t,o)):c=t,s.set(t,c),c}function $e(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&$e(e,s,n,!0),i&&i.forEach((t=>$e(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Be[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Be={data:qe,props:He,emits:He,methods:He,computed:He,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:He,directives:He,watch:We,provide:qe,inject:Ge};function qe(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function Ge(e,t){return He(Ke(e),Ke(t))}function Ke(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ze(e,t){return e?[...new Set([].concat(e,t))]:t}function He(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function We(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=ze(e[r],t[r]);return n}function Ye(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Kt,1),e.propsDefaults=Object.create(null),Qe(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Je(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Qe(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Xe(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(M(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=Xe(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function Qe(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:M(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Xe(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function Xe(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(gn(s),r=i[n]=e.call(null,t),yn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function Ze(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=Ze(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);et(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(et(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=rt(Boolean,r.type),n=rt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return r.set(e,l),l}function et(e){return"$"!==e[0]}function tt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function nt(e,t){return tt(e)===tt(t)}function rt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>nt(t,e))):(0,i.mf)(t)&&nt(t,e)?0:-1}const it=e=>"_"===e[0]||"$stable"===e,st=e=>(0,i.kJ)(e)?e.map(tn):[tn(e)],ot=(e,t,n)=>{const r=j(((...e)=>st(t(...e))),n);return r._c=!1,r},at=(e,t,n)=>{const r=e._ctx;for(const s in e){if(it(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=ot(s,n,r);else if(null!=n){0;const e=st(n);t[s]=()=>e}}},ct=(e,t)=>{const n=st(t);e.slots.default=()=>n},ut=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):at(t,e.slots={})}else e.slots={},t&&ct(e,t);(0,i.Nj)(e.slots,Kt,1)},lt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,at(t,s)),a=t}else t&&(ct(e,t),a={default:1});if(o)for(const i in s)it(i)||i in a||delete s[i]};function ht(e,t){const n=F;if(null===n)return e;const r=Cn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ne(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function dt(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}function ft(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pt=0;function mt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=ft(),o=new Set;let a=!1;const c=s.app={_uid:pt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Rn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){const l=Yt(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Cn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function gt(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>gt(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(pe(o)&&!a)return;const c=4&o.shapeFlag?Cn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const s=()=>{if(e.f){const n=t?f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):(0,r.dq)(h)&&(h.value=u,e.k&&(f[e.k]=u))};u?(s.id=-1,vt(s,n)):s()}else 0}}function yt(){}const vt=W;function wt(e){return _t(e)}function _t(e,t){yt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,cloneNode:g,insertStaticContent:y}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Gt(e,t)&&(r=Z(e),W(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Ot:w(e,t,n,r);break;case xt:_(e,t,n,r);break;case Rt:null==e&&b(t,n,r,o);break;case Dt:P(e,t,n,r,i,s,o,a,c);break;default:1&h?S(e,t,n,r,i,s,o,a,c):6&h?M(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i&&gt(l,e&&e.ref,s,t||e,!t)},w=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},_=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=y(e.children,t,n,r,e.el,e.anchor)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},S=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,i,s,o,a,c):x(e,t,i,s,o,a,c)},A=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:y,shapeFlag:v,transition:w,patchFlag:_,dirs:b}=e;if(e.el&&void 0!==g&&-1===_)f=e.el=g(e.el);else{if(f=e.el=c(e.type,u,y&&y.is,y),8&v?d(f,e.children):16&v&&N(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),b&&dt(e,null,r,"created"),y){for(const t in y)"value"===t||(0,i.Gg)(t)||a(f,t,null,y[t],u,e.children,r,o,X);"value"in y&&a(f,"value",null,y.value),(p=y.onVnodeBeforeMount)&&on(p,r,e)}C(f,e,e.scopeId,l,r)}b&&dt(e,null,r,"beforeMount");const I=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;I&&w.beforeEnter(f),s(f,t,n),((p=y&&y.onVnodeMounted)||I||b)&&vt((()=>{p&&on(p,r,e),I&&w.enter(f),b&&dt(e,null,r,"mounted")}),o)},C=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?nn(e[u]):tn(e[u]);v(null,c,t,n,r,i,s,o,a)}},x=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&bt(n,!1),(g=m.onVnodeBeforeUpdate)&&on(g,n,t,e),f&&dt(t,e,n,"beforeUpdate"),n&&bt(n,!0);const y=s&&"foreignObject"!==t.type;if(h?R(e.dynamicChildren,h,u,n,r,y,o):c||B(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)L(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,X)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||L(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&vt((()=>{g&&on(g,n,t,e),f&&dt(t,e,n,"updated")}),r)},R=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Dt||!Gt(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},L=(e,t,n,r,s,o,c)=>{if(n!==r){for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,X)}if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,X);"value"in r&&a(e,"value",n.value,r.value)}},P=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),N(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(R(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&It(e,t,!0)):B(e,t,n,d,i,o,a,c,l)},M=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):V(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=fn(e,r,i);if(me(e)&&(a.ctx.renderer=te),In(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=Yt(xt);_(null,e,t,n)}}else U(a,e,t,n,i,s,o)},V=(e,t,n)=>{const r=t.component=e.component;if(G(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,k(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,bt(e,!1),n?(n.el=l.el,j(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&on(t,u,n,l),bt(e,!0);const d=$(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),Z(p),e,o,a),n.el=d.el,null===h&&z(e,d.el),s&&vt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&vt((()=>on(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=pe(t);if(bt(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&on(r,d,t),bt(e,!0),c&&re){const n=()=>{e.subTree=$(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=$(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&vt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;vt((()=>on(r,d,e)),o)}256&t.shapeFlag&&e.a&&vt(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>T(e.update)),e.scope),h=e.update=l.run.bind(l);h.id=e.uid,bt(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Je(e,t.props,i,n),lt(e,t.children,n),(0,r.Jd)(),D(void 0,e.update),(0,r.lk)()},B=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void K(u,h,n,r,i,s,o,a,c);if(256&f)return void q(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&d(n,h)):16&l?16&p?K(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&d(n,""),16&p&&N(h,n,r,i,s,o,a,c))},q=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?nn(t[f]):tn(t[f]);v(e[f],r,n,null,s,o,a,c,u)}l>h?X(e,s,o,!0,!1,d):N(t,n,r,s,o,a,c,u,d)},K=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?nn(t[l]):tn(t[l]);if(!Gt(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?nn(t[f]):tn(t[f]);if(!Gt(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)v(null,t[l]=u?nn(t[l]):tn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)W(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?nn(t[l]):tn(t[l]);null!=e.key&&g.set(e.key,l)}let y,w=0;const _=f-m+1;let b=!1,I=0;const E=new Array(_);for(l=0;l<_;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=_){W(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===E[y-m]&&Gt(r,t[y])){i=y;break}void 0===i?W(r,s,o,!0):(E[i-m]=l+1,i>=I?I=i:b=!0,v(r,t[i],n,null,s,o,a,c,u),w++)}const T=b?Et(E):i.Z6;for(y=T.length-1,l=_-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?v(null,i,n,d,s,o,a,c,u):b&&(y<0||l!==T[y]?H(i,n,d,2):y--)}}},H=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void H(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===Dt){s(o,t,n);for(let e=0;e<u.length;e++)H(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===Rt)return void I(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),vt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&gt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!pe(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&on(m,t,e),6&l)Q(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&dt(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,te,r):u&&(s!==Dt||h>0&&64&h)?X(u,t,n,!1,!0):(s===Dt&&384&h||!i&&16&l)&&X(c,t,n),r&&Y(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&vt((()=>{m&&on(m,t,e),f&&dt(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Dt)return void J(n,r);if(t===Rt)return void E(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},J=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,W(a,e,t,n)),c&&vt(c,t),vt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),O(),t._vnode=e},te={p:v,um:W,m:H,r:Y,mt:F,mc:N,pc:B,pbc:R,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:mt(ee,ne)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function It(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=nn(s[i]),t.el=e.el),n||It(e,t))}}function Et(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Tt=e=>e.__isTeleport;const St="components";function kt(e,t){return Ct(St,e,!0,t)||e}const At=Symbol();function Ct(e,t,n=!0,r=!1){const s=F||pn;if(s){const n=s.type;if(e===St){const e=Nn(n);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Nt(s[e]||n[e],t)||Nt(s.appContext[e],t);return!o&&r?n:o}}function Nt(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const Dt=Symbol(void 0),Ot=Symbol(void 0),xt=Symbol(void 0),Rt=Symbol(void 0),Lt=[];let Pt=null;function Mt(e=!1){Lt.push(Pt=e?null:[])}function Ft(){Lt.pop(),Pt=Lt[Lt.length-1]||null}let Vt=1;function Ut(e){Vt+=e}function jt(e){return e.dynamicChildren=Vt>0?Pt||i.Z6:null,Ft(),Vt>0&&Pt&&Pt.push(e),e}function $t(e,t,n,r,i,s){return jt(Wt(e,t,n,r,i,s,!0))}function Bt(e,t,n,r,i){return jt(Yt(e,t,n,r,i,!0))}function qt(e){return!!e&&!0===e.__v_isVNode}function Gt(e,t){return e.type===t.type&&e.key===t.key}const Kt="__vInternal",zt=({key:e})=>null!=e?e:null,Ht=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:F,r:e,k:t,f:!!n}:e:null;function Wt(e,t=null,n=null,r=0,s=null,o=(e===Dt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zt(t),ref:t&&Ht(t),scopeId:V,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(rn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),Vt>0&&!a&&Pt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Pt.push(u),u}const Yt=Jt;function Jt(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==At||(e=xt),qt(e)){const r=Xt(e,t,!0);return n&&rn(r,n),r}if(Dn(e)&&(e=e.__vccOpts),t){t=Qt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:H(e)?128:Tt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Wt(e,t,n,s,o,c,a,!0)}function Qt(e){return e?(0,r.X3)(e)||Kt in e?(0,i.l7)({},e):e:null}function Xt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?sn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&zt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Ht(t)):[s,Ht(t)]:Ht(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Dt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),el:e.el,anchor:e.anchor};return u}function Zt(e=" ",t=0){return Yt(Ot,null,e,t)}function en(e="",t=!1){return t?(Mt(),Bt(xt,null,e)):Yt(xt,null,e)}function tn(e){return null==e||"boolean"===typeof e?Yt(xt):(0,i.kJ)(e)?Yt(Dt,null,e.slice()):"object"===typeof e?nn(e):Yt(Ot,null,String(e))}function nn(e){return null===e.el||e.memo?e:Xt(e)}function rn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),rn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Kt in t?3===r&&F&&(1===F.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=F}}else(0,i.mf)(t)?(t={default:t,_ctx:F},n=32):(t=String(t),64&r?(n=16,t=[Zt(t)]):n=8);e.children=t,e.shapeFlag|=n}function sn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function on(e,t,n,r=null){o(e,t,7,[n,r])}function an(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const cn=e=>e?vn(e)?Cn(e)||e.proxy:cn(e.parent):null,un=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>cn(e.parent),$root:e=>cn(e.root),$emit:e=>e.emit,$options:e=>je(e),$forceUpdate:e=>()=>T(e.update),$nextTick:e=>I.bind(e.proxy),$watch:e=>ee.bind(e)}),ln={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Pe&&(c[t]=0)}}const d=un[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i.kT&&(0,i.RI)(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(un,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};const hn=ft();let dn=0;function fn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||hn,a={uid:dn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ze(s,o),emitsOptions:P(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=L.bind(null,a),e.ce&&e.ce(a),a}let pn=null;const mn=()=>pn||F,gn=e=>{pn=e,e.scope.on()},yn=()=>{pn&&pn.scope.off(),pn=null};function vn(e){return 4&e.vnode.shapeFlag}let wn,_n,bn=!1;function In(e,t=!1){bn=t;const{props:n,children:r}=e.vnode,i=vn(e);Ye(e,n,i,t),ut(e,r);const s=i?En(e,t):void 0;return bn=!1,s}function En(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,ln));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?An(e):null;gn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),yn(),(0,i.tI)(c)){if(c.then(yn,yn),t)return c.then((n=>{Tn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Tn(e,c,t)}else Sn(e,t)}function Tn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Sn(e,n)}function Sn(e,t,n){const s=e.type;if(!e.render){if(!t&&wn&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=wn(t,c)}}e.render=s.render||i.dG,_n&&_n(e)}gn(e),(0,r.Jd)(),Me(e),(0,r.lk)(),yn()}function kn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function An(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=kn(e))},slots:e.slots,emit:e.emit,expose:t}}function Cn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in un?un[n](e):void 0}}))}function Nn(e){return(0,i.mf)(e)&&e.displayName||e.name}function Dn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const On=(e,t)=>(0,r.Fl)(e,t,bn);function xn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?qt(t)?Yt(e,null,[t]):Yt(e,t):Yt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&qt(n)&&(n=[n]),Yt(e,t,n))}Symbol("");const Rn="3.2.33"},9963:function(e,t,n){"use strict";n.d(t,{YZ:function(){return he},e8:function(){return ie},nr:function(){return re},ri:function(){return ge}});var r=n(3577),i=n(6252);n(2262);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?o.createElementNS(s,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function l(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)d(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const f=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function v(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}const[w,_]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let b=0;const I=Promise.resolve(),E=()=>{b=0},T=()=>b||(I.then(E),b=w());function S(e,t,n,r){e.addEventListener(t,n,r)}function k(e,t,n,r){e.removeEventListener(t,n,r)}function A(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=N(t);if(r){const o=s[t]=D(r,i);S(e,n,o,a)}else o&&(k(e,n,o,a),s[t]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function N(e){let t;if(C.test(e)){let n;t={};while(n=e.match(C))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function D(e,t){const n=e=>{const r=e.timeStamp||w();(_||r>=n.attached-1)&&(0,i.$d)(O(e,n.value),t,5,[e])};return n.value=e,n.attached=T(),n}function O(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const x=/^on[a-z]/,R=(e,t,n,i,s=!1,o,a,c,h)=>{"class"===t?u(e,i,s):"style"===t?l(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||A(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):L(e,t,i,s))?v(e,t,i,o,a,c,h):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function L(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&x.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!x.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const P="transition",M="animation",F=(e,{slots:t})=>(0,i.h)(i.P$,$(e),t);F.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=(F.props=(0,r.l7)({},i.P$.props,V),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),j=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function $(e){const t={};for(const r in e)r in V||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=B(s),g=m&&m[0],y=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:_,onLeave:b,onLeaveCancelled:I,onBeforeAppear:E=v,onAppear:T=w,onAppearCancelled:S=_}=t,k=(e,t,n)=>{K(e,t?h:c),K(e,t?l:a),n&&n()},A=(e,t)=>{K(e,p),K(e,f),t&&t()},C=e=>(t,n)=>{const r=e?T:w,s=()=>k(t,e,n);U(r,[t,s]),z((()=>{K(t,e?u:o),G(t,e?h:c),j(r)||W(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){U(v,[e]),G(e,o),G(e,a)},onBeforeAppear(e){U(E,[e]),G(e,u),G(e,l)},onEnter:C(!1),onAppear:C(!0),onLeave(e,t){const n=()=>A(e,t);G(e,d),X(),G(e,f),z((()=>{K(e,d),G(e,p),j(b)||W(e,i,y,n)})),U(b,[e,n])},onEnterCancelled(e){k(e,!1),U(_,[e])},onAppearCancelled(e){k(e,!0),U(S,[e])},onLeaveCancelled(e){A(e),U(I,[e])}})}function B(e){if(null==e)return null;if((0,r.Kn)(e))return[q(e.enter),q(e.leave)];{const t=q(e);return[t,t]}}function q(e){const t=(0,r.He)(e);return t}function G(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function K(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function z(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let H=0;function W(e,t,n,r){const i=e._endId=++H,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Y(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function Y(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(P+"Delay"),s=r(P+"Duration"),o=J(i,s),a=r(M+"Delay"),c=r(M+"Duration"),u=J(a,c);let l=null,h=0,d=0;t===P?o>0&&(l=P,h=o,d=s.length):t===M?u>0&&(l=M,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?P:M:null,d=l?l===P?s.length:c.length:0);const f=l===P&&/\b(transform|all)(,|$)/.test(n[P+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function J(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Q(t)+Q(e[n]))))}function Q(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=e=>{const t=e.props["onUpdate:modelValue"];return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,ne(t,"input"))}function ne(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const re={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=Z(s);const o=i||s.props&&"number"===s.props.type;S(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():o&&(i=(0,r.He)(i)),e._assign(i)})),n&&S(e,"change",(()=>{e.value=e.value.trim()})),t||(S(e,"compositionstart",ee),S(e,"compositionend",te),S(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=Z(o),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},ie={deep:!0,created(e,t,n){e._assign=Z(n),S(e,"change",(()=>{const t=e._modelValue,n=ue(e),i=e.checked,s=e._assign;if((0,r.kJ)(t)){const e=(0,r.hq)(t,n),o=-1!==e;if(i&&!o)s(t.concat(n));else if(!i&&o){const n=[...t];n.splice(e,1),s(n)}}else if((0,r.DM)(t)){const e=new Set(t);i?e.add(n):e.delete(n),s(e)}else s(le(e,i))}))},mounted:se,beforeUpdate(e,t,n){e._assign=Z(n),se(e,t,n)}};function se(e,{value:t,oldValue:n},i){e._modelValue=t,(0,r.kJ)(t)?e.checked=(0,r.hq)(t,i.props.value)>-1:(0,r.DM)(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=(0,r.WV)(t,le(e,!0)))}const oe={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=Z(n),S(e,"change",(()=>{e._assign(ue(e))}))},beforeUpdate(e,{value:t,oldValue:n},i){e._assign=Z(i),t!==n&&(e.checked=(0,r.WV)(t,i.props.value))}},ae={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=(0,r.DM)(t);S(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.He)(ue(e)):ue(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=Z(i)},mounted(e,{value:t}){ce(e,t)},beforeUpdate(e,t,n){e._assign=Z(n)},updated(e,{value:t}){ce(e,t)}};function ce(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,s=e.options.length;i<s;i++){const s=e.options[i],o=ue(s);if(n)(0,r.kJ)(t)?s.selected=(0,r.hq)(t,o)>-1:s.selected=t.has(o);else if((0,r.WV)(ue(s),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function ue(e){return"_value"in e?e._value:e.value}function le(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const he={created(e,t,n){de(e,t,n,null,"created")},mounted(e,t,n){de(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){de(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){de(e,t,n,r,"updated")}};function de(e,t,n,r,i){let s;switch(e.tagName){case"SELECT":s=ae;break;case"TEXTAREA":s=re;break;default:switch(n.props&&n.props.type){case"checkbox":s=ie;break;case"radio":s=oe;break;default:s=re}}const o=s[i];o&&o(e,t,n,r)}const fe=(0,r.l7)({patchProp:R},c);let pe;function me(){return pe||(pe=(0,i.Us)(fe))}const ge=(...e)=>{const t=me().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ye(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ye(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},3577:function(e,t,n){"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return f},DM:function(){return x},E9:function(){return re},F7:function(){return T},Gg:function(){return G},HD:function(){return P},He:function(){return te},Kn:function(){return F},NO:function(){return I},Nj:function(){return ee},Od:function(){return A},PO:function(){return B},Pq:function(){return a},RI:function(){return N},S0:function(){return q},W7:function(){return $},WV:function(){return m},Z6:function(){return _},_A:function(){return H},_N:function(){return O},aU:function(){return X},dG:function(){return b},e1:function(){return s},fY:function(){return r},hR:function(){return Q},hq:function(){return g},ir:function(){return Z},j5:function(){return u},kC:function(){return J},kJ:function(){return D},kT:function(){return w},l7:function(){return k},mf:function(){return L},rs:function(){return Y},tI:function(){return V},tR:function(){return S},yA:function(){return c},yk:function(){return M},zw:function(){return y}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function u(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=P(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return P(e)||F(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(P(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=R(e),r=R(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=D(e),r=D(t),n||r)return!(!n||!r)&&p(e,t);if(n=F(e),r=F(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const y=e=>P(e)?e:null==e?"":D(e)||F(e)&&(e.toString===U||!L(e.toString))?JSON.stringify(e,v,2):String(e),v=(e,t)=>t&&t.__v_isRef?v(e,t.value):O(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:x(t)?{[`Set(${t.size})`]:[...t.values()]}:!F(t)||D(t)||B(t)?t:String(t),w={},_=[],b=()=>{},I=()=>!1,E=/^on[^a-z]/,T=e=>E.test(e),S=e=>e.startsWith("onUpdate:"),k=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},C=Object.prototype.hasOwnProperty,N=(e,t)=>C.call(e,t),D=Array.isArray,O=e=>"[object Map]"===j(e),x=e=>"[object Set]"===j(e),R=e=>e instanceof Date,L=e=>"function"===typeof e,P=e=>"string"===typeof e,M=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,V=e=>F(e)&&L(e.then)&&L(e.catch),U=Object.prototype.toString,j=e=>U.call(e),$=e=>j(e).slice(8,-1),B=e=>"[object Object]"===j(e),q=e=>P(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,G=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},z=/-(\w)/g,H=K((e=>e.replace(z,((e,t)=>t?t.toUpperCase():"")))),W=/\B([A-Z])/g,Y=K((e=>e.replace(W,"-$1").toLowerCase())),J=K((e=>e.charAt(0).toUpperCase()+e.slice(1))),Q=K((e=>e?`on${J(e)}`:"")),X=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},5577:function(e){
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=1e6,t=1e3,n="transitionend",r=e=>null===e||void 0===e?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),i=t=>{do{t+=Math.floor(Math.random()*e)}while(document.getElementById(t));return t},s=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},o=e=>{const t=s(e);return t&&document.querySelector(t)?t:null},a=e=>{const t=s(e);return t?document.querySelector(t):null},c=e=>{if(!e)return 0;let{transitionDuration:n,transitionDelay:r}=window.getComputedStyle(e);const i=Number.parseFloat(n),s=Number.parseFloat(r);return i||s?(n=n.split(",")[0],r=r.split(",")[0],(Number.parseFloat(n)+Number.parseFloat(r))*t):0},u=e=>{e.dispatchEvent(new Event(n))},l=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),h=e=>l(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,d=(e,t,n)=>{Object.keys(n).forEach((i=>{const s=n[i],o=t[i],a=o&&l(o)?"element":r(o);if(!new RegExp(s).test(a))throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${a}" but expected type "${s}".`)}))},f=e=>!(!l(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),p=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),m=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?m(e.parentNode):null},g=()=>{},y=e=>{e.offsetHeight},v=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},w=[],_=e=>{"loading"===document.readyState?(w.length||document.addEventListener("DOMContentLoaded",(()=>{w.forEach((e=>e()))})),w.push(e)):e()},b=()=>"rtl"===document.documentElement.dir,I=e=>{_((()=>{const t=v();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}}))},E=e=>{"function"===typeof e&&e()},T=(e,t,r=!0)=>{if(!r)return void E(e);const i=5,s=c(t)+i;let o=!1;const a=({target:r})=>{r===t&&(o=!0,t.removeEventListener(n,a),E(e))};t.addEventListener(n,a),setTimeout((()=>{o||u(t)}),s)},S=(e,t,n,r)=>{let i=e.indexOf(t);if(-1===i)return e[!n&&r?e.length-1:0];const s=e.length;return i+=n?1:-1,r&&(i=(i+s)%s),e[Math.max(0,Math.min(i,s-1))]},k=/[^.]*(?=\..*)\.|.*/,A=/\..*/,C=/::\d+$/,N={};let D=1;const O={mouseenter:"mouseover",mouseleave:"mouseout"},x=/^(mouseenter|mouseleave)/i,R=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function L(e,t){return t&&`${t}::${D++}`||e.uidEvent||D++}function P(e){const t=L(e);return e.uidEvent=t,N[t]=N[t]||{},N[t]}function M(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&G.off(e,r.type,t),t.apply(e,[r])}}function F(e,t,n){return function r(i){const s=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return i.delegateTarget=o,r.oneOff&&G.off(e,i.type,t,n),n.apply(o,[i]);return null}}function V(e,t,n=null){const r=Object.keys(e);for(let i=0,s=r.length;i<s;i++){const s=e[r[i]];if(s.originalHandler===t&&s.delegationSelector===n)return s}return null}function U(e,t,n){const r="string"===typeof t,i=r?n:t;let s=q(e);const o=R.has(s);return o||(s=e),[r,i,s]}function j(e,t,n,r,i){if("string"!==typeof t||!e)return;if(n||(n=r,r=null),x.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};r?r=e(r):n=e(n)}const[s,o,a]=U(t,n,r),c=P(e),u=c[a]||(c[a]={}),l=V(u,o,s?n:null);if(l)return void(l.oneOff=l.oneOff&&i);const h=L(o,t.replace(k,"")),d=s?F(e,n,r):M(e,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=i,d.uidEvent=h,u[h]=d,e.addEventListener(a,d,s)}function $(e,t,n,r,i){const s=V(t[n],r,i);s&&(e.removeEventListener(n,s,Boolean(i)),delete t[n][s.uidEvent])}function B(e,t,n,r){const i=t[n]||{};Object.keys(i).forEach((s=>{if(s.includes(r)){const r=i[s];$(e,t,n,r.originalHandler,r.delegationSelector)}}))}function q(e){return e=e.replace(A,""),O[e]||e}const G={on(e,t,n,r){j(e,t,n,r,!1)},one(e,t,n,r){j(e,t,n,r,!0)},off(e,t,n,r){if("string"!==typeof t||!e)return;const[i,s,o]=U(t,n,r),a=o!==t,c=P(e),u=t.startsWith(".");if("undefined"!==typeof s){if(!c||!c[o])return;return void $(e,c,o,s,i?n:null)}u&&Object.keys(c).forEach((n=>{B(e,c,n,t.slice(1))}));const l=c[o]||{};Object.keys(l).forEach((n=>{const r=n.replace(C,"");if(!a||t.includes(r)){const t=l[n];$(e,c,o,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,n){if("string"!==typeof t||!e)return null;const r=v(),i=q(t),s=t!==i,o=R.has(i);let a,c=!0,u=!0,l=!1,h=null;return s&&r&&(a=r.Event(t,n),r(e).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),l=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(i,c,!0)):h=new CustomEvent(t,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach((e=>{Object.defineProperty(h,e,{get(){return n[e]}})})),l&&h.preventDefault(),u&&e.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},K=new Map,z={set(e,t,n){K.has(e)||K.set(e,new Map);const r=K.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return K.has(e)&&K.get(e).get(t)||null},remove(e,t){if(!K.has(e))return;const n=K.get(e);n.delete(t),0===n.size&&K.delete(e)}},H="5.1.3";class W{constructor(e){e=h(e),e&&(this._element=e,z.set(this._element,this.constructor.DATA_KEY,this))}dispose(){z.remove(this._element,this.constructor.DATA_KEY),G.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){T(e,t,n)}static getInstance(e){return z.get(h(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return H}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const Y=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;G.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),p(this))return;const i=a(this)||this.closest(`.${r}`),s=e.getOrCreateInstance(i);s[t]()}))},J="alert",Q="bs.alert",X=`.${Q}`,Z=`close${X}`,ee=`closed${X}`,te="fade",ne="show";class re extends W{static get NAME(){return J}close(){const e=G.trigger(this._element,Z);if(e.defaultPrevented)return;this._element.classList.remove(ne);const t=this._element.classList.contains(te);this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),G.trigger(this._element,ee),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=re.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}Y(re,"close"),I(re);const ie="button",se="bs.button",oe=`.${se}`,ae=".data-api",ce="active",ue='[data-bs-toggle="button"]',le=`click${oe}${ae}`;class he extends W{static get NAME(){return ie}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ce))}static jQueryInterface(e){return this.each((function(){const t=he.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function de(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function fe(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}G.on(document,le,ue,(e=>{e.preventDefault();const t=e.target.closest(ue),n=he.getOrCreateInstance(t);n.toggle()})),I(he);const pe={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${fe(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${fe(t)}`)},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter((e=>e.startsWith("bs"))).forEach((n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=de(e.dataset[n])})),t},getDataAttribute(e,t){return de(e.getAttribute(`data-bs-${fe(t)}`))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},me=3,ge={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let r=e.parentNode;while(r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==me)r.matches(t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(t,e).filter((e=>!p(e)&&f(e)))}},ye="carousel",ve="bs.carousel",we=`.${ve}`,_e=".data-api",be="ArrowLeft",Ie="ArrowRight",Ee=500,Te=40,Se={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},ke={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Ae="next",Ce="prev",Ne="left",De="right",Oe={[be]:De,[Ie]:Ne},xe=`slide${we}`,Re=`slid${we}`,Le=`keydown${we}`,Pe=`mouseenter${we}`,Me=`mouseleave${we}`,Fe=`touchstart${we}`,Ve=`touchmove${we}`,Ue=`touchend${we}`,je=`pointerdown${we}`,$e=`pointerup${we}`,Be=`dragstart${we}`,qe=`load${we}${_e}`,Ge=`click${we}${_e}`,Ke="carousel",ze="active",He="slide",We="carousel-item-end",Ye="carousel-item-start",Je="carousel-item-next",Qe="carousel-item-prev",Xe="pointer-event",Ze=".active",et=".active.carousel-item",tt=".carousel-item",nt=".carousel-item img",rt=".carousel-item-next, .carousel-item-prev",it=".carousel-indicators",st="[data-bs-target]",ot="[data-bs-slide], [data-bs-slide-to]",at='[data-bs-ride="carousel"]',ct="touch",ut="pen";class lt extends W{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=ge.findOne(it,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Se}static get NAME(){return ye}next(){this._slide(Ae)}nextWhenVisible(){!document.hidden&&f(this._element)&&this.next()}prev(){this._slide(Ce)}pause(e){e||(this._isPaused=!0),ge.findOne(rt,this._element)&&(u(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=ge.findOne(et,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void G.one(this._element,Re,(()=>this.to(e)));if(t===e)return this.pause(),void this.cycle();const n=e>t?Ae:Ce;this._slide(n,this._items[e])}_getConfig(e){return e={...Se,...pe.getDataAttributes(this._element),..."object"===typeof e?e:{}},d(ye,e,ke),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=Te)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?De:Ne)}_addEventListeners(){this._config.keyboard&&G.on(this._element,Le,(e=>this._keydown(e))),"hover"===this._config.pause&&(G.on(this._element,Pe,(e=>this.pause(e))),G.on(this._element,Me,(e=>this.cycle(e)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&(e.pointerType===ut||e.pointerType===ct),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},r=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((e=>this.cycle(e)),Ee+this._config.interval))};ge.find(nt,this._element).forEach((e=>{G.on(e,Be,(e=>e.preventDefault()))})),this._pointerEvent?(G.on(this._element,je,(e=>t(e))),G.on(this._element,$e,(e=>r(e))),this._element.classList.add(Xe)):(G.on(this._element,Fe,(e=>t(e))),G.on(this._element,Ve,(e=>n(e))),G.on(this._element,Ue,(e=>r(e))))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Oe[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?ge.find(tt,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===Ae;return S(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),r=this._getItemIndex(ge.findOne(et,this._element));return G.trigger(this._element,xe,{relatedTarget:e,direction:t,from:r,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=ge.findOne(Ze,this._indicatorsElement);t.classList.remove(ze),t.removeAttribute("aria-current");const n=ge.find(st,this._indicatorsElement);for(let r=0;r<n.length;r++)if(Number.parseInt(n[r].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[r].classList.add(ze),n[r].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||ge.findOne(et,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),r=ge.findOne(et,this._element),i=this._getItemIndex(r),s=t||this._getItemByOrder(n,r),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===Ae,u=c?Ye:We,l=c?Je:Qe,h=this._orderToDirection(n);if(s&&s.classList.contains(ze))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(s,h);if(d.defaultPrevented)return;if(!r||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{G.trigger(this._element,Re,{relatedTarget:s,direction:h,from:i,to:o})};if(this._element.classList.contains(He)){s.classList.add(l),y(s),r.classList.add(u),s.classList.add(u);const e=()=>{s.classList.remove(u,l),s.classList.add(ze),r.classList.remove(ze,l,u),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(e,r,!0)}else r.classList.remove(ze),s.classList.add(ze),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(e){return[De,Ne].includes(e)?b()?e===Ne?Ce:Ae:e===Ne?Ae:Ce:e}_orderToDirection(e){return[Ae,Ce].includes(e)?b()?e===Ce?Ne:De:e===Ce?De:Ne:e}static carouselInterface(e,t){const n=lt.getOrCreateInstance(e,t);let{_config:r}=n;"object"===typeof t&&(r={...r,...t});const i="string"===typeof t?t:r.slide;if("number"===typeof t)n.to(t);else if("string"===typeof i){if("undefined"===typeof n[i])throw new TypeError(`No method named "${i}"`);n[i]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){lt.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=a(this);if(!t||!t.classList.contains(Ke))return;const n={...pe.getDataAttributes(t),...pe.getDataAttributes(this)},r=this.getAttribute("data-bs-slide-to");r&&(n.interval=!1),lt.carouselInterface(t,n),r&&lt.getInstance(t).to(r),e.preventDefault()}}G.on(document,Ge,ot,lt.dataApiClickHandler),G.on(window,qe,(()=>{const e=ge.find(at);for(let t=0,n=e.length;t<n;t++)lt.carouselInterface(e[t],lt.getInstance(e[t]))})),I(lt);const ht="collapse",dt="bs.collapse",ft=`.${dt}`,pt=".data-api",mt={toggle:!0,parent:null},gt={toggle:"boolean",parent:"(null|element)"},yt=`show${ft}`,vt=`shown${ft}`,wt=`hide${ft}`,_t=`hidden${ft}`,bt=`click${ft}${pt}`,It="show",Et="collapse",Tt="collapsing",St="collapsed",kt=`:scope .${Et} .${Et}`,At="collapse-horizontal",Ct="width",Nt="height",Dt=".collapse.show, .collapse.collapsing",Ot='[data-bs-toggle="collapse"]';class xt extends W{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=ge.find(Ot);for(let r=0,i=n.length;r<i;r++){const e=n[r],t=o(e),i=ge.find(t).filter((e=>e===this._element));null!==t&&i.length&&(this._selector=t,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return mt}static get NAME(){return ht}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=ge.find(kt,this._config.parent);t=ge.find(Dt,this._config.parent).filter((t=>!e.includes(t)))}const n=ge.findOne(this._selector);if(t.length){const r=t.find((e=>n!==e));if(e=r?xt.getInstance(r):null,e&&e._isTransitioning)return}const r=G.trigger(this._element,yt);if(r.defaultPrevented)return;t.forEach((t=>{n!==t&&xt.getOrCreateInstance(t,{toggle:!1}).hide(),e||z.set(t,dt,null)}));const i=this._getDimension();this._element.classList.remove(Et),this._element.classList.add(Tt),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Tt),this._element.classList.add(Et,It),this._element.style[i]="",G.trigger(this._element,vt)},o=i[0].toUpperCase()+i.slice(1),a=`scroll${o}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=G.trigger(this._element,wt);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,y(this._element),this._element.classList.add(Tt),this._element.classList.remove(Et,It);const n=this._triggerArray.length;for(let i=0;i<n;i++){const e=this._triggerArray[i],t=a(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Tt),this._element.classList.add(Et),G.trigger(this._element,_t)};this._element.style[t]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains(It)}_getConfig(e){return e={...mt,...pe.getDataAttributes(this._element),...e},e.toggle=Boolean(e.toggle),e.parent=h(e.parent),d(ht,e,gt),e}_getDimension(){return this._element.classList.contains(At)?Ct:Nt}_initializeChildren(){if(!this._config.parent)return;const e=ge.find(kt,this._config.parent);ge.find(Ot,this._config.parent).filter((t=>!e.includes(t))).forEach((e=>{const t=a(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}))}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach((e=>{t?e.classList.remove(St):e.classList.add(St),e.setAttribute("aria-expanded",t)}))}static jQueryInterface(e){return this.each((function(){const t={};"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=xt.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}G.on(document,bt,Ot,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=o(this),n=ge.find(t);n.forEach((e=>{xt.getOrCreateInstance(e,{toggle:!1}).toggle()}))})),I(xt);var Rt="top",Lt="bottom",Pt="right",Mt="left",Ft="auto",Vt=[Rt,Lt,Pt,Mt],Ut="start",jt="end",$t="clippingParents",Bt="viewport",qt="popper",Gt="reference",Kt=Vt.reduce((function(e,t){return e.concat([t+"-"+Ut,t+"-"+jt])}),[]),zt=[].concat(Vt,[Ft]).reduce((function(e,t){return e.concat([t,t+"-"+Ut,t+"-"+jt])}),[]),Ht="beforeRead",Wt="read",Yt="afterRead",Jt="beforeMain",Qt="main",Xt="afterMain",Zt="beforeWrite",en="write",tn="afterWrite",nn=[Ht,Wt,Yt,Jt,Qt,Xt,Zt,en,tn];function rn(e){return e?(e.nodeName||"").toLowerCase():null}function sn(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function on(e){var t=sn(e).Element;return e instanceof t||e instanceof Element}function an(e){var t=sn(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function cn(e){if("undefined"===typeof ShadowRoot)return!1;var t=sn(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function un(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];an(i)&&rn(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function ln(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});an(r)&&rn(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}const hn={name:"applyStyles",enabled:!0,phase:"write",fn:un,effect:ln,requires:["computeStyles"]};function dn(e){return e.split("-")[0]}function fn(e,t){var n=e.getBoundingClientRect(),r=1,i=1;return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function pn(e){var t=fn(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function mn(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&cn(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function gn(e){return sn(e).getComputedStyle(e)}function yn(e){return["table","td","th"].indexOf(rn(e))>=0}function vn(e){return((on(e)?e.ownerDocument:e.document)||window.document).documentElement}function wn(e){return"html"===rn(e)?e:e.assignedSlot||e.parentNode||(cn(e)?e.host:null)||vn(e)}function _n(e){return an(e)&&"fixed"!==gn(e).position?e.offsetParent:null}function bn(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&an(e)){var r=gn(e);if("fixed"===r.position)return null}var i=wn(e);while(an(i)&&["html","body"].indexOf(rn(i))<0){var s=gn(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function In(e){var t=sn(e),n=_n(e);while(n&&yn(n)&&"static"===gn(n).position)n=_n(n);return n&&("html"===rn(n)||"body"===rn(n)&&"static"===gn(n).position)?t:n||bn(e)||t}function En(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var Tn=Math.max,Sn=Math.min,kn=Math.round;function An(e,t,n){return Tn(e,Sn(t,n))}function Cn(){return{top:0,right:0,bottom:0,left:0}}function Nn(e){return Object.assign({},Cn(),e)}function Dn(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var On=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,Nn("number"!==typeof e?e:Dn(e,Vt))};function xn(e){var t,n=e.state,r=e.name,i=e.options,s=n.elements.arrow,o=n.modifiersData.popperOffsets,a=dn(n.placement),c=En(a),u=[Mt,Pt].indexOf(a)>=0,l=u?"height":"width";if(s&&o){var h=On(i.padding,n),d=pn(s),f="y"===c?Rt:Mt,p="y"===c?Lt:Pt,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],g=o[c]-n.rects.reference[c],y=In(s),v=y?"y"===c?y.clientHeight||0:y.clientWidth||0:0,w=m/2-g/2,_=h[f],b=v-d[l]-h[p],I=v/2-d[l]/2+w,E=An(_,I,b),T=c;n.modifiersData[r]=(t={},t[T]=E,t.centerOffset=E-I,t)}}function Rn(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&mn(t.elements.popper,i)&&(t.elements.arrow=i)}const Ln={name:"arrow",enabled:!0,phase:"main",fn:xn,effect:Rn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Pn(e){return e.split("-")[1]}var Mn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Fn(e){var t=e.x,n=e.y,r=window,i=r.devicePixelRatio||1;return{x:kn(kn(t*i)/i)||0,y:kn(kn(n*i)/i)||0}}function Vn(e){var t,n=e.popper,r=e.popperRect,i=e.placement,s=e.variation,o=e.offsets,a=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,h=!0===l?Fn(o):"function"===typeof l?l(o):o,d=h.x,f=void 0===d?0:d,p=h.y,m=void 0===p?0:p,g=o.hasOwnProperty("x"),y=o.hasOwnProperty("y"),v=Mt,w=Rt,_=window;if(u){var b=In(n),I="clientHeight",E="clientWidth";b===sn(n)&&(b=vn(n),"static"!==gn(b).position&&"absolute"===a&&(I="scrollHeight",E="scrollWidth")),i!==Rt&&(i!==Mt&&i!==Pt||s!==jt)||(w=Lt,m-=b[I]-r.height,m*=c?1:-1),i!==Mt&&(i!==Rt&&i!==Lt||s!==jt)||(v=Pt,f-=b[E]-r.width,f*=c?1:-1)}var T,S=Object.assign({position:a},u&&Mn);return c?Object.assign({},S,(T={},T[w]=y?"0":"",T[v]=g?"0":"",T.transform=(_.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",T)):Object.assign({},S,(t={},t[w]=y?m+"px":"",t[v]=g?f+"px":"",t.transform="",t))}function Un(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,u={placement:dn(t.placement),variation:Pn(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Vn(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Vn(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const jn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Un,data:{}};var $n={passive:!0};function Bn(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=sn(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach((function(e){e.addEventListener("scroll",n.update,$n)})),a&&c.addEventListener("resize",n.update,$n),function(){s&&u.forEach((function(e){e.removeEventListener("scroll",n.update,$n)})),a&&c.removeEventListener("resize",n.update,$n)}}const qn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Bn,data:{}};var Gn={left:"right",right:"left",bottom:"top",top:"bottom"};function Kn(e){return e.replace(/left|right|bottom|top/g,(function(e){return Gn[e]}))}var zn={start:"end",end:"start"};function Hn(e){return e.replace(/start|end/g,(function(e){return zn[e]}))}function Wn(e){var t=sn(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Yn(e){return fn(vn(e)).left+Wn(e).scrollLeft}function Jn(e){var t=sn(e),n=vn(e),r=t.visualViewport,i=n.clientWidth,s=n.clientHeight,o=0,a=0;return r&&(i=r.width,s=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=r.offsetLeft,a=r.offsetTop)),{width:i,height:s,x:o+Yn(e),y:a}}function Qn(e){var t,n=vn(e),r=Wn(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=Tn(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Tn(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Yn(e),c=-r.scrollTop;return"rtl"===gn(i||n).direction&&(a+=Tn(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Xn(e){var t=gn(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Zn(e){return["html","body","#document"].indexOf(rn(e))>=0?e.ownerDocument.body:an(e)&&Xn(e)?e:Zn(wn(e))}function er(e,t){var n;void 0===t&&(t=[]);var r=Zn(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=sn(r),o=i?[s].concat(s.visualViewport||[],Xn(r)?r:[]):r,a=t.concat(o);return i?a:a.concat(er(wn(o)))}function tr(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function nr(e){var t=fn(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function rr(e,t){return t===Bt?tr(Jn(e)):an(t)?nr(t):tr(Qn(vn(e)))}function ir(e){var t=er(wn(e)),n=["absolute","fixed"].indexOf(gn(e).position)>=0,r=n&&an(e)?In(e):e;return on(r)?t.filter((function(e){return on(e)&&mn(e,r)&&"body"!==rn(e)})):[]}function sr(e,t,n){var r="clippingParents"===t?ir(e):[].concat(t),i=[].concat(r,[n]),s=i[0],o=i.reduce((function(t,n){var r=rr(e,n);return t.top=Tn(r.top,t.top),t.right=Sn(r.right,t.right),t.bottom=Sn(r.bottom,t.bottom),t.left=Tn(r.left,t.left),t}),rr(e,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function or(e){var t,n=e.reference,r=e.element,i=e.placement,s=i?dn(i):null,o=i?Pn(i):null,a=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(s){case Rt:t={x:a,y:n.y-r.height};break;case Lt:t={x:a,y:n.y+n.height};break;case Pt:t={x:n.x+n.width,y:c};break;case Mt:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=s?En(s):null;if(null!=u){var l="y"===u?"height":"width";switch(o){case Ut:t[u]=t[u]-(n[l]/2-r[l]/2);break;case jt:t[u]=t[u]+(n[l]/2-r[l]/2);break}}return t}function ar(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=void 0===r?e.placement:r,s=n.boundary,o=void 0===s?$t:s,a=n.rootBoundary,c=void 0===a?Bt:a,u=n.elementContext,l=void 0===u?qt:u,h=n.altBoundary,d=void 0!==h&&h,f=n.padding,p=void 0===f?0:f,m=Nn("number"!==typeof p?p:Dn(p,Vt)),g=l===qt?Gt:qt,y=e.rects.popper,v=e.elements[d?g:l],w=sr(on(v)?v:v.contextElement||vn(e.elements.popper),o,c),_=fn(e.elements.reference),b=or({reference:_,element:y,strategy:"absolute",placement:i}),I=tr(Object.assign({},y,b)),E=l===qt?I:_,T={top:w.top-E.top+m.top,bottom:E.bottom-w.bottom+m.bottom,left:w.left-E.left+m.left,right:E.right-w.right+m.right},S=e.modifiersData.offset;if(l===qt&&S){var k=S[i];Object.keys(T).forEach((function(e){var t=[Pt,Lt].indexOf(e)>=0?1:-1,n=[Rt,Lt].indexOf(e)>=0?"y":"x";T[e]+=k[n]*t}))}return T}function cr(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?zt:c,l=Pn(r),h=l?a?Kt:Kt.filter((function(e){return Pn(e)===l})):Vt,d=h.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=h);var f=d.reduce((function(t,n){return t[n]=ar(e,{placement:n,boundary:i,rootBoundary:s,padding:o})[dn(n)],t}),{});return Object.keys(f).sort((function(e,t){return f[e]-f[t]}))}function ur(e){if(dn(e)===Ft)return[];var t=Kn(e);return[Hn(e),t,Hn(t)]}function lr(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,s=void 0===i||i,o=n.altAxis,a=void 0===o||o,c=n.fallbackPlacements,u=n.padding,l=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,p=void 0===f||f,m=n.allowedAutoPlacements,g=t.options.placement,y=dn(g),v=y===g,w=c||(v||!p?[Kn(g)]:ur(g)),_=[g].concat(w).reduce((function(e,n){return e.concat(dn(n)===Ft?cr(t,{placement:n,boundary:l,rootBoundary:h,padding:u,flipVariations:p,allowedAutoPlacements:m}):n)}),[]),b=t.rects.reference,I=t.rects.popper,E=new Map,T=!0,S=_[0],k=0;k<_.length;k++){var A=_[k],C=dn(A),N=Pn(A)===Ut,D=[Rt,Lt].indexOf(C)>=0,O=D?"width":"height",x=ar(t,{placement:A,boundary:l,rootBoundary:h,altBoundary:d,padding:u}),R=D?N?Pt:Mt:N?Lt:Rt;b[O]>I[O]&&(R=Kn(R));var L=Kn(R),P=[];if(s&&P.push(x[C]<=0),a&&P.push(x[R]<=0,x[L]<=0),P.every((function(e){return e}))){S=A,T=!1;break}E.set(A,P)}if(T)for(var M=p?3:1,F=function(e){var t=_.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return S=t,"break"},V=M;V>0;V--){var U=F(V);if("break"===U)break}t.placement!==S&&(t.modifiersData[r]._skip=!0,t.placement=S,t.reset=!0)}}const hr={name:"flip",enabled:!0,phase:"main",fn:lr,requiresIfExists:["offset"],data:{_skip:!1}};function dr(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function fr(e){return[Rt,Pt,Lt,Mt].some((function(t){return e[t]>=0}))}function pr(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=ar(t,{elementContext:"reference"}),a=ar(t,{altBoundary:!0}),c=dr(o,r),u=dr(a,i,s),l=fr(c),h=fr(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}const mr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:pr};function gr(e,t,n){var r=dn(e),i=[Mt,Rt].indexOf(r)>=0?-1:1,s="function"===typeof n?n(Object.assign({},t,{placement:e})):n,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[Mt,Pt].indexOf(r)>=0?{x:a,y:o}:{x:o,y:a}}function yr(e){var t=e.state,n=e.options,r=e.name,i=n.offset,s=void 0===i?[0,0]:i,o=zt.reduce((function(e,n){return e[n]=gr(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,u=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=o}const vr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:yr};function wr(e){var t=e.state,n=e.name;t.modifiersData[n]=or({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const _r={name:"popperOffsets",enabled:!0,phase:"read",fn:wr,data:{}};function br(e){return"x"===e?"y":"x"}function Ir(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,s=void 0===i||i,o=n.altAxis,a=void 0!==o&&o,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,h=n.padding,d=n.tether,f=void 0===d||d,p=n.tetherOffset,m=void 0===p?0:p,g=ar(t,{boundary:c,rootBoundary:u,padding:h,altBoundary:l}),y=dn(t.placement),v=Pn(t.placement),w=!v,_=En(y),b=br(_),I=t.modifiersData.popperOffsets,E=t.rects.reference,T=t.rects.popper,S="function"===typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,k={x:0,y:0};if(I){if(s||a){var A="y"===_?Rt:Mt,C="y"===_?Lt:Pt,N="y"===_?"height":"width",D=I[_],O=I[_]+g[A],x=I[_]-g[C],R=f?-T[N]/2:0,L=v===Ut?E[N]:T[N],P=v===Ut?-T[N]:-E[N],M=t.elements.arrow,F=f&&M?pn(M):{width:0,height:0},V=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Cn(),U=V[A],j=V[C],$=An(0,E[N],F[N]),B=w?E[N]/2-R-$-U-S:L-$-U-S,q=w?-E[N]/2+R+$+j+S:P+$+j+S,G=t.elements.arrow&&In(t.elements.arrow),K=G?"y"===_?G.clientTop||0:G.clientLeft||0:0,z=t.modifiersData.offset?t.modifiersData.offset[t.placement][_]:0,H=I[_]+B-z-K,W=I[_]+q-z;if(s){var Y=An(f?Sn(O,H):O,D,f?Tn(x,W):x);I[_]=Y,k[_]=Y-D}if(a){var J="x"===_?Rt:Mt,Q="x"===_?Lt:Pt,X=I[b],Z=X+g[J],ee=X-g[Q],te=An(f?Sn(Z,H):Z,X,f?Tn(ee,W):ee);I[b]=te,k[b]=te-X}}t.modifiersData[r]=k}}const Er={name:"preventOverflow",enabled:!0,phase:"main",fn:Ir,requiresIfExists:["offset"]};function Tr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Sr(e){return e!==sn(e)&&an(e)?Tr(e):Wn(e)}function kr(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}function Ar(e,t,n){void 0===n&&(n=!1);var r=an(t);an(t)&&kr(t);var i=vn(t),s=fn(e),o={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(r||!r&&!n)&&(("body"!==rn(t)||Xn(i))&&(o=Sr(t)),an(t)?(a=fn(t),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=Yn(i))),{x:s.left+o.scrollLeft-a.x,y:s.top+o.scrollTop-a.y,width:s.width,height:s.height}}function Cr(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function Nr(e){var t=Cr(e);return nn.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function Dr(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function Or(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var xr={placement:"bottom",modifiers:[],strategy:"absolute"};function Rr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Lr(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?xr:i;return function(e,t,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},xr,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:on(e)?er(e):e.contextElement?er(e.contextElement):[],popper:er(t)};var a=Nr(Or([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),u(),c.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(Rr(t,n)){i.rects={reference:Ar(t,In(n),"fixed"===i.options.strategy),popper:pn(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,u=s.options,l=void 0===u?{}:u,h=s.name;"function"===typeof o&&(i=o({state:i,options:l,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:Dr((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){l(),a=!0}};if(!Rr(e,t))return c;function u(){i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:i,name:t,instance:c,options:r}),u=function(){};o.push(a||u)}}))}function l(){o.forEach((function(e){return e()})),o=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var Pr=Lr(),Mr=[qn,_r,jn,hn],Fr=Lr({defaultModifiers:Mr}),Vr=[qn,_r,jn,hn,vr,hr,Er,Ln,mr],Ur=Lr({defaultModifiers:Vr});const jr=Object.freeze({__proto__:null,popperGenerator:Lr,detectOverflow:ar,createPopperBase:Pr,createPopper:Ur,createPopperLite:Fr,top:Rt,bottom:Lt,right:Pt,left:Mt,auto:Ft,basePlacements:Vt,start:Ut,end:jt,clippingParents:$t,viewport:Bt,popper:qt,reference:Gt,variationPlacements:Kt,placements:zt,beforeRead:Ht,read:Wt,afterRead:Yt,beforeMain:Jt,main:Qt,afterMain:Xt,beforeWrite:Zt,write:en,afterWrite:tn,modifierPhases:nn,applyStyles:hn,arrow:Ln,computeStyles:jn,eventListeners:qn,flip:hr,hide:mr,offset:vr,popperOffsets:_r,preventOverflow:Er}),$r="dropdown",Br="bs.dropdown",qr=`.${Br}`,Gr=".data-api",Kr="Escape",zr="Space",Hr="Tab",Wr="ArrowUp",Yr="ArrowDown",Jr=2,Qr=new RegExp(`${Wr}|${Yr}|${Kr}`),Xr=`hide${qr}`,Zr=`hidden${qr}`,ei=`show${qr}`,ti=`shown${qr}`,ni=`click${qr}${Gr}`,ri=`keydown${qr}${Gr}`,ii=`keyup${qr}${Gr}`,si="show",oi="dropup",ai="dropend",ci="dropstart",ui="navbar",li='[data-bs-toggle="dropdown"]',hi=".dropdown-menu",di=".navbar-nav",fi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",pi=b()?"top-end":"top-start",mi=b()?"top-start":"top-end",gi=b()?"bottom-end":"bottom-start",yi=b()?"bottom-start":"bottom-end",vi=b()?"left-start":"right-start",wi=b()?"right-start":"left-start",_i={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},bi={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Ii extends W{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return _i}static get DefaultType(){return bi}static get NAME(){return $r}toggle(){return this._isShown()?this.hide():this.show()}show(){if(p(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element},t=G.trigger(this._element,ei,e);if(t.defaultPrevented)return;const n=Ii.getParentFromElement(this._element);this._inNavbar?pe.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(di)&&[].concat(...document.body.children).forEach((e=>G.on(e,"mouseover",g))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(si),this._element.classList.add(si),G.trigger(this._element,ti,e)}hide(){if(p(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=G.trigger(this._element,Xr,e);t.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>G.off(e,"mouseover",g))),this._popper&&this._popper.destroy(),this._menu.classList.remove(si),this._element.classList.remove(si),this._element.setAttribute("aria-expanded","false"),pe.removeDataAttribute(this._menu,"popper"),G.trigger(this._element,Zr,e))}_getConfig(e){if(e={...this.constructor.Default,...pe.getDataAttributes(this._element),...e},d($r,e,this.constructor.DefaultType),"object"===typeof e.reference&&!l(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${$r.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if("undefined"===typeof jr)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:l(this._config.reference)?t=h(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),r=n.modifiers.find((e=>"applyStyles"===e.name&&!1===e.enabled));this._popper=Ur(t,this._menu,n),r&&pe.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(si)}_getMenuElement(){return ge.next(this._element,hi)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(ai))return vi;if(e.classList.contains(ci))return wi;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(oi)?t?mi:pi:t?yi:gi}_detectNavbar(){return null!==this._element.closest(`.${ui}`)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=ge.find(fi,this._menu).filter(f);n.length&&S(n,t,e===Yr,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=Ii.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(e.button===Jr||"keyup"===e.type&&e.key!==Hr))return;const t=ge.find(li);for(let n=0,r=t.length;n<r;n++){const r=Ii.getInstance(t[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const i={relatedTarget:r._element};if(e){const t=e.composedPath(),n=t.includes(r._menu);if(t.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(e.target)&&("keyup"===e.type&&e.key===Hr||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(i.clickEvent=e)}r._completeHide(i)}}static getParentFromElement(e){return a(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===zr||e.key!==Kr&&(e.key!==Yr&&e.key!==Wr||e.target.closest(hi)):!Qr.test(e.key))return;const t=this.classList.contains(si);if(!t&&e.key===Kr)return;if(e.preventDefault(),e.stopPropagation(),p(this))return;const n=this.matches(li)?this:ge.prev(this,li)[0],r=Ii.getOrCreateInstance(n);if(e.key!==Kr)return e.key===Wr||e.key===Yr?(t||r.show(),void r._selectMenuItem(e)):void(t&&e.key!==zr||Ii.clearMenus());r.hide()}}G.on(document,ri,li,Ii.dataApiKeydownHandler),G.on(document,ri,hi,Ii.dataApiKeydownHandler),G.on(document,ni,Ii.clearMenus),G.on(document,ii,Ii.clearMenus),G.on(document,ni,li,(function(e){e.preventDefault(),Ii.getOrCreateInstance(this).toggle()})),I(Ii);const Ei=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ti=".sticky-top";class Si{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(t=>t+e)),this._setElementAttributes(Ei,"paddingRight",(t=>t+e)),this._setElementAttributes(Ti,"marginRight",(t=>t-e))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),i=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e)[t];e.style[t]=`${n(Number.parseFloat(i))}px`};this._applyManipulationCallback(e,i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(Ei,"paddingRight"),this._resetElementAttributes(Ti,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&pe.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=pe.getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(pe.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){l(e)?t(e):ge.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const ki={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ai={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Ci="backdrop",Ni="fade",Di="show",Oi=`mousedown.bs.${Ci}`;class xi{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&y(this._getElement()),this._getElement().classList.add(Di),this._emulateAnimation((()=>{E(e)}))):E(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(Di),this._emulateAnimation((()=>{this.dispose(),E(e)}))):E(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Ni),this._element=e}return this._element}_getConfig(e){return e={...ki,..."object"===typeof e?e:{}},e.rootElement=h(e.rootElement),d(Ci,e,Ai),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),G.on(this._getElement(),Oi,(()=>{E(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(G.off(this._element,Oi),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){T(e,this._getElement(),this._config.isAnimated)}}const Ri={trapElement:null,autofocus:!0},Li={trapElement:"element",autofocus:"boolean"},Pi="focustrap",Mi="bs.focustrap",Fi=`.${Mi}`,Vi=`focusin${Fi}`,Ui=`keydown.tab${Fi}`,ji="Tab",$i="forward",Bi="backward";class qi{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),G.off(document,Fi),G.on(document,Vi,(e=>this._handleFocusin(e))),G.on(document,Ui,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,G.off(document,Fi))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const r=ge.focusableChildren(n);0===r.length?n.focus():this._lastTabNavDirection===Bi?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===ji&&(this._lastTabNavDirection=e.shiftKey?Bi:$i)}_getConfig(e){return e={...Ri,..."object"===typeof e?e:{}},d(Pi,e,Li),e}}const Gi="modal",Ki="bs.modal",zi=`.${Ki}`,Hi=".data-api",Wi="Escape",Yi={backdrop:!0,keyboard:!0,focus:!0},Ji={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Qi=`hide${zi}`,Xi=`hidePrevented${zi}`,Zi=`hidden${zi}`,es=`show${zi}`,ts=`shown${zi}`,ns=`resize${zi}`,rs=`click.dismiss${zi}`,is=`keydown.dismiss${zi}`,ss=`mouseup.dismiss${zi}`,os=`mousedown.dismiss${zi}`,as=`click${zi}${Hi}`,cs="modal-open",us="fade",ls="show",hs="modal-static",ds=".modal.show",fs=".modal-dialog",ps=".modal-body",ms='[data-bs-toggle="modal"]';class gs extends W{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=ge.findOne(fs,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Si}static get Default(){return Yi}static get NAME(){return Gi}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=G.trigger(this._element,es,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(cs),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),G.on(this._dialog,os,(()=>{G.one(this._element,ss,(e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=G.trigger(this._element,Qi);if(e.defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(ls),G.off(this._element,rs),G.off(this._dialog,os),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((e=>G.off(e,zi))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new xi({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new qi({trapElement:this._element})}_getConfig(e){return e={...Yi,...pe.getDataAttributes(this._element),..."object"===typeof e?e:{}},d(Gi,e,Ji),e}_showElement(e){const t=this._isAnimated(),n=ge.findOne(ps,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&y(this._element),this._element.classList.add(ls);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,G.trigger(this._element,ts,{relatedTarget:e})};this._queueCallback(r,this._dialog,t)}_setEscapeEvent(){this._isShown?G.on(this._element,is,(e=>{this._config.keyboard&&e.key===Wi?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==Wi||this._triggerBackdropTransition()})):G.off(this._element,is)}_setResizeEvent(){this._isShown?G.on(window,ns,(()=>this._adjustDialog())):G.off(window,ns)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(cs),this._resetAdjustments(),this._scrollBar.reset(),G.trigger(this._element,Zi)}))}_showBackdrop(e){G.on(this._element,rs,(e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(us)}_triggerBackdropTransition(){const e=G.trigger(this._element,Xi);if(e.defaultPrevented)return;const{classList:t,scrollHeight:n,style:r}=this._element,i=n>document.documentElement.clientHeight;!i&&"hidden"===r.overflowY||t.contains(hs)||(i||(r.overflowY="hidden"),t.add(hs),this._queueCallback((()=>{t.remove(hs),i||this._queueCallback((()=>{r.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!b()||n&&!e&&b())&&(this._element.style.paddingLeft=`${t}px`),(n&&!e&&!b()||!n&&e&&b())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=gs.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}G.on(document,as,ms,(function(e){const t=a(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),G.one(t,es,(e=>{e.defaultPrevented||G.one(t,Zi,(()=>{f(this)&&this.focus()}))}));const n=ge.findOne(ds);n&&gs.getInstance(n).hide();const r=gs.getOrCreateInstance(t);r.toggle(this)})),Y(gs),I(gs);const ys="offcanvas",vs="bs.offcanvas",ws=`.${vs}`,_s=".data-api",bs=`load${ws}${_s}`,Is="Escape",Es={backdrop:!0,keyboard:!0,scroll:!1},Ts={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Ss="show",ks="offcanvas-backdrop",As=".offcanvas.show",Cs=`show${ws}`,Ns=`shown${ws}`,Ds=`hide${ws}`,Os=`hidden${ws}`,xs=`click${ws}${_s}`,Rs=`keydown.dismiss${ws}`,Ls='[data-bs-toggle="offcanvas"]';class Ps extends W{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return ys}static get Default(){return Es}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=G.trigger(this._element,Cs,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Si).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ss);const n=()=>{this._config.scroll||this._focustrap.activate(),G.trigger(this._element,Ns,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=G.trigger(this._element,Ds);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(Ss),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Si).reset(),G.trigger(this._element,Os)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...Es,...pe.getDataAttributes(this._element),..."object"===typeof e?e:{}},d(ys,e,Ts),e}_initializeBackDrop(){return new xi({className:ks,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new qi({trapElement:this._element})}_addEventListeners(){G.on(this._element,Rs,(e=>{this._config.keyboard&&e.key===Is&&this.hide()}))}static jQueryInterface(e){return this.each((function(){const t=Ps.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}G.on(document,xs,Ls,(function(e){const t=a(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),p(this))return;G.one(t,Os,(()=>{f(this)&&this.focus()}));const n=ge.findOne(As);n&&n!==t&&Ps.getInstance(n).hide();const r=Ps.getOrCreateInstance(t);r.toggle(this)})),G.on(window,bs,(()=>ge.find(As).forEach((e=>Ps.getOrCreateInstance(e).show())))),Y(Ps),I(Ps);const Ms=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Fs=/^aria-[\w-]*$/i,Vs=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Us=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,js=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!Ms.has(n)||Boolean(Vs.test(e.nodeValue)||Us.test(e.nodeValue));const r=t.filter((e=>e instanceof RegExp));for(let i=0,s=r.length;i<s;i++)if(r[i].test(n))return!0;return!1},$s={"*":["class","dir","id","lang","role",Fs],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Bs(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const r=new window.DOMParser,i=r.parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(let o=0,a=s.length;o<a;o++){const e=s[o],n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const r=[].concat(...e.attributes),i=[].concat(t["*"]||[],t[n]||[]);r.forEach((t=>{js(t,i)||e.removeAttribute(t.nodeName)}))}return i.body.innerHTML}const qs="tooltip",Gs="bs.tooltip",Ks=`.${Gs}`,zs="bs-tooltip",Hs=new Set(["sanitize","allowList","sanitizeFn"]),Ws={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Ys={AUTO:"auto",TOP:"top",RIGHT:b()?"left":"right",BOTTOM:"bottom",LEFT:b()?"right":"left"},Js={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:$s,popperConfig:null},Qs={HIDE:`hide${Ks}`,HIDDEN:`hidden${Ks}`,SHOW:`show${Ks}`,SHOWN:`shown${Ks}`,INSERTED:`inserted${Ks}`,CLICK:`click${Ks}`,FOCUSIN:`focusin${Ks}`,FOCUSOUT:`focusout${Ks}`,MOUSEENTER:`mouseenter${Ks}`,MOUSELEAVE:`mouseleave${Ks}`},Xs="fade",Zs="modal",eo="show",to="show",no="out",ro=".tooltip-inner",io=`.${Zs}`,so="hide.bs.modal",oo="hover",ao="focus",co="click",uo="manual";class lo extends W{constructor(e,t){if("undefined"===typeof jr)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return Js}static get NAME(){return qs}static get Event(){return Qs}static get DefaultType(){return Ws}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(eo))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),G.off(this._element.closest(io),so,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=G.trigger(this._element,this.constructor.Event.SHOW),t=m(this._element),n=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(ro).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const r=this.getTipElement(),s=i(this.constructor.NAME);r.setAttribute("id",s),this._element.setAttribute("aria-describedby",s),this._config.animation&&r.classList.add(Xs);const o="function"===typeof this._config.placement?this._config.placement.call(this,r,this._element):this._config.placement,a=this._getAttachment(o);this._addAttachmentClass(a);const{container:c}=this._config;z.set(r,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(c.append(r),G.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=Ur(this._element,r,this._getPopperConfig(a)),r.classList.add(eo);const u=this._resolvePossibleFunction(this._config.customClass);u&&r.classList.add(...u.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>{G.on(e,"mouseover",g)}));const l=()=>{const e=this._hoverState;this._hoverState=null,G.trigger(this._element,this.constructor.Event.SHOWN),e===no&&this._leave(null,this)},h=this.tip.classList.contains(Xs);this._queueCallback(l,this.tip,h)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==to&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),G.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=G.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;e.classList.remove(eo),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>G.off(e,"mouseover",g))),this._activeTrigger[co]=!1,this._activeTrigger[ao]=!1,this._activeTrigger[oo]=!1;const r=this.tip.classList.contains(Xs);this._queueCallback(t,this.tip,r),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(Xs,eo),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),ro)}_sanitizeAndSetContent(e,t,n){const r=ge.findOne(n,e);t||!r?this.setElementContent(r,t):r.remove()}setElementContent(e,t){if(null!==e)return l(t)?(t=h(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=Bs(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"===typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return Ys[e.toUpperCase()]}_setListeners(){const e=this._config.trigger.split(" ");e.forEach((e=>{if("click"===e)G.on(this._element,this.constructor.Event.CLICK,this._config.selector,(e=>this.toggle(e)));else if(e!==uo){const t=e===oo?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===oo?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;G.on(this._element,t,this._config.selector,(e=>this._enter(e))),G.on(this._element,n,this._config.selector,(e=>this._leave(e)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},G.on(this._element.closest(io),so,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?ao:oo]=!0),t.getTipElement().classList.contains(eo)||t._hoverState===to?t._hoverState=to:(clearTimeout(t._timeout),t._hoverState=to,t._config.delay&&t._config.delay.show?t._timeout=setTimeout((()=>{t._hoverState===to&&t.show()}),t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?ao:oo]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=no,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout((()=>{t._hoverState===no&&t.hide()}),t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=pe.getDataAttributes(this._element);return Object.keys(t).forEach((e=>{Hs.has(e)&&delete t[e]})),e={...this.constructor.Default,...t,..."object"===typeof e&&e?e:{}},e.container=!1===e.container?document.body:h(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),d(qs,e,this.constructor.DefaultType),e.sanitize&&(e.template=Bs(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map((e=>e.trim())).forEach((t=>e.classList.remove(t)))}_getBasicClassPrefix(){return zs}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=lo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}I(lo);const ho="popover",fo="bs.popover",po=`.${fo}`,mo="bs-popover",go={...lo.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},yo={...lo.DefaultType,content:"(string|element|function)"},vo={HIDE:`hide${po}`,HIDDEN:`hidden${po}`,SHOW:`show${po}`,SHOWN:`shown${po}`,INSERTED:`inserted${po}`,CLICK:`click${po}`,FOCUSIN:`focusin${po}`,FOCUSOUT:`focusout${po}`,MOUSEENTER:`mouseenter${po}`,MOUSELEAVE:`mouseleave${po}`},wo=".popover-header",_o=".popover-body";class bo extends lo{static get Default(){return go}static get NAME(){return ho}static get Event(){return vo}static get DefaultType(){return yo}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),wo),this._sanitizeAndSetContent(e,this._getContent(),_o)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return mo}static jQueryInterface(e){return this.each((function(){const t=bo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}I(bo);const Io="scrollspy",Eo="bs.scrollspy",To=`.${Eo}`,So=".data-api",ko={offset:10,method:"auto",target:""},Ao={offset:"number",method:"string",target:"(string|element)"},Co=`activate${To}`,No=`scroll${To}`,Do=`load${To}${So}`,Oo="dropdown-item",xo="active",Ro='[data-bs-spy="scroll"]',Lo=".nav, .list-group",Po=".nav-link",Mo=".nav-item",Fo=".list-group-item",Vo=`${Po}, ${Fo}, .${Oo}`,Uo=".dropdown",jo=".dropdown-toggle",$o="offset",Bo="position";class qo extends W{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,G.on(this._scrollElement,No,(()=>this._process())),this.refresh(),this._process()}static get Default(){return ko}static get NAME(){return Io}refresh(){const e=this._scrollElement===this._scrollElement.window?$o:Bo,t="auto"===this._config.method?e:this._config.method,n=t===Bo?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const r=ge.find(Vo,this._config.target);r.map((e=>{const r=o(e),i=r?ge.findOne(r):null;if(i){const e=i.getBoundingClientRect();if(e.width||e.height)return[pe[t](i).top+n,r]}return null})).filter((e=>e)).sort(((e,t)=>e[0]-t[0])).forEach((e=>{this._offsets.push(e[0]),this._targets.push(e[1])}))}dispose(){G.off(this._scrollElement,To),super.dispose()}_getConfig(e){return e={...ko,...pe.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},e.target=h(e.target)||document.documentElement,d(Io,e,Ao),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){const n=this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&("undefined"===typeof this._offsets[t+1]||e<this._offsets[t+1]);n&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=Vo.split(",").map((t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),n=ge.findOne(t.join(","),this._config.target);n.classList.add(xo),n.classList.contains(Oo)?ge.findOne(jo,n.closest(Uo)).classList.add(xo):ge.parents(n,Lo).forEach((e=>{ge.prev(e,`${Po}, ${Fo}`).forEach((e=>e.classList.add(xo))),ge.prev(e,Mo).forEach((e=>{ge.children(e,Po).forEach((e=>e.classList.add(xo)))}))})),G.trigger(this._scrollElement,Co,{relatedTarget:e})}_clear(){ge.find(Vo,this._config.target).filter((e=>e.classList.contains(xo))).forEach((e=>e.classList.remove(xo)))}static jQueryInterface(e){return this.each((function(){const t=qo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}G.on(window,Do,(()=>{ge.find(Ro).forEach((e=>new qo(e)))})),I(qo);const Go="tab",Ko="bs.tab",zo=`.${Ko}`,Ho=".data-api",Wo=`hide${zo}`,Yo=`hidden${zo}`,Jo=`show${zo}`,Qo=`shown${zo}`,Xo=`click${zo}${Ho}`,Zo="dropdown-menu",ea="active",ta="fade",na="show",ra=".dropdown",ia=".nav, .list-group",sa=".active",oa=":scope > li > .active",aa='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ca=".dropdown-toggle",ua=":scope > .dropdown-menu .active";class la extends W{static get NAME(){return Go}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ea))return;let e;const t=a(this._element),n=this._element.closest(ia);if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?oa:sa;e=ge.find(t,n),e=e[e.length-1]}const r=e?G.trigger(e,Wo,{relatedTarget:this._element}):null,i=G.trigger(this._element,Jo,{relatedTarget:e});if(i.defaultPrevented||null!==r&&r.defaultPrevented)return;this._activate(this._element,n);const s=()=>{G.trigger(e,Yo,{relatedTarget:this._element}),G.trigger(this._element,Qo,{relatedTarget:e})};t?this._activate(t,t.parentNode,s):s()}_activate(e,t,n){const r=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?ge.children(t,sa):ge.find(oa,t),i=r[0],s=n&&i&&i.classList.contains(ta),o=()=>this._transitionComplete(e,i,n);i&&s?(i.classList.remove(na),this._queueCallback(o,e,!0)):o()}_transitionComplete(e,t,n){if(t){t.classList.remove(ea);const e=ge.findOne(ua,t.parentNode);e&&e.classList.remove(ea),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(ea),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),y(e),e.classList.contains(ta)&&e.classList.add(na);let r=e.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&r.classList.contains(Zo)){const t=e.closest(ra);t&&ge.find(ca,t).forEach((e=>e.classList.add(ea))),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=la.getOrCreateInstance(this);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}G.on(document,Xo,aa,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),p(this))return;const t=la.getOrCreateInstance(this);t.show()})),I(la);const ha="toast",da="bs.toast",fa=`.${da}`,pa=`mouseover${fa}`,ma=`mouseout${fa}`,ga=`focusin${fa}`,ya=`focusout${fa}`,va=`hide${fa}`,wa=`hidden${fa}`,_a=`show${fa}`,ba=`shown${fa}`,Ia="fade",Ea="hide",Ta="show",Sa="showing",ka={animation:"boolean",autohide:"boolean",delay:"number"},Aa={animation:!0,autohide:!0,delay:5e3};class Ca extends W{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ka}static get Default(){return Aa}static get NAME(){return ha}show(){const e=G.trigger(this._element,_a);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Ia);const t=()=>{this._element.classList.remove(Sa),G.trigger(this._element,ba),this._maybeScheduleHide()};this._element.classList.remove(Ea),y(this._element),this._element.classList.add(Ta),this._element.classList.add(Sa),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Ta))return;const e=G.trigger(this._element,va);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Ea),this._element.classList.remove(Sa),this._element.classList.remove(Ta),G.trigger(this._element,wa)};this._element.classList.add(Sa),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Ta)&&this._element.classList.remove(Ta),super.dispose()}_getConfig(e){return e={...Aa,...pe.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},d(ha,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){G.on(this._element,pa,(e=>this._onInteraction(e,!0))),G.on(this._element,ma,(e=>this._onInteraction(e,!1))),G.on(this._element,ga,(e=>this._onInteraction(e,!0))),G.on(this._element,ya,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=Ca.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}Y(Ca),I(Ca);const Na={Alert:re,Button:he,Carousel:lt,Collapse:xt,Dropdown:Ii,Modal:gs,Offcanvas:Ps,Popover:bo,ScrollSpy:qo,Tab:la,Toast:Ca,Tooltip:lo};return Na}))},9662:function(e,t,n){var r=n(7854),i=n(614),s=n(6330),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a function")}},6077:function(e,t,n){var r=n(7854),i=n(614),s=r.String,o=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},9670:function(e,t,n){var r=n(7854),i=n(111),s=r.String,o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4326:function(e,t,n){var r=n(1702),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(7854),i=n(1694),s=n(614),o=n(4326),a=n(5112),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=u(e),c))?n:l?o(t):"Object"==(r=o(t))&&s(t.callee)?"Arguments":r}},7741:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(7854),i=n(614),s=n(8880),o=n(6339),a=n(3505);e.exports=function(e,t,n,c){var u=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet,d=c&&void 0!==c.name?c.name:t;return i(n)&&o(n,d,c),e===r?(l?e[t]=n:a(t,n),e):(u?!h&&e[t]&&(l=!0):delete e[t],l?e[t]=n:s(e,t,n),e)}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(e,t,n){var r=n(7293),i=n(9114);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3505),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,y=e.stat;if(l=g?r:y?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},2104:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7854),i=n(1702),s=n(7293),o=n(4326),a=r.Object,c=i("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?c(e,""):a(e)}:a},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},8340:function(e,t,n){var r=n(111),i=n(8880);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},9909:function(e,t,n){var r,i,s,o=n(8536),a=n(7854),c=n(1702),u=n(111),l=n(8880),h=n(2597),d=n(5465),f=n(6200),p=n(3501),m="Object already initialized",g=a.TypeError,y=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},w=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var _=d.state||(d.state=new y),b=c(_.get),I=c(_.has),E=c(_.set);r=function(e,t){if(I(_,e))throw new g(m);return t.facade=e,E(_,e,t),t},i=function(e){return b(_,e)||{}},s=function(e){return I(_,e)}}else{var T=f("state");p[T]=!0,r=function(e,t){if(h(e,T))throw new g(m);return t.facade=e,l(e,T,t),t},i=function(e){return h(e,T)?e[T]:{}},s=function(e){return h(e,T)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:w}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(7854),i=n(5005),s=n(614),o=n(7976),a=n(3307),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return s(t)&&o(t.prototype,c(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),s=n(2597),o=n(3070).f,a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,d=!r((function(){return 8!==o((function(){}),"length",{value:8}).length})),f=String(String).split("String"),p=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&o(e,"name",{value:t,configurable:!0}),d&&n&&s(n,"arity")&&e.length!==n.arity&&o(e,"length",{value:n.arity});var r=l(e);return s(r,"source")||(r.source=f.join("string"==typeof t?t:"")),e};Function.prototype.toString=p((function(){return i(this)&&h(this).source||c(this)}),"toString")},133:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),i=n(614),s=n(2788),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(7854),i=n(9781),s=n(4664),o=n(3353),a=n(9670),c=n(4948),u=r.TypeError,l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",p="writable";t.f=i?o?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=h(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),s)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(7854),i=n(6916),s=n(614),o=n(111),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&s(n=e.toString)&&!o(r=i(n,e)))return r;if(s(n=e.valueOf)&&!o(r=i(n,e)))return r;if("string"!==t&&s(n=e.toString)&&!o(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},2626:function(e,t,n){var r=n(3070).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},4488:function(e,t,n){var r=n(7854),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3505),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.22.4",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!==r||0===r?0:(r>0?n:t)(r)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(7854),i=n(4488),s=r.Object;e.exports=function(e){return s(i(e))}},7593:function(e,t,n){var r=n(7854),i=n(6916),s=n(111),o=n(2190),a=n(8173),c=n(2140),u=n(5112),l=r.TypeError,h=u("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(7854),i=n(648),s=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},6330:function(e,t,n){var r=n(7854),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(133),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},9191:function(e,t,n){"use strict";var r=n(5005),i=n(2597),s=n(8880),o=n(7976),a=n(7674),c=n(9920),u=n(2626),l=n(9587),h=n(6277),d=n(8340),f=n(7741),p=n(2914),m=n(9781),g=n(1913);e.exports=function(e,t,n,y){var v="stackTraceLimit",w=y?2:1,_=e.split("."),b=_[_.length-1],I=r.apply(null,_);if(I){var E=I.prototype;if(!g&&i(E,"cause")&&delete E.cause,!n)return I;var T=r("Error"),S=t((function(e,t){var n=h(y?t:e,void 0),r=y?new I(e):new I;return void 0!==n&&s(r,"message",n),p&&s(r,"stack",f(r.stack,2)),this&&o(E,this)&&l(r,this,S),arguments.length>w&&d(r,arguments[w]),r}));if(S.prototype=E,"Error"!==b?a?a(S,T):c(S,T,{name:!0}):m&&v in I&&(u(S,I,v),u(S,I,"prepareStackTrace")),c(S,I),!g)try{E.name!==b&&s(E,"name",b),E.constructor=S}catch(k){}return S}}},1703:function(e,t,n){var r=n(2109),i=n(7854),s=n(2104),o=n(9191),a="WebAssembly",c=i[a],u=7!==Error("e",{cause:7}).cause,l=function(e,t){var n={};n[e]=o(e,t,u),r({global:!0,arity:1,forced:u},n)},h=function(e,t){if(c&&c[e]){var n={};n[e]=o(a+"."+e,t,u),r({target:a,stat:!0,arity:1,forced:u},n)}};l("Error",(function(e){return function(t){return s(e,this,arguments)}})),l("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),l("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),l("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),l("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),l("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),l("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},5503:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(2238),i="firebase",s="9.7.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},5319:function(e,t,n){"use strict";n.r(t),n.d(t,{ActionCodeOperation:function(){return d},ActionCodeURL:function(){return ft},AuthCredential:function(){return qe},AuthErrorCodes:function(){return v},EmailAuthCredential:function(){return tt},EmailAuthProvider:function(){return mt},FacebookAuthProvider:function(){return wt},FactorId:function(){return c},GithubAuthProvider:function(){return bt},GoogleAuthProvider:function(){return _t},OAuthCredential:function(){return it},OAuthProvider:function(){return vt},OperationType:function(){return h},PhoneAuthCredential:function(){return lt},PhoneAuthProvider:function(){return Kr},PhoneMultiFactorGenerator:function(){return is},ProviderId:function(){return u},RecaptchaVerifier:function(){return Fr},SAMLAuthProvider:function(){return St},SignInMethod:function(){return l},TwitterAuthProvider:function(){return kt},applyActionCode:function(){return Yt},browserLocalPersistence:function(){return qn},browserPopupRedirectResolver:function(){return ts},browserSessionPersistence:function(){return Kn},checkActionCode:function(){return Jt},confirmPasswordReset:function(){return Wt},connectAuthEmulator:function(){return Ve},createUserWithEmailAndPassword:function(){return Xt},debugErrorMap:function(){return m},deleteUser:function(){return An},fetchSignInMethodsForEmail:function(){return sn},getAdditionalUserInfo:function(){return _n},getAuth:function(){return ls},getIdToken:function(){return ee},getIdTokenResult:function(){return te},getMultiFactorResolver:function(){return Dn},getRedirectResult:function(){return gi},inMemoryPersistence:function(){return ve},indexedDBLocalPersistence:function(){return gr},initializeAuth:function(){return O},isSignInWithEmailLink:function(){return tn},linkWithCredential:function(){return jt},linkWithPhoneNumber:function(){return $r},linkWithPopup:function(){return ti},linkWithRedirect:function(){return pi},multiFactor:function(){return Mn},onAuthStateChanged:function(){return En},onIdTokenChanged:function(){return In},parseActionCodeURL:function(){return pt},prodErrorMap:function(){return g},reauthenticateWithCredential:function(){return $t},reauthenticateWithPhoneNumber:function(){return Br},reauthenticateWithPopup:function(){return ei},reauthenticateWithRedirect:function(){return di},reload:function(){return le},sendEmailVerification:function(){return on},sendPasswordResetEmail:function(){return Ht},sendSignInLinkToEmail:function(){return en},setPersistence:function(){return bn},signInAnonymously:function(){return Dt},signInWithCredential:function(){return Ut},signInWithCustomToken:function(){return qt},signInWithEmailAndPassword:function(){return Zt},signInWithEmailLink:function(){return nn},signInWithPhoneNumber:function(){return jr},signInWithPopup:function(){return Zr},signInWithRedirect:function(){return li},signOut:function(){return kn},unlink:function(){return Lt},updateCurrentUser:function(){return Sn},updateEmail:function(){return ln},updatePassword:function(){return hn},updatePhoneNumber:function(){return Gr},updateProfile:function(){return un},useDeviceLanguage:function(){return Tn},verifyBeforeUpdateEmail:function(){return an},verifyPasswordResetCode:function(){return Qt}});var r=n(4444),i=n(2238);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n(3333),a=n(8463);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={PHONE:"phone"},u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},h={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},d={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function p(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m=f,g=p,y=new r.LL("auth","Firebase",p()),v={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},w=new o.Yd("@firebase/auth");function _(e,...t){w.logLevel<=o["in"].ERROR&&w.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,...t){throw S(e,...t)}function I(e,...t){return S(e,...t)}function E(e,t,n){const i=Object.assign(Object.assign({},g()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function T(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&b(e,"argument-error"),E(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function S(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return y.create(e,...t)}function k(e,t,...n){if(!e)throw S(t,...n)}function A(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _(t),new Error(t)}function C(e,t){e||A(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=new Map;function D(e){C(e instanceof Function,"Expected a class definition");let t=N.get(e);return t?(C(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,N.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;b(e,"already-initialized")}const s=n.initialize({options:t});return s}function x(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(D);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function L(){return"http:"===P()||"https:"===P()}function P(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(L()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function F(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return M()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){C(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void A("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void A("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void A("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},B=new V(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function G(e,t,n,i,s={}){return K(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),j.fetch()(H(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function K(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},$),t);try{const t=new W(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Y(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Y(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Y(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw E(e,a,o);b(e,a)}}catch(s){if(s instanceof r.ZR)throw s;b(e,"network-request-failed")}}async function z(e,t,n,r,i={}){const s=await G(e,t,n,r,i);return"mfaPendingCredential"in s&&b(e,"multi-factor-auth-required",{_serverResponse:s}),s}function H(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?U(e.config,i):`${e.config.apiScheme}://${i}`}class W{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(I(this.auth,"network-request-failed"))),B.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Y(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=I(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t){return G(e,"POST","/v1/accounts:delete",t)}async function Q(e,t){return G(e,"POST","/v1/accounts:update",t)}async function X(e,t){return G(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t=!1){return(0,r.m9)(e).getIdToken(t)}async function te(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=re(i);k(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:Z(ne(s.auth_time)),issuedAtTime:Z(ne(s.iat)),expirationTime:Z(ne(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function ne(e){return 1e3*Number(e)}function re(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return _("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(_("Failed to decode base64 JWT payload"),null)}catch(s){return _("Caught error parsing JWT payload as JSON",s),null}}function ie(e){const t=re(e);return k(t,"internal-error"),k("undefined"!==typeof t.exp,"internal-error"),k("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&oe(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function oe({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Z(this.lastLoginAt),this.creationTime=Z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(e){var t;const n=e.auth,r=await e.getIdToken(),i=await se(e,X(n,{idToken:r}));k(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?de(s.providerUserInfo):[],a=he(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ce(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function le(e){const t=(0,r.m9)(e);await ue(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function he(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function de(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(e,t){const n=await K(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=H(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",j.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k("undefined"!==typeof e.idToken,"internal-error"),k("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):ie(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await fe(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new pe;return n&&(k("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(k("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(k("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pe,this.toJSON())}_performRefresh(){return A("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e,t){k("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ge{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ae(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ce(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await se(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return te(this,e)}reload(){return le(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ge(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ue(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await se(this,J(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:I}=t;k(v&&I,e,"internal-error");const E=pe.fromJSON(this.name,I);k("string"===typeof v,e,"internal-error"),me(l,e.name),me(h,e.name),k("boolean"===typeof w,e,"internal-error"),k("boolean"===typeof _,e,"internal-error"),me(d,e.name),me(f,e.name),me(p,e.name),me(m,e.name),me(g,e.name),me(y,e.name);const T=new ge({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new pe;r.updateFromServerResponse(t);const i=new ge({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ue(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ye.type="NONE";const ve=ye;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,t,n){return`firebase:${e}:${t}:${n}`}class _e{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=we(this.userKey,r.apiKey,i),this.fullPersistenceKey=we("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ge._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new _e(D(ve),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||D(ve);const s=we(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ge._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new _e(i,e,n)):new _e(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Se(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ie(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ae(t))return"Blackberry";if(Ce(t))return"Webos";if(Ee(t))return"Safari";if((t.includes("chrome/")||Te(t))&&!t.includes("edge/"))return"Chrome";if(ke(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Ie(e=(0,r.z$)()){return/firefox\//i.test(e)}function Ee(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Te(e=(0,r.z$)()){return/crios\//i.test(e)}function Se(e=(0,r.z$)()){return/iemobile/i.test(e)}function ke(e=(0,r.z$)()){return/android/i.test(e)}function Ae(e=(0,r.z$)()){return/blackberry/i.test(e)}function Ce(e=(0,r.z$)()){return/webos/i.test(e)}function Ne(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)}function De(e=(0,r.z$)()){var t;return Ne(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Oe(){return(0,r.w1)()&&10===document.documentMode}function xe(e=(0,r.z$)()){return Ne(e)||ke(e)||Ce(e)||Ae(e)||/windows phone/i.test(e)||Se(e)}function Re(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e,t=[]){let n;switch(e){case"Browser":n=be((0,r.z$)());break;case"Worker":n=`${be((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fe(this),this.idTokenSubscription=new Fe(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=D(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await _e.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ue(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=F()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(D(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&D(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await _e.create(this,[D(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return k(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Le(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Me(e){return(0,r.m9)(e)}class Fe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ve(e,t,n){const r=Me(e);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Ue(t),{host:o,port:a}=je(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Be()}function Ue(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function je(e){const t=Ue(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:$e(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:$e(t)}}}function $e(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Be(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return A("not implemented")}_getIdTokenResponse(e){return A("not implemented")}_linkToIdToken(e,t){return A("not implemented")}_getReauthenticationResolver(e){return A("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(e,t){return G(e,"POST","/v1/accounts:resetPassword",q(e,t))}async function Ke(e,t){return G(e,"POST","/v1/accounts:update",t)}async function ze(e,t){return G(e,"POST","/v1/accounts:update",q(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(e,t){return z(e,"POST","/v1/accounts:signInWithPassword",q(e,t))}async function We(e,t){return G(e,"POST","/v1/accounts:sendOobCode",q(e,t))}async function Ye(e,t){return We(e,t)}async function Je(e,t){return We(e,t)}async function Qe(e,t){return We(e,t)}async function Xe(e,t){return We(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e,t){return z(e,"POST","/v1/accounts:signInWithEmailLink",q(e,t))}async function et(e,t){return z(e,"POST","/v1/accounts:signInWithEmailLink",q(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends qe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new tt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new tt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return He(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ze(e,{email:this._email,oobCode:this._password});default:b(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ke(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return et(e,{idToken:t,email:this._email,oobCode:this._password});default:b(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return z(e,"POST","/v1/accounts:signInWithIdp",q(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="http://localhost";class it extends qe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new it(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):b("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new it(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return nt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,nt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nt(e,t)}buildRequest(){const e={requestUri:rt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t){return G(e,"POST","/v1/accounts:sendVerificationCode",q(e,t))}async function ot(e,t){return z(e,"POST","/v1/accounts:signInWithPhoneNumber",q(e,t))}async function at(e,t){const n=await z(e,"POST","/v1/accounts:signInWithPhoneNumber",q(e,t));if(n.temporaryProof)throw Y(e,"account-exists-with-different-credential",n);return n}const ct={["USER_NOT_FOUND"]:"user-not-found"};async function ut(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return z(e,"POST","/v1/accounts:signInWithPhoneNumber",q(e,n),ct)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends qe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new lt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new lt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ot(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return at(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ut(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new lt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dt(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class ft{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ht(null!==(i=c["mode"])&&void 0!==i?i:null);k(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=dt(e);try{return new ft(t)}catch(n){return null}}}function pt(e){return ft.parseLink(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.providerId=mt.PROVIDER_ID}static credential(e,t){return tt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ft.parseLink(t);return k(n,"argument-error"),tt._fromEmailAndCode(e,n.code,n.tenantId)}}mt.PROVIDER_ID="password",mt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",mt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends gt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class vt extends yt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return k("providerId"in t&&"signInMethod"in t,"argument-error"),it._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),it._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return vt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return vt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new vt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends yt{constructor(){super("facebook.com")}static credential(e){return it._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch(t){return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com",wt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t extends yt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return it._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return _t.credential(t,n)}catch(r){return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com",_t.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt extends yt{constructor(){super("github.com")}static credential(e){return it._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch(t){return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com",bt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const It="http://localhost";class Et extends qe{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return nt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,nt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Et(n,i):null}static _create(e,t){return new Et(e,t)}buildRequest(){return{requestUri:It,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="saml.";class St extends gt{constructor(e){k(e.startsWith(Tt),"argument-error"),super(e)}static credentialFromResult(e){return St.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return St.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Et.fromJSON(e);return k(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Et._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends yt{constructor(){super("twitter.com")}static credential(e,t){return it._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return kt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function At(e,t){return z(e,"POST","/v1/accounts:signUp",q(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.TWITTER_SIGN_IN_METHOD="twitter.com",kt.PROVIDER_ID="twitter.com";class Ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ge._fromIdTokenResponse(e,n,r),s=Nt(n),o=new Ct({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Nt(n);return new Ct({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Nt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e){var t;const n=Me(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ct({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await At(n,{returnSecureToken:!0}),i=await Ct._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ot.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ot(e,t,n,r)}}function xt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ot._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(e,t){const n=(0,r.m9)(e);await Mt(!0,n,t);const{providerUserInfo:i}=await Q(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Rt(i||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Pt(e,t,n=!1){const r=await se(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ct._forOperation(e,"link",r)}async function Mt(e,t,n){await ue(t);const r=Rt(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";k(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await se(e,xt(r,i,t,e),n);k(s.idToken,r,"internal-error");const o=re(s.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(e.uid===a,r,"user-mismatch"),Ct._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&b(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t,n=!1){const r="signIn",i=await xt(e,r,t),s=await Ct._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Ut(e,t){return Vt(Me(e),t)}async function jt(e,t){const n=(0,r.m9)(e);return await Mt(!1,n,t.providerId),Pt(n,t)}async function $t(e,t){return Ft((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e,t){return z(e,"POST","/v1/accounts:signInWithCustomToken",q(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e,t){const n=Me(e),r=await Bt(n,{token:t,returnSecureToken:!0}),i=await Ct._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Kt._fromServerResponse(e,t):b(e,"internal-error")}}class Kt extends Gt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Kt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t,n){var r;k((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),k("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(e,t,n){const i=(0,r.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&zt(i,s,n),await Je(i,s)}async function Wt(e,t,n){await Ge((0,r.m9)(e),{oobCode:t,newPassword:n})}async function Yt(e,t){await ze((0,r.m9)(e),{oobCode:t})}async function Jt(e,t){const n=(0,r.m9)(e),i=await Ge(n,{oobCode:t}),s=i.requestType;switch(k(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(i.mfaInfo,n,"internal-error");default:k(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Gt._fromServerResponse(Me(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function Qt(e,t){const{data:n}=await Jt((0,r.m9)(e),t);return n.email}async function Xt(e,t,n){const r=Me(e),i=await At(r,{returnSecureToken:!0,email:t,password:n}),s=await Ct._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Zt(e,t,n){return Ut((0,r.m9)(e),mt.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t,n){const i=(0,r.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};k(n.handleCodeInApp,i,"argument-error"),n&&zt(i,s,n),await Qe(i,s)}function tn(e,t){const n=ft.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function nn(e,t,n){const i=(0,r.m9)(e),s=mt.credentialWithLink(t,n||R());return k(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Ut(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,t){return G(e,"POST","/v1/accounts:createAuthUri",q(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,t){const n=L()?R():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await rn((0,r.m9)(e),i);return s||[]}async function on(e,t){const n=(0,r.m9)(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&zt(n.auth,s,t);const{email:o}=await Ye(n.auth,s);o!==e.email&&await e.reload()}async function an(e,t,n){const i=(0,r.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&zt(i.auth,o,n);const{email:a}=await Xe(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(e,t){return G(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await se(i,cn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function ln(e,t){return dn((0,r.m9)(e),t,null)}function hn(e,t){return dn((0,r.m9)(e),null,t)}async function dn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await se(e,Ke(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=re(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new pn(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new gn(s,i);case"github.com":return new yn(s,i);case"google.com":return new vn(s,i);case"twitter.com":return new wn(s,i,e.screenName||null);case"custom":case"anonymous":return new pn(s,null);default:return new pn(s,r,i)}}class pn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class mn extends pn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class gn extends pn{constructor(e,t){super(e,"facebook.com",t)}}class yn extends mn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class vn extends pn{constructor(e,t){super(e,"google.com",t)}}class wn extends mn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function _n(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:fn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t){return(0,r.m9)(e).setPersistence(t)}function In(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function En(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function Tn(e){(0,r.m9)(e).useDeviceLanguage()}function Sn(e,t){return(0,r.m9)(e).updateCurrentUser(t)}function kn(e){return(0,r.m9)(e).signOut()}async function An(e){return(0,r.m9)(e).delete()}class Cn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new Cn("enroll",e)}static _fromMfaPendingCredential(e){return new Cn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Cn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Cn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Me(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Gt._fromServerResponse(n,e)));k(r.mfaPendingCredential,n,"internal-error");const s=Cn._fromMfaPendingCredential(r.mfaPendingCredential);return new Nn(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Ct._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return k(t.user,n,"internal-error"),Ct._forOperation(t.user,t.operationType,o);default:b(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Dn(e,t){var n;const i=(0,r.m9)(e),s=t;return k(t.customData.operationType,i,"argument-error"),k(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),Nn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:start",q(e,t))}function xn(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:finalize",q(e,t))}function Rn(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:withdraw",q(e,t))}class Ln{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Gt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Ln(e)}async getSession(){return Cn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await se(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await se(this.user,Rn(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const Pn=new WeakMap;function Mn(e){const t=(0,r.m9)(e);return Pn.has(t)||Pn.set(t,Ln._fromUser(t)),Pn.get(t)}const Fn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fn,"1"),this.storage.removeItem(Fn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){const e=(0,r.z$)();return Ee(e)||Ne(e)}const jn=1e3,$n=10;class Bn extends Vn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Un()&&Re(),this.fallbackToPolling=xe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Oe()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,$n):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),jn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bn.type="LOCAL";const qn=Bn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Vn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gn.type="SESSION";const Kn=Gn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Hn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await zn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn.receivers=[];class Yn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Wn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(){return window}function Qn(e){Jn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return"undefined"!==typeof Jn()["WorkerGlobalScope"]&&"function"===typeof Jn()["importScripts"]}async function Zn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function er(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function tr(){return Xn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr="firebaseLocalStorageDb",rr=1,ir="firebaseLocalStorage",sr="fbase_key";class or{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ar(e,t){return e.transaction([ir],t?"readwrite":"readonly").objectStore(ir)}function cr(){const e=indexedDB.deleteDatabase(nr);return new or(e).toPromise()}function ur(){const e=indexedDB.open(nr,rr);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ir,{keyPath:sr})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(ir)?t(n):(n.close(),await cr(),t(await ur()))}))}))}async function lr(e,t,n){const r=ar(e,!0).put({[sr]:t,value:n});return new or(r).toPromise()}async function hr(e,t){const n=ar(e,!1).get(t),r=await new or(n).toPromise();return void 0===r?null:r.value}function dr(e,t){const n=ar(e,!0).delete(t);return new or(n).toPromise()}const fr=800,pr=3;class mr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ur()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>pr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hn._getInstance(tr()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Zn(),!this.activeServiceWorker)return;this.sender=new Yn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&er()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ur();return await lr(e,Fn,"1"),await dr(e,Fn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>lr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>hr(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>dr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ar(e,!1).getAll();return new or(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),fr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}mr.type="LOCAL";const gr=mr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:start",q(e,t))}function vr(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:finalize",q(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(e){return(await G(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function br(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=I("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",_r().appendChild(r)}))}function Ir(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=500,Tr=6e4,Sr=1e12;class kr{constructor(e){this.auth=e,this.counter=Sr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Ar(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||Sr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||Sr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||Sr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class Ar{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;k(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Cr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),Tr)}),Er))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Cr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=Ir("rcb"),Dr=new V(3e4,6e4),Or="https://www.google.com/recaptcha/api.js?";class xr{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Jn().grecaptcha}load(e,t=""){return k(Rr(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Jn().grecaptcha):new Promise(((n,i)=>{const s=Jn().setTimeout((()=>{i(I(e,"network-request-failed"))}),Dr.get());Jn()[Nr]=()=>{Jn().clearTimeout(s),delete Jn()[Nr];const r=Jn().grecaptcha;if(!r)return void i(I(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${Or}?${(0,r.xO)({onload:Nr,render:"explicit",hl:t})}`;br(o).catch((()=>{clearTimeout(s),i(I(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Jn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Rr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Lr{async load(e){return new kr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="recaptcha",Mr={theme:"light",type:"image"};class Fr{constructor(e,t=Object.assign({},Mr),n){this.parameters=t,this.type=Pr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Me(n),this.isInvisible="invisible"===this.parameters.size,k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;k(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Lr:new xr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Jn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(L()&&!Xn(),this.auth,"internal-error"),await Vr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await wr(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Vr(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=lt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function jr(e,t,n){const i=Me(e),s=await qr(i,t,(0,r.m9)(n));return new Ur(s,(e=>Ut(i,e)))}async function $r(e,t,n){const i=(0,r.m9)(e);await Mt(!1,i,"phone");const s=await qr(i.auth,t,(0,r.m9)(n));return new Ur(s,(e=>jt(i,e)))}async function Br(e,t,n){const i=(0,r.m9)(e),s=await qr(i.auth,t,(0,r.m9)(n));return new Ur(s,(e=>$t(i,e)))}async function qr(e,t,n){var r;const i=await n.verify();try{let s;if(k("string"===typeof i,e,"argument-error"),k(n.type===Pr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){k("enroll"===t.type,e,"internal-error");const n=await On(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{k("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;k(n,e,"missing-multi-factor-info");const o=await yr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await st(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Gr(e,t){await Pt((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.providerId=Kr.PROVIDER_ID,this.auth=Me(e)}verifyPhoneNumber(e,t){return qr(this.auth,e,(0,r.m9)(t))}static credential(e,t){return lt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Kr.credentialFromTaggedObject(t)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?lt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zr(e,t){return t?D(t):(k(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kr.PROVIDER_ID="phone",Kr.PHONE_SIGN_IN_METHOD="phone";class Hr extends qe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wr(e){return Vt(e.auth,new Hr(e),e.bypassAuthState)}function Yr(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),Ft(n,new Hr(e),e.bypassAuthState)}async function Jr(e){const{auth:t,user:n}=e;return k(n,t,"internal-error"),Pt(n,new Hr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wr;case"linkViaPopup":case"linkViaRedirect":return Jr;case"reauthViaPopup":case"reauthViaRedirect":return Yr;default:b(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new V(2e3,1e4);async function Zr(e,t,n){const r=Me(e);T(e,t,gt);const i=zr(r,n),s=new ni(r,"signInViaPopup",t,i);return s.executeNotNull()}async function ei(e,t,n){const i=(0,r.m9)(e);T(i.auth,t,gt);const s=zr(i.auth,n),o=new ni(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function ti(e,t,n){const i=(0,r.m9)(e);T(i.auth,t,gt);const s=zr(i.auth,n),o=new ni(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class ni extends Qr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){C(1===this.filter.length,"Popup operations only handle one event");const e=Wn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(I(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(I(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(I(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Xr.get())};e()}}ni.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ri="pendingRedirect",ii=new Map;class si extends Qr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ii.get(this.auth._key());if(!e){try{const t=await oi(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ii.set(this.auth._key(),e)}return this.bypassAuthState||ii.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function oi(e,t){const n=ui(t),r=ci(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function ai(e,t){return ci(e)._set(ui(t),"true")}function ci(e){return D(e._redirectPersistence)}function ui(e){return we(ri,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e,t,n){return hi(e,t,n)}async function hi(e,t,n){const r=Me(e);T(e,t,gt);const i=zr(r,n);return await ai(i,r),i._openRedirect(r,t,"signInViaRedirect")}function di(e,t,n){return fi(e,t,n)}async function fi(e,t,n){const i=(0,r.m9)(e);T(i.auth,t,gt);const s=zr(i.auth,n);await ai(s,i.auth);const o=await vi(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function pi(e,t,n){return mi(e,t,n)}async function mi(e,t,n){const i=(0,r.m9)(e);T(i.auth,t,gt);const s=zr(i.auth,n);await Mt(!1,i,t.providerId),await ai(s,i.auth);const o=await vi(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function gi(e,t){return await Me(e)._initializationPromise,yi(e,t,!1)}async function yi(e,t,n=!1){const r=Me(e),i=zr(r,t),s=new si(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function vi(e){const t=Wn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=6e5;class _i{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Ei(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ii(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(I(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wi&&this.cachedEventUids.clear(),this.cachedEventUids.has(bi(e))}saveEventToCache(e){this.cachedEventUids.add(bi(e)),this.lastProcessedEventTime=Date.now()}}function bi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ii({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Ei(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ii(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(e,t={}){return G(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ki=/^https?/;async function Ai(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ti(e);for(const r of t)try{if(Ci(r))return}catch(n){}b(e,"unauthorized-domain")}function Ci(e){const t=R(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!ki.test(n))return!1;if(Si.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new V(3e4,6e4);function Di(){const e=Jn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Oi(e){return new Promise(((t,n)=>{var r,i,s;function o(){Di(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Di(),n(I(e,"network-request-failed"))},timeout:Ni.get()})}if(null===(i=null===(r=Jn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Jn().gapi)||void 0===s?void 0:s.load)){const t=Ir("iframefcb");return Jn()[t]=()=>{gapi.load?o():n(I(e,"network-request-failed"))},br(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw xi=null,e}))}let xi=null;function Ri(e){return xi=xi||Oi(e),xi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new V(5e3,15e3),Pi="__/auth/iframe",Mi="emulator/auth/iframe",Fi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ui(e){const t=e.config;k(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?U(t,Mi):`https://${e.config.authDomain}/${Pi}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=Vi.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function ji(e){const t=await Ri(e),n=Jn().gapi;return k(n,e,"internal-error"),t.open({where:document.body,url:Ui(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fi,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=I(e,"network-request-failed"),s=Jn().setTimeout((()=>{r(i)}),Li.get());function o(){Jn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bi=500,qi=600,Gi="_blank",Ki="http://localhost";class zi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Hi(e,t,n,i=Bi,s=qi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},$i),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=Te(l)?Gi:n),Ie(l)&&(t=t||Ki,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(De(l)&&"_self"!==c)return Wi(t||"",c),new zi(null);const d=window.open(t||"",c,h);k(d,e,"popup-blocked");try{d.focus()}catch(f){}return new zi(d)}function Wi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="__/auth/handler",Ji="emulator/auth/handler";function Qi(e,t,n,s,o,a){k(e.config.authDomain,e,"auth-domain-config-required"),k(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof gt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof yt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Xi(e)}?${(0,r.xO)(u).slice(1)}`}function Xi({config:e}){return e.emulator?U(e,Ji):`https://${e.authDomain}/${Yi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi="webStorageSupport";class es{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kn,this._completeRedirectFn=yi}async _openPopup(e,t,n,r){var i;C(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Qi(e,t,n,R(),r);return Hi(e,s,Wn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Qn(Qi(e,t,n,R(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(C(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await ji(e),n=new _i(e);return t.register("authEvent",(t=>{k(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Zi,{type:Zi},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Zi];void 0!==i&&t(!!i),b(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ai(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xe()||Ee()||Ne()}}const ts=es;class ns{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return A("unexpected MultiFactorSessionType")}}}class rs extends ns{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new rs(e)}_finalizeEnroll(e,t,n){return xn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return vr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class is{constructor(){}static assertion(e){return rs._fromCredential(e)}}is.FACTOR_ID="phone";var ss="@firebase/auth",os="0.19.12";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class as{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function us(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{k(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),k(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Le(e)},a=new Pe(t,r,i);return x(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Me(e.getProvider("auth").getImmediate());return(e=>new as(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(ss,os,cs(e)),(0,i.KN)(ss,os,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:ts,persistence:[gr,qn,Kn]})}us("Browser")},5321:function(e,t,n){"use strict";n.r(t),n.d(t,{AbstractUserDataWriter:function(){return sm},Bytes:function(){return tp},CACHE_SIZE_UNLIMITED:function(){return Mf},CollectionReference:function(){return Af},DocumentReference:function(){return Sf},DocumentSnapshot:function(){return Lp},FieldPath:function(){return Zf},FieldValue:function(){return np},Firestore:function(){return Ff},FirestoreError:function(){return ei},GeoPoint:function(){return rp},LoadBundleTask:function(){return Pf},Query:function(){return kf},QueryConstraint:function(){return jp},QueryDocumentSnapshot:function(){return Pp},QuerySnapshot:function(){return Mp},SnapshotMetadata:function(){return Rp},Timestamp:function(){return yi},Transaction:function(){return Sm},WriteBatch:function(){return cm},_DatabaseId:function(){return Fi},_DocumentKey:function(){return $i},_EmptyAppCheckTokenProvider:function(){return li},_EmptyAuthCredentialsProvider:function(){return ri},_FieldPath:function(){return Si},_cast:function(){return _f},_debugAssert:function(){return Qr},_isBase64Available:function(){return Ai},_logWarn:function(){return Hr},_setIndexConfiguration:function(){return Rm},_validateIsNotUsedTogether:function(){return gf},addDoc:function(){return _m},arrayRemove:function(){return Dm},arrayUnion:function(){return Nm},clearIndexedDbPersistence:function(){return Kf},collection:function(){return Cf},collectionGroup:function(){return Nf},connectFirestoreEmulator:function(){return Tf},deleteDoc:function(){return wm},deleteField:function(){return Am},disableNetwork:function(){return Wf},doc:function(){return Df},documentId:function(){return ep},enableIndexedDbPersistence:function(){return Bf},enableMultiTabIndexedDbPersistence:function(){return qf},enableNetwork:function(){return Hf},endAt:function(){return em},endBefore:function(){return Zp},ensureFirestoreConfigured:function(){return jf},executeWrite:function(){return Em},getDoc:function(){return lm},getDocFromCache:function(){return dm},getDocFromServer:function(){return fm},getDocs:function(){return pm},getDocsFromCache:function(){return mm},getDocsFromServer:function(){return gm},getFirestore:function(){return Uf},increment:function(){return Om},initializeFirestore:function(){return Vf},limit:function(){return Hp},limitToLast:function(){return Wp},loadBundle:function(){return Jf},namedQuery:function(){return Qf},onSnapshot:function(){return bm},onSnapshotsInSync:function(){return Im},orderBy:function(){return Kp},query:function(){return $p},queryEqual:function(){return xf},refEqual:function(){return Of},runTransaction:function(){return km},serverTimestamp:function(){return Cm},setDoc:function(){return ym},setLogLevel:function(){return Gr},snapshotEqual:function(){return Vp},startAfter:function(){return Qp},startAt:function(){return Jp},terminate:function(){return Yf},updateDoc:function(){return vm},waitForPendingWrites:function(){return zf},where:function(){return qp},writeBatch:function(){return xm}});var r,i=n(2238),s=n(8463),o=n(3333),a=n(4444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++y)}var g="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,_.apply(null,arguments)}function b(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var T=0,S={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=T)){var e=m(this);delete S[e]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},A=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function C(e){e:{var t=zn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function N(e){return Array.prototype.concat.apply([],arguments)}function D(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e){return/^[\s\xa0]*$/.test(e)}var x,R=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function L(e,t){return-1!=e.indexOf(t)}function P(e,t){return e<t?-1:e>t?1:0}e:{var M=h.navigator;if(M){var F=M.userAgent;if(F){x=F;break e}}x=""}function V(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function U(e){const t={};for(const n in e)t[n]=e[n];return t}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<j.length;t++)n=j[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function B(e){return B[" "](e),e}function q(e){var t=ne;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}B[" "]=d;var G,K=L(x,"Opera"),z=L(x,"Trident")||L(x,"MSIE"),H=L(x,"Edge"),W=H||z,Y=L(x,"Gecko")&&!(L(x.toLowerCase(),"webkit")&&!L(x,"Edge"))&&!(L(x,"Trident")||L(x,"MSIE"))&&!L(x,"Edge"),J=L(x.toLowerCase(),"webkit")&&!L(x,"Edge");function Q(){var e=h.document;return e?e.documentMode:void 0}e:{var X="",Z=function(){var e=x;return Y?/rv:([^\);]+)(\)|;)/.exec(e):H?/Edge\/([\d\.]+)/.exec(e):z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):J?/WebKit\/(\S+)/.exec(e):K?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Z&&(X=Z?Z[1]:""),z){var ee=Q();if(null!=ee&&ee>parseFloat(X)){G=String(ee);break e}}G=X}var te,ne={};function re(){return q((function(){let e=0;const t=R(String(G)).split("."),n=R("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=P(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||P(0==i[2].length,0==s[2].length)||P(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&z){var ie=Q();te=ie||(parseInt(G,10)||void 0)}else te=void 0;var se=te,oe=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function ae(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ce(e,t){if(ae.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Y){e:{try{B(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ue[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ce.Z.h.call(this)}}ae.prototype.h=function(){this.defaultPrevented=!0},I(ce,ae);var ue={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var le="closure_listenable_"+(1e6*Math.random()|0),he=0;function de(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++he,this.ca=this.fa=!1}function fe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function pe(e){this.src=e,this.g={},this.h=0}function me(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=k(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(fe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ge(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}pe.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ge(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new de(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ye="closure_lm_"+(1e6*Math.random()|0),ve={};function we(e,t,n,r,i){if(r&&r.once)return Ie(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)we(e,t[s],n,r,i);return null}return n=Ne(n),e&&e[le]?e.N(t,n,p(r)?!!r.capture:!!r,i):_e(e,t,n,!1,r,i)}function _e(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ae(e);if(a||(e[ye]=a=new pe(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=be(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)oe||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Se(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function be(){function e(n){return t.call(e.src,e.listener,n)}var t=ke;return e}function Ie(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ie(e,t[s],n,r,i);return null}return n=Ne(n),e&&e[le]?e.O(t,n,p(r)?!!r.capture:!!r,i):_e(e,t,n,!0,r,i)}function Ee(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ee(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Ne(n),e&&e[le]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ge(s,n,r,i),-1<n&&(fe(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ae(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ge(t,n,r,i)),(n=-1<e?t[e]:null)&&Te(n))}function Te(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[le])me(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Se(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ae(t))?(me(n,e),0==n.h&&(n.src=null,t[ye]=null)):fe(e)}}}function Se(e){return e in ve?ve[e]:ve[e]="on"+e}function ke(e,t){if(e.ca)e=!0;else{t=new ce(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Te(e),e=n.call(r,t)}return e}function Ae(e){return e=e[ye],e instanceof pe?e:null}var Ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ne(e){return"function"===typeof e?e:(e[Ce]||(e[Ce]=function(t){return e.handleEvent(t)}),e[Ce])}function De(){E.call(this),this.i=new pe(this),this.P=this,this.I=null}function Oe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new ae(t,e);else if(t instanceof ae)t.target=t.target||e;else{var i=t;t=new ae(r,e),$(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=xe(o,r,!0,t)&&i}if(o=t.g=e,i=xe(o,r,!0,t)&&i,i=xe(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=xe(o,r,!1,t)&&i}function xe(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&me(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}I(De,E),De.prototype[le]=!0,De.prototype.removeEventListener=function(e,t,n,r){Ee(this,e,t,n,r)},De.prototype.M=function(){if(De.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fe(n[r]);delete t.g[e],t.h--}}this.I=null},De.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},De.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Re=h.JSON.stringify;function Le(){var e=qe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Pe{constructor(){this.h=this.g=null}add(e,t){const n=Fe.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Me,Fe=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ve),(e=>e.reset()));class Ve{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ue(e){h.setTimeout((()=>{throw e}),0)}function je(e,t){Me||$e(),Be||(Me(),Be=!0),qe.add(e,t)}function $e(){var e=h.Promise.resolve(void 0);Me=function(){e.then(Ge)}}var Be=!1,qe=new Pe;function Ge(){for(var e;e=Le();){try{e.h.call(e.g)}catch(n){Ue(n)}var t=Fe;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Be=!1}function Ke(e,t){De.call(this),this.h=e||1,this.g=t||h,this.j=_(this.kb,this),this.l=Date.now()}function ze(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function He(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function We(e){e.g=He((()=>{e.g=null,e.i&&(e.i=!1,We(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(Ke,De),r=Ke.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(ze(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ke.Z.M.call(this),ze(this),delete this.g};class Ye extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:We(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(e){E.call(this),this.h=e,this.g={}}I(Je,E);var Qe=[];function Xe(e,t,n,r){Array.isArray(n)||(n&&(Qe[0]=n.toString()),n=Qe);for(var i=0;i<n.length;i++){var s=we(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ze(e){V(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Te(e)}),e),e.g={}}function et(){this.g=!0}function tt(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function nt(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function rt(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+st(e,n)+(r?" "+r:"")}))}function it(e,t){e.info((function(){return"TIMEOUT: "+t}))}function st(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Re(n)}catch(a){return t}}Je.prototype.M=function(){Je.Z.M.call(this),Ze(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},et.prototype.Aa=function(){this.g=!1},et.prototype.info=function(){};var ot={},at=null;function ct(){return at=at||new De}function ut(e){ae.call(this,ot.Ma,e)}function lt(e){const t=ct();Oe(t,new ut(t,e))}function ht(e,t){ae.call(this,ot.STAT_EVENT,e),this.stat=t}function dt(e){const t=ct();Oe(t,new ht(t,e))}function ft(e,t){ae.call(this,ot.Na,e),this.size=t}function pt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}ot.Ma="serverreachability",I(ut,ae),ot.STAT_EVENT="statevent",I(ht,ae),ot.Na="timingevent",I(ft,ae);var mt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},gt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function yt(){}function vt(e){return e.h||(e.h=e.i())}function wt(){}yt.prototype.h=null;var _t,bt={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function It(){ae.call(this,"d")}function Et(){ae.call(this,"c")}function Tt(){}function St(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Je(this),this.P=At,e=W?125:void 0,this.W=new Ke(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new kt}function kt(){this.i=null,this.g="",this.h=!1}I(It,ae),I(Et,ae),I(Tt,yt),Tt.prototype.g=function(){return new XMLHttpRequest},Tt.prototype.i=function(){return{}},_t=new Tt;var At=45e3,Ct={},Nt={};function Dt(e,t,n){e.K=1,e.v=tn(Yt(t)),e.s=n,e.U=!0,Ot(e,null)}function Ot(e,t){e.F=Date.now(),Pt(e),e.A=Yt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),yn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new kt,e.g=Er(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ye(_(e.Ia,e,e.g),e.O)),Xe(e.V,e.g,"readystatechange",e.gb),t=e.H?U(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),lt(1),tt(e.j,e.u,e.A,e.m,e.X,e.s)}function xt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Rt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Lt(e,n),r==Nt){4==t&&(e.o=4,dt(14),i=!1),rt(e.j,e.m,null,"[Incomplete Response]");break}if(r==Ct){e.o=4,dt(15),rt(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}rt(e.j,e.m,r,null),jt(e,r)}xt(e)&&r!=Nt&&r!=Ct&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,dt(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mr(t),t.L=!0,dt(11))):(rt(e.j,e.m,n,"[Invalid Chunked Response]"),Ut(e),Vt(e))}function Lt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Nt:(n=Number(t.substring(n,r)),isNaN(n)?Ct:(r+=1,r+n>t.length?Nt:(t=t.substr(r,n),e.C=r+n,t)))}function Pt(e){e.Y=Date.now()+e.P,Mt(e,e.P)}function Mt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=pt(_(e.eb,e),t)}function Ft(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Vt(e){0==e.l.G||e.I||vr(e.l,e)}function Ut(e){Ft(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,ze(e.W),Ze(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function jt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Sn(n.i,e)))if(n.I=e.N,!e.J&&Sn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;yr(n),sr(n)}pr(n),dt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pt(_(n.ab,n),6e3));if(1>=Tn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else _r(n,11)}else if((e.J||n.g==e)&&yr(n),!O(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(L(e,"spdy")||L(e,"quic")||L(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(kn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,en(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Ir(r,r.H?r.la:null,r.W),o.J){An(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ft(a),Pt(a)),r.g=o}else fr(r);0<n.l.length&&cr(n)}else"stop"!=u[0]&&"close"!=u[0]||_r(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?_r(n,7):ir(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}lt(4)}catch(u){}}function $t(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Bt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)A(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(f(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=$t(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function qt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof qt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Gt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Kt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Kt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Kt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=St.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Xn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const l=Xn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||W||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=l||7==t||lt(8==t||0>=d?3:2),Ft(this);var n=this.g.ba();this.N=n;t:if(xt(this)){var r=Zn(this.g);e="";var i=r.length,s=4==Xn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ut(this),Vt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,nt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,dt(12),Ut(this),Vt(this);break e}rt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,jt(this,n)}this.U?(Rt(this,l,o),W&&this.i&&3==l&&(Xe(this.V,this.W,"tick",this.fb),this.W.start())):(rt(this.j,this.m,o,null),jt(this,o)),4==l&&Ut(this),this.i&&!this.I&&(4==l?vr(this.l,this):(this.i=!1,Pt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),Ut(this),Vt(this)}}}catch(l){}},r.fb=function(){if(this.g){var e=Xn(this.g),t=this.g.ga();this.C<t.length&&(Ft(this),Rt(this,e,t),this.i&&4!=e&&Pt(this))}},r.cancel=function(){this.I=!0,Ut(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(it(this.j,this.A),2!=this.K&&(lt(3),dt(17)),Ut(this),this.o=2,Vt(this)):Mt(this,this.Y-e)},r=qt.prototype,r.R=function(){Gt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Gt(this),this.g.concat()},r.get=function(e,t){return Kt(this.h,e)?this.h[e]:t},r.set=function(e,t){Kt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var zt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ht(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Wt){this.g=void 0!==t?t:e.g,Jt(this,e.j),this.s=e.s,Qt(this,e.i),Xt(this,e.m),this.l=e.l,t=e.h;var n=new fn;n.i=t.i,t.g&&(n.g=new qt(t.g),n.h=t.h),Zt(this,n),this.o=e.o}else e&&(n=String(e).match(zt))?(this.g=!!t,Jt(this,n[1]||"",!0),this.s=sn(n[2]||""),Qt(this,n[3]||"",!0),Xt(this,n[4]),this.l=sn(n[5]||"",!0),Zt(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!t,this.h=new fn(null,this.g))}function Yt(e){return new Wt(e)}function Jt(e,t,n){e.j=n?sn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Qt(e,t,n){e.i=n?sn(t,!0):t}function Xt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Zt(e,t,n){t instanceof fn?(e.h=t,wn(e.h,e.g)):(n||(t=on(t,hn)),e.h=new fn(t,e.g))}function en(e,t,n){e.h.set(t,n)}function tn(e){return en(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nn(e){return e instanceof Wt?Yt(e):new Wt(e,void 0)}function rn(e,t,n,r){var i=new Wt(null,void 0);return e&&Jt(i,e),t&&Qt(i,t),n&&Xt(i,n),r&&(i.l=r),i}function sn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function on(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,an),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function an(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Wt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(on(t,cn,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(on(t,cn,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(on(n,"/"==n.charAt(0)?ln:un,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",on(n,dn)),e.join("")};var cn=/[#\/\?@]/g,un=/[#\?:]/g,ln=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function fn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function pn(e){e.g||(e.g=new qt,e.h=0,e.i&&Ht(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function mn(e,t){pn(e),t=vn(e,t),Kt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Kt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Gt(e)))}function gn(e,t){return pn(e),t=vn(e,t),Kt(e.g.h,t)}function yn(e,t,n){mn(e,t),0<n.length&&(e.i=null,e.g.set(vn(e,t),D(n)),e.h+=n.length)}function vn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function wn(e,t){t&&!e.j&&(pn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(mn(this,t),yn(this,n,e))}),e)),e.j=t}r=fn.prototype,r.add=function(e,t){pn(this),this.i=null,e=vn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){pn(this),this.g.forEach((function(n,r){A(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){pn(this);var t=[];if("string"===typeof e)gn(this,e)&&(t=N(t,this.g.get(vn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=N(t,e[n])}return t},r.set=function(e,t){return pn(this),this.i=null,e=vn(this,e),gn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var _n=class{constructor(e,t){this.h=e,this.g=t}};function bn(e){this.l=e||In,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var In=10;function En(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Tn(e){return e.h?1:e.g?e.g.size:0}function Sn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function kn(e,t){e.g?e.g.add(t):e.h=t}function An(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Cn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return D(e.i)}function Nn(){}function Dn(){this.g=new Nn}function On(e,t,n){const r=n||"";try{Bt(e,(function(e,n){let i=e;p(e)&&(i=Re(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function xn(e,t){const n=new et;if(h.Image){const r=new Image;r.onload=b(Rn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=b(Rn,n,r,"TestLoadImage: error",!1,t),r.onabort=b(Rn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=b(Rn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Rn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Ln(e){this.l=e.$b||null,this.j=e.ib||!1}function Pn(e,t){De.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bn.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Nn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},Nn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},I(Ln,yt),Ln.prototype.g=function(){return new Pn(this.l,this.j)},Ln.prototype.i=function(e){return function(){return e}}({}),I(Pn,De);var Mn=0;function Fn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Vn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Un(e)}function Un(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Pn.prototype,r.open=function(e,t){if(this.readyState!=Mn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Un(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Vn(this)),this.readyState=Mn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Vn(this):Un(this),3==this.readyState&&Fn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Vn(this))},r.Ta=function(e){this.g&&(this.response=e,Vn(this))},r.ha=function(){this.g&&Vn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var jn=h.JSON.parse;function $n(e){De.call(this),this.headers=new qt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bn,this.K=this.L=!1}I($n,De);var Bn="",qn=/^https?$/i,Gn=["POST","PUT"];function Kn(e){return z&&re()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function zn(e){return"content-type"==e.toLowerCase()}function Hn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Wn(e),Jn(e)}function Wn(e){e.D||(e.D=!0,Oe(e,"complete"),Oe(e,"error"))}function Yn(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=Xn(e)||2!=e.ba()))if(e.v&&4==Xn(e))He(e.Fa,0,e);else if(Oe(e,"readystatechange"),4==Xn(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(zt)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!qn.test(i?i.toLowerCase():"")}n=r}if(n)Oe(e,"complete"),Oe(e,"success");else{e.m=6;try{var o=2<Xn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Wn(e)}}finally{Jn(e)}}}function Jn(e,t){if(e.g){Qn(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||Oe(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Qn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Xn(e){return e.g?e.g.readyState:0}function Zn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Bn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function er(e){let t="";return V(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function tr(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=er(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):en(e,t,n))}function nr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function rr(e){this.za=0,this.l=[],this.h=new et,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,e),this.$a=nr("retryDelaySeedMs",1e4,e),this.Ya=nr("forwardChannelMaxRetries",2,e),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new bn(e&&e.concurrentRequestLimit),this.Ca=new Dn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ir(e){if(or(e),3==e.G){var t=e.V++,n=Yt(e.F);en(n,"SID",e.J),en(n,"RID",t),en(n,"TYPE","terminate"),hr(e,n),t=new St(e,e.h,t,void 0),t.K=2,t.v=tn(Yt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=Er(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Pt(t)}br(e)}function sr(e){e.g&&(mr(e),e.g.cancel(),e.g=null)}function or(e){sr(e),e.u&&(h.clearTimeout(e.u),e.u=null),yr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function ar(e,t){e.l.push(new _n(e.Za++,t)),3==e.G&&cr(e)}function cr(e){En(e.i)||e.m||(e.m=!0,je(e.Ha,e),e.C=0)}function ur(e,t){return!(Tn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=pt(_(e.Ha,e,t),wr(e,e.C)),e.C++,!0))}function lr(e,t){var n;n=t?t.m:e.V++;const r=Yt(e.F);en(r,"SID",e.J),en(r,"RID",n),en(r,"AID",e.U),hr(e,r),e.o&&e.s&&tr(r,e.o,e.s),n=new St(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=dr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),kn(e.i,n),Dt(n,r,t)}function hr(e,t){e.j&&Bt({},(function(e,n){en(t,n,e)}))}function dr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?_(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{On(a,e,"req"+n+"_")}catch(Zr){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function fr(e){e.g||e.u||(e.Y=1,je(e.Ga,e),e.A=0)}function pr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=pt(_(e.Ga,e),wr(e,e.A)),e.A++,!0)}function mr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function gr(e){e.g=new St(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Yt(e.oa);en(t,"RID","rpc"),en(t,"SID",e.J),en(t,"CI",e.N?"0":"1"),en(t,"AID",e.U),hr(e,t),en(t,"TYPE","xmlhttp"),e.o&&e.s&&tr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=tn(Yt(t)),n.s=null,n.U=!0,Ot(n,e)}function yr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function vr(e,t){var n=null;if(e.g==t){yr(e),mr(e),e.g=null;var r=2}else{if(!Sn(e.i,t))return;n=t.D,An(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=ct(),Oe(r,new ft(r,n,t,i)),cr(e)}else fr(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&ur(e,t)||2==r&&pr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:_r(e,5);break;case 4:_r(e,10);break;case 3:_r(e,6);break;default:_r(e,2)}}function wr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function _r(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=_(e.jb,e);n||(n=new Wt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Jt(n,"https"),tn(n)),xn(n.toString(),r)}else dt(2);e.G=0,e.j&&e.j.va(t),br(e),or(e)}function br(e){e.G=0,e.I=-1,e.j&&(0==Cn(e.i).length&&0==e.l.length||(e.i.i.length=0,D(e.l),e.l.length=0),e.j.ua())}function Ir(e,t,n){let r=nn(n);if(""!=r.i)t&&Qt(r,t+"."+r.i),Xt(r,r.m);else{const e=h.location;r=rn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&V(e.aa,(function(e,t){en(r,t,e)})),t=e.D,n=e.sa,t&&n&&en(r,t,n),en(r,"VER",e.ma),hr(e,r),r}function Er(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new $n(new Ln({ib:!0})):new $n(e.qa),t.L=e.H,t}function Tr(){}function Sr(){if(z&&!(10<=Number(se)))throw Error("Environmental error: no available transport.")}function kr(e,t){De.call(this),this.g=new rr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Nr(this)}function Ar(e){It.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Cr(){Et.call(this),this.status=1}function Nr(e){this.g=e}r=$n.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_t.g(),this.C=this.u?vt(this.u):vt(_t),this.g.onreadystatechange=_(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Hn(this,s)}e=n||"";const i=new qt(this.headers);r&&Bt(r,(function(e,t){i.set(t,e)})),r=C(i.T()),n=h.FormData&&e instanceof h.FormData,!(0<=k(Gn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qn(this),0<this.B&&((this.K=Kn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.pa,this)):this.A=He(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Hn(this,s)}},r.pa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Oe(this,"complete"),Oe(this,"abort"),Jn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jn(this,!0)),$n.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Yn(this):this.cb())},r.cb=function(){Yn(this)},r.ba=function(){try{return 2<Xn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),jn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new St(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=U(s),$(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=dr(this,i,t),n=Yt(this.F),en(n,"RID",e),en(n,"CVER",22),this.D&&en(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&s&&tr(n,this.o,s),kn(this.i,i),this.Ra&&en(n,"TYPE","init"),this.ja?(en(n,"$req",t),en(n,"SID","null"),i.$=!0,Dt(i,n,null)):Dt(i,n,t),this.G=2}}else 3==this.G&&(e?lr(this,e):0==this.l.length||En(this.i)||lr(this))},r.Ga=function(){if(this.u=null,gr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=pt(_(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,dt(10),sr(this),gr(this))},r.ab=function(){null!=this.v&&(this.v=null,sr(this),pr(this),dt(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),dt(2)):(this.h.info("Failed to ping google.com"),dt(1))},r=Tr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Sr.prototype.g=function(e,t){return new kr(e,t)},I(kr,De),kr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),je(_(e.hb,e,t))),dt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Ir(e,null,e.W),cr(e)},kr.prototype.close=function(){ir(this.g)},kr.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,ar(this.g,t)}else this.v?(t={},t.__data__=Re(e),ar(this.g,t)):ar(this.g,e)},kr.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,kr.Z.M.call(this)},I(Ar,It),I(Cr,Et),I(Nr,Tr),Nr.prototype.xa=function(){Oe(this.g,"a")},Nr.prototype.wa=function(e){Oe(this.g,new Ar(e))},Nr.prototype.va=function(e){Oe(this.g,new Cr(e))},Nr.prototype.ua=function(){Oe(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,kr.prototype.send=kr.prototype.u,kr.prototype.open=kr.prototype.m,kr.prototype.close=kr.prototype.close,mt.NO_ERROR=0,mt.TIMEOUT=8,mt.HTTP_ERROR=6,gt.COMPLETE="complete",wt.EventType=bt,bt.OPEN="a",bt.CLOSE="b",bt.ERROR="c",bt.MESSAGE="d",De.prototype.listen=De.prototype.N,$n.prototype.listenOnce=$n.prototype.O,$n.prototype.getLastError=$n.prototype.La,$n.prototype.getLastErrorCode=$n.prototype.Da,$n.prototype.getStatus=$n.prototype.ba,$n.prototype.getResponseJson=$n.prototype.Qa,$n.prototype.getResponseText=$n.prototype.ga,$n.prototype.send=$n.prototype.ea;var Dr=u.createWebChannelTransport=function(){return new Sr},Or=u.getStatEventTarget=function(){return ct()},xr=u.ErrorCode=mt,Rr=u.EventType=gt,Lr=u.Event=ot,Pr=u.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Mr=u.FetchXmlHttpFactory=Ln,Fr=u.WebChannel=wt,Vr=u.XhrIo=$n;const Ur="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jr.UNAUTHENTICATED=new jr(null),jr.GOOGLE_CREDENTIALS=new jr("google-credentials-uid"),jr.FIRST_PARTY=new jr("first-party-uid"),jr.MOCK_USER=new jr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let $r="9.6.11";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new o.Yd("@firebase/firestore");function qr(){return Br.logLevel}function Gr(e){Br.setLogLevel(e)}function Kr(e,...t){if(Br.logLevel<=o["in"].DEBUG){const n=t.map(Wr);Br.debug(`Firestore (${$r}): ${e}`,...n)}}function zr(e,...t){if(Br.logLevel<=o["in"].ERROR){const n=t.map(Wr);Br.error(`Firestore (${$r}): ${e}`,...n)}}function Hr(e,...t){if(Br.logLevel<=o["in"].WARN){const n=t.map(Wr);Br.warn(`Firestore (${$r}): ${e}`,...n)}}function Wr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(e="Unexpected state"){const t=`FIRESTORE (${$r}) INTERNAL ASSERTION FAILED: `+e;throw zr(t),new Error(t)}function Jr(e,t){e||Yr()}function Qr(e,t){e||Yr()}function Xr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ei extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ri{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jr.UNAUTHENTICATED)))}shutdown(){}}class ii{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class si{constructor(e){this.t=e,this.currentUser=jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ti,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Kr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Kr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ti)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Kr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Jr("string"==typeof t.accessToken),new ni(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Jr(null===e||"string"==typeof e),new jr(e)}}class oi{constructor(e,t,n){this.type="FirstParty",this.user=jr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ai{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new oi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ci{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ui{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&Kr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,Kr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Kr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):Kr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Jr("string"==typeof e.token),this.p=e.token,new ci(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class li{getToken(){return Promise.resolve(new ci(""))}invalidateToken(){}start(e,t){}shutdown(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi.A=-1;class fi{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=di(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function pi(e,t){return e<t?-1:e>t?1:0}function mi(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function gi(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ei(Zr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ei(Zr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ei(Zr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ei(Zr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return yi.fromMillis(Date.now())}static fromDate(e){return yi.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new yi(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pi(this.nanoseconds,e.nanoseconds):pi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.timestamp=e}static fromTimestamp(e){return new vi(e)}static min(){return new vi(new yi(0,0))}static max(){return new vi(new yi(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _i(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function bi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,n){void 0===t?t=0:t>e.length&&Yr(),void 0===n?n=e.length-t:n>e.length-t&&Yr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ii.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ei extends Ii{construct(e,t,n){return new Ei(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ei(Zr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ei(t)}static emptyPath(){return new Ei([])}}const Ti=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Si extends Ii{construct(e,t,n){return new Si(e,t,n)}static isValidIdentifier(e){return Ti.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Si.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Si(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ei(Zr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ei(Zr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ei(Zr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ei(Zr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Si(t)}static emptyPath(){return new Si([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e){this.fields=e,e.sort(Si.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ci(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ci(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ci.EMPTY_BYTE_STRING=new Ci("");const Ni=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Di(e){if(Jr(!!e),"string"==typeof e){let t=0;const n=Ni.exec(e);if(Jr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Oi(e.seconds),nanos:Oi(e.nanos)}}function Oi(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function xi(e){return"string"==typeof e?Ci.fromBase64String(e):Ci.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Li(e){const t=e.mapValue.fields.__previous_value__;return Ri(t)?Li(t):t}function Pi(e){const t=Di(e.mapValue.fields.__local_write_time__.timestampValue);return new yi(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e){return null==e}function Ui(e){return 0===e&&1/e==-1/0}function ji(e){return"number"==typeof e&&Number.isInteger(e)&&!Ui(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.path=e}static fromPath(e){return new $i(Ei.fromString(e))}static fromName(e){return new $i(Ei.fromString(e).popFirst(5))}static empty(){return new $i(Ei.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ei.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ei.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $i(new Ei(e.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},qi={nullValue:"NULL_VALUE"};function Gi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ri(e)?4:is(e)?9:10:Yr()}function Ki(e,t){if(e===t)return!0;const n=Gi(e);if(n!==Gi(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Pi(e).isEqual(Pi(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Di(e.timestampValue),r=Di(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return xi(e.bytesValue).isEqual(xi(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Oi(e.geoPointValue.latitude)===Oi(t.geoPointValue.latitude)&&Oi(e.geoPointValue.longitude)===Oi(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Oi(e.integerValue)===Oi(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Oi(e.doubleValue),r=Oi(t.doubleValue);return n===r?Ui(n)===Ui(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return mi(e.arrayValue.values||[],t.arrayValue.values||[],Ki);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(wi(n)!==wi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ki(n[i],r[i])))return!1;return!0}(e,t);default:return Yr()}}function zi(e,t){return void 0!==(e.values||[]).find((e=>Ki(e,t)))}function Hi(e,t){if(e===t)return 0;const n=Gi(e),r=Gi(t);if(n!==r)return pi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Oi(e.integerValue||e.doubleValue),r=Oi(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Wi(e.timestampValue,t.timestampValue);case 4:return Wi(Pi(e),Pi(t));case 5:return pi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=xi(e),r=xi(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=pi(n[i],r[i]);if(0!==e)return e}return pi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=pi(Oi(e.latitude),Oi(t.latitude));return 0!==n?n:pi(Oi(e.longitude),Oi(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Hi(n[i],r[i]);if(e)return e}return pi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=pi(r[o],s[o]);if(0!==e)return e;const t=Hi(n[r[o]],i[s[o]]);if(0!==t)return t}return pi(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Yr()}}function Wi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return pi(e,t);const n=Di(e),r=Di(t),i=pi(n.seconds,r.seconds);return 0!==i?i:pi(n.nanos,r.nanos)}function Yi(e){return Ji(e)}function Ji(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Di(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?xi(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,$i.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Ji(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Ji(e.fields[i])}`;return n+"}"}(e.mapValue):Yr();var t,n}function Qi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Xi(e){return!!e&&"integerValue"in e}function Zi(e){return!!e&&"arrayValue"in e}function es(e){return!!e&&"nullValue"in e}function ts(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ns(e){return!!e&&"mapValue"in e}function rs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return _i(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=rs(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function is(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function ss(e){return"nullValue"in e?qi:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Qi(Fi.empty(),$i.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Yr()}function os(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Qi(Fi.empty(),$i.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?Bi:Yr()}function as(e,t){return void 0===e?t:void 0===t||Hi(e,t)>0?e:t}function cs(e,t){return void 0===e?t:void 0===t||Hi(e,t)<0?e:t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.value=e}static empty(){return new us({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ns(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rs(t)}setAll(e){let t=Si.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=rs(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ki(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ns(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){_i(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new us(rs(this.value))}}function ls(e){const t=[];return _i(e.fields,((e,n)=>{const r=new Si([e]);if(ns(n)){const e=ls(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new ki(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hs{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new hs(e,0,vi.min(),vi.min(),us.empty(),0)}static newFoundDocument(e,t,n){return new hs(e,1,t,vi.min(),n,0)}static newNoDocument(e,t){return new hs(e,2,t,vi.min(),us.empty(),0)}static newUnknownDocument(e,t){return new hs(e,3,t,vi.min(),us.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=us.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=us.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof hs&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hs(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ds{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function fs(e){return e.fields.find((e=>2===e.kind))}function ps(e){return e.fields.filter((e=>2!==e.kind))}ds.UNKNOWN_ID=-1;class ms{constructor(e,t){this.fieldPath=e,this.kind=t}}class gs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new gs(0,ws.min())}}function ys(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=vi.fromTimestamp(1e9===r?new yi(n+1,0):new yi(n,r));return new ws(i,$i.empty(),t)}function vs(e){return new ws(e.readTime,e.key,-1)}class ws{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ws(vi.min(),$i.empty(),-1)}static max(){return new ws(vi.max(),$i.empty(),-1)}}function _s(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=$i.comparator(e.documentKey,t.documentKey),0!==n?n:pi(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function Is(e,t=null,n=[],r=[],i=null,s=null,o=null){return new bs(e,t,n,r,i,s,o)}function Es(e){const t=Xr(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Yi(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Vi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Yi(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Yi(e))).join(",")),t.P=e}return t.P}function Ts(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Yi(t.value)}`;var t})).join(", ")}]`),Vi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Yi(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Yi(e))).join(",")),`Target(${t})`}function Ss(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!$s(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ki(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!qs(e.startAt,t.startAt)&&qs(e.endAt,t.endAt)}function ks(e){return $i.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function As(e,t){return e.filters.filter((e=>e instanceof Ds&&e.field.isEqual(t)))}function Cs(e,t,n){let r,i=!0;for(const s of As(e,t)){let e,t=!0;switch(s.op){case"<":case"<=":e=ss(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=qi}as(r,e)===e&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];as(r,e)===e&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function Ns(e,t,n){let r,i=!0;for(const s of As(e,t)){let e,t=!0;switch(s.op){case">=":case">":e=os(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=Bi}cs(r,e)===e&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];cs(r,e)===e&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}class Ds extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Os(e,t,n):"array-contains"===t?new Ps(e,n):"in"===t?new Ms(e,n):"not-in"===t?new Fs(e,n):"array-contains-any"===t?new Vs(e,n):new Ds(e,t,n)}static V(e,t,n){return"in"===t?new xs(e,n):new Rs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Hi(t,this.value)):null!==t&&Gi(this.value)===Gi(t)&&this.v(Hi(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Yr()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Os extends Ds{constructor(e,t,n){super(e,t,n),this.key=$i.fromName(n.referenceValue)}matches(e){const t=$i.comparator(e.key,this.key);return this.v(t)}}class xs extends Ds{constructor(e,t){super(e,"in",t),this.keys=Ls("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Rs extends Ds{constructor(e,t){super(e,"not-in",t),this.keys=Ls("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ls(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>$i.fromName(e.referenceValue)))}class Ps extends Ds{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zi(t)&&zi(t.arrayValue,this.value)}}class Ms extends Ds{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&zi(this.value.arrayValue,t)}}class Fs extends Ds{constructor(e,t){super(e,"not-in",t)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!zi(this.value.arrayValue,t)}}class Vs extends Ds{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>zi(this.value.arrayValue,e)))}}class Us{constructor(e,t){this.position=e,this.inclusive=t}}class js{constructor(e,t="asc"){this.field=e,this.dir=t}}function $s(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Bs(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?$i.comparator($i.fromName(o.referenceValue),n.key):Hi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function qs(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ki(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function Ks(e,t,n,r,i,s,o,a){return new Gs(e,t,n,r,i,s,o,a)}function zs(e){return new Gs(e)}function Hs(e){return!Vi(e.limit)&&"F"===e.limitType}function Ws(e){return!Vi(e.limit)&&"L"===e.limitType}function Ys(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Js(e){for(const t of e.filters)if(t.S())return t.field;return null}function Qs(e){return null!==e.collectionGroup}function Xs(e){const t=Xr(e);if(null===t.D){t.D=[];const e=Js(t),n=Ys(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new js(e)),t.D.push(new js(Si.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new js(Si.keyField(),e))}}}return t.D}function Zs(e){const t=Xr(e);if(!t.C)if("F"===t.limitType)t.C=Is(t.path,t.collectionGroup,Xs(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Xs(t)){const t="desc"===i.dir?"asc":"desc";e.push(new js(i.field,t))}const n=t.endAt?new Us(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new Us(t.startAt.position,!t.startAt.inclusive):null;t.C=Is(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function eo(e,t,n){return new Gs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function to(e,t){return Ss(Zs(e),Zs(t))&&e.limitType===t.limitType}function no(e){return`${Es(Zs(e))}|lt:${e.limitType}`}function ro(e){return`Query(target=${Ts(Zs(e))}; limitType=${e.limitType})`}function io(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):$i.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Bs(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Xs(e),t))&&!(e.endAt&&!function(e,t,n){const r=Bs(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Xs(e),t))}(e,t)}function so(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function oo(e){return(t,n)=>{let r=!1;for(const i of Xs(e)){const e=ao(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function ao(e,t,n){const r=e.field.isKeyField()?$i.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Hi(r,i):Yr()}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Yr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ui(t)?"-0":t}}function uo(e){return{integerValue:""+e}}function lo(e,t){return ji(t)?uo(t):co(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this._=void 0}}function fo(e,t,n){return e instanceof go?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof yo?vo(e,t):e instanceof wo?_o(e,t):function(e,t){const n=mo(e,t),r=Io(n)+Io(e.k);return Xi(n)&&Xi(e.k)?uo(r):co(e.M,r)}(e,t)}function po(e,t,n){return e instanceof yo?vo(e,t):e instanceof wo?_o(e,t):n}function mo(e,t){return e instanceof bo?Xi(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class go extends ho{}class yo extends ho{constructor(e){super(),this.elements=e}}function vo(e,t){const n=Eo(t);for(const r of e.elements)n.some((e=>Ki(e,r)))||n.push(r);return{arrayValue:{values:n}}}class wo extends ho{constructor(e){super(),this.elements=e}}function _o(e,t){let n=Eo(t);for(const r of e.elements)n=n.filter((e=>!Ki(e,r)));return{arrayValue:{values:n}}}class bo extends ho{constructor(e,t){super(),this.M=e,this.k=t}}function Io(e){return Oi(e.integerValue||e.doubleValue)}function Eo(e){return Zi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t){this.field=e,this.transform=t}}function So(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof yo&&t instanceof yo||e instanceof wo&&t instanceof wo?mi(e.elements,t.elements,Ki):e instanceof bo&&t instanceof bo?Ki(e.k,t.k):e instanceof go&&t instanceof go}(e.transform,t.transform)}class ko{constructor(e,t){this.version=e,this.transformResults=t}}class Ao{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ao}static exists(e){return new Ao(void 0,e)}static updateTime(e){return new Ao(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Co(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class No{}function Do(e,t,n){e instanceof Po?function(e,t,n){const r=e.value.clone(),i=Vo(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Mo?function(e,t,n){if(!Co(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Vo(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Fo(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Oo(e,t,n){e instanceof Po?function(e,t,n){if(!Co(e.precondition,t))return;const r=e.value.clone(),i=Uo(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(Lo(t),r).setHasLocalMutations()}(e,t,n):e instanceof Mo?function(e,t,n){if(!Co(e.precondition,t))return;const r=Uo(e.fieldTransforms,n,t),i=t.data;i.setAll(Fo(e)),i.setAll(r),t.convertToFoundDocument(Lo(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Co(e.precondition,t)&&t.convertToNoDocument(vi.min())}(e,t)}function xo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=mo(r.transform,e||null);null!=i&&(null==n&&(n=us.empty()),n.set(r.field,i))}return n||null}function Ro(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&mi(e,t,((e,t)=>So(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Lo(e){return e.isFoundDocument()?e.version:vi.min()}class Po extends No{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Mo extends No{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Fo(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Vo(e,t,n){const r=new Map;Jr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,po(o,a,n[i]))}return r}function Uo(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,fo(e,s,t))}return r}class jo extends No{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class $o extends No{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qo,Go;function Ko(e){switch(e){default:return Yr();case Zr.CANCELLED:case Zr.UNKNOWN:case Zr.DEADLINE_EXCEEDED:case Zr.RESOURCE_EXHAUSTED:case Zr.INTERNAL:case Zr.UNAVAILABLE:case Zr.UNAUTHENTICATED:return!1;case Zr.INVALID_ARGUMENT:case Zr.NOT_FOUND:case Zr.ALREADY_EXISTS:case Zr.PERMISSION_DENIED:case Zr.FAILED_PRECONDITION:case Zr.ABORTED:case Zr.OUT_OF_RANGE:case Zr.UNIMPLEMENTED:case Zr.DATA_LOSS:return!0}}function zo(e){if(void 0===e)return zr("GRPC error has no .code"),Zr.UNKNOWN;switch(e){case qo.OK:return Zr.OK;case qo.CANCELLED:return Zr.CANCELLED;case qo.UNKNOWN:return Zr.UNKNOWN;case qo.DEADLINE_EXCEEDED:return Zr.DEADLINE_EXCEEDED;case qo.RESOURCE_EXHAUSTED:return Zr.RESOURCE_EXHAUSTED;case qo.INTERNAL:return Zr.INTERNAL;case qo.UNAVAILABLE:return Zr.UNAVAILABLE;case qo.UNAUTHENTICATED:return Zr.UNAUTHENTICATED;case qo.INVALID_ARGUMENT:return Zr.INVALID_ARGUMENT;case qo.NOT_FOUND:return Zr.NOT_FOUND;case qo.ALREADY_EXISTS:return Zr.ALREADY_EXISTS;case qo.PERMISSION_DENIED:return Zr.PERMISSION_DENIED;case qo.FAILED_PRECONDITION:return Zr.FAILED_PRECONDITION;case qo.ABORTED:return Zr.ABORTED;case qo.OUT_OF_RANGE:return Zr.OUT_OF_RANGE;case qo.UNIMPLEMENTED:return Zr.UNIMPLEMENTED;case qo.DATA_LOSS:return Zr.DATA_LOSS;default:return Yr()}}(Go=qo||(qo={}))[Go.OK=0]="OK",Go[Go.CANCELLED=1]="CANCELLED",Go[Go.UNKNOWN=2]="UNKNOWN",Go[Go.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Go[Go.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Go[Go.NOT_FOUND=5]="NOT_FOUND",Go[Go.ALREADY_EXISTS=6]="ALREADY_EXISTS",Go[Go.PERMISSION_DENIED=7]="PERMISSION_DENIED",Go[Go.UNAUTHENTICATED=16]="UNAUTHENTICATED",Go[Go.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Go[Go.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Go[Go.ABORTED=10]="ABORTED",Go[Go.OUT_OF_RANGE=11]="OUT_OF_RANGE",Go[Go.UNIMPLEMENTED=12]="UNIMPLEMENTED",Go[Go.INTERNAL=13]="INTERNAL",Go[Go.UNAVAILABLE=14]="UNAVAILABLE",Go[Go.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ho{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return bi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t){this.comparator=e,this.root=t||Jo.EMPTY}insert(e,t){return new Wo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jo.BLACK,null,null))}remove(e){return new Wo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jo.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yo(this.root,e,this.comparator,!0)}}class Yo{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jo{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Jo.RED,this.left=null!=r?r:Jo.EMPTY,this.right=null!=i?i:Jo.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Jo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Jo.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Jo.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Yr();if(this.right.isRed())throw Yr();const e=this.left.check();if(e!==this.right.check())throw Yr();return e+(this.isRed()?0:1)}}Jo.EMPTY=null,Jo.RED=!0,Jo.BLACK=!1,Jo.EMPTY=new class{constructor(){this.size=0}get key(){throw Yr()}get value(){throw Yr()}get color(){throw Yr()}get left(){throw Yr()}get right(){throw Yr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Jo(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qo{constructor(e){this.comparator=e,this.data=new Wo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xo(this.data.getIterator())}getIteratorFrom(e){return new Xo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Qo))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Qo(this.comparator);return t.data=e,t}}class Xo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zo(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new Wo($i.comparator);function ta(){return ea}const na=new Wo($i.comparator);function ra(){return na}function ia(){return new Ho((e=>e.toString()),((e,t)=>e.isEqual(t)))}const sa=new Wo($i.comparator),oa=new Qo($i.comparator);function aa(...e){let t=oa;for(const n of e)t=t.add(n);return t}const ca=new Qo(pi);function ua(){return ca}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,t)),new la(vi.min(),n,ua(),ta(),aa())}}class ha{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new ha(Ci.EMPTY_BYTE_STRING,t,aa(),aa(),aa())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.F=r}}class fa{constructor(e,t){this.targetId=e,this.$=t}}class pa{constructor(e,t,n=Ci.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ma{constructor(){this.B=0,this.L=va(),this.U=Ci.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=aa(),t=aa(),n=aa();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Yr()}})),new ha(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=va()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class ga{constructor(e){this.nt=e,this.st=new Map,this.it=ta(),this.rt=ya(),this.ot=new Qo(pi)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:Yr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.$.count,r=this.wt(t);if(r){const e=r.target;if(ks(e))if(0===n){const n=new $i(e.path);this.ct(t,n,hs.newNoDocument(n,vi.min()))}else Jr(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&ks(i.target)){const t=new $i(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,hs.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}}));let n=aa();this.rt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const r=new la(e,t,this.ot,this.it,n);return this.it=ta(),this.rt=ya(),this.ot=new Qo(pi),r}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new ma,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new Qo(pi),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||Kr("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new ma),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function ya(){return new Wo($i.comparator)}function va(){return new Wo($i.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),_a=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class ba{constructor(e,t){this.databaseId=e,this.N=t}}function Ia(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ea(e,t){return e.N?t.toBase64():t.toUint8Array()}function Ta(e,t){return Ia(e,t.toTimestamp())}function Sa(e){return Jr(!!e),vi.fromTimestamp(function(e){const t=Di(e);return new yi(t.seconds,t.nanos)}(e))}function ka(e,t){return function(e){return new Ei(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Aa(e){const t=Ei.fromString(e);return Jr(Za(t)),t}function Ca(e,t){return ka(e.databaseId,t.path)}function Na(e,t){const n=Aa(t);if(n.get(1)!==e.databaseId.projectId)throw new ei(Zr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ei(Zr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new $i(Ra(n))}function Da(e,t){return ka(e.databaseId,t)}function Oa(e){const t=Aa(e);return 4===t.length?Ei.emptyPath():Ra(t)}function xa(e){return new Ei(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ra(e){return Jr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function La(e,t,n){return{name:Ca(e,t),fields:n.value.mapValue.fields}}function Pa(e,t,n){const r=Na(e,t.name),i=Sa(t.updateTime),s=new us({mapValue:{fields:t.fields}}),o=hs.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Ma(e,t){return"found"in t?function(e,t){Jr(!!t.found),t.found.name,t.found.updateTime;const n=Na(e,t.found.name),r=Sa(t.found.updateTime),i=new us({mapValue:{fields:t.found.fields}});return hs.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){Jr(!!t.missing),Jr(!!t.readTime);const n=Na(e,t.missing),r=Sa(t.readTime);return hs.newNoDocument(n,r)}(e,t):Yr()}function Fa(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Yr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.N?(Jr(void 0===t||"string"==typeof t),Ci.fromBase64String(t||"")):(Jr(void 0===t||t instanceof Uint8Array),Ci.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Zr.UNKNOWN:zo(e.code);return new ei(t,e.message||"")}(o);n=new pa(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Na(e,r.document.name),s=Sa(r.document.updateTime),o=new us({mapValue:{fields:r.document.fields}}),a=hs.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new da(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Na(e,r.document),s=r.readTime?Sa(r.readTime):vi.min(),o=hs.newNoDocument(i,s),a=r.removedTargetIds||[];n=new da([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Na(e,r.document),s=r.removedTargetIds||[];n=new da([],s,i,null)}else{if(!("filter"in t))return Yr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Bo(r),s=e.targetId;n=new fa(s,i)}}return n}function Va(e,t){let n;if(t instanceof Po)n={update:La(e,t.key,t.value)};else if(t instanceof jo)n={delete:Ca(e,t.key)};else if(t instanceof Mo)n={update:La(e,t.key,t.data),updateMask:Xa(t.fieldMask)};else{if(!(t instanceof $o))return Yr();n={verify:Ca(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof go)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof yo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof bo)return{fieldPath:t.field.canonicalString(),increment:n.k};throw Yr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ta(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Yr()}(e,t.precondition)),n}function Ua(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Ao.updateTime(Sa(e.updateTime)):void 0!==e.exists?Ao.exists(e.exists):Ao.none()}(t.currentDocument):Ao.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Jr("REQUEST_TIME"===t.setToServerValue),n=new go;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new yo(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new wo(e)}else"increment"in t?n=new bo(e,t.increment):Yr();const r=Si.fromServerFormat(t.fieldPath);return new To(r,n)}(e,t))):[];if(t.update){t.update.name;const i=Na(e,t.update.name),s=new us({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new ki(t.map((e=>Si.fromServerFormat(e))))}(t.updateMask);return new Mo(i,s,e,n,r)}return new Po(i,s,n,r)}if(t.delete){const r=Na(e,t.delete);return new jo(r,n)}if(t.verify){const r=Na(e,t.verify);return new $o(r,n)}return Yr()}function ja(e,t){return e&&e.length>0?(Jr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Sa(e.updateTime):Sa(t);return n.isEqual(vi.min())&&(n=Sa(t)),new ko(n,e.transformResults||[])}(e,t)))):[]}function $a(e,t){return{documents:[Da(e,t.path)]}}function Ba(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Da(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Da(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(ts(e.value))return{unaryFilter:{field:Wa(e.field),op:"IS_NAN"}};if(es(e.value))return{unaryFilter:{field:Wa(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ts(e.value))return{unaryFilter:{field:Wa(e.field),op:"IS_NOT_NAN"}};if(es(e.value))return{unaryFilter:{field:Wa(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wa(e.field),op:Ha(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Wa(e.field),direction:za(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.N||Vi(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function qa(e){let t=Oa(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Jr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Ka(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new js(Ya(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Vi(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Us(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Us(n,t)}(n.endAt)),Ks(t,i,o,s,a,"F",c,u)}function Ga(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Yr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ka(e){return e?void 0!==e.unaryFilter?[Qa(e)]:void 0!==e.fieldFilter?[Ja(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Ka(e))).reduce(((e,t)=>e.concat(t))):Yr():[]}function za(e){return wa[e]}function Ha(e){return _a[e]}function Wa(e){return{fieldPath:e.canonicalString()}}function Ya(e){return Si.fromServerFormat(e.fieldPath)}function Ja(e){return Ds.create(Ya(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Yr()}}(e.fieldFilter.op),e.fieldFilter.value)}function Qa(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ya(e.unaryFilter.field);return Ds.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ya(e.unaryFilter.field);return Ds.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ya(e.unaryFilter.field);return Ds.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ya(e.unaryFilter.field);return Ds.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Yr()}}function Xa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Za(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=nc(t)),t=tc(e.get(n),t);return nc(t)}function tc(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function nc(e){return e+""}function rc(e){const t=e.length;if(Jr(t>=2),2===t)return Jr(""===e.charAt(0)&&""===e.charAt(1)),Ei.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Yr(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Yr()}s=t+2}return new Ei(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(e,t){return[e,ec(t)]}function oc(e,t,n){return[e,ec(t),n]}const ac={},cc=["prefixPath","collectionGroup","readTime","documentId"],uc=["prefixPath","collectionGroup","documentId"],lc=["collectionGroup","readTime","prefixPath","documentId"],hc=["canonicalId","targetId"],dc=["targetId","path"],fc=["path","targetId"],pc=["collectionId","parent"],mc=["indexId","uid"],gc=["uid","sequenceNumber"],yc=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vc=["indexId","uid","orderedDocumentKey"],wc=["userId","collectionPath","documentId"],_c=["userId","collectionPath","largestBatchId"],bc=["userId","collectionGroup","largestBatchId"],Ic=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ec=[...Ic,"documentOverlays"],Tc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Sc=[...Tc,"indexConfiguration","indexState","indexEntries"],kc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Yr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Cc(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Cc?t:Cc.resolve(t)}catch(e){return Cc.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Cc.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Cc.reject(t)}static resolve(e){return new Cc(((t,n)=>{t(e)}))}static reject(e){return new Cc(((t,n)=>{n(e)}))}static waitFor(e){return new Cc(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Cc.resolve(!1);for(const n of e)t=t.next((e=>e?Cc.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new ti,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new xc(e,t.error)):this.At.resolve()},this.transaction.onerror=t=>{const n=Fc(t.target.error);this.At.reject(new xc(e,n))}}static open(e,t,n,r){try{return new Nc(t,e.transaction(r,n))}catch(e){throw new xc(t,e)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(Kr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}Pt(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Lc(t)}}class Dc{constructor(e,t,n){this.name=e,this.version=t,this.bt=n,12.2===Dc.Vt((0,a.z$)())&&zr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Kr("SimpleDb","Removing database:",e),Pc(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!(0,a.hl)())return!1;if(Dc.St())return!0;const e=(0,a.z$)(),t=Dc.Vt(e),n=0<t&&t<10,r=Dc.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static St(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.Ct)}static xt(e,t){return e.store(t)}static Vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Nt(e){return this.db||(Kr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new xc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new ei(Zr.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new ei(Zr.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new xc(e,r))},r.onupgradeneeded=e=>{Kr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.bt.kt(t,r.transaction,e.oldVersion,this.version).next((()=>{Kr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Mt&&(this.db.onversionchange=e=>this.Mt(e)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Nt(e);const t=Nc.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.Pt(),e))).catch((e=>(t.abort(e),Cc.reject(e)))).toPromise();return s.catch((()=>{})),await t.Rt,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(Kr("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Oc{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return Pc(this.Ft.delete())}}class xc extends ei{constructor(e,t){super(Zr.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Rc(e){return"IndexedDbTransactionError"===e.name}class Lc{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Kr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Kr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Pc(n)}add(e){return Kr("SimpleDb","ADD",this.store.name,e,e),Pc(this.store.add(e))}get(e){return Pc(this.store.get(e)).next((t=>(void 0===t&&(t=null),Kr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Kr("SimpleDb","DELETE",this.store.name,e),Pc(this.store.delete(e))}count(){return Kr("SimpleDb","COUNT",this.store.name),Pc(this.store.count())}qt(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.Kt(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Cc(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}Gt(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Cc(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}Qt(e,t){Kr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.jt=!1;const r=this.cursor(n);return this.Kt(r,((e,t,n)=>n.delete()))}Wt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Kt(r,t)}zt(e){const t=this.cursor({});return new Cc(((n,r)=>{t.onerror=e=>{const t=Fc(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}Kt(e,t){const n=[];return new Cc(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Oc(i),o=t(i.primaryKey,i.value,s);if(o instanceof Cc){const e=o.catch((e=>(s.done(),Cc.reject(e))));n.push(e)}s.isDone?r():null===s.Lt?i.continue():i.continue(s.Lt)}})).next((()=>Cc.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Pc(e){return new Cc(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Fc(e.target.error);n(t)}}))}let Mc=!1;function Fc(e){const t=Dc.Vt((0,a.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new ei("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Mc||(Mc=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends Ac{constructor(e,t){super(),this.Ht=e,this.currentSequenceNumber=t}}function Uc(e,t){const n=Xr(e);return Dc.xt(n.Ht,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Do(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Oo(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Oo(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(vi.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),aa())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,((e,t)=>Ro(e,t)))&&mi(this.baseMutations,e.baseMutations,((e,t)=>Ro(e,t)))}}class $c{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Jr(e.mutations.length===n.length);let r=sa;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new $c(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,n,r,i=vi.min(),s=vi.min(),o=Ci.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new qc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new qc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.Jt=e}}function Kc(e,t){let n;if(t.document)n=Pa(e.Jt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=$i.fromSegments(t.noDocument.path),r=Yc(t.noDocument.readTime);n=hs.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Yr();{const e=$i.fromSegments(t.unknownDocument.path),r=Yc(t.unknownDocument.version);n=hs.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new yi(e[0],e[1]);return vi.fromTimestamp(t)}(t.readTime)),n}function zc(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Hc(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Ca(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Ia(e,t.version.toTimestamp())}}(e.Jt,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Wc(t.version)};else{if(!t.isUnknownDocument())return Yr();r.unknownDocument={path:n.path.toArray(),version:Wc(t.version)}}return r}function Hc(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Wc(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Yc(e){const t=new yi(e.seconds,e.nanoseconds);return vi.fromTimestamp(t)}function Jc(e,t){const n=(t.baseMutations||[]).map((t=>Ua(e.Jt,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>Ua(e.Jt,t))),i=yi.fromMillis(t.localWriteTimeMs);return new jc(t.batchId,i,n,r)}function Qc(e){const t=Yc(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Yc(e.lastLimboFreeSnapshotVersion):vi.min();let r;var i;return void 0!==e.query.documents?(Jr(1===(i=e.query).documents.length),r=Zs(zs(Oa(i.documents[0])))):r=function(e){return Zs(qa(e))}(e.query),new qc(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Ci.fromBase64String(e.resumeToken))}function Xc(e,t){const n=Wc(t.snapshotVersion),r=Wc(t.lastLimboFreeSnapshotVersion);let i;i=ks(t.target)?$a(e.Jt,t.target):Ba(e.Jt,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Es(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Zc(e){const t=qa({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?eo(t,t.limit,"L"):t}function eu(e,t){return new Bc(t.largestBatchId,Ua(e.Jt,t.overlayMutation))}function tu(e,t){const n=t.path.lastSegment();return[e,ec(t.path.popLast()),n]}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{getBundleMetadata(e,t){return ru(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Yc(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return ru(e).put({bundleId:(n=t).id,createTime:Wc(Sa(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return iu(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Zc(t.bundledQuery),readTime:Yc(t.readTime)};var t}))}saveNamedQuery(e,t){return iu(e).put(function(e){return{name:e.name,readTime:Wc(Sa(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function ru(e){return Uc(e,"bundles")}function iu(e){return Uc(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t){this.M=e,this.userId=t}static Yt(e,t){const n=t.uid||"";return new su(e,n)}getOverlay(e,t){return ou(e).get(tu(this.userId,t)).next((e=>e?eu(this.M,e):null))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new Bc(t,i);r.push(this.Xt(e,s))})),Cc.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(ec(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(ou(e).Qt("collectionPathOverlayIndex",r))})),Cc.waitFor(i)}getOverlaysForCollection(e,t,n){const r=ia(),i=ec(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ou(e).qt("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=eu(this.M,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=ia();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ou(e).Wt({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=eu(this.M,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}Xt(e,t){return ou(e).put(function(e,t,n){const[r,i,s]=tu(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Va(e.Jt,n.mutation)}}(this.M,this.userId,t))}}function ou(e){return Uc(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(Oi(e.integerValue));else if("doubleValue"in e){const n=Oi(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),Ui(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(`${n.seconds||""}`),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(xi(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?is(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):Yr()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const r of Object.keys(n))this.re(r,t),this.te(n[r],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const r of n)this.te(r,t)}ae(e,t){this.ne(t,37),$i.fromName(e).path.forEach((e=>{this.ne(t,60),this.le(e,t)}))}ne(e,t){e.se(t)}oe(e){e.se(2)}}function cu(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function uu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=cu(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}au.fe=new au;class lu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this._e(n.value),n=t.next();this.we()}me(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.ge(n.value),n=t.next();this.ye()}pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this._e(e);else if(e<2048)this._e(960|e>>>6),this._e(128|63&e);else if(t<"\ud800"||"\udbff"<t)this._e(480|e>>>12),this._e(128|63&e>>>6),this._e(128|63&e);else{const e=t.codePointAt(0);this._e(240|e>>>18),this._e(128|63&e>>>12),this._e(128|63&e>>>6),this._e(128|63&e)}}this.we()}Ie(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.ge(e);else if(e<2048)this.ge(960|e>>>6),this.ge(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.ge(480|e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e);else{const e=t.codePointAt(0);this.ge(240|e>>>18),this.ge(128|63&e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e)}}this.ye()}Te(e){const t=this.Ee(e),n=uu(t);this.Ae(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Re(e){const t=this.Ee(e),n=uu(t);this.Ae(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Pe(){this.be(255),this.be(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}_e(e){const t=255&e;0===t?(this.be(0),this.be(255)):255===t?(this.be(255),this.be(0)):this.be(t)}ge(e){const t=255&e;0===t?(this.ve(0),this.ve(255)):255===t?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.be(0),this.be(1)}ye(){this.ve(0),this.ve(1)}be(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class hu{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.Pe()}}class du{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class fu{constructor(){this.De=new lu,this.Ce=new hu(this.De),this.xe=new du(this.De)}seed(e){this.De.seed(e)}Ne(e){return 0===e?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new pu(this.indexId,this.documentKey,this.arrayValue,n)}}function mu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=gu(e.arrayValue,t.arrayValue),0!==n?n:(n=gu(e.directionalValue,t.directionalValue),0!==n?n:$i.comparator(e.documentKey,t.documentKey)))}function gu(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const t of e.filters){const e=t;e.S()?this.Fe=e:this.Oe.push(e)}}$e(e){const t=fs(e);if(void 0!==t&&!this.Be(t))return!1;const n=ps(e);let r=0,i=0;for(;r<n.length&&this.Be(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Fe){const e=n[r];if(!this.Le(this.Fe,e)||!this.Ue(this.Me[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Me.length||!this.Ue(this.Me[i++],e))return!1}return!0}Be(e){for(const t of this.Oe)if(this.Le(t,e))return!0;return!1}Le(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Ue(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.qe=new wu}addToCollectionParentIndex(e,t){return this.qe.add(t),Cc.resolve()}getCollectionParents(e,t){return Cc.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return Cc.resolve()}deleteFieldIndex(e,t){return Cc.resolve()}getDocumentsMatchingTarget(e,t){return Cc.resolve(null)}getFieldIndex(e,t){return Cc.resolve(null)}getFieldIndexes(e,t){return Cc.resolve([])}getNextCollectionGroupToUpdate(e){return Cc.resolve(null)}updateCollectionGroup(e,t,n){return Cc.resolve()}updateIndexEntries(e,t){return Cc.resolve()}}class wu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Qo(Ei.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Qo(Ei.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Uint8Array(0);class bu{constructor(e,t){this.user=e,this.databaseId=t,this.Ke=new wu,this.Ge=new Ho((e=>Es(e)),((e,t)=>Ss(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ke.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.Ke.add(t)}));const i={collectionId:n,parent:ec(r)};return Iu(e).put(i)}return Cc.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[gi(t),""],!1,!0);return Iu(e).qt(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(rc(r.parent))}return n}))}addFieldIndex(e,t){const n=Tu(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);return delete r.indexId,n.add(r).next()}deleteFieldIndex(e,t){const n=Tu(e),r=Su(e),i=Eu(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=Eu(e);let r=!0;const i=new Map;return Cc.forEach(this.Qe(t),(t=>this.getFieldIndex(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=aa();const r=[];return Cc.forEach(i,((i,s)=>{var o;Kr("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Es(t)}`);const a=function(e,t){const n=fs(t);if(void 0===n)return null;for(const r of As(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of ps(t))for(const t of As(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of ps(t)){const t=0===i.kind?Cs(e,i.fieldPath,e.startAt):Ns(e,i.fieldPath,e.startAt);if(!t.value)return null;n.push(t.value),r&&(r=t.inclusive)}return new Us(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of ps(t)){const t=0===i.kind?Ns(e,i.fieldPath,e.endAt):Cs(e,i.fieldPath,e.endAt);if(!t.value)return null;n.push(t.value),r&&(r=t.inclusive)}return new Us(n,r)}(s,i),h=this.je(i,s,u),d=this.je(i,s,l),f=this.We(i,s,c),p=this.ze(i.indexId,a,h,!!u&&u.inclusive,d,!!l&&l.inclusive,f);return Cc.forEach(p,(i=>n.Gt(i,t.limit).next((t=>{t.forEach((t=>{const n=$i.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Cc.resolve(null)}))}Qe(e){let t=this.Ge.get(e);return t||(t=[e],this.Ge.set(e,t),t)}ze(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(null!=n?n.length:1,null!=i?i.length:1),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.He(t[l/c]):_u,h=n?this.Je(e,a,n[l%c],r):this.Ye(e),d=i?this.Xe(e,a,i[l%c],s):this.Ye(e+1);u.push(...this.createRange(h,d,o.map((t=>this.Je(e,a,t,!0)))))}return u}Je(e,t,n,r){const i=new pu(e,$i.empty(),t,n);return r?i:i.ke()}Xe(e,t,n,r){const i=new pu(e,$i.empty(),t,n);return r?i.ke():i}Ye(e){return new pu(e,$i.empty(),_u,_u)}getFieldIndex(e,t){const n=new yu(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{const t=e.filter((e=>n.$e(e)));return t.sort(((e,t)=>t.fields.length-e.fields.length)),t.length>0?t[0]:null}))}Ze(e,t){const n=new fu;for(const r of ps(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Ne(r.kind);au.fe.Zt(e,i)}return n.Se()}He(e){const t=new fu;return au.fe.Zt(e,t.Ne(0)),t.Se()}tn(e,t){const n=new fu;return au.fe.Zt(Qi(this.databaseId,t),n.Ne(function(e){const t=ps(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Se()}We(e,t,n){if(null===n)return[];let r=[];r.push(new fu);let i=0;for(const s of ps(e)){const e=n[i++];for(const n of r)if(this.en(t,s.fieldPath)&&Zi(e))r=this.nn(r,s,e);else{const t=n.Ne(s.kind);au.fe.Zt(e,t)}}return this.sn(r)}je(e,t,n){return null==n?null:this.We(e,t,n.position)}sn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Se();return t}nn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new fu;n.seed(e.Se()),au.fe.Zt(s,n.Ne(t.kind)),i.push(n)}return i}en(e,t){return!!e.filters.find((e=>e instanceof Ds&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=Tu(e),r=Su(e);return(t?n.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.qt()).next((e=>{const t=[];return Cc.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new gs(t.sequenceNumber,new ws(Yc(t.readTime),new $i(rc(t.documentKey)),t.largestBatchId)):gs.empty(),r=e.fields.map((([e,t])=>new ms(Si.fromServerFormat(e),t)));return new ds(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:pi(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=Tu(e),i=Su(e);return this.rn(e).next((e=>r.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Cc.forEach(t,(t=>i.put(function(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Wc(r.readTime),documentKey:ec(r.documentKey.path),largestBatchId:r.largestBatchId}}(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Cc.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Cc.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Cc.forEach(i,(n=>this.on(e,t,n).next((t=>{const i=this.un(r,n);return t.isEqual(i)?Cc.resolve():this.an(e,r,n,t,i)})))))))}))}cn(e,t,n,r){return Eu(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.tn(n,t.key),documentKey:t.key.path.toArray()})}hn(e,t,n,r){return Eu(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.tn(n,t.key),t.key.path.toArray()])}on(e,t,n){const r=Eu(e);let i=new Qo(mu);return r.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.tn(n,t)])},((e,r)=>{i=i.add(new pu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}un(e,t){let n=new Qo(mu);const r=this.Ze(t,e);if(null==r)return n;const i=fs(t);if(null!=i){const s=e.data.field(i.fieldPath);if(Zi(s))for(const i of s.arrayValue.values||[])n=n.add(new pu(t.indexId,e.key,this.He(i),r))}else n=n.add(new pu(t.indexId,e.key,_u,r));return n}an(e,t,n,r,i){Kr("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Zo(s),c=Zo(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Zo(o)):t?(i(a),a=Zo(s)):(a=Zo(s),c=Zo(o))}}(r,i,mu,(r=>{s.push(this.cn(e,t,n,r))}),(r=>{s.push(this.hn(e,t,n,r))})),Cc.waitFor(s)}rn(e){let t=1;return Su(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>mu(e,t))).filter(((e,t,n)=>!t||0!==mu(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=mu(s,e),i=mu(s,t);if(0===n)r[0]=e.ke();else if(n>0&&i<0)r.push(s),r.push(s.ke());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2)i.push(IDBKeyRange.bound([r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,_u,[]],[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,_u,[]]));return i}}function Iu(e){return Uc(e,"collectionParents")}function Eu(e){return Uc(e,"indexEntries")}function Tu(e){return Uc(e,"indexConfiguration")}function Su(e){return Uc(e,"indexState")}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Au{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Au(e,Au.DEFAULT_COLLECTION_PERCENTILE,Au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Wt({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Jr(1===a)})));const u=[];for(const l of n.mutations){const e=oc(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Cc.waitFor(s).next((()=>u))}function Nu(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Yr();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Au.DEFAULT_COLLECTION_PERCENTILE=10,Au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Au.DEFAULT=new Au(41943040,Au.DEFAULT_COLLECTION_PERCENTILE,Au.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Au.DISABLED=new Au(-1,0,0);class Du{constructor(e,t,n,r){this.userId=e,this.M=t,this.indexManager=n,this.referenceDelegate=r,this.ln={}}static Yt(e,t,n,r){Jr(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Du(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xu(e).Wt({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Ru(e),s=xu(e);return s.add({}).next((o=>{Jr("number"==typeof o);const a=new jc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Va(e.Jt,t))),i=n.mutations.map((t=>Va(e.Jt,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.M,this.userId,a),u=[];let l=new Qo(((e,t)=>pi(e.canonicalString(),t.canonicalString())));for(const e of r){const t=oc(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,ac))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.ln[o]=a.keys()})),Cc.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return xu(e).get(t).next((e=>e?(Jr(e.userId===this.userId),Jc(this.M,e)):null))}fn(e,t){return this.ln[t]?Cc.resolve(this.ln[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.ln[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return xu(e).Wt({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(Jr(t.batchId>=n),i=Jc(this.M,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return xu(e).Wt({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return xu(e).qt("userMutationsIndex",t).next((e=>e.map((e=>Jc(this.M,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=sc(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Ru(e).Wt({range:r},((n,r,s)=>{const[o,a,c]=n,u=rc(a);if(o===this.userId&&t.path.isEqual(u))return xu(e).get(c).next((e=>{if(!e)throw Yr();Jr(e.userId===this.userId),i.push(Jc(this.M,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Qo(pi);const r=[];return t.forEach((t=>{const i=sc(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Ru(e).Wt({range:s},((e,r,i)=>{const[s,o,a]=e,c=rc(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Cc.waitFor(r).next((()=>this.dn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=sc(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Qo(pi);return Ru(e).Wt({range:s},((e,t,i)=>{const[s,a,c]=e,u=rc(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.dn(e,o)))}dn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(xu(e).get(t).next((e=>{if(null===e)throw Yr();Jr(e.userId===this.userId),n.push(Jc(this.M,e))})))})),Cc.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Cu(e.Ht,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this._n(t.batchId)})),Cc.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}_n(e){delete this.ln[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Cc.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Ru(e).Wt({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=rc(e[1]);r.push(t)}else n.done()})).next((()=>{Jr(0===r.length)}))}))}containsKey(e,t){return Ou(e,this.userId,t)}wn(e){return Lu(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Ou(e,t,n){const r=sc(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Ru(e).Wt({range:s,jt:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function xu(e){return Uc(e,"mutations")}function Ru(e){return Uc(e,"documentMutations")}function Lu(e){return Uc(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new Pu(0)}static yn(){return new Pu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t){this.referenceDelegate=e,this.M=t}allocateTargetId(e){return this.pn(e).next((t=>{const n=new Pu(t.highestTargetId);return t.highestTargetId=n.next(),this.In(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.pn(e).next((e=>vi.fromTimestamp(new yi(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.pn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.pn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.In(e,r))))}addTargetData(e,t){return this.Tn(e,t).next((()=>this.pn(e).next((n=>(n.targetCount+=1,this.En(t,n),this.In(e,n))))))}updateTargetData(e,t){return this.Tn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Fu(e).delete(t.targetId))).next((()=>this.pn(e))).next((t=>(Jr(t.targetCount>0),t.targetCount-=1,this.In(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Fu(e).Wt(((s,o)=>{const a=Qc(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Cc.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Fu(e).Wt(((e,n)=>{const r=Qc(n);t(r)}))}pn(e){return Vu(e).get("targetGlobalKey").next((e=>(Jr(null!==e),e)))}In(e,t){return Vu(e).put("targetGlobalKey",t)}Tn(e,t){return Fu(e).put(Xc(this.M,t))}En(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.pn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Es(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Fu(e).Wt({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Qc(n);Ss(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Uu(e);return t.forEach((t=>{const s=ec(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Cc.waitFor(r)}removeMatchingKeys(e,t,n){const r=Uu(e);return Cc.forEach(t,(t=>{const i=ec(t.path);return Cc.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Uu(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Uu(e);let i=aa();return r.Wt({range:n,jt:!0},((e,t,n)=>{const r=rc(e[1]),s=new $i(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=ec(t.path),r=IDBKeyRange.bound([n],[gi(n)],!1,!0);let i=0;return Uu(e).Wt({index:"documentTargetsIndex",jt:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}Et(e,t){return Fu(e).get(t).next((e=>e?Qc(e):null))}}function Fu(e){return Uc(e,"targets")}function Vu(e){return Uc(e,"targetGlobal")}function Uu(e){return Uc(e,"targetDocuments")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(e){if(e.code!==Zr.FAILED_PRECONDITION||e.message!==kc)throw e;Kr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u([e,t],[n,r]){const i=pi(e,n);return 0===i?pi(t,r):i}class Bu{constructor(e){this.An=e,this.buffer=new Qo($u),this.Rn=0}Pn(){return++this.Rn}bn(e){const t=[e,this.Pn()];if(this.buffer.size<this.An)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();$u(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class qu{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.Vn=!1,this.vn=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Sn(e)}stop(){this.vn&&(this.vn.cancel(),this.vn=null)}get started(){return null!==this.vn}Sn(e){const t=this.Vn?3e5:6e4;Kr("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.vn=null,this.Vn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){Rc(e)?Kr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ju(e)}await this.Sn(e)}))}}class Gu{constructor(e,t){this.Dn=e,this.params=t}calculateTargetCount(e,t){return this.Dn.Cn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Cc.resolve(hi.A);const n=new Bu(t);return this.Dn.forEachTarget(e,(e=>n.bn(e.sequenceNumber))).next((()=>this.Dn.xn(e,(e=>n.bn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Dn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Dn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Kr("LruGarbageCollector","Garbage collection skipped; disabled"),Cc.resolve(ku)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Kr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ku):this.Nn(e,t)))}getCacheSize(e){return this.Dn.getCacheSize(e)}Nn(e,t){let n,r,i,s,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Kr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,a=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),qr()<=o["in"].DEBUG&&Kr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(a-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Cc.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Gu(e,t)}(this,t)}Cn(e){const t=this.kn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}kn(e){let t=0;return this.xn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}xn(e,t){return this.Mn(e,((e,n)=>t(n)))}addReference(e,t,n){return zu(e,n)}removeReference(e,t,n){return zu(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return zu(e,t)}On(e,t){return function(e,t){let n=!1;return Lu(e).zt((r=>Ou(e,r,t).next((e=>(e&&(n=!0),Cc.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Mn(e,((s,o)=>{if(o<=t){const t=this.On(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,vi.min()),Uu(e).delete([0,ec(s.path)]))))}));r.push(t)}})).next((()=>Cc.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return zu(e,t)}Mn(e,t){const n=Uu(e);let r,i=hi.A;return n.Wt({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==hi.A&&t(new $i(rc(r)),i),i=o,r=s):i=hi.A})).next((()=>{i!==hi.A&&t(new $i(rc(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function zu(e,t){return Uu(e).put(function(e,t){return{targetId:0,path:ec(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this.changes=new Ho((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hs.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Cc.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Qu(e).put(n)}removeEntry(e,t,n){return Qu(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Hc(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Fn(e,n))))}getEntry(e,t){let n=hs.newInvalidDocument(t);return Qu(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Xu(t))},((e,r)=>{n=this.$n(t,r)})).next((()=>n))}Bn(e,t){let n={size:0,document:hs.newInvalidDocument(t)};return Qu(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Xu(t))},((e,r)=>{n={document:this.$n(t,r),size:Nu(r)}})).next((()=>n))}getEntries(e,t){let n=ta();return this.Ln(e,t,((e,t)=>{const r=this.$n(e,t);n=n.insert(e,r)})).next((()=>n))}Un(e,t){let n=ta(),r=new Wo($i.comparator);return this.Ln(e,t,((e,t)=>{const i=this.$n(e,t);n=n.insert(e,i),r=r.insert(e,Nu(t))})).next((()=>({documents:n,qn:r})))}Ln(e,t,n){if(t.isEmpty())return Cc.resolve();let r=new Qo(el);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(Xu(r.first()),Xu(r.last())),s=r.getIterator();let o=s.getNext();return Qu(e).Wt({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=$i.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&el(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.Ut(Xu(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),Hc(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Qu(e).qt(IDBKeyRange.bound(r,i,!0)).next((e=>{let t=ta();for(const n of e){const e=this.$n($i.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let i=ta();const s=Zu(t,n),o=Zu(t,ws.max());return Qu(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.$n($i.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new Yu(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Ju(e).get("remoteDocumentGlobalKey").next((e=>(Jr(!!e),e)))}Fn(e,t){return Ju(e).put("remoteDocumentGlobalKey",t)}$n(e,t){if(t){const e=Kc(this.M,t);if(!e.isNoDocument()||!e.version.isEqual(vi.min()))return e}return hs.newInvalidDocument(e)}}class Yu extends Hu{constructor(e,t){super(),this.Kn=e,this.trackRemovals=t,this.Gn=new Ho((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Qo(((e,t)=>pi(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Gn.get(i);if(t.push(this.Kn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=zc(this.Kn.M,s);r=r.add(i.path.popLast());const c=Nu(a);n+=c-o.size,t.push(this.Kn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=zc(this.Kn.M,s.convertToNoDocument(vi.min()));t.push(this.Kn.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.Kn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Kn.updateMetadata(e,n)),Cc.waitFor(t)}getFromCache(e,t){return this.Kn.Bn(e,t).next((e=>(this.Gn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Kn.Un(e,t).next((({documents:e,qn:t})=>(t.forEach(((t,n)=>{this.Gn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Ju(e){return Uc(e,"remoteDocumentGlobal")}function Qu(e){return Uc(e,"remoteDocumentsV14")}function Xu(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Zu(e,t){const n=t.documentKey.path.toArray();return[e,Hc(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function el(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=pi(n[s],r[s]),i)return i;return i=pi(n.length,r.length),i||(i=pi(n[n.length-2],r[r.length-2]),i||pi(n[n.length-1],r[r.length-1]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.M=e}kt(e,t,n,r){const i=new Nc("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ic,{unique:!0}),e.createObjectStore("documentMutations")}(e),nl(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Cc.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),nl(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:vi.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").qt().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ic,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Cc.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Qn(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.jn(i))))),n<7&&r>=7&&(s=s.next((()=>this.Wn(i)))),n<8&&r>=8&&(s=s.next((()=>this.zn(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.Hn(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:wc});t.createIndex("collectionPathOverlayIndex",_c,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",bc,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:cc});t.createIndex("documentKeyIndex",uc),t.createIndex("collectionGroupIndex",lc)}(e))).next((()=>this.Jn(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>{!function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:mc}).createIndex("sequenceNumberIndex",gc,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:yc}).createIndex("documentKeyIndex",vc,{unique:!1})}(e)}))),s}jn(e){let t=0;return e.store("remoteDocuments").Wt(((e,n)=>{t+=Nu(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Qn(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.qt().next((t=>Cc.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.qt("userMutationsIndex",r).next((n=>Cc.forEach(n,(n=>{Jr(n.userId===t.userId);const r=Jc(this.M,n);return Cu(e,t.userId,r).next((()=>{}))}))))}))))}Wn(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Wt(((n,i)=>{const s=new Ei(n),o=function(e){return[0,ec(e)]}(s);r.push(t.get(o).next((n=>n?Cc.resolve():(n=>t.put({targetId:0,path:ec(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Cc.waitFor(r)))}))}zn(e,t){e.createObjectStore("collectionParents",{keyPath:pc});const n=t.store("collectionParents"),r=new wu,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:ec(r)})}};return t.store("remoteDocuments").Wt({jt:!0},((e,t)=>{const n=new Ei(e);return i(n.popLast())})).next((()=>t.store("documentMutations").Wt({jt:!0},(([e,t,n],r)=>{const s=rc(t);return i(s.popLast())}))))}Hn(e){const t=e.store("targets");return t.Wt(((e,n)=>{const r=Qc(n),i=Xc(this.M,r);return t.put(i)}))}Jn(e,t){const n=t.store("remoteDocuments"),r=[];return n.Wt(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new $i(Ei.fromString(o.document.name).popFirst(5)):o.noDocument?$i.fromSegments(o.noDocument.path):o.unknownDocument?$i.fromSegments(o.unknownDocument.path):Yr()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Cc.waitFor(r)))}}function nl(e){e.createObjectStore("targetDocuments",{keyPath:dc}).createIndex("documentTargetsIndex",fc,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",hc,{unique:!0}),e.createObjectStore("targetGlobal")}const rl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class il{constructor(e,t,n,r,i,s,o,a,c,u,l=13){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Yn=i,this.window=s,this.document=o,this.Xn=c,this.Zn=u,this.ts=l,this.es=null,this.ns=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ss=null,this.inForeground=!1,this.rs=null,this.os=null,this.us=Number.NEGATIVE_INFINITY,this.cs=e=>Promise.resolve(),!il.vt())throw new ei(Zr.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ku(this,r),this.hs=t+"main",this.M=new Gc(a),this.ls=new Dc(this.hs,this.ts,new tl(this.M)),this.fs=new Mu(this.referenceDelegate,this.M),this.ds=function(e){return new Wu(e)}(this.M),this._s=new nu,this.window&&this.window.localStorage?this.ws=this.window.localStorage:(this.ws=null,!1===u&&zr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gs().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ei(Zr.FAILED_PRECONDITION,rl);return this.ys(),this.ps(),this.Is(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.fs.getHighestSequenceNumber(e)))})).then((e=>{this.es=new hi(e,this.Xn)})).then((()=>{this.ns=!0})).catch((e=>(this.ls&&this.ls.close(),Promise.reject(e))))}Ts(e){return this.cs=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ls.Ot((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Yn.enqueueAndForget((async()=>{this.started&&await this.gs()})))}gs(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ol(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Es(e).next((e=>{e||(this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))))}))})).next((()=>this.As(e))).next((t=>this.isPrimary&&!t?this.Rs(e).next((()=>!1)):!!t&&this.Ps(e).next((()=>!0)))))).catch((e=>{if(Rc(e))return Kr("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Kr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Yn.enqueueRetryable((()=>this.cs(e))),this.isPrimary=e}))}Es(e){return sl(e).get("owner").next((e=>Cc.resolve(this.bs(e))))}Vs(e){return ol(e).delete(this.clientId)}async vs(){if(this.isPrimary&&!this.Ss(this.us,18e5)){this.us=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Uc(e,"clientMetadata");return t.qt().next((e=>{const n=this.Ds(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Cc.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.ws)for(const t of e)this.ws.removeItem(this.Cs(t.clientId))}}Is(){this.os=this.Yn.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.gs().then((()=>this.vs())).then((()=>this.Is()))))}bs(e){return!!e&&e.ownerId===this.clientId}As(e){return this.Zn?Cc.resolve(!0):sl(e).get("owner").next((t=>{if(null!==t&&this.Ss(t.leaseTimestampMs,5e3)&&!this.xs(t.ownerId)){if(this.bs(t)&&this.networkEnabled)return!0;if(!this.bs(t)){if(!t.allowTabSynchronization)throw new ei(Zr.FAILED_PRECONDITION,rl);return!1}}return!(!this.networkEnabled||!this.inForeground)||ol(e).qt().next((e=>void 0===this.Ds(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Kr("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.ns=!1,this.Ns(),this.os&&(this.os.cancel(),this.os=null),this.ks(),this.Ms(),await this.ls.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Vc(e,hi.A);return this.Rs(t).next((()=>this.Vs(t)))})),this.ls.close(),this.Os()}Ds(e,t){return e.filter((e=>this.Ss(e.updateTimeMs,t)&&!this.xs(e.clientId)))}Fs(){return this.runTransaction("getActiveClients","readonly",(e=>ol(e).qt().next((e=>this.Ds(e,18e5).map((e=>e.clientId))))))}get started(){return this.ns}getMutationQueue(e,t){return Du.Yt(e,this.M,t,this.referenceDelegate)}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getIndexManager(e){return new bu(e,this.M.Jt.databaseId)}getDocumentOverlayCache(e){return su.Yt(this.M,e)}getBundleCache(){return this._s}runTransaction(e,t,n){Kr("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=14===(s=this.ts)?Sc:13===s?Tc:12===s?Ec:11===s?Ic:void Yr();var s;let o;return this.ls.runTransaction(e,r,i,(r=>(o=new Vc(r,this.es?this.es.next():hi.A),"readwrite-primary"===t?this.Es(o).next((e=>!!e||this.As(o))).next((t=>{if(!t)throw zr(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Yn.enqueueRetryable((()=>this.cs(!1))),new ei(Zr.FAILED_PRECONDITION,kc);return n(o)})).next((e=>this.Ps(o).next((()=>e)))):this.$s(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}$s(e){return sl(e).get("owner").next((e=>{if(null!==e&&this.Ss(e.leaseTimestampMs,5e3)&&!this.xs(e.ownerId)&&!this.bs(e)&&!(this.Zn||this.allowTabSynchronization&&e.allowTabSynchronization))throw new ei(Zr.FAILED_PRECONDITION,rl)}))}Ps(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return sl(e).put("owner",t)}static vt(){return Dc.vt()}Rs(e){const t=sl(e);return t.get("owner").next((e=>this.bs(e)?(Kr("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Cc.resolve()))}Ss(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(zr(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ys(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.rs=()=>{this.Yn.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.gs())))},this.document.addEventListener("visibilitychange",this.rs),this.inForeground="visible"===this.document.visibilityState)}ks(){this.rs&&(this.document.removeEventListener("visibilitychange",this.rs),this.rs=null)}ps(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ss=()=>{this.Ns(),(0,a.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Yn.enterRestrictedMode(!0),this.Yn.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ss))}Ms(){this.ss&&(this.window.removeEventListener("pagehide",this.ss),this.ss=null)}xs(e){var t;try{const n=null!==(null===(t=this.ws)||void 0===t?void 0:t.getItem(this.Cs(e)));return Kr("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return zr("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ns(){if(this.ws)try{this.ws.setItem(this.Cs(this.clientId),String(Date.now()))}catch(I){zr("Failed to set zombie client id.",I)}}Os(){if(this.ws)try{this.ws.removeItem(this.Cs(this.clientId))}catch(I){}}Cs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function sl(e){return Uc(e,"owner")}function ol(e){return Uc(e,"clientMetadata")}function al(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class cl{constructor(e,t,n){this.ds=e,this.Bs=t,this.indexManager=n}Ls(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Us(e,t,n)))}Us(e,t,n){return this.ds.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}qs(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}Ks(e,t){return this.ds.getEntries(e,t).next((t=>this.Gs(e,t).next((()=>t))))}Gs(e,t){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.qs(t,e)))}Qs(e,t,n){return function(e){return $i.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.js(e,t.path):Qs(t)?this.Ws(e,t,n):this.zs(e,t,n)}js(e,t){return this.Ls(e,new $i(t)).next((e=>{let t=ra();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Ws(e,t,n){const r=t.collectionGroup;let i=ra();return this.indexManager.getCollectionParents(e,r).next((s=>Cc.forEach(s,(s=>{const o=function(e,t){return new Gs(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.zs(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}zs(e,t,n){let r;return this.ds.getAllFromCollection(e,t.path,n).next((n=>(r=n,this.Bs.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=hs.newInvalidDocument(n),r=r.insert(n,i)),Oo(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((e,n)=>{io(t,n)||(r=r.remove(e))})),r)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hs=n,this.Js=r}static Ys(e,t){let n=aa(),r=aa();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ul(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{Xs(e){this.Zs=e}Qs(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(vi.min())?this.ti(e,t):this.Zs.Ks(e,r).next((i=>{const s=this.ei(t,i);return(Hs(t)||Ws(t))&&this.ni(t.limitType,s,r,n)?this.ti(e,t):(qr()<=o["in"].DEBUG&&Kr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ro(t)),this.Zs.Qs(e,t,ys(n,-1)).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}ei(e,t){let n=new Qo(oo(e));return t.forEach(((t,r)=>{io(e,r)&&(n=n.add(r))})),n}ni(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ti(e,t){return qr()<=o["in"].DEBUG&&Kr("QueryEngine","Using full collection scan to execute query:",ro(t)),this.Zs.Qs(e,t,ws.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t,n,r){this.persistence=e,this.si=t,this.M=r,this.ii=new Wo(pi),this.ri=new Ho((e=>Es(e)),Ss),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(n)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new cl(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ii)))}}function dl(e,t,n,r){return new hl(e,t,n,r)}async function fl(e,t){const n=Xr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.Bs.getAllMutationBatches(e).next((i=>(r=i,n.ai(t),n.Bs.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=aa();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.ci.Ks(e,o).next((e=>({hi:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function pl(e,t){const n=Xr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Cc.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Jr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.Bs.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.ci.Ks(e,r)))}))}function ml(e){const t=Xr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.fs.getLastRemoteSnapshotVersion(e)))}function gl(e,t){const n=Xr(e),r=t.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.fs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.fs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Ci.EMPTY_BYTE_STRING,vi.min()).withLastLimboFreeSnapshotVersion(vi.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.fs.updateTargetData(e,u))}));let a=ta();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(yl(e,s,t.documentUpdates).next((e=>{a=e}))),!r.isEqual(vi.min())){const t=n.fs.getLastRemoteSnapshotVersion(e).next((t=>n.fs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Cc.waitFor(o).next((()=>s.apply(e))).next((()=>n.ci.Gs(e,a))).next((()=>a))})).then((e=>(n.ii=i,e)))}function yl(e,t,n){let r=aa();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=ta();return n.forEach(((n,i)=>{const s=e.get(n);i.isNoDocument()&&i.version.isEqual(vi.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Kr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)})),r}))}function vl(e,t){const n=Xr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.Bs.getNextMutationBatchAfterBatchId(e,t))))}function wl(e,t){const n=Xr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.fs.getTargetData(e,t).next((i=>i?(r=i,Cc.resolve(r)):n.fs.allocateTargetId(e).next((i=>(r=new qc(t,i,0,e.currentSequenceNumber),n.fs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ii.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ii=n.ii.insert(e.targetId,e),n.ri.set(t,e.targetId)),e}))}async function _l(e,t,n){const r=Xr(e),i=r.ii.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Rc(e))throw e;Kr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ii=r.ii.remove(t),r.ri.delete(i.target)}function bl(e,t,n){const r=Xr(e);let i=vi.min(),s=aa();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Xr(e),i=r.ri.get(n);return void 0!==i?Cc.resolve(r.ii.get(i)):r.fs.getTargetData(t,n)}(r,e,Zs(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.si.Qs(e,t,n?i:vi.min(),n?s:aa()))).next((e=>(Tl(r,so(t),e),{documents:e,li:s})))))}function Il(e,t){const n=Xr(e),r=Xr(n.fs),i=n.ii.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.Et(e,t).next((e=>e?e.target:null))))}function El(e,t){const n=Xr(e),r=n.oi.get(t)||vi.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.ui.getAllFromCollectionGroup(e,t,ys(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Tl(n,t,e),e)))}function Tl(e,t,n){let r=vi.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.oi.set(t,r)}async function Sl(e,t,n,r){const i=Xr(e);let s=aa(),o=ta();for(const u of n){const e=t.fi(u.metadata.name);u.document&&(s=s.add(e));const n=t.di(u);n.setReadTime(t._i(u.metadata.readTime)),o=o.insert(e,n)}const a=i.ui.newChangeBuffer({trackRemovals:!0}),c=await wl(i,function(e){return Zs(zs(Ei.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>yl(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.fs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.fs.addMatchingKeys(e,s,c.targetId))).next((()=>i.ci.Gs(e,t))).next((()=>t))))))}async function kl(e,t,n=aa()){const r=await wl(e,Zs(Zc(t.bundledQuery))),i=Xr(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Sa(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i._s.saveNamedQuery(e,t);const o=r.withResumeToken(Ci.EMPTY_BYTE_STRING,s);return i.ii=i.ii.insert(o.targetId,o),i.fs.updateTargetData(e,o).next((()=>i.fs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.fs.addMatchingKeys(e,n,r.targetId))).next((()=>i._s.saveNamedQuery(e,t)))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,t){return Cc.resolve(this.wi.get(t))}saveBundleMetadata(e,t){var n;return this.wi.set(t.id,{id:(n=t).id,version:n.version,createTime:Sa(n.createTime)}),Cc.resolve()}getNamedQuery(e,t){return Cc.resolve(this.mi.get(t))}saveNamedQuery(e,t){return this.mi.set(t.name,function(e){return{name:e.name,query:Zc(e.bundledQuery),readTime:Sa(e.readTime)}}(t)),Cc.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.overlays=new Wo($i.comparator),this.gi=new Map}getOverlay(e,t){return Cc.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Xt(e,t,r)})),Cc.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.gi.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.gi.delete(n)),Cc.resolve()}getOverlaysForCollection(e,t,n){const r=ia(),i=t.length+1,s=new $i(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Cc.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Wo(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ia(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ia(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Cc.resolve(o)}Xt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const e=this.gi.get(r.largestBatchId).delete(n.key);this.gi.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Bc(t,n));let i=this.gi.get(t);void 0===i&&(i=aa(),this.gi.set(t,i)),this.gi.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.yi=new Qo(Dl.pi),this.Ii=new Qo(Dl.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,t){const n=new Dl(e,t);this.yi=this.yi.add(n),this.Ii=this.Ii.add(n)}Ei(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ai(new Dl(e,t))}Ri(e,t){e.forEach((e=>this.removeReference(e,t)))}Pi(e){const t=new $i(new Ei([])),n=new Dl(t,e),r=new Dl(t,e+1),i=[];return this.Ii.forEachInRange([n,r],(e=>{this.Ai(e),i.push(e.key)})),i}bi(){this.yi.forEach((e=>this.Ai(e)))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const t=new $i(new Ei([])),n=new Dl(t,e),r=new Dl(t,e+1);let i=aa();return this.Ii.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Dl(e,0),n=this.yi.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Dl{constructor(e,t){this.key=e,this.vi=t}static pi(e,t){return $i.comparator(e.key,t.key)||pi(e.vi,t.vi)}static Ti(e,t){return pi(e.vi,t.vi)||$i.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.Bs=[],this.Si=1,this.Di=new Qo(Dl.pi)}checkEmpty(e){return Cc.resolve(0===this.Bs.length)}addMutationBatch(e,t,n,r){const i=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const s=new jc(i,t,n,r);this.Bs.push(s);for(const o of r)this.Di=this.Di.add(new Dl(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Cc.resolve(s)}lookupMutationBatch(e,t){return Cc.resolve(this.Ci(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.xi(n),i=r<0?0:r;return Cc.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return Cc.resolve(0===this.Bs.length?-1:this.Si-1)}getAllMutationBatches(e){return Cc.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Dl(t,0),r=new Dl(t,Number.POSITIVE_INFINITY),i=[];return this.Di.forEachInRange([n,r],(e=>{const t=this.Ci(e.vi);i.push(t)})),Cc.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Qo(pi);return t.forEach((e=>{const t=new Dl(e,0),r=new Dl(e,Number.POSITIVE_INFINITY);this.Di.forEachInRange([t,r],(e=>{n=n.add(e.vi)}))})),Cc.resolve(this.Ni(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;$i.isDocumentKey(i)||(i=i.child(""));const s=new Dl(new $i(i),0);let o=new Qo(pi);return this.Di.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.vi)),!0)}),s),Cc.resolve(this.Ni(o))}Ni(e){const t=[];return e.forEach((e=>{const n=this.Ci(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Jr(0===this.ki(t.batchId,"removed")),this.Bs.shift();let n=this.Di;return Cc.forEach(t.mutations,(r=>{const i=new Dl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Di=n}))}_n(e){}containsKey(e,t){const n=new Dl(t,0),r=this.Di.firstAfterOrEqual(n);return Cc.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.Bs.length,Cc.resolve()}ki(e,t){return this.xi(e)}xi(e){return 0===this.Bs.length?0:e-this.Bs[0].batchId}Ci(e){const t=this.xi(e);return t<0||t>=this.Bs.length?null:this.Bs[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.Mi=e,this.docs=new Wo($i.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mi(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Cc.resolve(n?n.document.mutableCopy():hs.newInvalidDocument(t))}getEntries(e,t){let n=ta();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():hs.newInvalidDocument(e))})),Cc.resolve(n)}getAllFromCollection(e,t,n){let r=ta();const i=new $i(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||_s(vs(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Cc.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Yr()}Oi(e,t){return Cc.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Rl(this)}getSize(e){return Cc.resolve(this.size)}}class Rl extends Hu{constructor(e){super(),this.Kn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Kn.addEntry(e,r)):this.Kn.removeEntry(n)})),Cc.waitFor(t)}getFromCache(e,t){return this.Kn.getEntry(e,t)}getAllFromCache(e,t){return this.Kn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.persistence=e,this.Fi=new Ho((e=>Es(e)),Ss),this.lastRemoteSnapshotVersion=vi.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Nl,this.targetCount=0,this.Li=Pu.gn()}forEachTarget(e,t){return this.Fi.forEach(((e,n)=>t(n))),Cc.resolve()}getLastRemoteSnapshotVersion(e){return Cc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Cc.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),Cc.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$i&&(this.$i=t),Cc.resolve()}Tn(e){this.Fi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Li=new Pu(t),this.highestTargetId=t),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,t){return this.Tn(t),this.targetCount+=1,Cc.resolve()}updateTargetData(e,t){return this.Tn(t),Cc.resolve()}removeTargetData(e,t){return this.Fi.delete(t.target),this.Bi.Pi(t.targetId),this.targetCount-=1,Cc.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Fi.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Fi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Cc.waitFor(i).next((()=>r))}getTargetCount(e){return Cc.resolve(this.targetCount)}getTargetData(e,t){const n=this.Fi.get(t)||null;return Cc.resolve(n)}addMatchingKeys(e,t,n){return this.Bi.Ei(t,n),Cc.resolve()}removeMatchingKeys(e,t,n){this.Bi.Ri(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Cc.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Bi.Pi(t),Cc.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Bi.Vi(t);return Cc.resolve(n)}containsKey(e,t){return Cc.resolve(this.Bi.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t){this.Ui={},this.overlays={},this.es=new hi(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new Ll(this),this.indexManager=new vu,this.ds=function(e){return new xl(e)}((e=>this.referenceDelegate.qi(e))),this.M=new Gc(t),this._s=new Al(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Cl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ui[e.toKey()];return n||(n=new Ol(t,this.referenceDelegate),this.Ui[e.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,t,n){Kr("MemoryPersistence","Starting transaction:",e);const r=new Ml(this.es.next());return this.referenceDelegate.Ki(),n(r).next((e=>this.referenceDelegate.Gi(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Qi(e,t){return Cc.or(Object.values(this.Ui).map((n=>()=>n.containsKey(e,t))))}}class Ml extends Ac{constructor(e){super(),this.currentSequenceNumber=e}}class Fl{constructor(e){this.persistence=e,this.ji=new Nl,this.Wi=null}static zi(e){return new Fl(e)}get Hi(){if(this.Wi)return this.Wi;throw Yr()}addReference(e,t,n){return this.ji.addReference(n,t),this.Hi.delete(n.toString()),Cc.resolve()}removeReference(e,t,n){return this.ji.removeReference(n,t),this.Hi.add(n.toString()),Cc.resolve()}markPotentiallyOrphaned(e,t){return this.Hi.add(t.toString()),Cc.resolve()}removeTarget(e,t){this.ji.Pi(t.targetId).forEach((e=>this.Hi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Hi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ki(){this.Wi=new Set}Gi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Cc.forEach(this.Hi,(n=>{const r=$i.fromPath(n);return this.Ji(e,r).next((e=>{e||t.removeEntry(r,vi.min())}))})).next((()=>(this.Wi=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ji(e,t).next((e=>{e?this.Hi.delete(t.toString()):this.Hi.add(t.toString())}))}qi(e){return 0}Ji(e,t){return Cc.or([()=>Cc.resolve(this.ji.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Qi(e,t)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(e,t){return`firestore_clients_${e}_${t}`}function Ul(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function jl(e,t){return`firestore_targets_${e}_${t}`}class $l{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Yi(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new ei(r.error.code,r.error.message))),s?new $l(e,t,r.state,i):(zr("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Bl{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Yi(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new ei(n.error.code,n.error.message))),i?new Bl(e,n.state,r):(zr("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ql{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Yi(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=ua();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ji(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new ql(e,i):(zr("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Gl{constructor(e,t){this.clientId=e,this.onlineState=t}static Yi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Gl(t.clientId,t.onlineState):(zr("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Kl{constructor(){this.activeTargetIds=ua()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zl{constructor(e,t,n,r,i){this.window=e,this.Yn=t,this.persistenceKey=n,this.er=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.nr=this.sr.bind(this),this.ir=new Wo(pi),this.started=!1,this.rr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ur=Vl(this.persistenceKey,this.er),this.ar=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ir=this.ir.insert(this.er,new Kl),this.cr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.hr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.lr=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.dr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this._r=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.nr)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Fs();for(const n of e){if(n===this.er)continue;const e=this.getItem(Vl(this.persistenceKey,n));if(e){const t=ql.Yi(n,e);t&&(this.ir=this.ir.insert(t.clientId,t))}}this.wr();const t=this.storage.getItem(this.dr);if(t){const e=this.mr(t);e&&this.gr(e)}for(const n of this.rr)this.sr(n);this.rr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.yr(this.ir)}isActiveQueryTarget(e){let t=!1;return this.ir.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.pr(e,"pending")}updateMutationState(e,t,n){this.pr(e,t,n),this.Ir(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(jl(this.persistenceKey,e));if(n){const r=Bl.Yi(e,n);r&&(t=r.state)}}return this.Tr.Zi(e),this.wr(),t}removeLocalQueryTarget(e){this.Tr.tr(e),this.wr()}isLocalQueryTarget(e){return this.Tr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(jl(this.persistenceKey,e))}updateQueryState(e,t,n){this.Er(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Ir(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Ar(e)}notifyBundleLoaded(e){this.Rr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.nr),this.removeItem(this.ur),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Kr("SharedClientState","READ",e,t),t}setItem(e,t){Kr("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Kr("SharedClientState","REMOVE",e),this.storage.removeItem(e)}sr(e){const t=e;if(t.storageArea===this.storage){if(Kr("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ur)return void zr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Yn.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.cr.test(t.key)){if(null==t.newValue){const e=this.Pr(t.key);return this.br(e,null)}{const e=this.Vr(t.key,t.newValue);if(e)return this.br(e.clientId,e)}}else if(this.hr.test(t.key)){if(null!==t.newValue){const e=this.vr(t.key,t.newValue);if(e)return this.Sr(e)}}else if(this.lr.test(t.key)){if(null!==t.newValue){const e=this.Dr(t.key,t.newValue);if(e)return this.Cr(e)}}else if(t.key===this.dr){if(null!==t.newValue){const e=this.mr(t.newValue);if(e)return this.gr(e)}}else if(t.key===this.ar){const e=function(e){let t=hi.A;if(null!=e)try{const n=JSON.parse(e);Jr("number"==typeof n),t=n}catch(e){zr("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==hi.A&&this.sequenceNumberHandler(e)}else if(t.key===this._r){const e=this.Nr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.kr(e))))}}else this.rr.push(t)}))}}get Tr(){return this.ir.get(this.er)}wr(){this.setItem(this.ur,this.Tr.Xi())}pr(e,t,n){const r=new $l(this.currentUser,e,t,n),i=Ul(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Xi())}Ir(e){const t=Ul(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ar(e){const t={clientId:this.er,onlineState:e};this.storage.setItem(this.dr,JSON.stringify(t))}Er(e,t,n){const r=jl(this.persistenceKey,e),i=new Bl(e,t,n);this.setItem(r,i.Xi())}Rr(e){const t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}Pr(e){const t=this.cr.exec(e);return t?t[1]:null}Vr(e,t){const n=this.Pr(e);return ql.Yi(n,t)}vr(e,t){const n=this.hr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return $l.Yi(new jr(i),r,t)}Dr(e,t){const n=this.lr.exec(e),r=Number(n[1]);return Bl.Yi(r,t)}mr(e){return Gl.Yi(e)}Nr(e){return JSON.parse(e)}async Sr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Mr(e.batchId,e.state,e.error);Kr("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Cr(e){return this.syncEngine.Or(e.targetId,e.state,e.error)}br(e,t){const n=t?this.ir.insert(e,t):this.ir.remove(e),r=this.yr(this.ir),i=this.yr(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Fr(s,o).then((()=>{this.ir=n}))}gr(e){this.ir.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}yr(e){let t=ua();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Hl{constructor(){this.$r=new Kl,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,t,n){this.Br[e]=t}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new Kl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{Lr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){Kr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){Kr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.io=t+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,t,n,r,i){const s=this.uo(e,t);Kr("RestConnection","Sending: ",s,n);const o={};return this.ao(o,r,i),this.co(e,s,o,n).then((e=>(Kr("RestConnection","Received: ",e),e)),(t=>{throw Hr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ho(e,t,n,r,i){return this.oo(e,t,n,r,i)}ao(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+$r,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}uo(e,t){const n=Jl[e];return`${this.io}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,r){return new Promise(((i,s)=>{const o=new Vr;o.listenOnce(Rr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case xr.NO_ERROR:const t=o.getResponseJson();Kr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case xr.TIMEOUT:Kr("Connection",'RPC "'+e+'" timed out'),s(new ei(Zr.DEADLINE_EXCEEDED,"Request time out"));break;case xr.HTTP_ERROR:const n=o.getStatus();if(Kr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Zr).indexOf(t)>=0?t:Zr.UNKNOWN}(e.status);s(new ei(t,e.message))}else s(new ei(Zr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new ei(Zr.UNAVAILABLE,"Connection failed."));break;default:Yr()}}finally{Kr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}lo(e,t,n){const r=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Dr(),s=Or(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mr({})),this.ao(o.initMessageHeaders,t,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");Kr("Connection","Creating WebChannel: "+c,o);const u=i.createWebChannel(c,o);let l=!1,h=!1;const d=new Ql({Wr:e=>{h?Kr("Connection","Not sending because WebChannel is closed:",e):(l||(Kr("Connection","Opening WebChannel transport."),u.open(),l=!0),Kr("Connection","WebChannel sending:",e),u.send(e))},zr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Fr.EventType.OPEN,(()=>{h||Kr("Connection","WebChannel transport opened.")})),f(u,Fr.EventType.CLOSE,(()=>{h||(h=!0,Kr("Connection","WebChannel transport closed"),d.no())})),f(u,Fr.EventType.ERROR,(e=>{h||(h=!0,Hr("Connection","WebChannel transport errored:",e),d.no(new ei(Zr.UNAVAILABLE,"The operation could not be completed")))})),f(u,Fr.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];Jr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Kr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=qo[e];if(void 0!==t)return zo(t)}(e),n=i.message;void 0===t&&(t=Zr.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,d.no(new ei(t,n)),u.close()}else Kr("Connection","WebChannel received:",n),d.so(n)}})),f(s,Lr.STAT_EVENT,(e=>{e.stat===Pr.PROXY?Kr("Connection","Detected buffering proxy"):e.stat===Pr.NOPROXY&&Kr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.eo()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(){return"undefined"!=typeof window?window:null}function eh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(e){return new ba(e,!0)}class nh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Yn=e,this.timerId=t,this.fo=n,this._o=r,this.wo=i,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const t=Math.floor(this.mo+this.Eo()),n=Math.max(0,Date.now()-this.po),r=Math.max(0,t-n);r>0&&Kr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.mo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,r,(()=>(this.po=Date.now(),e()))),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){null!==this.yo&&(this.yo.skipDelay(),this.yo=null)}cancel(){null!==this.yo&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t,n,r,i,s,o,a){this.Yn=e,this.Ro=n,this.Po=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new nh(e,t)}Co(){return 1===this.state||5===this.state||this.xo()}xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&null===this.vo&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,(()=>this.Oo())))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,t){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,4!==e?this.Do.reset():t&&t.code===Zr.RESOURCE_EXHAUSTED?(zr(t.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):t&&t.code===Zr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(t)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.qo(e,n)}),(t=>{e((()=>{const e=new ei(Zr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ko(e)}))}))}qo(e,t){const n=this.Uo(this.Vo);this.stream=this.Go(e,t),this.stream.Hr((()=>{n((()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,(()=>(this.xo()&&(this.state=3),Promise.resolve()))),this.listener.Hr())))})),this.stream.Yr((e=>{n((()=>this.Ko(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}No(){this.state=5,this.Do.To((async()=>{this.state=0,this.start()}))}Ko(e){return Kr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Yn.enqueueAndForget((()=>this.Vo===e?t():(Kr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ih extends rh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.M=i}Go(e,t){return this.bo.lo("Listen",e,t)}onMessage(e){this.Do.reset();const t=Fa(this.M,e),n=function(e){if(!("targetChange"in e))return vi.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?vi.min():t.readTime?Sa(t.readTime):vi.min()}(e);return this.listener.Qo(t,n)}jo(e){const t={};t.database=xa(this.M),t.addTarget=function(e,t){let n;const r=t.target;return n=ks(r)?{documents:$a(e,r)}:{query:Ba(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Ea(e,t.resumeToken):t.snapshotVersion.compareTo(vi.min())>0&&(n.readTime=Ia(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=Ga(this.M,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=xa(this.M),t.removeTarget=e,this.Fo(t)}}class sh extends rh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.M=i,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,t){return this.bo.lo("Write",e,t)}onMessage(e){if(Jr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const t=ja(e.writeResults,e.commitTime),n=Sa(e.commitTime);return this.listener.Yo(n,t)}return Jr(!e.writeResults||0===e.writeResults.length),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=xa(this.M),this.Fo(e)}Jo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Va(this.M,e)))};this.Fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.M=r,this.tu=!1}eu(){if(this.tu)throw new ei(Zr.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,t,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.oo(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Zr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ei(Zr.UNKNOWN,e.toString())}))}ho(e,t,n){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ho(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Zr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ei(Zr.UNKNOWN,e.toString())}))}terminate(){this.tu=!0}}class ah{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){0===this.nu&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,"Online"===e&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(zr(t),this.iu=!1):Kr("OnlineStateTracker",t)}cu(){null!==this.su&&(this.su.cancel(),this.su=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=i,this._u.Lr((e=>{n.enqueueAndForget((async()=>{yh(this)&&(Kr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Xr(e);t.fu.add(4),await lh(t),t.wu.set("Unknown"),t.fu.delete(4),await uh(t)}(this))}))})),this.wu=new ah(n,r)}}async function uh(e){if(yh(e))for(const t of e.du)await t(!0)}async function lh(e){for(const t of e.du)await t(!1)}function hh(e,t){const n=Xr(e);n.lu.has(t.targetId)||(n.lu.set(t.targetId,t),gh(n)?mh(n):Ph(n).xo()&&fh(n,t))}function dh(e,t){const n=Xr(e),r=Ph(n);n.lu.delete(t),r.xo()&&ph(n,t),0===n.lu.size&&(r.xo()?r.Mo():yh(n)&&n.wu.set("Unknown"))}function fh(e,t){e.mu.Z(t.targetId),Ph(e).jo(t)}function ph(e,t){e.mu.Z(t),Ph(e).Wo(t)}function mh(e){e.mu=new ga({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.lu.get(t)||null}),Ph(e).start(),e.wu.ru()}function gh(e){return yh(e)&&!Ph(e).Co()&&e.lu.size>0}function yh(e){return 0===Xr(e).fu.size}function vh(e){e.mu=void 0}async function wh(e){e.lu.forEach(((t,n)=>{fh(e,t)}))}async function _h(e,t){vh(e),gh(e)?(e.wu.au(t),mh(e)):e.wu.set("Unknown")}async function bh(e,t,n){if(e.wu.set("Online"),t instanceof pa&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.lu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.lu.delete(r),e.mu.removeTarget(r))}(e,t)}catch(n){Kr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ih(e,n)}else if(t instanceof da?e.mu.ut(t):t instanceof fa?e.mu._t(t):e.mu.ht(t),!n.isEqual(vi.min()))try{const t=await ml(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.mu.yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.lu.get(r);i&&e.lu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.lu.get(t);if(!n)return;e.lu.set(t,n.withResumeToken(Ci.EMPTY_BYTE_STRING,n.snapshotVersion)),ph(e,t);const r=new qc(n.target,t,1,n.sequenceNumber);fh(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Kr("RemoteStore","Failed to raise snapshot:",t),await Ih(e,t)}}async function Ih(e,t,n){if(!Rc(t))throw t;e.fu.add(1),await lh(e),e.wu.set("Offline"),n||(n=()=>ml(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Kr("RemoteStore","Retrying IndexedDB access"),await n(),e.fu.delete(1),await uh(e)}))}function Eh(e,t){return t().catch((n=>Ih(e,n,t)))}async function Th(e){const t=Xr(e),n=Mh(t);let r=t.hu.length>0?t.hu[t.hu.length-1].batchId:-1;for(;Sh(t);)try{const e=await vl(t.localStore,r);if(null===e){0===t.hu.length&&n.Mo();break}r=e.batchId,kh(t,e)}catch(e){await Ih(t,e)}Ah(t)&&Ch(t)}function Sh(e){return yh(e)&&e.hu.length<10}function kh(e,t){e.hu.push(t);const n=Mh(e);n.xo()&&n.Ho&&n.Jo(t.mutations)}function Ah(e){return yh(e)&&!Mh(e).Co()&&e.hu.length>0}function Ch(e){Mh(e).start()}async function Nh(e){Mh(e).Zo()}async function Dh(e){const t=Mh(e);for(const n of e.hu)t.Jo(n.mutations)}async function Oh(e,t,n){const r=e.hu.shift(),i=$c.from(r,t,n);await Eh(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Th(e)}async function xh(e,t){t&&Mh(e).Ho&&await async function(e,t){if(n=t.code,Ko(n)&&n!==Zr.ABORTED){const n=e.hu.shift();Mh(e).ko(),await Eh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Th(e)}var n}(e,t),Ah(e)&&Ch(e)}async function Rh(e,t){const n=Xr(e);n.asyncQueue.verifyOperationInProgress(),Kr("RemoteStore","RemoteStore received new credentials");const r=yh(n);n.fu.add(3),await lh(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.fu.delete(3),await uh(n)}async function Lh(e,t){const n=Xr(e);t?(n.fu.delete(2),await uh(n)):t||(n.fu.add(2),await lh(n),n.wu.set("Unknown"))}function Ph(e){return e.gu||(e.gu=function(e,t,n){const r=Xr(e);return r.eu(),new ih(t,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Hr:wh.bind(null,e),Yr:_h.bind(null,e),Qo:bh.bind(null,e)}),e.du.push((async t=>{t?(e.gu.ko(),gh(e)?mh(e):e.wu.set("Unknown")):(await e.gu.stop(),vh(e))}))),e.gu}function Mh(e){return e.yu||(e.yu=function(e,t,n){const r=Xr(e);return r.eu(),new sh(t,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{Hr:Nh.bind(null,e),Yr:xh.bind(null,e),Xo:Dh.bind(null,e),Yo:Oh.bind(null,e)}),e.du.push((async t=>{t?(e.yu.ko(),await Th(e)):(await e.yu.stop(),e.hu.length>0&&(Kr("RemoteStore",`Stopping write stream with ${e.hu.length} pending writes`),e.hu=[]))}))),e.yu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Fh{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Fh(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ei(Zr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vh(e,t){if(zr("AsyncQueue",`${t}: ${e}`),Rc(e))return new ei(Zr.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||$i.comparator(t.key,n.key):(e,t)=>$i.comparator(e.key,t.key),this.keyedMap=ra(),this.sortedSet=new Wo(this.comparator)}static emptySet(e){return new Uh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Uh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Uh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.pu=new Wo($i.comparator)}track(e){const t=e.doc.key,n=this.pu.get(t);n?0!==e.type&&3===n.type?this.pu=this.pu.insert(t,e):3===e.type&&1!==n.type?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.pu=this.pu.remove(t):1===e.type&&2===n.type?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):Yr():this.pu=this.pu.insert(t,e)}Iu(){const e=[];return this.pu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class $h{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new $h(e,t,Uh.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&to(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.Tu=void 0,this.listeners=[]}}class qh{constructor(){this.queries=new Ho((e=>no(e)),to),this.onlineState="Unknown",this.Eu=new Set}}async function Gh(e,t){const n=Xr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Bh),i)try{s.Tu=await n.onListen(r)}catch(e){const n=Vh(e,`Initialization of query '${ro(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Au(n.onlineState),s.Tu&&t.Ru(s.Tu)&&Wh(n)}async function Kh(e,t){const n=Xr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function zh(e,t){const n=Xr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Ru(i)&&(r=!0);t.Tu=i}}r&&Wh(n)}function Hh(e,t,n){const r=Xr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Wh(e){e.Eu.forEach((e=>{e.next()}))}class Yh{constructor(e,t,n){this.query=e,this.Pu=t,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}Ru(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new $h(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),t=!0):this.Su(e,this.onlineState)&&(this.Du(e),t=!0),this.Vu=e,t}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let t=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),t=!0),t}Su(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Cu||!n)&&(!e.docs.isEmpty()||"Offline"===t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Du(e){e=$h.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t){this.payload=e,this.byteLength=t}xu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.M=e}fi(e){return Na(this.M,e)}di(e){return e.metadata.exists?Pa(this.M,e.document,!1):hs.newNoDocument(this.fi(e.metadata.name),this._i(e.metadata.readTime))}_i(e){return Sa(e)}}class Xh{constructor(e,t,n){this.Nu=e,this.localStore=t,this.M=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Zh(e)}ku(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=Ei.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){const t=new Map,n=new Qh(this.M);for(const r of e)if(r.metadata.queries){const e=n.fi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||aa()).add(e);t.set(n,r)}}return t}async complete(){const e=await Sl(this.localStore,new Qh(this.M),this.documents,this.Nu.id),t=this.Mu(this.documents);for(const n of this.queries)await kl(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Ou:this.collectionGroups,Fu:e}}}function Zh(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.key=e}}class td{constructor(e){this.key=e}}class nd{constructor(e,t){this.query=e,this.$u=t,this.Bu=null,this.current=!1,this.Lu=aa(),this.mutatedKeys=aa(),this.Uu=oo(e),this.qu=new Uh(this.Uu)}get Ku(){return this.$u}Gu(e,t){const n=t?t.Qu:new jh,r=t?t.qu:this.qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Hs(this.query)&&r.size===this.query.limit?r.last():null,c=Ws(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=io(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.ju(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Uu(l,a)>0||c&&this.Uu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),Hs(this.query)||Ws(this.query))for(;s.size>this.query.limit;){const e=Hs(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{qu:s,Qu:n,ni:o,mutatedKeys:i}}ju(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const i=e.Qu.Iu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Yr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Uu(e.doc,t.doc))),this.Wu(n);const s=t?this.zu():[],o=0===this.Lu.size&&this.current?1:0,a=o!==this.Bu;return this.Bu=o,0!==i.length||a?{snapshot:new $h(this.query,e.qu,r,i,e.mutatedKeys,0===o,a,!1),Hu:s}:{Hu:s}}Au(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new jh,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach((e=>this.$u=this.$u.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.$u=this.$u.delete(e))),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=aa(),this.qu.forEach((e=>{this.Ju(e.key)&&(this.Lu=this.Lu.add(e.key))}));const t=[];return e.forEach((e=>{this.Lu.has(e)||t.push(new td(e))})),this.Lu.forEach((n=>{e.has(n)||t.push(new ed(n))})),t}Yu(e){this.$u=e.li,this.Lu=aa();const t=this.Gu(e.documents);return this.applyChanges(t,!0)}Xu(){return $h.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,0===this.Bu)}}class rd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class id{constructor(e){this.key=e,this.Zu=!1}}class sd{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.ta={},this.ea=new Ho((e=>no(e)),to),this.na=new Map,this.sa=new Set,this.ia=new Wo($i.comparator),this.ra=new Map,this.oa=new Nl,this.ua={},this.aa=new Map,this.ca=Pu.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return!0===this.ha}}async function od(e,t){const n=Pd(e);let r,i;const s=n.ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Xu();else{const e=await wl(n.localStore,Zs(t));n.isPrimaryClient&&hh(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await ad(n,t,r,"current"===s)}return i}async function ad(e,t,n,r){e.la=(t,n,r)=>async function(e,t,n,r){let i=t.view.Gu(n);i.ni&&(i=await bl(e.localStore,t.query,!1).then((({documents:e})=>t.view.Gu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return _d(e,t.targetId,o.Hu),o.snapshot}(e,t,n,r);const i=await bl(e.localStore,t,!0),s=new nd(t,i.li),o=s.Gu(i.documents),a=ha.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);_d(e,n,c.Hu);const u=new rd(t,n,s);return e.ea.set(t,u),e.na.has(n)?e.na.get(n).push(t):e.na.set(n,[t]),c.snapshot}async function cd(e,t){const n=Xr(e),r=n.ea.get(t),i=n.na.get(r.targetId);if(i.length>1)return n.na.set(r.targetId,i.filter((e=>!to(e,t)))),void n.ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _l(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),dh(n.remoteStore,r.targetId),vd(n,r.targetId)})).catch(ju)):(vd(n,r.targetId),await _l(n.localStore,r.targetId,!0))}async function ud(e,t,n){const r=Md(e);try{const e=await function(e,t){const n=Xr(e),r=yi.now(),i=t.reduce(((e,t)=>e.add(t.key)),aa());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.ci.Ks(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=xo(e,s.get(e.key));null!=t&&o.push(new Mo(e.key,t,ls(t.value.mapValue),Ao.exists(!0)))}return n.Bs.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.ua[e.currentUser.toKey()];r||(r=new Wo(pi)),r=r.insert(t,n),e.ua[e.currentUser.toKey()]=r}(r,e.batchId,n),await Ed(r,e.changes),await Th(r.remoteStore)}catch(e){const t=Vh(e,"Failed to persist write");n.reject(t)}}async function ld(e,t){const n=Xr(e);try{const e=await gl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ra.get(t);r&&(Jr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Zu=!0:e.modifiedDocuments.size>0?Jr(r.Zu):e.removedDocuments.size>0&&(Jr(r.Zu),r.Zu=!1))})),await Ed(n,e,t)}catch(e){await ju(e)}}function hd(e,t,n){const r=Xr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ea.forEach(((n,r)=>{const i=r.view.Au(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Xr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Au(t)&&(r=!0)})),r&&Wh(n)}(r.eventManager,t),e.length&&r.ta.Qo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function dd(e,t,n){const r=Xr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ra.get(t),s=i&&i.key;if(s){let e=new Wo($i.comparator);e=e.insert(s,hs.newNoDocument(s,vi.min()));const n=aa().add(s),i=new la(vi.min(),new Map,new Qo(pi),e,n);await ld(r,i),r.ia=r.ia.remove(s),r.ra.delete(t),Id(r)}else await _l(r.localStore,t,!1).then((()=>vd(r,t,n))).catch(ju)}async function fd(e,t){const n=Xr(e),r=t.batch.batchId;try{const e=await pl(n.localStore,t);yd(n,r,null),gd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ed(n,e)}catch(e){await ju(e)}}async function pd(e,t,n){const r=Xr(e);try{const e=await function(e,t){const n=Xr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.Bs.lookupMutationBatch(e,t).next((t=>(Jr(null!==t),r=t.keys(),n.Bs.removeMutationBatch(e,t)))).next((()=>n.Bs.performConsistencyCheck(e))).next((()=>n.ci.Ks(e,r)))}))}(r.localStore,t);yd(r,t,n),gd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ed(r,e)}catch(n){await ju(n)}}async function md(e,t){const n=Xr(e);yh(n.remoteStore)||Kr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Xr(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.Bs.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.aa.get(e)||[];r.push(t),n.aa.set(e,r)}catch(e){const n=Vh(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function gd(e,t){(e.aa.get(t)||[]).forEach((e=>{e.resolve()})),e.aa.delete(t)}function yd(e,t,n){const r=Xr(e);let i=r.ua[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.ua[r.currentUser.toKey()]=i}}function vd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.na.get(t))e.ea.delete(r),n&&e.ta.fa(r,n);e.na.delete(t),e.isPrimaryClient&&e.oa.Pi(t).forEach((t=>{e.oa.containsKey(t)||wd(e,t)}))}function wd(e,t){e.sa.delete(t.path.canonicalString());const n=e.ia.get(t);null!==n&&(dh(e.remoteStore,n),e.ia=e.ia.remove(t),e.ra.delete(n),Id(e))}function _d(e,t,n){for(const r of n)r instanceof ed?(e.oa.addReference(r.key,t),bd(e,r)):r instanceof td?(Kr("SyncEngine","Document no longer in limbo: "+r.key),e.oa.removeReference(r.key,t),e.oa.containsKey(r.key)||wd(e,r.key)):Yr()}function bd(e,t){const n=t.key,r=n.path.canonicalString();e.ia.get(n)||e.sa.has(r)||(Kr("SyncEngine","New document in limbo: "+n),e.sa.add(r),Id(e))}function Id(e){for(;e.sa.size>0&&e.ia.size<e.maxConcurrentLimboResolutions;){const t=e.sa.values().next().value;e.sa.delete(t);const n=new $i(Ei.fromString(t)),r=e.ca.next();e.ra.set(r,new id(n)),e.ia=e.ia.insert(n,r),hh(e.remoteStore,new qc(Zs(zs(n.path)),r,2,hi.A))}}async function Ed(e,t,n){const r=Xr(e),i=[],s=[],o=[];r.ea.isEmpty()||(r.ea.forEach(((e,a)=>{o.push(r.la(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=ul.Ys(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.ta.Qo(i),await async function(e,t){const n=Xr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Cc.forEach(t,(t=>Cc.forEach(t.Hs,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Cc.forEach(t.Js,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Rc(e))throw e;Kr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ii.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ii=n.ii.insert(e,i)}}}(r.localStore,s))}async function Td(e,t){const n=Xr(e);if(!n.currentUser.isEqual(t)){Kr("SyncEngine","User change. New user:",t.toKey());const e=await fl(n.localStore,t);n.currentUser=t,function(e,t){e.aa.forEach((e=>{e.forEach((e=>{e.reject(new ei(Zr.CANCELLED,t))}))})),e.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ed(n,e.hi)}}function Sd(e,t){const n=Xr(e),r=n.ra.get(t);if(r&&r.Zu)return aa().add(r.key);{let e=aa();const r=n.na.get(t);if(!r)return e;for(const t of r){const r=n.ea.get(t);e=e.unionWith(r.view.Ku)}return e}}async function kd(e,t){const n=Xr(e),r=await bl(n.localStore,t.query,!0),i=t.view.Yu(r);return n.isPrimaryClient&&_d(n,t.targetId,i.Hu),i}async function Ad(e,t){const n=Xr(e);return El(n.localStore,t).then((e=>Ed(n,e)))}async function Cd(e,t,n,r){const i=Xr(e),s=await function(e,t){const n=Xr(e),r=Xr(n.Bs);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.fn(e,t).next((t=>t?n.ci.Ks(e,t):Cc.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await Th(i.remoteStore):"acknowledged"===n||"rejected"===n?(yd(i,t,r||null),gd(i,t),function(e,t){Xr(Xr(e).Bs)._n(t)}(i.localStore,t)):Yr(),await Ed(i,s)):Kr("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Nd(e,t){const n=Xr(e);if(Pd(n),Md(n),!0===t&&!0!==n.ha){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Dd(n,e.toArray());n.ha=!0,await Lh(n.remoteStore,!0);for(const r of t)hh(n.remoteStore,r)}else if(!1===t&&!1!==n.ha){const e=[];let t=Promise.resolve();n.na.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(vd(n,i),_l(n.localStore,i,!0)))),dh(n.remoteStore,i)})),await t,await Dd(n,e),function(e){const t=Xr(e);t.ra.forEach(((e,n)=>{dh(t.remoteStore,n)})),t.oa.bi(),t.ra=new Map,t.ia=new Wo($i.comparator)}(n),n.ha=!1,await Lh(n.remoteStore,!1)}}async function Dd(e,t,n){const r=Xr(e),i=[],s=[];for(const o of t){let e;const t=r.na.get(o);if(t&&0!==t.length){e=await wl(r.localStore,Zs(t[0]));for(const e of t){const t=r.ea.get(e),n=await kd(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Il(r.localStore,o);e=await wl(r.localStore,t),await ad(r,Od(t),o,!1)}i.push(e)}return r.ta.Qo(s),i}function Od(e){return Ks(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function xd(e){const t=Xr(e);return Xr(Xr(t.localStore).persistence).Fs()}async function Rd(e,t,n,r){const i=Xr(e);if(i.ha)return void Kr("SyncEngine","Ignoring unexpected query state notification.");const s=i.na.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await El(i.localStore,so(s[0])),r=la.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Ed(i,e,r);break}case"rejected":await _l(i.localStore,t,!0),vd(i,t,r);break;default:Yr()}}async function Ld(e,t,n){const r=Pd(e);if(r.ha){for(const e of t){if(r.na.has(e)){Kr("SyncEngine","Adding an already active target "+e);continue}const t=await Il(r.localStore,e),n=await wl(r.localStore,t);await ad(r,Od(t),n.targetId,!1),hh(r.remoteStore,n)}for(const e of n)r.na.has(e)&&await _l(r.localStore,e,!1).then((()=>{dh(r.remoteStore,e),vd(r,e)})).catch(ju)}}function Pd(e){const t=Xr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ld.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dd.bind(null,t),t.ta.Qo=zh.bind(null,t.eventManager),t.ta.fa=Hh.bind(null,t.eventManager),t}function Md(e){const t=Xr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=pd.bind(null,t),t}function Fd(e,t,n){const r=Xr(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Xr(e),r=Sa(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n._s.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Zh(r));const i=new Xh(r,e.localStore,t.M);let s=await t.da();for(;s;){const e=await i.ku(s);e&&n._updateProgress(e),s=await t.da()}const o=await i.complete();return await Ed(e,o.Fu,void 0),await function(e,t){const n=Xr(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n._s.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Ou)}catch(e){return Hr("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Vd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=th(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return dl(this.persistence,new ll,e.initialUser,this.M)}wa(e){return new Pl(Fl.zi,this.M)}_a(e){return new Hl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ud extends Vd{constructor(e,t,n){super(),this.ya=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ya.initialize(this,e),await Md(this.ya.syncEngine),await Th(this.ya.remoteStore),await this.persistence.Ts((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}ga(e){return dl(this.persistence,new ll,e.initialUser,this.M)}ma(e){const t=this.persistence.referenceDelegate.garbageCollector;return new qu(t,e.asyncQueue)}wa(e){const t=al(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Au.withCacheSize(this.cacheSizeBytes):Au.DEFAULT;return new il(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Zl(),eh(),this.M,this.sharedClientState,!!this.forceOwnership)}_a(e){return new Hl}}class jd extends Ud{constructor(e,t){super(e,t,!1),this.ya=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ya.syncEngine;this.sharedClientState instanceof zl&&(this.sharedClientState.syncEngine={Mr:Cd.bind(null,t),Or:Rd.bind(null,t),Fr:Ld.bind(null,t),Fs:xd.bind(null,t),kr:Ad.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ts((async e=>{await Nd(this.ya.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}_a(e){const t=Zl();if(!zl.vt(t))throw new ei(Zr.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=al(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new zl(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class $d{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>hd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Td.bind(null,this.syncEngine),await Lh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new qh}createDatastore(e){const t=th(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Xl(r));var r;return function(e,t,n,r){return new oh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>hd(this.syncEngine,e,0),s=Yl.vt()?new Yl:new Wl,new ch(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new sd(e,t,n,r,i,s);return o&&(a.ha=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Xr(e);Kr("RemoteStore","RemoteStore shutting down."),t.fu.add(5),await lh(t),t._u.shutdown(),t.wu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t){this.Ta=e,this.M=t,this.metadata=new ti,this.buffer=new Uint8Array,this.Ea=new TextDecoder("utf-8"),this.Aa().then((e=>{e&&e.xu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ta.cancel()}async getMetadata(){return this.metadata.promise}async da(){return await this.getMetadata(),this.Aa()}async Aa(){const e=await this.Ra();if(null===e)return null;const t=this.Ea.decode(e),n=Number(t);isNaN(n)&&this.Pa(`length string (${t}) is not valid number`);const r=await this.ba(n);return new Jh(JSON.parse(r),e.length+n)}Va(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Ra(){for(;this.Va()<0;)if(await this.va())break;if(0===this.buffer.length)return null;const e=this.Va();e<0&&this.Pa("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ba(e){for(;this.buffer.length<e;)await this.va()&&this.Pa("Reached the end of bundle when more is expected.");const t=this.Ea.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Pa(e){throw this.Ta.cancel(),new Error(`Invalid bundle format: ${e}`)}async va(){const e=await this.Ta.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new ei(Zr.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Xr(e),r=xa(n.M)+"/documents",i={documents:t.map((e=>Ca(n.M,e)))},s=await n.ho("BatchGetDocuments",r,i),o=new Map;s.forEach((e=>{const t=Ma(n.M,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Jr(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new jo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=$i.fromPath(t);this.mutations.push(new $o(n,this.precondition(n)))})),await async function(e,t){const n=Xr(e),r=xa(n.M)+"/documents",i={writes:t.map((e=>Va(n.M,e)))};await n.oo("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Yr();t=vi.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new ei(Zr.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Ao.updateTime(t):Ao.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(vi.min()))throw new ei(Zr.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ao.updateTime(t)}return Ao.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.Sa=5,this.Do=new nh(this.asyncQueue,"transaction_retry")}run(){this.Sa-=1,this.Da()}Da(){this.Do.To((async()=>{const e=new Kd(this.datastore),t=this.Ca(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.xa(e)}))))})).catch((e=>{this.xa(e)}))}))}Ca(e){try{const t=this.updateFunction(e);return!Vi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}xa(e){this.Sa>0&&this.Na(e)?(this.Sa-=1,this.asyncQueue.enqueueAndForget((()=>(this.Da(),Promise.resolve())))):this.deferred.reject(e)}Na(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Ko(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=jr.UNAUTHENTICATED,this.clientId=fi.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Kr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Kr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ei(Zr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Vh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Wd(e,t){e.asyncQueue.verifyOperationInProgress(),Kr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await fl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Yd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Jd(e);Kr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Rh(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Rh(t.remoteStore,n))),e.onlineComponents=t}async function Jd(e){return e.offlineComponents||(Kr("FirestoreClient","Using default OfflineComponentProvider"),await Wd(e,new Vd)),e.offlineComponents}async function Qd(e){return e.onlineComponents||(Kr("FirestoreClient","Using default OnlineComponentProvider"),await Yd(e,new $d)),e.onlineComponents}function Xd(e){return Jd(e).then((e=>e.persistence))}function Zd(e){return Jd(e).then((e=>e.localStore))}function ef(e){return Qd(e).then((e=>e.remoteStore))}function tf(e){return Qd(e).then((e=>e.syncEngine))}async function nf(e){const t=await Qd(e),n=t.eventManager;return n.onListen=od.bind(null,t.syncEngine),n.onUnlisten=cd.bind(null,t.syncEngine),n}function rf(e){return e.asyncQueue.enqueue((async()=>{const t=await Xd(e),n=await ef(e);return t.setNetworkEnabled(!0),function(e){const t=Xr(e);return t.fu.delete(0),uh(t)}(n)}))}function sf(e){return e.asyncQueue.enqueue((async()=>{const t=await Xd(e),n=await ef(e);return t.setNetworkEnabled(!1),async function(e){const t=Xr(e);t.fu.add(0),await lh(t),t.wu.set("Offline")}(n)}))}function of(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Xr(e);return n.persistence.runTransaction("read document","readonly",(e=>n.ci.Ls(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new ei(Zr.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Vh(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Zd(e),t,n))),n.promise}function af(e,t,n={}){const r=new ti;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new qd({next:s=>{t.enqueueAndForget((()=>Kh(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ei(Zr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ei(Zr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Yh(zs(n.path),s,{includeMetadataChanges:!0,Cu:!0});return Gh(e,o)}(await nf(e),e.asyncQueue,t,n,r))),r.promise}function cf(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await bl(e,t,!0),i=new nd(t,r.li),s=i.Gu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Vh(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Zd(e),t,n))),n.promise}function uf(e,t,n={}){const r=new ti;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new qd({next:n=>{t.enqueueAndForget((()=>Kh(e,o))),n.fromCache&&"server"===r.source?i.reject(new ei(Zr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Yh(n,s,{includeMetadataChanges:!0,Cu:!0});return Gh(e,o)}(await nf(e),e.asyncQueue,t,n,r))),r.promise}function lf(e,t){const n=new qd(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Xr(e).Eu.add(t),t.next()}(await nf(e),n))),()=>{n.Ia(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Xr(e).Eu.delete(t)}(await nf(e),n)))}}function hf(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget((async()=>{const r=await function(e){return Qd(e).then((e=>e.datastore))}(e);new zd(e.asyncQueue,r,t,n).run()})),n.promise}function df(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Gd(e,t)}(function(e,t){if(e instanceof Uint8Array)return Bd(e,t);if(e instanceof ArrayBuffer)return Bd(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,th(t));e.asyncQueue.enqueueAndForget((async()=>{Fd(await tf(e),i,r)}))}function ff(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Xr(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n._s.getNamedQuery(e,t)))}(await Zd(e),t)))}const pf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(e,t,n){if(!n)throw new ei(Zr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gf(e,t,n,r){if(!0===t&&!0===r)throw new ei(Zr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function yf(e){if(!$i.isDocumentKey(e))throw new ei(Zr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function vf(e){if($i.isDocumentKey(e))throw new ei(Zr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function wf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Yr()}function _f(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ei(Zr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wf(e);throw new ei(Zr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function bf(e,t){if(t<=0)throw new ei(Zr.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ei(Zr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ei(Zr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new If({}),this._settingsFrozen=!1,e instanceof Fi?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ei(Zr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(e.options.projectId)}(e))}get app(){if(!this._app)throw new ei(Zr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ei(Zr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new If(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ri;switch(e.type){case"gapi":const t=e.client;return Jr(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ai(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new ei(Zr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=pf.get(e);t&&(Kr("ComponentProvider","Removing Datastore"),pf.delete(e),t.terminate())}(this),Promise.resolve()}}function Tf(e,t,n,r={}){var i;const s=(e=_f(e,Ef))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Hr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=jr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ei(Zr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new jr(s)}e._authCredentials=new ii(new ni(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Af(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Sf(this.firestore,e,this._key)}}class kf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new kf(this.firestore,e,this._query)}}class Af extends kf{constructor(e,t,n){super(e,t,zs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Sf(this.firestore,null,new $i(e))}withConverter(e){return new Af(this.firestore,e,this._path)}}function Cf(e,t,...n){if(e=(0,a.m9)(e),mf("collection","path",t),e instanceof Ef){const r=Ei.fromString(t,...n);return vf(r),new Af(e,null,r)}{if(!(e instanceof Sf||e instanceof Af))throw new ei(Zr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ei.fromString(t,...n));return vf(r),new Af(e.firestore,null,r)}}function Nf(e,t){if(e=_f(e,Ef),mf("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new ei(Zr.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new kf(e,null,function(e){return new Gs(Ei.emptyPath(),e)}(t))}function Df(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=fi.R()),mf("doc","path",t),e instanceof Ef){const r=Ei.fromString(t,...n);return yf(r),new Sf(e,null,new $i(r))}{if(!(e instanceof Sf||e instanceof Af))throw new ei(Zr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ei.fromString(t,...n));return yf(r),new Sf(e.firestore,e instanceof Af?e.converter:null,new $i(r))}}function Of(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),(e instanceof Sf||e instanceof Af)&&(t instanceof Sf||t instanceof Af)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function xf(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),e instanceof kf&&t instanceof kf&&e.firestore===t.firestore&&to(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Rf{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new nh(this,"async_queue_retry"),this.qa=()=>{const e=eh();e&&Kr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Do.Ao()};const e=eh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const t=eh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise((()=>{}));const t=new ti;return this.Ga((()=>this.Oa&&this.La?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ma.push(e),this.Qa())))}async Qa(){if(0!==this.Ma.length){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(I){if(!Rc(I))throw I;Kr("AsyncQueue","Operation failed with retryable error: "+I)}this.Ma.length>0&&this.Do.To((()=>this.Qa()))}}Ga(e){const t=this.ka.then((()=>(this.Ba=!0,e().catch((e=>{this.$a=e,this.Ba=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw zr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ba=!1,e))))));return this.ka=t,t}enqueueAfterDelay(e,t,n){this.Ka(),this.Ua.indexOf(e)>-1&&(t=0);const r=Fh.createAndSchedule(this,e,t,n,(e=>this.ja(e)));return this.Fa.push(r),r}Ka(){this.$a&&Yr()}verifyOperationInProgress(){}async Wa(){let e;do{e=this.ka,await e}while(e!==this.ka)}za(e){for(const t of this.Fa)if(t.timerId===e)return!0;return!1}Ha(e){return this.Wa().then((()=>{this.Fa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Fa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Wa()}))}Ja(e){this.Ua.push(e)}ja(e){const t=this.Fa.indexOf(e);this.Fa.splice(t,1)}}function Lf(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Pf{constructor(){this._progressObserver={},this._taskCompletionResolver=new ti,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=-1;class Ff extends Ef{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Rf,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||$f(this),this._firestoreClient.terminate()}}function Vf(e,t){const n=(0,i.qX)(e,"firestore");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,a.vZ)(r,t))return e;throw new ei(Zr.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ei(Zr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t})}function Uf(e=(0,i.Mq)()){return(0,i.qX)(e,"firestore").getImmediate()}function jf(e){return e._firestoreClient||$f(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function $f(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Mi(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Hd(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Bf(e,t){Xf(e=_f(e,Ff));const n=jf(e),r=e._freezeSettings(),i=new $d;return Gf(n,i,new Ud(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function qf(e){Xf(e=_f(e,Ff));const t=jf(e),n=e._freezeSettings(),r=new $d;return Gf(t,r,new jd(r,n.cacheSizeBytes))}function Gf(e,t,n){const r=new ti;return e.asyncQueue.enqueue((async()=>{try{await Wd(e,n),await Yd(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===Zr.FAILED_PRECONDITION||e.code===Zr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}})).then((()=>r.promise))}function Kf(e){if(e._initialized&&!e._terminated)throw new ei(Zr.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new ti;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Dc.vt())return Promise.resolve();const t=e+"main";await Dc.delete(t)}(al(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function zf(e){return function(e){const t=new ti;return e.asyncQueue.enqueueAndForget((async()=>md(await tf(e),t))),t.promise}(jf(e=_f(e,Ff)))}function Hf(e){return rf(jf(e=_f(e,Ff)))}function Wf(e){return sf(jf(e=_f(e,Ff)))}function Yf(e){return(0,i.wN)(e.app,"firestore"),e._delete()}function Jf(e,t){const n=jf(e=_f(e,Ff)),r=new Pf;return df(n,e._databaseId,t,r),r}function Qf(e,t){return ff(jf(e=_f(e,Ff)),t).then((t=>t?new kf(e,null,t.query):null))}function Xf(e){if(e._initialized||e._terminated)throw new ei(Zr.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ei(Zr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Si(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function ep(){return new Zf("__name__")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tp(Ci.fromBase64String(e))}catch(e){throw new ei(Zr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new tp(Ci.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ei(Zr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ei(Zr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pi(this._lat,e._lat)||pi(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=/^__.*__$/;class sp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Mo(e,this.data,this.fieldMask,t,this.fieldTransforms):new Po(e,this.data,t,this.fieldTransforms)}}class op{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Mo(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ap(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Yr()}}class cp{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ya(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new cp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Za({path:n,ec:!1});return r.nc(e),r}sc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Za({path:n,ec:!1});return r.Ya(),r}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return Cp(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(0===e.length)throw this.rc("Document fields must not be empty");if(ap(this.Xa)&&ip.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class up{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||th(e)}ac(e,t,n,r=!1){return new cp({Xa:e,methodName:t,uc:n,path:Si.emptyPath(),ec:!1,oc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function lp(e){const t=e._freezeSettings(),n=th(e._databaseId);return new up(e._databaseId,!!t.ignoreUndefinedProperties,n)}function hp(e,t,n,r,i,s={}){const o=e.ac(s.merge||s.mergeFields?2:0,t,n,i);Tp("Data must be an object, but it was:",o,r);const a=Ip(r,o);let c,u;if(s.merge)c=new ki(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Sp(t,r,n);if(!o.contains(i))throw new ei(Zr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Np(e,i)||e.push(i)}c=new ki(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new sp(new us(a),c,u)}class dp extends np{_toFieldTransform(e){if(2!==e.Xa)throw 1===e.Xa?e.rc(`${this._methodName}() can only appear at the top level of your update data`):e.rc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dp}}function fp(e,t,n){return new cp({Xa:3,uc:t.settings.uc,methodName:e._methodName,ec:n},t.databaseId,t.M,t.ignoreUndefinedProperties)}class pp extends np{_toFieldTransform(e){return new To(e.path,new go)}isEqual(e){return e instanceof pp}}class mp extends np{constructor(e,t){super(e),this.cc=t}_toFieldTransform(e){const t=fp(this,e,!0),n=this.cc.map((e=>bp(e,t))),r=new yo(n);return new To(e.path,r)}isEqual(e){return this===e}}class gp extends np{constructor(e,t){super(e),this.cc=t}_toFieldTransform(e){const t=fp(this,e,!0),n=this.cc.map((e=>bp(e,t))),r=new wo(n);return new To(e.path,r)}isEqual(e){return this===e}}class yp extends np{constructor(e,t){super(e),this.hc=t}_toFieldTransform(e){const t=new bo(e.M,lo(e.M,this.hc));return new To(e.path,t)}isEqual(e){return this===e}}function vp(e,t,n,r){const i=e.ac(1,t,n);Tp("Data must be an object, but it was:",i,r);const s=[],o=us.empty();_i(r,((e,r)=>{const c=Ap(t,e,n);r=(0,a.m9)(r);const u=i.sc(c);if(r instanceof dp)s.push(c);else{const e=bp(r,u);null!=e&&(s.push(c),o.set(c,e))}}));const c=new ki(s);return new op(o,c,i.fieldTransforms)}function wp(e,t,n,r,i,s){const o=e.ac(1,t,n),c=[Sp(t,r,n)],u=[i];if(s.length%2!=0)throw new ei(Zr.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Sp(t,s[a])),u.push(s[a+1]);const l=[],h=us.empty();for(let f=c.length-1;f>=0;--f)if(!Np(l,c[f])){const e=c[f];let t=u[f];t=(0,a.m9)(t);const n=o.sc(e);if(t instanceof dp)l.push(e);else{const r=bp(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new ki(l);return new op(h,d,o.fieldTransforms)}function _p(e,t,n,r=!1){return bp(n,e.ac(r?4:3,t))}function bp(e,t){if(Ep(e=(0,a.m9)(e)))return Tp("Unsupported field value:",t,e),Ip(e,t);if(e instanceof np)return function(e,t){if(!ap(t.Xa))throw t.rc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.rc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ec&&4!==t.Xa)throw t.rc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=bp(i,t.ic(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return lo(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=yi.fromDate(e);return{timestampValue:Ia(t.M,n)}}if(e instanceof yi){const n=new yi(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ia(t.M,n)}}if(e instanceof rp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof tp)return{bytesValue:Ea(t.M,e._byteString)};if(e instanceof Sf){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.rc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ka(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.rc(`Unsupported field value: ${wf(e)}`)}(e,t)}function Ip(e,t){const n={};return bi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_i(e,((e,r)=>{const i=bp(r,t.tc(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Ep(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof yi||e instanceof rp||e instanceof tp||e instanceof Sf||e instanceof np)}function Tp(e,t,n){if(!Ep(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=wf(n);throw"an object"===r?t.rc(e+" a custom object"):t.rc(e+" "+r)}}function Sp(e,t,n){if((t=(0,a.m9)(t))instanceof Zf)return t._internalPath;if("string"==typeof t)return Ap(e,t);throw Cp("Field path arguments must be of type string or ",e,!1,void 0,n)}const kp=new RegExp("[~\\*/\\[\\]]");function Ap(e,t,n){if(t.search(kp)>=0)throw Cp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Zf(...t.split("."))._internalPath}catch(r){throw Cp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Cp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ei(Zr.INVALID_ARGUMENT,a+e+c)}function Np(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Sf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Op(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Op extends Dp{data(){return super.data()}}function xp(e,t){return"string"==typeof t?Ap(e,t):t instanceof Zf?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lp extends Dp{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Pp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(xp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Pp extends Lp{data(e={}){return super.data(e)}}class Mp{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Rp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Pp(this._firestore,this._userDataWriter,n.key,n,new Rp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ei(Zr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Pp(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Rp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Pp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Rp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Fp(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Fp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Yr()}}function Vp(e,t){return e instanceof Lp&&t instanceof Lp?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Mp&&t instanceof Mp&&e._firestore===t._firestore&&xf(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(e){if(Ws(e)&&0===e.explicitOrderBy.length)throw new ei(Zr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jp{}function $p(e,...t){for(const n of t)e=n._apply(e);return e}class Bp extends jp{constructor(e,t,n){super(),this.lc=e,this.fc=t,this.dc=n,this.type="where"}_apply(e){const t=lp(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ei(Zr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){rm(o,s);const t=[];for(const n of o)t.push(nm(r,e,n));a={arrayValue:{values:t}}}else a=nm(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||rm(o,s),a=_p(n,t,o,"in"===s||"not-in"===s);const c=Ds.create(i,s,a);return function(e,t){if(t.S()){const n=Js(e);if(null!==n&&!n.isEqual(t.field))throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Ys(e);null!==r&&im(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ei(Zr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ei(Zr.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.lc,this.fc,this.dc);return new kf(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Gs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function qp(e,t,n){const r=t,i=xp("where",e);return new Bp(i,r,n)}class Gp extends jp{constructor(e,t){super(),this.lc=e,this._c=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new ei(Zr.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new ei(Zr.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new js(t,n);return function(e,t){if(null===Ys(e)){const n=Js(e);null!==n&&im(e,n,t.field)}}(e,r),r}(e._query,this.lc,this._c);return new kf(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Gs(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Kp(e,t="asc"){const n=t,r=xp("orderBy",e);return new Gp(r,n)}class zp extends jp{constructor(e,t,n){super(),this.type=e,this.wc=t,this.mc=n}_apply(e){return new kf(e.firestore,e.converter,eo(e._query,this.wc,this.mc))}}function Hp(e){return bf("limit",e),new zp("limit",e,"F")}function Wp(e){return bf("limitToLast",e),new zp("limitToLast",e,"L")}class Yp extends jp{constructor(e,t,n){super(),this.type=e,this.gc=t,this.yc=n}_apply(e){const t=tm(e,this.type,this.gc,this.yc);return new kf(e.firestore,e.converter,function(e,t){return new Gs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Jp(...e){return new Yp("startAt",e,!0)}function Qp(...e){return new Yp("startAfter",e,!1)}class Xp extends jp{constructor(e,t,n){super(),this.type=e,this.gc=t,this.yc=n}_apply(e){const t=tm(e,this.type,this.gc,this.yc);return new kf(e.firestore,e.converter,function(e,t){return new Gs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Zp(...e){return new Xp("endBefore",e,!1)}function em(...e){return new Xp("endAt",e,!0)}function tm(e,t,n,r){if(n[0]=(0,a.m9)(n[0]),n[0]instanceof Dp)return function(e,t,n,r,i){if(!r)throw new ei(Zr.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Xs(e))if(o.field.isKeyField())s.push(Qi(t,r.key));else{const e=r.data.field(o.field);if(Ri(e))throw new ei(Zr.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Us(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=lp(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new ei(Zr.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Qs(e)&&-1!==s.indexOf("/"))throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Ei.fromString(s));if(!$i.isDocumentKey(n))throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new $i(n);a.push(Qi(t,i))}else{const e=_p(n,r,s);a.push(e)}}return new Us(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function nm(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new ei(Zr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qs(t)&&-1!==n.indexOf("/"))throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ei.fromString(n));if(!$i.isDocumentKey(r))throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qi(e,new $i(r))}if(n instanceof Sf)return Qi(e,n._key);throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wf(n)}.`)}function rm(e,t){if(!Array.isArray(e)||0===e.length)throw new ei(Zr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new ei(Zr.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function im(e,t,n){if(!n.isEqual(t))throw new ei(Zr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{convertValue(e,t="none"){switch(Gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oi(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Yr()}}convertObject(e,t){const n={};return _i(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new rp(Oi(e.latitude),Oi(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Li(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Pi(e));default:return null}}convertTimestamp(e){const t=Di(e);return new yi(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ei.fromString(e);Jr(Za(n));const r=new Fi(n.get(1),n.get(3)),i=new $i(n.popFirst(5));return r.isEqual(t)||zr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class am extends sm{constructor(e){super(),this.firestore=e}convertBytes(e){return new tp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sf(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=lp(e)}set(e,t,n){this._verifyNotCommitted();const r=um(e,this._firestore),i=om(r.converter,t,n),s=hp(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Ao.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=um(e,this._firestore);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof Zf?wp(this._dataReader,"WriteBatch.update",i._key,t,n,r):vp(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Ao.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=um(e,this._firestore);return this._mutations=this._mutations.concat(new jo(t._key,Ao.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ei(Zr.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function um(e,t){if((e=(0,a.m9)(e)).firestore!==t)throw new ei(Zr.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(e){e=_f(e,Sf);const t=_f(e.firestore,Ff);return af(jf(t),e._key).then((n=>Tm(t,e,n)))}class hm extends sm{constructor(e){super(),this.firestore=e}convertBytes(e){return new tp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Sf(this.firestore,null,t)}}function dm(e){e=_f(e,Sf);const t=_f(e.firestore,Ff),n=jf(t),r=new hm(t);return of(n,e._key).then((n=>new Lp(t,r,e._key,n,new Rp(null!==n&&n.hasLocalMutations,!0),e.converter)))}function fm(e){e=_f(e,Sf);const t=_f(e.firestore,Ff);return af(jf(t),e._key,{source:"server"}).then((n=>Tm(t,e,n)))}function pm(e){e=_f(e,kf);const t=_f(e.firestore,Ff),n=jf(t),r=new hm(t);return Up(e._query),uf(n,e._query).then((n=>new Mp(t,r,e,n)))}function mm(e){e=_f(e,kf);const t=_f(e.firestore,Ff),n=jf(t),r=new hm(t);return cf(n,e._query).then((n=>new Mp(t,r,e,n)))}function gm(e){e=_f(e,kf);const t=_f(e.firestore,Ff),n=jf(t),r=new hm(t);return uf(n,e._query,{source:"server"}).then((n=>new Mp(t,r,e,n)))}function ym(e,t,n){e=_f(e,Sf);const r=_f(e.firestore,Ff),i=om(e.converter,t,n);return Em(r,[hp(lp(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Ao.none())])}function vm(e,t,n,...r){e=_f(e,Sf);const i=_f(e.firestore,Ff),s=lp(i);let o;return o="string"==typeof(t=(0,a.m9)(t))||t instanceof Zf?wp(s,"updateDoc",e._key,t,n,r):vp(s,"updateDoc",e._key,t),Em(i,[o.toMutation(e._key,Ao.exists(!0))])}function wm(e){return Em(_f(e.firestore,Ff),[new jo(e._key,Ao.none())])}function _m(e,t){const n=_f(e.firestore,Ff),r=Df(e),i=om(e.converter,t);return Em(n,[hp(lp(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Ao.exists(!1))]).then((()=>r))}function bm(e,...t){var n,r,i;e=(0,a.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Lf(t[o])||(s=t[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(Lf(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Sf)l=_f(e.firestore,Ff),h=zs(e._key.path),u={next:n=>{t[o]&&t[o](Tm(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=_f(e,kf);l=_f(n.firestore,Ff),h=n._query;const r=new hm(l);u={next:e=>{t[o]&&t[o](new Mp(l,r,n,e))},error:t[o+1],complete:t[o+2]},Up(e._query)}return function(e,t,n,r){const i=new qd(r),s=new Yh(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>Gh(await nf(e),s))),()=>{i.Ia(),e.asyncQueue.enqueueAndForget((async()=>Kh(await nf(e),s)))}}(jf(l),h,c,u)}function Im(e,t){return lf(jf(e=_f(e,Ff)),Lf(t)?t:{next:t})}function Em(e,t){return function(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget((async()=>ud(await tf(e),t,n))),n.promise}(jf(e),t)}function Tm(e,t,n){const r=n.docs.get(t._key),i=new hm(e);return new Lp(e,i,t._key,r,new Rp(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=lp(e)}get(e){const t=um(e,this._firestore),n=new am(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Yr();const r=e[0];if(r.isFoundDocument())return new Dp(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Dp(this._firestore,n,t._key,null,t.converter);throw Yr()}))}set(e,t,n){const r=um(e,this._firestore),i=om(r.converter,t,n),s=hp(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=um(e,this._firestore);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof Zf?wp(this._dataReader,"Transaction.update",i._key,t,n,r):vp(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=um(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=um(e,this._firestore),n=new hm(this._firestore);return super.get(e).then((e=>new Lp(this._firestore,n,t._key,e._document,new Rp(!1,!1),t.converter)))}}function km(e,t){return hf(jf(e=_f(e,Ff)),(n=>t(new Sm(e,n))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(){return new dp("deleteField")}function Cm(){return new pp("serverTimestamp")}function Nm(...e){return new mp("arrayUnion",e)}function Dm(...e){return new gp("arrayRemove",e)}function Om(e){return new yp("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(e){return jf(e=_f(e,Ff)),new cm(e,(t=>Em(e,t)))
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function Rm(e,t){jf(e=_f(e,Ff));const n="string"==typeof t?function(e){try{return JSON.parse(e)}catch(e){throw new ei(Zr.INVALID_ARGUMENT,"Failed to parse JSON:"+e.message)}}(t):t,r=[];if(Array.isArray(n.indexes))for(const i of n.indexes){const e=Lm(i,"collectionGroup"),t=[];if(Array.isArray(i.fields))for(const n of i.fields){const e=Ap("setIndexConfiguration",Lm(n,"fieldPath"));"CONTAINS"===n.arrayConfig?t.push(new ms(e,2)):"ASCENDING"===n.order?t.push(new ms(e,0)):"DESCENDING"===n.order&&t.push(new ms(e,1))}r.push(new ds(ds.UNKNOWN_ID,e,t,gs.empty()))}return Promise.resolve()}function Lm(e,t){if("string"!=typeof e[t])throw new ei(Zr.INVALID_ARGUMENT,"Missing string value for: "+t);return e[t]}!function(e,t=!0){!function(e){$r=e}(i.Jn),(0,i.Xd)(new s.wA("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Ff(r,new si(e.getProvider("auth-internal")),new ui(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)(Ur,"3.4.8",e),(0,i.KN)(Ur,"3.4.8","esm2017")}()},5205:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var s=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(e,s,n),navigator.serviceWorker.ready.then((function(e){s("ready",e)})).catch((function(e){return o(s,e)}))):(a(e,s,n),navigator.serviceWorker.ready.then((function(e){s("ready",e)})).catch((function(e){return o(s,e)})))}))}function o(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return o(t,e)}))}function c(e,t,n){fetch(e).then((function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(e,t,n)})).catch((function(e){return o(t,e)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return o(emit,e)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},3744:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},2119:function(e,t,n){"use strict";n.d(t,{PO:function(){return K},p7:function(){return tt}});var r=n(6252),i=n(2262);
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>s?Symbol(e):"_vr_"+e,a=o("rvlm"),c=o("rvd"),u=o("r"),l=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||s&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function m(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const g=()=>{};const y=/\/$/,v=e=>e.replace(y,"");function w(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=A(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function _(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function b(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function I(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&E(t.matched[r],n.matched[i])&&T(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function E(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function T(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!S(e[n],t[n]))return!1;return!0}function S(e,t){return Array.isArray(e)?k(e,t):Array.isArray(t)?k(t,e):e===t}function k(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function A(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var C,N;(function(e){e["pop"]="pop",e["push"]="push"})(C||(C={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(N||(N={}));function D(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const O=/^[^#]+#/;function x(e,t){return e.replace(O,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=R(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function M(e,t){const n=history.state?history.state.position-t:-1;return n+e}const F=new Map;function V(e,t){F.set(e,t)}function U(e){const t=F.get(e);return F.delete(e),t}let j=()=>location.protocol+"//"+location.host;function $(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),b(n,"")}const o=b(n,e);return o+r+i}function B(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=$(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:C.pop,direction:l?l>0?N.forward:N.back:N.unknown})}))};function c(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:L()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function q(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?L():null}}function G(e){const{history:t,location:n}=window,r={value:$(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:j()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=p({},t.state,q(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=p({},i.value,t.state,{forward:e,scroll:L()});s(o.current,o,!0);const a=p({},q(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function K(e){e=D(e);const t=G(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=p({location:"",base:e,go:r,createHref:x.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function z(e){return"string"===typeof e||e&&"object"===typeof e}function H(e){return"string"===typeof e||"symbol"===typeof e}const W={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y=o("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function Q(e,t){return p(new Error,{type:e,[Y]:!0},t)}function X(e,t){return e instanceof Error&&Y in e&&(null==t||!!(e.type&t))}const Z="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=p({},ee,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(te,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;s.push({name:e,repeatable:n,optional:a});const h=c||Z;if(h!==Z){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const s of i)if(0===s.type)n+=s.value;else if(1===s.type){const{value:o,repeatable:a,optional:c}=s,u=o in t?t[o]:"";if(Array.isArray(u)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(u)?u.join("/"):u;if(!l){if(!c)throw new Error(`Missing required param "${o}"`);i.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ie(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=re(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const se={type:0,value:""},oe=/[a-zA-Z0-9_]/;function ae(e){if(!e)return[[]];if("/"===e)return[[se]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:oe.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function ce(e,t,n){const r=ne(ae(e.path),n);const i=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ue(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=he(e);a.aliasOf=r&&r.record;const u=me(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(p({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ce(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!fe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(e){if(H(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&ie(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ge(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!fe(e)&&r.set(e.record.name,e)}function u(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Q(1,{location:e});o=i.record.name,a=p(le(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Q(1,{location:e,currentLocation:t});o=i.record.name,a=p({},t.params,e.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:pe(c)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function le(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function he(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pe(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ge(e,t){return t.children.some((t=>t===e||ge(e,t)))}const ye=/#/g,ve=/&/g,we=/\//g,_e=/=/g,be=/\?/g,Ie=/\+/g,Ee=/%5B/g,Te=/%5D/g,Se=/%5E/g,ke=/%60/g,Ae=/%7B/g,Ce=/%7C/g,Ne=/%7D/g,De=/%20/g;function Oe(e){return encodeURI(""+e).replace(Ce,"|").replace(Ee,"[").replace(Te,"]")}function xe(e){return Oe(e).replace(Ae,"{").replace(Ne,"}").replace(Se,"^")}function Re(e){return Oe(e).replace(Ie,"%2B").replace(De,"+").replace(ye,"%23").replace(ve,"%26").replace(ke,"`").replace(Ae,"{").replace(Ne,"}").replace(Se,"^")}function Le(e){return Re(e).replace(_e,"%3D")}function Pe(e){return Oe(e).replace(ye,"%23").replace(be,"%3F")}function Me(e){return null==e?"":Pe(e).replace(we,"%2F")}function Fe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ve(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(Ie," "),n=e.indexOf("="),s=Fe(n<0?e:e.slice(0,n)),o=n<0?null:Fe(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Ue(e){let t="";for(let n in e){const r=e[n];if(n=Le(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((e=>e&&Re(e))):[r&&Re(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(Q(4,{from:n,to:t})):e instanceof Error?a(e):z(e)?a(Q(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function qe(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(Ge(o)){const a=o.__vccOpts||o,c=a[t];c&&i.push(Be(c,n,r,s,e))}else{let a=o();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&Be(c,n,r,s,e)()}))))}}return i}function Ge(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=(0,r.f3)(u),n=(0,r.f3)(l),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(E.bind(null,r));if(o>-1)return o;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(E.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Ye(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&T(n.params,s.value.params)));function h(n={}){return We(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(g):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const ze=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,i.qj)(Ke(e)),{options:s}=(0,r.f3)(u),o=(0,r.Fl)((()=>({[Qe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),He=ze;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ye(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(h),o=(0,r.Fl)((()=>e.route||s.value)),u=(0,r.f3)(c,0),l=(0,r.Fl)((()=>o.value.matched[u]));(0,r.JJ)(c,u+1),(0,r.JJ)(a,l),(0,r.JJ)(h,o);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&E(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=l.value,a=s&&s.components[e.name],c=e.name;if(!a)return Ze(n.default,{Component:a,route:i});const u=s.props[e.name],h=u?!0===u?i.params:"function"===typeof u?u(i):u:null,f=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=(0,r.h)(a,p({},h,t,{onVnodeUnmounted:f,ref:d}));return Ze(n.default,{Component:m,route:i})||m}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=ue(e.routes,e),n=e.parseQuery||Ve,s=e.stringifyQuery||Ue,o=e.history;const a=$e(),c=$e(),f=$e(),y=(0,i.XI)(W);let v=W;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=m.bind(null,(e=>""+e)),E=m.bind(null,Me),T=m.bind(null,Fe);function S(e,n){let r,i;return H(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function A(){return t.getRoutes().map((e=>e.record))}function N(e){return!!t.getRecordMatcher(e)}function D(e,r){if(r=p({},r||y.value),"string"===typeof e){const i=w(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return p(i,s,{params:T(s.params),hash:Fe(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=p({},e,{path:w(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];i=p({},e,{params:E(e.params)}),r.params=E(r.params)}const a=t.resolve(i,r),c=e.hash||"";a.params=b(T(a.params));const u=_(s,p({},e,{hash:xe(c),path:a.path})),l=o.createHref(u);return p({fullPath:u,hash:c,query:s===Ue?je(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function O(e){return"string"===typeof e?w(n,e,y.value.path):p({},e)}function x(e,t){if(v!==e)return Q(8,{from:t,to:e})}function R(e){return $(e)}function F(e){return R(p(O(e),{replace:!0}))}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=O(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function $(e,t){const n=v=D(e),r=y.value,i=e.state,o=e.force,a=!0===e.replace,c=j(n);if(c)return $(p(O(c),{state:i,force:o,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!o&&I(s,r,n)&&(l=Q(16,{to:u,from:r}),ie(r,r,!0,!1)),(l?Promise.resolve(l):q(u,r)).catch((e=>X(e)?X(e,2)?e:re(e):te(e,u,r))).then((e=>{if(e){if(X(e,2))return $(p(O(e.to),{state:i,force:o,replace:a}),t||u)}else e=K(u,r,!0,a,i);return G(u,r,e),e}))}function B(e,t){const n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function q(e,t){let n;const[r,i,s]=rt(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const o=B.bind(null,e,t);return n.push(o),nt(n).then((()=>{n=[];for(const r of a.list())n.push(Be(r,e,t));return n.push(o),nt(n)})).then((()=>{n=qe(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(o),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(o),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(s,"beforeRouteEnter",e,t),n.push(o),nt(n)))).then((()=>{n=[];for(const r of c.list())n.push(Be(r,e,t));return n.push(o),nt(n)})).catch((e=>X(e,8)?e:Promise.reject(e)))}function G(e,t,n){for(const r of f.list())r(e,t,n)}function K(e,t,n,r,i){const s=x(e,t);if(s)return s;const a=t===W,c=d?history.state:{};n&&(r||a?o.replace(e.fullPath,p({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),y.value=e,ie(e,t,n,a),re()}let z;function Y(){z||(z=o.listen(((e,t,n)=>{const r=D(e),i=j(r);if(i)return void $(p(i,{replace:!0}),r).catch(g);v=r;const s=y.value;d&&V(M(s.fullPath,n.delta),L()),q(r,s).catch((e=>X(e,12)?e:X(e,2)?($(e.to,r).then((e=>{X(e,20)&&!n.delta&&n.type===C.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),te(e,r,s)))).then((e=>{e=e||K(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===C.pop&&X(e,20)&&o.go(-1,!1)),G(r,s,e)})).catch(g)})))}let J,Z=$e(),ee=$e();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return J&&y.value!==W?Promise.resolve():new Promise(((e,t)=>{Z.add([e,t])}))}function re(e){return J||(J=!e,Y(),Z.list().forEach((([t,n])=>e?n(e):t())),Z.reset()),e}function ie(t,n,i,s){const{scrollBehavior:o}=e;if(!d||!o)return Promise.resolve();const a=!i&&U(M(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(t,n,a))).then((e=>e&&P(e))).catch((e=>te(e,t,n)))}const se=e=>o.go(e);let oe;const ae=new Set,ce={currentRoute:y,addRoute:S,removeRoute:k,hasRoute:N,getRoutes:A,resolve:D,options:e,push:R,replace:F,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",He),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),d&&!oe&&y.value===W&&(oe=!0,R(o.location).catch((e=>{0})));const n={};for(const i in W)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(u,t),e.provide(l,(0,i.qj)(n)),e.provide(h,y);const s=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(v=W,z&&z(),z=null,y.value=W,oe=!1,J=!1),s()}}};return ce}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>E(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>E(e,a)))||i.push(a))}return[n,r,i]}},3907:function(e,t,n){"use strict";n.d(t,{MT:function(){return ee}});var r=n(6252),i=n(2262);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,h;function d(){var e;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(l=!0,h=n.g.perf_hooks.performance):l=!1),l}function f(){return d()?h.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e},now(){return f()}},t&&t.on(u,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function m(e,t){const n=e,r=o(),i=s(),u=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const e=u?new p(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(c,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var g="store";function y(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function v(e){return null!==e&&"object"===typeof e}function w(e){return e&&"function"===typeof e.then}function _(e,t){return function(){return e(t)}}function b(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function I(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;T(e,n,[],e._modules.root,!0),E(e,n,t)}function E(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,o={};y(s,(function(t,n){o[n]=_(t,e),Object.defineProperty(e.getters,n,{get:function(){return o[n]()},enumerable:!0})})),e._state=(0,i.qj)({data:t}),e.strict&&D(e),r&&n&&e._withCommit((function(){r.data=null}))}function T(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=O(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){a[c]=r.state}))}var u=r.context=S(e,o,n);r.forEachMutation((function(t,n){var r=o+n;A(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;C(e,r,i,u)})),r.forEachGetter((function(t,n){var r=o+n;N(e,r,t,u)})),r.forEachChild((function(r,s){T(e,t,n.concat(s),r,i)}))}function S(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=x(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:r?e.commit:function(n,r,i){var s=x(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return k(e,t)}},state:{get:function(){return O(e.state,n)}}}),i}function k(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function A(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function C(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return w(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function N(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function D(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function O(e,t){return t.reduce((function(e,t){return e[t]}),e)}function x(e,t,n){return v(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var R="vuex bindings",L="vuex:mutations",P="vuex:actions",M="vuex",F=0;function V(e,t){m({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[R]},(function(n){n.addTimelineLayer({id:L,label:"Vuex Mutations",color:U}),n.addTimelineLayer({id:P,label:"Vuex Actions",color:U}),n.addInspector({id:M,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===M)if(n.filter){var r=[];K(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[G(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===M){var r=n.nodeId;k(t,r),n.state=z(W(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===M){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(M),n.sendInspectorState(M),n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=F++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:P,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var U=8702998,j=6710886,$=16777215,B={label:"namespaced",textColor:$,backgroundColor:j};function q(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function G(e,t){return{id:t||"root",label:q(t),tags:e.namespaced?[B]:[],children:Object.keys(e._children).map((function(n){return G(e._children[n],t+n+"/")}))}}function K(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[B]:[]}),Object.keys(t._children).forEach((function(i){K(e,t._children[i],n,r+i+"/")}))}function z(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=H(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?q(e):e,editable:!1,value:Y((function(){return s[e]}))}}))}return i}function H(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=Y((function(){return e[n]}))}else t[n]=Y((function(){return e[n]}))})),t}function W(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var s=e[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function Y(e){try{return e()}catch(t){return t}}var J=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},Q={namespaced:{configurable:!0}};Q.namespaced.get=function(){return!!this._rawModule.namespaced},J.prototype.addChild=function(e,t){this._children[e]=t},J.prototype.removeChild=function(e){delete this._children[e]},J.prototype.getChild=function(e){return this._children[e]},J.prototype.hasChild=function(e){return e in this._children},J.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},J.prototype.forEachChild=function(e){y(this._children,e)},J.prototype.forEachGetter=function(e){this._rawModule.getters&&y(this._rawModule.getters,e)},J.prototype.forEachAction=function(e){this._rawModule.actions&&y(this._rawModule.actions,e)},J.prototype.forEachMutation=function(e){this._rawModule.mutations&&y(this._rawModule.mutations,e)},Object.defineProperties(J.prototype,Q);var X=function(e){this.register([],e,!1)};function Z(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;Z(e.concat(r),t.getChild(r),n.modules[r])}}X.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},X.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},X.prototype.update=function(e){Z([],this.root,e)},X.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new J(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&y(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},X.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},X.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new X(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(s,e,t)},this.commit=function(e,t,n){return c.call(s,e,t,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),E(this,u),n.forEach((function(e){return e(t)}))},ne={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||g,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&V(e,this)},ne.state.get=function(){return this._state.data},ne.state.set=function(e){0},te.prototype.commit=function(e,t,n){var r=this,i=x(e,t,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},te.prototype.dispatch=function(e,t){var n=this,r=x(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(u){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(u){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return b(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return b(n,this._actionSubscribers,t)},te.prototype.watch=function(e,t,n){var i=this;return(0,r.YP)((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),T(this,this.state,e,this._modules.get(e),n.preserveState),E(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=O(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),I(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),I(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ne);se((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=oe(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),se((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=oe(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),se((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||oe(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n})),se((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=oe(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function re(e){return ie(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ie(e){return Array.isArray(e)||v(e)}function se(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function oe(e,t,n){var r=e._modulesNamespaceMap[n];return r}},2238:function(e,t,n){"use strict";n.d(t,{Jn:function(){return H},KN:function(){return J},Mq:function(){return Y},Xd:function(){return $},ZF:function(){return W},qX:function(){return B},wN:function(){return q}});var r=n(8463),i=n(3333),s=n(4444);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.22",l=new i.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",w="@firebase/database-compat",_="@firebase/functions",b="@firebase/functions-compat",I="@firebase/installations",E="@firebase/installations-compat",T="@firebase/messaging",S="@firebase/messaging-compat",k="@firebase/performance",A="@firebase/performance-compat",C="@firebase/remote-config",N="@firebase/remote-config-compat",D="@firebase/storage",O="@firebase/storage-compat",x="@firebase/firestore",R="@firebase/firestore-compat",L="firebase",P="9.7.0",M="[DEFAULT]",F={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[w]:"fire-rtdb-compat",[_]:"fire-fn",[b]:"fire-fn-compat",[I]:"fire-iid",[E]:"fire-iid-compat",[T]:"fire-fcm",[S]:"fire-fcm-compat",[k]:"fire-perf",[A]:"fire-perf-compat",[C]:"fire-rc",[N]:"fire-rc-compat",[D]:"fire-gcs",[O]:"fire-gcs-compat",[x]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},V=new Map,U=new Map;function j(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e){const t=e.name;if(U.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of V.values())j(n,e);return!0}function B(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function q(e,t,n=M){B(e,t).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},K=new s.LL("app","Firebase",G);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=P;function W(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw K.create("bad-app-name",{appName:String(i)});const o=V.get(i);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw K.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of U.values())a.addComponent(r);const c=new z(e,n,a);return V.set(i,c),c}function Y(e=M){const t=V.get(e);if(!t)throw K.create("no-app",{appName:e});return t}function J(e,t,n){var i;let s=null!==(i=F[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}$(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q="firebase-heartbeat-database",X=1,Z="firebase-heartbeat-store";let ee=null;function te(){return ee||(ee=(0,s.X3)(Q,X,((e,t)=>{switch(t){case 0:e.createObjectStore(Z)}})).catch((e=>{throw K.create("storage-open",{originalErrorMessage:e.message})}))),ee}async function ne(e){try{const t=await te();return t.transaction(Z).objectStore(Z).get(ie(e))}catch(t){throw K.create("storage-get",{originalErrorMessage:t.message})}}async function re(e,t){try{const n=await te(),r=n.transaction(Z,"readwrite"),i=r.objectStore(Z);return await i.put(t,ie(e)),r.complete}catch(n){throw K.create("storage-set",{originalErrorMessage:n.message})}}function ie(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=1024,oe=2592e6;class ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new le(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=ce();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=oe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ce(),{heartbeatsToSend:t,unsentEntries:n}=ue(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ce(){const e=new Date;return e.toISOString().substring(0,10)}function ue(e,t=se){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),he(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),he(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class le{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function he(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){$(new r.wA("platform-logger",(e=>new o(e)),"PRIVATE")),$(new r.wA("heartbeat",(e=>new ae(e)),"PRIVATE")),J(c,u,e),J(c,u,"esm2017"),J("fire-js","")}de("")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(4444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return i}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}}}]);
//# sourceMappingURL=chunk-vendors.d062fe83.js.map