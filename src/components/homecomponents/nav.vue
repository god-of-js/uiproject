<template>
  <div>
    <nav
      class="nav d-flex pt-2 justify-content-between align-items-center pb-0 col-12"
      style="background-color: #ffffff;border-bottom: 1px solid #F8F8F8; z-index: 2"
    >
      <button
        class="btn btn-link setting-button"
        style="color: black; display: none;"
        @click="responsive()"
      >
        <span class="mdi mdi-dots-vertical"></span>
      </button>
      <ul class="winsisu-text-box">
        <li class="d-flex align-items-center">
          <img src="/assets/logo.png" alt="" width="120" />
        </li>
      </ul>
      <ul
        class="d-flex justify-content-between pl-0 align-items-center pt-1 nav-route-list"
        id="nav-route-list"
        style="font-size: 13px;"
      >
        <li
          class="m-2 li p-1"
          v-for="(path, index )in routes"
          :key="index"
          @click="changeRoute(path)"
        >
          <router-link
            :to="`${path.path}`"
            :class="[router === `${path.path}` ? 'active-link' : '', 'link']"
            :id="path.path"
            >{{ path.name }}</router-link
          >
        </li>
      </ul>
      <router-link to="/dashboard" class="link">
        <button
          class="btn btn-color pr-4 pl-4 px-14 mr-2"
          style="margin-top: -10px;"
        >
          LOG IN
        </button>
      </router-link>
    </nav>
  </div>
</template>
<style scoped>
@import url("../../style/mobile.css");
</style>
<script>
import router from "@/router/index.js";
export default {
  data: () => {
    return {
      routes: [
        {
          name: "HOME",
          path: "/"
        },
        {
          name: "WHY JOIN?",
          path: "/sign-up"
        },
        {
          name: "CONTACT",
          path: "/contact"
        }
      ],
      router: router.history.current.fullPath
    };
  },
  mounted() {},
  methods: {
    responsive() {
      this.$store.state.home.sidebar = true;
    },
    changeRoute(path) {
      let id;
      console.log(path);
      for (let i = 0; i < this.routes.length; i++) {
        id = document.getElementById(`${this.routes[i].path}`);
        id.classList.remove("active-link");
      }
      document.getElementById(path.path).classList.add("active-link");
    }
  }
};
</script>
