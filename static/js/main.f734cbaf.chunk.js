(this.webpackJsonpconventer=this.webpackJsonpconventer||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),u=n(5),a=n.n(u),s=(n(10),n(2)),o=(n(4),n(0)),i=function(e){var t=e.currencyOption,n=e.setCurrentValue,c=e.setTotalAmount,r=e.totalAmount;return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"number",className:"input",value:r,onChange:function(e){return function(e){var t=e.target.value;c(t<1?1:t)}(e)}}),Object(o.jsx)("select",{className:"input",onChange:function(e){return function(e){var r=e.target.value,u=t.find((function(e){return e.ccy===r}));n(u),c(1)}(e)},children:t.map((function(e){return Object(o.jsx)("option",{value:e.ccy,children:e.ccy},e.ccy)}))})]})},j=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],u=Object(c.useState)([]),a=Object(s.a)(u,2),j=a[0],l=a[1],b=Object(c.useState)(1),p=Object(s.a)(b,2),d=p[0],O=p[1];return Object(c.useEffect)((function(){fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((function(e){return e.json()})).then((function(e){r(e),l(e[0])}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{className:"title",children:"Convert"}),Object(o.jsx)(i,{currencyOption:n,setCurrentValue:l,setTotalAmount:O,totalAmount:d}),Object(o.jsx)("div",{children:"="}),Object(o.jsx)("input",{className:"converted converted_none",type:"text",value:(d*j.buy).toFixed(2)}),Object(o.jsx)("select",{className:"converted",children:Object(o.jsx)("option",{children:j.base_ccy})})]})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},4:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.f734cbaf.chunk.js.map