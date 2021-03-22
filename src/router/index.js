import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    meta: { 
      breadcrumb: {
        name: 'Home',
        title: "Главная"
      } 
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
    meta: { 
      breadcrumb: {
        name: 'About',
        title: "О компании"
      } 
    },
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import(/* webpackChunkName: "Solutions" */ '../views/Solutions.vue'),
    meta: { 
      breadcrumb: {
        name: 'Solutions',
        title: "Готовые решения"
      } 
    },
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "News" */ '../views/News.vue'),
    meta: { 
      breadcrumb: {
        name: 'News',
        title: "Новости"
      } 
    },
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue'),
    meta: { breadcrumb: 'Blog' },
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "Contacts" */ '../views/Contacts.vue'),
    meta: { 
      breadcrumb: {
        name: 'Contacts',
        title: "Контакты"
      } 
    },
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "Products" */ '../views/Products.vue'),
    meta: { 
      breadcrumb: {
        name: 'Products',
        title: "Продукция"
      } 
    },
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import(/* webpackChunkName: "Support" */ '../views/Support.vue'),
    meta: { 
      breadcrumb: {
        name: 'Support',
        title: "Техподдержка"
      } 
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   next()
// })

export default router
