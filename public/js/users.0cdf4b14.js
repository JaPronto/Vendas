(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["users"],{"974d":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("page",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-sm-4 col-md-6"},[e("h1",[t._v(t._s(t.$t("pages.users")))])]),e("div",{staticClass:"col-12 col-sm-8 col-md-6 text-center text-md-right mb-2 mb-md-0"},[e("router-link",{staticClass:"btn btn-info mr-2",attrs:{to:{name:"trashedUsers"}}},[t._v("Usuários Apagados")]),e("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"createUsers"}}},[t._v("Cadastrar")])],1)]),e("div",{staticClass:"card shadow"},[e("div",{staticClass:"card-body p-0"},[e("list",{ref:"vuetable",attrs:{"has-actions":"",url:"/api/users",fields:t.fields},scopedSlots:t._u([{key:"actions",fn:function(s){var a=s.rowData;return e("div",{},[e("button",{staticClass:"btn btn-danger",on:{click:function(s){t.dropUser(a)}}},[t._v("Apagar\n                    ")])])}}])})],1)])])},n=[],r=(e("1940"),e("35ca"),e("5231")),i={name:"Users",components:{List:r["a"]},meta:{title:$t("pages.users")},data:function(){return{fields:[{name:"name",sortField:"name",title:$t("labels.name")},{name:"email",sortField:"email",title:$t("labels.email")},{name:"phone",sortField:"phone",title:$t("labels.phone")}]}},methods:{dropUser:function(t){var s=this;this.mutate("deleteUser",{user:t,onSuccess:function(){return s.$refs.vuetable.reload()}})}}},l=i,o=e("2877"),c=Object(o["a"])(l,a,n,!1,null,null,null);c.options.__file="index.vue";s["default"]=c.exports}}]);
//# sourceMappingURL=users.0cdf4b14.js.map