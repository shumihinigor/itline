(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GalleryPage"],{"06da":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gallery-page mb-80"},[t.loading?n("Preloader"):n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12"},[n("h1",{staticClass:"h1 mb-32"},[t._v(t._s(t.gallery.title))])])])])],1)},i=[],s=(n("7db0"),n("b078")),r={name:"GalleryPage",components:{Preloader:s["a"]},data:function(){return{gallery:{},loading:!0}},created:function(){this.getGallery(this.$route.query.id)},methods:{getGallery:function(t){var e=this;this.axios.get("/static/about_gallery.json").then((function(n){e.gallery=n.data.data.find((function(e){return e.id==t})),e.loading=!1}))}}},l=r,c=(n("c40e"),n("2877")),o=Object(c["a"])(l,a,i,!1,null,null,null);e["default"]=o.exports},"29d8":function(t,e,n){"use strict";n("5fc1")},"35ab":function(t,e,n){},"5fc1":function(t,e,n){},"7db0":function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").find,s=n("44d2"),r=n("ae40"),l="find",c=!0,o=r(l);l in[]&&Array(1)[l]((function(){c=!1})),a({target:"Array",proto:!0,forced:c||!o},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s(l)},b078:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"loader"})])])])}],s={},r=s,l=(n("29d8"),n("2877")),c=Object(l["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},c40e:function(t,e,n){"use strict";n("35ab")}}]);
//# sourceMappingURL=GalleryPage.dbd032df.js.map