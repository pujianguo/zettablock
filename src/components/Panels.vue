<template>
  <div class="panels">
    <!-- Loading Progress Bar -->
    <div class="progress-bar blue"></div>
    <!-- Side Navigation -->

    <!-- Panel Top -->
    <nav class="panel top">
      <div class="sections desktop">
        <div class="left">
          <a href="#" title="ZettaBlock" class="logo">
            <svg class="logo-icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-icon"></use>
            </svg>
            <svg class="logo-text">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-text"></use>
            </svg>
          </a>
        </div>
        <div class="right">
          <ul class="menu">
            <li>
              <a href="#product">
                Product
                <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use></svg>
              </a>
            </li>
            <li><a href="#usecases">Use Cases</a></li>
            <li><a href="https://zettablockhq.medium.com/" target="_blank">Blog</a></li>
            <li><a href="https://docs.zettablock.com/" target="_blank">Docs</a></li>
          </ul>
          <a class="cta" href="https://calendly.com/zettablock/30min" target="_blank">
            Schedule Demo
            <svg><use xmlns:xlink=" http://www.w3.org/1999/xlink" xlink:href="#arrow-right-blue"></use></svg>
          </a>
        </div>
      </div>
      <div class="sections compact hidden">
        <div class="left">
          <a href="#" title="ZettaBlock" class="logo">
            <svg class="logo-icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-icon"></use>
            </svg>
            <svg class="logo-text">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-text"></use>
            </svg>
          </a>
        </div>
        <div class="right">
          <div class="menu-btn" :class="{'menu-btn_open': isOpen}" @click="handleMenuChange">
            <span class="btn" data-sidebar-id="1">
              <!-- <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                <rect width="16" height="2" fill="#281AF0"/>
                <rect y="6" width="16" height="2" fill="#281AF0"/>
                <rect y="12" width="16" height="2" fill="#281AF0"/>
              </svg> -->
            </span>
          </div>
        </div>
      </div>
    </nav>
    <div class="m-menu-wrap" :class="{'m-menu-wrap_open': isOpen}">
      <ul class="menu">
        <li>
          <a href="#product">
            Product
            <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-down"></use></svg>
          </a>
        </li>
        <li><a href="#usecases">Use Cases</a></li>
        <li><a href="https://zettablockhq.medium.com/" target="_blank">Blog</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <a class="cta" @click="toggleSignup">
        Get Early Access
        <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right-blue"></use></svg>
      </a>
    </div>
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
    return {
      isOpen: false,
    };
  },

  methods: {
    handleMenuChange () {
      this.isOpen = !this.isOpen
    }
  },
};
</script>

<style lang="scss">
  .panel.top {
    width: 100%;
    padding: 0;
    background: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid #281af0;
    backdrop-filter: blur(20px);
    .desktop{
      height: 70px;
      padding: 10px 30px;
    }
    .left{
      .logo{
        display: flex;
        align-items: center;
        .logo-icon{
          width: 24px;
          height: 24px;
          margin-right: 16px;
        }
        .logo-text{
          width: 129px;
          height: 20px;
          color: #000;
        }
      }
    }
    .right .menu {
      li {
        a {
          font-family: 'Basier Square';
          font-style: normal;
          font-weight: 500;
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
    .right .menu-btn{
      width: 42px;
      height: 42px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      .btn{
        position: relative;
        display: block;
        width: 16px;
        height: 2px;
        background: #281AF0;
        margin: 0 auto;
        border: none;
        cursor: pointer;
        color: inherit;
        font-size: 0;
        transition: 0.35s;

        &::before,
        &::after {
          position: absolute;
          top: 0;
          left: 50%;
          display: block;
          width: 100%;
          height: 2px;
          background: #281AF0;
          content: "";
          transition: transform 0.35s;
          transform-origin: 50% 50%;
        }
        &::before {
          transform: translate(-50%, -6px);

        }
        &::after {
          transform: translate(-50%, 6px);
        }
      }
      &.menu-btn_open{
        .btn{
          background: transparent;
          &::before {
            animation: menuBefore 0.5s forwards;
          }

          &::after {
            animation: menuAfter 0.5s forwards;
          }
          @keyframes menuBefore {
            0% {
              transform: translate(-50%, -6px);
            }
            40% {
              transform: translate(-50%, 0);
            }
            60% {
              transform: translate(-50%, 0);
            }
            100% {
              transform: translate(-50%, 0) rotate(45deg);
            }
          }
          @keyframes menuAfter {
            0% {
              transform: translate(-50%, 6px);
            }
            40% {
              transform: translate(-50%, 0);
            }
            60% {
              transform: translate(-50%, 0);
            }
            100% {
              transform: translate(-50%, 0) rotate(-45deg);
            }
          }
        }
      }
    }
    a.cta {
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      color: #281af0;
      display: inline-flex;
      align-items: center;
      svg {
        width: 16px;
        height: 16px;
        margin-left: 5px;
      }
    }
    .compact {
      height: 50px;
      padding: 0 30px;
      .logo{
        .logo-icon{
          width: 18px;
          height: 18px;
          margin-right: 12px;
        }
        .logo-text{
          width: 97px;
          height: 15px;
        }
      }
    }
  }
  .m-menu-wrap{
    opacity: 0;
    transform: translateY(-100%);
    transition: all 0.3s;
    position: fixed;
    top: 51px;
    left: 0;
    width: 100%;
    padding: 20px;
    background: rgba(255, 255, 255, 0.8);
    border-bottom: 0.5px solid #281AF0;
    box-shadow: 0px 27px 11px rgba(40, 27, 240, 0.01), 0px 15px 9px rgba(40, 27, 240, 0.02), 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
    backdrop-filter: blur(22.5px);
    z-index: 199;
    .menu{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      li {
        a {
          font-family: 'Basier Square';
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
          display: flex;
          font-size: 24px;
          margin: 20px 0;
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
      width: 100%;
      margin: 20px auto;
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      color: #281af0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      svg {
        width: 16px;
        height: 16px;
        margin-left: 5px;
      }
    }
  }
  .m-menu-wrap_open{
    transform: translateY(0);
    opacity: 1;
  }
</style>
