import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: "/vue/",
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("./views/HomePage.vue")
    },
    {
      path: "/product",
      name: "productpage",
      component: () => import("./views/ProductPage.vue")
    },
    {
      path: "/other",
      component: () => import("./views/OtherPage.vue"),
      children: [
        {
          path: "",
          name: "helloworld",
          component: () => import("./components/OtherDemo/HelloWorld.vue"),
          props: {
            myMessage: "Hello World!"
          }
        },
        {
          path: "sudoku",
          name: "sudoku",
          component: () => import("./components/OtherDemo/Sudoku.vue")
        },
        {
          path: "todolist/:id",
          name: "todolist",
          component: () => import("./components/OtherDemo/TodoList.vue")
        }
      ]
    }
  ]
});
