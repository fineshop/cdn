import{_getProvider as e,getApp as t,_registerComponent as n,registerVersion as r,SDK_VERSION as s}from"./firebase-app.js";const o=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const s=e[t],o=t+1<e.length,i=o?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,u=s>>2,h=(3&s)<<4|i>>4;let l=(15&i)<<2|c>>6,d=63&c;a||(d=64,o||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&o)}else if(s>239&&s<365){const o=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&o)<<6|63&i)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const i=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==o||null==i||null==a)throw Error();const c=s<<2|o>>4;if(r.push(c),64!==i){const e=o<<4&240|i>>2;if(r.push(e),64!==a){const e=i<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){return function(e){const t=o(e);return i.encodeByteArray(t,!0)}(e).replace(/\./g,"")};const c=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,u=()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&function(e){try{return i.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(e[1]);return t&&JSON.parse(t)},h=()=>{try{return c()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||u()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},l=e=>{const t=(e=>{var t,n;return null===(n=null===(t=h())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]};class d extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,d.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?function(e,t){return e.replace(p,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",i=`${this.serviceName}: ${o} (${r}).`;return new d(r,i,n)}}const p=/\{\$([^}]+)}/g;function f(e){return e&&e._delegate?e._delegate:e}class g{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}class m extends d{constructor(e,t,n=0){super(b(e),`Firebase Storage: ${t} (${b(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,m.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return b(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function b(e){return"storage/"+e}function y(){return new m("unknown","An unknown error occurred, please check the error payload for server response.")}function w(){return new m("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function T(){return new m("canceled","User canceled the upload/download.")}function v(){return new m("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function k(e){return new m("invalid-argument",e)}function R(){return new m("app-deleted","The Firebase app was deleted.")}function S(e){return new m("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function E(e,t){return new m("invalid-format","String does not match format '"+e+"': "+t)}function C(e){throw new m("internal-error","Internal error: "+e)}class A{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=A.makeFromUrl(e,t)}catch(t){return new A(e,"")}if(""===n.path)return n;throw new m("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+r+"(/(.*))?$","i");function o(e){e.path_=decodeURIComponent(e.path)}const i=t.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${i}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:o},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:o}];for(let t=0;t<a.length;t++){const r=a[t],s=r.regex.exec(e);if(s){const e=s[r.indices.bucket];let t=s[r.indices.path];t||(t=""),n=new A(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new m("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class x{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function O(e){return"string"==typeof e||e instanceof String}function U(e){return P()&&e instanceof Blob}function P(){return"undefined"!=typeof Blob&&!function(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()}function I(e,t,n,r){if(r<t)throw k(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw k(`Invalid value for '${e}'. Expected ${n} or less.`)}function B(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function M(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}var D;function N(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),s=-1!==t.indexOf(e);return n||r||s}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(D||(D={}));class L{constructor(e,t,n,r,s,o,i,a,c,u,h,l=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=i,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new q(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===D.NO_ERROR,s=n.getStatus();if((!t||N(s,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===D.ABORT;return void e(!1,new q(!1,null,t))}const o=-1!==this.successCodes_.indexOf(s);e(!0,new q(o,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==s){const e=y();e.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,e)):r(e)}else if(t.canceled){r(this.appDelete_?R():T())}else{r(w())}};this.canceled_?t(0,new q(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,s=null,o=null,i=!1,a=0;function c(){return 2===a}let u=!1;function h(...e){u||(u=!0,t.apply(null,e))}function l(t){s=setTimeout((()=>{s=null,e(_,c())}),t)}function d(){o&&clearTimeout(o)}function _(e,...t){if(u)return void d();if(e)return d(),void h.call(null,e,...t);if(c()||i)return d(),void h.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),l(n)}let p=!1;function f(e){p||(p=!0,d(),u||(null!==s?(e||(a=2),clearTimeout(s),l(0)):e||(a=1)))}return l(0),o=setTimeout((()=>{i=!0,f(!0)}),n),f}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class q{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function F(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function H(...e){const t=F();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(P())return new Blob(e);throw new m("unsupported-environment","This browser doesn't seem to support creating Blobs")}function $(e){if("undefined"==typeof atob)throw new m("unsupported-environment",`${"base-64"} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);return atob(e)}const j={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class z{constructor(e,t){this.data=e,this.contentType=t||null}}function W(e,t){switch(e){case j.RAW:return new z(G(t));case j.BASE64:case j.BASE64URL:return new z(V(e,t));case j.DATA_URL:return new z(function(e){const t=new X(e);return t.base64?V(j.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw E(j.DATA_URL,"Malformed data URL.")}return G(t)}(t.rest)}(t),new X(t).contentType)}throw y()}function G(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function V(e,t){switch(e){case j.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw E(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case j.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw E(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=$(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw E(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class X{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw E(j.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class J{constructor(e,t){let n=0,r="";U(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(U(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new J(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new J(n,!0)}}static getBlob(...e){if(P()){const t=e.map((e=>e instanceof J?e.data_:e));return new J(H.apply(null,t))}{const t=e.map((e=>O(e)?W(j.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let s=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[s++]=e[t]})),new J(r,!0)}}uploadData(){return this.data_}}function K(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}function Z(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function Y(e,t){return t}class Q{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Y}}let ee=null;function te(){if(ee)return ee;const e=[];e.push(new Q("bucket")),e.push(new Q("generation")),e.push(new Q("metageneration")),e.push(new Q("name","fullPath",!0));const t=new Q("name");t.xform=function(e,t){return function(e){return!O(e)||e.length<2?e:Z(e)}(t)},e.push(t);const n=new Q("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Q("timeCreated")),e.push(new Q("updated")),e.push(new Q("md5Hash",null,!0)),e.push(new Q("cacheControl",null,!0)),e.push(new Q("contentDisposition",null,!0)),e.push(new Q("contentEncoding",null,!0)),e.push(new Q("contentLanguage",null,!0)),e.push(new Q("contentType",null,!0)),e.push(new Q("metadata","customMetadata",!0)),ee=e,ee}function ne(e,t,n){const r={type:"file"},s=n.length;for(let e=0;e<s;e++){const s=n[e];r[s.local]=s.xform(r,t[s.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,s=new A(n,r);return t._makeStorageReference(s)}})}(r,e),r}function re(e,t,n){const r=K(t);if(null===r)return null;return ne(e,r,n)}function se(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}function oe(e,t,n){const r=K(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n.prefixes)for(const s of n.prefixes){const n=s.replace(/\/$/,""),o=e._makeStorageReference(new A(t,n));r.prefixes.push(o)}if(n.items)for(const s of n.items){const n=e._makeStorageReference(new A(t,s.name));r.items.push(n)}return r}(e,t,r)}class ie{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function ae(e){if(!e)throw y()}function ce(e,t){return function(n,r){const s=re(e,r,t);return ae(null!==s),s}}function ue(e,t){return function(n,r){const s=re(e,r,t);return ae(null!==s),function(e,t,n,r){const s=K(t);if(null===s)return null;if(!O(s.downloadTokens))return null;const o=s.downloadTokens;if(0===o.length)return null;const i=encodeURIComponent;return o.split(",").map((t=>{const s=e.bucket,o=e.fullPath;return B("/b/"+i(s)+"/o/"+i(o),n,r)+M({alt:"media",token:t})}))[0]}(s,r,e.host,e._protocol)}}function he(e){return function(t,n){let r;var s,o;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new m("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new m("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new m("quota-exceeded","Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,r=new m("unauthorized","User does not have permission to access '"+s+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function le(e){const t=he(e);return function(n,r){let s=t(n,r);var o;return 404===n.getStatus()&&(o=e.path,s=new m("object-not-found","Object '"+o+"' does not exist.")),s.serverResponse=r.serverResponse,s}}function de(e,t,n){const r=B(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,o=new ie(r,"GET",ce(e,n),s);return o.errorHandler=le(t),o}function _e(e,t,n,r,s){const o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",n&&n.length>0&&(o.delimiter=n),r&&(o.pageToken=r),s&&(o.maxResults=s);const i=B(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,c=new ie(i,"GET",function(e,t){return function(n,r){const s=oe(e,t,r);return ae(null!==s),s}}(e,t.bucket),a);return c.urlParams=o,c.errorHandler=he(t),c}function pe(e,t,n){const r=B(t.fullServerUrl(),e.host,e._protocol)+"?alt=media",s=e.maxOperationRetryTime,o=new ie(r,"GET",((e,t)=>t),s);return o.errorHandler=le(t),void 0!==n&&(o.headers.Range=`bytes=0-${n}`,o.successCodes=[200,206]),o}function fe(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function ge(e,t,n,r,s){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();i["Content-Type"]="multipart/related; boundary="+a;const c=fe(t,r,s),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+se(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",h="\r\n--"+a+"--",l=J.getBlob(u,r,h);if(null===l)throw v();const d={name:c.fullPath},_=B(o,e.host,e._protocol),p=e.maxUploadRetryTime,f=new ie(_,"POST",ce(e,n),p);return f.urlParams=d,f.headers=i,f.body=l.uploadData(),f.errorHandler=he(t),f}class me{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function be(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){ae(!1)}return ae(!!n&&-1!==(t||["active"]).indexOf(n)),n}function ye(e,t,n,r,s,o,i,a){const c=new me(0,0);if(i?(c.current=i.current,c.total=i.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw new m("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const u=c.total-c.current;let h=u;s>0&&(h=Math.min(h,s));const l=c.current,d=l+h;let _="";_=0===h?"finalize":u===h?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":_,"X-Goog-Upload-Offset":`${c.current}`},f=r.slice(l,d);if(null===f)throw v();const g=t.maxUploadRetryTime,b=new ie(n,"POST",(function(e,n){const s=be(e,["active","final"]),i=c.current+h,a=r.size();let u;return u="final"===s?ce(t,o)(e,n):null,new me(i,a,"final"===s,u)}),g);return b.headers=p,b.body=f.uploadData(),b.progressCallback=a||null,b.errorHandler=he(e),b}const we={STATE_CHANGED:"state_changed"},Te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ve(e){switch(e){case"running":case"pausing":case"canceling":return Te.RUNNING;case"paused":return Te.PAUSED;case"success":return Te.SUCCESS;case"canceled":return Te.CANCELED;default:return Te.ERROR}}class ke{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}function Re(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}class Se{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=D.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=D.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=D.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw C("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw C("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw C("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw C("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw C("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Ee extends Se{initXhr(){this.xhr_.responseType="text"}}function Ce(){return new Ee}class Ae extends Se{initXhr(){this.xhr_.responseType="arraybuffer"}}function xe(){return new Ae}class Oe extends Se{initXhr(){this.xhr_.responseType="blob"}}function Ue(){return new Oe}class Pe{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=te(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(N(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();e=w()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,s){const o=t.bucketOnlyServerUrl(),i=fe(t,r,s),a={name:i.fullPath},c=B(o,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},h=se(i,n),l=e.maxUploadRetryTime,d=new ie(c,"POST",(function(e){let t;be(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){ae(!1)}return ae(O(t)),t}),l);return d.urlParams=a,d.headers=u,d.body=h,d.errorHandler=he(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Ce,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const s=e.maxUploadRetryTime,o=new ie(n,"POST",(function(e){const t=be(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){ae(!1)}n||ae(!1);const s=Number(n);return ae(!isNaN(s)),new me(s,r.size(),"final"===t)}),s);return o.headers={"X-Goog-Upload-Command":"query"},o.errorHandler=he(t),o}(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(r,Ce,t,n);this._request=s,s.getPromise().then((e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=262144*this._chunkMultiplier,t=new me(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,s)=>{let o;try{o=ye(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const i=this._ref.storage._makeRequest(o,Ce,r,s,!1);this._request=i,i.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){2*(262144*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=de(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,Ce,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=ge(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Ce,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=T(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=ve(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const s=new ke(t||void 0,n||void 0,r||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(ve(this._state)){case Te.SUCCESS:Re(this._resolve.bind(null,this.snapshot))();break;case Te.CANCELED:case Te.ERROR:Re(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ve(this._state)){case Te.RUNNING:case Te.PAUSED:e.next&&Re(e.next.bind(e,this.snapshot))();break;case Te.SUCCESS:e.complete&&Re(e.complete.bind(e))();break;default:e.error&&Re(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}class Ie{constructor(e,t){this._service=e,this._location=t instanceof A?t:A.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ie(e,t)}get root(){const e=new A(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Z(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new A(this._location.bucket,e);return new Ie(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw S(e)}}function Be(e,t,n){e._throwIfRoot("uploadBytes");const r=ge(e.storage,e._location,te(),new J(t,!0),n);return e.storage.makeRequestWithTokens(r,Ce).then((t=>({metadata:t,ref:e})))}function Me(e){const t={prefixes:[],items:[]};return De(e,t).then((()=>t))}async function De(e,t,n){const r={pageToken:n},s=await Ne(e,r);t.prefixes.push(...s.prefixes),t.items.push(...s.items),null!=s.nextPageToken&&await De(e,t,s.nextPageToken)}function Ne(e,t){null!=t&&"number"==typeof t.maxResults&&I("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=_e(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,Ce)}function Le(e,t){e._throwIfRoot("updateMetadata");const n=function(e,t,n,r){const s=B(t.fullServerUrl(),e.host,e._protocol),o=se(n,r),i=e.maxOperationRetryTime,a=new ie(s,"PATCH",ce(e,r),i);return a.headers={"Content-Type":"application/json; charset=utf-8"},a.body=o,a.errorHandler=le(t),a}(e.storage,e._location,t,te());return e.storage.makeRequestWithTokens(n,Ce)}function qe(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=B(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,o=new ie(r,"GET",ue(e,n),s);return o.errorHandler=le(t),o}(e.storage,e._location,te());return e.storage.makeRequestWithTokens(t,Ce).then((e=>{if(null===e)throw new m("no-download-url","The given file does not have any download URLs.");return e}))}function Fe(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=B(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,s=new ie(n,"DELETE",(function(e,t){}),r);return s.successCodes=[200,204],s.errorHandler=le(t),s}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Ce)}function He(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new A(e._location.bucket,n);return new Ie(e.storage,r)}function $e(e,t){if(e instanceof Ge){const n=e;if(null==n._bucket)throw new m("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new Ie(n,n._bucket);return null!=t?$e(r,t):r}return void 0!==t?He(e,t):e}function je(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Ge)return new Ie(e,t);throw k("To use ref(service, url), the first argument must be a Storage instance.")}return $e(e,t)}function ze(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:A.makeFromBucketSpec(n,e)}function We(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"==typeof s?s:function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[a(JSON.stringify({alg:"none",type:"JWT"})),a(JSON.stringify(o)),""].join(".")}(s,e.app.options.projectId))}class Ge{constructor(e,t,n,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?A.makeFromBucketSpec(r,this._host):ze(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=A.makeFromBucketSpec(this._url,e):this._bucket=ze(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){I("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){I("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ie(this,e)}_makeRequest(e,t,n,r,s=!0){if(this._deleted)return new x(R());{const o=function(e,t,n,r,s,o,i=!0){const a=M(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(u,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(u,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(u,o),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(u,r),new L(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,i)}(e,this._appId,n,r,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Ve="@firebase/storage";function Xe(e,t){return function(e,t){e._throwIfRoot("getBytes");const n=pe(e.storage,e._location,t);return e.storage.makeRequestWithTokens(n,xe).then((e=>void 0!==t?e.slice(0,t):e))}(e=f(e),t)}function Je(e,t,n){return Be(e=f(e),t,n)}function Ke(e,t,n,r){return function(e,t,n=j.RAW,r){e._throwIfRoot("uploadString");const s=W(n,t),o=Object.assign({},r);return null==o.contentType&&null!=s.contentType&&(o.contentType=s.contentType),Be(e,s.data,o)}(e=f(e),t,n,r)}function Ze(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Pe(e,new J(t),n)}(e=f(e),t,n)}function Ye(e){return function(e){e._throwIfRoot("getMetadata");const t=de(e.storage,e._location,te());return e.storage.makeRequestWithTokens(t,Ce)}(e=f(e))}function Qe(e,t){return Le(e=f(e),t)}function et(e,t){return Ne(e=f(e),t)}function tt(e){return Me(e=f(e))}function nt(e){return qe(e=f(e))}function rt(e){return Fe(e=f(e))}function st(e,t){return je(e=f(e),t)}function ot(e,t){return He(e,t)}function it(n=t(),r){n=f(n);const s=e(n,"storage").getImmediate({identifier:r}),o=l("storage");return o&&at(s,...o),s}function at(e,t,n,r={}){We(e,t,n,r)}function ct(e,t){return function(e,t){e._throwIfRoot("getBlob");const n=pe(e.storage,e._location,t);return e.storage.makeRequestWithTokens(n,Ue).then((e=>void 0!==t?e.slice(0,t):e))}(e=f(e),t)}function ut(e,t){throw new Error("getStream() is only supported by NodeJS builds")}function ht(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Ge(n,r,o,t,s)}n(new g("storage",ht,"PUBLIC").setMultipleInstances(!0)),r(Ve,"0.10.0-20221206221533",""),r(Ve,"0.10.0-20221206221533","esm2017");export{j as StringFormat,J as _FbsBlob,A as _Location,we as _TaskEvent,Te as _TaskState,Pe as _UploadTask,W as _dataFromString,ot as _getChild,k as _invalidArgument,S as _invalidRootOperation,at as connectStorageEmulator,rt as deleteObject,ct as getBlob,Xe as getBytes,nt as getDownloadURL,Ye as getMetadata,it as getStorage,ut as getStream,et as list,tt as listAll,st as ref,Qe as updateMetadata,Je as uploadBytes,Ze as uploadBytesResumable,Ke as uploadString};

//# sourceMappingURL=firebase-storage.js.map
