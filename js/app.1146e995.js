(function(n,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["master-app"]=e():n["master-app"]=e()})(window,(function(){return function(n){function e(e){for(var o,i,u=e[0],c=e[1],f=e[2],l=0,s=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&s.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);p&&p(e);while(s.length)s.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],o=!0,u=1;u<t.length;u++){var c=t[u];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/vue-cli-plugin-qiankun/";var u=window["webpackJsonp_master"]=window["webpackJsonp_master"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=c;return a.push([0,"chunk-vendors"]),t()}({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"container"}},[t("header",[t("nav",[t("ol",n._l(n.apps,(function(e){return t("li",{key:e.name},[t("a",{on:{click:function(t){return n.goto(e.name,e.href)}}},[n._v(n._s(e.name))])])})),0)])]),n.loading?t("div",[n._v("loading")]):n._e(),t("div",{staticClass:"appContainer",domProps:{innerHTML:n._s(n.content)}})])},a=[],i=(t("d81d"),t("2ca0"),t("5530")),u=t("545b"),c=t("07ec"),f=function(n){return function(e){return e.pathname.startsWith(n)}},p=[{name:"foo-app",entry:"/vue-cli-plugin-qiankun/foo-app",href:"/vue-cli-plugin-qiankun/foo-app"},{name:"bar-app",entry:"/vue-cli-plugin-qiankun/bar-app",href:"/vue-cli-plugin-qiankun/bar-app"}],l={name:"master",data:function(){var n=this;return{loading:!1,content:null,apps:p.map((function(e){return Object(i["a"])({},e,{render:n.render,activeRule:f(e.href)})}))}},created:function(){window.__POWERED_BY_QIANKUN__?location.reload():this.initQiankun()},methods:{goto:function(n,e){window.history.pushState({},n,e)},render:function(n){var e=n.appContent,t=n.loading;this.content=e,this.loading=t},initQiankun:function(){var n=this.apps;Object(u["a"])(n,{beforeLoad:[function(n){console.log("before load",n)}],beforeMount:[function(n){console.log("before mount",n)}],afterUnmount:[function(n){console.log("after unload",n)}]});var e=n[0]||{};Object(c["b"])(e.href),Object(c["a"])((function(){console.info("first app mounted")})),Object(u["b"])({prefetch:!0})}}},s=l,d=(t("ffa3"),t("2877")),b=Object(d["a"])(s,r,a,!1,null,"ffdeadbc",null),v=b.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(n){return n(v)}}).$mount("#app")},7346:function(n,e,t){},ffa3:function(n,e,t){"use strict";var o=t("7346"),r=t.n(o);r.a}})}));