(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,4],{215:function(t,e,n){var content=n(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("ee7c2cca",content,!0,{sourceMap:!1})},216:function(t,e,n){var content=n(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("506e4665",content,!0,{sourceMap:!1})},217:function(t,e,n){"use strict";n(215)},218:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.button-default[data-v-a873d42a]{\n  background-color:beige;\n  padding:1rem 2rem;\n  border-radius:8px;\n  font-size:2rem;\n  margin:1rem\n}\n.color-red[data-v-a873d42a]{\n  background-color:#ddd\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},220:function(t,e,n){"use strict";n.r(e);var o={props:["itemStatus"]},r=(n(217),n(15)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"button button-default",class:{"color-red":t.itemStatus}},[n("p",{staticClass:"text"},[t._t("default",(function(){return[t._v("default")]}))],2)])])}),[],!1,null,"a873d42a",null);e.default=component.exports},222:function(t,e,n){"use strict";n(216)},223:function(t,e,n){var o=n(26)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\nh1[data-v-74be0288]{\n  color:#41c1de;\n  font-size:1.5rem\n}\nh2[data-v-74be0288]{\n  color:red;\n  font-size:1.2rem\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},227:function(t,e,n){"use strict";n.r(e);var o={props:{propsMessage:{type:String,default:"ハロー！"}}},r=(n(222),n(15)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AtomButtonsButtonDefault",{attrs:{itemStatus:"false"}},[t._v("\n    click!\n  ")])],1)}),[],!1,null,"74be0288",null);e.default=component.exports;installComponents(component,{AtomButtonsButtonDefault:n(220).default})},234:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{message:"/members/indexのページです",myMessage:"この文はpropsで子に渡した文字です"}}},r=n(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{attrs:{to:"/"}},[t._v("ホーム画面へ")]),t._v(" "),n("p",[t._v(t._s(t.message))]),t._v(" "),n("div",[t._v("エリア１")]),t._v(" "),n("div",[t._v("エリア2")]),t._v(" "),n("Mountains",{attrs:{propsMessage:t.myMessage}}),t._v(" "),n("Mountains",{scopedSlots:t._u([{key:"title",fn:function(){},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Mountains:n(227).default})}}]);