(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["createCustomers"],{5702:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("page",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h1",[t._v(t._s(t.$t("pages.createCustomers")))])])]),r("div",{staticClass:"card shadow"},[r("div",{staticClass:"card-body"},[r("form",{on:{submit:t.onSubmit}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6"},[r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(t.$t("labels.name")))]),r("input",{staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.$t("placeholders.name")}}),r("error-list",{attrs:{errors:t.$data.errors.get("name")}})],1)]),r("div",{staticClass:"col-12 col-md-6"},[r("div",{staticClass:"form-group"},[r("label",[t._v(t._s(t.$t("labels.phone")))]),r("input",{staticClass:"form-control",attrs:{type:"text",name:"phone",placeholder:t.$t("placeholders.phone")}}),r("error-list",{attrs:{errors:t.$data.errors.get("phone")}})],1)])]),r("div",{staticClass:"text-right"},[r("router-link",{staticClass:"btn btn-danger mr-2",attrs:{to:{name:"uclientes"}}},[t._v("Cancelar")]),r("button",{staticClass:"btn btn-primary"},[t._v("Cadastrar")])],1)])])])])},s=[],n=r("2b2b"),o=r("7a43"),i=r("23da"),c={components:{ErrorList:i["a"]},data:function(){return{errors:new n["a"]}}},u=r("1940"),l=r.n(u),d=r("b4bb"),m={name:"CreateClients",mixins:[o["a"],c],methods:{onSubmit:function(t){var e=this;t.preventDefault();var r=new FormData(t.target);return r.append("user_id",this.user.id),r.append("client_id",this.user.client_id),l()({title:$t("notifications.title.wait"),text:$t("notifications.message.customer.create.wait"),icon:"warning",buttons:{cancel:"Cancelar",confirm:{text:"OK",value:!0,closeModal:!1}}}).then(function(t){return t?d["a"].create(r):Promise.reject(!1)}).then(function(t){return t.data.data}).then(function(t){return l()($t("notifications.title.success"),$t("notifications.message.customer.create.success"),"success")}).then(function(){e.$router.push({name:"uclientes"})}).catch(function(t){if(!1===t)l.a.close(),l.a.stopLoading();else{if(t&&t.response&&422===t.response.status)return l()($t("notifications.title.error"),$t("notifications.message.validation"),"warning").then(function(){e.$data.errors=new n["a"](t.response.data.errors),l.a.stopLoading(),l.a.close()});unknownError()}}),!1}}},p=m,f=r("2877"),h=Object(f["a"])(p,a,s,!1,null,null,null);h.options.__file="index.vue";e["default"]=h.exports},b4bb:function(t,e,r){"use strict";var a=r("451e");e["a"]={create:function(t){return $can("createCustomer")?a["a"].post("/api/customers",t):unauthorizedError().then(function(){return Promise.reject(!1)})},delete:function(t){return $can("deleteCustomer",t)?a["a"].laravelDelete("/api/customers/".concat(t.id)):unauthorizedError().then(function(){return Promise.reject(!1)})},restore:function(t){return $can("restoreCustomer",t)?a["a"].laravelPut("/api/customers/restore/".concat(t.id)):unauthorizedError().then(function(){return Promise.reject(!1)})}}}}]);
//# sourceMappingURL=createCustomers.65a1d679.js.map