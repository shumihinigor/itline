import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
    path: '/news/page',
    name: 'NewsPage',
    component: () => import(/* webpackChunkName: "NewsPage" */ '../components/News/NewsPage.vue'),
    meta: {
      breadcrumb() {
        const { title } = this.$route.query;
        return {
          label: title + '',
          parent: 'News'
        };
      }
    },
  },
  // GalleryPage
  {
    path: '/about/gallery/page',
    name: 'GalleryPage',
    component: () => import(/* webpackChunkName: "GalleryPage" */ '../components/Gallery/GalleryPage.vue'),
    meta: {
      breadcrumb() {
        const { title } = this.$route.query;
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
        name: 'GoodsTab',
        path: 'goods',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/Products/Tabs/GoodsTab.vue'),
      },
      {
        name: 'PaymentTab',
        path: 'payment',
        component: () => import(/* webpackChunkName: "NewsPage" */ '../components/Products/Tabs/PaymentTab.vue'),
      }
    ]
  },
  // ProductsPage
  {
    path: '/products/goods/page',
    name: 'ProductsPage',
    component: () => import(/* webpackChunkName: "ProductsPage" */ '../components/Products/ProductsPage.vue'),
    meta: {
      breadcrumb() {
        const { title } = this.$route.query;
        return {
          label: title + '',
          parent: 'Products'
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
