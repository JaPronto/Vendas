(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["users"],{"784e":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-4 col-md-6"},[a("h1",[t._v(t._s(t.$t("pages.users")))])]),a("div",{staticClass:"col-12 col-sm-8 col-md-6 text-center text-md-right mb-2 mb-md-0"},[a("router-link",{staticClass:"btn btn-info mr-2",attrs:{to:{name:"usuariosApagados"}}},[t._v("Usuários Apagados")]),a("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"cadastrarUsuarios"}}},[t._v("Cadastrar")])],1)]),a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-body p-0"},[a("vue-table",{ref:"vuetable",attrs:{"api-url":"/api/users",fields:t.fields,"data-path":"data","http-options":t.requestAuth,"pagination-path":"meta",css:t.css.table,"no-data-template":"nenhum registro encontrado"},scopedSlots:t._u([{key:"actions-slot",fn:function(e){var s=e.rowData;return a("div",{},[a("button",{staticClass:"btn btn-danger",on:{click:function(e){t.dropUser(s.id)}}},[t._v("Apagar\n                    ")])])}}])})],1)])])},n=[],i=a("af52"),o=a.n(i),r=a("51da"),l=a("1940"),c=a.n(l),u=a("35ca"),d=a("7a43"),m={name:"Users",components:{VueTable:o.a},mixins:[d["a"]],meta:{title:$t("pages.users")},data:function(){return{css:r["a"],fields:[{name:"name",sortField:"name",title:$t("labels.name")},{name:"email",sortField:"email",title:$t("labels.email")},{name:"phone",sortField:"phone",title:$t("labels.phone")},{name:"actions-slot",title:$t("labels.actions")}]}},methods:{dropUser:function(t){var e=this;c()({icon:"warning",title:$t("notifications.title.confirm"),text:$t("notifications.message.user.delete.confirm"),buttons:{cancel:"Cancelar",confirm:{text:"Confirmar",value:!0,closeModal:!1}},dangerMode:!0}).then(function(e){return e?u["a"].delete(t):Promise.reject(!1)}).then(function(t){return c()($t("notifications.title.success"),$t("notifications.message.user.delete.success"),"success")}).then(function(){e.$refs.vuetable.reload()}).catch(function(t){c.a.close(),c.a.stopLoading(),t&&unknownError()})}}},p=m,f=a("2877"),b=Object(f["a"])(p,s,n,!1,null,null,null);b.options.__file="index.vue";e["default"]=b.exports}}]);
//# sourceMappingURL=users.526777fb.js.map