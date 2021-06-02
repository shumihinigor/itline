(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductsPage"],{"0ebe":function(t,a,s){},"16b8":function(t,a,s){var e={"./amount_1.svg":"f3a6","./amount_2.svg":"57db","./amount_3.svg":"aa87","./amount_4.svg":"34cc"};function r(t){var a=i(t);return s(a)}function i(t){if(!s.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}r.keys=function(){return Object.keys(e)},r.resolve=i,t.exports=r,r.id="16b8"},"218c":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"product-page mb-80"},[t.loading?e("Preloader"):e("div",{staticClass:"container"},[e("div",{staticClass:"row mb-32"},[e("div",{staticClass:"col"},[e("h1",{staticClass:"h1 mb-0",domProps:{innerHTML:t._s(t.productInfo.title)}})])]),t.productInfo.short_description?e("div",{staticClass:"row mb-24"},[e("div",{staticClass:"col"},[e("p",{staticClass:"p4 text-grey-3 mb-0",domProps:{innerHTML:t._s(t.productInfo.short_description)}})])]):t._e(),e("div",{staticClass:"row mb-24"},[e("div",{staticClass:"col-lg-4 col-12 mb-32"},[e("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.productInfo.image.url,expression:"productInfo.image.url",arg:"background-image"}],staticClass:"product-page__image"})]),e("div",{staticClass:"col-lg-4 col-12 mb-32"},[t.productInfo.state?e("div",{staticClass:"product-page__state mb-24"},[e("div",{staticClass:"product-page__state-stock mr-24"},[t.productInfo.state.in_stock?e("span",{staticClass:"d-flex align-items-center"},[e("svg",{attrs:{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("circle",{attrs:{cx:"22",cy:"22",r:"21.5",fill:"#fff",stroke:"#E0E0E0"}}),e("path",{attrs:{d:"M10.44 22.553a1.5 1.5 0 012.12 0l9.193 9.192a1.5 1.5 0 11-2.121 2.122l-9.193-9.193a1.5 1.5 0 010-2.121z",fill:"#EF6F2E"}}),e("path",{attrs:{d:"M20.365 33.584a1.5 1.5 0 01-.549-2.05l12-20.784a1.5 1.5 0 112.598 1.5l-12 20.785a1.5 1.5 0 01-2.049.549z",fill:"#EF6F2E"}})]),e("p",{staticClass:"p2 mb-0 ml-16"},[t._v("Товар на складе")])]):e("span",{staticClass:"d-flex align-items-center"},[e("svg",{attrs:{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[e("circle",{attrs:{cx:"22",cy:"22",r:"21.5",fill:"#fff",stroke:"#E0E0E0"}}),e("path",{attrs:{d:"M12.44 31.531a1.5 1.5 0 010-2.121l16.97-16.97a1.5 1.5 0 112.121 2.12l-16.97 16.971a1.5 1.5 0 01-2.122 0z",fill:"#E0E0E0"}}),e("path",{attrs:{d:"M31.533 31.531a1.5 1.5 0 01-2.121 0l-16.97-16.97a1.5 1.5 0 012.12-2.122l16.971 16.97a1.5 1.5 0 010 2.122z",fill:"#E0E0E0"}})]),e("p",{staticClass:"p2 mb-0 ml-16"},[t._v("Товара нет на складе")])])]),t.productInfo.state.in_stock?e("div",{staticClass:"product-page__state-amount"},[e("span",{staticClass:"d-flex align-items-center"},[e("img",{attrs:{src:s("16b8")("./amount_"+t.productInfo.state.amount+".svg"),alt:"amount"}}),4==t.productInfo.state.amount?e("p",{staticClass:"p2 mb-0 ml-16"},[t._v("Много")]):3==t.productInfo.state.amount?e("p",{staticClass:"p2 mb-0 ml-16"},[t._v("Достаточно")]):2==t.productInfo.state.amount?e("p",{staticClass:"p2 mb-0 ml-16"},[t._v("Мало")]):e("p",{staticClass:"p2 mb-0 ml-16"},[t._v("Очень мало")])])]):t._e()]):t._e(),t.productInfo.stock?e("div",{staticClass:"product-page__stock"},[e("h6",{staticClass:"h6 text-orange text-uppercase mb-16"},[t._v("Акция!")]),t.productInfo.stock.text.length?e("p",{staticClass:"p2 mb-8"},t._l(t.productInfo.stock.text,(function(a,s){return e("span",{key:s,staticClass:"d-block mb-8"},[t._v(" "+t._s(a)+" ")])})),0):t._e(),t.productInfo.stock.description?e("p",{staticClass:"p4 text-grey-3"},[t._v(t._s(t.productInfo.stock.description))]):t._e()]):t._e()]),e("div",{staticClass:"col-lg-4 col-12 mb-32"},[e("div",{staticClass:"product-page__stock"},[e("h6",{staticClass:"h6 text-uppercase mb-24 text-center"},[t._v("связаться с менеджером")]),e("div",{staticClass:"input-block mb-16"},[e("input",{staticClass:"input",attrs:{id:"text",type:"text",required:""}}),e("label",{staticClass:"label",attrs:{for:"text"}},[t._v("Введенный текст")])]),e("div",{staticClass:"input-block mb-16"},[e("input",{staticClass:"input",attrs:{id:"phone",type:"text",required:""}}),e("label",{staticClass:"label",attrs:{for:"phone"}},[t._v("Телефон")])]),e("div",{staticClass:"input-block mb-16"},[e("input",{staticClass:"input",attrs:{id:"email",type:"text",required:""}}),e("label",{staticClass:"label",attrs:{for:"email"}},[t._v("Email")])]),e("div",{staticClass:"textarea-block mb-16"},[e("textarea",{staticClass:"textarea",attrs:{id:"message",type:"text",required:""}}),e("label",{staticClass:"label",attrs:{for:"message"}},[t._v("Сообщение")])]),e("div",{staticClass:"modal-policy mb-16"},[e("p",{staticClass:"p4 text-grey-3 mb-0"},[t._v("Отправляя заявку, я подтверждаю, что ознакомлен и согласен с "),e("a",{staticClass:"link orange",attrs:{href:"javascript:;"}},[t._v("Политикой конфиденциальности")]),t._v(" данного сайта")])]),e("div",{staticClass:"mb-16"},[e("button",{staticClass:"btn default w-100",attrs:{type:"button"}},[e("span",{staticClass:"p4"},[t._v("Отправить")])])]),e("div",{},[e("button",{staticClass:"btn contour w-100",attrs:{type:"button"}},[e("span",{staticClass:"p4"},[t._v("Заказать обратный звонок")])])])])])]),[Object.keys(t.uniqTabs).length?e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("tabs",{attrs:{options:{useUrlFragment:!1}},on:{changed:t.tabChanged}},t._l(t.uniqTabs,(function(t,a){return e("tab",{key:a,attrs:{id:a,name:a}})})),1)],1)]),e("div",{staticClass:"row mb-64"},[e("div",{staticClass:"col"},t._l(t.uniqTabs,(function(a,s){return e("div",{key:s},[s==t.currentTab?e("div",[e("table",{staticClass:"table table-light table-bordered",staticStyle:{"table-layout":"fixed"}},[e("thead",{staticClass:"table-dark text-center"},[e("tr",[e("th",{attrs:{colspan:"2",scope:"col"}},[t._v(t._s(s))])])]),e("tbody",t._l(a,(function(a,s){return e("tr",{key:s},[e("td",{staticClass:"p2"},[t._v(t._s(a.caption))]),e("td",{staticClass:"p2"},[t._v(t._s(a.value+a.measure_unit))])])})),0)])]):t._e()])})),0)])]):t._e()],t.similarProducts.length?e("div",{staticClass:"row mb-64"},[e("div",{staticClass:"col"},[e("h3",{staticClass:"h3 mb-32"},[t._v("Похожие товары")]),e("div",{staticClass:"row"},t._l(t.similarProducts,(function(a,s){return e("div",{key:s,staticClass:"col-lg-3 col-12 mb-24"},[e("router-link",{staticClass:"h-100",attrs:{tag:"div",to:{name:"ProductsPage",params:{id:t.id,category_id:t.category_id,product_id:a.alias}}}},[e("div",{staticClass:"h-100",on:{click:function(a){return t.changeProduct()}}},[e("ProductsItem",{attrs:{title:a.title,text:a.product_options.prod_size,price:a.price,image:a.image.url}})],1)])],1)})),0)])]):t._e(),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("SwiperProductCategory",{attrs:{products:t.products}})],1)])],2)],1)},r=[],i=(s("99af"),s("4de4"),s("7db0"),s("b0c0"),s("b64b"),s("d3b7"),s("3ca3"),s("ddb0"),s("96cf"),s("1da1")),o=s("b078"),n=s("86dc"),c=s("73bd"),u=s("2b0e"),d=s("7923"),l=s.n(d);u["default"].use(l.a);var p={name:"ProductsPage",props:["id","category_id","product_id"],components:{Preloader:o["a"],SwiperProductCategory:n["a"],ProductsItem:c["a"]},data:function(){return{products:[],product:{},categories:[],category:{},categoriesProducts:[],loading:!0,currentTab:"parameters_tab",productInfo:{},uniqTabs:{}}},created:function(){this.getDataPage(this.id,this.category_id)},computed:{similarProducts:function(){var t=this;return this.categoriesProducts.filter((function(a){return a.id!==t.productInfo.id}))}},methods:{arrayTabs:function(){for(var t in this.productInfo.product_options)"undefined"==typeof this.uniqTabs[this.productInfo.product_options[t].category_name]?this.uniqTabs[this.productInfo.product_options[t].category_name]=[this.productInfo.product_options[t]]:this.uniqTabs[this.productInfo.product_options[t].category_name].push(this.productInfo.product_options[t])},tabChanged:function(t){this.currentTab=t.tab.id},changeProduct:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.loading=!0,a.next=3,t.getCategoriesProducts(t.category_id);case 3:t.initBreadcrumbs(),t.loading=!1;case 5:case"end":return a.stop()}}),a)})))()},getCategories:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,a.axios.get("/rest/products/".concat(t)).then((function(s){if("undefined"==t)return Promise.reject();a.categories=s.data.results,a.product=a.products.find((function(a){return a.alias==t}))}));case 2:case"end":return s.stop()}}),s)})))()},getCategoriesProducts:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,a.axios.get("/rest/products/".concat(t)).then((function(s){if("undefined"==t)return Promise.reject();a.category=a.categories.find((function(t){return t.alias==a.category_id})),a.categoriesProducts=s.data.results,a.productInfo=a.categoriesProducts.find((function(t){return t.alias==a.product_id}))}));case 2:case"end":return s.stop()}}),s)})))()},getProducts:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,a.axios.get("/rest/products").then((function(s){if("undefined"==t)return Promise.reject();a.products=s.data.results,a.product=a.products.find((function(a){return a.alias==t}))}));case 2:case"end":return s.stop()}}),s)})))()},getDataPage:function(t,a){var s=this;this.loading=!0,Promise.all([this.getProducts(t),this.getCategories(t),this.getCategoriesProducts(a)]).then((function(){s.initBreadcrumbs(),s.productInfo.product_options&&Object.keys(s.productInfo.product_options).length&&s.arrayTabs(),s.loading=!1})).catch((function(t){t.response;s.$router.push({name:"PageNotFound"})}))},initBreadcrumbs:function(){var t=[{path:"/",name:"Home",meta:{title:"Главная"}},{path:"/products",name:"Products",meta:{title:"Продукция"}},{path:"/products/".concat(this.id),name:"ProductsCategoryList",meta:{title:this.product.name}},{path:"/products/".concat(this.id,"/").concat(this.category_id),name:"ProductsCategoryPage",meta:{title:this.category.title}},{path:"/products/".concat(this.id,"/").concat(this.category_id,"/").concat(this.product_id),name:"ProductsPage",meta:{title:this.productInfo.title}}];this.$store.commit("changeBreadcrumbs",t)}},destroyed:function(){this.$store.commit("changeBreadcrumbs",[])}},f=p,m=(s("5bb9"),s("2877")),g=Object(m["a"])(f,e,r,!1,null,null,null);a["default"]=g.exports},"34cc":function(t,a,s){t.exports=s.p+"assets/img/amount_4.4297b3be.svg"},"57db":function(t,a,s){t.exports=s.p+"assets/img/amount_2.24a4d471.svg"},"5bb9":function(t,a,s){"use strict";s("0ebe")},"99af":function(t,a,s){"use strict";var e=s("23e7"),r=s("d039"),i=s("e8b5"),o=s("861d"),n=s("7b0b"),c=s("50c4"),u=s("8418"),d=s("65f0"),l=s("1dde"),p=s("b622"),f=s("2d00"),m=p("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",v=f>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),h=l("concat"),_=function(t){if(!o(t))return!1;var a=t[m];return void 0!==a?!!a:i(t)},C=!v||!h;e({target:"Array",proto:!0,forced:C},{concat:function(t){var a,s,e,r,i,o=n(this),l=d(o,0),p=0;for(a=-1,e=arguments.length;a<e;a++)if(i=-1===a?o:arguments[a],_(i)){if(r=c(i.length),p+r>g)throw TypeError(b);for(s=0;s<r;s++,p++)s in i&&u(l,p,i[s])}else{if(p>=g)throw TypeError(b);u(l,p++,i)}return l.length=p,l}})},aa87:function(t,a,s){t.exports=s.p+"assets/img/amount_3.0af0a44e.svg"},f3a6:function(t,a,s){t.exports=s.p+"assets/img/amount_1.4d092720.svg"}}]);
//# sourceMappingURL=ProductsPage.ddcd0893.js.map