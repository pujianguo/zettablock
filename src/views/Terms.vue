<template>
  <div id="SlidesContainer" class="page-slides slides scroll smooth smoothScroll animated noPreload">
    <SvgLibrary></SvgLibrary>
    <Panels :toggleSignup="toggleSignup"></Panels>

    <section class="slide slide1 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-bottom-2">
            <div class="fix-12-12 policy-page">
              <h1 class="page-title">Terms of Service</h1>
              <div class="page-subtitle">
                <p>Last Updated: Dec 27, 2022</p>
                <p>Effective Date: Dec 27, 2022</p>
              </div>
              <div class="policy-content">
                <div class="p">
                  <div class="p-title">1. Introduction</div>
                  <div class="p-content">
                    <p>Welcome to Datalego Inc. (“us”, “we”, “Datalego”, or “our”).</p>
                    <p>These Terms of Service outlined below (“Terms”, “Terms of Service”) govern your use of our web pages located at operates <a href="https://www.zettablock.com/" target="_blank">https://www.zettablock.com/</a> or relevant subdomains (<a href="https://app.zettablock.com/" target="_blank">https://app.zettablock.com/</a>, <a href="https://demo.zettablock.dev/" target="_blank">https://demo.zettablock.dev/</a>, <a href="https://docs.zettablock.com/" target="_blank">https://docs.zettablock.com/</a>) (together or individually the “Service”). </p>
                    <p>By accessing or using the Service, you accept these terms. If you are entering into or accepting these terms on behalf of a legal entity, you represent and warrant that you have the authority to bind such entity and its affiliates to these terms. If you do not have such authority or do not agree to be bound by all the provisions of these terms, do not access or use Datalego’s services.</p>
                  </div>
                </div>
                <div class="p">
                  <div class="p-title">2. Datalego’s Obligation</div>
                  <div class="p-subtitle">2.1 Compliance with Laws</div>
                  <div class="p-content">
                    <p>Datalego will comply with all laws and governmental regulations applicable to the services.</p>
                  </div>
                  <div class="p-subtitle">2.2 Personnel and Performance</div>
                  <div class="p-content">
                    <p>Datalego will be responsible for the performance of its personnel (including employees and contractors) and their compliance with the agreement. Datalego enters into the agreement on behalf of itself and its affiliates. An "affiliate" of a party is any entity (a) that the party controls; (b) that the party is controlled by; or (c) with which the party is under common control, where "control" means direct or indirect control of fifty percent (50%) or more of an entity's voting interests (including by ownership).</p>
                  </div>
                  <div class="p-subtitle">2.3 Documentation</div>
                  <div class="p-content">
                    <p>Datalego will make online documentation available at <a href="https://docs.zettablock.com/" target="_blank">https://docs.zettablock.com/</a> that describes the usage guides for the services.</p>
                  </div>
                  <div class="p-subtitle">‍2.4 Security Measures</div>
                  <div class="p-content">
                    <p>Datalego will maintain administrative, physical, and technical safeguards for the security and integrity of the service consistent with industry-standard practices. Datalego will store, process, transmit and disclose electronic data and configurations submitted to the services at the direction of or on behalf of users only according to the agreement and the documentation. The services, independent of users' data, will not transmit code, files, scripts, agents, or programs intended to do harm, including, viruses, worms, time bombs, and malicious code.</p>
                  </div>
                </div>
                <div class="p">
                  <div class="p-title">3. Account Creation</div>
                  <div class="p-content">
                    <p>In order to use or access certain parts of the product, you must successfully register an account with Datalego. It’s important that you provide us with accurate, complete, and current account information and keep this information up to date. If you don’t, we might have to suspend or terminate your account. To protect your account, keep the account details and password confidential, and notify us right away of any unauthorized use. You’re responsible for all activities that occur under your account. Your account is separate from any account you may have, for example, with a compatible and eligible third-party cryptocurrency</p>
                  </div>
                </div>
                <div class="p">
                  <div class="p-title">4. Intellectual Property Rights</div>
                  <div class="p-content">
                    <p>Datalego retains all rights to all elements of the Service. This includes, but is not limited to, the concept, design, trademarks, algorithms, source code, data, drawings, images, accompanying documents, know-how, trade secrets, copyrights, and all other intellectual property rights. Datalego receives all rights to all content uploaded or created in the Service. Datalego may use your uploaded and created content in any way, both when your user account is active, and after the termination of your account. You do not receive any license or usage rights to the Service beyond what is explicitly stated in this Agreement.</p>
                    <p>You acknowledge and agree that the services contain proprietary rights that are protected by applicable intellectual property and other laws. Except as expressly authorized by us, you agree not to copy, modify, rent, lease, loan, sell, distribute, perform, display or create derivative works based on the services, in whole or in part.</p>
                  </div>
                </div>
                <div class="p">
                  <div class="p-title">5. Warranty Disclaimers</div>
                  <div class="p-content">
                    <p>We make no warranty that the product is free of viruses or errors, that Datalego will be uninterrupted, or that defects will be corrected. We will not be responsible or liable to you for any loss of any kind, from action taken, or taken in reliance on material, or information contained or made available through the services.</p>
                  </div>
                </div>
                <div class="p">
                  <div class="p-title">6. Change of Terms</div>
                  <div class="p-content">
                    <p>Datalego may update and change the Terms of Use from time to time. Datalego will seek to notify you about significant changes before such changes come into force and give you the possibility to evaluate the effects of proposed changes. Any changes to the Service shall be subject to the Terms of Use. Continued use of the Service after any such changes shall constitute your acceptance of such changes. </p>
                  </div>
                </div>
                <div class="p">
                  <div class="p-title">7. Contact Us</div>
                  <div class="p-content">
                    <p>If you have any questions about the Terms of Service, please contact us by email: <a href="mailto:team@zettablock.com">team@zettablock.com</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background" style="background: url(/assets/images/slide1_bg.png) no-repeat top center / 100%"></div>
    </section>

    <page-footer></page-footer>

    <SignupDialog v-model="signupDialogVisible"></SignupDialog>
  </div>

