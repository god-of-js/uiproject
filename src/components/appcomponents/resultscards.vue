<template>
  <div class="col-lg-3 p-2 pl-3 col-md-5 col-sm-8">
    <div
      class="white_bg  p-3 text-left pt-4 d-flex  justify-content-between align-items-center"
    >
      <div class="cards-text">{{ text }}</div>
      <div class=" col-4 card-number">{{ number }}</div>
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
