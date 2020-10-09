<template>
  <div class="body_dashboard p-4">
    <section>
      <div class="page-title pb-3">VAULT</div>
      <div class="row d-flex justify-content-between">
        <vaultcard
          v-for="(val, index) in cardDetais"
          :key="index"
          :title="val.title"
          :caption1="val.caption1"
          :value1="val.value1"
          :caption2="val.caption2"
          :value2="val.value2"
          :caption3="val.caption3"
          :value3="val.value3"
          :caption4="val.caption4"
          :value4="val.value4"
        />
        <div class="col-6">
          <div class="white_bg col-12 m-2 p-0" style="min-height: 250px">
            <div
              class="pl-3 p-2"
              style="border-bottom: 1px solid #DEDEDE;font-size: 18px; font-weight: bold"
            >
              StartUp Equity
            </div>
            <div class="d-flex justify-content-between p-4 vault-text">
              <span>Company</span>
              <span>Shares</span>
              <span>Value</span>
            </div>
          </div>
        </div>
        <vaultcard
          :title="'Credit Score'"
          :caption1="'Total members:'"
          :value1="0"
          :caption2="'Network earnings:'"
          :value2="0"
          :caption3="'Network valuation:'"
          :value3="0"
        />
      </div>
    </section>
  </div>
</template>
<script>
import vaultcard from "../../components/appcomponents/vaultcard.vue";
export default {
  data: () => {
    return {
      cardDetais: [
        {
          title: "SUSU",
          caption1: "Earned last week:",
          value1: 0,
          caption2: "Earned last month:",
          value2: 0,
          caption3: "Earned All time:",
          value3: 0,
          caption4: "Total SUSU issued:",
          value4: 21264.00000014
        },
        {
          title: "Network Valuation",
          caption1: "Total members:",
          value1: 0,
          caption2: "Network earnings:",
          value2: 0,
          caption3: "Network valuation:",
          value3: 0,
          caption4: null,
          value4: null
        }
      ]
    };
  },
  components: {
    vaultcard
  }
};
</script>
