<template>
  <div class="d-flex tab-content p-3 row">
    <div class="text-left col-lg-6 col-sm-10">
      <div class="tab-header font-53" style="color:#1D1D1D;">{{ title }}</div>
      <div class="col-lg-8 col-sm-10 px-14">
        <p>{{ paragraph1 }}</p>
        <p>{{ paragraph2 }}</p>
      </div>
    </div>
    <div style="flex: 5" class="d-flex justify-content-center align-center">
      <img :src="img" alt width="100" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    paragraph1: String,
    paragraph2: String,
    img: String
  }
};
</script>
