<template>
  <div id="SlidesContainer" class="page-slides slides scroll smooth smoothScroll animated noPreload">
    <SvgLibrary></SvgLibrary>
    <Panels :toggleSignup="toggleSignup"></Panels>

    <!-- Slide 1 (#03) -->
    <section class="slide slide1 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">

            <div class="fix-12-12">
              <img class="logo-ani margin-bottom-6 margin-top-6 ae-2 fromCenter" src="assets/logo-animation.gif" alt="">
              <div class="fix-10-12 margin-bottom-20">
                <svg class="ae-3 fromCenter main-title">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#main-title"></use>
                </svg>
              </div>
              <div class="fix-8-12 margin-bottom-5">
                <p class="ae-5 fromBottom">ZettaBlock is a one-stop blockchain data platform to make data<br> indexing, querying, analyzing, and sharing easy and flexible.<br>Anyone can build real-time, reliable, data-intensive dApps via SQL without<br>the complexity of maintaining infrastructure.</p>
              </div>
              <div class="fix-8-12">
                <svg class="ae-6 fromBottom mouse">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mouse"></use>
                </svg>
              </div>
              <ul class="fix-12-12 data">
                <li>
                  <h1>110B+</h1>
                  <h2>Transactions</h2>
                  <p>Rich transactions indexed and decoded for 8+ blockchains since genesis.</p>
                </li>
                <li>
                  <h1>1M+</h1>
                  <h2>Smart Contracts</h2>
                  <p>Contracts available with internal data structures for querying.</p>
                </li>
                <li>
                  <h1>4.3B+</h1>
                  <h2>Price Feeds </h2>
                  <p>Price feeds for fiat and crypto pairs.</p>
                </li>
                <li>
                  <h1>99.95%</h1>
                  <h2>180 Day Uptime</h2>
                  <p>Truely reliable platform for decentralised products of the future.</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div class="background" style="background-image:url(assets/slide1-bg.png);"></div>
    </section>
    <!-- Slide 2 (#16) -->
    <section id="product" class="slide slide2 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">

            <div class="fix-12-12 left margin-bottom-4">
              <h1>Start building your dApps<span>with ZettaBlock</span></h1>
            </div>
            <div class="fix-12-12 beforeafter margin-bottom-4">
              <div class="noSelect twentytwenty">
                <!-- The before image is first -->
                <img src="assets/start-with.png" />
                <!-- The after image is last -->
                <img src="assets/start-without.png" />
              </div>
            </div>
            <ul class="fix-12-12 content flex-center">
              <li class="flex-left-top">
                <h1>1</h1>
                <p>ZettaBlock abstracts out low-level data layer APIs and queries by providing a single interface for unified on-chain and off-chain data layer access. </p>
              </li>
              <li class="flex-left-top">
                <h1>2</h1>
                <p>Applications built on top of ZettaBlock can transform and serve data through our real-time API or push data anywhere you want like Postgres and S3. All you need is SQL.</p>
              </li>

            </ul>
          </div>

        </div>
      </div>
      <div class="background" style="background:#fff;"></div>
    </section>
    <!-- Slide 3 (#16) -->
    <section id="usecase" class="slide slide3 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">

            <div class="fix-12-12 left margin-bottom-4">
              <h1>Features<span>What's New</span></h1>
            </div>
            <div class="fix-12-12 feature flex-left-top">
              <ul class="pill controller" data-slider-id="feature">
                <li class="selected"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <ul class="slider" data-slider-id="feature">
                <li class="selected">
                  <img src="assets/feature-1.png" alt="Feature1">
                </li>
                <li class="hide">
                  <img src="assets/feature-2.png" alt="Feature2">
                </li>
                <li class="hide">
                  <img src="assets/feature-3.png" alt="Feature3">
                </li>
                <li class="hide">
                  <img src="assets/feature-4.png" alt="Feature4">
                </li>
                <li class="hide">
                  <img src="assets/feature-5.png" alt="Feature5">
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
      <div class="background" style="background:#fff;"></div>
    </section>

    <!-- Slide 4 (#16) -->
    <section id="about" class="slide slide4 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">

            <div class="fix-12-12 left margin-bottom-4">
              <h1 class="margin-bottom-3">Why ZettaBlock ?</h1>
              <p>ZettaBlock is a one-stop blockchain data platform to make data<br />
                indexing, querying, analyzing, and sharing easy and flexible. <br />
                Anyone can build real-time, reliable.</p>
              <div class="fix-12-12 why flex-left-top">
                <div class="col">
                  <img src="assets/why-1.png" alt="" />
                </div>
                <div class="col">
                  <img src="assets/why-2.png" alt="" />
                  <img src="assets/why-3.png" alt="" />
                </div>
                <div class="col">
                  <img src="assets/why-4.png" alt="" />
                  <img src="assets/why-5.png" alt="" />
                </div>
                <div class="col">
                  <img src="assets/why-6.png" alt="" />
                  <img src="assets/why-7.png" alt="" />
                </div>
              </div>
            </div>
            <div class="fix-12-12 news margin-bottom-4">
              <h1 class="margin-bottom-3">Recent<br /> Articles</h1>
              <button class="page-button" @click="clicklSrcoll('right')">
                <svg>
                  <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#page-left"></use>
                </svg>
              </button>
              <button class="page-button" @click="clicklSrcoll('left')">
                <svg>
                  <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#page-right"></use>
                </svg>
              </button>
              <div id="marquee" class="area10" style="position: relative">
                <ul class="flex-left-top">
                  <li class="fromBottom ae-3">
                    <svg>
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-shape"></use>
                    </svg>
                    <h2>Get started with ZettaBlock</h2>
                    <p>Deploying a modern data stack in 5 minutes</p>
                    <a href="#">READ<svg>
                        <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#arrow-right-blue"></use>
                      </svg></a>
                  </li>
                  <li class="fromBottom ae-4">
                    <svg>
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-shape"></use>
                    </svg>
                    <h2>Rethinking the morden data stack</h2>
                    <a href="#">READ<svg>
                        <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#arrow-right-blue"></use>
                      </svg></a>
                  </li>
                  <li class="fromBottom ae-5">
                    <svg>
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-shape"></use>
                    </svg>
                    <h2>Orchestrate a data platform for Solana</h2>
                    <a href="#">READ<svg>
                        <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#arrow-right-blue"></use>
                      </svg></a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </div>
      <div class="background" style="background:#fff;"></div>
    </section>

    <!-- Slide 5 (#16) -->
    <section id="blog" class="slide slide5 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12 newslette">
              <h1>Newslette</h1>
              <h2>Say goodbye to slow and unstable data infra</h2>
              <a @click="toggleSignup()">Get Early Access</a>
              <p>Build your decentralized apps today</p>
            </div>
          </div>
          <div class="footer">
            <div class="wrap">
              <div class="left">
                <svg>
                  <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#logo-white"></use>
                </svg>
                <p>ZettaBlock is the unified Web3 data platform. Developers use ZettaBlock to build real-time, reliable, data-intensive apps in minutes.</p>
                <h5>© 2022 ZettaBlock Inc.</h5>
              </div>
              <div class="right">
                <h1>Join the Web3 Data Revolution</h1>
                <ul>
                  <li>
                <a href="https://twitter.com/ZettaBlockHQ" target="_blank"> 
                  <svg>
                      <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#social-twitter"></use>
                    </svg></a></li>
                  <li>
                <a href="https://www.linkedin.com/company/zettablockhq/" target="_blank"> 
                  <svg>
                      <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#social-linkedin"></use>
                    </svg></a></li>
                  <li>
                <a href="discord.gg/px42xPBFkN" target="_blank"> 
                  <svg>
                      <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#social-discord"></use>
                    </svg></a></li>
                  <li>
                <a href="" target="_blank"> 
                  <svg>
                      <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#social-medium"></use>
                    </svg></a></li>
                  <li>
                <a href="https://github.com/Zettablock" target="_blank"> 
                  <svg>
                      <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#social-github"></use>
                    </svg></a></li>
                  <li>
                <a href=" https://www.youtube.com/channel/UCZ7OYTGcXA93faGcmnyjTzw
" target="_blank"> 
                  <svg>
                      <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#social-youtube"></use>
                    </svg></a></li>
                </ul>
                <h1>Subscribe to Our Mailing List</h1>
                
                <div class="signup">
                  <form class="fix-12-12 subscribe" action="https://zettablock.us14.list-manage.com/subscribe/post?u=1ff0f35da3b86da52617aadd6&amp;id=bc40fdafb4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate><input type="email" value="" name="EMAIL" placeholder="Email Address">
                  <button class="signup-button" href="#">Sign Up</button></form>
                  
                </div>
              

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background" style="background:#fff;"></div>
    </section>
    <div class="form-container" v-show="showForm">
        <div class="form-content">
          <div class="close">
          <div></div>
          <div @click="toggleSignup">X</div>
        </div>
        <form class="fix-12-12 subscribe" action="https://zettablock.us14.list-manage.com/subscribe/post?u=1ff0f35da3b86da52617aadd6&amp;id=bc40fdafb4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
                <input type="text" value="" name="NAME" id="mce-EMAIL" class="fix-8-12" placeholder="NAME" />
                <input type="text" value="" name="COMPANY" id="mce-EMAIL" class="fix-8-12" placeholder="COMPANY" />
                <input type="email" value="" name="EMAIL" id="mce-EMAIL" class="fix-8-12" placeholder="EMAIL" />
                <input type="text" value="" name="TITLE" id="mce-EMAIL" class="fix-8-12" placeholder="TITLE" />
                <input type="text" value="" name="PHONE" id="mce-EMAIL" class="fix-8-12" placeholder="Phone" />
                <input style="display: none;" checked type="checkbox" value="1" name="group[45212][1]" id="mce-group[45212]-45212-2">
                <button @click="toggleSignup()" class="button square fix-4-12">
                  <span href="">Get Early Access
                    <svg style="width: 32px; height: 24px">
                      <use xlink:href="#arrowbutton"></use>
                    </svg></span>
                </button>
              </form>
        </div>
    </div>
  </div>

</template>

<script>
  import { slidesFunction } from "../utils/slides_v5.2.1";
  import SvgLibrary from "../components/SvgLibrary.vue";
  import Panels from "../components/Panels.vue";

  export default {
    name: "home",
    components: {
      SvgLibrary,
      Panels,
    },
    data() {
      return {
        scrollOffer: 0,
        showForm: false,
      };
    },
    created() {
      document.title = "ZettaBlock - The Unified Web3 Data Platform";
      $(window).on("load", function () {
        $(".twentytwenty").twentytwenty();
      });
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
        console.log("toggle",this.showForm);
        this.showForm = !this.showForm;
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
        console.log("this.scrollOffer", this.scrollOffer);
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
        console.log("this.scrollOffer", this.scrollOffer);
        elem.scrollTo(this.scrollOffer, 0);
      },
    },
  };
</script>

<style lang="scss">
  .close {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    color: #000;
    div {
      &:hover {
        cursor: pointer;
      }
    }
  }
  .form-content {
    width: 600px;
    height: 400px;
    background: #fff;
    border: 1px solid #eee;
    form {
      // .signup-button {
      //   display: inline-block;
      // }
      padding: 0 30px 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        border: none;
        box-shadow: none;
        padding: 8px 12px;
        margin: 5px 0;
        border: 1px solid #000;
      }
      button {
        background: #281af0;
        margin-top: 20px;
        text-align: center;
        font-weight: bold;
      }
    }
  }
  .form-container {
    z-index: 100;
    position: fixed;
    background-color: rgba(0,0,0,1);
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .posr {
    position: relative;
  }
  .slide1 {
    .logo-ani {
      width: 60px;
      position: relative;
      top: 0;
    }
    .main-title {
      width: 826px;
      height: 198px;
    }
    p {
      font-family: "Archia";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      /* or 24px */

      text-align: center;
      letter-spacing: -0.2px;

      color: #000000;
    }
    .mouse {
      width: 48px;
      height: 48px;
    }
    .background {
      background-size: cover;
      background-position: center bottom;
      max-height: 100vh;
    }
    .data {
      display: flex;
      margin-top: 160px;
      gap: 30px;
      flex: 1;
      li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: flex-start;
        border-top: 2px solid #281af0;
        padding-top: 25px;
        min-width: 310px;

        h1 {
          font-family: "Archia";
          font-style: normal;
          font-weight: 600;
          font-size: 60px;
          line-height: 100%;
          letter-spacing: -0.2px;
          color: #281af0;
          margin-bottom: 5px;
        }
        h2 {
          font-family: "Archia";
          font-style: normal;
          font-weight: 600;
          font-size: 32px;
          line-height: 150%;
          letter-spacing: -0.2px;
          color: #000000;
          margin-bottom: 20px;
        }
        p {
          font-family: "Archia";
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 150%;
          letter-spacing: -0.2px;
          color: #000000;
          text-align: left;
        }
      }
    }
  }
  .slide2 {
    h1 {
      font-family: "Archia";
      font-style: normal;
      font-weight: 600;
      font-size: 60px;
      line-height: 110%;
      /* identical to box height, or 66px */

      display: flex;
      align-items: center;
      letter-spacing: -0.2px;

      color: #281af0;
      width: 100%;
      span {
        font-weight: 250;
        margin-left: 24px;
      }
    }
    .beforeafter {
      .twentytwenty-before-label:before {
        content: "With ZettaBlock";
      }
      .twentytwenty-after-label:before {
        content: "Without ZettaBlock";
      }
      html:not(.page-loaded) .twentytwenty img:nth-child(1) {
        display: none;
      }
      .twentytwenty-horizontal .twentytwenty-handle:before,
      .twentytwenty-horizontal .twentytwenty-handle:after,
      .twentytwenty-vertical .twentytwenty-handle:before,
      .twentytwenty-vertical .twentytwenty-handle:after {
        content: " ";
        display: block;
        background: #281af0;
        position: absolute;
        z-index: 30;
      }

      .twentytwenty-horizontal .twentytwenty-handle:before,
      .twentytwenty-horizontal .twentytwenty-handle:after {
        width: 2px;
        height: 9999px;
        left: 50%;
        margin-left: -1.5px;
      }

      .twentytwenty-vertical .twentytwenty-handle:before,
      .twentytwenty-vertical .twentytwenty-handle:after {
        width: 9999px;
        height: 3px;
        top: 50%;
        margin-top: -1.5px;
      }

      .twentytwenty-before-label,
      .twentytwenty-after-label,
      .twentytwenty-overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
      }

      .twentytwenty-before-label,
      .twentytwenty-after-label,
      .twentytwenty-overlay {
        -webkit-transition-duration: 0.5s;
        -moz-transition-duration: 0.5s;
        transition-duration: 0.5s;
      }

      .twentytwenty-before-label,
      .twentytwenty-after-label {
        -webkit-transition-property: opacity;
        -moz-transition-property: opacity;
        transition-property: opacity;
      }

      .twentytwenty-before-label:before,
      .twentytwenty-after-label:before {
        color: white;
        font-size: 13px;
        letter-spacing: 0.1em;
      }

      .twentytwenty-before-label:before,
      .twentytwenty-after-label:before {
        position: absolute;
        background: rgba(255, 255, 255, 0.2);
        line-height: 38px;
        padding: 0 20px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
      }

      .twentytwenty-horizontal .twentytwenty-before-label:before,
      .twentytwenty-horizontal .twentytwenty-after-label:before {
        top: 50%;
        margin-top: -19px;
      }

      .twentytwenty-vertical .twentytwenty-before-label:before,
      .twentytwenty-vertical .twentytwenty-after-label:before {
        left: 50%;
        margin-left: -45px;
        text-align: center;
        width: 90px;
      }

      .twentytwenty-left-arrow,
      .twentytwenty-right-arrow,
      .twentytwenty-up-arrow,
      .twentytwenty-down-arrow {
        width: 0;
        height: 0;
        border: 6px inset transparent;
        position: absolute;
      }

      .twentytwenty-left-arrow,
      .twentytwenty-right-arrow {
        top: 50%;
        margin-top: -6px;
      }

      .twentytwenty-up-arrow,
      .twentytwenty-down-arrow {
        left: 50%;
        margin-left: -6px;
      }

      .twentytwenty-container {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        z-index: 0;
        overflow: hidden;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
      }
      .twentytwenty-container img {
        max-width: 100%;
        position: absolute;
        top: 0;
        display: block;
      }
      .twentytwenty-container.active .twentytwenty-overlay,
      .twentytwenty-container.active :hover.twentytwenty-overlay {
        background: rgba(0, 0, 0, 0);
      }
      .twentytwenty-container.active .twentytwenty-overlay .twentytwenty-before-label,
      .twentytwenty-container.active .twentytwenty-overlay .twentytwenty-after-label,
      .twentytwenty-container.active :hover.twentytwenty-overlay .twentytwenty-before-label,
      .twentytwenty-container.active :hover.twentytwenty-overlay .twentytwenty-after-label {
        opacity: 0;
      }
      .twentytwenty-container * {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
      }

      .twentytwenty-before-label {
        opacity: 0;
      }
      .twentytwenty-before-label:before {
        content: attr(data-content);
      }

      .twentytwenty-after-label {
        opacity: 0;
      }
      .twentytwenty-after-label:before {
        content: attr(data-content);
      }

      .twentytwenty-horizontal .twentytwenty-before-label:before {
        left: 10px;
      }

      .twentytwenty-horizontal .twentytwenty-after-label:before {
        right: 10px;
      }

      .twentytwenty-vertical .twentytwenty-before-label:before {
        top: 10px;
      }

      .twentytwenty-vertical .twentytwenty-after-label:before {
        bottom: 10px;
      }

      .twentytwenty-overlay {
        -webkit-transition-property: background;
        -moz-transition-property: background;
        transition-property: background;
        background: rgba(0, 0, 0, 0);
        z-index: 25;
      }
      .twentytwenty-overlay:hover {
        background: rgba(0, 0, 0, 0);
      }
      .twentytwenty-overlay:hover .twentytwenty-after-label {
        opacity: 0;
      }
      .twentytwenty-overlay:hover .twentytwenty-before-label {
        opacity: 0;
      }

      .twentytwenty-before {
        z-index: 20;
      }

      .twentytwenty-after {
        z-index: 10;
      }

      .twentytwenty-handle {
        height: 50px;
        width: 50px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -28px;
        margin-top: -25px;
        border: 3px solid #281af0;
        -webkit-border-radius: 1000px;
        -moz-border-radius: 1000px;
        border-radius: 1000px;
        z-index: 40;
        cursor: pointer;
        background: #281af0;
        filter: drop-shadow(0px 15px 6px rgba(40, 26, 240, 0.02))
          drop-shadow(0px 9px 5px rgba(40, 26, 240, 0.05))
          drop-shadow(0px 4px 4px rgba(40, 26, 240, 0.09))
          drop-shadow(0px 1px 2px rgba(40, 26, 240, 0.1))
          drop-shadow(0px 0px 0px rgba(40, 26, 240, 0.1));
      }

      .twentytwenty-horizontal .twentytwenty-handle:before {
        bottom: 50%;
        margin-bottom: 28px;
      }
      .twentytwenty-horizontal .twentytwenty-handle:after {
        top: 50%;
        margin-top: 22px;
      }

      .twentytwenty-vertical .twentytwenty-handle:before {
        left: 50%;
        margin-left: 22px;
      }
      .twentytwenty-vertical .twentytwenty-handle:after {
        right: 50%;
        margin-right: 22px;
      }

      .twentytwenty-left-arrow {
        border-right: 6px solid white;
        left: 50%;
        margin-left: -17px;
      }

      .twentytwenty-right-arrow {
        border-left: 6px solid white;
        right: 50%;
        margin-right: -17px;
      }

      .twentytwenty-up-arrow {
        border-bottom: 6px solid white;
        top: 50%;
        margin-top: -17px;
      }

      .twentytwenty-down-arrow {
        border-top: 6px solid white;
        bottom: 50%;
        margin-bottom: -17px;
      }
    }
    .content {
      gap: 40px;
      li {
        gap: 30px;
        h1 {
          width: 26px;
          text-align: center;
          font-family: "Archia";
          font-style: normal;
          font-weight: 600;
          font-size: 44px;
          line-height: 100%;
          color: #281af0;
          flex: 1;
        }
        p {
          font-family: "Archia";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: -0.2px;
          color: #000000;
          text-align: left;
        }
      }
    }
  }
  .slide3 {
    h1 {
      font-family: "Archia";
      font-style: normal;
      font-weight: 600;
      font-size: 60px;
      line-height: 110%;
      /* identical to box height, or 66px */

      display: flex;
      align-items: center;
      letter-spacing: -0.2px;

      color: #281af0;
      width: 100%;
      span {
        font-weight: 250;
        margin-left: 24px;
      }
    }
    .feature {
      .pill {
        width: 359px;
        li {
          width: 359px;
          height: 96px;
          margin-bottom: 20px;
          background-size: cover;
          &:nth-child(1) {
            background-image: url(/assets/feature-list-1.png);
          }
          &:nth-child(2) {
            background-image: url(/assets/feature-list-2.png);
          }
          &:nth-child(3) {
            background-image: url(/assets/feature-list-3.png);
          }
          &:nth-child(4) {
            background-image: url(/assets/feature-list-4.png);
          }
          &:nth-child(5) {
            background-image: url(/assets/feature-list-5.png);
          }
          &:nth-child(1).selected {
            background-image: url(/assets/feature-list-1-a.png);
          }
          &:nth-child(2).selected {
            background-image: url(/assets/feature-list-2-a.png);
          }
          &:nth-child(3).selected {
            background-image: url(/assets/feature-list-3-a.png);
          }
          &:nth-child(4).selected {
            background-image: url(/assets/feature-list-4-a.png);
          }
          &:nth-child(5).selected {
            background-image: url(/assets/feature-list-5-a.png);
          }
        }
      }
    }
  }
  .slide4 {
    .container .wrap:not(.noSpaces),
    .container .wrap.spaceWrap,
    .container .wrap .spaceWrap {
      padding: 120px calc(8% + 15px);
      padding-bottom: 0px;
    }
    h1 {
      font-family: "Archia";
      font-style: normal;
      font-weight: 600;
      font-size: 60px;
      line-height: 110%;
      /* identical to box height, or 66px */

      display: flex;
      align-items: center;
      letter-spacing: -0.2px;

      color: #281af0;
      width: 100%;
      span {
        font-weight: 250;
        margin-left: 24px;
      }
    }
    p {
      font-family: "Archia";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.2px;
      color: #000000;
      opacity: 0.7;
    }
    .why {
      position: relative;
      display: flex;
      gap: 30px;
      .col {
        position: relative;
        flex: 1;
        img {
          margin-bottom: 30px;
        }
        &:nth-child(1) {
          top: 200px;
        }
        &:nth-child(2) {
          top: 66px;
        }
        &:nth-child(3) {
          top: -180px;
        }
        &:nth-child(4) {
          top: -30px;
        }
      }
    }
    #marquee {
      scroll-behavior: smooth;
    }

    .news {
      height: 380px;
      position: relative;
      margin-top: 200px;
      h1 {
        position: absolute;
        top: 0;
        left: 40px;
        text-align: left;
        text-indent: -40px;
        font-family: "Archia";
        font-style: normal;
        font-weight: 600;
        font-size: 60px;
        line-height: 110%;
        z-index: 9;

        display: flex;
        align-items: center;
        letter-spacing: -0.2px;

        color: #281af0;
      }
      .page-button {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 44px;
        height: 44px;
        padding: 0;
        margin: 0;
        box-sizing: content-box;
        border: 0;
        background: transparent;
        z-index: 11;
        &:nth-child(3) {
          left: 50px;
        }
        svg {
          width: 44px;
          height: 44px;
        }
      }
      .area10 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        padding-left: 350px;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        display: -webkit-box;
        white-space: nowrap;
        li {
          flex: 1;
          width: 460px;
          height: 380px;

          background: #ffffff;
          border: 1px solid #281af0;
          margin-right: 30px;
          padding: 30px;
          position: relative;
          svg {
            width: 24px;
            height: 24px;
            opacity: 0.2;
            position: absolute;
            top: 30px;
            left: 30px;
          }
          h2 {
            width: 400px;
            position: absolute;
            top: 70px;
            left: 30px;
            font-family: "Archia";
            font-style: normal;
            font-weight: 600;
            font-size: 48px;
            line-height: 110%;
            letter-spacing: -0.2px;
            color: #281af0;
            white-space: normal;
            text-align: left;
          }
          p {
            width: 400px;
            position: absolute;
            top: 180px;
            left: 30px;
            white-space: normal;
            text-align: left;
            font-family: "Archia";
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 150%;
            letter-spacing: -0.2px;
            color: #000000;
            opacity: 0.7;
          }
          a {
            position: absolute;
            bottom: 30px;
            left: 30px;
            font-family: "Archia";
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 100%;
            display: flex;
            align-items: center;
            letter-spacing: -0.2px;
            color: #281af0;

            svg {
              position: relative;
              top: auto;
              left: auto;
              margin-left: 10px;
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .slide5 {
    .wrap {
      width: 100%;
      vertical-align: top;
    }
    .container .wrap:not(.noSpaces),
    .container .wrap.spaceWrap,
    .container .wrap .spaceWrap {
      padding: 120px calc(8% + 15px);
    }
    .newslette {
      position: relative;
      background: #ffffff;
      border: 1px solid #281af0;
      overflow: hidden;
      height: 260px;
      width: 100%;
      top: 80px;
      z-index: 2;
      h1 {
        position: absolute;
        left: 40px;
        top: -24px;

        font-family: "Archia";
        font-style: normal;
        font-weight: 600;
        font-size: 110.385px;
        line-height: 110%;

        display: flex;
        align-items: center;
        letter-spacing: -0.315385px;
        -webkit-text-stroke: 1px #281af0;
        -webkit-text-fill-color: #fff;
        opacity: 0.1;
      }
      h2 {
        position: absolute;
        left: 40px;
        top: 50px;
        width: 455px;
        white-space: normal;
        text-align: left;
        font-family: "Archia";
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 110%;
        /* or 53px */

        display: flex;
        align-items: center;
        letter-spacing: -0.2px;

        color: #281af0;
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px 30px;
        gap: 10px;

        position: absolute;
        width: 330px;
        height: 68px;
        right: 96px;
        top: 96px;

        background: #281af0;
        font-family: "Archia";
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 100%;
        /* identical to box height, or 28px */

        display: flex;
        align-items: center;
        letter-spacing: -0.2px;

        color: #ffffff;
      }
      p {
        position: absolute;
        width: 330px;
        right: 96px;
        top: 174px;
        text-align: center;

        font-family: "Archia";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;

        letter-spacing: -0.2px;

        color: #3e31f1;

        opacity: 0.3;
      }
    }
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 640px;
      background: #281af0;
      z-index: 1;
      .wrap {
        display: block;
        position: relative;
        padding-top: 70px;
        .left {
          padding-left: 30px;
          width: 40%;
          float: left;

          svg {
            height: 50px;
            margin-bottom: 40px;
          }
          p {
            max-width: 460px;
            font-family: "Archia";
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 160%;
            /* or 38px */

            letter-spacing: -0.2px;

            color: #ffffff;

            opacity: 0.7;
            margin-bottom: 150px;
          }
          h5 {
            font-family: "Archia";
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            line-height: 100%;
            /* identical to box height, or 28px */

            letter-spacing: -0.2px;

            color: #ffffff;
          }
        }
        .right {
          padding-right: 30px;
          width: 60%;
          float: right;
          padding-left: 110px;
          h1 {
            font-family: "Archia";
            font-style: normal;
            font-weight: 600;
            font-size: 44px;
            line-height: 110%;
            /* or 48px */

            display: flex;
            align-items: center;
            letter-spacing: -0.2px;

            color: #ffffff;
          }
          ul {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 0px;
            width: 620px;
            margin-bottom: 80px;
            margin-top: 35px;
          }
          li {
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 120px;
            flex: 1;
            order: 1;
            flex-grow: 1;
            background: #281af0;
            border: 2px solid #584dff;
            border-radius: 120px;
            margin-right: -20px;
            svg {
              width: 50px;
              height: 50px;
            }
          }
          .signup {
            width: 640px;
            height: 70px;
            position: relative;
            input {
              margin-top: 35px;
              width: 640px;
              height: 70px;
              line-height: 70px;

              font-family: "Archia";
              font-style: normal;
              font-weight: 600;
              font-size: 36px;
              line-height: 110%;
              background: transparent;
              border: 0;
              border-bottom: 1px solid #ffffff;
              display: flex;
              align-items: center;
              letter-spacing: -0.2px;

              color: #ffffff;
              &::placeholder {
                color: rgba(255, 255, 255, 0.2);
              }
            }
            button {
              background-color: transparent;
              border: none;
              position: absolute;
              &:hover {
                cursor: pointer;
              }
              right: 0;
              top: 0;
              height: 70px;
              font-family: "Archia";
              font-style: normal;
              font-weight: 600;
              font-size: 28px;
              line-height: 100%;
              /* identical to box height, or 28px */

              display: flex;
              align-items: center;
              letter-spacing: -0.2px;

              color: #ffffff;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
  }
  @media screen and (max-width: 767px) {
  }
</style>
