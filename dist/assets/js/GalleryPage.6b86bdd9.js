(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GalleryPage"],{"06da":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery-page mb-80"},[t.loading?a("Preloader"):t.galleryPage.images&&t.galleryPage.images.length?a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center mb-40"},[a("div",{staticClass:"col-12"},[a("h1",{staticClass:"h1 mb-0"},[t._v(t._s(t.galleryPage.title))])])]),a("div",{staticClass:"row"},t._l(t.galleryPage.images,(function(e,n){return a("div",{key:n,class:["col-12 mb-24","col-lg-4"]},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e,expression:"item",arg:"background-image"}],staticClass:"gallery-page__image",on:{click:function(e){t.index=n}}})])})),0),a("CoolLightBox",{attrs:{items:t.galleryPage.images,index:t.index,effect:"fade"},on:{close:function(e){t.index=null}}})],1):a("NothingFound",{attrs:{"push-name":"About"}})],1)},s=[],i=a("5530"),l=a("b078"),c=a("ec11"),o=a("5547"),r=(a("2223"),a("2f62")),u=Object(r["a"])("gallery"),g=(u.mapMutations,u.mapGetters),d=u.mapActions,m={name:"GalleryPage",props:["id"],components:{Preloader:l["a"],CoolLightBox:o["a"],NothingFound:c["a"]},data:function(){return{loading:!0,index:null}},computed:Object(i["a"])({},g(["galleryPage"])),created:function(){var t=this;this.getGalleryPage(this.id).then((function(){return t.loading=!1}))},methods:Object(i["a"])({},d(["getGalleryPage"])),destroyed:function(){this.$store.commit("changeBreadcrumbs",[])}},f=m,p=(a("c40e"),a("2877")),h=Object(p["a"])(f,n,s,!1,null,null,null);e["default"]=h.exports},"35ab":function(t,e,a){},c40e:function(t,e,a){"use strict";a("35ab")},cf57:function(t,e,a){},d70e:function(t,e,a){"use strict";a("cf57")},ec11:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nothing-found"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",{staticClass:"nothing-found__title"},[t._v("Ничего не найдено")]),a("h3",{staticClass:"h3 text-grey-2 mb-32"},[t._v("Результатов поиска нет :(")]),a("button",{staticClass:"btn default",on:{click:function(e){return t.$router.push({name:t.pushName||"Home"})}}},[a("span",{staticClass:"text-uppercase p4"},[t._v("Вернуться назад")])])])])])])},s=[],i={props:["pushName"]},l=i,c=(a("d70e"),a("2877")),o=Object(c["a"])(l,n,s,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=GalleryPage.6b86bdd9.js.map