(this.webpackJsonptestcodesplit=this.webpackJsonptestcodesplit||[]).push([[0],{25:function(e,n,t){},26:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),o=t(9),a=t.n(o),i=(t(25),t(26),t(8)),u=t(1),s=t(10),d=t.n(s),l=t(2),j=function(){return Object(l.jsx)("div",{children:"...loading"})},b=d()({loader:function(){return t.e(5).then(t.bind(null,36))},loading:j}),f=d()({loader:function(){return t.e(4).then(t.bind(null,37))},loading:j}),h=d()({loader:function(){return t.e(3).then(t.bind(null,38))},loading:j});var m=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)(i.b,{to:"/",children:"Home"}),Object(l.jsx)("br",{}),Object(l.jsx)(i.b,{to:"/foo",children:"Foo"}),Object(l.jsx)("br",{}),Object(l.jsx)(i.b,{to:"/bar",children:"Bar"}),Object(l.jsx)("br",{}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",component:b}),Object(l.jsx)(u.a,{exact:!0,path:"/foo",component:f}),Object(l.jsx)(u.a,{exact:!0,path:"/bar",component:h})]})]})})},x=t(7),p=t(15),O=t.n(p),v=t(18);function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(n){return setTimeout((function(){return n({data:e})}),500)}))}var w=Object(x.b)("counter/fetchCount",function(){var e=Object(v.a)(O.a.mark((function e(n){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(n);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),y=Object(x.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,n){e.value+=n.payload}},extraReducers:function(e){e.addCase(w.pending,(function(e){e.status="loading"})).addCase(w.fulfilled,(function(e,n){e.status="idle",e.value+=n.payload}))}}),k=y.actions,B=(k.increment,k.decrement,k.incrementByAmount,y.reducer),C=Object(x.a)({reducer:{counter:B}}),A=t(20);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(A.a,{store:C,children:Object(l.jsx)(m,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.be1e6271.chunk.js.map