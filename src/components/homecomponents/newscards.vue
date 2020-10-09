<template>
  <div
    style="display: block;"
    class="card-container p-2 m-4 col-lg-3 news-cards col-md-4 col-sm-8"
  >
    <img
      :src="imgLink"
      v-if="background === false"
      style="border-radius: 5px;width: 100%;height: 50%;"
      class="newscard-img"
    />
    <div
      v-if="background === true"
      style="background-color:#21CF97; border-radius: 5px;"
      class="d-flex p-3 justify-content-center"
    >
      <img
        :src="imgLink"
        class="col-12 border-radius"
        width="150"
        height="150 "
      />
    </div>
    <div class="px-14 pt-2">{{ date }}</div>
    <div
      class="font-24 pb-1 pt-1"
      style="width: 250px; text-overflow: ellipsis;white-space: nowrap; overflow: hidden;"
    >
      {{ title }}
    </div>
    <p
      class="3rd-line-clamp"
      style="font-size: 13px
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;"
    >
      {{ content }}
    </p>
    <div class="text-right mt-0 pt-0 px-14">
      <router-link to="/">Read More</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgLink: String,
    title: String,
    link: String,
    content: String,
    background: Boolean,
    date: String
  }
};
</script>
