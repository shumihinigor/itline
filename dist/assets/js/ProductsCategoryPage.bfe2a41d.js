(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductsCategoryPage"],{"0433":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t.categoriesProducts.length?s("div",{staticClass:"row row-cols-1 row-cols-lg-3 row-cols-md-2"},t._l(t.categoriesProducts,(function(e,a){return s("div",{key:a,class:["mb-32",{"w-100":e.childs}]},[e.childs?s("div",[s("h3",{staticClass:"h3 mb-24",domProps:{innerHTML:t._s(e.params.title)}}),s("div",{staticClass:"mb-24",domProps:{innerHTML:t._s(e.params.text)}}),s("div",{staticClass:"row"},t._l(e.childs,(function(e,a){return s("div",{key:a,staticClass:"col-lg-4 col-md-6 col-12 mb-32"},[s("div",{staticClass:"h-100",on:{click:function(s){return t.goToProductPage(e.params)}}},[s("ProductsItem",{attrs:{title:e.params.title,text:e.params.product_options?e.params.product_options.prod_size:"",image:e.params.image.url}})],1)])})),0)]):s("div",{staticClass:"h-100"},[s("div",{staticClass:"h-100",on:{click:function(s){return t.goToProductPage(e.params)}}},[s("ProductsItem",{attrs:{title:e.params.title,text:e.params.product_options?e.params.product_options.prod_size:"",image:e.params.image.url}})],1)])])})),0):s("div",{staticClass:"row justify-content-end"},[s("div",{staticClass:"col-lg-8 col-12"},[s("Form",{attrs:{policy:!1,id:"product-category-page","theme-form":"light"}})],1)])])},i=[],o=(s("99af"),s("73bd")),r=s("ec11"),c=s("8477"),n={name:"ProductsCategoryPage",props:["id","category_id","category","products","product","categories","categories-products"],components:{ProductsItem:o["a"],NothingFound:r["a"],Form:c["a"]},data:function(){return{}},updated:function(){this.$store.commit("setSeoTitle",this.category.seo_title),this.$store.commit("setSeoDescription",this.category.short_description)},mounted:function(){this.category&&this.initPageBreadcrumbs()},methods:{goToProductPage:function(t){this.$router.push({name:"ProductsPage",params:{id:this.id,category_id:this.category_id,product_id:t.alias}})},initPageBreadcrumbs:function(){var t=[{path:"/",name:"Home",meta:{title:"Главная"}},{path:"/products",name:"Products",meta:{title:"Продукция"}},{path:"/products/".concat(this.id),name:"ProductsCategoryList",meta:{title:this.product.title}},{path:"/products/".concat(this.id,"/").concat(this.category_id),name:"ProductsCategoryPage",meta:{title:this.category.title}}];this.$store.commit("changeBreadcrumbs",t)}},destroyed:function(){this.$store.commit("changeBreadcrumbs",[])}},u=n,d=(s("52d2"),s("2877")),l=Object(d["a"])(u,a,i,!1,null,null,null);e["default"]=l.exports},"0976":function(t,e,s){"use strict";s("40e1")},"40e1":function(t,e,s){},"52d2":function(t,e,s){"use strict";s("eff5")},"73bd":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-item"},[s("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.image,expression:"image",arg:"background-image"}],staticClass:"product-image"}),s("div",{staticClass:"product-block"},[t.title?s("h6",{staticClass:"h6 product-title text-uppercase font-weight-bold mb-0",domProps:{innerHTML:t._s(t.title)}}):t._e(),t.text?s("p",{staticClass:"p2 mt-2 mb-0 d-flex justify-content-between"},[s("span",{staticClass:"me-2"},[t._v(t._s(t.text.caption)+":")]),s("span",[t._v(t._s(t.text.value+t.text.measure_unit))])]):t._e(),t.price?s("h4",{staticClass:"h4 font-weight-bold mb-0 mt-2"},[t._v(t._s(t.price)+" ₽")]):t._e()])])},i=[],o={props:["title","text","image","price"]},r=o,c=(s("0976"),s("2877")),n=Object(c["a"])(r,a,i,!1,null,null,null);e["a"]=n.exports},"99af":function(t,e,s){"use strict";var a=s("23e7"),i=s("d039"),o=s("e8b5"),r=s("861d"),c=s("7b0b"),n=s("50c4"),u=s("8418"),d=s("65f0"),l=s("1dde"),p=s("b622"),m=s("2d00"),g=p("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",v=m>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),_=l("concat"),b=function(t){if(!r(t))return!1;var e=t[g];return void 0!==e?!!e:o(t)},C=!v||!_;a({target:"Array",proto:!0,forced:C},{concat:function(t){var e,s,a,i,o,r=c(this),l=d(r,0),p=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?r:arguments[e],b(o)){if(i=n(o.length),p+i>h)throw TypeError(f);for(s=0;s<i;s++,p++)s in o&&u(l,p,o[s])}else{if(p>=h)throw TypeError(f);u(l,p++,o)}return l.length=p,l}})},cf57:function(t,e,s){},d70e:function(t,e,s){"use strict";s("cf57")},ec11:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nothing-found"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h1",{staticClass:"nothing-found__title"},[t._v("Ничего не найдено")]),s("h3",{staticClass:"h3 text-grey-2 mb-32"},[t._v("Результатов поиска нет :(")]),s("button",{staticClass:"btn default",on:{click:function(e){return t.$router.push({name:t.pushName||"Home"})}}},[s("span",{staticClass:"text-uppercase p4"},[t._v("Вернуться назад")])])])])])])},i=[],o={props:["pushName"]},r=o,c=(s("d70e"),s("2877")),n=Object(c["a"])(r,a,i,!1,null,null,null);e["a"]=n.exports},eff5:function(t,e,s){}}]);
//# sourceMappingURL=ProductsCategoryPage.bfe2a41d.js.map