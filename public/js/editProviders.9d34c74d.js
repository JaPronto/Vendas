(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["editProviders"],{a211:function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("page",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",[t._v(t._s(t.$t("pages.editProviders")))])])]),s("div",{staticClass:"card shadow"},[s("div",{staticClass:"card-body"},[s("form",{on:{submit:t.onSubmit}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v(t._s(t.$t("labels.name")))]),s("input",{staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.$t("placeholders.name")},domProps:{value:t.name}}),s("error-list",{attrs:{errors:t.$data.errors.get("name")}})],1)])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("label",[t._v(t._s(t.$t("labels.observations")))]),s("textarea-autosize",{staticClass:"form-control",attrs:{type:"text","min-height":75,value:t.observations,placeholder:t.$t("placeholders.observations"),name:"observations"}})],1)])]),s("div",{staticClass:"text-right"},[s("router-link",{staticClass:"btn btn-danger mr-2",attrs:{to:{name:"providers"}}},[t._v("Cancelar")]),s("button",{staticClass:"btn btn-primary"},[t._v("Salvar")])],1)])])])])},e=[],i=(s("7f7f"),s("2b2b"),s("7a43")),o=s("ab68"),n=(s("1940"),s("25fc")),d={name:"EditProviders",mixins:[i["a"],o["a"]],data:function(){return{name:"",observations:"",provider:null}},mounted:function(){var t=this;n["a"].show(this.$route.params.id).then(function(a){var s=a.data.data;t.$data.provider=s,t.$data.name=s.name,t.$data.observations=s.observations})},methods:{onSubmit:function(t){var a=this;t.preventDefault();var s=new FormData(t.target);return this.mutate("editProvider",{data:s,provider:this.$data.provider,client_id:this.user.client_id,user_id:this.user.id,setErrors:function(t){return a.$data.errors=t},onSuccess:function(){return a.$router.push({name:"providers"})}}),!1}}},l=d,c=s("2877"),u=Object(c["a"])(l,r,e,!1,null,null,null);u.options.__file="index.vue";a["default"]=u.exports},ab68:function(t,a,s){"use strict";var r=s("2b2b"),e=s("23da");a["a"]={components:{ErrorList:e["a"]},data:function(){return{errors:new r["a"]}}}}}]);
//# sourceMappingURL=editProviders.9d34c74d.js.map