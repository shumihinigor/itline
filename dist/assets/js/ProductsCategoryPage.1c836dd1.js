(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ProductsCategoryPage"],{"008e":function(t,e,i){"use strict";i("eb39")},"0433":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"category-page mb-80"},[t.loading?r("Preloader"):r("div",{staticClass:"container"},[r("div",{staticClass:"row mb-40"},[r("div",{staticClass:"col"},[r("h1",{staticClass:"h1 mb-0"},[t._v(t._s(t.category.title))])])]),[r("div",{staticClass:"mb-40"},[t.category.stock&&"active"==t.category.stock.state?r("div",{staticClass:"row mb-32"},[r("div",{staticClass:"col-lg-3 col-12 mb-32"},[r("div",{staticClass:"stock"},[r("div",{staticClass:"stock-card"},[r("div",{staticClass:"stock-image",style:{"background-image":"url("+i("7584")("./"+t.category.stock.card.image)+")"}}),r("h1",{staticClass:"h5 mb-16"},[t._v(t._s(t.category.stock.card.title))]),r("ul",{staticClass:"ps-3 m-0"},t._l(t.category.stock.card.list,(function(e,i){return r("li",{key:i,staticClass:"p4"},[t._v(" "+t._s(e)+" ")])})),0)])])]),r("div",{staticClass:"col-lg-9 col-12"},[r("h3",{staticClass:"h3 mb-16"},[t._v(t._s(t.category.stock.title))]),r("div",{staticClass:"mb-16"},t._l(t.category.stock.description,(function(e,i){return r("p",{key:i,staticClass:"p2 mb-8",domProps:{innerHTML:t._s(e)}})})),0),r("div",{},[r("p",[r("a",{staticClass:"p2 link orange text-decoration-none",attrs:{"data-bs-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[t._v(" Условия акции. ")])]),r("div",{staticClass:"collapse",attrs:{id:"collapseExample"}},[r("div",{},t._l(t.category.stock.conditions,(function(e,i){return r("p",{key:i,staticClass:"p5 text-grey-2 mb-8",domProps:{innerHTML:t._s(e)}})})),0)])])])]):t.category.swiper&&t.category.swiper.length?r("div",{staticClass:"row mb-32"},[r("div",{staticClass:"col"},[t.product.swiper.length?r("SwiperProduct",{attrs:{slides:t.product.swiper}}):t._e()],1)]):t._e(),t.category.short_description&&t.category.short_description.length?r("div",{staticClass:"row mb-24"},[r("div",{staticClass:"col"},[r("p",{staticClass:"p2",domProps:{innerHTML:t._s(t.category.short_description)}})])]):t._e(),t.category.pdf?r("div",{staticClass:"row mb-24"},[r("div",{staticClass:"col"},[r("a",{staticClass:"file__link bg-white",attrs:{href:"/static/files/"+t.category.pdf.name+".pdf",download:""}},[r("div",{staticClass:"d-flex flex-column align-items-start ml-16"},[r("p",{staticClass:"p2 text-grey-1 mb-1"},[t._v(t._s(t.category.pdf.title))]),r("p",{staticClass:"p5 text-grey-3 mb-0"},[t._v(t._s(t.category.pdf.size)+"Mb")])])])])]):t._e()])],r("div",{staticClass:"row mb-80 main-content"},[r("div",{staticClass:"col-lg-3 col-12"},[r("ProductsFilter",{staticClass:"sidebar",attrs:{products:t.products,categories:t.categories},on:{change:t.changeFilter}})],1),r("div",{staticClass:"col-lg-9 col-12"},[r("div",{staticClass:"content"},[r("div",{staticClass:"row"},t._l(t.categoriesProducts,(function(e,i){return r("div",{key:i,staticClass:"col-lg-4 col-md-6 col-12 mb-32"},[r("div",{staticClass:"h-100",on:{click:function(i){return t.goToProductPage(e)}}},[r("ProductsItem",{attrs:{title:e.title,image:e.image.url}})],1)])})),0)])])]),t.category.text&&t.category.text.length?r("div",{staticClass:"row mb-40"},[r("div",{staticClass:"col"},[r("div",{domProps:{innerHTML:t._s(t.category.text)}})])]):t._e(),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("SwiperProductCategory",{attrs:{products:t.products}})],1)])],2)],1)},n=[],o=(i("99af"),i("7db0"),i("b0c0"),i("d3b7"),i("3ca3"),i("ddb0"),i("96cf"),i("1da1")),a=i("b078"),s=i("ea36"),c=i("73bd"),l=i("dbb7"),u=i("86dc"),p=i("f6d0"),d=i("6bad"),h=i.n(d),f={name:"ProductsCategoryPage",props:["id","category_id"],components:{Preloader:a["a"],SwiperProduct:l["a"],SwiperProductCategory:u["a"],ProductsFilter:s["a"],ProductsItem:c["a"]},mixins:[p["a"]],data:function(){return{products:[],product:{},categories:[],categoriesProducts:[],category:{},loading:!0,sidebar:null}},created:function(){this.getData(this.id,this.category_id)},methods:{goToProductPage:function(t){t.page&&this.$router.push({name:"ProductsPage",params:{id:this.product.id,category_id:this.category.id,product_id:t.id}})},initSidebar:function(){var t=this;setTimeout((function(){t.sidebar=new h.a(".sidebar",{topSpacing:92,bottomSpacing:0,containerSelector:".main-content"})}),0)},getCategories:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.axios.get("/rest/products/".concat(t)).then((function(i){if("undefined"==t)return Promise.reject();e.categories=i.data.results,e.category=e.categories.find((function(t){return t.alias==e.category_id}))}));case 2:case"end":return i.stop()}}),i)})))()},getProducts:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.axios.get("/rest/products").then((function(i){if("undefined"==t)return Promise.reject();e.products=i.data.results,e.product=e.products.find((function(e){return e.alias==t}))}));case 2:case"end":return i.stop()}}),i)})))()},getCategoriesProducts:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.axios.get("/rest/products/".concat(t)).then((function(i){if("undefined"==t)return Promise.reject();e.categoriesProducts=i.data.results}));case 2:case"end":return i.stop()}}),i)})))()},getData:function(t,e){var i=this;this.loading=!0,Promise.all([this.getProducts(t),this.getCategories(t),this.getCategoriesProducts(e)]).then((function(){var t=[{path:"/",name:"Home",meta:{title:"Главная"}},{path:"/products",name:"Products",meta:{title:"Продукция"}},{path:"/products/category/".concat(i.id),name:"ProductsCategory",meta:{title:i.product.name}},{path:"/products/category/".concat(i.id,"/").concat(i.category_id),name:"ProductsCategoryPage",meta:{title:i.category.title}}];i.$store.commit("changeBreadcrumbs",t),i.initSidebar(),i.loading=!1})).catch((function(t){t.response;i.$router.push({name:"PageNotFound"})}))}},destroyed:function(){this.$store.commit("changeBreadcrumbs",[])}},g=f,v=(i("52d2"),i("2877")),m=Object(v["a"])(g,r,n,!1,null,null,null);e["default"]=m.exports},"0529":function(t,e,i){"use strict";i("fd2f")},"1da1":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i("d3b7");function r(t,e,i,r,n,o,a){try{var s=t[o](a),c=s.value}catch(l){return void i(l)}s.done?e(c):Promise.resolve(c).then(r,n)}function n(t){return function(){var e=this,i=arguments;return new Promise((function(n,o){var a=t.apply(e,i);function s(t){r(a,n,o,s,c,"next",t)}function c(t){r(a,n,o,s,c,"throw",t)}s(void 0)}))}}},"3ca3":function(t,e,i){"use strict";var r=i("6547").charAt,n=i("69f3"),o=i("7dd0"),a="String Iterator",s=n.set,c=n.getterFor(a);o(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),i=e.string,n=e.index;return n>=i.length?{value:void 0,done:!0}:(t=r(i,n),e.index+=t.length,{value:t,done:!1})}))},"52d2":function(t,e,i){"use strict";i("eff5")},6547:function(t,e,i){var r=i("a691"),n=i("1d80"),o=function(t){return function(e,i){var o,a,s=String(n(e)),c=r(i),l=s.length;return c<0||c>=l?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"6bad":function(t,e,i){(function(t){(function(t,i){i(e)})(0,(function(e){"use strict";"undefined"!==typeof window?window:"undefined"!==typeof t||"undefined"!==typeof self&&self;function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t["default"]:t}function r(t,e){return e={exports:{}},t(e,e.exports),e.exports}var n=r((function(t,e){(function(t,i){i(e)})(0,(function(t){function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),r=function(){var t=".stickySidebar",r={topSpacing:0,bottomSpacing:0,containerSelector:!1,scrollContainer:!1,innerWrapperSelector:".inner-wrapper-sticky",stickyClass:"is-affixed",minWidth:!1},n=function(){function n(t){var i=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e(this,n),this.options=n.extend(r,o),this.sidebar="string"===typeof t?document.querySelector(t):t,"undefined"===typeof this.sidebar)throw new Error("There is no specific sidebar element.");this.sidebarInner=!1,this.container=this.sidebar.parentElement,this.affixedType="STATIC",this.direction="down",this.support={transform:!1,transform3d:!1},this._initialized=!1,this._reStyle=!1,this._breakpoint=!1,this.dimensions={translateY:0,maxTranslateY:0,topSpacing:0,lastTopSpacing:0,bottomSpacing:0,lastBottomSpacing:0,sidebarHeight:0,sidebarWidth:0,containerTop:0,containerHeight:0,viewportHeight:0,viewportTop:0,lastViewportTop:0},["handleEvent"].forEach((function(t){i[t]=i[t].bind(i)})),this.initialize()}return i(n,[{key:"initialize",value:function(){var t=this;if(this._setSupportFeatures(),this.options.innerWrapperSelector&&(this.sidebarInner=this.sidebar.querySelector(this.options.innerWrapperSelector),null===this.sidebarInner&&(this.sidebarInner=!1)),!this.sidebarInner){var e=document.createElement("div");e.setAttribute("class","inner-wrapper-sticky"),this.sidebar.appendChild(e);while(this.sidebar.firstChild!=e)e.appendChild(this.sidebar.firstChild);this.sidebarInner=this.sidebar.querySelector(".inner-wrapper-sticky")}if(this.options.containerSelector){var i=document.querySelectorAll(this.options.containerSelector);if(i=Array.prototype.slice.call(i),i.forEach((function(e,i){e.contains(t.sidebar)&&(t.container=e)})),!i.length)throw new Error("The container does not contains on the sidebar.")}this.scrollContainer=this.options.scrollContainer?document.querySelector(this.options.scrollContainer):void 0,"function"!==typeof this.options.topSpacing&&(this.options.topSpacing=parseInt(this.options.topSpacing)||0),"function"!==typeof this.options.bottomSpacing&&(this.options.bottomSpacing=parseInt(this.options.bottomSpacing)||0),this._widthBreakpoint(),this.calcDimensions(),this.stickyPosition(),this.bindEvents(),this._initialized=!0}},{key:"bindEvents",value:function(){var e=this;if(this.eventTarget=this.scrollContainer?this.scrollContainer:window,this.eventTarget.addEventListener("resize",this,{passive:!0,capture:!1}),this.eventTarget.addEventListener("scroll",this,{passive:!0,capture:!1}),this.sidebar.addEventListener("update"+t,this),"undefined"!==typeof ResizeObserver){var i=new ResizeObserver((function(){return e.handleEvent()}));i.observe(this.sidebarInner),i.observe(this.container)}}},{key:"handleEvent",value:function(t){this.updateSticky(t)}},{key:"calcDimensions",value:function(){if(!this._breakpoint){var t=this.dimensions;t.containerTop=n.offsetRelative(this.container).top,t.containerHeight=this.container.clientHeight,t.containerBottom=t.containerTop+t.containerHeight,t.sidebarHeight=this.sidebarInner.offsetHeight,t.sidebarWidth=this.sidebarInner.offsetWidth,t.viewportHeight=window.innerHeight,t.maxTranslateY=t.containerHeight-t.sidebarHeight,this._calcDimensionsWithScroll()}}},{key:"_calcDimensionsWithScroll",value:function(){var t=this.dimensions;t.sidebarLeft=n.offsetRelative(this.sidebar).left,this.scrollContainer?(t.viewportTop=this.scrollContainer.scrollTop,t.viewportLeft=this.scrollContainer.scrollLeft):(t.viewportTop=document.documentElement.scrollTop||document.body.scrollTop,t.viewportLeft=document.documentElement.scrollLeft||document.body.scrollLeft),t.viewportBottom=t.viewportTop+t.viewportHeight,t.topSpacing=this.options.topSpacing,t.bottomSpacing=this.options.bottomSpacing,"function"===typeof t.topSpacing&&(t.topSpacing=parseInt(t.topSpacing(this.sidebar))||0),"function"===typeof t.bottomSpacing&&(t.bottomSpacing=parseInt(t.bottomSpacing(this.sidebar))||0),"VIEWPORT-TOP"===this.affixedType?t.topSpacing<t.lastTopSpacing&&(t.translateY+=t.lastTopSpacing-t.topSpacing,this._reStyle=!0):"VIEWPORT-BOTTOM"===this.affixedType&&t.bottomSpacing<t.lastBottomSpacing&&(t.translateY+=t.lastBottomSpacing-t.bottomSpacing,this._reStyle=!0),t.lastTopSpacing=t.topSpacing,t.lastBottomSpacing=t.bottomSpacing}},{key:"isSidebarFitsViewport",value:function(){var t=this.dimensions,e="down"===this.scrollDirection?t.lastBottomSpacing:t.lastTopSpacing;return this.dimensions.sidebarHeight+e<this.dimensions.viewportHeight}},{key:"observeScrollDir",value:function(){var t=this.dimensions;if(t.lastViewportTop!==t.viewportTop){var e="down"===this.direction?Math.min:Math.max;t.viewportTop===e(t.viewportTop,t.lastViewportTop)&&(this.direction="down"===this.direction?"up":"down")}}},{key:"getAffixType",value:function(){this._calcDimensionsWithScroll();var t=this.dimensions,e=t.viewportTop+t.topSpacing,i=this.affixedType;return e<=t.containerTop||t.containerHeight<=t.sidebarHeight?(t.translateY=0,i="STATIC"):i="up"===this.direction?this._getAffixTypeScrollingUp():this._getAffixTypeScrollingDown(),t.translateY=Math.max(0,t.translateY),t.translateY=Math.min(t.containerHeight,t.translateY),t.translateY=Math.round(t.translateY),t.lastViewportTop=t.viewportTop,i}},{key:"_getAffixTypeScrollingDown",value:function(){var t=this.dimensions,e=t.sidebarHeight+t.containerTop,i=t.viewportTop+t.topSpacing,r=t.viewportBottom-t.bottomSpacing,n=this.affixedType;return this.isSidebarFitsViewport()?t.sidebarHeight+i>=t.containerBottom?(t.translateY=t.containerBottom-e,n="CONTAINER-BOTTOM"):i>=t.containerTop&&(t.translateY=i-t.containerTop,n="VIEWPORT-TOP"):t.containerBottom<=r?(t.translateY=t.containerBottom-e,n="CONTAINER-BOTTOM"):e+t.translateY<=r?(t.translateY=r-e,n="VIEWPORT-BOTTOM"):t.containerTop+t.translateY<=i&&0!==t.translateY&&t.maxTranslateY!==t.translateY&&(n="VIEWPORT-UNBOTTOM"),n}},{key:"_getAffixTypeScrollingUp",value:function(){var t=this.dimensions,e=t.sidebarHeight+t.containerTop,i=t.viewportTop+t.topSpacing,r=t.viewportBottom-t.bottomSpacing,n=this.affixedType;return i<=t.translateY+t.containerTop?(t.translateY=i-t.containerTop,n="VIEWPORT-TOP"):t.containerBottom<=r?(t.translateY=t.containerBottom-e,n="CONTAINER-BOTTOM"):this.isSidebarFitsViewport()||t.containerTop<=i&&0!==t.translateY&&t.maxTranslateY!==t.translateY&&(n="VIEWPORT-UNBOTTOM"),n}},{key:"_getStyle",value:function(t){if("undefined"!==typeof t){var e={inner:{},outer:{}},i=this.dimensions;switch(t){case"VIEWPORT-TOP":e.inner={position:"fixed",top:i.topSpacing,left:i.sidebarLeft-i.viewportLeft,width:i.sidebarWidth};break;case"VIEWPORT-BOTTOM":e.inner={position:"fixed",top:"auto",left:i.sidebarLeft,bottom:i.bottomSpacing,width:i.sidebarWidth};break;case"CONTAINER-BOTTOM":case"VIEWPORT-UNBOTTOM":var r=this._getTranslate(0,i.translateY+"px");e.inner=r?{transform:r}:{position:"absolute",top:i.translateY,width:i.sidebarWidth};break}switch(t){case"VIEWPORT-TOP":case"VIEWPORT-BOTTOM":case"VIEWPORT-UNBOTTOM":case"CONTAINER-BOTTOM":e.outer={height:i.sidebarHeight,position:"relative"};break}return e.outer=n.extend({height:"",position:""},e.outer),e.inner=n.extend({position:"relative",top:"",left:"",bottom:"",width:"",transform:""},e.inner),e}}},{key:"stickyPosition",value:function(e){if(!this._breakpoint){e=this._reStyle||e||!1;this.options.topSpacing,this.options.bottomSpacing;var i=this.getAffixType(),r=this._getStyle(i);if((this.affixedType!=i||e)&&i){var o="affix."+i.toLowerCase().replace("viewport-","")+t;for(var a in n.eventTrigger(this.sidebar,o),"STATIC"===i?n.removeClass(this.sidebar,this.options.stickyClass):n.addClass(this.sidebar,this.options.stickyClass),r.outer){var s="number"===typeof r.outer[a]?"px":"";this.sidebar.style[a]=r.outer[a]+s}for(var c in r.inner){var l="number"===typeof r.inner[c]?"px":"";this.sidebarInner.style[c]=r.inner[c]+l}var u="affixed."+i.toLowerCase().replace("viewport-","")+t;n.eventTrigger(this.sidebar,u)}else this._initialized&&(this.sidebarInner.style.left=r.inner.left);this.affixedType=i}}},{key:"_widthBreakpoint",value:function(){window.innerWidth<=this.options.minWidth?(this._breakpoint=!0,this.affixedType="STATIC",this.sidebar.removeAttribute("style"),n.removeClass(this.sidebar,this.options.stickyClass),this.sidebarInner.removeAttribute("style")):this._breakpoint=!1}},{key:"updateSticky",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._running||(this._running=!0,function(e){requestAnimationFrame((function(){switch(e){case"scroll":t._calcDimensionsWithScroll(),t.observeScrollDir(),t.stickyPosition();break;case"resize":default:t._widthBreakpoint(),t.calcDimensions(),t.stickyPosition(!0);break}t._running=!1}))}(e.type))}},{key:"_setSupportFeatures",value:function(){var t=this.support;t.transform=n.supportTransform(),t.transform3d=n.supportTransform(!0)}},{key:"_getTranslate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.support.transform3d?"translate3d("+t+", "+e+", "+i+")":!!this.support.translate&&"translate("+t+", "+e+")"}},{key:"destroy",value:function(){window.removeEventListener("resize",this,{capture:!1}),window.removeEventListener("scroll",this,{capture:!1}),this.sidebar.classList.remove(this.options.stickyClass),this.sidebar.style.minHeight="",this.sidebar.removeEventListener("update"+t,this);var e={inner:{},outer:{}};for(var i in e.inner={position:"",top:"",left:"",bottom:"",width:"",transform:""},e.outer={height:"",position:""},e.outer)this.sidebar.style[i]=e.outer[i];for(var r in e.inner)this.sidebarInner.style[r]=e.inner[r];this.options.resizeSensor&&"undefined"!==typeof ResizeSensor&&(ResizeSensor.detach(this.sidebarInner,this.handleEvent),ResizeSensor.detach(this.container,this.handleEvent))}}],[{key:"supportTransform",value:function(t){var e=!1,i=t?"perspective":"transform",r=i.charAt(0).toUpperCase()+i.slice(1),n=["Webkit","Moz","O","ms"],o=document.createElement("support"),a=o.style;return(i+" "+n.join(r+" ")+r).split(" ").forEach((function(t,i){if(void 0!==a[t])return e=t,!1})),e}},{key:"eventTrigger",value:function(t,e,i){try{var r=new CustomEvent(e,{detail:i})}catch(n){r=document.createEvent("CustomEvent");r.initCustomEvent(e,!0,!0,i)}t.dispatchEvent(r)}},{key:"extend",value:function(t,e){var i={};for(var r in t)"undefined"!==typeof e[r]?i[r]=e[r]:i[r]=t[r];return i}},{key:"offsetRelative",value:function(t){var e={left:0,top:0};do{var i=t.offsetTop,r=t.offsetLeft;isNaN(i)||(e.top+=i),isNaN(r)||(e.left+=r),t="BODY"===t.tagName?t.parentElement:t.offsetParent}while(t);return e}},{key:"addClass",value:function(t,e){n.hasClass(t,e)||(t.classList?t.classList.add(e):t.className+=" "+e)}},{key:"removeClass",value:function(t,e){n.hasClass(t,e)&&(t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}},{key:"defaults",get:function(){return r}}]),n}();return n}();
/**
	   * Sticky Sidebar v2 JavaScript Plugin.
	   * @version 1.0.1
	   * @author Øystein Blixhavn <oystein@blixhavn.no>
	   * @license The MIT License (MIT)
	   */t.default=r,window.StickySidebar=r}))})),o=i(n);e.default=o,e.__moduleExports=n,Object.defineProperty(e,"__esModule",{value:!0})}))}).call(this,i("c8ba"))},"96cf":function(t,e,i){var r=function(t){"use strict";var e,i=Object.prototype,r=i.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(B){c=function(t,e,i){return t[e]=i}}function l(t,e,i,r){var n=e&&e.prototype instanceof v?e:v,o=Object.create(n.prototype),a=new O(r||[]);return o._invoke=x(t,i,a),o}function u(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(B){return{type:"throw",arg:B}}}t.wrap=l;var p="suspendedStart",d="suspendedYield",h="executing",f="completed",g={};function v(){}function m(){}function y(){}var b={};b[o]=function(){return this};var w=Object.getPrototypeOf,T=w&&w(w(L([])));T&&T!==i&&r.call(T,o)&&(b=T);var _=y.prototype=v.prototype=Object.create(b);function C(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function i(n,o,a,s){var c=u(t[n],t,o);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"===typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){i("next",t,a,s)}),(function(t){i("throw",t,a,s)})):e.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return i("throw",t,a,s)}))}s(c.arg)}var n;function o(t,r){function o(){return new e((function(e,n){i(t,r,e,n)}))}return n=n?n.then(o,o):o()}this._invoke=o}function x(t,e,i){var r=p;return function(n,o){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===n)throw o;return I()}i.method=n,i.arg=o;while(1){var a=i.delegate;if(a){var s=k(a,i);if(s){if(s===g)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===p)throw r=f,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=h;var c=u(t,e,i);if("normal"===c.type){if(r=i.done?f:d,c.arg===g)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(r=f,i.method="throw",i.arg=c.arg)}}}function k(t,i){var r=t.iterator[i.method];if(r===e){if(i.delegate=null,"throw"===i.method){if(t.iterator["return"]&&(i.method="return",i.arg=e,k(t,i),"throw"===i.method))return g;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=u(r,t.iterator,i.arg);if("throw"===n.type)return i.method="throw",i.arg=n.arg,i.delegate=null,g;var o=n.arg;return o?o.done?(i[t.resultName]=o.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,g):o:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function L(t){if(t){var i=t[o];if(i)return i.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function i(){while(++n<t.length)if(r.call(t,n))return i.value=t[n],i.done=!1,i;return i.value=e,i.done=!0,i};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return m.prototype=_.constructor=y,y.constructor=m,m.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},C(S.prototype),S.prototype[a]=function(){return this},t.AsyncIterator=S,t.async=function(e,i,r,n,o){void 0===o&&(o=Promise);var a=new S(l(e,i,r,n),o);return t.isGeneratorFunction(i)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(_),c(_,s,"Generator"),_[o]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var r=e.pop();if(r in t)return i.value=r,i.done=!1,i}return i.done=!0,i}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var i in this)"t"===i.charAt(0)&&r.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function n(r,n){return s.type="throw",s.arg=t,i.next=r,n&&(i.method="next",i.arg=e),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),E(i),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var r=i.completion;if("throw"===r.type){var n=r.arg;E(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,r){return this.delegate={iterator:L(t),resultName:i,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}},"99af":function(t,e,i){"use strict";var r=i("23e7"),n=i("d039"),o=i("e8b5"),a=i("861d"),s=i("7b0b"),c=i("50c4"),l=i("8418"),u=i("65f0"),p=i("1dde"),d=i("b622"),h=i("2d00"),f=d("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",m=h>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),y=p("concat"),b=function(t){if(!a(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)},w=!m||!y;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,i,r,n,o,a=s(this),p=u(a,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?a:arguments[e],b(o)){if(n=c(o.length),d+n>g)throw TypeError(v);for(i=0;i<n;i++,d++)i in o&&l(p,d,o[i])}else{if(d>=g)throw TypeError(v);l(p,d++,o)}return p.length=d,p}})},b0c0:function(t,e,i){var r=i("83ab"),n=i("9bf2").f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/,c="name";r&&!(c in o)&&n(o,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},dbb7:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("swiper",{directives:[{name:"show",rawName:"v-show",value:t.slides.length,expression:"slides.length"}],ref:"swiperProduct",staticClass:"swiper product",attrs:{options:t.swiperOptions}},[t._l(t.slides,(function(e,n){return r("swiper-slide",{key:e.id},[r("div",{staticClass:"product-swiper__item"},[r("div",{staticClass:"row h-100"},[r("div",{staticClass:"col-lg-5 col-12 position-relative"},[e.image?r("div",{staticClass:"product-swiper__item-image mr-16",style:{"background-image":"url("+i("34fe")("./"+e.image)+")"}}):t._e()]),r("div",{staticClass:"col-lg-7 col-12 d-flex flex-column align-items-start product-swiper__item-block"},[r("h1",{staticClass:"h1 mb-16"},[t._v(t._s(e.title))]),r("ul",t._l(e.list,(function(e,i){return r("li",{key:i,staticClass:"p2"},[t._v(" "+t._s(e)+" ")])})),0),e.button?r("a",{staticClass:"mt-auto",attrs:{href:e.button.href}},[r("button",{staticClass:"btn contour product-swiper__item-button",attrs:{type:"button"}},[r("span",{staticClass:"text-uppercase p4 text-white"},[t._v(t._s(e.button.text))])])]):t._e()])])])])})),r("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),r("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)},n=[],o=i("7212"),a=i("6d3b"),s=i("8343"),c=i("5dc8"),l=i("b078");i("bbe3");a["a"].use([s["a"],c["a"]]);var u={components:{Swiper:o["Swiper"],Pagination:c["a"],SwiperSlide:o["SwiperSlide"],Preloader:l["a"]},props:["slides"],data:function(){return{swiperOptions:{slidesPerView:1,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{992:{slidesPerView:1,spaceBetween:20},375:{slidesPerView:1,spaceBetween:0,centeredSlides:!1}}}}},computed:{swiper:function(){return this.$refs.swiperProduct.$swiper}},created:function(){},mounted:function(){window.innerWidth<=991&&(this.swiper.navigation.$nextEl[0].hidden=!0,this.swiper.navigation.$prevEl[0].hidden=!0)},methods:{}},p=u,d=(i("008e"),i("2877")),h=Object(d["a"])(p,r,n,!1,null,"3842d332",null);e["a"]=h.exports},ddb0:function(t,e,i){var r=i("da84"),n=i("fdbc"),o=i("e260"),a=i("9112"),s=i("b622"),c=s("iterator"),l=s("toStringTag"),u=o.values;for(var p in n){var d=r[p],h=d&&d.prototype;if(h){if(h[c]!==u)try{a(h,c,u)}catch(g){h[c]=u}if(h[l]||a(h,l,p),n[p])for(var f in o)if(h[f]!==o[f])try{a(h,f,o[f])}catch(g){h[f]=o[f]}}}},ea36:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",{staticClass:"p2 weight-bold mb-16"},[t._v("Категории:")]),i("ul",{staticClass:"product-filter"},t._l(t.products,(function(e,r){return i("li",{key:r,class:["p2",{active:e.alias==t.$route.params.id}]},[i("span",{on:{click:function(i){return i.stopPropagation(),t.goToProductsCategory(e.alias)}}},[t._v(t._s(e.name))]),i("ul",t._l(t.categories,(function(r,n){return i("li",{key:n,class:["p2",{active:r.alias==t.$route.params.category_id}]},[i("span",{on:{click:function(i){return i.stopPropagation(),t.goToProductsCategoryPage(e.alias,r.alias)}}},[t._v(t._s(r.title))])])})),0)])})),0)])},n=[],o={props:["products","categories"],data:function(){return{}},methods:{goToProductsCategory:function(t){var e=this;this.$route.params.id!==t&&(this.$router.push({name:"ProductsCategory",params:{id:t}}),setTimeout((function(){e.$emit("change",t)}),0))},goToProductsCategoryPage:function(t,e){var i=this;this.$route.params.category_id!==e&&(this.$router.push({name:"ProductsCategoryPage",params:{id:t,category_id:e}}),setTimeout((function(){i.$emit("change",t,e)}),0))}}},a=o,s=(i("0529"),i("2877")),c=Object(s["a"])(a,r,n,!1,null,null,null);e["a"]=c.exports},eb39:function(t,e,i){},eff5:function(t,e,i){},f6d0:function(t,e,i){"use strict";e["a"]={methods:{changeFilter:function(t,e){this.getData(t,e)},changeCategory:function(t){this.getData(t)}}}},fd2f:function(t,e,i){}}]);
//# sourceMappingURL=ProductsCategoryPage.1c836dd1.js.map