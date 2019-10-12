import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        authenticatedRoute: false,
        navIndex: '1'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
      meta: {
        authenticatedRoute: false,
        navIndex: '2'
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "contacts" */ './views/Contacts.vue'),
      meta: {
        authenticatedRoute: true,
        navIndex: '3'
      }
    },
    {
      path: '/contacts/:id',
      component: () => import(/* webpackChunkName: "contacts" */ './views/Contact.vue'),
      meta: {
        authenticatedRoute: true,
        navIndex: '3'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
      meta: {
        authenticatedRoute: true,
        navIndex: '4'
      }
    },
    {
      path: '/profile/edit',
      name: 'edit-profile',
      component: () => import(/* webpackChunkName: "contacts" */ './views/ProfileEdit.vue'),
      meta: {
        authenticatedRoute: true,
        navIndex: '4'
      }
    }
  ]
})
