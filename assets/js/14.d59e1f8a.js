(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{333:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},334:function(t,e,n){var r=n(17),a="["+n(333)+"]",o=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),i=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:i(1),end:i(2),trim:i(3)}},335:function(t,e,n){"use strict";var r=n(1),a=n(334).trim;r({target:"String",proto:!0,forced:n(336)("trim")},{trim:function(){return a(this)}})},336:function(t,e,n){var r=n(3),a=n(333);t.exports=function(t){return r((function(){return!!a[t]()||"​᠎"!="​᠎"[t]()||a[t].name!==t}))}},340:function(t,e,n){"use strict";var r=n(7),a=n(4),o=n(64),s=n(13),i=n(5),c=n(20),l=n(100),u=n(31),f=n(3),d=n(21),p=n(45).f,v=n(19).f,h=n(8).f,g=n(334).trim,m=a.Number,_=m.prototype,w="Number"==c(d(_)),C=function(t){var e,n,r,a,o,s,i,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(43===(e=(l=g(l)).charCodeAt(0))||45===e){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+l}for(s=(o=l.slice(2)).length,i=0;i<s;i++)if((c=o.charCodeAt(i))<48||c>a)return NaN;return parseInt(o,r)}return+l};if(o("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var b,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(w?f((function(){_.valueOf.call(n)})):"Number"!=c(n))?l(new m(C(e)),n,N):C(e)},x=r?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;x.length>E;E++)i(m,b=x[E])&&!i(N,b)&&h(N,b,v(m,b));N.prototype=_,_.constructor=N,s(a,"Number",N)}},345:function(t,e,n){},346:function(t,e,n){},355:function(t,e,n){"use strict";var r=n(1),a=n(3),o=n(46),s=n(6),i=n(15),c=n(14),l=n(65),u=n(102),f=n(47),d=n(2),p=n(103),v=d("isConcatSpreadable"),h=p>=51||!a((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=f("concat"),m=function(t){if(!s(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)};r({target:"Array",proto:!0,forced:!h||!g},{concat:function(t){var e,n,r,a,o,s=i(this),f=u(s,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?s:arguments[e],m(o)){if(d+(a=c(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<a;n++,d++)n in o&&l(f,d,o[n])}else{if(d>=9007199254740991)throw TypeError("Maximum allowed index exceeded");l(f,d++,o)}return f.length=d,f}})},358:function(t,e,n){"use strict";var r=n(345);n.n(r).a},359:function(t,e,n){"use strict";var r=n(346);n.n(r).a},367:function(t,e,n){"use strict";n(43),n(99),n(340),n(44);var r={name:"tioneRow",props:{gutter:{type:[String,Number]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},computed:{rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]},rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}}},mounted:function(){var t=this;this.$children.forEach((function(e){e.gutter=t.gutter}))}},a=(n(358),n(29)),o=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"2e6167f4",null);e.a=o.exports},368:function(t,e,n){"use strict";n(355),n(43),n(99),n(340),n(66),n(44);var r=n(32),a=function(t){var e=Object.keys(t),n=!0;return e.forEach((function(t){["span","offset","ipad","narrow","pc","wide"].indexOf(t)>=0||(n=!1)})),n},o={name:"tioneCol",props:{span:{type:[String,Number]},offset:{type:[String,Number]},ipad:{type:Object,validator:a},narrow:{type:Object,validator:a},pc:{type:Object,validator:a},wide:{type:Object,validator:a}},computed:{colClass:function(){var t=this.span,e=this.offset,n=this.ipad,a=this.narrow,o=this.pc,s=this.wide,i=this.creteClasses;return[].concat(Object(r.a)(i({span:t,offset:e})),Object(r.a)(i(n,"ipad-")),Object(r.a)(i(a,"narrow-pc-")),Object(r.a)(i(o,"pc-")),Object(r.a)(i(s,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}},data:function(){return{gutter:0}},methods:{creteClasses:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var n=[];return t.span&&n.push("col-".concat(e).concat(t.span)),t.offset&&n.push("offset-".concat(e).concat(t.offset)),n}}},s=(n(359),n(29)),i=Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"755c34fa",null);e.a=i.exports},392:function(t,e,n){},452:function(t,e,n){"use strict";var r=n(392);n.n(r).a},472:function(t,e,n){"use strict";n.r(e);n(30),n(41),n(335);var r=n(367),a=n(368),o={components:{TRow:r.a,TCol:a.a},data:function(){return{content:'\n      * {\n        box-sizing: border-box;\n      }\n\n      <t-row class="demoRow" gutter="10">\n        <t-col span="8" offset="8">\n            <div class="demoCol">8</div>\n        </t-col>\n        <t-col span="8">\n            <div class="demoCol">8</div>\n        </t-col>\n    </t-row>\n    <t-row class="demoRow" gutter="10">\n        <t-col span="6" offset="6">\n            <div class="demoCol">6</div>\n        </t-col>\n        <t-col span="6">\n            <div class="demoCol">6</div>\n        </t-col>\n        <t-col span="6">\n            <div class="demoCol">6</div>\n        </t-col>\n    </t-row>\n  '.replace(/^ {8}/gm,"").trim()}}},s=(n(452),n(29)),i=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v(" 设置空隙")]),t._v(" "),t._m(0),t._v(" "),n("t-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("t-col",{attrs:{span:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),n("t-col",{attrs:{span:"8",offset:"8"}},[n("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),n("t-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[n("t-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("t-col",{attrs:{span:"6",offset:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),n("t-col",{attrs:{span:"6"}},[n("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),t._m(1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content"},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.content))])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,"c265ea60",null);e.default=i.exports}}]);