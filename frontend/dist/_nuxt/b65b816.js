(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{264:function(t,e,l){"use strict";l.r(e);var n={props:["value"],computed:{time:function(){var t=this.value;if(t<1)return"1s >";var e=Math.floor(t/86400),l=Math.floor(t/3600)%24;l<10&&(l="0"+l);var n=Math.floor(t/60)%60;n<10&&(n="0"+n);var s=Math.floor(t%60);return s<10&&(s="0"+s),t=e>0?e+this.$t("word_days")+" "+l+":"+n+":"+s:l+":"+n+":"+s},years:function(){return Math.floor(4*this.value/365)},days:function(){return Math.floor(4*this.value-365*this.years)}}},r=l(61),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.time))])}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,l){"use strict";l.r(e);var n={props:["value"]},r=l(61),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("small",["Infinity"==t.value||t.value<0?l("span",{staticClass:"text-normal"},[t._v("---")]):t._e(),t._v(" "),"Infinity"!=t.value&&t.value>0?l("FormatTime",{attrs:{value:t.value}}):t._e(),t._v(" "),0==t.value?l("span",[l("i",{staticClass:"fas fa-fw fa-check text-success"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatTime:l(264).default})}}]);