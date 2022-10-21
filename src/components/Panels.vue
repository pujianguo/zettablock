<template>
  <div class="panels">
    <!-- Loading Progress Bar -->
    <div class="progress-bar blue"></div>
    <!-- Side Navigation -->

    <!-- Panel Top -->
    <nav class="panel top">
      <div class="sections desktop">
        <div class="left"><a href="#" title="ZettaBlock"><svg style="width:176px;height:24px">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-full"></use>
            </svg></a></div>
        <div class="right">
          <ul class="menu">
            <li><a href="#product">Product<svg>
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use>
                </svg></a></li>
            <li><a href="#usecase">Use Cases</a></li>
            <li><a href="#" target="_blank">Pricing</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <a class="cta" @click="toggleSignup">Get Early Access <svg>
              <use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#arrow-right-blue"></use>
            </svg></a>
        </div>
      </div>
      <div class="sections compact hidden">
        <div class="left"><a href="#" title="Slides Framework"><svg style="width:82px;height:24px">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
            </svg></a></div>
        <div class="right"><span class="button actionButton sidebarTrigger" data-sidebar-id="1"><svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menu"></use>
            </svg></span></div>
      </div>
    </nav>
    <!-- Sidebar -->
    <!-- <nav class="sidebar" data-sidebar-id="1">
      <div class="close"><svg>
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close"></use>
        </svg></div>
      <div class="content">
        <a href="#" class="logo"><svg width="100" height="30">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
          </svg></a>
        <ul class="mainMenu margin-top-3">
          <li><a href="#">All Goods</a></li>
          <li><a href="#">UI Kits</a></li>
          <li><a href="#">Icons</a></li>
          <li><a href="#">Mockups</a></li>
          <li><a href="#">Toolkit</a></li>
        </ul>
        <ul class="subMenu small opacity-8">
          <li><a href="#">Submit Product</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">License</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <ul class="social opacity-8">
          <li><a href="#"><svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#facebook"></use>
              </svg></a></li>
          <li><a href="#"><svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#twitter"></use>
              </svg></a></li>
          <li><a href="#"><svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#instagram"></use>
              </svg></a></li>
        </ul>
      </div>
    </nav> -->

    <!-- Panel Bottom -->
    <!-- <nav class="panel bottom forceMobileView">
      <div class="sections desktop">
        <div class="left"><span class="opacity-8">Built with <a href="#" title="Slides Framework"><svg style="width:52px;height:21px">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
              </svg></a></span></div>
        <div class="center"><span class="opacity-8 semiBold">No risk trial &nbsp;•&nbsp; Support &nbsp;•&nbsp; Frequent updates</span></div>
        <div class="right"><span data-dropdown-id="2" class="button actionButton dropdownTrigger"><svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#share"></use>
            </svg></span></div>
      </div>
      <div class="sections compact hidden">
        <div class="left">Built with <a href="#" title="Slides Framework"><svg style="width:58px;height:16px">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
            </svg></a></div>
        <div class="right"><span data-dropdown-id="2" class="button actionButton dropdownTrigger"><svg>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#share"></use>
            </svg></span></div>
      </div>
    </nav> -->

    <!-- Share Window -->
    <div class="dropdown share bottom right" data-dropdown-id="2" data-text="Take a look at this" data-url="https://designmodo.com" data-pinterest-image="https://designmodo.com/wp-content/uploads/2015/10/Presentation.jpg">
      <div class="center padding-2">
        <div class="title">Share</div>
        <a href="#">Contact us</a>
      </div>
      <ul>
        <li class="social-facebook"><svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fb-like"></use>
          </svg></li>
        <li class="social-twitter"><svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#twitter"></use>
          </svg></li>
        <li class="social-pinterest"><svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#pinterest"></use>
          </svg></li>
        <li class="social-linkedin"><svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#linkedin"></use>
          </svg></li>
        <li class="mail" data-subject="Subject" data-body="Body">share by email</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mainNav",
    components: {},
    props: {
      toggleSignup: {
        type: Function,
        required: true
      },
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style lang="scss">
  .panel.top {
    width: 100%;
    height: 70px;

    background: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid #281af0;
    backdrop-filter: blur(20px);
    .right .menu {
      li {
        a {
          font-family: "Archia";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 100%;
          display: flex;
          align-items: center;
          letter-spacing: -0.2px;
          color: #000000;
          &:hover {
            text-decoration: underline;
          }
          svg {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
    a.cta {
      font-family: "Archia";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: -0.2px;

      color: #281af0;
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
</style>