</template>

<script>
  import { slidesFunction } from "../utils/slides_v5.2.1";
  import SvgLibrary from "../components/SvgLibrary.vue";
  import Panels from "../components/Panels.vue";
  import SectionCode from "../components/SectionCode.vue";
  import SignupDialog from "../components/SignupDialog.vue";
  import PageFooter from "../components/PageFooter.vue";
  import bounty from "../utils/bounty";
  import Swiper, {Pagination} from 'swiper'
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  export default {
    name: "home",
    components: {
      SvgLibrary,
      Panels,
      SectionCode,
      SignupDialog,
      PageFooter,
    },
    data() {
      return {
        scrollOffer: 0,
        signupDialogVisible: false,
      };
    },
    created() {
      document.title = "ZettaBlock - The First Full-stack, Real-time Web3 Data Infra";
    },
    mounted() {
      setTimeout(() => {
        this.onCreateView();
      }, 100);
    },
    watch: {},
    destroyed() {
      this.removeHome();
    },
    methods: {
      toggleSignup() {
        this.signupDialogVisible = true
      },
      onCreateView() {
        document.querySelector("body").classList.add("posr");
        slidesFunction();
        window.scrollTo(0, 1);
      },
      removeHome() {
        $("body").removeClass("posr");
        $(window).off("mousemove");
      },
      clicklSrcoll(t) {
        if (t == "left") {
          this.scrollOffer += 960;
        } else if (t == "right") {
          this.scrollOffer -= 960;
        }
        const elem = document.getElementById("marquee");
        if (this.scrollOffer < 0) {
          this.scrollOffer = 0;
        }
        if (this.scrollOffer >= elem.scrollWidth) {
          this.scrollOffer = elem.scrollWidth;
        }
        elem.scrollTo(this.scrollOffer, 0);
      },
    },
  };
</script>

<style lang="scss">
@import '../scss/home.scss';
@import '../scss/home.mobile.scss';
</style>
