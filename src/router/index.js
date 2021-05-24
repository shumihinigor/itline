import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';

import store from "@/store";

Vue.use(VueRouter)

const routes = [
  // Home +
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Главная"
    },
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  // About +
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "О компании"
    },
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  // News +
  {
    path: '/news',
    name: 'News',
    meta: {
      title: "Новости"
    },
    component: () => import(/* webpackChunkName: "News" */ '../views/News.vue')
  },
  // NewsPage +
  {
    path: '/news/:id',
    name: 'NewsPage',
    component: () => import(/* webpackChunkName: "NewsPage" */ '../components/News/NewsPage.vue'),
    props: true
  },
  // GalleryPage +
  {
    path: '/about/gallery/:id',
    name: 'GalleryPage',
    component: () => import(/* webpackChunkName: "GalleryPage" */ '../components/Gallery/GalleryPage.vue'),
    props: true
  },
  // Contacts +
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/Contacts.vue'),
    meta: {
      title: "Контакты"
    }
  },
  // Products +
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "Products" */ '../views/Products.vue'),
    meta: {
      title: "Продукция"
    }
  },
  // ProductsCategory +
  {
    path: '/products',
    name: 'ProductsCategory',
    component: () => import(/* webpackChunkName: "ProductsCategory" */ '../components/Products/ProductsCategory.vue'),
    props: true,
    children: [
      // ProductsCategoryList
      {
        path: ':id',
        name: 'ProductsCategoryList',
        component: () => import(/* webpackChunkName: "ProductsCategoryList" */ '../components/Products/ProductsCategoryList.vue'),
        props: true
      },
      // ProductsCategoryPage
      {
        path: ':id/:category_id',
        name: 'ProductsCategoryPage',
        component: () => import(/* webpackChunkName: "ProductsCategoryPage" */ '../components/Products/ProductsCategoryPage.vue'),
        props: true
      }
    ]
  },
  // ProductsPage
  {
    path: '/products/category/:id/:category_id/:product_id',
    name: 'ProductsPage',
    component: () => import(/* webpackChunkName: "ProductsPage" */ '../components/Products/ProductsPage.vue'),
    props: true
  },
  // Support +
  {
    path: '/support',
    name: 'Support',
    component: () => import(/* webpackChunkName: "Support" */ '../views/Support.vue'),
    meta: {
      title: "Техподдержка"
    }
  },
  // PageNotFound +
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
  next()
})

export default router
