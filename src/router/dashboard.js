import dashboardlayout from "../layouts/dashboardlayout.vue";
import dashboard from "../views/dashboard/dashboard.vue";
import help from "../views/dashboard/help.vue";
import results from "../views/dashboard/results.vue";
import vault from "../views/dashboard/vault.vue";
export default [
  {
    path: "/dashboardlayout",
    component: dashboardlayout,
    children: [
      {
        path: "/dashboard",
        component: dashboard
      },
      {
        path: "/dashboard/vault",
        component: vault
      },
      {
        path: "/dashboard/results",
        component: results
      },
      {
        path: "/dashboard/help",
        component: help
      }
    ]
  }
];
