<template>
  <div
    style="min-height: 80vh; overflow: auto;overflow-x: hidden;"
    class="body"
  >
    <div class="row">
      <section class="p-3 col-lg-5 p-3 ml-5 text-left col-sm-12 col-md-8 pt-5">
        <div class="form_caption pb-3 pl-0">Signup for Winsusu!</div>
        <form class="row form pl-2 pr-4 col-lg-12 col-md-10 col-sm-10">
          <input
            type="text"
            placeholder="Full Name"
            class="reg_input mb-2 mt-2 pl-2"
          />
          <input
            type="email"
            placeholder="Email"
            class="reg_input mb-2 mt-2 pl-2"
          />
          <input
            type="number"
            placeholder="Phone Number"
            class="reg_input mb-2 mt-2 pl-2"
          />
          <input
            type="text"
            placeholder="Country"
            class="reg_input mb-2 mt-2 pl-2"
          />
          <div class=" align-items-center">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              class="mr-2 radio"
            />
            <small
              >Click here to agree to our
              <router-link to="/">Terms and Conditions</router-link>
            </small>
          </div>
          <button class="btn  blue-btn mt-4  col-12">SIGN ME UP TODAY</button>
        </form>
      </section>
      <section
        class="col-lg-6 pt-4 img-box col-md-3 d-flex  justify-content-center align-items-center "
      >
        <img src="/assets/liftingstarts.png" alt="" />
      </section>
    </div>
  </div>
</template>
