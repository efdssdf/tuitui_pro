(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e207db52"],{"0e7d":function(t,a,n){},"78bc":function(t,a,n){"use strict";var e=n("0e7d"),i=n.n(e);i.a},bbd6:function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("Input",{staticStyle:{width:"200px","margin-right":"30px"},model:{value:t.tagName,callback:function(a){t.tagName=a},expression:"tagName"}}),n("Button",{attrs:{type:"primary"},on:{click:function(a){t.addTag()}}},[t._v("新增标签")]),n("Table",{staticClass:"tag-table",attrs:{stripe:"",columns:t.tagHeader,data:t.tagList}})],1)},i=[],s=(n("cadf"),n("551c"),n("097d"),n("bc3a"),{data:function(){var t=this;return{tagList:[],tagName:"",tagHeader:[{key:"_id",title:"序号",align:"center"},{key:"name",title:"标签名称",align:"center"},{title:"Action",align:"center",render:function(a,n){var e=t;return a("Button",{props:{type:"error",size:"small"},on:{click:function(){var t=n.row._id;e.$Modal.confirm({title:"提示:",content:"确认删除这条内容吗？",onOk:function(){e.$axios.delete("/tag/"+t).then(function(t){e.$Message.info("删除成功"),e.showTagList()})}})}}},"删除")}}]}},mounted:function(){this.showTagList()},methods:{showTagList:function(){var t=this;this.$axios.get("/tag").then(function(a){t.tagList=a.data.data})},addTag:function(){var t=this;this.$axios.post("/tag",{name:this.tagName}).then(function(a){t.$Message.info("添加成功"),t.showTagList()})}}}),o=s,c=(n("78bc"),n("2877")),r=Object(c["a"])(o,e,i,!1,null,"64720556",null);r.options.__file="tag.vue";a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-e207db52.278022e1.js.map