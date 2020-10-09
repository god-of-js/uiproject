<template>
  <div class="home p-0 width-100">
    <section class="row welcome-to-commuinty-div">
      <div
        class="d-flex align-items-center justify-content-center flex-column welcome-to-commuinty-div-text col-lg-6 col-sm-12 pb-4"
      >
        <div class="white_bg_responsive_text">
          <div class="font-53">
            Welcome to the
            <br />Community
          </div>
          <div
            class="mr-3  pl-2 white_bg_responsive_text_sm col-lg-9 "
            style="font-size: 18px;"
          >
            A community powered cooperative entrepreneurship platform. It’s time
            to DREAM again!
          </div>
          <div class="d-flex mt-2 justify-content-start align-self-start">
            <button class="btn btn-color m-2">LEARN MORE</button>
            <button class="btn m-2 join-us-btn">JOIN US NOW</button>
          </div>
        </div>
      </div>
      <div
        class="d-flex align-items-center justify-content-center flex-column welcome-to-commuinty-div-images col-lg-6 col-sm-12"
      >
        <div class="d-flex justify-content-center">
          <img
            src="../../assets/femaleglasses.png"
            alt
            width="200"
            height="230"
            class="white-bg-img"
          />
          <img
            src="../../assets/maleimage.png"
            alt
            width="200"
            height="230"
            class="white-bg-img"
          />
        </div>
        <div
          class="purple-circle-background d-flex justify-content-center align-items-center"
        >
          <div
            class="purple-circle-inner-background d-flex justify-content-center align-items-center"
          >
            <span class="mdi mdi-play" style="color: white;"></span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <img
            src="../../assets/femaleglasses.png"
            alt
            width="200"
            height="230"
            class="white-bg-img"
          />
          <img
            src="../../assets/femaletailor.png"
            alt
            width="200"
            height="230"
            class="white-bg-img"
          />
        </div>
      </div>
    </section>
    <section class="d-flex m-3 mt-3 socials width-100">
      <button class="circle box-shadow m-2 p-2">
        <img src="../../assets/facebook.svg" />
      </button>
      <button class="circle box-shadow m-2 p-2">
        <img src="../../assets/twitter.svg" alt />
      </button>
      <button class="circle box-shadow m-2 p-2">
        <img src="../../assets/instagram.svg" alt />
      </button>
    </section>
    <section class="black-box p-5 width-100">
      <div class="row p-4 justify-content-center">
        <blackcards
          v-for="category in blackCard"
          :key="category.title"
          :imgLink="category.img"
          :title="category.title"
          :paragraph1="category.paragraph1"
          :paragraph2="category.paragraph2"
        />
      </div>
      <div class="d-flex justify-content-center mt-2">
        <button class="btn join-us-btn">JOIN US NOW</button>
      </div>
    </section>
    <section class="greybox p-4 width-100">
      <div class="card-container p-2">
        <button
          :class="tab === 'ambassador' ? 'active-tab-btn' : 'tab-btn'"
          @click="tab = 'ambassador'"
        >
          Ambassador
        </button>
        <button
          :class="tab === 'banker' ? 'active-tab-btn' : 'tab-btn'"
          @click="tab = 'banker'"
        >
          Banker
        </button>
        <button
          :class="tab === 'entrepreneur' ? 'active-tab-btn' : 'tab-btn'"
          @click="tab = 'entrepreneur'"
        >
          Entrepreneur
        </button>
        <button
          :class="tab === 'angel' ? 'active-tab-btn' : 'tab-btn'"
          @click="tab = 'angel'"
        >
          Angel
        </button>
      </div>
      <div class="d-flex tab-content p-3 row" v-if="tab === 'ambassador'">
        <div class="text-left col-lg-6 col-sm-10">
          <div class="tab-header font-53" style="color:#1D1D1D;">
            Ambassador
          </div>
          <div class="col-lg-8 col-sm-10 px-14">
            <p>
              The Winsusu platform enables you to start with as little as $5 and
              create a loan portfolio that builds wealth and empowers other
              people just like you at the same time. Individuals have never
              before had the opportunity to participate in financial
              transactions on the same level as commercial banking institutions.
            </p>
            <p>
              Winsusu and ABRA have changed that forever. Whether you are
              lending to friends next door or a stranger half a world away the
              Winsusu system maximizes your profit matrix and allows you to
              accelerate your investment income.
            </p>
          </div>
        </div>
        <div style="flex: 5" class="d-flex justify-content-center align-center">
          <img src="../../assets/chess.png" alt width="100" />
        </div>
      </div>
      <div class="d-flex tab-content p-3 row" v-if="tab === 'banker'">
        <div class="text-left col-lg-6 col-sm-10">
          <div class="tab-header font-53" style="color:#1D1D1D;">Banker</div>
          <div class="col-lg-8 col-sm-10 px-14">
            <p>
              The Winsusu platform enables you to start with as little as $5 and
              create a loan portfolio that builds wealth and empowers other
              people just like you at the same time. Individuals have never
              before had the opportunity to participate in financial
              transactions on the same level as commercial banking institutions.
            </p>
            <p>
              Winsusu and ABRA have changed that forever. Whether you are
              lending to friends next door or a stranger half a world away the
              Winsusu system maximizes your profit matrix and allows you to
              accelerate your investment income.
            </p>
          </div>
        </div>
        <div style="flex: 5" class="d-flex justify-content-center align-center">
          <img src="../../assets/chess.png" alt width="100" />
        </div>
      </div>
      <div class="d-flex tab-content p-3 row" v-if="tab === 'entrepreneur'">
        <div class="text-left col-lg-6 col-sm-10">
          <div class="tab-header font-53" style="color:#1D1D1D;">
            Entrepreneur
          </div>
          <div class="col-lg-8 col-sm-10 px-14">
            <p>
              The Winsusu platform enables you to start with as little as $5 and
              create a loan portfolio that builds wealth and empowers other
              people just like you at the same time. Individuals have never
              before had the opportunity to participate in financial
              transactions on the same level as commercial banking institutions.
            </p>
            <p>
              Winsusu and ABRA have changed that forever. Whether you are
              lending to friends next door or a stranger half a world away the
              Winsusu system maximizes your profit matrix and allows you to
              accelerate your investment income.
            </p>
          </div>
        </div>
        <div style="flex: 5" class="d-flex justify-content-center align-center">
          <img src="../../assets/chess.png" alt width="100" />
        </div>
      </div>
      <div class="d-flex tab-content p-3 row" v-if="tab === 'angel'">
        <div class="text-left col-lg-6 col-sm-10">
          <div class="tab-header font-53" style="color:#1D1D1D;">Angel</div>
          <div class="col-lg-8 col-sm-10 px-14">
            <p>
              The Winsusu platform enables you to start with as little as $5 and
              create a loan portfolio that builds wealth and empowers other
              people just like you at the same time. Individuals have never
              before had the opportunity to participate in financial
              transactions on the same level as commercial banking institutions.
            </p>
            <p>
              Winsusu and ABRA have changed that forever. Whether you are
              lending to friends next door or a stranger half a world away the
              Winsusu system maximizes your profit matrix and allows you to
              accelerate your investment income.
            </p>
          </div>
        </div>
        <div style="flex: 5" class="d-flex justify-content-center align-center">
          <img src="../../assets/chess.png" alt width="100" />
        </div>
      </div>
    </section>
    <section class="p-4" style="background-color: #ffffff;">
      <div class="text-center">
        <div class="font-53">In the news</div>
        <span>Latest articles from various publishers.</span>
      </div>
      <section class="row news-card-div p-5 d-flex justify-content-center">
        <newscards
          v-for="category in newscard"
          :key="category.title"
          :imgLink="category.imgLink"
          :title="category.title"
          :content="category.content"
          :date="category.date"
          :background="category.background"
        />
      </section>
      <section class="mt-0 mx-auto p-2 pb-4 width-100">
        <div class="purple-background row p-3" style="color: #ffffff;">
          <div class="p-5 col-lg-6 col-sm-12">
            <div class="font-48">ABRA</div>
            <p class="px-14">
              ABRA is hands down, the best digital wallet on the market. It’s
              the unanimous choice of Winsusu ambassadors, bankers, and
              entrepreneurs alike. This is not because it is backed by American
              Express. It is not because it offers over 50 fiat currencies and
              over 30 cryptocurrencies.
            </p>
            <p class="px-14">
              It is because it is a non-custodial wallet which fully leverages
              the power of permissionless blockchain technology. This eliminates
              traditional financial institutions, enables peer-to-peer
              transactions and places economic power where it belongs - in your
              hands.
            </p>
            <button class="btn sign-up-btn">SIGN UP NOW!</button>
          </div>
          <div class="col-lg-6 col-sm-12 p-5">
            <img src="../../assets/fingertip.png" alt class="mx-auto col-12" />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
