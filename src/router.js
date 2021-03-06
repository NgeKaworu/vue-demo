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
          path: "helloworld",
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
    },
    {
      path: "/d3",
      component: () => import("./views/D3DemosPage.vue"),
      children: [
        {
          path: "histogram",
          name: "histogram",
          component: () => import("./components/D3Demo/D3Histogram.vue")
        },
        {
          path: "pie",
          name: "pie",
          component: () => import("./components/D3Demo/D3Pie.vue")
        },
        {
          path: "force",
          name: "force",
          component: () => import("./components/D3Demo/D3Force.vue")
        },
        {
          path: "chord",
          name: "chord",
          component: () => import("./components/D3Demo/D3Chord.vue")
        },
        {
          path: "hierarchy",
          name: "hierarchy",
          component: () => import("./components/D3Demo/D3Hierarchy.vue")
        },
        {
          path: "enclosure",
          name: "enclosure",
          component: () => import("./components/D3Demo/D3Enclosure.vue")
        },
        {
          path: "map",
          name: "map",
          component: () => import("./components/D3Demo/D3Map.vue")
        }
      ]
    }
  ]
});
