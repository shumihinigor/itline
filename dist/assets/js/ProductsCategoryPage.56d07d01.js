(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductsCategoryPage"],{"0433":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"row"},t._l(t.categoriesProducts,(function(e,r){return a("div",{key:r,staticClass:"col-lg-4 col-md-6 col-12 mb-32"},[a("div",{staticClass:"h-100",on:{click:function(a){return t.goToProductPage(e)}}},[a("ProductsItem",{attrs:{title:e.title,text:e.product_options.prod_size,image:e.image.url}})],1)])})),0)])},i=[],c=(a("99af"),a("b0c0"),a("73bd")),o={name:"ProductsCategoryPage",props:["id","category_id","category","products","product","categories","categories-products"],components:{ProductsItem:c["a"]},data:function(){return{}},mounted:function(){this.category&&this.initPageBreadcrumbs()},methods:{goToProductPage:function(t){this.$router.push({name:"ProductsPage",params:{id:this.id,category_id:this.category_id,product_id:t.alias}})},initPageBreadcrumbs:function(){var t=[{path:"/",name:"Home",meta:{title:"Главная"}},{path:"/products",name:"Products",meta:{title:"Продукция"}},{path:"/products/".concat(this.id),name:"ProductsCategoryList",meta:{title:this.product.name}},{path:"/products/".concat(this.id,"/").concat(this.category_id),name:"ProductsCategoryPage",meta:{title:this.category.title}}];this.$store.commit("changeBreadcrumbs",t)}},destroyed:function(){this.$store.commit("changeBreadcrumbs",[])}},n=o,s=(a("52d2"),a("2877")),u=Object(s["a"])(n,r,i,!1,null,null,null);e["default"]=u.exports},"0976":function(t,e,a){"use strict";a("40e1")},"40e1":function(t,e,a){},"52d2":function(t,e,a){"use strict";a("eff5")},"73bd":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-item"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.image,expression:"image",arg:"background-image"}],staticClass:"product-image"}),a("div",{staticClass:"product-block"},[t.title?a("h6",{staticClass:"h6 product-title text-uppercase font-weight-bold mb-0",domProps:{innerHTML:t._s(t.title)}}):t._e(),t.text?a("p",{staticClass:"p2 mt-2 mb-0 d-flex justify-content-between"},[a("span",{staticClass:"me-2"},[t._v(t._s(t.text.caption)+":")]),a("span",[t._v(t._s(t.text.value+t.text.measure_unit))])]):t._e(),t.price?a("h4",{staticClass:"h4 font-weight-bold mb-0 mt-2"},[t._v(t._s(t.price)+" ₽")]):t._e()])])},i=[],c={props:["title","text","image","price"]},o=c,n=(a("0976"),a("2877")),s=Object(n["a"])(o,r,i,!1,null,null,null);e["a"]=s.exports},"99af":function(t,e,a){"use strict";var r=a("23e7"),i=a("d039"),c=a("e8b5"),o=a("861d"),n=a("7b0b"),s=a("50c4"),u=a("8418"),d=a("65f0"),l=a("1dde"),m=a("b622"),p=a("2d00"),g=m("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",b=p>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),v=l("concat"),_=function(t){if(!o(t))return!1;var e=t[g];return void 0!==e?!!e:c(t)},y=!b||!v;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,r,i,c,o=n(this),l=d(o,0),m=0;for(e=-1,r=arguments.length;e<r;e++)if(c=-1===e?o:arguments[e],_(c)){if(i=s(c.length),m+i>f)throw TypeError(h);for(a=0;a<i;a++,m++)a in c&&u(l,m,c[a])}else{if(m>=f)throw TypeError(h);u(l,m++,c)}return l.length=m,l}})},b0c0:function(t,e,a){var r=a("83ab"),i=a("9bf2").f,c=Function.prototype,o=c.toString,n=/^\s*function ([^ (]*)/,s="name";r&&!(s in c)&&i(c,s,{configurable:!0,get:function(){try{return o.call(this).match(n)[1]}catch(t){return""}}})},eff5:function(t,e,a){}}]);
//# sourceMappingURL=ProductsCategoryPage.56d07d01.js.map