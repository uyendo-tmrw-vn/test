(this.webpackJsonpHeroArena=this.webpackJsonpHeroArena||[]).push([[6],{153:function(e,t,r){"use strict";var c=r(38),n=r(49),a=r(13),i=r(53),s=r.n(i),u=r(0);t.a=function(){var e=Object(u.useState)(0),t=Object(a.a)(e,2),r=t[0],i=t[1];return Object(u.useEffect)((function(){var e=setInterval(Object(n.a)(Object(c.a)().mark((function e(){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:case"end":return e.stop()}}),e)}))),1e4),t=function(){var e=Object(n.a)(Object(c.a)().mark((function e(){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://api.coingecko.com/api/v3/coins/hero-arena").then((function(e){return i(e.data.market_data.current_price.usd),e.data.market_data.current_price.usd}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t(),function(){return clearInterval(e)}}),[]),{heraPrice:r}}},196:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return s}));var c=r(10),n=r(153),a=(r(0),r(11)),i=r(1);function s(e){var t,r,s;Object(c.a)(e);var u=Object(n.a)(),l=Object(a.c)((function(e){return e.cmsSlice.cmsData}));return Object(i.jsxs)("div",{className:"hera-price-mobile d-flex flex-column justify-content-between align-items-center py-3",children:[Object(i.jsxs)("div",{className:"hera-price mb-1",children:["HERA Price - $",u.heraPrice]}),Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("div",{className:"row d-flex justify-content-center",children:null===l||void 0===l||null===(t=l.data)||void 0===t||null===(r=t.attributes)||void 0===r||null===(s=r.exchangeInformation)||void 0===s?void 0:s.map((function(e,t){return Object(i.jsx)("div",{className:"col-6",children:Object(i.jsxs)("div",{className:"d-flex align-items-center provider-block",children:[Object(i.jsxs)("div",{className:"provider d-flex flex-column justify-content-center align-items-center",children:[Object(i.jsx)("img",{src:"https://cms.heroarena.app".concat(e.logo.data.attributes.url),className:"icon",alt:""}),Object(i.jsx)("div",{children:e.name})]}),Object(i.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(i.jsx)("div",{className:"ml-2 buy-hera",children:"Buy HERA"})})]})})}))})})]})}}}]);
//# sourceMappingURL=6.d08a364a.chunk.js.map