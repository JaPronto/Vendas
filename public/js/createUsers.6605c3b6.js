(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["createUsers"],{"78d0":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("page",[r("h1",[e._v(e._s(e.$t("pages.createUsers")))]),r("div",{staticClass:"card shadow"},[r("div",{staticClass:"card-body"},[r("form",{on:{submit:e.onSubmit}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("error-list",{attrs:{errors:e.$data.errors.get("general")}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6"},[r("div",{staticClass:"form-group"},[r("label",[e._v(e._s(e.$t("labels.name")))]),r("input",{staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.$t("placeholders.name")}}),r("error-list",{attrs:{errors:e.$data.errors.get("name")}})],1)]),r("div",{staticClass:"col-12 col-md-6"},[r("div",{staticClass:"form-group"},[r("label",[e._v(e._s(e.$t("labels.email")))]),r("input",{staticClass:"form-control",attrs:{type:"email",name:"email",placeholder:e.$t("placeholders.email")}}),r("error-list",{attrs:{errors:e.$data.errors.get("email")}})],1)])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6"},[r("password-field",{attrs:{name:"password"}}),r("error-list",{attrs:{errors:e.$data.errors.get("password")}})],1),r("div",{staticClass:"col-12 col-md-6"},[r("password-field",{attrs:{label:e.$t("labels.password_confirmation"),name:"password_confirmation",placeholder:e.$t("placeholders.password_confirmation")}}),r("error-list",{attrs:{errors:e.$data.errors.get("password_confirmation")}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6"},[r("div",{staticClass:"form-group"},[r("label",[e._v(e._s(e.$t("labels.phone")))]),r("input",{staticClass:"form-control",attrs:{type:"text",name:"phone",placeholder:e.$t("placeholders.phone")}}),r("error-list",{attrs:{errors:e.$data.errors.get("phone")}})],1)]),r("div",{staticClass:"col-12 col-md-6"},[r("image-input",{attrs:{name:"image",src:e.$imageHolder.buildUrl(),imgStyle:"max-width: 200px; max-height: 200px"}},[e._v(e._s(e.$t("labels.image"))+"\n                        ")]),r("error-list",{attrs:{errors:e.$data.errors.get("image")}})],1)]),r("div",{staticClass:"text-right"},[r("router-link",{staticClass:"btn btn-danger mr-2",attrs:{to:{name:"usuarios"}}},[e._v("Cancelar")]),r("button",{staticClass:"btn btn-primary"},[e._v("Cadastrar")])],1)])])])])},s=[],n=r("23da"),i=r("aeb2"),o=r("2b2b"),c=r("ab2e"),l=r("1940"),u=r.n(l),d=r("35ca"),m=r("c134"),f={name:"CreateUsers",meta:{title:$t("pages.createUsers")},components:{ImageInput:c["a"],ErrorList:n["a"],PasswordField:i["a"]},data:function(){return{errors:new o["a"]}},methods:{onSubmit:function(e){var t=this;e.preventDefault();var r=new FormData(e.target);return u()({title:$t("notifications.title.wait"),text:$t("notifications.message.user.create.wait"),icon:"warning",buttons:{cancel:"Cancelar",ok:{text:"OK",value:!0,closeModal:!1}}}).then(function(e){return e?d["a"].create(r):Promise.reject(!1)}).then(function(e){return e.data.data}).then(function(e){var t=e.id;return m["a"].create(t)}).then(function(){return u()($t("notifications.title.success"),$t("notifications.message.user.create.success"),"success")}).then(function(){t.$router.push({name:"usuarios"})}).catch(function(e){if(!1===e)u.a.stopLoading(),u.a.close();else{if(e&&e.response&&422===e.response.status)return u()($t("notifications.title.error"),$t("notifications.message.validation"),"warning").then(function(){t.$data.errors=new o["a"](e.response.data.errors),u.a.stopLoading(),u.a.close()});unknownError()}}),!1}}},p=f,v=r("2877"),g=Object(v["a"])(p,a,s,!1,null,null,null);g.options.__file="index.vue";t["default"]=g.exports},ab2e:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"form-group"},[r("label",[e._t("default")],2),r("input",{staticClass:"form-control",attrs:{type:"file",name:e.name,id:e.name},on:{change:e.generatePreview}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.imgSrc,expression:"imgSrc"}],staticClass:"m-2"},[r("img",{staticClass:"img-response img-fluid img-thumbnail",style:e.imgStyle,attrs:{src:e.imgSrc,alt:"Preview "+e.name}})])])},s=[],n=(r("96cf"),r("3040")),i=r("c665"),o=r("aa9a"),c=function(){function e(){Object(i["a"])(this,e),this.reader=new FileReader}return Object(o["a"])(e,[{key:"readAs",value:function(e,t){var r=this;return new Promise(function(a,s){var n="readAs".concat(t);try{r.reader.onload=function(e){return a(e.target.result)},r.reader[n](e)}catch(e){return s(e)}})}},{key:"readAsDataURL",value:function(e){return this.readAs(e,"DataURL")}},{key:"readAsArrayBuffer",value:function(e){return this.readAs(e,"ArrayBuffer")}},{key:"readAsBinaryString",value:function(e){this.readAs(e,"BinaryString")}},{key:"readAsText",value:function(e){this.readAs("Text")}}]),e}(),l={name:"ImageInput",props:{src:{required:!0},name:{type:String,default:function(){return"image"}},imgStyle:{type:[Object,String],default:function(){return{}}}},data:function(){return{imageFile:null,imagePreview:null}},computed:{imgSrc:function(){return this.imagePreview?this.imagePreview:this.src}},methods:{generatePreview:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=t.target.files[0],a=new c,e.next=5,a.readAsDataURL(r);case 5:s=e.sent,this.$data.imageFile=r,this.$data.imagePreview=s,this.$emit("change",r),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),unknownError();case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()}},u=l,d=r("2877"),m=Object(d["a"])(u,a,s,!1,null,null,null);m.options.__file="index.vue";t["a"]=m.exports},c134:function(e,t,r){"use strict";var a=r("451e");t["a"]={create:function(e){return $can("createClient",e)?a["a"].post("/api/clients",{user_id:e}):unauthorizedError().then(function(){return Promise.reject(!1)})},disable:function(e){return $can("disableClient",e)?a["a"].laravelDelete("/api/clients/disable/".concat(e)):unauthorizedError().then(function(){return Promise.reject(!1)})},enable:function(e){return $can("enableClient",e)?a["a"].laravelPut("/api/clients/enable/".concat(e)):unauthorizedError().then(function(){return Promise.reject(!1)})}}}}]);
//# sourceMappingURL=createUsers.6605c3b6.js.map