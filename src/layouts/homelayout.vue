<template>
  <div class="body p-0 m-0 ">
    <component :is="componentId"></component>
    <sidebar />
    <navbar
      style="position: -webkit-sticky;position: sticky;top: 0; z-index: 3;"
    />
    <router-view class="" style="z-index: 1;"></router-view>
    <foot />
  </div>
</template>
<script>
import navbar from "../components/homecomponents/nav.vue";
import sidebar from "../components/homecomponents/sidebar.vue";
import foot from "../components/homecomponents/footer.vue";
import preloader from "../components/homecomponents/preloader.vue";
export default {
  data: () => {
    return {
      componentId: ""
    };
  },
  mounted() {
    this.componentId = "preloader";
    setTimeout(() => {
      this.componentId = "";
    }, 3000);
  },
  components: {
    navbar,
    foot,
    sidebar,
    preloader
  }
};
</script>
<style scoped>
@import url("../style/style.css");
@import url("../style/mobile.css");
</style>
