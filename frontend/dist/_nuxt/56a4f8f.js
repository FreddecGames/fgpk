(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{264:function(t,r,e){"use strict";e.r(r);var n={props:["value"],computed:{time:function(){var t=this.value;if(t<1)return"1s >";var r=Math.floor(t/86400),e=Math.floor(t/3600)%24;e<10&&(e="0"+e);var n=Math.floor(t/60)%60;n<10&&(n="0"+n);var s=Math.floor(t%60);return s<10&&(s="0"+s),t=r>0?r+this.$t("word_days")+" "+e+":"+n+":"+s:e+":"+n+":"+s},years:function(){return Math.floor(4*this.value/365)},days:function(){return Math.floor(4*this.value-365*this.years)}}},o=e(61),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("span",[t._v(t._s(t.time)+" - "),t.years>0?e("span",[t._v(t._s(t.years)+"y")]):t._e(),t._v(" "),e("span",[t._v(t._s(t.days)+"d")])])}),[],!1,null,null,null);r.default=component.exports}}]);