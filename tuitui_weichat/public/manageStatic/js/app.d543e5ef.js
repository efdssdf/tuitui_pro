(function(e){function n(n){for(var a,r,o=n[0],c=n[1],s=n[2],l=0,d=[];l<o.length;l++)r=o[l],u[r]&&d.push(u[r][0]),u[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);h&&h(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,r=1;r<t.length;r++){var o=t[r];0!==u[o]&&(a=!1)}a&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var a={},r={app:0},u={app:0},i=[];function o(e){return c.p+"manageStatic/js/"+({}[e]||e)+"."+{"chunk-0090bf16":"f5723ff0","chunk-016c8c8b":"45241d0a","chunk-085d9cd2":"d86156f4","chunk-0db778d9":"956b58c4","chunk-101a38e0":"bd7c2875","chunk-14eddc66":"a4f917cb","chunk-15aa871d":"ed967e71","chunk-19089acd":"f7096f36","chunk-1a33f3b7":"e8ab6f01","chunk-1c84def0":"c11b27c7","chunk-31e73da4":"670429d3","chunk-36b602c0":"8d9cc0e6","chunk-3bf5dd86":"adeff986","chunk-3e551d38":"9612efc7","chunk-3eead5d3":"466a83d8","chunk-47708c37":"404b1f34","chunk-4c170f6e":"4487619e","chunk-4c4a5fe4":"7973ba75","chunk-65ff3daa":"857faea4","chunk-684d3d16":"aa604666","chunk-68b6a6b1":"37cc4655","chunk-7bfe2c03":"afdba2b2","chunk-a5f62a6e":"9ab95d1f","chunk-c89c71ae":"a0fe1190","chunk-e98193d6":"a518d91a","chunk-ed1f5ac6":"ed1cc7c8","chunk-fb68f60c":"78f54e93"}[e]+".js"}function c(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"chunk-0090bf16":1,"chunk-016c8c8b":1,"chunk-085d9cd2":1,"chunk-0db778d9":1,"chunk-101a38e0":1,"chunk-14eddc66":1,"chunk-15aa871d":1,"chunk-19089acd":1,"chunk-1a33f3b7":1,"chunk-1c84def0":1,"chunk-31e73da4":1,"chunk-36b602c0":1,"chunk-3bf5dd86":1,"chunk-3e551d38":1,"chunk-3eead5d3":1,"chunk-47708c37":1,"chunk-4c170f6e":1,"chunk-4c4a5fe4":1,"chunk-65ff3daa":1,"chunk-684d3d16":1,"chunk-68b6a6b1":1,"chunk-7bfe2c03":1,"chunk-a5f62a6e":1,"chunk-c89c71ae":1,"chunk-ed1f5ac6":1,"chunk-fb68f60c":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var a="manageStatic/css/"+({}[e]||e)+"."+{"chunk-0090bf16":"f25c6d2d","chunk-016c8c8b":"e1459621","chunk-085d9cd2":"5538e948","chunk-0db778d9":"64378864","chunk-101a38e0":"60f16347","chunk-14eddc66":"0be05f33","chunk-15aa871d":"47c19ff0","chunk-19089acd":"06498b98","chunk-1a33f3b7":"ea71006c","chunk-1c84def0":"acaace3f","chunk-31e73da4":"189f4443","chunk-36b602c0":"08d5c443","chunk-3bf5dd86":"b4e29258","chunk-3e551d38":"0bad2988","chunk-3eead5d3":"9a9b1130","chunk-47708c37":"ac088334","chunk-4c170f6e":"b862612a","chunk-4c4a5fe4":"591b3608","chunk-65ff3daa":"c533409c","chunk-684d3d16":"c26daba8","chunk-68b6a6b1":"ad75cbd5","chunk-7bfe2c03":"77c9c7c4","chunk-a5f62a6e":"af381f14","chunk-c89c71ae":"e1f9c126","chunk-e98193d6":"31d6cfe0","chunk-ed1f5ac6":"de32a067","chunk-fb68f60c":"d2353324"}[e]+".css",r=c.p+a,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var o=u[i],s=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===a||s===r))return n()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){o=l[i],s=o.getAttribute("data-href");if(s===a||s===r)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var a=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.request=a,t(u)},d.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){r[e]=0}));var a=u[e];if(0!==a)if(a)n.push(a[2]);else{var i=new Promise(function(n,t){a=u[e]=[n,t]});n.push(a[2]=i);var s,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e),s=function(n){d.onerror=d.onload=null,clearTimeout(h);var t=u[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,t[1](i)}u[e]=void 0}};var h=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,l.appendChild(d)}return Promise.all(n)},c.m=e,c.c=a,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var h=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},5237:function(e,n,t){"use strict";var a=t("9d60"),r=t.n(a);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},["/manage/login"!=e.$route.path?t("div",{staticClass:"nav"},[t("h2",{staticClass:"logo"},[e._v("后台管理系统")]),t("Menu",{staticClass:"menu",attrs:{mode:"horizontal",theme:"light","active-name":e.selectMenu},on:{"on-select":e.changeMenu}},[t("MenuItem",{attrs:{name:"公号托管"}},[t("Icon",{attrs:{type:"ios-paper"}}),e._v("公号管理\n      ")],1),t("MenuItem",{attrs:{name:"参数二维码"}},[t("Icon",{attrs:{type:"ios-people"}}),e._v("微信小工具\n      ")],1),t("MenuItem",{attrs:{name:"消息管理"}},[t("Icon",{attrs:{type:"ios-stats"}}),e._v("客服消息\n      ")],1),t("MenuItem",{attrs:{name:"群发列表"}},[t("Icon",{attrs:{type:"ios-stats"}}),e._v("群发消息\n      ")],1),t("MenuItem",{attrs:{name:"小说链接"}},[t("Icon",{attrs:{type:"ios-stats"}}),e._v("小说链接\n      ")],1),t("MenuItem",{attrs:{name:"粉丝数据"}},[t("Icon",{attrs:{type:"ios-stats"}}),e._v("数据统计\n      ")],1)],1)],1):e._e(),t("router-view")],1)},u=[],i=(t("7f7f"),{data:function(){return{selectMenu:this.$route.name}},methods:{changeMenu:function(e){this.$router.push({name:e})}},mounted:function(){this.$Message.config({top:100,duration:3})},watch:{$route:function(e,n){"tuoguan"==this.$route.meta.index?this.selectMenu="公号托管":"weixin"==this.$route.meta.index?this.selectMenu="参数二维码":"statistics"==this.$route.meta.index?this.selectMenu="粉丝数据":"msgView"==this.$route.meta.index?this.selectMenu="消息管理":"Links"==this.$route.meta.index?this.selectMenu="小说链接":"groupSending"==this.$route.meta.index&&(this.selectMenu="群发列表")}}}),o=i,c=(t("7c55"),t("2877")),s=Object(c["a"])(o,r,u,!1,null,null,null);s.options.__file="App.vue";var l,d=s.exports,h=t("8c4f"),m=t("a322"),p=t("2f62"),f="login",g="logout",b="title";a["default"].use(p["a"]);var k=new p["a"].Store({state:{user:{},token:null,title:""},mutations:(l={},Object(m["a"])(l,f,function(e,n){var t=(new Date).getTime();localStorage.setItem("token",JSON.stringify({data:n,time:t})),e.token=n}),Object(m["a"])(l,g,function(e){localStorage.removeItem("token"),e.token=null}),Object(m["a"])(l,b,function(e,n){e.title=n}),l)}),v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login"},[t("Form",{ref:"loginRule",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRule}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{attrs:{size:"large",type:"text",placeholder:"用户名"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{size:"large",type:"password",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),t("FormItem",[t("Button",{attrs:{size:"large",type:"primary"},on:{click:function(n){e.onSubmit("loginRule")}}},[e._v("登录")])],1)],1)],1)},x=[],y={data:function(){return{loginForm:{username:"",password:""},loginRule:{username:[{required:!0,message:"用户名不能为空！！(随便输就好)",trigger:"blur"}],password:[{required:!0,message:"密码不能为空！！(随便输就好)",trigger:"blur"},{type:"string",min:6,message:"密码不能少于六位！！",trigger:"blur"}]}}},methods:{onSubmit:function(e){var n=this;this.$refs[e].validate(function(e){if(e&&"mingxingshuo"==n.loginForm.username&&"mingxingshuo123"==n.loginForm.password){n.$Message.success("登录成功!"),n.$store.commit(f,"123123321");var t=decodeURIComponent(n.$route.query.redirect||"/manage");n.$router.push({path:t})}else n.$Message.error("Fail!")})}}},w=y,_=(t("5237"),Object(c["a"])(w,v,x,!1,null,"28ce1554",null));_.options.__file="Login.vue";var q=_.exports,L=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"gonghao"},[t("slider",{attrs:{sliderList:e.sliderList}}),t("div",{staticClass:"wrapper"},[t("router-view")],1)],1)},A=[],$=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"slider"},[t("Col",{staticClass:"slider-bar",attrs:{span:"8"}},[t("Menu",{attrs:{theme:"light","active-name":e.sliderRoute},on:{"on-select":e.changeSlider}},e._l(e.sliderList,function(n){return t("MenuItem",{attrs:{name:n.name}},[t("Icon",{attrs:{type:n.type}}),e._v("\n        "+e._s(n.title)+"\n      ")],1)}))],1)],1)},C=[],M={props:{sliderList:Array},data:function(){return{sliderRoute:""}},mounted:function(){this.judge()},methods:{changeSlider:function(e){this.$router.push({name:e})},judge:function(){switch(this.$route.meta.content){case"tuoguan":this.sliderRoute="公号托管";break;case"menu":this.sliderRoute="配置菜单";break;case"message":this.sliderRoute="回复消息";break;case"timingMenu":this.sliderRoute="配置定时菜单";break;case"qrCode":this.sliderRoute="参数二维码";break;case"tag":this.sliderRoute="标签管理";break;case"fans":this.sliderRoute="粉丝数据";break;case"guanli":this.sliderRoute="消息管理";break;case"groupList":this.sliderRoute="群发列表";break;case"novel":this.sliderRoute="小说链接";break;case"spread":this.sliderRoute="推广链接";break;case"transfer":this.sliderRoute="小说推广链接";break;case"recommend":this.sliderRoute="返回小说推荐";break;default:this.sliderRoute="小说工具";break}}},watch:{$route:function(e,n){this.judge()}}},j=M,S=(t("d30e"),Object(c["a"])(j,$,C,!1,null,"3c2a483d",null));S.options.__file="slider.vue";var I=S.exports,O={name:"gonghao",components:{slider:I},data:function(){return{sliderList:[{name:"公号托管",type:"ios-people",title:"公号托管"},{name:"配置菜单",type:"ios-people",title:"配置菜单"},{name:"回复消息",type:"ios-people",title:"回复消息"},{name:"配置定时菜单",type:"ios-people",title:"定时菜单"}]}}},R=O,E=Object(c["a"])(R,L,A,!1,null,null,null);E.options.__file="Gonghao.vue";var F=E.exports,T=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"weixin-tools"},[t("slider",{attrs:{sliderList:e.sliderList}}),t("div",{staticClass:"wrapper"},[t("router-view")],1)],1)},P=[],N={name:"tools",components:{slider:I},data:function(){return{sliderList:[{name:"参数二维码",type:"ios-people",title:"参数二维码"},{name:"标签管理",type:"ios-people",title:"标签管理"}]}}},z=N,B=Object(c["a"])(z,T,P,!1,null,null,null);B.options.__file="WeixinTools.vue";var V=B.exports,J=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"statistics"},[t("slider",{attrs:{sliderList:e.sliderList}}),t("div",{staticClass:"wrapper"},[t("router-view")],1)],1)},D=[],G={name:"statistics",components:{slider:I},data:function(){return{sliderList:[{name:"粉丝数据",type:"ios-people",title:"粉丝数据"}]}}},U=G,W=Object(c["a"])(U,J,D,!1,null,null,null);W.options.__file="Statistics.vue";var H=W.exports,K=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"msg-view"},[t("slider",{attrs:{sliderList:e.sliderList}}),t("div",{staticClass:"wrapper"},[t("router-view")],1)],1)},Q=[],X={name:"gonghao",components:{slider:I},data:function(){return{sliderList:[{name:"消息管理",type:"ios-people",title:"消息管理"}]}}},Y=X,Z=Object(c["a"])(Y,K,Q,!1,null,null,null);Z.options.__file="msgView.vue";var ee=Z.exports,ne=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"links"},[t("slider",{attrs:{sliderList:e.sliderList}}),t("div",{staticClass:"wrapper"},[t("router-view")],1)],1)},te=[],ae={name:"Links",components:{slider:I},data:function(){return{sliderList:[{name:"小说链接",type:"ios-people",title:"小说链接"},{name:"推广链接",type:"ios-people",title:"推广链接"},{name:"小说工具",type:"ios-people",title:"小说工具"},{name:"小说推广链接",type:"ios-people",title:"小说推广链接"},{name:"返回小说推荐",type:"ios-people",title:"返回小说推荐"}]}}},re=ae,ue=Object(c["a"])(re,ne,te,!1,null,null,null);ue.options.__file="Links.vue";var ie=ue.exports,oe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"group-sending"},[t("slider",{attrs:{sliderList:e.sliderList}}),t("div",{staticClass:"wrapper"},[t("router-view")],1)],1)},ce=[],se={name:"gonghao",components:{slider:I},data:function(){return{sliderList:[{name:"群发列表",type:"ios-people",title:"群发列表"}]}}},le=se,de=Object(c["a"])(le,oe,ce,!1,null,null,null);de.options.__file="groupSending.vue";var he=de.exports;a["default"].use(h["a"]);var me=[{path:"/",redirect:"/manage"},{path:"/manage",redirect:"/manage/home"},{path:"/manage/login",name:"登录",component:q},{path:"/manage/home",name:"主页",redirect:"/manage/gonghao"},{path:"/manage/gonghao",component:F,redirect:"/manage/gonghao/tuoguan",children:[{path:"tuoguan",name:"公号托管",component:function(){return t.e("chunk-31e73da4").then(t.bind(null,"092a"))},meta:{index:"tuoguan",content:"tuoguan",requireAuth:!0},children:[{path:"create",name:"接管新公号",component:function(){return t.e("chunk-7bfe2c03").then(t.bind(null,"b20f"))},meta:{index:"tuoguan",content:"tuoguan",requireAuth:!0}},{path:"update",name:"修改公号",component:function(){return t.e("chunk-7bfe2c03").then(t.bind(null,"b20f"))},meta:{index:"tuoguan",content:"tuoguan",requireAuth:!0}},{path:"setting",name:"配置公号",component:function(){return t.e("chunk-fb68f60c").then(t.bind(null,"0f29"))},meta:{index:"tuoguan",content:"tuoguan",requireAuth:!0},children:[{path:"create",name:"配置新规则",component:function(){return t.e("chunk-47708c37").then(t.bind(null,"4d2b"))},meta:{index:"tuoguan",content:"tuoguan",requireAuth:!0}},{path:"update",name:"修改配置",component:function(){return t.e("chunk-47708c37").then(t.bind(null,"4d2b"))},meta:{index:"tuoguan",content:"tuoguan",requireAuth:!0}}]}]},{path:"menu",name:"配置菜单",component:function(){return t.e("chunk-ed1f5ac6").then(t.bind(null,"d7cb"))},meta:{index:"tuoguan",content:"menu",requireAuth:!0},children:[{path:"create",name:"新建菜单",component:function(){return t.e("chunk-1a33f3b7").then(t.bind(null,"f5af"))},meta:{index:"tuoguan",content:"menu",requireAuth:!0}},{path:"update",name:"修改菜单",component:function(){return t.e("chunk-1a33f3b7").then(t.bind(null,"f5af"))},meta:{index:"tuoguan",content:"menu",requireAuth:!0}}]},{path:"message",name:"回复消息",component:function(){return t.e("chunk-1c84def0").then(t.bind(null,"ce3d"))},meta:{index:"tuoguan",content:"message",requireAuth:!0},children:[{path:"create",name:"创建回复消息",component:function(){return t.e("chunk-3e551d38").then(t.bind(null,"389c"))},meta:{index:"tuoguan",content:"message",requireAuth:!0}},{path:"update",name:"编辑回复消息",component:function(){return t.e("chunk-3e551d38").then(t.bind(null,"389c"))},meta:{index:"tuoguan",content:"message",requireAuth:!0}}]},{path:"timingMenu",name:"配置定时菜单",component:function(){return t.e("chunk-684d3d16").then(t.bind(null,"49ad"))},meta:{index:"tuoguan",content:"timingMenu",requireAuth:!0},children:[{path:"create",name:"新建定时菜单",component:function(){return t.e("chunk-3eead5d3").then(t.bind(null,"f27b"))},meta:{index:"tuoguan",content:"timingMenu",requireAuth:!0}},{path:"update",name:"修改定时菜单",component:function(){return t.e("chunk-3eead5d3").then(t.bind(null,"f27b"))},meta:{index:"tuoguan",content:"timingMenu",requireAuth:!0}}]}]},{path:"/manage/weixinTool",component:V,redirect:"/manage/weixinTool/qrCode",children:[{path:"qrCode",name:"参数二维码",component:function(){return t.e("chunk-101a38e0").then(t.bind(null,"bf7b"))},meta:{index:"weixin",content:"qrCode",requireAuth:!0},children:[{path:"create",name:"创建二维码",component:function(){return t.e("chunk-4c4a5fe4").then(t.bind(null,"3899"))},meta:{index:"weixin",content:"qrCode",requireAuth:!0}},{path:"update",name:"编辑二维码",component:function(){return t.e("chunk-4c4a5fe4").then(t.bind(null,"3899"))},meta:{index:"weixin",content:"qrCode",requireAuth:!0}}]},{path:"tag",name:"标签管理",component:function(){return t.e("chunk-c89c71ae").then(t.bind(null,"bbd6"))},meta:{index:"weixin",content:"tag",requireAuth:!0}}]},{path:"/manage/statistics",component:H,redirect:"/manage/statistics/fans",children:[{path:"fans",name:"粉丝数据",meta:{index:"statistics",content:"fans",requireAuth:!0},component:function(){return t.e("chunk-4c170f6e").then(t.bind(null,"2bd5"))}}]},{path:"/manage/msg_view",component:ee,redirect:"/manage/msg_view/guanli",children:[{path:"guanli",name:"消息管理",component:function(){return t.e("chunk-a5f62a6e").then(t.bind(null,"5bc5"))},meta:{index:"msgView",content:"guanli",requireAuth:!0},children:[{path:"create",name:"添加客服消息",meta:{index:"msgView",content:"guanli",requireAuth:!0},component:function(){return t.e("chunk-65ff3daa").then(t.bind(null,"94be"))}},{path:"update",name:"修改客服消息",meta:{index:"msgView",content:"guanli",requireAuth:!0},component:function(){return t.e("chunk-65ff3daa").then(t.bind(null,"94be"))}}]}]},{path:"/manage/links",component:ie,redirect:"/manage/links/novel",children:[{path:"novel",name:"小说链接",component:function(){return t.e("chunk-e98193d6").then(t.bind(null,"e59f"))},meta:{index:"Links",content:"novel",requireAuth:!0},children:[{path:"create",name:"创建小说链接",component:function(){return t.e("chunk-0090bf16").then(t.bind(null,"16185"))},meta:{index:"Links",content:"novel",requireAuth:!0}},{path:"update",name:"修改小说链接",component:function(){return t.e("chunk-0090bf16").then(t.bind(null,"16185"))},meta:{index:"Links",content:"novel",requireAuth:!0}}]},{path:"spread",name:"推广链接",component:function(){return t.e("chunk-36b602c0").then(t.bind(null,"d13c"))},meta:{index:"Links",content:"spread",requireAuth:!0},children:[{path:"create",name:"创建推广链接",component:function(){return t.e("chunk-14eddc66").then(t.bind(null,"3e05"))},meta:{index:"Links",content:"spread",requireAuth:!0}},{path:"update",name:"修改推广链接",component:function(){return t.e("chunk-14eddc66").then(t.bind(null,"3e05"))},meta:{index:"Links",content:"spread",requireAuth:!0}}]},{path:"tools",name:"小说工具",component:function(){return t.e("chunk-3bf5dd86").then(t.bind(null,"98f4"))},meta:{index:"Links",content:"tools",requireAuth:!0}},{path:"transfer",name:"小说推广链接",component:function(){return t.e("chunk-19089acd").then(t.bind(null,"3c87"))},meta:{index:"Links",content:"transfer",requireAuth:!0}},{path:"recommend",name:"返回小说推荐",component:function(){return t.e("chunk-0db778d9").then(t.bind(null,"313b"))},meta:{index:"Links",content:"recommend",requireAuth:!0},children:[{path:"createList",name:"创建小说返回列表",component:function(){return t.e("chunk-016c8c8b").then(t.bind(null,"19c0"))},meta:{index:"Links",content:"recommend",requireAuth:!0}},{path:"updateList",name:"修改小说返回列表",component:function(){return t.e("chunk-016c8c8b").then(t.bind(null,"19c0"))},meta:{index:"Links",content:"recommend",requireAuth:!0}},{path:"createLink",name:"创建小说返回链接",component:function(){return t.e("chunk-085d9cd2").then(t.bind(null,"f725"))},meta:{index:"Links",content:"recommend",requireAuth:!0}},{path:"updateLink",name:"修改小说返回链接",component:function(){return t.e("chunk-085d9cd2").then(t.bind(null,"f725"))},meta:{index:"Links",content:"recommend",requireAuth:!0}}]}]},{path:"/manage/groupSending",component:he,redirect:"/manage/groupSending/groupList",children:[{path:"groupList",name:"群发列表",component:function(){return t.e("chunk-68b6a6b1").then(t.bind(null,"1166"))},meta:{index:"groupSending",content:"groupList"},children:[{path:"send",name:"发送消息",meta:{index:"groupSending",content:"groupList"},component:function(){return t.e("chunk-15aa871d").then(t.bind(null,"56a8"))}}]}]}],pe=new h["a"]({mode:"history",routes:me});pe.beforeEach(function(e,n,t){if(e.matched.some(function(e){return e.meta.requireAuth})){var a=localStorage.getItem("token"),r=JSON.parse(a);a&&(new Date).getTime()-r.time<864e5?t():(alert("信息已过期"),t({path:"/manage/login",query:{redirect:e.fullPath}}))}else t()});var fe=pe,ge=(t("a481"),t("bc3a")),be=t.n(ge);be.a.interceptors.request.use(function(e){return k.state.token&&(e.headers={"Content-Type":"application/x-www-form-urlencoded",authorization:"token ".concat(k.state.token)}),e},function(e){return Promise.reject(e)}),be.a.interceptors.response.use(function(e){return e},function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="错误请求";break;case 401:k.commit(g),"login"!==fe.currentRoute.path&&fe.replace({path:"login",query:{redirect:fe.currentRoute.path}});break;case 403:e.message="拒绝访问";break;case 404:e.message="请求错误,未找到该资源";break;case 405:e.message="请求方法未允许";break;case 408:e.message="请求超时";break;case 500:e.message="服务器端出错";break;case 501:e.message="网络未实现";break;case 502:e.message="网络错误";break;case 503:e.message="服务不可用";break;case 504:e.message="网络超时";break;case 505:e.message="http版本不支持该请求";break;default:e.message="连接错误".concat(e.response.status)}else e.message="连接到服务器失败";return Promise.resolve(e.response)}),be.a.defaults.timeout=1e4;var ke=be.a,ve=t("313e"),xe=t.n(ve),ye=t("e069"),we=t.n(ye);t("dcad");a["default"].config.productionTip=!1,a["default"].prototype.$echarts=xe.a,a["default"].prototype.$axios=ke,a["default"].use(we.a),new a["default"]({router:fe,store:k,axios:ke,render:function(e){return e(d)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";var a=t("d3dd"),r=t.n(a);r.a},"9d60":function(e,n,t){},d30e:function(e,n,t){"use strict";var a=t("fe82"),r=t.n(a);r.a},d3dd:function(e,n,t){},fe82:function(e,n,t){}});
//# sourceMappingURL=app.d543e5ef.js.map