import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: "/vue/",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/productlist",
      name: "productlist",
      component: () => import("./views/ProductList.vue")
    },
    {
      path: "/other",
      component: () => import("./views/Other.vue"),
      children: [
        {
          path: "",
          name: "helloworld",
          component: () => import("./components/otherDemo/HelloWorld.vue"),
          props: {
            myMessage: "Hello World!"
          }
        },
        {
          path: "sudoku",
          name: "sudoku",
          component: () => import("./components/otherDemo/Sudoku.vue")
        },
        {
          path: "todolist/:id",
          name: "todolist",
          component: () => import("./components/otherDemo/TodoList.vue")
        }
      ]
    }
  ]
});
