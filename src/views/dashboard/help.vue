<template>
  <div class="body_dashboard p-4">
    <div class="page-title pb-3">Help</div>
    <section class="white_bg">
      <div
        class="d-flex pt-2 pb-2 border-bottom align-items-center pl-0"
        v-for="(step, index) in steps"
        :key="index"
      >
        <div class="step col-1 text-right m-2">steps {{ step.step }}</div>
        <div class="step-comment col-8 col-sm-6 text-left m-2">
          {{ step.text }}
        </div>
        <div class="plus col-1 text-left icon m-2">
          <span class="mdi mdi-plus"></span>
        </div>
      </div>
    </section>
    <section class="pt-3">
      <div class="section_title pb-2">Other Questions:</div>
      <div class="table_header_text">How do I take a screenshot:</div>
      <div class="row d-flex justify-content-center mt-2">
        <img
          src="/assets/helpphone2.png"
          alt=""
          class="col-lg-6 col-md-8 col-sm-11 m-0"
        />
        <img
          src="/assets/helpphone1.png"
          alt=""
          class="col-lg-6 col-md-8 col-sm-11 m-0"
        />
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      steps: [
        {
          step: 1,
          text: "Create accounts with winsusu Affiliate and Abra"
        },
        {
          step: 2,
          text:
            "Fund your Abra account and take a screenshot of your funding confirmation page & reply to the reply to the text you receive from us to confirm"
        },
        {
          step: 3,
          text:
            "Check your text message for your personal link share this process with others. Using this Link will give you credit in the winsusu Affiliate system"
        },
        {
          step: 4,
          text: "Help us improve our process by answering a few quick questions"
        },
        {
          step: 5,
          text: "Create accounts with winsusu Affiliate and Abra"
        },
        {
          step: 1,
          text:
            "Access our dashboard and watch your business grow! Check you email for your account details."
        }
      ]
    };
  }
};
</script>
