import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';

import store from "@/store";

Vue.use(VueRouter)

function transliterateEN(text) {
  text = text.split('-').join(' ');
  
  let rus = "щ ш ч ц ю я ё ж х ъ ы э а б в г д е з и й к л м н о п р с т у ф ь 0 1 2 3 4 5 6 7 8 9".split(/ +/g);
  let eng = "shh sh ch cz yu ya yo zh kh `` y eh a b v g d e z i j k l m n o p r s t u f ` 0 1 2 3 4 5 6 7 8 9".split(/ +/g);

  for (var x = 0; x < rus.length; x++) {
      text = text.split(eng[x]).join(rus[x]);
  }

  return text[0].toUpperCase() + text.slice(1);
}

// test 
// console.log(transliterateEN('tablo-dlya-azs')); // Табло для азс
// console.log(transliterateEN('obnovlenie-SENTINEL-LDK-8.0.4')); // Обновление SENTINEL LDK 8.0.4

function transliterateRU(text) {

  text = text.toLowerCase();

  let rus = "щ ш ч ц ю я ё ж х ъ ы э а б в г д е з и й к л м н о п р с т у ф ь 0 1 2 3 4 5 6 7 8 9".split(/ +/g);
  let eng = "shh sh ch cz yu ya yo zh kh `` y eh a b v g d e z i j k l m n o p r s t u f ` 0 1 2 3 4 5 6 7 8 9".split(/ +/g);

  for (var x = 0; x < rus.length; x++) {
      text = text.split(rus[x]).join(eng[x]);
  }
  
  return text.split(' ').join('-');
}

// test 
// console.log(transliterateRU('Табло для АЗС')); // tablo-dlya-azs
// console.log(transliterateRU('Обновление Sentinel LDK 8.0.4')); // obnovlenie-SENTINEL-LDK-8.0.4

const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    meta: {
      title: 'Главная',
      breadcrumb: 'Главная'
    }
  },
  // About
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
    meta: {
      title: 'О компании',
      breadcrumb: {
        label: 'О компании',
        parent: 'Home'
      }
    }
  },
  // Solutions
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import(/* webpackChunkName: "Solutions" */ '../views/Solutions.vue'),
    meta: {
      title: 'Готовые решения',
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
      title: 'Новости',
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
      title: '',
      breadcrumb() {
        const { id } = this.$route.params;
        // const { title } = this.$route.meta;
        const title = transliterateEN(id);
        return {
          label: title,
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
        let title = transliterateEN(id);
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
        let title = transliterateEN(id);

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
        let title = transliterateEN(category_id);
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
        let title = transliterateEN(product_id);
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
    }
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
  // const breadcrumbs = store.getters["breadcrumbs"];
  // breadcrumbs.map((item, idx) => {
  //   if (item.name !== to.name) {
      
  //   }
  // });
  // console.log(breadcrumbs);
  next()
})

export default router
