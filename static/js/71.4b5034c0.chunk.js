(this["webpackJsonpnft-city"]=this["webpackJsonpnft-city"]||[]).push([[71],{268:function(n,e,t){"use strict";t.r(e);var r=t(3),o=t.n(r),a=t(904);function i(n,e,t,r,o,a,i){try{var c=n[a](i),u=c.value}catch(s){return void t(s)}c.done?e(u):Promise.resolve(u).then(r,o)}e.default=function(n){var e=n.rpcUrl,r=n.appName,c=n.appLogoUrl,u=n.networkId,s=n.preferred,l=n.label,f=n.iconSrc;return{name:l||"Coinbase Wallet",svg:n.svg||a.a,iconSrc:f,wallet:function(){var n,a=(n=o.a.mark((function n(a){var i,s,l,f,p,d,v;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=a.getBalance,s=a.getAddress,l=a.getNetwork,n.next=3,Promise.all([t.e(0),t.e(1),t.e(3),t.e(7),t.e(28)]).then(t.t.bind(null,1737,7));case 3:return f=n.sent,p=f.default,d=new p({appName:r,appLogoUrl:c}),v=d.makeWeb3Provider(e,u),n.abrupt("return",{provider:v,interface:{name:"Coinbase Wallet",connect:function(){return new Promise((function(n,e){v.enable().then((function(e){return n(e)})).catch((function(){return e({message:"This dapp needs access to your account information."})}))}))},disconnect:function(){v.disconnect()},address:{get:function(){return s(v)}},network:{get:function(){return l(v)}},balance:{get:function(){return i(v)}}}});case 8:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function c(n){i(a,r,o,c,u,"next",n)}function u(n){i(a,r,o,c,u,"throw",n)}c(void 0)}))});return function(n){return a.apply(this,arguments)}}(),type:"sdk",desktop:!0,preferred:s}}},904:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r='\n\t<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#1652F0"/>\n\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M5.45508 20.0006C5.45508 28.0338 11.9673 34.546 20.0006 34.546C28.0338 34.546 34.546 28.0338 34.546 20.0006C34.546 11.9673 28.0338 5.45508 20.0006 5.45508C11.9673 5.45508 5.45508 11.9673 5.45508 20.0006ZM17.3137 15.3145C16.2091 15.3145 15.3137 16.2099 15.3137 17.3145V22.6882C15.3137 23.7928 16.2091 24.6882 17.3137 24.6882H22.6874C23.792 24.6882 24.6874 23.7928 24.6874 22.6882V17.3145C24.6874 16.2099 23.792 15.3145 22.6874 15.3145H17.3137Z" fill="white"/>\n\t</svg>\n'}}]);
//# sourceMappingURL=71.4b5034c0.chunk.js.map