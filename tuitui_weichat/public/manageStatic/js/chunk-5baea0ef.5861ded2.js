(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5baea0ef"],{"6de7":function(t,e,a){"use strict";var n=a("bbbe"),s=a.n(n);s.a},bbbe:function(t,e,a){},d13c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"random-links"},["推广链接"===t.$route.name?a("div",[a("Button",{staticClass:"create",attrs:{type:"success",size:"large",to:"/manage/links/spread/create"}},[t._v("添加新链接")]),a("Table",{staticClass:"spread-table",attrs:{columns:t.spreadHeader,data:t.spreadData}})],1):t._e(),a("router-view")],1)},s=[],r=(a("7f7f"),{data:function(){var t=this;return{spreadData:[],isShow:!1,isUpdate:!1,domain_names:[],spreadHeader:[{title:"链接",align:"center",render:function(t,e){var a="http://www.nyzda.top/transfer/"+e.row.id;return t("span",{props:{}},a)}},{key:"title",title:"标题",align:"center"},{title:"Action",align:"center",render:function(e,a){var n=t;return e("div",[e("Button",{style:{marginRight:"10px"},props:{type:"primary",size:"small"},on:{click:function(){n.$router.push({name:"修改推广链接",params:{row:a.row,index:a.index}})}}},"修改"),e("Button",{props:{type:"error",size:"small"},on:{click:function(){n.deleteOne(a.row,a.index)}}},"删除")])}}]}},mounted:function(){this.showList()},methods:{deleteOne:function(t,e){var a=this;this.$Modal.confirm({title:"提示:",content:"确认删除这条内容吗？",onOk:function(){a.$axios.get("/transfer/delete",{params:{id:t._id}}).then(function(t){a.$Message.info(t.data.success),a.spreadData.splice(e,1)})}})},showList:function(){var t=this;this.$axios.get("/transfer").then(function(e){t.spreadData=e.data.messages,t.domain_names=e.data.domain_names})}},watch:{$route:function(t,e){"cancel"!=this.$route.params.state&&("创建推广链接"==e.name?this.spreadData.push(this.$route.params):"修改推广链接"==e.name&&this.spreadData.splice(this.$route.params.index,1,this.$route.params.row))}}}),i=r,o=(a("6de7"),a("2877")),d=Object(o["a"])(i,n,s,!1,null,"26ddd5ba",null);d.options.__file="randomLinks.vue";e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-5baea0ef.5861ded2.js.map