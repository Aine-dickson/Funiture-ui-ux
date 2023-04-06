import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'splash',
    component: () => import('@/views/splash.vue')
  },
  {
    path: '/auth',
    name: "auth",
    component: () => import('@/auth/auth.vue'),
    children: [
      {
        path: '/signup',
        name: "signup",
        component: () => import('@/auth/signup.vue')
      },
      {
        path: '/login',
        name: "login",
        component: () => import('@/auth/login.vue')
      },
      {
        path: '/password reset',
        name: "password",
        component: () => import('@/auth/password.vue')
      },
    ]
  },
  {
    path: "/main",
    name: "main",
    component: () => import('@/views/main.vue'),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import('@/views/pages/home.vue')
      },
      {
        path: "/account",
        name: "account",
        component: () => import('@/views/pages/account.vue')
      },
      {
        path: "/wishlist",
        name: "wishlist",
        component: () => import('@/views/pages/wishlist.vue')
      },
      {
        path: "/scan",
        name: "scan",
        component: () => import('@/views/pages/scan.vue')
      },
      {
        path:"/:cat/:name",
        name: "item",
        props: true,
        component: () => import('@/views/pages/item.vue')
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
