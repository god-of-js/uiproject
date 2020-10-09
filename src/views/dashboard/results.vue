<template>
  <div class="body_dashboard p-4">
    <section class="mb-3">
      <div class="page-title pb-3">CONTEST RESULTS</div>
      <div class="d-flex">
        <a-select
          default-value="Select Contest"
          style="width: 120px"
          class="col-2 mr-4"
        >
          <a-select-option value="Select Contest"
            >Select Contest</a-select-option
          >
        </a-select>
        <button class="btn white_bg pb-1 pt-1">GO</button>
      </div>
    </section>
    <section class="pl-2 pt-1 pb-1">
      <div class="pt-3">
        <div class="section_title">Contest Leaderboard</div>
        <div class="row">
          <resultcards
            v-for="(card, index) in cardData"
            :key="index"
            :number="card.number"
            :text="card.text"
          />
        </div>
      </div>
    </section>
    <section class="mt-3 pb-3">
      <div class="section_title pb-3">Contest Leaderboard</div>
      <div class="table white_bg" style="border-radius: 5px">
        <div
          class=" p-3 pl-5 pr-5 table_header"
          style="background-color: #7070700D;"
        >
          <div class="col-7 d-flex justify-content-between pl-0">
            <span class="table_header_text">Name</span>
            <span class="table_header_text text-left">Points</span>
          </div>
        </div>
        <div class="table_content" v-for="key in 8" :key="key">
          <div class="d-flex justify-content-between p-3 pl-5 pr-5 col-lg-7">
            <span class="table_header_text">Name</span>
            <span class="table_header_text">{{ key }}</span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="section_title">
        The points required for each level currently are below:
      </div>
      <div class="row pt-3 pl-2">
        <resultbottomcards
          v-for="(card, index) in bottomCardData"
          :key="index"
          :number="card.number"
          :text="card.text"
        />
      </div>
    </section>
  </div>
</template>
<script>
import resultcards from "../../components/appcomponents/resultscards.vue";
import resultbottomcards from "../../components/appcomponents/resultsbottomcards.vue";
export default {
  data: () => {
    return {
      cardData: [
        {
          text: "Your current position is:",
          number: 20
        },
        {
          text: "Your Current reward amount:",
          number: 0
        },
        {
          text: "Your current reward level is:",
          number: 0
        },
        {
          text: "Your current point total is:",
          number: 0
        }
      ],
      bottomCardData: [
        {
          text: "LEVEL 1",
          number: 166
        },
        {
          text: "LEVEL 2",
          number: 14
        },
        {
          text: "LEVEL 3",
          number: 0
        }
      ]
    };
  },
  components: {
    resultcards,
    resultbottomcards
  }
};
</script>
