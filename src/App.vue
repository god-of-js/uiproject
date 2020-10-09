<template>
  <div id="app">
    <router-view class="router-view" />
  </div>
</template>

<style>
@font-face {
  src: url("/graphikfont/graphicfont/Graphik-Bold.ttf");
  font-family: "Graphik-bold";
}
@font-face {
  src: url("/graphikfont/graphicfont/Graphik-Regular.ttf");
  font-family: "Graphik-light";
}
* {
  font-family: "Graphik-light";
}
body {
  padding: 0% !important;
  margin: 0% !important;
  padding-right: 0% !important;
  overflow-x: none !important;
}
#app {
  padding-right: 0% !important;
  margin-right: 0% !important;
  overflow-x: none !important;
}
.router-view {
  margin-right: 0% !important;
  overflow-x: none !important;
}
</style>
