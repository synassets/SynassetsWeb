/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);



const constantRouter = [

  {
    path: "/",
    redirect: "/",
    component: ()=>import("@/views/layout/Index"),
    meta: { title: "Index" },
    children: [
      {
        path: "/",
        name: "index",
        component: () => import("@/views/index/Index"),
        meta: { title: "index" },
      },

      {
        path: "/index",
        name: "index",
        component: () => import("@/views/index/Index"),
        meta: { title: "index" },
      }
    ],
  },
  {
    path: "*",
    redirect: "/",
    component: ()=>import("@/views/layout/Index"),
    meta: { title: "Index" },
    children: [

    ],
  },


];

export default new Router({
  base: "/",
  mode: "hash",
  routes: constantRouter,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
