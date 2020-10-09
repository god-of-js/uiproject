<template>
  <div class="col-lg-6 col-sm-12 col-md-6">
    <div class="white_bg col-12 m-2 p-0" style="min-height: 250px">
      <div
        class="pl-4 p-2"
        style="border-bottom: 1px solid #DEDEDE;font-size: 18px; font-weight: bold"
      >
        {{ title }}
      </div>
      <div class="pb-2 pt-2 pl-2">
        <span class="vault-text col-6">{{ caption1 }}</span>
        <span class="vault-number">{{ value1 }}</span>
      </div>
      <div class="p-2 pl-2">
        <span class="vault-text col-6">{{ caption2 }}</span>
        <span class="vault-number">{{ value2 }}</span>
      </div>
      <div class="p-2 pl-2">
        <span class="vault-text col-6">{{ caption3 }}</span>
        <span class="vault-number">{{ value3 }}</span>
      </div>
      <div class="p-2 pl-2" v-if="caption4 !== null">
        <span class="vault-text col-6">{{ caption4 }}</span>
        <span class="vault-number">{{ value4 }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    caption1: String,
    value1: Number,
    caption2: String,
    value2: Number,
    caption3: String,
    value3: Number,
    caption4: String,
    value4: Number
  }
};
</script>
