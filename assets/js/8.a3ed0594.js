(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{333:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},334:function(t,e,n){var r=n(17),a="["+n(333)+"]",i=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},335:function(t,e,n){"use strict";var r=n(1),a=n(334).trim;r({target:"String",proto:!0,forced:n(336)("trim")},{trim:function(){return a(this)}})},336:function(t,e,n){var r=n(3),a=n(333);t.exports=function(t){return r((function(){return!!a[t]()||"​᠎"!="​᠎"[t]()||a[t].name!==t}))}},347:function(t,e,n){},348:function(t,e,n){},349:function(t,e,n){},350:function(t,e,n){},351:function(t,e,n){},360:function(t,e,n){"use strict";var r=n(347);n.n(r).a},361:function(t,e,n){"use strict";var r=n(348);n.n(r).a},362:function(t,e,n){"use strict";var r=n(349);n.n(r).a},363:function(t,e,n){"use strict";var r=n(350);n.n(r).a},364:function(t,e,n){"use strict";var r=n(351);n.n(r).a},369:function(t,e,n){"use strict";var r={name:"tContent"},a=(n(360),n(29)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"d38d6844",null);e.a=i.exports},370:function(t,e,n){"use strict";var r={name:"tFooter"},a=(n(361),n(29)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"bf754616",null);e.a=i.exports},371:function(t,e,n){"use strict";var r={name:"tHeader"},a=(n(362),n(29)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"f50eae5e",null);e.a=i.exports},372:function(t,e,n){"use strict";n(43),n(42),n(44);var r={name:"tLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"tSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},a=(n(363),n(29)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"cb126512",null);e.a=i.exports},373:function(t,e,n){"use strict";var r={name:"tSider"},a=(n(364),n(29)),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"sider"},[this._t("default")],2)}),[],!1,null,"6319407b",null);e.a=i.exports},477:function(t,e,n){"use strict";n.r(e);n(30),n(41),n(335);var r=n(369),a=n(370),i=n(371),o=n(372),s=n(373),c={components:{TContent:r.a,TFooter:a.a,THeader:i.a,TLayout:o.a,TSider:s.a},data:function(){return{content:'\n    <t-layout style="color: white; overflow:hidden; margin-bottom:50px;">\n            <t-sider style=" background:#efefef; width:200px; color: black;">\n                sider\n            </t-sider>\n            <t-layout>\n                <t-header style="height: 50px; background:orange;">\n                    header\n                </t-header>\n                <t-content style="height: 100px; background:orangered;">\n                    content\n                </t-content>\n                <t-footer style="height: 50px; background:orange;">\n                    footer\n                </t-footer>\n            </t-layout>\n</t-layout>\n  '.replace(/^ {8}/gm,"").trim()}}},u=n(29),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("简单用法")]),t._v(" "),t._m(0),t._v(" "),n("t-layout",{staticStyle:{color:"white",overflow:"hidden","margin-bottom":"50px"}},[n("t-sider",{staticStyle:{background:"#efefef",width:"200px",color:"black"}},[t._v("\n            sider\n        ")]),t._v(" "),n("t-layout",[n("t-header",{staticStyle:{height:"50px",background:"orange"}},[t._v("\n                header\n            ")]),t._v(" "),n("t-content",{staticStyle:{height:"100px",background:"orangered"}},[t._v("\n                content\n            ")]),t._v(" "),n("t-footer",{staticStyle:{height:"50px",background:"orange"}},[t._v("\n                footer\n            ")])],1)],1),t._v(" "),t._m(1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content"},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.content))])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,null,null);e.default=l.exports}}]);