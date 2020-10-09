import homelayout from "../layouts/homelayout.vue";
import home from "../views/home/Home.vue";
import signup from "../views/home/signup.vue";
import contact from "../views/home/contact.vue";
export default [
  {
    path: "/",
    component: homelayout,
    children: [
      {
        path: "/",
        component: home
      },
      {
        path: "/contact",
        component: contact
      },
      {
        path: "/sign-up",
        component: signup
      }
    ]
  }
];
