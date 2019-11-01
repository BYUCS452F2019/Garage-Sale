import Vue from 'vue';
import Router from 'vue-router';

import Home from './../views/Home';
import Login from './../views/Login';
import Register from './../views/Register';
import ProfilePage from './../views/ProfilePage';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      component: ProfilePage
    },

    // otherwise redirect to home
    {
      path: '*',
      redirect: '/'
    }
  ]
});

 router.beforeEach((to, from, next) => {
   // redirect to login page if not logged in and trying to access a restricted page
   const publicPages = ['/login', '/register', '/'];
   const authRequired = !publicPages.includes(to.path);
   const loggedIn = localStorage.getItem('user');

   if (authRequired && !loggedIn) {
     return next('/login');
   }

   next();
 })
