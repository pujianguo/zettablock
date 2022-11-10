<template>
  <div id="SlidesContainer" class="page-slides slides scroll smooth smoothScroll animated noPreload">
    <SvgLibrary></SvgLibrary>
    <Panels :toggleSignup="toggleSignup"></Panels>

    <!-- Slide 1 (#03) -->
    <section class="slide slide1 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-bottom-2">
            <div class="fix-12-12">
              <img class="logo-ani ae-2 fromCenter" src="assets/logo-animation.gif" alt="">
              <div class="fix-12-12 fix-main-title ae-3 fromCenter">
                <div class="main-title">
                  The First Full-stack,<br/>Real-time Web3 Data Infra
                </div>
              </div>
              <div class="fix-10-12">
                <p class="ae-5 fromBottom description">Build your own GraphQL APIs and SQL. <br/>Indexing and analytics. On-chain and off-chain.</p>

                <div class="button-wrap">
                  <div class="ae-6 fromBottom button access-button" @click="toggleSignup">
                    <span class="button-text">Get Early Access</span>
                    <svg class="button-icon">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                    </svg>
                  </div>
                  <div class="ae-7 fromBottom button view-button" @click="toggleSignup">
                    <span class="button-text">View Docs</span>
                    <svg class="button-icon">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                    </svg>
                  </div>

                </div>
                <p class="ae-8 fromBottom scroll-tip">Trusted by leading Web3 companies</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="background" style="background: url(/assets/images/slide1_bg.png) no-repeat top center / cover"></div>
    </section>

    <section class="slide slide1a whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-top-0 padding-bottom-0">
            <div class="fix-12-12">
              <div class="">
                <div class="link-wrap" id="linkWrap">
                  <div class="link-item" v-for="(item, i) in [...slide1LinkList, ...slide1LinkList]" :key="i"
                    :style="{width: item.width + 'px', height: item.height + 'px'}"
                    >
                    <svg>
                      <use :href="`#${item.icon}`"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="link-wrap_mobile" id="linkWrap1">
                  <div class="link-item" v-for="(item, i) in [...slide1LinkList, ...slide1LinkList]" :key="i"
                    :style="{width: item.width / 2 + 'px', height: item.height / 2 + 'px'}"
                    >
                    <svg>
                      <use :href="`#${item.icon}`"></use>
                    </svg>
                  </div>
                </div>
                <div class="link-wrap_mobile" id="linkWrap2">
                  <div class="link-item" v-for="(item, i) in [...slide1LinkList, ...slide1LinkList]" :key="i"
                    :style="{width: item.width / 2 + 'px', height: item.height / 2 + 'px'}"
                    >
                    <svg>
                      <use :href="`#${item.icon}`"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Slide 2 -->
    <section id="chains" class="slide slide2 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12">
              <div class="content-body">
                <div class="body-left">
                  <div class="title ae-1 fromBottom">Supported chains</div>
                  <div class="wrap-title ae-3 fromBottom is-mobile">Multiple Chains Support</div>
                  <div class="input-wrap ae-2 fromBottom">
                  <!-- <div class="input-wrap input-wrap_success"> -->
                    <input class="input" type="text" placeholder="Request a new network">
                    <div class="btn-wrap">
                      <svg class="btn">
                        <use href="#arrow-right"></use>
                      </svg>
                    </div>
                    <div class="success-wrap">
                      <span>Thank You!</span>
                      <svg class="btn">
                        <use href="#success"></use>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="body-right">
                  <div class="wrap-title ae-3 fromBottom is-pc">Multiple Chains Support</div>
                  <div class="chain-wrap ae-4 fromBottom">
                    <div class="chain-item" v-for="item in chainList" :key="item.directiveFunction">
                      <img class="icon" :src="item.icon" alt="">
                      <span class="name">{{item.name}}</span>
                      <span class="coming-soon" v-if="item.isComingSoon">WIP</span>
                      
                    </div>
                    <div class="chain-item chain-item_more">More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background" style="background: #FAFAFF;"></div>
    </section>

    <!-- Slide3 -->
    <section id="develop" class="slide slide3 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12">
              <div class="section-title  ae-1 fromBottom">Develop. Preview. Ship</div>
              <section-code class="ae-2 fromBottom" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Slide 4 -->
    <section class="slide slide4 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="section-title ae-1 fromBottom">Build data-powered apps within seconds</div>

            <div class="fix-12-12 slide-content ae-2 fromBottom">
              <div class="content-title" :style="{'--left': slide2Left }">
                <div class="title-item" :class="{active: slide2CurrentIndex === 1}" @click="handleSlide2CurrentIndexChange($event, 1)">
                  <div class="title">With ZettaBlock</div>
                  <div class="subtitle">Milliseconds</div>
                </div>
                <div class="title-item" :class="{active: slide2CurrentIndex === 2}" @click="handleSlide2CurrentIndexChange($event, 2)">
                  <div class="title">Without ZettaBlock</div>
                  <div class="subtitle">hours</div>
                </div>
              </div>
              <div class="content-content-pc">
                <div class="content-content-inner" :style="{left: slide2CurrentIndex === 1 ? 0 : '-100%'}">
                  <div class="content-item content-item-with">
                    <div class="col col-1">
                      <div class="img-box-left">
                        <img class="img" src="/assets/images/slide4/start-1-1.png" alt="">
                        <img class="img" src="/assets/images/slide4/start-1-2.png" alt="">
                      </div>
                    </div>
                    <div class="col col-2">
                      <svg class="svg-path-1" viewBox="0 0 140 228">
                        <path id="circle-path" d="M0,3 H20 L120,114 H140" stroke-width="1" fill="none" stroke="#281AF0"></path>
                        <path d="M0,225 H20 L120,114 H140" stroke-width="1" fill="none" stroke="#281AF0"></path>
                        <g>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="0"
                              dur="2.1s"
                              rotate="auto"
                              path="M3,3 H20 L120,114 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="0.7s"
                              dur="2.1s"
                              rotate="auto"
                              path="M3,3 H20 L120,114 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="1.4s"
                              dur="2.1s"
                              rotate="auto"
                              path="M3,3 H20 L120,114 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                        </g>
                        <g>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="0"
                              dur="2.1s"
                              rotate="auto"
                              path="M0,225 H20 L120,114 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="0.7s"
                              dur="2.1s"
                              rotate="auto"
                              path="M0,225 H20 L120,114 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="1.4s"
                              dur="2.1s"
                              rotate="auto"
                              path="M0,225 H20 L120,114 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                        </g>
                      </svg>
                    </div>
                    <div class="col col-3">
                      <div class="circle-box">
                        <div class="circle">
                          <div class="circle-content">
                            <svg class="logo-icon">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-icon-2"></use>
                            </svg>
                            <svg class="logo-text">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-text-2"></use>
                            </svg>
                          </div>
                          <div class="circle-ring"></div>
                          <div class="circle-ring"></div>
                          <div class="circle-ring"></div>
                          <div class="circle-ring"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col col-2">
                      <svg class="svg-path-2" viewBox="0 0 140 462">
                        <path d="M0,231 H20 L120,3 H140" stroke-width="1" fill="none" stroke="#281AF0"></path>
                        <path d="M0,231 H20 L120,153 H140" stroke-width="1" fill="none" stroke="#281AF0"></path>
                        <path d="M0,231 H20 L120,309 H140" stroke-width="1" fill="none" stroke="#281AF0"></path>
                        <path d="M0,231 H20 L120,459 H140" stroke-width="1" fill="none" stroke="#281AF0"></path>
                        <g>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              dur="2.1s"
                              begin="0"
                              rotate="auto"
                              path="M0,231 H20 L120,3 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="0"
                              dur="2.1s"
                              rotate="auto"
                              path="M0,231 H20 L120,153 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="0"
                              dur="2.1s"
                              rotate="auto"
                              path="M0,231 H20 L120,309 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="0"
                              dur="2.1s"
                              rotate="auto"
                              path="M0,231 H20 L120,459 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                        </g>
                        <g>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              dur="2.1s"
                              begin="0.7s"
                              rotate="auto"
                              path="M0,231 H20 L120,3 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="0.7s"
                              dur="2.1s"
                              rotate="auto"
                              path="M0,231 H20 L120,153 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="0.7s"
                              dur="2.1s"
                              rotate="auto"
                              path="M0,231 H20 L120,309 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="0.7s"
                              dur="2.1s"
                              rotate="auto"
                              path="M0,231 H20 L120,459 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                        </g>
                        <g>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              dur="2.1s"
                              begin="1.4s"
                              rotate="auto"
                              path="M0,231 H20 L120,3 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="1.4s"
                              dur="2.1s"
                              rotate="auto"
                              path="M0,231 H20 L120,153 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="1.4s"
                              dur="2.1s"
                              rotate="auto"
                              path="M0,231 H20 L120,309 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="3" fill="#281AF0">
                            <animateMotion
                              begin="1.4s"
                              dur="2.1s"
                              rotate="auto"
                              path="M0,231 H20 L120,459 H140"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                        </g>
                      </svg>
                    </div>
                    <div class="col col-1">
                      <div class="img-box-right">
                        <img class="img" src="/assets/images/slide4/start-2-1.png" alt="">
                        <img class="img" src="/assets/images/slide4/start-2-2.png" alt="">
                        <img class="img" src="/assets/images/slide4/start-2-3.png" alt="">
                        <img class="img" src="/assets/images/slide4/start-2-4.png" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="content-item content-item-without">
                    <img src="/assets/images/slide4/without.png" alt="">
                  </div>
                </div>
              </div>
              <div class="content-content-m">
                <div class="content-content-inner" :style="{left: slide2CurrentIndex === 1 ? 0 : '-100%'}">
                  <div class="content-item content-item-with">
                    <div class="col col-1">
                      <div class="img-box-left">
                        <img class="img" src="/assets/images/slide4/start-mb-1-1.png" alt="">
                        <img class="img" src="/assets/images/slide4/start-mb-1-2.png" alt="">
                      </div>
                    </div>
                    <div class="col col-2">
                      <svg class="svg-path-1" viewBox="0 0 150 57">
                        <path id="circle-path" d="M2,0 V15 L75,42 V57" stroke-width="0.5" fill="none" stroke="#281AF0"></path>
                        <path d="M148,0 V15 L75,42 V57" stroke-width="0.5" fill="none" stroke="#281AF0"></path>
                        <g>
                          <circle cx="-6" cy="0" r="2" fill="#281AF0">
                            <animateMotion
                              begin="0"
                              dur="2s"
                              rotate="auto"
                              path="M2,0 V15 L75,42 V57"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="2" fill="#281AF0">
                            <animateMotion
                              begin="1s"
                              dur="2s"
                              rotate="auto"
                              path="M2,0 V15 L75,42 V57"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                        </g>
                        <g>
                          <circle cx="-6" cy="0" r="2" fill="#281AF0">
                            <animateMotion
                              id="animateMotion1"
                              begin="0"
                              dur="2s"
                              rotate="auto"
                              path="M148,0 V15 L75,42 V57"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="2" fill="#281AF0">
                            <animateMotion
                              id="animateMotion11"
                              begin="1s"
                              dur="2s"
                              rotate="auto"
                              path="M148,0 V15 L75,42 V57"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                        </g>
                      </svg>
                    </div>
                    <div class="col col-3">
                      <div class="circle-box">
                        <div class="circle">
                          <div class="circle-content">
                            <svg class="logo-icon">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-icon-2"></use>
                            </svg>
                            <svg class="logo-text">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-text-2"></use>
                            </svg>
                          </div>
                          <div class="circle-ring"></div>
                          <div class="circle-ring"></div>
                          <div class="circle-ring"></div>
                          <div class="circle-ring"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col col-2-2">
                      <svg class="svg-path-2" viewBox="0 0 150 163">
                        <path d="M75,0 V15 L2,42 V163" stroke-width="0.5" fill="none" stroke="#281AF0"></path>
                        <path d="M75,0 V15 L148,42 V163" stroke-width="0.5" fill="none" stroke="#281AF0"></path>
                        <g>
                          <circle cx="-6" cy="0" r="1.5" fill="#281AF0">
                            <animateMotion
                              dur="2.1s"
                              begin="0"
                              rotate="auto"
                              path="M75,0 V15 L2,42 V163"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="1.5" fill="#281AF0">
                            <animateMotion
                              begin="0"
                              dur="2.1s"
                              rotate="auto"
                              path="M75,0 V15 L148,42 V163"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                        </g>
                        <g>
                          <circle cx="-6" cy="0" r="1.5" fill="#281AF0">
                            <animateMotion
                              dur="2.1s"
                              begin="0.7s"
                              rotate="auto"
                              path="M75,0 V15 L2,42 V163"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                          <circle cx="-6" cy="0" r="1.5" fill="#281AF0">
                            <animateMotion
                              begin="0.7s"
                              dur="2.1s"
                              rotate="auto"
                              path="M75,0 V15 L148,42 V163"
                              repeatCount="indefinite"
                            ></animateMotion>
                          </circle>
                        </g>
                      </svg>
                    </div>
                    <div class="col col-4">
                      <div class="img-box-right">
                        <img class="img" src="/assets/images/slide4/start-mb-2-1.png" alt="">
                        <img class="img" src="/assets/images/slide4/start-mb-2-2.png" alt="">
                        <img class="img" src="/assets/images/slide4/start-mb-2-3.png" alt="">
                        <img class="img" src="/assets/images/slide4/start-mb-2-4.png" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="content-item content-item-without">
                    <img src="/assets/images/slide4/without_m.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background" style="background: #FAFAFF !important;"></div>
    </section>

    <!-- Slide 11 -->
    <section id="product" class="slide slide11 slide11-1 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12">
              <div class="section-subtitle ae-1 fromBottom">Designed for developers</div>
              <div class="section-title ae-2 fromBottom">The complete, fully managed web3 data suite</div>
              <div class="title-desc ae-3 fromBottom">Access and build real-time, reliable APIs to power your apps in minutes. Ship fast with zero data infra overhead.</div>
            </div>
            <div class="fix-12-12 content-content">
              <!-- item1 -->
              <div class="item item-1">
                <div class="item-left ae-4 fromLeft">
                  <div class="item-info">
                    <div class="item-title">Custom GraphQL APIs</div>
                    <div class="item-description">Transform, filter and stream data in any shape into anywhere you want via low latency APIs. Index 100X faster than subgraphs.</div>
                    <div class="item-tip">Note: Subgraph seamless migration coming soon.</div>
                  </div>
                </div>
                <div class="item-right ae-4 fromRight">
                  <div class="item-img-wrap">
                    <div class="item-img-inner">
                      <img class="img" src="/assets/images/slide11/product-1.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section 11  item2 -->
    <section class="slide slide11 slide11-2 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12 content-content">
              <div class="item item-2">
                <div class="item-left ae-1 fromLeft">
                  <div class="item-img-wrap">
                    <div class="item-img-inner">
                      <div class="swiper item-swiper" id="slide11Swiper">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide" v-for="(item, i) in slide11List" :key="item.id">
                            <img class="swiper-img" :src="item.img" alt="">
                          </div>
                        </div>
                        <div class="swiper-pagination"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item-right ae-1 fromRight">
                  <div class="item-info">
                    <div class="item-title">Prebuilt Web3 APIs</div>
                    <div class="item-description">Dramatically simplify and optimize common request patterns with prebuilt real-time APIs. Anyone can further customize them in minutes. </div>
                    <div class="item-menu">
                      <div class="menu-item" :class="{active: slide11CurrentIndex === i}"
                        v-for="(item, i) in slide11List" :key="item.id"
                        @click="handleSlide11MenuChange(i)"
                        >{{item.name}} {{slide11CurrentIndex === i ? 'API' : ''}}</div>
                    </div>
                    <div class="item-tip">{{slide11List[slide11CurrentIndex].title}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section 11  item3 -->
    <section class="slide slide11 slide11-3 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12 content-content">
              <div class="item item-3">
                <div class="item-left ae-1 fromLeft">
                  <div class="item-info">
                    <div class="item-title">Data Lake API</div>
                    <div class="item-description">Our data lake makes blockchains speak SQL to maximize data analytics capabilities, and access queries and historical data via the data lake API.</div>
                  </div>
                </div>
                <div class="item-right ae-1 fromRight">
                  <div class="item-img-wrap">
                    <div class="item-img-inner">
                      <img class="img" src="/assets/images/slide11/product-3.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section 11  item4 -->
    <section class="slide slide11 slide11-4 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12 content-content">
              <div class="item item-4">
                <div class="item-left ae-1 fromLeft">
                  <div class="item-img-wrap">
                    <div class="item-img-inner">
                      <img class="img" src="/assets/images/slide11/product-4.png" alt=""/>
                    </div>
                  </div>
                </div>
                <div class="item-right ae-1 fromRight">
                  <div class="item-info">
                    <div class="item-title">On- & off-chain data</div>
                    <div class="item-description">Access comprehensive raw, fully decoded and aggregated on-chain data, with multiple off-chain data sources support such as Snowflake. </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section 11  item5 -->
    <section class="slide slide11 slide11-5 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12 content-content">
              <div class="item item-5">
                <div class="item-left ae-1 fromLeft">
                  <div class="item-info">
                    <div class="item-title">Dashboards</div>
                    <div class="item-description">Build dashboards with a grid-based collection of charts and text boxes, all of which show up-to-date data.</div>
                  </div>
                </div>
                <div class="item-right ae-1 fromRight">
                  <div class="item-img-wrap">
                    <div class="item-img-inner">
                      <img class="img" src="/assets/images/slide11/product-5.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Slide 5 -->
    <section class="slide slide5 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12">
              <div class="section-subtitle ae-1 fromBottom">Unlock the future of blockchain</div>
              <div class="section-title ae-2 fromBottom">Get started with ZettaBlock platform</div>
            </div>
            <div class="fix-12-12">
              <div class="menu ae-3 fromBottom" :style="{'--left': slide5Left, '--width': slide5Width }">
                <div class="menu-item" v-for="(item, index) in slide5Menu" :key="item.id"
                  :class="{active: slide5CurrentIndex === index}"
                  @click="handleSlide5MenuChange(index)"
                  >{{item.name}}</div>
              </div>
              <div class="swiper swiper-no-swiping" id="slide5Swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="item in slide5List" :key="item.id">
                    <div class="content-left">
                      <img class="title-img ae-4 fromBottom" :class="{'title-img_large': item.id === 4}" :src="item.textImg" alt="">
                      <ul class="info-list ae-5 fromBottom">
                        <li class="info-item" v-for="(p, i) in item.info" :key="item.id + i">{{p}}</li>
                      </ul>
                      <div class="button ae-6 fromBottom" @click="handleSlide5BtnClick(item)">
                        <span class="button-text">Read more use cases</span>
                        <svg class="button-icon">
                          <use href="#arrow-right"></use>
                        </svg>
                        <div class="coming-soon" :class="{'coming-soon_show': item.isClick}">coming soon</div>
                      </div>
                    </div>
                    <div class="content-right">
                      <img class="ae-7 fromBottom" :src="item.img" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Slide 6-->
    <section id="blog" class="slide slide6 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12">
              <div class="fix-title ae-1 fromBottom">
                <div class="title-order">
                </div>
                <h1 class="title-text">Recent Articles</h1>
              </div>
              <div class="content-content ae-2 fromRight">
                <div class="swiper" id="slide6Swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in slide6List" :key="item.id">
                      <svg class="item-icon">
                        <use href="#union-1"></use>
                      </svg>
                      <div class="item-title">{{item.title}}</div>
                      <div class="item-footer">
                        <a class="item-link" :href="item.link">
                          <span>READ</span>
                          <svg class="link-icon">
                            <use href="#arrow-right"></use>
                          </svg>
                        </a>
                        <img class="chain-icon" :src="item.chainIcon" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-button ae-2 fromBottom">
                <svg class="button-item" :class="{disabled: false}" @click="handleSlide6SwiperPrev">
                  <use href="#chevron-left"></use>
                </svg>
                <svg class="button-item" :class="{disabled: false}" @click="handleSlide6SwiperNext">
                  <use href="#chevron-right"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background" style="background:#FAFAFF;"></div>
    </section>

    <!-- Slide 7 -->
    <section id="about" class="slide slide7 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-top-13 padding-bottom-11">
            <div class="fix-12-12">
              <div class="section-subtitle ae-1 fromBottom">The First Full-stack Web3 Infra</div>
              <div class="section-title ae-2 fromBottom">
                Data infra for a next-gen internet
              </div>
            </div>
            <div class="fix-12-12 content-content">
              <div class="content-left">
                <div class="item" v-for="(item, i) in slide7List" :key="item.id"
                  :class="`ae-${i+1} fromBottom`">
                  <div class="item-icon-wrap">
                    <svg class="item-icon">
                      <use :href="`#${item.icon}`"></use>
                    </svg>
                  </div>
                  <div class="item-content">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                  </div>
                </div>
              </div>
              <div class="content-right data-number">
                <div class="item ae-5 fromBottom">
                  <div class="title">
                    <span id="slide7Number1"></span>
                    <span>B+ Transactions</span>
                  </div>
                  <div class="desc">for 7+ blockchains since genesis</div>
                </div>
                <div class="item ae-6 fromBottom">
                  <div class="title">
                    <span id="slide7Number2"></span>
                    <span>M+ Smart Contracts</span>
                  </div>
                  <div class="desc">decoded for querying</div>
                </div>
                <div class="item ae-7 fromBottom">
                  <div class="title">
                    <span id="slide7Number3"></span>
                    <span>B+ Price Feeds</span>
                  </div>
                  <div class="desc">for fiat and crypto pairs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide slide8 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12 newslette">
              <div class="newslette-left">
                <h1 class="ae-1 fromBottom">Ready to speed up your Web3 development?</h1>
                <h2 class="ae-2 fromBottom">Simple, out-of-box, ultra fast, low cost, and high performance.</h2>
              </div>
              <div class="newslette-right">
                <div class="button ae-3 fromRight" @click="toggleSignup()">
                  <span class="button-text">Unlock Access For Free</span>
                  <svg class="button-icon">
                    <use href="#arrow-right"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide slide9 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12 footer">
              <div class="footer-item item-left">
                <div class="logo ae-1 fromBottom">
                  <svg class="logo-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-icon"></use>
                  </svg>
                  <svg class="logo-text">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-text"></use>
                  </svg>
                </div>
                <div class="description ae-2 fromBottom">
                  ZettaBlock is a full-stack Web3 data platform for indexing, querying and analyzing. Developers can build real-time, public-facing, reliable GraphQL APIs and SQL in minutes.
                </div>
              </div>
              <div class="footer-item">
                <div class="subtitle ae-2 fromBottom">Join the Web3 data revolution</div>
                <div class="social-wrap ae-3 fromBottom">
                  <a class="social-item" href="https://twitter.com/ZettaBlockHQ" target="_blank">
                    <svg>
                      <use href="#social-twitter"></use>
                    </svg>
                  </a>
                  <a class="social-item" href="https://www.linkedin.com/company/zettablockhq/" target="_blank">
                    <svg>
                      <use href="#social-linkedin"></use>
                    </svg>
                  </a>
                  <a class="social-item" href="https://discord.gg/zettablock" target="_blank">
                    <svg>
                      <use href="#social-discord"></use>
                    </svg>
                  </a>
                  <a class="social-item" href="https://zettablockhq.medium.com/" target="_blank">
                    <svg>
                      <use href="#social-medium"></use>
                    </svg>
                  </a>
                  <a class="social-item" href="https://github.com/Zettablock" target="_blank">
                    <svg>
                      <use href="#social-github"></use>
                    </svg>
                  </a>
                  <a class="social-item" href=" https://www.youtube.com/channel/UCZ7OYTGcXA93faGcmnyjTzw" target="_blank">
                    <svg>
                      <use href="#social-youtube"></use>
                    </svg>
                  </a>
                </div>
                <div class="subtitle ae-4 fromBottom">Subscribe to our mailing list</div>
                <div class="sign-up-wrap ae-5 fromBottom">
                  <form class="" action="https://zettablock.us14.list-manage.com/subscribe/post?u=1ff0f35da3b86da52617aadd6&amp;id=bc40fdafb4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
                    <input type="email" value="" name="EMAIL" placeholder="Email Address">
                    <button type="submit" class="button">
                      <span>Sign Up</span>
                      <svg>
                        <use href="#arrow-right"></use>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="slide slide10 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-top-0 padding-bottom-0">
            <div class="fix-12-12">
              <div class="copyright">© 2022 DataLego Inc.</div>
              <div class="menu">
                <a class="menu-item" href="#blog">Blog</a>
                <a class="menu-item" href="#blog">Press Kit</a>
                <a class="menu-item" href="#blog">Terms of Service</a>
                <a class="menu-item" href="#blog">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  import SectionCode from "../components/SectionCode.vue";
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
    },
    data() {
      return {
        scrollOffer: 0,
        showForm: false,
        slide1LinkList: [
          {id: 1, icon: 'link-polygon', width: 192, height: 40, href: ''},
          {id: 2, icon: 'link-ripple', width: 151, height: 40, href: ''},
          {id: 3, icon: 'link-crypto', width: 242, height: 40, href: ''},
          {id: 4, icon: 'link-autograph', width: 173, height: 40, href: ''},
          {id: 5, icon: 'link-celer', width: 101, height: 40, href: ''},
          {id: 6, icon: 'link-lotex', width: 150, height: 40, href: ''},
          {id: 7, icon: 'link-shardeum', width: 204, height: 40, href: ''},
          {id: 8, icon: 'link-cyberconnect', width: 258, height: 40, href: ''},
          {id: 9, icon: 'link-friktion', width: 163, height: 40, href: ''},
          {id: 10, icon: 'link-artemis', width: 183, height: 40, href: ''},
          {id: 11, icon: 'link-ancient8', width: 182, height: 40, href: ''},
        ],
        chainList: [
          {id: 1, icon: '/assets/images/chain/chain-icon-01.png', name: 'Ethereum'},
          {id: 2, icon: '/assets/images/chain/chain-icon-02.png', name: 'Polygon'},
          {id: 3, icon: '/assets/images/chain/chain-icon-03.png', name: 'Arbitrum'},
          {id: 4, icon: '/assets/images/chain/chain-icon-04.png', name: 'Solana'},
          {id: 5, icon: '/assets/images/chain/chain-icon-05.png', name: 'Aptos'},
          {id: 6, icon: '/assets/images/chain/chain-icon-06.png', name: 'Ripple XRP'},
          {id: 7, icon: '/assets/images/chain/chain-icon-07.png', name: 'IoTex'},
          {id: 8, icon: '/assets/images/chain/chain-icon-08.png', name: 'BNB Chian', isComingSoon: true},
          {id: 9, icon: '/assets/images/chain/chain-icon-09.png', name: 'Optimism', isComingSoon: true},
          {id: 10, icon: '/assets/images/chain/chain-icon-10.png', name: 'Avalanche', isComingSoon: true},
          {id: 11, icon: '/assets/images/chain/chain-icon-11.png', name: 'Near', isComingSoon: true},
        ],
        slide2CurrentIndex: 1,
        slide2Left: 0,
        slide5CurrentIndex: 0,
        slide5Left: 0,
        slide5Width: 0,
        slide5Menu: [
          {id: 1, name: 'NFTs'},
          {id: 2, name: 'DeFi'},
          {id: 3, name: 'Wallets'},
          {id: 4, name: 'Blockchains'},
          {id: 5, name: 'AI-driven'},
        ],
        slide5List: [
          { id: 1, name: 'NFTs', textImg: '/assets/images/slide5/text_NFT.svg',
            link: '', img: '/assets/images/slide5/card_1.png', info:
            [
              'Fetch NFT ownership, transfer, and price all in real-time.',
              'Identify proper whitelists for new NFTs based on transaction history.',
            ],
            isClick: false,
          },
          { id: 2, name: 'DeFi', textImg: '/assets/images/slide5/text_DeFi.svg',
            link: '', img: '/assets/images/slide5/card_2.png', info:
            [
              'Track user portfolio in real-time with custom logic.',
              'Gain deeper transaction insights into DeFi protocols.'
            ],
            isClick: false,
          },
          { id: 3, name: 'Wallets', textImg: '/assets/images/slide5/text_Wallet.svg',
            link: '', img: '/assets/images/slide5/card_3.png', info:
            [
              'Build enhanced dashboards for customer holdings assets.',
              'Visualize user transaction history, NFT holdings, protocol interactions.'
            ]
          },
          { id: 4, name: 'Block-chains', textImg: '/assets/images/slide5/text_Block-chains.svg',
            link: '', img: '/assets/images/slide5/card_4.png', info:
            [
              'Understand protocol traffic to better allocate resources in its ecosytem.',
              'Build ecosystem monitoring dashboards across chains.'
            ],
            isClick: false,
          },
          { id: 5, name: 'AI-driven', textImg: '/assets/images/slide5/text_AI-driven.svg',
            link: '', img: '/assets/images/slide5/card_5.png', info:
            [
              'Perform wallet profiling and AML risk assessment.',
              'Build AI models for tasks like on-chain credit scoring.'
            ],
            isClick: false,
          },
        ],
        slide11CurrentIndex: 0,
        slide11List: [
          {id: 1, name: 'NFT', img: '/assets/images/slide11/product-2-1.png', title: 'NFT mints, ownership, transfers, account balances, price, etc.'},
          {id: 2, name: 'Tokens', img: '/assets/images/slide11/product-2-2.png', title: 'Token price, ownership, transfers, metadata, and account balances.'},
          {id: 3, name: 'Block', img: '/assets/images/slide11/product-2-3.png', title: 'Full raw and decoded blockchain data, including transactions, logs, traces, accounts, and blocks.'},
          {id: 4, name: 'ENS', img: '/assets/images/slide11/product-2-4.png', title: 'ENS names, records and reserve.'},
          {id: 5, name: 'Stream', img: '/assets/images/slide11/product-2-5.png', title: 'Stream blockchain data into your backend via webhooks and websockets. (Coming Soon)'},
        ],
        slide6SwiperIndex: 0,
        slide6List: [
          {id: 1, title: 'Polygon relies on ZettaBlock for data infrastructure', chainIcon: '/assets/images/chain/icon_1.png', link: ''},
          {id: 2, title: 'ZettaBlock’s infrastructure saves crypto.com 16,000 hours per year', chainIcon: '/assets/images/chain/icon_2.png',  link: ''},
          {id: 3, title: 'Artemis deploys production-ready APIs in minutes with ZettaBlock', chainIcon: '/assets/images/chain/icon_3.png', link: ''},
          {id: 4, title: 'Friktion’s new portoflio portal runs on ZettaBlock', chainIcon: '/assets/images/chain/icon_4.png', link: ''},
          {id: 5, title: 'Orchestrate a data platform for Autograph in 5 minutes', chainIcon: '/assets/images/chain/icon_5.png', link: ''},
        ],
        slide7List: [
          {id: 1, icon: 'section7-1', title: 'Zero Infra Overhead', desc: 'Save months of development and over 90% of their annual costs.'},
          {id: 2, icon: 'section7-2', title: 'Flexibility', desc: 'Build your own GraphQL APIs and SQL with custom transformation logic needs.'},
          {id: 3, icon: 'section7-3', title: 'Strong Performance', desc: 'Sub-second data freshness, 10ms response time, high throughput, petabyte-scale join.'},
          {id: 4, icon: 'section7-4', title: 'Data Unification', desc: 'Seamlessly obtain any decoded on-chain data, combining with your own off-chain data.'},
          {id: 5, icon: 'section7-5', title: 'Reliability', desc: 'Provide near-perfect system uptimes (99.95%) to support real-time, data-intensive apps.'},
        ],
      };
    },
    created() {
      document.title = "ZettaBlock - The First Full-stack, Real-time Web3 Data Infra";
    },
    mounted() {
      this.slide11Swiper = null
      this.slide5Swiper = null
      this.slide6Swiper = null
      setTimeout(() => {
        this.onCreateView();
      }, 100);
      this.$nextTick(() => {
        this.initLinkWrap()
        this.handleSlide5MenuChange(0, true)
        this.initSlide11Swiper()
        this.initSlide5Swiper()
        this.initSlide6Swiper()
        this.initSlide7()
      })
    },
    watch: {},
    destroyed() {
      this.removeHome();
    },
    methods: {
      initLinkWrap () {
        gsap.to('#linkWrap', {transform: 'translateX(-100%)', ease: 'none', duration: 30, repeat: -1})
        gsap.fromTo('#linkWrap1',
          {transform: 'translateX(-25px)'},
          {transform: 'translateX(-100%)', ease: 'none', duration: 30, repeat: -1}
        )
        gsap.fromTo('#linkWrap2',
          {transform: 'translateX(-100%)'},
          {transform: 'translateX(0)', ease: 'none', duration: 30, repeat: -1}
        )
      },
      // Slide2中的切换
      handleSlide2CurrentIndexChange ({ target }, index) {
        const { left } = target.getBoundingClientRect()
        const { left: parentLeft } = target.parentNode.getBoundingClientRect()
        this.slide2Left = left - parentLeft + 'px'
        this.slide2CurrentIndex = index
      },

      // Slide7中的方法
      initSlide7 () {
        ScrollTrigger.create({
          trigger: '.slide7 .data-number',
          start: 'top bottom-=50px',
          end: 'bottom top',
          // markers: true,
          onEnter: () => {
            this.showCount()
          },
        })
      },
      showCount () {
        if (!document.querySelector('#slide7Number1')) {
          return
        }
        bounty({
          el: '#slide7Number1',
          value: '110',
          lineHeight: 1,
          height: 50,
          letterSpacing: -1,
          animationDelay: 100,
          letterAnimationDelay: 200,
          duration: 3000,
        });
        bounty({
          el: '#slide7Number2',
          value: '17',
          lineHeight: 1,
          height: 50,
          letterSpacing: -1,
          animationDelay: 100,
          letterAnimationDelay: 200,
          duration: 3000,
        });
        bounty({
          el: '#slide7Number3',
          value: '4.3',
          lineHeight: 1,
          height: 50,
          letterSpacing: -1,
          animationDelay: 100,
          letterAnimationDelay: 200,
          duration: 3000,
        });
      },

      // Slide5
      handleSlide5MenuChange(i, isInit = false) {
        this.slide5CurrentIndex = i
        if (!isInit) {
          this.slide5Swiper.slideTo(i)
        }
      },
      handleSlide5MenuChange1(i, isInit = false) {
        const target = $('.menu-item')[i]
        const { width, left } = target.getBoundingClientRect()
        const { left: parentLeft } = target.parentNode.getBoundingClientRect()
        this.slide5Left = left - parentLeft + 'px'
        this.slide5Width = width + 'px'
        this.slide5CurrentIndex = i
        if (!isInit) {
          this.slide5Swiper.slideTo(i)
        }
      },
      initSlide5Swiper () {
        this.slide5Swiper = new Swiper('#slide5Swiper', {
          noSwiping : true,
          slidesPerView: "auto",
          // loop: true,
        })
        this.slide5Swiper.on('activeIndexChange', (e) => {
          const { realIndex } = e
          if (realIndex !== this.slide5CurrentIndex) {
            this.handleSlide5MenuChange(realIndex)
          }
        })
      },
      handleSlide5BtnClick (item) {
        if (item.isClick) return
        item.isClick = true
        const timer = setTimeout(() => {
          item.isClick = false
          clearTimeout(timer)
        }, 3000)
      },

      initSlide11Swiper () {
        this.slide11Swiper = new Swiper('#slide11Swiper', {
          modules: [Pagination],
          slidesPerView: "auto",
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        })
        this.slide11Swiper.on('activeIndexChange', (e) => {
          const { realIndex } = e
          if (realIndex !== this.slide11CurrentIndex) {
            this.handleSlide11MenuChange(realIndex)
          }
        })
      },
      handleSlide11MenuChange(i, isInit = false) {
        this.slide11CurrentIndex = i
        if (!isInit) {
          this.slide11Swiper.slideTo(i)
        }
      },

      initSlide6Swiper () {
        this.slide6Swiper = new Swiper('#slide6Swiper', {
          slidesPerView: "auto",
          loop: true,
        })
      },
      handleSlide6SwiperPrev(){
        this.slide6Swiper.slidePrev()
      },
      handleSlide6SwiperNext(){
        this.slide6Swiper.slideNext()
      },

      toggleSignup() {
        // console.log("toggle",this.showForm);
        // this.showForm = !this.showForm;
        window.open("https://discord.gg/zettablock", "_blank", "");
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
