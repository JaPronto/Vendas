(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["editPaymentTypes"],{"6a63":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("page",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",[t._v(t._s(t.$t("pages.editPaymentTypes")))])])]),e("div",{staticClass:"card shadow"},[e("div",{staticClass:"card-body"},[e("form",{on:{submit:t.onSubmit}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md-6"},[e("div",{staticClass:"form-group"},[e("label",[t._v(t._s(t.$t("labels.name")))]),e("input",{staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.$t("placeholders.name")},domProps:{value:t.name}}),e("error-list",{attrs:{errors:t.$data.errors.get("name")}})],1)])]),e("div",{staticClass:"text-right"},[e("router-link",{staticClass:"btn btn-danger mr-2",attrs:{to:{name:"paymentTypes"}}},[t._v("Cancelar")]),e("button",{staticClass:"btn btn-primary"},[t._v("Salvar")])],1)])])])])},n=[],r=(e("7f7f"),e("2b2b"),e("7a43")),i=e("ab68"),o=(e("1940"),e("a80d")),d={name:"EditPaymentTypes",mixins:[r["a"],i["a"]],data:function(){return{name:"",paymentType:null}},mounted:function(){var t=this;o["a"].show(this.$route.params.id).then(function(a){var e=a.data.data;t.$data.paymentType=e,t.$data.name=e.name})},methods:{onSubmit:function(t){var a=this;t.preventDefault();var e=new FormData(t.target);return this.mutate("editPaymentType",{data:e,paymentType:this.$data.paymentType,client_id:this.user.client_id,user_id:this.user.id,setErrors:function(t){return a.$data.errors=t},onSuccess:function(){return a.$router.push({name:"paymentTypes"})}}),!1}}},l=d,u=e("2877"),c=Object(u["a"])(l,s,n,!1,null,null,null);c.options.__file="index.vue";a["default"]=c.exports},ab68:function(t,a,e){"use strict";var s=e("2b2b"),n=e("23da");a["a"]={components:{ErrorList:n["a"]},data:function(){return{errors:new s["a"]}}}}}]);
//# sourceMappingURL=editPaymentTypes.5b44f968.js.map