<template>
  <div
    style="min-height: 80vh; overflow: auto;overflow-x: hidden;"
    class="body"
  >
    <div class="row">
      <section class="p-3 col-lg-5 p-3 ml-5 text-left col-sm-12 col-md-8 pt-5">
        <div class="form_caption pb-3 pl-0">Lets Get In Touch</div>
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
          <div class="col-12 p-0">
            <textarea
              name=""
              id=""
              class="col-12 reg_text_area"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>
          <button class="btn  blue-btn mt-4  col-12">SIGN ME UP TODAY</button>
        </form>
        <div class="contact-info ">
          <div class="contact_info_header pt-3 pb-0">
            <div
              class="contact_info_header_text col-lg-6 col-md-6 col-md-8 mb-0"
            >
              CONTACT INFORMATION
            </div>
          </div>
          <div class="row pt-3">
            <div class="col">
              <div class="contact_info_title">Email Address:</div>
              <div class="contact_info_content">info@winsusu.com</div>
            </div>
            <div class="col">
              <div class="contact_info_title">Phone Number:</div>
              <div class="contact_info_content">(844) Win-SUSU</div>
            </div>
            <div class="col">
              <div class="contact_info_title">Address:</div>
              <div class="contact_info_content">
                2179 Hollywood Blvd, Suite A - 1457 Hollywood, FL 33020
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="col-lg-6 img-box col-md-3 d-flex align-items-center justify-content-center"
      >
        <img src="/assets/contact.png" alt="" />
      </section>
    </div>
  </div>
</template>
