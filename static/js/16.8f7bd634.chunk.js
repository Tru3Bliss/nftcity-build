(this["webpackJsonpnft-city"]=this["webpackJsonpnft-city"]||[]).push([[16],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"checkGnosisSafeContext",(function(){return p}));var r=n(3),o=n.n(r);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){u(a,r,o,c,i,"next",e)}function i(e){u(a,r,o,c,i,"throw",e)}c(void 0)}))}}var f=function(e){return Promise.race([e.getSafeInfo(),new Promise((function(e){return setTimeout(e,200)}))])},p=function(){var e=s(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t1=f,e.next=3,n.e(14).then(n.t.bind(null,1280,7));case 3:return e.t2=e.sent.default,e.t3=new e.t2,e.next=7,(0,e.t1)(e.t3);case 7:if(e.t0=!!e.sent,!e.t0){e.next=10;break}e.t0=t();case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=function(e){var t=e.preferred,r=e.label,a=e.iconSrc,i=e.svg,u=e.networkId,p="https://".concat(4===u?"rinkeby.":"","gnosis-safe.io/app"),l=e.appName?"Then go to APPS and select <b>".concat(e.appName,"</b>."):e.appUrl?"Then go to APPS and add a custom app with the URL:<br /><b>".concat(e.appUrl,"</b>"):"";return{name:r||"Gnosis Safe",iconSrc:a,svg:i||'\n<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 440 440">\n    <path d="M220,9.82C103.92,9.82,9.82,103.92,9.82,220S103.92,430.18,220,430.18,430.18,336.08,430.18,220,336.08,9.82,220,9.82ZM373.83,231.47H276.3a59.41,59.41,0,1,1,.45-20.67h97.08a10.34,10.34,0,1,1,0,20.67Z"/>\n</svg>\n',wallet:function(){var e=s(o.a.mark((function e(t){var r,a,i,u,s,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.createModernProviderInterface,e.next=3,n.e(14).then(n.t.bind(null,1280,7));case 3:return e.t0=e.sent.default,a=new e.t0,e.next=7,n.e(40).then(n.t.bind(null,2003,7));case 7:return i=e.sent,u=i.SafeAppProvider,e.next=11,f(a);case 11:if(s=e.sent){e.next=14;break}return e.abrupt("return",{provider:void 0,interface:null});case 14:return p=new u(s,a),e.abrupt("return",{provider:p,interface:c(c({},r(p)),{},{connect:function(){return Promise.resolve([s.safeAddress])}})});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),type:"sdk",link:p,installMessage:function(){return'\n        <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n            Click the button below to open the Gnosis Safe interface.<br />\n            '.concat(l,"\n        </p>\n        ")},desktop:!0,mobile:!1,preferred:t}}}}]);
//# sourceMappingURL=16.8f7bd634.chunk.js.map