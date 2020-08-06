import Vue from "vue";
import Router from "vue-router";
// import NProgress from "nprogress";
import "nprogress/nprogress.css";
// import NotFound from "./views/404";

Vue.use(Router);

export default new Router({
  node: "history",
  base: process.env.BABEL_ENV,
  routes: [
    {
      path: "/user",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/UserLayout"),
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Login")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Register")
        }
      ]
    },
    {}
  ]
});
