<template>
  <div class="col-lg-3 p-2 pl-3 col-md-5 col-sm-12">
    <div class="white_bg  p-3 text-left pt-4 ">
      <div class="pb-3">
        <img :src="img" alt width="75" />
      </div>
      <div class="cards-header">{{ header }}</div>
      <div class="number" :style="`color: ${color}`">{{ number }}</div>
      <div
        class="line col-12"
        :style="`background: ${color} 0% 0% no-repeat padding-box;`"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    header: String,
    number: String,
    color: String,
    img: String
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
