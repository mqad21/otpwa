(function(t){function n(n){for(var o,c,i=n[0],s=n[1],u=n[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,i=1;i<e.length;i++){var s=e[i];0!==r[s]&&(o=!1)}o&&(a.splice(n--,1),t=c(c.s=e[0]))}return t}var o={},r={app:0},a=[];function c(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=o,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)c.d(e,o,function(n){return t[n]}.bind(null,o));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var l=s;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),r=e("5f5b"),a=e("b1e0"),c=e("85df"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Index")],1)},s=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Header"),e("b-container",{staticClass:"pt-4"},[e("b-row",[e("b-col",{attrs:{cols:"4"}},[e("Connection",{attrs:{connection:t.connection}})],1),e("b-col",{attrs:{cols:"8"}},[e("Table",{attrs:{items:t.otp}})],1)],1)],1)],1)},l=[],d=e("2909"),f=e("5530"),p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-navbar",{attrs:{toggleable:"sm",type:"light",variant:"light"}},[e("b-container",[e("b-navbar-toggle",{attrs:{target:"nav-text-collapse"}}),e("b-navbar-brand",[t._v("Admin OTPWA")])],1)],1)},h=[],b=e("2877"),g={},v=Object(b["a"])(g,p,h,!1,null,null,null),_=v.exports,m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"},scopedSlots:t._u([{key:"header",fn:function(){return[e("h6",{staticClass:"mb-0"},[t._v("Koneksi WA")])]},proxy:!0}])},[t.connection.status?e("b-card-text",[e("p",[t._v(" Status: "),e("span",{class:t.connected?"text-success":"text-danger"},[t._v(" "+t._s(t.status)+" ")])]),t.connection.reason&&!t.connected?e("p",[t._v(" Keterangan: "+t._s(t.connection.reason)+" ")]):t._e(),t.qrString&&!t.connected?e("Qr",{attrs:{"qr-string":t.qrString}}):t._e()],1):t._e(),t.qrString||t.connected||!t.connection.status?t._e():e("b-button",{attrs:{disabled:t.loading||t.connection.isReconnecting,href:"#",variant:"primary"},on:{click:t.load}},[t._v(" "+t._s(t.loading||t.connection.isReconnecting?"Sedang menghubungkan...":"Hubungkan")+" ")])],1)},y=[],O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("vue-qrcode",{attrs:{value:t.qrString}})},x=[],S=e("9a13"),j={components:{VueQrcode:S["a"]},props:["qrString"]},k=j,C=Object(b["a"])(k,O,x,!1,null,null,null),E=C.exports,T={CONNECTED:"connected",DISCONNECTED:"disconnected"},w={props:["connection"],components:{Qr:E},data:function(){return{loading:!1}},methods:{load:function(){var t=this;this.$axios.post("connect").then((function(){t.loading=!0}))}},computed:{connected:function(){return this.connection.status==T.CONNECTED},status:function(){return this.connected?"Terhubung":"Terputus"},qrString:function(){return this.connection.qrString}},watch:{connection:function(t){this.loading=t.loading}}},$=w,q=Object(b["a"])($,m,y,!1,null,null,null),N=q.exports,P=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("b-table",{staticClass:"table",attrs:{"sticky-header":"80vh",striped:"",hover:"",items:t.items,"show-empty":""},scopedSlots:t._u([{key:"empty",fn:function(){return[e("p",{staticClass:"text-italic text-center"},[t._v("Tidak ada data.")])]},proxy:!0},{key:"cell(created_at)",fn:function(n){return[e("p",[t._v(t._s(t._f("luxon")(n.item.created_at)))])]}},{key:"cell(verified_at)",fn:function(n){return[e("p",[t._v(t._s(t._f("luxon")(n.item.verified_at)))])]}}])})],1)},D=[],M={props:["items"]},A=M,H=Object(b["a"])(A,P,D,!1,null,null,null),I=H.exports,W={components:{Header:_,Connection:N,Table:I},data:function(){return{connection:{status:null,qrString:""},otp:[]}},methods:{getConnection:function(){var t=this;this.$axios("status").then((function(t){return t.data.data})).then((function(n){t.connection=Object(f["a"])(Object(f["a"])({},n),{},{loading:!1})}))},getOtps:function(){var t=this;this.$axios("all").then((function(t){return t.data.data})).then((function(n){t.otp=Object(d["a"])(n)}))}},beforeMount:function(){this.getConnection(),this.getOtps()},mounted:function(){var t=this;this.$socket.on("NEW_STATUS",(function(n){t.connection=Object(f["a"])(Object(f["a"])({},n),{},{loading:!1})})),this.$socket.on("NEW_OTP",(function(){t.getOtps()}))},watch:{connection:{handler:function(t){console.log(t),t.status!=T.DISCONNECTED&&(this.connection.loading=!1,this.connection.qrString="")},immediate:!0}}},J=W,Q=Object(b["a"])(J,u,l,!1,null,null,null),R=Q.exports,K={name:"App",components:{Index:R}},U=K,z=Object(b["a"])(U,i,s,!1,null,null,null),L=z.exports,V=e("bc3a"),B=e.n(V),F=B.a.create({baseURL:"http://localhost:3000"}),G=e("8e27"),X=e.n(G),Y="http://localhost:3000",Z=X()(Y);e("f9e3"),e("2dd8");o["default"].config.productionTip=!1,o["default"].use(r["a"]),o["default"].use(c["a"],{output:{zone:"Asia/Jakarta",format:"dd-MM-yy HH:mm:ss",locale:"id-ID"}}),o["default"].use(a["a"]),o["default"].prototype.$axios=F,o["default"].prototype.$socket=Z,new o["default"]({render:function(t){return t(L)}}).$mount("#app")}});
//# sourceMappingURL=app.188272b5.js.map