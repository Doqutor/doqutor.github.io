/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{317:function(e,t,n){!function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var o,p=new Promise((function(c,f){n(o=e[t].apply(e,r)).then(c,f)}));return p.request=o,p}function o(e,t,n){var p=r(e,t,n);return p.then((function(e){if(e)return new h(e,p.request)}))}function c(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function f(e,t,n,o){o.forEach((function(o){o in n.prototype&&(e.prototype[o]=function(){return r(this[t],o,arguments)})}))}function l(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function d(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return o(this[t],r,arguments)})}))}function _(e){this._index=e}function h(cursor,e){this._cursor=cursor,this._request=e}function v(e){this._store=e}function w(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function m(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new w(n)}function y(e){this._db=e}c(_,"_index",["name","keyPath","multiEntry","unique"]),f(_,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),d(_,"_index",IDBIndex,["openCursor","openKeyCursor"]),c(h,"_cursor",["direction","key","primaryKey","value"]),f(h,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(h.prototype[e]=function(){var cursor=this,t=arguments;return Promise.resolve().then((function(){return cursor._cursor[e].apply(cursor._cursor,t),n(cursor._request).then((function(e){if(e)return new h(e,cursor._request)}))}))})})),v.prototype.createIndex=function(){return new _(this._store.createIndex.apply(this._store,arguments))},v.prototype.index=function(){return new _(this._store.index.apply(this._store,arguments))},c(v,"_store",["name","keyPath","indexNames","autoIncrement"]),f(v,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),d(v,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),l(v,"_store",IDBObjectStore,["deleteIndex"]),w.prototype.objectStore=function(){return new v(this._tx.objectStore.apply(this._tx,arguments))},c(w,"_tx",["objectStoreNames","mode"]),l(w,"_tx",IDBTransaction,["abort"]),m.prototype.createObjectStore=function(){return new v(this._db.createObjectStore.apply(this._db,arguments))},c(m,"_db",["name","version","objectStoreNames"]),l(m,"_db",IDBDatabase,["deleteObjectStore","close"]),y.prototype.transaction=function(){return new w(this._db.transaction.apply(this._db,arguments))},c(y,"_db",["name","version","objectStoreNames"]),l(y,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[v,_].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],o=this._store||this._index,c=o[e].apply(o,n.slice(0,-1));c.onsuccess=function(){r(c.result)}})}))})),[_,v].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(o){n.iterateCursor(e,(function(cursor){cursor?(r.push(cursor.value),void 0===t||r.length!=t?cursor.continue():o(r)):o(r)}))}))})})),e.openDb=function(e,t,n){var p=r(indexedDB,"open",[e,t]),o=p.request;return o&&(o.onupgradeneeded=function(e){n&&n(new m(o.result,e.oldVersion,o.transaction))}),p.then((function(e){return new y(e)}))},e.deleteDb=function(e){return r(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}(t)},336:function(e,t,n){"use strict";n.r(t);var r,o=n(177),c=n.n(o),f=n(178),l=n(99),d=n(126),_=n(317),h=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),v=new d.ErrorFactory("installations","Installations",h);function w(e){return e instanceof d.FirebaseError&&e.code.includes("request-failed")}function m(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}function y(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function O(e,t){return Object(l.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(l.__generator)(this,(function(o){switch(o.label){case 0:return[4,t.json()];case 1:return n=o.sent(),r=n.error,[2,v.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function I(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function E(e,t){var n=t.refreshToken,r=I(e);return r.append("Authorization",function(e){return"FIS_v2 "+e}(n)),r}function j(e){return Object(l.__awaiter)(this,void 0,void 0,(function(){var t;return Object(l.__generator)(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function C(e,t){var n=t.fid;return Object(l.__awaiter)(this,void 0,void 0,(function(){var t,r,body,o,c,f;return Object(l.__generator)(this,(function(l){switch(l.label){case 0:return t=m(e),r=I(e),body={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.4.8"},o={method:"POST",headers:r,body:JSON.stringify(body)},[4,j((function(){return fetch(t,o)}))];case 1:return(c=l.sent()).ok?[4,c.json()]:[3,3];case 2:return f=l.sent(),[2,{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:y(f.authToken)}];case 3:return[4,O("Create Installation",c)];case 4:throw l.sent()}}))}))}function S(e){return new Promise((function(t){setTimeout(t,e)}))}var T=/^[cdef][\w-]{21}$/;function N(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return(t=e,btoa(String.fromCharCode.apply(String,Object(l.__spread)(t))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}(e);return T.test(t)?t:""}catch(e){return""}}function P(e){return e.appName+"!"+e.appId}var A=new Map;function D(e,t){var n=P(e);k(n,t),function(e,t){var n=F();n&&n.postMessage({key:e,fid:t});L()}(n,t)}function k(e,t){var n,r,o=A.get(e);if(o)try{for(var c=Object(l.__values)(o),f=c.next();!f.done;f=c.next()){(0,f.value)(t)}}catch(e){n={error:e}}finally{try{f&&!f.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}}var x=null;function F(){return!x&&"BroadcastChannel"in self&&((x=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){k(e.data.key,e.data.fid)}),x}function L(){0===A.size&&x&&(x.close(),x=null)}var R,V="firebase-installations-store",B=null;function G(){return B||(B=Object(_.openDb)("firebase-installations-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(V)}}))),B}function K(e,t){return Object(l.__awaiter)(this,void 0,void 0,(function(){var n,r,o,c,f;return Object(l.__generator)(this,(function(l){switch(l.label){case 0:return n=P(e),[4,G()];case 1:return r=l.sent(),o=r.transaction(V,"readwrite"),[4,(c=o.objectStore(V)).get(n)];case 2:return f=l.sent(),[4,c.put(t,n)];case 3:return l.sent(),[4,o.complete];case 4:return l.sent(),f&&f.fid===t.fid||D(e,t.fid),[2,t]}}))}))}function M(e){return Object(l.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(l.__generator)(this,(function(o){switch(o.label){case 0:return t=P(e),[4,G()];case 1:return n=o.sent(),[4,(r=n.transaction(V,"readwrite")).objectStore(V).delete(t)];case 2:return o.sent(),[4,r.complete];case 3:return o.sent(),[2]}}))}))}function U(e,t){return Object(l.__awaiter)(this,void 0,void 0,(function(){var n,r,o,c,f,d;return Object(l.__generator)(this,(function(l){switch(l.label){case 0:return n=P(e),[4,G()];case 1:return r=l.sent(),o=r.transaction(V,"readwrite"),[4,(c=o.objectStore(V)).get(n)];case 2:return f=l.sent(),void 0!==(d=t(f))?[3,4]:[4,c.delete(n)];case 3:return l.sent(),[3,6];case 4:return[4,c.put(d,n)];case 5:l.sent(),l.label=6;case 6:return[4,o.complete];case 7:return l.sent(),!d||f&&f.fid===d.fid||D(e,d.fid),[2,d]}}))}))}function H(e){return Object(l.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(l.__generator)(this,(function(o){switch(o.label){case 0:return[4,U(e,(function(n){var r=function(e){return $(e||{fid:N(),registrationStatus:0})}(n),o=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){var n=Promise.reject(v.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=function(e,t){return Object(l.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(l.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,7]),[4,C(e,t)];case 1:return n=o.sent(),[2,K(e,n)];case 2:return w(r=o.sent())&&409===r.serverCode?[4,M(e)]:[3,4];case 3:return o.sent(),[3,6];case 4:return[4,K(e,{fid:t.fid,registrationStatus:0})];case 5:o.sent(),o.label=6;case 6:throw r;case 7:return[2]}}))}))}(e,r);return{installationEntry:r,registrationPromise:o}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:W(e)}:{installationEntry:t}}(e,r);return t=o.registrationPromise,o.installationEntry}))];case 1:return""!==(n=o.sent()).fid?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=o.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function W(e){return Object(l.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o;return Object(l.__generator)(this,(function(c){switch(c.label){case 0:return[4,z(e)];case 1:t=c.sent(),c.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,S(100)];case 3:return c.sent(),[4,z(e)];case 4:return t=c.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,H(e)];case 6:return n=c.sent(),r=n.installationEntry,(o=n.registrationPromise)?[2,o]:[2,r];case 7:return[2,t]}}))}))}function z(e){return U(e,(function(e){if(!e)throw v.create("installation-not-found");return $(e)}))}function $(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function J(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return Object(l.__awaiter)(this,void 0,void 0,(function(){var e,o,c,body,f,d,_;return Object(l.__generator)(this,(function(l){switch(l.label){case 0:return e=function(e,t){var n=t.fid;return m(e)+"/"+n+"/authTokens:generate"}(n,t),o=E(n,t),(c=r.getImmediate({optional:!0}))&&o.append("x-firebase-client",c.getPlatformInfoString()),body={installation:{sdkVersion:"w:0.4.8"}},f={method:"POST",headers:o,body:JSON.stringify(body)},[4,j((function(){return fetch(e,f)}))];case 1:return(d=l.sent()).ok?[4,d.json()]:[3,3];case 2:return _=l.sent(),[2,y(_)];case 3:return[4,O("Generate Auth Token",d)];case 4:throw l.sent()}}))}))}function X(e,t){return void 0===t&&(t=!1),Object(l.__awaiter)(this,void 0,void 0,(function(){var n,r,o;return Object(l.__generator)(this,(function(c){switch(c.label){case 0:return[4,U(e.appConfig,(function(r){if(!Q(r))throw v.create("not-registered");var o=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(o))return r;if(1===o.requestStatus)return n=function(e,t){return Object(l.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(l.__generator)(this,(function(o){switch(o.label){case 0:return[4,Y(e.appConfig)];case 1:n=o.sent(),o.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,S(100)];case 3:return o.sent(),[4,Y(e.appConfig)];case 4:return n=o.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,X(e,t)]:[2,r]}}))}))}(e,t),r;if(!navigator.onLine)throw v.create("app-offline");var c=function(e){var t={requestStatus:1,requestTime:Date.now()};return Object(l.__assign)(Object(l.__assign)({},e),{authToken:t})}(r);return n=function(e,t){return Object(l.__awaiter)(this,void 0,void 0,(function(){var n,r,o;return Object(l.__generator)(this,(function(c){switch(c.label){case 0:return c.trys.push([0,3,,8]),[4,J(e,t)];case 1:return n=c.sent(),o=Object(l.__assign)(Object(l.__assign)({},t),{authToken:n}),[4,K(e.appConfig,o)];case 2:return c.sent(),[2,n];case 3:return!w(r=c.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,M(e.appConfig)];case 4:return c.sent(),[3,7];case 5:return o=Object(l.__assign)(Object(l.__assign)({},t),{authToken:{requestStatus:0}}),[4,K(e.appConfig,o)];case 6:c.sent(),c.label=7;case 7:throw r;case 8:return[2]}}))}))}(e,c),c}))];case 1:return r=c.sent(),n?[4,n]:[3,3];case 2:return o=c.sent(),[3,4];case 3:o=r.authToken,c.label=4;case 4:return[2,o]}}))}))}function Y(e){return U(e,(function(e){if(!Q(e))throw v.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+1e4<Date.now()?Object(l.__assign)(Object(l.__assign)({},e),{authToken:{requestStatus:0}}):e}))}function Q(e){return void 0!==e&&2===e.registrationStatus}function Z(e){return Object(l.__awaiter)(this,void 0,void 0,(function(){var t;return Object(l.__generator)(this,(function(n){switch(n.label){case 0:return[4,H(e)];case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function ee(e,t){return Object(l.__awaiter)(this,void 0,void 0,(function(){var n,r,o,c;return Object(l.__generator)(this,(function(f){switch(f.label){case 0:return n=function(e,t){var n=t.fid;return m(e)+"/"+n}(e,t),r=E(e,t),o={method:"DELETE",headers:r},[4,j((function(){return fetch(n,o)}))];case 1:return(c=f.sent()).ok?[3,3]:[4,O("Delete Installation",c)];case 2:throw f.sent();case 3:return[2]}}))}))}function te(e,t){var n=e.appConfig;return function(e,t){F();var n=P(e),r=A.get(n);r||(r=new Set,A.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=P(e),r=A.get(n);r&&(r.delete(t),0===r.size&&A.delete(n),L())}(n,t)}}function ne(e){return v.create("missing-app-config-values",{valueName:e})}(R=c.a).INTERNAL.registerComponent(new f.Component("installations",(function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw ne("App Configuration");if(!e.name)throw ne("App Name");try{for(var r=Object(l.__values)(["projectId","apiKey","appId"]),o=r.next();!o.done;o=r.next()){var c=o.value;if(!e.options[c])throw ne(c)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){return function(e){return Object(l.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(l.__generator)(this,(function(o){switch(o.label){case 0:return[4,H(e.appConfig)];case 1:return t=o.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):X(e).catch(console.error),[2,n.fid]}}))}))}(n)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),Object(l.__awaiter)(this,void 0,void 0,(function(){return Object(l.__generator)(this,(function(n){switch(n.label){case 0:return[4,Z(e.appConfig)];case 1:return n.sent(),[4,X(e,t)];case 2:return[2,n.sent().token]}}))}))}(n,e)},delete:function(){return function(e){return Object(l.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(l.__generator)(this,(function(r){switch(r.label){case 0:return[4,U(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw v.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw v.create("app-offline");case 3:return[4,ee(t,n)];case 4:return r.sent(),[4,M(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(e){return te(n,e)}}}),"PUBLIC")),R.registerVersion("@firebase/installations","0.4.8");var re,ie,ae=n(179),oe="https://www.googletagmanager.com/gtag/js";!function(e){e.EVENT="event",e.SET="set",e.CONFIG="config"}(re||(re={})),function(e){e.ADD_SHIPPING_INFO="add_shipping_info",e.ADD_PAYMENT_INFO="add_payment_info",e.ADD_TO_CART="add_to_cart",e.ADD_TO_WISHLIST="add_to_wishlist",e.BEGIN_CHECKOUT="begin_checkout",e.CHECKOUT_PROGRESS="checkout_progress",e.EXCEPTION="exception",e.GENERATE_LEAD="generate_lead",e.LOGIN="login",e.PAGE_VIEW="page_view",e.PURCHASE="purchase",e.REFUND="refund",e.REMOVE_FROM_CART="remove_from_cart",e.SCREEN_VIEW="screen_view",e.SEARCH="search",e.SELECT_CONTENT="select_content",e.SELECT_ITEM="select_item",e.SELECT_PROMOTION="select_promotion",e.SET_CHECKOUT_OPTION="set_checkout_option",e.SHARE="share",e.SIGN_UP="sign_up",e.TIMING_COMPLETE="timing_complete",e.VIEW_CART="view_cart",e.VIEW_ITEM="view_item",e.VIEW_ITEM_LIST="view_item_list",e.VIEW_PROMOTION="view_promotion",e.VIEW_SEARCH_RESULTS="view_search_results"}(ie||(ie={}));var se,ce=new ae.Logger("@firebase/analytics");function ue(e,t,n){var r=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];window[t].push(arguments)};return window[n]&&"function"==typeof window[n]&&(r=window[n]),window[n]=function(e,t){return function(n,r,o){if(n===re.EVENT){var c=[];if(o&&o.send_to){var f=o.send_to;Array.isArray(f)||(f=[f]);for(var l=0,d=f;l<d.length;l++){var _=d[l],h=t[_];if(!h){c=[];break}c.push(h)}}if(0===c.length)for(var v=0,w=Object.values(t);v<w.length;v++){var m=w[v];c.push(m)}Promise.all(c).then((function(){return e(re.EVENT,r,o||{})})).catch((function(e){return ce.error(e)}))}else if(n===re.CONFIG){(t[r]||Promise.resolve()).then((function(){e(re.CONFIG,r,o)})).catch((function(e){return ce.error(e)}))}else e(re.SET,r)}}(r,e),{gtagCore:r,wrappedGtag:window[n]}}var fe,le,de=((se={})["no-ga-id"]='"measurementId" field is empty in Firebase config. Firebase Analytics requires this field to contain a valid measurement ID.',se["already-exists"]="A Firebase Analytics instance with the measurement ID ${id}  already exists. Only one Firebase Analytics instance can be created for each measurement ID.",se["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",se["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate",se),pe=new d.ErrorFactory("analytics","Analytics",de),_e={},ge="dataLayer",he="gtag",ve=!1;function be(e){if(ve)throw pe.create("already-initialized");e.dataLayerName&&(ge=e.dataLayerName),e.gtagName&&(he=e.gtagName)}function we(e,t){var n=e.options.measurementId;if(!n)throw pe.create("no-ga-id");if(null!=_e[n])throw pe.create("already-exists",{id:n});if(!ve){(function(){for(var e=window.document.getElementsByTagName("script"),t=0,n=Object.values(e);t<n.length;t++){var r=n[t];if(r.src&&r.src.includes(oe))return r}return null})()||function(e){var script=document.createElement("script");script.src=oe+"?l="+e,script.async=!0,document.head.appendChild(script)}(ge),function(e){var t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(ge);var r=ue(_e,ge,he),o=r.wrappedGtag,c=r.gtagCore;le=o,fe=c,ve=!0}return _e[n]=function(e,t,n){return Object(l.__awaiter)(this,void 0,void 0,(function(){var r,o;return Object(l.__generator)(this,(function(c){switch(c.label){case 0:return[4,t.getId()];case 1:return r=c.sent(),n("js",new Date),n(re.CONFIG,e.options.measurementId,((o={}).firebase_id=r,o.origin="firebase",o.update=!0,o)),[2]}}))}))}(e,t,fe),{app:e,logEvent:function(e,t,r){return function(e,t,n,r,o){var c=r||{};o&&o.global||(c=Object(l.__assign)(Object(l.__assign)({},r),{send_to:t})),e(re.EVENT,n,c||{})}(le,n,e,t,r)},setCurrentScreen:function(e,t){return function(e,t,n,r){r&&r.global?e(re.SET,{screen_name:n}):e(re.CONFIG,t,{update:!0,screen_name:n})}(le,n,e,t)},setUserId:function(e,t){return function(e,t,n,r){r&&r.global?e(re.SET,{user_id:n}):e(re.CONFIG,t,{update:!0,user_id:n})}(le,n,e,t)},setUserProperties:function(e,t){return function(e,t,n,r){if(r&&r.global){for(var o={},c=0,f=Object.keys(n);c<f.length;c++){var l=f[c];o["user_properties."+l]=n[l]}e(re.SET,o)}else e(re.CONFIG,t,{update:!0,user_properties:n})}(le,n,e,t)},setAnalyticsCollectionEnabled:function(e){return function(e,t){window["ga-disable-"+e]=!t}(n,e)}}}!function(e){e.INTERNAL.registerComponent(new f.Component("analytics",(function(e){return we(e.getProvider("app").getImmediate(),e.getProvider("installations").getImmediate())}),"PUBLIC").setServiceProps({settings:be,EventName:ie})),e.INTERNAL.registerComponent(new f.Component("analytics-internal",(function(e){try{return{logEvent:e.getProvider("analytics").getImmediate().logEvent}}catch(e){throw pe.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),e.registerVersion("@firebase/analytics","0.3.3")}(c.a)}}]);