(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{502:function(t,e,n){"use strict";n.r(e);var r=n(20),c=(n(71),n(219),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("/updates").fetch();case 3:return data=e.sent,r=data.updates.sort((function(a,b){return b.id-a.id})),e.abrupt("return",{items:r});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Updates"}}}),o=n(102),d=n(142),l=n.n(d),v=n(465),_=n(464),f=n(494),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-wrapper",[n("v-card",[n("v-card-title",{domProps:{textContent:t._s(t.$t("updates"))}}),t._v(" "),n("v-simple-table",{attrs:{dense:""}},[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v(t._s(t.$t("date")))]),t._v(" "),n("th",{staticClass:"text-left"},[t._v(t._s(t.$t("content")))])])]),t._v(" "),n("tbody",t._l(t.items,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.date))]),t._v(" "),n("td",[t._v(t._s(e[t.$i18n.locale]))])])})),0)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:v.a,VCardTitle:_.b,VSimpleTable:f.a})}}]);