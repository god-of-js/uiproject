<template>
  <div class="body_dashboard p-4">
    <section class="mb-3">
      <div class="page-title pb-3">DASHBOARD</div>
      <div class="white_bg d-flex align-items-center p-3 col">
        <div>
          <div class="font_32">Hello, Akin!</div>
          <div class="wlcm_text">Welcome back to the winsusu community.</div>
          <div
            class="share m-1 row d-flex justify-content-between p-0"
            style="width: 70%"
          >
            <button
              class="share-btn pl-1 pr-1 font_12 d-flex align-items-center btn text-left col-lg-3  overflow"
              style="width: 20%;"
            >
              Share your link with your friends
            </button>
            <div
              class="font_12 d-flex align-items-center text-left  overflow"
              style="width: 60%"
            >
              https://member.winsusu.com/api/landing/&pc=5053&sid=CID13761544&sid2=
            </div>
            <button class="share-btn btn pt-1 pb-1">
              <span class="mdi mdi-link-variant"></span>
            </button>
          </div>
        </div>
        <img src="/assets/dashboardimg.png" width="300" alt class="img-box" />
      </div>
    </section>
    <section class="pl-2 pt-1 pb-1 row">
      <a-date-picker class="m-1" />
      <a-date-picker class="m-1" />
      <button class="btn white_bg pb-1 pt-1">GO</button>
    </section>
    <section class="row p-2 d-flex justify-content-between">
      <cards
        v-for="card in cardDetails"
        :key="card.header"
        :header="card.header"
        :number="card.number"
        :color="card.color"
        :img="card.img"
      />
    </section>
  </div>
</template>
<script>
import cards from "../../components/appcomponents/cards.vue";
export default {
  data: () => {
    return {
      cardDetails: [
        {
          header: "Partials",
          number: "234,076",
          color: "#093ECB",
          img: "/assets/analytics.svg"
        },
        {
          header: "Approved",
          number: "122,234",
          color: "#1CBB60",
          img: "/assets/good.svg"
        },
        {
          header: "Pending",
          number: "45,678",
          color: "#FEB12A",
          img: "/assets/analytics.svg"
        },
        {
          header: "Declined",
          number: "234,076",
          color: "#FF7178",
          img: "/assets/error.svg"
        }
      ]
    };
  },
  components: {
    cards
  }
};
</script>
