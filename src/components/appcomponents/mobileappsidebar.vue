<template>
  <nav class="sidebar" v-if="this.$store.state.app.sidebar === true">
    <div class="d-flex justify-content-between p-3">
      <li class="d-flex align-items-center">
        <img src="/assets/logo.png" alt width="120" />
      </li>
      <button
        type="button"
        class="closebtn"
        aria-label="Close"
        @click="closesidebar()"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="d-flex justify-content-center p-0">
      <div class="col-12 mt-5 pt-3 m-0 pr-0">
        <div
          :class="
            router === route.route ? 'active-item ' + routeClass : routeClass
          "
          :id="route.name"
          v-for="route in routes"
          :key="route.name"
          @click="changeRoute(route)"
        >
          <span :class="'mdi mr-2 icon ' + route.icon"></span>
          <span class="route-name">{{ route.name }}</span>
        </div>
      </div>
    </div>
    <div
      class="logout pl-4 mb-3 mt-3 d-flex align-items-center"
      @click="logout"
    >
      <span class="mdi mr-2 icon mdi-logout"></span>
      <span class="route-name">Log Out</span>
    </div>
  </nav>
</template>
<script>
import router from "../../router/index.js";
export default {
  data: () => {
    return {
      router: router.history.current.fullPath,
      routeClass: "route pl-2 mb-3 mt-3 d-flex align-items-center ",
      routes: [
        {
          name: "Dashboard",
          route: "/dashboard",
          icon: "mdi-view-dashboard-outline"
        },
        {
          name: "Contest Results",
          route: "/dashboard/results",
          icon: "mdi-content-paste"
        },
        {
          name: "Vault",
          route: "/dashboard/vault",
          icon: "mdi-safe-square-outline"
        },
        {
          name: "Help",
          route: "/dashboard/help",
          icon: "mdi-help-circle-outline"
        }
      ]
    };
  },
  methods: {
    changeRoute(path) {
      let id;
      this.$router.push(path.route);
      for (let i = 0; i < this.routes.length; i++) {
        id = document.getElementById(`${this.routes[i].name}`);
        id.classList.remove("active-item");
      }
      document.getElementById(path.name).classList.add("active-item");
      this.$store.state.app.sidebar = false;
    },
    logout() {
      this.$router.push("/");
    },
    closesidebar() {
      this.$store.state.app.sidebar = false;
    }
  }
};
</script>
