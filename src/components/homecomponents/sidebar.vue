<template>
  <nav class="sidebar" v-if="this.$store.state.home.sidebar === true">
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
    <div class="list-item p-3" @click="changeRoute()">HOME</div>
    <div class="list-item p-3">NEWS</div>
    <div class="list-item p-3">MEMBERSHIP</div>
    <div class="list-item p-3">WINSUSU CHAPTERS</div>
    <div class="list-item p-3" @click="changeRoute('/sign-up')">WHY JOIN?</div>
    <div class="list-item p-3">HOW TO WINSUSU</div>
    <div class="list-item p-3" @click="changeRoute('/contact')">CONTACT</div>
  </nav>
</template>
<script>
export default {
  methods: {
    changeRoute(route) {
      if (route === undefined) {
        ("/");
        this.$store.state.home.sidebar = false;
      } else {
        this.$router.push(route);
        this.$store.state.home.sidebar = false;
      }
    },
    closesidebar() {
      this.$store.state.home.sidebar = false;
    }
  }
};
</script>
