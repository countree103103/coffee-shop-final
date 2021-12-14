import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      index: 0,
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth.vue"),
    meta: {
      index: 4,
    },
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
    meta: {
      index: 4,
    },
  },
  {
    path: "/order-detail",
    name: "OrderDetail",
    component: () => import("../views/OrderDetail.vue"),
    // meta: {
    //   index: 4,
    // },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: {
      index: 3,
    },
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/Menu.vue"),
    meta: {
      index: 1,
    },
  },
  {
    path: "/Customize",
    name: "Customize",
    component: () => import("../views/Coffee.vue"),
    meta: {
      index: 2,
    },
  },
];

const router = new VueRouter({
  routes,
});

// 路由跳转前进后退动画,Vue原型上定义transition为动画效果
router.beforeEach((to, from, next) => {
  store.commit("changeTransition", "slide-none");
  if (from.meta.index > to.meta.index) {
    // 后退,想右滑动
    store.commit("changeTransition", "slide-right");
  } else if (from.meta.index < to.meta.index) {
    // 前进,想左滑动
    store.commit("changeTransition", "slide-left");
  } else {
    // 同一层级,无动画
    store.commit("changeTransition", "slide-none");
  }
  next();
});

export default router;
