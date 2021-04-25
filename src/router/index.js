import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';

Vue.use(VueRouter)

function transliterate(text, engToRus) {
  console.log();
  text = text.split('_').join(' ');
  text = text[0].toUpperCase() + text.slice(1);
  let rus = "щ ш ч ц ю я ё ж х ъ ы э а б в г д е з и й к л м н о п р с т у ф ь 0 1 2 3 4 5 6 7 8 9 ".split(/ +/g);
  let eng = "shh sh ch cz yu ya yo zh kh `` y e` a b v g d e z i j k l m n o p r s t u f ` 0 1 2 3 4 5 6 7 8 9 ".split(/ +/g);
  var x;
  for(x = 0; x < rus.length; x++) {
    text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
    text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());	
  }
  return text;
}

// console.log(transliterate('Обновление Sentinel LDK 8.0.4').toLowerCase().split(' ').join('_'));
console.log(transliterate('obnovlenie_sentinel_ldk_8.0.4', true));

const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    meta: {
      breadcrumb: 'Главная'
    }
  },
  // About
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
    meta: {
      breadcrumb: {
        label: 'О компании',
        parent: 'Home'
      }
    },
    children: [
      {
        name: 'InformationTab',
        path: 'information',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/About/Tabs/InformationTab.vue'),
      },
      {
        name: 'CertificatesTab',
        path: 'certificates',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/About/Tabs/CertificatesTab.vue'),
      },
      {
        name: 'VacanciesTab',
        path: 'vacancies',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/About/Tabs/VacanciesTab.vue'),
      },
      {
        name: 'HistoryTab',
        path: 'history',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/About/Tabs/HistoryTab.vue'),
      },
      {
        name: 'GalleryTab',
        path: 'gallery',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/About/Tabs/GalleryTab.vue'),
      },
      {
        name: 'DealersTab',
        path: 'dealers',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/About/Tabs/DealersTab.vue'),
      }
    ]
  },
  // Solutions
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import(/* webpackChunkName: "Solutions" */ '../views/Solutions.vue'),
    meta: {
      breadcrumb: {
        label: 'Готовые решения',
        parent: 'Home'
      }
    }
  },
  // News
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "News" */ '../views/News.vue'),
    meta: {
      breadcrumb: {
        label: 'Новости',
        parent: 'Home'
      }
    },
  },
  // NewsPage
  {
    path: '/news/:id',
    name: 'NewsPage',
    component: () => import(/* webpackChunkName: "NewsPage" */ '../components/News/NewsPage.vue'),
    props: true,
    meta: {
      breadcrumb() {
        const { id } = this.$route.params;
        let title = transliterate(id, true);
        return {
          label: title + '',
          parent: 'News'
        };
      }
    },
  },
  // GalleryPage
  {
    path: '/about/gallery/:id',
    name: 'GalleryPage',
    component: () => import(/* webpackChunkName: "GalleryPage" */ '../components/Gallery/GalleryPage.vue'),
    props: true,
    meta: {
      breadcrumb() {
        const { id } = this.$route.params;
        let title = transliterate(id, true);
        return {
          label: title + '',
          parent: 'About'
        };
      }
    },
  },
  // Contacts
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/Contacts.vue'),
    meta: {
      breadcrumb: {
        label: 'Контакты',
        parent: 'Home'
      }
    }
  },
  // Products
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "Products" */ '../views/Products.vue'),
    meta: {
      breadcrumb: {
        label: 'Продукция',
        parent: 'Home'
      }
    },
    children: [
      {
        name: 'OutputTab',
        path: 'output',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/Products/Tabs/OutputTab.vue'),
      },
      {
        name: 'PaymentTab',
        path: 'payment',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/Products/Tabs/PaymentTab.vue'),
      }
    ]
  },
  // ProductsCategory
  {
    path: '/products/category/:id',
    name: 'ProductsCategory',
    component: () => import(/* webpackChunkName: "ProductsCategory" */ '../components/Products/ProductsCategory.vue'),
    props: true,
    meta: {
      breadcrumb() {
        const { id } = this.$route.params;
        let title = transliterate(id, true);

        return {
          label: title + '',
          parent: 'Products'
        };
      }
    },
  },
  // ProductsCategoryPage
  {
    path: '/products/category/:id/:category_id',
    name: 'ProductsCategoryPage',
    component: () => import(/* webpackChunkName: "ProductsCategoryPage" */ '../components/Products/ProductsCategoryPage.vue'),
    props: true,
    meta: {
      breadcrumb() {
        const { id, category_id } = this.$route.params;
        let title = transliterate(category_id, true);
        return {
          label: title + '',
          parent: 'ProductsCategory'
        };
      }
    },
  },
  // ProductsPage
  {
    path: '/products/category/:id/:category_id/:product_id',
    name: 'ProductsPage',
    component: () => import(/* webpackChunkName: "ProductsPage" */ '../components/Products/ProductsPage.vue'),
    props: true,
    meta: {
      breadcrumb() {
        const { id, category_id, product_id } = this.$route.params;
        let title = transliterate(product_id, true);
        return {
          label: title + '',
          parent: 'ProductsCategoryPage'
        };
      }
    },
  },
  // Support
  {
    path: '/support',
    name: 'Support',
    component: () => import(/* webpackChunkName: "Support" */ '../views/Support.vue'),
    meta: {
      breadcrumb: {
        label: 'Техподдержка',
        parent: 'Home'
      }
    },
    children: [
      {
        name: 'ContactSupportTab',
        path: 'contacts',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/Support/Tabs/ContactSupportTab.vue'),
      },
      {
        name: 'WarrantyTab',
        path: 'warranty',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/Support/Tabs/WarrantyTab.vue'),
      },
      {
        name: 'KnowledgeBaseTab',
        path: 'knowledge',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/Support/Tabs/KnowledgeBaseTab.vue'),
      }
    ]
  },
  // PageNotFound
  { 
    path: "*", 
    name: 'PageNotFound',
    component: () => import(/* webpackChunkName: "Support" */ '../components/PageNotFound.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  next()
})

export default router
