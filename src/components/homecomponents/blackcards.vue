<template>
  <div class="black-box-category width-30 m-4 col-lg-3 col-sm-12">
    <div class="circle-image">
      <img :src="imgLink" width="45" />
    </div>
    <div class="black-box-content">
      <div class="black-box-content-header mt-2">{{ title }}</div>
      <div class="black-box-content-text p-2 pt-4">
        <p>{{ paragraph1 }}</p>
        <p>{{ paragraph2 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgLink: String,
    title: String,
    paragraph1: String,
    paragraph2: String
  }
};
</script>
