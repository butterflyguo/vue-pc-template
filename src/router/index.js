import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Car from "../views/Car.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect:'/car',
    children: [
      {
        path:'/car',
        name:'car',
        component: ()=>import('../views/Car.vue')
      }
    ]
  },
  {
    path:'*',
    redirect:'/404'
  }
 
];

const router = new VueRouter({
  routes
});

export default router;
