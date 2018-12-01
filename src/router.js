import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Repair from "./views/repair.vue";
import Sewing from "./views/sewing.vue";
import Price from "./views/price.vue";
import Сontacts from "./views/contacts.vue";
import Work from "./views/work.vue";
import Vacancy from "./views/vacancy.vue";
import About from "./views/about.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
    , {
      path: "/page/repair",
      name: "repair",
      component: Repair
    }
    , {
      path: "/page/sewing",
      name: "sewing",
      component: Sewing
    }
    , {
      path: "/page/price",
      name: "price",
      component: Price
    }
    , {
      path: "/page/contacts",
      name: "contacts",
      component: Сontacts
    }
    , {
      path: "/page/work",
      name: "work",
      component: Work
    }
    , {
      path: "/page/vacancy",
      name: "vacancy",
      component: Vacancy
    }
    , {
      path: "/page/about",
      name: "about",
      component: About
    }
  ]
});
