(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69df4a18"],{"214f":function(t,a,e){"use strict";var s=e("32e9"),n=e("2aba"),o=e("79e5"),i=e("be13"),c=e("2b4c");t.exports=function(t,a,e){var r=c(t),u=e(i,r,""[t]),d=u[0],l=u[1];o(function(){var a={};return a[r]=function(){return 7},7!=""[t](a)})&&(n(String.prototype,t,d),s(RegExp.prototype,r,2==a?function(t,a){return l.call(t,this,a)}:function(t){return l.call(t,this)}))}},"2bd5":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"fans"},[e("Collapse",{model:{value:t.activeModel,callback:function(a){t.activeModel=a},expression:"activeModel"}},[e("Panel",{attrs:{name:"1"}},[e("span",{staticClass:"select-gonghao"},[t._v("选择公号")]),e("div",{attrs:{slot:"content"},slot:"content"},[e("RadioGroup",{model:{value:t.gonghao,callback:function(a){t.gonghao=a},expression:"gonghao"}},t._l(t.codes,function(a,s){return e("Radio",{key:s,staticClass:"gonghao",attrs:{label:a.code}},[t._v(t._s(a.name))])})),e("Button",{staticStyle:{"margin-top":"30px"},attrs:{type:"primary"},on:{click:function(a){t.search()}}},[t._v("确定")])],1)])],1),e("div",{staticClass:"title"},[e("span",{staticClass:"name"},[t._v("公号名称： "),e("span",[t._v(t._s(t.obj.name))])]),e("br"),e("span",[t._v("今日总新增关注用户数： "),e("span",[t._v(t._s(t.obj.subscribe_count))])]),e("span",[t._v("今日总新增中的取消关注用户数： "),e("span",[t._v(t._s(t.obj.unsubscribe_count))])]),e("span",[t._v("今日总新增用户净增长数： "),e("span",[t._v(t._s(t.obj.growth))])])]),e("div",{staticClass:"my-chart",style:{width:"100%",height:"500px"},attrs:{id:"myChart"}})],1)},n=[],o=(e("7f7f"),e("386d"),{data:function(){return{dataList:[],gonghao:7,codes:[],activeModel:"0",obj:{}}},mounted:function(){this.getCodes(),this.search(),sessionStorage.setItem("secName",this.$route.name)},methods:{drawLine:function(){for(var t=this.$echarts.init(document.getElementById("myChart")),a=[],e=[],s=[],n=[],o=this.dataList,i=0;i<o.length;i++)a.unshift(o[i].date),e.unshift(o[i].subscribe_count),s.unshift(o[i].unsubscribe_count),n.unshift(o[i].growth);t.setOption({title:{text:"今日新增用户统计折线图"},tooltip:{trigger:"axis"},legend:{data:["今日新增关注用户数","今日新增中的取消关注用户数","今日新增用户净增长数"]},toolbox:{show:!0,feature:{mark:{show:!0},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!1,xAxis:[{type:"category",boundaryGap:!1,data:a}],yAxis:[{type:"value"}],series:[{name:"今日新增关注用户数",type:"line",data:e},{name:"今日新增中的取消关注用户数",type:"line",data:s},{name:"今日新增用户净增长数",type:"line",data:n}]})},search:function(){var t=this;this.dataList=[],this.activeModel="0",this.obj={},this.$Message.info("查询数据库需要几秒钟的时间，请耐心等待");var a=this.gonghao;this.$axios.get("/statistics/group/"+a).then(function(a){t.dataList=a.data.data.list,t.$set(t.obj,a.data.data),t.obj.name=a.data.data.name,t.obj.subscribe_count=a.data.data.subscribe_count,t.obj.unsubscribe_count=a.data.data.unsubscribe_count,t.obj.growth=a.data.data.growth,t.drawLine(),t.chartShow=!0})},getCodes:function(){var t=this;this.$axios.get("/statistics/get_code").then(function(a){t.codes=a.data.codes})}}}),i=o,c=(e("8a54"),e("2877")),r=Object(c["a"])(i,s,n,!1,null,"1956502c",null);r.options.__file="fans.vue";a["default"]=r.exports},"386d":function(t,a,e){e("214f")("search",1,function(t,a,e){return[function(e){"use strict";var s=t(this),n=void 0==e?void 0:e[a];return void 0!==n?n.call(e,s):new RegExp(e)[a](String(s))},e]})},"8a54":function(t,a,e){"use strict";var s=e("d4aa"),n=e.n(s);n.a},d4aa:function(t,a,e){}}]);
//# sourceMappingURL=chunk-69df4a18.4d8c1aaf.js.map