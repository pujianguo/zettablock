<template>
  <div id="SlidesContainer" class="page-slides slides scroll smooth smoothScroll animated noPreload">
    <SvgLibrary></SvgLibrary>
    <Panels :toggleSignup="toggleSignup"></Panels>

    <!-- Slide 1 (#03) -->
    <section class="slide slide1 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-bottom-4">
            <div class="fix-12-12">
              <img class="logo-ani ae-2 fromCenter margin-top-6 margin-bottom-4" src="assets/logo-animation.gif" alt="">
              <div class="fix-10-12 fix-main-title ae-3 fromCenter">
                <div class="main-title">
                  The Unified Web3 <br/>Data Platform
                </div>
              </div>
              <div class="fix-10-12">
                <div class="ae-6 fromBottom button access-button" @click="toggleSignup">
                  <span class="button-text">Get Early Access</span>
                  <svg class="button-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                  </svg>
                </div>
                <p class="ae-5 fromBottom description">ZettaBlock is a one-stop blockchain data platform to make data indexing, querying, analyzing, and sharing easy and flexible.<br>Anyone can build real-time, reliable, data-intensive dApps via SQL without the complexity of maintaining infrastructure.</p>
                <p class="ae-5 fromBottom scroll-tip">scroll down to explore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background" style="background: url(/assets/images/slide1_bg.png) no-repeat top center / cover"></div>
    </section>


    <!-- Slide 2 -->
    <section id="product" class="slide slide2 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-top-8 padding-bottom-9">
            <div class="fix-12-12 fix-title">
              <div class="title-order ae-2 fromCenter">
                <div class="order">1</div>
              </div>
              <h1 class="title-text ae-3 fromCenter">Start building your dApps</h1>
            </div>

            <div class="fix-12-12 slide-content">
              <div class="content-title" :style="{'--left': slide2Left }">
                <div class="title-item" :class="{active: slide2CurrentIndex === 1}" @click="handleSlide2CurrentIndexChange($event, 1)">With ZettaBlock</div>
                <div class="title-item" :class="{active: slide2CurrentIndex === 2}" @click="handleSlide2CurrentIndexChange($event, 2)">Without ZettaBlock</div>
              </div>
              <div class="content-image">
                <div class="content-image-inner" :style="{left: slide2CurrentIndex === 1 ? 0 : '-100%'}">
                  <div class="img-item">
                    <img src="/assets/images/slide2_start_with.png" alt="">
                  </div>
                  <div class="img-item">
                    <img src="/assets/images/slide2_start_without.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background" style="background:#fff;"></div>
    </section>

    <!-- Slide 3 -->
    <section id="usecase" class="slide slide3 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-top-9 padding-bottom-9">
            <div class="fix-12-12 fix-title">
              <div class="title-order">
                <div class="order">2</div>
              </div>
              <h1 class="title-text">Start with the developer</h1>
              <p class="title-description">
                ZettaBlock is a one-stop blockchain data platform to make data indexing, querying, analyzing, and sharing easy and flexible.<br/>
                Anyone can build real-time, reliable, data-intensive dApps via SQL without the complexity of maintaining infrastructure.
              </p>
            </div>
            <!-- 图表 -->
            <div class="fix-12-12 flex-left-top margin-top-10">

            </div>
            <!-- 数字 -->
            <ul class="fix-12-12 data-number">
              <li>
                <h1 id="slide3Number1"></h1>
                <h2>Transactions</h2>
                <p>Rich transactions indexed and decoded for 8+ blockchains since genesis.</p>
              </li>
              <li>
                <h1 id="slide3Number2"></h1>
                <h2>Smart Contracts</h2>
                <p>Contracts available with internal data structures for querying.</p>
              </li>
              <li>
                <h1 id="slide3Number3"></h1>
                <h2>Price Feeds </h2>
                <p>Price feeds for fiat and crypto pairs.</p>
              </li>
              <li>
                <h1 id="slide3Number4"></h1>
                <h2>180 Day Uptime</h2>
                <p>Truely reliable platform for decentralised products of the future.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="background" style="background:#fff;"></div>
    </section>

    <!-- Slide 4 -->
    <section id="usecase" class="slide slide4 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-top-9">
            <div class="fix-12-12 fix-title">
              <div class="title-order">
                <div class="order">3</div>
              </div>
              <h1 class="title-text">Features</h1>
              <p class="title-description">
                ZettaBlock is a one-stop blockchain data platform to make data indexing, querying, analyzing, and sharing easy and flexible.<br/>
                Anyone can build real-time, reliable, data-intensive dApps via SQL without the complexity of maintaining infrastructure.
              </p>
            </div>
            <div class="fix-12-12 feature flex-left-top margin-top-9">
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

    <!-- Slide 5 -->
    <section class="slide slide5 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-top-9 padding-bottom-9">
            <div class="fix-12-12 fix-title">
              <div class="title-order">
                <div class="order">4</div>
              </div>
              <h1 class="title-text">Get Started with ZettaBlock</h1>
            </div>
            <div class="fix-12-12">
              <div class="menu" :style="{'--left': slide5Left, '--width': slide5Width }">
                <div class="menu-item" v-for="(item, index) in slide5Menu" :key="item.id"
                  :class="{active: slide5CurrentIndex === index}"
                  @click="handleSlide5MenuChange($event, index)"
                  >{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background" style="background:#fff;"></div>
    </section>

    <!-- Slide 6-->
    <section id="blog" class="slide slide6 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12 fix-title">
              <div class="title-order">
                <div class="order">5</div>
              </div>
              <h1 class="title-text">WHY ZettaBlock ?</h1>
              <p class="title-description">
                ZettaBlock is a one-stop blockchain data platform to make data indexing, querying, analyzing, and <br/> sharing easy and flexible. Anyone can build real-time, reliable.
              </p>
            </div>
            <div class="fix-12-12 content-content">
              <div class="item" v-for="item in slide6List" :key="item.id">
                <svg class="item-icon">
                  <use :href="`#${item.icon}`"></use>
                </svg>
                <div class="item-title">{{item.title}}</div>
                <div class="item-desc">{{item.desc}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background" style="background:#fff;"></div>
    </section>

    <!-- Slide 7-->
    <section id="blog" class="slide slide7 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12">
              <div class="fix-title">
                <div class="title-order">
                  <div class="order">6</div>
                </div>
                <h1 class="title-text">Recent Articles</h1>
              </div>
              <div class="content-content">
                <div class="swiper">
                  <div class="swiper-item" v-for="item in slide7List" :key="item.id">
                    <svg class="item-icon">
                      <use href="#union-1"></use>
                    </svg>
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                    <a class="item-link" :href="item.link">
                      <span>READ</span>
                      <svg class="link-icon">
                        <use href="#arrow-right"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background" style="background:#FAFAFF;"></div>
    </section>


    <!-- Slide 7 -->
    <section id="blog" class="slide slide77 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12 fix-title">
              <div class="title-order">
                <div class="order">6</div>
              </div>
              <h1 class="title-text">Recent Articles</h1>
            </div>

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
                <a href="https://discord.gg/px42xPBFkN" target="_blank">
                  <svg>
                      <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#social-discord"></use>
                    </svg></a></li>
                  <li>
                <a href="https://zettablockhq.medium.com/" target="_blank">
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
  import bounty from "bounty";
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)




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
        slide2CurrentIndex: 1,
        slide2Left: 0,
        slide5CurrentIndex: 0,
        slide5Left: 0,
        slide5Width: 0,
        slide5Menu: [
          {id: 1, name: 'NFT'},
          {id: 2, name: 'DeFi'},
          {id: 3, name: 'Wallet'},
          {id: 4, name: 'Data Analytics'},
          {id: 5, name: 'Blockchains'},
        ],
        slide6List: [
          {id: 1, icon: 'ic-database', title: 'Data Unification', desc: 'Support easy access to on-chain and off-chain data from multiple data sources.'},
          {id: 2, icon: 'ic-processor', title: 'Scalability', desc: 'Support users to easily join petabyte-scale (1,000TB+) data with SQL.'},
          {id: 3, icon: 'ic-flag', title: 'Easy of Use', desc: 'Rich transactions indexed and decoded for 8+ blockchains since genesis.'},
          {id: 4, icon: 'ic-performance', title: 'Absolute Performance', desc: '<0.01 second low-latency customized APIs with sub-second data freshness.'},
          {id: 5, icon: 'ic-cashwithdraw', title: 'Cost Efficiency', desc: 'Reduce many economic costs and technical thresholds for developers.'},
          {id: 6, icon: 'ic-stats', title: 'Analytics Supported', desc: 'Provide query builder and visualization interface for blockchain analytics.'},
          {id: 7, icon: 'ic-doubletick', title: 'Reliability', desc: 'Provide near-perfect system uptimes to support real-time, data-intensive apps.'},
          {id: 8, icon: 'ic-flag', title: 'More', desc: 'Looking forward to your exploration'},
        ],
        slide7List: [
          {id: 1, title: 'Get started with ZettaBlock', desc: 'Deploying a modern data stack in 5 minutes', link: ''},
          {id: 2, title: 'Rethinking the morden data stack', desc: '',  link: ''},
          {id: 3, title: 'Orchestrate a data platform for Solana', desc: '', link: ''},
        ]
      };
    },
    created() {
      document.title = "ZettaBlock - The Unified Web3 Data Platform";
    },
    mounted() {
      setTimeout(() => {
        this.onCreateView();
      }, 100);
      this.$nextTick(() => {
        this.initSlide3()
        this.handleSlide5MenuChange({target: $('.menu-item')[0]}, 0)
      })
    },
    watch: {},
    destroyed() {
      this.removeHome();
    },
    methods: {
      // Slide2中的切换
      handleSlide2CurrentIndexChange ({ target }, index) {
        const { width, left } = target.getBoundingClientRect()
        const { left: parentLeft } = target.parentNode.getBoundingClientRect()
        this.slide2Left = left - parentLeft + 'px'
        this.slide2CurrentIndex = index
      },

      // Slide3中的方法
      initSlide3 () {
        ScrollTrigger.create({
          trigger: '.slide3 .data-number',
          start: 'top bottom-=50px',
          end: 'bottom top',
          // markers: true,
          onEnter: () => {
            this.showCount()
          },
        })
      },
      showCount () {
        bounty({
          el: '#slide3Number1',
          value: '110B+',
          lineHeight: 1,
          height: 60,
          letterSpacing: -1,
          animationDelay: 100,
          letterAnimationDelay: 200,
          duration: 3000,
        });
        bounty({
          el: '#slide3Number2',
          value: '1M+',
          lineHeight: 1,
          height: 60,
          letterSpacing: -1,
          animationDelay: 100,
          letterAnimationDelay: 200,
          duration: 3000,
        });
        bounty({
          el: '#slide3Number3',
          value: '4.3B+',
          lineHeight: 1,
          height: 60,
          letterSpacing: -1,
          animationDelay: 100,
          letterAnimationDelay: 200,
          duration: 3000,
        });
        bounty({
          el: '#slide3Number4',
          value: '99.95%',
          lineHeight: 1,
          height: 60,
          letterSpacing: -1,
          animationDelay: 100,
          letterAnimationDelay: 200,
          duration: 3000,
        });
      },

      // Slide5
      handleSlide5MenuChange({ target }, i) {
        const { width, left } = target.getBoundingClientRect()
        const { left: parentLeft } = target.parentNode.getBoundingClientRect()
        this.slide5Left = left - parentLeft + 'px'
        this.slide5Width = width + 'px'
        this.slide5CurrentIndex = i
      },

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
    z-index: 300;
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

  .fix-title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .title-order{
      width: 165px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url(/assets/images/title_bg.png) no-repeat;
      .order{
        width: 50px;
        height: 50px;
        line-height: 50px;
        background: linear-gradient(180deg, #FBFAFF 0%, #FFFFFF 25.98%, #EFEFFF 87.14%, #F5F3FD 100%);
        border: 1px solid rgba(40, 26, 240, 0.04);
        box-shadow: 0px 27px 11px rgba(40, 27, 240, 0.01), 0px 15px 9px rgba(40, 27, 240, 0.02), 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
        border-radius: 50px;
        font-family: 'Basier Square';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: #281AF0;
      }
    }
    .title-text{
      font-family: 'Basier Square';
      font-style: normal;
      font-weight: 600;
      font-size: 54px;
      line-height: 110%;
      color: #000000;
      text-align: center;
      margin-top: 10px;
      margin-bottom: 0;
    }
    .title-description{
      margin-top: 20px;
      font-family: 'Basier Square';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: #000000;
      opacity: 0.5;
    }
  }
  .slide1 {
    .wrap{
      .fix-12-12{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .fix-main-title{
          flex: 1;
          padding-bottom: 40px;
        }
      }
    }
    .logo-ani {
      width: 60px;
      position: relative;
      top: 0;
    }
    .main-title {
      width: 100%;
      font-size: 80px;
      font-weight: 700;
      line-height: 88px;
      text-align: center;
      text-transform: uppercase;
      background: radial-gradient(53.42% 202.11% at 78.75% 25.76%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #281AF0;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

    }
    .access-button{
      width: 248px;
      height: 52px;
      background: radial-gradient(129.53% 327.88% at 69.76% 0%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
      box-shadow: 0px 77px 31px rgba(106, 38, 249, 0.01), 0px 43px 26px rgba(106, 38, 249, 0.05), 0px 19px 19px rgba(106, 38, 249, 0.09), 0px 5px 11px rgba(106, 38, 249, 0.1), 0px 0px 0px rgba(106, 38, 249, 0.1);
      border-radius: 4px;
      text-align: center;
      margin-bottom: 45px;
      .button-text{
        font-family: 'Basier Square';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
      }
      .button-icon{
        width: 24px;
        height: 24px;
        margin-left: 5px;
        margin-right: 0;
      }
    }
    .description{
      font-family: "Basier Square";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      letter-spacing: -0.2px;
      color: #000000;
    }
    .scroll-tip{
      font-family: 'Basier Square';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #5A20FB;
      opacity: 0.2;
      text-align: center;
      margin-top: 100px;
    }
    .background {
      background-size: cover;
      background-position: center bottom;
    }

  }
  .slide2 {
    .container{
      height: auto !important;
    }
    .slide-content{
      width: 100%;
      border: 1px solid rgba(40, 26, 240, 0.08);
      border-radius: 12px;
      margin-top: 80px;
      position: relative;
      .content-title{
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        height: 60px;
        width: 535px;
        border-radius: 50px;
        background: linear-gradient(180deg, #FBFAFF 0%, #FFFFFF 25.98%, #EFEFFF 87.14%, #F5F3FD 100%);
        border: 1px solid rgba(40, 26, 240, 0.04);
        box-shadow: 0px 27px 11px rgba(40, 27, 240, 0.01), 0px 15px 9px rgba(40, 27, 240, 0.02), 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
        border-radius: 50px;
        display: flex;
        z-index: 1;
        .title-item{
          flex: 1;
          height: 58px;
          line-height: 58px;
          text-align: center;
          font-family: 'Basier Square';
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          color: rgba(40, 26, 240, 0.4);
          cursor: pointer;
          &.active{
            color: #FFFFFF;
          }
        }
        &::before{
          content: '';
          position: absolute;
          width: 50%;
          left: var(--left);
          height: 100%;
          background: radial-gradient(129.53% 327.88% at 69.76% 0%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
          box-shadow: 0px 77px 31px rgba(106, 38, 249, 0.01), 0px 43px 26px rgba(106, 38, 249, 0.05), 0px 19px 19px rgba(106, 38, 249, 0.09), 0px 5px 11px rgba(106, 38, 249, 0.1), 0px 0px 0px rgba(106, 38, 249, 0.1);
          border-radius: 99px;
          z-index: -1;
          transition: all .4s;
          transition-timing-function: ease-in-out;
        }
      }
      .content-image{
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 50.7246%;
        overflow: hidden;
        display: flex;
        .content-image-inner{
          position: absolute;
          left: 0;
          top: 0;
          width: 200%;
          height: 100%;
          transition: all .4s;
          transition-timing-function: ease-in-out;
          .img-item{
            width: 50%;
            height: 100%;
            display: inline-block;
            img{
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
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
    .container{
      height: auto !important;
    }

    .data-number {
      display: grid;
      grid-template-rows: minmax(100px auto);
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      grid-auto-flow: dense;
      grid-gap: 10px;
      margin-top: 160px;
      li {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 20px;
        h1 {
          font-family: 'Basier Square';
          font-style: normal;
          font-weight: 600;
          font-size: 60px;
          height: 60px;
          line-height: 100%;
          letter-spacing: -0.2px;
          color: #281af0;
          margin-bottom: 5px;
          svg{
            fill: #281af0 !important;
          }
        }
        h2 {
          font-family: "Basier Square";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 150%;
          letter-spacing: -0.2px;
          color: #000000;
          margin-bottom: 12px;
        }
        p {
          font-family: "Basier Square";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: -0.2px;
          color: #000000;
          text-align: left;
        }
      }
    }
  }
  .slide4 {
    .container{
      height: auto !important;
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
  .slide5 {
    .container{
      height: auto !important;
    }
    .menu{
      position: relative;
      display: flex;
      margin-top: 35px;
      justify-content: center;
      .menu-item{
        z-index: 10;
        margin: 0 15px;
        padding: 18px 46px;
        font-family: 'Basier Square';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: -0.2px;
        color: rgba(40, 26, 240, 0.3);
        cursor: pointer;
        background: linear-gradient(180deg, #FBFAFF 0%, #FFFFFF 25.98%, #EFEFFF 87.14%, #F5F3FD 100%);
        border: 1px solid rgba(40, 26, 240, 0.04);
        box-shadow: 0px 27px 11px rgba(40, 27, 240, 0.01), 0px 15px 9px rgba(40, 27, 240, 0.02), 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
        border-radius: 50px;
        transition-delay: 0s;
      }
      .active {
        color: #fff;
        background: transparent;
        transition-delay: 0.3s;
      }
      &::before {
        position: absolute;
        left: var(--left);
        width: var(--width);
        height: 100%;
        content: '';
        background: radial-gradient(129.53% 327.88% at 69.76% 0%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
        box-shadow: 0px 77px 31px rgba(106, 38, 249, 0.01), 0px 43px 26px rgba(106, 38, 249, 0.05), 0px 19px 19px rgba(106, 38, 249, 0.09), 0px 5px 11px rgba(106, 38, 249, 0.1), 0px 0px 0px rgba(106, 38, 249, 0.1);
        border-radius: 99px;
        transition: all .4s;
        transition-timing-function: ease-in-out;
      }
    }
  }
  .slide6 {
    .container{
      height: auto !important;
    }
    .content-content{
      display: grid;
      grid-template-rows: minmax(100px auto);
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      grid-auto-flow: dense;
      grid-gap: 30px;
      margin-top: 70px;
      .item{
        padding: 40px 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background: #FAFAFF;
        border: 1px solid rgba(40, 26, 240, 0.08);
        border-radius: 12px;
        text-align: left;
        .item-icon{
          width: 32px;
          height: 32px;
        }
        .item-title{
          font-family: 'Basier Square';
          font-style: normal;
          font-weight: 600;
          font-size: 32px;
          line-height: 120%;
          color: #392CFF;
          margin-bottom: 20px;
        }
        .item-desc{
          font-family: 'Basier Square';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 150%;
          letter-spacing: 0.2px;
          color: #000000;
          opacity: 0.7;
        }
      }
    }

  }
  .slide7 {
    .container{
      height: auto !important;
      .wrap{
        padding-right: 0;
        padding-bottom: 140px;
      }
    }
    .fix-12-12{
      display: flex;
      .fix-title{
        width: 256px !important;
        height: 188px !important;
        margin-right: 90px !important;
        position: relative;
        .title-order{
          position: absolute;
          top: 0;
          left: 0;
          align-items: flex-start;
          justify-content: flex-start;
        }
        .title-text{
          position: absolute;
          left: 0;
          bottom: 0;
          text-align: left;
          text-transform: uppercase;
        }
      }
      .content-content{
        flex: 1;
        overflow: hidden;
        // background: #eee;
        .swiper{
          display: flex;
          .swiper-item{
            width: 460px;
            height: 380px;
            padding: 30px;
            flex-shrink: 0;
            background: #FFFFFF;
            margin-right: 30px;
            border: 1px solid rgba(40, 26, 240, 0.08);
            box-shadow: 14px 53px 33px rgba(0, 0, 97, 0.02), 6px 23px 24px rgba(0, 0, 97, 0.03), 2px 6px 13px rgba(0, 0, 97, 0.03), 0px 0px 0px rgba(0, 0, 97, 0.03);
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            text-align: left;

            .item-icon{
              width: 24px;
              height: 15px;
            }
            .item-title{
              margin-top: 24px;
              font-family: 'Basier Square';
              font-style: normal;
              font-weight: 500;
              font-size: 48px;
              line-height: 110%;
              letter-spacing: -0.2px;
              color: #000000;
            }
            .item-desc{
              margin-top: 10px;
              font-family: 'Basier Square';
              font-style: normal;
              font-weight: 400;
              font-size: 22px;
              line-height: 150%;
              color: #000000;
              opacity: 0.5;
              flex: 1;
            }
            .item-link{
              font-family: 'Basier Square';
              font-style: normal;
              font-weight: 600;
              font-size: 24px;
              line-height: 100%;
              display: flex;
              align-items: center;
              letter-spacing: -0.2px;
              color: #281AF0;
              .link-icon{
                width: 32px;
                height: 32px;
              }
            }
          }
        }
      }
    }
  }

  .slide66 {
    .container .wrap:not(.noSpaces),
    .container .wrap.spaceWrap,
    .container .wrap .spaceWrap {
      padding: 120px calc(8% + 15px);
      padding-bottom: 0px;
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

  @media screen and (min-width: 768px) and (max-width: 1199px) {
  }
  @media screen and (max-width: 767px) {
  }
</style>
