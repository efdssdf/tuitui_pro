(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52abb7fe"],{"817e":function(t,a,e){"use strict";var o=e("a00f"),n=e.n(o);n.a},a00f:function(t,a,e){},b20f:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"edit-info"},[e("h2",{staticClass:"title"},[t._v("\n    "+t._s("修改公号"==t.$route.name?"编辑公号信息":"接管新公号")+"\n  ")]),e("Form",{staticClass:"form-group",attrs:{model:t.formData,"label-position":"right","label-width":100}},[e("FormItem",{attrs:{label:"公号名称",prop:"name"}},[e("Input",{attrs:{size:"large",type:"text",placeholder:"请输入公号名称"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),e("FormItem",{attrs:{label:"appid",prop:"appid"}},[e("Input",{attrs:{size:"large",type:"text",placeholder:"请输入appid"},model:{value:t.formData.appid,callback:function(a){t.$set(t.formData,"appid","string"===typeof a?a.trim():a)},expression:"formData.appid"}})],1),e("FormItem",{attrs:{label:"appsecret",prop:"appsecret"}},[e("Input",{attrs:{size:"large",type:"text",placeholder:"请输入appsecret"},model:{value:t.formData.appsecret,callback:function(a){t.$set(t.formData,"appsecret","string"===typeof a?a.trim():a)},expression:"formData.appsecret"}})],1),e("FormItem",{attrs:{label:"token",prop:"token"}},[e("Input",{attrs:{size:"large",type:"text",placeholder:"请输入token"},model:{value:t.formData.token,callback:function(a){t.$set(t.formData,"token",a)},expression:"formData.token"}})],1),e("FormItem",{attrs:{label:"是否实时获取用户信息",prop:"real_time"}},[e("i-switch",{model:{value:t.formData.real_time,callback:function(a){t.$set(t.formData,"real_time",a)},expression:"formData.real_time"}})],1),e("FormItem",{attrs:{label:"是否保存用户",prop:"save_user"}},[e("i-switch",{model:{value:t.formData.save_user,callback:function(a){t.$set(t.formData,"save_user",a)},expression:"formData.save_user"}})],1),e("FormItem",{attrs:{label:"选择标签"}},[t.changeTag?e("Tag",{attrs:{name:t.formData.group,closable:""},on:{"on-close":t.handleClose}},[t._v(t._s(t.formData.group))]):e("Input",{attrs:{size:"large",type:"text",placeholder:"请输入分组名"},on:{"on-blur":t.tagConfirm},model:{value:t.formData.group,callback:function(a){t.$set(t.formData,"group",a)},expression:"formData.group"}})],1),e("FormItem",{attrs:{label:"标签选项"}},t._l(t.tagList,function(a,o){return e("Tag",{attrs:{name:a.name,closable:""},on:{"on-close":function(e){t.deleteTag(a,o)}},nativeOn:{click:function(e){t.select(a)}}},[t._v(t._s(a.name)+"\n      ")])})),e("FormItem",[e("Button",{staticClass:"edit-btn",attrs:{size:"large",type:"primary"},on:{click:t.submitForm}},[t._v("提交")]),e("Button",{staticClass:"edit-btn",attrs:{size:"large",type:"error"},on:{click:t.resetForm}},[t._v("重置")]),e("Button",{staticClass:"edit-btn",attrs:{size:"large",type:"warning"},on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)},n=[],s=(e("7f7f"),e("cadf"),e("551c"),e("097d"),{data:function(){return{formData:{token:"mingxingshuo",real_time:!1,save_user:!0},tagList:[],changeTag:!1}},mounted:function(){this.showTagList(),"修改公号"===this.$route.name&&(this.formData=this.$route.query)},methods:{cancel:function(){this.$router.push("/manage/gonghao/tuoguan"),this.resetForm()},resetForm:function(){this.formData={token:"mingxingshuo",real_time:!1,save_user:!0}},submitForm:function(){var t=this;"/manage/gonghao/tuoguan/create"===this.$route.path?this.$axios.post("/conf/create",this.formData).then(function(a){window.location.href="/manage/gonghao/tuoguan",t.$Message.info("新建成功"),t.resetForm()}):"/manage/gonghao/tuoguan/update"===this.$route.path&&this.$axios.post("/conf/update",this.formData).then(function(a){window.location.href="/manage/gonghao/tuoguan",t.$Message.info("修改成功"),t.resetForm()})},showTagList:function(){var t=this;this.$axios.get("/gonghaoTag").then(function(a){t.tagList=a.data.data})},tagConfirm:function(){var t=this;this.changeTag=!0,this.$axios.post("/gonghaoTag",{name:this.formData.group}).then(function(a){0==a.data.exist&&t.tagList.push(a.data.data)})},handleClose:function(){this.formData.group="",this.changeTag=!1},select:function(t){console.log(t),this.formData.group=t.name,this.changeTag=!0,console.log(this.formData)},deleteTag:function(t,a){var e=this;this.$Modal.confirm({title:"提示:",content:"确认删除这个分组吗？",onOk:function(){e.$axios.delete("/gonghaoTag/"+t._id).then(function(t){e.tagList.splice(1,a)})}})}}}),r=s,i=(e("817e"),e("2877")),l=Object(i["a"])(r,o,n,!1,null,"7211a1ee",null);l.options.__file="editInfo.vue";a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-52abb7fe.250302ff.js.map