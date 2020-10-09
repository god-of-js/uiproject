<template>
  <div class="col-lg-3 p-1 col-md-5 col-sm-8">
    <div class="white_bg  p-3 text-left pt-4 text-center">
      <div style="color:#16152B; font-size: 18px;">{{ text }}</div>
      <div style="color:#093ECB; font-size: 60px;">{{ number }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    number: Number
  }
};
</script>
<style scoped>
.card-header {
  text-align: left;
  font-size: 20px;
  letter-spacing: 0px;
  color: #777777;
  opacity: 1;
}
.number {
  font-size: 30px;
  font-weight: bold;
}
.line {
  height: 9px;
  border-radius: 6px;
  opacity: 1;
}
</style>
