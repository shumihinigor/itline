(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Support"],{"0b2b":function(t,e,a){},"1deb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"support"},[t._m(0),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",[a("tabs",{ref:"tabs",attrs:{options:{useUrlFragment:!1}},on:{changed:t.tabChanged}},[a("tab",{attrs:{to:"ContactSupportTab",id:"contactsTab",name:"Обратиться в техподдержку"}}),a("tab",{attrs:{to:"WarrantyTab",id:"warrantyTab",name:"гарантия"}}),a("tab",{attrs:{to:"KnowledgeBaseTab",id:"knowledgeTab",name:"база знаний"}})],1)],1)])])]),a("transition",{attrs:{name:"fade",mode:"out-in"}},["contactsTab"==t.currentTab?a("ContactSupportTab"):"warrantyTab"==t.currentTab?a("WarrantyTab"):"knowledgeTab"==t.currentTab?a("KnowledgeBaseTab"):t._e()],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",{staticClass:"h1 mb-24"},[t._v("Техподдержка")])])])])}],n=a("2b0e"),l=a("7923"),r=a.n(l),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-white pt-5 pb-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-6 col-12"},[a("Form",{attrs:{theme:"Техподдержка",title:"Написать специалисту itline",policy:!1,id:"support",description:"* При появлении технических вопросов специалисты компании ITLINE оперативно осуществляют консультрование по вопросам установки и эксплуатации светодиодных табло","department-select":!1,"department-option":"dir-support"}})],1)])])])},c=[],d=a("8477"),u={components:{Form:d["a"]}},p=u,m=a("2877"),f=Object(m["a"])(p,o,c,!1,null,null,null),b=f.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mb-80"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8 col-12"},[a("p",{staticClass:"p2 text-grey-2 mb-8"},[t._v("Компания ITLINE оказывает гарантийное обслуживание продукции до 24 месяцев")]),a("p",{staticClass:"p2 text-grey-2 mb-16"},[t._v("При появлении недочетов в работе, вопросов настройки светодиодных табло, свяжитесь со Службой технической поддержки, указав Серийный номер изделия:")]),a("ul",{staticClass:"list mb-16"},[a("li",{staticClass:"p2 text-grey-2"},[t._v("По e-mail: "),a("span",[a("a",{staticClass:"link orange",attrs:{href:"mailto:support@it-line.info"}},[t._v("support@it-line.info")])])]),a("li",{staticClass:"p2 text-grey-2"},[t._v("В разделе "),a("span",{staticClass:"text-orange"},[t._v("«Техническая поддержка»")])])]),a("p",{staticClass:"p2 text-grey-2 mb-8"},[t._v("При появлении технических вопросов специалисты оперативно осуществляют консультирование по вопросам установки и эксплуатации электронных табло")]),a("p",{staticClass:"p2 text-grey-2 mb-8"},[t._v("Гарантийное обслуживание производится в сервисном центре г. Ярославль")]),a("p",{staticClass:"p2 text-grey-2 mb-8"},[t._v("Для удобства заказчика возможен вариант отправки запасных частей и их замена под руководством технического специалиста, при этом набор ЗИП определяется в ходе диалога с Инженером сервисного центра.")]),a("p",{staticClass:"p2 text-grey-2 mb-8"},[t._v("После окончания гарантийного срока возможно послегарантийное сопровождение с заключением Договора на ремонт и техническое обслуживание оборудования. В условиях сервисного центра проводится первичная диагностика и определяется последующий объем восстановления электронных табло.")]),a("p",{staticClass:"p4"},[t._v("* Гарантийный срок указан в Паспорте светодиодного табло ITLINE")])])])])}],h={},I=h,_=Object(m["a"])(I,v,y,!1,null,null,null),C=_.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-80"},[t._m(0),a("ProductsBlockInfo",{staticClass:"mb-32"})],1)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mb-64"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8 col-12"},[a("p",{staticClass:"p2"},[t._v("В этом разделе вы можете ознакомиться со всеми необходимыми инструкциями и техническими характеристиками средств ITLINE. Для каждого устройства можно найти PDF-документ и посмотреть с любого устройства. Для карточек в разделе предполагается анимация (при клике открывается окно с пдф)")])])])])}],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"product"},[t.loading?a("Preloader"):a("div",{staticClass:"container d-flex flex-column"},[a("div",{staticClass:"row"},[t._l(t.products,(function(e,s){return a("div",{key:s,class:["col-lg-3 col-md-6 col-12 mb-32","order-"+s]},[a("div",{staticClass:"h-100",on:{click:function(a){return t.selectProduct({product:e,index:s})}}},[a("ProductsItem",{attrs:{title:e.name,image:"/"+e.image}})],1)])})),a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.selectedProduct.id?a("div",{staticClass:"col-12 mb-32",class:t.windowWidth>991?"order-"+(3|t.selectedIndex):"order-"+t.selectedIndex},[a("div",{staticClass:"product-info"},[a("div",{staticClass:"row w-100"},[a("div",{staticClass:"col-lg-4 col-12 mb-lg-0 mb-4"},[a("ProductsItem",{attrs:{title:t.selectedProduct.name,image:"/"+t.selectedProduct.image}})],1),a("div",{staticClass:"col-lg-8 col-12"},[a("div",{staticClass:"product-info__block"},[t.files[t.selectedProduct.alias]?a("div",{staticClass:"product-info__links"},t._l(t.files,(function(e,s){return a("div",{key:s},[t.selectedProduct.alias==s?a("div",t._l(e,(function(e,s){return a("div",{key:s},[a("h3",{staticClass:"h3"},[t._v(t._s(e.title))]),t._l(e.files,(function(e,s){return a("a",{key:s,staticClass:"file__link mb-24",attrs:{href:"/static/files/"+e.url,download:""}},[a("div",{staticClass:"d-flex flex-column align-items-start ml-16"},[a("p",{staticClass:"p2 text-grey-1 mb-1"},[t._v(t._s(e.name))]),a("p",{staticClass:"p5 text-grey-3 mb-0"},[t._v(t._s(e.size))])])])}))],2)})),0):t._e()])})),0):a("div",[a("div",{staticClass:"nothing-found"},[a("h1",{staticClass:"nothing-found__title"},[t._v("Ничего не найдено")])])])])])])])]):t._e()])],2)])],1)},E=[],w=a("5530"),N=a("b078"),L=a("73bd"),k=a("ec11"),P=a("2f62"),x=Object(P["a"])("products"),S=(x.mapMutations,x.mapGetters),O=x.mapActions,$={components:{ProductsItem:L["a"],Preloader:N["a"],NothingFound:k["a"]},data:function(){return{windowWidth:window.innerWidth,loading:!0,files:{"resheniya-dlya-transporta":[{title:"Инструкции",files:[{name:"Схема подключения табло",url:"resheniya-dlya-transporta/Схема подключения табло.pdf",size:"1,90 МБ"}]},{title:"Программы",files:[{name:"Конфигуратор ITLINE",url:"resheniya-dlya-transporta/конфигуратор ITLINE Setup 1.2.0.exe",size:"82,40 МБ"},{name:"ПО Конфигуратор ITLINE",url:"resheniya-dlya-transporta/ПУИА.464113.003 РЭ от 05.06.2020.pdf",size:"1,31 МБ"},{name:"ПО Конфигуратор ITLINE",url:"resheniya-dlya-transporta/Конфигуратор ITLINE руководство.odt",size:"1,33 МБ"},{name:"Инструкция табло ITLINE - Сигнал S-2551",url:"resheniya-dlya-transporta/Инструкция, схема Табло ITLINE - Сигнал S-2551.pdf",size:"1,12 МБ"},{name:"Тестовый маршрут",url:"resheniya-dlya-transporta/Тестовый маршрут.zip",size:"32,60 МБ"},{name:"Обновление программы СИГНАЛ S2551 для обеспечения совместимости терминала  и внутрисалонного табло ТТС-80",url:"resheniya-dlya-transporta/S2551_v9_01_79_debug_200618_AINF_ITE05.bin",size:"383 КБ"},{name:"Инструкция табло ITLINE Гранит 2.07 и 4.11",url:"resheniya-dlya-transporta/Инструкция табло ITLINE Гранит 2.07 и 4.11.zip",size:"12,80 МБ"},{name:"УТИЛИТА К 4.11",url:"resheniya-dlya-transporta/УТИЛИТА К 4.11.rar",size:"16,90 МБ"},{name:"Инструкция к утилите Autoinformer.4.11",url:"resheniya-dlya-transporta/Инструкция к утилите Autoinformer.4.11.pdf",size:"822 КБ"},{name:"Руководство по эксплуатации Гранит 4.11",url:"resheniya-dlya-transporta/Руководство по эксплуатации Гранит_4.11.pdf",size:"1,41 МБ"},{name:"Инструкция по монтажу Гранит 4.11",url:"resheniya-dlya-transporta/Инструкция по монтажу Гранит 4.11.pdf",size:"1,35 МБ"},{name:"Инструкция табло ITLINE - терминал Galileosky (511788-v4)",url:"resheniya-dlya-transporta/Инструкция табло ITLINE - терминал Galileosky (511788-v4).pdf",size:"3,12 МБ"},{name:"Инструкция настр_звуковых сообщений Автоинформатор",url:"resheniya-dlya-transporta/Инструкция настр звуковых сообщений Автоинформатор.pdf",size:"828 КБ"},{name:"Руководство Galileosky 7.0",url:"resheniya-dlya-transporta/Руководство Galileosky 7.0.pdf",size:"10,30 МБ"},{name:"Тестовый маршрут",url:"resheniya-dlya-transporta/Тестовый маршрут.wim",size:"173 КБ"},{name:"Инструкция табло ITLINE - автоинформатор Алмаз",url:"resheniya-dlya-transporta/Инструкция табло ITLINE - автоинформатор Алмаз.pdf",size:"492 КБ"}]}],"tablo-dlya-ostanovok":[{title:"Инструкции",files:[{name:"Обзор кодов CME/CMS ошибок GMS модема",url:"tablo-dlya-ostanovok/Обзор кодов CME-CMS ошибок GMS модема.pdf",size:"734 КБ"},{name:"Настройка табло по локальной сети",url:"tablo-dlya-ostanovok/Настройка табло по локальной сети.pdf",size:"3,69 МБ"},{name:"Настройка табло с помощью ИК пульта",url:"tablo-dlya-ostanovok/Настройка табло с помощью Ик пульта табло по локальной сети.pdf",size:"4,50 МБ"},{name:"Работа табло с сервером",url:"tablo-dlya-ostanovok/Работа табло с сервером.pdf",size:"1,64 МБ"},{name:"Сервисные команды настройки отображения, использование спецсимволов в текстовой информации",url:"tablo-dlya-ostanovok/Сервисные команды настройки отображения, использование спецсимволов в текстовой информации.pdf",size:"2,13 МБ"},{name:"Удалённое управление командами по SMS",url:"tablo-dlya-ostanovok/Удалённое управление командами по SMS.pdf",size:"1,95 МБ"}]},{title:"Программы",files:[{name:"Руководство пользователя и программа для настройки табло серии «ТО1»",url:"tablo-dlya-ostanovok/Руководство пользователя и программа для настройки табло серии ТО1.wim",size:"819 КБ"},{name:"Руководство пользователя и программа для настройки табло серии «ТО-P» и «ТО-V»",url:"tablo-dlya-ostanovok/Руководство пользователя и программа для настройки табло серии ТО-P и ТО-V.wim",size:"9,43 МБ"}]}],"tablo-dlya-vokzalov":[{title:"Программы",files:[{name:"ПО и руководство пользователя",url:"tablo-dlya-vokzalov/ПО и руководство пользователя.zip",size:"6,06 МБ"}]}],"tablo-dlya-azs":[{title:"Инструкции",files:[{name:"Инструкция управления Табло для операторной АЗС с ИК-пульта",url:"tablo-dlya-azs/Инструкция управления Табло для операторной АЗС с ИК-пульта.pdf",size:"140 КБ"},{name:"Инструкция управления Табло цены для стел АЗС с ИК-пульта",url:"tablo-dlya-azs/Инструкция управления Табло цены для стел АЗС с ИК-пульта.pdf",size:"193 КБ"}]},{title:"Программы",files:[{name:"ITLINE PRO_Program",url:"tablo-dlya-azs/ITLINE PRO_Program.zip",size:"33,90 МБ"},{name:"ITLINE_ПО для табло операторной АЗС",url:"tablo-dlya-azs/ITLINE_ПО для табло операторной АЗС.zip",size:"5,83 МБ"}]}],"chasy-meteostancii":[{title:"Инструкции",files:[{name:"ITLINE - Инструкция управления метеостанцией с ИК-пульта",url:"chasy-meteostancii/ITLINE - Инструкция управления метеостанцией с_ИК-пульта.pdf",size:"265 КБ"},{name:"ITLINE - Инструкция управления метеостанцией с ПО для ПК по Локальной сети",url:"chasy-meteostancii/ITLINE - Инструкция управления метеостанцией с ПО для ПК по Локальной сети.pdf",size:"206 КБ"},{name:"Часы-метеостанции список параметров конфигурирования и редактирование значений",url:"chasy-meteostancii/Часы-метеостанции список параметров конфигурирования и редактирование значений.pdf",size:"85,90 КБ"}]},{title:"Программы",files:[{name:"ITLINE PRO_Program",url:"chasy-meteostancii/ITLINE PRO_Program.zip",size:"33,90 МБ"},{name:"ПО для часов-термометров с LAN подключением",url:"chasy-meteostancii/ПО для часов-термометров с LAN подключением.wim",size:"652 КБ"}]}],"sport-display":[{title:"Инструкции",files:[{name:"Пример инструкции для спортивного табло, управление с ПК",url:"sport-display/ITLINE - Инструкция управления Спортивным табло с ПО для ПК.pdf",size:"213 КБ"},{name:"ITLINE - Инструкция управления Спортивным табло с ПО для Планшета",url:"sport-display/ITLINE - Инструкция управления Спортивным табло с ПО для Планшета.pdf",size:"279 КБ"}]},{title:"Программы",files:[{name:"Пример программного обеспечения для спортивного табло, управление с ПК",url:"sport-display/Пример программного обеспечения для спортивного табло, управление с ПК.zip",size:"5,86 МБ"}]}],"tablo-valyut":[{title:"Инструкции",files:[{name:"Параметры конфигурирования и редактирования значений с ИК-пульта для универсальных цифровых табло валют",url:"tablo-valyut/Параметры конфигурирования и редактирования значений с ИК-пульта для универсальных цифровых табло валют.pdf",size:"217 КБ"}]},{title:"Программы",files:[{name:"ITLINE Finance_Program",url:"tablo-valyut/ITLINE Finance-1.6.13.zip",size:"33,90 МБ"},{name:"ПО для классических цифровых валютных табло",url:"tablo-valyut/ПО для классических цифровых валютных табло.zip",size:"2,32 МБ"},{name:"ПО для универсальных валютных табло на основе матриц",url:"tablo-valyut/ПО для универсальных валютных табло на основе матриц.zip",size:"6,11 МБ"}]}]}}},watch:{},computed:Object(w["a"])({},S(["products","selectedProduct","selectedIndex"])),created:function(){var t=this;window.addEventListener("resize",this.onResize),this.getProducts().then((function(){return t.loading=!1}))},methods:Object(w["a"])(Object(w["a"])({},O(["getProducts","selectProduct"])),{},{onResize:function(){this.windowWidth=window.innerWidth}}),destroyed:function(){window.removeEventListener("resize",this.onResize)}},j=$,M=(a("84de"),Object(m["a"])(j,g,E,!1,null,null,null)),F=M.exports,W={components:{ProductsBlockInfo:F}},G=W,R=(a("f806"),Object(m["a"])(G,z,T,!1,null,null,null)),A=R.exports;n["default"].use(r.a);var B={name:"Support",props:["tab"],components:{ContactSupportTab:b,WarrantyTab:C,KnowledgeBaseTab:A},data:function(){return{currentTab:"contactsTab"}},created:function(){this.$store.commit("setSeoTitle","Техническая поддержка от специалистов компании ITLINE"),this.$store.commit("setSeoDescription","Корректно заполните форму для обращения в техническую поддержку производителя ITLINE. При появлении технических вопросов специалисты компании ITLINE оперативно осуществляют консультирование по вопросам установки и эксплуатации светодиодных табло.");var t=[{path:"/",name:"Home",meta:{title:"Главная"}},{path:"/support",name:"Support",meta:{title:"Техподдержка"}}];this.$store.commit("changeBreadcrumbs",t)},mounted:function(){this.tab&&this.$refs.tabs.selectTab(this.tab)},methods:{tabChanged:function(t){this.currentTab=t.tab.id}}},K=B,D=Object(m["a"])(K,s,i,!1,null,null,null);e["default"]=D.exports},"84de":function(t,e,a){"use strict";a("0b2b")},8623:function(t,e,a){},cf57:function(t,e,a){},d70e:function(t,e,a){"use strict";a("cf57")},ec11:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nothing-found"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",{staticClass:"nothing-found__title"},[t._v("Ничего не найдено")]),a("h3",{staticClass:"h3 text-grey-2 mb-32"},[t._v("Результатов поиска нет :(")]),a("button",{staticClass:"btn default",on:{click:function(e){return t.$router.push({name:t.pushName||"Home"})}}},[a("span",{staticClass:"text-uppercase p4"},[t._v("Вернуться назад")])])])])])])},i=[],n={props:["pushName"]},l=n,r=(a("d70e"),a("2877")),o=Object(r["a"])(l,s,i,!1,null,null,null);e["a"]=o.exports},f806:function(t,e,a){"use strict";a("8623")}}]);
//# sourceMappingURL=Support.02137c74.js.map