"use strict";(()=>{var YM=Object.create;var c0=Object.defineProperty;var ZM=Object.getOwnPropertyDescriptor;var JM=Object.getOwnPropertyNames;var KM=Object.getPrototypeOf,QM=Object.prototype.hasOwnProperty;var wi=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var jM=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of JM(t))!QM.call(e,s)&&s!==n&&c0(e,s,{get:()=>t[s],enumerable:!(i=ZM(t,s))||i.enumerable});return e};var Eo=(e,t,n)=>(n=e!=null?YM(KM(e)):{},jM(t||!e||!e.__esModule?c0(n,"default",{value:e,enumerable:!0}):n,e));var y0=wi(Pt=>{"use strict";var Yf=Symbol.for("react.transitional.element"),$M=Symbol.for("react.portal"),tb=Symbol.for("react.fragment"),eb=Symbol.for("react.strict_mode"),nb=Symbol.for("react.profiler"),ib=Symbol.for("react.consumer"),sb=Symbol.for("react.context"),ab=Symbol.for("react.forward_ref"),rb=Symbol.for("react.suspense"),ob=Symbol.for("react.memo"),p0=Symbol.for("react.lazy"),lb=Symbol.for("react.activity"),u0=Symbol.iterator;function cb(e){return e===null||typeof e!="object"?null:(e=u0&&e[u0]||e["@@iterator"],typeof e=="function"?e:null)}var m0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g0=Object.assign,_0={};function er(e,t,n){this.props=e,this.context=t,this.refs=_0,this.updater=n||m0}er.prototype.isReactComponent={};er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function v0(){}v0.prototype=er.prototype;function Zf(e,t,n){this.props=e,this.context=t,this.refs=_0,this.updater=n||m0}var Jf=Zf.prototype=new v0;Jf.constructor=Zf;g0(Jf,er.prototype);Jf.isPureReactComponent=!0;var h0=Array.isArray;function qf(){}var ve={H:null,A:null,T:null,S:null},x0=Object.prototype.hasOwnProperty;function Kf(e,t,n){var i=n.ref;return{$$typeof:Yf,type:e,key:t,ref:i!==void 0?i:null,props:n}}function ub(e,t){return Kf(e.type,t,e.props)}function Qf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yf}function hb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var f0=/\/+/g;function Wf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hb(""+e.key):t.toString(36)}function fb(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(qf,qf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function tr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Yf:case $M:r=!0;break;case p0:return r=e._init,tr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Wf(e,0):i,h0(s)?(n="",r!=null&&(n=r.replace(f0,"$&/")+"/"),tr(s,t,n,"",function(c){return c})):s!=null&&(Qf(s)&&(s=ub(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(f0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(h0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Wf(i,l),r+=tr(i,t,n,a,s);else if(l=cb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Wf(i,l++),r+=tr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return tr(fb(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function fc(e,t,n){if(e==null)return e;var i=[],s=0;return tr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function db(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var d0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pb={map:fc,forEach:function(e,t,n){fc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fc(e,function(){t++}),t},toArray:function(e){return fc(e,function(t){return t})||[]},only:function(e){if(!Qf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pt.Activity=lb;Pt.Children=pb;Pt.Component=er;Pt.Fragment=tb;Pt.Profiler=nb;Pt.PureComponent=Zf;Pt.StrictMode=eb;Pt.Suspense=rb;Pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ve;Pt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ve.H.useMemoCache(e)}};Pt.cache=function(e){return function(){return e.apply(null,arguments)}};Pt.cacheSignal=function(){return null};Pt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=g0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!x0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Kf(e.type,s,i)};Pt.createContext=function(e){return e={$$typeof:sb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ib,_context:e},e};Pt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)x0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Kf(e,a,s)};Pt.createRef=function(){return{current:null}};Pt.forwardRef=function(e){return{$$typeof:ab,render:e}};Pt.isValidElement=Qf;Pt.lazy=function(e){return{$$typeof:p0,_payload:{_status:-1,_result:e},_init:db}};Pt.memo=function(e,t){return{$$typeof:ob,type:e,compare:t===void 0?null:t}};Pt.startTransition=function(e){var t=ve.T,n={};ve.T=n;try{var i=e(),s=ve.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(qf,d0)}catch(a){d0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),ve.T=t}};Pt.unstable_useCacheRefresh=function(){return ve.H.useCacheRefresh()};Pt.use=function(e){return ve.H.use(e)};Pt.useActionState=function(e,t,n){return ve.H.useActionState(e,t,n)};Pt.useCallback=function(e,t){return ve.H.useCallback(e,t)};Pt.useContext=function(e){return ve.H.useContext(e)};Pt.useDebugValue=function(){};Pt.useDeferredValue=function(e,t){return ve.H.useDeferredValue(e,t)};Pt.useEffect=function(e,t){return ve.H.useEffect(e,t)};Pt.useEffectEvent=function(e){return ve.H.useEffectEvent(e)};Pt.useId=function(){return ve.H.useId()};Pt.useImperativeHandle=function(e,t,n){return ve.H.useImperativeHandle(e,t,n)};Pt.useInsertionEffect=function(e,t){return ve.H.useInsertionEffect(e,t)};Pt.useLayoutEffect=function(e,t){return ve.H.useLayoutEffect(e,t)};Pt.useMemo=function(e,t){return ve.H.useMemo(e,t)};Pt.useOptimistic=function(e,t){return ve.H.useOptimistic(e,t)};Pt.useReducer=function(e,t,n){return ve.H.useReducer(e,t,n)};Pt.useRef=function(e){return ve.H.useRef(e)};Pt.useState=function(e){return ve.H.useState(e)};Pt.useSyncExternalStore=function(e,t,n){return ve.H.useSyncExternalStore(e,t,n)};Pt.useTransition=function(){return ve.H.useTransition()};Pt.version="19.2.7"});var Ao=wi((F2,S0)=>{"use strict";S0.exports=y0()});var U0=wi(be=>{"use strict";function ed(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<dc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ci(e){return e.length===0?null:e[0]}function mc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>dc(o,n))l<s&&0>dc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>dc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function dc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}be.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(M0=performance,be.unstable_now=function(){return M0.now()}):(jf=Date,b0=jf.now(),be.unstable_now=function(){return jf.now()-b0});var M0,jf,b0,Xi=[],bs=[],mb=1,Qn=null,hn=3,nd=!1,wo=!1,Co=!1,id=!1,A0=typeof setTimeout=="function"?setTimeout:null,w0=typeof clearTimeout=="function"?clearTimeout:null,T0=typeof setImmediate<"u"?setImmediate:null;function pc(e){for(var t=Ci(bs);t!==null;){if(t.callback===null)mc(bs);else if(t.startTime<=e)mc(bs),t.sortIndex=t.expirationTime,ed(Xi,t);else break;t=Ci(bs)}}function sd(e){if(Co=!1,pc(e),!wo)if(Ci(Xi)!==null)wo=!0,ir||(ir=!0,nr());else{var t=Ci(bs);t!==null&&ad(sd,t.startTime-e)}}var ir=!1,Ro=-1,C0=5,R0=-1;function D0(){return id?!0:!(be.unstable_now()-R0<C0)}function $f(){if(id=!1,ir){var e=be.unstable_now();R0=e;var t=!0;try{t:{wo=!1,Co&&(Co=!1,w0(Ro),Ro=-1),nd=!0;var n=hn;try{e:{for(pc(e),Qn=Ci(Xi);Qn!==null&&!(Qn.expirationTime>e&&D0());){var i=Qn.callback;if(typeof i=="function"){Qn.callback=null,hn=Qn.priorityLevel;var s=i(Qn.expirationTime<=e);if(e=be.unstable_now(),typeof s=="function"){Qn.callback=s,pc(e),t=!0;break e}Qn===Ci(Xi)&&mc(Xi),pc(e)}else mc(Xi);Qn=Ci(Xi)}if(Qn!==null)t=!0;else{var a=Ci(bs);a!==null&&ad(sd,a.startTime-e),t=!1}}break t}finally{Qn=null,hn=n,nd=!1}t=void 0}}finally{t?nr():ir=!1}}}var nr;typeof T0=="function"?nr=function(){T0($f)}:typeof MessageChannel<"u"?(td=new MessageChannel,E0=td.port2,td.port1.onmessage=$f,nr=function(){E0.postMessage(null)}):nr=function(){A0($f,0)};var td,E0;function ad(e,t){Ro=A0(function(){e(be.unstable_now())},t)}be.unstable_IdlePriority=5;be.unstable_ImmediatePriority=1;be.unstable_LowPriority=4;be.unstable_NormalPriority=3;be.unstable_Profiling=null;be.unstable_UserBlockingPriority=2;be.unstable_cancelCallback=function(e){e.callback=null};be.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C0=0<e?Math.floor(1e3/e):5};be.unstable_getCurrentPriorityLevel=function(){return hn};be.unstable_next=function(e){switch(hn){case 1:case 2:case 3:var t=3;break;default:t=hn}var n=hn;hn=t;try{return e()}finally{hn=n}};be.unstable_requestPaint=function(){id=!0};be.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=hn;hn=e;try{return t()}finally{hn=n}};be.unstable_scheduleCallback=function(e,t,n){var i=be.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:mb++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,ed(bs,e),Ci(Xi)===null&&e===Ci(bs)&&(Co?(w0(Ro),Ro=-1):Co=!0,ad(sd,n-i))):(e.sortIndex=s,ed(Xi,e),wo||nd||(wo=!0,ir||(ir=!0,nr()))),e};be.unstable_shouldYield=D0;be.unstable_wrapCallback=function(e){var t=hn;return function(){var n=hn;hn=t;try{return e.apply(this,arguments)}finally{hn=n}}}});var L0=wi((V2,N0)=>{"use strict";N0.exports=U0()});var O0=wi(vn=>{"use strict";var gb=Ao();function I0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ts(){}var _n={d:{f:Ts,r:function(){throw Error(I0(522))},D:Ts,C:Ts,L:Ts,m:Ts,X:Ts,S:Ts,M:Ts},p:0,findDOMNode:null},_b=Symbol.for("react.portal");function vb(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_b,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Do=gb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function gc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_n;vn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(I0(299));return vb(e,t,null,n)};vn.flushSync=function(e){var t=Do.T,n=_n.p;try{if(Do.T=null,_n.p=2,e)return e()}finally{Do.T=t,_n.p=n,_n.d.f()}};vn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,_n.d.C(e,t))};vn.prefetchDNS=function(e){typeof e=="string"&&_n.d.D(e)};vn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=gc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?_n.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&_n.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};vn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=gc(t.as,t.crossOrigin);_n.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&_n.d.M(e)};vn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=gc(n,t.crossOrigin);_n.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};vn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=gc(t.as,t.crossOrigin);_n.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else _n.d.m(e)};vn.requestFormReset=function(e){_n.d.r(e)};vn.unstable_batchedUpdates=function(e,t){return e(t)};vn.useFormState=function(e,t,n){return Do.H.useFormState(e,t,n)};vn.useFormStatus=function(){return Do.H.useHostTransitionStatus()};vn.version="19.2.7"});var F0=wi((G2,B0)=>{"use strict";function P0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P0)}catch(e){console.error(e)}}P0(),B0.exports=O0()});var Ky=wi(Hu=>{"use strict";var qe=L0(),uv=Ao(),xb=F0();function Q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function hv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z0(e){if(gl(e)!==e)throw Error(Q(188))}function yb(e){var t=e.alternate;if(!t){if(t=gl(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return z0(s),e;if(a===i)return z0(s),t;a=a.sibling}throw Error(Q(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function pv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=pv(e),t!==null)return t;e=e.sibling}return null}var Se=Object.assign,Sb=Symbol.for("react.element"),_c=Symbol.for("react.transitional.element"),Fo=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),mv=Symbol.for("react.strict_mode"),zd=Symbol.for("react.profiler"),gv=Symbol.for("react.consumer"),ji=Symbol.for("react.context"),Ip=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),Hd=Symbol.for("react.suspense_list"),Op=Symbol.for("react.memo"),Es=Symbol.for("react.lazy"),Gd=Symbol.for("react.activity"),Mb=Symbol.for("react.memo_cache_sentinel"),V0=Symbol.iterator;function Uo(e){return e===null||typeof e!="object"?null:(e=V0&&e[V0]||e["@@iterator"],typeof e=="function"?e:null)}var bb=Symbol.for("react.client.reference");function kd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bb?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case zd:return"Profiler";case mv:return"StrictMode";case Vd:return"Suspense";case Hd:return"SuspenseList";case Gd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Fo:return"Portal";case ji:return e.displayName||"Context";case gv:return(e._context.displayName||"Context")+".Consumer";case Ip:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Op:return t=e.displayName||null,t!==null?t:kd(e.type)||"Memo";case Es:t=e._payload,e=e._init;try{return kd(e(t))}catch{}}return null}var zo=Array.isArray,Nt=uv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie=xb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Sa={pending:!1,data:null,method:null,action:null},Xd=[],ur=-1;function Li(e){return{current:e}}function $e(e){0>ur||(e.current=Xd[ur],Xd[ur]=null,ur--)}function ge(e,t){ur++,Xd[ur]=e.current,e.current=t}var Ni=Li(null),nl=Li(null),Ps=Li(null),Kc=Li(null);function Qc(e,t){switch(ge(Ps,t),ge(nl,e),ge(Ni,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Y_(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Y_(t),e=Py(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$e(Ni),ge(Ni,e)}function Cr(){$e(Ni),$e(nl),$e(Ps)}function Wd(e){e.memoizedState!==null&&ge(Kc,e);var t=Ni.current,n=Py(t,e.type);t!==n&&(ge(nl,e),ge(Ni,n))}function jc(e){nl.current===e&&($e(Ni),$e(nl)),Kc.current===e&&($e(Kc),dl._currentValue=Sa)}var rd,H0;function _a(e){if(rd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rd=t&&t[1]||"",H0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rd+e+H0}var od=!1;function ld(e,t){if(!e||od)return"";od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{od=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?_a(n):""}function Tb(e,t){switch(e.tag){case 26:case 27:case 5:return _a(e.type);case 16:return _a("Lazy");case 13:return e.child!==t&&t!==null?_a("Suspense Fallback"):_a("Suspense");case 19:return _a("SuspenseList");case 0:case 15:return ld(e.type,!1);case 11:return ld(e.type.render,!1);case 1:return ld(e.type,!0);case 31:return _a("Activity");default:return""}}function G0(e){try{var t="",n=null;do t+=Tb(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var qd=Object.prototype.hasOwnProperty,Pp=qe.unstable_scheduleCallback,cd=qe.unstable_cancelCallback,Eb=qe.unstable_shouldYield,Ab=qe.unstable_requestPaint,Fn=qe.unstable_now,wb=qe.unstable_getCurrentPriorityLevel,_v=qe.unstable_ImmediatePriority,vv=qe.unstable_UserBlockingPriority,$c=qe.unstable_NormalPriority,Cb=qe.unstable_LowPriority,xv=qe.unstable_IdlePriority,Rb=qe.log,Db=qe.unstable_setDisableYieldValue,_l=null,zn=null;function Us(e){if(typeof Rb=="function"&&Db(e),zn&&typeof zn.setStrictMode=="function")try{zn.setStrictMode(_l,e)}catch{}}var Vn=Math.clz32?Math.clz32:Lb,Ub=Math.log,Nb=Math.LN2;function Lb(e){return e>>>=0,e===0?32:31-(Ub(e)/Nb|0)|0}var vc=256,xc=262144,yc=4194304;function va(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Eu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=va(i):(r&=o,r!==0?s=va(r):n||(n=o&~e,n!==0&&(s=va(n))))):(o=i&~a,o!==0?s=va(o):r!==0?s=va(r):n||(n=i&~e,n!==0&&(s=va(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function vl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ib(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yv(){var e=yc;return yc<<=1,(yc&62914560)===0&&(yc=4194304),e}function ud(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ob(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Vn(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&Sv(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function Sv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Vn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Mv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Vn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function bv(e,t){var n=t&-t;return n=(n&42)!==0?1:Bp(n),(n&(e.suspendedLanes|t))!==0?0:n}function Bp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fp(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Tv(){var e=ie.p;return e!==0?e:(e=window.event,e===void 0?32:Yy(e.type))}function k0(e,t){var n=ie.p;try{return ie.p=e,t()}finally{ie.p=n}}var Js=Math.random().toString(36).slice(2),an="__reactFiber$"+Js,Rn="__reactProps$"+Js,zr="__reactContainer$"+Js,Yd="__reactEvents$"+Js,Pb="__reactListeners$"+Js,Bb="__reactHandles$"+Js,X0="__reactResources$"+Js,yl="__reactMarker$"+Js;function zp(e){delete e[an],delete e[Rn],delete e[Yd],delete e[Pb],delete e[Bb]}function hr(e){var t=e[an];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zr]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=j_(e);e!==null;){if(n=e[an])return n;e=j_(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){if(e=e[an]||e[zr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Q(33))}function Sr(e){var t=e[X0];return t||(t=e[X0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[yl]=!0}var Ev=new Set,Av={};function Ua(e,t){Rr(e,t),Rr(e+"Capture",t)}function Rr(e,t){for(Av[e]=t,e=0;e<t.length;e++)Ev.add(t[e])}var Fb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),W0={},q0={};function zb(e){return qd.call(q0,e)?!0:qd.call(W0,e)?!1:Fb.test(e)?q0[e]=!0:(W0[e]=!0,!1)}function Oc(e,t,n){if(zb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Sc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Wi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function $n(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vb(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zd(e){if(!e._valueTracker){var t=wv(e)?"checked":"value";e._valueTracker=Vb(e,t,""+e[t])}}function Cv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=wv(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function tu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hb=/[\n"\\]/g;function ni(e){return e.replace(Hb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Jd(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$n(t)):e.value!==""+$n(t)&&(e.value=""+$n(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Kd(e,r,$n(t)):n!=null?Kd(e,r,$n(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+$n(o):e.removeAttribute("name")}function Rv(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Zd(e);return}n=n!=null?""+$n(n):"",t=t!=null?""+$n(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Zd(e)}function Kd(e,t,n){t==="number"&&tu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Mr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Dv(e,t,n){if(t!=null&&(t=""+$n(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$n(n):""}function Uv(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Q(92));if(zo(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=$n(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Zd(e)}function Dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Y0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Gb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Nv(e,t,n){if(t!=null&&typeof t!="object")throw Error(Q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Y0(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&Y0(e,a,t[a])}function Vp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pc(e){return Xb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $i(){}var Qd=null;function Hp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fr=null,br=null;function Z0(e){var t=Vr(e);if(t&&(e=t.stateNode)){var n=e[Rn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Jd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ni(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Rn]||null;if(!s)throw Error(Q(90));Jd(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Cv(i)}break t;case"textarea":Dv(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Mr(e,!!n.multiple,t,!1)}}}var hd=!1;function Lv(e,t,n){if(hd)return e(t,n);hd=!0;try{var i=e(t);return i}finally{if(hd=!1,(fr!==null||br!==null)&&(Bu(),fr&&(t=fr,e=br,br=fr=null,Z0(t),e)))for(t=0;t<e.length;t++)Z0(e[t])}}function il(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Rn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var ss=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jd=!1;if(ss)try{sr={},Object.defineProperty(sr,"passive",{get:function(){jd=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{jd=!1}var sr,Ns=null,Gp=null,Bc=null;function Iv(){if(Bc)return Bc;var e,t=Gp,n=t.length,i,s="value"in Ns?Ns.value:Ns.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Bc=s.slice(e,1<i?1-i:void 0)}function Fc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mc(){return!0}function J0(){return!1}function Dn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Mc:J0,this.isPropagationStopped=J0,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mc)},persist:function(){},isPersistent:Mc}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=Dn(Na),Sl=Se({},Na,{view:0,detail:0}),Wb=Dn(Sl),fd,dd,No,wu=Se({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==No&&(No&&e.type==="mousemove"?(fd=e.screenX-No.screenX,dd=e.screenY-No.screenY):dd=fd=0,No=e),fd)},movementY:function(e){return"movementY"in e?e.movementY:dd}}),K0=Dn(wu),qb=Se({},wu,{dataTransfer:0}),Yb=Dn(qb),Zb=Se({},Sl,{relatedTarget:0}),pd=Dn(Zb),Jb=Se({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),Kb=Dn(Jb),Qb=Se({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jb=Dn(Qb),$b=Se({},Na,{data:0}),Q0=Dn($b),t1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=n1[e])?!!t[e]:!1}function kp(){return i1}var s1=Se({},Sl,{key:function(e){if(e.key){var t=t1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kp,charCode:function(e){return e.type==="keypress"?Fc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a1=Dn(s1),r1=Se({},wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j0=Dn(r1),o1=Se({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kp}),l1=Dn(o1),c1=Se({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),u1=Dn(c1),h1=Se({},wu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f1=Dn(h1),d1=Se({},Na,{newState:0,oldState:0}),p1=Dn(d1),m1=[9,13,27,32],Xp=ss&&"CompositionEvent"in window,ko=null;ss&&"documentMode"in document&&(ko=document.documentMode);var g1=ss&&"TextEvent"in window&&!ko,Ov=ss&&(!Xp||ko&&8<ko&&11>=ko),$0=" ",t_=!1;function Pv(e,t){switch(e){case"keyup":return m1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function _1(e,t){switch(e){case"compositionend":return Bv(t);case"keypress":return t.which!==32?null:(t_=!0,$0);case"textInput":return e=t.data,e===$0&&t_?null:e;default:return null}}function v1(e,t){if(dr)return e==="compositionend"||!Xp&&Pv(e,t)?(e=Iv(),Bc=Gp=Ns=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ov&&t.locale!=="ko"?null:t.data;default:return null}}var x1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!x1[e.type]:t==="textarea"}function Fv(e,t,n,i){fr?br?br.push(i):br=[i]:fr=i,t=vu(t,"onChange"),0<t.length&&(n=new Au("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Xo=null,sl=null;function y1(e){Ly(e,0)}function Cu(e){var t=Vo(e);if(Cv(t))return e}function n_(e,t){if(e==="change")return t}var zv=!1;ss&&(ss?(Tc="oninput"in document,Tc||(md=document.createElement("div"),md.setAttribute("oninput","return;"),Tc=typeof md.oninput=="function"),bc=Tc):bc=!1,zv=bc&&(!document.documentMode||9<document.documentMode));var bc,Tc,md;function i_(){Xo&&(Xo.detachEvent("onpropertychange",Vv),sl=Xo=null)}function Vv(e){if(e.propertyName==="value"&&Cu(sl)){var t=[];Fv(t,sl,e,Hp(e)),Lv(y1,t)}}function S1(e,t,n){e==="focusin"?(i_(),Xo=t,sl=n,Xo.attachEvent("onpropertychange",Vv)):e==="focusout"&&i_()}function M1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cu(sl)}function b1(e,t){if(e==="click")return Cu(t)}function T1(e,t){if(e==="input"||e==="change")return Cu(t)}function E1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gn=typeof Object.is=="function"?Object.is:E1;function al(e,t){if(Gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!qd.call(t,s)||!Gn(e[s],t[s]))return!1}return!0}function s_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function a_(e,t){var n=s_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=s_(n)}}function Hv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gv(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=tu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tu(e.document)}return t}function Wp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var A1=ss&&"documentMode"in document&&11>=document.documentMode,pr=null,$d=null,Wo=null,tp=!1;function r_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tp||pr==null||pr!==tu(i)||(i=pr,"selectionStart"in i&&Wp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&al(Wo,i)||(Wo=i,i=vu($d,"onSelect"),0<i.length&&(t=new Au("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=pr)))}function ga(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionrun:ga("Transition","TransitionRun"),transitionstart:ga("Transition","TransitionStart"),transitioncancel:ga("Transition","TransitionCancel"),transitionend:ga("Transition","TransitionEnd")},gd={},kv={};ss&&(kv=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function La(e){if(gd[e])return gd[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kv)return gd[e]=t[n];return e}var Xv=La("animationend"),Wv=La("animationiteration"),qv=La("animationstart"),w1=La("transitionrun"),C1=La("transitionstart"),R1=La("transitioncancel"),Yv=La("transitionend"),Zv=new Map,ep="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ep.push("scrollEnd");function mi(e,t){Zv.set(e,t),Ua(t,[e])}var eu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},jn=[],gr=0,qp=0;function Ru(){for(var e=gr,t=qp=gr=0;t<e;){var n=jn[t];jn[t++]=null;var i=jn[t];jn[t++]=null;var s=jn[t];jn[t++]=null;var a=jn[t];if(jn[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Jv(n,s,a)}}function Du(e,t,n,i){jn[gr++]=e,jn[gr++]=t,jn[gr++]=n,jn[gr++]=i,qp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Yp(e,t,n,i){return Du(e,t,n,i),nu(e)}function Ia(e,t){return Du(e,null,null,t),nu(e)}function Jv(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Vn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function nu(e){if(50<tl)throw tl=0,Mp=null,Error(Q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _r={};function D1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,t,n,i){return new D1(e,t,n,i)}function Zp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function es(e,t){var n=e.alternate;return n===null?(n=Pn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Kv(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Zp(e)&&(r=1);else if(typeof e=="string")r=LT(e,n,Ni.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Gd:return e=Pn(31,n,t,s),e.elementType=Gd,e.lanes=a,e;case cr:return Ma(n.children,s,a,t);case mv:r=8,s|=24;break;case zd:return e=Pn(12,n,t,s|2),e.elementType=zd,e.lanes=a,e;case Vd:return e=Pn(13,n,t,s),e.elementType=Vd,e.lanes=a,e;case Hd:return e=Pn(19,n,t,s),e.elementType=Hd,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ji:r=10;break t;case gv:r=9;break t;case Ip:r=11;break t;case Op:r=14;break t;case Es:r=16,i=null;break t}r=29,n=Error(Q(130,e===null?"null":typeof e,"")),i=null}return t=Pn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ma(e,t,n,i){return e=Pn(7,e,i,t),e.lanes=n,e}function _d(e,t,n){return e=Pn(6,e,null,t),e.lanes=n,e}function Qv(e){var t=Pn(18,null,null,0);return t.stateNode=e,t}function vd(e,t,n){return t=Pn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var o_=new WeakMap;function ii(e,t){if(typeof e=="object"&&e!==null){var n=o_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:G0(t)},o_.set(e,t),t)}return{value:e,source:t,stack:G0(t)}}var vr=[],xr=0,iu=null,rl=0,ti=[],ei=0,Ws=null,Ri=1,Di="";function Ki(e,t){vr[xr++]=rl,vr[xr++]=iu,iu=e,rl=t}function jv(e,t,n){ti[ei++]=Ri,ti[ei++]=Di,ti[ei++]=Ws,Ws=e;var i=Ri;e=Di;var s=32-Vn(i)-1;i&=~(1<<s),n+=1;var a=32-Vn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ri=1<<32-Vn(t)+s|n<<s|i,Di=a+e}else Ri=1<<a|n<<s|i,Di=e}function Jp(e){e.return!==null&&(Ki(e,1),jv(e,1,0))}function Kp(e){for(;e===iu;)iu=vr[--xr],vr[xr]=null,rl=vr[--xr],vr[xr]=null;for(;e===Ws;)Ws=ti[--ei],ti[ei]=null,Di=ti[--ei],ti[ei]=null,Ri=ti[--ei],ti[ei]=null}function $v(e,t){ti[ei++]=Ri,ti[ei++]=Di,ti[ei++]=Ws,Ri=t.id,Di=t.overflow,Ws=e}var rn=null,ye=null,jt=!1,Bs=null,si=!1,np=Error(Q(519));function qs(e){var t=Error(Q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ol(ii(t,e)),np}function l_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[an]=e,t[Rn]=i,n){case"dialog":Wt("cancel",t),Wt("close",t);break;case"iframe":case"object":case"embed":Wt("load",t);break;case"video":case"audio":for(n=0;n<hl.length;n++)Wt(hl[n],t);break;case"source":Wt("error",t);break;case"img":case"image":case"link":Wt("error",t),Wt("load",t);break;case"details":Wt("toggle",t);break;case"input":Wt("invalid",t),Rv(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Wt("invalid",t);break;case"textarea":Wt("invalid",t),Uv(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Oy(t.textContent,n)?(i.popover!=null&&(Wt("beforetoggle",t),Wt("toggle",t)),i.onScroll!=null&&Wt("scroll",t),i.onScrollEnd!=null&&Wt("scrollend",t),i.onClick!=null&&(t.onclick=$i),t=!0):t=!1,t||qs(e,!0)}function c_(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:rn=rn.return}}function ar(e){if(e!==rn)return!1;if(!jt)return c_(e),jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||wp(e.type,e.memoizedProps)),n=!n),n&&ye&&qs(e),c_(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));ye=Q_(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));ye=Q_(e)}else t===27?(t=ye,Ks(e.type)?(e=Up,Up=null,ye=e):ye=t):ye=rn?ri(e.stateNode.nextSibling):null;return!0}function Aa(){ye=rn=null,jt=!1}function xd(){var e=Bs;return e!==null&&(wn===null?wn=e:wn.push.apply(wn,e),Bs=null),e}function ol(e){Bs===null?Bs=[e]:Bs.push(e)}var ip=Li(null),Oa=null,ts=null;function ws(e,t,n){ge(ip,t._currentValue),t._currentValue=n}function ns(e){e._currentValue=ip.current,$e(ip)}function sp(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ap(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),sp(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Q(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),sp(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Hr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Q(387));if(r=r.memoizedProps,r!==null){var o=s.type;Gn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Kc.current){if(r=s.alternate,r===null)throw Error(Q(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(dl):e=[dl])}s=s.return}e!==null&&ap(t,e,n,i),t.flags|=262144}function su(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){Oa=e,ts=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function on(e){return tx(Oa,e)}function Ec(e,t){return Oa===null&&wa(e),tx(e,t)}function tx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ts===null){if(e===null)throw Error(Q(308));ts=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ts=ts.next=t;return n}var U1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},N1=qe.unstable_scheduleCallback,L1=qe.unstable_NormalPriority,He={$$typeof:ji,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qp(){return{controller:new U1,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&N1(L1,function(){e.controller.abort()})}var qo=null,rp=0,Ur=0,Tr=null;function I1(e,t){if(qo===null){var n=qo=[];rp=0,Ur=Mm(),Tr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return rp++,t.then(u_,u_),t}function u_(){if(--rp===0&&qo!==null){Tr!==null&&(Tr.status="fulfilled");var e=qo;qo=null,Ur=0,Tr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function O1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var h_=Nt.S;Nt.S=function(e,t){py=Fn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&I1(e,t),h_!==null&&h_(e,t)};var ba=Li(null);function jp(){var e=ba.current;return e!==null?e:de.pooledCache}function Vc(e,t){t===null?ge(ba,ba.current):ge(ba,t.pool)}function ex(){var e=jp();return e===null?null:{parent:He._currentValue,pool:e}}var Gr=Error(Q(460)),$p=Error(Q(474)),Uu=Error(Q(542)),au={then:function(){}};function f_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($i,$i),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,p_(e),e;default:if(typeof t.status=="string")t.then($i,$i);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(Q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,p_(e),e}throw Ta=t,Gr}}function xa(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ta=n,Gr):n}}var Ta=null;function d_(){if(Ta===null)throw Error(Q(459));var e=Ta;return Ta=null,e}function p_(e){if(e===Gr||e===Uu)throw Error(Q(483))}var Er=null,ll=0;function Ac(e){var t=ll;return ll+=1,Er===null&&(Er=[]),nx(Er,e,t)}function Lo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function wc(e,t){throw t.$$typeof===Sb?Error(Q(525)):(e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ix(e){function t(h,v){if(e){var S=h.deletions;S===null?(h.deletions=[v],h.flags|=16):S.push(v)}}function n(h,v){if(!e)return null;for(;v!==null;)t(h,v),v=v.sibling;return null}function i(h){for(var v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function s(h,v){return h=es(h,v),h.index=0,h.sibling=null,h}function a(h,v,S){return h.index=S,e?(S=h.alternate,S!==null?(S=S.index,S<v?(h.flags|=67108866,v):S):(h.flags|=67108866,v)):(h.flags|=1048576,v)}function r(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function o(h,v,S,x){return v===null||v.tag!==6?(v=_d(S,h.mode,x),v.return=h,v):(v=s(v,S),v.return=h,v)}function l(h,v,S,x){var T=S.type;return T===cr?f(h,v,S.props.children,x,S.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Es&&xa(T)===v.type)?(v=s(v,S.props),Lo(v,S),v.return=h,v):(v=zc(S.type,S.key,S.props,null,h.mode,x),Lo(v,S),v.return=h,v)}function c(h,v,S,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=vd(S,h.mode,x),v.return=h,v):(v=s(v,S.children||[]),v.return=h,v)}function f(h,v,S,x,T){return v===null||v.tag!==7?(v=Ma(S,h.mode,x,T),v.return=h,v):(v=s(v,S),v.return=h,v)}function p(h,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=_d(""+v,h.mode,S),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _c:return S=zc(v.type,v.key,v.props,null,h.mode,S),Lo(S,v),S.return=h,S;case Fo:return v=vd(v,h.mode,S),v.return=h,v;case Es:return v=xa(v),p(h,v,S)}if(zo(v)||Uo(v))return v=Ma(v,h.mode,S,null),v.return=h,v;if(typeof v.then=="function")return p(h,Ac(v),S);if(v.$$typeof===ji)return p(h,Ec(h,v),S);wc(h,v)}return null}function u(h,v,S,x){var T=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return T!==null?null:o(h,v,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _c:return S.key===T?l(h,v,S,x):null;case Fo:return S.key===T?c(h,v,S,x):null;case Es:return S=xa(S),u(h,v,S,x)}if(zo(S)||Uo(S))return T!==null?null:f(h,v,S,x,null);if(typeof S.then=="function")return u(h,v,Ac(S),x);if(S.$$typeof===ji)return u(h,v,Ec(h,S),x);wc(h,S)}return null}function d(h,v,S,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return h=h.get(S)||null,o(v,h,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _c:return h=h.get(x.key===null?S:x.key)||null,l(v,h,x,T);case Fo:return h=h.get(x.key===null?S:x.key)||null,c(v,h,x,T);case Es:return x=xa(x),d(h,v,S,x,T)}if(zo(x)||Uo(x))return h=h.get(S)||null,f(v,h,x,T,null);if(typeof x.then=="function")return d(h,v,S,Ac(x),T);if(x.$$typeof===ji)return d(h,v,S,Ec(v,x),T);wc(v,x)}return null}function _(h,v,S,x){for(var T=null,A=null,w=v,y=v=0,E=null;w!==null&&y<S.length;y++){w.index>y?(E=w,w=null):E=w.sibling;var R=u(h,w,S[y],x);if(R===null){w===null&&(w=E);break}e&&w&&R.alternate===null&&t(h,w),v=a(R,v,y),A===null?T=R:A.sibling=R,A=R,w=E}if(y===S.length)return n(h,w),jt&&Ki(h,y),T;if(w===null){for(;y<S.length;y++)w=p(h,S[y],x),w!==null&&(v=a(w,v,y),A===null?T=w:A.sibling=w,A=w);return jt&&Ki(h,y),T}for(w=i(w);y<S.length;y++)E=d(w,h,y,S[y],x),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?y:E.key),v=a(E,v,y),A===null?T=E:A.sibling=E,A=E);return e&&w.forEach(function(D){return t(h,D)}),jt&&Ki(h,y),T}function b(h,v,S,x){if(S==null)throw Error(Q(151));for(var T=null,A=null,w=v,y=v=0,E=null,R=S.next();w!==null&&!R.done;y++,R=S.next()){w.index>y?(E=w,w=null):E=w.sibling;var D=u(h,w,R.value,x);if(D===null){w===null&&(w=E);break}e&&w&&D.alternate===null&&t(h,w),v=a(D,v,y),A===null?T=D:A.sibling=D,A=D,w=E}if(R.done)return n(h,w),jt&&Ki(h,y),T;if(w===null){for(;!R.done;y++,R=S.next())R=p(h,R.value,x),R!==null&&(v=a(R,v,y),A===null?T=R:A.sibling=R,A=R);return jt&&Ki(h,y),T}for(w=i(w);!R.done;y++,R=S.next())R=d(w,h,y,R.value,x),R!==null&&(e&&R.alternate!==null&&w.delete(R.key===null?y:R.key),v=a(R,v,y),A===null?T=R:A.sibling=R,A=R);return e&&w.forEach(function(O){return t(h,O)}),jt&&Ki(h,y),T}function m(h,v,S,x){if(typeof S=="object"&&S!==null&&S.type===cr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case _c:t:{for(var T=S.key;v!==null;){if(v.key===T){if(T=S.type,T===cr){if(v.tag===7){n(h,v.sibling),x=s(v,S.props.children),x.return=h,h=x;break t}}else if(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Es&&xa(T)===v.type){n(h,v.sibling),x=s(v,S.props),Lo(x,S),x.return=h,h=x;break t}n(h,v);break}else t(h,v);v=v.sibling}S.type===cr?(x=Ma(S.props.children,h.mode,x,S.key),x.return=h,h=x):(x=zc(S.type,S.key,S.props,null,h.mode,x),Lo(x,S),x.return=h,h=x)}return r(h);case Fo:t:{for(T=S.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(h,v.sibling),x=s(v,S.children||[]),x.return=h,h=x;break t}else{n(h,v);break}else t(h,v);v=v.sibling}x=vd(S,h.mode,x),x.return=h,h=x}return r(h);case Es:return S=xa(S),m(h,v,S,x)}if(zo(S))return _(h,v,S,x);if(Uo(S)){if(T=Uo(S),typeof T!="function")throw Error(Q(150));return S=T.call(S),b(h,v,S,x)}if(typeof S.then=="function")return m(h,v,Ac(S),x);if(S.$$typeof===ji)return m(h,v,Ec(h,S),x);wc(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(n(h,v.sibling),x=s(v,S),x.return=h,h=x):(n(h,v),x=_d(S,h.mode,x),x.return=h,h=x),r(h)):n(h,v)}return function(h,v,S,x){try{ll=0;var T=m(h,v,S,x);return Er=null,T}catch(w){if(w===Gr||w===Uu)throw w;var A=Pn(29,w,null,h.mode);return A.lanes=x,A.return=h,A}}}var Ca=ix(!0),sx=ix(!1),As=!1;function tm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function op(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ne&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=nu(e),Jv(e,null,n),t}return Du(e,i,t,n),nu(e)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Mv(e,n)}}function yd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lp=!1;function Zo(){if(lp){var e=Tr;if(e!==null)throw e}}function Jo(e,t,n,i){lp=!1;var s=e.updateQueue;As=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(Zt&u)===u:(i&u)===u){u!==0&&u===Ur&&(lp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,b=o;u=t;var m=n;switch(b.tag){case 1:if(_=b.payload,typeof _=="function"){p=_.call(m,p,u);break t}p=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=b.payload,u=typeof _=="function"?_.call(m,p,u):_,u==null)break t;p=Se({},p,u);break t;case 2:As=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),Zs|=r,e.lanes=r,e.memoizedState=p}}function ax(e,t){if(typeof e!="function")throw Error(Q(191,e));e.call(t)}function rx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ax(n[e],t)}var Nr=Li(null),ru=Li(0);function m_(e,t){e=ls,ge(ru,e),ge(Nr,t),ls=e|t.baseLanes}function cp(){ge(ru,ls),ge(Nr,Nr.current)}function em(){ls=ru.current,$e(Nr),$e(ru)}var kn=Li(null),ai=null;function Cs(e){var t=e.alternate;ge(Ie,Ie.current&1),ge(kn,e),ai===null&&(t===null||Nr.current!==null||t.memoizedState!==null)&&(ai=e)}function up(e){ge(Ie,Ie.current),ge(kn,e),ai===null&&(ai=e)}function ox(e){e.tag===22?(ge(Ie,Ie.current),ge(kn,e),ai===null&&(ai=e)):Rs(e)}function Rs(){ge(Ie,Ie.current),ge(kn,kn.current)}function On(e){$e(kn),ai===e&&(ai=null),$e(Ie)}var Ie=Li(0);function ou(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Rp(n)||Dp(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var as=0,zt=null,ue=null,ze=null,lu=!1,Ar=!1,Ra=!1,cu=0,cl=0,wr=null,P1=0;function De(){throw Error(Q(321))}function nm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function im(e,t,n,i,s,a){return as=a,zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nt.H=e===null||e.memoizedState===null?Fx:pm,Ra=!1,a=n(i,s),Ra=!1,Ar&&(a=cx(t,n,i,s)),lx(e),a}function lx(e){Nt.H=ul;var t=ue!==null&&ue.next!==null;if(as=0,ze=ue=zt=null,lu=!1,cl=0,wr=null,t)throw Error(Q(300));e===null||Ge||(e=e.dependencies,e!==null&&su(e)&&(Ge=!0))}function cx(e,t,n,i){zt=e;var s=0;do{if(Ar&&(wr=null),cl=0,Ar=!1,25<=s)throw Error(Q(301));if(s+=1,ze=ue=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Nt.H=zx,a=t(n,i)}while(Ar);return a}function B1(){var e=Nt.H,t=e.useState()[0];return t=typeof t.then=="function"?bl(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(zt.flags|=1024),t}function sm(){var e=cu!==0;return cu=0,e}function am(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function rm(e){if(lu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lu=!1}as=0,ze=ue=zt=null,Ar=!1,cl=cu=0,wr=null}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?zt.memoizedState=ze=e:ze=ze.next=e,ze}function Oe(){if(ue===null){var e=zt.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=ze===null?zt.memoizedState:ze.next;if(t!==null)ze=t,ue=e;else{if(e===null)throw zt.alternate===null?Error(Q(467)):Error(Q(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},ze===null?zt.memoizedState=ze=e:ze=ze.next=e}return ze}function Nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(e){var t=cl;return cl+=1,wr===null&&(wr=[]),e=nx(wr,e,t),t=zt,(ze===null?t.memoizedState:ze.next)===null&&(t=t.alternate,Nt.H=t===null||t.memoizedState===null?Fx:pm),e}function Lu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bl(e);if(e.$$typeof===ji)return on(e)}throw Error(Q(438,String(e)))}function om(e){var t=null,n=zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Nu(),zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Mb;return t.index++,n}function rs(e,t){return typeof t=="function"?t(e):t}function Hc(e){var t=Oe();return lm(t,ue,e)}function lm(e,t,n){var i=e.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Zt&p)===p:(as&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Ur&&(f=!0);else if((as&u)===u){c=c.next,u===Ur&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,zt.lanes|=u,Zs|=u;p=c.action,Ra&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,zt.lanes|=p,Zs|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Gn(a,e.memoizedState)&&(Ge=!0,f&&(n=Tr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Sd(e){var t=Oe(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Gn(a,t.memoizedState)||(Ge=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function ux(e,t,n){var i=zt,s=Oe(),a=jt;if(a){if(n===void 0)throw Error(Q(407));n=n()}else n=t();var r=!Gn((ue||s).memoizedState,n);if(r&&(s.memoizedState=n,Ge=!0),s=s.queue,cm(dx.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||ze!==null&&ze.memoizedState.tag&1){if(i.flags|=2048,Lr(9,{destroy:void 0},fx.bind(null,i,s,n,t),null),de===null)throw Error(Q(349));a||(as&127)!==0||hx(i,t,n)}return n}function hx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=zt.updateQueue,t===null?(t=Nu(),zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fx(e,t,n,i){t.value=n,t.getSnapshot=i,px(t)&&mx(e)}function dx(e,t,n){return n(function(){px(t)&&mx(e)})}function px(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch{return!0}}function mx(e){var t=Ia(e,2);t!==null&&Cn(t,e,2)}function hp(e){var t=xn();if(typeof e=="function"){var n=e;if(e=n(),Ra){Us(!0);try{n()}finally{Us(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:e},t}function gx(e,t,n,i){return e.baseState=n,lm(e,ue,typeof i=="function"?i:rs)}function F1(e,t,n,i,s){if(Ou(e))throw Error(Q(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Nt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,_x(t,a)):(a.next=n.next,t.pending=n.next=a)}}function _x(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Nt.T,r={};Nt.T=r;try{var o=n(s,i),l=Nt.S;l!==null&&l(r,o),g_(e,t,o)}catch(c){fp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Nt.T=a}}else try{a=n(s,i),g_(e,t,a)}catch(c){fp(e,t,c)}}function g_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){__(e,t,i)},function(i){return fp(e,t,i)}):__(e,t,n)}function __(e,t,n){t.status="fulfilled",t.value=n,vx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_x(e,n)))}function fp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,vx(t),t=t.next;while(t!==i)}e.action=null}function vx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xx(e,t){return t}function v_(e,t){if(jt){var n=de.formState;if(n!==null){t:{var i=zt;if(jt){if(ye){e:{for(var s=ye,a=si;s.nodeType!==8;){if(!a){s=null;break e}if(s=ri(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){ye=ri(s.nextSibling),i=s.data==="F!";break t}}qs(i)}i=!1}i&&(t=n[0])}}return n=xn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xx,lastRenderedState:t},n.queue=i,n=Ox.bind(null,zt,i),i.dispatch=n,i=hp(!1),a=dm.bind(null,zt,!1,i.queue),i=xn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=F1.bind(null,zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function x_(e){var t=Oe();return yx(t,ue,e)}function yx(e,t,n){if(t=lm(e,t,xx)[0],e=Hc(rs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=bl(t)}catch(r){throw r===Gr?Uu:r}else i=t;t=Oe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(zt.flags|=2048,Lr(9,{destroy:void 0},z1.bind(null,s,n),null)),[i,a,e]}function z1(e,t){e.action=t}function y_(e){var t=Oe(),n=ue;if(n!==null)return yx(t,n,e);Oe(),t=t.memoizedState,n=Oe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Lr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=zt.updateQueue,t===null&&(t=Nu(),zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Sx(){return Oe().memoizedState}function Gc(e,t,n,i){var s=xn();zt.flags|=e,s.memoizedState=Lr(1|t,{destroy:void 0},n,i===void 0?null:i)}function Iu(e,t,n,i){var s=Oe();i=i===void 0?null:i;var a=s.memoizedState.inst;ue!==null&&i!==null&&nm(i,ue.memoizedState.deps)?s.memoizedState=Lr(t,a,n,i):(zt.flags|=e,s.memoizedState=Lr(1|t,a,n,i))}function S_(e,t){Gc(8390656,8,e,t)}function cm(e,t){Iu(2048,8,e,t)}function V1(e){zt.flags|=4;var t=zt.updateQueue;if(t===null)t=Nu(),zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Mx(e){var t=Oe().memoizedState;return V1({ref:t,nextImpl:e}),function(){if((ne&2)!==0)throw Error(Q(440));return t.impl.apply(void 0,arguments)}}function bx(e,t){return Iu(4,2,e,t)}function Tx(e,t){return Iu(4,4,e,t)}function Ex(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ax(e,t,n){n=n!=null?n.concat([e]):null,Iu(4,4,Ex.bind(null,t,e),n)}function um(){}function wx(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&nm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Cx(e,t){var n=Oe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&nm(t,i[1]))return i[0];if(i=e(),Ra){Us(!0);try{e()}finally{Us(!1)}}return n.memoizedState=[i,t],i}function hm(e,t,n){return n===void 0||(as&1073741824)!==0&&(Zt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=gy(),zt.lanes|=e,Zs|=e,n)}function Rx(e,t,n,i){return Gn(n,t)?n:Nr.current!==null?(e=hm(e,n,i),Gn(e,t)||(Ge=!0),e):(as&42)===0||(as&1073741824)!==0&&(Zt&261930)===0?(Ge=!0,e.memoizedState=n):(e=gy(),zt.lanes|=e,Zs|=e,t)}function Dx(e,t,n,i,s){var a=ie.p;ie.p=a!==0&&8>a?a:8;var r=Nt.T,o={};Nt.T=o,dm(e,!1,t,n);try{var l=s(),c=Nt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=O1(l,i);Ko(e,t,f,Hn(e))}else Ko(e,t,i,Hn(e))}catch(p){Ko(e,t,{then:function(){},status:"rejected",reason:p},Hn())}finally{ie.p=a,r!==null&&o.types!==null&&(r.types=o.types),Nt.T=r}}function H1(){}function dp(e,t,n,i){if(e.tag!==5)throw Error(Q(476));var s=Ux(e).queue;Dx(e,s,t,Sa,n===null?H1:function(){return Nx(e),n(i)})}function Ux(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Sa,baseState:Sa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:Sa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nx(e){var t=Ux(e);t.next===null&&(t=e.alternate.memoizedState),Ko(e,t.next.queue,{},Hn())}function fm(){return on(dl)}function Lx(){return Oe().memoizedState}function Ix(){return Oe().memoizedState}function G1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Hn();e=Fs(n);var i=zs(t,e,n);i!==null&&(Cn(i,t,n),Yo(i,t,n)),t={cache:Qp()},e.payload=t;return}t=t.return}}function k1(e,t,n){var i=Hn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ou(e)?Px(t,n):(n=Yp(e,t,n,i),n!==null&&(Cn(n,e,i),Bx(n,t,i)))}function Ox(e,t,n){var i=Hn();Ko(e,t,n,i)}function Ko(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ou(e))Px(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Gn(o,r))return Du(e,t,s,0),de===null&&Ru(),!1}catch{}if(n=Yp(e,t,s,i),n!==null)return Cn(n,e,i),Bx(n,t,i),!0}return!1}function dm(e,t,n,i){if(i={lane:2,revertLane:Mm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ou(e)){if(t)throw Error(Q(479))}else t=Yp(e,n,i,2),t!==null&&Cn(t,e,2)}function Ou(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function Px(e,t){Ar=lu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Mv(e,n)}}var ul={readContext:on,use:Lu,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};ul.useEffectEvent=De;var Fx={readContext:on,use:Lu,useCallback:function(e,t){return xn().memoizedState=[e,t===void 0?null:t],e},useContext:on,useEffect:S_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Gc(4194308,4,Ex.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gc(4194308,4,e,t)},useInsertionEffect:function(e,t){Gc(4,2,e,t)},useMemo:function(e,t){var n=xn();t=t===void 0?null:t;var i=e();if(Ra){Us(!0);try{e()}finally{Us(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=xn();if(n!==void 0){var s=n(t);if(Ra){Us(!0);try{n(t)}finally{Us(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=k1.bind(null,zt,e),[i.memoizedState,e]},useRef:function(e){var t=xn();return e={current:e},t.memoizedState=e},useState:function(e){e=hp(e);var t=e.queue,n=Ox.bind(null,zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:um,useDeferredValue:function(e,t){var n=xn();return hm(n,e,t)},useTransition:function(){var e=hp(!1);return e=Dx.bind(null,zt,e.queue,!0,!1),xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=zt,s=xn();if(jt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),de===null)throw Error(Q(349));(Zt&127)!==0||hx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,S_(dx.bind(null,i,a,e),[e]),i.flags|=2048,Lr(9,{destroy:void 0},fx.bind(null,i,a,n,t),null),n},useId:function(){var e=xn(),t=de.identifierPrefix;if(jt){var n=Di,i=Ri;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=cu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=P1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:fm,useFormState:v_,useActionState:v_,useOptimistic:function(e){var t=xn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=dm.bind(null,zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:om,useCacheRefresh:function(){return xn().memoizedState=G1.bind(null,zt)},useEffectEvent:function(e){var t=xn(),n={impl:e};return t.memoizedState=n,function(){if((ne&2)!==0)throw Error(Q(440));return n.impl.apply(void 0,arguments)}}},pm={readContext:on,use:Lu,useCallback:wx,useContext:on,useEffect:cm,useImperativeHandle:Ax,useInsertionEffect:bx,useLayoutEffect:Tx,useMemo:Cx,useReducer:Hc,useRef:Sx,useState:function(){return Hc(rs)},useDebugValue:um,useDeferredValue:function(e,t){var n=Oe();return Rx(n,ue.memoizedState,e,t)},useTransition:function(){var e=Hc(rs)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:bl(e),t]},useSyncExternalStore:ux,useId:Lx,useHostTransitionStatus:fm,useFormState:x_,useActionState:x_,useOptimistic:function(e,t){var n=Oe();return gx(n,ue,e,t)},useMemoCache:om,useCacheRefresh:Ix};pm.useEffectEvent=Mx;var zx={readContext:on,use:Lu,useCallback:wx,useContext:on,useEffect:cm,useImperativeHandle:Ax,useInsertionEffect:bx,useLayoutEffect:Tx,useMemo:Cx,useReducer:Sd,useRef:Sx,useState:function(){return Sd(rs)},useDebugValue:um,useDeferredValue:function(e,t){var n=Oe();return ue===null?hm(n,e,t):Rx(n,ue.memoizedState,e,t)},useTransition:function(){var e=Sd(rs)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:bl(e),t]},useSyncExternalStore:ux,useId:Lx,useHostTransitionStatus:fm,useFormState:y_,useActionState:y_,useOptimistic:function(e,t){var n=Oe();return ue!==null?gx(n,ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:om,useCacheRefresh:Ix};zx.useEffectEvent=Mx;function Md(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Hn(),s=Fs(i);s.payload=t,n!=null&&(s.callback=n),t=zs(e,s,i),t!==null&&(Cn(t,e,i),Yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Hn(),s=Fs(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=zs(e,s,i),t!==null&&(Cn(t,e,i),Yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Hn(),i=Fs(n);i.tag=2,t!=null&&(i.callback=t),t=zs(e,i,n),t!==null&&(Cn(t,e,n),Yo(t,e,n))}};function M_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!al(n,i)||!al(s,a):!0}function b_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&pp.enqueueReplaceState(t,t.state,null)}function Da(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Se({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Vx(e){eu(e)}function Hx(e){console.error(e)}function Gx(e){eu(e)}function uu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function T_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function mp(e,t,n){return n=Fs(n),n.tag=3,n.payload={element:null},n.callback=function(){uu(e,t)},n}function kx(e){return e=Fs(e),e.tag=3,e}function Xx(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){T_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){T_(t,n,i),typeof s!="function"&&(Vs===null?Vs=new Set([this]):Vs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function X1(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Hr(t,n,s,!0),n=kn.current,n!==null){switch(n.tag){case 31:case 13:return ai===null?mu():n.alternate===null&&Ue===0&&(Ue=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===au?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Ld(e,i,s)),!1;case 22:return n.flags|=65536,i===au?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Ld(e,i,s)),!1}throw Error(Q(435,n.tag))}return Ld(e,i,s),mu(),!1}if(jt)return t=kn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==np&&(e=Error(Q(422),{cause:i}),ol(ii(e,n)))):(i!==np&&(t=Error(Q(423),{cause:i}),ol(ii(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=ii(i,n),s=mp(e.stateNode,i,s),yd(e,s),Ue!==4&&(Ue=2)),!1;var a=Error(Q(520),{cause:i});if(a=ii(a,n),$o===null?$o=[a]:$o.push(a),Ue!==4&&(Ue=2),t===null)return!0;i=ii(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=mp(n.stateNode,i,e),yd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Vs===null||!Vs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=kx(s),Xx(s,e,n,i),yd(n,s),!1}n=n.return}while(n!==null);return!1}var mm=Error(Q(461)),Ge=!1;function sn(e,t,n,i){t.child=e===null?sx(t,null,n,i):Ca(t,e.child,n,i)}function E_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return wa(t),i=im(e,t,n,r,a,s),o=sm(),e!==null&&!Ge?(am(e,t,s),os(e,t,s)):(jt&&o&&Jp(t),t.flags|=1,sn(e,t,i,s),t.child)}function A_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Zp(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Wx(e,t,a,i,s)):(e=zc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!gm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(r,i)&&e.ref===t.ref)return os(e,t,s)}return t.flags|=1,e=es(a,i),e.ref=t.ref,e.return=t,t.child=e}function Wx(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(al(a,i)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=i=a,gm(e,s))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,os(e,t,s)}return gp(e,t,n,i,s)}function qx(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return w_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vc(t,a!==null?a.cachePool:null),a!==null?m_(t,a):cp(),ox(t);else return i=t.lanes=536870912,w_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Vc(t,a.cachePool),m_(t,a),Rs(t),t.memoizedState=null):(e!==null&&Vc(t,null),cp(),Rs(t));return sn(e,t,s,n),t.child}function Ho(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function w_(e,t,n,i,s){var a=jp();return a=a===null?null:{parent:He._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Vc(t,null),cp(),ox(t),e!==null&&Hr(e,t,i,!0),t.childLanes=s,null}function kc(e,t){return t=hu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function C_(e,t,n){return Ca(t,e.child,null,n),e=kc(t,t.pendingProps),e.flags|=2,On(t),t.memoizedState=null,e}function W1(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(jt){if(i.mode==="hidden")return e=kc(t,i),t.lanes=536870912,Ho(null,e);if(up(t),(e=ye)?(e=Fy(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ws!==null?{id:Ri,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},n=Qv(e),n.return=t,t.child=n,rn=t,ye=null)):e=null,e===null)throw qs(t);return t.lanes=536870912,null}return kc(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(up(t),s)if(t.flags&256)t.flags&=-257,t=C_(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Q(558));else if(Ge||Hr(e,t,n,!1),s=(n&e.childLanes)!==0,Ge||s){if(i=de,i!==null&&(r=bv(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Ia(e,r),Cn(i,e,r),mm;mu(),t=C_(e,t,n)}else e=a.treeContext,ye=ri(r.nextSibling),rn=t,jt=!0,Bs=null,si=!1,e!==null&&$v(t,e),t=kc(t,i),t.flags|=4096;return t}return e=es(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Xc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gp(e,t,n,i,s){return wa(t),n=im(e,t,n,i,void 0,s),i=sm(),e!==null&&!Ge?(am(e,t,s),os(e,t,s)):(jt&&i&&Jp(t),t.flags|=1,sn(e,t,n,s),t.child)}function R_(e,t,n,i,s,a){return wa(t),t.updateQueue=null,n=cx(t,i,n,s),lx(e),i=sm(),e!==null&&!Ge?(am(e,t,a),os(e,t,a)):(jt&&i&&Jp(t),t.flags|=1,sn(e,t,n,a),t.child)}function D_(e,t,n,i,s){if(wa(t),t.stateNode===null){var a=_r,r=n.contextType;typeof r=="object"&&r!==null&&(a=on(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=pp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},tm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?on(r):_r,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Md(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&pp.enqueueReplaceState(a,a.state,null),Jo(t,i,a,s),Zo(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Da(n,o);a.props=l;var c=a.context,f=n.contextType;r=_r,typeof f=="object"&&f!==null&&(r=on(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&b_(t,a,i,r),As=!1;var u=t.memoizedState;a.state=u,Jo(t,i,a,s),Zo(),c=t.memoizedState,o||u!==c||As?(typeof p=="function"&&(Md(t,n,p,i),c=t.memoizedState),(l=As||M_(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,op(e,t),r=t.memoizedProps,f=Da(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=_r,typeof c=="object"&&c!==null&&(l=on(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&b_(t,a,i,l),As=!1,u=t.memoizedState,a.state=u,Jo(t,i,a,s),Zo();var d=t.memoizedState;r!==p||u!==d||As||e!==null&&e.dependencies!==null&&su(e.dependencies)?(typeof o=="function"&&(Md(t,n,o,i),d=t.memoizedState),(f=As||M_(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&su(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Xc(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Ca(t,e.child,null,s),t.child=Ca(t,null,n,s)):sn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=os(e,t,s),e}function U_(e,t,n,i){return Aa(),t.flags|=256,sn(e,t,n,i),t.child}var bd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Td(e){return{baseLanes:e,cachePool:ex()}}function Ed(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Bn),e}function Yx(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(jt){if(s?Cs(t):Rs(t),(e=ye)?(e=Fy(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ws!==null?{id:Ri,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},n=Qv(e),n.return=t,t.child=n,rn=t,ye=null)):e=null,e===null)throw qs(t);return Dp(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Rs(t),s=t.mode,o=hu({mode:"hidden",children:o},s),i=Ma(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Td(n),i.childLanes=Ed(e,r,n),t.memoizedState=bd,Ho(null,i)):(Cs(t),_p(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Cs(t),t.flags&=-257,t=Ad(e,t,n)):t.memoizedState!==null?(Rs(t),t.child=e.child,t.flags|=128,t=null):(Rs(t),o=i.fallback,s=t.mode,i=hu({mode:"visible",children:i.children},s),o=Ma(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Ca(t,e.child,null,n),i=t.child,i.memoizedState=Td(n),i.childLanes=Ed(e,r,n),t.memoizedState=bd,t=Ho(null,i));else if(Cs(t),Dp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(Q(419)),i.stack="",i.digest=r,ol({value:i,source:null,stack:null}),t=Ad(e,t,n)}else if(Ge||Hr(e,t,n,!1),r=(n&e.childLanes)!==0,Ge||r){if(r=de,r!==null&&(i=bv(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Ia(e,i),Cn(r,e,i),mm;Rp(o)||mu(),t=Ad(e,t,n)}else Rp(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ye=ri(o.nextSibling),rn=t,jt=!0,Bs=null,si=!1,e!==null&&$v(t,e),t=_p(t,i.children),t.flags|=4096);return t}return s?(Rs(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=es(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=es(c,o):(o=Ma(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Ho(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Td(n):(s=o.cachePool,s!==null?(l=He._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=ex(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Ed(e,r,n),t.memoizedState=bd,Ho(e.child,i)):(Cs(t),n=e.child,e=n.sibling,n=es(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function _p(e,t){return t=hu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hu(e,t){return e=Pn(22,e,null,t),e.lanes=0,e}function Ad(e,t,n){return Ca(t,e.child,null,n),e=_p(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function N_(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),sp(e.return,t,n)}function wd(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Zx(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Ie.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ge(Ie,r),sn(e,t,i,n),i=jt?rl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&N_(e,n,t);else if(e.tag===19)N_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&ou(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),wd(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ou(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}wd(t,!0,n,null,a,i);break;case"together":wd(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function os(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zs|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Hr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=es(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=es(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&su(e)))}function q1(e,t,n){switch(t.tag){case 3:Qc(t,t.stateNode.containerInfo),ws(t,He,e.memoizedState.cache),Aa();break;case 27:case 5:Wd(t);break;case 4:Qc(t,t.stateNode.containerInfo);break;case 10:ws(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,up(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Cs(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Yx(e,t,n):(Cs(t),e=os(e,t,n),e!==null?e.sibling:null);Cs(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Hr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Zx(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(Ie,Ie.current),i)break;return null;case 22:return t.lanes=0,qx(e,t,n,t.pendingProps);case 24:ws(t,He,e.memoizedState.cache)}return os(e,t,n)}function Jx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!gm(e,n)&&(t.flags&128)===0)return Ge=!1,q1(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,jt&&(t.flags&1048576)!==0&&jv(t,rl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=xa(t.elementType),t.type=e,typeof e=="function")Zp(e)?(i=Da(e,i),t.tag=1,t=D_(null,t,e,i,n)):(t.tag=0,t=gp(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Ip){t.tag=11,t=E_(null,t,e,i,n);break t}else if(s===Op){t.tag=14,t=A_(null,t,e,i,n);break t}}throw t=kd(e)||e,Error(Q(306,t,""))}}return t;case 0:return gp(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Da(i,t.pendingProps),D_(e,t,i,s,n);case 3:t:{if(Qc(t,t.stateNode.containerInfo),e===null)throw Error(Q(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,op(e,t),Jo(t,i,null,n);var r=t.memoizedState;if(i=r.cache,ws(t,He,i),i!==a.cache&&ap(t,[He],n,!0),Zo(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=U_(e,t,i,n);break t}else if(i!==s){s=ii(Error(Q(424)),t),ol(s),t=U_(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ye=ri(e.firstChild),rn=t,jt=!0,Bs=null,si=!0,n=sx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Aa(),i===s){t=os(e,t,n);break t}sn(e,t,i,n)}t=t.child}return t;case 26:return Xc(e,t),e===null?(n=tv(t.type,null,t.pendingProps,null))?t.memoizedState=n:jt||(n=t.type,e=t.pendingProps,i=xu(Ps.current).createElement(n),i[an]=t,i[Rn]=e,ln(i,n,e),je(i),t.stateNode=i):t.memoizedState=tv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Wd(t),e===null&&jt&&(i=t.stateNode=zy(t.type,t.pendingProps,Ps.current),rn=t,si=!0,s=ye,Ks(t.type)?(Up=s,ye=ri(i.firstChild)):ye=s),sn(e,t,t.pendingProps.children,n),Xc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&jt&&((s=i=ye)&&(i=yT(i,t.type,t.pendingProps,si),i!==null?(t.stateNode=i,rn=t,ye=ri(i.firstChild),si=!1,s=!0):s=!1),s||qs(t)),Wd(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,wp(s,a)?i=null:r!==null&&wp(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=im(e,t,B1,null,null,n),dl._currentValue=s),Xc(e,t),sn(e,t,i,n),t.child;case 6:return e===null&&jt&&((e=n=ye)&&(n=ST(n,t.pendingProps,si),n!==null?(t.stateNode=n,rn=t,ye=null,e=!0):e=!1),e||qs(t)),null;case 13:return Yx(e,t,n);case 4:return Qc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ca(t,null,i,n):sn(e,t,i,n),t.child;case 11:return E_(e,t,t.type,t.pendingProps,n);case 7:return sn(e,t,t.pendingProps,n),t.child;case 8:return sn(e,t,t.pendingProps.children,n),t.child;case 12:return sn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ws(t,t.type,i.value),sn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,wa(t),s=on(s),i=i(s),t.flags|=1,sn(e,t,i,n),t.child;case 14:return A_(e,t,t.type,t.pendingProps,n);case 15:return Wx(e,t,t.type,t.pendingProps,n);case 19:return Zx(e,t,n);case 31:return W1(e,t,n);case 22:return qx(e,t,n,t.pendingProps);case 24:return wa(t),i=on(He),e===null?(s=jp(),s===null&&(s=de,a=Qp(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},tm(t),ws(t,He,s)):((e.lanes&n)!==0&&(op(e,t),Jo(t,null,null,n),Zo()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ws(t,He,i)):(i=a.cache,ws(t,He,i),i!==s.cache&&ap(t,[He],n,!0))),sn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Q(156,t.tag))}function qi(e){e.flags|=4}function Cd(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(xy())e.flags|=8192;else throw Ta=au,$p}else e.flags&=-16777217}function L_(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gy(t))if(xy())e.flags|=8192;else throw Ta=au,$p}function Cc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yv():536870912,e.lanes|=t,Ir|=t)}function Io(e,t){if(!jt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Y1(e,t,n){var i=t.pendingProps;switch(Kp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return xe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ns(He),Cr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ar(t)?qi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xd())),xe(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(qi(t),a!==null?(xe(t),L_(t,a)):(xe(t),Cd(t,s,null,i,n))):a?a!==e.memoizedState?(qi(t),xe(t),L_(t,a)):(xe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&qi(t),xe(t),Cd(t,s,e,i,n)),null;case 27:if(jc(t),n=Ps.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&qi(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return xe(t),null}e=Ni.current,ar(t)?l_(t,e):(e=zy(s,i,n),t.stateNode=e,qi(t))}return xe(t),null;case 5:if(jc(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&qi(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return xe(t),null}if(a=Ni.current,ar(t))l_(t,a);else{var r=xu(Ps.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[an]=t,a[Rn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(ln(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&qi(t)}}return xe(t),Cd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&qi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Q(166));if(e=Ps.current,ar(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=rn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[an]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Oy(e.nodeValue,n)),e||qs(t,!0)}else e=xu(e).createTextNode(i),e[an]=t,t.stateNode=e}return xe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=ar(t),n!==null){if(e===null){if(!i)throw Error(Q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(557));e[an]=t}else Aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),e=!1}else n=xd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(On(t),t):(On(t),null);if((t.flags&128)!==0)throw Error(Q(558))}return xe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=ar(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[an]=t}else Aa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),s=!1}else s=xd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(On(t),t):(On(t),null)}return On(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Cc(t,t.updateQueue),xe(t),null);case 4:return Cr(),e===null&&bm(t.stateNode.containerInfo),xe(t),null;case 10:return ns(t.type),xe(t),null;case 19:if($e(Ie),i=t.memoizedState,i===null)return xe(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Io(i,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ou(e),a!==null){for(t.flags|=128,Io(i,!1),e=a.updateQueue,t.updateQueue=e,Cc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Kv(n,e),n=n.sibling;return ge(Ie,Ie.current&1|2),jt&&Ki(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Fn()>du&&(t.flags|=128,s=!0,Io(i,!1),t.lanes=4194304)}else{if(!s)if(e=ou(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Cc(t,e),Io(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!jt)return xe(t),null}else 2*Fn()-i.renderingStartTime>du&&n!==536870912&&(t.flags|=128,s=!0,Io(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fn(),e.sibling=null,n=Ie.current,ge(Ie,s?n&1|2:n&1),jt&&Ki(t,i.treeForkCount),e):(xe(t),null);case 22:case 23:return On(t),em(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),n=t.updateQueue,n!==null&&Cc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&$e(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ns(He),xe(t),null;case 25:return null;case 30:return null}throw Error(Q(156,t.tag))}function Z1(e,t){switch(Kp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ns(He),Cr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jc(t),null;case 31:if(t.memoizedState!==null){if(On(t),t.alternate===null)throw Error(Q(340));Aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(On(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Aa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Ie),null;case 4:return Cr(),null;case 10:return ns(t.type),null;case 22:case 23:return On(t),em(),e!==null&&$e(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ns(He),null;case 25:return null;default:return null}}function Kx(e,t){switch(Kp(t),t.tag){case 3:ns(He),Cr();break;case 26:case 27:case 5:jc(t);break;case 4:Cr();break;case 31:t.memoizedState!==null&&On(t);break;case 13:On(t);break;case 19:$e(Ie);break;case 10:ns(t.type);break;case 22:case 23:On(t),em(),e!==null&&$e(ba);break;case 24:ns(He)}}function Tl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){oe(t,t.return,o)}}function Ys(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){oe(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){oe(t,t.return,f)}}function Qx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{rx(t,n)}catch(i){oe(e,e.return,i)}}}function jx(e,t,n){n.props=Da(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){oe(e,t,i)}}function Qo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){oe(e,t,s)}}function Ui(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){oe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){oe(e,t,s)}else n.current=null}function $x(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){oe(e,e.return,s)}}function Rd(e,t,n){try{var i=e.stateNode;pT(i,e.type,n,t),i[Rn]=t}catch(s){oe(e,e.return,s)}}function ty(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ks(e.type)||e.tag===4}function Dd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ty(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ks(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$i));else if(i!==4&&(i===27&&Ks(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(vp(e,t,n),e=e.sibling;e!==null;)vp(e,t,n),e=e.sibling}function fu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Ks(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(fu(e,t,n),e=e.sibling;e!==null;)fu(e,t,n),e=e.sibling}function ey(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);ln(t,i,n),t[an]=e,t[Rn]=n}catch(a){oe(e,e.return,a)}}var Qi=!1,Ve=!1,Ud=!1,I_=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function J1(e,t){if(e=e.containerInfo,Ep=bu,e=Gv(e),Wp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,f=0,p=e,u=null;e:for(;;){for(var d;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++f===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ap={focusedElem:e,selectionRange:n},bu=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=Da(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(b){oe(n,n.return,b)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Cp(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(Q(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function ny(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Zi(e,n),i&4&&Tl(5,n);break;case 1:if(Zi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){oe(n,n.return,r)}else{var s=Da(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){oe(n,n.return,r)}}i&64&&Qx(n),i&512&&Qo(n,n.return);break;case 3:if(Zi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{rx(e,t)}catch(r){oe(n,n.return,r)}}break;case 27:t===null&&i&4&&ey(n);case 26:case 5:Zi(e,n),t===null&&i&4&&$x(n),i&512&&Qo(n,n.return);break;case 12:Zi(e,n);break;case 31:Zi(e,n),i&4&&ay(e,n);break;case 13:Zi(e,n),i&4&&ry(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sT.bind(null,n),MT(e,n))));break;case 22:if(i=n.memoizedState!==null||Qi,!i){t=t!==null&&t.memoizedState!==null||Ve,s=Qi;var a=Ve;Qi=i,(Ve=t)&&!a?Ji(e,n,(n.subtreeFlags&8772)!==0):Zi(e,n),Qi=s,Ve=a}break;case 30:break;default:Zi(e,n)}}function iy(e){var t=e.alternate;t!==null&&(e.alternate=null,iy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,An=!1;function Yi(e,t,n){for(n=n.child;n!==null;)sy(e,t,n),n=n.sibling}function sy(e,t,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 26:Ve||Ui(n,t),Yi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ve||Ui(n,t);var i=Te,s=An;Ks(n.type)&&(Te=n.stateNode,An=!1),Yi(e,t,n),el(n.stateNode),Te=i,An=s;break;case 5:Ve||Ui(n,t);case 6:if(i=Te,s=An,Te=null,Yi(e,t,n),Te=i,An=s,Te!==null)if(An)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(n.stateNode)}catch(a){oe(n,t,a)}else try{Te.removeChild(n.stateNode)}catch(a){oe(n,t,a)}break;case 18:Te!==null&&(An?(e=Te,J_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Fr(e)):J_(Te,n.stateNode));break;case 4:i=Te,s=An,Te=n.stateNode.containerInfo,An=!0,Yi(e,t,n),Te=i,An=s;break;case 0:case 11:case 14:case 15:Ys(2,n,t),Ve||Ys(4,n,t),Yi(e,t,n);break;case 1:Ve||(Ui(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&jx(n,t,i)),Yi(e,t,n);break;case 21:Yi(e,t,n);break;case 22:Ve=(i=Ve)||n.memoizedState!==null,Yi(e,t,n),Ve=i;break;default:Yi(e,t,n)}}function ay(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fr(e)}catch(n){oe(t,t.return,n)}}}function ry(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fr(e)}catch(n){oe(t,t.return,n)}}function K1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new I_),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new I_),t;default:throw Error(Q(435,e.tag))}}function Rc(e,t){var n=K1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=aT.bind(null,e,i);i.then(s,s)}})}function Tn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Ks(o.type)){Te=o.stateNode,An=!1;break t}break;case 5:Te=o.stateNode,An=!1;break t;case 3:case 4:Te=o.stateNode.containerInfo,An=!0;break t}o=o.return}if(Te===null)throw Error(Q(160));sy(a,r,s),Te=null,An=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)oy(t,e),t=t.sibling}var pi=null;function oy(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Tn(t,e),En(e),i&4&&(Ys(3,e,e.return),Tl(3,e),Ys(5,e,e.return));break;case 1:Tn(t,e),En(e),i&512&&(Ve||n===null||Ui(n,n.return)),i&64&&Qi&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=pi;if(Tn(t,e),En(e),i&512&&(Ve||n===null||Ui(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[yl]||a[an]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),ln(a,i,n),a[an]=e,je(a),i=a;break t;case"link":var r=nv("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),ln(a,i,n),s.head.appendChild(a);break;case"meta":if(r=nv("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),ln(a,i,n),s.head.appendChild(a);break;default:throw Error(Q(468,i))}a[an]=e,je(a),i=a}e.stateNode=i}else iv(s,e.type,e.stateNode);else e.stateNode=ev(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?iv(s,e.type,e.stateNode):ev(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Rd(e,e.memoizedProps,n.memoizedProps)}break;case 27:Tn(t,e),En(e),i&512&&(Ve||n===null||Ui(n,n.return)),n!==null&&i&4&&Rd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Tn(t,e),En(e),i&512&&(Ve||n===null||Ui(n,n.return)),e.flags&32){s=e.stateNode;try{Dr(s,"")}catch(_){oe(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Rd(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Ud=!0);break;case 6:if(Tn(t,e),En(e),i&4){if(e.stateNode===null)throw Error(Q(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){oe(e,e.return,_)}}break;case 3:if(Yc=null,s=pi,pi=yu(t.containerInfo),Tn(t,e),pi=s,En(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(_){oe(e,e.return,_)}Ud&&(Ud=!1,ly(e));break;case 4:i=pi,pi=yu(e.stateNode.containerInfo),Tn(t,e),En(e),pi=i;break;case 12:Tn(t,e),En(e);break;case 31:Tn(t,e),En(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rc(e,i)));break;case 13:Tn(t,e),En(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Pu=Fn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rc(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Qi,f=Ve;if(Qi=c||s,Ve=f||l,Tn(t,e),Ve=f,Qi=c,En(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||Qi||Ve||ya(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){oe(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){oe(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;s?K_(d,!0):K_(l.stateNode,!1)}catch(_){oe(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Rc(e,n))));break;case 19:Tn(t,e),En(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rc(e,i)));break;case 30:break;case 21:break;default:Tn(t,e),En(e)}}function En(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(ty(i)){n=i;break}i=i.return}if(n==null)throw Error(Q(160));switch(n.tag){case 27:var s=n.stateNode,a=Dd(e);fu(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Dr(r,""),n.flags&=-33);var o=Dd(e);fu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Dd(e);vp(e,c,l);break;default:throw Error(Q(161))}}catch(f){oe(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ly(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ly(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ny(e,t.alternate,t),t=t.sibling}function ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ys(4,t,t.return),ya(t);break;case 1:Ui(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&jx(t,t.return,n),ya(t);break;case 27:el(t.stateNode);case 26:case 5:Ui(t,t.return),ya(t);break;case 22:t.memoizedState===null&&ya(t);break;case 30:ya(t);break;default:ya(t)}e=e.sibling}}function Ji(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(s,a,n),Tl(4,a);break;case 1:if(Ji(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){oe(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)ax(l[s],o)}catch(c){oe(i,i.return,c)}}n&&r&64&&Qx(a),Qo(a,a.return);break;case 27:ey(a);case 26:case 5:Ji(s,a,n),n&&i===null&&r&4&&$x(a),Qo(a,a.return);break;case 12:Ji(s,a,n);break;case 31:Ji(s,a,n),n&&r&4&&ay(s,a);break;case 13:Ji(s,a,n),n&&r&4&&ry(s,a);break;case 22:a.memoizedState===null&&Ji(s,a,n),Qo(a,a.return);break;case 30:break;default:Ji(s,a,n)}t=t.sibling}}function _m(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ml(n))}function vm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ml(e))}function di(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cy(e,t,n,i),t=t.sibling}function cy(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:di(e,t,n,i),s&2048&&Tl(9,t);break;case 1:di(e,t,n,i);break;case 3:di(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ml(e)));break;case 12:if(s&2048){di(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){oe(t,t.return,l)}}else di(e,t,n,i);break;case 31:di(e,t,n,i);break;case 13:di(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?di(e,t,n,i):jo(e,t):a._visibility&2?di(e,t,n,i):(a._visibility|=2,or(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&_m(r,t);break;case 24:di(e,t,n,i),s&2048&&vm(t.alternate,t);break;default:di(e,t,n,i)}}function or(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:or(a,r,o,l,s),Tl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?or(a,r,o,l,s):jo(a,r):(f._visibility|=2,or(a,r,o,l,s)),s&&c&2048&&_m(r.alternate,r);break;case 24:or(a,r,o,l,s),s&&c&2048&&vm(r.alternate,r);break;default:or(a,r,o,l,s)}t=t.sibling}}function jo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:jo(n,i),s&2048&&_m(i.alternate,i);break;case 24:jo(n,i),s&2048&&vm(i.alternate,i);break;default:jo(n,i)}t=t.sibling}}var Go=8192;function rr(e,t,n){if(e.subtreeFlags&Go)for(e=e.child;e!==null;)uy(e,t,n),e=e.sibling}function uy(e,t,n){switch(e.tag){case 26:rr(e,t,n),e.flags&Go&&e.memoizedState!==null&&IT(n,pi,e.memoizedState,e.memoizedProps);break;case 5:rr(e,t,n);break;case 3:case 4:var i=pi;pi=yu(e.stateNode.containerInfo),rr(e,t,n),pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Go,Go=16777216,rr(e,t,n),Go=i):rr(e,t,n));break;default:rr(e,t,n)}}function hy(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Oo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,dy(i,e)}hy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fy(e),e=e.sibling}function fy(e){switch(e.tag){case 0:case 11:case 15:Oo(e),e.flags&2048&&Ys(9,e,e.return);break;case 3:Oo(e);break;case 12:Oo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wc(e)):Oo(e);break;default:Oo(e)}}function Wc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Qe=i,dy(i,e)}hy(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ys(8,t,t.return),Wc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Wc(t));break;default:Wc(t)}e=e.sibling}}function dy(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:Ys(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ml(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qe=i;else t:for(n=e;Qe!==null;){i=Qe;var s=i.sibling,a=i.return;if(iy(i),i===n){Qe=null;break t}if(s!==null){s.return=a,Qe=s;break t}Qe=a}}}var Q1={getCacheForType:function(e){var t=on(He),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return on(He).controller.signal}},j1=typeof WeakMap=="function"?WeakMap:Map,ne=0,de=null,qt=null,Zt=0,re=0,In=null,Ls=!1,kr=!1,xm=!1,ls=0,Ue=0,Zs=0,Ea=0,ym=0,Bn=0,Ir=0,$o=null,wn=null,xp=!1,Pu=0,py=0,du=1/0,pu=null,Vs=null,We=0,Hs=null,Or=null,is=0,yp=0,Sp=null,my=null,tl=0,Mp=null;function Hn(){return(ne&2)!==0&&Zt!==0?Zt&-Zt:Nt.T!==null?Mm():Tv()}function gy(){if(Bn===0)if((Zt&536870912)===0||jt){var e=xc;xc<<=1,(xc&3932160)===0&&(xc=262144),Bn=e}else Bn=536870912;return e=kn.current,e!==null&&(e.flags|=32),Bn}function Cn(e,t,n){(e===de&&(re===2||re===9)||e.cancelPendingCommit!==null)&&(Pr(e,0),Is(e,Zt,Bn,!1)),xl(e,n),((ne&2)===0||e!==de)&&(e===de&&((ne&2)===0&&(Ea|=n),Ue===4&&Is(e,Zt,Bn,!1)),Ii(e))}function _y(e,t,n){if((ne&6)!==0)throw Error(Q(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||vl(e,t),s=i?eT(e,t):Nd(e,t,!0),a=i;do{if(s===0){kr&&!i&&Is(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!$1(n)){s=Nd(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=$o;var l=o.current.memoizedState.isDehydrated;if(l&&(Pr(o,r).flags|=256),r=Nd(o,r,!1),r!==2){if(xm&&!l){o.errorRecoveryDisabledLanes|=a,Ea|=a,s=4;break t}a=wn,wn=s,a!==null&&(wn===null?wn=a:wn.push.apply(wn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Pr(e,0),Is(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Q(345));case 4:if((t&4194048)!==t)break;case 6:Is(i,t,Bn,!Ls);break t;case 2:wn=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((t&62914560)===t&&(s=Pu+300-Fn(),10<s)){if(Is(i,t,Bn,!Ls),Eu(i,0,!0)!==0)break t;is=t,i.timeoutHandle=By(O_.bind(null,i,n,wn,pu,xp,t,Bn,Ea,Ir,Ls,a,"Throttled",-0,0),s);break t}O_(i,n,wn,pu,xp,t,Bn,Ea,Ir,Ls,a,null,-0,0)}}break}while(!0);Ii(e)}function O_(e,t,n,i,s,a,r,o,l,c,f,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},uy(t,a,p);var _=(a&62914560)===a?Pu-Fn():(a&4194048)===a?py-Fn():0;if(_=OT(p,_),_!==null){is=a,e.cancelPendingCommit=_(B_.bind(null,e,t,a,n,i,s,r,o,l,f,p,null,u,d)),Is(e,a,r,!c);return}}B_(e,t,a,n,i,s,r,o,l)}function $1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Gn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Is(e,t,n,i){t&=~ym,t&=~Ea,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Vn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&Sv(e,n,t)}function Bu(){return(ne&6)===0?(El(0,!1),!1):!0}function Sm(){if(qt!==null){if(re===0)var e=qt.return;else e=qt,ts=Oa=null,rm(e),Er=null,ll=0,e=qt;for(;e!==null;)Kx(e.alternate,e),e=e.return;qt=null}}function Pr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,_T(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),is=0,Sm(),de=e,qt=n=es(e.current,null),Zt=t,re=0,In=null,Ls=!1,kr=vl(e,t),xm=!1,Ir=Bn=ym=Ea=Zs=Ue=0,wn=$o=null,xp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Vn(i),a=1<<s;t|=e[s],i&=~a}return ls=t,Ru(),n}function vy(e,t){zt=null,Nt.H=ul,t===Gr||t===Uu?(t=d_(),re=3):t===$p?(t=d_(),re=4):re=t===mm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,In=t,qt===null&&(Ue=1,uu(e,ii(t,e.current)))}function xy(){var e=kn.current;return e===null?!0:(Zt&4194048)===Zt?ai===null:(Zt&62914560)===Zt||(Zt&536870912)!==0?e===ai:!1}function yy(){var e=Nt.H;return Nt.H=ul,e===null?ul:e}function Sy(){var e=Nt.A;return Nt.A=Q1,e}function mu(){Ue=4,Ls||(Zt&4194048)!==Zt&&kn.current!==null||(kr=!0),(Zs&134217727)===0&&(Ea&134217727)===0||de===null||Is(de,Zt,Bn,!1)}function Nd(e,t,n){var i=ne;ne|=2;var s=yy(),a=Sy();(de!==e||Zt!==t)&&(pu=null,Pr(e,t)),t=!1;var r=Ue;t:do try{if(re!==0&&qt!==null){var o=qt,l=In;switch(re){case 8:Sm(),r=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(t=!0);var c=re;if(re=0,In=null,yr(e,o,l,c),n&&kr){r=0;break t}break;default:c=re,re=0,In=null,yr(e,o,l,c)}}tT(),r=Ue;break}catch(f){vy(e,f)}while(!0);return t&&e.shellSuspendCounter++,ts=Oa=null,ne=i,Nt.H=s,Nt.A=a,qt===null&&(de=null,Zt=0,Ru()),r}function tT(){for(;qt!==null;)My(qt)}function eT(e,t){var n=ne;ne|=2;var i=yy(),s=Sy();de!==e||Zt!==t?(pu=null,du=Fn()+500,Pr(e,t)):kr=vl(e,t);t:do try{if(re!==0&&qt!==null){t=qt;var a=In;e:switch(re){case 1:re=0,In=null,yr(e,t,a,1);break;case 2:case 9:if(f_(a)){re=0,In=null,P_(t);break}t=function(){re!==2&&re!==9||de!==e||(re=7),Ii(e)},a.then(t,t);break t;case 3:re=7;break t;case 4:re=5;break t;case 7:f_(a)?(re=0,In=null,P_(t)):(re=0,In=null,yr(e,t,a,7));break;case 5:var r=null;switch(qt.tag){case 26:r=qt.memoizedState;case 5:case 27:var o=qt;if(r?Gy(r):o.stateNode.complete){re=0,In=null;var l=o.sibling;if(l!==null)qt=l;else{var c=o.return;c!==null?(qt=c,Fu(c)):qt=null}break e}}re=0,In=null,yr(e,t,a,5);break;case 6:re=0,In=null,yr(e,t,a,6);break;case 8:Sm(),Ue=6;break t;default:throw Error(Q(462))}}nT();break}catch(f){vy(e,f)}while(!0);return ts=Oa=null,Nt.H=i,Nt.A=s,ne=n,qt!==null?0:(de=null,Zt=0,Ru(),Ue)}function nT(){for(;qt!==null&&!Eb();)My(qt)}function My(e){var t=Jx(e.alternate,e,ls);e.memoizedProps=e.pendingProps,t===null?Fu(e):qt=t}function P_(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=R_(n,t,t.pendingProps,t.type,void 0,Zt);break;case 11:t=R_(n,t,t.pendingProps,t.type.render,t.ref,Zt);break;case 5:rm(t);default:Kx(n,t),t=qt=Kv(t,ls),t=Jx(n,t,ls)}e.memoizedProps=e.pendingProps,t===null?Fu(e):qt=t}function yr(e,t,n,i){ts=Oa=null,rm(t),Er=null,ll=0;var s=t.return;try{if(X1(e,s,t,n,Zt)){Ue=1,uu(e,ii(n,e.current)),qt=null;return}}catch(a){if(s!==null)throw qt=s,a;Ue=1,uu(e,ii(n,e.current)),qt=null;return}t.flags&32768?(jt||i===1?e=!0:kr||(Zt&536870912)!==0?e=!1:(Ls=e=!0,(i===2||i===9||i===3||i===6)&&(i=kn.current,i!==null&&i.tag===13&&(i.flags|=16384))),by(t,e)):Fu(t)}function Fu(e){var t=e;do{if((t.flags&32768)!==0){by(t,Ls);return}e=t.return;var n=Y1(t.alternate,t,ls);if(n!==null){qt=n;return}if(t=t.sibling,t!==null){qt=t;return}qt=t=e}while(t!==null);Ue===0&&(Ue=5)}function by(e,t){do{var n=Z1(e.alternate,e);if(n!==null){n.flags&=32767,qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){qt=e;return}qt=e=n}while(e!==null);Ue=6,qt=null}function B_(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do zu();while(We!==0);if((ne&6)!==0)throw Error(Q(327));if(t!==null){if(t===e.current)throw Error(Q(177));if(a=t.lanes|t.childLanes,a|=qp,Ob(e,n,a,r,o,l),e===de&&(qt=de=null,Zt=0),Or=t,Hs=e,is=n,yp=a,Sp=s,my=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rT($c,function(){return Cy(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Nt.T,Nt.T=null,s=ie.p,ie.p=2,r=ne,ne|=4;try{J1(e,t,n)}finally{ne=r,ie.p=s,Nt.T=i}}We=1,Ty(),Ey(),Ay()}}function Ty(){if(We===1){We=0;var e=Hs,t=Or,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Nt.T,Nt.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{oy(t,e);var a=Ap,r=Gv(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&Hv(o.ownerDocument.documentElement,o)){if(l!==null&&Wp(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),_=o.textContent.length,b=Math.min(l.start,_),m=l.end===void 0?b:Math.min(l.end,_);!d.extend&&b>m&&(r=m,m=b,b=r);var h=a_(o,b),v=a_(o,m);if(h&&v&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==v.node||d.focusOffset!==v.offset)){var S=p.createRange();S.setStart(h.node,h.offset),d.removeAllRanges(),b>m?(d.addRange(S),d.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),d.addRange(S))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var x=p[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}bu=!!Ep,Ap=Ep=null}finally{ne=s,ie.p=i,Nt.T=n}}e.current=t,We=2}}function Ey(){if(We===2){We=0;var e=Hs,t=Or,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Nt.T,Nt.T=null;var i=ie.p;ie.p=2;var s=ne;ne|=4;try{ny(e,t.alternate,t)}finally{ne=s,ie.p=i,Nt.T=n}}We=3}}function Ay(){if(We===4||We===3){We=0,Ab();var e=Hs,t=Or,n=is,i=my;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?We=5:(We=0,Or=Hs=null,wy(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Vs=null),Fp(n),t=t.stateNode,zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Nt.T,s=ie.p,ie.p=2,Nt.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Nt.T=t,ie.p=s}}(is&3)!==0&&zu(),Ii(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Mp?tl++:(tl=0,Mp=e):tl=0,El(0,!1)}}function wy(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ml(t)))}function zu(){return Ty(),Ey(),Ay(),Cy()}function Cy(){if(We!==5)return!1;var e=Hs,t=yp;yp=0;var n=Fp(is),i=Nt.T,s=ie.p;try{ie.p=32>n?32:n,Nt.T=null,n=Sp,Sp=null;var a=Hs,r=is;if(We=0,Or=Hs=null,is=0,(ne&6)!==0)throw Error(Q(331));var o=ne;if(ne|=4,fy(a.current),cy(a,a.current,r,n),ne=o,El(0,!1),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(_l,a)}catch{}return!0}finally{ie.p=s,Nt.T=i,wy(e,t)}}function F_(e,t,n){t=ii(n,t),t=mp(e.stateNode,t,2),e=zs(e,t,2),e!==null&&(xl(e,2),Ii(e))}function oe(e,t,n){if(e.tag===3)F_(e,e,n);else for(;t!==null;){if(t.tag===3){F_(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vs===null||!Vs.has(i))){e=ii(n,e),n=kx(2),i=zs(t,n,2),i!==null&&(Xx(n,i,t,e),xl(i,2),Ii(i));break}}t=t.return}}function Ld(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new j1;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(xm=!0,s.add(n),e=iT.bind(null,e,t,n),t.then(e,e))}function iT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,de===e&&(Zt&n)===n&&(Ue===4||Ue===3&&(Zt&62914560)===Zt&&300>Fn()-Pu?(ne&2)===0&&Pr(e,0):ym|=n,Ir===Zt&&(Ir=0)),Ii(e)}function Ry(e,t){t===0&&(t=yv()),e=Ia(e,t),e!==null&&(xl(e,t),Ii(e))}function sT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ry(e,n)}function aT(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(t),Ry(e,n)}function rT(e,t){return Pp(e,t)}var gu=null,lr=null,bp=!1,_u=!1,Id=!1,Os=0;function Ii(e){e!==lr&&e.next===null&&(lr===null?gu=lr=e:lr=lr.next=e),_u=!0,bp||(bp=!0,lT())}function El(e,t){if(!Id&&_u){Id=!0;do for(var n=!1,i=gu;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Vn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,z_(i,a))}else a=Zt,a=Eu(i,i===de?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||vl(i,a)||(n=!0,z_(i,a));i=i.next}while(n);Id=!1}}function oT(){Dy()}function Dy(){_u=bp=!1;var e=0;Os!==0&&gT()&&(e=Os);for(var t=Fn(),n=null,i=gu;i!==null;){var s=i.next,a=Uy(i,t);a===0?(i.next=null,n===null?gu=s:n.next=s,s===null&&(lr=n)):(n=i,(e!==0||(a&3)!==0)&&(_u=!0)),i=s}We!==0&&We!==5||El(e,!1),Os!==0&&(Os=0)}function Uy(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Vn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=Ib(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=de,n=Zt,n=Eu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(re===2||re===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&cd(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||vl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&cd(i),Fp(n)){case 2:case 8:n=vv;break;case 32:n=$c;break;case 268435456:n=xv;break;default:n=$c}return i=Ny.bind(null,e),n=Pp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&cd(i),e.callbackPriority=2,e.callbackNode=null,2}function Ny(e,t){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(zu()&&e.callbackNode!==n)return null;var i=Zt;return i=Eu(e,e===de?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(_y(e,i,t),Uy(e,Fn()),e.callbackNode!=null&&e.callbackNode===n?Ny.bind(null,e):null)}function z_(e,t){if(zu())return null;_y(e,t,!0)}function lT(){vT(function(){(ne&6)!==0?Pp(_v,oT):Dy()})}function Mm(){if(Os===0){var e=Ur;e===0&&(e=vc,vc<<=1,(vc&261888)===0&&(vc=256)),Os=e}return Os}function V_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pc(""+e)}function H_(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function cT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=V_((s[Rn]||null).action),r=i.submitter;r&&(t=(t=r[Rn]||null)?V_(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Au("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Os!==0){var l=r?H_(s,r):new FormData(s);dp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?H_(s,r):new FormData(s),dp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Dc=0;Dc<ep.length;Dc++)Uc=ep[Dc],G_=Uc.toLowerCase(),k_=Uc[0].toUpperCase()+Uc.slice(1),mi(G_,"on"+k_);var Uc,G_,k_,Dc;mi(Xv,"onAnimationEnd");mi(Wv,"onAnimationIteration");mi(qv,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(w1,"onTransitionRun");mi(C1,"onTransitionStart");mi(R1,"onTransitionCancel");mi(Yv,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);Ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ua("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function Ly(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){eu(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){eu(f)}s.currentTarget=null,a=l}}}}function Wt(e,t){var n=t[Yd];n===void 0&&(n=t[Yd]=new Set);var i=e+"__bubble";n.has(i)||(Iy(t,e,2,!1),n.add(i))}function Od(e,t,n){var i=0;t&&(i|=4),Iy(n,e,i,t)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function bm(e){if(!e[Nc]){e[Nc]=!0,Ev.forEach(function(n){n!=="selectionchange"&&(uT.has(n)||Od(n,!1,e),Od(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nc]||(t[Nc]=!0,Od("selectionchange",!1,t))}}function Iy(e,t,n,i){switch(Yy(t)){case 2:var s=FT;break;case 8:s=zT;break;default:s=wm}n=s.bind(null,t,n,e),s=void 0,!jd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Pd(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=hr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Lv(function(){var c=a,f=Hp(n),p=[];t:{var u=Zv.get(e);if(u!==void 0){var d=Au,_=e;switch(e){case"keypress":if(Fc(n)===0)break t;case"keydown":case"keyup":d=a1;break;case"focusin":_="focus",d=pd;break;case"focusout":_="blur",d=pd;break;case"beforeblur":case"afterblur":d=pd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=K0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Yb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=l1;break;case Xv:case Wv:case qv:d=Kb;break;case Yv:d=u1;break;case"scroll":case"scrollend":d=Wb;break;case"wheel":d=f1;break;case"copy":case"cut":case"paste":d=jb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=j0;break;case"toggle":case"beforetoggle":d=p1}var b=(t&4)!==0,m=!b&&(e==="scroll"||e==="scrollend"),h=b?u!==null?u+"Capture":null:u;b=[];for(var v=c,S;v!==null;){var x=v;if(S=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||S===null||h===null||(x=il(v,h),x!=null&&b.push(fl(v,x,S))),m)break;v=v.return}0<b.length&&(u=new d(u,_,null,n,f),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==Qd&&(_=n.relatedTarget||n.fromElement)&&(hr(_)||_[zr]))break t;if((d||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,d?(_=n.relatedTarget||n.toElement,d=c,_=_?hr(_):null,_!==null&&(m=gl(_),b=_.tag,_!==m||b!==5&&b!==27&&b!==6)&&(_=null)):(d=null,_=c),d!==_)){if(b=K0,x="onMouseLeave",h="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(b=j0,x="onPointerLeave",h="onPointerEnter",v="pointer"),m=d==null?u:Vo(d),S=_==null?u:Vo(_),u=new b(x,v+"leave",d,n,f),u.target=m,u.relatedTarget=S,x=null,hr(f)===c&&(b=new b(h,v+"enter",_,n,f),b.target=S,b.relatedTarget=m,x=b),m=x,d&&_)e:{for(b=hT,h=d,v=_,S=0,x=h;x;x=b(x))S++;x=0;for(var T=v;T;T=b(T))x++;for(;0<S-x;)h=b(h),S--;for(;0<x-S;)v=b(v),x--;for(;S--;){if(h===v||v!==null&&h===v.alternate){b=h;break e}h=b(h),v=b(v)}b=null}else b=null;d!==null&&X_(p,u,d,b,!1),_!==null&&m!==null&&X_(p,m,_,b,!0)}}t:{if(u=c?Vo(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var A=n_;else if(e_(u))if(zv)A=T1;else{A=M1;var w=S1}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Vp(c.elementType)&&(A=n_):A=b1;if(A&&(A=A(e,c))){Fv(p,A,n,f);break t}w&&w(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Kd(u,"number",u.value)}switch(w=c?Vo(c):window,e){case"focusin":(e_(w)||w.contentEditable==="true")&&(pr=w,$d=c,Wo=null);break;case"focusout":Wo=$d=pr=null;break;case"mousedown":tp=!0;break;case"contextmenu":case"mouseup":case"dragend":tp=!1,r_(p,n,f);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":r_(p,n,f)}var y;if(Xp)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else dr?Pv(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Ov&&n.locale!=="ko"&&(dr||E!=="onCompositionStart"?E==="onCompositionEnd"&&dr&&(y=Iv()):(Ns=f,Gp="value"in Ns?Ns.value:Ns.textContent,dr=!0)),w=vu(c,E),0<w.length&&(E=new Q0(E,e,null,n,f),p.push({event:E,listeners:w}),y?E.data=y:(y=Bv(n),y!==null&&(E.data=y)))),(y=g1?_1(e,n):v1(e,n))&&(E=vu(c,"onBeforeInput"),0<E.length&&(w=new Q0("onBeforeInput","beforeinput",null,n,f),p.push({event:w,listeners:E}),w.data=y)),cT(p,e,c,n,f)}Ly(p,t)})}function fl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=il(e,n),s!=null&&i.unshift(fl(e,s,a)),s=il(e,t),s!=null&&i.push(fl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function hT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function X_(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=il(n,a),c!=null&&r.unshift(fl(n,c,l))):s||(c=il(n,a),c!=null&&r.push(fl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var fT=/\r\n?/g,dT=/\u0000|\uFFFD/g;function W_(e){return(typeof e=="string"?e:""+e).replace(fT,`
`).replace(dT,"")}function Oy(e,t){return t=W_(t),W_(e)===t}function ce(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Dr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Dr(e,""+i);break;case"className":Sc(e,"class",i);break;case"tabIndex":Sc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Sc(e,n,i);break;case"style":Nv(e,i,a);break;case"data":if(t!=="object"){Sc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Pc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&ce(e,t,"name",s.name,s,null),ce(e,t,"formEncType",s.formEncType,s,null),ce(e,t,"formMethod",s.formMethod,s,null),ce(e,t,"formTarget",s.formTarget,s,null)):(ce(e,t,"encType",s.encType,s,null),ce(e,t,"method",s.method,s,null),ce(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Pc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=$i);break;case"onScroll":i!=null&&Wt("scroll",e);break;case"onScrollEnd":i!=null&&Wt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Pc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Wt("beforetoggle",e),Wt("toggle",e),Oc(e,"popover",i);break;case"xlinkActuate":Wi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Wi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Wi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Wi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Wi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Wi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Wi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Wi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Wi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Oc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=kb.get(n)||n,Oc(e,n,i))}}function Tp(e,t,n,i,s,a){switch(n){case"style":Nv(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Dr(e,i):(typeof i=="number"||typeof i=="bigint")&&Dr(e,""+i);break;case"onScroll":i!=null&&Wt("scroll",e);break;case"onScrollEnd":i!=null&&Wt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Av.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[Rn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Oc(e,n,i)}}}function ln(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Wt("error",e),Wt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:ce(e,t,a,r,n,null)}}s&&ce(e,t,"srcSet",n.srcSet,n,null),i&&ce(e,t,"src",n.src,n,null);return;case"input":Wt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Q(137,t));break;default:ce(e,t,i,f,n,null)}}Rv(e,a,o,l,c,r,s,!1);return;case"select":Wt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ce(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Mr(e,!!i,t,!1):n!=null&&Mr(e,!!i,n,!0);return;case"textarea":Wt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:ce(e,t,r,o,n,null)}Uv(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ce(e,t,l,i,n,null));return;case"dialog":Wt("beforetoggle",e),Wt("toggle",e),Wt("cancel",e),Wt("close",e);break;case"iframe":case"object":Wt("load",e);break;case"video":case"audio":for(i=0;i<hl.length;i++)Wt(hl[i],e);break;case"image":Wt("error",e),Wt("load",e);break;case"details":Wt("toggle",e);break;case"embed":case"source":case"link":Wt("error",e),Wt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:ce(e,t,c,i,n,null)}return;default:if(Vp(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Tp(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ce(e,t,o,i,n,null))}function pT(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||ce(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":f=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Q(137,t));break;default:d!==p&&ce(e,t,u,d,i,p)}}Jd(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||ce(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&ce(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?Mr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Mr(e,!!n,t,!0):Mr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ce(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Q(91));break;default:s!==a&&ce(e,t,r,s,i,a)}Dv(e,u,d);return;case"option":for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:ce(e,t,_,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":ce(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&ce(e,t,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Q(137,t));break;default:ce(e,t,c,u,i,d)}return;default:if(Vp(t)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&Tp(e,t,m,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||Tp(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&ce(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||ce(e,t,p,u,i,d)}function q_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&q_(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&q_(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ep=null,Ap=null;function xu(e){return e.nodeType===9?e:e.ownerDocument}function Y_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Py(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function wp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bd=null;function gT(){var e=window.event;return e&&e.type==="popstate"?e===Bd?!1:(Bd=e,!0):(Bd=null,!1)}var By=typeof setTimeout=="function"?setTimeout:void 0,_T=typeof clearTimeout=="function"?clearTimeout:void 0,Z_=typeof Promise=="function"?Promise:void 0,vT=typeof queueMicrotask=="function"?queueMicrotask:typeof Z_<"u"?function(e){return Z_.resolve(null).then(e).catch(xT)}:By;function xT(e){setTimeout(function(){throw e})}function Ks(e){return e==="head"}function J_(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Fr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")el(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,el(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[yl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&el(e.ownerDocument.body);n=s}while(n);Fr(t)}function K_(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Cp(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Cp(n),zp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function yT(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[yl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ri(e.nextSibling),e===null)break}return null}function ST(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ri(e.nextSibling),e===null))return null;return e}function Fy(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ri(e.nextSibling),e===null))return null;return e}function Rp(e){return e.data==="$?"||e.data==="$~"}function Dp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function MT(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ri(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Up=null;function Q_(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ri(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function j_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function zy(e,t,n){switch(t=xu(n),e){case"html":if(e=t.documentElement,!e)throw Error(Q(452));return e;case"head":if(e=t.head,!e)throw Error(Q(453));return e;case"body":if(e=t.body,!e)throw Error(Q(454));return e;default:throw Error(Q(451))}}function el(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zp(e)}var oi=new Map,$_=new Set;function yu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var cs=ie.d;ie.d={f:bT,r:TT,D:ET,C:AT,L:wT,m:CT,X:DT,S:RT,M:UT};function bT(){var e=cs.f(),t=Bu();return e||t}function TT(e){var t=Vr(e);t!==null&&t.tag===5&&t.type==="form"?Nx(t):cs.r(e)}var Xr=typeof document>"u"?null:document;function Vy(e,t,n){var i=Xr;if(i&&typeof t=="string"&&t){var s=ni(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),$_.has(s)||($_.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),ln(t,"link",e),je(t),i.head.appendChild(t)))}}function ET(e){cs.D(e),Vy("dns-prefetch",e,null)}function AT(e,t){cs.C(e,t),Vy("preconnect",e,t)}function wT(e,t,n){cs.L(e,t,n);var i=Xr;if(i&&e&&t){var s='link[rel="preload"][as="'+ni(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ni(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ni(n.imageSizes)+'"]')):s+='[href="'+ni(e)+'"]';var a=s;switch(t){case"style":a=Br(e);break;case"script":a=Wr(e)}oi.has(a)||(e=Se({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),oi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Al(a))||t==="script"&&i.querySelector(wl(a))||(t=i.createElement("link"),ln(t,"link",e),je(t),i.head.appendChild(t)))}}function CT(e,t){cs.m(e,t);var n=Xr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ni(i)+'"][href="'+ni(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Wr(e)}if(!oi.has(a)&&(e=Se({rel:"modulepreload",href:e},t),oi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wl(a)))return}i=n.createElement("link"),ln(i,"link",e),je(i),n.head.appendChild(i)}}}function RT(e,t,n){cs.S(e,t,n);var i=Xr;if(i&&e){var s=Sr(i).hoistableStyles,a=Br(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Al(a)))o.loading=5;else{e=Se({rel:"stylesheet",href:e,"data-precedence":t},n),(n=oi.get(a))&&Tm(e,n);var l=r=i.createElement("link");je(l),ln(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,qc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function DT(e,t){cs.X(e,t);var n=Xr;if(n&&e){var i=Sr(n).hoistableScripts,s=Wr(e),a=i.get(s);a||(a=n.querySelector(wl(s)),a||(e=Se({src:e,async:!0},t),(t=oi.get(s))&&Em(e,t),a=n.createElement("script"),je(a),ln(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function UT(e,t){cs.M(e,t);var n=Xr;if(n&&e){var i=Sr(n).hoistableScripts,s=Wr(e),a=i.get(s);a||(a=n.querySelector(wl(s)),a||(e=Se({src:e,async:!0,type:"module"},t),(t=oi.get(s))&&Em(e,t),a=n.createElement("script"),je(a),ln(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function tv(e,t,n,i){var s=(s=Ps.current)?yu(s):null;if(!s)throw Error(Q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Br(n.href),n=Sr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Br(n.href);var a=Sr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Al(e)))&&!a._p&&(r.instance=a,r.state.loading=5),oi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},oi.set(e,n),a||NT(s,e,n,r.state))),t&&i===null)throw Error(Q(528,""));return r}if(t&&i!==null)throw Error(Q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wr(n),n=Sr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,e))}}function Br(e){return'href="'+ni(e)+'"'}function Al(e){return'link[rel="stylesheet"]['+e+"]"}function Hy(e){return Se({},e,{"data-precedence":e.precedence,precedence:null})}function NT(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ln(t,"link",n),je(t),e.head.appendChild(t))}function Wr(e){return'[src="'+ni(e)+'"]'}function wl(e){return"script[async]"+e}function ev(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ni(n.href)+'"]');if(i)return t.instance=i,je(i),i;var s=Se({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),je(i),ln(i,"style",s),qc(i,n.precedence,e),t.instance=i;case"stylesheet":s=Br(n.href);var a=e.querySelector(Al(s));if(a)return t.state.loading|=4,t.instance=a,je(a),a;i=Hy(n),(s=oi.get(s))&&Tm(i,s),a=(e.ownerDocument||e).createElement("link"),je(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ln(a,"link",i),t.state.loading|=4,qc(a,n.precedence,e),t.instance=a;case"script":return a=Wr(n.src),(s=e.querySelector(wl(a)))?(t.instance=s,je(s),s):(i=n,(s=oi.get(a))&&(i=Se({},n),Em(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),je(s),ln(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,qc(i,n.precedence,e));return t.instance}function qc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Tm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Em(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yc=null;function nv(e,t,n){if(Yc===null){var i=new Map,s=Yc=new Map;s.set(n,i)}else s=Yc,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[yl]||a[an]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function iv(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function LT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gy(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function IT(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Br(i.href),a=t.querySelector(Al(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Su.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,je(a);return}a=t.ownerDocument||t,i=Hy(i),(s=oi.get(s))&&Tm(i,s),a=a.createElement("link"),je(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ln(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Su.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Fd=0;function OT(e,t){return e.stylesheets&&e.count===0&&Zc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Fd===0&&(Fd=62500*mT());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Fd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mu=null;function Zc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mu=new Map,t.forEach(PT,e),Mu=null,Su.call(e))}function PT(e,t){if(!(t.state.loading&4)){var n=Mu.get(e);if(n)var i=n.get(null);else{n=new Map,Mu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Su.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var dl={$$typeof:ji,Provider:null,Consumer:null,_currentValue:Sa,_currentValue2:Sa,_threadCount:0};function BT(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ud(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ud(0),this.hiddenUpdates=ud(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function ky(e,t,n,i,s,a,r,o,l,c,f,p){return e=new BT(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=Pn(3,null,null,t),e.current=a,a.stateNode=e,t=Qp(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},tm(a),e}function Xy(e){return e?(e=_r,e):_r}function Wy(e,t,n,i,s,a){s=Xy(s),i.context===null?i.context=s:i.pendingContext=s,i=Fs(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=zs(e,i,t),n!==null&&(Cn(n,e,t),Yo(n,e,t))}function sv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Am(e,t){sv(e,t),(e=e.alternate)&&sv(e,t)}function qy(e){if(e.tag===13||e.tag===31){var t=Ia(e,67108864);t!==null&&Cn(t,e,67108864),Am(e,67108864)}}function av(e){if(e.tag===13||e.tag===31){var t=Hn();t=Bp(t);var n=Ia(e,t);n!==null&&Cn(n,e,t),Am(e,t)}}var bu=!0;function FT(e,t,n,i){var s=Nt.T;Nt.T=null;var a=ie.p;try{ie.p=2,wm(e,t,n,i)}finally{ie.p=a,Nt.T=s}}function zT(e,t,n,i){var s=Nt.T;Nt.T=null;var a=ie.p;try{ie.p=8,wm(e,t,n,i)}finally{ie.p=a,Nt.T=s}}function wm(e,t,n,i){if(bu){var s=Np(i);if(s===null)Pd(e,t,i,Tu,n),rv(e,i);else if(HT(s,e,t,n,i))i.stopPropagation();else if(rv(e,i),t&4&&-1<VT.indexOf(e)){for(;s!==null;){var a=Vr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=va(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Vn(r);o.entanglements[1]|=l,r&=~l}Ii(a),(ne&6)===0&&(du=Fn()+500,El(0,!1))}}break;case 31:case 13:o=Ia(a,2),o!==null&&Cn(o,a,2),Bu(),Am(a,2)}if(a=Np(i),a===null&&Pd(e,t,i,Tu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Pd(e,t,i,null,n)}}function Np(e){return e=Hp(e),Cm(e)}var Tu=null;function Cm(e){if(Tu=null,e=hr(e),e!==null){var t=gl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=fv(t),e!==null)return e;e=null}else if(n===31){if(e=dv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Tu=e,null}function Yy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wb()){case _v:return 2;case vv:return 8;case $c:case Cb:return 32;case xv:return 268435456;default:return 32}default:return 32}}var Lp=!1,Gs=null,ks=null,Xs=null,pl=new Map,ml=new Map,Ds=[],VT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rv(e,t){switch(e){case"focusin":case"focusout":Gs=null;break;case"dragenter":case"dragleave":ks=null;break;case"mouseover":case"mouseout":Xs=null;break;case"pointerover":case"pointerout":pl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(t.pointerId)}}function Po(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Vr(t),t!==null&&qy(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function HT(e,t,n,i,s){switch(t){case"focusin":return Gs=Po(Gs,e,t,n,i,s),!0;case"dragenter":return ks=Po(ks,e,t,n,i,s),!0;case"mouseover":return Xs=Po(Xs,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return pl.set(a,Po(pl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,ml.set(a,Po(ml.get(a)||null,e,t,n,i,s)),!0}return!1}function Zy(e){var t=hr(e.target);if(t!==null){var n=gl(t);if(n!==null){if(t=n.tag,t===13){if(t=fv(n),t!==null){e.blockedOn=t,k0(e.priority,function(){av(n)});return}}else if(t===31){if(t=dv(n),t!==null){e.blockedOn=t,k0(e.priority,function(){av(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Np(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Qd=i,n.target.dispatchEvent(i),Qd=null}else return t=Vr(n),t!==null&&qy(t),e.blockedOn=n,!1;t.shift()}return!0}function ov(e,t,n){Jc(e)&&n.delete(t)}function GT(){Lp=!1,Gs!==null&&Jc(Gs)&&(Gs=null),ks!==null&&Jc(ks)&&(ks=null),Xs!==null&&Jc(Xs)&&(Xs=null),pl.forEach(ov),ml.forEach(ov)}function Lc(e,t){e.blockedOn===t&&(e.blockedOn=null,Lp||(Lp=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,GT)))}var Ic=null;function lv(e){Ic!==e&&(Ic=e,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,function(){Ic===e&&(Ic=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Cm(i||n)===null)continue;break}var a=Vr(n);a!==null&&(e.splice(t,3),t-=3,dp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Fr(e){function t(l){return Lc(l,e)}Gs!==null&&Lc(Gs,e),ks!==null&&Lc(ks,e),Xs!==null&&Lc(Xs,e),pl.forEach(t),ml.forEach(t);for(var n=0;n<Ds.length;n++){var i=Ds[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ds.length&&(n=Ds[0],n.blockedOn===null);)Zy(n),n.blockedOn===null&&Ds.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Rn]||null;if(typeof a=="function")r||lv(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Rn]||null)o=r.formAction;else if(Cm(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),lv(n)}}}function Jy(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Rm(e){this._internalRoot=e}Vu.prototype.render=Rm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));var n=t.current,i=Hn();Wy(n,i,e,t,null,null)};Vu.prototype.unmount=Rm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wy(e.current,2,null,e,null,null),Bu(),t[zr]=null}};function Vu(e){this._internalRoot=e}Vu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ds.length&&t!==0&&t<Ds[n].priority;n++);Ds.splice(n,0,e),n===0&&Zy(e)}};var cv=uv.version;if(cv!=="19.2.7")throw Error(Q(527,cv,"19.2.7"));ie.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=yb(t),e=e!==null?pv(e):null,e=e===null?null:e.stateNode,e};var kT={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:Nt,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Bo.isDisabled&&Bo.supportsFiber))try{_l=Bo.inject(kT),zn=Bo}catch{}var Bo;Hu.createRoot=function(e,t){if(!hv(e))throw Error(Q(299));var n=!1,i="",s=Vx,a=Hx,r=Gx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=ky(e,1,!1,null,null,n,i,null,s,a,r,Jy),e[zr]=t.current,bm(e),new Rm(t)};Hu.hydrateRoot=function(e,t,n){if(!hv(e))throw Error(Q(299));var i=!1,s="",a=Vx,r=Hx,o=Gx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=ky(e,1,!0,t,n??null,i,s,l,a,r,o,Jy),t.context=Xy(null),n=t.current,i=Hn(),i=Bp(i),s=Fs(i),s.callback=null,zs(n,s,i),n=i,t.current.lanes=n,xl(t,n),Ii(t),e[zr]=t.current,bm(e),new Vu(t)};Hu.version="19.2.7"});var $y=wi((X2,jy)=>{"use strict";function Qy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qy)}catch(e){console.error(e)}}Qy(),jy.exports=Ky()});var IM=wi(Gf=>{"use strict";var D2=Symbol.for("react.transitional.element"),U2=Symbol.for("react.fragment");function LM(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:D2,type:e,key:i,ref:t!==void 0?t:null,props:n}}Gf.Fragment=U2;Gf.jsx=LM;Gf.jsxs=LM});var $g=wi((eL,OM)=>{"use strict";OM.exports=IM()});var FM=Eo(Ao()),zM=Eo($y());var To=Eo(Ao());var xS=0,ag=1,yS=2;var Kl=1,SS=2,fo=3,gs=0,Mn=1,Hi=2,hi=0,ka=1,Ql=2,rg=3,og=4,MS=5;var sa=100,bS=101,TS=102,ES=103,AS=104,wS=200,CS=201,RS=202,DS=203,ch=204,uh=205,US=206,NS=207,LS=208,IS=209,OS=210,PS=211,BS=212,FS=213,zS=214,hh=0,fh=1,dh=2,Xa=3,ph=4,mh=5,gh=6,_h=7,lg=0,VS=1,HS=2,yi=0,cg=1,ug=2,hg=3,fg=4,dg=5,pg=6,mg=7;var gg=300,ua=301,Za=302,kh=303,Xh=304,jl=306,vh=1e3,Bi=1001,xh=1002,en=1003,GS=1004;var $l=1005;var cn=1006,Wh=1007;var ha=1008;var Jn=1009,_g=1010,vg=1011,po=1012,qh=1013,Si=1014,Mi=1015,mn=1016,Yh=1017,Zh=1018,mo=1020,xg=35902,yg=35899,Sg=1021,Mg=1022,fi=1023,Fi=1026,fa=1027,bg=1028,Jh=1029,da=1030,Kh=1031;var Qh=1033,tc=33776,ec=33777,nc=33778,ic=33779,jh=35840,$h=35841,tf=35842,ef=35843,nf=36196,sf=37492,af=37496,rf=37488,of=37489,sc=37490,lf=37491,cf=37808,uf=37809,hf=37810,ff=37811,df=37812,pf=37813,mf=37814,gf=37815,_f=37816,vf=37817,xf=37818,yf=37819,Sf=37820,Mf=37821,bf=36492,Tf=36494,Ef=36495,Af=36283,wf=36284,ac=36285,Cf=36286;var Il=2300,yh=2301,lh=2302,Qm=2303,jm=2400,$m=2401,tg=2402;var kS=3200;var Tg=0,XS=1,xs="",qn="srgb",Ol="srgb-linear",Pl="linear",se="srgb";var Va=7680;var eg=519,WS=512,qS=513,YS=514,Rf=515,ZS=516,JS=517,Df=518,KS=519,ng=35044;var Eg="300 es",xi=2e3,Bl=2001;function XT(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function WT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Fl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function QS(){let e=Fl("canvas");return e.style.display="block",e}var tS={},ro=null;function Ag(...e){let t="THREE."+e.shift();ro?ro("log",t,...e):console.log(t,...e)}function jS(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function wt(...e){e=jS(e);let t="THREE."+e.shift();if(ro)ro("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ut(...e){e=jS(e);let t="THREE."+e.shift();if(ro)ro("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ga(...e){let t=e.join(" ");t in tS||(tS[t]=!0,wt(...e))}function $S(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var tM={[hh]:fh,[dh]:gh,[ph]:_h,[Xa]:mh,[fh]:hh,[gh]:dh,[_h]:ph,[mh]:Xa},zi=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eS=1234567,Nl=Math.PI/180,oo=180/Math.PI;function go(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[e&255]+fn[e>>8&255]+fn[e>>16&255]+fn[e>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function Kt(e,t,n){return Math.max(t,Math.min(n,e))}function wg(e,t){return(e%t+t)%t}function qT(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function YT(e,t,n){return e!==t?(n-e)/(t-e):0}function Ll(e,t,n){return(1-n)*e+n*t}function ZT(e,t,n,i){return Ll(e,t,1-Math.exp(-n*i))}function JT(e,t=1){return t-Math.abs(wg(e,t*2)-t)}function KT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function QT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function jT(e,t){return e+Math.floor(Math.random()*(t-e+1))}function $T(e,t){return e+Math.random()*(t-e)}function tE(e){return e*(.5-Math.random())}function eE(e){e!==void 0&&(eS=e);let t=eS+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nE(e){return e*Nl}function iE(e){return e*oo}function sE(e){return(e&e-1)===0&&e!==0}function aE(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function rE(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function oE(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),f=r((t+i)/2),p=a((t-i)/2),u=r((t-i)/2),d=a((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":e.set(o*f,l*p,l*u,o*c);break;case"YZY":e.set(l*u,o*f,l*p,o*c);break;case"ZXZ":e.set(l*p,l*u,o*f,o*c);break;case"XZX":e.set(o*f,l*_,l*d,o*c);break;case"YXY":e.set(l*d,o*f,l*_,o*c);break;case"ZYZ":e.set(l*_,l*d,o*f,o*c);break;default:wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function so(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Uf={DEG2RAD:Nl,RAD2DEG:oo,generateUUID:go,clamp:Kt,euclideanModulo:wg,mapLinear:qT,inverseLerp:YT,lerp:Ll,damp:ZT,pingpong:JT,smoothstep:KT,smootherstep:QT,randInt:jT,randFloat:$T,randFloatSpread:tE,seededRandom:eE,degToRad:nE,radToDeg:iE,isPowerOfTwo:sE,ceilPowerOfTwo:aE,floorPowerOfTwo:rE,setQuaternionFromProperEuler:oE,normalize:yn,denormalize:so},Ng=class Ng{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Kt(this.x,t.x,n.x),this.y=Kt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Kt(this.x,t,n),this.y=Kt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ng.prototype.isVector2=!0;var Ct=Ng,Vi=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],_=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==d||f!==_){let m=l*u+c*d+f*_+p*b;m<0&&(u=-u,d=-d,_=-_,b=-b,m=-m);let h=1-o;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);h=Math.sin(h*v)/S,o=Math.sin(o*v)/S,l=l*h+u*o,c=c*h+d*o,f=f*h+_*o,p=p*h+b*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+_*o,p=p*h+b*o;let v=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=v,c*=v,f*=v,p*=v}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],_=a[r+3];return t[n]=o*_+f*p+l*d-c*u,t[n+1]=l*_+f*u+c*p-o*d,t[n+2]=c*_+f*d+o*u-l*p,t[n+3]=f*_-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p-u*d*_;break;case"YXZ":this._x=u*f*p+c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p+u*d*_;break;case"ZXY":this._x=u*f*p-c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p-u*d*_;break;case"ZYX":this._x=u*f*p-c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p+u*d*_;break;case"YZX":this._x=u*f*p+c*d*_,this._y=c*d*p+u*f*_,this._z=c*f*_-u*d*p,this._w=c*f*p-u*d*_;break;case"XZY":this._x=u*f*p-c*d*_,this._y=c*d*p-u*f*_,this._z=c*f*_+u*d*p,this._w=c*f*p+u*d*_;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Lg=class Lg{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(nS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(nS.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Kt(this.x,t.x,n.x),this.y=Kt(this.y,t.y,n.y),this.z=Kt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Kt(this.x,t,n),this.y=Kt(this.y,t,n),this.z=Kt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Dm.copy(this).projectOnVector(t),this.sub(Dm)}reflect(t){return this.sub(Dm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lg.prototype.isVector3=!0;var P=Lg,Dm=new P,nS=new Vi,Ig=class Ig{constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],_=i[8],b=s[0],m=s[3],h=s[6],v=s[1],S=s[4],x=s[7],T=s[2],A=s[5],w=s[8];return a[0]=r*b+o*v+l*T,a[3]=r*m+o*S+l*A,a[6]=r*h+o*x+l*w,a[1]=c*b+f*v+p*T,a[4]=c*m+f*S+p*A,a[7]=c*h+f*x+p*w,a[2]=u*b+d*v+_*T,a[5]=u*m+d*S+_*A,a[8]=u*h+d*x+_*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,_=n*p+i*u+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return t[0]=p*b,t[1]=(s*c-f*i)*b,t[2]=(o*i-s*r)*b,t[3]=u*b,t[4]=(f*n-s*l)*b,t[5]=(s*a-o*n)*b,t[6]=d*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*a)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Ga("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Um.makeScale(t,n)),this}rotate(t){return Ga("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Um.makeRotation(-t)),this}translate(t,n){return Ga("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Um.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ig.prototype.isMatrix3=!0;var It=Ig,Um=new It,iS=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sS=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lE(){let e={enabled:!0,workingColorSpace:Ol,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===se&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===se&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xs?Pl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Ol]:{primaries:t,whitePoint:i,transfer:Pl,toXYZ:iS,fromXYZ:sS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:i,transfer:se,toXYZ:iS,fromXYZ:sS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),e}var Jt=lE();function ms(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ao(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var qr,Sh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{qr===void 0&&(qr=Fl("canvas")),qr.width=t.width,qr.height=t.height;let s=qr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=qr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Fl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ms(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:t.width,height:t.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cE=0,lo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=go(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Nm(s[r].image)):a.push(Nm(s[r]))}else a=Nm(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Nm(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Sh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}var uE=0,Lm=new P,Nn=class e extends zi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Bi,s=Bi,a=cn,r=ha,o=fi,l=Jn,c=e.DEFAULT_ANISOTROPY,f=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=go(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lm).x}get height(){return this.source.getSize(Lm).y}get depth(){return this.source.getSize(Lm).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){wt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){wt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vh:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case xh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vh:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case xh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=gg;Nn.DEFAULT_ANISOTROPY=1;var Og=class Og{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],_=l[9],b=l[2],m=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-b)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+b)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,x=(d+1)/2,T=(h+1)/2,A=(f+u)/4,w=(p+b)/4,y=(_+m)/4;return S>x&&S>T?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=A/i,a=w/i):x>T?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=A/s,a=y/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=w/a,s=y/a),this.set(i,s,a,n),this}let v=Math.sqrt((m-_)*(m-_)+(p-b)*(p-b)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(p-b)/v,this.z=(u-f)/v,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Kt(this.x,t.x,n.x),this.y=Kt(this.y,t.y,n.y),this.z=Kt(this.z,t.z,n.z),this.w=Kt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Kt(this.x,t,n),this.y=Kt(this.y,t,n),this.z=Kt(this.z,t,n),this.w=Kt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Og.prototype.isVector4=!0;var Ee=Og,Mh=class extends zi{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ee(0,0,t,n),this.scissorTest=!1,this.viewport=new Ee(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Nn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new lo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Mh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},zl=class extends Nn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bh=class extends Nn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gh=class Gh{constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,_,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,_,b,m)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,_,b,m){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=_,h[11]=b,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gh().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Yr.setFromMatrixColumn(t,0).length(),a=1/Yr.setFromMatrixColumn(t,1).length(),r=1/Yr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,_=o*f,b=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+_*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=_+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,_=c*f,b=c*p;n[0]=u+b*o,n[4]=_*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-_,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,_=c*f,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=_+d*o,n[1]=d+_*o,n[5]=r*f,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,_=o*f,b=o*p;n[0]=l*f,n[4]=_*c-d,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=d*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,_=o*l,b=o*c;n[0]=l*f,n[4]=b-u*p,n[8]=_*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+_,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,d=r*c,_=o*l,b=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+b,n[5]=r*f,n[9]=d*p-_,n[2]=_*p-d,n[6]=o*f,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hE,t,fE)}lookAt(t,n,i){let s=this.elements;return Xn.subVectors(t,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Qs.crossVectors(i,Xn),Qs.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Qs.crossVectors(i,Xn)),Qs.normalize(),Gu.crossVectors(Xn,Qs),s[0]=Qs.x,s[4]=Gu.x,s[8]=Xn.x,s[1]=Qs.y,s[5]=Gu.y,s[9]=Xn.y,s[2]=Qs.z,s[6]=Gu.z,s[10]=Xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],_=i[2],b=i[6],m=i[10],h=i[14],v=i[3],S=i[7],x=i[11],T=i[15],A=s[0],w=s[4],y=s[8],E=s[12],R=s[1],D=s[5],O=s[9],W=s[13],Y=s[2],z=s[6],k=s[10],G=s[14],j=s[3],tt=s[7],st=s[11],ut=s[15];return a[0]=r*A+o*R+l*Y+c*j,a[4]=r*w+o*D+l*z+c*tt,a[8]=r*y+o*O+l*k+c*st,a[12]=r*E+o*W+l*G+c*ut,a[1]=f*A+p*R+u*Y+d*j,a[5]=f*w+p*D+u*z+d*tt,a[9]=f*y+p*O+u*k+d*st,a[13]=f*E+p*W+u*G+d*ut,a[2]=_*A+b*R+m*Y+h*j,a[6]=_*w+b*D+m*z+h*tt,a[10]=_*y+b*O+m*k+h*st,a[14]=_*E+b*W+m*G+h*ut,a[3]=v*A+S*R+x*Y+T*j,a[7]=v*w+S*D+x*z+T*tt,a[11]=v*y+S*O+x*k+T*st,a[15]=v*E+S*W+x*G+T*ut,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],_=t[3],b=t[7],m=t[11],h=t[15],v=l*d-c*u,S=o*d-c*p,x=o*u-l*p,T=r*d-c*f,A=r*u-l*f,w=r*p-o*f;return n*(b*v-m*S+h*x)-i*(_*v-m*T+h*A)+s*(_*S-b*T+h*w)-a*(_*x-b*A+m*w)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],_=t[12],b=t[13],m=t[14],h=t[15],v=n*o-i*r,S=n*l-s*r,x=n*c-a*r,T=i*l-s*o,A=i*c-a*o,w=s*c-a*l,y=f*b-p*_,E=f*m-u*_,R=f*h-d*_,D=p*m-u*b,O=p*h-d*b,W=u*h-d*m,Y=v*W-S*O+x*D+T*R-A*E+w*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/Y;return t[0]=(o*W-l*O+c*D)*z,t[1]=(s*O-i*W-a*D)*z,t[2]=(b*w-m*A+h*T)*z,t[3]=(u*A-p*w-d*T)*z,t[4]=(l*R-r*W-c*E)*z,t[5]=(n*W-s*R+a*E)*z,t[6]=(m*x-_*w-h*S)*z,t[7]=(f*w-u*x+d*S)*z,t[8]=(r*O-o*R+c*y)*z,t[9]=(i*R-n*O-a*y)*z,t[10]=(_*A-b*x+h*v)*z,t[11]=(p*x-f*A-d*v)*z,t[12]=(o*E-r*D-l*y)*z,t[13]=(n*D-i*E+s*y)*z,t[14]=(b*S-_*T-m*v)*z,t[15]=(f*T-p*S+u*v)*z,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,_=a*p,b=r*f,m=r*p,h=o*p,v=l*c,S=l*f,x=l*p,T=i.x,A=i.y,w=i.z;return s[0]=(1-(b+h))*T,s[1]=(d+x)*T,s[2]=(_-S)*T,s[3]=0,s[4]=(d-x)*A,s[5]=(1-(u+h))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(_+S)*w,s[9]=(m-v)*w,s[10]=(1-(u+b))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Yr.set(s[0],s[1],s[2]).length(),o=Yr.set(s[4],s[5],s[6]).length(),l=Yr.set(s[8],s[9],s[10]).length();a<0&&(r=-r),gi.copy(this);let c=1/r,f=1/o,p=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=f,gi.elements[5]*=f,gi.elements[6]*=f,gi.elements[8]*=p,gi.elements[9]*=p,gi.elements[10]*=p,n.setFromRotationMatrix(gi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=xi,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),_,b;if(l)_=a/(r-a),b=r*a/(r-a);else if(o===xi)_=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===Bl)_=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=xi,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),_,b;if(l)_=1/(r-a),b=r/(r-a);else if(o===xi)_=-2/(r-a),b=-(r+a)/(r-a);else if(o===Bl)_=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Gh.prototype.isMatrix4=!0;var Pe=Gh,Yr=new P,gi=new Pe,hE=new P(0,0,0),fE=new P(1,1,1),Qs=new P,Gu=new P,Xn=new P,aS=new Pe,rS=new Vi,aa=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return aS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(aS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return rS.setFromEuler(this),this.setFromQuaternion(rS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};aa.DEFAULT_ORDER="XYZ";var Vl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dE=0,oS=new P,Zr=new Vi,us=new Pe,ku=new P,Cl=new P,pE=new P,mE=new Vi,lS=new P(1,0,0),cS=new P(0,1,0),uS=new P(0,0,1),hS={type:"added"},gE={type:"removed"},Jr={type:"childadded",child:null},Im={type:"childremoved",child:null},ci=class e extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new aa,i=new Vi,s=new P(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new It}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Zr.setFromAxisAngle(t,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(t,n){return Zr.setFromAxisAngle(t,n),this.quaternion.premultiply(Zr),this}rotateX(t){return this.rotateOnAxis(lS,t)}rotateY(t){return this.rotateOnAxis(cS,t)}rotateZ(t){return this.rotateOnAxis(uS,t)}translateOnAxis(t,n){return oS.copy(t).applyQuaternion(this.quaternion),this.position.add(oS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(lS,t)}translateY(t){return this.translateOnAxis(cS,t)}translateZ(t){return this.translateOnAxis(uS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(us.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ku.copy(t):ku.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?us.lookAt(Cl,ku,this.up):us.lookAt(ku,Cl,this.up),this.quaternion.setFromRotationMatrix(us),s&&(us.extractRotation(s.matrixWorld),Zr.setFromRotationMatrix(us),this.quaternion.premultiply(Zr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hS),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(gE),Im.child=t,this.dispatchEvent(Im),Im.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),us.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),us.multiply(t.parent.matrixWorld)),t.applyMatrix4(us),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hS),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,t,pE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,mE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ci.DEFAULT_UP=new P(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ha=class extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}},_E={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let m=n.getJointPose(b,i),h=this._getHandJoint(c,b);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_E)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Ha;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},eM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},Xu={h:0,s:0,l:0};function Om(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Vt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Jt.workingColorSpace){if(t=wg(t,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Om(r,a,t+1/3),this.g=Om(r,a,t),this.b=Om(r,a,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,n=qn){function i(a){a!==void 0&&parseFloat(a)<1&&wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=qn){let i=eM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return Jt.workingToColorSpace(dn.copy(this),t),Math.round(Kt(dn.r*255,0,255))*65536+Math.round(Kt(dn.g*255,0,255))*256+Math.round(Kt(dn.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.workingToColorSpace(dn.copy(this),n);let i=dn.r,s=dn.g,a=dn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Jt.workingColorSpace){return Jt.workingToColorSpace(dn.copy(this),n),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=qn){Jt.workingToColorSpace(dn.copy(this),t);let n=dn.r,i=dn.g,s=dn.b;return t!==qn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(js),this.setHSL(js.h+t,js.s+n,js.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(js),t.getHSL(Xu);let i=Ll(js.h,Xu.h,n),s=Ll(js.s,Xu.s,n),a=Ll(js.l,Xu.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Vt;Vt.NAMES=eM;var Hl=class extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new aa,this.environmentIntensity=1,this.environmentRotation=new aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},_i=new P,hs=new P,Pm=new P,fs=new P,Kr=new P,Qr=new P,fS=new P,Bm=new P,Fm=new P,zm=new P,Vm=new Ee,Hm=new Ee,Gm=new Ee,ia=class e{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),_i.subVectors(t,n),s.cross(_i);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){_i.subVectors(s,n),hs.subVectors(i,n),Pm.subVectors(t,n);let r=_i.dot(_i),o=_i.dot(hs),l=_i.dot(Pm),c=hs.dot(hs),f=hs.dot(Pm),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,_=(r*f-o*l)*u;return a.set(1-d-_,_,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,fs)===null?!1:fs.x>=0&&fs.y>=0&&fs.x+fs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,fs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,fs.x),l.addScaledVector(r,fs.y),l.addScaledVector(o,fs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Vm.setScalar(0),Hm.setScalar(0),Gm.setScalar(0),Vm.fromBufferAttribute(t,n),Hm.fromBufferAttribute(t,i),Gm.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Vm,a.x),r.addScaledVector(Hm,a.y),r.addScaledVector(Gm,a.z),r}static isFrontFacing(t,n,i,s){return _i.subVectors(i,n),hs.subVectors(t,n),_i.cross(hs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),hs.subVectors(this.a,this.b),_i.cross(hs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Kr.subVectors(s,i),Qr.subVectors(a,i),Bm.subVectors(t,i);let l=Kr.dot(Bm),c=Qr.dot(Bm);if(l<=0&&c<=0)return n.copy(i);Fm.subVectors(t,s);let f=Kr.dot(Fm),p=Qr.dot(Fm);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(Kr,r);zm.subVectors(t,a);let d=Kr.dot(zm),_=Qr.dot(zm);if(_>=0&&d<=_)return n.copy(a);let b=d*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Qr,o);let m=f*_-d*p;if(m<=0&&p-f>=0&&d-_>=0)return fS.subVectors(a,s),o=(p-f)/(p-f+(d-_)),n.copy(s).addScaledVector(fS,o);let h=1/(m+b+u);return r=b*h,o=u*h,n.copy(i).addScaledVector(Kr,r).addScaledVector(Qr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ra=class{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(vi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=vi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,vi):vi.fromBufferAttribute(a,r),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wu.copy(i.boundingBox)),Wu.applyMatrix4(t.matrixWorld),this.union(Wu)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rl),qu.subVectors(this.max,Rl),jr.subVectors(t.a,Rl),$r.subVectors(t.b,Rl),to.subVectors(t.c,Rl),$s.subVectors($r,jr),ta.subVectors(to,$r),Pa.subVectors(jr,to);let n=[0,-$s.z,$s.y,0,-ta.z,ta.y,0,-Pa.z,Pa.y,$s.z,0,-$s.x,ta.z,0,-ta.x,Pa.z,0,-Pa.x,-$s.y,$s.x,0,-ta.y,ta.x,0,-Pa.y,Pa.x,0];return!km(n,jr,$r,to,qu)||(n=[1,0,0,0,1,0,0,0,1],!km(n,jr,$r,to,qu))?!1:(Yu.crossVectors($s,ta),n=[Yu.x,Yu.y,Yu.z],km(n,jr,$r,to,qu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ds[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ds[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ds[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ds[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ds[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ds[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ds[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ds[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ds),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ds=[new P,new P,new P,new P,new P,new P,new P,new P],vi=new P,Wu=new ra,jr=new P,$r=new P,to=new P,$s=new P,ta=new P,Pa=new P,Rl=new P,qu=new P,Yu=new P,Ba=new P;function km(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Ba.fromArray(e,a);let o=s.x*Math.abs(Ba.x)+s.y*Math.abs(Ba.y)+s.z*Math.abs(Ba.z),l=t.dot(Ba),c=n.dot(Ba),f=i.dot(Ba);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var ke=new P,Zu=new Ct,vE=0,Yn=class extends zi{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=ng,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Zu.fromBufferAttribute(this,n),Zu.applyMatrix3(t),this.setXY(n,Zu.x,Zu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix3(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix4(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyNormalMatrix(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.transformDirection(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=so(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=so(n,this.array)),n}setX(t,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=so(n,this.array)),n}setY(t,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=so(n,this.array)),n}setZ(t,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=so(n,this.array)),n}setW(t,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array),a=yn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ng&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Gl=class extends Yn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var kl=class extends Yn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Sn=class extends Yn{constructor(t,n,i){super(new Float32Array(t),n,i)}},xE=new ra,Dl=new P,Xm=new P,uo=class{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):xE.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dl.subVectors(t,this.center);let n=Dl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Dl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dl.copy(t.center).add(Xm)),this.expandByPoint(Dl.copy(t.center).sub(Xm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yE=0,li=new Pe,Wm=new ci,eo=new P,Wn=new ra,Ul=new ra,tn=new P,ui=class e extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(XT(t)?kl:Gl)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new It().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return li.makeRotationFromQuaternion(t),this.applyMatrix4(li),this}rotateX(t){return li.makeRotationX(t),this.applyMatrix4(li),this}rotateY(t){return li.makeRotationY(t),this.applyMatrix4(li),this}rotateZ(t){return li.makeRotationZ(t),this.applyMatrix4(li),this}translate(t,n,i){return li.makeTranslation(t,n,i),this.applyMatrix4(li),this}scale(t,n,i){return li.makeScale(t,n,i),this.applyMatrix4(li),this}lookAt(t){return Wm.lookAt(t),Wm.updateMatrix(),this.applyMatrix4(Wm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Sn(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Wn.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Ul.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Wn.min,Ul.min),Wn.expandByPoint(tn),tn.addVectors(Wn.max,Ul.max),Wn.expandByPoint(tn)):(Wn.expandByPoint(Ul.min),Wn.expandByPoint(Ul.max))}Wn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)tn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(tn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)tn.fromBufferAttribute(o,c),l&&(eo.fromBufferAttribute(t,c),tn.add(eo)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Yn(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new P,l[y]=new P;let c=new P,f=new P,p=new P,u=new Ct,d=new Ct,_=new Ct,b=new P,m=new P;function h(y,E,R){c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,E),p.fromBufferAttribute(i,R),u.fromBufferAttribute(a,y),d.fromBufferAttribute(a,E),_.fromBufferAttribute(a,R),f.sub(c),p.sub(c),d.sub(u),_.sub(u);let D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(b.copy(f).multiplyScalar(_.y).addScaledVector(p,-d.y).multiplyScalar(D),m.copy(p).multiplyScalar(d.x).addScaledVector(f,-_.x).multiplyScalar(D),o[y].add(b),o[E].add(b),o[R].add(b),l[y].add(m),l[E].add(m),l[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,E=v.length;y<E;++y){let R=v[y],D=R.start,O=R.count;for(let W=D,Y=D+O;W<Y;W+=3)h(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let S=new P,x=new P,T=new P,A=new P;function w(y){T.fromBufferAttribute(s,y),A.copy(T);let E=o[y];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),x.crossVectors(A,E);let D=x.dot(l[y])<0?-1:1;r.setXYZW(y,S.x,S.y,S.z,D)}for(let y=0,E=v.length;y<E;++y){let R=v[y],D=R.start,O=R.count;for(let W=D,Y=D+O;W<Y;W+=3)w(t.getX(W+0)),w(t.getX(W+1)),w(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new P,a=new P,r=new P,o=new P,l=new P,c=new P,f=new P,p=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){let _=t.getX(u+0),b=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,m),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)tn.fromBufferAttribute(t,n),tn.normalize(),t.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,_=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*f;for(let h=0;h<f;h++)u[_++]=c[d++]}return new Yn(u,f,p)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var SE=0,Wa=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=go(),this.name="",this.type="Material",this.blending=ka,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=uh,this.blendEquation=sa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){wt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){wt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ka&&(i.blending=this.blending),this.side!==gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ch&&(i.blendSrc=this.blendSrc),this.blendDst!==uh&&(i.blendDst=this.blendDst),this.blendEquation!==sa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Va&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Va&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Va&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ct().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ps=new P,qm=new P,Ju=new P,ea=new P,Ym=new P,Ku=new P,Zm=new P,Th=class{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ps)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ps.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ps.copy(this.origin).addScaledVector(this.direction,n),ps.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){qm.copy(t).add(n).multiplyScalar(.5),Ju.copy(n).sub(t).normalize(),ea.copy(this.origin).sub(qm);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Ju),o=ea.dot(this.direction),l=-ea.dot(Ju),c=ea.lengthSq(),f=Math.abs(1-r*r),p,u,d,_;if(f>0)if(p=r*l-o,u=r*o-l,_=a*f,p>=0)if(u>=-_)if(u<=_){let b=1/f;p*=b,u*=b,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(qm).addScaledVector(Ju,u),d}intersectSphere(t,n){ps.subVectors(t.center,this.origin);let i=ps.dot(this.direction),s=ps.dot(ps)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,ps)!==null}intersectTriangle(t,n,i,s,a){Ym.subVectors(n,t),Ku.subVectors(i,t),Zm.crossVectors(Ym,Ku);let r=this.direction.dot(Zm),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ea.subVectors(this.origin,t);let l=o*this.direction.dot(Ku.crossVectors(ea,Ku));if(l<0)return null;let c=o*this.direction.dot(Ym.cross(ea));if(c<0||l+c>r)return null;let f=-o*ea.dot(Zm);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qa=class extends Wa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.combine=lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dS=new Pe,Fa=new Th,Qu=new uo,pS=new P,ju=new P,$u=new P,th=new P,Jm=new P,eh=new P,mS=new P,nh=new P,pn=class extends ci{constructor(t=new ui,n=new qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){eh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(Jm.fromBufferAttribute(p,t),r?eh.addScaledVector(Jm,f):eh.addScaledVector(Jm.sub(n),f))}n.add(eh)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qu.copy(i.boundingSphere),Qu.applyMatrix4(a),Fa.copy(t.ray).recast(t.near),!(Qu.containsPoint(Fa.origin)===!1&&(Fa.intersectSphere(Qu,pS)===null||Fa.origin.distanceToSquared(pS)>(t.far-t.near)**2))&&(dS.copy(a).invert(),Fa.copy(t.ray).applyMatrix4(dS),!(i.boundingBox!==null&&Fa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Fa)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,b=u.length;_<b;_++){let m=u[_],h=r[m.materialIndex],v=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,T=S;x<T;x+=3){let A=o.getX(x),w=o.getX(x+1),y=o.getX(x+2);s=ih(this,h,t,i,c,f,p,A,w,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let m=_,h=b;m<h;m+=3){let v=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);s=ih(this,r,t,i,c,f,p,v,S,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,b=u.length;_<b;_++){let m=u[_],h=r[m.materialIndex],v=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,T=S;x<T;x+=3){let A=x,w=x+1,y=x+2;s=ih(this,h,t,i,c,f,p,A,w,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=_,h=b;m<h;m+=3){let v=m,S=m+1,x=m+2;s=ih(this,r,t,i,c,f,p,v,S,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function ME(e,t,n,i,s,a,r,o){let l;if(t.side===Mn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===gs,o),l===null)return null;nh.copy(o),nh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(nh);return c<n.near||c>n.far?null:{distance:c,point:nh.clone(),object:e}}function ih(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,ju),e.getVertexPosition(l,$u),e.getVertexPosition(c,th);let f=ME(e,t,n,i,ju,$u,th,mS);if(f){let p=new P;ia.getBarycoord(mS,ju,$u,th,p),s&&(f.uv=ia.getInterpolatedAttribute(s,o,l,c,p,new Ct)),a&&(f.uv1=ia.getInterpolatedAttribute(a,o,l,c,p,new Ct)),r&&(f.normal=ia.getInterpolatedAttribute(r,o,l,c,p,new P),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};ia.getNormal(ju,$u,th,u.normal),f.face=u,f.barycoord=p}return f}var Eh=class extends Nn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=en,f=en,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Km=new P,bE=new P,TE=new It,Pi=class{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Km.subVectors(i,n).cross(bE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(Km),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||TE.getNormalMatrix(t),s=this.coplanarPoint(Km).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},za=new uo,EE=new Ct(.5,.5),sh=new P,Xl=class{constructor(t=new Pi,n=new Pi,i=new Pi,s=new Pi,a=new Pi,r=new Pi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=xi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],_=a[8],b=a[9],m=a[10],h=a[11],v=a[12],S=a[13],x=a[14],T=a[15];if(s[0].setComponents(c-r,d-f,h-_,T-v).normalize(),s[1].setComponents(c+r,d+f,h+_,T+v).normalize(),s[2].setComponents(c+o,d+p,h+b,T+S).normalize(),s[3].setComponents(c-o,d-p,h-b,T-S).normalize(),i)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,d-u,h-m,T-x).normalize();else if(s[4].setComponents(c-l,d-u,h-m,T-x).normalize(),n===xi)s[5].setComponents(c+l,d+u,h+m,T+x).normalize();else if(n===Bl)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),za.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(za)}intersectsSprite(t){za.center.set(0,0,0);let n=EE.distanceTo(t.center);return za.radius=.7071067811865476+n,za.applyMatrix4(t.matrixWorld),this.intersectsSphere(za)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(sh.x=s.normal.x>0?t.max.x:t.min.x,sh.y=s.normal.y>0?t.max.y:t.min.y,sh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wl=class extends Nn{constructor(t=[],n=ua,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var _s=class extends Nn{constructor(t,n,i=Si,s,a,r,o=en,l=en,c,f=Fi,p=1){if(f!==Fi&&f!==fa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Ah=class extends _s{constructor(t,n=Si,i=ua,s,a,r=en,o=en,l,c=Fi){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ql=class extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ho=class e extends ui{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(f,3)),this.setAttribute("uv",new Sn(p,2));function _(b,m,h,v,S,x,T,A,w,y,E){let R=x/w,D=T/y,O=x/2,W=T/2,Y=A/2,z=w+1,k=y+1,G=0,j=0,tt=new P;for(let st=0;st<k;st++){let ut=st*D-W;for(let gt=0;gt<z;gt++){let Qt=gt*R-O;tt[b]=Qt*v,tt[m]=ut*S,tt[h]=Y,c.push(tt.x,tt.y,tt.z),tt[b]=0,tt[m]=0,tt[h]=A>0?1:-1,f.push(tt.x,tt.y,tt.z),p.push(gt/w),p.push(1-st/y),G+=1}}for(let st=0;st<y;st++)for(let ut=0;ut<w;ut++){let gt=u+ut+z*st,Qt=u+ut+z*(st+1),_e=u+(ut+1)+z*(st+1),$t=u+(ut+1)+z*st;l.push(gt,Qt,$t),l.push(Qt,_e,$t),j+=6}o.addGroup(d,j,E),d+=j,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ya=class e extends ui{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],_=[],b=[],m=[];for(let h=0;h<f;h++){let v=h*u-r;for(let S=0;S<c;S++){let x=S*p-a;_.push(x,-v,0),b.push(0,0,1),m.push(S/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<o;v++){let S=v+c*h,x=v+c*(h+1),T=v+1+c*(h+1),A=v+1+c*h;d.push(S,x,A),d.push(x,T,A)}this.setIndex(d),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(b,3)),this.setAttribute("uv",new Sn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ja(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(gS(s))s.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(gS(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function gn(e){let t={};for(let n=0;n<e.length;n++){let i=Ja(e[n]);for(let s in i)t[s]=i[s]}return t}function gS(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function AE(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Cg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Ka={clone:Ja,merge:gn},wE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends Wa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wE,this.fragmentShader=CE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ja(t.uniforms),this.uniformsGroups=AE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ct().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[i].value=new It().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Pe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wh=class extends Ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ch=class extends Wa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Rh=class extends Wa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ah(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var oa=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dh=class extends oa{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jm,endingEnd:jm}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case $m:a=t,o=2*n-i;break;case tg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case $m:r=t,l=2*i-n;break;case tg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(i-n)/(s-n),b=_*_,m=b*_,h=-u*m+2*u*b-u*_,v=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*_+1,S=(-1-d)*m+(1.5+d)*b+.5*_,x=d*m-d*b;for(let T=0;T!==o;++T)a[T]=h*r[f+T]+v*r[c+T]+S*r[l+T]+x*r[p+T];return a}},Uh=class extends oa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},Nh=class extends oa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Lh=class extends oa{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let _=(i-n)/(s-n),b=1-_;for(let m=0;m!==o;++m)a[m]=r[c+m]*b+r[l+m]*_;return a}let u=o*2,d=t-1;for(let _=0;_!==o;++_){let b=r[c+_],m=r[l+_],h=d*u+_*2,v=p[h],S=p[h+1],x=t*u+_*2,T=f[x],A=f[x+1],w=(i-n)/(s-n),y,E,R,D,O;for(let W=0;W<8;W++){y=w*w,E=y*w,R=1-w,D=R*R,O=D*R;let z=O*n+3*D*w*v+3*R*y*T+E*s-i;if(Math.abs(z)<1e-10)break;let k=3*D*(v-n)+6*R*w*(T-v)+3*y*(s-T);if(Math.abs(k)<1e-10)break;w=w-z/k,w=Math.max(0,Math.min(1,w))}a[_]=O*b+3*D*w*S+3*R*y*A+E*m}return a}},Zn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ah(n,this.TimeBufferType),this.values=ah(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:ah(t.times,Array),values:ah(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Lh(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Il:n=this.InterpolantFactoryMethodDiscrete;break;case yh:n=this.InterpolantFactoryMethodLinear;break;case lh:n=this.InterpolantFactoryMethodSmooth;break;case Qm:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return wt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Il;case this.InterpolantFactoryMethodLinear:return yh;case this.InterpolantFactoryMethodSmooth:return lh;case this.InterpolantFactoryMethodBezier:return Qm}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ut("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Ut("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&WT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ut("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===lh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let _=0;_!==i;++_){let b=n[p+_];if(b!==n[u+_]||b!==n[d+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=yh;var la=class extends Zn{constructor(t,n,i){super(t,n,i)}};la.prototype.ValueTypeName="bool";la.prototype.ValueBufferType=Array;la.prototype.DefaultInterpolation=Il;la.prototype.InterpolantFactoryMethodLinear=void 0;la.prototype.InterpolantFactoryMethodSmooth=void 0;var Ih=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}};Ih.prototype.ValueTypeName="color";var Oh=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}};Oh.prototype.ValueTypeName="number";var Ph=class extends oa{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)Vi.slerpFlat(a,0,r,c-o,r,c,l);return a}},Yl=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Ph(this.times,this.values,this.getValueSize(),t)}};Yl.prototype.ValueTypeName="quaternion";Yl.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends Zn{constructor(t,n,i){super(t,n,i)}};ca.prototype.ValueTypeName="string";ca.prototype.ValueBufferType=Array;ca.prototype.DefaultInterpolation=Il;ca.prototype.InterpolantFactoryMethodLinear=void 0;ca.prototype.InterpolantFactoryMethodSmooth=void 0;var Bh=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}};Bh.prototype.ValueTypeName="vector";var Fh=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],_=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nM=new Fh,zh=class{constructor(t){this.manager=t!==void 0?t:nM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};zh.DEFAULT_MATERIAL_NAME="__DEFAULT";var rh=new P,oh=new Vi,Oi=new P,Zl=class extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(rh,oh,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rh,oh,Oi.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(rh,oh,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rh,oh,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},na=new P,_S=new Ct,vS=new Ct,Un=class extends Zl{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=oo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){na.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(na.x,na.y).multiplyScalar(-t/na.z),na.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(na.x,na.y).multiplyScalar(-t/na.z)}getViewSize(t,n){return this.getViewBounds(t,_S,vS),n.subVectors(vS,_S)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Nl*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var vs=class extends Zl{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var no=-90,io=1,Vh=class extends ci{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Un(no,io,t,n);s.layers=this.layers,this.add(s);let a=new Un(no,io,t,n);a.layers=this.layers,this.add(a);let r=new Un(no,io,t,n);r.layers=this.layers,this.add(r);let o=new Un(no,io,t,n);o.layers=this.layers,this.add(o);let l=new Un(no,io,t,n);l.layers=this.layers,this.add(l);let c=new Un(no,io,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Hh=class extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Jl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=RE.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function RE(){this._document.hidden===!1&&this.reset()}var Rg="\\[\\]\\.:\\/",DE=new RegExp("["+Rg+"]","g"),Dg="[^"+Rg+"]",UE="[^"+Rg.replace("\\.","")+"]",NE=/((?:WC+[\/:])*)/.source.replace("WC",Dg),LE=/(WCOD+)?/.source.replace("WCOD",UE),IE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dg),OE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dg),PE=new RegExp("^"+NE+LE+IE+OE+"$"),BE=["material","materials","bones","map"],ig=class{constructor(t,n,i){let s=i||Me.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Me=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(DE,"")}static parseTrackName(t){let n=PE.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);BE.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Ut("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=ig;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W2=new Float32Array(1);var Pg=class Pg{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};Pg.prototype.isMatrix2=!0;var sg=Pg;function Ug(e,t,n,i){let s=FE(i);switch(n){case Sg:return e*t;case bg:return e*t/s.components*s.byteLength;case Jh:return e*t/s.components*s.byteLength;case da:return e*t*2/s.components*s.byteLength;case Kh:return e*t*2/s.components*s.byteLength;case Mg:return e*t*3/s.components*s.byteLength;case fi:return e*t*4/s.components*s.byteLength;case Qh:return e*t*4/s.components*s.byteLength;case tc:case ec:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case nc:case ic:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $h:case ef:return Math.max(e,16)*Math.max(t,8)/4;case jh:case tf:return Math.max(e,8)*Math.max(t,8)/2;case nf:case sf:case rf:case of:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case af:case sc:case lf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case cf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case uf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case hf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ff:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case df:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case pf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case mf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case gf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _f:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case vf:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case xf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case yf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Sf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Mf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case bf:case Tf:case Ef:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Af:case wf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ac:case Cf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function FE(e){switch(e){case Jn:case _g:return{byteLength:1,components:1};case po:case vg:case mn:return{byteLength:2,components:1};case Yh:case Zh:return{byteLength:2,components:4};case Si:case qh:case Mi:return{byteLength:4,components:1};case xg:case yg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function EM(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function VE(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<p.length;d++){let _=p[u],b=p[d];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,_=p.length;d<_;d++){let b=p[d];e.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var HE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,KE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$E=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_A="gl_FragColor = linearToOutputTexel( gl_FragColor );",vA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,SA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,LA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,XA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ew=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_w=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ew=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Aw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ww=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ow=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_C=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:HE,alphahash_pars_fragment:GE,alphamap_fragment:kE,alphamap_pars_fragment:XE,alphatest_fragment:WE,alphatest_pars_fragment:qE,aomap_fragment:YE,aomap_pars_fragment:ZE,batching_pars_vertex:JE,batching_vertex:KE,begin_vertex:QE,beginnormal_vertex:jE,bsdfs:$E,iridescence_fragment:tA,bumpmap_pars_fragment:eA,clipping_planes_fragment:nA,clipping_planes_pars_fragment:iA,clipping_planes_pars_vertex:sA,clipping_planes_vertex:aA,color_fragment:rA,color_pars_fragment:oA,color_pars_vertex:lA,color_vertex:cA,common:uA,cube_uv_reflection_fragment:hA,defaultnormal_vertex:fA,displacementmap_pars_vertex:dA,displacementmap_vertex:pA,emissivemap_fragment:mA,emissivemap_pars_fragment:gA,colorspace_fragment:_A,colorspace_pars_fragment:vA,envmap_fragment:xA,envmap_common_pars_fragment:yA,envmap_pars_fragment:SA,envmap_pars_vertex:MA,envmap_physical_pars_fragment:LA,envmap_vertex:bA,fog_vertex:TA,fog_pars_vertex:EA,fog_fragment:AA,fog_pars_fragment:wA,gradientmap_pars_fragment:CA,lightmap_pars_fragment:RA,lights_lambert_fragment:DA,lights_lambert_pars_fragment:UA,lights_pars_begin:NA,lights_toon_fragment:IA,lights_toon_pars_fragment:OA,lights_phong_fragment:PA,lights_phong_pars_fragment:BA,lights_physical_fragment:FA,lights_physical_pars_fragment:zA,lights_fragment_begin:VA,lights_fragment_maps:HA,lights_fragment_end:GA,lightprobes_pars_fragment:kA,logdepthbuf_fragment:XA,logdepthbuf_pars_fragment:WA,logdepthbuf_pars_vertex:qA,logdepthbuf_vertex:YA,map_fragment:ZA,map_pars_fragment:JA,map_particle_fragment:KA,map_particle_pars_fragment:QA,metalnessmap_fragment:jA,metalnessmap_pars_fragment:$A,morphinstance_vertex:tw,morphcolor_vertex:ew,morphnormal_vertex:nw,morphtarget_pars_vertex:iw,morphtarget_vertex:sw,normal_fragment_begin:aw,normal_fragment_maps:rw,normal_pars_fragment:ow,normal_pars_vertex:lw,normal_vertex:cw,normalmap_pars_fragment:uw,clearcoat_normal_fragment_begin:hw,clearcoat_normal_fragment_maps:fw,clearcoat_pars_fragment:dw,iridescence_pars_fragment:pw,opaque_fragment:mw,packing:gw,premultiplied_alpha_fragment:_w,project_vertex:vw,dithering_fragment:xw,dithering_pars_fragment:yw,roughnessmap_fragment:Sw,roughnessmap_pars_fragment:Mw,shadowmap_pars_fragment:bw,shadowmap_pars_vertex:Tw,shadowmap_vertex:Ew,shadowmask_pars_fragment:Aw,skinbase_vertex:ww,skinning_pars_vertex:Cw,skinning_vertex:Rw,skinnormal_vertex:Dw,specularmap_fragment:Uw,specularmap_pars_fragment:Nw,tonemapping_fragment:Lw,tonemapping_pars_fragment:Iw,transmission_fragment:Ow,transmission_pars_fragment:Pw,uv_pars_fragment:Bw,uv_pars_vertex:Fw,uv_vertex:zw,worldpos_vertex:Vw,background_vert:Hw,background_frag:Gw,backgroundCube_vert:kw,backgroundCube_frag:Xw,cube_vert:Ww,cube_frag:qw,depth_vert:Yw,depth_frag:Zw,distance_vert:Jw,distance_frag:Kw,equirect_vert:Qw,equirect_frag:jw,linedashed_vert:$w,linedashed_frag:tC,meshbasic_vert:eC,meshbasic_frag:nC,meshlambert_vert:iC,meshlambert_frag:sC,meshmatcap_vert:aC,meshmatcap_frag:rC,meshnormal_vert:oC,meshnormal_frag:lC,meshphong_vert:cC,meshphong_frag:uC,meshphysical_vert:hC,meshphysical_frag:fC,meshtoon_vert:dC,meshtoon_frag:pC,points_vert:mC,points_frag:gC,shadow_vert:_C,shadow_frag:vC,sprite_vert:xC,sprite_frag:yC},ft={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},ki={basic:{uniforms:gn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:gn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:gn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:gn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:gn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:gn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:gn([ft.points,ft.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:gn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:gn([ft.common,ft.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:gn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:gn([ft.sprite,ft.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:gn([ft.common,ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:gn([ft.lights,ft.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};ki.physical={uniforms:gn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Nf={r:0,b:0,g:0},SC=new Pe,AM=new It;AM.set(-1,0,0,0,1,0,0,0,1);function MC(e,t,n,i,s,a){let r=new Vt(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let x=v.backgroundBlurriness>0;S=t.get(S,x)}return S}function _(v){let S=!1,x=d(v);x===null?m(r,o):x&&x.isColor&&(m(x,1),S=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(v,S){let x=d(S);x&&(x.isCubeTexture||x.mapping===jl)?(c===void 0&&(c=new pn(new ho(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Ja(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SC.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(AM),c.material.toneMapped=Jt.getTransfer(x.colorSpace)!==se,(f!==x||p!==x.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=x,p=x.version,u=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new pn(new Ya(2,2),new Ae({name:"BackgroundMaterial",uniforms:Ja(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||p!==x.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=x,p=x.version,u=e.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(Nf,Cg(e)),n.buffers.color.setClear(Nf.r,Nf.g,Nf.b,S,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,S=1){r.set(v),o=S,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(r,o)},render:_,addToRenderList:b,dispose:h}}function bC(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(D,O,W,Y,z){let k=!1,G=p(D,Y,W,O);a!==G&&(a=G,c(a.object)),k=d(D,Y,W,z),k&&_(D,Y,W,z),z!==null&&t.update(z,e.ELEMENT_ARRAY_BUFFER),(k||r)&&(r=!1,x(D,O,W,Y),z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function f(D){return e.deleteVertexArray(D)}function p(D,O,W,Y){let z=Y.wireframe===!0,k=i[O.id];k===void 0&&(k={},i[O.id]=k);let G=D.isInstancedMesh===!0?D.id:0,j=k[G];j===void 0&&(j={},k[G]=j);let tt=j[W.id];tt===void 0&&(tt={},j[W.id]=tt);let st=tt[z];return st===void 0&&(st=u(l()),tt[z]=st),st}function u(D){let O=[],W=[],Y=[];for(let z=0;z<n;z++)O[z]=0,W[z]=0,Y[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:Y,object:D,attributes:{},index:null}}function d(D,O,W,Y){let z=a.attributes,k=O.attributes,G=0,j=W.getAttributes();for(let tt in j)if(j[tt].location>=0){let ut=z[tt],gt=k[tt];if(gt===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(gt=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(gt=D.instanceColor)),ut===void 0||ut.attribute!==gt||gt&&ut.data!==gt.data)return!0;G++}return a.attributesNum!==G||a.index!==Y}function _(D,O,W,Y){let z={},k=O.attributes,G=0,j=W.getAttributes();for(let tt in j)if(j[tt].location>=0){let ut=k[tt];ut===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(ut=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(ut=D.instanceColor));let gt={};gt.attribute=ut,ut&&ut.data&&(gt.data=ut.data),z[tt]=gt,G++}a.attributes=z,a.attributesNum=G,a.index=Y}function b(){let D=a.newAttributes;for(let O=0,W=D.length;O<W;O++)D[O]=0}function m(D){h(D,0)}function h(D,O){let W=a.newAttributes,Y=a.enabledAttributes,z=a.attributeDivisors;W[D]=1,Y[D]===0&&(e.enableVertexAttribArray(D),Y[D]=1),z[D]!==O&&(e.vertexAttribDivisor(D,O),z[D]=O)}function v(){let D=a.newAttributes,O=a.enabledAttributes;for(let W=0,Y=O.length;W<Y;W++)O[W]!==D[W]&&(e.disableVertexAttribArray(W),O[W]=0)}function S(D,O,W,Y,z,k,G){G===!0?e.vertexAttribIPointer(D,O,W,z,k):e.vertexAttribPointer(D,O,W,Y,z,k)}function x(D,O,W,Y){b();let z=Y.attributes,k=W.getAttributes(),G=O.defaultAttributeValues;for(let j in k){let tt=k[j];if(tt.location>=0){let st=z[j];if(st===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(st=D.instanceColor)),st!==void 0){let ut=st.normalized,gt=st.itemSize,Qt=t.get(st);if(Qt===void 0)continue;let _e=Qt.buffer,$t=Qt.type,Z=Qt.bytesPerElement,it=$t===e.INT||$t===e.UNSIGNED_INT||st.gpuType===qh;if(st.isInterleavedBufferAttribute){let et=st.data,Dt=et.stride,Lt=st.offset;if(et.isInstancedInterleavedBuffer){for(let xt=0;xt<tt.locationSize;xt++)h(tt.location+xt,et.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let xt=0;xt<tt.locationSize;xt++)m(tt.location+xt);e.bindBuffer(e.ARRAY_BUFFER,_e);for(let xt=0;xt<tt.locationSize;xt++)S(tt.location+xt,gt/tt.locationSize,$t,ut,Dt*Z,(Lt+gt/tt.locationSize*xt)*Z,it)}else{if(st.isInstancedBufferAttribute){for(let et=0;et<tt.locationSize;et++)h(tt.location+et,st.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let et=0;et<tt.locationSize;et++)m(tt.location+et);e.bindBuffer(e.ARRAY_BUFFER,_e);for(let et=0;et<tt.locationSize;et++)S(tt.location+et,gt/tt.locationSize,$t,ut,gt*Z,gt/tt.locationSize*et*Z,it)}}else if(G!==void 0){let ut=G[j];if(ut!==void 0)switch(ut.length){case 2:e.vertexAttrib2fv(tt.location,ut);break;case 3:e.vertexAttrib3fv(tt.location,ut);break;case 4:e.vertexAttrib4fv(tt.location,ut);break;default:e.vertexAttrib1fv(tt.location,ut)}}}}v()}function T(){E();for(let D in i){let O=i[D];for(let W in O){let Y=O[W];for(let z in Y){let k=Y[z];for(let G in k)f(k[G].object),delete k[G];delete Y[z]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;let O=i[D.id];for(let W in O){let Y=O[W];for(let z in Y){let k=Y[z];for(let G in k)f(k[G].object),delete k[G];delete Y[z]}}delete i[D.id]}function w(D){for(let O in i){let W=i[O];for(let Y in W){let z=W[Y];if(z[D.id]===void 0)continue;let k=z[D.id];for(let G in k)f(k[G].object),delete k[G];delete z[D.id]}}}function y(D){for(let O in i){let W=i[O],Y=D.isInstancedMesh===!0?D.id:0,z=W[Y];if(z!==void 0){for(let k in z){let G=z[k];for(let j in G)f(G[j].object),delete G[j];delete z[k]}delete W[Y],Object.keys(W).length===0&&delete i[O]}}}function E(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function TC(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function EC(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==fi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let y=w===mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Jn&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Mi&&!y)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(wt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:T,samples:A}}function AC(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Pi,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let _=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,h=e.get(p);if(!s||_===null||_.length===0||a&&!m)a?f(null):c();else{let v=a?0:i,S=v*4,x=h.clippingState||null;l.value=x,x=f(_,u,S,d);for(let T=0;T!==S;++T)x[T]=n[T];h.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,_){let b=p!==null?p.length:0,m=null;if(b!==0){if(m=l.value,_!==!0||m===null){let h=d+b*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,x=d;S!==b;++S,x+=4)r.copy(p[S]).applyMatrix4(v,o),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var pa=4,iM=[.125,.215,.35,.446,.526,.582],Qa=20,wC=256,rc=new vs,sM=new Vt,Bg=null,Fg=0,zg=0,Vg=!1,CC=new P,If=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=CC}=a;Bg=this._renderer.getRenderTarget(),Fg=this._renderer.getActiveCubeFace(),zg=this._renderer.getActiveMipmapLevel(),Vg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bg,Fg,zg),this._renderer.xr.enabled=Vg,t.scissorTest=!1,_o(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ua||t.mapping===Za?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bg=this._renderer.getRenderTarget(),Fg=this._renderer.getActiveCubeFace(),zg=this._renderer.getActiveMipmapLevel(),Vg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:mn,format:fi,colorSpace:Ol,depthBuffer:!1},s=aM(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=aM(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RC(a)),this._blurMaterial=UC(a,t,n),this._ggxMaterial=DC(a,t,n)}return s}_compileMaterial(t){let n=new pn(new ui,t);this._renderer.compile(n,rc)}_sceneToCubeUV(t,n,i,s,a){let l=new Un(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(sM),p.toneMapping=yi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pn(new ho,new qa({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,h=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,h=!0):(m.color.copy(sM),h=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[S],a.y,a.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[S]));let T=this._cubeSize;_o(s,x*T,S>2?T:0,T,T),p.setRenderTarget(s),h&&p.render(b,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===ua||t.mapping===Za;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rM());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;_o(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,rc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),u=0+c*1.25,d=p*u,{_lodMax:_}=this,b=this._sizeLods[i],m=3*b*(i>_-pa?i-_+pa:0),h=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-n,_o(a,m,h,3*b,2*b),s.setRenderTarget(a),s.render(o,rc),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-i,_o(t,m,h,3*b,2*b),s.setRenderTarget(t),s.render(o,rc)}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");let f=3,p=this._lodMeshes[s];p.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*Qa-1),b=a/_,m=isFinite(a)?1+Math.floor(f*b):Qa;m>Qa&&wt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qa}`);let h=[],v=0;for(let w=0;w<Qa;++w){let y=w/b,E=Math.exp(-y*y/2);h.push(E),w===0?v+=E:w<m&&(v+=2*E)}for(let w=0;w<h.length;w++)h[w]=h[w]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-i;let x=this._sizeLods[s],T=3*x*(s>S-pa?s-S+pa:0),A=4*(this._cubeSize-x);_o(n,T,A,3*x,2*x),l.setRenderTarget(n),l.render(p,rc)}};function RC(e){let t=[],n=[],i=[],s=e,a=e-pa+1+iM.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);t.push(o);let l=1/o;r>e-pa?l=iM[r-e+pa-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),f=-c,p=1+c,u=[f,f,p,f,p,p,f,f,p,p,f,p],d=6,_=6,b=3,m=2,h=1,v=new Float32Array(b*_*d),S=new Float32Array(m*_*d),x=new Float32Array(h*_*d);for(let A=0;A<d;A++){let w=A%3*2/3-1,y=A>2?0:-1,E=[w,y,0,w+2/3,y,0,w+2/3,y+1,0,w,y,0,w+2/3,y+1,0,w,y+1,0];v.set(E,b*_*A),S.set(u,m*_*A);let R=[A,A,A,A,A,A];x.set(R,h*_*A)}let T=new ui;T.setAttribute("position",new Yn(v,b)),T.setAttribute("uv",new Yn(S,m)),T.setAttribute("faceIndex",new Yn(x,h)),i.push(new pn(T,null)),s>pa&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function aM(e,t,n){let i=new Ye(e,t,n);return i.texture.mapping=jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _o(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function DC(e,t,n){return new Ae({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function UC(e,t,n){let i=new Float32Array(Qa),s=new P(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:Qa,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function rM(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function oM(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Of=class extends Ye{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Wl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ho(5,5,5),a=new Ae({name:"CubemapFromEquirect",uniforms:Ja(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:hi});a.uniforms.tEquirect.value=n;let r=new pn(s,a),o=n.minFilter;return n.minFilter===ha&&(n.minFilter=cn),new Vh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function NC(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===kh||d===Xh)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let b=new Of(_.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,_=d===kh||d===Xh,b=d===ua||d===Za;if(_||b){let m=n.get(u),h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new If(e)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return _&&v&&v.height>0||b&&v&&l(v)?(i===null&&(i=new If(e)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,d){return d===kh?u.mapping=ua:d===Xh&&(u.mapping=Za),u}function l(u){let d=0,_=6;for(let b=0;b<_;b++)u[b]!==void 0&&d++;return d===_}function c(u){let d=u.target;d.removeEventListener("dispose",c);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let _=n.get(d);_!==void 0&&(n.delete(d),_.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function LC(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ga("WebGLRenderer: "+i+" extension not supported."),s}}}function IC(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,_=p.attributes.position,b=0;if(_===void 0)return;if(d!==null){let v=d.array;b=d.version;for(let S=0,x=v.length;S<x;S+=3){let T=v[S+0],A=v[S+1],w=v[S+2];u.push(T,A,A,w,w,T)}}else{let v=_.array;b=_.version;for(let S=0,x=v.length/3-1;S<x;S+=3){let T=S+0,A=S+1,w=S+2;u.push(T,A,A,w,w,T)}}let m=new(_.count>=65535?kl:Gl)(u,1);m.version=b;let h=a.get(p);h&&t.remove(h),a.set(p,m)}function f(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function OC(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let b=0;for(let m=0;m<d;m++)b+=u[m];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function PC(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Ut("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function BC(e,t,n){let i=new WeakMap,s=new Ee;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;d===!0&&(S=1),_===!0&&(S=2),b===!0&&(S=3);let x=o.attributes.position.count*S,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*T*4*p),w=new zl(A,x,T,p);w.type=Mi,w.needsUpdate=!0;let y=S*4;for(let R=0;R<p;R++){let D=m[R],O=h[R],W=v[R],Y=x*T*4*R;for(let z=0;z<D.count;z++){let k=z*y;d===!0&&(s.fromBufferAttribute(D,z),A[Y+k+0]=s.x,A[Y+k+1]=s.y,A[Y+k+2]=s.z,A[Y+k+3]=0),_===!0&&(s.fromBufferAttribute(O,z),A[Y+k+4]=s.x,A[Y+k+5]=s.y,A[Y+k+6]=s.z,A[Y+k+7]=0),b===!0&&(s.fromBufferAttribute(W,z),A[Y+k+8]=s.x,A[Y+k+9]=s.y,A[Y+k+10]=s.z,A[Y+k+11]=W.itemSize===4?s.w:1)}}u={count:p,texture:w,size:new Ct(x,T)},i.set(o,u),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function FC(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var zC={[cg]:"LINEAR_TONE_MAPPING",[ug]:"REINHARD_TONE_MAPPING",[hg]:"CINEON_TONE_MAPPING",[fg]:"ACES_FILMIC_TONE_MAPPING",[pg]:"AGX_TONE_MAPPING",[mg]:"NEUTRAL_TONE_MAPPING",[dg]:"CUSTOM_TONE_MAPPING"};function VC(e,t,n,i,s,a){let r=new Ye(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,depthTexture:s?new _s(t,n):void 0}),o=new Ye(t,n,{type:mn,depthBuffer:!1,stencilBuffer:!1}),l=new ui;l.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Sn([0,2,0,0,2,0],2));let c=new wh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new pn(l,c),p=new vs(-1,1,1,-1,0,1),u=null,d=null,_=!1,b,m=null,h=[],v=!1;this.setSize=function(S,x){r.setSize(S,x),o.setSize(S,x);for(let T=0;T<h.length;T++){let A=h[T];A.setSize&&A.setSize(S,x)}},this.setEffects=function(S){h=S,v=h.length>0&&h[0].isRenderPass===!0;let x=r.width,T=r.height;for(let A=0;A<h.length;A++){let w=h[A];w.setSize&&w.setSize(x,T)}},this.begin=function(S,x){if(_||S.toneMapping===yi&&h.length===0)return!1;if(m=x,x!==null){let T=x.width,A=x.height;(r.width!==T||r.height!==A)&&this.setSize(T,A)}return v===!1&&S.setRenderTarget(r),b=S.toneMapping,S.toneMapping=yi,!0},this.hasRenderPass=function(){return v},this.end=function(S,x){S.toneMapping=b,_=!0;let T=r,A=o;for(let w=0;w<h.length;w++){let y=h[w];if(y.enabled!==!1&&(y.render(S,A,T,x),y.needsSwap!==!1)){let E=T;T=A,A=E}}if(u!==S.outputColorSpace||d!==S.toneMapping){u=S.outputColorSpace,d=S.toneMapping,c.defines={},Jt.getTransfer(u)===se&&(c.defines.SRGB_TRANSFER="");let w=zC[d];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,S.setRenderTarget(m),S.render(f,p),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}var wM=new Nn,kg=new _s(1,1),CM=new zl,RM=new bh,DM=new Wl,lM=[],cM=[],uM=new Float32Array(16),hM=new Float32Array(9),fM=new Float32Array(4);function xo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=lM[s];if(a===void 0&&(a=new Float32Array(s),lM[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Ze(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Je(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ff(e,t){let n=cM[t];n===void 0&&(n=new Int32Array(t),cM[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function HC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function GC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2fv(this.addr,t),Je(n,t)}}function kC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ze(n,t))return;e.uniform3fv(this.addr,t),Je(n,t)}}function XC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4fv(this.addr,t),Je(n,t)}}function WC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;fM.set(i),e.uniformMatrix2fv(this.addr,!1,fM),Je(n,i)}}function qC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;hM.set(i),e.uniformMatrix3fv(this.addr,!1,hM),Je(n,i)}}function YC(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Je(n,t)}else{if(Ze(n,i))return;uM.set(i),e.uniformMatrix4fv(this.addr,!1,uM),Je(n,i)}}function ZC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function JC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2iv(this.addr,t),Je(n,t)}}function KC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3iv(this.addr,t),Je(n,t)}}function QC(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4iv(this.addr,t),Je(n,t)}}function jC(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function $C(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2uiv(this.addr,t),Je(n,t)}}function tR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3uiv(this.addr,t),Je(n,t)}}function eR(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4uiv(this.addr,t),Je(n,t)}}function nR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(kg.compareFunction=n.isReversedDepthBuffer()?Df:Rf,a=kg):a=wM,n.setTexture2D(t||a,s)}function iR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||RM,s)}function sR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||DM,s)}function aR(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||CM,s)}function rR(e){switch(e){case 5126:return HC;case 35664:return GC;case 35665:return kC;case 35666:return XC;case 35674:return WC;case 35675:return qC;case 35676:return YC;case 5124:case 35670:return ZC;case 35667:case 35671:return JC;case 35668:case 35672:return KC;case 35669:case 35673:return QC;case 5125:return jC;case 36294:return $C;case 36295:return tR;case 36296:return eR;case 35678:case 36198:case 36298:case 36306:case 35682:return nR;case 35679:case 36299:case 36307:return iR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return aR}}function oR(e,t){e.uniform1fv(this.addr,t)}function lR(e,t){let n=xo(t,this.size,2);e.uniform2fv(this.addr,n)}function cR(e,t){let n=xo(t,this.size,3);e.uniform3fv(this.addr,n)}function uR(e,t){let n=xo(t,this.size,4);e.uniform4fv(this.addr,n)}function hR(e,t){let n=xo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function fR(e,t){let n=xo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function dR(e,t){let n=xo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function pR(e,t){e.uniform1iv(this.addr,t)}function mR(e,t){e.uniform2iv(this.addr,t)}function gR(e,t){e.uniform3iv(this.addr,t)}function _R(e,t){e.uniform4iv(this.addr,t)}function vR(e,t){e.uniform1uiv(this.addr,t)}function xR(e,t){e.uniform2uiv(this.addr,t)}function yR(e,t){e.uniform3uiv(this.addr,t)}function SR(e,t){e.uniform4uiv(this.addr,t)}function MR(e,t,n){let i=this.cache,s=t.length,a=Ff(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=kg:r=wM;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function bR(e,t,n){let i=this.cache,s=t.length,a=Ff(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||RM,a[r])}function TR(e,t,n){let i=this.cache,s=t.length,a=Ff(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||DM,a[r])}function ER(e,t,n){let i=this.cache,s=t.length,a=Ff(n,s);Ze(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||CM,a[r])}function AR(e){switch(e){case 5126:return oR;case 35664:return lR;case 35665:return cR;case 35666:return uR;case 35674:return hR;case 35675:return fR;case 35676:return dR;case 5124:case 35670:return pR;case 35667:case 35671:return mR;case 35668:case 35672:return gR;case 35669:case 35673:return _R;case 5125:return vR;case 36294:return xR;case 36295:return yR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return bR;case 35680:case 36300:case 36308:case 36293:return TR;case 36289:case 36303:case 36311:case 36292:return ER}}var Xg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rR(n.type)}},Wg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AR(n.type)}},qg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Hg=/(\w+)(\])?(\[|\.)?/g;function dM(e,t){e.seq.push(t),e.map[t.id]=t}function wR(e,t,n){let i=e.name,s=i.length;for(Hg.lastIndex=0;;){let a=Hg.exec(i),r=Hg.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){dM(n,c===void 0?new Xg(o,e,t):new Wg(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new qg(o),dM(n,p)),n=p}}}var vo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);wR(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function pM(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var CR=37297,RR=0;function DR(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var mM=new It;function UR(e){Jt._getMatrix(mM,Jt.workingColorSpace,e);let t=`mat3( ${mM.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case Pl:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function gM(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+DR(e.getShaderSource(t),o)}else return a}function NR(e,t){let n=UR(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var LR={[cg]:"Linear",[ug]:"Reinhard",[hg]:"Cineon",[fg]:"ACESFilmic",[pg]:"AgX",[mg]:"Neutral",[dg]:"Custom"};function IR(e,t){let n=LR[t];return n===void 0?(wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Lf=new P;function OR(){Jt.getLuminanceCoefficients(Lf);let e=Lf.x.toFixed(4),t=Lf.y.toFixed(4),n=Lf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PR(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lc).join(`
`)}function BR(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function FR(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function lc(e){return e!==""}function _M(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vM(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yg(e){return e.replace(zR,HR)}var VR=new Map;function HR(e,t){let n=Ht[t];if(n===void 0){let i=VR.get(t);if(i!==void 0)n=Ht[i],wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Yg(n)}var GR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xM(e){return e.replace(GR,kR)}function kR(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function yM(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var XR={[Kl]:"SHADOWMAP_TYPE_PCF",[fo]:"SHADOWMAP_TYPE_VSM"};function WR(e){return XR[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qR={[ua]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE",[jl]:"ENVMAP_TYPE_CUBE_UV"};function YR(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":qR[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var ZR={[Za]:"ENVMAP_MODE_REFRACTION"};function JR(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":ZR[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var KR={[lg]:"ENVMAP_BLENDING_MULTIPLY",[VS]:"ENVMAP_BLENDING_MIX",[HS]:"ENVMAP_BLENDING_ADD"};function QR(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":KR[e.combine]||"ENVMAP_BLENDING_NONE"}function jR(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function $R(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=WR(n),c=YR(n),f=JR(n),p=QR(n),u=jR(n),d=PR(n),_=BR(a),b=s.createProgram(),m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(lc).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(lc).join(`
`),h.length>0&&(h+=`
`)):(m=[yM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lc).join(`
`),h=[yM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?Ht.tonemapping_pars_fragment:"",n.toneMapping!==yi?IR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,NR("linearToOutputTexel",n.outputColorSpace),OR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(lc).join(`
`)),r=Yg(r),r=_M(r,n),r=vM(r,n),o=Yg(o),o=_M(o,n),o=vM(o,n),r=xM(r),o=xM(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let S=v+m+r,x=v+h+o,T=pM(s,s.VERTEX_SHADER,S),A=pM(s,s.FRAGMENT_SHADER,x);s.attachShader(b,T),s.attachShader(b,A),n.index0AttributeName!==void 0?s.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function w(D){if(e.debug.checkShaderErrors){let O=s.getProgramInfoLog(b)||"",W=s.getShaderInfoLog(T)||"",Y=s.getShaderInfoLog(A)||"",z=O.trim(),k=W.trim(),G=Y.trim(),j=!0,tt=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,b,T,A);else{let st=gM(s,T,"vertex"),ut=gM(s,A,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+st+`
`+ut)}else z!==""?wt("WebGLProgram: Program Info Log:",z):(k===""||G==="")&&(tt=!1);tt&&(D.diagnostics={runnable:j,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:h}})}s.deleteShader(T),s.deleteShader(A),y=new vo(s,b),E=FR(s,b)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(b,CR)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RR++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=A,this}var t2=0,Zg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Jg(t),n.set(t,i)),i}},Jg=class{constructor(t){this.id=t2++,this.code=t,this.usedTimes=0}};function e2(e){return e===da||e===sc||e===ac}function n2(e,t,n,i,s,a){let r=new Vl,o=new Zg,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,E,R,D,O,W){let Y=D.fog,z=O.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,j=t.get(y.envMap||k,G),tt=j&&j.mapping===jl?j.image.height:null,st=d[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&wt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,gt=ut!==void 0?ut.length:0,Qt=0;z.morphAttributes.position!==void 0&&(Qt=1),z.morphAttributes.normal!==void 0&&(Qt=2),z.morphAttributes.color!==void 0&&(Qt=3);let _e,$t,Z,it;if(st){let yt=ki[st];_e=yt.vertexShader,$t=yt.fragmentShader}else{_e=y.vertexShader,$t=y.fragmentShader;let yt=o.getVertexShaderStage(y),Ce=o.getFragmentShaderStage(y);o.update(y,yt,Ce),Z=yt.id,it=Ce.id}let et=e.getRenderTarget(),Dt=e.state.buffers.depth.getReversed(),Lt=O.isInstancedMesh===!0,xt=O.isBatchedMesh===!0,Xt=!!y.map,Ot=!!y.matcap,Gt=!!j,Yt=!!y.aoMap,te=!!y.lightMap,Be=!!y.bumpMap&&y.wireframe===!1,Xe=!!y.normalMap,Ke=!!y.displacementMap,nn=!!y.emissiveMap,we=!!y.metalnessMap,Fe=!!y.roughnessMap,N=y.anisotropy>0,bn=y.clearcoat>0,ae=y.dispersion>0,C=y.iridescence>0,g=y.sheen>0,I=y.transmission>0,V=N&&!!y.anisotropyMap,X=bn&&!!y.clearcoatMap,nt=bn&&!!y.clearcoatNormalMap,rt=bn&&!!y.clearcoatRoughnessMap,q=C&&!!y.iridescenceMap,K=C&&!!y.iridescenceThicknessMap,ot=g&&!!y.sheenColorMap,bt=g&&!!y.sheenRoughnessMap,ht=!!y.specularMap,lt=!!y.specularColorMap,At=!!y.specularIntensityMap,Rt=I&&!!y.transmissionMap,Bt=I&&!!y.thicknessMap,U=!!y.gradientMap,at=!!y.alphaMap,J=y.alphaTest>0,ct=!!y.alphaHash,mt=!!y.extensions,$=yi;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&($=e.toneMapping);let Mt={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:_e,fragmentShader:$t,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:it,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:xt,batchingColor:xt&&O._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&O.instanceColor!==null,instancingMorph:Lt&&O.morphTexture!==null,outputColorSpace:et===null?e.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:Ot,envMap:Gt,envMapMode:Gt&&j.mapping,envMapCubeUVHeight:tt,aoMap:Yt,lightMap:te,bumpMap:Be,normalMap:Xe,displacementMap:Ke,emissiveMap:nn,normalMapObjectSpace:Xe&&y.normalMapType===XS,normalMapTangentSpace:Xe&&y.normalMapType===Tg,packedNormalMap:Xe&&y.normalMapType===Tg&&e2(y.normalMap.format),metalnessMap:we,roughnessMap:Fe,anisotropy:N,anisotropyMap:V,clearcoat:bn,clearcoatMap:X,clearcoatNormalMap:nt,clearcoatRoughnessMap:rt,dispersion:ae,iridescence:C,iridescenceMap:q,iridescenceThicknessMap:K,sheen:g,sheenColorMap:ot,sheenRoughnessMap:bt,specularMap:ht,specularColorMap:lt,specularIntensityMap:At,transmission:I,transmissionMap:Rt,thicknessMap:Bt,gradientMap:U,opaque:y.transparent===!1&&y.blending===ka&&y.alphaToCoverage===!1,alphaMap:at,alphaTest:J,alphaHash:ct,combine:y.combine,mapUv:Xt&&_(y.map.channel),aoMapUv:Yt&&_(y.aoMap.channel),lightMapUv:te&&_(y.lightMap.channel),bumpMapUv:Be&&_(y.bumpMap.channel),normalMapUv:Xe&&_(y.normalMap.channel),displacementMapUv:Ke&&_(y.displacementMap.channel),emissiveMapUv:nn&&_(y.emissiveMap.channel),metalnessMapUv:we&&_(y.metalnessMap.channel),roughnessMapUv:Fe&&_(y.roughnessMap.channel),anisotropyMapUv:V&&_(y.anisotropyMap.channel),clearcoatMapUv:X&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(y.sheenRoughnessMap.channel),specularMapUv:ht&&_(y.specularMap.channel),specularColorMapUv:lt&&_(y.specularColorMap.channel),specularIntensityMapUv:At&&_(y.specularIntensityMap.channel),transmissionMapUv:Rt&&_(y.transmissionMap.channel),thicknessMapUv:Bt&&_(y.thicknessMap.channel),alphaMapUv:at&&_(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Xe||N),vertexNormals:!!z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(Xt||at),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&Xe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Dt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Qt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:$,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&Jt.getTransfer(y.map.colorSpace)===se,decodeVideoTextureEmissive:nn&&y.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(y.emissiveMap.colorSpace)===se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Hi,flipSided:y.side===Mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:mt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&y.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(h(E,y),v(E,y),E.push(e.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function h(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function S(y){let E=d[y.type],R;if(E){let D=ki[E];R=Ka.clone(D.uniforms)}else R=y.uniforms;return R}function x(y,E){let R=f.get(E);return R!==void 0?++R.usedTimes:(R=new $R(e,E,y,s),c.push(R),f.set(E,R)),R}function T(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function w(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:w}}function i2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function s2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function SM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function MM(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,b,m,h){let v=e[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:_,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:h},e[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=_,v.materialVariant=r(u),v.groupOrder=b,v.renderOrder=u.renderOrder,v.z=m,v.group=h),t++,v}function l(u,d,_,b,m,h){let v=o(u,d,_,b,m,h);_.transmission>0?i.push(v):_.transparent===!0?s.push(v):n.push(v)}function c(u,d,_,b,m,h){let v=o(u,d,_,b,m,h);_.transmission>0?i.unshift(v):_.transparent===!0?s.unshift(v):n.unshift(v)}function f(u,d,_){n.length>1&&n.sort(u||s2),i.length>1&&i.sort(d||SM),s.length>1&&s.sort(d||SM),_&&(n.reverse(),i.reverse(),s.reverse())}function p(){for(let u=t,d=e.length;u<d;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function a2(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new MM,e.set(i,[r])):s>=a.length?(r=new MM,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function r2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new Vt};break;case"SpotLight":n={position:new P,direction:new P,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=n,n}}}function o2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var l2=0;function c2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function u2(e){let t=new r2,n=o2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,a=new Pe,r=new Pe;function o(c){let f=0,p=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,_=0,b=0,m=0,h=0,v=0,S=0,x=0,T=0,A=0,w=0;c.sort(c2);for(let E=0,R=c.length;E<R;E++){let D=c[E],O=D.color,W=D.intensity,Y=D.distance,z=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===da?z=D.shadow.map.texture:z=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=O.r*W,p+=O.g*W,u+=O.b*W;else if(D.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],W);w++}else if(D.isDirectionalLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let G=D.shadow,j=n.get(D);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=z,i.directionalShadowMatrix[d]=D.shadow.matrix,v++}i.directional[d]=k,d++}else if(D.isSpotLight){let k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(O).multiplyScalar(W),k.distance=Y,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[b]=k;let G=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,G.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[b]=G.matrix,D.castShadow){let j=n.get(D);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.spotShadow[b]=j,i.spotShadowMap[b]=z,x++}b++}else if(D.isRectAreaLight){let k=t.get(D);k.color.copy(O).multiplyScalar(W),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=k,m++}else if(D.isPointLight){let k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let G=D.shadow,j=n.get(D);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=D.shadow.matrix,S++}i.point[_]=k,_++}else if(D.isHemisphereLight){let k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(W),k.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[h]=k,h++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let y=i.hash;(y.directionalLength!==d||y.pointLength!==_||y.spotLength!==b||y.rectAreaLength!==m||y.hemiLength!==h||y.numDirectionalShadows!==v||y.numPointShadows!==S||y.numSpotShadows!==x||y.numSpotMaps!==T||y.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=b,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,y.directionalLength=d,y.pointLength=_,y.spotLength=b,y.rectAreaLength=m,y.hemiLength=h,y.numDirectionalShadows=v,y.numPointShadows=S,y.numSpotShadows=x,y.numSpotMaps=T,y.numLightProbes=w,i.version=l2++)}function l(c,f){let p=0,u=0,d=0,_=0,b=0,m=f.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){let S=c[h];if(S.isDirectionalLight){let x=i.directional[p];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(S.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(S.isRectAreaLight){let x=i.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),r.identity(),a.copy(S.matrixWorld),a.premultiply(m),r.extractRotation(a),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),_++}else if(S.isPointLight){let x=i.point[u];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){let x=i.hemi[b];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:i}}function bM(e){let t=new u2(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function f(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function h2(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new bM(e),t.set(s,[o])):a>=r.length?(o=new bM(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var f2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,p2=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],m2=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],TM=new Pe,oc=new P,Gg=new P;function g2(e,t,n){let i=new Xl,s=new Ct,a=new Ct,r=new Ee,o=new Ch,l=new Rh,c={},f=n.maxTextureSize,p={[gs]:Mn,[Mn]:gs,[Hi]:Hi},u=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:f2,fragmentShader:d2}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new ui;_.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new pn(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let h=this.type;this.render=function(A,w,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===SS&&(wt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Kl);let E=e.getRenderTarget(),R=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),O=e.state;O.setBlending(hi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let W=h!==this.type;W&&w.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(z=>z.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,z=A.length;Y<z;Y++){let k=A[Y],G=k.shadow;if(G===void 0){wt("WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let j=G.getFrameExtents();s.multiply(j),a.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/j.x),s.x=a.x*j.x,G.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/j.y),s.y=a.y*j.y,G.mapSize.y=a.y));let tt=e.state.buffers.depth.getReversed();if(G.camera._reversedDepth=tt,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===fo){if(k.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ye(s.x,s.y,{format:da,type:mn,minFilter:cn,magFilter:cn,generateMipmaps:!1}),G.map.texture.name=k.name+".shadowMap",G.map.depthTexture=new _s(s.x,s.y,Mi),G.map.depthTexture.name=k.name+".shadowMapDepth",G.map.depthTexture.format=Fi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en}else k.isPointLight?(G.map=new Of(s.x),G.map.depthTexture=new Ah(s.x,Si)):(G.map=new Ye(s.x,s.y),G.map.depthTexture=new _s(s.x,s.y,Si)),G.map.depthTexture.name=k.name+".shadowMap",G.map.depthTexture.format=Fi,this.type===Kl?(G.map.depthTexture.compareFunction=tt?Df:Rf,G.map.depthTexture.minFilter=cn,G.map.depthTexture.magFilter=cn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=en,G.map.depthTexture.magFilter=en);G.camera.updateProjectionMatrix()}let st=G.map.isWebGLCubeRenderTarget?6:1;for(let ut=0;ut<st;ut++){if(G.map.isWebGLCubeRenderTarget)e.setRenderTarget(G.map,ut),e.clear();else{ut===0&&(e.setRenderTarget(G.map),e.clear());let gt=G.getViewport(ut);r.set(a.x*gt.x,a.y*gt.y,a.x*gt.z,a.y*gt.w),O.viewport(r)}if(k.isPointLight){let gt=G.camera,Qt=G.matrix,_e=k.distance||gt.far;_e!==gt.far&&(gt.far=_e,gt.updateProjectionMatrix()),oc.setFromMatrixPosition(k.matrixWorld),gt.position.copy(oc),Gg.copy(gt.position),Gg.add(p2[ut]),gt.up.copy(m2[ut]),gt.lookAt(Gg),gt.updateMatrixWorld(),Qt.makeTranslation(-oc.x,-oc.y,-oc.z),TM.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(TM,gt.coordinateSystem,gt.reversedDepth)}else G.updateMatrices(k);i=G.getFrustum(),x(w,y,G.camera,k,this.type)}G.isPointLightShadow!==!0&&this.type===fo&&v(G,y),G.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(E,R,D)};function v(A,w){let y=t.update(b);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ye(s.x,s.y,{format:da,type:mn})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(w,null,y,u,b,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(w,null,y,d,b,null)}function S(A,w,y,E){let R=null,D=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)R=D;else if(R=y.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let O=R.uuid,W=w.uuid,Y=c[O];Y===void 0&&(Y={},c[O]=Y);let z=Y[W];z===void 0&&(z=R.clone(),Y[W]=z,w.addEventListener("dispose",T)),R=z}if(R.visible=w.visible,R.wireframe=w.wireframe,E===fo?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:p[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=e.properties.get(R);O.light=y}return R}function x(A,w,y,E,R){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===fo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);let W=t.update(A),Y=A.material;if(Array.isArray(Y)){let z=W.groups;for(let k=0,G=z.length;k<G;k++){let j=z[k],tt=Y[j.materialIndex];if(tt&&tt.visible){let st=S(A,tt,E,R);A.onBeforeShadow(e,A,w,y,W,st,j),e.renderBufferDirect(y,null,W,st,A,j),A.onAfterShadow(e,A,w,y,W,st,j)}}}else if(Y.visible){let z=S(A,Y,E,R);A.onBeforeShadow(e,A,w,y,W,z,null),e.renderBufferDirect(y,null,W,z,A,null),A.onAfterShadow(e,A,w,y,W,z,null)}}let O=A.children;for(let W=0,Y=O.length;W<Y;W++)x(O[W],w,y,E,R)}function T(A){A.target.removeEventListener("dispose",T);for(let y in c){let E=c[y],R=A.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function _2(e,t){function n(){let U=!1,at=new Ee,J=null,ct=new Ee(0,0,0,0);return{setMask:function(mt){J!==mt&&!U&&(e.colorMask(mt,mt,mt,mt),J=mt)},setLocked:function(mt){U=mt},setClear:function(mt,$,Mt,yt,Ce){Ce===!0&&(mt*=yt,$*=yt,Mt*=yt),at.set(mt,$,Mt,yt),ct.equals(at)===!1&&(e.clearColor(mt,$,Mt,yt),ct.copy(at))},reset:function(){U=!1,J=null,ct.set(-1,0,0,0)}}}function i(){let U=!1,at=!1,J=null,ct=null,mt=null;return{setReversed:function($){if(at!==$){let Mt=t.get("EXT_clip_control");$?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),at=$;let yt=mt;mt=null,this.setClear(yt)}},getReversed:function(){return at},setTest:function($){$?et(e.DEPTH_TEST):Dt(e.DEPTH_TEST)},setMask:function($){J!==$&&!U&&(e.depthMask($),J=$)},setFunc:function($){if(at&&($=tM[$]),ct!==$){switch($){case hh:e.depthFunc(e.NEVER);break;case fh:e.depthFunc(e.ALWAYS);break;case dh:e.depthFunc(e.LESS);break;case Xa:e.depthFunc(e.LEQUAL);break;case ph:e.depthFunc(e.EQUAL);break;case mh:e.depthFunc(e.GEQUAL);break;case gh:e.depthFunc(e.GREATER);break;case _h:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ct=$}},setLocked:function($){U=$},setClear:function($){mt!==$&&(mt=$,at&&($=1-$),e.clearDepth($))},reset:function(){U=!1,J=null,ct=null,mt=null,at=!1}}}function s(){let U=!1,at=null,J=null,ct=null,mt=null,$=null,Mt=null,yt=null,Ce=null;return{setTest:function(pe){U||(pe?et(e.STENCIL_TEST):Dt(e.STENCIL_TEST))},setMask:function(pe){at!==pe&&!U&&(e.stencilMask(pe),at=pe)},setFunc:function(pe,Ti,Ei){(J!==pe||ct!==Ti||mt!==Ei)&&(e.stencilFunc(pe,Ti,Ei),J=pe,ct=Ti,mt=Ei)},setOp:function(pe,Ti,Ei){($!==pe||Mt!==Ti||yt!==Ei)&&(e.stencilOp(pe,Ti,Ei),$=pe,Mt=Ti,yt=Ei)},setLocked:function(pe){U=pe},setClear:function(pe){Ce!==pe&&(e.clearStencil(pe),Ce=pe)},reset:function(){U=!1,at=null,J=null,ct=null,mt=null,$=null,Mt=null,yt=null,Ce=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},p={},u={},d=new WeakMap,_=[],b=null,m=!1,h=null,v=null,S=null,x=null,T=null,A=null,w=null,y=new Vt(0,0,0),E=0,R=!1,D=null,O=null,W=null,Y=null,z=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,tt=e.getParameter(e.VERSION);tt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(tt)[1]),G=j>=1):tt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),G=j>=2);let st=null,ut={},gt=e.getParameter(e.SCISSOR_BOX),Qt=e.getParameter(e.VIEWPORT),_e=new Ee().fromArray(gt),$t=new Ee().fromArray(Qt);function Z(U,at,J,ct){let mt=new Uint8Array(4),$=e.createTexture();e.bindTexture(U,$),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Mt=0;Mt<J;Mt++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(at,0,e.RGBA,1,1,ct,0,e.RGBA,e.UNSIGNED_BYTE,mt):e.texImage2D(at+Mt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,mt);return $}let it={};it[e.TEXTURE_2D]=Z(e.TEXTURE_2D,e.TEXTURE_2D,1),it[e.TEXTURE_CUBE_MAP]=Z(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[e.TEXTURE_2D_ARRAY]=Z(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),it[e.TEXTURE_3D]=Z(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(e.DEPTH_TEST),r.setFunc(Xa),Be(!1),Xe(ag),et(e.CULL_FACE),Yt(hi);function et(U){f[U]!==!0&&(e.enable(U),f[U]=!0)}function Dt(U){f[U]!==!1&&(e.disable(U),f[U]=!1)}function Lt(U,at){return u[U]!==at?(e.bindFramebuffer(U,at),u[U]=at,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=at),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=at),!0):!1}function xt(U,at){let J=_,ct=!1;if(U){J=d.get(at),J===void 0&&(J=[],d.set(at,J));let mt=U.textures;if(J.length!==mt.length||J[0]!==e.COLOR_ATTACHMENT0){for(let $=0,Mt=mt.length;$<Mt;$++)J[$]=e.COLOR_ATTACHMENT0+$;J.length=mt.length,ct=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,ct=!0);ct&&e.drawBuffers(J)}function Xt(U){return b!==U?(e.useProgram(U),b=U,!0):!1}let Ot={[sa]:e.FUNC_ADD,[bS]:e.FUNC_SUBTRACT,[TS]:e.FUNC_REVERSE_SUBTRACT};Ot[ES]=e.MIN,Ot[AS]=e.MAX;let Gt={[wS]:e.ZERO,[CS]:e.ONE,[RS]:e.SRC_COLOR,[ch]:e.SRC_ALPHA,[OS]:e.SRC_ALPHA_SATURATE,[LS]:e.DST_COLOR,[US]:e.DST_ALPHA,[DS]:e.ONE_MINUS_SRC_COLOR,[uh]:e.ONE_MINUS_SRC_ALPHA,[IS]:e.ONE_MINUS_DST_COLOR,[NS]:e.ONE_MINUS_DST_ALPHA,[PS]:e.CONSTANT_COLOR,[BS]:e.ONE_MINUS_CONSTANT_COLOR,[FS]:e.CONSTANT_ALPHA,[zS]:e.ONE_MINUS_CONSTANT_ALPHA};function Yt(U,at,J,ct,mt,$,Mt,yt,Ce,pe){if(U===hi){m===!0&&(Dt(e.BLEND),m=!1);return}if(m===!1&&(et(e.BLEND),m=!0),U!==MS){if(U!==h||pe!==R){if((v!==sa||T!==sa)&&(e.blendEquation(e.FUNC_ADD),v=sa,T=sa),pe)switch(U){case ka:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ql:e.blendFunc(e.ONE,e.ONE);break;case rg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case og:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ut("WebGLState: Invalid blending: ",U);break}else switch(U){case ka:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ql:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case rg:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case og:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",U);break}S=null,x=null,A=null,w=null,y.set(0,0,0),E=0,h=U,R=pe}return}mt=mt||at,$=$||J,Mt=Mt||ct,(at!==v||mt!==T)&&(e.blendEquationSeparate(Ot[at],Ot[mt]),v=at,T=mt),(J!==S||ct!==x||$!==A||Mt!==w)&&(e.blendFuncSeparate(Gt[J],Gt[ct],Gt[$],Gt[Mt]),S=J,x=ct,A=$,w=Mt),(yt.equals(y)===!1||Ce!==E)&&(e.blendColor(yt.r,yt.g,yt.b,Ce),y.copy(yt),E=Ce),h=U,R=!1}function te(U,at){U.side===Hi?Dt(e.CULL_FACE):et(e.CULL_FACE);let J=U.side===Mn;at&&(J=!J),Be(J),U.blending===ka&&U.transparent===!1?Yt(hi):Yt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let ct=U.stencilWrite;o.setTest(ct),ct&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),nn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(e.SAMPLE_ALPHA_TO_COVERAGE):Dt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Be(U){D!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),D=U)}function Xe(U){U!==xS?(et(e.CULL_FACE),U!==O&&(U===ag?e.cullFace(e.BACK):U===yS?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Dt(e.CULL_FACE),O=U}function Ke(U){U!==W&&(G&&e.lineWidth(U),W=U)}function nn(U,at,J){U?(et(e.POLYGON_OFFSET_FILL),(Y!==at||z!==J)&&(Y=at,z=J,r.getReversed()&&(at=-at),e.polygonOffset(at,J))):Dt(e.POLYGON_OFFSET_FILL)}function we(U){U?et(e.SCISSOR_TEST):Dt(e.SCISSOR_TEST)}function Fe(U){U===void 0&&(U=e.TEXTURE0+k-1),st!==U&&(e.activeTexture(U),st=U)}function N(U,at,J){J===void 0&&(st===null?J=e.TEXTURE0+k-1:J=st);let ct=ut[J];ct===void 0&&(ct={type:void 0,texture:void 0},ut[J]=ct),(ct.type!==U||ct.texture!==at)&&(st!==J&&(e.activeTexture(J),st=J),e.bindTexture(U,at||it[U]),ct.type=U,ct.texture=at)}function bn(){let U=ut[st];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ae(){try{e.compressedTexImage2D(...arguments)}catch(U){Ut("WebGLState:",U)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(U){Ut("WebGLState:",U)}}function g(){try{e.texSubImage2D(...arguments)}catch(U){Ut("WebGLState:",U)}}function I(){try{e.texSubImage3D(...arguments)}catch(U){Ut("WebGLState:",U)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Ut("WebGLState:",U)}}function X(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Ut("WebGLState:",U)}}function nt(){try{e.texStorage2D(...arguments)}catch(U){Ut("WebGLState:",U)}}function rt(){try{e.texStorage3D(...arguments)}catch(U){Ut("WebGLState:",U)}}function q(){try{e.texImage2D(...arguments)}catch(U){Ut("WebGLState:",U)}}function K(){try{e.texImage3D(...arguments)}catch(U){Ut("WebGLState:",U)}}function ot(U){return p[U]!==void 0?p[U]:e.getParameter(U)}function bt(U,at){p[U]!==at&&(e.pixelStorei(U,at),p[U]=at)}function ht(U){_e.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),_e.copy(U))}function lt(U){$t.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),$t.copy(U))}function At(U,at){let J=c.get(at);J===void 0&&(J=new WeakMap,c.set(at,J));let ct=J.get(U);ct===void 0&&(ct=e.getUniformBlockIndex(at,U.name),J.set(U,ct))}function Rt(U,at){let ct=c.get(at).get(U);l.get(at)!==ct&&(e.uniformBlockBinding(at,ct,U.__bindingPointIndex),l.set(at,ct))}function Bt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},st=null,ut={},u={},d=new WeakMap,_=[],b=null,m=!1,h=null,v=null,S=null,x=null,T=null,A=null,w=null,y=new Vt(0,0,0),E=0,R=!1,D=null,O=null,W=null,Y=null,z=null,_e.set(0,0,e.canvas.width,e.canvas.height),$t.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:Dt,bindFramebuffer:Lt,drawBuffers:xt,useProgram:Xt,setBlending:Yt,setMaterial:te,setFlipSided:Be,setCullFace:Xe,setLineWidth:Ke,setPolygonOffset:nn,setScissorTest:we,activeTexture:Fe,bindTexture:N,unbindTexture:bn,compressedTexImage2D:ae,compressedTexImage3D:C,texImage2D:q,texImage3D:K,pixelStorei:bt,getParameter:ot,updateUBOMapping:At,uniformBlockBinding:Rt,texStorage2D:nt,texStorage3D:rt,texSubImage2D:g,texSubImage3D:I,compressedTexSubImage2D:V,compressedTexSubImage3D:X,scissor:ht,viewport:lt,reset:Bt}}function v2(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,f=new WeakMap,p=new Set,u,d=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,g){return _?new OffscreenCanvas(C,g):Fl("canvas")}function m(C,g,I){let V=1,X=ae(C);if((X.width>I||X.height>I)&&(V=I/Math.max(X.width,X.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let nt=Math.floor(V*X.width),rt=Math.floor(V*X.height);u===void 0&&(u=b(nt,rt));let q=g?b(nt,rt):u;return q.width=nt,q.height=rt,q.getContext("2d").drawImage(C,0,0,nt,rt),wt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+nt+"x"+rt+")."),q}else return"data"in C&&wt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),C;return C}function h(C){return C.generateMipmaps}function v(C){e.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(C,g,I,V,X,nt=!1){if(C!==null){if(e[C]!==void 0)return e[C];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let rt;V&&(rt=t.get("EXT_texture_norm16"),rt||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=g;if(g===e.RED&&(I===e.FLOAT&&(q=e.R32F),I===e.HALF_FLOAT&&(q=e.R16F),I===e.UNSIGNED_BYTE&&(q=e.R8),I===e.UNSIGNED_SHORT&&rt&&(q=rt.R16_EXT),I===e.SHORT&&rt&&(q=rt.R16_SNORM_EXT)),g===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(q=e.R8UI),I===e.UNSIGNED_SHORT&&(q=e.R16UI),I===e.UNSIGNED_INT&&(q=e.R32UI),I===e.BYTE&&(q=e.R8I),I===e.SHORT&&(q=e.R16I),I===e.INT&&(q=e.R32I)),g===e.RG&&(I===e.FLOAT&&(q=e.RG32F),I===e.HALF_FLOAT&&(q=e.RG16F),I===e.UNSIGNED_BYTE&&(q=e.RG8),I===e.UNSIGNED_SHORT&&rt&&(q=rt.RG16_EXT),I===e.SHORT&&rt&&(q=rt.RG16_SNORM_EXT)),g===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(q=e.RG8UI),I===e.UNSIGNED_SHORT&&(q=e.RG16UI),I===e.UNSIGNED_INT&&(q=e.RG32UI),I===e.BYTE&&(q=e.RG8I),I===e.SHORT&&(q=e.RG16I),I===e.INT&&(q=e.RG32I)),g===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(q=e.RGB8UI),I===e.UNSIGNED_SHORT&&(q=e.RGB16UI),I===e.UNSIGNED_INT&&(q=e.RGB32UI),I===e.BYTE&&(q=e.RGB8I),I===e.SHORT&&(q=e.RGB16I),I===e.INT&&(q=e.RGB32I)),g===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),I===e.UNSIGNED_INT&&(q=e.RGBA32UI),I===e.BYTE&&(q=e.RGBA8I),I===e.SHORT&&(q=e.RGBA16I),I===e.INT&&(q=e.RGBA32I)),g===e.RGB&&(I===e.UNSIGNED_SHORT&&rt&&(q=rt.RGB16_EXT),I===e.SHORT&&rt&&(q=rt.RGB16_SNORM_EXT),I===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(q=e.R11F_G11F_B10F)),g===e.RGBA){let K=nt?Pl:Jt.getTransfer(X);I===e.FLOAT&&(q=e.RGBA32F),I===e.HALF_FLOAT&&(q=e.RGBA16F),I===e.UNSIGNED_BYTE&&(q=K===se?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT&&rt&&(q=rt.RGBA16_EXT),I===e.SHORT&&rt&&(q=rt.RGBA16_SNORM_EXT),I===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function T(C,g){let I;return C?g===null||g===Si||g===mo?I=e.DEPTH24_STENCIL8:g===Mi?I=e.DEPTH32F_STENCIL8:g===po&&(I=e.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Si||g===mo?I=e.DEPTH_COMPONENT24:g===Mi?I=e.DEPTH_COMPONENT32F:g===po&&(I=e.DEPTH_COMPONENT16),I}function A(C,g){return h(C)===!0||C.isFramebufferTexture&&C.minFilter!==en&&C.minFilter!==cn?Math.log2(Math.max(g.width,g.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?g.mipmaps.length:1}function w(C){let g=C.target;g.removeEventListener("dispose",w),E(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&p.delete(g)}function y(C){let g=C.target;g.removeEventListener("dispose",y),D(g)}function E(C){let g=i.get(C);if(g.__webglInit===void 0)return;let I=C.source,V=d.get(I);if(V){let X=V[g.__cacheKey];X.usedTimes--,X.usedTimes===0&&R(C),Object.keys(V).length===0&&d.delete(I)}i.remove(C)}function R(C){let g=i.get(C);e.deleteTexture(g.__webglTexture);let I=C.source,V=d.get(I);delete V[g.__cacheKey],r.memory.textures--}function D(C){let g=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let X=0;X<g.__webglFramebuffer[V].length;X++)e.deleteFramebuffer(g.__webglFramebuffer[V][X]);else e.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)e.deleteFramebuffer(g.__webglFramebuffer[V]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&e.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&e.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let I=C.textures;for(let V=0,X=I.length;V<X;V++){let nt=i.get(I[V]);nt.__webglTexture&&(e.deleteTexture(nt.__webglTexture),r.memory.textures--),i.remove(I[V])}i.remove(C)}let O=0;function W(){O=0}function Y(){return O}function z(C){O=C}function k(){let C=O;return C>=s.maxTextures&&wt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function G(C){let g=[];return g.push(C.wrapS),g.push(C.wrapT),g.push(C.wrapR||0),g.push(C.magFilter),g.push(C.minFilter),g.push(C.anisotropy),g.push(C.internalFormat),g.push(C.format),g.push(C.type),g.push(C.generateMipmaps),g.push(C.premultiplyAlpha),g.push(C.flipY),g.push(C.unpackAlignment),g.push(C.colorSpace),g.join()}function j(C,g){let I=i.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){let V=C.image;if(V===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(I,C,g);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+g)}function tt(C,g){let I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){Dt(I,C,g);return}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+g)}function st(C,g){let I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){Dt(I,C,g);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+g)}function ut(C,g){let I=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&I.__version!==C.version){Lt(I,C,g);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+g)}let gt={[vh]:e.REPEAT,[Bi]:e.CLAMP_TO_EDGE,[xh]:e.MIRRORED_REPEAT},Qt={[en]:e.NEAREST,[GS]:e.NEAREST_MIPMAP_NEAREST,[$l]:e.NEAREST_MIPMAP_LINEAR,[cn]:e.LINEAR,[Wh]:e.LINEAR_MIPMAP_NEAREST,[ha]:e.LINEAR_MIPMAP_LINEAR},_e={[WS]:e.NEVER,[KS]:e.ALWAYS,[qS]:e.LESS,[Rf]:e.LEQUAL,[YS]:e.EQUAL,[Df]:e.GEQUAL,[ZS]:e.GREATER,[JS]:e.NOTEQUAL};function $t(C,g){if(g.type===Mi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===cn||g.magFilter===Wh||g.magFilter===$l||g.magFilter===ha||g.minFilter===cn||g.minFilter===Wh||g.minFilter===$l||g.minFilter===ha)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,gt[g.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,gt[g.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,gt[g.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,Qt[g.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Qt[g.minFilter]),g.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,_e[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===en||g.minFilter!==$l&&g.minFilter!==ha||g.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Z(C,g){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,g.addEventListener("dispose",w));let V=g.source,X=d.get(V);X===void 0&&(X={},d.set(V,X));let nt=G(g);if(nt!==C.__cacheKey){X[nt]===void 0&&(X[nt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,I=!0),X[nt].usedTimes++;let rt=X[C.__cacheKey];rt!==void 0&&(X[C.__cacheKey].usedTimes--,rt.usedTimes===0&&R(g)),C.__cacheKey=nt,C.__webglTexture=X[nt].texture}return I}function it(C,g,I){return Math.floor(Math.floor(C/I)/g)}function et(C,g,I,V){let nt=C.updateRanges;if(nt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,g.width,g.height,I,V,g.data);else{nt.sort((bt,ht)=>bt.start-ht.start);let rt=0;for(let bt=1;bt<nt.length;bt++){let ht=nt[rt],lt=nt[bt],At=ht.start+ht.count,Rt=it(lt.start,g.width,4),Bt=it(ht.start,g.width,4);lt.start<=At+1&&Rt===Bt&&it(lt.start+lt.count-1,g.width,4)===Rt?ht.count=Math.max(ht.count,lt.start+lt.count-ht.start):(++rt,nt[rt]=lt)}nt.length=rt+1;let q=n.getParameter(e.UNPACK_ROW_LENGTH),K=n.getParameter(e.UNPACK_SKIP_PIXELS),ot=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,g.width);for(let bt=0,ht=nt.length;bt<ht;bt++){let lt=nt[bt],At=Math.floor(lt.start/4),Rt=Math.ceil(lt.count/4),Bt=At%g.width,U=Math.floor(At/g.width),at=Rt,J=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Bt),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,Bt,U,at,J,I,V,g.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,q),n.pixelStorei(e.UNPACK_SKIP_PIXELS,K),n.pixelStorei(e.UNPACK_SKIP_ROWS,ot)}}function Dt(C,g,I){let V=e.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=e.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=e.TEXTURE_3D);let X=Z(C,g),nt=g.source;n.bindTexture(V,C.__webglTexture,e.TEXTURE0+I);let rt=i.get(nt);if(nt.version!==rt.__version||X===!0){if(n.activeTexture(e.TEXTURE0+I),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let J=Jt.getPrimaries(Jt.workingColorSpace),ct=g.colorSpace===xs?null:Jt.getPrimaries(g.colorSpace),mt=g.colorSpace===xs||J===ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}n.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment);let K=m(g.image,!1,s.maxTextureSize);K=bn(g,K);let ot=a.convert(g.format,g.colorSpace),bt=a.convert(g.type),ht=x(g.internalFormat,ot,bt,g.normalized,g.colorSpace,g.isVideoTexture);$t(V,g);let lt,At=g.mipmaps,Rt=g.isVideoTexture!==!0,Bt=rt.__version===void 0||X===!0,U=nt.dataReady,at=A(g,K);if(g.isDepthTexture)ht=T(g.format===fa,g.type),Bt&&(Rt?n.texStorage2D(e.TEXTURE_2D,1,ht,K.width,K.height):n.texImage2D(e.TEXTURE_2D,0,ht,K.width,K.height,0,ot,bt,null));else if(g.isDataTexture)if(At.length>0){Rt&&Bt&&n.texStorage2D(e.TEXTURE_2D,at,ht,At[0].width,At[0].height);for(let J=0,ct=At.length;J<ct;J++)lt=At[J],Rt?U&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,lt.width,lt.height,ot,bt,lt.data):n.texImage2D(e.TEXTURE_2D,J,ht,lt.width,lt.height,0,ot,bt,lt.data);g.generateMipmaps=!1}else Rt?(Bt&&n.texStorage2D(e.TEXTURE_2D,at,ht,K.width,K.height),U&&et(g,K,ot,bt)):n.texImage2D(e.TEXTURE_2D,0,ht,K.width,K.height,0,ot,bt,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Rt&&Bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,at,ht,At[0].width,At[0].height,K.depth);for(let J=0,ct=At.length;J<ct;J++)if(lt=At[J],g.format!==fi)if(ot!==null)if(Rt){if(U)if(g.layerUpdates.size>0){let mt=Ug(lt.width,lt.height,g.format,g.type);for(let $ of g.layerUpdates){let Mt=lt.data.subarray($*mt/lt.data.BYTES_PER_ELEMENT,($+1)*mt/lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,$,lt.width,lt.height,1,ot,Mt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,K.depth,ot,lt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,ht,lt.width,lt.height,K.depth,0,lt.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,K.depth,ot,bt,lt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,J,ht,lt.width,lt.height,K.depth,0,ot,bt,lt.data)}else{Rt&&Bt&&n.texStorage2D(e.TEXTURE_2D,at,ht,At[0].width,At[0].height);for(let J=0,ct=At.length;J<ct;J++)lt=At[J],g.format!==fi?ot!==null?Rt?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,lt.width,lt.height,ot,lt.data):n.compressedTexImage2D(e.TEXTURE_2D,J,ht,lt.width,lt.height,0,lt.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?U&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,lt.width,lt.height,ot,bt,lt.data):n.texImage2D(e.TEXTURE_2D,J,ht,lt.width,lt.height,0,ot,bt,lt.data)}else if(g.isDataArrayTexture)if(Rt){if(Bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,at,ht,K.width,K.height,K.depth),U)if(g.layerUpdates.size>0){let J=Ug(K.width,K.height,g.format,g.type);for(let ct of g.layerUpdates){let mt=K.data.subarray(ct*J/K.data.BYTES_PER_ELEMENT,(ct+1)*J/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ct,K.width,K.height,1,ot,bt,mt)}g.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ot,bt,K.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ht,K.width,K.height,K.depth,0,ot,bt,K.data);else if(g.isData3DTexture)Rt?(Bt&&n.texStorage3D(e.TEXTURE_3D,at,ht,K.width,K.height,K.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ot,bt,K.data)):n.texImage3D(e.TEXTURE_3D,0,ht,K.width,K.height,K.depth,0,ot,bt,K.data);else if(g.isFramebufferTexture){if(Bt)if(Rt)n.texStorage2D(e.TEXTURE_2D,at,ht,K.width,K.height);else{let J=K.width,ct=K.height;for(let mt=0;mt<at;mt++)n.texImage2D(e.TEXTURE_2D,mt,ht,J,ct,0,ot,bt,null),J>>=1,ct>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in e){let J=e.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),K.parentNode!==J){J.appendChild(K),p.add(g),J.onpaint=ct=>{let mt=ct.changedElements;for(let $ of p)mt.includes($.image)&&($.needsUpdate=!0)},J.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,K);else{let mt=e.RGBA,$=e.RGBA,Mt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,mt,$,Mt,K)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(At.length>0){if(Rt&&Bt){let J=ae(At[0]);n.texStorage2D(e.TEXTURE_2D,at,ht,J.width,J.height)}for(let J=0,ct=At.length;J<ct;J++)lt=At[J],Rt?U&&n.texSubImage2D(e.TEXTURE_2D,J,0,0,ot,bt,lt):n.texImage2D(e.TEXTURE_2D,J,ht,ot,bt,lt);g.generateMipmaps=!1}else if(Rt){if(Bt){let J=ae(K);n.texStorage2D(e.TEXTURE_2D,at,ht,J.width,J.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ot,bt,K)}else n.texImage2D(e.TEXTURE_2D,0,ht,ot,bt,K);h(g)&&v(V),rt.__version=nt.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function Lt(C,g,I){if(g.image.length!==6)return;let V=Z(C,g),X=g.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+I);let nt=i.get(X);if(X.version!==nt.__version||V===!0){n.activeTexture(e.TEXTURE0+I);let rt=Jt.getPrimaries(Jt.workingColorSpace),q=g.colorSpace===xs?null:Jt.getPrimaries(g.colorSpace),K=g.colorSpace===xs||rt===q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ot=g.isCompressedTexture||g.image[0].isCompressedTexture,bt=g.image[0]&&g.image[0].isDataTexture,ht=[];for(let $=0;$<6;$++)!ot&&!bt?ht[$]=m(g.image[$],!0,s.maxCubemapSize):ht[$]=bt?g.image[$].image:g.image[$],ht[$]=bn(g,ht[$]);let lt=ht[0],At=a.convert(g.format,g.colorSpace),Rt=a.convert(g.type),Bt=x(g.internalFormat,At,Rt,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,at=nt.__version===void 0||V===!0,J=X.dataReady,ct=A(g,lt);$t(e.TEXTURE_CUBE_MAP,g);let mt;if(ot){U&&at&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ct,Bt,lt.width,lt.height);for(let $=0;$<6;$++){mt=ht[$].mipmaps;for(let Mt=0;Mt<mt.length;Mt++){let yt=mt[Mt];g.format!==fi?At!==null?U?J&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt,0,0,yt.width,yt.height,At,yt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt,Bt,yt.width,yt.height,0,yt.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt,0,0,yt.width,yt.height,At,Rt,yt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt,Bt,yt.width,yt.height,0,At,Rt,yt.data)}}}else{if(mt=g.mipmaps,U&&at){mt.length>0&&ct++;let $=ae(ht[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ct,Bt,$.width,$.height)}for(let $=0;$<6;$++)if(bt){U?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ht[$].width,ht[$].height,At,Rt,ht[$].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,ht[$].width,ht[$].height,0,At,Rt,ht[$].data);for(let Mt=0;Mt<mt.length;Mt++){let Ce=mt[Mt].image[$].image;U?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt+1,0,0,Ce.width,Ce.height,At,Rt,Ce.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt+1,Bt,Ce.width,Ce.height,0,At,Rt,Ce.data)}}else{U?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,At,Rt,ht[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Bt,At,Rt,ht[$]);for(let Mt=0;Mt<mt.length;Mt++){let yt=mt[Mt];U?J&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt+1,0,0,At,Rt,yt.image[$]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Mt+1,Bt,At,Rt,yt.image[$])}}}h(g)&&v(e.TEXTURE_CUBE_MAP),nt.__version=X.version,g.onUpdate&&g.onUpdate(g)}C.__version=g.version}function xt(C,g,I,V,X,nt){let rt=a.convert(I.format,I.colorSpace),q=a.convert(I.type),K=x(I.internalFormat,rt,q,I.normalized,I.colorSpace),ot=i.get(g),bt=i.get(I);if(bt.__renderTarget=g,!ot.__hasExternalTextures){let ht=Math.max(1,g.width>>nt),lt=Math.max(1,g.height>>nt);X===e.TEXTURE_3D||X===e.TEXTURE_2D_ARRAY?n.texImage3D(X,nt,K,ht,lt,g.depth,0,rt,q,null):n.texImage2D(X,nt,K,ht,lt,0,rt,q,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Fe(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,V,X,bt.__webglTexture,0,we(g)):(X===e.TEXTURE_2D||X>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,V,X,bt.__webglTexture,nt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Xt(C,g,I){if(e.bindRenderbuffer(e.RENDERBUFFER,C),g.depthBuffer){let V=g.depthTexture,X=V&&V.isDepthTexture?V.type:null,nt=T(g.stencilBuffer,X),rt=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(g),nt,g.width,g.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(g),nt,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,nt,g.width,g.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,rt,e.RENDERBUFFER,C)}else{let V=g.textures;for(let X=0;X<V.length;X++){let nt=V[X],rt=a.convert(nt.format,nt.colorSpace),q=a.convert(nt.type),K=x(nt.internalFormat,rt,q,nt.normalized,nt.colorSpace);Fe(g)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(g),K,g.width,g.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(g),K,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,K,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ot(C,g,I){let V=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=i.get(g.depthTexture);if(X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V){if(X.__webglInit===void 0&&(X.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),X.__webglTexture===void 0){X.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),$t(e.TEXTURE_CUBE_MAP,g.depthTexture);let ot=a.convert(g.depthTexture.format),bt=a.convert(g.depthTexture.type),ht;g.depthTexture.format===Fi?ht=e.DEPTH_COMPONENT24:g.depthTexture.format===fa&&(ht=e.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ht,g.width,g.height,0,ot,bt,null)}}else j(g.depthTexture,0);let nt=X.__webglTexture,rt=we(g),q=V?e.TEXTURE_CUBE_MAP_POSITIVE_X+I:e.TEXTURE_2D,K=g.depthTexture.format===fa?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(g.depthTexture.format===Fi)Fe(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,q,nt,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,K,q,nt,0);else if(g.depthTexture.format===fa)Fe(g)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,q,nt,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,K,q,nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(C){let g=i.get(C),I=C.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){let X=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",X)};V.addEventListener("dispose",X),g.__depthDisposeCallback=X}g.__boundDepthTexture=V}if(C.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let V=0;V<6;V++)Ot(g.__webglFramebuffer[V],C,V);else{let V=C.texture.mipmaps;V&&V.length>0?Ot(g.__webglFramebuffer[0],C,0):Ot(g.__webglFramebuffer,C,0)}else if(I){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=e.createRenderbuffer(),Xt(g.__webglDepthbuffer[V],C,!1);else{let X=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,nt=g.__webglDepthbuffer[V];e.bindRenderbuffer(e.RENDERBUFFER,nt),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,nt)}}else{let V=C.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),Xt(g.__webglDepthbuffer,C,!1);else{let X=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,nt=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,nt),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,nt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Yt(C,g,I){let V=i.get(C);g!==void 0&&xt(V.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Gt(C)}function te(C){let g=C.texture,I=i.get(C),V=i.get(g);C.addEventListener("dispose",y);let X=C.textures,nt=C.isWebGLCubeRenderTarget===!0,rt=X.length>1;if(rt||(V.__webglTexture===void 0&&(V.__webglTexture=e.createTexture()),V.__version=g.version,r.memory.textures++),nt){I.__webglFramebuffer=[];for(let q=0;q<6;q++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[q]=[];for(let K=0;K<g.mipmaps.length;K++)I.__webglFramebuffer[q][K]=e.createFramebuffer()}else I.__webglFramebuffer[q]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let q=0;q<g.mipmaps.length;q++)I.__webglFramebuffer[q]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(rt)for(let q=0,K=X.length;q<K;q++){let ot=i.get(X[q]);ot.__webglTexture===void 0&&(ot.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Fe(C)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let q=0;q<X.length;q++){let K=X[q];I.__webglColorRenderbuffer[q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[q]);let ot=a.convert(K.format,K.colorSpace),bt=a.convert(K.type),ht=x(K.internalFormat,ot,bt,K.normalized,K.colorSpace,C.isXRRenderTarget===!0),lt=we(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,lt,ht,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+q,e.RENDERBUFFER,I.__webglColorRenderbuffer[q])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Xt(I.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(nt){n.bindTexture(e.TEXTURE_CUBE_MAP,V.__webglTexture),$t(e.TEXTURE_CUBE_MAP,g);for(let q=0;q<6;q++)if(g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)xt(I.__webglFramebuffer[q][K],C,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else xt(I.__webglFramebuffer[q],C,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);h(g)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(rt){for(let q=0,K=X.length;q<K;q++){let ot=X[q],bt=i.get(ot),ht=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ht,bt.__webglTexture),$t(ht,ot),xt(I.__webglFramebuffer,C,ot,e.COLOR_ATTACHMENT0+q,ht,0),h(ot)&&v(ht)}n.unbindTexture()}else{let q=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(q,V.__webglTexture),$t(q,g),g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)xt(I.__webglFramebuffer[K],C,g,e.COLOR_ATTACHMENT0,q,K);else xt(I.__webglFramebuffer,C,g,e.COLOR_ATTACHMENT0,q,0);h(g)&&v(q),n.unbindTexture()}C.depthBuffer&&Gt(C)}function Be(C){let g=C.textures;for(let I=0,V=g.length;I<V;I++){let X=g[I];if(h(X)){let nt=S(C),rt=i.get(X).__webglTexture;n.bindTexture(nt,rt),v(nt),n.unbindTexture()}}}let Xe=[],Ke=[];function nn(C){if(C.samples>0){if(Fe(C)===!1){let g=C.textures,I=C.width,V=C.height,X=e.COLOR_BUFFER_BIT,nt=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=i.get(C),q=g.length>1;if(q)for(let ot=0;ot<g.length;ot++)n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let K=C.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ot=0;ot<g.length;ot++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(X|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(X|=e.STENCIL_BUFFER_BIT)),q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,rt.__webglColorRenderbuffer[ot]);let bt=i.get(g[ot]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,bt,0)}e.blitFramebuffer(0,0,I,V,0,0,I,V,X,e.NEAREST),l===!0&&(Xe.length=0,Ke.length=0,Xe.push(e.COLOR_ATTACHMENT0+ot),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Xe.push(nt),Ke.push(nt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ke)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Xe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),q)for(let ot=0;ot<g.length;ot++){n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,rt.__webglColorRenderbuffer[ot]);let bt=i.get(g[ot]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,bt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let g=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function we(C){return Math.min(s.maxSamples,C.samples)}function Fe(C){let g=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function N(C){let g=r.render.frame;f.get(C)!==g&&(f.set(C,g),C.update())}function bn(C,g){let I=C.colorSpace,V=C.format,X=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==Ol&&I!==xs&&(Jt.getTransfer(I)===se?(V!==fi||X!==Jn)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",I)),g}function ae(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=tt,this.setTexture3D=st,this.setTextureCube=ut,this.rebindTextures=Yt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function x2(e,t){function n(i,s=xs){let a,r=Jt.getTransfer(s);if(i===Jn)return e.UNSIGNED_BYTE;if(i===Yh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Zh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===xg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===yg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===_g)return e.BYTE;if(i===vg)return e.SHORT;if(i===po)return e.UNSIGNED_SHORT;if(i===qh)return e.INT;if(i===Si)return e.UNSIGNED_INT;if(i===Mi)return e.FLOAT;if(i===mn)return e.HALF_FLOAT;if(i===Sg)return e.ALPHA;if(i===Mg)return e.RGB;if(i===fi)return e.RGBA;if(i===Fi)return e.DEPTH_COMPONENT;if(i===fa)return e.DEPTH_STENCIL;if(i===bg)return e.RED;if(i===Jh)return e.RED_INTEGER;if(i===da)return e.RG;if(i===Kh)return e.RG_INTEGER;if(i===Qh)return e.RGBA_INTEGER;if(i===tc||i===ec||i===nc||i===ic)if(r===se)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ic)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ec)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ic)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jh||i===$h||i===tf||i===ef)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===jh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$h)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ef)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nf||i===sf||i===af||i===rf||i===of||i===sc||i===lf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===nf||i===sf)return r===se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===af)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===rf)return a.COMPRESSED_R11_EAC;if(i===of)return a.COMPRESSED_SIGNED_R11_EAC;if(i===sc)return a.COMPRESSED_RG11_EAC;if(i===lf)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cf||i===uf||i===hf||i===ff||i===df||i===pf||i===mf||i===gf||i===_f||i===vf||i===xf||i===yf||i===Sf||i===Mf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===cf)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uf)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hf)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ff)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===df)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pf)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mf)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gf)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_f)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vf)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xf)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yf)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sf)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mf)return r===se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bf||i===Tf||i===Ef)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===bf)return r===se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ef)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Af||i===wf||i===ac||i===Cf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Af)return a.COMPRESSED_RED_RGTC1_EXT;if(i===wf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ac)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===mo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var y2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Kg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new ql(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Ae({vertexShader:y2,fragmentShader:S2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pn(new Ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qg=class extends zi{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,_=null,b=typeof XRWebGLBinding<"u",m=new Kg,h={},v=n.getContextAttributes(),S=null,x=null,T=[],A=[],w=new Ct,y=null,E=new Un;E.viewport=new Ee;let R=new Un;R.viewport=new Ee;let D=[E,R],O=new Hh,W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=T[Z];return it===void 0&&(it=new co,T[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=T[Z];return it===void 0&&(it=new co,T[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=T[Z];return it===void 0&&(it=new co,T[Z]=it),it.getHandSpace()};function z(Z){let it=A.indexOf(Z.inputSource);if(it===-1)return;let et=T[it];et!==void 0&&(et.update(Z.inputSource,Z.frame,c||r),et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let Z=0;Z<T.length;Z++){let it=A[Z];it!==null&&(A[Z]=null,T[Z].disconnect(it))}W=null,Y=null,m.reset();for(let Z in h)delete h[Z];t.setRenderTarget(S),d=null,u=null,p=null,s=null,x=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(w),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,Dt=null,Lt=null;v.depth&&(Lt=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,et=v.stencil?fa:Fi,Dt=v.stencil?mo:Si);let xt={colorFormat:n.RGBA8,depthFormat:Lt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Ye(u.textureWidth,u.textureHeight,{format:fi,type:Jn,depthTexture:new _s(u.textureWidth,u.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let et={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ye(d.framebufferWidth,d.framebufferHeight,{format:fi,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Z){for(let it=0;it<Z.removed.length;it++){let et=Z.removed[it],Dt=A.indexOf(et);Dt>=0&&(A[Dt]=null,T[Dt].disconnect(et))}for(let it=0;it<Z.added.length;it++){let et=Z.added[it],Dt=A.indexOf(et);if(Dt===-1){for(let xt=0;xt<T.length;xt++)if(xt>=A.length){A.push(et),Dt=xt;break}else if(A[xt]===null){A[xt]=et,Dt=xt;break}if(Dt===-1)break}let Lt=T[Dt];Lt&&Lt.connect(et)}}let j=new P,tt=new P;function st(Z,it,et){j.setFromMatrixPosition(it.matrixWorld),tt.setFromMatrixPosition(et.matrixWorld);let Dt=j.distanceTo(tt),Lt=it.projectionMatrix.elements,xt=et.projectionMatrix.elements,Xt=Lt[14]/(Lt[10]-1),Ot=Lt[14]/(Lt[10]+1),Gt=(Lt[9]+1)/Lt[5],Yt=(Lt[9]-1)/Lt[5],te=(Lt[8]-1)/Lt[0],Be=(xt[8]+1)/xt[0],Xe=Xt*te,Ke=Xt*Be,nn=Dt/(-te+Be),we=nn*-te;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(we),Z.translateZ(nn),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Lt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Fe=Xt+nn,N=Ot+nn,bn=Xe-we,ae=Ke+(Dt-we),C=Gt*Ot/N*Fe,g=Yt*Ot/N*Fe;Z.projectionMatrix.makePerspective(bn,ae,C,g,Fe,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ut(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,et=Z.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(et=m.depthFar)),O.near=R.near=E.near=it,O.far=R.far=E.far=et,(W!==O.near||Y!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),W=O.near,Y=O.far),O.layers.mask=Z.layers.mask|6,E.layers.mask=O.layers.mask&-5,R.layers.mask=O.layers.mask&-3;let Dt=Z.parent,Lt=O.cameras;ut(O,Dt);for(let xt=0;xt<Lt.length;xt++)ut(Lt[xt],Dt);Lt.length===2?st(O,E,R):O.projectionMatrix.copy(E.projectionMatrix),gt(Z,O,Dt)};function gt(Z,it,et){et===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=oo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return h[Z]};let Qt=null;function _e(Z,it){if(f=it.getViewerPose(c||r),_=it,f!==null){let et=f.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Dt=!1;et.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let Ot=0;Ot<et.length;Ot++){let Gt=et[Ot],Yt=null;if(d!==null)Yt=d.getViewport(Gt);else{let Be=p.getViewSubImage(u,Gt);Yt=Be.viewport,Ot===0&&(t.setRenderTargetTextures(x,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(x))}let te=D[Ot];te===void 0&&(te=new Un,te.layers.enable(Ot),te.viewport=new Ee,D[Ot]=te),te.matrix.fromArray(Gt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Gt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Ot===0&&(O.matrix.copy(te.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push(te)}let Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let Ot=p.getDepthInformation(et[0]);Ot&&Ot.isValid&&Ot.texture&&m.init(Ot,s.renderState)}if(Lt&&Lt.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let Ot=0;Ot<et.length;Ot++){let Gt=et[Ot].camera;if(Gt){let Yt=h[Gt];Yt||(Yt=new ql,h[Gt]=Yt);let te=p.getCameraImage(Gt);Yt.sourceTexture=te}}}}for(let et=0;et<T.length;et++){let Dt=A[et],Lt=T[et];Dt!==null&&Lt!==void 0&&Lt.update(Dt,it,c||r)}Qt&&Qt(Z,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),_=null}let $t=new EM;$t.setAnimationLoop(_e),this.setAnimationLoop=function(Z){Qt=Z},this.dispose=function(){}}},M2=new Pe,UM=new It;UM.set(-1,0,0,0,1,0,0,0,1);function b2(e,t){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Cg(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,v,S,x){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(m,h):h.isMeshLambertMaterial?(a(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(m,h),p(m,h)):h.isMeshPhongMaterial?(a(m,h),f(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(m,h),u(m,h),h.isMeshPhysicalMaterial&&d(m,h,x)):h.isMeshMatcapMaterial?(a(m,h),_(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),b(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(r(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,v,S):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Mn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Mn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let v=t.get(h),S=v.envMap,x=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(M2.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(UM),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function r(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=S*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function p(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function d(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Mn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function b(m,h){let v=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function T2(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){let A=T.program;i.uniformBlockBinding(x,A)}function c(x,T){let A=s[x.id];A===void 0&&(m(x),A=f(x),s[x.id]=A,x.addEventListener("dispose",v));let w=T.program;i.updateUBOMapping(x,w);let y=t.render.frame;a[x.id]!==y&&(u(x),a[x.id]=y)}function f(x){let T=p();x.__bindingPointIndex=T;let A=e.createBuffer(),w=x.__size,y=x.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,w,y),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,A),A}function p(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let T=s[x.id],A=x.uniforms,w=x.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let y=0,E=A.length;y<E;y++){let R=A[y];if(Array.isArray(R))for(let D=0,O=R.length;D<O;D++)d(R[D],y,D,w);else d(R,y,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(x,T,A,w){if(b(x,T,A,w)===!0){let y=x.__offset,E=x.value;if(Array.isArray(E)){let R=0;for(let D=0;D<E.length;D++){let O=E[D],W=h(O);_(O,x.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,x.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,y,x.__data)}}function _(x,T,A){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,A)}function b(x,T,A,w){let y=x.value,E=T+"_"+A;if(w[E]===void 0)return typeof y=="number"||typeof y=="boolean"?w[E]=y:ArrayBuffer.isView(y)?w[E]=y.slice():w[E]=y.clone(),!0;{let R=w[E];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return w[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(x){let T=x.uniforms,A=0,w=16;for(let E=0,R=T.length;E<R;E++){let D=Array.isArray(T[E])?T[E]:[T[E]];for(let O=0,W=D.length;O<W;O++){let Y=D[O],z=Array.isArray(Y.value)?Y.value:[Y.value];for(let k=0,G=z.length;k<G;k++){let j=z[k],tt=h(j),st=A%w,ut=st%tt.boundary,gt=st+ut;A+=ut,gt!==0&&w-gt<tt.storage&&(A+=w-gt),Y.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=A,A+=tt.storage}}}let y=A%w;return y>0&&(A+=w-y),x.__size=A,x.__cache={},this}function h(x){let T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",x),T}function v(x){let T=x.target;T.removeEventListener("dispose",v);let A=r.indexOf(T.__bindingPointIndex);r.splice(A,1),e.deleteBuffer(s[T.id]),delete s[T.id],delete a[T.id]}function S(){for(let x in s)e.deleteBuffer(s[x]);r=[],s={},a={}}return{bind:l,update:c,dispose:S}}var E2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function A2(){return Gi===null&&(Gi=new Eh(E2,16,16,da,mn),Gi.name="DFG_LUT",Gi.minFilter=cn,Gi.magFilter=cn,Gi.wrapS=Bi,Gi.wrapT=Bi,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var Pf=class{constructor(t={}){let{canvas:n=QS(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Jn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;let b=d,m=new Set([Qh,Kh,Jh]),h=new Set([Jn,Si,po,mo,Yh,Zh]),v=new Uint32Array(4),S=new Int32Array(4),x=new P,T=null,A=null,w=[],y=[],E=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,O=null,W=null,Y=null,z=null;this._outputColorSpace=qn;let k=0,G=0,j=null,tt=-1,st=null,ut=new Ee,gt=new Ee,Qt=null,_e=new Vt(0),$t=0,Z=n.width,it=n.height,et=1,Dt=null,Lt=null,xt=new Ee(0,0,Z,it),Xt=new Ee(0,0,Z,it),Ot=!1,Gt=new Xl,Yt=!1,te=!1,Be=new Pe,Xe=new P,Ke=new Ee,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Fe(){return j===null?et:1}let N=i;function bn(M,L){return n.getContext(M,L)}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",Ce,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",Ti,!1),N===null){let L="webgl2";if(N=bn(L,M),N===null)throw bn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Ut("WebGLRenderer: "+M.message),M}let ae,C,g,I,V,X,nt,rt,q,K,ot,bt,ht,lt,At,Rt,Bt,U,at,J,ct,mt,$;function Mt(){ae=new LC(N),ae.init(),ct=new x2(N,ae),C=new EC(N,ae,t,ct),g=new _2(N,ae),C.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),W=N.createFramebuffer(),Y=N.createFramebuffer(),z=N.createFramebuffer(),I=new PC(N),V=new i2,X=new v2(N,ae,g,V,C,ct,I),nt=new NC(R),rt=new VE(N),mt=new bC(N,rt),q=new IC(N,rt,I,mt),K=new FC(N,q,rt,mt,I),U=new BC(N,C,X),At=new AC(V),ot=new n2(R,nt,ae,C,mt,At),bt=new b2(R,V),ht=new a2,lt=new h2(ae),Bt=new MC(R,nt,g,K,_,l),Rt=new g2(R,K,C),$=new T2(N,I,C,g),at=new TC(N,ae,I),J=new OC(N,ae,I),I.programs=ot.programs,R.capabilities=C,R.extensions=ae,R.properties=V,R.renderLists=ht,R.shadowMap=Rt,R.state=g,R.info=I}Mt(),b!==Jn&&(E=new VC(b,n.width,n.height,o,s,a));let yt=new Qg(R,N);this.xr=yt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(M){M!==void 0&&(et=M,this.setSize(Z,it,!1))},this.getSize=function(M){return M.set(Z,it)},this.setSize=function(M,L,H=!0){if(yt.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,it=L,n.width=Math.floor(M*et),n.height=Math.floor(L*et),H===!0&&(n.style.width=M+"px",n.style.height=L+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Z*et,it*et).floor()},this.setDrawingBufferSize=function(M,L,H){Z=M,it=L,et=H,n.width=Math.floor(M*H),n.height=Math.floor(L*H),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(b===Jn){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ut)},this.getViewport=function(M){return M.copy(xt)},this.setViewport=function(M,L,H,B){M.isVector4?xt.set(M.x,M.y,M.z,M.w):xt.set(M,L,H,B),g.viewport(ut.copy(xt).multiplyScalar(et).round())},this.getScissor=function(M){return M.copy(Xt)},this.setScissor=function(M,L,H,B){M.isVector4?Xt.set(M.x,M.y,M.z,M.w):Xt.set(M,L,H,B),g.scissor(gt.copy(Xt).multiplyScalar(et).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(M){g.setScissorTest(Ot=M)},this.setOpaqueSort=function(M){Dt=M},this.setTransparentSort=function(M){Lt=M},this.getClearColor=function(M){return M.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,H=!0){let B=0;if(M){let F=!1;if(j!==null){let pt=j.texture.format;F=m.has(pt)}if(F){let pt=j.texture.type,vt=h.has(pt),dt=Bt.getClearColor(),St=Bt.getClearAlpha(),Tt=dt.r,Ft=dt.g,kt=dt.b;vt?(v[0]=Tt,v[1]=Ft,v[2]=kt,v[3]=St,N.clearBufferuiv(N.COLOR,0,v)):(S[0]=Tt,S[1]=Ft,S[2]=kt,S[3]=St,N.clearBufferiv(N.COLOR,0,S))}else B|=N.COLOR_BUFFER_BIT}L&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",Ti,!1),Bt.dispose(),ht.dispose(),lt.dispose(),V.dispose(),nt.dispose(),K.dispose(),mt.dispose(),$.dispose(),ot.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",e0),yt.removeEventListener("sessionend",n0),ma.stop()};function Ce(M){M.preventDefault(),Ag("WebGLRenderer: Context Lost."),D=!0}function pe(){Ag("WebGLRenderer: Context Restored."),D=!1;let M=I.autoReset,L=Rt.enabled,H=Rt.autoUpdate,B=Rt.needsUpdate,F=Rt.type;Mt(),I.autoReset=M,Rt.enabled=L,Rt.autoUpdate=H,Rt.needsUpdate=B,Rt.type=F}function Ti(M){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ei(M){let L=M.target;L.removeEventListener("dispose",Ei),VM(L)}function VM(M){HM(M),V.remove(M)}function HM(M){let L=V.get(M).programs;L!==void 0&&(L.forEach(function(H){ot.releaseProgram(H)}),M.isShaderMaterial&&ot.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,H,B,F,pt){L===null&&(L=nn);let vt=F.isMesh&&F.matrixWorld.determinantAffine()<0,dt=XM(M,L,H,B,F);g.setMaterial(B,vt);let St=H.index,Tt=1;if(B.wireframe===!0){if(St=q.getWireframeAttribute(H),St===void 0)return;Tt=2}let Ft=H.drawRange,kt=H.attributes.position,Et=Ft.start*Tt,le=(Ft.start+Ft.count)*Tt;pt!==null&&(Et=Math.max(Et,pt.start*Tt),le=Math.min(le,(pt.start+pt.count)*Tt)),St!==null?(Et=Math.max(Et,0),le=Math.min(le,St.count)):kt!=null&&(Et=Math.max(Et,0),le=Math.min(le,kt.count));let Ne=le-Et;if(Ne<0||Ne===1/0)return;mt.setup(F,B,dt,H,St);let Re,he=at;if(St!==null&&(Re=rt.get(St),he=J,he.setIndex(Re)),F.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*Fe()),he.setMode(N.LINES)):he.setMode(N.TRIANGLES);else if(F.isLine){let un=B.linewidth;un===void 0&&(un=1),g.setLineWidth(un*Fe()),F.isLineSegments?he.setMode(N.LINES):F.isLineLoop?he.setMode(N.LINE_LOOP):he.setMode(N.LINE_STRIP)}else F.isPoints?he.setMode(N.POINTS):F.isSprite&&he.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))he.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let un=F._multiDrawStarts,_t=F._multiDrawCounts,Ln=F._multiDrawCount,ee=St?rt.get(St).bytesPerElement:1,Kn=V.get(B).currentProgram.getUniforms();for(let Ai=0;Ai<Ln;Ai++)Kn.setValue(N,"_gl_DrawID",Ai),he.render(un[Ai]/ee,_t[Ai])}else if(F.isInstancedMesh)he.renderInstances(Et,Ne,F.count);else if(H.isInstancedBufferGeometry){let un=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,_t=Math.min(H.instanceCount,un);he.renderInstances(Et,Ne,_t)}else he.render(Et,Ne)};function t0(M,L,H){M.transparent===!0&&M.side===Hi&&M.forceSinglePass===!1?(M.side=Mn,M.needsUpdate=!0,hc(M,L,H),M.side=gs,M.needsUpdate=!0,hc(M,L,H),M.side=Hi):hc(M,L,H)}this.compile=function(M,L,H=null){H===null&&(H=M),A=lt.get(H),A.init(L),y.push(A),H.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),M!==H&&M.traverseVisible(function(F){F.isLight&&F.layers.test(L.layers)&&(A.pushLight(F),F.castShadow&&A.pushShadow(F))}),A.setupLights();let B=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let pt=F.material;if(pt)if(Array.isArray(pt))for(let vt=0;vt<pt.length;vt++){let dt=pt[vt];t0(dt,H,F),B.add(dt)}else t0(pt,H,F),B.add(pt)}),A=y.pop(),B},this.compileAsync=function(M,L,H=null){let B=this.compile(M,L,H);return new Promise(F=>{function pt(){if(B.forEach(function(vt){V.get(vt).currentProgram.isReady()&&B.delete(vt)}),B.size===0){F(M);return}setTimeout(pt,10)}ae.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let kf=null;function GM(M){kf&&kf(M)}function e0(){ma.stop()}function n0(){ma.start()}let ma=new EM;ma.setAnimationLoop(GM),typeof self<"u"&&ma.setContext(self),this.setAnimationLoop=function(M){kf=M,yt.setAnimationLoop(M),M===null?ma.stop():ma.start()},yt.addEventListener("sessionstart",e0),yt.addEventListener("sessionend",n0),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(M,L);let H=yt.enabled===!0&&yt.isPresenting===!0,B=E!==null&&(j===null||H)&&E.begin(R,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(L),L=yt.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,L,j),A=lt.get(M,y.length),A.init(L),A.state.textureUnits=X.getTextureUnits(),y.push(A),Be.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Gt.setFromProjectionMatrix(Be,xi,L.reversedDepth),te=this.localClippingEnabled,Yt=At.init(this.clippingPlanes,te),T=ht.get(M,w.length),T.init(),w.push(T),yt.enabled===!0&&yt.isPresenting===!0){let vt=R.xr.getDepthSensingMesh();vt!==null&&Xf(vt,L,-1/0,R.sortObjects)}Xf(M,L,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(Dt,Lt,L.reversedDepth),we=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,we&&Bt.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&At.beginShadows();let F=A.state.shadowsArray;if(Rt.render(F,M,L),Yt===!0&&At.endShadows(),(B&&E.hasRenderPass())===!1){let vt=T.opaque,dt=T.transmissive;if(A.setupLights(),L.isArrayCamera){let St=L.cameras;if(dt.length>0)for(let Tt=0,Ft=St.length;Tt<Ft;Tt++){let kt=St[Tt];s0(vt,dt,M,kt)}we&&Bt.render(M);for(let Tt=0,Ft=St.length;Tt<Ft;Tt++){let kt=St[Tt];i0(T,M,kt,kt.viewport)}}else dt.length>0&&s0(vt,dt,M,L),we&&Bt.render(M),i0(T,M,L)}j!==null&&G===0&&(X.updateMultisampleRenderTarget(j),X.updateRenderTargetMipmap(j)),B&&E.end(R),M.isScene===!0&&M.onAfterRender(R,M,L),mt.resetDefaultState(),tt=-1,st=null,y.pop(),y.length>0?(A=y[y.length-1],X.setTextureUnits(A.state.textureUnits),Yt===!0&&At.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?T=w[w.length-1]:T=null,O!==null&&O.renderEnd()};function Xf(M,L,H,B){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Gt.intersectsSprite(M)){B&&Ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Be);let vt=K.update(M),dt=M.material;dt.visible&&T.push(M,vt,dt,H,Ke.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Gt.intersectsObject(M))){let vt=K.update(M),dt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ke.copy(M.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ke.copy(vt.boundingSphere.center)),Ke.applyMatrix4(M.matrixWorld).applyMatrix4(Be)),Array.isArray(dt)){let St=vt.groups;for(let Tt=0,Ft=St.length;Tt<Ft;Tt++){let kt=St[Tt],Et=dt[kt.materialIndex];Et&&Et.visible&&T.push(M,vt,Et,H,Ke.z,kt)}}else dt.visible&&T.push(M,vt,dt,H,Ke.z,null)}}let pt=M.children;for(let vt=0,dt=pt.length;vt<dt;vt++)Xf(pt[vt],L,H,B)}function i0(M,L,H,B){let{opaque:F,transmissive:pt,transparent:vt}=M;A.setupLightsView(H),Yt===!0&&At.setGlobalState(R.clippingPlanes,H),B&&g.viewport(ut.copy(B)),F.length>0&&uc(F,L,H),pt.length>0&&uc(pt,L,H),vt.length>0&&uc(vt,L,H),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function s0(M,L,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){let Et=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new Ye(1,1,{generateMipmaps:!0,type:Et?mn:Jn,minFilter:ha,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let pt=A.state.transmissionRenderTarget[B.id],vt=B.viewport||ut;pt.setSize(vt.z*R.transmissionResolutionScale,vt.w*R.transmissionResolutionScale);let dt=R.getRenderTarget(),St=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(pt),R.getClearColor(_e),$t=R.getClearAlpha(),$t<1&&R.setClearColor(16777215,.5),R.clear(),we&&Bt.render(H);let Ft=R.toneMapping;R.toneMapping=yi;let kt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),Yt===!0&&At.setGlobalState(R.clippingPlanes,B),uc(M,H,B),X.updateMultisampleRenderTarget(pt),X.updateRenderTargetMipmap(pt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let le=0,Ne=L.length;le<Ne;le++){let Re=L[le],{object:he,geometry:un,material:_t,group:Ln}=Re;if(_t.side===Hi&&he.layers.test(B.layers)){let ee=_t.side;_t.side=Mn,_t.needsUpdate=!0,a0(he,H,B,un,_t,Ln),_t.side=ee,_t.needsUpdate=!0,Et=!0}}Et===!0&&(X.updateMultisampleRenderTarget(pt),X.updateRenderTargetMipmap(pt))}R.setRenderTarget(dt,St,Tt),R.setClearColor(_e,$t),kt!==void 0&&(B.viewport=kt),R.toneMapping=Ft}function uc(M,L,H){let B=L.isScene===!0?L.overrideMaterial:null;for(let F=0,pt=M.length;F<pt;F++){let vt=M[F],{object:dt,geometry:St,group:Tt}=vt,Ft=vt.material;Ft.allowOverride===!0&&B!==null&&(Ft=B),dt.layers.test(H.layers)&&a0(dt,L,H,St,Ft,Tt)}}function a0(M,L,H,B,F,pt){M.onBeforeRender(R,L,H,B,F,pt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(R,L,H,B,M,pt),F.transparent===!0&&F.side===Hi&&F.forceSinglePass===!1?(F.side=Mn,F.needsUpdate=!0,R.renderBufferDirect(H,L,B,F,M,pt),F.side=gs,F.needsUpdate=!0,R.renderBufferDirect(H,L,B,F,M,pt),F.side=Hi):R.renderBufferDirect(H,L,B,F,M,pt),M.onAfterRender(R,L,H,B,F,pt)}function hc(M,L,H){L.isScene!==!0&&(L=nn);let B=V.get(M),F=A.state.lights,pt=A.state.shadowsArray,vt=F.state.version,dt=ot.getParameters(M,F.state,pt,L,H,A.state.lightProbeGridArray),St=ot.getProgramCacheKey(dt),Tt=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;let Ft=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=nt.get(M.envMap||B.environment,Ft),B.envMapRotation=B.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",Ei),Tt=new Map,B.programs=Tt);let kt=Tt.get(St);if(kt!==void 0){if(B.currentProgram===kt&&B.lightsStateVersion===vt)return o0(M,dt),kt}else dt.uniforms=ot.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,H,dt),M.onBeforeCompile(dt,R),kt=ot.acquireProgram(dt,St),Tt.set(St,kt),B.uniforms=dt.uniforms;let Et=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=At.uniform),o0(M,dt),B.needsLights=qM(M),B.lightsStateVersion=vt,B.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),B.lightProbeGrid=A.state.lightProbeGridArray.length>0,B.currentProgram=kt,B.uniformsList=null,kt}function r0(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=vo.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function o0(M,L){let H=V.get(M);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function kM(M,L){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(L.matrixWorld);for(let H=0,B=M.length;H<B;H++){let F=M[H];if(F.texture!==null&&F.boundingBox.containsPoint(x))return F}return null}function XM(M,L,H,B,F){L.isScene!==!0&&(L=nn),X.resetTextureUnits();let pt=L.fog,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,dt=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Jt.workingColorSpace,St=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Tt=nt.get(B.envMap||vt,St),Ft=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Et=!!H.morphAttributes.position,le=!!H.morphAttributes.normal,Ne=!!H.morphAttributes.color,Re=yi;B.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Re=R.toneMapping);let he=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,un=he!==void 0?he.length:0,_t=V.get(B),Ln=A.state.lights;if(Yt===!0&&(te===!0||M!==st)){let me=M===st&&B.id===tt;At.setState(B,M,me)}let ee=!1;B.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Ln.state.version||_t.outputColorSpace!==dt||F.isBatchedMesh&&_t.batching===!1||!F.isBatchedMesh&&_t.batching===!0||F.isBatchedMesh&&_t.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&_t.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&_t.instancing===!1||!F.isInstancedMesh&&_t.instancing===!0||F.isSkinnedMesh&&_t.skinning===!1||!F.isSkinnedMesh&&_t.skinning===!0||F.isInstancedMesh&&_t.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&_t.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&_t.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&_t.instancingMorph===!1&&F.morphTexture!==null||_t.envMap!==Tt||B.fog===!0&&_t.fog!==pt||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==At.numPlanes||_t.numIntersection!==At.numIntersection)||_t.vertexAlphas!==Ft||_t.vertexTangents!==kt||_t.morphTargets!==Et||_t.morphNormals!==le||_t.morphColors!==Ne||_t.toneMapping!==Re||_t.morphTargetsCount!==un||!!_t.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,_t.__version=B.version);let Kn=_t.currentProgram;ee===!0&&(Kn=hc(B,L,F),O&&B.isNodeMaterial&&O.onUpdateProgram(B,Kn,_t));let Ai=!1,ys=!1,ja=!1,fe=Kn.getUniforms(),Le=_t.uniforms;if(g.useProgram(Kn.program)&&(Ai=!0,ys=!0,ja=!0),B.id!==tt&&(tt=B.id,ys=!0),_t.needsLights){let me=kM(A.state.lightProbeGridArray,F);_t.lightProbeGrid!==me&&(_t.lightProbeGrid=me,ys=!0)}if(Ai||st!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),fe.setValue(N,"projectionMatrix",M.projectionMatrix),fe.setValue(N,"viewMatrix",M.matrixWorldInverse);let Ms=fe.map.cameraPosition;Ms!==void 0&&Ms.setValue(N,Xe.setFromMatrixPosition(M.matrixWorld)),C.logarithmicDepthBuffer&&fe.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&fe.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),st!==M&&(st=M,ys=!0,ja=!0)}if(_t.needsLights&&(Ln.state.directionalShadowMap.length>0&&fe.setValue(N,"directionalShadowMap",Ln.state.directionalShadowMap,X),Ln.state.spotShadowMap.length>0&&fe.setValue(N,"spotShadowMap",Ln.state.spotShadowMap,X),Ln.state.pointShadowMap.length>0&&fe.setValue(N,"pointShadowMap",Ln.state.pointShadowMap,X)),F.isSkinnedMesh){fe.setOptional(N,F,"bindMatrix"),fe.setOptional(N,F,"bindMatrixInverse");let me=F.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),fe.setValue(N,"boneTexture",me.boneTexture,X))}F.isBatchedMesh&&(fe.setOptional(N,F,"batchingTexture"),fe.setValue(N,"batchingTexture",F._matricesTexture,X),fe.setOptional(N,F,"batchingIdTexture"),fe.setValue(N,"batchingIdTexture",F._indirectTexture,X),fe.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&fe.setValue(N,"batchingColorTexture",F._colorsTexture,X));let Ss=H.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0)&&U.update(F,H,Kn),(ys||_t.receiveShadow!==F.receiveShadow)&&(_t.receiveShadow=F.receiveShadow,fe.setValue(N,"receiveShadow",F.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(Le.envMapIntensity.value=L.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=A2()),ys){if(fe.setValue(N,"toneMappingExposure",R.toneMappingExposure),_t.needsLights&&WM(Le,ja),pt&&B.fog===!0&&bt.refreshFogUniforms(Le,pt),bt.refreshMaterialUniforms(Le,B,et,it,A.state.transmissionRenderTarget[M.id]),_t.needsLights&&_t.lightProbeGrid){let me=_t.lightProbeGrid;Le.probesSH.value=me.texture,Le.probesMin.value.copy(me.boundingBox.min),Le.probesMax.value.copy(me.boundingBox.max),Le.probesResolution.value.copy(me.resolution)}vo.upload(N,r0(_t),Le,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(vo.upload(N,r0(_t),Le,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&fe.setValue(N,"center",F.center),fe.setValue(N,"modelViewMatrix",F.modelViewMatrix),fe.setValue(N,"normalMatrix",F.normalMatrix),fe.setValue(N,"modelMatrix",F.matrixWorld),B.uniformsGroups!==void 0){let me=B.uniformsGroups;for(let Ms=0,$a=me.length;Ms<$a;Ms++){let l0=me[Ms];$.update(l0,Kn),$.bind(l0,Kn)}}return Kn}function WM(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function qM(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,L,H){let B=V.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=L,V.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let H=V.get(M);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,H=0){j=M,k=L,G=H;let B=null,F=!1,pt=!1;if(M){let dt=V.get(M);if(dt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(N.FRAMEBUFFER,dt.__webglFramebuffer),ut.copy(M.viewport),gt.copy(M.scissor),Qt=M.scissorTest,g.viewport(ut),g.scissor(gt),g.setScissorTest(Qt),tt=-1;return}else if(dt.__webglFramebuffer===void 0)X.setupRenderTarget(M);else if(dt.__hasExternalTextures)X.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ft=M.depthTexture;if(dt.__boundDepthTexture!==Ft){if(Ft!==null&&V.has(Ft)&&(M.width!==Ft.image.width||M.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(M)}}let St=M.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(pt=!0);let Tt=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Tt[L])?B=Tt[L][H]:B=Tt[L],F=!0):M.samples>0&&X.useMultisampledRTT(M)===!1?B=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Tt)?B=Tt[H]:B=Tt,ut.copy(M.viewport),gt.copy(M.scissor),Qt=M.scissorTest}else ut.copy(xt).multiplyScalar(et).floor(),gt.copy(Xt).multiplyScalar(et).floor(),Qt=Ot;if(H!==0&&(B=W),g.bindFramebuffer(N.FRAMEBUFFER,B)&&g.drawBuffers(M,B),g.viewport(ut),g.scissor(gt),g.setScissorTest(Qt),F){let dt=V.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,H)}else if(pt){let dt=L;for(let St=0;St<M.textures.length;St++){let Tt=V.get(M.textures[St]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+St,Tt.__webglTexture,H,dt)}}else if(M!==null&&H!==0){let dt=V.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dt.__webglTexture,H)}tt=-1},this.readRenderTargetPixels=function(M,L,H,B,F,pt,vt,dt=0){if(!(M&&M.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){g.bindFramebuffer(N.FRAMEBUFFER,St);try{let Tt=M.textures[dt],Ft=Tt.format,kt=Tt.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt),!C.textureFormatReadable(Ft)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(kt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-B&&H>=0&&H<=M.height-F&&N.readPixels(L,H,B,F,ct.convert(Ft),ct.convert(kt),pt)}finally{let Tt=j!==null?V.get(j).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,L,H,B,F,pt,vt,dt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St)if(L>=0&&L<=M.width-B&&H>=0&&H<=M.height-F){g.bindFramebuffer(N.FRAMEBUFFER,St);let Tt=M.textures[dt],Ft=Tt.format,kt=Tt.type;if(M.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+dt),!C.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Et),N.bufferData(N.PIXEL_PACK_BUFFER,pt.byteLength,N.STREAM_READ),N.readPixels(L,H,B,F,ct.convert(Ft),ct.convert(kt),0);let le=j!==null?V.get(j).__webglFramebuffer:null;g.bindFramebuffer(N.FRAMEBUFFER,le);let Ne=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await $S(N,Ne,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pt),N.deleteBuffer(Et),N.deleteSync(Ne),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,H=0){let B=Math.pow(2,-H),F=Math.floor(M.image.width*B),pt=Math.floor(M.image.height*B),vt=L!==null?L.x:0,dt=L!==null?L.y:0;X.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,vt,dt,F,pt),g.unbindTexture()},this.copyTextureToTexture=function(M,L,H=null,B=null,F=0,pt=0){let vt,dt,St,Tt,Ft,kt,Et,le,Ne,Re=M.isCompressedTexture?M.mipmaps[pt]:M.image;if(H!==null)vt=H.max.x-H.min.x,dt=H.max.y-H.min.y,St=H.isBox3?H.max.z-H.min.z:1,Tt=H.min.x,Ft=H.min.y,kt=H.isBox3?H.min.z:0;else{let Le=Math.pow(2,-F);vt=Math.floor(Re.width*Le),dt=Math.floor(Re.height*Le),M.isDataArrayTexture?St=Re.depth:M.isData3DTexture?St=Math.floor(Re.depth*Le):St=1,Tt=0,Ft=0,kt=0}B!==null?(Et=B.x,le=B.y,Ne=B.z):(Et=0,le=0,Ne=0);let he=ct.convert(L.format),un=ct.convert(L.type),_t;L.isData3DTexture?(X.setTexture3D(L,0),_t=N.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(X.setTexture2DArray(L,0),_t=N.TEXTURE_2D_ARRAY):(X.setTexture2D(L,0),_t=N.TEXTURE_2D),g.activeTexture(N.TEXTURE0),g.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,L.flipY),g.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),g.pixelStorei(N.UNPACK_ALIGNMENT,L.unpackAlignment);let Ln=g.getParameter(N.UNPACK_ROW_LENGTH),ee=g.getParameter(N.UNPACK_IMAGE_HEIGHT),Kn=g.getParameter(N.UNPACK_SKIP_PIXELS),Ai=g.getParameter(N.UNPACK_SKIP_ROWS),ys=g.getParameter(N.UNPACK_SKIP_IMAGES);g.pixelStorei(N.UNPACK_ROW_LENGTH,Re.width),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Re.height),g.pixelStorei(N.UNPACK_SKIP_PIXELS,Tt),g.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),g.pixelStorei(N.UNPACK_SKIP_IMAGES,kt);let ja=M.isDataArrayTexture||M.isData3DTexture,fe=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let Le=V.get(M),Ss=V.get(L),me=V.get(Le.__renderTarget),Ms=V.get(Ss.__renderTarget);g.bindFramebuffer(N.READ_FRAMEBUFFER,me.__webglFramebuffer),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ms.__webglFramebuffer);for(let $a=0;$a<St;$a++)ja&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(M).__webglTexture,F,kt+$a),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(L).__webglTexture,pt,Ne+$a)),N.blitFramebuffer(Tt,Ft,vt,dt,Et,le,vt,dt,N.DEPTH_BUFFER_BIT,N.NEAREST);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||V.has(M)){let Le=V.get(M),Ss=V.get(L);g.bindFramebuffer(N.READ_FRAMEBUFFER,Y),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let me=0;me<St;me++)ja?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Le.__webglTexture,F,kt+me):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Le.__webglTexture,F),fe?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ss.__webglTexture,pt,Ne+me):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ss.__webglTexture,pt),F!==0?N.blitFramebuffer(Tt,Ft,vt,dt,Et,le,vt,dt,N.COLOR_BUFFER_BIT,N.NEAREST):fe?N.copyTexSubImage3D(_t,pt,Et,le,Ne+me,Tt,Ft,vt,dt):N.copyTexSubImage2D(_t,pt,Et,le,Tt,Ft,vt,dt);g.bindFramebuffer(N.READ_FRAMEBUFFER,null),g.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else fe?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(_t,pt,Et,le,Ne,vt,dt,St,he,un,Re.data):L.isCompressedArrayTexture?N.compressedTexSubImage3D(_t,pt,Et,le,Ne,vt,dt,St,he,Re.data):N.texSubImage3D(_t,pt,Et,le,Ne,vt,dt,St,he,un,Re):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pt,Et,le,vt,dt,he,un,Re.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pt,Et,le,Re.width,Re.height,he,Re.data):N.texSubImage2D(N.TEXTURE_2D,pt,Et,le,vt,dt,he,un,Re);g.pixelStorei(N.UNPACK_ROW_LENGTH,Ln),g.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ee),g.pixelStorei(N.UNPACK_SKIP_PIXELS,Kn),g.pixelStorei(N.UNPACK_SKIP_ROWS,Ai),g.pixelStorei(N.UNPACK_SKIP_IMAGES,ys),pt===0&&L.generateMipmaps&&N.generateMipmap(_t),g.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&X.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?X.setTextureCube(M,0):M.isData3DTexture?X.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?X.setTexture2DArray(M,0):X.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){k=0,G=0,j=null,g.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}};var yo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var bi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},C2=new vs(-1,1,1,-1,0,1),jg=class extends ui{constructor(){super(),this.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Sn([0,2,0,0,2,0],2))}},R2=new jg,So=class{constructor(t){this._mesh=new pn(R2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,C2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Mo=class extends bi{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ka.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new So(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var cc=class extends bi{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){let s=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}},zf=class extends bi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Vf=class{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){let i=t.getSize(new Ct);this._width=i.width,this._height=i.height,n=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mo(yo),this.copyPass.material.blending=hi,this.timer=new Jl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let n=this.renderer.getRenderTarget(),i=!1;for(let s=0,a=this.passes.length;s<a;s++){let r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}cc!==void 0&&(r instanceof cc?i=!0:r instanceof zf&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){let n=this.renderer.getSize(new Ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Hf=class extends bi{constructor(t,n,i=null,s=null,a=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Vt}render(t,n,i){let s=t.autoClear;t.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(a=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}};var NM={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var bo=class e extends bi{constructor(t,n=1,i,s){super(),this.strength=n,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Ct(t.x,t.y):new Ct(256,256),this.clearColor=new Vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(a,r,{type:mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new Ye(a,r,{type:mn});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let u=new Ye(a,r,{type:mn});u.texture.name="UnrealBloomPass.v"+f,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),a=Math.round(a/2),r=Math.round(r/2)}let o=NM;this.highPassUniforms=Ka.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ct(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ka.clone(yo.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader,premultipliedAlpha:!0,blending:Ql,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Vt,this._oldClearAlpha=1,this._basic=new qa,this._fsQuad=new So(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new Ct(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,n,i,s,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=r}_getSeparableBlurMaterial(t){let n=[],i=t/3;for(let s=0;s<t;s++)n.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ct(.5,.5)},direction:{value:new Ct(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};bo.BlurDirectionX=new Ct(1,0);bo.BlurDirectionY=new Ct(0,1);var BM=Eo($g()),N2=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`,L2=`
  uniform float iTime;
  uniform vec3 iResolution;
  uniform vec2 iMouse;
  uniform vec2 iPrevMouse[MAX_TRAIL_LENGTH];
  uniform float iOpacity;
  uniform float iScale;
  uniform vec3 iBaseColor;
  uniform float iBrightness;
  uniform float iEdgeIntensity;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    mat2 m = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = m * p * 2.0;
      a *= 0.5;
    }
    return v;
  }
  vec4 blob(vec2 p, vec2 mousePos, float intensity, float activity) {
    vec2 q = vec2(fbm(p * iScale + iTime * 0.1), fbm(p * iScale + vec2(5.2, 1.3) + iTime * 0.1));
    vec2 r = vec2(fbm(p * iScale + q * 1.5 + iTime * 0.15), fbm(p * iScale + q * 1.5 + vec2(8.3, 2.8) + iTime * 0.15));
    float smoke = fbm(p * iScale + r * 0.8);
    float radius = 0.5 + 0.3 / iScale;
    float mask = 1.0 - smoothstep(0.0, radius * max(activity, 0.01), length(p - mousePos));
    float alpha = pow(smoke, 2.5) * mask * intensity;
    vec3 pale = mix(iBaseColor, vec3(1.0), 0.18);
    vec3 cool = mix(iBaseColor, vec3(0.8, 0.9, 1.0), 0.28);
    vec3 color = mix(pale, cool, sin(iTime * 0.5) * 0.5 + 0.5);
    return vec4(color * alpha, alpha);
  }
  void main() {
    vec2 aspect = vec2(iResolution.x / iResolution.y, 1.0);
    vec2 uv = (gl_FragCoord.xy / iResolution.xy * 2.0 - 1.0) * aspect;
    vec2 mouse = (iMouse * 2.0 - 1.0) * aspect;
    vec3 colorAcc = vec3(0.0);
    float alphaAcc = 0.0;
    vec4 head = blob(uv, mouse, 1.0, iOpacity);
    colorAcc += head.rgb;
    alphaAcc += head.a;
    for (int i = 0; i < MAX_TRAIL_LENGTH; i++) {
      vec2 previous = (iPrevMouse[i] * 2.0 - 1.0) * aspect;
      float strength = pow(1.0 - float(i) / float(MAX_TRAIL_LENGTH), 2.0);
      if (strength > 0.01) {
        vec4 trail = blob(uv, previous, strength * 0.8, iOpacity);
        colorAcc += trail.rgb;
        alphaAcc += trail.a;
      }
    }
    vec2 uv01 = gl_FragCoord.xy / iResolution.xy;
    float edge = min(min(uv01.x, 1.0 - uv01.x), min(uv01.y, 1.0 - uv01.y));
    float edgeMask = mix(1.0 - clamp(iEdgeIntensity, 0.0, 1.0), 1.0, clamp(edge * 2.0, 0.0, 1.0));
    gl_FragColor = vec4(colorAcc * iBrightness, clamp(alphaAcc * iOpacity * edgeMask, 0.0, 1.0));
  }
`;function PM({className:e="",style:t,trailLength:n=20,inertia:i=.4,grainIntensity:s=.04,bloomStrength:a=.45,bloomRadius:r=.7,bloomThreshold:o=0,brightness:l=1.15,color:c="#B19EEF",mixBlendMode:f="screen",edgeIntensity:p=0,maxDevicePixelRatio:u=1,targetPixels:d=9e5,fadeDelayMs:_=200,fadeDurationMs:b=1e3,zIndex:m=1}){let h=(0,To.useRef)(null),v=(0,To.useMemo)(()=>({zIndex:m,...t}),[t,m]);return(0,To.useEffect)(()=>{let S=h.current,x=S?.closest("section");if(!S||!x)return;let T=new Pf({alpha:!0,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1});T.setClearColor(0,0),Object.assign(T.domElement.style,{display:"block",width:"100%",height:"100%",pointerEvents:"none",mixBlendMode:f}),S.appendChild(T.domElement);let A=new Hl,w=new vs(-1,1,1,-1,0,1),y=new Ya(2,2),E=Math.max(1,Math.min(50,Math.floor(n))),R=Array.from({length:E},()=>new Ct(.5,.5)),D=new Vt(c),O=new Ae({defines:{MAX_TRAIL_LENGTH:E},uniforms:{iTime:{value:0},iResolution:{value:new P(1,1,1)},iMouse:{value:new Ct(.5,.5)},iPrevMouse:{value:R.map(xt=>xt.clone())},iOpacity:{value:1},iScale:{value:1},iBaseColor:{value:new P(D.r,D.g,D.b)},iBrightness:{value:l},iEdgeIntensity:{value:p}},vertexShader:N2,fragmentShader:L2,transparent:!0,depthTest:!1,depthWrite:!1});A.add(new pn(y,O));let W=new Vf(T);W.addPass(new Hf(A,w));let Y=new bo(new Ct(1,1),a,r,o);W.addPass(Y);let z=new Mo({uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:s}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform sampler2D tDiffuse; uniform float time; uniform float intensity; varying vec2 vUv; float h(float n){return fract(sin(n)*43758.5453);} void main(){vec4 c=texture2D(tDiffuse,vUv); float n=h(vUv.x*1000.0+vUv.y*2000.0+time)*2.0-1.0; c.rgb+=n*intensity*c.rgb; gl_FragColor=c;}"});W.addPass(z);let k=new Ct(.5,.5),G=new Ct,j=0,tt=1,st=!1,ut=performance.now(),gt=null,Qt=!1,_e=performance.now(),$t=()=>{let xt=S.getBoundingClientRect(),Xt=Math.max(1,Math.floor(xt.width)),Ot=Math.max(1,Math.floor(xt.height)),Gt=Math.min(window.devicePixelRatio||1,u),Yt=Gt*Math.min(1,Math.sqrt(d/Math.max(1,Xt*Ot*Gt*Gt)));T.setPixelRatio(Yt),T.setSize(Xt,Ot,!1),W.setPixelRatio(Yt),W.setSize(Xt,Ot),O.uniforms.iResolution.value.set(Xt*Yt,Ot*Yt,1),O.uniforms.iScale.value=Math.max(.55,Math.min(2,Math.min(Xt,Ot)/600))},Z=xt=>{let Xt=O.uniforms.iMouse.value;if(st)G.set(k.x-Xt.x,k.y-Xt.y),Xt.copy(k),tt=1;else{G.multiplyScalar(i),Xt.add(G);let Gt=xt-ut;Gt>_&&(tt=Math.max(0,1-(Gt-_)/b))}j=(j+1)%E,R[j].copy(Xt);let Ot=O.uniforms.iPrevMouse.value;for(let Gt=0;Gt<E;Gt+=1)Ot[Gt].copy(R[(j-Gt+E)%E]);if(O.uniforms.iOpacity.value=tt,O.uniforms.iTime.value=(xt-_e)/1e3,z.uniforms.time.value=(xt-_e)/1e3,W.render(),!st&&tt<=.001){Qt=!1,gt=null;return}gt=requestAnimationFrame(Z)},it=()=>{Qt||(Qt=!0,gt=requestAnimationFrame(Z))},et=xt=>{let Xt=x.getBoundingClientRect();k=new Ct(Uf.clamp((xt.clientX-Xt.left)/Math.max(1,Xt.width),0,1),Uf.clamp(1-(xt.clientY-Xt.top)/Math.max(1,Xt.height),0,1)),st=!0,ut=performance.now(),it()},Dt=()=>{st=!1,ut=performance.now(),it()};$t();let Lt=new ResizeObserver($t);return Lt.observe(S),x.addEventListener("pointermove",et,{passive:!0}),x.addEventListener("pointerleave",Dt,{passive:!0}),it(),()=>{gt!==null&&cancelAnimationFrame(gt),Lt.disconnect(),x.removeEventListener("pointermove",et),x.removeEventListener("pointerleave",Dt),W.dispose(),y.dispose(),O.dispose(),T.dispose(),T.domElement.remove()}},[l,r,a,o,c,p,_,b,s,i,u,f,d,n]),(0,BM.jsx)("div",{ref:h,"aria-hidden":"true",className:`pointer-events-none absolute inset-0 overflow-hidden ${e}`,style:v})}var I2=window.matchMedia("(prefers-reduced-motion: reduce)").matches,O2=window.matchMedia("(pointer: coarse)").matches;if(!I2&&!O2&&"WebGLRenderingContext"in window){let e=Array.from(document.querySelectorAll("[data-ghost-cursor]")),t=new IntersectionObserver(n=>{for(let i of n){if(!i.isIntersecting)continue;let s=i.target;if(!s.ghostRoot){let a=s.dataset.ghostColor??"#B19EEF";s.ghostRoot=(0,zM.createRoot)(s),s.ghostRoot.render((0,FM.createElement)(PM,{color:a,brightness:.62,trailLength:18,inertia:.42,bloomStrength:.08,bloomRadius:.22,grainIntensity:.015,fadeDelayMs:180,fadeDurationMs:900,zIndex:1}))}t.unobserve(s)}},{rootMargin:"180px 0px"});e.forEach(n=>t.observe(n))}})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
