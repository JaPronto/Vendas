(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],l=0,f=[];l<o.length;l++)i=o[l],s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==s[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},s={app:0},a=[];function i(e){return o.p+"js/"+({profile:"profile"}[e]||e)+"."+{profile:"24a4c2a3"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=s[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=s[e]=[t,n]});t.push(r[2]=n);var a,c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e),a=function(t){u.onerror=u.onload=null,clearTimeout(l);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,r[1](i)}s[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,c.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=a(e);return r(t)}function a(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}s.keys=function(){return Object.keys(n)},s.resolve=a,e.exports=s,s.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"SET_SIDEBAR_OPEN",function(){return Pe});var s={};r.r(s),r.d(s,"setSidebarOpen",function(){return Te}),r.d(s,"toggleSidebarOpen",function(){return ze});var a={};r.r(a),r.d(a,"sidebarOpen",function(){return Re});var i={};r.r(i),r.d(i,"SET_USER",function(){return qe}),r.d(i,"SET_CREDENTIALS",function(){return Ue}),r.d(i,"SETUP_AUTH",function(){return De}),r.d(i,"LOGOUT",function(){return Ne});var o={};r.r(o),r.d(o,"setUser",function(){return Ge}),r.d(o,"setCredentials",function(){return We}),r.d(o,"setupAuth",function(){return Xe}),r.d(o,"fetchUser",function(){return Qe}),r.d(o,"logout",function(){return Ke}),r.d(o,"checkRefresh",function(){return Ve}),r.d(o,"login",function(){return Ye});var c={};r.r(c),r.d(c,"user",function(){return Ze}),r.d(c,"credentials",function(){return et});r("cadf"),r("551c"),r("097d");var u=r("2b0e"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},d=[],f={name:"App"},p=f,b=r("2877"),m=Object(b["a"])(p,l,d,!1,null,null,null);m.options.__file="App.vue";var h=m.exports,v=r("8c4f"),g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("span",[e._v("some lorem ipsum text")])])}],_={name:"home",components:{}},k=_,w=Object(b["a"])(k,g,j,!1,null,null,null);w.options.__file="Home.vue";var y=w.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container text-center pt-5"},[r("div",{staticClass:"card d-inline-block mt-5"},[e._m(0),r("div",{staticClass:"card-body mx-2"},[r("form",{on:{submit:e.onSubmit}},[r("error-list",{attrs:{errors:e.$data.errors.get("general")}}),r("div",{staticClass:"form-group text-left"},[r("label",[e._v("Email")]),r("input",{staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Digite seu email"}}),r("error-list",{attrs:{errors:e.$data.errors.get("email")}})],1),r("div",{staticClass:"form-group text-left"},[r("label",[e._v("Senha")]),r("div",{staticClass:"input-group"},[r("input",{staticClass:"form-control",attrs:{type:e.$data.showPassword?"text":"password",name:"password",placeholder:"Digite sua senha"}}),r("div",{staticClass:"input-group-append bg-white"},[r("div",{staticClass:"input-group-text",on:{click:function(t){e.$data.showPassword=!e.$data.showPassword}}},[r("span",{class:["fas",e.$data.showPassword?"fa-eye-slash":"fa-eye"]})])])]),r("error-list",{attrs:{errors:e.$data.errors.get("password")}})],1),e._m(1)],1)]),e._m(2)])])},O=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-title pt-4"},[r("h4",[e._v("Entrar")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-right"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Entrar")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-footer"},[r("a",{attrs:{href:"#"}},[e._v("esqueceu sua senha ?")])])}],C=(r("96cf"),r("3040")),S=r("c93e"),E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-danger m-2"},e._l(e.errors,function(t){return e.errors&&e.errors.length?r("div",{key:t},[e._v(e._s(t))]):e._e()}))},$=[],P={name:"ErrorList",props:{errors:{required:!0}}},T=P,z=Object(b["a"])(T,E,$,!1,null,null,null);z.options.__file="index.vue";var R=z.exports,L=(r("ac6a"),r("456d"),r("c665")),A=r("a322"),q=function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(L["a"])(this,e),Object(A["a"])(this,"has",function(e){return Object.keys(t.errors).indexOf(e)>=0}),Object(A["a"])(this,"get",function(e){return t.has(e)?t.errors[e]:[]}),Object(A["a"])(this,"any",function(){return Object.keys(t.errors).length>0}),this.errors=r},U=q,D=r("2f62"),N={name:"Login",components:{ErrorList:R},data:function(){return{showPassword:!1,errors:new U}},methods:Object(S["a"])({},Object(D["b"])({login:"auth/login"}),{onSubmit:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),r=new FormData(t.target),e.next=4,this.login({email:r.get("email"),password:r.get("password")});case 4:return n=e.sent,n.hasOwnProperty("errors")?this.$data.errors=new U(n.errors):this.$router.push({name:"home"}),e.abrupt("return",!1);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()})},I=N,B=Object(b["a"])(I,x,O,!1,null,null,null);B.options.__file="index.vue";var H=B.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("structure",[Boolean(e.user)?r("router-view"):r("div",{staticClass:"text-center m-5"},[r("span",{staticClass:"fas fa-spin fa-spinner fa-5x"})])],1)},F=[],J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex"},[r("sidebar",{attrs:{links:e.links}}),r("div",{staticClass:"main"},[r("navbar",{attrs:{links:e.navbarRightLinks}}),r("main",{staticClass:"content"},[e._t("default")],2)],1)],1)},G=[],W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{class:{sidebar:!0,toggled:!e.open}},[n("div",{staticClass:"sidebar-content"},[n("router-link",{staticClass:"sidebar-brand",attrs:{to:"/"}},[n("img",{staticClass:" align-middle sidebar-brand-icon",attrs:{src:r("cf05")}}),n("span",{staticClass:"align-middle"},[e._v("JaPronto")])]),n("link-bag",{attrs:{links:e.$props.links}})],1),n("sidebar-footer")],1)},X=[],Q=r("578e"),K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sidebar-bottom d-none d-lg-block"},[r("div",{staticClass:"media"},[r("img",{staticClass:"rounded-circle mr-3",attrs:{src:e.user.image,alt:"Avatar",width:"40",height:"40"}}),r("div",{staticClass:"media-body"},[r("h5",{staticClass:"mb-1 text-white"},[e._v(e._s(e.user.name))])])])])},V=[],Y={computed:{user:function(){return this.$store.getters["auth/user"]}}},Z={name:"Footer",mixins:[Y]},ee=Z,te=Object(b["a"])(ee,K,V,!1,null,null,null);te.options.__file="Footer.vue";var re=te.exports,ne={name:"Navbar",components:{LinkBag:Q["default"],SidebarFooter:re},props:{links:{type:Array,required:!0}},computed:Object(S["a"])({},Object(D["c"])({open:"ui/sidebarOpen"}))},se=ne,ae=Object(b["a"])(se,W,X,!1,null,null,null);ae.options.__file="index.vue";var ie=ae.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand navbar-light bg-white"},[r("a",{staticClass:"sidebar-toggle d-flex mr-2 pointer",on:{click:e.toggleSidebar}},[r("span",{staticClass:"fas fa-bars"})]),e._m(0),r("div",{staticClass:"navbar-collapse collapse"},[r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"userDropdown","data-toggle":"dropdown","aria-expanded":"false"}},[e._m(1),r("span",{staticClass:"d-none d-sm-inline-block"},[r("img",{staticClass:"avatar img-fluid rounded-circle mr-1",attrs:{src:e.user.image,alt:"Chris Wood"}}),r("span",{staticClass:"text-dark"},[e._v(e._s(e.user.name))])])]),r("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"userDropdown"}},[e._l(e.links,function(t,n){return["string"===typeof t?r("div",{key:n,staticClass:"dropdown-divider"}):r("router-link",{key:n,staticClass:"dropdown-item",attrs:{to:t.link}},[r("span",{class:t.icon}),e._v(" "+e._s(t.title))])]}),r("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:e.logout}},[e._v("Sair")])],2)])])])])},ce=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"form-inline done d-none d-sm-inline-block"},[r("input",{staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Buscar clients","aria-label":"Search"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"d-inline-block d-md-none mr-2"},[r("span",{staticClass:"fas fa-cog"})])}],ue={name:"Navbar",mixins:[Y],props:{links:{type:Array,required:!0}},methods:Object(S["a"])({},Object(D["b"])({toggleSidebar:"ui/toggleSidebarOpen",makeLogout:"auth/logout"}),{logout:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.makeLogout();case 2:this.$router.push({name:"login"});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()})},le=ue,de=Object(b["a"])(le,oe,ce,!1,null,null,null);de.options.__file="index.vue";var fe=de.exports,pe=function(){return["Principal",{icon:"fas fa-home",title:"Dashboard",link:"/",badge:function(){return{type:"primary",value:"6"}}},{icon:"fas fa-user",title:"Pages",links:[{title:"Entrar",link:"/entrar"},{title:"Badge Test",link:"/badge",badge:function(){return{type:"warning",value:"new"}}}]}]},be=function(){return[{title:"Perfil",icon:"fas fa-user",link:"/perfil"},""]},me={name:"Structure",components:{Sidebar:ie,Navbar:fe},computed:{links:function(){return pe()},navbarRightLinks:function(){return be()}}},he=me,ve=Object(b["a"])(he,J,G,!1,null,null,null);ve.options.__file="index.vue";var ge=ve.exports,je={name:"Auth",components:{Structure:ge},computed:{user:function(){return this.$store.getters["auth/user"]},sidebar:function(){return this.$store.getters["ui/sidebarOpen"]}},mounted:function(){window.addEventListener("resize",this.onResize)},destroyed:function(){window.removeEventListener("resize",this.onResize)},methods:{setSidebar:function(e){this.$store.dispatch("ui/setSidebarOpen",e)},onResize:function(e){window.matchMedia("(min-width: 992px)").matches?this.sidebar||this.setSidebar(!0):this.sidebar&&this.setSidebar(!1)}}},_e=je,ke=Object(b["a"])(_e,M,F,!1,null,null,null);ke.options.__file="index.vue";var we=ke.exports,ye=[{path:"/login",name:"login",component:H,meta:{guest:!0}},{path:"/",meta:{auth:!0},component:we,children:[{path:"/",name:"home",component:y},{path:"perfil",name:"perfil",component:function(){return r.e("profile").then(r.bind(null,"3853"))}}]}];u["a"].use(v["a"]);var xe=new v["a"]({mode:"history",base:"/",routes:ye});xe.beforeEach(function(e,t,r){e.matched.some(function(e){return e.meta.auth})?null===localStorage.getItem("auth_credentials")&&r({path:"/login",params:{nextUrl:e.fullPath}}):e.matched.some(function(e){return e.meta.guest})&&null!==localStorage.getItem("auth_credentials")&&r({path:"/"}),r()});var Oe=xe,Ce={sidebarOpen:!0},Se=function(e){return function(t,r){var n=t.commit;return n(e,r)}},Ee=function(e){return function(t,r){return t[e]=r}},$e=function(e){return function(t){return t[e]}},Pe=Ee("sidebarOpen"),Te=Se("SET_SIDEBAR_OPEN"),ze=function(e){var t=e.dispatch,r=e.state;t("setSidebarOpen",!r.sidebarOpen)},Re=$e("sidebarOpen"),Le={state:Ce,mutations:n,actions:s,getters:a,namespaced:!0},Ae={user:null,credentials:null},qe=Ee("user"),Ue=Ee("credentials"),De=function(){return null},Ne=function(e){e.user=null,e.credentials=null},Ie=function(){throw new Error("required param")},Be=function(e,t){return axios.post("/login",{email:e,password:t})},He=function(){return axios.get("/api/user")},Me=function(e){return axios.post("/refresh",{refreshToken:e})},Fe=r("c1df"),Je=r.n(Fe),Ge=Se("SET_USER"),We=Se("SET_CREDENTIALS"),Xe=function(e){var t=e.commit;return t("SETUP_AUTH")},Qe=function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t){var r,n,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,e.prev=1,e.next=4,He();case 4:n=e.sent,s=n.data.data,r("setUser",s),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),401===e.t0.response.status&&"/login"!==location.pathname&&(r("logout"),location.reload());case 13:case"end":return e.stop()}},e,this,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),Ke=Se("LOGOUT"),Ve=function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t){var r,n,s,a,i,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.dispatch,n=t.state,n.credentials){e.next=3;break}return e.abrupt("return");case 3:if(s=n.credentials,a=Je()(),i=Je()(s.expires_in),i.isBefore(a)&&(r("logout"),location.reload()),!(i.diff(a,"days")<30)){e.next=15;break}return e.next=10,Me(s.refresh_token);case 10:return o=e.sent,c=o.data,e.next=14,r("setCredentials",Object(S["a"])({},c,{expires_in:Je()().add(c.expires_in,"seconds").toDate().toISOString()}));case 14:r("setupAuth");case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t,r){var n,s,a,i,o,c,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,s=r.email,a=void 0===s?Ie():s,i=r.password,o=void 0===i?Ie():i,e.prev=2,e.next=5,Be(a,o);case 5:return c=e.sent,u=c.data,e.next=9,n("setCredentials",Object(S["a"])({},u,{expires_in:Je()().add(u.expires_in,"seconds").toDate().toISOString()}));case 9:n("setupAuth"),e.next=21;break;case 12:if(e.prev=12,e.t0=e["catch"](2),422!==e.t0.response.status){e.next=19;break}return e.abrupt("return",e.t0.response.data);case 19:if(401!==e.t0.response.status){e.next=21;break}return e.abrupt("return",{errors:{general:["o email ou senha estão incorretos!"]}});case 21:return e.abrupt("return",{});case 22:case"end":return e.stop()}},e,this,[[2,12]])}));return function(t,r){return e.apply(this,arguments)}}(),Ze=$e("user"),et=$e("credentials"),tt={state:Ae,mutations:i,actions:o,getters:c,namespaced:!0},rt=function(e){var t=function(e){localStorage.setItem("auth_credentials",JSON.stringify(e))},r=function(t){if(!t)return localStorage.removeItem("auth_credentials");axios.defaults.headers.common.Authorization="Bearer ".concat(t.access_token),e.dispatch("auth/fetchUser"),e.commit("auth/SET_CREDENTIALS",t)},n=function(){localStorage.removeItem("auth_credentials"),delete axios.defaults.headers.common.Authorization};e.subscribe(function(e){switch(e.type){case"auth/SET_CREDENTIALS":t(e.payload);break;case"auth/SETUP_AUTH":r(JSON.parse(localStorage.getItem("auth_credentials")));break;case"auth/LOGOUT":n();break}})};u["a"].use(D["a"]);var nt=new D["a"].Store({modules:{ui:Le,auth:tt},plugins:[rt]});r("15f5"),r("c6e4"),r("9299");u["a"].config.productionTip=!1,new u["a"]({router:Oe,store:nt,mounted:function(){this.$store.dispatch("auth/setupAuth"),this.$store.dispatch("auth/checkRefresh")},render:function(e){return e(h)}}).$mount("#app")},"578e":function(e,t,r){"use strict";r.r(t);r("b54a");var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"sidebar-header"},[e._t("default")],2)},s=[],a={name:"Header"},i=a,o=r("2877"),c=Object(o["a"])(i,n,s,!1,null,null,null);c.options.__file="Header.vue";var u=c.exports,l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sidebar-item"},[r("router-link",{staticClass:"sidebar-link",attrs:{to:e.$props.link}},[e.$props.icon?r("span",{class:["align-middle","feather",e.$props.icon]}):e._e(),r("span",{staticClass:"align-middle",domProps:{textContent:e._s(e.$props.title)}}),e.$props.badge?r("span",{class:["sidebar-badge","badge","badge-"+e.$props.badge.type],domProps:{textContent:e._s(e.$props.badge.value)}}):e._e()])],1)},d=[],f={name:"Link",props:{link:{required:!0,type:String},icon:{required:!1,type:String},title:{required:!0,type:String},badge:{required:!1,type:[Object,null]}}},p=f,b=Object(o["a"])(p,l,d,!1,null,null,null);b.options.__file="Link.vue";var m=b.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"sidebar-item"},[r("a",{staticClass:"sidebar-link collapsed",attrs:{href:"#menu-"+e.$props.id,"data-toggle":"collapse"}},[e.$props.icon?r("span",{class:["feather","align-middle",e.$props.icon]}):e._e(),r("span",{staticClass:"align-middle",domProps:{textContent:e._s(e.$props.title)}})]),r("ul",{staticClass:"sidebar-dropdown list-unstyled collapse",attrs:{id:"menu-"+e.$props.id}},[r("link-bag",{attrs:{links:e.$props.links}})],1)])},v=[],g=(r("c5f6"),r("cadf"),r("551c"),r("097d"),{name:"Collapseable",components:{LinkBag:function(){return Promise.resolve().then(r.bind(null,"578e"))}},props:{links:{type:Array,required:!0},id:{type:[String,Number],required:!0},icon:{type:String,required:!1},title:{type:String,required:!0}}}),j=g,_=Object(o["a"])(j,h,v,!1,null,null,null);_.options.__file="Collapseable.vue";var k=_.exports;t["default"]={name:"LinkBag",props:{links:Array},methods:{renderLink:function(e,t){return"string"===typeof e?this.$createElement(u,{key:t},e):e.hasOwnProperty("links")?this.$createElement(k,{props:{links:e.links,id:t,icon:e.icon,title:e.title},key:t}):this.$createElement(m,{props:{badge:e.badge?e.badge():null,icon:e.icon,title:e.title,link:e.link},key:t})}},render:function(e){return e("div",{class:"sidebar-nav"},this.$props.links.map(this.renderLink))}}},9299:function(e,t,r){},c6e4:function(e,t,r){window._=r("2ef0"),window.Popper=r("f0bd").default;try{window.$=window.jQuery=r("1157"),r("4989")}catch(e){}window.axios=r("bc3a"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.521e1693.js.map