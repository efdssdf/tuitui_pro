(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf2e84d0"],{"11e9":function(t,e,r){var a=r("52a7"),o=r("4630"),n=r("6821"),s=r("6a99"),i=r("69a8"),c=r("c69a"),l=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?l:function(t,e){if(t=n(t),e=s(e,!0),c)try{return l(t,e)}catch(t){}if(i(t,e))return o(!a.f.call(t,e),t[e])}},1384:function(t,e,r){"use strict";var a=r("1ed2"),o=r.n(a);o.a},"1ed2":function(t,e,r){},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,r){var a=r("d3f4"),o=r("8b97").set;t.exports=function(t,e,r){var n,s=e.constructor;return s!==r&&"function"==typeof s&&(n=s.prototype)!==r.prototype&&a(n)&&o&&o(t,n),t}},"8b97":function(t,e,r){var a=r("d3f4"),o=r("cb7c"),n=function(t,e){if(o(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,r){return n(t,r),e?t.__proto__=r:a(t,r),t}}({},!1):void 0),check:n}},9093:function(t,e,r){var a=r("ce10"),o=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,o)}},aa77:function(t,e,r){var a=r("5ca1"),o=r("be13"),n=r("79e5"),s=r("fdef"),i="["+s+"]",c="​",l=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),f=function(t,e,r){var o={},i=n(function(){return!!s[t]()||c[t]()!=c}),l=o[t]=i?e(m):s[t];r&&(o[r]=l),a(a.P+a.F*i,"String",o)},m=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},c5f6:function(t,e,r){"use strict";var a=r("7726"),o=r("69a8"),n=r("2d95"),s=r("5dbc"),i=r("6a99"),c=r("79e5"),l=r("9093").f,u=r("11e9").f,f=r("86cc").f,m=r("aa77").trim,p="Number",d=a[p],h=d,g=d.prototype,b=n(r("2aeb")(g))==p,v="trim"in String.prototype,_=function(t){var e=i(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():m(e,3);var r,a,o,n=e.charCodeAt(0);if(43===n||45===n){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+e}for(var s,c=e.slice(2),l=0,u=c.length;l<u;l++)if(s=c.charCodeAt(l),s<48||s>o)return NaN;return parseInt(c,a)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof d&&(b?c(function(){g.valueOf.call(r)}):n(r)!=p)?s(new h(_(e)),r,d):_(e)};for(var y,I=r("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;I.length>x;x++)o(h,y=I[x])&&!o(d,y)&&f(d,y,u(h,y));d.prototype=g,g.constructor=d,r("2aba")(a,p,d)}},f725:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"edit-info"},[r("h2",{staticClass:"title"},[t._v("\n    "+t._s("创建小说返回链接"==t.$route.name?"创建小说返回链接":"修改小说返回链接")+"\n  ")]),r("Form",{staticClass:"form-group",attrs:{model:t.form,"label-position":"right","label-width":100}},[r("FormItem",{attrs:{label:"类型"}},[r("span",[t._v(t._s(0==t.form.type?"微信内":"微信外"))])]),r("FormItem",{attrs:{label:"时间"}},[r("span",[t._v(t._s(t.form.date))])]),r("FormItem",{attrs:{label:"id"}},[r("span",[t._v(t._s(t.form.id))])]),r("FormItem",{attrs:{label:"文章标题"}},[r("Input",{staticClass:"inputtxt",attrs:{size:"large",type:"text",placeholder:"请输入文章标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("FormItem",{attrs:{label:"阅读数"}},[r("span",[t._v(t._s(t.form.reading))])]),r("FormItem",{attrs:{label:"顶部跳转"}},[r("Input",{staticClass:"inputtxt",attrs:{size:"large",type:"text",placeholder:"请输入顶部跳转链接"},model:{value:t.form.linkUrl,callback:function(e){t.$set(t.form,"linkUrl",e)},expression:"form.linkUrl"}})],1),r("FormItem",{attrs:{label:"banner图片"}},[r("Upload",{attrs:{action:"http://test.oorggt.top/tuiguang/novel/upload","show-upload-list":!1,name:"imageFile","on-success":t.handleSuccess1}},[r("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[t._v("点击上传")]),r("br"),t.form.bannerUrl?r("img",{staticStyle:{"margin-top":"10px"},attrs:{src:t.form.bannerUrl,alt:"",width:"200"}}):t._e()],1)],1),r("FormItem",{attrs:{label:"内容"}},[r("Input",{staticClass:"inputtxt",attrs:{size:"large",type:"textarea",placeholder:"请输入内容"},model:{value:t.form.capter,callback:function(e){t.$set(t.form,"capter",e)},expression:"form.capter"}})],1),r("FormItem",{attrs:{label:"公号二维码",prop:"picurl"}},[r("Upload",{attrs:{action:"http://test.oorggt.top/tuiguang/novel/upload","show-upload-list":!1,name:"imageFile","on-success":t.handleSuccess2}},[r("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[t._v("点击上传")]),r("br"),t.form.qrcode?r("img",{staticStyle:{"margin-top":"10px"},attrs:{src:t.form.qrcode,alt:"",width:"200"}}):t._e()],1)],1),r("FormItem",{attrs:{label:"统计代码"}},[r("Input",{staticClass:"inputtxt",attrs:{size:"large",type:"text",placeholder:"请输入统计代码"},model:{value:t.form.statisticsCode,callback:function(e){t.$set(t.form,"statisticsCode",e)},expression:"form.statisticsCode"}})],1),r("FormItem",{attrs:{label:"其他代码"}},[r("Input",{staticClass:"inputtxt",attrs:{size:"large",type:"text",placeholder:"请输入其他业务代码"},model:{value:t.form.otherCode,callback:function(e){t.$set(t.form,"otherCode",e)},expression:"form.otherCode"}})],1),r("FormItem",{attrs:{label:"渠道"}},[r("Input",{staticClass:"inputtxt",attrs:{size:"large",type:"text",placeholder:"请输入渠道"},model:{value:t.form.channel,callback:function(e){t.$set(t.form,"channel",e)},expression:"form.channel"}})],1),r("FormItem",{attrs:{label:"备注"}},[r("Input",{staticClass:"inputtxt",attrs:{size:"large",type:"text",placeholder:"请输入备注"},model:{value:t.form.remarks,callback:function(e){t.$set(t.form,"remarks",e)},expression:"form.remarks"}})],1),r("FormItem",["创建小说返回链接"==t.$route.name?r("Button",{staticClass:"edit-btn",attrs:{size:"large",type:"primary"},on:{click:t.create}},[t._v("立即创建")]):r("Button",{staticClass:"edit-btn",attrs:{size:"large",type:"primary"},on:{click:t.save}},[t._v("保 存")]),r("Button",{staticClass:"edit-btn",attrs:{size:"large",type:"warning"},on:{click:t.cancel}},[t._v("取 消")])],1)],1)],1)},o=[],n=(r("c5f6"),r("7f7f"),r("cadf"),r("551c"),r("097d"),{data:function(){return{form:{date:this.formatDate(Date.now()),type:this.$route.query.type,id:this.$route.query.id,reading:Math.ceil(135e3*Math.random())},domain_names:[],bannerUrl:"",qrcode:""}},mounted:function(){this.getDomain(),"修改小说返回链接"==this.$route.name&&(this.form=this.$route.query)},methods:{formatDate:function(t){var e=new Date(Number(t)),r=e.getFullYear(),a=e.getMonth()+1,o=e.getDate(),n=r+"-"+(a<10?"0"+a:a)+"-"+(o<10?"0"+o:o);return n},handleSuccess1:function(t,e){this.form.bannerUrl=this.domain_names[0].domain_name+"/images/tuiguang/"+t.filename},handleSuccess2:function(t,e){this.form.qrcode=this.domain_names[0].domain_name+"/images/tuiguang/"+t.filename},create:function(){var t=this;this.$Modal.confirm({title:"确定创建吗？",onOk:function(){t.$axios.post("/recommend/novel/create",t.form).then(function(e){t.$Message.info(e.data.success),t.reset(),t.$router.push({name:"修改小说返回列表",query:t.form})})}})},save:function(){var t=this;this.$Modal.confirm({title:"确认修改吗？",onOk:function(){t.$axios.post("/recommend/novel/update",t.form).then(function(e){t.$Message.info(e.data.success),t.reset(),t.$router.push({name:"修改小说返回列表",query:t.form})})}})},cancel:function(){var t=this;this.$Modal.confirm({title:"确认取消操作吗？",onOk:function(){t.reset(),console.log(t.form),t.$router.push({name:"修改小说返回列表",query:t.form})}})},reset:function(){this.form={date:this.formatDate(Date.now()),type:this.$route.query.type,id:this.$route.query.id,reading:Math.ceil(135e3*Math.random())}},getDomain:function(){var t=this;this.$axios.get("/tuiguang/novel/show").then(function(e){t.domain_names=e.data.domain_names})}}}),s=n,i=(r("1384"),r("2877")),c=Object(i["a"])(s,a,o,!1,null,"fd6719d8",null);c.options.__file="editInfo.vue";e["default"]=c.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-cf2e84d0.cfbd642f.js.map