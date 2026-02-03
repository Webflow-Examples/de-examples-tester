var mo=e=>{throw TypeError(e)};var Zt=(e,o,a)=>o.has(e)||mo("Cannot "+a);var rn=(e,o,a)=>(Zt(e,o,"read from private field"),a?a.call(e):o.get(e)),xn=(e,o,a)=>o.has(e)?mo("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(e):o.set(e,a),Cn=(e,o,a,i)=>(Zt(e,o,"write to private field"),i?i.call(e,a):o.set(e,a),a),Fn=(e,o,a)=>(Zt(e,o,"access private method"),a);var Qt=(e,o,a,i)=>({set _(s){Cn(e,o,s,a)},get _(){return rn(e,o,i)}});(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=a(s);fetch(s.href,c)}})();var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jsxRuntime={exports:{}},reactJsxRuntime_production_min={},react={exports:{}},react_production_min={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l$2=Symbol.for("react.element"),n$1=Symbol.for("react.portal"),p$2=Symbol.for("react.fragment"),q$1=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v$2=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z$1=Symbol.iterator;function A$1(e){return e===null||typeof e!="object"?null:(e=z$1&&e[z$1]||e["@@iterator"],typeof e=="function"?e:null)}var B$1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$1=Object.assign,D$2={};function E$1(e,o,a){this.props=e,this.context=o,this.refs=D$2,this.updater=a||B$1}E$1.prototype.isReactComponent={};E$1.prototype.setState=function(e,o){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,o,"setState")};E$1.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function F(){}F.prototype=E$1.prototype;function G$1(e,o,a){this.props=e,this.context=o,this.refs=D$2,this.updater=a||B$1}var H$2=G$1.prototype=new F;H$2.constructor=G$1;C$1(H$2,E$1.prototype);H$2.isPureReactComponent=!0;var I$1=Array.isArray,J=Object.prototype.hasOwnProperty,K$1={current:null},L$1={key:!0,ref:!0,__self:!0,__source:!0};function M$1(e,o,a){var i,s={},c=null,d=null;if(o!=null)for(i in o.ref!==void 0&&(d=o.ref),o.key!==void 0&&(c=""+o.key),o)J.call(o,i)&&!L$1.hasOwnProperty(i)&&(s[i]=o[i]);var g=arguments.length-2;if(g===1)s.children=a;else if(1<g){for(var b=Array(g),en=0;en<g;en++)b[en]=arguments[en+2];s.children=b}if(e&&e.defaultProps)for(i in g=e.defaultProps,g)s[i]===void 0&&(s[i]=g[i]);return{$$typeof:l$2,type:e,key:c,ref:d,props:s,_owner:K$1.current}}function N$1(e,o){return{$$typeof:l$2,type:e.type,key:o,ref:e.ref,props:e.props,_owner:e._owner}}function O$1(e){return typeof e=="object"&&e!==null&&e.$$typeof===l$2}function escape(e){var o={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return o[a]})}var P$1=/\/+/g;function Q$1(e,o){return typeof e=="object"&&e!==null&&e.key!=null?escape(""+e.key):o.toString(36)}function R$1(e,o,a,i,s){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var d=!1;if(e===null)d=!0;else switch(c){case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case l$2:case n$1:d=!0}}if(d)return d=e,s=s(d),e=i===""?"."+Q$1(d,0):i,I$1(s)?(a="",e!=null&&(a=e.replace(P$1,"$&/")+"/"),R$1(s,o,a,"",function(en){return en})):s!=null&&(O$1(s)&&(s=N$1(s,a+(!s.key||d&&d.key===s.key?"":(""+s.key).replace(P$1,"$&/")+"/")+e)),o.push(s)),1;if(d=0,i=i===""?".":i+":",I$1(e))for(var g=0;g<e.length;g++){c=e[g];var b=i+Q$1(c,g);d+=R$1(c,o,a,b,s)}else if(b=A$1(e),typeof b=="function")for(e=b.call(e),g=0;!(c=e.next()).done;)c=c.value,b=i+Q$1(c,g++),d+=R$1(c,o,a,b,s);else if(c==="object")throw o=String(e),Error("Objects are not valid as a React child (found: "+(o==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return d}function S$1(e,o,a){if(e==null)return e;var i=[],s=0;return R$1(e,i,"","",function(c){return o.call(a,c,s++)}),i}function T$1(e){if(e._status===-1){var o=e._result;o=o(),o.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=o)}if(e._status===1)return e._result.default;throw e._result}var U$1={current:null},V$1={transition:null},W$1={ReactCurrentDispatcher:U$1,ReactCurrentBatchConfig:V$1,ReactCurrentOwner:K$1};react_production_min.Children={map:S$1,forEach:function(e,o,a){S$1(e,function(){o.apply(this,arguments)},a)},count:function(e){var o=0;return S$1(e,function(){o++}),o},toArray:function(e){return S$1(e,function(o){return o})||[]},only:function(e){if(!O$1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};react_production_min.Component=E$1;react_production_min.Fragment=p$2;react_production_min.Profiler=r;react_production_min.PureComponent=G$1;react_production_min.StrictMode=q$1;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$1;react_production_min.cloneElement=function(e,o,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=C$1({},e.props),s=e.key,c=e.ref,d=e._owner;if(o!=null){if(o.ref!==void 0&&(c=o.ref,d=K$1.current),o.key!==void 0&&(s=""+o.key),e.type&&e.type.defaultProps)var g=e.type.defaultProps;for(b in o)J.call(o,b)&&!L$1.hasOwnProperty(b)&&(i[b]=o[b]===void 0&&g!==void 0?g[b]:o[b])}var b=arguments.length-2;if(b===1)i.children=a;else if(1<b){g=Array(b);for(var en=0;en<b;en++)g[en]=arguments[en+2];i.children=g}return{$$typeof:l$2,type:e.type,key:s,ref:c,props:i,_owner:d}};react_production_min.createContext=function(e){return e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:t,_context:e},e.Consumer=e};react_production_min.createElement=M$1;react_production_min.createFactory=function(e){var o=M$1.bind(null,e);return o.type=e,o};react_production_min.createRef=function(){return{current:null}};react_production_min.forwardRef=function(e){return{$$typeof:v$2,render:e}};react_production_min.isValidElement=O$1;react_production_min.lazy=function(e){return{$$typeof:y,_payload:{_status:-1,_result:e},_init:T$1}};react_production_min.memo=function(e,o){return{$$typeof:x,type:e,compare:o===void 0?null:o}};react_production_min.startTransition=function(e){var o=V$1.transition;V$1.transition={};try{e()}finally{V$1.transition=o}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};react_production_min.useCallback=function(e,o){return U$1.current.useCallback(e,o)};react_production_min.useContext=function(e){return U$1.current.useContext(e)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(e){return U$1.current.useDeferredValue(e)};react_production_min.useEffect=function(e,o){return U$1.current.useEffect(e,o)};react_production_min.useId=function(){return U$1.current.useId()};react_production_min.useImperativeHandle=function(e,o,a){return U$1.current.useImperativeHandle(e,o,a)};react_production_min.useInsertionEffect=function(e,o){return U$1.current.useInsertionEffect(e,o)};react_production_min.useLayoutEffect=function(e,o){return U$1.current.useLayoutEffect(e,o)};react_production_min.useMemo=function(e,o){return U$1.current.useMemo(e,o)};react_production_min.useReducer=function(e,o,a){return U$1.current.useReducer(e,o,a)};react_production_min.useRef=function(e){return U$1.current.useRef(e)};react_production_min.useState=function(e){return U$1.current.useState(e)};react_production_min.useSyncExternalStore=function(e,o,a){return U$1.current.useSyncExternalStore(e,o,a)};react_production_min.useTransition=function(){return U$1.current.useTransition()};react_production_min.version="18.2.0";react.exports=react_production_min;var reactExports=react.exports;const React=getDefaultExportFromCjs(reactExports);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=reactExports,k$1=Symbol.for("react.element"),l$1=Symbol.for("react.fragment"),m$1=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$1={key:!0,ref:!0,__self:!0,__source:!0};function q(e,o,a){var i,s={},c=null,d=null;a!==void 0&&(c=""+a),o.key!==void 0&&(c=""+o.key),o.ref!==void 0&&(d=o.ref);for(i in o)m$1.call(o,i)&&!p$1.hasOwnProperty(i)&&(s[i]=o[i]);if(e&&e.defaultProps)for(i in o=e.defaultProps,o)s[i]===void 0&&(s[i]=o[i]);return{$$typeof:k$1,type:e,key:c,ref:d,props:s,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l$1;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;jsxRuntime.exports=reactJsxRuntime_production_min;var jsxRuntimeExports=jsxRuntime.exports,reactDom={exports:{}},reactDom_production_min={},scheduler={exports:{}},scheduler_production_min={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function o(bn,Sn){var An=bn.length;bn.push(Sn);e:for(;0<An;){var vn=An-1>>>1,Pn=bn[vn];if(0<s(Pn,Sn))bn[vn]=Sn,bn[An]=Pn,An=vn;else break e}}function a(bn){return bn.length===0?null:bn[0]}function i(bn){if(bn.length===0)return null;var Sn=bn[0],An=bn.pop();if(An!==Sn){bn[0]=An;e:for(var vn=0,Pn=bn.length,Rn=Pn>>>1;vn<Rn;){var On=2*(vn+1)-1,$n=bn[On],Gn=On+1,et=bn[Gn];if(0>s($n,An))Gn<Pn&&0>s(et,$n)?(bn[vn]=et,bn[Gn]=An,vn=Gn):(bn[vn]=$n,bn[On]=An,vn=On);else if(Gn<Pn&&0>s(et,An))bn[vn]=et,bn[Gn]=An,vn=Gn;else break e}}return Sn}function s(bn,Sn){var An=bn.sortIndex-Sn.sortIndex;return An!==0?An:bn.id-Sn.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();e.unstable_now=function(){return d.now()-g}}var b=[],en=[],sn=1,on=null,ln=3,dn=!1,pn=!1,un=!1,gn=typeof setTimeout=="function"?setTimeout:null,tn=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _e(bn){for(var Sn=a(en);Sn!==null;){if(Sn.callback===null)i(en);else if(Sn.startTime<=bn)i(en),Sn.sortIndex=Sn.expirationTime,o(b,Sn);else break;Sn=a(en)}}function nn(bn){if(un=!1,_e(bn),!pn)if(a(b)!==null)pn=!0,Tn(an);else{var Sn=a(en);Sn!==null&&Ln(nn,Sn.startTime-bn)}}function an(bn,Sn){pn=!1,un&&(un=!1,tn(yn),yn=-1),dn=!0;var An=ln;try{for(_e(Sn),on=a(b);on!==null&&(!(on.expirationTime>Sn)||bn&&!En());){var vn=on.callback;if(typeof vn=="function"){on.callback=null,ln=on.priorityLevel;var Pn=vn(on.expirationTime<=Sn);Sn=e.unstable_now(),typeof Pn=="function"?on.callback=Pn:on===a(b)&&i(b),_e(Sn)}else i(b);on=a(b)}if(on!==null)var Rn=!0;else{var On=a(en);On!==null&&Ln(nn,On.startTime-Sn),Rn=!1}return Rn}finally{on=null,ln=An,dn=!1}}var cn=!1,mn=null,yn=-1,hn=5,wn=-1;function En(){return!(e.unstable_now()-wn<hn)}function kn(){if(mn!==null){var bn=e.unstable_now();wn=bn;var Sn=!0;try{Sn=mn(!0,bn)}finally{Sn?Nn():(cn=!1,mn=null)}}else cn=!1}var Nn;if(typeof j=="function")Nn=function(){j(kn)};else if(typeof MessageChannel<"u"){var jn=new MessageChannel,In=jn.port2;jn.port1.onmessage=kn,Nn=function(){In.postMessage(null)}}else Nn=function(){gn(kn,0)};function Tn(bn){mn=bn,cn||(cn=!0,Nn())}function Ln(bn,Sn){yn=gn(function(){bn(e.unstable_now())},Sn)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(bn){bn.callback=null},e.unstable_continueExecution=function(){pn||dn||(pn=!0,Tn(an))},e.unstable_forceFrameRate=function(bn){0>bn||125<bn?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):hn=0<bn?Math.floor(1e3/bn):5},e.unstable_getCurrentPriorityLevel=function(){return ln},e.unstable_getFirstCallbackNode=function(){return a(b)},e.unstable_next=function(bn){switch(ln){case 1:case 2:case 3:var Sn=3;break;default:Sn=ln}var An=ln;ln=Sn;try{return bn()}finally{ln=An}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(bn,Sn){switch(bn){case 1:case 2:case 3:case 4:case 5:break;default:bn=3}var An=ln;ln=bn;try{return Sn()}finally{ln=An}},e.unstable_scheduleCallback=function(bn,Sn,An){var vn=e.unstable_now();switch(typeof An=="object"&&An!==null?(An=An.delay,An=typeof An=="number"&&0<An?vn+An:vn):An=vn,bn){case 1:var Pn=-1;break;case 2:Pn=250;break;case 5:Pn=1073741823;break;case 4:Pn=1e4;break;default:Pn=5e3}return Pn=An+Pn,bn={id:sn++,callback:Sn,priorityLevel:bn,startTime:An,expirationTime:Pn,sortIndex:-1},An>vn?(bn.sortIndex=An,o(en,bn),a(b)===null&&bn===a(en)&&(un?(tn(yn),yn=-1):un=!0,Ln(nn,An-vn))):(bn.sortIndex=Pn,o(b,bn),pn||dn||(pn=!0,Tn(an))),bn},e.unstable_shouldYield=En,e.unstable_wrapCallback=function(bn){var Sn=ln;return function(){var An=ln;ln=Sn;try{return bn.apply(this,arguments)}finally{ln=An}}}})(scheduler_production_min);scheduler.exports=scheduler_production_min;var schedulerExports=scheduler.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=reactExports,ca=schedulerExports;function p(e){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)o+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(e,o){ha(e,o),ha(e+"Capture",o)}function ha(e,o){for(ea[e]=o,e=0;e<o.length;e++)da.add(o[e])}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},ma={};function oa(e){return ja.call(ma,e)?!0:ja.call(la,e)?!1:ka.test(e)?ma[e]=!0:(la[e]=!0,!1)}function pa(e,o,a,i){if(a!==null&&a.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return i?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qa(e,o,a,i){if(o===null||typeof o>"u"||pa(e,o,a,i))return!0;if(i)return!1;if(a!==null)switch(a.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function v$1(e,o,a,i,s,c,d){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=a,this.propertyName=e,this.type=o,this.sanitizeURL=c,this.removeEmptyString=d}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new v$1(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var o=e[0];z[o]=new v$1(o,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new v$1(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new v$1(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new v$1(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){z[e]=new v$1(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){z[e]=new v$1(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){z[e]=new v$1(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){z[e]=new v$1(e,5,!1,e.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var o=e.replace(ra,sa);z[o]=new v$1(o,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var o=e.replace(ra,sa);z[o]=new v$1(o,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var o=e.replace(ra,sa);z[o]=new v$1(o,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){z[e]=new v$1(e,1,!1,e.toLowerCase(),null,!1,!1)});z.xlinkHref=new v$1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){z[e]=new v$1(e,1,!1,e.toLowerCase(),null,!0,!0)});function ta(e,o,a,i){var s=z.hasOwnProperty(o)?z[o]:null;(s!==null?s.type!==0:i||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(qa(o,a,s,i)&&(a=null),i||s===null?oa(o)&&(a===null?e.removeAttribute(o):e.setAttribute(o,""+a)):s.mustUseProperty?e[s.propertyName]=a===null?s.type===3?!1:"":a:(o=s.attributeName,i=s.attributeNamespace,a===null?e.removeAttribute(o):(s=s.type,a=s===3||s===4&&a===!0?"":""+a,i?e.setAttributeNS(i,o,a):e.setAttribute(o,a))))}var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy"),Ia=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function Ka(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,La;function Ma(e){if(La===void 0)try{throw Error()}catch(a){var o=a.stack.trim().match(/\n( *(at )?)/);La=o&&o[1]||""}return`
`+La+e}var Na=!1;function Oa(e,o){if(!e||Na)return"";Na=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(en){var i=en}Reflect.construct(e,[],o)}else{try{o.call()}catch(en){i=en}e.call(o.prototype)}else{try{throw Error()}catch(en){i=en}e()}}catch(en){if(en&&i&&typeof en.stack=="string"){for(var s=en.stack.split(`
`),c=i.stack.split(`
`),d=s.length-1,g=c.length-1;1<=d&&0<=g&&s[d]!==c[g];)g--;for(;1<=d&&0<=g;d--,g--)if(s[d]!==c[g]){if(d!==1||g!==1)do if(d--,g--,0>g||s[d]!==c[g]){var b=`
`+s[d].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=d&&0<=g);break}}}finally{Na=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?Ma(e):""}function Pa(e){switch(e.tag){case 5:return Ma(e.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return e=Oa(e.type,!1),e;case 11:return e=Oa(e.type.render,!1),e;case 1:return e=Oa(e.type,!0),e;default:return""}}function Qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ca:return(e.displayName||"Context")+".Consumer";case Ba:return(e._context.displayName||"Context")+".Provider";case Da:var o=e.render;return e=e.displayName,e||(e=o.displayName||o.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ga:return o=e.displayName||null,o!==null?o:Qa(e.type)||"Memo";case Ha:o=e._payload,e=e._init;try{return Qa(e(o))}catch{}}return null}function Ra(e){var o=e.type;switch(e.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=o.render,e=e.displayName||e.name||"",o.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(o);case 8:return o===za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Sa(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ta(e){var o=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Ua(e){var o=Ta(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,o),i=""+e[o];if(!e.hasOwnProperty(o)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,c=a.set;return Object.defineProperty(e,o,{configurable:!0,get:function(){return s.call(this)},set:function(d){i=""+d,c.call(this,d)}}),Object.defineProperty(e,o,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){e._valueTracker=null,delete e[o]}}}}function Va(e){e._valueTracker||(e._valueTracker=Ua(e))}function Wa(e){if(!e)return!1;var o=e._valueTracker;if(!o)return!0;var a=o.getValue(),i="";return e&&(i=Ta(e)?e.checked?"true":"false":e.value),e=i,e!==a?(o.setValue(e),!0):!1}function Xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,o){var a=o.checked;return A({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Za(e,o){var a=o.defaultValue==null?"":o.defaultValue,i=o.checked!=null?o.checked:o.defaultChecked;a=Sa(o.value!=null?o.value:a),e._wrapperState={initialChecked:i,initialValue:a,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ab(e,o){o=o.checked,o!=null&&ta(e,"checked",o,!1)}function bb(e,o){ab(e,o);var a=Sa(o.value),i=o.type;if(a!=null)i==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}o.hasOwnProperty("value")?cb(e,o.type,a):o.hasOwnProperty("defaultValue")&&cb(e,o.type,Sa(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(e.defaultChecked=!!o.defaultChecked)}function db(e,o,a){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var i=o.type;if(!(i!=="submit"&&i!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+e._wrapperState.initialValue,a||o===e.value||(e.value=o),e.defaultValue=o}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function cb(e,o,a){(o!=="number"||Xa(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var eb=Array.isArray;function fb(e,o,a,i){if(e=e.options,o){o={};for(var s=0;s<a.length;s++)o["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=o.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Sa(a),o=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}o!==null||e[s].disabled||(o=e[s])}o!==null&&(o.selected=!0)}}function gb(e,o){if(o.dangerouslySetInnerHTML!=null)throw Error(p(91));return A({},o,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hb(e,o){var a=o.value;if(a==null){if(a=o.children,o=o.defaultValue,a!=null){if(o!=null)throw Error(p(92));if(eb(a)){if(1<a.length)throw Error(p(93));a=a[0]}o=a}o==null&&(o=""),a=o}e._wrapperState={initialValue:Sa(a)}}function ib(e,o){var a=Sa(o.value),i=Sa(o.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),o.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),i!=null&&(e.defaultValue=""+i)}function jb(e){var o=e.textContent;o===e._wrapperState.initialValue&&o!==""&&o!==null&&(e.value=o)}function kb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lb(e,o){return e==null||e==="http://www.w3.org/1999/xhtml"?kb(o):e==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mb,nb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,a,i,s){MSApp.execUnsafeLocalFunction(function(){return e(o,a,i,s)})}:e}(function(e,o){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=o;else{for(mb=mb||document.createElement("div"),mb.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=mb.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;o.firstChild;)e.appendChild(o.firstChild)}});function ob(e,o){if(o){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=o;return}}e.textContent=o}var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(e){qb.forEach(function(o){o=o+e.charAt(0).toUpperCase()+e.substring(1),pb[o]=pb[e]})});function rb(e,o,a){return o==null||typeof o=="boolean"||o===""?"":a||typeof o!="number"||o===0||pb.hasOwnProperty(e)&&pb[e]?(""+o).trim():o+"px"}function sb(e,o){e=e.style;for(var a in o)if(o.hasOwnProperty(a)){var i=a.indexOf("--")===0,s=rb(a,o[a],i);a==="float"&&(a="cssFloat"),i?e.setProperty(a,s):e[a]=s}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ub(e,o){if(o){if(tb[e]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(p(137,e));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(p(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(p(61))}if(o.style!=null&&typeof o.style!="object")throw Error(p(62))}}function vb(e,o){if(e.indexOf("-")===-1)return typeof o.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wb=null;function xb(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yb=null,zb=null,Ab=null;function Bb(e){if(e=Cb(e)){if(typeof yb!="function")throw Error(p(280));var o=e.stateNode;o&&(o=Db(o),yb(e.stateNode,e.type,o))}}function Eb(e){zb?Ab?Ab.push(e):Ab=[e]:zb=e}function Fb(){if(zb){var e=zb,o=Ab;if(Ab=zb=null,Bb(e),o)for(e=0;e<o.length;e++)Bb(o[e])}}function Gb(e,o){return e(o)}function Hb(){}var Ib=!1;function Jb(e,o,a){if(Ib)return e(o,a);Ib=!0;try{return Gb(e,o,a)}finally{Ib=!1,(zb!==null||Ab!==null)&&(Hb(),Fb())}}function Kb(e,o){var a=e.stateNode;if(a===null)return null;var i=Db(a);if(i===null)return null;a=i[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(p(231,o,typeof a));return a}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}}),window.addEventListener("test",Mb,Mb),window.removeEventListener("test",Mb,Mb)}catch{Lb=!1}function Nb(e,o,a,i,s,c,d,g,b){var en=Array.prototype.slice.call(arguments,3);try{o.apply(a,en)}catch(sn){this.onError(sn)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(e){Ob=!0,Pb=e}};function Tb(e,o,a,i,s,c,d,g,b){Ob=!1,Pb=null,Nb.apply(Sb,arguments)}function Ub(e,o,a,i,s,c,d,g,b){if(Tb.apply(this,arguments),Ob){if(Ob){var en=Pb;Ob=!1,Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=en)}}function Vb(e){var o=e,a=e;if(e.alternate)for(;o.return;)o=o.return;else{e=o;do o=e,o.flags&4098&&(a=o.return),e=o.return;while(e)}return o.tag===3?a:null}function Wb(e){if(e.tag===13){var o=e.memoizedState;if(o===null&&(e=e.alternate,e!==null&&(o=e.memoizedState)),o!==null)return o.dehydrated}return null}function Xb(e){if(Vb(e)!==e)throw Error(p(188))}function Yb(e){var o=e.alternate;if(!o){if(o=Vb(e),o===null)throw Error(p(188));return o!==e?null:e}for(var a=e,i=o;;){var s=a.return;if(s===null)break;var c=s.alternate;if(c===null){if(i=s.return,i!==null){a=i;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===a)return Xb(s),e;if(c===i)return Xb(s),o;c=c.sibling}throw Error(p(188))}if(a.return!==i.return)a=s,i=c;else{for(var d=!1,g=s.child;g;){if(g===a){d=!0,a=s,i=c;break}if(g===i){d=!0,i=s,a=c;break}g=g.sibling}if(!d){for(g=c.child;g;){if(g===a){d=!0,a=c,i=s;break}if(g===i){d=!0,i=c,a=s;break}g=g.sibling}if(!d)throw Error(p(189))}}if(a.alternate!==i)throw Error(p(190))}if(a.tag!==3)throw Error(p(188));return a.stateNode.current===a?e:o}function Zb(e){return e=Yb(e),e!==null?$b(e):null}function $b(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var o=$b(e);if(o!==null)return o;e=e.sibling}return null}var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(e){if(lc&&typeof lc.onCommitFiberRoot=="function")try{lc.onCommitFiberRoot(kc,e,void 0,(e.current.flags&128)===128)}catch{}}var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(e){return e>>>=0,e===0?32:31-(pc(e)/qc|0)|0}var rc=64,sc=4194304;function tc(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function uc(e,o){var a=e.pendingLanes;if(a===0)return 0;var i=0,s=e.suspendedLanes,c=e.pingedLanes,d=a&268435455;if(d!==0){var g=d&~s;g!==0?i=tc(g):(c&=d,c!==0&&(i=tc(c)))}else d=a&~s,d!==0?i=tc(d):c!==0&&(i=tc(c));if(i===0)return 0;if(o!==0&&o!==i&&!(o&s)&&(s=i&-i,c=o&-o,s>=c||s===16&&(c&4194240)!==0))return o;if(i&4&&(i|=a&16),o=e.entangledLanes,o!==0)for(e=e.entanglements,o&=i;0<o;)a=31-oc(o),s=1<<a,i|=e[a],o&=~s;return i}function vc(e,o){switch(e){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wc(e,o){for(var a=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes;0<c;){var d=31-oc(c),g=1<<d,b=s[d];b===-1?(!(g&a)||g&i)&&(s[d]=vc(g,o)):b<=o&&(e.expiredLanes|=g),c&=~g}}function xc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yc(){var e=rc;return rc<<=1,!(rc&4194240)&&(rc=64),e}function zc(e){for(var o=[],a=0;31>a;a++)o.push(e);return o}function Ac(e,o,a){e.pendingLanes|=o,o!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,o=31-oc(o),e[o]=a}function Bc(e,o){var a=e.pendingLanes&~o;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=o,e.mutableReadLanes&=o,e.entangledLanes&=o,o=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<a;){var s=31-oc(a),c=1<<s;o[s]=0,i[s]=-1,e[s]=-1,a&=~c}}function Cc(e,o){var a=e.entangledLanes|=o;for(e=e.entanglements;a;){var i=31-oc(a),s=1<<i;s&o|e[i]&o&&(e[i]|=o),a&=~s}}var C=0;function Dc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(e,o){switch(e){case"focusin":case"focusout":Lc=null;break;case"dragenter":case"dragleave":Mc=null;break;case"mouseover":case"mouseout":Nc=null;break;case"pointerover":case"pointerout":Oc.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pc.delete(o.pointerId)}}function Tc(e,o,a,i,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:o,domEventName:a,eventSystemFlags:i,nativeEvent:c,targetContainers:[s]},o!==null&&(o=Cb(o),o!==null&&Fc(o)),e):(e.eventSystemFlags|=i,o=e.targetContainers,s!==null&&o.indexOf(s)===-1&&o.push(s),e)}function Uc(e,o,a,i,s){switch(o){case"focusin":return Lc=Tc(Lc,e,o,a,i,s),!0;case"dragenter":return Mc=Tc(Mc,e,o,a,i,s),!0;case"mouseover":return Nc=Tc(Nc,e,o,a,i,s),!0;case"pointerover":var c=s.pointerId;return Oc.set(c,Tc(Oc.get(c)||null,e,o,a,i,s)),!0;case"gotpointercapture":return c=s.pointerId,Pc.set(c,Tc(Pc.get(c)||null,e,o,a,i,s)),!0}return!1}function Vc(e){var o=Wc(e.target);if(o!==null){var a=Vb(o);if(a!==null){if(o=a.tag,o===13){if(o=Wb(a),o!==null){e.blockedOn=o,Ic(e.priority,function(){Gc(a)});return}}else if(o===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xc(e){if(e.blockedOn!==null)return!1;for(var o=e.targetContainers;0<o.length;){var a=Yc(e.domEventName,e.eventSystemFlags,o[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);wb=i,a.target.dispatchEvent(i),wb=null}else return o=Cb(a),o!==null&&Fc(o),e.blockedOn=a,!1;o.shift()}return!0}function Zc(e,o,a){Xc(e)&&a.delete(o)}function $c(){Jc=!1,Lc!==null&&Xc(Lc)&&(Lc=null),Mc!==null&&Xc(Mc)&&(Mc=null),Nc!==null&&Xc(Nc)&&(Nc=null),Oc.forEach(Zc),Pc.forEach(Zc)}function ad(e,o){e.blockedOn===o&&(e.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}function bd(e){function o(s){return ad(s,e)}if(0<Kc.length){ad(Kc[0],e);for(var a=1;a<Kc.length;a++){var i=Kc[a];i.blockedOn===e&&(i.blockedOn=null)}}for(Lc!==null&&ad(Lc,e),Mc!==null&&ad(Mc,e),Nc!==null&&ad(Nc,e),Oc.forEach(o),Pc.forEach(o),a=0;a<Qc.length;a++)i=Qc[a],i.blockedOn===e&&(i.blockedOn=null);for(;0<Qc.length&&(a=Qc[0],a.blockedOn===null);)Vc(a),a.blockedOn===null&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;function ed(e,o,a,i){var s=C,c=cd.transition;cd.transition=null;try{C=1,fd(e,o,a,i)}finally{C=s,cd.transition=c}}function gd(e,o,a,i){var s=C,c=cd.transition;cd.transition=null;try{C=4,fd(e,o,a,i)}finally{C=s,cd.transition=c}}function fd(e,o,a,i){if(dd){var s=Yc(e,o,a,i);if(s===null)hd(e,o,i,id,a),Sc(e,i);else if(Uc(s,e,o,a,i))i.stopPropagation();else if(Sc(e,i),o&4&&-1<Rc.indexOf(e)){for(;s!==null;){var c=Cb(s);if(c!==null&&Ec(c),c=Yc(e,o,a,i),c===null&&hd(e,o,i,id,a),c===s)break;s=c}s!==null&&i.stopPropagation()}else hd(e,o,i,null,a)}}var id=null;function Yc(e,o,a,i){if(id=null,e=xb(i),e=Wc(e),e!==null)if(o=Vb(e),o===null)e=null;else if(a=o.tag,a===13){if(e=Wb(o),e!==null)return e;e=null}else if(a===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;e=null}else o!==e&&(e=null);return id=e,null}function jd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var e,o=ld,a=o.length,i,s="value"in kd?kd.value:kd.textContent,c=s.length;for(e=0;e<a&&o[e]===s[e];e++);var d=a-e;for(i=1;i<=d&&o[a-i]===s[c-i];i++);return md=s.slice(e,1<i?1-i:void 0)}function od(e){var o=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&o===13&&(e=13)):e=o,e===10&&(e=13),32<=e||e===13?e:0}function pd(){return!0}function qd(){return!1}function rd(e){function o(a,i,s,c,d){this._reactName=a,this._targetInst=s,this.type=i,this.nativeEvent=c,this.target=d,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?pd:qd,this.isPropagationStopped=qd,this}return A(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd}),o}var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yd&&(yd&&e.type==="mousemove"?(wd=e.screenX-yd.screenX,xd=e.screenY-yd.screenY):xd=wd=0,yd=e),wd)},movementY:function(e){return"movementY"in e?e.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(e):(e=Od[e])?!!o[e]:!1}function zd(){return Pd}var Qd=A({},ud,{key:function(e){if(e.key){var o=Md[e.key]||e.key;if(o!=="Unidentified")return o}return e.type==="keypress"?(e=od(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(e){return e.type==="keypress"?od(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?od(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae$1=ia&&"CompositionEvent"in window,be$1=null;ia&&"documentMode"in document&&(be$1=document.documentMode);var ce=ia&&"TextEvent"in window&&!be$1,de$1=ia&&(!ae$1||be$1&&8<be$1&&11>=be$1),ee$1=" ",fe$1=!1;function ge(e,o){switch(e){case"keyup":return $d.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he$1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ie$1=!1;function je(e,o){switch(e){case"compositionend":return he$1(o);case"keypress":return o.which!==32?null:(fe$1=!0,ee$1);case"textInput":return e=o.data,e===ee$1&&fe$1?null:e;default:return null}}function ke(e,o){if(ie$1)return e==="compositionend"||!ae$1&&ge(e,o)?(e=nd(),md=ld=kd=null,ie$1=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return de$1&&o.locale!=="ko"?null:o.data;default:return null}}var le$1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o==="input"?!!le$1[e.type]:o==="textarea"}function ne(e,o,a,i){Eb(i),o=oe(o,"onChange"),0<o.length&&(a=new td("onChange","change",null,a,i),e.push({event:a,listeners:o}))}var pe=null,qe=null;function re(e){se$1(e,0)}function te$1(e){var o=ue(e);if(Wa(o))return e}function ve(e,o){if(e==="change")return o}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;"),ye=typeof ze.oninput=="function"}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(e){if(e.propertyName==="value"&&te$1(qe)){var o=[];ne(o,qe,e,xb(e)),Jb(re,o)}}function Ce$1(e,o,a){e==="focusin"?(Ae(),pe=o,qe=a,pe.attachEvent("onpropertychange",Be)):e==="focusout"&&Ae()}function De$1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return te$1(qe)}function Ee$1(e,o){if(e==="click")return te$1(o)}function Fe(e,o){if(e==="input"||e==="change")return te$1(o)}function Ge(e,o){return e===o&&(e!==0||1/e===1/o)||e!==e&&o!==o}var He$1=typeof Object.is=="function"?Object.is:Ge;function Ie(e,o){if(He$1(e,o))return!0;if(typeof e!="object"||e===null||typeof o!="object"||o===null)return!1;var a=Object.keys(e),i=Object.keys(o);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var s=a[i];if(!ja.call(o,s)||!He$1(e[s],o[s]))return!1}return!0}function Je(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ke(e,o){var a=Je(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=o&&i>=o)return{node:a,offset:o-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Je(a)}}function Le$1(e,o){return e&&o?e===o?!0:e&&e.nodeType===3?!1:o&&o.nodeType===3?Le$1(e,o.parentNode):"contains"in e?e.contains(o):e.compareDocumentPosition?!!(e.compareDocumentPosition(o)&16):!1:!1}function Me$1(){for(var e=window,o=Xa();o instanceof e.HTMLIFrameElement;){try{var a=typeof o.contentWindow.location.href=="string"}catch{a=!1}if(a)e=o.contentWindow;else break;o=Xa(e.document)}return o}function Ne(e){var o=e&&e.nodeName&&e.nodeName.toLowerCase();return o&&(o==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||o==="textarea"||e.contentEditable==="true")}function Oe$1(e){var o=Me$1(),a=e.focusedElem,i=e.selectionRange;if(o!==a&&a&&a.ownerDocument&&Le$1(a.ownerDocument.documentElement,a)){if(i!==null&&Ne(a)){if(o=i.start,e=i.end,e===void 0&&(e=o),"selectionStart"in a)a.selectionStart=o,a.selectionEnd=Math.min(e,a.value.length);else if(e=(o=a.ownerDocument||document)&&o.defaultView||window,e.getSelection){e=e.getSelection();var s=a.textContent.length,c=Math.min(i.start,s);i=i.end===void 0?c:Math.min(i.end,s),!e.extend&&c>i&&(s=i,i=c,c=s),s=Ke(a,c);var d=Ke(a,i);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(o=o.createRange(),o.setStart(s.node,s.offset),e.removeAllRanges(),c>i?(e.addRange(o),e.extend(d.node,d.offset)):(o.setEnd(d.node,d.offset),e.addRange(o)))}}for(o=[],e=a;e=e.parentNode;)e.nodeType===1&&o.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<o.length;a++)e=o[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pe$1=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;function Ue(e,o,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Te||Qe==null||Qe!==Xa(i)||(i=Qe,"selectionStart"in i&&Ne(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Se&&Ie(Se,i)||(Se=i,i=oe(Re,"onSelect"),0<i.length&&(o=new td("onSelect","select",null,o,a),e.push({event:o,listeners:i}),o.target=Qe)))}function Ve$1(e,o){var a={};return a[e.toLowerCase()]=o.toLowerCase(),a["Webkit"+e]="webkit"+o,a["Moz"+e]="moz"+o,a}var We={animationend:Ve$1("Animation","AnimationEnd"),animationiteration:Ve$1("Animation","AnimationIteration"),animationstart:Ve$1("Animation","AnimationStart"),transitionend:Ve$1("Transition","TransitionEnd")},Xe={},Ye={};ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(e){if(Xe[e])return Xe[e];if(!We[e])return e;var o=We[e],a;for(a in o)if(o.hasOwnProperty(a)&&a in Ye)return Xe[e]=o[a];return e}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ff(e,o){df.set(e,o),fa(o,[e])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));function nf(e,o,a){var i=e.type||"unknown-event";e.currentTarget=a,Ub(i,o,void 0,e),e.currentTarget=null}function se$1(e,o){o=(o&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],s=i.event;i=i.listeners;e:{var c=void 0;if(o)for(var d=i.length-1;0<=d;d--){var g=i[d],b=g.instance,en=g.currentTarget;if(g=g.listener,b!==c&&s.isPropagationStopped())break e;nf(s,g,en),c=b}else for(d=0;d<i.length;d++){if(g=i[d],b=g.instance,en=g.currentTarget,g=g.listener,b!==c&&s.isPropagationStopped())break e;nf(s,g,en),c=b}}}if(Qb)throw e=Rb,Qb=!1,Rb=null,e}function D$1(e,o){var a=o[of];a===void 0&&(a=o[of]=new Set);var i=e+"__bubble";a.has(i)||(pf(o,e,2,!1),a.add(i))}function qf(e,o,a){var i=0;o&&(i|=4),pf(a,e,i,o)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(e){if(!e[rf]){e[rf]=!0,da.forEach(function(a){a!=="selectionchange"&&(mf.has(a)||qf(a,!1,e),qf(a,!0,e))});var o=e.nodeType===9?e:e.ownerDocument;o===null||o[rf]||(o[rf]=!0,qf("selectionchange",!1,o))}}function pf(e,o,a,i){switch(jd(o)){case 1:var s=ed;break;case 4:s=gd;break;default:s=fd}a=s.bind(null,o,a,e),s=void 0,!Lb||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(o,a,{capture:!0,passive:s}):e.addEventListener(o,a,!0):s!==void 0?e.addEventListener(o,a,{passive:s}):e.addEventListener(o,a,!1)}function hd(e,o,a,i,s){var c=i;if(!(o&1)&&!(o&2)&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var g=i.stateNode.containerInfo;if(g===s||g.nodeType===8&&g.parentNode===s)break;if(d===4)for(d=i.return;d!==null;){var b=d.tag;if((b===3||b===4)&&(b=d.stateNode.containerInfo,b===s||b.nodeType===8&&b.parentNode===s))return;d=d.return}for(;g!==null;){if(d=Wc(g),d===null)return;if(b=d.tag,b===5||b===6){i=c=d;continue e}g=g.parentNode}}i=i.return}Jb(function(){var en=c,sn=xb(a),on=[];e:{var ln=df.get(e);if(ln!==void 0){var dn=td,pn=e;switch(e){case"keypress":if(od(a)===0)break e;case"keydown":case"keyup":dn=Rd;break;case"focusin":pn="focus",dn=Fd;break;case"focusout":pn="blur",dn=Fd;break;case"beforeblur":case"afterblur":dn=Fd;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dn=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dn=Dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dn=Vd;break;case $e:case af:case bf:dn=Hd;break;case cf:dn=Xd;break;case"scroll":dn=vd;break;case"wheel":dn=Zd;break;case"copy":case"cut":case"paste":dn=Jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dn=Td}var un=(o&4)!==0,gn=!un&&e==="scroll",tn=un?ln!==null?ln+"Capture":null:ln;un=[];for(var j=en,_e;j!==null;){_e=j;var nn=_e.stateNode;if(_e.tag===5&&nn!==null&&(_e=nn,tn!==null&&(nn=Kb(j,tn),nn!=null&&un.push(tf(j,nn,_e)))),gn)break;j=j.return}0<un.length&&(ln=new dn(ln,pn,null,a,sn),on.push({event:ln,listeners:un}))}}if(!(o&7)){e:{if(ln=e==="mouseover"||e==="pointerover",dn=e==="mouseout"||e==="pointerout",ln&&a!==wb&&(pn=a.relatedTarget||a.fromElement)&&(Wc(pn)||pn[uf]))break e;if((dn||ln)&&(ln=sn.window===sn?sn:(ln=sn.ownerDocument)?ln.defaultView||ln.parentWindow:window,dn?(pn=a.relatedTarget||a.toElement,dn=en,pn=pn?Wc(pn):null,pn!==null&&(gn=Vb(pn),pn!==gn||pn.tag!==5&&pn.tag!==6)&&(pn=null)):(dn=null,pn=en),dn!==pn)){if(un=Bd,nn="onMouseLeave",tn="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(un=Td,nn="onPointerLeave",tn="onPointerEnter",j="pointer"),gn=dn==null?ln:ue(dn),_e=pn==null?ln:ue(pn),ln=new un(nn,j+"leave",dn,a,sn),ln.target=gn,ln.relatedTarget=_e,nn=null,Wc(sn)===en&&(un=new un(tn,j+"enter",pn,a,sn),un.target=_e,un.relatedTarget=gn,nn=un),gn=nn,dn&&pn)n:{for(un=dn,tn=pn,j=0,_e=un;_e;_e=vf(_e))j++;for(_e=0,nn=tn;nn;nn=vf(nn))_e++;for(;0<j-_e;)un=vf(un),j--;for(;0<_e-j;)tn=vf(tn),_e--;for(;j--;){if(un===tn||tn!==null&&un===tn.alternate)break n;un=vf(un),tn=vf(tn)}un=null}else un=null;dn!==null&&wf(on,ln,dn,un,!1),pn!==null&&gn!==null&&wf(on,gn,pn,un,!0)}}e:{if(ln=en?ue(en):window,dn=ln.nodeName&&ln.nodeName.toLowerCase(),dn==="select"||dn==="input"&&ln.type==="file")var an=ve;else if(me(ln))if(we)an=Fe;else{an=De$1;var cn=Ce$1}else(dn=ln.nodeName)&&dn.toLowerCase()==="input"&&(ln.type==="checkbox"||ln.type==="radio")&&(an=Ee$1);if(an&&(an=an(e,en))){ne(on,an,a,sn);break e}cn&&cn(e,ln,en),e==="focusout"&&(cn=ln._wrapperState)&&cn.controlled&&ln.type==="number"&&cb(ln,"number",ln.value)}switch(cn=en?ue(en):window,e){case"focusin":(me(cn)||cn.contentEditable==="true")&&(Qe=cn,Re=en,Se=null);break;case"focusout":Se=Re=Qe=null;break;case"mousedown":Te=!0;break;case"contextmenu":case"mouseup":case"dragend":Te=!1,Ue(on,a,sn);break;case"selectionchange":if(Pe$1)break;case"keydown":case"keyup":Ue(on,a,sn)}var mn;if(ae$1)e:{switch(e){case"compositionstart":var yn="onCompositionStart";break e;case"compositionend":yn="onCompositionEnd";break e;case"compositionupdate":yn="onCompositionUpdate";break e}yn=void 0}else ie$1?ge(e,a)&&(yn="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(yn="onCompositionStart");yn&&(de$1&&a.locale!=="ko"&&(ie$1||yn!=="onCompositionStart"?yn==="onCompositionEnd"&&ie$1&&(mn=nd()):(kd=sn,ld="value"in kd?kd.value:kd.textContent,ie$1=!0)),cn=oe(en,yn),0<cn.length&&(yn=new Ld(yn,e,null,a,sn),on.push({event:yn,listeners:cn}),mn?yn.data=mn:(mn=he$1(a),mn!==null&&(yn.data=mn)))),(mn=ce?je(e,a):ke(e,a))&&(en=oe(en,"onBeforeInput"),0<en.length&&(sn=new Ld("onBeforeInput","beforeinput",null,a,sn),on.push({event:sn,listeners:en}),sn.data=mn))}se$1(on,o)})}function tf(e,o,a){return{instance:e,listener:o,currentTarget:a}}function oe(e,o){for(var a=o+"Capture",i=[];e!==null;){var s=e,c=s.stateNode;s.tag===5&&c!==null&&(s=c,c=Kb(e,a),c!=null&&i.unshift(tf(e,c,s)),c=Kb(e,o),c!=null&&i.push(tf(e,c,s))),e=e.return}return i}function vf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wf(e,o,a,i,s){for(var c=o._reactName,d=[];a!==null&&a!==i;){var g=a,b=g.alternate,en=g.stateNode;if(b!==null&&b===i)break;g.tag===5&&en!==null&&(g=en,s?(b=Kb(a,c),b!=null&&d.unshift(tf(a,b,g))):s||(b=Kb(a,c),b!=null&&d.push(tf(a,b,g)))),a=a.return}d.length!==0&&e.push({event:o,listeners:d})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(e){return(typeof e=="string"?e:""+e).replace(xf,`
`).replace(yf,"")}function Af(e,o,a){if(o=zf(o),zf(e)!==o&&a)throw Error(p(425))}function Bf(){}var Cf=null,Df=null;function Ef(e,o){return e==="textarea"||e==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Ff=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,Jf=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(e){return Hf.resolve(null).then(e).catch(If)}:Ff;function If(e){setTimeout(function(){throw e})}function Kf(e,o){var a=o,i=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(i===0){e.removeChild(s),bd(o);return}i--}else a!=="$"&&a!=="$?"&&a!=="$!"||i++;a=s}while(a);bd(o)}function Lf(e){for(;e!=null;e=e.nextSibling){var o=e.nodeType;if(o===1||o===3)break;if(o===8){if(o=e.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return e}function Mf(e){e=e.previousSibling;for(var o=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(o===0)return e;o--}else a==="/$"&&o++}e=e.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;function Wc(e){var o=e[Of];if(o)return o;for(var a=e.parentNode;a;){if(o=a[uf]||a[Of]){if(a=o.alternate,o.child!==null||a!==null&&a.child!==null)for(e=Mf(e);e!==null;){if(a=e[Of])return a;e=Mf(e)}return o}e=a,a=e.parentNode}return null}function Cb(e){return e=e[Of]||e[uf],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ue(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(p(33))}function Db(e){return e[Pf]||null}var Sf=[],Tf=-1;function Uf(e){return{current:e}}function E(e){0>Tf||(e.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(e,o){Tf++,Sf[Tf]=e.current,e.current=o}var Vf={},H$1=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(e,o){var a=e.type.contextTypes;if(!a)return Vf;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===o)return i.__reactInternalMemoizedMaskedChildContext;var s={},c;for(c in a)s[c]=o[c];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),s}function Zf(e){return e=e.childContextTypes,e!=null}function $f(){E(Wf),E(H$1)}function ag(e,o,a){if(H$1.current!==Vf)throw Error(p(168));G(H$1,o),G(Wf,a)}function bg(e,o,a){var i=e.stateNode;if(o=o.childContextTypes,typeof i.getChildContext!="function")return a;i=i.getChildContext();for(var s in i)if(!(s in o))throw Error(p(108,Ra(e)||"Unknown",s));return A({},a,i)}function cg(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vf,Xf=H$1.current,G(H$1,e),G(Wf,Wf.current),!0}function dg(e,o,a){var i=e.stateNode;if(!i)throw Error(p(169));a?(e=bg(e,o,Xf),i.__reactInternalMemoizedMergedChildContext=e,E(Wf),E(H$1),G(H$1,e)):E(Wf),G(Wf,a)}var eg=null,fg=!1,gg=!1;function hg(e){eg===null?eg=[e]:eg.push(e)}function ig(e){fg=!0,hg(e)}function jg(){if(!gg&&eg!==null){gg=!0;var e=0,o=C;try{var a=eg;for(C=1;e<a.length;e++){var i=a[e];do i=i(!0);while(i!==null)}eg=null,fg=!1}catch(s){throw eg!==null&&(eg=eg.slice(e+1)),ac(fc,jg),s}finally{C=o,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(e,o){kg[lg++]=ng,kg[lg++]=mg,mg=e,ng=o}function ug(e,o,a){og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,qg=e;var i=rg;e=sg;var s=32-oc(i)-1;i&=~(1<<s),a+=1;var c=32-oc(o)+s;if(30<c){var d=s-s%5;c=(i&(1<<d)-1).toString(32),i>>=d,s-=d,rg=1<<32-oc(o)+s|a<<s|i,sg=c+e}else rg=1<<c|a<<s|i,sg=e}function vg(e){e.return!==null&&(tg(e,1),ug(e,1,0))}function wg(e){for(;e===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;e===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;function Ag(e,o){var a=Bg(5,null,null,0);a.elementType="DELETED",a.stateNode=o,a.return=e,o=e.deletions,o===null?(e.deletions=[a],e.flags|=16):o.push(a)}function Cg(e,o){switch(e.tag){case 5:var a=e.type;return o=o.nodeType!==1||a.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(e.stateNode=o,xg=e,yg=Lf(o.firstChild),!0):!1;case 6:return o=e.pendingProps===""||o.nodeType!==3?null:o,o!==null?(e.stateNode=o,xg=e,yg=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(a=qg!==null?{id:rg,overflow:sg}:null,e.memoizedState={dehydrated:o,treeContext:a,retryLane:1073741824},a=Bg(18,null,null,0),a.stateNode=o,a.return=e,e.child=a,xg=e,yg=null,!0):!1;default:return!1}}function Dg(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Eg(e){if(I){var o=yg;if(o){var a=o;if(!Cg(e,o)){if(Dg(e))throw Error(p(418));o=Lf(a.nextSibling);var i=xg;o&&Cg(e,o)?Ag(i,a):(e.flags=e.flags&-4097|2,I=!1,xg=e)}}else{if(Dg(e))throw Error(p(418));e.flags=e.flags&-4097|2,I=!1,xg=e}}}function Fg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xg=e}function Gg(e){if(e!==xg)return!1;if(!I)return Fg(e),I=!0,!1;var o;if((o=e.tag!==3)&&!(o=e.tag!==5)&&(o=e.type,o=o!=="head"&&o!=="body"&&!Ef(e.type,e.memoizedProps)),o&&(o=yg)){if(Dg(e))throw Hg(),Error(p(418));for(;o;)Ag(e,o),o=Lf(o.nextSibling)}if(Fg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e:{for(e=e.nextSibling,o=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(o===0){yg=Lf(e.nextSibling);break e}o--}else a!=="$"&&a!=="$!"&&a!=="$?"||o++}e=e.nextSibling}yg=null}}else yg=xg?Lf(e.stateNode.nextSibling):null;return!0}function Hg(){for(var e=yg;e;)e=Lf(e.nextSibling)}function Ig(){yg=xg=null,I=!1}function Jg(e){zg===null?zg=[e]:zg.push(e)}var Kg=ua.ReactCurrentBatchConfig;function Lg(e,o){if(e&&e.defaultProps){o=A({},o),e=e.defaultProps;for(var a in e)o[a]===void 0&&(o[a]=e[a]);return o}return o}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(e){var o=Mg.current;E(Mg),e._currentValue=o}function Sg(e,o,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&o)!==o?(e.childLanes|=o,i!==null&&(i.childLanes|=o)):i!==null&&(i.childLanes&o)!==o&&(i.childLanes|=o),e===a)break;e=e.return}}function Tg(e,o){Ng=e,Pg=Og=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&o&&(Ug=!0),e.firstContext=null)}function Vg(e){var o=e._currentValue;if(Pg!==e)if(e={context:e,memoizedValue:o,next:null},Og===null){if(Ng===null)throw Error(p(308));Og=e,Ng.dependencies={lanes:0,firstContext:e}}else Og=Og.next=e;return o}var Wg=null;function Xg(e){Wg===null?Wg=[e]:Wg.push(e)}function Yg(e,o,a,i){var s=o.interleaved;return s===null?(a.next=a,Xg(o)):(a.next=s.next,s.next=a),o.interleaved=a,Zg(e,i)}function Zg(e,o){e.lanes|=o;var a=e.alternate;for(a!==null&&(a.lanes|=o),a=e,e=e.return;e!==null;)e.childLanes|=o,a=e.alternate,a!==null&&(a.childLanes|=o),a=e,e=e.return;return a.tag===3?a.stateNode:null}var $g=!1;function ah(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(e,o){e=e.updateQueue,o.updateQueue===e&&(o.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ch(e,o){return{eventTime:e,lane:o,tag:0,payload:null,callback:null,next:null}}function dh(e,o,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,K&2){var s=i.pending;return s===null?o.next=o:(o.next=s.next,s.next=o),i.pending=o,Zg(e,a)}return s=i.interleaved,s===null?(o.next=o,Xg(i)):(o.next=s.next,s.next=o),i.interleaved=o,Zg(e,a)}function eh(e,o,a){if(o=o.updateQueue,o!==null&&(o=o.shared,(a&4194240)!==0)){var i=o.lanes;i&=e.pendingLanes,a|=i,o.lanes=a,Cc(e,a)}}function fh(e,o){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var s=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var d={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};c===null?s=c=d:c=c.next=d,a=a.next}while(a!==null);c===null?s=c=o:c=c.next=o}else s=c=o;a={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:i.shared,effects:i.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=o:e.next=o,a.lastBaseUpdate=o}function gh(e,o,a,i){var s=e.updateQueue;$g=!1;var c=s.firstBaseUpdate,d=s.lastBaseUpdate,g=s.shared.pending;if(g!==null){s.shared.pending=null;var b=g,en=b.next;b.next=null,d===null?c=en:d.next=en,d=b;var sn=e.alternate;sn!==null&&(sn=sn.updateQueue,g=sn.lastBaseUpdate,g!==d&&(g===null?sn.firstBaseUpdate=en:g.next=en,sn.lastBaseUpdate=b))}if(c!==null){var on=s.baseState;d=0,sn=en=b=null,g=c;do{var ln=g.lane,dn=g.eventTime;if((i&ln)===ln){sn!==null&&(sn=sn.next={eventTime:dn,lane:0,tag:g.tag,payload:g.payload,callback:g.callback,next:null});e:{var pn=e,un=g;switch(ln=o,dn=a,un.tag){case 1:if(pn=un.payload,typeof pn=="function"){on=pn.call(dn,on,ln);break e}on=pn;break e;case 3:pn.flags=pn.flags&-65537|128;case 0:if(pn=un.payload,ln=typeof pn=="function"?pn.call(dn,on,ln):pn,ln==null)break e;on=A({},on,ln);break e;case 2:$g=!0}}g.callback!==null&&g.lane!==0&&(e.flags|=64,ln=s.effects,ln===null?s.effects=[g]:ln.push(g))}else dn={eventTime:dn,lane:ln,tag:g.tag,payload:g.payload,callback:g.callback,next:null},sn===null?(en=sn=dn,b=on):sn=sn.next=dn,d|=ln;if(g=g.next,g===null){if(g=s.shared.pending,g===null)break;ln=g,g=ln.next,ln.next=null,s.lastBaseUpdate=ln,s.shared.pending=null}}while(!0);if(sn===null&&(b=on),s.baseState=b,s.firstBaseUpdate=en,s.lastBaseUpdate=sn,o=s.shared.interleaved,o!==null){s=o;do d|=s.lane,s=s.next;while(s!==o)}else c===null&&(s.shared.lanes=0);hh|=d,e.lanes=d,e.memoizedState=on}}function ih(e,o,a){if(e=o.effects,o.effects=null,e!==null)for(o=0;o<e.length;o++){var i=e[o],s=i.callback;if(s!==null){if(i.callback=null,i=a,typeof s!="function")throw Error(p(191,s));s.call(i)}}}var jh=new aa.Component().refs;function kh(e,o,a,i){o=e.memoizedState,a=a(i,o),a=a==null?o:A({},o,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nh={isMounted:function(e){return(e=e._reactInternals)?Vb(e)===e:!1},enqueueSetState:function(e,o,a){e=e._reactInternals;var i=L(),s=lh(e),c=ch(i,s);c.payload=o,a!=null&&(c.callback=a),o=dh(e,c,s),o!==null&&(mh(o,e,s,i),eh(o,e,s))},enqueueReplaceState:function(e,o,a){e=e._reactInternals;var i=L(),s=lh(e),c=ch(i,s);c.tag=1,c.payload=o,a!=null&&(c.callback=a),o=dh(e,c,s),o!==null&&(mh(o,e,s,i),eh(o,e,s))},enqueueForceUpdate:function(e,o){e=e._reactInternals;var a=L(),i=lh(e),s=ch(a,i);s.tag=2,o!=null&&(s.callback=o),o=dh(e,s,i),o!==null&&(mh(o,e,i,a),eh(o,e,i))}};function oh(e,o,a,i,s,c,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,d):o.prototype&&o.prototype.isPureReactComponent?!Ie(a,i)||!Ie(s,c):!0}function ph(e,o,a){var i=!1,s=Vf,c=o.contextType;return typeof c=="object"&&c!==null?c=Vg(c):(s=Zf(o)?Xf:H$1.current,i=o.contextTypes,c=(i=i!=null)?Yf(e,s):Vf),o=new o(a,c),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=nh,e.stateNode=o,o._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=c),o}function qh(e,o,a,i){e=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(a,i),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(a,i),o.state!==e&&nh.enqueueReplaceState(o,o.state,null)}function rh(e,o,a,i){var s=e.stateNode;s.props=a,s.state=e.memoizedState,s.refs=jh,ah(e);var c=o.contextType;typeof c=="object"&&c!==null?s.context=Vg(c):(c=Zf(o)?Xf:H$1.current,s.context=Yf(e,c)),s.state=e.memoizedState,c=o.getDerivedStateFromProps,typeof c=="function"&&(kh(e,o,c,a),s.state=e.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&nh.enqueueReplaceState(s,s.state,null),gh(e,a,s,i),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function sh(e,o,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(p(309));var i=a.stateNode}if(!i)throw Error(p(147,e));var s=i,c=""+e;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===c?o.ref:(o=function(d){var g=s.refs;g===jh&&(g=s.refs={}),d===null?delete g[c]:g[c]=d},o._stringRef=c,o)}if(typeof e!="string")throw Error(p(284));if(!a._owner)throw Error(p(290,e))}return e}function th(e,o){throw e=Object.prototype.toString.call(o),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":e))}function uh(e){var o=e._init;return o(e._payload)}function vh(e){function o(tn,j){if(e){var _e=tn.deletions;_e===null?(tn.deletions=[j],tn.flags|=16):_e.push(j)}}function a(tn,j){if(!e)return null;for(;j!==null;)o(tn,j),j=j.sibling;return null}function i(tn,j){for(tn=new Map;j!==null;)j.key!==null?tn.set(j.key,j):tn.set(j.index,j),j=j.sibling;return tn}function s(tn,j){return tn=wh(tn,j),tn.index=0,tn.sibling=null,tn}function c(tn,j,_e){return tn.index=_e,e?(_e=tn.alternate,_e!==null?(_e=_e.index,_e<j?(tn.flags|=2,j):_e):(tn.flags|=2,j)):(tn.flags|=1048576,j)}function d(tn){return e&&tn.alternate===null&&(tn.flags|=2),tn}function g(tn,j,_e,nn){return j===null||j.tag!==6?(j=xh(_e,tn.mode,nn),j.return=tn,j):(j=s(j,_e),j.return=tn,j)}function b(tn,j,_e,nn){var an=_e.type;return an===ya?sn(tn,j,_e.props.children,nn,_e.key):j!==null&&(j.elementType===an||typeof an=="object"&&an!==null&&an.$$typeof===Ha&&uh(an)===j.type)?(nn=s(j,_e.props),nn.ref=sh(tn,j,_e),nn.return=tn,nn):(nn=yh(_e.type,_e.key,_e.props,null,tn.mode,nn),nn.ref=sh(tn,j,_e),nn.return=tn,nn)}function en(tn,j,_e,nn){return j===null||j.tag!==4||j.stateNode.containerInfo!==_e.containerInfo||j.stateNode.implementation!==_e.implementation?(j=zh(_e,tn.mode,nn),j.return=tn,j):(j=s(j,_e.children||[]),j.return=tn,j)}function sn(tn,j,_e,nn,an){return j===null||j.tag!==7?(j=Ah(_e,tn.mode,nn,an),j.return=tn,j):(j=s(j,_e),j.return=tn,j)}function on(tn,j,_e){if(typeof j=="string"&&j!==""||typeof j=="number")return j=xh(""+j,tn.mode,_e),j.return=tn,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case va:return _e=yh(j.type,j.key,j.props,null,tn.mode,_e),_e.ref=sh(tn,null,j),_e.return=tn,_e;case wa:return j=zh(j,tn.mode,_e),j.return=tn,j;case Ha:var nn=j._init;return on(tn,nn(j._payload),_e)}if(eb(j)||Ka(j))return j=Ah(j,tn.mode,_e,null),j.return=tn,j;th(tn,j)}return null}function ln(tn,j,_e,nn){var an=j!==null?j.key:null;if(typeof _e=="string"&&_e!==""||typeof _e=="number")return an!==null?null:g(tn,j,""+_e,nn);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case va:return _e.key===an?b(tn,j,_e,nn):null;case wa:return _e.key===an?en(tn,j,_e,nn):null;case Ha:return an=_e._init,ln(tn,j,an(_e._payload),nn)}if(eb(_e)||Ka(_e))return an!==null?null:sn(tn,j,_e,nn,null);th(tn,_e)}return null}function dn(tn,j,_e,nn,an){if(typeof nn=="string"&&nn!==""||typeof nn=="number")return tn=tn.get(_e)||null,g(j,tn,""+nn,an);if(typeof nn=="object"&&nn!==null){switch(nn.$$typeof){case va:return tn=tn.get(nn.key===null?_e:nn.key)||null,b(j,tn,nn,an);case wa:return tn=tn.get(nn.key===null?_e:nn.key)||null,en(j,tn,nn,an);case Ha:var cn=nn._init;return dn(tn,j,_e,cn(nn._payload),an)}if(eb(nn)||Ka(nn))return tn=tn.get(_e)||null,sn(j,tn,nn,an,null);th(j,nn)}return null}function pn(tn,j,_e,nn){for(var an=null,cn=null,mn=j,yn=j=0,hn=null;mn!==null&&yn<_e.length;yn++){mn.index>yn?(hn=mn,mn=null):hn=mn.sibling;var wn=ln(tn,mn,_e[yn],nn);if(wn===null){mn===null&&(mn=hn);break}e&&mn&&wn.alternate===null&&o(tn,mn),j=c(wn,j,yn),cn===null?an=wn:cn.sibling=wn,cn=wn,mn=hn}if(yn===_e.length)return a(tn,mn),I&&tg(tn,yn),an;if(mn===null){for(;yn<_e.length;yn++)mn=on(tn,_e[yn],nn),mn!==null&&(j=c(mn,j,yn),cn===null?an=mn:cn.sibling=mn,cn=mn);return I&&tg(tn,yn),an}for(mn=i(tn,mn);yn<_e.length;yn++)hn=dn(mn,tn,yn,_e[yn],nn),hn!==null&&(e&&hn.alternate!==null&&mn.delete(hn.key===null?yn:hn.key),j=c(hn,j,yn),cn===null?an=hn:cn.sibling=hn,cn=hn);return e&&mn.forEach(function(En){return o(tn,En)}),I&&tg(tn,yn),an}function un(tn,j,_e,nn){var an=Ka(_e);if(typeof an!="function")throw Error(p(150));if(_e=an.call(_e),_e==null)throw Error(p(151));for(var cn=an=null,mn=j,yn=j=0,hn=null,wn=_e.next();mn!==null&&!wn.done;yn++,wn=_e.next()){mn.index>yn?(hn=mn,mn=null):hn=mn.sibling;var En=ln(tn,mn,wn.value,nn);if(En===null){mn===null&&(mn=hn);break}e&&mn&&En.alternate===null&&o(tn,mn),j=c(En,j,yn),cn===null?an=En:cn.sibling=En,cn=En,mn=hn}if(wn.done)return a(tn,mn),I&&tg(tn,yn),an;if(mn===null){for(;!wn.done;yn++,wn=_e.next())wn=on(tn,wn.value,nn),wn!==null&&(j=c(wn,j,yn),cn===null?an=wn:cn.sibling=wn,cn=wn);return I&&tg(tn,yn),an}for(mn=i(tn,mn);!wn.done;yn++,wn=_e.next())wn=dn(mn,tn,yn,wn.value,nn),wn!==null&&(e&&wn.alternate!==null&&mn.delete(wn.key===null?yn:wn.key),j=c(wn,j,yn),cn===null?an=wn:cn.sibling=wn,cn=wn);return e&&mn.forEach(function(kn){return o(tn,kn)}),I&&tg(tn,yn),an}function gn(tn,j,_e,nn){if(typeof _e=="object"&&_e!==null&&_e.type===ya&&_e.key===null&&(_e=_e.props.children),typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case va:e:{for(var an=_e.key,cn=j;cn!==null;){if(cn.key===an){if(an=_e.type,an===ya){if(cn.tag===7){a(tn,cn.sibling),j=s(cn,_e.props.children),j.return=tn,tn=j;break e}}else if(cn.elementType===an||typeof an=="object"&&an!==null&&an.$$typeof===Ha&&uh(an)===cn.type){a(tn,cn.sibling),j=s(cn,_e.props),j.ref=sh(tn,cn,_e),j.return=tn,tn=j;break e}a(tn,cn);break}else o(tn,cn);cn=cn.sibling}_e.type===ya?(j=Ah(_e.props.children,tn.mode,nn,_e.key),j.return=tn,tn=j):(nn=yh(_e.type,_e.key,_e.props,null,tn.mode,nn),nn.ref=sh(tn,j,_e),nn.return=tn,tn=nn)}return d(tn);case wa:e:{for(cn=_e.key;j!==null;){if(j.key===cn)if(j.tag===4&&j.stateNode.containerInfo===_e.containerInfo&&j.stateNode.implementation===_e.implementation){a(tn,j.sibling),j=s(j,_e.children||[]),j.return=tn,tn=j;break e}else{a(tn,j);break}else o(tn,j);j=j.sibling}j=zh(_e,tn.mode,nn),j.return=tn,tn=j}return d(tn);case Ha:return cn=_e._init,gn(tn,j,cn(_e._payload),nn)}if(eb(_e))return pn(tn,j,_e,nn);if(Ka(_e))return un(tn,j,_e,nn);th(tn,_e)}return typeof _e=="string"&&_e!==""||typeof _e=="number"?(_e=""+_e,j!==null&&j.tag===6?(a(tn,j.sibling),j=s(j,_e),j.return=tn,tn=j):(a(tn,j),j=xh(_e,tn.mode,nn),j.return=tn,tn=j),d(tn)):a(tn,j)}return gn}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(e){if(e===Dh)throw Error(p(174));return e}function Ih(e,o){switch(G(Gh,o),G(Fh,e),G(Eh,Dh),e=o.nodeType,e){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:lb(null,"");break;default:e=e===8?o.parentNode:o,o=e.namespaceURI||null,e=e.tagName,o=lb(o,e)}E(Eh),G(Eh,o)}function Jh(){E(Eh),E(Fh),E(Gh)}function Kh(e){Hh(Gh.current);var o=Hh(Eh.current),a=lb(o,e.type);o!==a&&(G(Fh,e),G(Eh,a))}function Lh(e){Fh.current===e&&(E(Eh),E(Fh))}var M=Uf(0);function Mh(e){for(var o=e;o!==null;){if(o.tag===13){var a=o.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Nh=[];function Oh(){for(var e=0;e<Nh.length;e++)Nh[e]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p(321))}function Wh(e,o){if(o===null)return!1;for(var a=0;a<o.length&&a<e.length;a++)if(!He$1(e[a],o[a]))return!1;return!0}function Xh(e,o,a,i,s,c){if(Rh=c,N=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Ph.current=e===null||e.memoizedState===null?Yh:Zh,e=a(i,s),Th){c=0;do{if(Th=!1,Uh=0,25<=c)throw Error(p(301));c+=1,P=O=null,o.updateQueue=null,Ph.current=$h,e=a(i,s)}while(Th)}if(Ph.current=ai,o=O!==null&&O.next!==null,Rh=0,P=O=N=null,Sh=!1,o)throw Error(p(300));return e}function bi(){var e=Uh!==0;return Uh=0,e}function ci(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P===null?N.memoizedState=P=e:P=P.next=e,P}function di(){if(O===null){var e=N.alternate;e=e!==null?e.memoizedState:null}else e=O.next;var o=P===null?N.memoizedState:P.next;if(o!==null)P=o,O=e;else{if(e===null)throw Error(p(310));O=e,e={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null},P===null?N.memoizedState=P=e:P=P.next=e}return P}function ei(e,o){return typeof o=="function"?o(e):o}function fi(e){var o=di(),a=o.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=e;var i=O,s=i.baseQueue,c=a.pending;if(c!==null){if(s!==null){var d=s.next;s.next=c.next,c.next=d}i.baseQueue=s=c,a.pending=null}if(s!==null){c=s.next,i=i.baseState;var g=d=null,b=null,en=c;do{var sn=en.lane;if((Rh&sn)===sn)b!==null&&(b=b.next={lane:0,action:en.action,hasEagerState:en.hasEagerState,eagerState:en.eagerState,next:null}),i=en.hasEagerState?en.eagerState:e(i,en.action);else{var on={lane:sn,action:en.action,hasEagerState:en.hasEagerState,eagerState:en.eagerState,next:null};b===null?(g=b=on,d=i):b=b.next=on,N.lanes|=sn,hh|=sn}en=en.next}while(en!==null&&en!==c);b===null?d=i:b.next=g,He$1(i,o.memoizedState)||(Ug=!0),o.memoizedState=i,o.baseState=d,o.baseQueue=b,a.lastRenderedState=i}if(e=a.interleaved,e!==null){s=e;do c=s.lane,N.lanes|=c,hh|=c,s=s.next;while(s!==e)}else s===null&&(a.lanes=0);return[o.memoizedState,a.dispatch]}function gi(e){var o=di(),a=o.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=e;var i=a.dispatch,s=a.pending,c=o.memoizedState;if(s!==null){a.pending=null;var d=s=s.next;do c=e(c,d.action),d=d.next;while(d!==s);He$1(c,o.memoizedState)||(Ug=!0),o.memoizedState=c,o.baseQueue===null&&(o.baseState=c),a.lastRenderedState=c}return[c,i]}function hi(){}function ii(e,o){var a=N,i=di(),s=o(),c=!He$1(i.memoizedState,s);if(c&&(i.memoizedState=s,Ug=!0),i=i.queue,ji(ki.bind(null,a,i,e),[e]),i.getSnapshot!==o||c||P!==null&&P.memoizedState.tag&1){if(a.flags|=2048,li(9,mi.bind(null,a,i,s,o),void 0,null),R===null)throw Error(p(349));Rh&30||ni(a,o,s)}return s}function ni(e,o,a){e.flags|=16384,e={getSnapshot:o,value:a},o=N.updateQueue,o===null?(o={lastEffect:null,stores:null},N.updateQueue=o,o.stores=[e]):(a=o.stores,a===null?o.stores=[e]:a.push(e))}function mi(e,o,a,i){o.value=a,o.getSnapshot=i,oi(o)&&pi(e)}function ki(e,o,a){return a(function(){oi(o)&&pi(e)})}function oi(e){var o=e.getSnapshot;e=e.value;try{var a=o();return!He$1(e,a)}catch{return!0}}function pi(e){var o=Zg(e,1);o!==null&&mh(o,e,1,-1)}function qi(e){var o=ci();return typeof e=="function"&&(e=e()),o.memoizedState=o.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:e},o.queue=e,e=e.dispatch=ri.bind(null,N,e),[o.memoizedState,e]}function li(e,o,a,i){return e={tag:e,create:o,destroy:a,deps:i,next:null},o=N.updateQueue,o===null?(o={lastEffect:null,stores:null},N.updateQueue=o,o.lastEffect=e.next=e):(a=o.lastEffect,a===null?o.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,o.lastEffect=e)),e}function si(){return di().memoizedState}function ti(e,o,a,i){var s=ci();N.flags|=e,s.memoizedState=li(1|o,a,void 0,i===void 0?null:i)}function ui(e,o,a,i){var s=di();i=i===void 0?null:i;var c=void 0;if(O!==null){var d=O.memoizedState;if(c=d.destroy,i!==null&&Wh(i,d.deps)){s.memoizedState=li(o,a,c,i);return}}N.flags|=e,s.memoizedState=li(1|o,a,c,i)}function vi(e,o){return ti(8390656,8,e,o)}function ji(e,o){return ui(2048,8,e,o)}function wi(e,o){return ui(4,2,e,o)}function xi(e,o){return ui(4,4,e,o)}function yi(e,o){if(typeof o=="function")return e=e(),o(e),function(){o(null)};if(o!=null)return e=e(),o.current=e,function(){o.current=null}}function zi(e,o,a){return a=a!=null?a.concat([e]):null,ui(4,4,yi.bind(null,o,e),a)}function Ai(){}function Bi(e,o){var a=di();o=o===void 0?null:o;var i=a.memoizedState;return i!==null&&o!==null&&Wh(o,i[1])?i[0]:(a.memoizedState=[e,o],e)}function Ci(e,o){var a=di();o=o===void 0?null:o;var i=a.memoizedState;return i!==null&&o!==null&&Wh(o,i[1])?i[0]:(e=e(),a.memoizedState=[e,o],e)}function Di(e,o,a){return Rh&21?(He$1(a,o)||(a=yc(),N.lanes|=a,hh|=a,e.baseState=!0),o):(e.baseState&&(e.baseState=!1,Ug=!0),e.memoizedState=a)}function Ei(e,o){var a=C;C=a!==0&&4>a?a:4,e(!0);var i=Qh.transition;Qh.transition={};try{e(!1),o()}finally{C=a,Qh.transition=i}}function Fi(){return di().memoizedState}function Gi(e,o,a){var i=lh(e);if(a={lane:i,action:a,hasEagerState:!1,eagerState:null,next:null},Hi(e))Ii(o,a);else if(a=Yg(e,o,a,i),a!==null){var s=L();mh(a,e,i,s),Ji(a,o,i)}}function ri(e,o,a){var i=lh(e),s={lane:i,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hi(e))Ii(o,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=o.lastRenderedReducer,c!==null))try{var d=o.lastRenderedState,g=c(d,a);if(s.hasEagerState=!0,s.eagerState=g,He$1(g,d)){var b=o.interleaved;b===null?(s.next=s,Xg(o)):(s.next=b.next,b.next=s),o.interleaved=s;return}}catch{}finally{}a=Yg(e,o,s,i),a!==null&&(s=L(),mh(a,e,i,s),Ji(a,o,i))}}function Hi(e){var o=e.alternate;return e===N||o!==null&&o===N}function Ii(e,o){Th=Sh=!0;var a=e.pending;a===null?o.next=o:(o.next=a.next,a.next=o),e.pending=o}function Ji(e,o,a){if(a&4194240){var i=o.lanes;i&=e.pendingLanes,a|=i,o.lanes=a,Cc(e,a)}}var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(e,o){return ci().memoizedState=[e,o===void 0?null:o],e},useContext:Vg,useEffect:vi,useImperativeHandle:function(e,o,a){return a=a!=null?a.concat([e]):null,ti(4194308,4,yi.bind(null,o,e),a)},useLayoutEffect:function(e,o){return ti(4194308,4,e,o)},useInsertionEffect:function(e,o){return ti(4,2,e,o)},useMemo:function(e,o){var a=ci();return o=o===void 0?null:o,e=e(),a.memoizedState=[e,o],e},useReducer:function(e,o,a){var i=ci();return o=a!==void 0?a(o):o,i.memoizedState=i.baseState=o,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=Gi.bind(null,N,e),[i.memoizedState,e]},useRef:function(e){var o=ci();return e={current:e},o.memoizedState=e},useState:qi,useDebugValue:Ai,useDeferredValue:function(e){return ci().memoizedState=e},useTransition:function(){var e=qi(!1),o=e[0];return e=Ei.bind(null,e[1]),ci().memoizedState=e,[o,e]},useMutableSource:function(){},useSyncExternalStore:function(e,o,a){var i=N,s=ci();if(I){if(a===void 0)throw Error(p(407));a=a()}else{if(a=o(),R===null)throw Error(p(349));Rh&30||ni(i,o,a)}s.memoizedState=a;var c={value:a,getSnapshot:o};return s.queue=c,vi(ki.bind(null,i,c,e),[e]),i.flags|=2048,li(9,mi.bind(null,i,c,a,o),void 0,null),a},useId:function(){var e=ci(),o=R.identifierPrefix;if(I){var a=sg,i=rg;a=(i&~(1<<32-oc(i)-1)).toString(32)+a,o=":"+o+"R"+a,a=Uh++,0<a&&(o+="H"+a.toString(32)),o+=":"}else a=Vh++,o=":"+o+"r"+a.toString(32)+":";return e.memoizedState=o},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},useDebugValue:Ai,useDeferredValue:function(e){var o=di();return Di(o,O.memoizedState,e)},useTransition:function(){var e=fi(ei)[0],o=di().memoizedState;return[e,o]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(e){var o=di();return O===null?o.memoizedState=e:Di(o,O.memoizedState,e)},useTransition:function(){var e=gi(ei)[0],o=di().memoizedState;return[e,o]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(e,o){try{var a="",i=o;do a+=Pa(i),i=i.return;while(i);var s=a}catch(c){s=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:o,stack:s,digest:null}}function Li(e,o,a){return{value:e,source:null,stack:a??null,digest:o??null}}function Mi(e,o){try{console.error(o.value)}catch(a){setTimeout(function(){throw a})}}var Ni=typeof WeakMap=="function"?WeakMap:Map;function Oi(e,o,a){a=ch(-1,a),a.tag=3,a.payload={element:null};var i=o.value;return a.callback=function(){Pi||(Pi=!0,Qi=i),Mi(e,o)},a}function Ri(e,o,a){a=ch(-1,a),a.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var s=o.value;a.payload=function(){return i(s)},a.callback=function(){Mi(e,o)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(a.callback=function(){Mi(e,o),typeof i!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var d=o.stack;this.componentDidCatch(o.value,{componentStack:d!==null?d:""})}),a}function Ti(e,o,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Ni;var s=new Set;i.set(o,s)}else s=i.get(o),s===void 0&&(s=new Set,i.set(o,s));s.has(a)||(s.add(a),e=Ui.bind(null,e,o,a),o.then(e,e))}function Vi(e){do{var o;if((o=e.tag===13)&&(o=e.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return e;e=e.return}while(e!==null);return null}function Wi(e,o,a,i,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===o?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(o=ch(-1,1),o.tag=2,dh(a,o,1))),a.lanes|=1),e)}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(e,o,a,i){o.child=e===null?Ch(o,null,a,i):Bh(o,e.child,a,i)}function Zi(e,o,a,i,s){a=a.render;var c=o.ref;return Tg(o,s),i=Xh(e,o,a,i,c,s),a=bi(),e!==null&&!Ug?(o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~s,$i(e,o,s)):(I&&a&&vg(o),o.flags|=1,Yi(e,o,i,s),o.child)}function aj(e,o,a,i,s){if(e===null){var c=a.type;return typeof c=="function"&&!bj(c)&&c.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(o.tag=15,o.type=c,cj(e,o,c,i,s)):(e=yh(a.type,null,i,o,o.mode,s),e.ref=o.ref,e.return=o,o.child=e)}if(c=e.child,!(e.lanes&s)){var d=c.memoizedProps;if(a=a.compare,a=a!==null?a:Ie,a(d,i)&&e.ref===o.ref)return $i(e,o,s)}return o.flags|=1,e=wh(c,i),e.ref=o.ref,e.return=o,o.child=e}function cj(e,o,a,i,s){if(e!==null){var c=e.memoizedProps;if(Ie(c,i)&&e.ref===o.ref)if(Ug=!1,o.pendingProps=i=c,(e.lanes&s)!==0)e.flags&131072&&(Ug=!0);else return o.lanes=e.lanes,$i(e,o,s)}return dj(e,o,a,i,s)}function ej(e,o,a){var i=o.pendingProps,s=i.children,c=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=a;else{if(!(a&1073741824))return e=c!==null?c.baseLanes|a:a,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:e,cachePool:null,transitions:null},o.updateQueue=null,G(fj,gj),gj|=e,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=c!==null?c.baseLanes:a,G(fj,gj),gj|=i}else c!==null?(i=c.baseLanes|a,o.memoizedState=null):i=a,G(fj,gj),gj|=i;return Yi(e,o,s,a),o.child}function hj(e,o){var a=o.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(o.flags|=512,o.flags|=2097152)}function dj(e,o,a,i,s){var c=Zf(a)?Xf:H$1.current;return c=Yf(o,c),Tg(o,s),a=Xh(e,o,a,i,c,s),i=bi(),e!==null&&!Ug?(o.updateQueue=e.updateQueue,o.flags&=-2053,e.lanes&=~s,$i(e,o,s)):(I&&i&&vg(o),o.flags|=1,Yi(e,o,a,s),o.child)}function ij(e,o,a,i,s){if(Zf(a)){var c=!0;cg(o)}else c=!1;if(Tg(o,s),o.stateNode===null)jj(e,o),ph(o,a,i),rh(o,a,i,s),i=!0;else if(e===null){var d=o.stateNode,g=o.memoizedProps;d.props=g;var b=d.context,en=a.contextType;typeof en=="object"&&en!==null?en=Vg(en):(en=Zf(a)?Xf:H$1.current,en=Yf(o,en));var sn=a.getDerivedStateFromProps,on=typeof sn=="function"||typeof d.getSnapshotBeforeUpdate=="function";on||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==i||b!==en)&&qh(o,d,i,en),$g=!1;var ln=o.memoizedState;d.state=ln,gh(o,i,d,s),b=o.memoizedState,g!==i||ln!==b||Wf.current||$g?(typeof sn=="function"&&(kh(o,a,sn,i),b=o.memoizedState),(g=$g||oh(o,a,g,i,ln,b,en))?(on||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(o.flags|=4194308)):(typeof d.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=i,o.memoizedState=b),d.props=i,d.state=b,d.context=en,i=g):(typeof d.componentDidMount=="function"&&(o.flags|=4194308),i=!1)}else{d=o.stateNode,bh(e,o),g=o.memoizedProps,en=o.type===o.elementType?g:Lg(o.type,g),d.props=en,on=o.pendingProps,ln=d.context,b=a.contextType,typeof b=="object"&&b!==null?b=Vg(b):(b=Zf(a)?Xf:H$1.current,b=Yf(o,b));var dn=a.getDerivedStateFromProps;(sn=typeof dn=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==on||ln!==b)&&qh(o,d,i,b),$g=!1,ln=o.memoizedState,d.state=ln,gh(o,i,d,s);var pn=o.memoizedState;g!==on||ln!==pn||Wf.current||$g?(typeof dn=="function"&&(kh(o,a,dn,i),pn=o.memoizedState),(en=$g||oh(o,a,en,i,ln,pn,b)||!1)?(sn||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,pn,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,pn,b)),typeof d.componentDidUpdate=="function"&&(o.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&ln===e.memoizedState||(o.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ln===e.memoizedState||(o.flags|=1024),o.memoizedProps=i,o.memoizedState=pn),d.props=i,d.state=pn,d.context=b,i=en):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&ln===e.memoizedState||(o.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&ln===e.memoizedState||(o.flags|=1024),i=!1)}return kj(e,o,a,i,c,s)}function kj(e,o,a,i,s,c){hj(e,o);var d=(o.flags&128)!==0;if(!i&&!d)return s&&dg(o,a,!1),$i(e,o,c);i=o.stateNode,Xi.current=o;var g=d&&typeof a.getDerivedStateFromError!="function"?null:i.render();return o.flags|=1,e!==null&&d?(o.child=Bh(o,e.child,null,c),o.child=Bh(o,null,g,c)):Yi(e,o,g,c),o.memoizedState=i.state,s&&dg(o,a,!0),o.child}function lj(e){var o=e.stateNode;o.pendingContext?ag(e,o.pendingContext,o.pendingContext!==o.context):o.context&&ag(e,o.context,!1),Ih(e,o.containerInfo)}function mj(e,o,a,i,s){return Ig(),Jg(s),o.flags|=256,Yi(e,o,a,i),o.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(e){return{baseLanes:e,cachePool:null,transitions:null}}function pj(e,o,a){var i=o.pendingProps,s=M.current,c=!1,d=(o.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(s&2)!==0),g?(c=!0,o.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),G(M,s&1),e===null)return Eg(o),e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(o.mode&1?e.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(d=i.children,e=i.fallback,c?(i=o.mode,c=o.child,d={mode:"hidden",children:d},!(i&1)&&c!==null?(c.childLanes=0,c.pendingProps=d):c=qj(d,i,0,null),e=Ah(e,i,a,null),c.return=o,e.return=o,c.sibling=e,o.child=c,o.child.memoizedState=oj(a),o.memoizedState=nj,e):rj(o,d));if(s=e.memoizedState,s!==null&&(g=s.dehydrated,g!==null))return sj(e,o,d,i,g,s,a);if(c){c=i.fallback,d=o.mode,s=e.child,g=s.sibling;var b={mode:"hidden",children:i.children};return!(d&1)&&o.child!==s?(i=o.child,i.childLanes=0,i.pendingProps=b,o.deletions=null):(i=wh(s,b),i.subtreeFlags=s.subtreeFlags&14680064),g!==null?c=wh(g,c):(c=Ah(c,d,a,null),c.flags|=2),c.return=o,i.return=o,i.sibling=c,o.child=i,i=c,c=o.child,d=e.child.memoizedState,d=d===null?oj(a):{baseLanes:d.baseLanes|a,cachePool:null,transitions:d.transitions},c.memoizedState=d,c.childLanes=e.childLanes&~a,o.memoizedState=nj,i}return c=e.child,e=c.sibling,i=wh(c,{mode:"visible",children:i.children}),!(o.mode&1)&&(i.lanes=a),i.return=o,i.sibling=null,e!==null&&(a=o.deletions,a===null?(o.deletions=[e],o.flags|=16):a.push(e)),o.child=i,o.memoizedState=null,i}function rj(e,o){return o=qj({mode:"visible",children:o},e.mode,0,null),o.return=e,e.child=o}function tj(e,o,a,i){return i!==null&&Jg(i),Bh(o,e.child,null,a),e=rj(o,o.pendingProps.children),e.flags|=2,o.memoizedState=null,e}function sj(e,o,a,i,s,c,d){if(a)return o.flags&256?(o.flags&=-257,i=Li(Error(p(422))),tj(e,o,d,i)):o.memoizedState!==null?(o.child=e.child,o.flags|=128,null):(c=i.fallback,s=o.mode,i=qj({mode:"visible",children:i.children},s,0,null),c=Ah(c,s,d,null),c.flags|=2,i.return=o,c.return=o,i.sibling=c,o.child=i,o.mode&1&&Bh(o,e.child,null,d),o.child.memoizedState=oj(d),o.memoizedState=nj,c);if(!(o.mode&1))return tj(e,o,d,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var g=i.dgst;return i=g,c=Error(p(419)),i=Li(c,i,void 0),tj(e,o,d,i)}if(g=(d&e.childLanes)!==0,Ug||g){if(i=R,i!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|d)?0:s,s!==0&&s!==c.retryLane&&(c.retryLane=s,Zg(e,s),mh(i,e,s,-1))}return uj(),i=Li(Error(p(421))),tj(e,o,d,i)}return s.data==="$?"?(o.flags|=128,o.child=e.child,o=vj.bind(null,e),s._reactRetry=o,null):(e=c.treeContext,yg=Lf(s.nextSibling),xg=o,I=!0,zg=null,e!==null&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=e.id,sg=e.overflow,qg=o),o=rj(o,i.children),o.flags|=4096,o)}function wj(e,o,a){e.lanes|=o;var i=e.alternate;i!==null&&(i.lanes|=o),Sg(e.return,o,a)}function xj(e,o,a,i,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:s}:(c.isBackwards=o,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=a,c.tailMode=s)}function yj(e,o,a){var i=o.pendingProps,s=i.revealOrder,c=i.tail;if(Yi(e,o,i.children,a),i=M.current,i&2)i=i&1|2,o.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=o.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wj(e,a,o);else if(e.tag===19)wj(e,a,o);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===o)break e;for(;e.sibling===null;){if(e.return===null||e.return===o)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(G(M,i),!(o.mode&1))o.memoizedState=null;else switch(s){case"forwards":for(a=o.child,s=null;a!==null;)e=a.alternate,e!==null&&Mh(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=o.child,o.child=null):(s=a.sibling,a.sibling=null),xj(o,!1,s,a,c);break;case"backwards":for(a=null,s=o.child,o.child=null;s!==null;){if(e=s.alternate,e!==null&&Mh(e)===null){o.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}xj(o,!0,a,null,c);break;case"together":xj(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function jj(e,o){!(o.mode&1)&&e!==null&&(e.alternate=null,o.alternate=null,o.flags|=2)}function $i(e,o,a){if(e!==null&&(o.dependencies=e.dependencies),hh|=o.lanes,!(a&o.childLanes))return null;if(e!==null&&o.child!==e.child)throw Error(p(153));if(o.child!==null){for(e=o.child,a=wh(e,e.pendingProps),o.child=a,a.return=o;e.sibling!==null;)e=e.sibling,a=a.sibling=wh(e,e.pendingProps),a.return=o;a.sibling=null}return o.child}function zj(e,o,a){switch(o.tag){case 3:lj(o),Ig();break;case 5:Kh(o);break;case 1:Zf(o.type)&&cg(o);break;case 4:Ih(o,o.stateNode.containerInfo);break;case 10:var i=o.type._context,s=o.memoizedProps.value;G(Mg,i._currentValue),i._currentValue=s;break;case 13:if(i=o.memoizedState,i!==null)return i.dehydrated!==null?(G(M,M.current&1),o.flags|=128,null):a&o.child.childLanes?pj(e,o,a):(G(M,M.current&1),e=$i(e,o,a),e!==null?e.sibling:null);G(M,M.current&1);break;case 19:if(i=(a&o.childLanes)!==0,e.flags&128){if(i)return yj(e,o,a);o.flags|=128}if(s=o.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),G(M,M.current),i)break;return null;case 22:case 23:return o.lanes=0,ej(e,o,a)}return $i(e,o,a)}var Aj,Bj,Cj,Dj;Aj=function(e,o){for(var a=o.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};Bj=function(){};Cj=function(e,o,a,i){var s=e.memoizedProps;if(s!==i){e=o.stateNode,Hh(Eh.current);var c=null;switch(a){case"input":s=Ya(e,s),i=Ya(e,i),c=[];break;case"select":s=A({},s,{value:void 0}),i=A({},i,{value:void 0}),c=[];break;case"textarea":s=gb(e,s),i=gb(e,i),c=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Bf)}ub(a,i);var d;a=null;for(en in s)if(!i.hasOwnProperty(en)&&s.hasOwnProperty(en)&&s[en]!=null)if(en==="style"){var g=s[en];for(d in g)g.hasOwnProperty(d)&&(a||(a={}),a[d]="")}else en!=="dangerouslySetInnerHTML"&&en!=="children"&&en!=="suppressContentEditableWarning"&&en!=="suppressHydrationWarning"&&en!=="autoFocus"&&(ea.hasOwnProperty(en)?c||(c=[]):(c=c||[]).push(en,null));for(en in i){var b=i[en];if(g=s!=null?s[en]:void 0,i.hasOwnProperty(en)&&b!==g&&(b!=null||g!=null))if(en==="style")if(g){for(d in g)!g.hasOwnProperty(d)||b&&b.hasOwnProperty(d)||(a||(a={}),a[d]="");for(d in b)b.hasOwnProperty(d)&&g[d]!==b[d]&&(a||(a={}),a[d]=b[d])}else a||(c||(c=[]),c.push(en,a)),a=b;else en==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,g=g?g.__html:void 0,b!=null&&g!==b&&(c=c||[]).push(en,b)):en==="children"?typeof b!="string"&&typeof b!="number"||(c=c||[]).push(en,""+b):en!=="suppressContentEditableWarning"&&en!=="suppressHydrationWarning"&&(ea.hasOwnProperty(en)?(b!=null&&en==="onScroll"&&D$1("scroll",e),c||g===b||(c=[])):(c=c||[]).push(en,b))}a&&(c=c||[]).push("style",a);var en=c;(o.updateQueue=en)&&(o.flags|=4)}};Dj=function(e,o,a,i){a!==i&&(o.flags|=4)};function Ej(e,o){if(!I)switch(e.tailMode){case"hidden":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?o||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function S(e){var o=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(o)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=a,o}function Fj(e,o,a){var i=o.pendingProps;switch(wg(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(o),null;case 1:return Zf(o.type)&&$f(),S(o),null;case 3:return i=o.stateNode,Jh(),E(Wf),E(H$1),Oh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Gg(o)?o.flags|=4:e===null||e.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,zg!==null&&(Gj(zg),zg=null))),Bj(e,o),S(o),null;case 5:Lh(o);var s=Hh(Gh.current);if(a=o.type,e!==null&&o.stateNode!=null)Cj(e,o,a,i,s),e.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!i){if(o.stateNode===null)throw Error(p(166));return S(o),null}if(e=Hh(Eh.current),Gg(o)){i=o.stateNode,a=o.type;var c=o.memoizedProps;switch(i[Of]=o,i[Pf]=c,e=(o.mode&1)!==0,a){case"dialog":D$1("cancel",i),D$1("close",i);break;case"iframe":case"object":case"embed":D$1("load",i);break;case"video":case"audio":for(s=0;s<lf.length;s++)D$1(lf[s],i);break;case"source":D$1("error",i);break;case"img":case"image":case"link":D$1("error",i),D$1("load",i);break;case"details":D$1("toggle",i);break;case"input":Za(i,c),D$1("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!c.multiple},D$1("invalid",i);break;case"textarea":hb(i,c),D$1("invalid",i)}ub(a,c),s=null;for(var d in c)if(c.hasOwnProperty(d)){var g=c[d];d==="children"?typeof g=="string"?i.textContent!==g&&(c.suppressHydrationWarning!==!0&&Af(i.textContent,g,e),s=["children",g]):typeof g=="number"&&i.textContent!==""+g&&(c.suppressHydrationWarning!==!0&&Af(i.textContent,g,e),s=["children",""+g]):ea.hasOwnProperty(d)&&g!=null&&d==="onScroll"&&D$1("scroll",i)}switch(a){case"input":Va(i),db(i,c,!0);break;case"textarea":Va(i),jb(i);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(i.onclick=Bf)}i=s,o.updateQueue=i,i!==null&&(o.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kb(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=d.createElement(a,{is:i.is}):(e=d.createElement(a),a==="select"&&(d=e,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):e=d.createElementNS(e,a),e[Of]=o,e[Pf]=i,Aj(e,o,!1,!1),o.stateNode=e;e:{switch(d=vb(a,i),a){case"dialog":D$1("cancel",e),D$1("close",e),s=i;break;case"iframe":case"object":case"embed":D$1("load",e),s=i;break;case"video":case"audio":for(s=0;s<lf.length;s++)D$1(lf[s],e);s=i;break;case"source":D$1("error",e),s=i;break;case"img":case"image":case"link":D$1("error",e),D$1("load",e),s=i;break;case"details":D$1("toggle",e),s=i;break;case"input":Za(e,i),s=Ya(e,i),D$1("invalid",e);break;case"option":s=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},s=A({},i,{value:void 0}),D$1("invalid",e);break;case"textarea":hb(e,i),s=gb(e,i),D$1("invalid",e);break;default:s=i}ub(a,s),g=s;for(c in g)if(g.hasOwnProperty(c)){var b=g[c];c==="style"?sb(e,b):c==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&nb(e,b)):c==="children"?typeof b=="string"?(a!=="textarea"||b!=="")&&ob(e,b):typeof b=="number"&&ob(e,""+b):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ea.hasOwnProperty(c)?b!=null&&c==="onScroll"&&D$1("scroll",e):b!=null&&ta(e,c,b,d))}switch(a){case"input":Va(e),db(e,i,!1);break;case"textarea":Va(e),jb(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Sa(i.value));break;case"select":e.multiple=!!i.multiple,c=i.value,c!=null?fb(e,!!i.multiple,c,!1):i.defaultValue!=null&&fb(e,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Bf)}switch(a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return S(o),null;case 6:if(e&&o.stateNode!=null)Dj(e,o,e.memoizedProps,i);else{if(typeof i!="string"&&o.stateNode===null)throw Error(p(166));if(a=Hh(Gh.current),Hh(Eh.current),Gg(o)){if(i=o.stateNode,a=o.memoizedProps,i[Of]=o,(c=i.nodeValue!==a)&&(e=xg,e!==null))switch(e.tag){case 3:Af(i.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Af(i.nodeValue,a,(e.mode&1)!==0)}c&&(o.flags|=4)}else i=(a.nodeType===9?a:a.ownerDocument).createTextNode(i),i[Of]=o,o.stateNode=i}return S(o),null;case 13:if(E(M),i=o.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(I&&yg!==null&&o.mode&1&&!(o.flags&128))Hg(),Ig(),o.flags|=98560,c=!1;else if(c=Gg(o),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(p(318));if(c=o.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(p(317));c[Of]=o}else Ig(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;S(o),c=!1}else zg!==null&&(Gj(zg),zg=null),c=!0;if(!c)return o.flags&65536?o:null}return o.flags&128?(o.lanes=a,o):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(o.child.flags|=8192,o.mode&1&&(e===null||M.current&1?T===0&&(T=3):uj())),o.updateQueue!==null&&(o.flags|=4),S(o),null);case 4:return Jh(),Bj(e,o),e===null&&sf(o.stateNode.containerInfo),S(o),null;case 10:return Rg(o.type._context),S(o),null;case 17:return Zf(o.type)&&$f(),S(o),null;case 19:if(E(M),c=o.memoizedState,c===null)return S(o),null;if(i=(o.flags&128)!==0,d=c.rendering,d===null)if(i)Ej(c,!1);else{if(T!==0||e!==null&&e.flags&128)for(e=o.child;e!==null;){if(d=Mh(e),d!==null){for(o.flags|=128,Ej(c,!1),i=d.updateQueue,i!==null&&(o.updateQueue=i,o.flags|=4),o.subtreeFlags=0,i=a,a=o.child;a!==null;)c=a,e=i,c.flags&=14680066,d=c.alternate,d===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=d.childLanes,c.lanes=d.lanes,c.child=d.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=d.memoizedProps,c.memoizedState=d.memoizedState,c.updateQueue=d.updateQueue,c.type=d.type,e=d.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return G(M,M.current&1|2),o.child}e=e.sibling}c.tail!==null&&B()>Hj&&(o.flags|=128,i=!0,Ej(c,!1),o.lanes=4194304)}else{if(!i)if(e=Mh(d),e!==null){if(o.flags|=128,i=!0,a=e.updateQueue,a!==null&&(o.updateQueue=a,o.flags|=4),Ej(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!I)return S(o),null}else 2*B()-c.renderingStartTime>Hj&&a!==1073741824&&(o.flags|=128,i=!0,Ej(c,!1),o.lanes=4194304);c.isBackwards?(d.sibling=o.child,o.child=d):(a=c.last,a!==null?a.sibling=d:o.child=d,c.last=d)}return c.tail!==null?(o=c.tail,c.rendering=o,c.tail=o.sibling,c.renderingStartTime=B(),o.sibling=null,a=M.current,G(M,i?a&1|2:a&1),o):(S(o),null);case 22:case 23:return Ij(),i=o.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(o.flags|=8192),i&&o.mode&1?gj&1073741824&&(S(o),o.subtreeFlags&6&&(o.flags|=8192)):S(o),null;case 24:return null;case 25:return null}throw Error(p(156,o.tag))}function Jj(e,o){switch(wg(o),o.tag){case 1:return Zf(o.type)&&$f(),e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 3:return Jh(),E(Wf),E(H$1),Oh(),e=o.flags,e&65536&&!(e&128)?(o.flags=e&-65537|128,o):null;case 5:return Lh(o),null;case 13:if(E(M),e=o.memoizedState,e!==null&&e.dehydrated!==null){if(o.alternate===null)throw Error(p(340));Ig()}return e=o.flags,e&65536?(o.flags=e&-65537|128,o):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(o.type._context),null;case 22:case 23:return Ij(),null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj=typeof WeakSet=="function"?WeakSet:Set,V=null;function Mj(e,o){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(i){W(e,o,i)}else a.current=null}function Nj(e,o,a){try{a()}catch(i){W(e,o,i)}}var Oj=!1;function Pj(e,o){if(Cf=dd,e=Me$1(),Ne(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var s=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var d=0,g=-1,b=-1,en=0,sn=0,on=e,ln=null;n:for(;;){for(var dn;on!==a||s!==0&&on.nodeType!==3||(g=d+s),on!==c||i!==0&&on.nodeType!==3||(b=d+i),on.nodeType===3&&(d+=on.nodeValue.length),(dn=on.firstChild)!==null;)ln=on,on=dn;for(;;){if(on===e)break n;if(ln===a&&++en===s&&(g=d),ln===c&&++sn===i&&(b=d),(dn=on.nextSibling)!==null)break;on=ln,ln=on.parentNode}on=dn}a=g===-1||b===-1?null:{start:g,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Df={focusedElem:e,selectionRange:a},dd=!1,V=o;V!==null;)if(o=V,e=o.child,(o.subtreeFlags&1028)!==0&&e!==null)e.return=o,V=e;else for(;V!==null;){o=V;try{var pn=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(pn!==null){var un=pn.memoizedProps,gn=pn.memoizedState,tn=o.stateNode,j=tn.getSnapshotBeforeUpdate(o.elementType===o.type?un:Lg(o.type,un),gn);tn.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var _e=o.stateNode.containerInfo;_e.nodeType===1?_e.textContent="":_e.nodeType===9&&_e.documentElement&&_e.removeChild(_e.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(nn){W(o,o.return,nn)}if(e=o.sibling,e!==null){e.return=o.return,V=e;break}V=o.return}return pn=Oj,Oj=!1,pn}function Qj(e,o,a){var i=o.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&e)===e){var c=s.destroy;s.destroy=void 0,c!==void 0&&Nj(o,a,c)}s=s.next}while(s!==i)}}function Rj(e,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var i=a.create;a.destroy=i()}a=a.next}while(a!==o)}}function Sj(e){var o=e.ref;if(o!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof o=="function"?o(e):o.current=e}}function Tj(e){var o=e.alternate;o!==null&&(e.alternate=null,Tj(o)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(o=e.stateNode,o!==null&&(delete o[Of],delete o[Pf],delete o[of],delete o[Qf],delete o[Rf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uj(e){return e.tag===5||e.tag===3||e.tag===4}function Vj(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uj(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wj(e,o,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,o?a.nodeType===8?a.parentNode.insertBefore(e,o):a.insertBefore(e,o):(a.nodeType===8?(o=a.parentNode,o.insertBefore(e,a)):(o=a,o.appendChild(e)),a=a._reactRootContainer,a!=null||o.onclick!==null||(o.onclick=Bf));else if(i!==4&&(e=e.child,e!==null))for(Wj(e,o,a),e=e.sibling;e!==null;)Wj(e,o,a),e=e.sibling}function Xj(e,o,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,o?a.insertBefore(e,o):a.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Xj(e,o,a),e=e.sibling;e!==null;)Xj(e,o,a),e=e.sibling}var X=null,Yj=!1;function Zj(e,o,a){for(a=a.child;a!==null;)ak(e,o,a),a=a.sibling}function ak(e,o,a){if(lc&&typeof lc.onCommitFiberUnmount=="function")try{lc.onCommitFiberUnmount(kc,a)}catch{}switch(a.tag){case 5:U||Mj(a,o);case 6:var i=X,s=Yj;X=null,Zj(e,o,a),X=i,Yj=s,X!==null&&(Yj?(e=X,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):X.removeChild(a.stateNode));break;case 18:X!==null&&(Yj?(e=X,a=a.stateNode,e.nodeType===8?Kf(e.parentNode,a):e.nodeType===1&&Kf(e,a),bd(e)):Kf(X,a.stateNode));break;case 4:i=X,s=Yj,X=a.stateNode.containerInfo,Yj=!0,Zj(e,o,a),X=i,Yj=s;break;case 0:case 11:case 14:case 15:if(!U&&(i=a.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var c=s,d=c.destroy;c=c.tag,d!==void 0&&(c&2||c&4)&&Nj(a,o,d),s=s.next}while(s!==i)}Zj(e,o,a);break;case 1:if(!U&&(Mj(a,o),i=a.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=a.memoizedProps,i.state=a.memoizedState,i.componentWillUnmount()}catch(g){W(a,o,g)}Zj(e,o,a);break;case 21:Zj(e,o,a);break;case 22:a.mode&1?(U=(i=U)||a.memoizedState!==null,Zj(e,o,a),U=i):Zj(e,o,a);break;default:Zj(e,o,a)}}function bk(e){var o=e.updateQueue;if(o!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Lj),o.forEach(function(i){var s=ck.bind(null,e,i);a.has(i)||(a.add(i),i.then(s,s))})}}function dk(e,o){var a=o.deletions;if(a!==null)for(var i=0;i<a.length;i++){var s=a[i];try{var c=e,d=o,g=d;e:for(;g!==null;){switch(g.tag){case 5:X=g.stateNode,Yj=!1;break e;case 3:X=g.stateNode.containerInfo,Yj=!0;break e;case 4:X=g.stateNode.containerInfo,Yj=!0;break e}g=g.return}if(X===null)throw Error(p(160));ak(c,d,s),X=null,Yj=!1;var b=s.alternate;b!==null&&(b.return=null),s.return=null}catch(en){W(s,o,en)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)ek(o,e),o=o.sibling}function ek(e,o){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dk(o,e),fk(e),i&4){try{Qj(3,e,e.return),Rj(3,e)}catch(un){W(e,e.return,un)}try{Qj(5,e,e.return)}catch(un){W(e,e.return,un)}}break;case 1:dk(o,e),fk(e),i&512&&a!==null&&Mj(a,a.return);break;case 5:if(dk(o,e),fk(e),i&512&&a!==null&&Mj(a,a.return),e.flags&32){var s=e.stateNode;try{ob(s,"")}catch(un){W(e,e.return,un)}}if(i&4&&(s=e.stateNode,s!=null)){var c=e.memoizedProps,d=a!==null?a.memoizedProps:c,g=e.type,b=e.updateQueue;if(e.updateQueue=null,b!==null)try{g==="input"&&c.type==="radio"&&c.name!=null&&ab(s,c),vb(g,d);var en=vb(g,c);for(d=0;d<b.length;d+=2){var sn=b[d],on=b[d+1];sn==="style"?sb(s,on):sn==="dangerouslySetInnerHTML"?nb(s,on):sn==="children"?ob(s,on):ta(s,sn,on,en)}switch(g){case"input":bb(s,c);break;case"textarea":ib(s,c);break;case"select":var ln=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!c.multiple;var dn=c.value;dn!=null?fb(s,!!c.multiple,dn,!1):ln!==!!c.multiple&&(c.defaultValue!=null?fb(s,!!c.multiple,c.defaultValue,!0):fb(s,!!c.multiple,c.multiple?[]:"",!1))}s[Pf]=c}catch(un){W(e,e.return,un)}}break;case 6:if(dk(o,e),fk(e),i&4){if(e.stateNode===null)throw Error(p(162));s=e.stateNode,c=e.memoizedProps;try{s.nodeValue=c}catch(un){W(e,e.return,un)}}break;case 3:if(dk(o,e),fk(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{bd(o.containerInfo)}catch(un){W(e,e.return,un)}break;case 4:dk(o,e),fk(e);break;case 13:dk(o,e),fk(e),s=e.child,s.flags&8192&&(c=s.memoizedState!==null,s.stateNode.isHidden=c,!c||s.alternate!==null&&s.alternate.memoizedState!==null||(gk=B())),i&4&&bk(e);break;case 22:if(sn=a!==null&&a.memoizedState!==null,e.mode&1?(U=(en=U)||sn,dk(o,e),U=en):dk(o,e),fk(e),i&8192){if(en=e.memoizedState!==null,(e.stateNode.isHidden=en)&&!sn&&e.mode&1)for(V=e,sn=e.child;sn!==null;){for(on=V=sn;V!==null;){switch(ln=V,dn=ln.child,ln.tag){case 0:case 11:case 14:case 15:Qj(4,ln,ln.return);break;case 1:Mj(ln,ln.return);var pn=ln.stateNode;if(typeof pn.componentWillUnmount=="function"){i=ln,a=ln.return;try{o=i,pn.props=o.memoizedProps,pn.state=o.memoizedState,pn.componentWillUnmount()}catch(un){W(i,a,un)}}break;case 5:Mj(ln,ln.return);break;case 22:if(ln.memoizedState!==null){hk(on);continue}}dn!==null?(dn.return=ln,V=dn):hk(on)}sn=sn.sibling}e:for(sn=null,on=e;;){if(on.tag===5){if(sn===null){sn=on;try{s=on.stateNode,en?(c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(g=on.stateNode,b=on.memoizedProps.style,d=b!=null&&b.hasOwnProperty("display")?b.display:null,g.style.display=rb("display",d))}catch(un){W(e,e.return,un)}}}else if(on.tag===6){if(sn===null)try{on.stateNode.nodeValue=en?"":on.memoizedProps}catch(un){W(e,e.return,un)}}else if((on.tag!==22&&on.tag!==23||on.memoizedState===null||on===e)&&on.child!==null){on.child.return=on,on=on.child;continue}if(on===e)break e;for(;on.sibling===null;){if(on.return===null||on.return===e)break e;sn===on&&(sn=null),on=on.return}sn===on&&(sn=null),on.sibling.return=on.return,on=on.sibling}}break;case 19:dk(o,e),fk(e),i&4&&bk(e);break;case 21:break;default:dk(o,e),fk(e)}}function fk(e){var o=e.flags;if(o&2){try{e:{for(var a=e.return;a!==null;){if(Uj(a)){var i=a;break e}a=a.return}throw Error(p(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(ob(s,""),i.flags&=-33);var c=Vj(e);Xj(e,c,s);break;case 3:case 4:var d=i.stateNode.containerInfo,g=Vj(e);Wj(e,g,d);break;default:throw Error(p(161))}}catch(b){W(e,e.return,b)}e.flags&=-3}o&4096&&(e.flags&=-4097)}function ik(e,o,a){V=e,jk(e)}function jk(e,o,a){for(var i=(e.mode&1)!==0;V!==null;){var s=V,c=s.child;if(s.tag===22&&i){var d=s.memoizedState!==null||Kj;if(!d){var g=s.alternate,b=g!==null&&g.memoizedState!==null||U;g=Kj;var en=U;if(Kj=d,(U=b)&&!en)for(V=s;V!==null;)d=V,b=d.child,d.tag===22&&d.memoizedState!==null?kk(s):b!==null?(b.return=d,V=b):kk(s);for(;c!==null;)V=c,jk(c),c=c.sibling;V=s,Kj=g,U=en}lk(e)}else s.subtreeFlags&8772&&c!==null?(c.return=s,V=c):lk(e)}}function lk(e){for(;V!==null;){var o=V;if(o.flags&8772){var a=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:U||Rj(5,o);break;case 1:var i=o.stateNode;if(o.flags&4&&!U)if(a===null)i.componentDidMount();else{var s=o.elementType===o.type?a.memoizedProps:Lg(o.type,a.memoizedProps);i.componentDidUpdate(s,a.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var c=o.updateQueue;c!==null&&ih(o,c,i);break;case 3:var d=o.updateQueue;if(d!==null){if(a=null,o.child!==null)switch(o.child.tag){case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}ih(o,d,a)}break;case 5:var g=o.stateNode;if(a===null&&o.flags&4){a=g;var b=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&a.focus();break;case"img":b.src&&(a.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var en=o.alternate;if(en!==null){var sn=en.memoizedState;if(sn!==null){var on=sn.dehydrated;on!==null&&bd(on)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}U||o.flags&512&&Sj(o)}catch(ln){W(o,o.return,ln)}}if(o===e){V=null;break}if(a=o.sibling,a!==null){a.return=o.return,V=a;break}V=o.return}}function hk(e){for(;V!==null;){var o=V;if(o===e){V=null;break}var a=o.sibling;if(a!==null){a.return=o.return,V=a;break}V=o.return}}function kk(e){for(;V!==null;){var o=V;try{switch(o.tag){case 0:case 11:case 15:var a=o.return;try{Rj(4,o)}catch(b){W(o,a,b)}break;case 1:var i=o.stateNode;if(typeof i.componentDidMount=="function"){var s=o.return;try{i.componentDidMount()}catch(b){W(o,s,b)}}var c=o.return;try{Sj(o)}catch(b){W(o,c,b)}break;case 5:var d=o.return;try{Sj(o)}catch(b){W(o,d,b)}}}catch(b){W(o,o.return,b)}if(o===e){V=null;break}var g=o.sibling;if(g!==null){g.return=o.return,V=g;break}V=o.return}}var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y$1=null,Z$1=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=1/0,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return K&6?B():Bk!==-1?Bk:Bk=B()}function lh(e){return e.mode&1?K&2&&Z$1!==0?Z$1&-Z$1:Kg.transition!==null?(Ck===0&&(Ck=yc()),Ck):(e=C,e!==0||(e=window.event,e=e===void 0?16:jd(e.type)),e):1}function mh(e,o,a,i){if(50<zk)throw zk=0,Ak=null,Error(p(185));Ac(e,a,i),(!(K&2)||e!==R)&&(e===R&&(!(K&2)&&(rk|=a),T===4&&Dk(e,Z$1)),Ek(e,i),a===1&&K===0&&!(o.mode&1)&&(Hj=B()+500,fg&&jg()))}function Ek(e,o){var a=e.callbackNode;wc(e,o);var i=uc(e,e===R?Z$1:0);if(i===0)a!==null&&bc(a),e.callbackNode=null,e.callbackPriority=0;else if(o=i&-i,e.callbackPriority!==o){if(a!=null&&bc(a),o===1)e.tag===0?ig(Fk.bind(null,e)):hg(Fk.bind(null,e)),Jf(function(){!(K&6)&&jg()}),a=null;else{switch(Dc(i)){case 1:a=fc;break;case 4:a=gc;break;case 16:a=hc;break;case 536870912:a=jc;break;default:a=hc}a=Gk(a,Hk.bind(null,e))}e.callbackPriority=o,e.callbackNode=a}}function Hk(e,o){if(Bk=-1,Ck=0,K&6)throw Error(p(327));var a=e.callbackNode;if(Ik()&&e.callbackNode!==a)return null;var i=uc(e,e===R?Z$1:0);if(i===0)return null;if(i&30||i&e.expiredLanes||o)o=Jk(e,i);else{o=i;var s=K;K|=2;var c=Kk();(R!==e||Z$1!==o)&&(vk=null,Hj=B()+500,Lk(e,o));do try{Mk();break}catch(g){Nk(e,g)}while(!0);Qg(),nk.current=c,K=s,Y$1!==null?o=0:(R=null,Z$1=0,o=T)}if(o!==0){if(o===2&&(s=xc(e),s!==0&&(i=s,o=Ok(e,s))),o===1)throw a=qk,Lk(e,0),Dk(e,i),Ek(e,B()),a;if(o===6)Dk(e,i);else{if(s=e.current.alternate,!(i&30)&&!Pk(s)&&(o=Jk(e,i),o===2&&(c=xc(e),c!==0&&(i=c,o=Ok(e,c))),o===1))throw a=qk,Lk(e,0),Dk(e,i),Ek(e,B()),a;switch(e.finishedWork=s,e.finishedLanes=i,o){case 0:case 1:throw Error(p(345));case 2:Qk(e,uk,vk);break;case 3:if(Dk(e,i),(i&130023424)===i&&(o=gk+500-B(),10<o)){if(uc(e,0)!==0)break;if(s=e.suspendedLanes,(s&i)!==i){L(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ff(Qk.bind(null,e,uk,vk),o);break}Qk(e,uk,vk);break;case 4:if(Dk(e,i),(i&4194240)===i)break;for(o=e.eventTimes,s=-1;0<i;){var d=31-oc(i);c=1<<d,d=o[d],d>s&&(s=d),i&=~c}if(i=s,i=B()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*mk(i/1960))-i,10<i){e.timeoutHandle=Ff(Qk.bind(null,e,uk,vk),i);break}Qk(e,uk,vk);break;case 5:Qk(e,uk,vk);break;default:throw Error(p(329))}}}return Ek(e,B()),e.callbackNode===a?Hk.bind(null,e):null}function Ok(e,o){var a=tk;return e.current.memoizedState.isDehydrated&&(Lk(e,o).flags|=256),e=Jk(e,o),e!==2&&(o=uk,uk=a,o!==null&&Gj(o)),e}function Gj(e){uk===null?uk=e:uk.push.apply(uk,e)}function Pk(e){for(var o=e;;){if(o.flags&16384){var a=o.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var i=0;i<a.length;i++){var s=a[i],c=s.getSnapshot;s=s.value;try{if(!He$1(c(),s))return!1}catch{return!1}}}if(a=o.child,o.subtreeFlags&16384&&a!==null)a.return=o,o=a;else{if(o===e)break;for(;o.sibling===null;){if(o.return===null||o.return===e)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Dk(e,o){for(o&=~sk,o&=~rk,e.suspendedLanes|=o,e.pingedLanes&=~o,e=e.expirationTimes;0<o;){var a=31-oc(o),i=1<<a;e[a]=-1,o&=~i}}function Fk(e){if(K&6)throw Error(p(327));Ik();var o=uc(e,0);if(!(o&1))return Ek(e,B()),null;var a=Jk(e,o);if(e.tag!==0&&a===2){var i=xc(e);i!==0&&(o=i,a=Ok(e,i))}if(a===1)throw a=qk,Lk(e,0),Dk(e,o),Ek(e,B()),a;if(a===6)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=o,Qk(e,uk,vk),Ek(e,B()),null}function Rk(e,o){var a=K;K|=1;try{return e(o)}finally{K=a,K===0&&(Hj=B()+500,fg&&jg())}}function Sk(e){xk!==null&&xk.tag===0&&!(K&6)&&Ik();var o=K;K|=1;var a=pk.transition,i=C;try{if(pk.transition=null,C=1,e)return e()}finally{C=i,pk.transition=a,K=o,!(K&6)&&jg()}}function Ij(){gj=fj.current,E(fj)}function Lk(e,o){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,Gf(a)),Y$1!==null)for(a=Y$1.return;a!==null;){var i=a;switch(wg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$f();break;case 3:Jh(),E(Wf),E(H$1),Oh();break;case 5:Lh(i);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(i.type._context);break;case 22:case 23:Ij()}a=a.return}if(R=e,Y$1=e=wh(e.current,null),Z$1=gj=o,T=0,qk=null,sk=rk=hh=0,uk=tk=null,Wg!==null){for(o=0;o<Wg.length;o++)if(a=Wg[o],i=a.interleaved,i!==null){a.interleaved=null;var s=i.next,c=a.pending;if(c!==null){var d=c.next;c.next=s,i.next=d}a.pending=i}Wg=null}return e}function Nk(e,o){do{var a=Y$1;try{if(Qg(),Ph.current=ai,Sh){for(var i=N.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}Sh=!1}if(Rh=0,P=O=N=null,Th=!1,Uh=0,ok.current=null,a===null||a.return===null){T=1,qk=o,Y$1=null;break}e:{var c=e,d=a.return,g=a,b=o;if(o=Z$1,g.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var en=b,sn=g,on=sn.tag;if(!(sn.mode&1)&&(on===0||on===11||on===15)){var ln=sn.alternate;ln?(sn.updateQueue=ln.updateQueue,sn.memoizedState=ln.memoizedState,sn.lanes=ln.lanes):(sn.updateQueue=null,sn.memoizedState=null)}var dn=Vi(d);if(dn!==null){dn.flags&=-257,Wi(dn,d,g,c,o),dn.mode&1&&Ti(c,en,o),o=dn,b=en;var pn=o.updateQueue;if(pn===null){var un=new Set;un.add(b),o.updateQueue=un}else pn.add(b);break e}else{if(!(o&1)){Ti(c,en,o),uj();break e}b=Error(p(426))}}else if(I&&g.mode&1){var gn=Vi(d);if(gn!==null){!(gn.flags&65536)&&(gn.flags|=256),Wi(gn,d,g,c,o),Jg(Ki(b,g));break e}}c=b=Ki(b,g),T!==4&&(T=2),tk===null?tk=[c]:tk.push(c),c=d;do{switch(c.tag){case 3:c.flags|=65536,o&=-o,c.lanes|=o;var tn=Oi(c,b,o);fh(c,tn);break e;case 1:g=b;var j=c.type,_e=c.stateNode;if(!(c.flags&128)&&(typeof j.getDerivedStateFromError=="function"||_e!==null&&typeof _e.componentDidCatch=="function"&&(Si===null||!Si.has(_e)))){c.flags|=65536,o&=-o,c.lanes|=o;var nn=Ri(c,g,o);fh(c,nn);break e}}c=c.return}while(c!==null)}Tk(a)}catch(an){o=an,Y$1===a&&a!==null&&(Y$1=a=a.return);continue}break}while(!0)}function Kk(){var e=nk.current;return nk.current=ai,e===null?ai:e}function uj(){(T===0||T===3||T===2)&&(T=4),R===null||!(hh&268435455)&&!(rk&268435455)||Dk(R,Z$1)}function Jk(e,o){var a=K;K|=2;var i=Kk();(R!==e||Z$1!==o)&&(vk=null,Lk(e,o));do try{Uk();break}catch(s){Nk(e,s)}while(!0);if(Qg(),K=a,nk.current=i,Y$1!==null)throw Error(p(261));return R=null,Z$1=0,T}function Uk(){for(;Y$1!==null;)Vk(Y$1)}function Mk(){for(;Y$1!==null&&!cc();)Vk(Y$1)}function Vk(e){var o=Wk(e.alternate,e,gj);e.memoizedProps=e.pendingProps,o===null?Tk(e):Y$1=o,ok.current=null}function Tk(e){var o=e;do{var a=o.alternate;if(e=o.return,o.flags&32768){if(a=Jj(a,o),a!==null){a.flags&=32767,Y$1=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{T=6,Y$1=null;return}}else if(a=Fj(a,o,gj),a!==null){Y$1=a;return}if(o=o.sibling,o!==null){Y$1=o;return}Y$1=o=e}while(o!==null);T===0&&(T=5)}function Qk(e,o,a){var i=C,s=pk.transition;try{pk.transition=null,C=1,Xk(e,o,a,i)}finally{pk.transition=s,C=i}return null}function Xk(e,o,a,i){do Ik();while(xk!==null);if(K&6)throw Error(p(327));a=e.finishedWork;var s=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var c=a.lanes|a.childLanes;if(Bc(e,c),e===R&&(Y$1=R=null,Z$1=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||wk||(wk=!0,Gk(hc,function(){return Ik(),null})),c=(a.flags&15990)!==0,a.subtreeFlags&15990||c){c=pk.transition,pk.transition=null;var d=C;C=1;var g=K;K|=4,ok.current=null,Pj(e,a),ek(a,e),Oe$1(Df),dd=!!Cf,Df=Cf=null,e.current=a,ik(a),dc(),K=g,C=d,pk.transition=c}else e.current=a;if(wk&&(wk=!1,xk=e,yk=s),c=e.pendingLanes,c===0&&(Si=null),mc(a.stateNode),Ek(e,B()),o!==null)for(i=e.onRecoverableError,a=0;a<o.length;a++)s=o[a],i(s.value,{componentStack:s.stack,digest:s.digest});if(Pi)throw Pi=!1,e=Qi,Qi=null,e;return yk&1&&e.tag!==0&&Ik(),c=e.pendingLanes,c&1?e===Ak?zk++:(zk=0,Ak=e):zk=0,jg(),null}function Ik(){if(xk!==null){var e=Dc(yk),o=pk.transition,a=C;try{if(pk.transition=null,C=16>e?16:e,xk===null)var i=!1;else{if(e=xk,xk=null,yk=0,K&6)throw Error(p(331));var s=K;for(K|=4,V=e.current;V!==null;){var c=V,d=c.child;if(V.flags&16){var g=c.deletions;if(g!==null){for(var b=0;b<g.length;b++){var en=g[b];for(V=en;V!==null;){var sn=V;switch(sn.tag){case 0:case 11:case 15:Qj(8,sn,c)}var on=sn.child;if(on!==null)on.return=sn,V=on;else for(;V!==null;){sn=V;var ln=sn.sibling,dn=sn.return;if(Tj(sn),sn===en){V=null;break}if(ln!==null){ln.return=dn,V=ln;break}V=dn}}}var pn=c.alternate;if(pn!==null){var un=pn.child;if(un!==null){pn.child=null;do{var gn=un.sibling;un.sibling=null,un=gn}while(un!==null)}}V=c}}if(c.subtreeFlags&2064&&d!==null)d.return=c,V=d;else e:for(;V!==null;){if(c=V,c.flags&2048)switch(c.tag){case 0:case 11:case 15:Qj(9,c,c.return)}var tn=c.sibling;if(tn!==null){tn.return=c.return,V=tn;break e}V=c.return}}var j=e.current;for(V=j;V!==null;){d=V;var _e=d.child;if(d.subtreeFlags&2064&&_e!==null)_e.return=d,V=_e;else e:for(d=j;V!==null;){if(g=V,g.flags&2048)try{switch(g.tag){case 0:case 11:case 15:Rj(9,g)}}catch(an){W(g,g.return,an)}if(g===d){V=null;break e}var nn=g.sibling;if(nn!==null){nn.return=g.return,V=nn;break e}V=g.return}}if(K=s,jg(),lc&&typeof lc.onPostCommitFiberRoot=="function")try{lc.onPostCommitFiberRoot(kc,e)}catch{}i=!0}return i}finally{C=a,pk.transition=o}}return!1}function Yk(e,o,a){o=Ki(a,o),o=Oi(e,o,1),e=dh(e,o,1),o=L(),e!==null&&(Ac(e,1,o),Ek(e,o))}function W(e,o,a){if(e.tag===3)Yk(e,e,a);else for(;o!==null;){if(o.tag===3){Yk(o,e,a);break}else if(o.tag===1){var i=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Si===null||!Si.has(i))){e=Ki(a,e),e=Ri(o,e,1),o=dh(o,e,1),e=L(),o!==null&&(Ac(o,1,e),Ek(o,e));break}}o=o.return}}function Ui(e,o,a){var i=e.pingCache;i!==null&&i.delete(o),o=L(),e.pingedLanes|=e.suspendedLanes&a,R===e&&(Z$1&a)===a&&(T===4||T===3&&(Z$1&130023424)===Z$1&&500>B()-gk?Lk(e,0):sk|=a),Ek(e,o)}function Zk(e,o){o===0&&(e.mode&1?(o=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):o=1);var a=L();e=Zg(e,o),e!==null&&(Ac(e,o,a),Ek(e,a))}function vj(e){var o=e.memoizedState,a=0;o!==null&&(a=o.retryLane),Zk(e,a)}function ck(e,o){var a=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(p(314))}i!==null&&i.delete(o),Zk(e,a)}var Wk;Wk=function(e,o,a){if(e!==null)if(e.memoizedProps!==o.pendingProps||Wf.current)Ug=!0;else{if(!(e.lanes&a)&&!(o.flags&128))return Ug=!1,zj(e,o,a);Ug=!!(e.flags&131072)}else Ug=!1,I&&o.flags&1048576&&ug(o,ng,o.index);switch(o.lanes=0,o.tag){case 2:var i=o.type;jj(e,o),e=o.pendingProps;var s=Yf(o,H$1.current);Tg(o,a),s=Xh(null,o,i,e,s,a);var c=bi();return o.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Zf(i)?(c=!0,cg(o)):c=!1,o.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ah(o),s.updater=nh,o.stateNode=s,s._reactInternals=o,rh(o,i,e,a),o=kj(null,o,i,!0,c,a)):(o.tag=0,I&&c&&vg(o),Yi(null,o,s,a),o=o.child),o;case 16:i=o.elementType;e:{switch(jj(e,o),e=o.pendingProps,s=i._init,i=s(i._payload),o.type=i,s=o.tag=$k(i),e=Lg(i,e),s){case 0:o=dj(null,o,i,e,a);break e;case 1:o=ij(null,o,i,e,a);break e;case 11:o=Zi(null,o,i,e,a);break e;case 14:o=aj(null,o,i,Lg(i.type,e),a);break e}throw Error(p(306,i,""))}return o;case 0:return i=o.type,s=o.pendingProps,s=o.elementType===i?s:Lg(i,s),dj(e,o,i,s,a);case 1:return i=o.type,s=o.pendingProps,s=o.elementType===i?s:Lg(i,s),ij(e,o,i,s,a);case 3:e:{if(lj(o),e===null)throw Error(p(387));i=o.pendingProps,c=o.memoizedState,s=c.element,bh(e,o),gh(o,i,null,a);var d=o.memoizedState;if(i=d.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},o.updateQueue.baseState=c,o.memoizedState=c,o.flags&256){s=Ki(Error(p(423)),o),o=mj(e,o,i,a,s);break e}else if(i!==s){s=Ki(Error(p(424)),o),o=mj(e,o,i,a,s);break e}else for(yg=Lf(o.stateNode.containerInfo.firstChild),xg=o,I=!0,zg=null,a=Ch(o,null,i,a),o.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ig(),i===s){o=$i(e,o,a);break e}Yi(e,o,i,a)}o=o.child}return o;case 5:return Kh(o),e===null&&Eg(o),i=o.type,s=o.pendingProps,c=e!==null?e.memoizedProps:null,d=s.children,Ef(i,s)?d=null:c!==null&&Ef(i,c)&&(o.flags|=32),hj(e,o),Yi(e,o,d,a),o.child;case 6:return e===null&&Eg(o),null;case 13:return pj(e,o,a);case 4:return Ih(o,o.stateNode.containerInfo),i=o.pendingProps,e===null?o.child=Bh(o,null,i,a):Yi(e,o,i,a),o.child;case 11:return i=o.type,s=o.pendingProps,s=o.elementType===i?s:Lg(i,s),Zi(e,o,i,s,a);case 7:return Yi(e,o,o.pendingProps,a),o.child;case 8:return Yi(e,o,o.pendingProps.children,a),o.child;case 12:return Yi(e,o,o.pendingProps.children,a),o.child;case 10:e:{if(i=o.type._context,s=o.pendingProps,c=o.memoizedProps,d=s.value,G(Mg,i._currentValue),i._currentValue=d,c!==null)if(He$1(c.value,d)){if(c.children===s.children&&!Wf.current){o=$i(e,o,a);break e}}else for(c=o.child,c!==null&&(c.return=o);c!==null;){var g=c.dependencies;if(g!==null){d=c.child;for(var b=g.firstContext;b!==null;){if(b.context===i){if(c.tag===1){b=ch(-1,a&-a),b.tag=2;var en=c.updateQueue;if(en!==null){en=en.shared;var sn=en.pending;sn===null?b.next=b:(b.next=sn.next,sn.next=b),en.pending=b}}c.lanes|=a,b=c.alternate,b!==null&&(b.lanes|=a),Sg(c.return,a,o),g.lanes|=a;break}b=b.next}}else if(c.tag===10)d=c.type===o.type?null:c.child;else if(c.tag===18){if(d=c.return,d===null)throw Error(p(341));d.lanes|=a,g=d.alternate,g!==null&&(g.lanes|=a),Sg(d,a,o),d=c.sibling}else d=c.child;if(d!==null)d.return=c;else for(d=c;d!==null;){if(d===o){d=null;break}if(c=d.sibling,c!==null){c.return=d.return,d=c;break}d=d.return}c=d}Yi(e,o,s.children,a),o=o.child}return o;case 9:return s=o.type,i=o.pendingProps.children,Tg(o,a),s=Vg(s),i=i(s),o.flags|=1,Yi(e,o,i,a),o.child;case 14:return i=o.type,s=Lg(i,o.pendingProps),s=Lg(i.type,s),aj(e,o,i,s,a);case 15:return cj(e,o,o.type,o.pendingProps,a);case 17:return i=o.type,s=o.pendingProps,s=o.elementType===i?s:Lg(i,s),jj(e,o),o.tag=1,Zf(i)?(e=!0,cg(o)):e=!1,Tg(o,a),ph(o,i,s),rh(o,i,s,a),kj(null,o,i,!0,e,a);case 19:return yj(e,o,a);case 22:return ej(e,o,a)}throw Error(p(156,o.tag))};function Gk(e,o){return ac(e,o)}function al(e,o,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bg(e,o,a,i){return new al(e,o,a,i)}function bj(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $k(e){if(typeof e=="function")return bj(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Da)return 11;if(e===Ga)return 14}return 2}function wh(e,o){var a=e.alternate;return a===null?(a=Bg(e.tag,o,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=o,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,o=e.dependencies,a.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function yh(e,o,a,i,s,c){var d=2;if(i=e,typeof e=="function")bj(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case ya:return Ah(a.children,s,c,o);case za:d=8,s|=8;break;case Aa:return e=Bg(12,a,o,s|2),e.elementType=Aa,e.lanes=c,e;case Ea:return e=Bg(13,a,o,s),e.elementType=Ea,e.lanes=c,e;case Fa:return e=Bg(19,a,o,s),e.elementType=Fa,e.lanes=c,e;case Ia:return qj(a,s,c,o);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ba:d=10;break e;case Ca:d=9;break e;case Da:d=11;break e;case Ga:d=14;break e;case Ha:d=16,i=null;break e}throw Error(p(130,e==null?e:typeof e,""))}return o=Bg(d,a,o,s),o.elementType=e,o.type=i,o.lanes=c,o}function Ah(e,o,a,i){return e=Bg(7,e,i,o),e.lanes=a,e}function qj(e,o,a,i){return e=Bg(22,e,i,o),e.elementType=Ia,e.lanes=a,e.stateNode={isHidden:!1},e}function xh(e,o,a){return e=Bg(6,e,null,o),e.lanes=a,e}function zh(e,o,a){return o=Bg(4,e.children!==null?e.children:[],e.key,o),o.lanes=a,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},o}function bl(e,o,a,i,s){this.tag=o,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function cl(e,o,a,i,s,c,d,g,b){return e=new bl(e,o,a,g,b),o===1?(o=1,c===!0&&(o|=8)):o=0,c=Bg(3,null,null,o),e.current=c,c.stateNode=e,c.memoizedState={element:i,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ah(c),e}function dl(e,o,a){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa,key:i==null?null:""+i,children:e,containerInfo:o,implementation:a}}function el(e){if(!e)return Vf;e=e._reactInternals;e:{if(Vb(e)!==e||e.tag!==1)throw Error(p(170));var o=e;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Zf(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(p(171))}if(e.tag===1){var a=e.type;if(Zf(a))return bg(e,a,o)}return o}function fl(e,o,a,i,s,c,d,g,b){return e=cl(a,i,!0,e,s,c,d,g,b),e.context=el(null),a=e.current,i=L(),s=lh(a),c=ch(i,s),c.callback=o??null,dh(a,c,s),e.current.lanes=s,Ac(e,s,i),Ek(e,i),e}function gl(e,o,a,i){var s=o.current,c=L(),d=lh(s);return a=el(a),o.context===null?o.context=a:o.pendingContext=a,o=ch(c,d),o.payload={element:e},i=i===void 0?null:i,i!==null&&(o.callback=i),e=dh(s,o,d),e!==null&&(mh(e,s,d,c),eh(e,s,d)),d}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function il(e,o){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<o?a:o}}function jl(e,o){il(e,o),(e=e.alternate)&&il(e,o)}function kl(){return null}var ll=typeof reportError=="function"?reportError:function(e){console.error(e)};function ml(e){this._internalRoot=e}nl.prototype.render=ml.prototype.render=function(e){var o=this._internalRoot;if(o===null)throw Error(p(409));gl(e,o,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var o=e.containerInfo;Sk(function(){gl(null,e,null,null)}),o[uf]=null}};function nl(e){this._internalRoot=e}nl.prototype.unstable_scheduleHydration=function(e){if(e){var o=Hc();e={blockedOn:null,target:e,priority:o};for(var a=0;a<Qc.length&&o!==0&&o<Qc[a].priority;a++);Qc.splice(a,0,e),a===0&&Vc(e)}};function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ql(){}function rl(e,o,a,i,s){if(s){if(typeof i=="function"){var c=i;i=function(){var en=hl(d);c.call(en)}}var d=fl(o,i,e,0,null,!1,!1,"",ql);return e._reactRootContainer=d,e[uf]=d.current,sf(e.nodeType===8?e.parentNode:e),Sk(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof i=="function"){var g=i;i=function(){var en=hl(b);g.call(en)}}var b=cl(e,0,!1,null,null,!1,!1,"",ql);return e._reactRootContainer=b,e[uf]=b.current,sf(e.nodeType===8?e.parentNode:e),Sk(function(){gl(o,b,a,i)}),b}function sl(e,o,a,i,s){var c=a._reactRootContainer;if(c){var d=c;if(typeof s=="function"){var g=s;s=function(){var b=hl(d);g.call(b)}}gl(o,d,e,s)}else d=rl(a,o,e,s,i);return hl(d)}Ec=function(e){switch(e.tag){case 3:var o=e.stateNode;if(o.current.memoizedState.isDehydrated){var a=tc(o.pendingLanes);a!==0&&(Cc(o,a|1),Ek(o,B()),!(K&6)&&(Hj=B()+500,jg()))}break;case 13:Sk(function(){var i=Zg(e,1);if(i!==null){var s=L();mh(i,e,1,s)}}),jl(e,1)}};Fc=function(e){if(e.tag===13){var o=Zg(e,134217728);if(o!==null){var a=L();mh(o,e,134217728,a)}jl(e,134217728)}};Gc=function(e){if(e.tag===13){var o=lh(e),a=Zg(e,o);if(a!==null){var i=L();mh(a,e,o,i)}jl(e,o)}};Hc=function(){return C};Ic=function(e,o){var a=C;try{return C=e,o()}finally{C=a}};yb=function(e,o,a){switch(o){case"input":if(bb(e,a),o=a.name,a.type==="radio"&&o!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<a.length;o++){var i=a[o];if(i!==e&&i.form===e.form){var s=Db(i);if(!s)throw Error(p(90));Wa(i),bb(i,s)}}}break;case"textarea":ib(e,a);break;case"select":o=a.value,o!=null&&fb(e,!!a.multiple,o,!1)}};Gb=Rk;Hb=Sk;var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zb(e),e===null?null:e.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch{}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;reactDom_production_min.createPortal=function(e,o){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ol(o))throw Error(p(200));return dl(e,o,null,a)};reactDom_production_min.createRoot=function(e,o){if(!ol(e))throw Error(p(299));var a=!1,i="",s=ll;return o!=null&&(o.unstable_strictMode===!0&&(a=!0),o.identifierPrefix!==void 0&&(i=o.identifierPrefix),o.onRecoverableError!==void 0&&(s=o.onRecoverableError)),o=cl(e,1,!1,null,null,a,!1,i,s),e[uf]=o.current,sf(e.nodeType===8?e.parentNode:e),new ml(o)};reactDom_production_min.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var o=e._reactInternals;if(o===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=Zb(o),e=e===null?null:e.stateNode,e};reactDom_production_min.flushSync=function(e){return Sk(e)};reactDom_production_min.hydrate=function(e,o,a){if(!pl(o))throw Error(p(200));return sl(null,e,o,!0,a)};reactDom_production_min.hydrateRoot=function(e,o,a){if(!ol(e))throw Error(p(405));var i=a!=null&&a.hydratedSources||null,s=!1,c="",d=ll;if(a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onRecoverableError!==void 0&&(d=a.onRecoverableError)),o=fl(o,null,e,1,a??null,s,!1,c,d),e[uf]=o.current,sf(e),i)for(e=0;e<i.length;e++)a=i[e],s=a._getVersion,s=s(a._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[a,s]:o.mutableSourceEagerHydrationData.push(a,s);return new nl(o)};reactDom_production_min.render=function(e,o,a){if(!pl(o))throw Error(p(200));return sl(null,e,o,!1,a)};reactDom_production_min.unmountComponentAtNode=function(e){if(!pl(e))throw Error(p(40));return e._reactRootContainer?(Sk(function(){sl(null,null,e,!1,function(){e._reactRootContainer=null,e[uf]=null})}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Rk;reactDom_production_min.unstable_renderSubtreeIntoContainer=function(e,o,a,i){if(!pl(a))throw Error(p(200));if(e==null||e._reactInternals===void 0)throw Error(p(38));return sl(e,o,a,!1,i)};reactDom_production_min.version="18.2.0-next-9e3b772b8-20220608";function checkDCE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(e){console.error(e)}}checkDCE(),reactDom.exports=reactDom_production_min;var reactDomExports=reactDom.exports,createRoot,m=reactDomExports;createRoot=m.createRoot,m.hydrateRoot;var Subscribable=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},isServer=typeof window>"u"||"Deno"in globalThis;function noop(){}function functionalUpdate(e,o){return typeof e=="function"?e(o):e}function isValidTimeout(e){return typeof e=="number"&&e>=0&&e!==1/0}function timeUntilStale(e,o){return Math.max(e+(o||0)-Date.now(),0)}function resolveStaleTime(e,o){return typeof e=="function"?e(o):e}function resolveEnabled(e,o){return typeof e=="function"?e(o):e}function matchQuery(e,o){const{type:a="all",exact:i,fetchStatus:s,predicate:c,queryKey:d,stale:g}=e;if(d){if(i){if(o.queryHash!==hashQueryKeyByOptions(d,o.options))return!1}else if(!partialMatchKey(o.queryKey,d))return!1}if(a!=="all"){const b=o.isActive();if(a==="active"&&!b||a==="inactive"&&b)return!1}return!(typeof g=="boolean"&&o.isStale()!==g||s&&s!==o.state.fetchStatus||c&&!c(o))}function matchMutation(e,o){const{exact:a,status:i,predicate:s,mutationKey:c}=e;if(c){if(!o.options.mutationKey)return!1;if(a){if(hashKey(o.options.mutationKey)!==hashKey(c))return!1}else if(!partialMatchKey(o.options.mutationKey,c))return!1}return!(i&&o.state.status!==i||s&&!s(o))}function hashQueryKeyByOptions(e,o){return((o==null?void 0:o.queryKeyHashFn)||hashKey)(e)}function hashKey(e){return JSON.stringify(e,(o,a)=>isPlainObject(a)?Object.keys(a).sort().reduce((i,s)=>(i[s]=a[s],i),{}):a)}function partialMatchKey(e,o){return e===o?!0:typeof e!=typeof o?!1:e&&o&&typeof e=="object"&&typeof o=="object"?Object.keys(o).every(a=>partialMatchKey(e[a],o[a])):!1}function replaceEqualDeep(e,o){if(e===o)return e;const a=isPlainArray(e)&&isPlainArray(o);if(a||isPlainObject(e)&&isPlainObject(o)){const i=a?e:Object.keys(e),s=i.length,c=a?o:Object.keys(o),d=c.length,g=a?[]:{},b=new Set(i);let en=0;for(let sn=0;sn<d;sn++){const on=a?sn:c[sn];(!a&&b.has(on)||a)&&e[on]===void 0&&o[on]===void 0?(g[on]=void 0,en++):(g[on]=replaceEqualDeep(e[on],o[on]),g[on]===e[on]&&e[on]!==void 0&&en++)}return s===d&&en===s?e:g}return o}function shallowEqualObjects(e,o){if(!o||Object.keys(e).length!==Object.keys(o).length)return!1;for(const a in e)if(e[a]!==o[a])return!1;return!0}function isPlainArray(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function isPlainObject(e){if(!hasObjectPrototype(e))return!1;const o=e.constructor;if(o===void 0)return!0;const a=o.prototype;return!(!hasObjectPrototype(a)||!a.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function hasObjectPrototype(e){return Object.prototype.toString.call(e)==="[object Object]"}function sleep(e){return new Promise(o=>{setTimeout(o,e)})}function replaceData(e,o,a){return typeof a.structuralSharing=="function"?a.structuralSharing(e,o):a.structuralSharing!==!1?replaceEqualDeep(e,o):o}function addToEnd(e,o,a=0){const i=[...e,o];return a&&i.length>a?i.slice(1):i}function addToStart(e,o,a=0){const i=[o,...e];return a&&i.length>a?i.slice(0,-1):i}var skipToken=Symbol();function ensureQueryFn(e,o){return!e.queryFn&&(o!=null&&o.initialPromise)?()=>o.initialPromise:!e.queryFn||e.queryFn===skipToken?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function shouldThrowError(e,o){return typeof e=="function"?e(...o):!!e}var pt,rt,vt,po,FocusManager=(po=class extends Subscribable{constructor(){super();xn(this,pt);xn(this,rt);xn(this,vt);Cn(this,vt,o=>{if(!isServer&&window.addEventListener){const a=()=>o();return window.addEventListener("visibilitychange",a,!1),()=>{window.removeEventListener("visibilitychange",a)}}})}onSubscribe(){rn(this,rt)||this.setEventListener(rn(this,vt))}onUnsubscribe(){var o;this.hasListeners()||((o=rn(this,rt))==null||o.call(this),Cn(this,rt,void 0))}setEventListener(o){var a;Cn(this,vt,o),(a=rn(this,rt))==null||a.call(this),Cn(this,rt,o(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(o){rn(this,pt)!==o&&(Cn(this,pt,o),this.onFocus())}onFocus(){const o=this.isFocused();this.listeners.forEach(a=>{a(o)})}isFocused(){var o;return typeof rn(this,pt)=="boolean"?rn(this,pt):((o=globalThis.document)==null?void 0:o.visibilityState)!=="hidden"}},pt=new WeakMap,rt=new WeakMap,vt=new WeakMap,po),focusManager=new FocusManager,St,lt,xt,fo,OnlineManager=(fo=class extends Subscribable{constructor(){super();xn(this,St,!0);xn(this,lt);xn(this,xt);Cn(this,xt,o=>{if(!isServer&&window.addEventListener){const a=()=>o(!0),i=()=>o(!1);return window.addEventListener("online",a,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",a),window.removeEventListener("offline",i)}}})}onSubscribe(){rn(this,lt)||this.setEventListener(rn(this,xt))}onUnsubscribe(){var o;this.hasListeners()||((o=rn(this,lt))==null||o.call(this),Cn(this,lt,void 0))}setEventListener(o){var a;Cn(this,xt,o),(a=rn(this,lt))==null||a.call(this),Cn(this,lt,o(this.setOnline.bind(this)))}setOnline(o){rn(this,St)!==o&&(Cn(this,St,o),this.listeners.forEach(i=>{i(o)}))}isOnline(){return rn(this,St)}},St=new WeakMap,lt=new WeakMap,xt=new WeakMap,fo),onlineManager=new OnlineManager;function pendingThenable(){let e,o;const a=new Promise((s,c)=>{e=s,o=c});a.status="pending",a.catch(()=>{});function i(s){Object.assign(a,s),delete a.resolve,delete a.reject}return a.resolve=s=>{i({status:"fulfilled",value:s}),e(s)},a.reject=s=>{i({status:"rejected",reason:s}),o(s)},a}function defaultRetryDelay(e){return Math.min(1e3*2**e,3e4)}function canFetch(e){return(e??"online")==="online"?onlineManager.isOnline():!0}var CancelledError=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function isCancelledError(e){return e instanceof CancelledError}function createRetryer(e){let o=!1,a=0,i=!1,s;const c=pendingThenable(),d=un=>{var gn;i||(ln(new CancelledError(un)),(gn=e.abort)==null||gn.call(e))},g=()=>{o=!0},b=()=>{o=!1},en=()=>focusManager.isFocused()&&(e.networkMode==="always"||onlineManager.isOnline())&&e.canRun(),sn=()=>canFetch(e.networkMode)&&e.canRun(),on=un=>{var gn;i||(i=!0,(gn=e.onSuccess)==null||gn.call(e,un),s==null||s(),c.resolve(un))},ln=un=>{var gn;i||(i=!0,(gn=e.onError)==null||gn.call(e,un),s==null||s(),c.reject(un))},dn=()=>new Promise(un=>{var gn;s=tn=>{(i||en())&&un(tn)},(gn=e.onPause)==null||gn.call(e)}).then(()=>{var un;s=void 0,i||(un=e.onContinue)==null||un.call(e)}),pn=()=>{if(i)return;let un;const gn=a===0?e.initialPromise:void 0;try{un=gn??e.fn()}catch(tn){un=Promise.reject(tn)}Promise.resolve(un).then(on).catch(tn=>{var cn;if(i)return;const j=e.retry??(isServer?0:3),_e=e.retryDelay??defaultRetryDelay,nn=typeof _e=="function"?_e(a,tn):_e,an=j===!0||typeof j=="number"&&a<j||typeof j=="function"&&j(a,tn);if(o||!an){ln(tn);return}a++,(cn=e.onFail)==null||cn.call(e,a,tn),sleep(nn).then(()=>en()?void 0:dn()).then(()=>{o?ln(tn):pn()})})};return{promise:c,cancel:d,continue:()=>(s==null||s(),c),cancelRetry:g,continueRetry:b,canStart:sn,start:()=>(sn()?pn():dn().then(pn),c)}}var defaultScheduler=e=>setTimeout(e,0);function createNotifyManager(){let e=[],o=0,a=g=>{g()},i=g=>{g()},s=defaultScheduler;const c=g=>{o?e.push(g):s(()=>{a(g)})},d=()=>{const g=e;e=[],g.length&&s(()=>{i(()=>{g.forEach(b=>{a(b)})})})};return{batch:g=>{let b;o++;try{b=g()}finally{o--,o||d()}return b},batchCalls:g=>(...b)=>{c(()=>{g(...b)})},schedule:c,setNotifyFunction:g=>{a=g},setBatchNotifyFunction:g=>{i=g},setScheduler:g=>{s=g}}}var notifyManager=createNotifyManager(),ft,go,Removable=(go=class{constructor(){xn(this,ft)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),isValidTimeout(this.gcTime)&&Cn(this,ft,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(isServer?1/0:5*60*1e3))}clearGcTimeout(){rn(this,ft)&&(clearTimeout(rn(this,ft)),Cn(this,ft,void 0))}},ft=new WeakMap,go),Pt,gt,Hn,yt,Bn,Wt,ht,qn,nt,yo,Query=(yo=class extends Removable{constructor(o){super();xn(this,qn);xn(this,Pt);xn(this,gt);xn(this,Hn);xn(this,yt);xn(this,Bn);xn(this,Wt);xn(this,ht);Cn(this,ht,!1),Cn(this,Wt,o.defaultOptions),this.setOptions(o.options),this.observers=[],Cn(this,yt,o.client),Cn(this,Hn,rn(this,yt).getQueryCache()),this.queryKey=o.queryKey,this.queryHash=o.queryHash,Cn(this,Pt,getDefaultState$1(this.options)),this.state=o.state??rn(this,Pt),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var o;return(o=rn(this,Bn))==null?void 0:o.promise}setOptions(o){this.options={...rn(this,Wt),...o},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&rn(this,Hn).remove(this)}setData(o,a){const i=replaceData(this.state.data,o,this.options);return Fn(this,qn,nt).call(this,{data:i,type:"success",dataUpdatedAt:a==null?void 0:a.updatedAt,manual:a==null?void 0:a.manual}),i}setState(o,a){Fn(this,qn,nt).call(this,{type:"setState",state:o,setStateOptions:a})}cancel(o){var i,s;const a=(i=rn(this,Bn))==null?void 0:i.promise;return(s=rn(this,Bn))==null||s.cancel(o),a?a.then(noop).catch(noop):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(rn(this,Pt))}isActive(){return this.observers.some(o=>resolveEnabled(o.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===skipToken||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(o=>resolveStaleTime(o.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(o=>o.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(o=0){return this.state.data===void 0?!0:o==="static"?!1:this.state.isInvalidated?!0:!timeUntilStale(this.state.dataUpdatedAt,o)}onFocus(){var a;const o=this.observers.find(i=>i.shouldFetchOnWindowFocus());o==null||o.refetch({cancelRefetch:!1}),(a=rn(this,Bn))==null||a.continue()}onOnline(){var a;const o=this.observers.find(i=>i.shouldFetchOnReconnect());o==null||o.refetch({cancelRefetch:!1}),(a=rn(this,Bn))==null||a.continue()}addObserver(o){this.observers.includes(o)||(this.observers.push(o),this.clearGcTimeout(),rn(this,Hn).notify({type:"observerAdded",query:this,observer:o}))}removeObserver(o){this.observers.includes(o)&&(this.observers=this.observers.filter(a=>a!==o),this.observers.length||(rn(this,Bn)&&(rn(this,ht)?rn(this,Bn).cancel({revert:!0}):rn(this,Bn).cancelRetry()),this.scheduleGc()),rn(this,Hn).notify({type:"observerRemoved",query:this,observer:o}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Fn(this,qn,nt).call(this,{type:"invalidate"})}fetch(o,a){var en,sn,on;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(a!=null&&a.cancelRefetch))this.cancel({silent:!0});else if(rn(this,Bn))return rn(this,Bn).continueRetry(),rn(this,Bn).promise}if(o&&this.setOptions(o),!this.options.queryFn){const ln=this.observers.find(dn=>dn.options.queryFn);ln&&this.setOptions(ln.options)}const i=new AbortController,s=ln=>{Object.defineProperty(ln,"signal",{enumerable:!0,get:()=>(Cn(this,ht,!0),i.signal)})},c=()=>{const ln=ensureQueryFn(this.options,a),pn=(()=>{const un={client:rn(this,yt),queryKey:this.queryKey,meta:this.meta};return s(un),un})();return Cn(this,ht,!1),this.options.persister?this.options.persister(ln,pn,this):ln(pn)},g=(()=>{const ln={fetchOptions:a,options:this.options,queryKey:this.queryKey,client:rn(this,yt),state:this.state,fetchFn:c};return s(ln),ln})();(en=this.options.behavior)==null||en.onFetch(g,this),Cn(this,gt,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((sn=g.fetchOptions)==null?void 0:sn.meta))&&Fn(this,qn,nt).call(this,{type:"fetch",meta:(on=g.fetchOptions)==null?void 0:on.meta});const b=ln=>{var dn,pn,un,gn;isCancelledError(ln)&&ln.silent||Fn(this,qn,nt).call(this,{type:"error",error:ln}),isCancelledError(ln)||((pn=(dn=rn(this,Hn).config).onError)==null||pn.call(dn,ln,this),(gn=(un=rn(this,Hn).config).onSettled)==null||gn.call(un,this.state.data,ln,this)),this.scheduleGc()};return Cn(this,Bn,createRetryer({initialPromise:a==null?void 0:a.initialPromise,fn:g.fetchFn,abort:i.abort.bind(i),onSuccess:ln=>{var dn,pn,un,gn;if(ln===void 0){b(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(ln)}catch(tn){b(tn);return}(pn=(dn=rn(this,Hn).config).onSuccess)==null||pn.call(dn,ln,this),(gn=(un=rn(this,Hn).config).onSettled)==null||gn.call(un,ln,this.state.error,this),this.scheduleGc()},onError:b,onFail:(ln,dn)=>{Fn(this,qn,nt).call(this,{type:"failed",failureCount:ln,error:dn})},onPause:()=>{Fn(this,qn,nt).call(this,{type:"pause"})},onContinue:()=>{Fn(this,qn,nt).call(this,{type:"continue"})},retry:g.options.retry,retryDelay:g.options.retryDelay,networkMode:g.options.networkMode,canRun:()=>!0})),rn(this,Bn).start()}},Pt=new WeakMap,gt=new WeakMap,Hn=new WeakMap,yt=new WeakMap,Bn=new WeakMap,Wt=new WeakMap,ht=new WeakMap,qn=new WeakSet,nt=function(o){const a=i=>{switch(o.type){case"failed":return{...i,fetchFailureCount:o.failureCount,fetchFailureReason:o.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...fetchState(i.data,this.options),fetchMeta:o.meta??null};case"success":return Cn(this,gt,void 0),{...i,data:o.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:o.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!o.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=o.error;return isCancelledError(s)&&s.revert&&rn(this,gt)?{...rn(this,gt),fetchStatus:"idle"}:{...i,error:s,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...o.state}}};this.state=a(this.state),notifyManager.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),rn(this,Hn).notify({query:this,type:"updated",action:o})})},yo);function fetchState(e,o){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:canFetch(o.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function getDefaultState$1(e){const o=typeof e.initialData=="function"?e.initialData():e.initialData,a=o!==void 0,i=a?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:o,dataUpdateCount:0,dataUpdatedAt:a?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:a?"success":"pending",fetchStatus:"idle"}}var Zn,ho,QueryCache=(ho=class extends Subscribable{constructor(o={}){super();xn(this,Zn);this.config=o,Cn(this,Zn,new Map)}build(o,a,i){const s=a.queryKey,c=a.queryHash??hashQueryKeyByOptions(s,a);let d=this.get(c);return d||(d=new Query({client:o,queryKey:s,queryHash:c,options:o.defaultQueryOptions(a),state:i,defaultOptions:o.getQueryDefaults(s)}),this.add(d)),d}add(o){rn(this,Zn).has(o.queryHash)||(rn(this,Zn).set(o.queryHash,o),this.notify({type:"added",query:o}))}remove(o){const a=rn(this,Zn).get(o.queryHash);a&&(o.destroy(),a===o&&rn(this,Zn).delete(o.queryHash),this.notify({type:"removed",query:o}))}clear(){notifyManager.batch(()=>{this.getAll().forEach(o=>{this.remove(o)})})}get(o){return rn(this,Zn).get(o)}getAll(){return[...rn(this,Zn).values()]}find(o){const a={exact:!0,...o};return this.getAll().find(i=>matchQuery(a,i))}findAll(o={}){const a=this.getAll();return Object.keys(o).length>0?a.filter(i=>matchQuery(o,i)):a}notify(o){notifyManager.batch(()=>{this.listeners.forEach(a=>{a(o)})})}onFocus(){notifyManager.batch(()=>{this.getAll().forEach(o=>{o.onFocus()})})}onOnline(){notifyManager.batch(()=>{this.getAll().forEach(o=>{o.onOnline()})})}},Zn=new WeakMap,ho),Xn,Un,wt,Jn,ot,wo,Mutation=(wo=class extends Removable{constructor(o){super();xn(this,Jn);xn(this,Xn);xn(this,Un);xn(this,wt);this.mutationId=o.mutationId,Cn(this,Un,o.mutationCache),Cn(this,Xn,[]),this.state=o.state||getDefaultState(),this.setOptions(o.options),this.scheduleGc()}setOptions(o){this.options=o,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(o){rn(this,Xn).includes(o)||(rn(this,Xn).push(o),this.clearGcTimeout(),rn(this,Un).notify({type:"observerAdded",mutation:this,observer:o}))}removeObserver(o){Cn(this,Xn,rn(this,Xn).filter(a=>a!==o)),this.scheduleGc(),rn(this,Un).notify({type:"observerRemoved",mutation:this,observer:o})}optionalRemove(){rn(this,Xn).length||(this.state.status==="pending"?this.scheduleGc():rn(this,Un).remove(this))}continue(){var o;return((o=rn(this,wt))==null?void 0:o.continue())??this.execute(this.state.variables)}async execute(o){var c,d,g,b,en,sn,on,ln,dn,pn,un,gn,tn,j,_e,nn,an,cn,mn,yn;const a=()=>{Fn(this,Jn,ot).call(this,{type:"continue"})};Cn(this,wt,createRetryer({fn:()=>this.options.mutationFn?this.options.mutationFn(o):Promise.reject(new Error("No mutationFn found")),onFail:(hn,wn)=>{Fn(this,Jn,ot).call(this,{type:"failed",failureCount:hn,error:wn})},onPause:()=>{Fn(this,Jn,ot).call(this,{type:"pause"})},onContinue:a,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>rn(this,Un).canRun(this)}));const i=this.state.status==="pending",s=!rn(this,wt).canStart();try{if(i)a();else{Fn(this,Jn,ot).call(this,{type:"pending",variables:o,isPaused:s}),await((d=(c=rn(this,Un).config).onMutate)==null?void 0:d.call(c,o,this));const wn=await((b=(g=this.options).onMutate)==null?void 0:b.call(g,o));wn!==this.state.context&&Fn(this,Jn,ot).call(this,{type:"pending",context:wn,variables:o,isPaused:s})}const hn=await rn(this,wt).start();return await((sn=(en=rn(this,Un).config).onSuccess)==null?void 0:sn.call(en,hn,o,this.state.context,this)),await((ln=(on=this.options).onSuccess)==null?void 0:ln.call(on,hn,o,this.state.context)),await((pn=(dn=rn(this,Un).config).onSettled)==null?void 0:pn.call(dn,hn,null,this.state.variables,this.state.context,this)),await((gn=(un=this.options).onSettled)==null?void 0:gn.call(un,hn,null,o,this.state.context)),Fn(this,Jn,ot).call(this,{type:"success",data:hn}),hn}catch(hn){try{throw await((j=(tn=rn(this,Un).config).onError)==null?void 0:j.call(tn,hn,o,this.state.context,this)),await((nn=(_e=this.options).onError)==null?void 0:nn.call(_e,hn,o,this.state.context)),await((cn=(an=rn(this,Un).config).onSettled)==null?void 0:cn.call(an,void 0,hn,this.state.variables,this.state.context,this)),await((yn=(mn=this.options).onSettled)==null?void 0:yn.call(mn,void 0,hn,o,this.state.context)),hn}finally{Fn(this,Jn,ot).call(this,{type:"error",error:hn})}}finally{rn(this,Un).runNext(this)}}},Xn=new WeakMap,Un=new WeakMap,wt=new WeakMap,Jn=new WeakSet,ot=function(o){const a=i=>{switch(o.type){case"failed":return{...i,failureCount:o.failureCount,failureReason:o.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:o.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:o.isPaused,status:"pending",variables:o.variables,submittedAt:Date.now()};case"success":return{...i,data:o.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:o.error,failureCount:i.failureCount+1,failureReason:o.error,isPaused:!1,status:"error"}}};this.state=a(this.state),notifyManager.batch(()=>{rn(this,Xn).forEach(i=>{i.onMutationUpdate(o)}),rn(this,Un).notify({mutation:this,type:"updated",action:o})})},wo);function getDefaultState(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var tt,Yn,$t,bo,MutationCache=(bo=class extends Subscribable{constructor(o={}){super();xn(this,tt);xn(this,Yn);xn(this,$t);this.config=o,Cn(this,tt,new Set),Cn(this,Yn,new Map),Cn(this,$t,0)}build(o,a,i){const s=new Mutation({mutationCache:this,mutationId:++Qt(this,$t)._,options:o.defaultMutationOptions(a),state:i});return this.add(s),s}add(o){rn(this,tt).add(o);const a=scopeFor(o);if(typeof a=="string"){const i=rn(this,Yn).get(a);i?i.push(o):rn(this,Yn).set(a,[o])}this.notify({type:"added",mutation:o})}remove(o){if(rn(this,tt).delete(o)){const a=scopeFor(o);if(typeof a=="string"){const i=rn(this,Yn).get(a);if(i)if(i.length>1){const s=i.indexOf(o);s!==-1&&i.splice(s,1)}else i[0]===o&&rn(this,Yn).delete(a)}}this.notify({type:"removed",mutation:o})}canRun(o){const a=scopeFor(o);if(typeof a=="string"){const i=rn(this,Yn).get(a),s=i==null?void 0:i.find(c=>c.state.status==="pending");return!s||s===o}else return!0}runNext(o){var i;const a=scopeFor(o);if(typeof a=="string"){const s=(i=rn(this,Yn).get(a))==null?void 0:i.find(c=>c!==o&&c.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){notifyManager.batch(()=>{rn(this,tt).forEach(o=>{this.notify({type:"removed",mutation:o})}),rn(this,tt).clear(),rn(this,Yn).clear()})}getAll(){return Array.from(rn(this,tt))}find(o){const a={exact:!0,...o};return this.getAll().find(i=>matchMutation(a,i))}findAll(o={}){return this.getAll().filter(a=>matchMutation(o,a))}notify(o){notifyManager.batch(()=>{this.listeners.forEach(a=>{a(o)})})}resumePausedMutations(){const o=this.getAll().filter(a=>a.state.isPaused);return notifyManager.batch(()=>Promise.all(o.map(a=>a.continue().catch(noop))))}},tt=new WeakMap,Yn=new WeakMap,$t=new WeakMap,bo);function scopeFor(e){var o;return(o=e.options.scope)==null?void 0:o.id}function infiniteQueryBehavior(e){return{onFetch:(o,a)=>{var sn,on,ln,dn,pn;const i=o.options,s=(ln=(on=(sn=o.fetchOptions)==null?void 0:sn.meta)==null?void 0:on.fetchMore)==null?void 0:ln.direction,c=((dn=o.state.data)==null?void 0:dn.pages)||[],d=((pn=o.state.data)==null?void 0:pn.pageParams)||[];let g={pages:[],pageParams:[]},b=0;const en=async()=>{let un=!1;const gn=_e=>{Object.defineProperty(_e,"signal",{enumerable:!0,get:()=>(o.signal.aborted?un=!0:o.signal.addEventListener("abort",()=>{un=!0}),o.signal)})},tn=ensureQueryFn(o.options,o.fetchOptions),j=async(_e,nn,an)=>{if(un)return Promise.reject();if(nn==null&&_e.pages.length)return Promise.resolve(_e);const mn=(()=>{const En={client:o.client,queryKey:o.queryKey,pageParam:nn,direction:an?"backward":"forward",meta:o.options.meta};return gn(En),En})(),yn=await tn(mn),{maxPages:hn}=o.options,wn=an?addToStart:addToEnd;return{pages:wn(_e.pages,yn,hn),pageParams:wn(_e.pageParams,nn,hn)}};if(s&&c.length){const _e=s==="backward",nn=_e?getPreviousPageParam:getNextPageParam,an={pages:c,pageParams:d},cn=nn(i,an);g=await j(an,cn,_e)}else{const _e=e??c.length;do{const nn=b===0?d[0]??i.initialPageParam:getNextPageParam(i,g);if(b>0&&nn==null)break;g=await j(g,nn),b++}while(b<_e)}return g};o.options.persister?o.fetchFn=()=>{var un,gn;return(gn=(un=o.options).persister)==null?void 0:gn.call(un,en,{client:o.client,queryKey:o.queryKey,meta:o.options.meta,signal:o.signal},a)}:o.fetchFn=en}}}function getNextPageParam(e,{pages:o,pageParams:a}){const i=o.length-1;return o.length>0?e.getNextPageParam(o[i],o,a[i],a):void 0}function getPreviousPageParam(e,{pages:o,pageParams:a}){var i;return o.length>0?(i=e.getPreviousPageParam)==null?void 0:i.call(e,o[0],o,a[0],a):void 0}var Mn,at,it,At,Nt,st,It,kt,Co,QueryClient=(Co=class{constructor(e={}){xn(this,Mn);xn(this,at);xn(this,it);xn(this,At);xn(this,Nt);xn(this,st);xn(this,It);xn(this,kt);Cn(this,Mn,e.queryCache||new QueryCache),Cn(this,at,e.mutationCache||new MutationCache),Cn(this,it,e.defaultOptions||{}),Cn(this,At,new Map),Cn(this,Nt,new Map),Cn(this,st,0)}mount(){Qt(this,st)._++,rn(this,st)===1&&(Cn(this,It,focusManager.subscribe(async e=>{e&&(await this.resumePausedMutations(),rn(this,Mn).onFocus())})),Cn(this,kt,onlineManager.subscribe(async e=>{e&&(await this.resumePausedMutations(),rn(this,Mn).onOnline())})))}unmount(){var e,o;Qt(this,st)._--,rn(this,st)===0&&((e=rn(this,It))==null||e.call(this),Cn(this,It,void 0),(o=rn(this,kt))==null||o.call(this),Cn(this,kt,void 0))}isFetching(e){return rn(this,Mn).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return rn(this,at).findAll({...e,status:"pending"}).length}getQueryData(e){var a;const o=this.defaultQueryOptions({queryKey:e});return(a=rn(this,Mn).get(o.queryHash))==null?void 0:a.state.data}ensureQueryData(e){const o=this.defaultQueryOptions(e),a=rn(this,Mn).build(this,o),i=a.state.data;return i===void 0?this.fetchQuery(e):(e.revalidateIfStale&&a.isStaleByTime(resolveStaleTime(o.staleTime,a))&&this.prefetchQuery(o),Promise.resolve(i))}getQueriesData(e){return rn(this,Mn).findAll(e).map(({queryKey:o,state:a})=>{const i=a.data;return[o,i]})}setQueryData(e,o,a){const i=this.defaultQueryOptions({queryKey:e}),s=rn(this,Mn).get(i.queryHash),c=s==null?void 0:s.state.data,d=functionalUpdate(o,c);if(d!==void 0)return rn(this,Mn).build(this,i).setData(d,{...a,manual:!0})}setQueriesData(e,o,a){return notifyManager.batch(()=>rn(this,Mn).findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,o,a)]))}getQueryState(e){var a;const o=this.defaultQueryOptions({queryKey:e});return(a=rn(this,Mn).get(o.queryHash))==null?void 0:a.state}removeQueries(e){const o=rn(this,Mn);notifyManager.batch(()=>{o.findAll(e).forEach(a=>{o.remove(a)})})}resetQueries(e,o){const a=rn(this,Mn);return notifyManager.batch(()=>(a.findAll(e).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...e},o)))}cancelQueries(e,o={}){const a={revert:!0,...o},i=notifyManager.batch(()=>rn(this,Mn).findAll(e).map(s=>s.cancel(a)));return Promise.all(i).then(noop).catch(noop)}invalidateQueries(e,o={}){return notifyManager.batch(()=>(rn(this,Mn).findAll(e).forEach(a=>{a.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},o)))}refetchQueries(e,o={}){const a={...o,cancelRefetch:o.cancelRefetch??!0},i=notifyManager.batch(()=>rn(this,Mn).findAll(e).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let c=s.fetch(void 0,a);return a.throwOnError||(c=c.catch(noop)),s.state.fetchStatus==="paused"?Promise.resolve():c}));return Promise.all(i).then(noop)}fetchQuery(e){const o=this.defaultQueryOptions(e);o.retry===void 0&&(o.retry=!1);const a=rn(this,Mn).build(this,o);return a.isStaleByTime(resolveStaleTime(o.staleTime,a))?a.fetch(o):Promise.resolve(a.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(noop).catch(noop)}fetchInfiniteQuery(e){return e.behavior=infiniteQueryBehavior(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(noop).catch(noop)}ensureInfiniteQueryData(e){return e.behavior=infiniteQueryBehavior(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return onlineManager.isOnline()?rn(this,at).resumePausedMutations():Promise.resolve()}getQueryCache(){return rn(this,Mn)}getMutationCache(){return rn(this,at)}getDefaultOptions(){return rn(this,it)}setDefaultOptions(e){Cn(this,it,e)}setQueryDefaults(e,o){rn(this,At).set(hashKey(e),{queryKey:e,defaultOptions:o})}getQueryDefaults(e){const o=[...rn(this,At).values()],a={};return o.forEach(i=>{partialMatchKey(e,i.queryKey)&&Object.assign(a,i.defaultOptions)}),a}setMutationDefaults(e,o){rn(this,Nt).set(hashKey(e),{mutationKey:e,defaultOptions:o})}getMutationDefaults(e){const o=[...rn(this,Nt).values()],a={};return o.forEach(i=>{partialMatchKey(e,i.mutationKey)&&Object.assign(a,i.defaultOptions)}),a}defaultQueryOptions(e){if(e._defaulted)return e;const o={...rn(this,it).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return o.queryHash||(o.queryHash=hashQueryKeyByOptions(o.queryKey,o)),o.refetchOnReconnect===void 0&&(o.refetchOnReconnect=o.networkMode!=="always"),o.throwOnError===void 0&&(o.throwOnError=!!o.suspense),!o.networkMode&&o.persister&&(o.networkMode="offlineFirst"),o.queryFn===skipToken&&(o.enabled=!1),o}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...rn(this,it).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){rn(this,Mn).clear(),rn(this,at).clear()}},Mn=new WeakMap,at=new WeakMap,it=new WeakMap,At=new WeakMap,Nt=new WeakMap,st=new WeakMap,It=new WeakMap,kt=new WeakMap,Co),zn,Dn,Bt,_n,bt,Tt,ct,ut,Ut,Dt,Vt,Ct,Et,dt,Ot,Vn,Lt,Xt,Jt,eo,no,to,oo,ro,So,Eo,QueryObserver=(Eo=class extends Subscribable{constructor(o,a){super();xn(this,Vn);xn(this,zn);xn(this,Dn);xn(this,Bt);xn(this,_n);xn(this,bt);xn(this,Tt);xn(this,ct);xn(this,ut);xn(this,Ut);xn(this,Dt);xn(this,Vt);xn(this,Ct);xn(this,Et);xn(this,dt);xn(this,Ot,new Set);this.options=a,Cn(this,zn,o),Cn(this,ut,null),Cn(this,ct,pendingThenable()),this.options.experimental_prefetchInRender||rn(this,ct).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(a)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(rn(this,Dn).addObserver(this),shouldFetchOnMount(rn(this,Dn),this.options)?Fn(this,Vn,Lt).call(this):this.updateResult(),Fn(this,Vn,no).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return shouldFetchOn(rn(this,Dn),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return shouldFetchOn(rn(this,Dn),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,Fn(this,Vn,to).call(this),Fn(this,Vn,oo).call(this),rn(this,Dn).removeObserver(this)}setOptions(o){const a=this.options,i=rn(this,Dn);if(this.options=rn(this,zn).defaultQueryOptions(o),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof resolveEnabled(this.options.enabled,rn(this,Dn))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");Fn(this,Vn,ro).call(this),rn(this,Dn).setOptions(this.options),a._defaulted&&!shallowEqualObjects(this.options,a)&&rn(this,zn).getQueryCache().notify({type:"observerOptionsUpdated",query:rn(this,Dn),observer:this});const s=this.hasListeners();s&&shouldFetchOptionally(rn(this,Dn),i,this.options,a)&&Fn(this,Vn,Lt).call(this),this.updateResult(),s&&(rn(this,Dn)!==i||resolveEnabled(this.options.enabled,rn(this,Dn))!==resolveEnabled(a.enabled,rn(this,Dn))||resolveStaleTime(this.options.staleTime,rn(this,Dn))!==resolveStaleTime(a.staleTime,rn(this,Dn)))&&Fn(this,Vn,Xt).call(this);const c=Fn(this,Vn,Jt).call(this);s&&(rn(this,Dn)!==i||resolveEnabled(this.options.enabled,rn(this,Dn))!==resolveEnabled(a.enabled,rn(this,Dn))||c!==rn(this,dt))&&Fn(this,Vn,eo).call(this,c)}getOptimisticResult(o){const a=rn(this,zn).getQueryCache().build(rn(this,zn),o),i=this.createResult(a,o);return shouldAssignObserverCurrentProperties(this,i)&&(Cn(this,_n,i),Cn(this,Tt,this.options),Cn(this,bt,rn(this,Dn).state)),i}getCurrentResult(){return rn(this,_n)}trackResult(o,a){return new Proxy(o,{get:(i,s)=>(this.trackProp(s),a==null||a(s),Reflect.get(i,s))})}trackProp(o){rn(this,Ot).add(o)}getCurrentQuery(){return rn(this,Dn)}refetch({...o}={}){return this.fetch({...o})}fetchOptimistic(o){const a=rn(this,zn).defaultQueryOptions(o),i=rn(this,zn).getQueryCache().build(rn(this,zn),a);return i.fetch().then(()=>this.createResult(i,a))}fetch(o){return Fn(this,Vn,Lt).call(this,{...o,cancelRefetch:o.cancelRefetch??!0}).then(()=>(this.updateResult(),rn(this,_n)))}createResult(o,a){var hn;const i=rn(this,Dn),s=this.options,c=rn(this,_n),d=rn(this,bt),g=rn(this,Tt),en=o!==i?o.state:rn(this,Bt),{state:sn}=o;let on={...sn},ln=!1,dn;if(a._optimisticResults){const wn=this.hasListeners(),En=!wn&&shouldFetchOnMount(o,a),kn=wn&&shouldFetchOptionally(o,i,a,s);(En||kn)&&(on={...on,...fetchState(sn.data,o.options)}),a._optimisticResults==="isRestoring"&&(on.fetchStatus="idle")}let{error:pn,errorUpdatedAt:un,status:gn}=on;dn=on.data;let tn=!1;if(a.placeholderData!==void 0&&dn===void 0&&gn==="pending"){let wn;c!=null&&c.isPlaceholderData&&a.placeholderData===(g==null?void 0:g.placeholderData)?(wn=c.data,tn=!0):wn=typeof a.placeholderData=="function"?a.placeholderData((hn=rn(this,Vt))==null?void 0:hn.state.data,rn(this,Vt)):a.placeholderData,wn!==void 0&&(gn="success",dn=replaceData(c==null?void 0:c.data,wn,a),ln=!0)}if(a.select&&dn!==void 0&&!tn)if(c&&dn===(d==null?void 0:d.data)&&a.select===rn(this,Ut))dn=rn(this,Dt);else try{Cn(this,Ut,a.select),dn=a.select(dn),dn=replaceData(c==null?void 0:c.data,dn,a),Cn(this,Dt,dn),Cn(this,ut,null)}catch(wn){Cn(this,ut,wn)}rn(this,ut)&&(pn=rn(this,ut),dn=rn(this,Dt),un=Date.now(),gn="error");const j=on.fetchStatus==="fetching",_e=gn==="pending",nn=gn==="error",an=_e&&j,cn=dn!==void 0,yn={status:gn,fetchStatus:on.fetchStatus,isPending:_e,isSuccess:gn==="success",isError:nn,isInitialLoading:an,isLoading:an,data:dn,dataUpdatedAt:on.dataUpdatedAt,error:pn,errorUpdatedAt:un,failureCount:on.fetchFailureCount,failureReason:on.fetchFailureReason,errorUpdateCount:on.errorUpdateCount,isFetched:on.dataUpdateCount>0||on.errorUpdateCount>0,isFetchedAfterMount:on.dataUpdateCount>en.dataUpdateCount||on.errorUpdateCount>en.errorUpdateCount,isFetching:j,isRefetching:j&&!_e,isLoadingError:nn&&!cn,isPaused:on.fetchStatus==="paused",isPlaceholderData:ln,isRefetchError:nn&&cn,isStale:isStale(o,a),refetch:this.refetch,promise:rn(this,ct)};if(this.options.experimental_prefetchInRender){const wn=Nn=>{yn.status==="error"?Nn.reject(yn.error):yn.data!==void 0&&Nn.resolve(yn.data)},En=()=>{const Nn=Cn(this,ct,yn.promise=pendingThenable());wn(Nn)},kn=rn(this,ct);switch(kn.status){case"pending":o.queryHash===i.queryHash&&wn(kn);break;case"fulfilled":(yn.status==="error"||yn.data!==kn.value)&&En();break;case"rejected":(yn.status!=="error"||yn.error!==kn.reason)&&En();break}}return yn}updateResult(){const o=rn(this,_n),a=this.createResult(rn(this,Dn),this.options);if(Cn(this,bt,rn(this,Dn).state),Cn(this,Tt,this.options),rn(this,bt).data!==void 0&&Cn(this,Vt,rn(this,Dn)),shallowEqualObjects(a,o))return;Cn(this,_n,a);const i=()=>{if(!o)return!0;const{notifyOnChangeProps:s}=this.options,c=typeof s=="function"?s():s;if(c==="all"||!c&&!rn(this,Ot).size)return!0;const d=new Set(c??rn(this,Ot));return this.options.throwOnError&&d.add("error"),Object.keys(rn(this,_n)).some(g=>{const b=g;return rn(this,_n)[b]!==o[b]&&d.has(b)})};Fn(this,Vn,So).call(this,{listeners:i()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&Fn(this,Vn,no).call(this)}},zn=new WeakMap,Dn=new WeakMap,Bt=new WeakMap,_n=new WeakMap,bt=new WeakMap,Tt=new WeakMap,ct=new WeakMap,ut=new WeakMap,Ut=new WeakMap,Dt=new WeakMap,Vt=new WeakMap,Ct=new WeakMap,Et=new WeakMap,dt=new WeakMap,Ot=new WeakMap,Vn=new WeakSet,Lt=function(o){Fn(this,Vn,ro).call(this);let a=rn(this,Dn).fetch(this.options,o);return o!=null&&o.throwOnError||(a=a.catch(noop)),a},Xt=function(){Fn(this,Vn,to).call(this);const o=resolveStaleTime(this.options.staleTime,rn(this,Dn));if(isServer||rn(this,_n).isStale||!isValidTimeout(o))return;const i=timeUntilStale(rn(this,_n).dataUpdatedAt,o)+1;Cn(this,Ct,setTimeout(()=>{rn(this,_n).isStale||this.updateResult()},i))},Jt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(rn(this,Dn)):this.options.refetchInterval)??!1},eo=function(o){Fn(this,Vn,oo).call(this),Cn(this,dt,o),!(isServer||resolveEnabled(this.options.enabled,rn(this,Dn))===!1||!isValidTimeout(rn(this,dt))||rn(this,dt)===0)&&Cn(this,Et,setInterval(()=>{(this.options.refetchIntervalInBackground||focusManager.isFocused())&&Fn(this,Vn,Lt).call(this)},rn(this,dt)))},no=function(){Fn(this,Vn,Xt).call(this),Fn(this,Vn,eo).call(this,Fn(this,Vn,Jt).call(this))},to=function(){rn(this,Ct)&&(clearTimeout(rn(this,Ct)),Cn(this,Ct,void 0))},oo=function(){rn(this,Et)&&(clearInterval(rn(this,Et)),Cn(this,Et,void 0))},ro=function(){const o=rn(this,zn).getQueryCache().build(rn(this,zn),this.options);if(o===rn(this,Dn))return;const a=rn(this,Dn);Cn(this,Dn,o),Cn(this,Bt,o.state),this.hasListeners()&&(a==null||a.removeObserver(this),o.addObserver(this))},So=function(o){notifyManager.batch(()=>{o.listeners&&this.listeners.forEach(a=>{a(rn(this,_n))}),rn(this,zn).getQueryCache().notify({query:rn(this,Dn),type:"observerResultsUpdated"})})},Eo);function shouldLoadOnMount(e,o){return resolveEnabled(o.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&o.retryOnMount===!1)}function shouldFetchOnMount(e,o){return shouldLoadOnMount(e,o)||e.state.data!==void 0&&shouldFetchOn(e,o,o.refetchOnMount)}function shouldFetchOn(e,o,a){if(resolveEnabled(o.enabled,e)!==!1&&resolveStaleTime(o.staleTime,e)!=="static"){const i=typeof a=="function"?a(e):a;return i==="always"||i!==!1&&isStale(e,o)}return!1}function shouldFetchOptionally(e,o,a,i){return(e!==o||resolveEnabled(i.enabled,e)===!1)&&(!a.suspense||e.state.status!=="error")&&isStale(e,a)}function isStale(e,o){return resolveEnabled(o.enabled,e)!==!1&&e.isStaleByTime(resolveStaleTime(o.staleTime,e))}function shouldAssignObserverCurrentProperties(e,o){return!shallowEqualObjects(e.getCurrentResult(),o)}function difference(e,o){const a=new Set(o);return e.filter(i=>!a.has(i))}function replaceAt(e,o,a){const i=e.slice(0);return i[o]=a,i}var Mt,Qn,jt,Rt,Kn,mt,_t,zt,Gt,Wn,lo,ao,io,so,co,vo,QueriesObserver=(vo=class extends Subscribable{constructor(o,a,i){super();xn(this,Wn);xn(this,Mt);xn(this,Qn);xn(this,jt);xn(this,Rt);xn(this,Kn);xn(this,mt);xn(this,_t);xn(this,zt);xn(this,Gt,[]);Cn(this,Mt,o),Cn(this,Rt,i),Cn(this,jt,[]),Cn(this,Kn,[]),Cn(this,Qn,[]),this.setQueries(a)}onSubscribe(){this.listeners.size===1&&rn(this,Kn).forEach(o=>{o.subscribe(a=>{Fn(this,Wn,so).call(this,o,a)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,rn(this,Kn).forEach(o=>{o.destroy()})}setQueries(o,a){Cn(this,jt,o),Cn(this,Rt,a),notifyManager.batch(()=>{const i=rn(this,Kn),s=Fn(this,Wn,io).call(this,rn(this,jt));Cn(this,Gt,s),s.forEach(b=>b.observer.setOptions(b.defaultedQueryOptions));const c=s.map(b=>b.observer),d=c.map(b=>b.getCurrentResult()),g=c.some((b,en)=>b!==i[en]);i.length===c.length&&!g||(Cn(this,Kn,c),Cn(this,Qn,d),this.hasListeners()&&(difference(i,c).forEach(b=>{b.destroy()}),difference(c,i).forEach(b=>{b.subscribe(en=>{Fn(this,Wn,so).call(this,b,en)})}),Fn(this,Wn,co).call(this)))})}getCurrentResult(){return rn(this,Qn)}getQueries(){return rn(this,Kn).map(o=>o.getCurrentQuery())}getObservers(){return rn(this,Kn)}getOptimisticResult(o,a){const i=Fn(this,Wn,io).call(this,o),s=i.map(c=>c.observer.getOptimisticResult(c.defaultedQueryOptions));return[s,c=>Fn(this,Wn,ao).call(this,c??s,a),()=>Fn(this,Wn,lo).call(this,s,i)]}},Mt=new WeakMap,Qn=new WeakMap,jt=new WeakMap,Rt=new WeakMap,Kn=new WeakMap,mt=new WeakMap,_t=new WeakMap,zt=new WeakMap,Gt=new WeakMap,Wn=new WeakSet,lo=function(o,a){return a.map((i,s)=>{const c=o[s];return i.defaultedQueryOptions.notifyOnChangeProps?c:i.observer.trackResult(c,d=>{a.forEach(g=>{g.observer.trackProp(d)})})})},ao=function(o,a){return a?((!rn(this,mt)||rn(this,Qn)!==rn(this,zt)||a!==rn(this,_t))&&(Cn(this,_t,a),Cn(this,zt,rn(this,Qn)),Cn(this,mt,replaceEqualDeep(rn(this,mt),a(o)))),rn(this,mt)):o},io=function(o){const a=new Map(rn(this,Kn).map(s=>[s.options.queryHash,s])),i=[];return o.forEach(s=>{const c=rn(this,Mt).defaultQueryOptions(s),d=a.get(c.queryHash);d?i.push({defaultedQueryOptions:c,observer:d}):i.push({defaultedQueryOptions:c,observer:new QueryObserver(rn(this,Mt),c)})}),i},so=function(o,a){const i=rn(this,Kn).indexOf(o);i!==-1&&(Cn(this,Qn,replaceAt(rn(this,Qn),i,a)),Fn(this,Wn,co).call(this))},co=function(){var o;if(this.hasListeners()){const a=rn(this,mt),i=Fn(this,Wn,lo).call(this,rn(this,Qn),rn(this,Gt)),s=Fn(this,Wn,ao).call(this,i,(o=rn(this,Rt))==null?void 0:o.combine);a!==s&&notifyManager.batch(()=>{this.listeners.forEach(c=>{c(rn(this,Qn))})})}},vo),QueryClientContext=reactExports.createContext(void 0),useQueryClient=e=>{const o=reactExports.useContext(QueryClientContext);if(!o)throw new Error("No QueryClient set, use QueryClientProvider to set one");return o},QueryClientProvider=({client:e,children:o})=>(reactExports.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),jsxRuntimeExports.jsx(QueryClientContext.Provider,{value:e,children:o})),IsRestoringContext=reactExports.createContext(!1),useIsRestoring=()=>reactExports.useContext(IsRestoringContext);IsRestoringContext.Provider;function createValue(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var QueryErrorResetBoundaryContext=reactExports.createContext(createValue()),useQueryErrorResetBoundary=()=>reactExports.useContext(QueryErrorResetBoundaryContext),ensurePreventErrorBoundaryRetry=(e,o)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(o.isReset()||(e.retryOnMount=!1))},useClearResetErrorBoundary=e=>{reactExports.useEffect(()=>{e.clearReset()},[e])},getHasError=({result:e,errorResetBoundary:o,throwOnError:a,query:i,suspense:s})=>e.isError&&!o.isReset()&&!e.isFetching&&i&&(s&&e.data===void 0||shouldThrowError(a,[e.error,i])),ensureSuspenseTimers=e=>{if(e.suspense){const o=i=>i==="static"?i:Math.max(i??1e3,1e3),a=e.staleTime;e.staleTime=typeof a=="function"?(...i)=>o(a(...i)):o(a),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},willFetch=(e,o)=>e.isLoading&&e.isFetching&&!o,shouldSuspend=(e,o)=>(e==null?void 0:e.suspense)&&o.isPending,fetchOptimistic=(e,o,a)=>o.fetchOptimistic(e).catch(()=>{a.clearReset()});function useQueries({queries:e,...o},a){const i=useQueryClient(),s=useIsRestoring(),c=useQueryErrorResetBoundary(),d=reactExports.useMemo(()=>e.map(un=>{const gn=i.defaultQueryOptions(un);return gn._optimisticResults=s?"isRestoring":"optimistic",gn}),[e,i,s]);d.forEach(un=>{ensureSuspenseTimers(un),ensurePreventErrorBoundaryRetry(un,c)}),useClearResetErrorBoundary(c);const[g]=reactExports.useState(()=>new QueriesObserver(i,d,o)),[b,en,sn]=g.getOptimisticResult(d,o.combine),on=!s&&o.subscribed!==!1;reactExports.useSyncExternalStore(reactExports.useCallback(un=>on?g.subscribe(notifyManager.batchCalls(un)):noop,[g,on]),()=>g.getCurrentResult(),()=>g.getCurrentResult()),reactExports.useEffect(()=>{g.setQueries(d,o)},[d,o,g]);const dn=b.some((un,gn)=>shouldSuspend(d[gn],un))?b.flatMap((un,gn)=>{const tn=d[gn];if(tn){const j=new QueryObserver(i,tn);if(shouldSuspend(tn,un))return fetchOptimistic(tn,j,c);willFetch(un,s)&&fetchOptimistic(tn,j,c)}return[]}):[];if(dn.length>0)throw Promise.all(dn);const pn=b.find((un,gn)=>{const tn=d[gn];return tn&&getHasError({result:un,errorResetBoundary:c,throwOnError:tn.throwOnError,query:i.getQueryCache().get(tn.queryHash),suspense:tn.suspense})});if(pn!=null&&pn.error)throw pn.error;return en(sn())}function useBaseQuery(e,o,a){var on,ln,dn,pn,un;const i=useIsRestoring(),s=useQueryErrorResetBoundary(),c=useQueryClient(),d=c.defaultQueryOptions(e);(ln=(on=c.getDefaultOptions().queries)==null?void 0:on._experimental_beforeQuery)==null||ln.call(on,d),d._optimisticResults=i?"isRestoring":"optimistic",ensureSuspenseTimers(d),ensurePreventErrorBoundaryRetry(d,s),useClearResetErrorBoundary(s);const g=!c.getQueryCache().get(d.queryHash),[b]=reactExports.useState(()=>new o(c,d)),en=b.getOptimisticResult(d),sn=!i&&e.subscribed!==!1;if(reactExports.useSyncExternalStore(reactExports.useCallback(gn=>{const tn=sn?b.subscribe(notifyManager.batchCalls(gn)):noop;return b.updateResult(),tn},[b,sn]),()=>b.getCurrentResult(),()=>b.getCurrentResult()),reactExports.useEffect(()=>{b.setOptions(d)},[d,b]),shouldSuspend(d,en))throw fetchOptimistic(d,b,s);if(getHasError({result:en,errorResetBoundary:s,throwOnError:d.throwOnError,query:c.getQueryCache().get(d.queryHash),suspense:d.suspense}))throw en.error;if((pn=(dn=c.getDefaultOptions().queries)==null?void 0:dn._experimental_afterQuery)==null||pn.call(dn,d,en),d.experimental_prefetchInRender&&!isServer&&willFetch(en,i)){const gn=g?fetchOptimistic(d,b,s):(un=c.getQueryCache().get(d.queryHash))==null?void 0:un.promise;gn==null||gn.catch(noop).finally(()=>{b.updateResult()})}return d.notifyOnChangeProps?en:b.trackResult(en)}function useQuery(e,o){return useBaseQuery(e,QueryObserver)}function _defineProperty$1(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function ownKeys$1(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),a.push.apply(a,i)}return a}function _objectSpread2$1(e){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?ownKeys$1(Object(a),!0).forEach(function(i){_defineProperty$1(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys$1(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function _objectWithoutPropertiesLoose(e,o){if(e==null)return{};var a={},i=Object.keys(e),s,c;for(c=0;c<i.length;c++)s=i[c],!(o.indexOf(s)>=0)&&(a[s]=e[s]);return a}function _objectWithoutProperties(e,o){if(e==null)return{};var a=_objectWithoutPropertiesLoose(e,o),i,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)i=c[s],!(o.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function _slicedToArray(e,o){return _arrayWithHoles(e)||_iterableToArrayLimit(e,o)||_unsupportedIterableToArray(e,o)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,o){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var a=[],i=!0,s=!1,c=void 0;try{for(var d=e[Symbol.iterator](),g;!(i=(g=d.next()).done)&&(a.push(g.value),!(o&&a.length===o));i=!0);}catch(b){s=!0,c=b}finally{try{!i&&d.return!=null&&d.return()}finally{if(s)throw c}}return a}}function _unsupportedIterableToArray(e,o){if(e){if(typeof e=="string")return _arrayLikeToArray(e,o);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,o)}}function _arrayLikeToArray(e,o){(o==null||o>e.length)&&(o=e.length);for(var a=0,i=new Array(o);a<o;a++)i[a]=e[a];return i}function _nonIterableRest(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _defineProperty(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function ownKeys(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),a.push.apply(a,i)}return a}function _objectSpread2(e){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?ownKeys(Object(a),!0).forEach(function(i){_defineProperty(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function compose$1(){for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return function(i){return o.reduceRight(function(s,c){return c(s)},i)}}function curry$1(e){return function o(){for(var a=this,i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return s.length>=e.length?e.apply(this,s):function(){for(var d=arguments.length,g=new Array(d),b=0;b<d;b++)g[b]=arguments[b];return o.apply(a,[].concat(s,g))}}}function isObject$1(e){return{}.toString.call(e).includes("Object")}function isEmpty(e){return!Object.keys(e).length}function isFunction(e){return typeof e=="function"}function hasOwnProperty(e,o){return Object.prototype.hasOwnProperty.call(e,o)}function validateChanges(e,o){return isObject$1(o)||errorHandler$1("changeType"),Object.keys(o).some(function(a){return!hasOwnProperty(e,a)})&&errorHandler$1("changeField"),o}function validateSelector(e){isFunction(e)||errorHandler$1("selectorType")}function validateHandler(e){isFunction(e)||isObject$1(e)||errorHandler$1("handlerType"),isObject$1(e)&&Object.values(e).some(function(o){return!isFunction(o)})&&errorHandler$1("handlersType")}function validateInitial(e){e||errorHandler$1("initialIsRequired"),isObject$1(e)||errorHandler$1("initialType"),isEmpty(e)&&errorHandler$1("initialContent")}function throwError$1(e,o){throw new Error(e[o]||e.default)}var errorMessages$1={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},errorHandler$1=curry$1(throwError$1)(errorMessages$1),validators$1={changes:validateChanges,selector:validateSelector,handler:validateHandler,initial:validateInitial};function create(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};validators$1.initial(e),validators$1.handler(o);var a={current:e},i=curry$1(didStateUpdate)(a,o),s=curry$1(updateState)(a),c=curry$1(validators$1.changes)(e),d=curry$1(extractChanges)(a);function g(){var en=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(sn){return sn};return validators$1.selector(en),en(a.current)}function b(en){compose$1(i,s,c,d)(en)}return[g,b]}function extractChanges(e,o){return isFunction(o)?o(e.current):o}function updateState(e,o){return e.current=_objectSpread2(_objectSpread2({},e.current),o),o}function didStateUpdate(e,o,a){return isFunction(o)?o(e.current):Object.keys(a).forEach(function(i){var s;return(s=o[i])===null||s===void 0?void 0:s.call(o,e.current[i])}),a}var index={create},config$1={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}};function curry(e){return function o(){for(var a=this,i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return s.length>=e.length?e.apply(this,s):function(){for(var d=arguments.length,g=new Array(d),b=0;b<d;b++)g[b]=arguments[b];return o.apply(a,[].concat(s,g))}}}function isObject(e){return{}.toString.call(e).includes("Object")}function validateConfig(e){return e||errorHandler("configIsRequired"),isObject(e)||errorHandler("configType"),e.urls?(informAboutDeprecation(),{paths:{vs:e.urls.monacoBase}}):e}function informAboutDeprecation(){console.warn(errorMessages.deprecation)}function throwError(e,o){throw new Error(e[o]||e.default)}var errorMessages={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},errorHandler=curry(throwError)(errorMessages),validators={config:validateConfig},compose=function(){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return function(s){return a.reduceRight(function(c,d){return d(c)},s)}};function merge(e,o){return Object.keys(o).forEach(function(a){o[a]instanceof Object&&e[a]&&Object.assign(o[a],merge(e[a],o[a]))}),_objectSpread2$1(_objectSpread2$1({},e),o)}var CANCELATION_MESSAGE={type:"cancelation",msg:"operation is manually canceled"};function makeCancelable(e){var o=!1,a=new Promise(function(i,s){e.then(function(c){return o?s(CANCELATION_MESSAGE):i(c)}),e.catch(s)});return a.cancel=function(){return o=!0},a}var _state$create=index.create({config:config$1,isInitialized:!1,resolve:null,reject:null,monaco:null}),_state$create2=_slicedToArray(_state$create,2),getState=_state$create2[0],setState=_state$create2[1];function config(e){var o=validators.config(e),a=o.monaco,i=_objectWithoutProperties(o,["monaco"]);setState(function(s){return{config:merge(s.config,i),monaco:a}})}function init(){var e=getState(function(o){var a=o.monaco,i=o.isInitialized,s=o.resolve;return{monaco:a,isInitialized:i,resolve:s}});if(!e.isInitialized){if(setState({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),makeCancelable(wrapperPromise);if(window.monaco&&window.monaco.editor)return storeMonacoInstance(window.monaco),e.resolve(window.monaco),makeCancelable(wrapperPromise);compose(injectScripts,getMonacoLoaderScript)(configureLoader)}return makeCancelable(wrapperPromise)}function injectScripts(e){return document.body.appendChild(e)}function createScript(e){var o=document.createElement("script");return e&&(o.src=e),o}function getMonacoLoaderScript(e){var o=getState(function(i){var s=i.config,c=i.reject;return{config:s,reject:c}}),a=createScript("".concat(o.config.paths.vs,"/loader.js"));return a.onload=function(){return e()},a.onerror=o.reject,a}function configureLoader(){var e=getState(function(a){var i=a.config,s=a.resolve,c=a.reject;return{config:i,resolve:s,reject:c}}),o=window.require;o.config(e.config),o(["vs/editor/editor.main"],function(a){storeMonacoInstance(a),e.resolve(a)},function(a){e.reject(a)})}function storeMonacoInstance(e){getState().monaco||setState({monaco:e})}function __getMonacoInstance(){return getState(function(e){var o=e.monaco;return o})}var wrapperPromise=new Promise(function(e,o){return setState({resolve:e,reject:o})}),loader={config,init,__getMonacoInstance},le={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},v=le,ae={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Y=ae;function Me({children:e}){return React.createElement("div",{style:Y.container},e)}var Z=Me,$=Z;function Ee({width:e,height:o,isEditorReady:a,loading:i,_ref:s,className:c,wrapperProps:d}){return React.createElement("section",{style:{...v.wrapper,width:e,height:o},...d},!a&&React.createElement($,null,i),React.createElement("div",{ref:s,style:{...v.fullWidth,...!a&&v.hide},className:c}))}var ee=Ee,H=reactExports.memo(ee);function Ce(e){reactExports.useEffect(e,[])}var k=Ce;function he(e,o,a=!0){let i=reactExports.useRef(!0);reactExports.useEffect(i.current||!a?()=>{i.current=!1}:e,o)}var l=he;function D(){}function h(e,o,a,i){return De(e,i)||be(e,o,a,i)}function De(e,o){return e.editor.getModel(te(e,o))}function be(e,o,a,i){return e.editor.createModel(o,a,i?te(e,i):void 0)}function te(e,o){return e.Uri.parse(o)}function Oe({original:e,modified:o,language:a,originalLanguage:i,modifiedLanguage:s,originalModelPath:c,modifiedModelPath:d,keepCurrentOriginalModel:g=!1,keepCurrentModifiedModel:b=!1,theme:en="light",loading:sn="Loading...",options:on={},height:ln="100%",width:dn="100%",className:pn,wrapperProps:un={},beforeMount:gn=D,onMount:tn=D}){let[j,_e]=reactExports.useState(!1),[nn,an]=reactExports.useState(!0),cn=reactExports.useRef(null),mn=reactExports.useRef(null),yn=reactExports.useRef(null),hn=reactExports.useRef(tn),wn=reactExports.useRef(gn),En=reactExports.useRef(!1);k(()=>{let In=loader.init();return In.then(Tn=>(mn.current=Tn)&&an(!1)).catch(Tn=>(Tn==null?void 0:Tn.type)!=="cancelation"&&console.error("Monaco initialization: error:",Tn)),()=>cn.current?jn():In.cancel()}),l(()=>{if(cn.current&&mn.current){let In=cn.current.getOriginalEditor(),Tn=h(mn.current,e||"",i||a||"text",c||"");Tn!==In.getModel()&&In.setModel(Tn)}},[c],j),l(()=>{if(cn.current&&mn.current){let In=cn.current.getModifiedEditor(),Tn=h(mn.current,o||"",s||a||"text",d||"");Tn!==In.getModel()&&In.setModel(Tn)}},[d],j),l(()=>{let In=cn.current.getModifiedEditor();In.getOption(mn.current.editor.EditorOption.readOnly)?In.setValue(o||""):o!==In.getValue()&&(In.executeEdits("",[{range:In.getModel().getFullModelRange(),text:o||"",forceMoveMarkers:!0}]),In.pushUndoStop())},[o],j),l(()=>{var In,Tn;(Tn=(In=cn.current)==null?void 0:In.getModel())==null||Tn.original.setValue(e||"")},[e],j),l(()=>{let{original:In,modified:Tn}=cn.current.getModel();mn.current.editor.setModelLanguage(In,i||a||"text"),mn.current.editor.setModelLanguage(Tn,s||a||"text")},[a,i,s],j),l(()=>{var In;(In=mn.current)==null||In.editor.setTheme(en)},[en],j),l(()=>{var In;(In=cn.current)==null||In.updateOptions(on)},[on],j);let kn=reactExports.useCallback(()=>{var Ln;if(!mn.current)return;wn.current(mn.current);let In=h(mn.current,e||"",i||a||"text",c||""),Tn=h(mn.current,o||"",s||a||"text",d||"");(Ln=cn.current)==null||Ln.setModel({original:In,modified:Tn})},[a,o,s,e,i,c,d]),Nn=reactExports.useCallback(()=>{var In;!En.current&&yn.current&&(cn.current=mn.current.editor.createDiffEditor(yn.current,{automaticLayout:!0,...on}),kn(),(In=mn.current)==null||In.editor.setTheme(en),_e(!0),En.current=!0)},[on,en,kn]);reactExports.useEffect(()=>{j&&hn.current(cn.current,mn.current)},[j]),reactExports.useEffect(()=>{!nn&&!j&&Nn()},[nn,j,Nn]);function jn(){var Tn,Ln,bn,Sn;let In=(Tn=cn.current)==null?void 0:Tn.getModel();g||((Ln=In==null?void 0:In.original)==null||Ln.dispose()),b||((bn=In==null?void 0:In.modified)==null||bn.dispose()),(Sn=cn.current)==null||Sn.dispose()}return React.createElement(H,{width:dn,height:ln,isEditorReady:j,loading:sn,_ref:yn,className:pn,wrapperProps:un})}var ie=Oe;reactExports.memo(ie);function Pe(){let[e,o]=reactExports.useState(loader.__getMonacoInstance());return k(()=>{let a;return e||(a=loader.init(),a.then(i=>{o(i)})),()=>a==null?void 0:a.cancel()}),e}var Le=Pe;function He(e){let o=reactExports.useRef();return reactExports.useEffect(()=>{o.current=e},[e]),o.current}var se=He,_=new Map;function Ve({defaultValue:e,defaultLanguage:o,defaultPath:a,value:i,language:s,path:c,theme:d="light",line:g,loading:b="Loading...",options:en={},overrideServices:sn={},saveViewState:on=!0,keepCurrentModel:ln=!1,width:dn="100%",height:pn="100%",className:un,wrapperProps:gn={},beforeMount:tn=D,onMount:j=D,onChange:_e,onValidate:nn=D}){let[an,cn]=reactExports.useState(!1),[mn,yn]=reactExports.useState(!0),hn=reactExports.useRef(null),wn=reactExports.useRef(null),En=reactExports.useRef(null),kn=reactExports.useRef(j),Nn=reactExports.useRef(tn),jn=reactExports.useRef(),In=reactExports.useRef(i),Tn=se(c),Ln=reactExports.useRef(!1),bn=reactExports.useRef(!1);k(()=>{let vn=loader.init();return vn.then(Pn=>(hn.current=Pn)&&yn(!1)).catch(Pn=>(Pn==null?void 0:Pn.type)!=="cancelation"&&console.error("Monaco initialization: error:",Pn)),()=>wn.current?An():vn.cancel()}),l(()=>{var Pn,Rn,On,$n;let vn=h(hn.current,e||i||"",o||s||"",c||a||"");vn!==((Pn=wn.current)==null?void 0:Pn.getModel())&&(on&&_.set(Tn,(Rn=wn.current)==null?void 0:Rn.saveViewState()),(On=wn.current)==null||On.setModel(vn),on&&(($n=wn.current)==null||$n.restoreViewState(_.get(c))))},[c],an),l(()=>{var vn;(vn=wn.current)==null||vn.updateOptions(en)},[en],an),l(()=>{!wn.current||i===void 0||(wn.current.getOption(hn.current.editor.EditorOption.readOnly)?wn.current.setValue(i):i!==wn.current.getValue()&&(bn.current=!0,wn.current.executeEdits("",[{range:wn.current.getModel().getFullModelRange(),text:i,forceMoveMarkers:!0}]),wn.current.pushUndoStop(),bn.current=!1))},[i],an),l(()=>{var Pn,Rn;let vn=(Pn=wn.current)==null?void 0:Pn.getModel();vn&&s&&((Rn=hn.current)==null||Rn.editor.setModelLanguage(vn,s))},[s],an),l(()=>{var vn;g!==void 0&&((vn=wn.current)==null||vn.revealLine(g))},[g],an),l(()=>{var vn;(vn=hn.current)==null||vn.editor.setTheme(d)},[d],an);let Sn=reactExports.useCallback(()=>{var vn;if(!(!En.current||!hn.current)&&!Ln.current){Nn.current(hn.current);let Pn=c||a,Rn=h(hn.current,i||e||"",o||s||"",Pn||"");wn.current=(vn=hn.current)==null?void 0:vn.editor.create(En.current,{model:Rn,automaticLayout:!0,...en},sn),on&&wn.current.restoreViewState(_.get(Pn)),hn.current.editor.setTheme(d),g!==void 0&&wn.current.revealLine(g),cn(!0),Ln.current=!0}},[e,o,a,i,s,c,en,sn,on,d,g]);reactExports.useEffect(()=>{an&&kn.current(wn.current,hn.current)},[an]),reactExports.useEffect(()=>{!mn&&!an&&Sn()},[mn,an,Sn]),In.current=i,reactExports.useEffect(()=>{var vn,Pn;an&&_e&&((vn=jn.current)==null||vn.dispose(),jn.current=(Pn=wn.current)==null?void 0:Pn.onDidChangeModelContent(Rn=>{bn.current||_e(wn.current.getValue(),Rn)}))},[an,_e]),reactExports.useEffect(()=>{if(an){let vn=hn.current.editor.onDidChangeMarkers(Pn=>{var On;let Rn=(On=wn.current.getModel())==null?void 0:On.uri;if(Rn&&Pn.find($n=>$n.path===Rn.path)){let $n=hn.current.editor.getModelMarkers({resource:Rn});nn==null||nn($n)}});return()=>{vn==null||vn.dispose()}}return()=>{}},[an,nn]);function An(){var vn,Pn;(vn=jn.current)==null||vn.dispose(),ln?on&&_.set(c,wn.current.saveViewState()):(Pn=wn.current.getModel())==null||Pn.dispose(),wn.current.dispose()}return React.createElement(H,{width:dn,height:pn,isEditorReady:an,loading:b,_ref:En,className:un,wrapperProps:gn})}var fe=Ve,de=reactExports.memo(fe),Ft=de,prism={exports:{}};(function(e){var o=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(i){var s=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,c=0,d={},g={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function j(_e){return _e instanceof b?new b(_e.type,j(_e.content),_e.alias):Array.isArray(_e)?_e.map(j):_e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(j){return Object.prototype.toString.call(j).slice(8,-1)},objId:function(j){return j.__id||Object.defineProperty(j,"__id",{value:++c}),j.__id},clone:function j(_e,nn){nn=nn||{};var an,cn;switch(g.util.type(_e)){case"Object":if(cn=g.util.objId(_e),nn[cn])return nn[cn];an={},nn[cn]=an;for(var mn in _e)_e.hasOwnProperty(mn)&&(an[mn]=j(_e[mn],nn));return an;case"Array":return cn=g.util.objId(_e),nn[cn]?nn[cn]:(an=[],nn[cn]=an,_e.forEach(function(yn,hn){an[hn]=j(yn,nn)}),an);default:return _e}},getLanguage:function(j){for(;j;){var _e=s.exec(j.className);if(_e)return _e[1].toLowerCase();j=j.parentElement}return"none"},setLanguage:function(j,_e){j.className=j.className.replace(RegExp(s,"gi"),""),j.classList.add("language-"+_e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(an){var j=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(an.stack)||[])[1];if(j){var _e=document.getElementsByTagName("script");for(var nn in _e)if(_e[nn].src==j)return _e[nn]}return null}},isActive:function(j,_e,nn){for(var an="no-"+_e;j;){var cn=j.classList;if(cn.contains(_e))return!0;if(cn.contains(an))return!1;j=j.parentElement}return!!nn}},languages:{plain:d,plaintext:d,text:d,txt:d,extend:function(j,_e){var nn=g.util.clone(g.languages[j]);for(var an in _e)nn[an]=_e[an];return nn},insertBefore:function(j,_e,nn,an){an=an||g.languages;var cn=an[j],mn={};for(var yn in cn)if(cn.hasOwnProperty(yn)){if(yn==_e)for(var hn in nn)nn.hasOwnProperty(hn)&&(mn[hn]=nn[hn]);nn.hasOwnProperty(yn)||(mn[yn]=cn[yn])}var wn=an[j];return an[j]=mn,g.languages.DFS(g.languages,function(En,kn){kn===wn&&En!=j&&(this[En]=mn)}),mn},DFS:function j(_e,nn,an,cn){cn=cn||{};var mn=g.util.objId;for(var yn in _e)if(_e.hasOwnProperty(yn)){nn.call(_e,yn,_e[yn],an||yn);var hn=_e[yn],wn=g.util.type(hn);wn==="Object"&&!cn[mn(hn)]?(cn[mn(hn)]=!0,j(hn,nn,null,cn)):wn==="Array"&&!cn[mn(hn)]&&(cn[mn(hn)]=!0,j(hn,nn,yn,cn))}}},plugins:{},highlightAll:function(j,_e){g.highlightAllUnder(document,j,_e)},highlightAllUnder:function(j,_e,nn){var an={callback:nn,container:j,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};g.hooks.run("before-highlightall",an),an.elements=Array.prototype.slice.apply(an.container.querySelectorAll(an.selector)),g.hooks.run("before-all-elements-highlight",an);for(var cn=0,mn;mn=an.elements[cn++];)g.highlightElement(mn,_e===!0,an.callback)},highlightElement:function(j,_e,nn){var an=g.util.getLanguage(j),cn=g.languages[an];g.util.setLanguage(j,an);var mn=j.parentElement;mn&&mn.nodeName.toLowerCase()==="pre"&&g.util.setLanguage(mn,an);var yn=j.textContent,hn={element:j,language:an,grammar:cn,code:yn};function wn(kn){hn.highlightedCode=kn,g.hooks.run("before-insert",hn),hn.element.innerHTML=hn.highlightedCode,g.hooks.run("after-highlight",hn),g.hooks.run("complete",hn),nn&&nn.call(hn.element)}if(g.hooks.run("before-sanity-check",hn),mn=hn.element.parentElement,mn&&mn.nodeName.toLowerCase()==="pre"&&!mn.hasAttribute("tabindex")&&mn.setAttribute("tabindex","0"),!hn.code){g.hooks.run("complete",hn),nn&&nn.call(hn.element);return}if(g.hooks.run("before-highlight",hn),!hn.grammar){wn(g.util.encode(hn.code));return}if(_e&&i.Worker){var En=new Worker(g.filename);En.onmessage=function(kn){wn(kn.data)},En.postMessage(JSON.stringify({language:hn.language,code:hn.code,immediateClose:!0}))}else wn(g.highlight(hn.code,hn.grammar,hn.language))},highlight:function(j,_e,nn){var an={code:j,grammar:_e,language:nn};if(g.hooks.run("before-tokenize",an),!an.grammar)throw new Error('The language "'+an.language+'" has no grammar.');return an.tokens=g.tokenize(an.code,an.grammar),g.hooks.run("after-tokenize",an),b.stringify(g.util.encode(an.tokens),an.language)},tokenize:function(j,_e){var nn=_e.rest;if(nn){for(var an in nn)_e[an]=nn[an];delete _e.rest}var cn=new on;return ln(cn,cn.head,j),sn(j,cn,_e,cn.head,0),pn(cn)},hooks:{all:{},add:function(j,_e){var nn=g.hooks.all;nn[j]=nn[j]||[],nn[j].push(_e)},run:function(j,_e){var nn=g.hooks.all[j];if(!(!nn||!nn.length))for(var an=0,cn;cn=nn[an++];)cn(_e)}},Token:b};i.Prism=g;function b(j,_e,nn,an){this.type=j,this.content=_e,this.alias=nn,this.length=(an||"").length|0}b.stringify=function j(_e,nn){if(typeof _e=="string")return _e;if(Array.isArray(_e)){var an="";return _e.forEach(function(wn){an+=j(wn,nn)}),an}var cn={type:_e.type,content:j(_e.content,nn),tag:"span",classes:["token",_e.type],attributes:{},language:nn},mn=_e.alias;mn&&(Array.isArray(mn)?Array.prototype.push.apply(cn.classes,mn):cn.classes.push(mn)),g.hooks.run("wrap",cn);var yn="";for(var hn in cn.attributes)yn+=" "+hn+'="'+(cn.attributes[hn]||"").replace(/"/g,"&quot;")+'"';return"<"+cn.tag+' class="'+cn.classes.join(" ")+'"'+yn+">"+cn.content+"</"+cn.tag+">"};function en(j,_e,nn,an){j.lastIndex=_e;var cn=j.exec(nn);if(cn&&an&&cn[1]){var mn=cn[1].length;cn.index+=mn,cn[0]=cn[0].slice(mn)}return cn}function sn(j,_e,nn,an,cn,mn){for(var yn in nn)if(!(!nn.hasOwnProperty(yn)||!nn[yn])){var hn=nn[yn];hn=Array.isArray(hn)?hn:[hn];for(var wn=0;wn<hn.length;++wn){if(mn&&mn.cause==yn+","+wn)return;var En=hn[wn],kn=En.inside,Nn=!!En.lookbehind,jn=!!En.greedy,In=En.alias;if(jn&&!En.pattern.global){var Tn=En.pattern.toString().match(/[imsuy]*$/)[0];En.pattern=RegExp(En.pattern.source,Tn+"g")}for(var Ln=En.pattern||En,bn=an.next,Sn=cn;bn!==_e.tail&&!(mn&&Sn>=mn.reach);Sn+=bn.value.length,bn=bn.next){var An=bn.value;if(_e.length>j.length)return;if(!(An instanceof b)){var vn=1,Pn;if(jn){if(Pn=en(Ln,Sn,j,Nn),!Pn||Pn.index>=j.length)break;var Gn=Pn.index,Rn=Pn.index+Pn[0].length,On=Sn;for(On+=bn.value.length;Gn>=On;)bn=bn.next,On+=bn.value.length;if(On-=bn.value.length,Sn=On,bn.value instanceof b)continue;for(var $n=bn;$n!==_e.tail&&(On<Rn||typeof $n.value=="string");$n=$n.next)vn++,On+=$n.value.length;vn--,An=j.slice(Sn,On),Pn.index-=Sn}else if(Pn=en(Ln,0,An,Nn),!Pn)continue;var Gn=Pn.index,et=Pn[0],Kt=An.slice(0,Gn),uo=An.slice(Gn+et.length),qt=Sn+An.length;mn&&qt>mn.reach&&(mn.reach=qt);var Ht=bn.prev;Kt&&(Ht=ln(_e,Ht,Kt),Sn+=Kt.length),dn(_e,Ht,vn);var xo=new b(yn,kn?g.tokenize(et,kn):et,In,et);if(bn=ln(_e,Ht,xo),uo&&ln(_e,bn,uo),vn>1){var Yt={cause:yn+","+wn,reach:qt};sn(j,_e,nn,bn.prev,Sn,Yt),mn&&Yt.reach>mn.reach&&(mn.reach=Yt.reach)}}}}}}function on(){var j={value:null,prev:null,next:null},_e={value:null,prev:j,next:null};j.next=_e,this.head=j,this.tail=_e,this.length=0}function ln(j,_e,nn){var an=_e.next,cn={value:nn,prev:_e,next:an};return _e.next=cn,an.prev=cn,j.length++,cn}function dn(j,_e,nn){for(var an=_e.next,cn=0;cn<nn&&an!==j.tail;cn++)an=an.next;_e.next=an,an.prev=_e,j.length-=cn}function pn(j){for(var _e=[],nn=j.head.next;nn!==j.tail;)_e.push(nn.value),nn=nn.next;return _e}if(!i.document)return i.addEventListener&&(g.disableWorkerMessageHandler||i.addEventListener("message",function(j){var _e=JSON.parse(j.data),nn=_e.language,an=_e.code,cn=_e.immediateClose;i.postMessage(g.highlight(an,g.languages[nn],nn)),cn&&i.close()},!1)),g;var un=g.util.currentScript();un&&(g.filename=un.src,un.hasAttribute("data-manual")&&(g.manual=!0));function gn(){g.manual||g.highlightAll()}if(!g.manual){var tn=document.readyState;tn==="loading"||tn==="interactive"&&un&&un.defer?document.addEventListener("DOMContentLoaded",gn):window.requestAnimationFrame?window.requestAnimationFrame(gn):window.setTimeout(gn,16)}return g}(o);e.exports&&(e.exports=a),typeof commonjsGlobal<"u"&&(commonjsGlobal.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(s,c){var d={};d["language-"+c]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[c]},d.cdata=/^<!\[CDATA\[|\]\]>$/i;var g={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}};g["language-"+c]={pattern:/[\s\S]+/,inside:a.languages[c]};var b={};b[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:g},a.languages.insertBefore("markup","cdata",b)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(i,s){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:a.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(i){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var c=i.languages.markup;c&&(c.tag.addInlined("style","css"),c.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading…",s=function(un,gn){return"✖ Error "+un+" while fetching file: "+gn},c="✖ Error: File does not exist or is empty",d={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},g="data-src-status",b="loading",en="loaded",sn="failed",on="pre[data-src]:not(["+g+'="'+en+'"]):not(['+g+'="'+b+'"])';function ln(un,gn,tn){var j=new XMLHttpRequest;j.open("GET",un,!0),j.onreadystatechange=function(){j.readyState==4&&(j.status<400&&j.responseText?gn(j.responseText):j.status>=400?tn(s(j.status,j.statusText)):tn(c))},j.send(null)}function dn(un){var gn=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(un||"");if(gn){var tn=Number(gn[1]),j=gn[2],_e=gn[3];return j?_e?[tn,Number(_e)]:[tn,void 0]:[tn,tn]}}a.hooks.add("before-highlightall",function(un){un.selector+=", "+on}),a.hooks.add("before-sanity-check",function(un){var gn=un.element;if(gn.matches(on)){un.code="",gn.setAttribute(g,b);var tn=gn.appendChild(document.createElement("CODE"));tn.textContent=i;var j=gn.getAttribute("data-src"),_e=un.language;if(_e==="none"){var nn=(/\.(\w+)$/.exec(j)||[,"none"])[1];_e=d[nn]||nn}a.util.setLanguage(tn,_e),a.util.setLanguage(gn,_e);var an=a.plugins.autoloader;an&&an.loadLanguages(_e),ln(j,function(cn){gn.setAttribute(g,en);var mn=dn(gn.getAttribute("data-range"));if(mn){var yn=cn.split(/\r\n?|\n/g),hn=mn[0],wn=mn[1]==null?yn.length:mn[1];hn<0&&(hn+=yn.length),hn=Math.max(0,Math.min(hn-1,yn.length)),wn<0&&(wn+=yn.length),wn=Math.max(0,Math.min(wn,yn.length)),cn=yn.slice(hn,wn).join(`
`),gn.hasAttribute("data-start")||gn.setAttribute("data-start",String(hn+1))}tn.textContent=cn,a.highlightElement(tn)},function(cn){gn.setAttribute(g,sn),tn.textContent=cn})}}),a.plugins.fileHighlight={highlight:function(gn){for(var tn=(gn||document).querySelectorAll(on),j=0,_e;_e=tn[j++];)a.highlightElement(_e)}};var pn=!1;a.fileHighlight=function(){pn||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),pn=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(prism);var prismExports=prism.exports;const Prism$1=getDefaultExportFromCjs(prismExports),CodeBlock=({code:e,language:o,onClear:a})=>{const i=reactExports.useRef(null);return reactExports.useEffect(()=>{if(e&&e.trim()!=="Running..."){const s=setTimeout(()=>{i.current&&Prism$1.highlightElement(i.current)},50);return()=>clearTimeout(s)}},[e]),jsxRuntimeExports.jsxs("div",{style:{position:"relative"},children:[jsxRuntimeExports.jsx("pre",{className:`language-${o}`,style:{background:"#181818",color:"#8ac2ff",padding:12,borderRadius:4,marginTop:4,fontSize:13,overflowX:"auto",minHeight:40,paddingBottom:a?40:12},children:jsxRuntimeExports.jsx("code",{ref:i,className:`language-${o}`,children:e})}),a&&jsxRuntimeExports.jsx("button",{onClick:a,style:{position:"absolute",right:8,bottom:8,padding:"4px 10px",fontSize:11,zIndex:10,background:"#333",color:"#8ac2ff",border:"1px solid #444",borderRadius:3,cursor:"pointer",transition:"all 0.2s"},onMouseEnter:s=>{s.currentTarget.style.background="#444",s.currentTarget.style.color="#fff"},onMouseLeave:s=>{s.currentTarget.style.background="#333",s.currentTarget.style.color="#8ac2ff"},children:"Clear"})]})},indexTypes=`/// <reference path="./api.d.ts" />

declare global {
  const webflow: WebflowApi;
}

export {};
`,apiTypes=`/// <reference path="./brand.d.ts" />
/// <reference path="./styles.d.ts" />
/// <reference path="./pages.d.ts" />
/// <reference path="./elements.d.ts" />
/// <reference path="./element-presets.d.ts" />
/// <reference path="./components.d.ts" />
/// <reference path="./builder-element.d.ts" />
/// <reference path="./variables.d.ts" />
/// <reference path="./app-subscription.d.ts" />
/// <reference path="./assets.d.ts" />
/// <reference path="./app-modes-generated.d.ts" />
/// <reference path="./app-connections.d.ts" />

interface WebflowApi {
  /**
   * Get metadata about the current Site.
   * @returns A Promise that resolves to a record containing information about the site that is open in the
   * Designer, with the following properties:
   * - siteId: the unique ID of the current Webflow site.
   * - siteName: the name of the current Webflow site.
   * - shortName: a shortened reference to the name of the current Webflow site.
   * - isPasswordProtected: whether the site is password protected.
   * - isPrivateStaging: whether the site has private staging turned on or not.
   * - domains: an array of objects representing the domains associated with the site, each containing the following properties:
   *   - url: the URL of the domain.
   *   - lastPublished: the timestamp of the last time the domain was published.
   *   - default: a boolean indicating whether the domain is the default domain for the site.
   *   - stage: the target of the publish
   * @example
   * \`\`\`ts
   * const siteInfo = await webflow.getSiteInfo();
   * console.log('Site ID:', siteInfo.siteId);
   * console.log('Site Name:', siteInfo.siteName);
   * console.log('Shortened Site Name:', siteInfo.shortName);
   * console.log('Domains:', siteInfo.domains);
   * console.log('Workspace ID:', siteInfo.workspaceId);
   * console.log('Workspace Slug:', siteInfo.workspaceSlug);
   * \`\`\`
   */
  getSiteInfo(): Promise<{
    siteId: string;
    siteName: string;
    shortName: string;
    isPasswordProtected: boolean;
    isPrivateStaging: boolean;
    workspaceId: string;
    workspaceSlug: string;
    domains: Array<{
      url: string;
      lastPublished: string | null;
      default: boolean;
      stage: 'staging' | 'production';
    }>;
  }>;
  /**
   * Get the currently selected element in the Webflow Designer.
   * @returns A promise that resolves to one of the following:
   * - null: If no element is currently selected in the Designer
   * - AnyElement: an object representing the selected element, which can be of any type.
   * @example
   * \`\`\`ts
   * const selectedElement = await webflow.getSelectedElement();
   * if (selectedElement) {
   *   // Handle the selected element
   * } else {
   *   // No element is currently selected
   * }
   * \`\`\`
   */
  getSelectedElement(): Promise<null | AnyElement>;
  /**
   * Sets the currently selected element in the Webflow Designer.
   * @returns A promise that resolves to one of the following:
   * - null: If no element is able to be currently selected in the Designer
   * - AnyElement: an object representing the selected element, which can be of any type.
   * @example
   * \`\`\`ts
   * await webflow.setSelectedElement(element);
   * \`\`\`
   */
  setSelectedElement(element: AnyElement): Promise<null | AnyElement>;

  elementBuilder(elementPreset: ElementPreset<AnyElement>): BuilderElement;
  /**
   * Get the current media query breakpoint ID.
   * @returns A Promise that resolves to a BreakpointId which is a string representing the current media query
   * breakpoint. A BreakpointId is one of 'tiny', 'small', 'medium', 'main', 'large', 'xl', 'xxl'.
   * @example
   * \`\`\`ts
   * const breakpoint = await webflow.getMediaQuery();
   * console.log('Current Media Query:', breakpoint);
   * \`\`\`
   */
  getMediaQuery(): Promise<BreakpointId>;

  /**
   * Get the current pseudo mode.
   * @returns A Promise that resolves to a PseudoStateKey which is a string representing the current pseudo mode.
   * @example
   * \`\`\`ts
   * const pseudoMode = await webflow.getPseudoMode();
   * console.log('Current Pseudo Mode:', pseudoMode);
   * \`\`\`
   */
  getPseudoMode(): Promise<null | PseudoStateKey>;

  /**
   * Create a component by promoting a Root Element.
   * @param name - The name of the component.
   * @param rootElement - An Element that will become the Root Element of the Component.
   * @returns A Promise resolving to an object containing the newly created Component - with the id property.
   * @example
   * \`\`\`ts
   * const element = webflow.createDOM('div')
   * await webflow.registerComponent('Hero-Component', element)
   *
   * // Example Response
   * {id: '204d04de-bf48-5b5b-0ca8-6ec4c5364fd2'}
   * \`\`\`
   */
  registerComponent(
    name: string,
    root: AnyElement | ElementPreset<AnyElement> | Component
  ): Promise<Component>;
  /**
   * Delete a component from the Designer. If there are any instances of the Component within the site, they will
   * be converted to regular Elements.
   * @param component -  The component object you wish to delete.
   * @returns A Promise resolving that resolves when the Component is deleted.
   * @example
   * \`\`\`ts
   * const element = webflow.createDOM('div')
   * const heroComponent = await webflow.registerComponent('Hero-Component', element)
   * await webflow.unregisterComponent(heroComponent)
   * \`\`\`
   */
  unregisterComponent(component: Component): Promise<null>;
  /**
   * Fetch all Site-scoped components definitions. In order to edit a component, you’ll need to get a specific
   * Component instance.
   * @returns A Promise resolving to an array containing all Components from the currently open site in the
   * Designer - with the id property.
   * @example
   * \`\`\`ts
   *  const fetchedComponents = await webflow.getAllComponents();
   *
   * // Example Response
   * [
   * {id: "4a669354-353a-97eb-795c-4471b406e043"}
   * {id: 'd6e076e2-19a2-c4ae-9da3-ce3b0493b503'}
   * ]
   * \`\`\`
   */
  getAllComponents(): Promise<Array<Component>>;
  /**
   * Focus the designer on a Component. When a component is in focus, all Globals pertain specifically to that
   * Component, not the entire Site.
   * @param instance - A Component Instance that is present on the page. If there’s no current instance, you’ll
   * need to create one first.
   * @returns A Promise that resolves when the page switch is successful.
   * @example
   * \`\`\`ts
   * await webflow.enterComponent(heroComponentInstance);
   * \`\`\`
   */
  enterComponent(instance: ComponentElement): Promise<null>;
  /**
   * Return to the broader context of the entire site or page.
   * @returns A Promise that resolves when the page switch is successful.
   * @example
   * \`\`\`ts
   * await webflow.exitComponent();
   * \`\`\`
   */
  exitComponent(): Promise<null>;
  /**
   * Get Root element. When the designer is focused or "entered" into a Component, this method will get the
   * outermost element in the Component.
   * @returns The outermost element of the Page or Component.
   * @example
   * \`\`\`ts
   * // 🎉 Enter into  Component 🎉
   * await webflow.enterComponent(heroComponentInstance)
   * const root = await webflow.getRootElement()
   *
   * // Example Response
   * {id: '204d04de-bf48-5b5b-0ca8-6ec4c5364fd2'}
   * \`\`\`
   */
  getRootElement(): Promise<null | AnyElement>;
  /**
   * Fetch an array of all elements present on the current page of the Designer. If the Designer is editing a
   * component, the elements returned are those present in that Component.
   * @returns A Promise that resolves to an array of AnyElement objects. AnyElement represents various element
   * types available in a Webflow project. Each element type corresponds to different types of HTML elements or
   * components that can be used within the designer. You can see a full list of supported elements in our
   * designer extensions typing file.
   * @example
   * \`\`\`ts
   * const allElements = await webflow.getAllElements()
   * const paragraphs = allElements.flatMap(el => el.type === 'Paragraph' ? [el] : [])
   * paragraphs.forEach(el => {
   *   el.setTextContent('Hello')
   *   el.save()
   * })
   * \`\`\`
   */
  getAllElements(): Promise<Array<AnyElement>>;

  /**
   * Creates a new style with the provided name.
   * @param name - The name for the new style
   * @param opts - Options for the new style. An object containing the following properties:
   * - parent: A Style object representing the parent style block. Used for creating a combo class.
   * @returns a Promise that resolves to the Style object representing the newly created style.
   * @example
   * \`\`\`ts
   * const newStyle = await webflow.createStyle('myNewStyle');
   * console.log('New style created:', newStyle.id);
   *
   * const comboClass = await webflow.createStyle('myNewStyle', {parent: newStyle});
   * console.log('New combo class created: ', comboClass.id);
   * \`\`\`
   */
  createStyle(name: string, options?: {parent?: Style}): Promise<Style>;
  /**
   * Fetch a style by its name.
   * @param name - The name of the style to retrieve.
   * @returns A Promise that resolves to one of the following:
   * - null if no style with the given name is found.
   * - Style object representing the style with the specified name.
   * @example
   * \`\`\`ts
   * const styleName = 'myStyle';
   * const style = await webflow.getStyleByName(styleName);
   * if (style) {
   *   // Style found, handle it
   * } else {
   *   // Style not found
   * }
   * \`\`\`
   */
  getStyleByName(name: string): Promise<null | Style>;
  /**
   * Fetch an array of all styles available in the Webflow project.
   * @returns A Promise that resolves to an array of Style objects representing all the styles present on the
   * site that is open in the Designer.
   * @example
   * \`\`\`ts
   * const allStyles = await webflow.getAllStyles();
   * allStyles.forEach((style) => {
   *   // Process each style
   * });
   * \`\`\`
   */
  getAllStyles(): Promise<Array<Style>>;
  /**
   * Fetch the currently active page in the Webflow designer.
   * @returns A Promise that resolves to a Page object representing the current page open in the Designer.
   * @example
   * \`\`\`ts
   * const currentPage = await webflow.getCurrentPage();
   * console.log('Current Page:', currentPage);
   * \`\`\`
   */
  getCurrentPage(): Promise<Page>;
  /**
   * Fetch an array of all pages and folders in the Webflow project.
   * @returns A Promise that resolves to an array of Page and Folder objects representing all the pages
   * and folders of the site that is open in the Designer.
   * @example
   * \`\`\`ts
   * const items = await webflow.getAllPagesAndFolders();
   * items.forEach((item) => {
   *   // Process each page or folder
   * });
   * \`\`\`
   */
  getAllPagesAndFolders(): Promise<Array<Page | Folder>>;
  /**
   * Create a new page folder within the current Webflow project.
   * @returns A Promise that resolves to a Folder object representing a newly created folder for the site open in
   * the Designer.
   * @example
   * \`\`\`ts
   * const newFolder = await webflow.createPageFolder();
   * // Handle the new folder
   * \`\`\`
   */
  createPageFolder(): Promise<Folder>;
  /**
   * Create a new Page within the current Webflow project.
   * @returns A Promise that resolves to a Page object representing a newly created page for the site open in the Designer.
   * @example
   * \`\`\`ts
   * const newPage = await webflow.createPage();
   * // Handle the new page
   * \`\`\`
   */
  createPage(): Promise<Page>;
  /**
   * @param page - The Page object representing the target page to switch to.
   * @returns A Promise that resolves when the page switch is successful.
   * @example
   * \`\`\`ts
   * const targetPage = <Get the target page>;
   * await webflow.switchPage(targetPage);
   * // Page switched successfully
   * \`\`\`
   */
  switchPage(page: Page): Promise<null>;
  /**
   * Access the default variable collection.
   * @returns A Promise that resolves into a Collection.
   * @example
   * \`\`\`ts
   * const collection = webflow.getDefaultVariableCollection();
   * // This collection object can now be used to create variables or access variables within it
   * const variable = collection.getVariableByName('Space Cadet');
   * \`\`\`
   */
  getDefaultVariableCollection(): Promise<null | VariableCollection>;
  /**
   * Creates a new variable collection.
   * @param name - The name of the new variable collection.
   * @returns A Promise that resolves into a newly created Collection.
   * @example
   * \`\`\`ts
   * const collection = await webflow.createVariableCollection('My New Collection');
   * \`\`\`
   */
  createVariableCollection(name: string): Promise<VariableCollection>;

  /**
   * Fetches a variable collection by its id.
   * @param id - The id of the variable collection to fetch.
   * @returns A Promise that resolves into a Collection.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getVariableCollectionById('collectionId');
   * \`\`\`
   */
  getVariableCollectionById(
    id: VariableCollectionId
  ): Promise<VariableCollection | null>;

  /**
   * Fetches all variable collections.
   * @returns A Promise that resolves to an array of Collection objects.
   * @example
   * \`\`\`ts
   * const collections = await webflow.getAllVariableCollections();
   * \`\`\`
   */
  getAllVariableCollections(): Promise<Array<VariableCollection>>;

  /**
   * Removes the variable collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable collection was successful.
   * @example
   * \`\`\`ts
   * const collection = await webflow.removeVariableCollection('collectionId');
   * \`\`\`
   */
  removeVariableCollection(id: VariableCollectionId): Promise<boolean>;

  /**
   * Sets the extension size to one of predefined sizes or a custom size. If the specified custom size is larger than
   * the user's viewport size, the extension will default to the width/height of the browser's viewport.
   * @param size - The size to set the extension window to. One of 'default', 'comfortable', 'large', or an object
   * containing width and height keys.
   * @example
   * \`\`\`ts
   * await webflow.setExtensionSize("large") ;
   * // Perform actions for large window
   *
   * await webflow.setExtensionSize({width: 1000, height: 700}) ;
   * //Perform actions for this window size
   * \`\`\`
   */
  setExtensionSize(
    size:
      | 'default'
      | 'compact'
      | 'comfortable'
      | 'large'
      | {width: number; height: number}
  ): Promise<null>;
  /**
   * Notifies the user with a message using a specific style. Error messages provide user's with the opportunity to
   * close the Designer Extension.
   * @param opts - An object containing the following notification options:
   * - type: The type of notification to display. One of 'Error', 'Info', 'Success', 'Warning'.
   * - message: The message to display in the notification.
   * - dismissAfter: (optional) Number of milliseconds after which the notification will be auto-dismissed. If not provided, uses default 4000ms.
   * @returns A Promise that resolves when the notification is displayed to the user.
   * @example
   * \`\`\`ts
   * webflow.notify({ type: 'Info', message: 'Great work!' }); // General notification
   * webflow.notify({ type: 'Error', message: 'Something went wrong, try again!' }); // Error notification
   * webflow.notify({ type: 'Success', message: 'Successfully did something!' }); // Success notification
   * webflow.notify({ type: 'Warning', message: 'Something is not right, please check again!' }); // Warning notification
   * webflow.notify({ type: 'Error', message: 'Something went wrong!', dismissAfter: 5000 }); // Error notification with custom dismiss
   * \`\`\`
   */
  notify(opts: {
    type: 'Error' | 'Info' | 'Success' | 'Warning';
    message: string;
    dismissAfter?: number;
  }): Promise<void>;
  /**
   * Allows you to register your custom functions (callbacks) to be executed when certain events happen. This event
   * includes detecting a new Selected Element: You can subscribe to the 'selectedelement' event to be notified whenever a
   * different element is selected in the Webflow designer. This is useful if you want to perform specific actions or
   * updates based on the currently selected element. A null element signifies that no element is selected.
   * @param event - The name of the event to subscribe to, specifically 'selectedelement'.
   * @param callback - A callback function that will be invoked when the subscribed event is triggered. The specific
   * parameters passed to the callback depend on the event.
   * @returns An Unsubscribe function that can be used to unsubscribe from the event and stop receiving notifications.
   * @example
   * \`\`\`ts
   * // Subscribe to changes in the selected element
   * const selectedElementCallback = (element) => {
   *   if (element) {
   *     console.log('Selected Element:', element);
   *   } else {
   *     console.log('No element is currently selected.');
   *   }
   * };
   *
   * const unsubscribeSelectedElement = webflow.subscribe('selectedelement', selectedElementCallback);
   * \`\`\`
   */
  subscribe(
    event: 'selectedelement',
    callback: (element: null | AnyElement) => void
  ): Unsubscribe;
  /**
   * Allows you to register your custom functions (callbacks) to be executed when certain events happen. This event
   * includes detecting a Breakpoint Change: Use the ‘mediaquery’ event to stay informed as the designer switches between
   * breakpoints for desktops, tablets, or smartphones.
   * @param event - The name of the event to subscribe to, specifically 'mediaquery'.
   * @param callback - A callback function that will be invoked when the subscribed event is triggered. The specific
   * parameters passed to the callback depend on the event.
   * @returns An Unsubscribe function that can be used to unsubscribe from the event and stop receiving notifications.
   * @example
   * \`\`\`ts
   * // Subscribe to changes in the media query breakpoint
   * const mediaQueryCallback = (breakpoint) => {
   *   console.log('Media Query Breakpoint:', breakpoint);
   * };
   *
   * const unsubscribeMediaQuery = webflow.subscribe('mediaquery', mediaQueryCallback);
   * \`\`\`
   */
  subscribe(
    event: 'mediaquery',
    callback: (breakpoint: BreakpointId) => void
  ): Unsubscribe;
  /**
   * Allows you to register your custom functions (callbacks) to be executed when certain events happen. This event
   * includes detecting a Page Change: The 'currentpage' event allows you to respond when the user switches to a different
   * page in the Webflow designer. This can be handy if you want to load additional data or perform actions
   * specific to the selected page.
   * @param event - The name of the event to subscribe to, specifically 'currentpage'.
   * @param callback - A callback function that will be invoked when the subscribed event is triggered. The specific
   * parameters passed to the callback depend on the event.
   * @returns An Unsubscribe function that can be used to unsubscribe from the event and stop receiving notifications.
   * @example
   * \`\`\`ts
   * // Subscribe to changes in the currently active page
   * const currentPageCallback = (page) => {
   *   console.log('Current Page:', page);
   * };
   *
   * const unsubscribeCurrentPage = webflow.subscribe('currentpage', currentPageCallback);
   * \`\`\`
   */
  subscribe(event: 'currentpage', callback: (page: Page) => void): Unsubscribe;
  /**
   * Allows you to register your custom functions (callbacks) to be executed when certain events happen. This event
   * includes detecting a CMS Collection Item page change: The 'currentcmsitem' event allows you to respond when the user switches to a different
   * cms collection item page in the Webflow designer.
   * @param event - The name of the event to subscribe to, specifically 'currentcmsitem'.
   * @param callback - A callback function that will be invoked when the subscribed event is triggered. The current cms item id is passed to the callback.
   * @returns An Unsubscribe function that can be used to unsubscribe from the event and stop receiving notifications.
   * @example
   * \`\`\`ts
   * // Subscribe to changes in the currently active page
   * const currentCmsItemCallback = (cmsItemId) => {
   *   console.log('Cms item change', cmsItemId);
   * };
   *
   * const unsubscribeCurrentCmsItem = webflow.subscribe('currentcmsitem', currentCmsItemCallback);
   * \`\`\`
   */
  subscribe(
    event: 'currentcmsitem',
    callback: (cmsItemId: null | string) => void
  ): Unsubscribe;

  subscribe(event: 'currentappmode', callback: () => void): Unsubscribe;

  subscribe(
    event: 'pseudomode',
    callback: (pseudoMode: null | PseudoStateKey) => void
  ): Unsubscribe;

  getIdToken(): Promise<string>;
  getAppSubscriptions(): Promise<Array<AppSubscription>>;
  elementPresets: ElementPresets;
  /**
   * Removes the Style from the site.
   * @example
   * \`\`\`ts
   * await webflow.removeStyle(style);
   * \`\`\`
   */
  removeStyle(style: Style): Promise<null>;

  /**
   * Create a new asset, associated with the site
   * @example
   * \`\`\`ts
   * const fileBlob = new File([blob], 'cat.png', { type: 'image/png' });
   * const asset = await webflow.createAsset(fileBlob);
   * \`\`\`
   */
  createAsset(fileBlob: File): Promise<Asset>;

  /**
   * Gets an asset by its id
   * @example
   * \`\`\`ts
   * const asset = await webflow.getAssetById('1234');
   * \`\`\`
   * @param id
   */
  getAssetById(id: AssetId): Promise<null | Asset>;

  /**
   * Gets all assets for the site
   * @example
   * \`\`\`ts
   * const assets = await webflow.getAllAssets();
   * \`\`\`
   */
  getAllAssets(): Promise<Array<Asset>>;

  /**
   * Gets all asset folders for the site
   * @example
   * \`\`\`ts
   * const assetFolders = await webflow.getAssetFolders();
   * console.log('Asset folders:', assetFolders);
   * \`\`\`
   * @returns A Promise that resolves to an array of AssetFolder objects
   */
  getAllAssetFolders(): Promise<Array<AssetFolder>>;

  /**
   * Creates a new asset folder within a given site
   * @param name - The name of the new asset folder.
   * @param parentFolderId - Optional. The ID of the parent folder. If not provided, the folder will be created at the root level.
   * @returns A Promise that resolves to the newly created AssetFolder object.
   * @example
   * \`\`\`ts
   * const newFolder = await webflow.createAssetFolder('My New Folder');
   * console.log('New folder created:', newFolder.id);
   * \`\`\`
   */
  createAssetFolder(
    name: string,
    parentFolderId?: string
  ): Promise<AssetFolder>;

  /**
   * Checks if the user has the ability to perform the given App Mode
   * @param appModes
   */
  canForAppMode(appModes: Array<AppMode>): Promise<{[key in AppMode]: boolean}>;

  /**
   * The list of App Modes that are available to be queried
   * \`\`\`ts
   * await canForAppMode([webflow.appModes.canDesign, webflow.appModes.canEdit]);
   * \`\`\`
   */
  appModes: {[key in AppMode]: AppMode};

  /**
   * Closes the extension
   * \`\`\`ts
   * await webflow.closeExtension();
   * \`\`\`
   */
  closeExtension(): Promise<null>;

  /**
   * Gets the current App connection
   * \`\`\`ts
   * const appConnection = await webflow.getCurrentAppConnection();
   * \`\`\`
   */
  getCurrentAppConnection(): Promise<null | string>;

  /**
   * Gets the current App connection resource
   * \`\`\`ts
   * const appConnectionResource = await webflow.getCurrentAppConnectionResource();
   * \`\`\`
   */
  getCurrentAppConnectionResource(): Promise<null | AppConnectionResource>;

  /**
   * Gets the current App launch context (i.e how the app was launched)
   * \`\`\`ts
   * const launchContext = await webflow.getLaunchContext();
   * \`\`\`
   */
  getLaunchContext(): Promise<null | LaunchContext>;
}

type Unsubscribe = () => void;
`,stylesTypes=`/// <reference path="./styles-generated.d.ts" />

interface Style {
  readonly id: StyleId;

  /**
   * Retrieve the name of the Style.
   * @example
   * \`\`\`ts
   * let styleName = await myStyle.getName();
   * console.log("Style Name:", styleName);
   * \`\`\`
   */
  getName(): Promise<string>;
  /**
   * Retrieve the properties of the style.
   * @param options - Options to filter properties based on breakpoints and pseudo classes / states.
   * @returns CSS properties and their values for the given breakpoint and pseudo-state.
   * @example
   * \`\`\`ts
   * let styleProperties = myStyle.getProperties();
   * console.log("Style Properties:", styleProperties);
   * \`\`\`
   */
  getProperties(options?: BreakpointAndPseudo): Promise<PropertyMap>;
  /**
   * Sets CSS properties for the Style at the given breakpoint and pseudo-state.
   * @param props - The new properties to set for the style. You can use variables here as well.
   * @param options - Options to filter properties based on breakpoints and pseudo classes / states.
   * @example
   * \`\`\`ts
   * myStyle.setProperties({ color: 'red', 'font-size': '16px' }, { breakpoint: 'main', pseudo: 'hover' });
   * \`\`\`
   */
  setProperties(
    props: PropertyMap,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  removeProperties(
    props: Array<StyleProperty>,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  /**
   * Retrieve the value of a specific property of the style.
   * @param prop - The name of the property to retrieve.
   * @param options - Options to get property based on breakpoints and pseudo classes / states.
   * @returns Returns the value of a specific CSS property for the given breakpoint and pseudo-state, or null if the property does not exist.
   * @example
   * \`\`\`ts
   * let color = myStyle.getProperty('color', { breakpoint: 'main', pseudo: 'hover' });
   * let fontSize = myStyle.getProperty("fontSize");
   * console.log("Font Size:", fontSize);
   * \`\`\`
   */
  getProperty<p extends StyleProperty>(
    prop: p,
    options?: BreakpointAndPseudo
  ): Promise<null | PropertyMap[p]>;
  /**
   * Sets a specific CSS property for the Style at the given breakpoint and pseudo-state.
   * @param prop - The name of the property to set.
   * @param value - The new value to set for the property.
   * @param options - Options to set property based on breakpoints and pseudo classes / states.
   * @example
   * \`\`\`ts
   * myStyle.setProperty('color', 'blue', { breakpoint: 'main', pseudo: 'hover' });
   * \`\`\`
   */
  setProperty<p extends StyleProperty>(
    prop: p,
    value: NonNullable<PropertyMap[p]>,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  removeProperty(
    prop: StyleProperty,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  /**
   * Removes all CSS properties from the Style.
   * @example
   * \`\`\`ts
   * await myStyle.removeAllProperties();
   * \`\`\`
   */
  removeAllProperties(): Promise<null>;
  /**
   * Returns true if the style is a combo class.
   * @example
   * \`\`\`ts
   * const isComboClass = await myStyle.isComboClass();
   * console.log("Is Combo Class:", isComboClass);
   * \`\`\`
   */
  isComboClass(): boolean;
  /**
   * Retrieve a variable mode from the style.
   * @param collection - The collection from which to get the currently applied mode.
   * @param options - Options to get variable mode based on breakpoints and pseudo classes / states.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getVariableCollectionById('collection-id');
   * let variableMode = await myStyle.getVariableMode(collection);
   * \`\`\`
   */
  getVariableMode(
    collection: VariableCollection,
    options?: BreakpointAndPseudo
  ): Promise<null | VariableMode>;
  /**
   * Sets a variable mode for the style.
   * @param collection - The collection that the mode being set belongs to.
   * @param mode - The variable mode to set.
   * @param options - Options to set variable mode based on breakpoints and pseudo classes / states.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getVariableCollectionById('collection-id');
   * const mode = await collection.getVariableModeByName('Dark');
   * await myStyle.setVariableMode(collection, mode);
   * \`\`\`
   */
  setVariableMode(
    collection: VariableCollection,
    mode: VariableMode,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  /**
   * Removes a variable mode from the style.
   * @param collection - The collection that the mode being removed belongs to.
   * @param options - Options to remove variable mode based on breakpoints and pseudo classes / states.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getVariableCollectionById('collection-id');
   * await myStyle.removeVariableMode(collection)
   * \`\`\`
   */
  removeVariableMode(
    collection: VariableCollection,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  /**
   * Retrieve all variable modes applied on the style.
   * @param options - Options to get variable modes based on breakpoints and pseudo classes / states.
   * @example
   * \`\`\`ts
   * const modes = await myStyle.getVariableModes();
   * \`\`\`
   */
  getVariableModes(
    options?: BreakpointAndPseudo
  ): Promise<VariableModeStylePropertyMap>;
  /**
   * Sets variable modes for the style.
   * @param props - The variable modes to set.
   * @param options - Options to set variable modes based on breakpoints and pseudo classes / states.
   * @example
   * \`\`\`ts
   * await myStyle.setVariableModes({
   *   'collection-id-1': 'mode-id-1',
   *   'collection-id-2': 'mode-id-2',
   * });
   * \`\`\`
   */
  setVariableModes(
    props: VariableModeStylePropertyMap,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  /**
   * Removes variable modes from the style.
   * @param modes - The variable modes to remove from the style.
   * @param options - Options to remove variable modes based on breakpoints and pseudo classes / states.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getVariableCollectionById('collection-id');
   * const mode = await collection.getVariableModeByName('Dark');
   * const modeTwo = await collection.getVariableModeByName('Light');
   * await myStyle.removeVariableModes([mode, modeTwo]);
   * \`\`\`
   */
  removeVariableModes(
    modes: Array<VariableMode>,
    options?: BreakpointAndPseudo
  ): Promise<null>;
  /**
   * Removes all variable modes from the style.
   * @param options - Options to remove all variable modes based on breakpoints and pseudo classes / states.
   * @example
   * \`\`\`ts
   * await myStyle.removeAllVariableModes();
   * \`\`\`
   */
  removeAllVariableModes(options?: BreakpointAndPseudo): Promise<null>;
}

type StyleId = string;

type BreakpointAndPseudo = {
  breakpoint?: BreakpointId;
  pseudo?: PseudoStateKey;
};

type BreakpointId =
  | 'xxl'
  | 'xl'
  | 'large'
  | 'main'
  | 'medium'
  | 'small'
  | 'tiny';

type VariableModeStylePropertyMap = {
  [collectionId: VariableCollectionId]: VariableModeId;
};
`,stylesGeneratedTypes=`// This file was automatically generated. See designer-extensions docs.

type PropertyMap = {
  'accent-color'?: string | ColorVariable;
  'align-content'?: string;
  'align-items'?: string;
  'align-self'?: string;
  'animation-delay'?: string;
  'animation-direction'?: string;
  'animation-duration'?: string;
  'animation-fill-mode'?: string;
  'animation-iteration-count'?: string;
  'animation-name'?: string;
  'animation-play-state'?: string;
  'animation-timing-function'?: string;
  appearance?: string;
  'backdrop-filter'?: string | SizeVariable;
  'backface-visibility'?: string;
  'background-attachment'?: string;
  'background-blend-mode'?: string;
  'background-clip'?: string;
  'background-color'?: string | ColorVariable;
  'background-image'?: string | ColorVariable;
  'background-origin'?: string;
  'background-position'?: string;
  'background-position-x'?: string | SizeVariable;
  'background-position-y'?: string | SizeVariable;
  'background-repeat'?: string;
  'background-size'?: string;
  'block-size'?: string | SizeVariable;
  'border-block-end-color'?: string | ColorVariable;
  'border-block-end-style'?: string;
  'border-block-end-width'?: string | SizeVariable;
  'border-block-start-color'?: string | ColorVariable;
  'border-block-start-style'?: string;
  'border-block-start-width'?: string | SizeVariable;
  'border-bottom-color'?: string | ColorVariable;
  'border-bottom-left-radius'?: string | SizeVariable | PercentageVariable;
  'border-bottom-right-radius'?: string | SizeVariable | PercentageVariable;
  'border-bottom-style'?: string;
  'border-bottom-width'?: string | SizeVariable;
  'border-collapse'?: string;
  'border-color'?: string | ColorVariable;
  'border-end-end-radius'?: string | SizeVariable;
  'border-end-start-radius'?: string | SizeVariable;
  'border-image-outset'?: string | SizeVariable;
  'border-image-repeat'?: string;
  'border-image-slice'?: string;
  'border-image-source'?: string;
  'border-image-width'?: string | SizeVariable;
  'border-inline-end-color'?: string | ColorVariable;
  'border-inline-end-style'?: string;
  'border-inline-end-width'?: string | SizeVariable;
  'border-inline-start-color'?: string | ColorVariable;
  'border-inline-start-style'?: string;
  'border-inline-start-width'?: string | SizeVariable;
  'border-left-color'?: string | ColorVariable;
  'border-left-style'?: string;
  'border-left-width'?: string | SizeVariable;
  'border-radius'?: string | SizeVariable | PercentageVariable;
  'border-right-color'?: string | ColorVariable;
  'border-right-style'?: string;
  'border-right-width'?: string | SizeVariable;
  'border-start-end-radius'?: string | SizeVariable;
  'border-start-start-radius'?: string | SizeVariable;
  'border-top-color'?: string | ColorVariable;
  'border-top-left-radius'?: string | SizeVariable | PercentageVariable;
  'border-top-right-radius'?: string | SizeVariable | PercentageVariable;
  'border-top-style'?: string;
  'border-top-width'?: string | SizeVariable;
  'border-width'?: string | SizeVariable;
  bottom?: string | SizeVariable | PercentageVariable;
  'box-shadow'?: string | SizeVariable;
  'box-sizing'?: string;
  'break-after'?: string;
  'break-before'?: string;
  'break-inside'?: string;
  'caption-side'?: string;
  'caret-color'?: string | ColorVariable;
  clear?: string;
  clip?: string;
  'clip-path'?: string;
  'clip-rule'?: string;
  color?: string | ColorVariable;
  'color-interpolation'?: string;
  'color-interpolation-filters'?: string;
  'column-count'?: string;
  'column-gap'?: string | SizeVariable;
  'column-rule-color'?: string | ColorVariable;
  'column-rule-style'?: string;
  'column-rule-width'?: string | SizeVariable;
  'column-span'?: string;
  'column-width'?: string | SizeVariable;
  content?: string;
  cursor?: string;
  cx?: string;
  cy?: string;
  direction?: string;
  display?: string;
  'dominant-baseline'?: string;
  'empty-cells'?: string;
  fill?: string;
  'fill-opacity'?: string;
  'fill-rule'?: string;
  filter?: string | SizeVariable;
  'flex-basis'?: string | SizeVariable | PercentageVariable;
  'flex-direction'?: string;
  'flex-grow'?: string | NumberVariable;
  'flex-shrink'?: string | NumberVariable;
  'flex-wrap'?: string;
  float?: string;
  'flood-color'?: string | ColorVariable;
  'flood-opacity'?: string;
  'font-family'?: string | FontFamilyVariable;
  'font-kerning'?: string;
  'font-optical-sizing'?: string;
  'font-size'?: string | SizeVariable | PercentageVariable;
  'font-stretch'?: string;
  'font-style'?: string;
  'font-variant-alternates'?: string;
  'font-variant-caps'?: string;
  'font-variant-east-asian'?: string;
  'font-variant-ligatures'?: string;
  'font-variant-numeric'?: string;
  'font-weight'?: string | NumberVariable;
  'grid-auto-columns'?: string;
  'grid-auto-flow'?: string;
  'grid-auto-rows'?: string;
  'grid-column-end'?: string;
  'grid-column-gap'?: string | SizeVariable | PercentageVariable;
  'grid-column-start'?: string;
  'grid-row-end'?: string;
  'grid-row-gap'?: string | SizeVariable | PercentageVariable;
  'grid-row-start'?: string;
  'grid-template-areas'?: string;
  'grid-template-columns'?: string;
  'grid-template-rows'?: string;
  height?: string | SizeVariable | PercentageVariable;
  'image-orientation'?: string;
  'image-rendering'?: string;
  'inline-size'?: string | SizeVariable;
  'inset-block-end'?: string | SizeVariable;
  'inset-block-start'?: string | SizeVariable;
  'inset-inline-end'?: string | SizeVariable;
  'inset-inline-start'?: string | SizeVariable;
  isolation?: string;
  'justify-content'?: string;
  'justify-items'?: string;
  'justify-self'?: string;
  left?: string | SizeVariable | PercentageVariable;
  'letter-spacing'?: string | SizeVariable;
  'lighting-color'?: string | ColorVariable;
  'line-break'?: string;
  'line-height'?: string | SizeVariable | NumberVariable | PercentageVariable;
  'list-style-image'?: string;
  'list-style-position'?: string;
  'list-style-type'?: string;
  'margin-block-end'?: string | SizeVariable;
  'margin-block-start'?: string | SizeVariable;
  'margin-bottom'?: string | SizeVariable | PercentageVariable;
  'margin-inline-end'?: string | SizeVariable;
  'margin-inline-start'?: string | SizeVariable;
  'margin-left'?: string | SizeVariable | PercentageVariable;
  'margin-right'?: string | SizeVariable | PercentageVariable;
  'margin-top'?: string | SizeVariable | PercentageVariable;
  'marker-end'?: string;
  'marker-mid'?: string;
  'marker-start'?: string;
  'mask-type'?: string;
  'max-block-size'?: string | SizeVariable;
  'max-height'?: string | SizeVariable | PercentageVariable;
  'max-inline-size'?: string | SizeVariable;
  'max-width'?: string | SizeVariable | PercentageVariable;
  'min-block-size'?: string | SizeVariable;
  'min-height'?: string | SizeVariable | PercentageVariable;
  'min-inline-size'?: string | SizeVariable;
  'min-width'?: string | SizeVariable | PercentageVariable;
  'mix-blend-mode'?: string;
  'object-fit'?: string;
  'object-position'?: string;
  'offset-anchor'?: string;
  'offset-distance'?: string | SizeVariable;
  'offset-path'?: string;
  'offset-rotate'?: string;
  opacity?: string | NumberVariable | PercentageVariable;
  order?: string;
  'outline-color'?: string | ColorVariable;
  'outline-offset'?: string | SizeVariable;
  'outline-style'?: string;
  'outline-width'?: string | SizeVariable;
  'overflow-wrap'?: string;
  'overflow-x'?: string;
  'overflow-y'?: string;
  'overscroll-behavior-block'?: string;
  'overscroll-behavior-inline'?: string;
  'padding-block-end'?: string | SizeVariable;
  'padding-block-start'?: string | SizeVariable;
  'padding-bottom'?: string | SizeVariable | PercentageVariable;
  'padding-inline-end'?: string | SizeVariable;
  'padding-inline-start'?: string | SizeVariable;
  'padding-left'?: string | SizeVariable | PercentageVariable;
  'padding-right'?: string | SizeVariable | PercentageVariable;
  'padding-top'?: string | SizeVariable | PercentageVariable;
  'paint-order'?: string;
  perspective?: string | SizeVariable;
  'perspective-origin'?: string;
  'pointer-events'?: string;
  position?: string;
  r?: string | SizeVariable;
  resize?: string;
  right?: string | SizeVariable | PercentageVariable;
  rotate?: string;
  'row-gap'?: string | SizeVariable;
  rx?: string | SizeVariable;
  ry?: string | SizeVariable;
  scale?: string;
  'scroll-behavior'?: string;
  'scroll-margin-block-end'?: string | SizeVariable;
  'scroll-margin-block-start'?: string | SizeVariable;
  'scroll-margin-inline-end'?: string | SizeVariable;
  'scroll-margin-inline-start'?: string | SizeVariable;
  'scroll-padding-block-end'?: string | SizeVariable;
  'scroll-padding-block-start'?: string | SizeVariable;
  'scroll-padding-inline-end'?: string | SizeVariable;
  'scroll-padding-inline-start'?: string | SizeVariable;
  'shape-image-threshold'?: string;
  'shape-margin'?: string | SizeVariable;
  'shape-outside'?: string;
  'shape-rendering'?: string;
  'stop-color'?: string | ColorVariable;
  'stop-opacity'?: string;
  stroke?: string | ColorVariable;
  'stroke-dasharray'?: string;
  'stroke-dashoffset'?: string | SizeVariable;
  'stroke-linecap'?: string;
  'stroke-linejoin'?: string;
  'stroke-miterlimit'?: string;
  'stroke-opacity'?: string;
  'stroke-width'?: string | SizeVariable;
  'tab-size'?: string | SizeVariable;
  'table-layout'?: string;
  'text-align'?: string;
  'text-align-last'?: string;
  'text-anchor'?: string;
  'text-decoration'?: string;
  'text-decoration-color'?: string | ColorVariable;
  'text-decoration-line'?: string;
  'text-decoration-skip-ink'?: string;
  'text-decoration-style'?: string;
  'text-emphasis-color'?: string | ColorVariable;
  'text-emphasis-position'?: string;
  'text-emphasis-style'?: string;
  'text-indent'?: string | SizeVariable | PercentageVariable;
  'text-overflow'?: string;
  'text-rendering'?: string;
  'text-shadow'?: string | SizeVariable;
  'text-transform'?: string;
  'text-underline-position'?: string;
  top?: string | SizeVariable | PercentageVariable;
  'touch-action'?: string;
  transform?: string;
  'transform-origin'?: string;
  'transform-style'?: string;
  'transition-delay'?: string;
  'transition-duration'?: string;
  'transition-property'?: string;
  'transition-timing-function'?: string;
  translate?: string | SizeVariable;
  'unicode-bidi'?: string;
  'vector-effect'?: string;
  'vertical-align'?: string;
  visibility?: string;
  'white-space'?: string;
  width?: string | SizeVariable | PercentageVariable;
  'will-change'?: string;
  'word-break'?: string;
  'word-spacing'?: string | SizeVariable;
  'writing-mode'?: string;
  x?: string | SizeVariable;
  y?: string | SizeVariable;
  'z-index'?: string | NumberVariable;
  '-webkit-line-clamp'?: string;
  '-webkit-text-fill-color'?: string | ColorVariable;
  '-webkit-text-stroke-color'?: string | ColorVariable;
  '-webkit-text-stroke-width'?: string | SizeVariable;
};

type StyleProperty =
  | 'accent-color'
  | 'align-content'
  | 'align-items'
  | 'align-self'
  | 'animation-delay'
  | 'animation-direction'
  | 'animation-duration'
  | 'animation-fill-mode'
  | 'animation-iteration-count'
  | 'animation-name'
  | 'animation-play-state'
  | 'animation-timing-function'
  | 'appearance'
  | 'backdrop-filter'
  | 'backface-visibility'
  | 'background-attachment'
  | 'background-blend-mode'
  | 'background-clip'
  | 'background-color'
  | 'background-image'
  | 'background-origin'
  | 'background-position'
  | 'background-position-x'
  | 'background-position-y'
  | 'background-repeat'
  | 'background-size'
  | 'block-size'
  | 'border-block-end-color'
  | 'border-block-end-style'
  | 'border-block-end-width'
  | 'border-block-start-color'
  | 'border-block-start-style'
  | 'border-block-start-width'
  | 'border-bottom-color'
  | 'border-bottom-left-radius'
  | 'border-bottom-right-radius'
  | 'border-bottom-style'
  | 'border-bottom-width'
  | 'border-collapse'
  | 'border-color'
  | 'border-end-end-radius'
  | 'border-end-start-radius'
  | 'border-image-outset'
  | 'border-image-repeat'
  | 'border-image-slice'
  | 'border-image-source'
  | 'border-image-width'
  | 'border-inline-end-color'
  | 'border-inline-end-style'
  | 'border-inline-end-width'
  | 'border-inline-start-color'
  | 'border-inline-start-style'
  | 'border-inline-start-width'
  | 'border-left-color'
  | 'border-left-style'
  | 'border-left-width'
  | 'border-radius'
  | 'border-right-color'
  | 'border-right-style'
  | 'border-right-width'
  | 'border-start-end-radius'
  | 'border-start-start-radius'
  | 'border-top-color'
  | 'border-top-left-radius'
  | 'border-top-right-radius'
  | 'border-top-style'
  | 'border-top-width'
  | 'border-width'
  | 'bottom'
  | 'box-shadow'
  | 'box-sizing'
  | 'break-after'
  | 'break-before'
  | 'break-inside'
  | 'caption-side'
  | 'caret-color'
  | 'clear'
  | 'clip'
  | 'clip-path'
  | 'clip-rule'
  | 'color'
  | 'color-interpolation'
  | 'color-interpolation-filters'
  | 'column-count'
  | 'column-gap'
  | 'column-rule-color'
  | 'column-rule-style'
  | 'column-rule-width'
  | 'column-span'
  | 'column-width'
  | 'content'
  | 'cursor'
  | 'cx'
  | 'cy'
  | 'direction'
  | 'display'
  | 'dominant-baseline'
  | 'empty-cells'
  | 'fill'
  | 'fill-opacity'
  | 'fill-rule'
  | 'filter'
  | 'flex-basis'
  | 'flex-direction'
  | 'flex-grow'
  | 'flex-shrink'
  | 'flex-wrap'
  | 'float'
  | 'flood-color'
  | 'flood-opacity'
  | 'font-family'
  | 'font-kerning'
  | 'font-optical-sizing'
  | 'font-size'
  | 'font-stretch'
  | 'font-style'
  | 'font-variant-alternates'
  | 'font-variant-caps'
  | 'font-variant-east-asian'
  | 'font-variant-ligatures'
  | 'font-variant-numeric'
  | 'font-weight'
  | 'grid-auto-columns'
  | 'grid-auto-flow'
  | 'grid-auto-rows'
  | 'grid-column-end'
  | 'grid-column-gap'
  | 'grid-column-start'
  | 'grid-row-end'
  | 'grid-row-gap'
  | 'grid-row-start'
  | 'grid-template-areas'
  | 'grid-template-columns'
  | 'grid-template-rows'
  | 'height'
  | 'image-orientation'
  | 'image-rendering'
  | 'inline-size'
  | 'inset-block-end'
  | 'inset-block-start'
  | 'inset-inline-end'
  | 'inset-inline-start'
  | 'isolation'
  | 'justify-content'
  | 'justify-items'
  | 'justify-self'
  | 'left'
  | 'letter-spacing'
  | 'lighting-color'
  | 'line-break'
  | 'line-height'
  | 'list-style-image'
  | 'list-style-position'
  | 'list-style-type'
  | 'margin-block-end'
  | 'margin-block-start'
  | 'margin-bottom'
  | 'margin-inline-end'
  | 'margin-inline-start'
  | 'margin-left'
  | 'margin-right'
  | 'margin-top'
  | 'marker-end'
  | 'marker-mid'
  | 'marker-start'
  | 'mask-type'
  | 'max-block-size'
  | 'max-height'
  | 'max-inline-size'
  | 'max-width'
  | 'min-block-size'
  | 'min-height'
  | 'min-inline-size'
  | 'min-width'
  | 'mix-blend-mode'
  | 'object-fit'
  | 'object-position'
  | 'offset-anchor'
  | 'offset-distance'
  | 'offset-path'
  | 'offset-rotate'
  | 'opacity'
  | 'order'
  | 'outline-color'
  | 'outline-offset'
  | 'outline-style'
  | 'outline-width'
  | 'overflow-wrap'
  | 'overflow-x'
  | 'overflow-y'
  | 'overscroll-behavior-block'
  | 'overscroll-behavior-inline'
  | 'padding-block-end'
  | 'padding-block-start'
  | 'padding-bottom'
  | 'padding-inline-end'
  | 'padding-inline-start'
  | 'padding-left'
  | 'padding-right'
  | 'padding-top'
  | 'paint-order'
  | 'perspective'
  | 'perspective-origin'
  | 'pointer-events'
  | 'position'
  | 'r'
  | 'resize'
  | 'right'
  | 'rotate'
  | 'row-gap'
  | 'rx'
  | 'ry'
  | 'scale'
  | 'scroll-behavior'
  | 'scroll-margin-block-end'
  | 'scroll-margin-block-start'
  | 'scroll-margin-inline-end'
  | 'scroll-margin-inline-start'
  | 'scroll-padding-block-end'
  | 'scroll-padding-block-start'
  | 'scroll-padding-inline-end'
  | 'scroll-padding-inline-start'
  | 'shape-image-threshold'
  | 'shape-margin'
  | 'shape-outside'
  | 'shape-rendering'
  | 'stop-color'
  | 'stop-opacity'
  | 'stroke'
  | 'stroke-dasharray'
  | 'stroke-dashoffset'
  | 'stroke-linecap'
  | 'stroke-linejoin'
  | 'stroke-miterlimit'
  | 'stroke-opacity'
  | 'stroke-width'
  | 'tab-size'
  | 'table-layout'
  | 'text-align'
  | 'text-align-last'
  | 'text-anchor'
  | 'text-decoration'
  | 'text-decoration-color'
  | 'text-decoration-line'
  | 'text-decoration-skip-ink'
  | 'text-decoration-style'
  | 'text-emphasis-color'
  | 'text-emphasis-position'
  | 'text-emphasis-style'
  | 'text-indent'
  | 'text-overflow'
  | 'text-rendering'
  | 'text-shadow'
  | 'text-transform'
  | 'text-underline-position'
  | 'top'
  | 'touch-action'
  | 'transform'
  | 'transform-origin'
  | 'transform-style'
  | 'transition-delay'
  | 'transition-duration'
  | 'transition-property'
  | 'transition-timing-function'
  | 'translate'
  | 'unicode-bidi'
  | 'vector-effect'
  | 'vertical-align'
  | 'visibility'
  | 'white-space'
  | 'width'
  | 'will-change'
  | 'word-break'
  | 'word-spacing'
  | 'writing-mode'
  | 'x'
  | 'y'
  | 'z-index'
  | '-webkit-line-clamp'
  | '-webkit-text-fill-color'
  | '-webkit-text-stroke-color'
  | '-webkit-text-stroke-width';

type PseudoStateKey =
  | 'noPseudo'
  | 'nth-child(odd)'
  | 'nth-child(even)'
  | 'first-child'
  | 'last-child'
  | 'hover'
  | 'active'
  | 'pressed'
  | 'visited'
  | 'focus'
  | 'focus-visible'
  | 'focus-within'
  | 'placeholder'
  | 'empty'
  | 'before'
  | 'after';
`,pagesTypes=`interface Folder {
  readonly id: FolderId;
  readonly type: 'PageFolder';

  /**
   * Retrieve the name of the folder.
   * @example
   * \`\`\`ts
   * let folderName = await myFolder.getName();
   * console.log("Folder Name:", folderName);
   * \`\`\`
   */
  getName(): Promise<string>;
  /**
   * The new name to set for the folder.
   * @param name - The new name to set for the folder.
   * @example
   * \`\`\`ts
   * await myFolder.setName("New Folder Name");
   * \`\`\`
   */
  setName(name: string): Promise<null>;
  /**
   * Find out the slug of the folder.
   * @example
   * \`\`\`ts
   * await myFolder.getSlug();
   * \`\`\`
   */
  getSlug(): Promise<string>;
  /**
   * Choose a cool new slug for your folder.
   * @param slug - The new slug to set for the folder.
   * @example
   * \`\`\`ts
   * await myFolder.setSlug("new-folder-slug");
   * \`\`\`
   */
  setSlug(slug: string): Promise<null>;
  /**
   * Check if your folder has a parent folder, and if yes, get its details.
   * @example
   * \`\`\`ts
   *  myFolder.getParent().then((parentFolder) => {
   *   if (parentFolder) {
   *     console.log("Parent Folder Name:", parentFolder.getName());
   *   } else {
   *     console.log("No parent folder.");
   *   }
   * }).catch((error) => {
   *   console.error("Error while getting parent folder:", error);
   * });
   * \`\`\`
   */
  getParent(): Promise<null | Folder>;
  /**
   * Assign a new parent folder to your folder.
   * @param parent - The parent folder to set for the current folder.
   * @example
   * \`\`\`ts
   * await myFolder.setParent(parentFolder);
   * \`\`\`
   */
  setParent(parent: Folder): Promise<null>;
}

type PageMetadata = {
  name: string;
  slug: string;
  title: string;
  description: string;
  isDraft: boolean;
  usesTitleAsOpenGraphTitle: boolean;
  openGraphTitle: string;
  usesDescriptionAsOpenGraphDescription: boolean;
  openGraphDescription: string;
  openGraphImage: string;
  isExcludedFromSearch: boolean;
  usesTitleAsSearchTitle: boolean;
  searchTitle: string;
  usesDescriptionAsSearchDescription: boolean;
  searchDescription: string;
  usesOpenGraphImageAsSearchImage: boolean;
  searchImage: string;
};

interface Page {
  readonly id: PageId;
  readonly type: 'Page';

  /**
   * Retrieves the name of the page.
   * @example
   * \`\`\`ts
   * let pageName = await myPage.getName();
   * console.log("Page Name:", pageName);
   * \`\`\`
   */
  getName(): Promise<string>;
  /**
   * Sets the name of the page to the provided value.
   * @param name - The new name to set for the page.
   * @example
   * \`\`\`ts
   * await myPage.setName("New Page Name");
   * \`\`\`
   */
  setName(name: string): Promise<null>;
  getSlug(): Promise<string>;
  setSlug(slug: string): Promise<null>;
  getParent(): Promise<null | Folder>;
  setParent(parent: Folder): Promise<null>;
  /**
   * Sets the metadata of the page to the provided value;
   * @param metadata - object containing one or more metadata properties to update
   * @example
   * \`\`\`
   *  const updatedMetadata = await page.setMetadata({title: "New Page Title", isDraft: true, description: "New Page Description"});
   * \`\`\`
   */
  setMetadata(metadata: Partial<PageMetadata>): Promise<null>;
  /**
   * Retrieves the title of the page.
   * @example
   * \`\`\`ts
   * let pageTitle = await myPage.getTitle();
   * console.log("Page Title:", pageTitle);
   * \`\`\`
   */
  getTitle(): Promise<string>;
  /**
   * Sets the title of the page to the provided value.
   * @param title - The new title to set for the page. Passing null will unset the current value.
   * @example
   * \`\`\`ts
   * await myPage.setTitle("New Page Title");
   * \`\`\`
   */
  setTitle(title: string | null): Promise<null>;
  /**
   * Retrieves the description of the page.
   * @example
   * \`\`\`ts
   * let pageDescription = await myPage.getDescription();
   * console.log("Page Description:", pageDescription);
   * \`\`\`
   */
  getDescription(): Promise<string>;
  /**
   * Sets the description of the page to the provided value.
   * @param description - The new description to set for the page. Passing null will unset the current value.
   * @example
   * \`\`\`ts
   * await myPage.setDescription("New Page Description");
   * \`\`\`
   */
  setDescription(description: string | null): Promise<null>;
  /**
   * Checks if the page is in draft mode or not.
   * @example
   * \`\`\`ts
   * myPage.setDescription("New Page Description");
   * let isDraft = await myPage.isDraft();
   * console.log("Is Draft:", isDraft);
   * \`\`\`
   */
  isDraft(): Promise<boolean>;
  /**
   * Sets the draft mode of the page.
   * @param isDraft - Set to true to mark the page as a draft, false otherwise.
   * @example
   * \`\`\`ts
   * await myPage.setDraft(true);
   * \`\`\`
   */
  setDraft(isDraft: boolean): Promise<null>;
  /**
   * Checks if the page uses its title as the Open Graph title.
   * @example
   * \`\`\`ts
   * let usesTitleAsOpenGraphTitlegTitle = await myPage.usesTitleAsOpenGraphTitle();
   * console.log("Use Title as OG Title:", useTitleAsOpenGraphTitle);
   * \`\`\`
   */
  usesTitleAsOpenGraphTitle(): Promise<boolean>;
  /**
   * Sets whether the page should use its title as the Open Graph (OG) title.
   * @param use - Set to true to use the page title as the OG title, false otherwise.
   * @example
   * \`\`\`ts
   * await myPage.useTitleAsOpenGraphTitle(true);
   * \`\`\`
   */
  useTitleAsOpenGraphTitle(use: boolean): Promise<null>;
  /**
   * Retrieves the Open Graph title of the page.
   * @example
   * \`\`\`ts
   * let ogTitle = await myPage.getOpenGraphTitle();
   * console.log("OpenGraph Title:", ogTitle);
   * \`\`\`
   */
  getOpenGraphTitle(): Promise<string>;
  /**
   * Sets the Open Graph (OG) title of the page to the provided value.
   * @param title - The new OG title to set for the page. Passing null will unset the current value.
   * @example
   * \`\`\`ts
   * await myPage.setOpenGraphTitle("New OG Title");
   * \`\`\`
   */
  setOpenGraphTitle(title: string | null): Promise<null>;
  /**
   * Checks if the page uses its description as the Open Graph description.
   * @example
   * \`\`\`ts
   * let useDescriptionAsOpenGraphDescription = await myPage.usesDescriptionAsOpenGraphDescription();
   * console.log("Use Description as OG Description:", useDescriptionAsOpenGraphDescription);
   * \`\`\`
   */
  usesDescriptionAsOpenGraphDescription(): Promise<boolean>;
  /**
   * Sets whether the page should use its description as the Open Graph (OG) description.
   * @param use - Set to true to use the page description as the OG description, false otherwise.
   * @example
   * \`\`\`ts
   * myPage.useDescriptionAsOpenGraphDescription(true);
   * \`\`\`
   */
  useDescriptionAsOpenGraphDescription(use: boolean): Promise<null>;
  /**
   * Retrieves the Open Graph (OG) description of the page.
   * @example
   * \`\`\`ts
   * let ogDescription = await myPage.getOpenGraphDescription();
   * console.log("OG Description:", ogDescription);
   * \`\`\`
   */
  getOpenGraphDescription(): Promise<string>;
  /**
   * Sets the Open Graph (OG) description of the page to the provided value.
   * @param description - The new OG description to set for the page. Passing null will unset the current value.
   * @example
   * \`\`\`ts
   * myPage.setOpenGraphDescription("New OG Description");
   * \`\`\`
   */
  setOpenGraphDescription(description: string | null): Promise<null>;
  /**
   * Retrieves the URL of the Open Graph (OG) image associated with the page.
   * @example
   * \`\`\`ts
   * let ogImageUrl = await myPage.getOpenGraphImage();
   * console.log("OG Image URL:", ogImageUrl);
   * \`\`\`
   */
  getOpenGraphImage(): Promise<null | string>;
  /**
   * Sets the URL of the Open Graph (OG) image associated with the page.
   * @param url - The new URL of the OG image to set for the page. Passing null will unset the current value.
   * @example
   * \`\`\`ts
   * myPage.setOpenGraphImage("https://example.com/image.jpg");
   * \`\`\`
   */
  setOpenGraphImage(url: string | null): Promise<null>;
  /**
   * Checks if the page is excluded from search engine indexing.
   * @example
   * \`\`\`ts
   * let isExcluded = await myPage.isExcludedFromSearch();
   * console.log("Is Excluded from Search Indexing:", isExcluded);
   * \`\`\`
   */
  isExcludedFromSearch(): Promise<boolean>;
  /**
   * Sets whether the page should be excluded from search engine indexing.
   * @param shouldExclude - Set to true to exclude the page from search engine indexing, false otherwise.
   * @example
   * \`\`\`ts
   * myPage.excludeFromSearch(true);
   * \`\`\`
   */
  excludeFromSearch(shouldExclude: boolean): Promise<null>;
  /**
   * Checks if the page uses its title as the search engine title.
   * @example
   * \`\`\`ts
   * let useTitleAsSearchTitle = await myPage.usesTitleAsSearchTitle();
   * console.log("Use Title as Search Title:", useTitleAsSearchTitle);
   * \`\`\`
   */
  usesTitleAsSearchTitle(): Promise<boolean>;
  /**
   * Sets whether the page should use its title as the search engine title.
   * @param use - Set to true to use the page title as the search engine title, false otherwise.
   * @example
   * \`\`\`ts
   * myPage.useTitleAsSearchTitle(true);
   * \`\`\`
   */
  useTitleAsSearchTitle(use: boolean): Promise<null>;
  /**
   * Retrieves the search engine title of the page.
   * @example
   * \`\`\`ts
   * let searchEngineTitle = await myPage.getSearchTitle();
   * console.log("Search Engine Title:", searchEngineTitle);
   * \`\`\`
   */
  getSearchTitle(): Promise<string>;
  /**
   * Sets the search engine title of the page to the provided value.
   * @param title - The new search engine title to set for the page. Passing null will unset the current value.
   * @example
   * \`\`\`ts
   * myPage.setSearchTitle("New Search Engine Title");
   * \`\`\`
   */
  setSearchTitle(title: string | null): Promise<null>;
  /**
   * Checks if the page uses its description as the search engine description.
   * @example
   * \`\`\`ts
   * let useDescriptionAsSearchDescription = await myPage.usesDescriptionAsSearchDescription();
   * console.log("Use Description as Search Engine Description:", useDescriptionAsSearchDescription);
   * \`\`\`
   */
  usesDescriptionAsSearchDescription(): Promise<boolean>;
  /**
   * Sets whether the page should use its description as the search engine description.
   * @param use - Set to true to use the page description as the search engine description, false otherwise.
   * @example
   * \`\`\`ts
   * myPage.useDescriptionAsSearchDescription(true);
   * \`\`\`
   */
  useDescriptionAsSearchDescription(use: boolean): Promise<null>;
  /**
   * Retrieves the search engine description of the page.
   * @example
   * \`\`\`ts
   * let searchEngineDescription = await myPage.getSearchDescription();
   * console.log("Search Engine Description:", searchEngineDescription);
   * \`\`\`
   */
  getSearchDescription(): Promise<string>;
  /**
   * Sets the search engine description of the page to the provided value.
   * @param description - The new search engine description to set for the page. Passing null will unset the current value.
   * @example
   * \`\`\`ts
   * myPage.setSearchDescription("New Search Engine Description");
   * \`\`\`
   */
  setSearchDescription(description: string | null): Promise<null>;
  /**
   * Checks if the page uses its Open Graph (OG) image as the search engine image.
   * @example
   * \`\`\`ts
   * let useOpenGraphImageAsSearchImage = await myPage.usesOpenGraphImageAsSearchImage();
   * console.log("Use OG Image as Search Engine Image:", useOpenGraphImageAsSearchImage);
   * \`\`\`
   */
  usesOpenGraphImageAsSearchImage(): Promise<boolean>;
  /**
   * Sets whether the page should use its Open Graph (OG) image as the search engine image.
   * @param use - Set to true to use the Open Graph (OG) image as the search engine image, false otherwise.
   * @example
   * \`\`\`ts
   * myPage.useOpenGraphImageAsSearchImage(true);
   * \`\`\`
   */
  useOpenGraphImageAsSearchImage(use: boolean): Promise<null>;
  /**
   * Retrieves the search engine image URL of the page.
   * @example
   * \`\`\`ts
   * myPage.getSearchImage();
   * \`\`\`
   */
  getSearchImage(): Promise<string>;
  /**
   * Sets the search engine image URL of the page.
   * @param url - The new search engine image URL to set for the page. Passing null will unset the current value.
   * @example
   * \`\`\`ts
   * myPage.setSearchImage("https://example.com/image.jpg");
   * \`\`\`
   */
  setSearchImage(url: string | null): Promise<null>;
  /**
   * Checks if the page is password-protected.
   * @example
   * \`\`\`ts
   * let isProtected = await myPage.isPasswordProtected();
   * console.log("Is Password-Protected:", isProtected);
   * \`\`\`
   */
  isPasswordProtected(): Promise<boolean>;
  /**
   * Retrieves the utility page key, if available.
   * @example
   * \`\`\`ts
   * let utilityPageKey = await myPage.getUtilityPageKey();
   * console.log("Utility Page Key:", utilityPageKey);
   * \`\`\`
   */
  getUtilityPageKey(): Promise<null | string>;
  /**
   * Checks if the page is set as the homepage.
   * @example
   * \`\`\`ts
   * let isHomepage = await myPage.isHomepage();
   * console.log("Is Homepage:", isHomepage);
   * \`\`\`
   */
  isHomepage(): Promise<boolean>;
  /**
   * Retrieves the path that will be used when the page is published.
   * @example
   * \`\`\`ts
   * let publishPath = await myPage.getPublishPath();
   * console.log("Publish path: ", publishPath);
   * \`\`\`
   */
  getPublishPath(): Promise<null | string>;
  /**
   * Retrieves the collection ID for dynamic pages.
   * @example
   * \`\`\`ts
   * let collectionId = await myPage.getCollectionId();
   * console.log("Collection ID: ", collectionId);
   * \`\`\`
   */
  getCollectionId(): Promise<null | string>;
  /**
   * Retrieves the collection display name for dynamic pages.
   * @example
   * \`\`\`ts
   * let collectionName = await myPage.getCollectionName();
   * console.log("Collection name: ", collectionName);
   * \`\`\`
   */
  getCollectionName(): Promise<null | string>;
  /**
   * Retrieves the page kind.
   * @example
   * \`\`\`ts
   * let pageKind = await myPage.getKind();
   * console.log("Page kind: ", pageKind);
   * \`\`\`
   */
  getKind(): Promise<
    | 'static'
    | 'ecommerce'
    | 'cms'
    | 'userSystems'
    | 'utility'
    | 'staticTemplate'
  >;
}

type FolderId = string;
type PageId = string;
`,elementsTypes=`/// <reference path="./styles.d.ts" />
/// <reference path="./elements-generated.d.ts" />

type ElementId = string;
type FullElementId = {component: ComponentId; element: ElementId};
type PluginId = string;
type NamedValue = {
  name: string;
  value: string;
};

type FormState = 'normal' | 'success' | 'error';

type FormMethod = 'get' | 'post';

type FormSettings = {
  state: FormState;
  name: string;
  redirect: string;
  action: string;
  method: FormMethod;
};
`,elementsGeneratedTypes=`// This file was automatically generated. See designer-extensions docs.

type InsertOrMoveElement = <
  el extends AnyElement,
  target extends el | ElementPreset<el> | Component | BuilderElement,
>(
  this: {id: FullElementId},
  that: target
) => Promise<
  target extends AnyElement
    ? target
    : target extends ElementPreset<infer elementType>
      ? elementType
      : target extends Component
        ? ComponentElement
        : AnyElement
>;

interface WebflowElement {
  readonly [brand]: 'Element';
  readonly builderElement: false;
  remove(this: {id: FullElementId}): Promise<null>;
  readonly before: InsertOrMoveElement;
  readonly after: InsertOrMoveElement;
}

interface CustomAttributes {
  readonly customAttributes: true;
  getCustomAttribute(
    this: {id: FullElementId},
    name: string
  ): Promise<null | string>;
  setCustomAttribute(
    this: {id: FullElementId},
    name: string,
    value: string
  ): Promise<null>;
  removeCustomAttribute(this: {id: FullElementId}, name: string): Promise<null>;
  getAllCustomAttributes(this: {
    id: FullElementId;
  }): Promise<Array<NamedValue> | null>;
}

interface NoCustomAttributes {
  readonly customAttributes: false;
}

interface DomId {
  readonly domId: true;
  getDomId(this: {id: FullElementId}): Promise<null | string>;
  setDomId(this: {id: FullElementId}, domId: string): Promise<null>;
}

interface NoDomId {
  readonly domId: false;
}

interface Styles {
  readonly styles: true;
  getStyles(this: {id: FullElementId}): Promise<Array<Style | null> | null>;
  setStyles(this: {id: FullElementId}, styles: Array<Style>): Promise<null>;
}

interface NoStyles {
  readonly styles: false;
}

interface TextContent {
  readonly textContent: true;
  setTextContent(this: {id: FullElementId}, content: string): Promise<null>;
}

interface NoTextContent {
  readonly textContent: false;
}

interface Children {
  readonly children: true;
  getChildren(this: {id: FullElementId}): Promise<Array<AnyElement>>;
  readonly append: InsertOrMoveElement;
  readonly prepend: InsertOrMoveElement;
}

interface NoChildren {
  readonly children: false;
}

interface AppConnections {
  readonly appConnections: true;
  setAppConnection(this: {id: FullElementId}, value: string): Promise<null>;
  removeAppConnection(this: {id: FullElementId}, value: string): Promise<null>;
  getAppConnections(this: {id: FullElementId}): Promise<Array<string>>;
}

interface NoAppConnections {
  readonly appConnections: false;
}

interface ComponentElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'ComponentInstance';
  readonly plugin: '';
  getComponent(): Promise<Component>;
}

interface UnknownElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: '';
  readonly plugin: '';
}

interface DOMElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    AppConnections {
  readonly id: FullElementId;
  readonly type: 'DOM';
  readonly plugin: 'Builtin';
  getTag(): Promise<null | string>;
  setTag(tag: string): Promise<null>;
  getAttribute(name: string): Promise<null | string>;
  setAttribute(name: string, value: string): Promise<null>;
  getAllAttributes(): Promise<Array<NamedValue> | null>;
  removeAttribute(name: string): Promise<null>;
}

interface SearchFormElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchForm';
  readonly plugin: 'Search';
}

interface SearchInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchInput';
  readonly plugin: 'Search';
}

interface SearchButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchButton';
  readonly plugin: 'Search';
}

interface SearchResultEmptyElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchResultEmpty';
  readonly plugin: 'Search';
}

interface SearchResultWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchResultWrapper';
  readonly plugin: 'Search';
}

interface SearchResultListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchResultList';
  readonly plugin: 'Search';
}

interface SearchResultItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SearchResultItem';
  readonly plugin: 'Search';
}

interface BlockElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Block';
  readonly plugin: 'Basic';
}

interface BlockquoteElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Blockquote';
  readonly plugin: 'Basic';
}

interface CodeBlockElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CodeBlock';
  readonly plugin: 'Basic';
}

interface EmphasizedElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Emphasized';
  readonly plugin: 'Basic';
}

interface FigcaptionElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Figcaption';
  readonly plugin: 'Basic';
}

interface FigureElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Figure';
  readonly plugin: 'Basic';
}

interface HeadingElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Heading';
  readonly plugin: 'Basic';
  getHeadingLevel(): Promise<null | 1 | 2 | 3 | 4 | 5 | 6>;
  setHeadingLevel(level: 1 | 2 | 3 | 4 | 5 | 6): Promise<null>;
}

interface IframeElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Iframe';
  readonly plugin: 'Basic';
}

interface ImageElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    AppConnections {
  readonly id: FullElementId;
  readonly type: 'Image';
  readonly plugin: 'Basic';
  getAltText(): Promise<string>;
  setAltText(altText: string | null): Promise<null>;
  setAsset(asset: Asset | null): Promise<null>;
  getAsset(): Promise<null | Asset>;
}

interface LinkElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Link';
  readonly plugin: 'Basic';
  setSettings(
    mode: 'url' | 'page' | 'pageSection' | 'email' | 'phone' | 'file',
    target: string | Page | AnyElement | Asset,
    metadata?: {openInNewTab?: boolean; subject?: string}
  ): Promise<null>;
  getTarget(): Promise<null | string | Page | AnyElement | Asset>;
}

interface ListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'List';
  readonly plugin: 'Basic';
}

interface ListItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'ListItem';
  readonly plugin: 'Basic';
}

interface ParagraphElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Paragraph';
  readonly plugin: 'Basic';
}

interface RichTextElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'RichText';
  readonly plugin: 'Basic';
}

interface SpanElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Span';
  readonly plugin: 'Basic';
}

interface StringElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'String';
  readonly plugin: 'Basic';
  getText(): Promise<null | string>;
  setText(text: string): Promise<null>;
}

interface StrongElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Strong';
  readonly plugin: 'Basic';
}

interface SuperscriptElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Superscript';
  readonly plugin: 'Basic';
}

interface SubscriptElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Subscript';
  readonly plugin: 'Basic';
}

interface InlineCodeElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'InlineCode';
  readonly plugin: 'Basic';
}

interface AnimationElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Animation';
  readonly plugin: 'Animation';
}

interface SplineElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Spline';
  readonly plugin: 'Animation';
}

interface RiveElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Rive';
  readonly plugin: 'Animation';
}

interface BackgroundVideoWrapperElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BackgroundVideoWrapper';
  readonly plugin: 'BackgroundVideo';
}

interface BackgroundVideoPlayPauseButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BackgroundVideoPlayPauseButton';
  readonly plugin: 'BackgroundVideo';
}

interface BackgroundVideoPlayPauseButtonPlayingElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BackgroundVideoPlayPauseButtonPlaying';
  readonly plugin: 'BackgroundVideo';
}

interface BackgroundVideoPlayPauseButtonPausedElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BackgroundVideoPlayPauseButtonPaused';
  readonly plugin: 'BackgroundVideo';
}

interface BodyElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    NoStyles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Body';
  readonly plugin: 'Body';
}

interface CommerceAddToCartFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartForm';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartButton';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartQuantityInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartQuantityInput';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartErrorElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartError';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOutOfStockElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOutOfStock';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOptionList';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionListWithSelectorTypesElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOptionListWithSelectorTypes';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOption';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionLabelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOptionLabel';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionSelectElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOptionSelect';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionPillGroupElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOptionPillGroup';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartOptionPillElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartOptionPill';
  readonly plugin: 'Commerce';
}

interface CommerceBuyNowButtonElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceBuyNowButton';
  readonly plugin: 'Commerce';
}

interface CommerceCartWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCartOpenLinkElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOpenLink';
  readonly plugin: 'Commerce';
}

interface CommerceCartOpenLinkCountElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOpenLinkCount';
  readonly plugin: 'Commerce';
}

interface CommerceCartOpenLinkIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOpenLinkIcon';
  readonly plugin: 'Commerce';
}

interface CommerceCartContainerWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartContainerWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCartContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartContainer';
  readonly plugin: 'Commerce';
}

interface CommerceCartHeaderElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartHeader';
  readonly plugin: 'Commerce';
}

interface CommerceCartHeadingElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartHeading';
  readonly plugin: 'Commerce';
}

interface CommerceCartFormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartFormWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCartFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartForm';
  readonly plugin: 'Commerce';
}

interface CommerceCartEmptyStateElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartEmptyState';
  readonly plugin: 'Commerce';
}

interface CommerceCartErrorStateElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartErrorState';
  readonly plugin: 'Commerce';
}

interface CommerceCartListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartList';
  readonly plugin: 'Commerce';
}

interface CommerceCartFooterElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartFooter';
  readonly plugin: 'Commerce';
}

interface CommerceCartLineItemElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartLineItem';
  readonly plugin: 'Commerce';
}

interface CommerceCartCheckoutButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartCheckoutButton';
  readonly plugin: 'Commerce';
}

interface CommerceCartItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartItem';
  readonly plugin: 'Commerce';
}

interface CommerceCartItemImageElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartItemImage';
  readonly plugin: 'Commerce';
}

interface CommerceCartItemInfoElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartItemInfo';
  readonly plugin: 'Commerce';
}

interface CommerceCartProductNameElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartProductName';
  readonly plugin: 'Commerce';
}

interface CommerceCartProductPriceElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartProductPrice';
  readonly plugin: 'Commerce';
}

interface CommerceCartQuantityElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartQuantity';
  readonly plugin: 'Commerce';
}

interface CommerceCartCloseLinkElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartCloseLink';
  readonly plugin: 'Commerce';
}

interface CommerceCartCloseLinkIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartCloseLinkIcon';
  readonly plugin: 'Commerce';
}

interface CommerceCartRemoveLinkElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartRemoveLink';
  readonly plugin: 'Commerce';
}

interface CommerceCartOrderValueElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOrderValue';
  readonly plugin: 'Commerce';
}

interface CommerceCartCheckoutActionsElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartCheckoutActions';
  readonly plugin: 'Commerce';
}

interface CommerceCartOptionListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOptionList';
  readonly plugin: 'Commerce';
}

interface CommerceCartOptionListItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOptionListItem';
  readonly plugin: 'Commerce';
}

interface CommerceCartOptionListItemLabelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOptionListItemLabel';
  readonly plugin: 'Commerce';
}

interface CommerceCartOptionListItemValueElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartOptionListItemValue';
  readonly plugin: 'Commerce';
}

interface CommerceCartQuickCheckoutActionsElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartQuickCheckoutActions';
  readonly plugin: 'Commerce';
}

interface CommerceCartQuickCheckoutButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartQuickCheckoutButton';
  readonly plugin: 'Commerce';
}

interface CommerceCartApplePayButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartApplePayButton';
  readonly plugin: 'Commerce';
}

interface CommerceCartApplePayIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartApplePayIcon';
  readonly plugin: 'Commerce';
}

interface CommerceQuickCheckoutGoogleIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceQuickCheckoutGoogleIcon';
  readonly plugin: 'Commerce';
}

interface CommerceQuickCheckoutMicrosoftIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceQuickCheckoutMicrosoftIcon';
  readonly plugin: 'Commerce';
}

interface CommercePayPalCheckoutButtonElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommercePayPalCheckoutButton';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBlockContentElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBlockContent';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBlockHeaderElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBlockHeader';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutColumnElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutColumn';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutFormContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutFormContainer';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutRowElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutRow';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutLabelElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutLabel';
  readonly plugin: 'Commerce';
}

interface CommerceLabelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceLabel';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutCardExpirationDateElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutCardExpirationDate';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutCardNumberElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutCardNumber';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutCardSecurityCodeElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutCardSecurityCode';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutCustomerInfoWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutCustomerInfoWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutErrorStateElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutErrorState';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutPaymentInfoWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutPaymentInfoWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutPlaceOrderButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutPlaceOrderButton';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutEmailInputElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutEmailInput';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingAddressWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingAddressWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingCountrySelectorElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingCountrySelector';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingFullNameElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingFullName';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingStreetAddressElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingStreetAddress';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingStreetAddressOptionalElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingStreetAddressOptional';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingCityElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingCity';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingZipPostalCodeElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingZipPostalCode';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingStateProvinceElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingStateProvince';
  readonly plugin: 'Commerce';
}

interface CommerceOrderConfirmationElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceOrderConfirmation';
  readonly plugin: 'Commerce';
}

interface CommerceOrderConfirmationContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceOrderConfirmationContainer';
  readonly plugin: 'Commerce';
}

interface CommerceOrderConfirmationHeaderWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceOrderConfirmationHeaderWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingAddressWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingAddressWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingCountrySelectorElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingCountrySelector';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingFullNameElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingFullName';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingStreetAddressElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingStreetAddress';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingStreetAddressOptionalElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingStreetAddressOptional';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingCityElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingCity';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingZipPostalCodeElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingZipPostalCode';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingStateProvinceElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingStateProvince';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingAddressToggleWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingAddressToggleWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingAddressToggleCheckboxElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingAddressToggleCheckbox';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutBillingAddressToggleLabelElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutBillingAddressToggleLabel';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemsWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemsWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemsListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemsList';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItem';
  readonly plugin: 'Commerce';
}

interface CommerceBoldTextBlockElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceBoldTextBlock';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemDescriptionWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemDescriptionWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemQuantityWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemQuantityWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemOptionListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemOptionList';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemOptionListItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemOptionListItem';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemOptionListItemLabelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemOptionListItemLabel';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemOptionListItemValueElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemOptionListItemValue';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemTrialTextWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemTrialTextWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodsWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodsWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodsEmptyStateElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodsEmptyState';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodsListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodsList';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodItem';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodRadioButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodRadioButton';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodDescriptionBlockElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodDescriptionBlock';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodNameBlockElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodNameBlock';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingMethodBlockWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingMethodBlockWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutCustomerInfoSummaryWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutCustomerInfoSummaryWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutShippingSummaryWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutShippingSummaryWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutPaymentSummaryWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutPaymentSummaryWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderSummaryWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderSummaryWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryItem';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryLabelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryLabel';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryBlockHeaderElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryBlockHeader';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryLineItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryLineItem';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryTotalElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryTotal';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryTextSpacingOnDivElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryTextSpacingOnDiv';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutSummaryFlexBoxDivElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutSummaryFlexBoxDiv';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderItemDescriptionPriceElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderItemDescriptionPrice';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderSummaryExtraItemsListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderSummaryExtraItemsList';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutOrderSummaryExtraItemsListItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutOrderSummaryExtraItemsListItem';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutErrorMsgElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutErrorMsg';
  readonly plugin: 'Commerce';
}

interface CommerceCartErrorMsgElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCartErrorMsg';
  readonly plugin: 'Commerce';
}

interface CommerceAddToCartErrorMsgElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceAddToCartErrorMsg';
  readonly plugin: 'Commerce';
}

interface CommerceLayoutMainElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceLayoutMain';
  readonly plugin: 'Commerce';
}

interface CommerceLayoutSidebarElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceLayoutSidebar';
  readonly plugin: 'Commerce';
}

interface CommerceLayoutContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceLayoutContainer';
  readonly plugin: 'Commerce';
}

interface CommercePaypalCheckoutFormContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommercePaypalCheckoutFormContainer';
  readonly plugin: 'Commerce';
}

interface CommercePaypalCheckoutErrorStateElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommercePaypalCheckoutErrorState';
  readonly plugin: 'Commerce';
}

interface CommercePaypalCheckoutErrorMessageElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommercePaypalCheckoutErrorMessage';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutAdditionalInputsContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutAdditionalInputsContainer';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutAdditionalInfoSummaryWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutAdditionalInfoSummaryWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutAdditionalTextAreaElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutAdditionalTextArea';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutAdditionalTextInputElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutAdditionalTextInput';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutAdditionalCheckboxElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutAdditionalCheckbox';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutAdditionalCheckboxWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutAdditionalCheckboxWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutDiscountsElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutDiscounts';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutDiscountsButtonElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutDiscountsButton';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutDiscountsInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutDiscountsInput';
  readonly plugin: 'Commerce';
}

interface CommerceCheckoutDiscountsLabelElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceCheckoutDiscountsLabel';
  readonly plugin: 'Commerce';
}

interface CommerceDownloadsWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceDownloadsWrapper';
  readonly plugin: 'Commerce';
}

interface CommerceDownloadsListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceDownloadsList';
  readonly plugin: 'Commerce';
}

interface CommerceDownloadsItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CommerceDownloadsItem';
  readonly plugin: 'Commerce';
}

interface DropdownLinkElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DropdownLink';
  readonly plugin: 'Dropdown';
}

interface DropdownListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DropdownList';
  readonly plugin: 'Dropdown';
}

interface DropdownToggleElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DropdownToggle';
  readonly plugin: 'Dropdown';
}

interface DropdownWrapperElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DropdownWrapper';
  readonly plugin: 'Dropdown';
}

interface DynamoWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DynamoWrapper';
  readonly plugin: 'Dynamo';
}

interface DynamoListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DynamoList';
  readonly plugin: 'Dynamo';
}

interface DynamoItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DynamoItem';
  readonly plugin: 'Dynamo';
}

interface DynamoEmptyElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'DynamoEmpty';
  readonly plugin: 'Dynamo';
}

interface HtmlEmbedElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'HtmlEmbed';
  readonly plugin: 'Embed';
}

interface VideoElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Video';
  readonly plugin: 'Embed';
}

interface YouTubeVideoElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'YouTubeVideo';
  readonly plugin: 'Embed';
}

interface LightboxWrapperElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'LightboxWrapper';
  readonly plugin: 'Lightbox';
}

interface FormBlockLabelElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormBlockLabel';
  readonly plugin: 'Form';
}

interface FormButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormButton';
  readonly plugin: 'Form';
}

interface FormCheckboxInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormCheckboxInput';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getRequired(): Promise<boolean>;
  setRequired(value: boolean): Promise<null>;
}

interface FormCheckboxWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormCheckboxWrapper';
  readonly plugin: 'Form';
}

interface FormErrorMessageElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormErrorMessage';
  readonly plugin: 'Form';
}

interface FormFormElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    AppConnections {
  readonly id: FullElementId;
  readonly type: 'FormForm';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getSettings(): Promise<FormSettings>;
  setSettings(settings: Partial<FormSettings>): Promise<null>;
}

interface FormInlineLabelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormInlineLabel';
  readonly plugin: 'Form';
}

interface FormRadioInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormRadioInput';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getRequired(): Promise<boolean>;
  setRequired(value: boolean): Promise<null>;
}

interface FormRadioWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormRadioWrapper';
  readonly plugin: 'Form';
}

interface FormSelectElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormSelect';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getRequired(): Promise<boolean>;
  setRequired(value: boolean): Promise<null>;
}

interface FormSuccessMessageElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormSuccessMessage';
  readonly plugin: 'Form';
}

interface FormTextareaElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormTextarea';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getRequired(): Promise<boolean>;
  setRequired(value: boolean): Promise<null>;
}

interface FormTextInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormTextInput';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getRequired(): Promise<boolean>;
  setRequired(value: boolean): Promise<null>;
  getInputType(): Promise<
    'text' | 'email' | 'password' | 'tel' | 'number' | 'url' | null
  >;
  setInputType(
    type: 'text' | 'email' | 'password' | 'tel' | 'number' | 'url'
  ): Promise<null>;
}

interface FormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    AppConnections {
  readonly id: FullElementId;
  readonly type: 'FormWrapper';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getSettings(): Promise<FormSettings>;
  setSettings(settings: Partial<FormSettings>): Promise<null>;
}

interface FormReCaptchaElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormReCaptcha';
  readonly plugin: 'Form';
}

interface FormFileUploadWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadWrapper';
  readonly plugin: 'Form';
  getName(): Promise<string>;
  setName(name: string): Promise<null>;
  getRequired(): Promise<boolean>;
  setRequired(value: boolean): Promise<null>;
}

interface FormFileUploadDefaultElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadDefault';
  readonly plugin: 'Form';
}

interface FormFileUploadUploadingElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadUploading';
  readonly plugin: 'Form';
}

interface FormFileUploadUploadingBtnElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadUploadingBtn';
  readonly plugin: 'Form';
}

interface FormFileUploadUploadingIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadUploadingIcon';
  readonly plugin: 'Form';
}

interface FormFileUploadSuccessElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadSuccess';
  readonly plugin: 'Form';
}

interface FormFileUploadFileElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadFile';
  readonly plugin: 'Form';
}

interface FormFileUploadFileNameElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadFileName';
  readonly plugin: 'Form';
}

interface FormFileUploadRemoveLinkElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadRemoveLink';
  readonly plugin: 'Form';
}

interface FormFileUploadErrorElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadError';
  readonly plugin: 'Form';
}

interface FormFileUploadErrorMsgElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadErrorMsg';
  readonly plugin: 'Form';
}

interface UserFormUploadErrorMsgElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormUploadErrorMsg';
  readonly plugin: 'Form';
}

interface FormFileUploadInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadInput';
  readonly plugin: 'Form';
}

interface FormFileUploadLabelElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadLabel';
  readonly plugin: 'Form';
}

interface FormFileUploadInfoElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadInfo';
  readonly plugin: 'Form';
}

interface FormFileUploadTextElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FormFileUploadText';
  readonly plugin: 'Form';
}

interface IconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Icon';
  readonly plugin: 'Icon';
}

interface HreflangsElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Hreflangs';
  readonly plugin: 'Localization';
}

interface LocalesWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'LocalesWrapper';
  readonly plugin: 'Localization';
}

interface LocalesEmptyElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'LocalesEmpty';
  readonly plugin: 'Localization';
}

interface LocalesListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'LocalesList';
  readonly plugin: 'Localization';
}

interface LocalesItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'LocalesItem';
  readonly plugin: 'Localization';
}

interface ContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Container';
  readonly plugin: 'Layout';
}

interface RowElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Row';
  readonly plugin: 'Layout';
}

interface ColumnElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Column';
  readonly plugin: 'Layout';
}

interface SectionElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Section';
  readonly plugin: 'Layout';
}

interface GridElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Grid';
  readonly plugin: 'Layout';
}

interface LayoutElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Layout';
  readonly plugin: 'Layout';
}

interface CellElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Cell';
  readonly plugin: 'Layout';
}

interface BlockContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BlockContainer';
  readonly plugin: 'Layout';
}

interface VFlexElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'VFlex';
  readonly plugin: 'Layout';
}

interface HFlexElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'HFlex';
  readonly plugin: 'Layout';
}

interface NavbarBrandElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'NavbarBrand';
  readonly plugin: 'Navbar';
}

interface NavbarButtonElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'NavbarButton';
  readonly plugin: 'Navbar';
}

interface NavbarContainerElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'NavbarContainer';
  readonly plugin: 'Navbar';
}

interface NavbarLinkElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'NavbarLink';
  readonly plugin: 'Navbar';
}

interface NavbarMenuElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'NavbarMenu';
  readonly plugin: 'Navbar';
}

interface NavbarWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'NavbarWrapper';
  readonly plugin: 'Navbar';
}

interface PaginationElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Pagination';
  readonly plugin: 'Pagination';
}

interface PaginationPreviousElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'PaginationPrevious';
  readonly plugin: 'Pagination';
}

interface PaginationNextElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'PaginationNext';
  readonly plugin: 'Pagination';
}

interface PaginationPreviousIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'PaginationPreviousIcon';
  readonly plugin: 'Pagination';
}

interface PaginationNextIconElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'PaginationNextIcon';
  readonly plugin: 'Pagination';
}

interface PaginationCountElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'PaginationCount';
  readonly plugin: 'Pagination';
}

interface SliderArrowElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SliderArrow';
  readonly plugin: 'Slider';
}

interface SliderMaskElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SliderMask';
  readonly plugin: 'Slider';
}

interface SliderNavElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SliderNav';
  readonly plugin: 'Slider';
}

interface SliderSlideElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SliderSlide';
  readonly plugin: 'Slider';
}

interface SliderWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'SliderWrapper';
  readonly plugin: 'Slider';
}

interface MetaElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Meta';
  readonly plugin: 'Ssr';
}

interface TitleElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Title';
  readonly plugin: 'Ssr';
}

interface CustomCodeElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'CustomCode';
  readonly plugin: 'Ssr';
}

interface CommentElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Comment';
  readonly plugin: 'Ssr';
}

interface FacebookPixelElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FacebookPixel';
  readonly plugin: 'Ssr';
}

interface GoogleAnalyticsElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'GoogleAnalytics';
  readonly plugin: 'Ssr';
}

interface TabsContentElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'TabsContent';
  readonly plugin: 'Tabs';
}

interface TabsLinkElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'TabsLink';
  readonly plugin: 'Tabs';
}

interface TabsMenuElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'TabsMenu';
  readonly plugin: 'Tabs';
}

interface TabsPaneElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'TabsPane';
  readonly plugin: 'Tabs';
}

interface TabsWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'TabsWrapper';
  readonly plugin: 'Tabs';
}

interface FacebookElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Facebook';
  readonly plugin: 'Widget';
}

interface MapWidgetElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'MapWidget';
  readonly plugin: 'Widget';
}

interface TwitterElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Twitter';
  readonly plugin: 'Widget';
}

interface GooglePlusElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'GooglePlus';
  readonly plugin: 'Widget';
}

interface UserAccountWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountWrapper';
  readonly plugin: 'Users';
}

interface UserAccountFormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountFormWrapper';
  readonly plugin: 'Users';
}

interface UserAccountFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountForm';
  readonly plugin: 'Users';
}

interface UserAccountFormSaveButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountFormSaveButton';
  readonly plugin: 'Users';
}

interface UserAccountFormCancelButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountFormCancelButton';
  readonly plugin: 'Users';
}

interface UserAccountSubscriptionListWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountSubscriptionListWrapper';
  readonly plugin: 'Users';
}

interface UserAccountSubscriptionListEmptyElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountSubscriptionListEmpty';
  readonly plugin: 'Users';
}

interface UserAccountSubscriptionListElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountSubscriptionList';
  readonly plugin: 'Users';
}

interface UserAccountSubscriptionListItemElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountSubscriptionListItem';
  readonly plugin: 'Users';
}

interface UserAccountSubscriptionListItemInfoElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountSubscriptionListItemInfo';
  readonly plugin: 'Users';
}

interface UserAccountSubscriptionCancelButtonElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserAccountSubscriptionCancelButton';
  readonly plugin: 'Users';
}

interface UserSignUpFormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpFormWrapper';
  readonly plugin: 'Users';
}

interface UserSignUpFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpForm';
  readonly plugin: 'Users';
}

interface UserSignUpVerificationMessageElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpVerificationMessage';
  readonly plugin: 'Users';
}

interface UserSignUpRedirectWrapperElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpRedirectWrapper';
  readonly plugin: 'Users';
}

interface UserSignUpTermsOfServiceWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpTermsOfServiceWrapper';
  readonly plugin: 'Users';
}

interface UserSignUpTermsOfServiceCheckboxInputElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpTermsOfServiceCheckboxInput';
  readonly plugin: 'Users';
}

interface UserLogInFormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserLogInFormWrapper';
  readonly plugin: 'Users';
}

interface UserLogInFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserLogInForm';
  readonly plugin: 'Users';
}

interface UserUpdatePasswordFormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserUpdatePasswordFormWrapper';
  readonly plugin: 'Users';
}

interface UserUpdatePasswordFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserUpdatePasswordForm';
  readonly plugin: 'Users';
}

interface UserResetPasswordFormWrapperElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserResetPasswordFormWrapper';
  readonly plugin: 'Users';
}

interface UserResetPasswordFormElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserResetPasswordForm';
  readonly plugin: 'Users';
}

interface UserLogOutLogInElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserLogOutLogIn';
  readonly plugin: 'Users';
}

interface UserFormBlockLabelElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    TextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormBlockLabel';
  readonly plugin: 'Users';
}

interface UserFormButtonElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormButton';
  readonly plugin: 'Users';
}

interface UserFormCheckboxInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormCheckboxInput';
  readonly plugin: 'Users';
}

interface UserFormTextInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormTextInput';
  readonly plugin: 'Users';
}

interface UserFormEmailInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormEmailInput';
  readonly plugin: 'Users';
}

interface UserFormNameInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormNameInput';
  readonly plugin: 'Users';
}

interface UserFormPasswordInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormPasswordInput';
  readonly plugin: 'Users';
}

interface UserFormSelectElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormSelect';
  readonly plugin: 'Users';
}

interface UserFormNumberInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormNumberInput';
  readonly plugin: 'Users';
}

interface UserFormFileUploadInputElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormFileUploadInput';
  readonly plugin: 'Users';
}

interface UserFormUploadNameElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormUploadName';
  readonly plugin: 'Users';
}

interface UserFormHeaderElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormHeader';
  readonly plugin: 'Users';
}

interface UserFormFooterElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormFooter';
  readonly plugin: 'Users';
}

interface UserFormPageWrapElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormPageWrap';
  readonly plugin: 'Users';
}

interface BlockContentElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BlockContent';
  readonly plugin: 'Users';
}

interface BlockHeaderElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'BlockHeader';
  readonly plugin: 'Users';
}

interface FlexColumnElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'FlexColumn';
  readonly plugin: 'Users';
}

interface GridRowElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'GridRow';
  readonly plugin: 'Users';
}

interface UserFormSuccessStateElement
  extends WebflowElement,
    CustomAttributes,
    NoDomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormSuccessState';
  readonly plugin: 'Users';
}

interface UserFormErrorStateElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormErrorState';
  readonly plugin: 'Users';
}

interface UserFormErrorStateStyleVariant1Element
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserFormErrorStateStyleVariant1';
  readonly plugin: 'Users';
}

interface UserLogInErrorMsgElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserLogInErrorMsg';
  readonly plugin: 'Users';
}

interface UserSignUpErrorMsgElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserSignUpErrorMsg';
  readonly plugin: 'Users';
}

interface UserResetPasswordErrorMsgElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserResetPasswordErrorMsg';
  readonly plugin: 'Users';
}

interface UserUpdatePasswordErrorMsgElement
  extends WebflowElement,
    NoCustomAttributes,
    NoDomId,
    NoStyles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserUpdatePasswordErrorMsg';
  readonly plugin: 'Users';
}

interface UserErrorMsgElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    NoChildren,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'UserErrorMsg';
  readonly plugin: 'Users';
}

interface FrameElement
  extends WebflowElement,
    CustomAttributes,
    DomId,
    Styles,
    Children,
    NoTextContent,
    NoAppConnections {
  readonly id: FullElementId;
  readonly type: 'Frame';
  readonly plugin: 'Frame';
}

type AnyElement =
  | ComponentElement
  | UnknownElement
  | DOMElement
  | SearchFormElement
  | SearchInputElement
  | SearchButtonElement
  | SearchResultEmptyElement
  | SearchResultWrapperElement
  | SearchResultListElement
  | SearchResultItemElement
  | BlockElement
  | BlockquoteElement
  | CodeBlockElement
  | EmphasizedElement
  | FigcaptionElement
  | FigureElement
  | HeadingElement
  | IframeElement
  | ImageElement
  | LinkElement
  | ListElement
  | ListItemElement
  | ParagraphElement
  | RichTextElement
  | SpanElement
  | StringElement
  | StrongElement
  | SuperscriptElement
  | SubscriptElement
  | InlineCodeElement
  | AnimationElement
  | SplineElement
  | RiveElement
  | BackgroundVideoWrapperElement
  | BackgroundVideoPlayPauseButtonElement
  | BackgroundVideoPlayPauseButtonPlayingElement
  | BackgroundVideoPlayPauseButtonPausedElement
  | BodyElement
  | CommerceAddToCartFormElement
  | CommerceAddToCartButtonElement
  | CommerceAddToCartWrapperElement
  | CommerceAddToCartQuantityInputElement
  | CommerceAddToCartErrorElement
  | CommerceAddToCartOutOfStockElement
  | CommerceAddToCartOptionListElement
  | CommerceAddToCartOptionListWithSelectorTypesElement
  | CommerceAddToCartOptionElement
  | CommerceAddToCartOptionLabelElement
  | CommerceAddToCartOptionSelectElement
  | CommerceAddToCartOptionPillGroupElement
  | CommerceAddToCartOptionPillElement
  | CommerceBuyNowButtonElement
  | CommerceCartWrapperElement
  | CommerceCartOpenLinkElement
  | CommerceCartOpenLinkCountElement
  | CommerceCartOpenLinkIconElement
  | CommerceCartContainerWrapperElement
  | CommerceCartContainerElement
  | CommerceCartHeaderElement
  | CommerceCartHeadingElement
  | CommerceCartFormWrapperElement
  | CommerceCartFormElement
  | CommerceCartEmptyStateElement
  | CommerceCartErrorStateElement
  | CommerceCartListElement
  | CommerceCartFooterElement
  | CommerceCartLineItemElement
  | CommerceCartCheckoutButtonElement
  | CommerceCartItemElement
  | CommerceCartItemImageElement
  | CommerceCartItemInfoElement
  | CommerceCartProductNameElement
  | CommerceCartProductPriceElement
  | CommerceCartQuantityElement
  | CommerceCartCloseLinkElement
  | CommerceCartCloseLinkIconElement
  | CommerceCartRemoveLinkElement
  | CommerceCartOrderValueElement
  | CommerceCartCheckoutActionsElement
  | CommerceCartOptionListElement
  | CommerceCartOptionListItemElement
  | CommerceCartOptionListItemLabelElement
  | CommerceCartOptionListItemValueElement
  | CommerceCartQuickCheckoutActionsElement
  | CommerceCartQuickCheckoutButtonElement
  | CommerceCartApplePayButtonElement
  | CommerceCartApplePayIconElement
  | CommerceQuickCheckoutGoogleIconElement
  | CommerceQuickCheckoutMicrosoftIconElement
  | CommercePayPalCheckoutButtonElement
  | CommerceCheckoutBlockContentElement
  | CommerceCheckoutBlockHeaderElement
  | CommerceCheckoutColumnElement
  | CommerceCheckoutFormContainerElement
  | CommerceCheckoutRowElement
  | CommerceCheckoutLabelElement
  | CommerceLabelElement
  | CommerceCheckoutCardExpirationDateElement
  | CommerceCheckoutCardNumberElement
  | CommerceCheckoutCardSecurityCodeElement
  | CommerceCheckoutCustomerInfoWrapperElement
  | CommerceCheckoutErrorStateElement
  | CommerceCheckoutPaymentInfoWrapperElement
  | CommerceCheckoutPlaceOrderButtonElement
  | CommerceCheckoutEmailInputElement
  | CommerceCheckoutShippingAddressWrapperElement
  | CommerceCheckoutShippingCountrySelectorElement
  | CommerceCheckoutShippingFullNameElement
  | CommerceCheckoutShippingStreetAddressElement
  | CommerceCheckoutShippingStreetAddressOptionalElement
  | CommerceCheckoutShippingCityElement
  | CommerceCheckoutShippingZipPostalCodeElement
  | CommerceCheckoutShippingStateProvinceElement
  | CommerceOrderConfirmationElement
  | CommerceOrderConfirmationContainerElement
  | CommerceOrderConfirmationHeaderWrapperElement
  | CommerceCheckoutBillingAddressWrapperElement
  | CommerceCheckoutBillingCountrySelectorElement
  | CommerceCheckoutBillingFullNameElement
  | CommerceCheckoutBillingStreetAddressElement
  | CommerceCheckoutBillingStreetAddressOptionalElement
  | CommerceCheckoutBillingCityElement
  | CommerceCheckoutBillingZipPostalCodeElement
  | CommerceCheckoutBillingStateProvinceElement
  | CommerceCheckoutBillingAddressToggleWrapperElement
  | CommerceCheckoutBillingAddressToggleCheckboxElement
  | CommerceCheckoutBillingAddressToggleLabelElement
  | CommerceCheckoutOrderItemsWrapperElement
  | CommerceCheckoutOrderItemsListElement
  | CommerceCheckoutOrderItemElement
  | CommerceBoldTextBlockElement
  | CommerceCheckoutOrderItemDescriptionWrapperElement
  | CommerceCheckoutOrderItemQuantityWrapperElement
  | CommerceCheckoutOrderItemOptionListElement
  | CommerceCheckoutOrderItemOptionListItemElement
  | CommerceCheckoutOrderItemOptionListItemLabelElement
  | CommerceCheckoutOrderItemOptionListItemValueElement
  | CommerceCheckoutOrderItemTrialTextWrapperElement
  | CommerceCheckoutShippingMethodsWrapperElement
  | CommerceCheckoutShippingMethodsEmptyStateElement
  | CommerceCheckoutShippingMethodsListElement
  | CommerceCheckoutShippingMethodItemElement
  | CommerceCheckoutShippingMethodRadioButtonElement
  | CommerceCheckoutShippingMethodDescriptionBlockElement
  | CommerceCheckoutShippingMethodNameBlockElement
  | CommerceCheckoutShippingMethodBlockWrapperElement
  | CommerceCheckoutCustomerInfoSummaryWrapperElement
  | CommerceCheckoutShippingSummaryWrapperElement
  | CommerceCheckoutPaymentSummaryWrapperElement
  | CommerceCheckoutOrderSummaryWrapperElement
  | CommerceCheckoutSummaryItemElement
  | CommerceCheckoutSummaryLabelElement
  | CommerceCheckoutSummaryBlockHeaderElement
  | CommerceCheckoutSummaryLineItemElement
  | CommerceCheckoutSummaryTotalElement
  | CommerceCheckoutSummaryTextSpacingOnDivElement
  | CommerceCheckoutSummaryFlexBoxDivElement
  | CommerceCheckoutOrderItemDescriptionPriceElement
  | CommerceCheckoutOrderSummaryExtraItemsListElement
  | CommerceCheckoutOrderSummaryExtraItemsListItemElement
  | CommerceCheckoutErrorMsgElement
  | CommerceCartErrorMsgElement
  | CommerceAddToCartErrorMsgElement
  | CommerceLayoutMainElement
  | CommerceLayoutSidebarElement
  | CommerceLayoutContainerElement
  | CommercePaypalCheckoutFormContainerElement
  | CommercePaypalCheckoutErrorStateElement
  | CommercePaypalCheckoutErrorMessageElement
  | CommerceCheckoutAdditionalInputsContainerElement
  | CommerceCheckoutAdditionalInfoSummaryWrapperElement
  | CommerceCheckoutAdditionalTextAreaElement
  | CommerceCheckoutAdditionalTextInputElement
  | CommerceCheckoutAdditionalCheckboxElement
  | CommerceCheckoutAdditionalCheckboxWrapperElement
  | CommerceCheckoutDiscountsElement
  | CommerceCheckoutDiscountsButtonElement
  | CommerceCheckoutDiscountsInputElement
  | CommerceCheckoutDiscountsLabelElement
  | CommerceDownloadsWrapperElement
  | CommerceDownloadsListElement
  | CommerceDownloadsItemElement
  | DropdownLinkElement
  | DropdownListElement
  | DropdownToggleElement
  | DropdownWrapperElement
  | DynamoWrapperElement
  | DynamoListElement
  | DynamoItemElement
  | DynamoEmptyElement
  | HtmlEmbedElement
  | VideoElement
  | YouTubeVideoElement
  | LightboxWrapperElement
  | FormBlockLabelElement
  | FormButtonElement
  | FormCheckboxInputElement
  | FormCheckboxWrapperElement
  | FormErrorMessageElement
  | FormFormElement
  | FormInlineLabelElement
  | FormRadioInputElement
  | FormRadioWrapperElement
  | FormSelectElement
  | FormSuccessMessageElement
  | FormTextareaElement
  | FormTextInputElement
  | FormWrapperElement
  | FormReCaptchaElement
  | FormFileUploadWrapperElement
  | FormFileUploadDefaultElement
  | FormFileUploadUploadingElement
  | FormFileUploadUploadingBtnElement
  | FormFileUploadUploadingIconElement
  | FormFileUploadSuccessElement
  | FormFileUploadFileElement
  | FormFileUploadFileNameElement
  | FormFileUploadRemoveLinkElement
  | FormFileUploadErrorElement
  | FormFileUploadErrorMsgElement
  | UserFormUploadErrorMsgElement
  | FormFileUploadInputElement
  | FormFileUploadLabelElement
  | FormFileUploadInfoElement
  | FormFileUploadTextElement
  | IconElement
  | HreflangsElement
  | LocalesWrapperElement
  | LocalesEmptyElement
  | LocalesListElement
  | LocalesItemElement
  | ContainerElement
  | RowElement
  | ColumnElement
  | SectionElement
  | GridElement
  | LayoutElement
  | CellElement
  | BlockContainerElement
  | VFlexElement
  | HFlexElement
  | NavbarBrandElement
  | NavbarButtonElement
  | NavbarContainerElement
  | NavbarLinkElement
  | NavbarMenuElement
  | NavbarWrapperElement
  | PaginationElement
  | PaginationPreviousElement
  | PaginationNextElement
  | PaginationPreviousIconElement
  | PaginationNextIconElement
  | PaginationCountElement
  | SliderArrowElement
  | SliderMaskElement
  | SliderNavElement
  | SliderSlideElement
  | SliderWrapperElement
  | MetaElement
  | TitleElement
  | CustomCodeElement
  | CommentElement
  | FacebookPixelElement
  | GoogleAnalyticsElement
  | TabsContentElement
  | TabsLinkElement
  | TabsMenuElement
  | TabsPaneElement
  | TabsWrapperElement
  | FacebookElement
  | MapWidgetElement
  | TwitterElement
  | GooglePlusElement
  | UserAccountWrapperElement
  | UserAccountFormWrapperElement
  | UserAccountFormElement
  | UserAccountFormSaveButtonElement
  | UserAccountFormCancelButtonElement
  | UserAccountSubscriptionListWrapperElement
  | UserAccountSubscriptionListEmptyElement
  | UserAccountSubscriptionListElement
  | UserAccountSubscriptionListItemElement
  | UserAccountSubscriptionListItemInfoElement
  | UserAccountSubscriptionCancelButtonElement
  | UserSignUpFormWrapperElement
  | UserSignUpFormElement
  | UserSignUpVerificationMessageElement
  | UserSignUpRedirectWrapperElement
  | UserSignUpTermsOfServiceWrapperElement
  | UserSignUpTermsOfServiceCheckboxInputElement
  | UserLogInFormWrapperElement
  | UserLogInFormElement
  | UserUpdatePasswordFormWrapperElement
  | UserUpdatePasswordFormElement
  | UserResetPasswordFormWrapperElement
  | UserResetPasswordFormElement
  | UserLogOutLogInElement
  | UserFormBlockLabelElement
  | UserFormButtonElement
  | UserFormCheckboxInputElement
  | UserFormTextInputElement
  | UserFormEmailInputElement
  | UserFormNameInputElement
  | UserFormPasswordInputElement
  | UserFormSelectElement
  | UserFormNumberInputElement
  | UserFormFileUploadInputElement
  | UserFormUploadNameElement
  | UserFormHeaderElement
  | UserFormFooterElement
  | UserFormPageWrapElement
  | BlockContentElement
  | BlockHeaderElement
  | FlexColumnElement
  | GridRowElement
  | UserFormSuccessStateElement
  | UserFormErrorStateElement
  | UserFormErrorStateStyleVariant1Element
  | UserLogInErrorMsgElement
  | UserSignUpErrorMsgElement
  | UserResetPasswordErrorMsgElement
  | UserUpdatePasswordErrorMsgElement
  | UserErrorMsgElement
  | FrameElement;
`,elementPresetsTypes=`/// <reference path="./element-presets-generated.d.ts" />

interface ElementPreset<elementType> {
  readonly [brand]: 'ElementPreset';
  readonly id: [PluginId, ElementPresetId];
  readonly create: (elementData: {
    id: FullElementId;
    type: [PluginId, ComponentId];
  }) => elementType;
}

type ElementPresetId = string;
`,elementPresetsGeneratedTypes=`// This file was automatically generated. See designer-extensions docs.

type ElementPresets = {
  SearchForm: ElementPreset<AnyElement>;
  DOM: ElementPreset<DOMElement>;
  DivBlock: ElementPreset<BlockElement>;
  List: ElementPreset<ListElement>;
  ListItem: ElementPreset<ListItemElement>;
  LinkBlock: ElementPreset<LinkElement>;
  Button: ElementPreset<LinkElement>;
  Heading: ElementPreset<HeadingElement>;
  Paragraph: ElementPreset<ParagraphElement>;
  TextLink: ElementPreset<LinkElement>;
  TextBlock: ElementPreset<BlockElement>;
  Blockquote: ElementPreset<BlockquoteElement>;
  RichText: ElementPreset<RichTextElement>;
  CodeBlock: ElementPreset<CodeBlockElement>;
  Image: ElementPreset<AnyElement>;
  Animation: ElementPreset<AnyElement>;
  Spline: ElementPreset<AnyElement>;
  Rive: ElementPreset<AnyElement>;
  BackgroundVideoWrapper: ElementPreset<BackgroundVideoWrapperElement>;
  CommercePaypalCheckoutFormContainer: ElementPreset<AnyElement>;
  CommerceCheckoutFormContainer: ElementPreset<AnyElement>;
  CommerceOrderConfirmationContainer: ElementPreset<AnyElement>;
  CommerceCheckoutOrderItemsWrapper: ElementPreset<AnyElement>;
  CommerceCheckoutCustomerInfoSummaryWrapper: ElementPreset<AnyElement>;
  CommerceCheckoutShippingSummaryWrapper: ElementPreset<AnyElement>;
  CommerceCheckoutPaymentSummaryWrapper: ElementPreset<CommerceCheckoutPaymentSummaryWrapperElement>;
  CommerceCheckoutOrderSummaryWrapper: ElementPreset<AnyElement>;
  CommerceCartWrapper: ElementPreset<AnyElement>;
  CommerceAddToCartWrapper: ElementPreset<AnyElement>;
  CommerceCartQuickCheckoutActions: ElementPreset<CommerceCartQuickCheckoutActionsElement>;
  CommercePayPalCheckoutButton: ElementPreset<CommercePayPalCheckoutButtonElement>;
  CommerceCheckoutDiscounts: ElementPreset<AnyElement>;
  CommerceCheckoutAdditionalInputsContainer: ElementPreset<AnyElement>;
  CommerceCheckoutAdditionalInfoSummaryWrapper: ElementPreset<CommerceCheckoutAdditionalInfoSummaryWrapperElement>;
  CommerceDownloadsWrapper: ElementPreset<CommerceDownloadsWrapperElement>;
  DropdownWrapper: ElementPreset<DropdownWrapperElement>;
  DynamoWrapper: ElementPreset<DynamoWrapperElement>;
  HtmlEmbed: ElementPreset<HtmlEmbedElement>;
  Video: ElementPreset<VideoElement>;
  YouTubeVideo: ElementPreset<YouTubeVideoElement>;
  LightboxWrapper: ElementPreset<LightboxWrapperElement>;
  FormForm: ElementPreset<AnyElement>;
  FormBlockLabel: ElementPreset<FormBlockLabelElement>;
  FormTextInput: ElementPreset<AnyElement>;
  FormFileUploadWrapper: ElementPreset<AnyElement>;
  FormTextarea: ElementPreset<AnyElement>;
  FormCheckboxInput: ElementPreset<AnyElement>;
  FormRadioInput: ElementPreset<AnyElement>;
  FormSelect: ElementPreset<AnyElement>;
  FormReCaptcha: ElementPreset<FormReCaptchaElement>;
  FormButton: ElementPreset<FormButtonElement>;
  IX2InstanceFactoryOnClass: ElementPreset<BlockElement>;
  IX2InstanceFactoryOnElement: ElementPreset<LinkElement>;
  LocalesWrapper: ElementPreset<LocalesWrapperElement>;
  Section: ElementPreset<SectionElement>;
  BlockContainer: ElementPreset<BlockContainerElement>;
  QuickStack: ElementPreset<LayoutElement>;
  Grid: ElementPreset<GridElement>;
  Row: ElementPreset<RowElement>;
  VFlex: ElementPreset<VFlexElement>;
  HFlex: ElementPreset<HFlexElement>;
  NavbarWrapper: ElementPreset<NavbarWrapperElement>;
  Pagination: ElementPreset<PaginationElement>;
  SliderWrapper: ElementPreset<SliderWrapperElement>;
  TabsWrapper: ElementPreset<TabsWrapperElement>;
  MapWidget: ElementPreset<MapWidgetElement>;
  Facebook: ElementPreset<FacebookElement>;
  Twitter: ElementPreset<TwitterElement>;
  LayoutNavbarLogoCenter: ElementPreset<SectionElement>;
  LayoutNavbarLogoLeft: ElementPreset<SectionElement>;
  LayoutNavbarNoShadow: ElementPreset<SectionElement>;
  LayoutHeroHeadingCenter: ElementPreset<SectionElement>;
  LayoutHeroHeadingLeft: ElementPreset<SectionElement>;
  LayoutHeroHeadingRight: ElementPreset<SectionElement>;
  LayoutHeroStack: ElementPreset<SectionElement>;
  LayoutHeroSubscribeLeft: ElementPreset<SectionElement>;
  LayoutHeroSubscribeRight: ElementPreset<SectionElement>;
  LayoutHeroWithoutImage: ElementPreset<SectionElement>;
  LayoutTeamCircles: ElementPreset<SectionElement>;
  LayoutTeamSlider: ElementPreset<SectionElement>;
  LayoutLogosQuoteBlock: ElementPreset<SectionElement>;
  LayoutLogosQuoteDivider: ElementPreset<SectionElement>;
  LayoutLogosTitleLarge: ElementPreset<SectionElement>;
  LayoutLogosTitleSmall: ElementPreset<SectionElement>;
  LayoutLogosWithoutTitle: ElementPreset<SectionElement>;
  LayoutGalleryOverview: ElementPreset<SectionElement>;
  LayoutGalleryScroll: ElementPreset<SectionElement>;
  LayoutGallerySlider: ElementPreset<SectionElement>;
  LayoutFeaturesList: ElementPreset<SectionElement>;
  LayoutFeaturesMetrics: ElementPreset<SectionElement>;
  LayoutFeaturesTable: ElementPreset<SectionElement>;
  LayoutPricingComparison: ElementPreset<SectionElement>;
  LayoutPricingItems: ElementPreset<SectionElement>;
  LayoutPricingOverview: ElementPreset<SectionElement>;
  LayoutTestimonialColumnDark: ElementPreset<SectionElement>;
  LayoutTestimonialColumnLight: ElementPreset<SectionElement>;
  LayoutTestimonialImageLeft: ElementPreset<SectionElement>;
  LayoutTestimonialSliderLarge: ElementPreset<SectionElement>;
  LayoutTestimonialSliderSmall: ElementPreset<SectionElement>;
  LayoutTestimonialStack: ElementPreset<SectionElement>;
  LayoutFooterDark: ElementPreset<SectionElement>;
  LayoutFooterLight: ElementPreset<SectionElement>;
  LayoutFooterSubscribe: ElementPreset<SectionElement>;
  UserAccountSubscriptionList: ElementPreset<UserAccountSubscriptionListWrapperElement>;
  UserLogOutLogIn: ElementPreset<UserLogOutLogInElement>;
  SignUp: ElementPreset<UserSignUpFormWrapperElement>;
  LogIn: ElementPreset<UserLogInFormWrapperElement>;
  UserAccount: ElementPreset<UserAccountWrapperElement>;
  ResetPassword: ElementPreset<UserResetPasswordFormWrapperElement>;
  UpdatePassword: ElementPreset<UserUpdatePasswordFormWrapperElement>;
};
`,componentsTypes=`interface Component {
  readonly [brand]: 'Component';

  readonly id: ComponentId;

  /**
   * Get the name of a specific component.
   * @returns A Promise that resolves to a string representing the name of a component.
   * @example
   * \`\`\`ts
   * const myComponentName = "Hero-Component";
   * const components = await webflow.getAllComponents();
   *
   * // Check if component exists
   * for (const c in components) {
   *   const currentComponentName = await components[c].getName();
   *   if (componentName === currentComponentName) {
   *     console.log("Found Hero Component");
   *   }
   * }
   * \`\`\`
   */
  getName(): Promise<string>;
  /**
   * Set component name to the provided string. Components can be renamed, and the update happens immediately,
   * without requiring an explicit save() invocation.
   * @returns A Promise that resolves when the name change is successful.
   * @example
   * \`\`\`ts
   * await component.setName("She-ro Component")
   * \`\`\`
   */
  setName(name: string): Promise<null>;
  getRootElement(): Promise<null | AnyElement>;
}

type ComponentId = string;
`,variablesTypes=`interface ColorVariable {
  readonly id: VariableId
  readonly type: 'Color'
  /**
   * Get the variable's name.
   * @returns A Promise that resolves into a the Variable Name.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableName = await variable.getName()
   * \`\`\`
   */
  getName(): Promise<string>
  /**
   * Set variable name.
   * @param newName - The desired name of the variable.
   * @returns A Promise that resolves once a name is successfully set.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const colorVariable = await collection.getVariableByName("color");
   * await colorVariable.setName("White");
   * \`\`\`
   */
  setName(newName: string): Promise<null>
  /**
   * Set value of variable. The value must be of the same type as the value of the instantiated variable.
   * @param value - The desired value of the variable.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to set the value for.
   * @returns A Promise that resolves into a value, or if the variable is an alias - the original Variable.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const newVariable1 = await collection.createColorVariable('myvar4', 'red');
   * await newVariable1.set('yellow');
   * \`\`\`
   */
  set(
    value: ColorValue | ColorVariable | CustomValue | null,
    options?: VariableSetOptions,
  ): Promise<null>
  /**
   * Get the variable’s value.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to get the value for.
   * @returns A Promise that resolves into a value, or if the variable is an alias - the original Variable.
   * @example
   * \`\`\`ts
   * const newVariable1 = await collection.createSizeVariable('myvar1', { unit: 'px', value: 50 });
   * console.log(await newVariable1.get());
   * \`\`\`
   */
  get(
    options?: VariableGetOptions,
  ): Promise<ColorValue | ColorVariable | CustomValue | null>
  /**
   * Removes a variable from the default collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable was successful or not.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const newVariable1 = await collection.createColorVariable('myvar4', 'red')
   * await newVariable1.remove()
   * \`\`\`
   */
  remove(): Promise<boolean>
  /**
   * Gets a CSS string representing a binding to the variable.
   *
   * This string can be used in custom CSS values to ensure the binding will not break
   * if the variable is renamed.
   *
   * @returns A Promise that resolves into a string representing the variable's name binding. (e.g. \`var(--my-color-variable)\`)
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableBinding = await variable.getBinding()
   * \`\`\`
   */
  getBinding(): Promise<string>
  /**
   * Gets a CSS string representing the variable's name.
   *
   * This string can be used in custom CSS with a variable (e.g. binding with a fallback value).
   *
   *
   * @returns A Promise that resolves into a string representing the variable's name. (e.g. \`--my-color-variable\`)
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableCSSName = await variable.getCSSName()
   * \`\`\`
   */
  getCSSName(): Promise<string>
}

interface SizeVariable {
  readonly id: VariableId
  readonly type: 'Size'
  /**
   * Get the variable's name.
   * @returns A Promise that resolves into a the Variable Name.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableName = await variable.getName()
   * \`\`\`
   */
  getName(): Promise<string>
  /**
   * Set variable name.
   * @param newName - The desired name of the variable.
   * @returns A Promise that resolves once a name is successfully set.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const colorVariable = await collection.getVariableByName("color");
   * await colorVariable.setName("White");
   * \`\`\`
   */
  setName(newName: string): Promise<null>
  /**
   * Set value of variable. The value must be of the same type as the value of the instantiated variable.
   * @param value - The desired value of the variable.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to set the value for.
   * @returns A Promise that resolves into a value, or if the variable is an alias - the original Variable.
   * @example
   * \`\`\`ts
   * const newVariable1 = await collection.createSizeVariable('myvar1', { unit: 'px', value: 50 });
   * await newVariable1.set({ unit: 'px', value: 80 });
   * \`\`\`
   */
  set(
    value: SizeValue | SizeVariable | CustomValue | null,
    options?: VariableSetOptions,
  ): Promise<null>
  /**
   * Get the variable’s value.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to get the value for.
   * @returns A Promise that resolves into a value, or if the variable is an alias - the original Variable.
   * @example
   * \`\`\`ts
   * const newVariable1 = await collection.createSizeVariable('myvar1', { unit: 'px', value: 50 });
   * console.log(await newVariable1.get());
   * \`\`\`
   */
  get(
    options?: VariableGetOptions,
  ): Promise<SizeValue | SizeVariable | CustomValue | null>
  /**
   * Removes a variable from the default collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable was successful or not.
   * @example
   * \`\`\`ts
   * const newVariable1 = await collection.createColorVariable('myvar4', 'red')
   * await newVariable1.remove()
   * \`\`\`
   */
  remove(): Promise<boolean>
  /**
   * Gets a CSS string representing a binding to the variable.
   *
   * This string can be used in custom CSS values to ensure the binding will not break
   * if the variable is renamed.
   *
   * @returns A Promise that resolves into a string representing the variable's name binding. (e.g. \`var(--my-size-variable)\`)
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableBinding = await variable.getBinding()
   * \`\`\`
   */
  getBinding(): Promise<string>
  /**
   * Gets a CSS string representing the variable's name.
   *
   * This string can be used in custom CSS with a variable (e.g. binding with a fallback value).
   *
   * @returns A Promise that resolves into a string representing the variable's name. (e.g. \`--my-size-variable\`)
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableCSSName = await variable.getCSSName()
   * \`\`\`
   */
  getCSSName(): Promise<string>
}

interface NumberVariable {
  readonly id: VariableId
  readonly type: 'Number'

  /**
   * Get the variable's name.
   * @returns A Promise that resolves into the Variable Name.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableName = await variable.getName()
   * \`\`\`
   */
  getName(): Promise<string>

  /**
   * Set the variable's name.
   * @param newName - The desired name of the variable.
   * @returns A Promise that resolves once the name is successfully set.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const numberVariable = await collection.getVariableByName("number");
   * await numberVariable.setName("My Number Variable");
   * \`\`\`
   */
  setName(newName: string): Promise<null>

  /**
   * Set the value of the variable. The value must be of the same type as the value of the instantiated variable.
   * @param value - The desired value of the variable.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to set the value for.
   * @returns A Promise that resolves once the value is successfully set.
   * @example
   * \`\`\`ts
   * const newVariable = await collection.createNumberVariable('myvar1', 100);
   * await newVariable.set(200);
   * \`\`\`
   */
  set(
    value: NumberValue | NumberVariable | CustomValue | null,
    options?: VariableSetOptions,
  ): Promise<null>

  /**
   * Get the variable’s value.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to get the value for.
   * @returns A Promise that resolves into the variable's number value, or if the variable is an alias - the original Variable.
   * @example
   * \`\`\`ts
   * const newVariable = await collection.createNumberVariable('myvar1', 100);
   * console.log(await newVariable.get());
   * \`\`\`
   */
  get(
    options?: VariableGetOptions,
  ): Promise<NumberValue | NumberVariable | CustomValue | null>

  /**
   * Removes the variable from the default collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable was successful.
   * @example
   * \`\`\`ts
   * const newVariable = await collection.createNumberVariable('myvar1', 100);
   * await newVariable.remove();
   * \`\`\`
   */
  remove(): Promise<boolean>
  /**
   * Gets a CSS string representing a binding to the variable.
   *
   * This string can be used in custom CSS values to ensure the binding will not break
   * if the variable is renamed.
   *
   * @returns A Promise that resolves into a string representing the variable's name binding. (e.g. \`var(--my-number-variable)\`)
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableBinding = await variable.getBinding()
   * \`\`\`
   */
  getBinding(): Promise<string>
  /**
   * Gets a CSS string representing the variable's name.
   *
   * This string can be used in custom CSS with a variable (e.g. binding with a fallback value).
   *
   * @returns A Promise that resolves into a string representing the variable's CSS name. (e.g. \`--my-number-variable\`)
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableCSSName = await variable.getCSSName()
   * \`\`\`
   */
  getCSSName(): Promise<string>
}

interface PercentageVariable {
  readonly id: VariableId
  readonly type: 'Percentage'
  /**
   * Get the variable's name.
   * @returns A Promise that resolves into the Variable Name.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableName = await variable.getName()
   * \`\`\`
   */
  getName(): Promise<string>

  /**
   * Set the variable's name.
   * @param newName - The desired name of the variable.
   * @returns A Promise that resolves once the name is successfully set.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const percentageVariable = await collection.getVariableByName("percentage");
   * await percentageVariable.setName("My Percentage Variable");
   * \`\`\`
   */
  setName(newName: string): Promise<null>

  /**
   * Set the value of the variable. The value must be of the same type as the value of the instantiated variable.
   * @param value - The desired value of the variable.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to set the value for.
   * @returns A Promise that resolves once the value is successfully set.
   * @example
   * \`\`\`ts
   * const newVariable = await collection.createPercentageVariable('myvar1', 100);
   * await newVariable.set(50);
   * \`\`\`
   */
  set(
    value: PercentageValue | PercentageVariable | CustomValue | null,
    options?: VariableSetOptions,
  ): Promise<null>

  /**
   * Get the variable’s value.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to get the value for.
   * @returns A Promise that resolves into the variable's value, or if the variable is an alias - the original Variable.
   * @example
   * \`\`\`ts
   * const newVariable = await collection.createPercentageVariable('myvar1', 100);
   * console.log(await newVariable.get());
   * \`\`\`
   */
  get(
    options?: VariableGetOptions,
  ): Promise<PercentageValue | PercentageVariable | CustomValue | null>

  /**
   * Removes the variable from the default collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable was successful.
   * @example
   * \`\`\`ts
   * const newVariable = await collection.createPercentageVariable('myvar1', 100);
   * await newVariable.remove();
   * \`\`\`
   */
  remove(): Promise<boolean>
  /**
   * Gets a CSS string representing a binding to the variable.
   *
   * This string can be used in custom CSS values to ensure the binding will not break
   * if the variable is renamed.
   *
   * @returns A Promise that resolves into a string representing the variable's name binding. (e.g. \`var(--my-percentage-variable)\`)
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableBinding = await variable.getBinding()
   * \`\`\`
   */
  getBinding(): Promise<string>
  /**
   * Gets a CSS string representing the variable's name.
   *
   * This string can be used in custom CSS with a variable (e.g. binding with a fallback value).
   *
   * @returns A Promise that resolves into a string representing the variable's name. (e.g. \`--my-percentage-variable\`)
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableCSSName = await variable.getCSSName()
   * \`\`\`
   */
  getCSSName(): Promise<string>
}

interface FontFamilyVariable {
  readonly id: VariableId
  readonly type: 'FontFamily'
  /**
   * Get the variable's name.
   * @returns A Promise that resolves into a the Variable Name.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableName = await variable.getName()
   * \`\`\`
   */
  getName(): Promise<string>
  /**
   * Set variable name.
   * @param newName - The desired name of the variable.
   * @returns A Promise that resolves once a name is successfully set.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const colorVariable = await collection.getVariableByName("color");
   * await colorVariable.setName("White");
   * \`\`\`
   */
  setName(newName: string): Promise<null>
  /**
   * Set value of variable. The value must be of the same type as the value of the instantiated variable.
   * @param value - The desired value of the variable.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to set the value for.
   * @returns A Promise that resolves into a value, or if the variable is an alias - the original Variable.
   * @example
   * \`\`\`ts
   * const newVariable1 = await collection.createColorVariable('myvar4', 'red');
   * await newVariable1.set('yellow');
   * \`\`\`
   */
  set(
    value: FontFamilyValue | FontFamilyVariable | CustomValue | null,
    options?: VariableSetOptions,
  ): Promise<null>
  /**
   * Get the variable’s value.
   * @param options - The configuration options for the variable.
   * @param options.mode - The optional mode object to get the value for.
   * @returns A Promise that resolves into a value, or if the variable is an alias - the original Variable.
   * @example
   * \`\`\`ts
   * const newVariable1 = await collection.createSizeVariable('myvar1', { unit: 'px', value: 50 });
   * console.log(await newVariable1.get());
   * \`\`\`
   */
  get(
    options?: VariableGetOptions,
  ): Promise<FontFamilyValue | FontFamilyVariable | CustomValue | null>
  /**
   * Removes a variable from the default collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable was successful or not.
   * @example
   * \`\`\`ts
   * const newVariable1 = await collection.createColorVariable('myvar4', 'red')
   * await newVariable1.remove()
   * \`\`\`
   */
  remove(): Promise<boolean>
  /**
   * Gets a CSS string representing a binding to the variable.
   *
   * This string can be used in custom CSS values to ensure the binding will not break
   * if the variable is renamed.
   *
   * @returns A Promise that resolves into a string representing the variable's name binding. (e.g. \`var(--my-font-family-variable)\`)
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableBinding = await variable.getBinding()
   * \`\`\`
   */
  getBinding(): Promise<string>
  /**
   * Gets a CSS string representing the variable's name.
   *
   * This string can be used in custom CSS with a variable (e.g. binding with a fallback value).
   *
   * @returns A Promise that resolves into a string representing the variable's name. (e.g. \`--my-font-family-variable\`)
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const variable = await collection.getVariable('id-123')
   * const variableCSSName = await variable.getCSSName()
   * \`\`\`
   */
  getCSSName(): Promise<string>
}

type Variable =
  | ColorVariable
  | SizeVariable
  | FontFamilyVariable
  | NumberVariable
  | PercentageVariable

interface VariableCollection {
  readonly id: VariableCollectionId
  getName(): Promise<string>
  getVariable(id: VariableId): Promise<null | Variable>
  getVariableByName(name: string): Promise<null | Variable>
  getAllVariables(): Promise<Array<Variable>>
  createColorVariable(
    name: string,
    value: string | ColorVariable | CustomValue,
    modes?: { [key: VariableModeId]: string | ColorVariable | CustomValue },
  ): Promise<ColorVariable>
  createSizeVariable(
    name: string,
    value: SizeValue | SizeVariable | CustomValue,
    modes?: { [key: VariableModeId]: SizeValue | SizeVariable | CustomValue },
  ): Promise<SizeVariable>
  createNumberVariable(
    name: string,
    value: number | NumberVariable | CustomValue,
    modes?: { [key: VariableModeId]: number | NumberVariable | CustomValue },
  ): Promise<NumberVariable>
  createPercentageVariable(
    name: string,
    value: number | PercentageVariable | CustomValue,
    modes?: {
      [key: VariableModeId]: number | PercentageVariable | CustomValue
    },
  ): Promise<PercentageVariable>
  createFontFamilyVariable(
    name: string,
    value: string | FontFamilyVariable | CustomValue,
    modes?: {
      [key: VariableModeId]: string | FontFamilyVariable | CustomValue
    },
  ): Promise<FontFamilyVariable>
  /**
   * Sets the name of the variable collection.
   * @param newName - The desired name of the variable collection.
   * @returns A Promise that resolves once the name is successfully set.
   * @example
   * \`\`\`ts
   * const collection = await webflow.createVariableCollection('My Collection');
   * await collection.setName('My New Collection');
   * \`\`\`
   */
  setName(newName: string): Promise<null>
  /**
   * Creates a new variable mode.
   * @param name - The desired name of the variable mode.
   * @returns A Promise that resolves into the new variable mode.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const mode = await collection.createVariableMode('My Mode');
   * \`\`\`
   */
  createVariableMode(name: string): Promise<VariableMode>
  /**
   * Gets a variable mode by id.
   * @param id - The id of the variable mode.
   * @returns A Promise that resolves into the variable mode.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const mode = await collection.getVariableModeById('modeId');
   * \`\`\`
   */
  getVariableModeById(id: VariableModeId): Promise<null | VariableMode>
  /**
   * Gets a variable mode by name.
   * @param name - The name of the variable mode.
   * @returns A Promise that resolves into the variable mode.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const mode = await collection.getVariableModeByName('modeName');
   * \`\`\`
   */
  getVariableModeByName(name: string): Promise<null | VariableMode>
  /**
   * Gets all variable modes.
   * @returns A Promise that resolves into an array of variable modes.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const modes = await collection.getAllVariableModes();
   * \`\`\`
   */
  getAllVariableModes(): Promise<Array<VariableMode>>
}

interface VariableMode {
  readonly id: VariableModeId
  /**
   * Gets the name of the variable mode.
   * @returns A Promise that resolves into the variable mode's name.
   * @example
   * \`\`\`ts
   * const collection = await webflow.getDefaultVariableCollection();
   * const mode = await collection.createVariableMode('My Mode')
   * const modeName = await mode.getName();
   * \`\`\`
   */
  getName(): Promise<string>
  /**
   * Removes the variable mode from the collection.
   * @returns A Promise that resolves into a boolean indicating whether deleting the variable was successful.
   * @example
   * \`\`\`ts
   * const mode = await collection.createVariableMode('My Mode')
   * await mode.remove();
   * \`\`\`
   */
  remove(): Promise<boolean>
  /**
   * Sets the name of the variable mode.
   * @param name - The desired name of the variable mode.
   * @returns A Promise that resolves once the name is successfully set.
   * @example
   * \`\`\`ts
   * const mode = await collection.createVariableMode('My Mode')
   * await mode.setName('My New Mode');
   * \`\`\`
   */
  setName(name: string): Promise<null>
}

type VariableModeId = string
type VariableCollectionId = string
type VariableId = string
type ColorValue = string
type SizeValue = { value: number; unit: SizeUnit }
type FontFamilyValue = string
type NumberValue = number
type PercentageValue = number
type SizeUnit =
  | 'px'
  | 'em'
  | 'rem'
  | 'vh'
  | 'vw'
  | 'dvh'
  | 'dvw'
  | 'lvh'
  | 'lvw'
  | 'svh'
  | 'svw'
  | 'vmax'
  | 'vmin'
  | 'ch'
type VariableSetOptions = {
  /** The mode to get/set the variable value for. */
  mode?: VariableMode
  /** Whether to return custom values. */
  customValues?: boolean
}
type VariableGetOptions = {
  /** The mode to get/set the variable value for. */
  mode?: VariableMode
  /** Whether to return custom values. */
  customValues?: boolean
  /** Whether to not return the value from the base mode if there is no value set for the current mode. */
  doNotInheritFromBase?: boolean
}
type CustomValue = {
  type: 'custom'
  value: string
}
`,assetsTypes=`interface Asset {
  readonly id: AssetId;

  /**
   * Get the cdn URL of the asset.
   * @example
   * \`\`\`ts
   * const asset = await webflow.getAssetById('123');
   * const url = await asset.getUrl();
   * \`\`\`
   */
  getUrl(): Promise<string>;
  /**
   * Get the alt text of the asset.
   * @example
   * \`\`\`ts
   * const asset = await webflow.getAssetById('123);
   * const altText = await asset.getAltText();
   * \`\`\`
   */
  getAltText(localeId?: string): Promise<string | null>;
  /**
   * Set the alt text of the asset.
   * @example
   * \`\`\`ts
   * const asset = await webflow.getAssetById('123');
   * await asset.setAltText('new alt text');
   * \`\`\`
   */
  setAltText(altText: string | null, localeId?: string): Promise<null>;

  /**
   * Get the name of the asset.
   * @example
   * \`\`\`ts
   * const asset = await webflow.getAssetById('123');
   * const name = await asset.getName();
   * \`\`\`
   */
  getName(): Promise<string>;

  /**
   * Set the name of the asset.
   * @example
   * \`\`\`ts
   * const asset = await webflow.getAssetById('123');
   * await asset.setName('new name');
   * \`\`\`
   */
  setName(name: string): Promise<null>;

  /**
   * Replace the current asset with a new file.
   * @example
   * \`\`\`ts
   * const asset = await webflow.getAssetById('123');
   * const newFile = new File([blob], 'cat.png', { type: 'image/png' });
   * await asset.setFile(newFile);
   * \`\`\`
   */
  setFile(fileBlob: File): Promise<null>;

  /**
   * Get the mime type of the asset.
   * @example
   * \`\`\`ts
   * const asset = await webflow.getAssetById('123');
   * const mimeType = await asset.getMimeType();
   * \`\`\`
   */
  getMimeType(): Promise<string>;

  /**
   * Set the parent folder of the asset.
   * @example
   * \`\`\`ts
   * const asset = await webflow.getAssetById('123');
   * const folder = await webflow.createAssetFolder('New Folder');
   * await asset.setParent(folder);
   * \`\`\`
   */
  setParent(assetFolder: AssetFolder): Promise<null>;

  /**
   * Get the parent folder of the asset.
   * @example
   * \`\`\`ts
   * const asset = await webflow.getAssetById('123');
   * const parentFolder = await asset.getParent();
   * \`\`\`
   */
  getParent(): Promise<AssetFolder | null>;
}

type AssetId = string;

type AssetFolder = {
  readonly id: AssetFolderId;

  getName(): Promise<string>;
};

type AssetFolderId = string;
`,brandTypes=`declare const brand: unique symbol;
`,builderElementTypes=`interface BuilderElement {
  readonly [brand]: 'BuilderElement';

  readonly id: ElementId;
  readonly builderElement: boolean;
  readonly textContent: true;

  getTag(): null | string;
  setTag(tag: string): null;
  append(child: ElementPreset<AnyElement>): BuilderElement;
  setAttribute(name: string, value: string): null;
  setStyles(styles: Array<Style>): null;
  setTextContent(content: string): null;
}
`,appSubscriptionTypes=`type AppSubscription = {
  appId: string;
  price: {
    value: number;
    unit: string;
    interval: 'ONE_TIME' | 'MONTHLY' | 'YEARLY';
  };
  accessGrant: {
    type: 'Site';
    id: string;
  };
  status: string;
  startsAt: string;
  endsAt: string;
};
`,appModesGeneratedTypes=`// This file was automatically generated. See designer-extensions docs.

type AppMode =
  | 'canAccessCanvas'
  | 'canManageAssets'
  | 'canAccessAssets'
  | 'canDesign'
  | 'canEdit'
  | 'canCreateComponents'
  | 'canModifyComponents'
  | 'canCreateStyles'
  | 'canModifyStyles'
  | 'canCreatePage'
  | 'canReadPageSettings'
  | 'canManagePageSettings'
  | 'canReadVariables'
  | 'canModifyVariables'
  | 'canModifyImageElement';
`,appConnectionsTypes=`type AppConnectionResource = {
  type: 'Element';
  value: AnyElement;
};

type LaunchContext = {
  type: 'AppConnection' | 'AppIntent' | 'DeepLink';
  value: null | string | {[key in 'form' | 'image']?: 'create' | 'manage'};
};
`,getDesignerTypings=()=>({"index.d.ts":indexTypes,"api.d.ts":apiTypes,"styles.d.ts":stylesTypes,"styles-generated.d.ts":stylesGeneratedTypes,"pages.d.ts":pagesTypes,"elements.d.ts":elementsTypes,"elements-generated.d.ts":elementsGeneratedTypes,"element-presets.d.ts":elementPresetsTypes,"element-presets-generated.d.ts":elementPresetsGeneratedTypes,"components.d.ts":componentsTypes,"variables.d.ts":variablesTypes,"assets.d.ts":assetsTypes,"brand.d.ts":brandTypes,"builder-element.d.ts":builderElementTypes,"app-subscription.d.ts":appSubscriptionTypes,"app-modes-generated.d.ts":appModesGeneratedTypes,"app-connections.d.ts":appConnectionsTypes}),configureMonacoWithDesignerTypings=e=>{const o=getDesignerTypings();return Object.entries(o).forEach(([a,i])=>{const s=`file:///node_modules/@types/webflow-designer-extension/${a}`;e.languages.typescript.typescriptDefaults.addExtraLib(i,s),e.languages.typescript.javascriptDefaults.addExtraLib(i,s)}),console.log("✅ Loaded designer extension typings:",Object.keys(o)),o},MONACO_THEME={base:"vs-dark",inherit:!0,rules:[{token:"comment",foreground:"969896"},{token:"string",foreground:"b5bd68"},{token:"number",foreground:"de935f"},{token:"keyword",foreground:"b294bb"},{token:"type",foreground:"81a2be"},{token:"variable",foreground:"cc6666"},{token:"function",foreground:"81a2be"},{token:"operator",foreground:"8abeb7"}],colors:{"editor.background":"#181818","editor.foreground":"#c5c8c6","editor.lineHighlightBackground":"#282a2e","editor.selectionBackground":"#373b41","editorCursor.foreground":"#c5c8c6","editorWhitespace.foreground":"#969896"}},defaultCode=`// Explore the Webflow Designer API
// Try typing "webflow." to see all available methods.

// Get style information of selected element
const selectedElement = await webflow.getSelectedElement();
const elementStyles = await selectedElement.getStyles();
const primaryStyle = elementStyles?.[0];
const styleProperties = await primaryStyle.getProperties();
console.log(styleProperties);
`,Playground=()=>{const[code,setCode]=reactExports.useState(defaultCode),[output,setOutput]=reactExports.useState(""),[isRunning,setIsRunning]=reactExports.useState(!1),monaco=Le(),editorRef=reactExports.useRef(null),codeRef=reactExports.useRef(code),isMountedRef=reactExports.useRef(!0);reactExports.useEffect(()=>()=>{if(isMountedRef.current=!1,editorRef.current)try{editorRef.current.dispose()}catch(e){if(e&&typeof e=="object"&&"type"in e&&e.type==="cancelation"||e&&typeof e=="object"&&"name"in e&&e.name==="Canceled")return;console.warn("Monaco editor disposal error:",e)}},[]),reactExports.useEffect(()=>{if(monaco&&isMountedRef.current)try{monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1,diagnosticCodesToIgnore:[]}),monaco.languages.typescript.typescriptDefaults.setCompilerOptions({allowJs:!0,checkJs:!1,strict:!1,noUnusedLocals:!1,noUnusedParameters:!1,suppressImplicitAnyIndexErrors:!0,target:monaco.languages.typescript.ScriptTarget.ESNext,module:monaco.languages.typescript.ModuleKind.ESNext}),monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1,diagnosticCodesToIgnore:[]}),monaco.languages.typescript.javascriptDefaults.setCompilerOptions({allowJs:!0,checkJs:!1,strict:!1,noUnusedLocals:!1,noUnusedParameters:!1,suppressImplicitAnyIndexErrors:!0,target:monaco.languages.typescript.ScriptTarget.ESNext,module:monaco.languages.typescript.ModuleKind.ESNext}),isMountedRef.current&&configureMonacoWithDesignerTypings(monaco)}catch(e){if(e&&typeof e=="object"&&"type"in e&&e.type==="cancelation"||e&&typeof e=="object"&&"name"in e&&e.name==="Canceled")return;console.warn("Monaco configuration error:",e)}},[monaco]);const safeConsole={log:(...e)=>setOutput(o=>o+e.map(a=>a instanceof Error?`${a.name}: ${a.message}
${a.stack}`:typeof a=="object"&&a!==null?JSON.stringify(a,null,2):String(a)).join(" ")+`
`),error:(...e)=>setOutput(o=>o+"[Error] "+e.map(a=>a instanceof Error?`${a.name}: ${a.message}
${a.stack}`:typeof a=="object"&&a!==null?JSON.stringify(a,null,2):String(a)).join(" ")+`
`),warn:(...e)=>setOutput(o=>o+"[Warn] "+e.map(a=>a instanceof Error?`${a.name}: ${a.message}
${a.stack}`:typeof a=="object"&&a!==null?JSON.stringify(a,null,2):String(a)).join(" ")+`
`),info:(...e)=>setOutput(o=>o+"[Info] "+e.map(a=>a instanceof Error?`${a.name}: ${a.message}
${a.stack}`:typeof a=="object"&&a!==null?JSON.stringify(a,null,2):String(a)).join(" ")+`
`)},runCode=async customCode=>{setIsRunning(!0),setOutput(`Running...
`);const codeToRun=customCode??codeRef.current;try{setOutput("");const asyncCode=`(async (webflow, console) => {
${codeToRun}
})`,fn=eval(asyncCode);await fn(window.webflow,safeConsole)}catch(e){safeConsole.error(e)}finally{setIsRunning(!1)}},editorOptions={minimap:{enabled:!1},fontSize:10.5,lineHeight:15,padding:{top:12,bottom:12,left:12,right:12},scrollBeyondLastLine:!1,theme:"prism-tomorrow",automaticLayout:!0,fontFamily:"ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",renderLineHighlight:"none",contextmenu:!1,folding:!1,lineNumbers:"off",glyphMargin:!1,scrollbar:{vertical:"hidden",horizontal:"hidden"}};return jsxRuntimeExports.jsxs("div",{style:{padding:0,maxWidth:700,margin:"0 auto",background:"#1e1e1e",color:"rgb(255 255 255 / 0.9)",borderRadius:4},children:[jsxRuntimeExports.jsx("div",{style:{background:"#181818",borderRadius:4,marginBottom:8,overflow:"hidden"},children:jsxRuntimeExports.jsx(Ft,{height:"200px",defaultLanguage:"typescript",value:code,path:"webflow-playground.js",onChange:e=>{setCode(e||""),codeRef.current=e||""},options:editorOptions,theme:"prism-tomorrow",loading:jsxRuntimeExports.jsx("div",{style:{height:"200px",display:"flex",alignItems:"center",justifyContent:"center",background:"#181818",color:"#8ac2ff",fontSize:14},children:"Loading editor..."}),beforeMount:e=>{try{e.editor.defineTheme("prism-tomorrow",MONACO_THEME),e.editor.setTheme("prism-tomorrow")}catch(o){if(o&&typeof o=="object"&&"type"in o&&o.type==="cancelation"||o&&typeof o=="object"&&"name"in o&&o.name==="Canceled")return;console.warn("Monaco beforeMount error:",o)}},onMount:(e,o)=>{try{editorRef.current=e,o&&isMountedRef.current&&e.addCommand(o.KeyMod.CtrlCmd|o.KeyCode.Enter,()=>runCode(codeRef.current))}catch(a){if(a&&typeof a=="object"&&"type"in a&&a.type==="cancelation"||a&&typeof a=="object"&&"name"in a&&a.name==="Canceled")return;console.warn("Monaco onMount error:",a)}}})}),jsxRuntimeExports.jsx("div",{style:{marginBottom:8,position:"relative"},children:jsxRuntimeExports.jsx("button",{onClick:()=>runCode(codeRef.current),disabled:isRunning,className:"button cc-primary",style:{position:"absolute",right:16,bottom:16},children:isRunning?"Running...":"Run"})}),jsxRuntimeExports.jsxs("div",{style:{opacity:output?1:0,height:output?"auto":0,overflow:"hidden",transition:"opacity 0.2s ease-in-out",padding:"0 16px 16px"},children:[jsxRuntimeExports.jsx("label",{style:{fontWeight:500,fontSize:13,color:"rgb(255 255 255 / 0.6)",display:"block",marginBottom:4},children:"Output"}),jsxRuntimeExports.jsx(CodeBlock,{code:output||" ",language:"javascript",onClear:output?()=>setOutput(""):void 0})]})]})},TabNavigation=({tabs:e,activeTab:o,setActiveTab:a})=>jsxRuntimeExports.jsx("div",{role:"tablist","aria-label":"Main Tabs",className:"tablist",children:e.map(i=>{const s=o===i.key;return jsxRuntimeExports.jsx("button",{id:`tab-${i.key}`,role:"tab","aria-selected":s,"aria-controls":`tabpanel-${i.key}`,tabIndex:s?0:-1,"data-state":s?"active":"inactive",className:"tab-btn",onClick:()=>a(i.key),children:i.label},i.key)})});(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var o=e.languages.extend("typescript",{});delete o["class-name"],e.languages.typescript["class-name"].inside=o,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:o}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var o=e.util.clone(e.languages.javascript),a=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,i=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function c(b,en){return b=b.replace(/<S>/g,function(){return a}).replace(/<BRACES>/g,function(){return i}).replace(/<SPREAD>/g,function(){return s}),RegExp(b,en)}s=c(s).source,e.languages.jsx=e.languages.extend("markup",o),e.languages.jsx.tag.pattern=c(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=o.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:c(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:c(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var d=function(b){return b?typeof b=="string"?b:typeof b.content=="string"?b.content:b.content.map(d).join(""):""},g=function(b){for(var en=[],sn=0;sn<b.length;sn++){var on=b[sn],ln=!1;if(typeof on!="string"&&(on.type==="tag"&&on.content[0]&&on.content[0].type==="tag"?on.content[0].content[0].content==="</"?en.length>0&&en[en.length-1].tagName===d(on.content[0].content[1])&&en.pop():on.content[on.content.length-1].content==="/>"||en.push({tagName:d(on.content[0].content[1]),openedBraces:0}):en.length>0&&on.type==="punctuation"&&on.content==="{"?en[en.length-1].openedBraces++:en.length>0&&en[en.length-1].openedBraces>0&&on.type==="punctuation"&&on.content==="}"?en[en.length-1].openedBraces--:ln=!0),(ln||typeof on=="string")&&en.length>0&&en[en.length-1].openedBraces===0){var dn=d(on);sn<b.length-1&&(typeof b[sn+1]=="string"||b[sn+1].type==="plain-text")&&(dn+=d(b[sn+1]),b.splice(sn+1,1)),sn>0&&(typeof b[sn-1]=="string"||b[sn-1].type==="plain-text")&&(dn=d(b[sn-1])+dn,b.splice(sn-1,1),sn--),b[sn]=new e.Token("plain-text",dn,null,dn)}on.content&&typeof on.content!="string"&&g(on.content)}};e.hooks.add("after-tokenize",function(b){b.language!=="jsx"&&b.language!=="tsx"||g(b.tokens)})})(Prism);function Dropdown({options:e,selectedValue:o,onValueChange:a,disabled:i,placeholder:s="Select an option"}){const c=d=>{i||a(d.target.value)};return jsxRuntimeExports.jsx("div",{children:jsxRuntimeExports.jsxs("select",{value:o,onChange:c,className:`w-select ${i?"disabled":""}`,style:{opacity:i?.5:1,cursor:i?"not-allowed":"pointer"},disabled:i,children:[jsxRuntimeExports.jsx("option",{value:"",children:s}),e.map(d=>d.subcategories?jsxRuntimeExports.jsx("optgroup",{label:d.label,children:d.subcategories.map(g=>jsxRuntimeExports.jsx("option",{value:`${d.value}.${g.value}`,children:g.label},`${d.value}.${g.value}`))},d.value):jsxRuntimeExports.jsx("option",{value:d.value,children:d.label},d.value))]})})}async function createDynamicEnumMap(e,o){const a={};return await Promise.all(e.map(async i=>{const s=await o(i);a[s.name]=s})),a}async function createObjectSelector(e,o){const a=new Map,i=new Map;return await Promise.all(e.map(async s=>{const c=await o(s);a.set(c.id,c),i.set(c.name,c.object)})),{getAll:async()=>Array.from(a.values()),getByName:async s=>i.get(s),getById:async s=>{var c;return(c=a.get(s))==null?void 0:c.object}}}function isDynamicEnumValue(e){return e&&typeof e=="object"&&"id"in e&&"name"in e&&"data"in e}function isVariableCollectionInfo(e){return isDynamicEnumValue(e)&&e.data&&"collection"in e.data}const SearchableDropdown=({options:e,value:o,onChange:a,placeholder:i="Search...",disabled:s=!1,loading:c=!1,className:d="w-select"})=>{const[g,b]=reactExports.useState(!1),[en,sn]=reactExports.useState(""),[on,ln]=reactExports.useState(e),dn=reactExports.useRef(null),pn=reactExports.useRef(null);reactExports.useEffect(()=>{if(!en.trim())ln(e);else{const nn=e.filter(an=>(typeof an=="string"?an:an.name).toLowerCase().includes(en.toLowerCase()));ln(nn)}},[en,e]),reactExports.useEffect(()=>{const nn=an=>{dn.current&&!dn.current.contains(an.target)&&(b(!1),sn(""))};return document.addEventListener("mousedown",nn),()=>document.removeEventListener("mousedown",nn)},[]),reactExports.useEffect(()=>{g&&pn.current&&pn.current.focus()},[g]);const un=()=>{!s&&!c&&(b(!g),g||sn(""))},gn=nn=>{a(nn),b(!1),sn("")},tn=()=>o?typeof o=="string"?o:isDynamicEnumValue(o)?o.name:"":"",j=nn=>typeof nn=="string"?nn:isDynamicEnumValue(nn)?nn.name:"",_e=nn=>typeof nn=="string"?nn:isDynamicEnumValue(nn)?nn.id:"";return jsxRuntimeExports.jsxs("div",{className:"searchable-dropdown",ref:dn,children:[jsxRuntimeExports.jsxs("button",{type:"button",onClick:un,className:`${d} flex items-center justify-between w-full text-left ${s||c?"opacity-50 cursor-not-allowed":"cursor-pointer"}`,disabled:s||c,children:[jsxRuntimeExports.jsx("span",{className:tn()?"":"text-gray-500",children:c?"Loading...":tn()||i}),jsxRuntimeExports.jsx("svg",{className:`w-4 h-4 transition-transform ${g?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:jsxRuntimeExports.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),g&&jsxRuntimeExports.jsxs("div",{className:"dropdown-menu",children:[jsxRuntimeExports.jsx("div",{className:"search-input",children:jsxRuntimeExports.jsx("input",{ref:pn,type:"text",value:en,onChange:nn=>sn(nn.target.value),placeholder:"Type to search..."})}),jsxRuntimeExports.jsx("div",{className:"options-list",children:on.length===0?jsxRuntimeExports.jsx("div",{className:"no-options",children:"No options found"}):on.map((nn,an)=>{const cn=j(nn),mn=_e(nn),yn=typeof o=="string"&&o===mn||isDynamicEnumValue(o)&&isDynamicEnumValue(nn)&&o.id===nn.id;return jsxRuntimeExports.jsx("button",{type:"button",onClick:()=>gn(nn),className:`option-item ${yn?"selected":""}`,children:cn},an)})})]})]})},inputConfig={text:{type:"text",className:"w-input"},string:{type:"text",className:"w-input"},file:{type:"file",className:"w-file-upload-input"},File:{type:"file",className:"w-file-upload-input"},enum:{type:"select",className:"w-select"},dynamicEnum:{type:"select",className:"w-select"},number:{type:"number",className:"w-input"}},ParameterInput=React.memo(({name:e,value:o,onChange:a,placeholder:i,inputType:s,options:c=[],disabled:d=!1,strictEnum:g=!1,isDynamicEnum:b=!1,dependentOptions:en,loading:sn=!1})=>{const on=React.useRef(null),ln=inputConfig[b?"dynamicEnum":s.toLowerCase()]||inputConfig.text,dn=sn?"Loading...":i||`Enter ${e}`,pn=isDynamicEnumValue(o)?o.id:o||"",un=j=>{if(s.toLowerCase()==="file"){const nn=j.target.files;nn&&nn.length>0&&a(e,nn[0]);return}if(s==="enum"||b){const _e=j.target.value;console.log(`ParameterInput ${e}: selectedValue =`,_e),console.log(`ParameterInput ${e}: options =`,c);const nn=c.find(an=>typeof an=="string"?an===_e:an.id===_e);console.log(`ParameterInput ${e}: selectedOption =`,nn),console.log(`ParameterInput ${e}: final value =`,nn||_e),a(e,nn||_e);return}a(e,j.target.value)},gn=()=>{on.current&&on.current.click()},tn=()=>o?o instanceof File?o.name:typeof o=="string"?o:isDynamicEnumValue(o)?o.name:"":"";if(s==="enum"||b)return c.length>10?jsxRuntimeExports.jsx(SearchableDropdown,{options:c,value:o,onChange:_e=>a(e,_e),placeholder:dn,disabled:d||sn,loading:sn,className:ln.className}):jsxRuntimeExports.jsxs("select",{className:ln.className,value:pn,onChange:un,disabled:d||sn,children:[jsxRuntimeExports.jsx("option",{value:"",disabled:!0,children:dn}),c.map((_e,nn)=>typeof _e=="string"?jsxRuntimeExports.jsx("option",{value:_e,children:_e},nn):isDynamicEnumValue(_e)?jsxRuntimeExports.jsx("option",{value:_e.id,children:_e.name},_e.id):null)]});if(s.toLowerCase()==="file"){const j=tn();return jsxRuntimeExports.jsxs("div",{className:"w-file-upload",children:[jsxRuntimeExports.jsxs("div",{className:"w-file-upload-default",children:[jsxRuntimeExports.jsx("input",{ref:on,type:"file",id:`file-${e}`,name:e,className:ln.className,onChange:un,disabled:d,accept:"*/*",style:{display:"none"}}),jsxRuntimeExports.jsx("button",{type:"button",className:"w-file-upload-button",onClick:gn,disabled:d,children:dn})]}),j&&jsxRuntimeExports.jsx("div",{className:"w-file-upload-info",children:jsxRuntimeExports.jsx("div",{className:"w-file-upload-file",children:jsxRuntimeExports.jsx("div",{className:"w-file-upload-file-name",children:j})})})]})}return jsxRuntimeExports.jsx("input",{type:ln.type,className:ln.className,value:pn,onChange:un,placeholder:dn,disabled:d})});ParameterInput.displayName="ParameterInput";let _assetsObjectSelector=null,_assetsObjectSelectorPromise=null;const getAssetsObjectSelector=async()=>_assetsObjectSelectorPromise||_assetsObjectSelector||(_assetsObjectSelectorPromise=(async()=>{const e=await webflow.getAllAssets();return _assetsObjectSelector=await createObjectSelector(e,async o=>({id:o.id,name:await o.getName(),object:o})),_assetsObjectSelectorPromise=null,_assetsObjectSelector})(),_assetsObjectSelectorPromise),assetsProvider={getAll:async()=>{const e=await webflow.getAllAssets();return Promise.all(e.map(async o=>({id:o.id,name:await o.getName(),type:await o.getMimeType(),data:{asset:o}})))},getByName:async e=>(await getAssetsEnum())[e]},getAssetsEnum=async()=>{const e=await webflow.getAllAssets();return createDynamicEnumMap(e,async o=>({id:o.id,name:await o.getName(),type:await o.getMimeType(),data:{asset:o}}))};var ValidFileTypesEnum=(e=>(e.JPEG="image/jpeg",e.JPG="image/jpg",e.PNG="image/png",e.GIF="image/gif",e.SVG="image/svg+xml",e.BMP="image/bmp",e.WEBP="image/webp",e.PDF="application/pdf",e.MSWORD="application/msword",e.MSEXCEL="application/vnd.ms-excel",e.MSPOWERPOINT="application/vnd.ms-powerpoint",e.WORD_DOCX="application/vnd.openxmlformats-officedocument.wordprocessingml.document",e.EXCEL_XLSX="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",e.POWERPOINT_PPTX="application/vnd.openxmlformats-officedocument.presentationml.presentation",e.PLAIN_TEXT="text/plain",e.CSV="text/csv",e.ODT="application/vnd.oasis.opendocument.text",e.ODS="application/vnd.oasis.opendocument.spreadsheet",e.ODP="application/vnd.oasis.opendocument.presentation",e.JSON="application/json",e))(ValidFileTypesEnum||{});const Assets={getAllAssets:async()=>{const e=await webflow.getAllAssets();for(const o of e){const a=await o.getName(),i=await o.getMimeType();console.log(a,i)}},getAssetName:async()=>{const e=await webflow.getSelectedElement();if(!e||e.type!=="Image")console.error("Please select an Image element on the canvas"),await webflow.notify({type:"Error",message:"Please select an Image element on the canvas"});else{const o=await e.getAsset(),a=await(o==null?void 0:o.getName());console.log(`Asset Name: ${a}`)}},getAssetMimeType:async()=>{const e=await webflow.getSelectedElement();if(!e||e.type!=="Image")console.error("Please select an Image element on the canvas"),await webflow.notify({type:"Error",message:"Please select an Image element on the canvas"});else{const o=await e.getAsset(),a=await(o==null?void 0:o.getMimeType());console.log(`Asset MIME type: ${a}`)}},createAssetFromFileUpload:async e=>{if(e){const o=await webflow.createAsset(e);console.log(`Asset ID: ${o.id}`)}},createAssetFromURL:async(e,o,a)=>{const s=await(await fetch(e)).blob(),c=new File([s],o,{type:a});console.log("file",c);try{const d=await webflow.createAsset(c);console.log(d)}catch(d){const g=d;console.error(`Cause:${g.cause.tag}`),console.error(`Cause:${g.message}`)}},getAssetById:async e=>{const o=await webflow.getAssetById(e);console.log("check"),console.log(o)},getAssetURL:async e=>{const o=await webflow.getAssetById(e);if(console.log(o),o){const a=await o.getUrl();console.log(`Asset URL: ${a}`)}},getAltText:async e=>{if(e){const o=await e.getAltText();console.log(`Asset Alt Text: ${o}`)}},setAltText:async(e,o)=>{const a=await webflow.getAssetById(e);if(console.log(a),a){const i=await a.getAltText();await a.setAltText(o);const s=await a.getAltText();console.log(`Original Asset Alt Text: ${i}`),console.log(`New Asset Alt Text: ${s}`)}},addAssetToCanvas:async e=>{const o=await webflow.getAssetById(e),a=await(o==null?void 0:o.getUrl()),i=await webflow.getSelectedElement();if(!i){webflow.notify({type:"Error",message:"Please select an element"});return}if(i.children&&a){const s=await i.append(webflow.elementPresets.DOM);await s.setTag("img"),await s.setAttribute("src",a)}},getAllAssetFolders:async()=>{const e=await webflow.getAllAssetFolders();console.log(e)},createAssetFolder:async(e,o)=>{const a=await webflow.getAllAssetFolders();if(o){const i=await Promise.all(a.map(async s=>await s.getName()===o?s:null)).then(s=>s.find(c=>c!==null));if(i){const s=await webflow.createAssetFolder(e,i.id);console.log(s)}}else{const i=await webflow.createAssetFolder(e);console.log(i)}}};var ExtensionSizeEnum=(e=>(e.Large="large",e.Default="default",e.Comfortable="comfortable",e.Compact="compact",e))(ExtensionSizeEnum||{});const Utilities={getSiteInfo:async()=>{const e=await webflow.getSiteInfo();console.log(JSON.stringify(e,null,2))},setExtensionSize:async e=>{await webflow.setExtensionSize(e.id),console.log(`Extension UI size set to: ${e.id}`)},displayCurrentMediaQuery:async()=>{switch(await webflow.getMediaQuery()){case"xxl":console.log("The current view is for very large screens or high-resolution monitors.");break;case"xl":console.log("The current view is suitable for large desktop monitors.");break;case"large":console.log("The current view fits standard desktop monitors.");break;case"main":console.log("The current view is suitable for smaller desktops or large tablets.");break;case"medium":console.log("The current view is suitable for tablets and some large phones.");break;case"small":console.log("The current view is designed for larger mobile devices.");break;case"tiny":console.log("The current view is for the smallest mobile devices.");break}},getIdToken:async()=>{const e=await webflow.getIdToken();console.log(e)},checkAppMode:async()=>{const e=await webflow.canForAppMode([webflow.appModes.canEdit,webflow.appModes.canDesign]);console.log(e)},checkAppConnection:async()=>{const e=await webflow.getCurrentAppConnection();console.log(e)},notifyUser:async()=>{await webflow.notify({type:"Info",message:"Great work!"}),await webflow.notify({type:"Error",message:"Something went wrong, try again!"}),await webflow.notify({type:"Success",message:"Successfully did something!"})},subscribeSelect:async()=>{const e=o=>{o?console.log("Selected Element:",o):console.log("No element is currently selected.")};webflow.subscribe("selectedelement",e)},subscribeBreakpoint:async()=>{webflow.subscribe("mediaquery",e=>{switch(e){case"xxl":console.log("The current view is for very large screens or high-resolution monitors.");break;case"xl":console.log("The current view is suitable for large desktop monitors.");break;case"large":console.log("The current view fits standard desktop monitors.");break;case"main":console.log("The current view is suitable for smaller desktops or large tablets.");break;case"medium":console.log("The current view is suitable for tablets and some large phones.");break;case"small":console.log("The current view is designed for larger mobile devices.");break;case"tiny":console.log("The current view is for the smallest mobile devices.");break;default:console.log("Unknown breakpoint:",e)}})},subscribePageChange:async()=>{const e=async o=>{if(o){let a=await o.getName(),i=await o.getSlug();await o.getParent();let s=await o.getSearchDescription();console.log(`Page Name: ${a}`),console.log(`Page Slug: ${i}`),console.log(`Page Description: ${s}`)}else console.log("No element is currently selected.")};webflow.subscribe("currentpage",e)},subscribeAppModes:async()=>{const e=async()=>{const o=await webflow.canForAppMode(Object.values(webflow.appModes));console.log(o)};webflow.subscribe("currentappmode",e)},subscribePseudoMode:async()=>{const e=o=>{console.log("Pseudo Mode:",o)};webflow.subscribe("pseudomode",e)},getLaunchContext:async()=>{const e=await webflow.getLaunchContext();if(console.log("Launch Context:",e),e){const o=e.type,a=e.value;console.log("Launch Type:",o),console.log("Launch Value:",a),await webflow.notify({type:"Info",message:`App launched via ${o}${a?` with ${JSON.stringify(a)}`:""}`})}else console.log("No specific launch context")},getPseudoMode:async()=>{const e=await webflow.getPseudoMode();console.log("Pseudo Mode:",e)}};let _variableCollectionsObjectSelector=null,_variableCollectionsObjectSelectorPromise=null;const getVariableCollectionsObjectSelector=async()=>_variableCollectionsObjectSelectorPromise||_variableCollectionsObjectSelector||(_variableCollectionsObjectSelectorPromise=(async()=>{const e=await webflow.getAllVariableCollections();return _variableCollectionsObjectSelector=await createObjectSelector(e,async o=>({id:o.id,name:await o.getName(),object:o})),_variableCollectionsObjectSelectorPromise=null,_variableCollectionsObjectSelector})(),_variableCollectionsObjectSelectorPromise);let _variablesObjectSelector=null,_variablesObjectSelectorPromise=null;const getVariablesObjectSelector=async()=>_variablesObjectSelectorPromise||_variablesObjectSelector||(_variablesObjectSelectorPromise=(async()=>{const e=await webflow.getAllVariableCollections(),o=[];for(const a of e){const i=await a.getAllVariables();for(const s of i)o.push({...s,collectionId:a.id,collectionName:await a.getName()})}return _variablesObjectSelector=await createObjectSelector(o,async a=>({id:a.id,name:`${await a.getName()} (${a.collectionName})`,object:a})),_variablesObjectSelectorPromise=null,_variablesObjectSelector})(),_variablesObjectSelectorPromise),collectionsProvider={getAll:async()=>{const e=await webflow.getAllVariableCollections();return Promise.all(e.map(async o=>({id:o.id,name:await o.getName(),data:{collection:o}})))},getByName:async e=>(await getVariableCollectionsEnum())[e],getById:async e=>{const o=await webflow.getVariableCollectionById(e);if(o)return{id:o.id,name:await o.getName(),data:{collection:o}}}},variablesProvider=e=>({getAll:async()=>{const o=await webflow.getVariableCollectionById(e.id),a=await(o==null?void 0:o.getAllVariables());return a?Promise.all(a.map(async i=>({id:i.id,name:await i.getName(),type:i.type,data:{variable:i},collectionId:e.id}))):[]},getByName:async o=>(await getVariablesEnum(e))[o]}),getVariableCollectionsEnum=async()=>{const e=await webflow.getAllVariableCollections();return createDynamicEnumMap(e,async o=>({id:o.id,name:await o.getName(),data:{collection:o}}))},getVariablesEnum=async e=>{const o=await webflow.getVariableCollectionById(e.id);if(!o)throw new Error(`Collection with ID ${e.id} not found`);const a=await o.getAllVariables();return createDynamicEnumMap(a,async i=>({id:i.id,name:await i.getName(),type:i.type,data:{variable:i},collectionId:e.id}))},createVariableModeObjectSelector=async e=>{const o=await webflow.getVariableCollectionById(e);if(!o)throw new Error(`Collection with ID ${e} not found`);const a=await o.getAllVariableModes();return createObjectSelector(a,async i=>({id:i.id,name:await i.getName(),object:i}))},variableModeSelectorsCache=new Map,getVariableModeObjectSelector=async e=>{if(variableModeSelectorsCache.has(e))return variableModeSelectorsCache.get(e);const o=await createVariableModeObjectSelector(e);return variableModeSelectorsCache.set(e,o),o},Variables={collectionManagement:{getAllVariableCollections:async()=>{const e=await webflow.getAllVariableCollections();console.log("All Variable Collections:"),console.log(e)},createVariableCollection:async e=>{const o=await webflow.createVariableCollection(e);console.log("New Variable Collection:"),console.log(o)},getVariableCollectionById:async e=>{const o=await webflow.getVariableCollectionById(e);console.log("Variable Collection:"),console.log(o)},getDefaultVariableCollection:async()=>{const e=await webflow.getDefaultVariableCollection();console.log("Default Variable Collection:"),console.log(e);const o=await(e==null?void 0:e.getAllVariables());console.log("Variables in Default Collection:"),console.log(o)},removeVariableCollection:async e=>{const o=await webflow.removeVariableCollection(e);console.log(o)},getCollectionName:async()=>{const e=await webflow.getDefaultVariableCollection(),o=await(e==null?void 0:e.getName());console.log(o)},getCollectionAndVariables:async e=>{if(e){console.log("Default Variable Collection ID:",e.id);const a=await e.getAllVariables();if(a.length>0){const i=await e.getName();console.log(`List of Variables in ${i}:`);for(var o in a)console.log(`${o}. Variable Name: ${await a[o].getName()}, Variable ID: ${a[o].id}`)}else console.log("No variables found in the default collection.")}else console.log("Default Variable Collection not found.")}},variableCreation:{createColorVariable:async(e,o)=>{const a=e,i=await(a==null?void 0:a.createColorVariable("primary",o));console.log(i)},createCustomColorVariable:async()=>{const e=await webflow.getDefaultVariableCollection(),o=await(e==null?void 0:e.createColorVariable("blue-500","#146EF5")),a=await(o==null?void 0:o.getBinding()),i=(c,d,g)=>`color-mix(in srgb, ${c} , ${d} ${g}%)`,s=await(e==null?void 0:e.createColorVariable("blue-400",{type:"custom",value:i(a,"#fff",60)}));console.log(s)},createSizeVariable:async()=>{const e=await webflow.getDefaultVariableCollection(),o=await(e==null?void 0:e.createSizeVariable("Default Padding",{unit:"px",value:50}));console.log(o)},createCustomSizeVariable:async()=>{await webflow.getDefaultVariableCollection()},createFontFamilyVariable:async()=>{const e=await webflow.getDefaultVariableCollection(),o=await(e==null?void 0:e.createFontFamilyVariable("Default Font","Inter"));console.log(o)},createNumberVariable:async(e,o)=>{const a=await webflow.getDefaultVariableCollection(),i=await(a==null?void 0:a.createNumberVariable(e,o));console.log(i)},createPercentageVariable:async e=>{const o=await webflow.getDefaultVariableCollection(),a=await(o==null?void 0:o.createPercentageVariable("My Percentage",e));console.log(a)}},variableManagement:{getVariableById:async(e,o)=>{const a=e,i=await(a==null?void 0:a.getVariable(o));console.log(i)},getVariableByName:async(e,o)=>{const a=e,i=await(a==null?void 0:a.getVariableByName(o));console.log(i)},editVariable:async(e,o,a)=>{const i=e;if(i){const s=await i.getVariableByName(o);console.log(s),await(s==null?void 0:s.setName(a))}},getVariableValue:async(e,o)=>{const a=await webflow.getVariableCollectionById(e.id),i=await(a==null?void 0:a.getVariable(o.id));let s=await(i==null?void 0:i.get({customValues:!0}));console.log(`Raw value from .get(): ${JSON.stringify(s)}`);let c=i==null?void 0:i.type;if(s&&typeof s=="object"&&"id"in s){const d=await(a==null?void 0:a.getVariable(s.id));s=`Alias to: ${await(d==null?void 0:d.getName())}`,c=`Referenced ${c}`}return s&&typeof s=="object"&&"type"in s&&s.type==="custom"&&(s=s.value,c=`Custom ${c}`),console.log(`Variable Type: ${c}`),console.log(`Variable Value: ${s}`),{value:s,type:c}},getVariableBinding:async(e,o)=>{const a=await(e==null?void 0:e.getVariableByName(o)),i=await(a==null?void 0:a.getBinding());console.log(i)},getVariableCSSName:async(e,o)=>{const a=await(e==null?void 0:e.getVariableByName(o)),i=await(a==null?void 0:a.getCSSName());console.log(i)},setVariableValue:async e=>{const o=await webflow.getDefaultVariableCollection(),a=await(o==null?void 0:o.getVariableByName(e));(a==null?void 0:a.type)==="Color"&&await a.set("#fffcc11")},setVariableValueWithMode:async()=>{const e=await webflow.getDefaultVariableCollection(),o=await(e==null?void 0:e.createColorVariable("Body Text","#ccc")),a=await(e==null?void 0:e.createVariableMode("Dark Mode"));await(o==null?void 0:o.set("#FFF",{mode:a}))},applyVariableToStyle:async(e,o)=>{const a=await webflow.getDefaultVariableCollection(),i=await webflow.getStyleByName(e),s=await(a==null?void 0:a.getVariable(o));(s==null?void 0:s.type)==="Size"&&await(i==null?void 0:i.setProperties({"font-size":s}))},getVariableAlias:async()=>{const e=await webflow.getDefaultVariableCollection(),o=await(e==null?void 0:e.createColorVariable("Default Color","red"));if(o){const a=await(e==null?void 0:e.createColorVariable("Aliased Variable",o)),i=await(a==null?void 0:a.get());console.log(i)}},removeVariable:async()=>{const e=await webflow.getDefaultVariableCollection(),o=await(e==null?void 0:e.getVariable("id-123"));await(o==null?void 0:o.remove())}},variableModes:{getAllVariableModes:async e=>{const o=await(e==null?void 0:e.getAllVariableModes());console.log(o)},getVariableModeById:async(e,o)=>{const a=e,i=await(a==null?void 0:a.getVariableModeById(o));console.log(i)},getVariableModeByName:async(e,o)=>{const a=e,i=await(a==null?void 0:a.getVariableModeByName(o));console.log(i)},createVariableMode:async(e,o)=>{const a=e;await(a==null?void 0:a.createVariableMode(o));const i=await(a==null?void 0:a.getVariableModeByName(o));console.log(i)},removeVariableMode:async(e,o)=>{o==null||o.remove()}}};let _stylesObjectSelector=null,_stylesObjectSelectorPromise=null;const getStylesObjectSelector=async()=>_stylesObjectSelectorPromise||_stylesObjectSelector||(_stylesObjectSelectorPromise=(async()=>{const e=await webflow.getAllStyles();return _stylesObjectSelector=await createObjectSelector(e,async o=>({id:o.id,name:await o.getName(),object:o})),_stylesObjectSelectorPromise=null,_stylesObjectSelector})(),_stylesObjectSelectorPromise),stylesProvider={getAll:async()=>{const e=await webflow.getAllStyles();return(await Promise.all(e.map(async a=>({id:a.id,name:await a.getName(),data:{style:a}})))).sort((a,i)=>a.name.localeCompare(i.name))},getByName:async e=>(await getStylesEnum())[e]},getStylesEnum=async()=>{const e=await webflow.getAllStyles(),a=(await Promise.all(e.map(async i=>({id:i.id,name:await i.getName(),data:{style:i}})))).sort((i,s)=>i.name.localeCompare(s.name));return createDynamicEnumMap(a,async i=>i)},Styles={StyleManagement:{getAllStyles:async()=>{const e=await webflow.getAllStyles();e.length>0?(console.log("List of all styles:"),e.forEach(async(o,a)=>{console.log(`${a+1}. Style Name: ${await o.getName()}, Style ID: ${o.id}`)})):console.log("No styles found in the current context.")},getStyleByName:async e=>{const o=await webflow.getStyleByName(e);if(o){const a=await o.getProperties();console.log("Style properties:",a)}else console.log(`Style ${e} not found.`)},createStyle:async e=>{const o=await webflow.createStyle(e);o.setProperties({"background-color":"blue","font-size":"16px","font-weight":"bold"});const a=await webflow.getSelectedElement();a!=null&&a.styles?await a.setStyles([o]):console.log("No element selected")},removeStyle:async e=>{const o=await webflow.getStyleByName(e);o?(await webflow.removeStyle(o),console.log(`Style: ${e} was removed`)):console.log(`Style ${e} not found.`)},createStyleApplySelectedElement:async()=>{const e=await webflow.getSelectedElement(),o=await webflow.createStyle("My Custom Style"),a=await webflow.getDefaultVariableCollection(),s={"background-color":await(a==null?void 0:a.createColorVariable("Webflow Blue","#146EF5")),"font-size":"16px","font-weight":"bold"};await o.setProperties(s),e!=null&&e.styles&&await e.setStyles([o])}},StyleProperties:{getStyleProperties:async e=>{if(e){const o=await e.getProperties();console.log(o)}},setStyleProperties:async()=>{const e=await webflow.getSelectedElement();if(e!=null&&e.styles){const o=await e.getStyles(),a=o==null?void 0:o[0];if(a){const i={"background-color":"blue","font-size":"16px","font-weight":"bold"};await a.setProperties(i)}else console.log("Please choose an element with styles")}},getStyleProperty:async e=>{const o=await webflow.getSelectedElement();if(o!=null&&o.styles){const a=await o.getStyles();a&&await Promise.all(a.map(async i=>{if(i){const s=await i.getName(),c=await i.getProperty(e);console.log(`Style Name: ${s}, ${e}: ${c}`)}}))}},setStyleProperty:async(e,o)=>{const a=await webflow.getSelectedElement();if(a!=null&&a.styles){const i=await a.getStyles(),s=i==null?void 0:i[0];s&&(await s.setProperty(e,o),console.log(s.getProperty(e)))}},clearAllStyleProperties:async e=>{const o=await webflow.getStyleByName(e);await(o==null?void 0:o.removeAllProperties())},removeSingleStyleProperty:async e=>{const o=await webflow.getSelectedElement();if(o!=null&&o.styles){const a=await o.getStyles(),i=a==null?void 0:a[0];i&&await i.removeProperty(e)}},removeMultipleStyleProperties:async()=>{const e=await webflow.getSelectedElement();if(e!=null&&e.styles){const o=await e.getStyles(),a=o==null?void 0:o[0];if(a){const i=["background-color","accent-color","font-family"];await a.removeProperties(i)}}}},VariableModes:{getVariableModes:async()=>{const e=await webflow.getSelectedElement();if(e!=null&&e.styles){const o=await e.getStyles();if(o){const a=o[0],i=await(a==null?void 0:a.getVariableModes());console.log(i)}}},getVariableMode:async e=>{const o=await webflow.getSelectedElement();if(o!=null&&o.styles){const a=await o.getStyles(),i=a==null?void 0:a[0];if(i&&e){const s=await i.getVariableMode(e),c=await(s==null?void 0:s.getName());console.log(c)}}},setVariableModes:async e=>{const o=await webflow.getSelectedElement();if(o!=null&&o.styles){const a=await o.getStyles(),i=a==null?void 0:a[0],s=await(i==null?void 0:i.getVariableModes());s&&await(e==null?void 0:e.setVariableModes(s))}},setVariableMode:async(e,o)=>{const a=await webflow.getSelectedElement();if(a!=null&&a.styles){const i=await a.getStyles(),s=i==null?void 0:i[0];s&&e&&(await s.setVariableMode(e,o),console.log("Variable mode set successfully"))}},removeVariableMode:async e=>{const o=await webflow.getSelectedElement();if(o!=null&&o.styles){const a=await o.getStyles(),i=a==null?void 0:a[0];await(i==null?void 0:i.removeVariableMode(e))}},removeVariableModes:async e=>{const o=await webflow.getSelectedElement();if(o!=null&&o.styles){const a=await o.getStyles(),i=a==null?void 0:a[0],s=await(e==null?void 0:e.getAllVariableModes()),c=await(i==null?void 0:i.removeVariableModes(s));console.log(c)}},removeAllVariableModes:async()=>{const e=await webflow.getSelectedElement();if(e!=null&&e.styles){const o=await e.getStyles(),a=o==null?void 0:o[0],i=await(a==null?void 0:a.removeAllVariableModes());console.log(i)}}}};function createStaticEnumProvider(e){return{getAll:async()=>Object.entries(e).map(([o,a])=>({id:a,name:o.replace(/([A-Z])/g," $1").trim(),data:{value:a}}))}}function createStaticObjectSelector(e){return{getAll:async()=>Object.entries(e).map(([o,a])=>({id:a,name:o.replace(/([A-Z])/g," $1").trim(),object:a})),getByName:async o=>{const a=Object.entries(e).find(([i])=>i.replace(/([A-Z])/g," $1").trim()===o);return a?a[1]:void 0},getById:async o=>Object.values(e).includes(o)?o:void 0}}const enumProviders={ValidFileTypesEnum:createStaticEnumProvider(ValidFileTypesEnum),ExtensionSizeEnum:createStaticEnumProvider(ExtensionSizeEnum),fileTypeEnum:createStaticEnumProvider(ValidFileTypesEnum),extensionSizeEnum:createStaticEnumProvider(ExtensionSizeEnum),AssetInfo:assetsProvider,VariableCollectionInfo:collectionsProvider,VariableInfo:variablesProvider,StyleInfo:stylesProvider},objectSelectors={ValidFileTypesEnum:createStaticObjectSelector(ValidFileTypesEnum),ExtensionSizeEnum:createStaticObjectSelector(ExtensionSizeEnum),fileTypeEnum:createStaticObjectSelector(ValidFileTypesEnum),extensionSizeEnum:createStaticObjectSelector(ExtensionSizeEnum),Asset:getAssetsObjectSelector,Style:getStylesObjectSelector,VariableCollection:getVariableCollectionsObjectSelector,Variable:getVariablesObjectSelector};function hasEnumProvider(e){return e.replace(/Enum$/,"")in enumProviders||e in enumProviders}function hasObjectSelector(e){return e.replace(/Enum$/,"")in objectSelectors||e in objectSelectors}function getProviderKey(e){if(e in enumProviders)return e;const o=e.replace(/Enum$/,"");if(o in enumProviders)return o;throw new Error(`No provider found for type: ${e}`)}function getObjectSelectorKey(e){if(e in objectSelectors)return e;const o=e.replace(/Enum$/,"");if(o in objectSelectors)return o;throw new Error(`No object selector found for type: ${e}`)}const APIExplorerParameter=({name:e,paramType:o,value:a,onChange:i,options:s,isLoading:c,error:d,isDynamicEnum:g})=>{const b=g||hasEnumProvider(o)||hasObjectSelector(o)||o==="VariableMode"?"enum":o==="File"?"file":o==="number"?"number":"text",en=c?"Loading...":d?`Error: ${d.message}`:`Enter ${e}`;return jsxRuntimeExports.jsx(ParameterInput,{name:e,value:a||"",onChange:i,inputType:b,options:s,isDynamicEnum:g,placeholder:en,disabled:g&&(c||!!d),loading:c})},Components={getAllComponents:async()=>{const e=await webflow.getAllComponents();if(e.length>0){console.log("List of registered components:");for(let o in e){const a=await e[o].getName();console.log(`${o+1}. Component Name: ${a}, Component ID: ${e[o].id}`)}}else console.log("No components are currently registered.")},createComponent:async()=>{const e=await webflow.getSelectedElement();if(e){const o=await webflow.registerComponent("MyCustomComponent",e);console.log(`Component registered with ID: ${o.id}`)}else console.log("No element is currently selected. Please select a root element first.")},deleteComponent:async()=>{const e=await webflow.getSelectedElement();if(e){const o=await webflow.registerComponent("Hero Component",e);await webflow.unregisterComponent(o)}else console.log("No element is currently selected. Please select a root element first.")},enterComponent:async()=>{const e=await webflow.getSelectedElement();if(e&&e.type==="ComponentInstance"){await webflow.enterComponent(e),console.log("Successfully entered the component context.");const o=await webflow.getRootElement();o?console.log("Root element of the component:",o):console.log("No root element found in this component context.")}else console.log("The selected element is not a ComponentElement.")},editComponent:async()=>{const o=(await webflow.getAllComponents())[0],a=await(o==null?void 0:o.getRootElement());a.children&&await(a==null?void 0:a.append(webflow.elementPresets.DivBlock))},createComponentInstance:async()=>{const e=await webflow.getSelectedElement(),a=(await webflow.getAllComponents())[0];await(e==null?void 0:e.before(a))},exitComponent:async()=>{await webflow.exitComponent();const e=await webflow.getRootElement(),o=e==null?void 0:e.type;console.log(`Element Type: ${o}`)},getRootElement:async()=>{const o=(await webflow.getAllComponents())[0],a=await(o==null?void 0:o.getRootElement());console.log(a)},getName:async e=>{const o=await webflow.getAllComponents();for(const a in o){const i=await o[a].getName();e===i&&console.log(`Found ${e} Component`)}},setName:async()=>{await(await webflow.getAllComponents())[0].setName("My New Component Name")},getComponent:async()=>{const e=await webflow.getAllElements(),o=e==null?void 0:e.find(a=>a.type==="ComponentInstance");if((o==null?void 0:o.type)==="ComponentInstance"){const a=await(o==null?void 0:o.getComponent()),i=await(a==null?void 0:a.getName());console.log(i)}else console.log("No component element found")}},Elements={elementManagement:{getSelectedElement:async()=>{const e=await webflow.getSelectedElement();e?(console.log(e),console.log(`Element type: ${e.type}`)):console.log("No element is currently selected.")},setSelectedElement:async()=>{const e=await webflow.getRootElement();if(e){const o=await webflow.setSelectedElement(e);o!=null&&o.children&&await(o==null?void 0:o.append(webflow.elementPresets.DOM))}},getAllElements:async()=>{const e=await webflow.getAllElements();e.length>0?(console.log("List of all elements:"),e.forEach((o,a)=>{console.log(a+1,"Element ID:",JSON.stringify(o),"Element Type:",o.type)})):console.log("No elements found in the current context.")},getRootElement:async()=>{const e=await webflow.getRootElement();console.log(`Type: ${e==null?void 0:e.type} 
 ID: ${JSON.stringify(e==null?void 0:e.id)}`)},removeElement:async()=>{const e=await webflow.getSelectedElement();await(e==null?void 0:e.remove())}},elementCreation:{BulkAddElements:async()=>{const e=await webflow.getSelectedElement(),o=webflow.elementBuilder(webflow.elementPresets.DOM);o.setTag("nav");const a=["Home","About","Services","Portfolio","Contact"],i=[];if(a.forEach(s=>{const c=o.append(webflow.elementPresets.DOM);c.setTag("a"),c.setAttribute("href","#"),i.push(c)}),e!=null&&e.children){await e.append(o),console.log("Navigation structure with 5 items created in one operation");const s=await webflow.getAllElements();for(let b=0;b<i.length;b++){const en=s.find(sn=>sn.id.element===i[b].id);en&&await en.setTextContent(a[b])}const c=await webflow.createStyle("navContainer");await c.setProperties({display:"flex","row-gap":"20px","padding-left":"15px","padding-right":"15px","padding-top":"15px","padding-bottom":"15px","background-color":"#f5f5f5","border-radius":"8px"});const d=await webflow.createStyle("navItem");await d.setProperties({color:"#333","text-decoration":"none","padding-left":"12px","padding-right":"12px","padding-top":"8px","padding-bottom":"8px","border-radius":"4px","font-weight":"500"});const g=s.find(b=>b.id.element===o.id);if(g){await g.setStyles([c]);for(const b of i){const en=s.find(sn=>sn.id.element===b.id);en&&await en.setStyles([d])}}}},BulkAddElementsNavMenu:async()=>{let e=await webflow.getStyleByName("navContainer");e||(e=await webflow.createStyle("navContainer")),await e.setProperties({display:"flex","row-gap":"20px","padding-left":"15px","padding-right":"15px","padding-top":"15px","padding-bottom":"15px","background-color":"#f5f5f5","border-radius":"8px"});let o=await webflow.getStyleByName("navItem");o||(o=await webflow.createStyle("navItem")),await o.setProperties({color:"#333","text-decoration":"none","padding-left":"12px","padding-right":"12px","padding-top":"8px","padding-bottom":"8px","border-radius":"4px","font-weight":"500"});const a=await webflow.getSelectedElement(),i=webflow.elementBuilder(webflow.elementPresets.DOM);i.setTag("nav"),i.setStyles([e]),["Home","About","Services","Portfolio","Contact"].forEach(c=>{const d=i.append(webflow.elementPresets.DOM);d.setTag("a"),d.setAttribute("href","#"),d.setTextContent(c),d.setStyles([o])}),a!=null&&a.children&&(await a.append(i),console.log("Navigation structure with 5 items created in one operation"))},BulkAddElementSVG:async()=>{const e=await webflow.getSelectedElement(),o=webflow.elementBuilder(webflow.elementPresets.DOM);o.setTag("svg"),o.setAttribute("viewBox","0 0 100 100"),o.setAttribute("xmlns","http://www.w3.org/2000/svg"),o.setAttribute("width","200"),o.setAttribute("height","200");const a=["hsl(0, 90%, 55%)","hsl(30, 90%, 55%)","hsl(60, 90%, 55%)","hsl(120, 90%, 55%)","hsl(240, 90%, 55%)","hsl(270, 90%, 55%)","hsl(300, 90%, 55%)"];for(let c=0;c<7;c++){const d=o.append(webflow.elementPresets.DOM);d.setTag("circle"),d.setAttribute("cx","50"),d.setAttribute("cy","50"),d.setAttribute("r",`${46-c*3}`),d.setAttribute("fill","none"),d.setAttribute("stroke",a[c]),d.setAttribute("stroke-width","2.5"),d.setAttribute("opacity","0.9")}const i=o.append(webflow.elementPresets.DOM);i.setTag("circle"),i.setAttribute("cx","50"),i.setAttribute("cy","50"),i.setAttribute("r","32"),i.setAttribute("fill","white");const s=o.append(webflow.elementPresets.DOM);s.setTag("path"),s.setAttribute("d","M61.3811 14L43.0716 49.7933H25.8737L33.5362 34.959H33.1924C26.8709 43.1653 17.439 48.5674 4 49.7933V35.1643C4 35.1643 12.5972 34.6565 17.6513 29.3429H4V14.0003H19.3426V26.6194L19.687 26.6179L25.9565 14.0003H37.5597V26.5393L37.9041 26.5388L44.4089 14H61.3811Z"),s.setAttribute("fill","#146EF5"),s.setAttribute("fill-rule","evenodd"),s.setAttribute("clip-rule","evenodd"),s.setAttribute("transform","translate(30.5, 30.5) scale(0.7)"),e!=null&&e.children&&(await e.append(o),console.log("webflow logo created successfully"))},insertElementBefore:async()=>{const e=await webflow.getSelectedElement();if(e){const o=await e.before(webflow.elementPresets.DivBlock);console.log(`${JSON.stringify(o)}`)}},insertElementAfter:async()=>{const e=await webflow.getSelectedElement();if(e){const o=await e.after(webflow.elementPresets.DivBlock);console.log(JSON.stringify(o))}},appendElement:async()=>{const e=await webflow.getSelectedElement();if(e!=null&&e.children){const o=await(e==null?void 0:e.append(webflow.elementPresets.DivBlock));console.log(JSON.stringify(o))}},prependElement:async()=>{const e=await webflow.getSelectedElement();if(e!=null&&e.children){const o=await(e==null?void 0:e.prepend(webflow.elementPresets.DivBlock));console.log(JSON.stringify(o))}}},customAttributes:{getAllCustomAttributes:async()=>{const e=await webflow.getSelectedElement();if(e!=null&&e.customAttributes){const o=await e.getAllCustomAttributes();console.log(o)}},getCustomAttribute:async e=>{const o=await webflow.getSelectedElement();if(o!=null&&o.customAttributes){const a=await o.getCustomAttribute(e);console.log(a)}},setCustomAttribute:async(e,o)=>{const a=await webflow.getSelectedElement();a!=null&&a.customAttributes&&await a.setCustomAttribute(e,o)},removeCustomAttribute:async e=>{const o=await webflow.getSelectedElement();o!=null&&o.customAttributes&&await o.removeCustomAttribute(e)}},textContent:{getTextContent:async()=>{const e=await webflow.getSelectedElement();if((e==null?void 0:e.type)==="String"){const o=await e.getText();console.log(o)}else if(e!=null&&e.children){const a=(await e.getChildren()).filter(i=>i.type==="String");if(a.length>0){const i=a.map(async c=>await c.getText()),s=await Promise.all(i);console.log(s)}else console.log("Element does not support text content")}},setTextContent:async e=>{const o=await webflow.getSelectedElement();if(o!=null&&o.textContent)await o.setTextContent(e),console.log(o.textContent);else if(o!=null&&o.children){const i=(await o.getChildren()).filter(s=>s.type==="String");if(i.length>0){const s=await i[0].setText(e);console.log(s)}}else console.log("Element does not support text content")},getText:async()=>{const e=await webflow.getSelectedElement();if(e!=null&&e.textContent&&(e!=null&&e.children)){const a=(await e.getChildren()).filter(s=>s.type==="String");let i=[];for(const s of a)if(s.type==="String"){const c=await s.getText();i.push(c)}console.log(i)}},setText:async e=>{const a=(await webflow.getAllElements()).find(i=>i.type==="String");a?"setText"in a&&a.setText(e):console.log("Element not found on page")}},styles:{getStyles:async()=>{const e=await webflow.getSelectedElement();if(e!=null&&e.styles){const a=(await e.getStyles()).map(async i=>{const s=await i.getName(),c=await i.getProperties();return{Name:s,Properties:c,ID:i.id}});console.log(await Promise.all(a))}},setStyles:async e=>{const o=await webflow.getSelectedElement();if(o!=null&&o.styles){const a=await webflow.getStyleByName(e);if(a){await o.setStyles([a]);const i=await o.getStyles();console.log(`Styles: ${JSON.stringify(i)}`)}}},createAndSetStyle:async()=>{const e=await webflow.getSelectedElement();if(e!=null&&e.styles){const o=await webflow.createStyle("MyCustomStyle");o.setProperties({"background-color":"blue","font-size":"32px","font-weight":"bold"}),e.setStyles([o])}}},domOperations:{getTag:async()=>{const o=(await webflow.getAllElements()).find(a=>a.type==="DOM");if((o==null?void 0:o.type)==="DOM"){const a=await o.getTag();console.log(a)}else console.log("No DOM Element Found")},setTag:async e=>{const o=await webflow.getSelectedElement();if(o!=null&&o.children){const a=await o.append(webflow.elementPresets.DOM);console.log(a),await(a==null?void 0:a.setTag(e)),await a.getTag()}},getAllAttributes:async()=>{const e=await webflow.getSelectedElement();if((e==null?void 0:e.type)==="DOM"){const o=await e.getAllAttributes();console.log(o)}},getAttribute:async e=>{const a=(await webflow.getAllElements()).find(i=>i.type==="DOM");if((a==null?void 0:a.type)==="DOM"){const i=await a.getAttribute(e);console.log(i)}else console.log("No DOM Element Found")},setAttribute:async(e,o)=>{const i=(await webflow.getAllElements()).find(s=>s.type==="DOM");if((i==null?void 0:i.type)==="DOM"){await i.setAttribute(e,o);const s=await i.getAllAttributes();console.log(s)}else console.log("No DOM Element Found")},removeAttribute:async e=>{const a=(await webflow.getAllElements()).find(i=>i.type==="DOM");if((a==null?void 0:a.type)==="DOM"){const i=await a.getAllAttributes();console.log(i),await a.removeAttribute(e);const s=await a.getAllAttributes();console.log(s)}else console.log("No DOM Element Found")}},headingOperations:{getHeadingLevel:async()=>{const e=await webflow.getSelectedElement();if((e==null?void 0:e.type)==="Heading"){const o=await e.getHeadingLevel();console.log(o)}else console.log("Selected Element is not a Heading Element")},setHeadingLevel:async e=>{const o=await webflow.getSelectedElement();if((o==null?void 0:o.type)==="Heading"){const a=await o.setHeadingLevel(parseInt(e));console.log(a)}else console.log("Selected Element is not a Heading Element")}},imageOperations:{getAsset:async()=>{const e=await webflow.getSelectedElement();if(e!=null&&e.children){const o=await e.append(webflow.elementPresets.Image);if(o.type==="Image"){const a=await o.getAsset();console.log(a)}}},setAsset:async e=>{const o=await webflow.getSelectedElement();if(o!=null&&o.children){const a=await o.append(webflow.elementPresets.Image),i=await webflow.getAssetById(e);a.type==="Image"&&await a.setAsset(i)}},getAltText:async()=>{const e=await webflow.getSelectedElement();if((e==null?void 0:e.type)==="Image"){const o=await e.getAltText();console.log(o)}else console.error("Please select an image element"),await webflow.notify({type:"Error",message:"Please select an Image Element"})},setAltText:async e=>{const o=await webflow.getSelectedElement();if((o==null?void 0:o.type)==="Image"){await o.setAltText(e);const a=await o.getAltText();console.log(a)}else console.error("Please select an Image Element"),await webflow.notify({type:"Error",message:"Please select an Image Element"})}},linkOperations:{setLinkBlockSettings:async(e,o)=>{const a=await webflow.getSelectedElement();if(a){const i=await a.after(webflow.elementPresets.LinkBlock),s={openInNewTab:!0};await i.setSettings(e,o,s);const c=await i.getTarget();console.log(c)}},getLinkTarget:async()=>{const o=(await webflow.getAllElements()).filter(a=>a.type==="Link");for(const a of o){const i=await a.getTarget();console.log(`ID: ${a.id.element}, Target Value: ${i}`)}},typeChecking:async()=>{let e=await webflow.getSelectedElement();if((e==null?void 0:e.type)==="String"){let o=e.getText();console.log("Text content:",o)}else if(e!=null&&e.children){let o=await e.getChildren();console.log("Image URL:",o)}else console.log("Element is not a StringElement and doesn't have child properties")}},formOperations:{getFormName:async()=>{const e=await webflow.getSelectedElement();if((e==null?void 0:e.type)==="FormForm"||(e==null?void 0:e.type)==="FormWrapper"){const o=await(e==null?void 0:e.getName());console.log(o)}else console.log("Selected Element is not a Form")},setFormName:async e=>{const o=await webflow.getSelectedElement();((o==null?void 0:o.type)==="FormForm"||(o==null?void 0:o.type)==="FormWrapper")&&await(o==null?void 0:o.setName(e))},getFormSettings:async()=>{const e=await webflow.getSelectedElement();if(e&&"getSettings"in e&&(e.type==="FormForm"||e.type==="FormWrapper")){const o=await e.getSettings();console.log(o)}else console.log("Selected element is not a Form or Form Wrapper.")},setFormSettings:async()=>{const e=await webflow.getSelectedElement();e&&"setSettings"in e&&(e.type==="FormForm"||e.type==="FormWrapper")?(await e.setSettings({action:"https://webhook.site/be45a9c3-9ada-4d1a-b91d-5616bcb65448",method:"post",state:"normal",name:"Contact Form"}),console.log("Form settings updated.")):console.log("Selected element is not a Form or Form Wrapper.")},createFormWithTextarea:async()=>{const e=await webflow.getSelectedElement();if(e&&e.children){const o=await e.append(webflow.elementPresets.FormForm);if(o.type==="FormWrapper"){const i=(await o.getChildren()).find(s=>s.type==="FormForm");if(i&&i.children){const c=(await i.getChildren()).find(d=>d.type==="FormButton");if(c){const d=await c.before(webflow.elementPresets.FormBlockLabel);d.type==="FormBlockLabel"&&await d.setTextContent("Your Message"),await c.before(webflow.elementPresets.FormTextarea)}}}console.log("Form with textarea created successfully.")}else console.log("Please select an element that can contain children.")}},formInputOperations:{getInputName:async()=>{const e=await webflow.getSelectedElement();if(e&&"getName"in e){const o=await e.getName();console.log(o)}else console.log("Selected element does not have a getName method.")},setInputName:async e=>{const o=await webflow.getSelectedElement();o&&"setName"in o?(await o.setName(e),console.log(`Input name set to: ${e}`)):console.log("Selected element does not have a setName method.")},isRequired:async()=>{const e=await webflow.getSelectedElement();if(e&&"getRequired"in e){const o=await e.getRequired();console.log(`Is required: ${o}`)}else console.log("Selected element does not have an isRequired method.")},setIsRequired:async e=>{const o=await webflow.getSelectedElement();o&&"setRequired"in o?(await o.setRequired(e),console.log(`Is required set to: ${e}`)):console.log("Selected element does not have a setIsRequired method.")},createSelectWithCustomDOM:async()=>{const e=await webflow.getSelectedElement();if(e&&e.children){const o=webflow.elementBuilder(webflow.elementPresets.DOM);o.setTag("div");const a=o.append(webflow.elementPresets.DOM);a.setTag("select"),a.setAttribute("name","custom-select"),[{name:"First choice",value:"first"},{name:"Second choice",value:"second"},{name:"Third choice",value:"third"}].forEach(c=>{const d=a.append(webflow.elementPresets.DOM);d.setTag("option"),d.setAttribute("value",c.value),d.setTextContent(c.name)});const s=await e.append(o);if(s&&s.children){const c=await s.prepend(webflow.elementPresets.FormBlockLabel);c.type==="FormBlockLabel"&&await c.setTextContent("Custom Select Field")}console.log("Custom select field with wrapper and label created successfully.")}else console.log("Please select an element that can contain child elements.")}}},Pages={pageManagement:{getCurrentPage:async()=>{const e=await webflow.getCurrentPage(),o=await(e==null?void 0:e.getName());console.log(e,o)},getAllPagesFolders:async()=>{const e=await webflow.getAllPagesAndFolders(),o=e==null?void 0:e.filter(i=>i.type==="Page");await Promise.all(o.map(async i=>{const s=await i.getName();console.log(`Page: ${s}`)}));const a=e==null?void 0:e.filter(i=>i.type==="PageFolder");await Promise.all(a.map(async i=>{const s=await i.getName();console.log(`Folder: ${s}`)}))},switchPage:async()=>{const e=await webflow.getAllPagesAndFolders(),a=(e==null?void 0:e.filter(i=>i.type==="Page"))[2];await webflow.switchPage(a)},createNewPage:async()=>{const e=await webflow.createPage();e&&(await e.setName("My New Page"),await webflow.switchPage(e))}},pageInformation:{getPageKind:async()=>{const o=await(await webflow.getCurrentPage()).getKind();console.log(`Page Category: ${o}`)},getPageName:async()=>{const o=await(await webflow.getCurrentPage()).getName();console.log(o)},setPageName:async e=>{await(await webflow.getCurrentPage()).setName(e),console.log(e)},getPageTitle:async()=>{const o=await(await webflow.getCurrentPage()).getTitle();console.log(o)},setPageTitle:async e=>{await(await webflow.getCurrentPage()).setTitle(e),console.log(e)},getPageDescription:async()=>{const o=await(await webflow.getCurrentPage()).getDescription();console.log(o)},setPageDescription:async e=>{await(await webflow.getCurrentPage()).setDescription(e),console.log(e)},getPageSlug:async()=>{const o=await(await webflow.getCurrentPage()).getSlug();console.log(o)},setPageSlug:async e=>{const o=await webflow.getCurrentPage();await o.setSlug(e);const a=await o.getSlug();console.log("Slug",a)}},collectionInformation:{getCollectionId:async()=>{try{const o=await(await webflow.getCurrentPage()).getCollectionId();console.log(o)}catch(e){const o=e;console.error([o.cause.tag,o.message])}},getCollectionName:async()=>{try{const o=await(await webflow.getCurrentPage()).getCollectionName();console.log(o)}catch(e){const o=e;console.error([o.cause.tag,o.message])}}},pageStatus:{checkIfDraft:async()=>{const o=await(await webflow.getCurrentPage()).isDraft();console.log(o?"Page is draft":"Page is not a draft")},setAsDraft:async()=>{const e=await webflow.getCurrentPage();await e.setDraft(!0);const o=await e.isDraft();console.log(o)},checkIfPassword:async()=>{const o=await(await webflow.getCurrentPage()).isPasswordProtected();console.log(o?"Current page is PasswordProtected":"Current page is not PasswordProtected")},isPageHomePage:async()=>{const o=await(await webflow.getCurrentPage()).isHomepage();console.log(o?"Current page is the Homepage":"Current page is not the Homepage")},getUtilityPageKey:async()=>{const o=await(await webflow.getCurrentPage()).getUtilityPageKey();console.log("Utility Key",o)}},openGraphSettings:{checkOpenGraphTitle:async()=>{const o=await(await webflow.getCurrentPage()).usesTitleAsOpenGraphTitle();console.log(o?"Page uses Title as Open Graph Title":"This page has a custom Open Graph Title")},setTitleAsOpenGraphTitle:async()=>{const e=await webflow.getCurrentPage();await e.useTitleAsOpenGraphTitle(!0);const o=await e.getOpenGraphTitle();console.log(o)},getOpenGraphTitle:async()=>{const o=await(await webflow.getCurrentPage()).getOpenGraphTitle();console.log("Open Graph Title",o)},setOpenGraphTitle:async e=>{const o=await webflow.getCurrentPage();await o.setOpenGraphTitle(e);const a=await o.getOpenGraphTitle();console.log("Open Graph Title",a)},checkOpenGraphDescription:async()=>{const o=await(await webflow.getCurrentPage()).usesDescriptionAsOpenGraphDescription();console.log(o?"Page uses Page Description as Open Graph Description":"This page has a custom Open Graph Description")},setDescriptionAsOpenGraphDescription:async()=>{const e=await webflow.getCurrentPage();await e.useDescriptionAsOpenGraphDescription(!0);const o=await e.getOpenGraphDescription();console.log(o)},getOpenGraphDescription:async()=>{const o=await(await webflow.getCurrentPage()).getOpenGraphDescription();console.log("Open Graph Description",o)},setOpenGraphDescription:async e=>{await(await webflow.getCurrentPage()).setOpenGraphDescription(e)}}},Folders={createNewFolder:async e=>{const o=await webflow.createPageFolder();await o.setName(e);const a=await o.getName();console.log(a)},getFolderName:async()=>{const e=await webflow.getAllPagesAndFolders();for(let o of e){const a=await o.getName(),i=o.type;console.log(a,i)}},setFolderName:async e=>{const o=await webflow.createPageFolder();await o.setName(e);const a=await o.getName();console.log(a)},getslug:async()=>{const e=await webflow.getAllPagesAndFolders();for(let o of e){const a=await o.getSlug();console.log("Slug",a)}},setSlug:async e=>{const o=await webflow.createPageFolder();await o.setSlug(e);const a=await o.getSlug();console.log("Slug",a)},getParentFolder:async()=>{const e=await webflow.getAllPagesAndFolders();for(let o of e){const a=await o.getName(),i=await o.getParent(),s=await(i==null?void 0:i.getName());console.log(`Folder: ${a}`,`Parent: ${s}`)}},setParentFolder:async e=>{const o=await webflow.getAllPagesAndFolders(),a=await webflow.createPageFolder();await a.setName(e);for(let i of o)await i.setParent(a)}},Payments={getAppSubscriptions:async()=>{const e=await webflow.getAppSubscriptions();console.log(`Subscriptions: ${e}`)}};Assets.createAssetFromURL.example={url:"https://picsum.photos/200",fileName:"example-image.jpg",fileTypeEnum:ValidFileTypesEnum.JPEG};const examples$1={Elements,Styles,Components,Variables,Pages,Folders,Payments,Assets,Utilities},assetsRaw=`import type {
  AssetInfo,
  DynamicEnumProvider,
  ObjectSelector,
} from '../types/dynamic-enums'
import {
  createDynamicEnumMap,
  createObjectSelector,
} from '../types/dynamic-enums'

// Types for asset collections
export type AssetsEnum = Record<string, AssetInfo>

// NEW: Object selector for actual Asset objects (lazy initialization)
let _assetsObjectSelector: ObjectSelector<any> | null = null
let _assetsObjectSelectorPromise: Promise<ObjectSelector<any>> | null = null

export const getAssetsObjectSelector = async (): Promise<
  ObjectSelector<any>
> => {
  // If we already have a promise in progress, return it to avoid multiple simultaneous calls
  if (_assetsObjectSelectorPromise) {
    return _assetsObjectSelectorPromise
  }

  // If we already have the selector, return it
  if (_assetsObjectSelector) {
    return _assetsObjectSelector
  }

  // Create a new promise for the selector creation
  _assetsObjectSelectorPromise = (async () => {
    const assets = await webflow.getAllAssets()
    _assetsObjectSelector = await createObjectSelector(
      assets,
      async (asset) => ({
        id: asset.id,
        name: await asset.getName(),
        object: asset,
      }),
    )
    _assetsObjectSelectorPromise = null // Clear the promise
    return _assetsObjectSelector
  })()

  return _assetsObjectSelectorPromise
}

// Create the assets provider (keeping for backward compatibility)
export const assetsProvider: DynamicEnumProvider<AssetInfo> = {
  getAll: async () => {
    const assets = await webflow.getAllAssets()
    return Promise.all(
      assets.map(async (asset) => ({
        id: asset.id,
        name: await asset.getName(),
        type: await asset.getMimeType(),
        data: { asset },
      })),
    )
  },
  getByName: async (name: string) => {
    const assets = await getAssetsEnum()
    return assets[name]
  },
}

// Utility function to get all assets as an enum-like object
export const getAssetsEnum = async (): Promise<AssetsEnum> => {
  const assets = await webflow.getAllAssets()
  return createDynamicEnumMap(assets, async (asset) => ({
    id: asset.id,
    name: await asset.getName(),
    type: await asset.getMimeType(),
    data: { asset },
  }))
}

// Helper function to get a specific asset by name
export const getAssetByName = async (
  name: string,
): Promise<AssetInfo | undefined> => {
  const assets = await getAssetsEnum()
  return assets[name]
}

// NEW: Helper function to get actual Asset object by name
export const getAssetObjectByName = async (
  name: string,
): Promise<any | undefined> => {
  const selector = await getAssetsObjectSelector()
  return await selector.getByName(name)
}

export enum ValidFileTypesEnum {
  JPEG = 'image/jpeg',
  JPG = 'image/jpg',
  PNG = 'image/png',
  GIF = 'image/gif',
  SVG = 'image/svg+xml',
  BMP = 'image/bmp',
  WEBP = 'image/webp',
  PDF = 'application/pdf',
  MSWORD = 'application/msword',
  MSEXCEL = 'application/vnd.ms-excel',
  MSPOWERPOINT = 'application/vnd.ms-powerpoint',
  WORD_DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  EXCEL_XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  POWERPOINT_PPTX = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  PLAIN_TEXT = 'text/plain',
  CSV = 'text/csv',
  ODT = 'application/vnd.oasis.opendocument.text',
  ODS = 'application/vnd.oasis.opendocument.spreadsheet',
  ODP = 'application/vnd.oasis.opendocument.presentation',
  JSON = 'application/json',
}

export const Assets = {
  getAllAssets: async () => {
    // Get all assets
    const assets = await webflow.getAllAssets()

    // Loop to list assets in the console
    for (const asset of assets) {
      const name = await asset.getName()
      const mimeType = await asset.getMimeType()
      console.log(name, mimeType)
    }
  },
  getAssetName: async () => {
    // Get Selected Element
    const el = await webflow.getSelectedElement()

    // Check if element is selected and its type
    if (!el || el.type !== 'Image') {
      console.error('Please select an Image element on the canvas')
      await webflow.notify({
        type: 'Error',
        message: 'Please select an Image element on the canvas',
      })
    } else {
      const asset = await el.getAsset() // Get Asset
      const assetName = await asset?.getName() // Get Asset Name
      console.log(\`Asset Name: \${assetName}\`)
    }
  },

  getAssetMimeType: async () => {
    // Get Selected Element
    const el = await webflow.getSelectedElement()

    // Check if element is selected and its type
    if (!el || el.type !== 'Image') {
      console.error('Please select an Image element on the canvas')
      await webflow.notify({
        type: 'Error',
        message: 'Please select an Image element on the canvas',
      })
    } else {
      const asset = await el.getAsset() // Get Asset
      const assetMimeType = await asset?.getMimeType() // Get Asset MIME Type
      console.log(\`Asset MIME type: \${assetMimeType}\`)
    }
  },
  createAssetFromFileUpload: async (file: File) => {
    if (file) {
      const asset = await webflow.createAsset(file)

      console.log(\`Asset ID: \${asset.id}\`)
    }
  },
  createAssetFromURL: async (
    url: string,
    fileName: string,
    fileTypeEnum: ValidFileTypesEnum,
  ) => {
    // Fetch image from remote source and buil a Blob object
    const response = await fetch(url)
    const blob = await response.blob()
    const file = new File([blob], fileName, {
      type: fileTypeEnum,
    })

    console.log('file', file)

    try {
      // Create and upload the asset to webflow
      const asset = await webflow.createAsset(file)
      console.log(asset)
    } catch (err) {
      const error = err as { cause: { tag: string }; message: string }
      console.error(\`Cause:\${error.cause.tag}\`)
      console.error(\`Cause:\${error.message}\`)
    }
  },
  getAssetById: async (asset_id: string) => {
    const asset = await webflow.getAssetById(asset_id)
    console.log('check')
    console.log(asset)
  },
  getAssetURL: async (assetId: string) => {
    // Get Asset by ID
    const asset = await webflow.getAssetById(assetId)
    console.log(asset)

    if (asset) {
      // Get asset URL
      const url = await asset.getUrl()
      console.log(\`Asset URL: \${url}\`)
    }
  },
  getAltText: async (asset: Asset) => {
    // Now asset is the actual Asset object, not wrapped
    if (asset) {
      // Get asset alt text
      const altText = await asset.getAltText()
      console.log(\`Asset Alt Text: \${altText}\`)
    }
  },
  setAltText: async (assetId: string, altText: string) => {
    // Get Asset by ID
    const asset = await webflow.getAssetById(assetId)
    console.log(asset)

    if (asset) {
      // Get asset URL
      const originalAltText = await asset.getAltText()
      await asset.setAltText(altText)
      const newAltText = await asset.getAltText()
      console.log(\`Original Asset Alt Text: \${originalAltText}\`)
      console.log(\`New Asset Alt Text: \${newAltText}\`)
    }
  },
  addAssetToCanvas: async (assetId: string) => {
    // Get Asset URL
    const asset = await webflow.getAssetById(assetId)
    const assetUrl = await asset?.getUrl()

    // Get selected element
    const selectedElement = await webflow.getSelectedElement()
    if (!selectedElement) {
      webflow.notify({ type: 'Error', message: 'Please select an element' })
      return
    }

    // Add DOM element with an image tag to selected element
    if (selectedElement.children && assetUrl) {
      const domElement = await selectedElement.append(
        webflow.elementPresets.DOM,
      )
      await domElement.setTag('img')
      await domElement.setAttribute('src', assetUrl)
    }
  },

  getAllAssetFolders: async () => {
    const folders = await webflow.getAllAssetFolders()
    console.log(folders)
  },

  createAssetFolder: async (name: string, parentFolderName?: string) => {
    // Get All Asset Folders
    const folders = await webflow.getAllAssetFolders()

    // Find Parent Folder by Name
    if (parentFolderName) {
      const parentFolder = await Promise.all(
        folders.map(async (folder) => {
          const folderName = await folder.getName()
          if (folderName === parentFolderName) {
            return folder
          }
          return null
        }),
      ).then((results) => results.find((folder) => folder !== null))

      // Create Asset Folder with parent folder
      if (parentFolder) {
        const newFolder = await webflow.createAssetFolder(name, parentFolder.id)
        console.log(newFolder)
      }
    } else {
      // Create Asset Folder
      const newFolder = await webflow.createAssetFolder(name)
      console.log(newFolder)
    }
  },
}
`,componentsRaw=`import type { ComponentInfo } from '../types/dynamic-enums'

// Types for component collections
export type ComponentsEnum = {
  [key: string]: ComponentInfo
}

// Utility function to get all components as an enum-like object
export const getComponentsEnum = async (): Promise<ComponentsEnum> => {
  const components = await webflow.getAllComponents()
  const componentsMap: ComponentsEnum = {}

  await Promise.all(
    components.map(async (component) => {
      const name = await component.getName()
      componentsMap[name] = {
        id: component.id,
        name,
        component,
      }
    }),
  )

  return componentsMap
}

// Helper function to get a specific component by name
export const getComponentByName = async (
  name: string,
): Promise<ComponentInfo | undefined> => {
  const components = await getComponentsEnum()
  return components[name]
}

export const Components = {
  getAllComponents: async () => {
    // Get all components
    const components = await webflow.getAllComponents()

    // Print Component Details
    if (components.length > 0) {
      console.log('List of registered components:')

      for (let component in components) {
        const currentComponentName = await components[component].getName()
        console.log(
          \`\${component + 1}. Component Name: \${currentComponentName}, Component ID: \${components[component].id}\`,
        )
      }
    } else {
      console.log('No components are currently registered.')
    }
  },

  createComponent: async () => {
    // Get selected element
    const rootElement = await webflow.getSelectedElement()

    if (rootElement) {
      // Create a component from the Root Element
      const component = await webflow.registerComponent(
        'MyCustomComponent',
        rootElement,
      )
      console.log(\`Component registered with ID: \${component.id}\`)
    } else {
      console.log(
        'No element is currently selected. Please select a root element first.',
      )
    }
  },

  deleteComponent: async () => {
    // Get selected element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement) {
      // Create component from selected element
      const myNewComponent = await webflow.registerComponent(
        'Hero Component',
        selectedElement,
      )

      // Delete Component
      await webflow.unregisterComponent(myNewComponent)
    } else {
      console.log(
        'No element is currently selected. Please select a root element first.',
      )
    }
  },

  enterComponent: async () => {
    // Step 1: Fetch the currently selected element
    const selectedElement = await webflow.getSelectedElement()

    if (selectedElement && selectedElement.type === 'ComponentInstance') {
      //  Step 2: Enter the context of the selected ComponentElement
      await webflow.enterComponent(selectedElement as ComponentElement)
      console.log('Successfully entered the component context.')

      // Step 3: After entering the component's context, fetch the root element
      const rootElement = await webflow.getRootElement()
      if (rootElement) {
        console.log('Root element of the component:', rootElement)
      } else {
        console.log('No root element found in this component context.')
      }
    } else {
      console.log('The selected element is not a ComponentElement.')
    }
  },

  editComponent: async () => {
    // Get Component
    const all = await webflow.getAllComponents()
    const firstComponent = all[0]

    // Get Root Element on the Component
    const root = (await firstComponent?.getRootElement()) as AnyElement

    if (root.children) {
      // Append DIV block to Root element
      await root?.append(webflow.elementPresets.DivBlock)
    }
  },

  createComponentInstance: async () => {
    // Get Selected Element
    const selectedElement = await webflow.getSelectedElement()

    // Get Component
    const allComponents = await webflow.getAllComponents()
    const firstComponent = allComponents[0]

    // Add Component instance onto a page
    await selectedElement?.before(firstComponent)
  },

  exitComponent: async () => {
    await webflow.exitComponent()
    const rootElement = await webflow.getRootElement()
    const rootElementType = rootElement?.type

    // Print Root Element Type. If element type is Body, the designer has exited out of the Component context
    console.log(\`Element Type: \${rootElementType}\`)
  },

  getRootElement: async () => {
    // Get Component
    const all = await webflow.getAllComponents()
    const firstComponent = all[0]

    // Get Root Element of Component
    const root = await firstComponent?.getRootElement()
    console.log(root)
  },

  getName: async (name: string) => {
    const components = await webflow.getAllComponents()

    // Check if component exists
    for (const c in components) {
      const currentComponentName = await components[c].getName()
      if (name === currentComponentName) {
        console.log(\`Found \${name} Component\`)
      }
    }
  },

  setName: async () => {
    // Get Component
    const components = await webflow.getAllComponents()
    const myComponent = components[0]

    // Set Component Name
    await myComponent.setName('My New Component Name')
  },

  getComponent: async () => {
    // Select Component Element on Page
    const elements = await webflow.getAllElements()
    const componentInstance = elements?.find(
      (el) => el.type === 'ComponentInstance',
    )

    if (componentInstance?.type === 'ComponentInstance') {
      // Get Component object from instance
      const component = await componentInstance?.getComponent()
      const componentName = await component?.getName()
      console.log(componentName)
    } else {
      console.log('No component element found')
    }
  },
}
`,elementsRaw=`// import { removeIfPresent } from 'typedoc/dist/lib/utils'

export enum LinkModeSettings {
  url = 'url',
  page = 'page',
  pageSection = 'pageSection',
  email = 'email',
  phone = 'phone',
  attachment = 'attachment',
}

export const Elements = {
  // Element Management
  elementManagement: {
    getSelectedElement: async () => {
      // Get Selected Element
      const element = await webflow.getSelectedElement()

      // Print element info
      if (element) {
        console.log(element)
        console.log(\`Element type: \${element.type}\`)
      } else {
        console.log('No element is currently selected.')
      }
    },

    setSelectedElement: async () => {
      // Get the Root Element
      const rootElement = await webflow.getRootElement()

      if (rootElement) {
        // Select the root element
        const selectedElement = await webflow.setSelectedElement(rootElement)

        if (selectedElement?.children) {
          // Start building elements on the selected element
          await selectedElement?.append(webflow.elementPresets.DOM)
        }
      }
    },

    getAllElements: async () => {
      // Retrieve all elements in the current context
      const allElements = await webflow.getAllElements()

      // Print element list
      if (allElements.length > 0) {
        console.log('List of all elements:')

        allElements.forEach((element, index) => {
          console.log(
            index + 1,
            'Element ID:',
            JSON.stringify(element),
            'Element Type:',
            element.type,
          )
        })
      } else {
        console.log('No elements found in the current context.')
      }
    },

    getRootElement: async () => {
      // Get Root Element
      const rootElement = await webflow.getRootElement()

      // Print element details
      console.log(
        \`Type: \${rootElement?.type} \\n ID: \${JSON.stringify(rootElement?.id)}\`,
      )
    },

    removeElement: async () => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()

      // Remove the selected element
      await el?.remove()
    },
  },

  // Element Creation
  elementCreation: {
    BulkAddElements: async () => {
      // Get the selected element as the container
      const selectedElement = await webflow.getSelectedElement()

      // Create a nav container
      const navMenu = webflow.elementBuilder(webflow.elementPresets.DOM)
      navMenu.setTag('nav')

      // Menu items to add
      const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

      // Create all menu items at once and store references for later
      const menuItemRefs = []
      menuItems.forEach((itemText) => {
        const item = navMenu.append(webflow.elementPresets.DOM)
        item.setTag('a')
        item.setAttribute('href', '#')
        // Store reference to set text later
        menuItemRefs.push(item)
      })

      // Add the entire menu to the canvas in one operation
      if (selectedElement?.children) {
        await selectedElement.append(navMenu)
        console.log(
          'Navigation structure with 5 items created in one operation',
        )

        // Text content must be set after elements are added to the canvas
        const elements = await webflow.getAllElements()

        // Set text content for each menu item
        for (let i = 0; i < menuItemRefs.length; i++) {
          const menuItemElement = elements.find(
            (el) => el.id.element === menuItemRefs[i].id,
          )
          if (menuItemElement) {
            await menuItemElement.setTextContent(menuItems[i])
          }
        }

        // Style application would also come after the elements are added
        // (Styling example shown below for completeness)

        // Example of applying styles after elements are on the canvas
        // First, create the styles
        const navStyle = await webflow.createStyle('navContainer')
        await navStyle.setProperties({
          display: 'flex',
          'row-gap': '20px',
          'padding-left': '15px',
          'padding-right': '15px',
          'padding-top': '15px',
          'padding-bottom': '15px',
          'background-color': '#f5f5f5',
          'border-radius': '8px',
        })

        const navItemStyle = await webflow.createStyle('navItem')
        await navItemStyle.setProperties({
          color: '#333',
          'text-decoration': 'none',
          'padding-left': '12px',
          'padding-right': '12px',
          'padding-top': '8px',
          'padding-bottom': '8px',
          'border-radius': '4px',
          'font-weight': '500',
        })

        // Then find and apply styles to the elements
        const navElement = elements.find((el) => el.id.element === navMenu.id)
        if (navElement) {
          await navElement.setStyles([navStyle])

          // Apply styles to all menu items
          for (const menuItemRef of menuItemRefs) {
            const menuItem = elements.find(
              (el) => el.id.element === menuItemRef.id,
            )
            if (menuItem) {
              await menuItem.setStyles([navItemStyle])
            }
          }
        }
      }
    },

    BulkAddElementsNavMenu: async () => {
      // Start by creating some styles that will be applied to the nav container.

      let navStyle = await webflow.getStyleByName('navContainer')
      if (!navStyle) {
        navStyle = await webflow.createStyle('navContainer')
      }
      await navStyle.setProperties({
        display: 'flex',
        'row-gap': '20px',
        'padding-left': '15px',
        'padding-right': '15px',
        'padding-top': '15px',
        'padding-bottom': '15px',
        'background-color': '#f5f5f5',
        'border-radius': '8px',
      })

      let navItemStyle = await webflow.getStyleByName('navItem')
      if (!navItemStyle) {
        navItemStyle = await webflow.createStyle('navItem')
      }
      await navItemStyle.setProperties({
        color: '#333',
        'text-decoration': 'none',
        'padding-left': '12px',
        'padding-right': '12px',
        'padding-top': '8px',
        'padding-bottom': '8px',
        'border-radius': '4px',
        'font-weight': '500',
      })

      // Get the selected element as the container
      const selectedElement = await webflow.getSelectedElement()

      // Create a nav container
      const navMenu = webflow.elementBuilder(webflow.elementPresets.DOM)
      navMenu.setTag('nav')
      navMenu.setStyles([navStyle])

      // Menu items to add
      const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

      // Create all menu items at once and store references for later
      const menuItemRefs = []
      menuItems.forEach((itemText) => {
        const item = navMenu.append(webflow.elementPresets.DOM)
        item.setTag('a')
        item.setAttribute('href', '#')
        item.setTextContent(itemText)
        item.setStyles([navItemStyle])
        // Store reference to set text later
        menuItemRefs.push(item)
      })

      // Add the entire menu to the canvas in one operation
      if (selectedElement?.children) {
        await selectedElement.append(navMenu)
        console.log(
          'Navigation structure with 5 items created in one operation',
        )
      }
    },

    BulkAddElementSVG: async () => {
      // Get the selected element as the container
      const selectedElement = await webflow.getSelectedElement()

      // Create an SVG builder element
      const svgBuilder = webflow.elementBuilder(webflow.elementPresets.DOM)
      svgBuilder.setTag('svg')
      svgBuilder.setAttribute('viewBox', '0 0 100 100')
      svgBuilder.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
      svgBuilder.setAttribute('width', '200')
      svgBuilder.setAttribute('height', '200')

      // Create rainbow circular background with multiple circles
      const backgroundElements = []
      const rainbowColors = [
        'hsl(0, 90%, 55%)', // Red
        'hsl(30, 90%, 55%)', // Orange
        'hsl(60, 90%, 55%)', // Yellow
        'hsl(120, 90%, 55%)', // Green
        'hsl(240, 90%, 55%)', // Blue
        'hsl(270, 90%, 55%)', // Indigo
        'hsl(300, 90%, 55%)', // Violet
      ]

      for (let i = 0; i < 7; i++) {
        const circle = svgBuilder.append(webflow.elementPresets.DOM)
        circle.setTag('circle')
        circle.setAttribute('cx', '50')
        circle.setAttribute('cy', '50')
        circle.setAttribute('r', \`\${46 - i * 3}\`)
        circle.setAttribute('fill', 'none')
        circle.setAttribute('stroke', rainbowColors[i])
        circle.setAttribute('stroke-width', '2.5')
        circle.setAttribute('opacity', '0.9')
        backgroundElements.push(circle)
      }

      // Create the central background circle
      const centralCircle = svgBuilder.append(webflow.elementPresets.DOM)
      centralCircle.setTag('circle')
      centralCircle.setAttribute('cx', '50')
      centralCircle.setAttribute('cy', '50')
      centralCircle.setAttribute('r', '32')
      centralCircle.setAttribute('fill', 'white')

      // Create the "Webflow" logo
      const logoPath = svgBuilder.append(webflow.elementPresets.DOM)
      logoPath.setTag('path')
      logoPath.setAttribute(
        'd',
        'M61.3811 14L43.0716 49.7933H25.8737L33.5362 34.959H33.1924C26.8709 43.1653 17.439 48.5674 4 49.7933V35.1643C4 35.1643 12.5972 34.6565 17.6513 29.3429H4V14.0003H19.3426V26.6194L19.687 26.6179L25.9565 14.0003H37.5597V26.5393L37.9041 26.5388L44.4089 14H61.3811Z',
      )
      logoPath.setAttribute('fill', '#146EF5')
      logoPath.setAttribute('fill-rule', 'evenodd')
      logoPath.setAttribute('clip-rule', 'evenodd')
      logoPath.setAttribute('transform', 'translate(30.5, 30.5) scale(0.7)')

      // Add the entire SVG structure to the canvas in one operation
      if (selectedElement?.children) {
        await selectedElement.append(svgBuilder)
        console.log('webflow logo created successfully')
      }
    },

    insertElementBefore: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement) {
        // Insert DIV before selected Element
        const newDiv = await selectedElement.before(
          webflow.elementPresets.DivBlock,
        )

        // Print element details
        console.log(\`\${JSON.stringify(newDiv)}\`)
      }
    },

    insertElementAfter: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement) {
        // Insert DIV after selected Element
        const newDiv = await selectedElement.after(
          webflow.elementPresets.DivBlock,
        )

        // Print element details
        console.log(JSON.stringify(newDiv))
      }
    },

    appendElement: async () => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()

      // Check if element supports child elements
      if (el?.children) {
        // Append newElement as a child to of the selected element
        const newElement = await el?.append(webflow.elementPresets.DivBlock)

        // Print element Details
        console.log(JSON.stringify(newElement))
      }
    },

    prependElement: async () => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()

      // Check if element supports child elements
      if (el?.children) {
        // Prepend newElement as a child to of the selected element
        const newElement = await el?.prepend(webflow.elementPresets.DivBlock)

        // Print element Details
        console.log(JSON.stringify(newElement))
      }
    },
  },

  // Custom Attributes
  customAttributes: {
    getAllCustomAttributes: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.customAttributes) {
        // Get All Custom Attributes
        const customAttributes = await selectedElement.getAllCustomAttributes()
        console.log(customAttributes)
      }
    },

    getCustomAttribute: async (name: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.customAttributes) {
        // Get Custom Attribute by Name
        const customAttribute = await selectedElement.getCustomAttribute(name)
        console.log(customAttribute)
      }
    },

    setCustomAttribute: async (name: string, value: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.customAttributes) {
        // Set Custom Attribute
        const newAttribute = await selectedElement.setCustomAttribute(
          name,
          value,
        )
      }
    },

    removeCustomAttribute: async (name: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.customAttributes) {
        // Remove Custom Attribute
        await selectedElement.removeCustomAttribute(name)
      }
    },
  },

  // Text Content
  textContent: {
    getTextContent: async () => {
      const selectedElement = await webflow.getSelectedElement()

      // Check if element is a String type
      if (selectedElement?.type === 'String') {
        const text = await selectedElement.getText()
        console.log(text)
      }
      // Otherwise, check if element has child String elements
      else if (selectedElement?.children) {
        const children = await selectedElement.getChildren()
        const stringElements = children.filter(
          (child) => child.type === 'String',
        )

        if (stringElements.length > 0) {
          const textContentPromises = stringElements.map(
            async (stringElement: StringElement) => {
              const text = await stringElement.getText()
              return text
            },
          )
          const textContent = await Promise.all(textContentPromises)
          console.log(textContent)
        } else {
          console.log('Element does not support text content')
        }
      }
    },

    setTextContent: async (myText: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      // Check if element supports text content
      if (selectedElement?.textContent) {
        // Set and print text content
        const text = await selectedElement.setTextContent(myText)
        console.log(selectedElement.textContent)

        // Check if element has child String elements
      } else if (selectedElement?.children) {
        const children = await selectedElement.getChildren()
        const stringElements = children.filter(
          (child) => child.type === 'String',
        )
        if (stringElements.length > 0) {
          // Set text content on child String elements
          const text = await stringElements[0].setText(myText)
          console.log(text)
        }
      } else {
        console.log('Element does not support text content')
      }
    },

    getText: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.textContent && selectedElement?.children) {
        // Get Child Elements
        const children = await selectedElement.getChildren()

        // Filter string elements from children
        const strings = children.filter((child) => child.type === 'String')

        // Initialize an array to hold text content
        let textContent = []

        // Loop over string elements to get text
        for (const myString of strings) {
          if (myString.type === 'String') {
            const text = await myString.getText()
            textContent.push(text)
          }
        }

        // Print text
        console.log(textContent)
      }
    },

    setText: async (myText: string) => {
      // Get all elements and find the first StringElement
      const allElements = await webflow.getAllElements()
      const foundElement = allElements.find((el) => el.type === 'String')

      if (foundElement) {
        // Check that element has the method in order to use it
        if ('setText' in foundElement) {
          const elementText = foundElement.setText(myText) // Set Text
        }
      } else {
        console.log('Element not found on page')
      }
    },
  },

  // Styles
  styles: {
    getStyles: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Styles
        const styles = await selectedElement.getStyles()

        // Get Style Details
        const styleDetails = styles.map(async (style) => {
          const styleName = await style.getName()
          const styleProperties = await style.getProperties()

          return {
            Name: styleName,
            Properties: styleProperties,
            ID: style.id,
          }
        })

        // Print Style Details
        console.log(await Promise.all(styleDetails))
      }
    },

    setStyles: async (styleName: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Style by name
        const myStyle = await webflow.getStyleByName(styleName)

        if (myStyle) {
          // Set and print style
          await selectedElement.setStyles([myStyle])
          const styles = await selectedElement.getStyles()
          console.log(\`Styles: \${JSON.stringify(styles)}\`)
        }
      }
    },

    createAndSetStyle: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Create a new style
        const newStyle = await webflow.createStyle('MyCustomStyle')

        // Set properties for the style
        newStyle.setProperties({
          'background-color': 'blue',
          'font-size': '32px',
          'font-weight': 'bold',
        })

        // Set style on selected element
        selectedElement.setStyles([newStyle])
      }
    },
  },

  // DOM Operations
  domOperations: {
    getTag: async () => {
      // Get All Elements and find first DOM Element
      const elements = await webflow.getAllElements()
      const DOMElement = elements.find((element) => element.type === 'DOM')

      if (DOMElement?.type === 'DOM') {
        // Get DOM Element's Tag
        const tag = await DOMElement.getTag()
        console.log(tag)
      } else {
        console.log('No DOM Element Found')
      }
    },

    setTag: async (myTag: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.children) {
        // Create and append DOM Element
        const DOMElement = await selectedElement.append(
          webflow.elementPresets.DOM,
        )
        console.log(DOMElement)

        // Set Tag
        await DOMElement?.setTag(myTag)
        const tag = await DOMElement.getTag()
      }
    },

    getAllAttributes: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.type === 'DOM') {
        const customAttributes = await selectedElement.getAllAttributes()
        console.log(customAttributes)
      }
    },

    getAttribute: async (name: string) => {
      // Get All Elements and find first DOM Element
      const elements = await webflow.getAllElements()
      const DOMElement = elements.find((element) => element.type === 'DOM')

      if (DOMElement?.type === 'DOM') {
        // Get DOM Element's Attribute by Name
        const attribute = await DOMElement.getAttribute(name)
        console.log(attribute)
      } else {
        console.log('No DOM Element Found')
      }
    },

    setAttribute: async (name: string, value: string) => {
      // Get All Elements and find first DOM Element
      const elements = await webflow.getAllElements()
      const DOMElement = elements.find((element) => element.type === 'DOM')

      if (DOMElement?.type === 'DOM') {
        // Set and print DOM Element's Attributes
        await DOMElement.setAttribute(name, value)
        const attributes = await DOMElement.getAllAttributes()
        console.log(attributes)
      } else {
        console.log('No DOM Element Found')
      }
    },

    removeAttribute: async (name: string) => {
      // Get All Elements and find first DOM Element
      const elements = await webflow.getAllElements()
      const DOMElement = elements.find((element) => element.type === 'DOM')

      if (DOMElement?.type === 'DOM') {
        // Get Attributes
        const customAttributes = await DOMElement.getAllAttributes()
        console.log(customAttributes)

        // Remove and print DOM Element's Attributes
        await DOMElement.removeAttribute(name)
        const attributes = await DOMElement.getAllAttributes()
        console.log(attributes)
      } else {
        console.log('No DOM Element Found')
      }
    },
  },

  // Heading Operations
  headingOperations: {
    getHeadingLevel: async () => {
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.type === 'Heading') {
        const headingLevel = await selectedElement.getHeadingLevel()
        console.log(headingLevel)
      } else {
        console.log('Selected Element is not a Heading Element')
      }
    },

    setHeadingLevel: async (level: 2 | 1 | 3 | 4 | 5 | 6) => {
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.type === 'Heading') {
        const headingLevel = await selectedElement.setHeadingLevel(
          parseInt(level) as 2 | 1 | 3 | 4 | 5 | 6,
        )
        console.log(headingLevel)
      } else {
        console.log('Selected Element is not a Heading Element')
      }
    },
  },

  // Image Operations
  imageOperations: {
    getAsset: async () => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()

      // Check if element can have children
      if (el?.children) {
        // Create a new Image Element using Element Presets
        const imgEl = await el.append(webflow.elementPresets.Image)

        // Check element type
        if (imgEl.type === 'Image') {
          // Get asset from Image element
          const myAsset = await imgEl.getAsset()
          console.log(myAsset)
        }
      }
    },

    setAsset: async (assetId: string) => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()

      // Check if element can have children
      if (el?.children) {
        // Create a new Image Element using Element Presets
        const imgEl = await el.append(webflow.elementPresets.Image)

        // Get asset by ID
        const asset = await webflow.getAssetById(assetId)

        // Check element type
        if (imgEl.type === 'Image') {
          // Set asset as the "src" of the Image Element
          await imgEl.setAsset(asset)
        }
      }
    },

    getAltText: async () => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()
      if (el?.type === 'Image') {
        // Get alt text
        const alt = await el.getAltText()
        console.log(alt)
      } else {
        console.error('Please select an image element')
        await webflow.notify({
          type: 'Error',
          message: 'Please select an Image Element',
        })
      }
    },

    setAltText: async (altText: string) => {
      // Get Selected Element
      const el = await webflow.getSelectedElement()

      // Check element type
      if (el?.type === 'Image') {
        // Set alt text. If a null is passed, the API will set the alt text as "decorative"
        await el.setAltText(altText)
        // Get alt text
        const alt = await el.getAltText()
        console.log(alt) // true
      } else {
        console.error('Please select an Image Element')
        await webflow.notify({
          type: 'Error',
          message: 'Please select an Image Element',
        })
      }
    },
  },

  // Link Operations
  linkOperations: {
    setLinkBlockSettings: async (mode: LinkModeSettings, target: string) => {
      // Get Selected Element
      const element = await webflow.getSelectedElement()

      if (element) {
        const newLink = await element.after(webflow.elementPresets.LinkBlock) // Create new link element
        const metadata = { openInNewTab: true }
        await newLink.setSettings(mode, target, metadata) // Set link element settings
        const targetValue = await newLink.getTarget() // Get target value
        console.log(targetValue)
      }
    },

    getLinkTarget: async () => {
      const elements = await webflow.getAllElements() // Get All Elements
      const links = elements.filter((element) => element.type === 'Link') // Filter for Link elements

      // Print target value of each link element
      for (const link of links) {
        const targetValue = await link.getTarget()
        console.log(\`ID: \${link.id.element}, Target Value: \${targetValue}\`)
      }
    },

    typeChecking: async () => {
      // Example: Type checking in Webflow API

      // Get a selected element
      let element = await webflow.getSelectedElement()

      // Check the type of the element
      if (element?.type === 'String') {
        // It's safe to use methods specific to StringElement
        let text = element.getText()
        console.log('Text content:', text)
      } else if (element?.children) {
        // Check if the element can have children
        let imageUrl = await element.getChildren()
        console.log('Image URL:', imageUrl)
      } else {
        // Handle other types or default case
        console.log(
          "Element is not a StringElement and doesn't have child properties",
        )
      }
    },
  },

  formOperations: {
    getFormName: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (
        selectedElement?.type === 'FormForm' ||
        selectedElement?.type === 'FormWrapper'
      ) {
        const formName = await selectedElement?.getName()
        console.log(formName)
      } else {
        console.log('Selected Element is not a Form')
      }
    },

    setFormName: async (name: string) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (
        selectedElement?.type === 'FormForm' ||
        selectedElement?.type === 'FormWrapper'
      ) {
        await selectedElement?.setName(name)
      }
    },
    getFormSettings: async () => {
      const selectedElement = await webflow.getSelectedElement()
      if (
        selectedElement &&
        'getSettings' in selectedElement &&
        (selectedElement.type === 'FormForm' ||
          selectedElement.type === 'FormWrapper')
      ) {
        const settings = await selectedElement.getSettings()
        console.log(settings)
      } else {
        console.log('Selected element is not a Form or Form Wrapper.')
      }
    },

    setFormSettings: async () => {
      const selectedElement = await webflow.getSelectedElement()
      if (
        selectedElement &&
        'setSettings' in selectedElement &&
        (selectedElement.type === 'FormForm' ||
          selectedElement.type === 'FormWrapper')
      ) {
        await selectedElement.setSettings({
          action: 'https://webhook.site/be45a9c3-9ada-4d1a-b91d-5616bcb65448',
          method: 'post',
          state: 'normal',
          name: 'Contact Form',
        })
        console.log('Form settings updated.')
      } else {
        console.log('Selected element is not a Form or Form Wrapper.')
      }
    },

    createFormWithTextarea: async () => {
      // Get the selected element to attach the form to
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement && selectedElement.children) {
        // Create the form block by appending the FormForm preset
        const formWrapper = await selectedElement.append(
          webflow.elementPresets.FormForm,
        )

        // The FormForm preset creates a FormWrapper that contains the Form element
        // We need to get the actual form element to append fields to it
        if (formWrapper.type === 'FormWrapper') {
          const children = await formWrapper.getChildren()
          const form = children.find((child) => child.type === 'FormForm')

          if (form && form.children) {
            const formChildren = await form.getChildren()
            const submitButton = formChildren.find(
              (child) => child.type === 'FormButton',
            )

            if (submitButton) {
              // Create and insert a label before the submit button
              const label = await submitButton.before(
                webflow.elementPresets.FormBlockLabel,
              )
              if (label.type === 'FormBlockLabel') {
                await label.setTextContent('Your Message')
              }

              // Create and insert a textarea before the submit button
              await submitButton.before(webflow.elementPresets.FormTextarea)
            }
          }
        }
        console.log('Form with textarea created successfully.')
      } else {
        console.log('Please select an element that can contain children.')
      }
    },
  },
  formInputOperations: {
    getInputName: async () => {
      const selectedElement = await webflow.getSelectedElement()
      if (selectedElement && 'getName' in selectedElement) {
        const name = await selectedElement.getName()
        console.log(name)
      } else {
        console.log('Selected element does not have a getName method.')
      }
    },

    setInputName: async (name: string) => {
      const selectedElement = await webflow.getSelectedElement()
      if (selectedElement && 'setName' in selectedElement) {
        await selectedElement.setName(name)
        console.log(\`Input name set to: \${name}\`)
      } else {
        console.log('Selected element does not have a setName method.')
      }
    },
    isRequired: async () => {
      const selectedElement = await webflow.getSelectedElement()
      if (selectedElement && 'getRequired' in selectedElement) {
        const required = await selectedElement.getRequired()
        console.log(\`Is required: \${required}\`)
      } else {
        console.log('Selected element does not have an isRequired method.')
      }
    },

    setIsRequired: async (required: boolean) => {
      const selectedElement = await webflow.getSelectedElement()
      if (selectedElement && 'setRequired' in selectedElement) {
        await selectedElement.setRequired(required)
        console.log(\`Is required set to: \${required}\`)
      } else {
        console.log('Selected element does not have a setIsRequired method.')
      }
    },
    createSelectWithCustomDOM: async () => {
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement && selectedElement.children) {
        // Create a wrapper div using the element builder
        const wrapper = webflow.elementBuilder(webflow.elementPresets.DOM)
        wrapper.setTag('div')

        // Create a select element using the DOM preset and append it to the wrapper
        const select = wrapper.append(webflow.elementPresets.DOM)
        select.setTag('select')
        select.setAttribute('name', 'custom-select')

        // Define the options for the select field
        const choices = [
          { name: 'First choice', value: 'first' },
          { name: 'Second choice', value: 'second' },
          { name: 'Third choice', value: 'third' },
        ]

        // Create and append option elements
        choices.forEach((choice) => {
          const option = select.append(webflow.elementPresets.DOM)
          option.setTag('option')
          option.setAttribute('value', choice.value)
          option.setTextContent(choice.name)
        })

        // Add the wrapper with the custom select element to the page
        const wrapperElement = await selectedElement.append(wrapper)

        if (wrapperElement && wrapperElement.children) {
          // Prepend a FormBlockLabel to the wrapper
          const label = await wrapperElement.prepend(
            webflow.elementPresets.FormBlockLabel,
          )
          if (label.type === 'FormBlockLabel') {
            await label.setTextContent('Custom Select Field')
          }
        }

        console.log(
          'Custom select field with wrapper and label created successfully.',
        )
      } else {
        console.log('Please select an element that can contain child elements.')
      }
    },
  },
}
`,foldersRaw=`export const Folders = {
  createNewFolder: async (name: string) => {
    // Create and name new folder
    const newFolder = await webflow.createPageFolder()
    await newFolder.setName(name)

    // Print details
    const folderName = await newFolder.getName()
    console.log(folderName)
  },
  getFolderName: async () => {
    // Get all Pages and folders
    const pagesAndFolders = await webflow.getAllPagesAndFolders()

    for (let folder of pagesAndFolders) {
      const folderName = await folder.getName()
      const type = folder.type
      console.log(folderName, type)
    }
  },
  setFolderName: async (name: string) => {
    // Create and name new folder
    const newFolder = await webflow.createPageFolder()
    await newFolder.setName(name)

    // Print details
    const folderName = await newFolder.getName()
    console.log(folderName)
  },

  getslug: async () => {
    // Get all Pages and folders
    const pagesAndFolders = await webflow.getAllPagesAndFolders()

    for (let folder of pagesAndFolders) {
      const folderSlug = await folder.getSlug()
      console.log('Slug', folderSlug)
    }
  },
  setSlug: async (slug: string) => {
    // Create and give slug to new folder
    const newFolder = await webflow.createPageFolder()
    await newFolder.setSlug(slug)

    // Print details
    const newSlug = await newFolder.getSlug()
    console.log('Slug', newSlug)
  },
  getParentFolder: async () => {
    // Get all Pages and folders
    const pagesAndFolders = await webflow.getAllPagesAndFolders()

    for (let folder of pagesAndFolders) {
      const childName = await folder.getName()
      const parent = await folder.getParent()
      const parentName = await parent?.getName()
      console.log(\`Folder: \${childName}\`, \`Parent: \${parentName}\`)
    }
  },
  setParentFolder: async (folderName: string) => {
    // Get all Pages and folders
    const pagesAndFolders = await webflow.getAllPagesAndFolders()

    // Create and name new folder
    const newFolder = await webflow.createPageFolder()
    await newFolder.setName(folderName)

    for (let folder of pagesAndFolders) {
      await folder.setParent(newFolder)
    }
  },
}
`,pagesRaw=`import type { PageInfo } from '../types/dynamic-enums'

// Types for page collections
export type PagesEnum = {
  [key: string]: PageInfo
}

// Utility function to get all pages as an enum-like object
export const getPagesEnum = async (): Promise<PagesEnum> => {
  const pagesAndFolders = await webflow.getAllPagesAndFolders()
  const pages = pagesAndFolders?.filter((i): i is Page => i.type === 'Page')
  const pagesMap: PagesEnum = {}

  await Promise.all(
    pages.map(async (page) => {
      const name = await page.getName()
      pagesMap[name] = {
        id: page.id,
        name,
        page,
      }
    }),
  )

  return pagesMap
}

// Helper function to get a specific page by name
export const getPageByName = async (
  name: string,
): Promise<PageInfo | undefined> => {
  const pages = await getPagesEnum()
  return pages[name]
}

export const Pages = {
  // Page Management
  pageManagement: {
    getCurrentPage: async () => {
      // Get Current Page
      const currentPage = await webflow.getCurrentPage()
      const pageName = await currentPage?.getName()

      // Print page details
      console.log(currentPage, pageName)
    },

    getAllPagesFolders: async () => {
      // Get all pages and folders
      const pagesAndFolders = await webflow.getAllPagesAndFolders()

      // Print Page Details
      const pages = pagesAndFolders?.filter((i) => i.type === 'Page')
      await Promise.all(
        pages.map(async (page) => {
          const pageName = await page.getName()
          console.log(\`Page: \${pageName}\`)
        }),
      )

      const folders = pagesAndFolders?.filter((i) => i.type === 'PageFolder')
      await Promise.all(
        folders.map(async (folder) => {
          const folderName = await folder.getName()
          console.log(\`Folder: \${folderName}\`)
        }),
      )
    },

    switchPage: async () => {
      // Get All Pages and Folders
      const pagesAndFolders = await webflow.getAllPagesAndFolders()
      const pages = pagesAndFolders?.filter((i): i is Page => i.type === 'Page')

      // Switch Page
      const newPage = pages[2]
      await webflow.switchPage(newPage)
    },

    createNewPage: async () => {
      // Create new page and set page name
      const newPage = await webflow.createPage()
      if (!newPage) return

      // Set page name and switch to it
      await newPage.setName('My New Page')
      await webflow.switchPage(newPage)
    },
  },

  // Page Information
  pageInformation: {
    getPageKind: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get the page
      const pageKind = await currentPage.getKind()
      console.log(\`Page Category: \${pageKind}\`)
    },

    getPageName: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get page name
      const pageName = await currentPage.getName()
      console.log(pageName)
    },

    setPageName: async (pageName: string) => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page name
      await currentPage.setName(pageName)
      console.log(pageName)
    },

    getPageTitle: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get page title
      const pageTitle = await currentPage.getTitle()
      console.log(pageTitle)
    },

    setPageTitle: async (pageTitle: string) => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page Title
      await currentPage.setTitle(pageTitle)
      console.log(pageTitle)
    },

    getPageDescription: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get page Description
      const pageDescription = await currentPage.getDescription()
      console.log(pageDescription)
    },

    setPageDescription: async (pageDescription: string) => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page Description
      await currentPage.setDescription(pageDescription)
      console.log(pageDescription)
    },

    getPageSlug: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get page slug
      const pageSlug = await currentPage.getSlug()
      console.log(pageSlug)
    },

    setPageSlug: async (slug: string) => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page Description
      await currentPage.setSlug(slug)
      const newSlug = await currentPage.getSlug()
      console.log('Slug', newSlug)
    },
  },

  // Collection Information
  collectionInformation: {
    getCollectionId: async () => {
      try {
        // Get Current Page
        const currentPage = (await webflow.getCurrentPage()) as Page

        // Get Collection ID if page belongs to a collection
        const collectionId = await currentPage.getCollectionId()
        console.log(collectionId)
      } catch (err) {
        const error = err as { cause: { tag: string }; message: string }
        console.error([error.cause.tag, error.message])
      }
    },

    getCollectionName: async () => {
      try {
        // Get Current Page
        const currentPage = (await webflow.getCurrentPage()) as Page

        // Get Collection ID if page belongs to a collection
        const collectionName = await currentPage.getCollectionName()
        console.log(collectionName)
      } catch (err) {
        const error = err as { cause: { tag: string }; message: string }
        console.error([error.cause.tag, error.message])
      }
    },
  },

  // Page Status
  pageStatus: {
    checkIfDraft: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Check page status
      const isDraft = await currentPage.isDraft()

      // Print page status
      if (isDraft) {
        console.log('Page is draft')
      } else {
        console.log('Page is not a draft')
      }
    },

    setAsDraft: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page as draft
      await currentPage.setDraft(true)
      const isDraft = await currentPage.isDraft()

      // Print status
      console.log(isDraft)
    },

    checkIfPassword: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Check if current page is the homepage
      const isPasswordProtected = await currentPage.isPasswordProtected()

      if (isPasswordProtected) {
        console.log('Current page is PasswordProtected')
      } else {
        console.log('Current page is not PasswordProtected')
      }
    },

    isPageHomePage: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Check if current page is the homepage
      const isHomepage = await currentPage.isHomepage()

      if (isHomepage) {
        console.log('Current page is the Homepage')
      } else {
        console.log('Current page is not the Homepage')
      }
    },

    getUtilityPageKey: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get Utility Key
      const utilityKey = await currentPage.getUtilityPageKey()
      console.log('Utility Key', utilityKey)
    },
  },

  // Open Graph Settings
  openGraphSettings: {
    checkOpenGraphTitle: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Check if page is using the Title as the Open Graph title
      const isOpenGraphTitle = await currentPage.usesTitleAsOpenGraphTitle()

      // Print results
      if (isOpenGraphTitle) {
        console.log('Page uses Title as Open Graph Title')
      } else {
        console.log('This page has a custom Open Graph Title')
      }
    },

    setTitleAsOpenGraphTitle: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page title as open graph title
      await currentPage.useTitleAsOpenGraphTitle(true)
      const title = await currentPage.getOpenGraphTitle()
      console.log(title)
    },

    getOpenGraphTitle: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get Open Graph Title
      const openGraphTitle = await currentPage.getOpenGraphTitle()
      console.log('Open Graph Title', openGraphTitle)
    },

    setOpenGraphTitle: async (title: string) => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set Open Graph Title
      await currentPage.setOpenGraphTitle(title)

      // Print results
      const openGraphTitle = await currentPage.getOpenGraphTitle()
      console.log('Open Graph Title', openGraphTitle)
    },

    checkOpenGraphDescription: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Check page status
      const isOpenGraphDescription =
        await currentPage.usesDescriptionAsOpenGraphDescription()

      // Print page status
      if (isOpenGraphDescription) {
        console.log('Page uses Page Description as Open Graph Description')
      } else {
        console.log('This page has a custom Open Graph Description')
      }
    },

    setDescriptionAsOpenGraphDescription: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set page description open graph description
      await currentPage.useDescriptionAsOpenGraphDescription(true)
      const description = await currentPage.getOpenGraphDescription()
      console.log(description)
    },

    getOpenGraphDescription: async () => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Get Open Graph Description
      const openGraphDescription = await currentPage.getOpenGraphDescription()
      console.log('Open Graph Description', openGraphDescription)
    },

    setOpenGraphDescription: async (description: string) => {
      // Get Current Page
      const currentPage = (await webflow.getCurrentPage()) as Page

      // Set Open Graph Description
      await currentPage.setOpenGraphDescription(description)
    },
  },
}
`,paymentsRaw=`export const Payments = {

    getAppSubscriptions: async () => {

        const subcriptions = await webflow.getAppSubscriptions()
        console.log(\`Subscriptions: \${subcriptions}\`)

    },
}`,stylesRaw=`import type {
  StyleInfo,
  DynamicEnumProvider,
  ObjectSelector,
} from '../types/dynamic-enums'
import {
  createDynamicEnumMap,
  createObjectSelector,
} from '../types/dynamic-enums'

// Types for style collections
export type StylesEnum = {
  [key: string]: StyleInfo
}

// NEW: Object selector for actual Style objects (lazy initialization)
let _stylesObjectSelector: ObjectSelector<any> | null = null
let _stylesObjectSelectorPromise: Promise<ObjectSelector<any>> | null = null

export const getStylesObjectSelector = async (): Promise<
  ObjectSelector<any>
> => {
  // If we already have a promise in progress, return it to avoid multiple simultaneous calls
  if (_stylesObjectSelectorPromise) {
    return _stylesObjectSelectorPromise
  }

  // If we already have the selector, return it
  if (_stylesObjectSelector) {
    return _stylesObjectSelector
  }

  // Create a new promise for the selector creation
  _stylesObjectSelectorPromise = (async () => {
    const styles = await webflow.getAllStyles()
    _stylesObjectSelector = await createObjectSelector(
      styles,
      async (style) => ({
        id: style.id,
        name: await style.getName(),
        object: style,
      }),
    )
    _stylesObjectSelectorPromise = null // Clear the promise
    return _stylesObjectSelector
  })()

  return _stylesObjectSelectorPromise
}

// Create the styles provider (keeping for backward compatibility)
export const stylesProvider: DynamicEnumProvider<StyleInfo> = {
  getAll: async () => {
    const styles = await webflow.getAllStyles()
    const styleInfos = await Promise.all(
      styles.map(async (style) => ({
        id: style.id,
        name: await style.getName(),
        data: { style },
      })),
    )
    // Sort alphabetically by name
    return styleInfos.sort((a, b) => a.name.localeCompare(b.name))
  },
  getByName: async (name: string) => {
    const styles = await getStylesEnum()
    return styles[name]
  },
}

// Utility function to get all styles as an enum-like object
export const getStylesEnum = async (): Promise<StylesEnum> => {
  const styles = await webflow.getAllStyles()
  const styleInfos = await Promise.all(
    styles.map(async (style) => ({
      id: style.id,
      name: await style.getName(),
      data: { style },
    })),
  )
  // Sort alphabetically by name
  const sortedStyles = styleInfos.sort((a, b) => a.name.localeCompare(b.name))
  return createDynamicEnumMap(sortedStyles, async (styleInfo) => styleInfo)
}

// Helper function to get a specific style by name
export const getStyleByName = async (
  name: string,
): Promise<StyleInfo | undefined> => {
  const styles = await getStylesEnum()
  return styles[name]
}

// NEW: Helper function to get actual Style object by name
export const getStyleObjectByName = async (
  name: string,
): Promise<any | undefined> => {
  const selector = await getStylesObjectSelector()
  return await selector.getByName(name)
}

export const Styles = {
  StyleManagement: {
    getAllStyles: async () => {
      // Get all Styles
      const allStyles = await webflow.getAllStyles()

      // List Styles
      if (allStyles.length > 0) {
        console.log('List of all styles:')

        allStyles.forEach(async (style, index) => {
          // Print style names and ids
          console.log(
            \`\${index + 1}. Style Name: \${await style.getName()}, Style ID: \${style.id}\`,
          )
        })
      } else {
        console.log('No styles found in the current context.')
      }
    },
    getStyleByName: async (styleName: string) => {
      // Retrieve the style by name
      const retrievedStyle = await webflow.getStyleByName(styleName)

      if (retrievedStyle) {
        // Get and print properties of the retrieved style
        const styleProperties = await retrievedStyle.getProperties()
        console.log('Style properties:', styleProperties)
      } else {
        console.log(\`Style \${styleName} not found.\`)
      }
    },
    createStyle: async (styleName: string) => {
      // Create new style
      const newStyle = await webflow.createStyle(styleName)

      // Set properties for the style
      newStyle.setProperties({
        'background-color': 'blue',
        'font-size': '16px',
        'font-weight': 'bold',
      })

      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Apply style to selected element
        await selectedElement.setStyles([newStyle])
      } else {
        console.log('No element selected')
      }
    },
    removeStyle: async (styleName: string) => {
      // Retrieve the style by name
      const retrievedStyle = await webflow.getStyleByName(styleName)

      if (retrievedStyle) {
        // Remove Style
        await webflow.removeStyle(retrievedStyle)
        console.log(\`Style: \${styleName} was removed\`)
      } else {
        console.log(\`Style \${styleName} not found.\`)
      }
    },
    createStyleApplySelectedElement: async () => {
      // Get selected element
      const selectedElement = await webflow.getSelectedElement()

      // Create new style
      const newStyle = await webflow.createStyle('My Custom Style')

      // Create a variable
      const collection = await webflow.getDefaultVariableCollection()
      const webflowBlue = await collection?.createColorVariable(
        'Webflow Blue',
        '#146EF5',
      )

      // Create a PropertyMap object
      const propertyMap: PropertyMap = {
        'background-color': webflowBlue as ColorVariable,
        'font-size': '16px',
        'font-weight': 'bold',
      }

      // Set style properties
      await newStyle.setProperties(propertyMap)

      // apply newStyle to element
      if (selectedElement?.styles) await selectedElement.setStyles([newStyle])
    },
  },

  StyleProperties: {
    getStyleProperties: async (style: Style) => {
      // Now style is the actual Style object, not wrapped
      if (style) {
        const properties = await style.getProperties()
        console.log(properties)
      }
    },
    setStyleProperties: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Element Styles
        const styles = await selectedElement.getStyles()
        const primaryStyle = styles?.[0]

        if (primaryStyle) {
          const propertyMap = {
            'background-color': 'blue',
            'font-size': '16px',
            'font-weight': 'bold',
          }

          await primaryStyle.setProperties(propertyMap)
        } else {
          console.log('Please choose an element with styles')
        }
      }
    },
    getStyleProperty: async (propertyName: StyleProperty) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Element Styles
        const styles = await selectedElement.getStyles()

        // For each style, list values of propertyName
        if (styles) {
          const selectedPropertyList = await Promise.all(
            styles.map(async (style) => {
              if (style) {
                const styleName = await style.getName()
                const property = await style.getProperty(propertyName)
                console.log(
                  \`Style Name: \${styleName}, \${propertyName}: \${property}\`,
                )
              }
            }),
          )
        }
      }
    },

    setStyleProperty: async (
      styleProperty: StyleProperty,
      propertyValue: string,
    ) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Element Styles
        const styles = await selectedElement.getStyles()
        const primaryStyle = styles?.[0]
        if (primaryStyle) {
          await primaryStyle.setProperty(styleProperty, propertyValue)
          console.log(primaryStyle.getProperty(styleProperty))
        }
      }
    },
    clearAllStyleProperties: async (styleName: string) => {
      // Retrieve the style by name
      const retrievedStyle = await webflow.getStyleByName(styleName)

      // Clear Style Properties
      await retrievedStyle?.removeAllProperties()
    },
    removeSingleStyleProperty: async (property: StyleProperty) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Element Styles
        const styles = await selectedElement.getStyles()
        const primaryStyle = styles?.[0]
        if (primaryStyle) {
          await primaryStyle.removeProperty(property)
        }
      }
    },
    removeMultipleStyleProperties: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Element Styles
        const styles = await selectedElement.getStyles()
        const primaryStyle = styles?.[0]
        if (primaryStyle) {
          const properties: StyleProperty[] = [
            'background-color',
            'accent-color',
            'font-family',
          ]
          await primaryStyle.removeProperties(properties)
        }
      }
    },
  },

  VariableModes: {
    // Variable Modes

    getVariableModes: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        const styles = await selectedElement.getStyles()
        if (styles) {
          const primaryStyle = styles[0]
          const variableModes = await primaryStyle?.getVariableModes()
          console.log(variableModes)
        }
      }
    },

    getVariableMode: async (variableCollection: VariableCollection) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Styles
        const styles = await selectedElement.getStyles()
        const primaryStyle = styles?.[0] // Get the primary style

        // Get Variable Mode
        if (primaryStyle && variableCollection) {
          const variableMode =
            await primaryStyle.getVariableMode(variableCollection)
          const variableModeName = await variableMode?.getName()
          console.log(variableModeName)
        }
      }
    },

    setVariableModes: async (selectedStyle: Style) => {
      // This function gets variable modes from the style of the currently selected element, then sets them on the style selected in the explorer

      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Styles
        const styles = await selectedElement.getStyles()
        const primaryStyle = styles?.[0] // Get the primary style
        const variableModes = await primaryStyle?.getVariableModes()

        // Set Variable Modes on Selected Style
        if (variableModes) {
          await selectedStyle?.setVariableModes(variableModes)
        }
      }
    },

    setVariableMode: async (
      variableCollection: VariableCollection,
      variableMode: VariableMode,
    ) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Styles
        const styles = await selectedElement.getStyles()
        const primaryStyle = styles?.[0] // Get the primary style

        // Set Variable Mode
        if (primaryStyle && variableCollection) {
          await primaryStyle.setVariableMode(variableCollection, variableMode)
          console.log('Variable mode set successfully')
        }
      }
    },

    removeVariableMode: async (variableCollection: VariableCollection) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Styles
        const styles = await selectedElement.getStyles()
        const primaryStyle = styles?.[0] // Get the primary style

        await primaryStyle?.removeVariableMode(variableCollection)
      }
    },

    removeVariableModes: async (variableCollection: VariableCollection) => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Styles
        const styles = await selectedElement.getStyles()
        const primaryStyle = styles?.[0] // Get the primary style

        // Get Variable Modes
        const variableModes = await variableCollection?.getAllVariableModes()
        const remove = await primaryStyle?.removeVariableModes(variableModes)
        console.log(remove)
      }
    },

    removeAllVariableModes: async () => {
      // Get Selected Element
      const selectedElement = await webflow.getSelectedElement()

      if (selectedElement?.styles) {
        // Get Styles
        const styles = await selectedElement.getStyles()
        const primaryStyle = styles?.[0] // Get the primary style

        // Get Variable Modes
        const remove = await primaryStyle?.removeAllVariableModes()
        console.log(remove)
      }
    },
  },
}
`,variablesRaw=`/// <reference types="@webflow/designer-extension-typings" />

import type {
  VariableCollectionInfo,
  VariableInfo,
  DynamicEnumProvider,
  ObjectSelector,
} from '../types/dynamic-enums'
import {
  createDynamicEnumMap,
  createObjectSelector,
} from '../types/dynamic-enums'

// Types for collections
export type VariableCollections = Record<string, VariableCollectionInfo>
export type Variables = Record<string, VariableInfo>

// NEW: Object selector for actual VariableCollection objects (lazy initialization)
let _variableCollectionsObjectSelector: ObjectSelector<any> | null = null
let _variableCollectionsObjectSelectorPromise: Promise<
  ObjectSelector<any>
> | null = null

export const getVariableCollectionsObjectSelector = async (): Promise<
  ObjectSelector<any>
> => {
  // If we already have a promise in progress, return it to avoid multiple simultaneous calls
  if (_variableCollectionsObjectSelectorPromise) {
    return _variableCollectionsObjectSelectorPromise
  }

  // If we already have the selector, return it
  if (_variableCollectionsObjectSelector) {
    return _variableCollectionsObjectSelector
  }

  // Create a new promise for the selector creation
  _variableCollectionsObjectSelectorPromise = (async () => {
    const collections = await webflow.getAllVariableCollections()
    _variableCollectionsObjectSelector = await createObjectSelector(
      collections,
      async (collection) => ({
        id: collection.id,
        name: await collection.getName(),
        object: collection,
      }),
    )
    _variableCollectionsObjectSelectorPromise = null // Clear the promise
    return _variableCollectionsObjectSelector
  })()

  return _variableCollectionsObjectSelectorPromise
}

// NEW: Object selector for actual Variable objects (lazy initialization)
let _variablesObjectSelector: ObjectSelector<any> | null = null
let _variablesObjectSelectorPromise: Promise<ObjectSelector<any>> | null = null

export const getVariablesObjectSelector = async (): Promise<
  ObjectSelector<any>
> => {
  // If we already have a promise in progress, return it to avoid multiple simultaneous calls
  if (_variablesObjectSelectorPromise) {
    return _variablesObjectSelectorPromise
  }

  // If we already have the selector, return it
  if (_variablesObjectSelector) {
    return _variablesObjectSelector
  }

  // Create a new promise for the selector creation
  _variablesObjectSelectorPromise = (async () => {
    // Get all collections first
    const collections = await webflow.getAllVariableCollections()

    // Get all variables from all collections
    const allVariables = []
    for (const collection of collections) {
      const variables = await collection.getAllVariables()
      for (const variable of variables) {
        allVariables.push({
          ...variable,
          collectionId: collection.id,
          collectionName: await collection.getName(),
        })
      }
    }

    _variablesObjectSelector = await createObjectSelector(
      allVariables,
      async (variable) => ({
        id: variable.id,
        name: \`\${await variable.getName()} (\${variable.collectionName})\`,
        object: variable,
      }),
    )
    _variablesObjectSelectorPromise = null // Clear the promise
    return _variablesObjectSelector
  })()

  return _variablesObjectSelectorPromise
}

// Create the collections provider
export const collectionsProvider: DynamicEnumProvider<VariableCollectionInfo> =
  {
    getAll: async () => {
      const collections = await webflow.getAllVariableCollections()
      return Promise.all(
        collections.map(async (collection) => ({
          id: collection.id,
          name: await collection.getName(),
          data: { collection },
        })),
      )
    },
    getByName: async (name: string) => {
      const collections = await getVariableCollectionsEnum()
      return collections[name]
    },
    getById: async (id: string) => {
      const collection = await webflow.getVariableCollectionById(id)
      if (!collection) return undefined
      return {
        id: collection.id,
        name: await collection.getName(),
        data: { collection },
      }
    },
  }

// Create the variables provider
export const variablesProvider = (
  collection: VariableCollectionInfo,
): DynamicEnumProvider<VariableInfo> => ({
  getAll: async () => {
    const selCollection = await webflow.getVariableCollectionById(collection.id)
    const variables = await selCollection?.getAllVariables()
    if (!variables) return []
    return Promise.all(
      variables.map(async (variable) => ({
        id: variable.id,
        name: await variable.getName(),
        type: variable.type,
        data: { variable },
        collectionId: collection.id,
      })),
    )
  },
  getByName: async (name: string) => {
    const variables = await getVariablesEnum(collection)
    return variables[name]
  },
})

// Utility function to get all collections as an enum-like object
export const getVariableCollectionsEnum =
  async (): Promise<VariableCollections> => {
    const collections = await webflow.getAllVariableCollections()
    return createDynamicEnumMap(collections, async (collection) => ({
      id: collection.id,
      name: await collection.getName(),
      data: { collection },
    }))
  }

// Utility function to get all variables in a collection as an enum-like object
export const getVariablesEnum = async (
  collectionInfo: VariableCollectionInfo,
): Promise<Variables> => {
  const collection = await webflow.getVariableCollectionById(collectionInfo.id)
  if (!collection) {
    throw new Error(\`Collection with ID \${collectionInfo.id} not found\`)
  }

  const variables = await collection.getAllVariables()
  return createDynamicEnumMap(variables, async (variable) => ({
    id: variable.id,
    name: await variable.getName(),
    type: variable.type,
    data: { variable },
    collectionId: collectionInfo.id,
  }))
}

// NEW: Helper function to get actual VariableCollection object by name
export const getVariableCollectionObjectByName = async (
  name: string,
): Promise<any | undefined> => {
  const selector = await getVariableCollectionsObjectSelector()
  return await selector.getByName(name)
}

// NEW: Helper function to get actual Variable object by name
export const getVariableObjectByName = async (
  name: string,
): Promise<any | undefined> => {
  const selector = await getVariablesObjectSelector()
  return await selector.getByName(name)
}

// NEW: Function to create VariableMode ObjectSelector for a specific collection
export const createVariableModeObjectSelector = async (
  collectionId: string,
): Promise<ObjectSelector<any>> => {
  const collection = await webflow.getVariableCollectionById(collectionId)
  if (!collection) {
    throw new Error(\`Collection with ID \${collectionId} not found\`)
  }

  const variableModes = await collection.getAllVariableModes()
  return createObjectSelector(variableModes, async (mode) => ({
    id: mode.id,
    name: await mode.getName(),
    object: mode,
  }))
}

// NEW: Cached VariableMode ObjectSelectors to avoid recreating them
const variableModeSelectorsCache = new Map<string, ObjectSelector<any>>()

// NEW: Function to get VariableMode ObjectSelector for a collection (with caching)
export const getVariableModeObjectSelector = async (
  collectionId: string,
): Promise<ObjectSelector<any>> => {
  // Check if we already have a selector for this collection
  if (variableModeSelectorsCache.has(collectionId)) {
    return variableModeSelectorsCache.get(collectionId)!
  }

  // Create new selector
  const selector = await createVariableModeObjectSelector(collectionId)
  variableModeSelectorsCache.set(collectionId, selector)
  return selector
}

interface WebflowVariable {
  id: string
  getName: () => Promise<string>
  getType: () => Promise<string>
}

// Helper function to get a specific collection by name
export const getCollectionByName = async (
  name: string,
): Promise<VariableCollectionInfo | undefined> => {
  const collections = await getVariableCollectionsEnum()
  return collections[name]
}

// Helper function to get a variable by name from a collection
export const getVariableByName = async (
  collection: VariableCollectionInfo,
  variableName: string,
): Promise<VariableInfo | undefined> => {
  const variables = await getVariablesEnum(collection)
  return variables[variableName]
}

export const Variables = {
  // Collection Management
  collectionManagement: {
    getAllVariableCollections: async () => {
      // Get All Variable Collections
      const variableCollections = await webflow.getAllVariableCollections()
      console.log('All Variable Collections:')
      console.log(variableCollections)
    },

    createVariableCollection: async (name: string) => {
      // Create a new variable collection
      const newVariableCollection = await webflow.createVariableCollection(name)
      console.log('New Variable Collection:')
      console.log(newVariableCollection)
    },

    getVariableCollectionById: async (id: string) => {
      // Get Variable Collection by ID
      const variableCollection = await webflow.getVariableCollectionById(id)
      console.log('Variable Collection:')
      console.log(variableCollection)
    },

    getDefaultVariableCollection: async () => {
      // Get Collection
      const defaultVariableCollection =
        await webflow.getDefaultVariableCollection()
      console.log('Default Variable Collection:')
      console.log(defaultVariableCollection)

      // Fetch all variables within the default collection
      const variables = await defaultVariableCollection?.getAllVariables()
      console.log('Variables in Default Collection:')
      console.log(variables)
    },

    removeVariableCollection: async (id: string) => {
      // Remove Variable Collection
      const removedVariableCollection =
        await webflow.removeVariableCollection(id)
      console.log(removedVariableCollection)
    },

    getCollectionName: async () => {
      // Get Collection
      const defaultVariableCollection =
        await webflow.getDefaultVariableCollection()

      // Get Collection Name
      const collectionName = await defaultVariableCollection?.getName()
      console.log(collectionName)
    },

    getCollectionAndVariables: async (
      variableCollection: VariableCollection,
    ) => {
      if (variableCollection) {
        // Print Collection ID
        console.log('Default Variable Collection ID:', variableCollection.id)

        // Fetch all variables within the default collection
        const variables = await variableCollection.getAllVariables()

        if (variables.length > 0) {
          const collectionName = await variableCollection.getName()
          console.log(\`List of Variables in \${collectionName}:\`)

          // Print variable details
          for (var i in variables) {
            console.log(
              \`\${i}. Variable Name: \${await variables[i].getName()}, Variable ID: \${variables[i].id}\`,
            )
          }
        } else {
          console.log('No variables found in the default collection.')
        }
      } else {
        console.log('Default Variable Collection not found.')
      }
    },
  },

  // Variable Creation
  variableCreation: {
    createColorVariable: async (
      variableCollection: VariableCollection,
      color: string,
    ) => {
      // Get Collection
      const collection = variableCollection

      // Create Color Variable with a HEX Code
      const myColorVariable = await collection?.createColorVariable(
        'primary',
        color,
      )
      console.log(myColorVariable)
    },

    createCustomColorVariable: async () => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create Color Variable
      const webflowBlue = await collection?.createColorVariable(
        'blue-500',
        '#146EF5',
      )

      // Get the binding to the webflowBlue variable
      const webflowBlueBinding = (await webflowBlue?.getBinding()) as string

      // Function to create a string that uses the binding and CSS color-mix function
      const colorMix = (binding: string, color: string, opacity: number) =>
        \`color-mix(in srgb, \${binding} , \${color} \${opacity}%)\`

      // Create a color variable that uses a CSS function
      const webflowBlue400 = await collection?.createColorVariable('blue-400', {
        type: 'custom',
        value: colorMix(webflowBlueBinding, '#fff', 60),
      })
      console.log(webflowBlue400)
    },

    createSizeVariable: async () => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create Size Variable with a Size Value
      const mySizeVariable = await collection?.createSizeVariable(
        'Default Padding',
        { unit: 'px', value: 50 },
      )
      console.log(mySizeVariable)
    },

    createCustomSizeVariable: async () => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()
    },

    createFontFamilyVariable: async () => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create Font Family Variable with a Font Family Name
      const myFontFamilyVariable = await collection?.createFontFamilyVariable(
        'Default Font',
        'Inter',
      )
      console.log(myFontFamilyVariable)
    },

    createNumberVariable: async (name: string, number: number) => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create Number Variable with a Number Value
      const myNumberVariable = await collection?.createNumberVariable(
        name,
        number,
      )
      console.log(myNumberVariable)
    },

    createPercentageVariable: async (percentage: number) => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create Percentage Variable with a Percentage Value
      const myPercentageVariable = await collection?.createPercentageVariable(
        'My Percentage',
        percentage,
      )
      console.log(myPercentageVariable)
    },
  },

  // Variable Management
  variableManagement: {
    getVariableById: async (
      variableCollection: VariableCollection,
      id: string,
    ) => {
      // Get Collection
      const collection = variableCollection

      // Get variable by ID
      const variableById = await collection?.getVariable(id)
      console.log(variableById)
    },

    getVariableByName: async (
      variableCollection: VariableCollection,
      name: string,
    ) => {
      // Get Collection
      const collection = variableCollection

      // Get Variable by Name
      const variableByName = (await collection?.getVariableByName(
        name,
      )) as ColorVariable
      console.log(variableByName)
    },

    editVariable: async (
      variableCollection: VariableCollection,
      variableName: string,
      newName: string,
    ) => {
      // Get Collection
      const collection = variableCollection

      if (collection) {
        // Get variable and reset name
        const variable = await collection.getVariableByName(variableName)
        console.log(variable)
        await variable?.setName(newName)
      }
    },
    getVariableValue: async (
      collection: VariableCollectionInfo,
      variable: VariableInfo,
    ) => {
      // Get selected collection and variable info
      const selCollection = await webflow.getVariableCollectionById(
        collection.id,
      )
      const selVariable = await selCollection?.getVariable(variable.id)

      // Get variable value, add option to return variables with custom values
      let value = await selVariable?.get({ customValues: true })

      // Log the raw value and get the variable's type
      console.log(\`Raw value from .get(): \${JSON.stringify(value)}\`)
      let type = selVariable?.type

      // The \`get()\` method can return different types of values.
      // For simple variables, it's a primitive. (Number, Percentage, Color, etc.)
      // Variable references return an object with the referenced variable's ID.
      // Custom variables return an object.

      // A variable reference (alias) is returned as an object with the referenced variable's ID: { id: '...' }
      if (value && typeof value === 'object' && 'id' in value) {
        const referencedVariable = await selCollection?.getVariable(value.id)
        const referencedName = await referencedVariable?.getName()
        value = \`Alias to: \${referencedName}\`
        type = \`Referenced \${type}\`
      }

      // A custom value is returned as an object: { type: 'custom', value: '...' }
      // Extract the inner value for display.
      if (
        value &&
        typeof value === 'object' &&
        'type' in value &&
        value.type === 'custom'
      ) {
        value = value.value
        type = \`Custom \${type}\`
      }

      // Output the variable type and value
      console.log(\`Variable Type: \${type}\`)
      console.log(\`Variable Value: \${value}\`)

      return { value, type }
    },

    getVariableBinding: async (
      variableCollection: VariableCollection,
      variable: string,
    ) => {
      // Get Variable
      const myVariable = await variableCollection?.getVariableByName(variable)
      const binding = await myVariable?.getBinding()

      // Output the binding
      console.log(binding)
    },

    getVariableCSSName: async (
      variableCollection: VariableCollection,
      variable: string,
    ) => {
      // Get Variable
      const myVariable = await variableCollection?.getVariableByName(variable)
      const cssName = await myVariable?.getCSSName()
      console.log(cssName)
    },

    setVariableValue: async (name: string) => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Get Variable
      const variable = await collection?.getVariableByName(name)

      // Check Variable type and set color
      if (variable?.type === 'Color') await variable.set('#fffcc11')
    },

    setVariableValueWithMode: async () => {
      // Get the default variable collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create variable for the collection with a default value
      const colorVariable = await collection?.createColorVariable(
        'Body Text',
        '#ccc',
      )

      // Create a variable mode
      const variableMode = await collection?.createVariableMode('Dark Mode')

      // Set a mode-specific value on the variables
      await colorVariable?.set('#FFF', { mode: variableMode })
    },

    applyVariableToStyle: async (styleName: string, variableName: string) => {
      // Get collection
      const collection = await webflow.getDefaultVariableCollection()

      // Get Style and desired variable
      const style = await webflow.getStyleByName(styleName)
      const variable = await collection?.getVariable(variableName)

      // Check variable type and set property
      if (variable?.type === 'Size')
        await style?.setProperties({ 'font-size': variable })
    },

    getVariableAlias: async () => {
      // Get Collection
      const collection = await webflow.getDefaultVariableCollection()

      // Create first variable
      const firstVariable = await collection?.createColorVariable(
        'Default Color',
        'red',
      )

      if (firstVariable) {
        // Create second variable as an alias of the first
        const secondVariable = await collection?.createColorVariable(
          'Aliased Variable',
          firstVariable,
        )

        const alias = await secondVariable?.get()
        // This will output the ID of the aliased variable
        console.log(alias)
      }
    },

    removeVariable: async () => {
      // Get collection
      const collection = await webflow.getDefaultVariableCollection()

      // Get variable by name
      const variable = await collection?.getVariable('id-123')

      // Delete variable
      await variable?.remove()
    },
  },
  // Variable Modes
  variableModes: {
    getAllVariableModes: async (variableCollection: VariableCollection) => {
      // Get All Variable Modes
      const variableModes = await variableCollection?.getAllVariableModes()
      console.log(variableModes)
    },

    getVariableModeById: async (
      variableCollection: VariableCollection,
      modeId: string,
    ) => {
      // Get Collection
      const collection = variableCollection

      // Get Variable Mode by ID
      const variableMode = await collection?.getVariableModeById(modeId)
      console.log(variableMode)
    },
    getVariableModeByName: async (
      variableCollection: VariableCollection,
      modeName: string,
    ) => {
      // Get Collection
      const collection = variableCollection

      // Get Variable Mode by Name
      const variableMode = await collection?.getVariableModeByName(modeName)
      console.log(variableMode)
    },

    // Create Variable Mode
    createVariableMode: async (
      variableCollection: VariableCollection,
      modeName: string,
    ) => {
      // Get Collection
      const collection = variableCollection

      // Create Variable Mode
      const variableMode = await collection?.createVariableMode(modeName)
      const newVariableMode = await collection?.getVariableModeByName(modeName)
      console.log(newVariableMode)
    },

    // Remove Variable Mode
    removeVariableMode: async (
      variableCollection: VariableCollection,
      variableMode: VariableMode,
    ) => {
      // Remove Variable Mode
      variableMode?.remove()
    },
  },
}
`,utilitiesRaw=`/* Site information and Settings */
export enum ExtensionSizeEnum {
  Large = 'large',
  Default = 'default',
  Comfortable = 'comfortable',
  Compact = 'compact',
}

export const Utilities = {
  getSiteInfo: async () => {
    // Get Site Information
    const siteInfo = await webflow.getSiteInfo()

    // Print Site Information
    console.log(JSON.stringify(siteInfo, null, 2))
  },

  setExtensionSize: async (extensionSizeEnum: ExtensionSizeEnum) => {
    // Set the extension UI size to "default", "comfortable", or "large"
    await webflow.setExtensionSize(extensionSizeEnum.id)

    console.log(\`Extension UI size set to: \${extensionSizeEnum.id}\`)
  },

  displayCurrentMediaQuery: async () => {
    const breakpointId = await webflow.getMediaQuery()

    switch (breakpointId) {
      case 'xxl':
        console.log(
          'The current view is for very large screens or high-resolution monitors.',
        )
        break
      case 'xl':
        console.log('The current view is suitable for large desktop monitors.')
        break
      case 'large':
        console.log('The current view fits standard desktop monitors.')
        break
      case 'main':
        console.log(
          'The current view is suitable for smaller desktops or large tablets.',
        )
        break
      case 'medium':
        console.log(
          'The current view is suitable for tablets and some large phones.',
        )
        break
      case 'small':
        console.log('The current view is designed for larger mobile devices.')
        break
      case 'tiny':
        console.log('The current view is for the smallest mobile devices.')
        break
    }
  },

  getIdToken: async () => {
    // Get ID Token
    const idToken = await webflow.getIdToken()

    // Print ID Token
    console.log(idToken)
  },

  checkAppMode: async () => {
    const capabilities = await webflow.canForAppMode([
      webflow.appModes.canEdit,
      webflow.appModes.canDesign,
    ])

    console.log(capabilities)
  },

  checkAppConnection: async () => {
    // Check for current app connection
    const appConnection = await webflow.getCurrentAppConnection()
    console.log(appConnection)
  },

  notifyUser: async () => {
    // General notification
    await webflow.notify({ type: 'Info', message: 'Great work!' })

    // Error notification
    await webflow.notify({
      type: 'Error',
      message: 'Something went wrong, try again!',
    })

    // Success notification
    await webflow.notify({
      type: 'Success',
      message: 'Successfully did something!',
    })
  },

  subscribeSelect: async () => {
    // Subscribe to changes in the selected element
    const selectedElementCallback = (element: AnyElement | null) => {
      if (element) {
        console.log('Selected Element:', element)
      } else {
        console.log('No element is currently selected.')
      }
    }

    const unsubscribeSelectedElement = webflow.subscribe(
      'selectedelement',
      selectedElementCallback,
    )
  },

  subscribeBreakpoint: async () => {
    const unsubscribeMediaQuery = webflow.subscribe(
      'mediaquery',
      (breakpoint) => {
        switch (breakpoint) {
          case 'xxl':
            console.log(
              'The current view is for very large screens or high-resolution monitors.',
            )
            break
          case 'xl':
            console.log(
              'The current view is suitable for large desktop monitors.',
            )
            break
          case 'large':
            console.log('The current view fits standard desktop monitors.')
            break
          case 'main':
            console.log(
              'The current view is suitable for smaller desktops or large tablets.',
            )
            break
          case 'medium':
            console.log(
              'The current view is suitable for tablets and some large phones.',
            )
            break
          case 'small':
            console.log(
              'The current view is designed for larger mobile devices.',
            )
            break
          case 'tiny':
            console.log('The current view is for the smallest mobile devices.')
            break
          default:
            console.log('Unknown breakpoint:', breakpoint)
        }
      },
    )
  },

  subscribePageChange: async () => {
    // Subscribe to changes in the selected page
    const selectedPageCallback = async (page: Page | null) => {
      if (page) {
        let pageName = await page.getName()
        let pageSlug = await page.getSlug()
        let pageParent = await page.getParent()
        let searchDescription = await page.getSearchDescription()

        console.log(\`Page Name: \${pageName}\`)
        console.log(\`Page Slug: \${pageSlug}\`)
        console.log(\`Page Description: \${searchDescription}\`)
      } else {
        console.log('No element is currently selected.')
      }
    }

    const unsubscribeSelectedElement = webflow.subscribe(
      'currentpage',
      selectedPageCallback,
    )
  },

  subscribeAppModes: async () => {
    // Subscribe to changes in the selected page
    const checkAppModes = async () => {
      const capabilities = await webflow.canForAppMode(
        Object.values(webflow.appModes),
      )
      console.log(capabilities)
    }

    const unsubscribeSelectedElement = webflow.subscribe(
      'currentappmode',
      checkAppModes,
    )
  },

  subscribePseudoMode: async () => {
    // Subscribe to changes in the pseudo mode
    const pseudoModeCallback = (pseudoMode: PseudoStateKey | null) => {
      console.log('Pseudo Mode:', pseudoMode)
    }

    const unsubscribePseudoMode = webflow.subscribe(
      'pseudomode',
      pseudoModeCallback,
    )
  },

  getLaunchContext: async () => {
    const context = await webflow.getLaunchContext()
    console.log('Launch Context:', context)

    if (context) {
      const contextType = context.type
      const contextValue = context.value

      console.log('Launch Type:', contextType)
      console.log('Launch Value:', contextValue)

      // Notify user of launch context
      await webflow.notify({
        type: 'Info',
        message: \`App launched via \${contextType}\${contextValue ? \` with \${JSON.stringify(contextValue)}\` : ''}\`,
      })
    } else {
      console.log('No specific launch context')
    }
  },

  getPseudoMode: async () => {
    // Select a state in the designer to see the pseudo mode in the console
    const pseudoMode = await webflow.getPseudoMode()
    console.log('Pseudo Mode:', pseudoMode)
  },
}
`,RAW_FILES_MAP={assets:assetsRaw,components:componentsRaw,elements:elementsRaw,folders:foldersRaw,pages:pagesRaw,payments:paymentsRaw,styles:stylesRaw,variables:variablesRaw,utilities:utilitiesRaw},useFunctionCode=(e,o)=>{const[a,i]=reactExports.useState(""),[s,c]=reactExports.useState([]),[d,g]=reactExports.useState([]),[b,en]=reactExports.useState({});return reactExports.useEffect(()=>{if(e&&o){const sn=RAW_FILES_MAP[o.toLowerCase()];if(sn)try{const on=parseFunctionText(sn,e,o);if(on){let ln=on.replace(`${e}:`,"").replace(/,\s*$/,"");ln=stripFunctionWrapper(ln),i(ln);const{params:dn,types:pn}=extractParameters(on);c(dn),g(pn),en(dn.reduce((un,gn)=>({...un,[gn]:""}),{}))}else i("Function code not found."),c([]),g([]),en({})}catch(on){console.error("Failed to parse function source:",on),i("Error parsing function code."),c([]),g([]),en({})}else console.error("Raw file not found for category:",o),i("Example category not found."),c([]),g([]),en({})}},[e,o]),{functionCode:a,parameterNames:s,parameterTypes:d,functionParameters:b,setParameterNames:c,setFunctionParameters:en}},parseFunctionText=(e,o,a)=>{const i=(j,_e)=>{let nn=1,an=_e;for(;an<j.length&&nn>0;)j[an]==="{"&&nn++,j[an]==="}"&&nn--,an++;return an},s=e.indexOf(`export const ${a} = {`);if(s===-1)throw console.error("Top level category not found:",a),new Error(`Category "${a}" not found.`);const c=s+`export const ${a} = {`.length,d=i(e,c);let g=e.slice(c,d);const[b,en]=o.includes(".")?o.split("."):[null,o];if(b){const j=g.indexOf(`${b}:`);if(j===-1)throw console.error("Subcategory not found:",b),new Error(`Subcategory "${b}" not found.`);const _e=g.indexOf("{",j);if(_e===-1)throw new Error(`No opening brace found for subcategory "${b}"`);const nn=i(g,_e+1);g=g.slice(_e+1,nn-1)}const sn=/(\w+):\s*(async\s*)?\(\s*.*?\)\s*=>\s*{(.*?)}/gs,on=[...g.matchAll(sn)],ln=on.find(j=>j[1]===(en||o));if(!ln)throw new Error(`Function "${en||o}" not found.`);const dn=on.findIndex(j=>j[1]===(en||o)),pn=ln[0].trim(),un=dn+1<on.length?on[dn+1][0]:null,gn=un?g.indexOf(un):g.length;let tn=g.slice(g.indexOf(pn),gn).trim();return un||(tn=tn.replace(/\s*}$/,"")),tn},stripFunctionWrapper=e=>{let o=e.trim();const a=/^\s*async\s*\([^)]*\)\s*=>\s*\{/;return a.test(o)&&(o=o.replace(a,""),o=o.replace(/\s*\}\s*,?\s*$/,"")),o=o.trim(),o},extractParameters=e=>{const a=/\(\s*([^)]*?)\s*\)\s*=>/.exec(e),i=[],s=[];if(a){const c=a[1],d=/(\w+)\s*:\s*(\w+)/g;let g;for(;g=d.exec(c);)i.push(g[1]),s.push(g[2])}return{params:i,types:s}},METHOD_DESCRIPTIONS={elements:{"elementManagement.getSelectedElement":"Get info about the currently selected element"}},PARAMETER_DEPENDENCIES={variableName:{dependsOn:"collection"},variableMode:{dependsOn:"variableCollection"}},STALE_TIME=5*60*1e3,CACHE_TIME=10*60*1e3,useEnumQueries=(e,o,a)=>useQueries({queries:e.map((i,s)=>{const c=o[s],d=PARAMETER_DEPENDENCIES[c],g=hasEnumProvider(i),b=hasObjectSelector(i);if(i==="VariableMode"){if(d){const en=a==null?void 0:a[d.dependsOn];if(en!=null&&en.id)return{queryKey:["enumValues",i,en.id],queryFn:async()=>(await(await getVariableModeObjectSelector(en.id)).getAll()).map(ln=>({id:ln.id,name:ln.name,data:{object:ln.object}})),enabled:!0,staleTime:STALE_TIME,cacheTime:CACHE_TIME,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchOnReconnect:!1,retry:!1}}return{queryKey:["enumValues",i,"no-collection"],queryFn:async()=>[],enabled:!1,data:[],isLoading:!1,error:null}}return!g&&!b||i==="VariableInfo"?{queryKey:["enumValues",i,"disabled"],queryFn:async()=>null,enabled:!1,data:null,isLoading:!1,error:null}:d&&!(a==null?void 0:a[d.dependsOn])?{queryKey:["enumValues",i,"dependent","no-value"],queryFn:async()=>[],enabled:!1,data:[],isLoading:!1,error:null}:{queryKey:["enumValues",i],queryFn:async()=>{if(b){const en=getObjectSelectorKey(i),sn=objectSelectors[en];let on;if(typeof sn=="function")try{on=await sn()}catch{return console.warn(`Selector for ${i} requires parameters, skipping`),[]}else on=sn;return(await on.getAll()).map(dn=>({id:dn.id,name:dn.name,data:{object:dn.object}}))}else return enumProviders[getProviderKey(i)].getAll()},enabled:!0,staleTime:STALE_TIME,cacheTime:CACHE_TIME,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchOnReconnect:!1,retry:!1}})});function useDynamicEnum(e){const[o,a]=reactExports.useState([]),[i,s]=reactExports.useState(!1),[c,d]=reactExports.useState(null);return reactExports.useEffect(()=>{(async()=>{s(!0),d(null);try{const b=await e.getAll();a(b)}catch(b){d(b instanceof Error?b.message:"Failed to fetch items"),console.error("Error fetching items:",b)}finally{s(!1)}})()},[e]),{items:o,loading:i,error:c}}const useVariableCollections=()=>{const{items:e,loading:o,error:a}=useDynamicEnum(collectionsProvider);return{collections:e,loading:o,error:a}},createAPIConsole=e=>({log:(...o)=>e(a=>a+o.map(i=>formatConsoleArg(i)).join(" ")+`
`),error:(...o)=>e(a=>a+"[Error] "+o.map(i=>formatConsoleArg(i)).join(" ")+`
`),warn:(...o)=>e(a=>a+"[Warn] "+o.map(i=>formatConsoleArg(i)).join(" ")+`
`),info:(...o)=>e(a=>a+"[Info] "+o.map(i=>formatConsoleArg(i)).join(" ")+`
`)}),formatConsoleArg=e=>e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:typeof e=="object"&&e!==null?JSON.stringify(e,null,2):String(e),examples=examples$1,APIExplorer=()=>{var wn;const[e,o]=reactExports.useState(""),[a,i]=reactExports.useState(""),[s,c]=reactExports.useState({}),[d,g]=reactExports.useState(""),b=reactExports.useRef(!1),en=reactExports.useRef(!1),{functionCode:sn,parameterNames:on,parameterTypes:ln,setParameterNames:dn}=useFunctionCode(a,e);useVariableCollections();const pn=s.collection,{data:un,isLoading:gn,error:tn}=useQuery({queryKey:["variables",pn==null?void 0:pn.id],queryFn:async()=>{if(!isVariableCollectionInfo(pn))return null;try{const En=await webflow.getVariableCollectionById(pn.id);if(!En)throw new Error(`Collection with ID ${pn.id} not found`);const kn=await En.getAllVariables();return Promise.all(kn.map(async Nn=>({id:Nn.id,name:await Nn.getName(),type:Nn.type,data:{variable:Nn},collectionId:pn.id})))}catch(En){throw console.error("Error fetching variables:",En),En}},enabled:!!(pn!=null&&pn.id),staleTime:5*60*1e3}),j=useEnumQueries(ln,on,s);reactExports.useEffect(()=>{Prism$1.highlightAll()},[sn]),reactExports.useEffect(()=>{g("")},[a,e]),reactExports.useEffect(()=>{if(!en.current){en.current=!0;const En=Object.keys(examples)[0];o(En);const kn=examples[En]||{},Nn=Object.keys(kn)[0];if(typeof kn[Nn]=="object"&&!("type"in(kn[Nn]||{}))){const jn=Object.keys(kn[Nn])[0];i(`${Nn}.${jn}`)}else i(Nn)}},[]),reactExports.useEffect(()=>{a&&on.length===0&&e&&!b.current&&(b.current=!0,yn())},[a,e,on]);const _e=Object.keys(examples).map(En=>({value:En,label:En})),nn=e?Object.entries(examples[e]||{}).map(([En,kn])=>typeof kn=="object"&&kn!==null&&!("type"in kn)?{value:En,label:En.replace(/([A-Z])/g," $1").trim(),subcategories:Object.keys(kn||{}).map(Nn=>({value:Nn,label:Nn.replace(/([A-Z])/g," $1").trim()}))}:{value:En,label:En.replace(/([A-Z])/g," $1").trim()}):[],an=En=>{o(En),i(""),dn([])},cn=En=>{i(En),b.current=!1},mn=(En,kn)=>{c(Nn=>({...Nn,[En]:kn}))},yn=()=>{if(e&&a){const[En,kn]=a.includes(".")?a.split("."):[null,a],Nn=examples[e],jn=En?Nn[En][kn]:Nn[a];if(jn)try{g("");const In=on.length>0?on.map((bn,Sn)=>{const An=ln[Sn],vn=s[bn];return(An==="Style"||An==="Asset"||An==="VariableCollection"||An==="Variable"||An==="VariableMode")&&vn&&typeof vn=="object"&&vn.data&&vn.data.object?vn.data.object:vn}):[],Tn=createAPIConsole(g),Ln={...console};if(Object.assign(console,Tn),typeof jn=="function"){const bn=jn(...In);bn&&typeof bn.then=="function"&&bn.catch(Tn.error)}}catch(In){console.error("Error executing function:",In)}finally{Object.assign(console,console)}}},hn=(En,kn)=>{const Nn=ln[kn],jn=j[kn]||{},In=Nn==="VariableInfo"?un||[]:jn.data||[],Tn=Nn==="VariableInfo"?gn:jn.isLoading,Ln=Nn==="VariableInfo"?tn:jn.error,bn=Nn.endsWith("Info")||Nn==="Style"||Nn==="Asset"||Nn==="VariableCollection"||Nn==="Variable"||Nn==="VariableMode",Sn=Nn==="StyleInfo"?"Style":Nn==="AssetInfo"?"Asset":Nn;return jsxRuntimeExports.jsx(APIExplorerParameter,{name:En,index:kn,paramType:Sn,value:s[En],onChange:mn,options:In,isLoading:Tn,error:Ln,isDynamicEnum:bn},En)};return jsxRuntimeExports.jsxs("div",{className:"api-explorer",children:[jsxRuntimeExports.jsxs("div",{className:"flex-row gap-2 mb-2",children:[jsxRuntimeExports.jsx("div",{className:"flex-1",children:jsxRuntimeExports.jsx(Dropdown,{options:_e,selectedValue:e,onValueChange:an,disabled:!1,placeholder:"Select API category"})}),jsxRuntimeExports.jsx("div",{className:"flex-1",children:jsxRuntimeExports.jsx(Dropdown,{options:nn,selectedValue:a,onValueChange:cn,disabled:!e,placeholder:"Select API method"})})]}),a&&((wn=METHOD_DESCRIPTIONS[e])==null?void 0:wn[a])&&jsxRuntimeExports.jsx("div",{className:"text-sm text-gray-400 mb-4",children:METHOD_DESCRIPTIONS[e][a]}),on.length>0&&jsxRuntimeExports.jsxs("div",{className:"flex-row items-end gap-2",children:[jsxRuntimeExports.jsx("div",{className:"flex-1",children:on.map((En,kn)=>hn(En,kn))}),jsxRuntimeExports.jsx("button",{className:"button cc-primary",onClick:yn,disabled:!a,children:"Run"})]}),sn&&jsxRuntimeExports.jsxs("div",{className:"mb-3",children:[jsxRuntimeExports.jsx("label",{className:"w-form-label",children:"Example"}),jsxRuntimeExports.jsx(CodeBlock,{code:sn,language:"typescript"})]}),a&&jsxRuntimeExports.jsxs("div",{style:{marginTop:16},children:[jsxRuntimeExports.jsx("div",{className:"flex items-center justify-between mb-1",children:jsxRuntimeExports.jsx("label",{className:"w-form-label",children:"Output"})}),jsxRuntimeExports.jsx(CodeBlock,{onClear:()=>g(""),code:d||"// Run the method to see output",language:"javascript"})]})]})},TABS=[{key:"api",label:"API Explorer"},{key:"code",label:"Code Playground"}],queryClient=new QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1,retry:1}}}),App=()=>{const[e,o]=reactExports.useState("api"),a=reactExports.useRef(null);return reactExports.useEffect(()=>{webflow.setExtensionSize({height:425,width:500})},[]),reactExports.useEffect(()=>{loader.init().catch(c=>{c&&typeof c=="object"&&"type"in c&&c.type==="cancelation"||c&&typeof c=="object"&&"name"in c&&c.name==="Canceled"||console.warn("Monaco loader init error:",c)});const i=window.onerror,s=window.onunhandledrejection;return window.onerror=(c,d,g,b,en)=>en&&typeof en=="object"&&"type"in en&&en.type==="cancelation"||en&&typeof en=="object"&&"name"in en&&en.name==="Canceled"?!0:i?i(c,d,g,b,en):!1,window.onunhandledrejection=c=>{if(c.reason&&typeof c.reason=="object"&&"type"in c.reason&&c.reason.type==="cancelation"){c.preventDefault();return}if(c.reason&&typeof c.reason=="object"&&"name"in c.reason&&c.reason.name==="Canceled"){c.preventDefault();return}s&&s(c)},()=>{window.onerror=i,window.onunhandledrejection=s}},[]),jsxRuntimeExports.jsxs("div",{id:"container",className:"container",ref:a,children:[jsxRuntimeExports.jsx("h1",{className:"strong h2",style:{marginBottom:8,marginTop:0,fontSize:"1.2rem",lineHeight:1.2},children:"Webflow Designer API Explorer"}),jsxRuntimeExports.jsx(TabNavigation,{tabs:TABS,activeTab:e,setActiveTab:o}),e==="api"&&jsxRuntimeExports.jsx(APIExplorer,{}),e==="code"&&jsxRuntimeExports.jsx(Playground,{}),jsxRuntimeExports.jsxs("footer",{className:"wf-footer",children:[jsxRuntimeExports.jsx("img",{src:"https://dhygzobemt712.cloudfront.net/Mark/Mark_Logo_Blue.svg",alt:"Webflow Logo",className:"wf-footer-logo"}),jsxRuntimeExports.jsx("div",{children:"Designer API Playground • Built with Webflow Designer API"}),jsxRuntimeExports.jsxs("div",{className:"wf-footer-links",children:[jsxRuntimeExports.jsx("a",{href:"https://developers.webflow.com/designer/reference/designer-api/getting-started",target:"_blank",rel:"noopener noreferrer",children:"Documentation"}),jsxRuntimeExports.jsx("a",{href:"https://developers.webflow.com/data/v2.0.0/docs/register-an-app",target:"_blank",rel:"noopener noreferrer",children:"Create an App"})]})]})]})},container=document.getElementById("root"),root=createRoot(container);root.render(jsxRuntimeExports.jsx(React.StrictMode,{children:jsxRuntimeExports.jsx(QueryClientProvider,{client:queryClient,children:jsxRuntimeExports.jsx(App,{})})}));
