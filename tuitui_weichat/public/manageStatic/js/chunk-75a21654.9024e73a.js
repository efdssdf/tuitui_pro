(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75a21654"],{"386b":function(t,e,i){var s=i("5ca1"),n=i("79e5"),a=i("be13"),r=/"/g,o=function(t,e,i,s){var n=String(a(t)),o="<"+e;return""!==i&&(o+=" "+i+'="'+String(s).replace(r,"&quot;")+'"'),o+">"+n+"</"+e+">"};t.exports=function(t,e){var i={};i[t]=e(o),s(s.P+s.F*n(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",i)}},"3e05":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-con"},[i("h2",{staticClass:"title"},[t._v("\n    "+t._s("修改推广链接"==t.$route.name?"修改推广链接":"创建推广链接")+"\n  ")]),i("Form",{staticClass:"form-group",attrs:{model:t.form,"label-position":"right","label-width":100}},[i("FormItem",{attrs:{label:"id",prop:"id"}},[i("Input",{staticClass:"inputtxt",attrs:{size:"large",type:"text",placeholder:"请输入id"},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id","string"===typeof e?e.trim():e)},expression:"form.id"}})],1),i("FormItem",{attrs:{label:"标题",prop:"title"}},[i("Input",{staticClass:"inputtxt",attrs:{size:"large",type:"text",placeholder:"请输入标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title","string"===typeof e?e.trim():e)},expression:"form.title"}})],1),i("FormItem",{attrs:{label:"链接",prop:"link"}},[i("Input",{staticClass:"inputtxt",attrs:{size:"large",type:"text",placeholder:"请输入链接"},model:{value:t.link,callback:function(e){t.link="string"===typeof e?e.trim():e},expression:"link"}}),i("Button",{staticStyle:{"margin-left":"20px"},attrs:{type:"success",size:"large"},on:{click:t.addOne}},[t._v("添加")])],1),i("FormItem",{attrs:{label:"链接组",prop:"links"}},[i("ul",t._l(t.form.links,function(e,s){return i("li",{key:s},[i("span",[t._v(t._s(e))]),i("Button",{attrs:{type:"error",size:"large"},on:{click:function(e){t.deleteLink(s)}}},[t._v("X")])],1)}))]),i("FormItem",{attrs:{label:"是否增加权重",prop:"title"}},[i("i-switch",{model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),t.type?i("FormItem",{attrs:{label:"权重",prop:"weight"}},[i("Input",{staticClass:"inputtxt",attrs:{size:"large",type:"text",placeholder:"请输入权重"},model:{value:t.weight,callback:function(e){t.weight="string"===typeof e?e.trim():e},expression:"weight"}}),i("Button",{staticStyle:{"margin-left":"20px"},attrs:{type:"success",size:"large"},on:{click:t.addWeight}},[t._v("添加")])],1):t._e(),t.type?i("FormItem",{attrs:{label:"权重组",prop:"weights"}},[i("ul",t._l(t.form.weights,function(e,s){return i("li",{key:s,staticClass:"weight"},[t.selectIndex===s?i("div",{staticClass:"input-box"},[i("Input",{attrs:{search:"","enter-button":"保存",placeholder:"请输入权重"},on:{"on-search":function(e){t.changeWeight(s)}},model:{value:t.weight_input,callback:function(e){t.weight_input="string"===typeof e?e.trim():e},expression:"weight_input"}})],1):i("div",[i("span",{on:{click:function(i){t.changeState(e,s)}}},[t._v(t._s(e))]),i("Button",{attrs:{type:"error"},on:{click:function(e){t.deleteWeight(s)}}},[t._v("DEL")])],1)])}))]):t._e(),i("FormItem",["创建推广链接"==t.$route.name?i("Button",{staticClass:"edit-btn",attrs:{size:"large",type:"primary"},on:{click:t.create}},[t._v("立即创建\n      ")]):i("Button",{staticClass:"edit-btn",attrs:{size:"large",type:"primary"},on:{click:t.save}},[t._v("保 存")]),i("Button",{staticClass:"edit-btn",attrs:{size:"large",type:"warning"},on:{click:t.cancel}},[t._v("取 消")])],1)],1)],1)},n=[],a=(i("b54a"),i("7f7f"),i("cadf"),i("551c"),i("097d"),{data:function(){return{form:{links:[],type:0,weights:[]},link:"",weight:"",type:!1,selectIndex:-1,weight_input:""}},mounted:function(){"修改推广链接"===this.$route.name&&(this.form=this.$route.params.row,this.type=1==this.form.type,this.form.links||(this.form.links=[]),this.form.weights||(this.form.weights=[]))},methods:{changeState:function(t,e){this.selectIndex=e,this.weight_input=t},changeWeight:function(t){this.form.weights.splice(t,1,this.weight_input),this.selectIndex=-1},deleteLink:function(t){var e=this;this.$Modal.confirm({title:"提示:",content:"确认删除这条内容吗？",onOk:function(){e.form.links.splice(t,1)}})},addOne:function(){""===this.link?this.$Message.info("链接不能为空"):(this.form.links.push(this.link),this.link="")},deleteWeight:function(t){var e=this;this.$Modal.confirm({title:"提示:",content:"确认删除这条内容吗？",onOk:function(){e.form.weights.splice(t,1)}})},addWeight:function(){""===this.weight?this.$Message.info("权重不能为空"):(this.form.weights.push(this.weight),this.weight="")},save:function(){var t=this;this.form.type=this.type?1:0,this.$axios.post("/transfer/update",this.form).then(function(e){e.data.success?(t.$Message.info(e.data.success),t.$router.push({name:"推广链接",params:{row:t.form,index:t.$route.params.index}}),t.reset()):t.$Message.info(e.data.err)})},create:function(){var t=this;this.form.type=this.type?1:0,this.$axios.post("/transfer/create",this.form).then(function(e){e.data.success?(t.$Message.info(e.data.success),t.$router.push({name:"推广链接",params:e.data.data}),t.reset()):t.$Message.info(e.data.err)})},cancel:function(){this.$router.push({name:"推广链接",params:{state:"cancel"}}),this.reset()},reset:function(){this.form={links:[],type:0,weights:[]}}}}),r=a,o=(i("8a76"),i("2877")),l=Object(o["a"])(r,s,n,!1,null,"177cb321",null);l.options.__file="editInfo.vue";e["default"]=l.exports},"8a76":function(t,e,i){"use strict";var s=i("c936"),n=i.n(s);n.a},b54a:function(t,e,i){"use strict";i("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},c936:function(t,e,i){}}]);
//# sourceMappingURL=chunk-75a21654.9024e73a.js.map