(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{333:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},334:function(t,n,e){var r=e(17),a="["+e(333)+"]",i=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),s=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(o,"")),e}};t.exports={start:s(1),end:s(2),trim:s(3)}},335:function(t,n,e){"use strict";var r=e(1),a=e(334).trim;r({target:"String",proto:!0,forced:e(336)("trim")},{trim:function(){return a(this)}})},336:function(t,n,e){var r=e(3),a=e(333);t.exports=function(t){return r((function(){return!!a[t]()||"​᠎"!="​᠎"[t]()||a[t].name!==t}))}},347:function(t,n,e){},348:function(t,n,e){},349:function(t,n,e){},350:function(t,n,e){},351:function(t,n,e){},360:function(t,n,e){"use strict";var r=e(347);e.n(r).a},361:function(t,n,e){"use strict";var r=e(348);e.n(r).a},362:function(t,n,e){"use strict";var r=e(349);e.n(r).a},363:function(t,n,e){"use strict";var r=e(350);e.n(r).a},364:function(t,n,e){"use strict";var r=e(351);e.n(r).a},369:function(t,n,e){"use strict";var r={name:"tContent"},a=(e(360),e(29)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"d38d6844",null);n.a=i.exports},370:function(t,n,e){"use strict";var r={name:"tFooter"},a=(e(361),e(29)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"bf754616",null);n.a=i.exports},371:function(t,n,e){"use strict";var r={name:"tHeader"},a=(e(362),e(29)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"f50eae5e",null);n.a=i.exports},372:function(t,n,e){"use strict";e(43),e(42),e(44);var r={name:"tLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(n){"tSider"===n.$options.name&&(t.layoutClass.hasSider=!0)}))}},a=(e(363),e(29)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"cb126512",null);n.a=i.exports},373:function(t,n,e){"use strict";var r={name:"tSider"},a=(e(364),e(29)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"sider"},[this._t("default")],2)}),[],!1,null,"6319407b",null);n.a=i.exports},473:function(t,n,e){"use strict";e.r(n);e(30),e(41),e(335);var r=e(369),a=e(370),i=e(371),o=e(372),s=e(373),c={components:{TContent:r.a,TFooter:a.a,THeader:i.a,TLayout:o.a,TSider:s.a},data:function(){return{content:'\n    <t-layout style="color: white; margin-bottom:50px;">\n            <t-header style="height: 50px; background:orange;">\n                header\n            </t-header>\n            <t-content style="height: 100px; background:orangered;">\n                content\n            </t-content>\n            <t-footer style="height: 50px; background:orange;">\n                footer\n            </t-footer>\n</t-layout>\n  '.replace(/^ {8}/gm,"").trim()}}},u=e(29),l=Object(u.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("简单用法")]),t._v(" "),t._m(0),t._v(" "),e("t-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[e("t-header",{staticStyle:{height:"50px",background:"orange"}},[t._v("\n            header\n        ")]),t._v(" "),e("t-content",{staticStyle:{height:"100px",background:"orangered"}},[t._v("\n            content\n        ")]),t._v(" "),e("t-footer",{staticStyle:{height:"50px",background:"orange"}},[t._v("\n            footer\n        ")])],1),t._v(" "),t._m(1),t._v(" "),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content"},[e("div",{staticClass:"code-content-height"},[e("pre",[e("code",{staticClass:"html"},[t._v(t._s(t.content))])])])])],1)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,null,null);n.default=l.exports}}]);