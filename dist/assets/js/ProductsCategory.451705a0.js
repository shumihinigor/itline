(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductsCategory"],{ee58:function(t,i,o){"use strict";o.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"product-page mb-80"},[t.loading?a("Preloader"):a("div",{staticClass:"container"},[a("div",{staticClass:"row mb-64"},[a("div",{staticClass:"col"},[a("h1",{staticClass:"h1 mb-0"},[t._v(t._s(t.product.title))])])]),a("div",{staticClass:"row mb-32"},[a("div",{staticClass:"col"},[t.product.swiper.length?a("SwiperProduct",{attrs:{slides:t.product.swiper}}):t._e()],1)]),a("div",{staticClass:"row mb-80 main-content"},[a("div",{staticClass:"col-lg-3 col-12"},[a("ProductsFilter",{staticClass:"sidebar",attrs:{products:t.products},on:{change:t.changeFilter}})],1),a("div",{staticClass:"col-lg-9 col-12"},[a("div",{staticClass:"content"},[a("div",{staticClass:"row"},t._l(t.product.categories,(function(i,o){return a("div",{key:o,staticClass:"col-lg-4 col-md-6 col-12 mb-32"},[a("div",{on:{click:function(o){return t.goToProductCategoryPage(i)}}},[a("ProductsItem",{attrs:{title:i.title,text:i.text,image:i.image}})],1)])})),0)])])]),t.product.content.image?a("div",{staticClass:"row mb-80"},[a("div",{staticClass:"col"},[a("img",{staticClass:"w-100",attrs:{src:o("7584")("./"+t.product.content.image)}})])]):t._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("SwiperProductCategory",{attrs:{products:t.products},on:{change:t.changeCategory}})],1)])])],1)},s=[],c=(o("7db0"),o("d3b7"),o("b078")),e=o("ea36"),r=o("73bd"),d=o("dbb7"),n=o("86dc"),u=o("f6d0"),l=o("6bad"),p=o.n(l),g={name:"ProductsCategory",props:["id"],components:{Preloader:c["a"],SwiperProduct:d["a"],SwiperProductCategory:n["a"],ProductsFilter:e["a"],ProductsItem:r["a"]},mixins:[u["a"]],data:function(){return{products:[],product:{},loading:!0}},created:function(){this.getProduct(this.id)},methods:{goToProductCategoryPage:function(t){this.$router.push({name:"ProductsCategoryPage",params:{id:this.product.id,category_id:t.id}})},initSidebar:function(){setTimeout((function(){new p.a(".sidebar",{topSpacing:92,bottomSpacing:0,containerSelector:".main-content"})}),0)},getProduct:function(t){var i=this;this.loading=!0,this.axios.get("/static/products.json").then((function(o){if("undefined"==t)return Promise.reject();i.products=o.data.data,i.product=i.products.find((function(i){return i.id==t})),i.loading=!1,window.innerWidth>991&&i.initSidebar()})).catch((function(t){i.$router.push({name:"PageNotFound"})}))}}},m=g,C=o("2877"),b=Object(C["a"])(m,a,s,!1,null,null,null);i["default"]=b.exports}}]);
//# sourceMappingURL=ProductsCategory.451705a0.js.map