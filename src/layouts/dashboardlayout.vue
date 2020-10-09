<template>
  <div class="row" style="height: 100vh;">
    <mobileappsidebar />
    <div
      class="col-lg-2 p-0 pr-0 layout-sidebar"
      style="border: 1px solid #DEDEDE;"
    >
      <sidebar />
    </div>
    <div
      class="col-lg-10 col-md-12 col-md-12 p-0 "
      style="overflow-x: hidden;
    background: #F5F5FB 0% 0% no-repeat padding-box;"
    >
      <button class="trans-btn pl-4" @click="open">
        <span class="mdi mdi-menu"></span>
      </button>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import sidebar from "../components/appcomponents/sidebar.vue";
import mobileappsidebar from "../components/appcomponents/mobileappsidebar.vue";
export default {
  components: {
    sidebar,
    mobileappsidebar
  },
  methods: {
    open() {
      this.$store.state.app.sidebar = true;
    }
  }
};
</script>
<style scoped>
@import url("../style/app.css");
@import url("../style/appmobile.css");
</style>