import blackcards from "../../components/homecomponents/blackcards.vue";
import newscards from "../../components/homecomponents/newscards.vue";
// import tab from "../../components/homecomponents/tabs";
export default {
  name: "Home",
  data: () => {
    return {
      tab: "ambassador",
      blackCard: [
        {
          img: "/assets/banking.svg",
          title: "Empowers Your Life",
          paragraph1: `
                Start building your future income, wealth and legacy through the Winsusu ecosystem.
                Winsusu is where new technologies, new laws and new methodologies intersect to create endless
                opportunities for people just like you.`,
          paragraph2: `
                Dream your biggest dream, bring small ones too!
                And connect to this global peer-to-peer empowerment platform to see them become a reality.`
        },
        {
          img: `/assets/customer-support.svg`,
          title: "Levels the Playing Field",
          paragraph1: `
                Winsusu exposes long-hidden systems and opens previously closed doors to provide access to
                everyone seeking to improve their life.`,
          paragraph2: `
                Winsusu’s inclusive and cooperative entrepreneur model
                is a bridge from existing financial barriers to bright possibilities and economic freedom for
                anyone with enough heart and drive to use their dreams to construct a new reality.`
        },
        {
          img: `/assets/opportunity.svg`,
          title: "Generates Business Prosperity",
          paragraph1: `
              We are entering a new era, powered by global participation, transparency, merit, and
              above all - you. Winsusu creates a peer-to-peer powered sharing economy enabling you to earn,
              sell, purchase, borrow, loan, build, invest and get or give help with the click of a button.
              Membership still has its privileges - its open for all to join.`
        }
      ],
      newscard: [
        {
          imgLink: "/assets/phone.png",
          title: "Robinhood lets you invest as little as 1 and as a bad guy",
          link: "home",
          content: ` BIO-key Africa will Target East Africa; Kenya, Rwanda, Uganda,
            and Expansion Across the Continent BIO-key Africa is planning
            a country by`,
          background: true,
          date: "16th, December 2020"
        },
        {
          imgLink: "/assets/fingertip.png",
          title: "Local Investment: Biometric Privacy…",
          link: "home",
          content: ` Robinhood is Launching Fractional Share Trading This Week One share of Amazon stock costs more than $1,700, locking out less-wealthy…`,
          background: false,
          date: "17th, December 2020"
        },
        {
          imgLink: "/assets/phone.png",
          title: "Local Investment: Biometric Privacy…",
          link: "home",
          content: `WhalePanda is The Number-one Pick for Ethereum — An Anonymous Twitter Account Crypto research platform LunarCRUSH has launched a tool`,
          background: true,
          date: "6th December 2020"
        }
      ]
    };
  },
  components: {
    blackcards,
    newscards
    // tab
  }
};
</script>
