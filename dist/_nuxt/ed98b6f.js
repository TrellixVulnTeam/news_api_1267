(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{233:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(45),n(8),n(58),n(59),{data:function(){return{newText:"好きな文字を入力してね",click:"クリックしてね",counter:0,number:1234567890,nuxt:"Hello Nuxt!",albums:[],show:!1}},transition:{name:"fade"},methods:{countUp:function(){this.counter+=1}},filters:{addComma:function(t){return t.toLocaleString()}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/albums").then((function(t){return t.json()}));case 2:t.albums=e.sent;case 3:case"end":return e.stop()}}),e)})))()})),getSomething:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://jsonplaceholder.typicode.com/posts");case 2:n=e.sent,t.posts=JSON.parse(n.posts);case 4:case"end":return e.stop()}}),e)})))()}}),c=n(15),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-300"},[n("NuxtLink",{attrs:{to:"/"}},[t._v("ホーム画面へ")]),t._v(" "),n("h1",{staticClass:"font-bold"},[t._v("このサイトについて")]),t._v(" "),n("h2",[t._v(t._s(t.nuxt))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newText,expression:"newText"}],attrs:{type:"text"},domProps:{value:t.newText},on:{input:function(e){e.target.composing||(t.newText=e.target.value)}}}),t._v(" "),n("p",[t._v(t._s(t.newText))]),t._v(" "),n("button",{on:{click:t.countUp}},[t._v(t._s(t.click))]),t._v(" "),n("p",[t._v(t._s(t.counter))]),t._v(" "),n("button",{on:{click:function(e){t.show=!t.show}}},[t._v(t._s(t.click)+"2")]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("p",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("Nuxt.js")])]),t._v(" "),n("p",[t._v(t._s(t.albums))])],1)}),[],!1,null,null,null);e.default=component.exports}}]);