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
              <img class="logo-ani ae-2 fromCenter margin-top-6 margin-bottom-4" src="assets/logo-animation.gif" alt="">
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
                  <div class="ae-6 fromBottom button view-button" @click="toggleSignup">
                    <span class="button-text">View Docs</span>
                    <svg class="button-icon">
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                    </svg>
                  </div>

                </div>
                <p class="ae-5 fromBottom scroll-tip">Trusted by leading Web3 companies</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Slide 2 -->
    <section id="product" class="slide slide2 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-top-10">
            <div class="fix-12-12">
              <div class="content-body">
                <div class="body-left">
                  <div class="title">Supported Chains</div>
                  <div class="input-wrap">
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
                  <div class="wrap-title">Multiple Chains Support</div>
                  <div class="chain-wrap">
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
          <div class="wrap padding-top-18">
            <div class="fix-12-12">
              <div class="section-title">Develop. Preview. Ship</div>
              <!-- <div class="code-wrap">
                <img src="/assets/images/slide3_img.png" alt="">
              </div> -->
              <section-code/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Slide 4 -->
    <section id="withzettablock" class="slide slide4 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-top-9">
            <div class="section-title">Build data-powered apps within seconds</div>

            <div class="fix-12-12 slide-content">
              <div class="content-title" :style="{'--left': slide2Left }">
                <div class="title-item" :class="{active: slide2CurrentIndex === 1}" @click="handleSlide2CurrentIndexChange($event, 1)">With ZettaBlock</div>
                <div class="title-item" :class="{active: slide2CurrentIndex === 2}" @click="handleSlide2CurrentIndexChange($event, 2)">Without ZettaBlock</div>
              </div>
              <div class="content-image">
                <div class="content-image-inner" :style="{left: slide2CurrentIndex === 1 ? 0 : '-100%'}">
                  <div class="img-item">
                    <img src="/assets/images/slide4_start_with.png" alt="">
                  </div>
                  <div class="img-item">
                    <img src="/assets/images/slide4_start_without.png" alt="">
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
    <section id="product" class="slide slide11 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap">
            <div class="fix-12-12">
              <div class="section-subtitle">Designed for developers</div>
              <div class="section-title">The complete, fully managed web3 data suite</div>
              <div class="title-desc">Access and build real-time, reliable APIs to power your apps in minutes.Ship fast with zero data infra overhead.</div>
            </div>
            <div class="fix-12-12 content-content">
              <!-- item1 -->
              <div class="item">
                <div class="item-left">
                  <div class="item-info">
                    <div class="item-title">Custom GraphQL APIs</div>
                    <div class="item-description">Transform, filter and stream data in any shape into anywhere you want via low latency APIs. Index 100X faster than subgraphs.</div>
                    <div class="item-tip">Subgraph seamless migration coming soon.</div>
                  </div>
                </div>
                <div class="item-right">
                  <div class="item-img-wrap">
                    <div class="item-img-inner">
                      <img class="img" src="/assets/images/slide11/product-1.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <!-- item2 -->
              <div class="item">
                <div class="item-left">
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
                <div class="item-right">
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
              <!-- item3 -->
              <div class="item">
                <div class="item-left">
                  <div class="item-info">
                    <div class="item-title">Data Lake API</div>
                    <div class="item-description">Our data lake makes blockchains speak SQL to maximize data analytics capabilities, and access queries and historical data via the data lake API.</div>
                  </div>
                </div>
                <div class="item-right">
                  <div class="item-img-wrap">
                    <div class="item-img-inner">
                      <img class="img" src="/assets/images/slide11/product-3.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <!-- item4 -->
              <div class="item">
                <div class="item-left">
                  <div class="item-img-wrap">
                    <div class="item-img-inner">
                      <img class="img" src="/assets/images/slide11/product-4.png" alt=""/>
                    </div>
                  </div>
                </div>
                <div class="item-right">
                  <div class="item-info">
                    <div class="item-title">On&off-chain data</div>
                    <div class="item-description">Access comprehensive raw, fully decoded and aggregated on-chain data, with multiple off-chain data sources support such as Snowflake. </div>
                  </div>
                </div>
              </div>
              <!-- item5 -->
              <div class="item">
                <div class="item-left">
                  <div class="item-info">
                    <div class="item-title">Dashboards</div>
                    <div class="item-description">Build dashboards with a grid-based collection of charts and text boxes, all of which show up-to-date data.</div>
                  </div>
                </div>
                <div class="item-right">
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
    <section id="usecases" class="slide slide5 whiteSlide">
      <div class="content">
        <div class="container">
          <div class="wrap padding-top-8 padding-bottom-18">
            <div class="fix-12-12">
              <div class="section-subtitle">Unlock the future of blockchain</div>
              <div class="section-title">Get started with ZettaBlock platform</div>
            </div>
            <div class="fix-12-12">
              <div class="menu" :style="{'--left': slide5Left, '--width': slide5Width }">
                <div class="menu-item" v-for="(item, index) in slide5Menu" :key="item.id"
                  :class="{active: slide5CurrentIndex === index}"
                  @click="handleSlide5MenuChange(index)"
                  >{{item.name}}</div>
              </div>
              <div class="swiper swiper-no-swiping" id="slide5Swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="item in slide5List" :key="item.id">
                    <div class="content-left">
                      <img class="title-img" :class="{'title-img_large': item.id === 4 || item.id === 5}" :src="item.textImg" alt="">
                      <ul class="info-list">
                        <li class="info-item" v-for="(p, i) in item.info" :key="item.id + i">{{p}}</li>
                      </ul>
                      <div class="button" @click="() => item.isClick = true">
                        <span class="button-text">Read more use cases</span>
                        <svg class="button-icon">
                          <use href="#arrow-right"></use>
                        </svg>
                        <div class="coming-soon" :class="{'coming-soon_show': item.isClick}">coming soon</div>
                      </div>
                    </div>
                    <div class="content-right">
                      <img :src="item.img" alt="">
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
              <div class="fix-title">
                <div class="title-order">
                </div>
                <h1 class="title-text">Recent Articles</h1>
              </div>
              <div class="content-content">
                <div class="swiper" id="slide7Swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in slide7List" :key="item.id">
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
              <div class="swiper-button">
                <svg class="button-item" :class="{disabled: false}" @click="handleSlide7SwiperPrev">
                  <use href="#chevron-left"></use>
                </svg>
                <svg class="button-item" :class="{disabled: false}" @click="handleSlide7SwiperNext">
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
              <div class="section-subtitle">The First Full-stack Web3 Infra</div>
              <div class="section-title">
                Data infra for a next-gen internet
              </div>
            </div>
            <div class="fix-12-12 content-content">
              <div class="content-left">
                <div class="item" v-for="item in slide6List" :key="item.id">
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
              <div class="content-right">
                <div class="item">
                  <div class="title">110B+ Transactions</div>
                  <div class="desc">for 7+ blockchains since genesis</div>
                </div>
                <div class="item">
                  <div class="title">17M+ Smart Contracts</div>
                  <div class="desc">decoded for querying</div>
                </div>
                <div class="item">
                  <div class="title">4.3B+ Price Feeds</div>
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
          <div class="wrap padding-top-8 padding-bottom-8">
            <div class="fix-12-12 newslette">
              <div class="newslette-left">
                <h1>Ready to speed up your Web3 development?</h1>
                <h2>Simple, out-of-box, ultra fast, low cost, and high performance.</h2>
              </div>
              <div class="newslette-right">
                <div class="button" @click="toggleSignup()">
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
          <div class="wrap padding-top-9 padding-bottom-9">
            <div class="fix-12-12 footer">
              <div class="footer-item item-left">
                <div class="logo">
                  <svg class="logo-icon">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-icon"></use>
                  </svg>
                  <svg class="logo-text">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-text"></use>
                  </svg>
                </div>
                <div class="description">
                  ZettaBlock is a full-stack Web3 data platform for indexing, querying and analyzing. Developers can build real-time, public-facing, reliable GraphQL APIs and SQL in minutes.
                </div>
              </div>
              <div class="footer-item">
                <div class="subtitle">Join the Web3 data revolution</div>
                <div class="social-wrap">
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
                <div class="subtitle">Subscribe to our mailing list</div>
                <div class="sign-up-wrap">
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
  import bounty from "bounty";
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
          {id: 7, icon: 'link-cyberconnect', width: 258, height: 40, href: ''},
          {id: 8, icon: 'link-friktion', width: 163, height: 40, href: ''},
          {id: 9, icon: 'link-artemis', width: 183, height: 40, href: ''},
          {id: 10, icon: 'link-ancient8', width: 182, height: 40, href: ''},
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
          {id: 1, name: 'NFT', img: '/assets/images/slide11/product-2-1.png', title: 'NFT mints,ownership, transfers, account balances, price, etc.'},
          {id: 2, name: 'Tokens', img: '/assets/images/slide11/product-2-2.png', title: 'Token price, ownership, transfers, metadata, and account balances.'},
          {id: 3, name: 'Block', img: '/assets/images/slide11/product-2-3.png', title: 'Full raw and decoded blockchain data, including transactions, logs, trace, accounts, blocks.'},
          {id: 4, name: 'ENS', img: '/assets/images/slide11/product-2-4.png', title: 'ENS names, records and reserve.'},
          {id: 5, name: 'Stream', img: '/assets/images/slide11/product-2-5.png', title: 'Stream blockchain data into your backend via webhooks and websockets.'},
        ],
        slide6List: [
          {id: 1, icon: 'section7-1', title: 'Zero Infra Overhead', desc: 'Save months of development and over 90% of their annual costs.'},
          {id: 2, icon: 'section7-2', title: 'Flexibility', desc: 'Build your own GraphQL APIs and SQL with custom transformation logic needs.'},
          {id: 3, icon: 'section7-3', title: 'Strong Performance', desc: 'Sub-second data freshness, 10ms response time, high throughput, petabyte-scale join.'},
          {id: 4, icon: 'section7-4', title: 'Data Unification', desc: 'Seamlessly obtain any decoded on-chain data, combining with your own off-chain data.'},
          {id: 5, icon: 'section7-5', title: 'Reliability', desc: 'Provide near-perfect system uptimes (99.95%) to support real-time, data-intensive apps.'},
        ],
        slide7SwiperIndex: 0,
        slide7List: [
          {id: 1, title: 'Polygon relies on ZettaBlock for data infrastructure', chainIcon: '/assets/images/chain/icon_1.png', link: ''},
          {id: 2, title: 'ZettaBlock’s infrastructure saves crypto.com 16,000 hours per year', chainIcon: '/assets/images/chain/icon_2.png',  link: ''},
          {id: 3, title: 'Artemis deploys production-ready APIs in minutes with ZettaBlock', chainIcon: '/assets/images/chain/icon_3.png', link: ''},
          {id: 4, title: 'Friktion’s new portoflio portal runs on ZettaBlock', chainIcon: '/assets/images/chain/icon_4.png', link: ''},
          {id: 5, title: 'Orchestrate a data platform for Autograph in 5 minutes', chainIcon: '/assets/images/chain/icon_5.png', link: ''},
        ]
      };
    },
    created() {
      document.title = "ZettaBlock - The First Full-stack, Real-time Web3 Data Infra";
    },
    mounted() {
      this.slide11Swiper = null
      this.slide5Swiper = null
      this.slide7Swiper = null
      setTimeout(() => {
        this.onCreateView();
      }, 100);
      this.$nextTick(() => {
        this.initLinkWrap()
        this.initSlide3()
        this.handleSlide5MenuChange(0, true)
        this.initSlide11Swiper()
        this.initSlide5Swiper()
        this.initSlide7Swiper()
      })
    },
    watch: {},
    destroyed() {
      this.removeHome();
    },
    methods: {
      initLinkWrap () {
        gsap.to('#linkWrap', {transform: 'translateX(-100%)', ease: 'none', duration: 30, repeat: -1})
      },
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
        console.log('showCount')
        if (!document.querySelector('#slide3Number1')) {
          return
        }
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

      initSlide7Swiper () {
        console.log('init swiper')
        this.slide7Swiper = new Swiper('#slide7Swiper', {
          slidesPerView: "auto",
          loop: true,
        })
        // this.slide7Swiper.on('activeIndexChange', function (e) {
        //   const { realIndex } = e
        //   if (realIndex !== this.slide7SwiperIndex) {
        //     this.slide7SwiperIndex = realIndex
        //   }
        // })
      },
      handleSlide7SwiperPrev(){
        // if (this.slide7SwiperIndex > 1) {
        //   this.slide7SwiperIndex--
        // } else {
        //   this.slide7SwiperIndex = this.slide7List.length - 1
        // }
        this.slide7Swiper.slidePrev()
      },
      handleSlide7SwiperNext(){
        // if (this.slide7SwiperIndex < this.slide7List.length - 1) {
        //   this.slide7SwiperIndex++
        // } else {
        //   this.slide7SwiperIndex = 0
        // }
        this.slide7Swiper.slideNext()
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
  .section-title{
    font-weight: 700;
    font-size: 60px;
    line-height: 110%;
    background: radial-gradient(53.42% 202.11% at 78.75% 25.76%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #281AF0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 165px;
      height: 100px;
      transform: translate(-50%, -50%);
      // background: red;
      background: url('/assets/images/title_bg.png') no-repeat center;
      z-index: -1;
    }
  }
  .section-subtitle{
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #5A20FB;
    opacity: 0.4;
    margin-bottom: 12px;
    text-align: left;
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
      font-size: 60px;
      font-weight: 700;
      line-height: 72px;
      text-align: center;
      background: radial-gradient(53.42% 202.11% at 78.75% 25.76%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #281AF0;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

    }
    .button-wrap{
      margin-bottom: 45px;
      .button{
        width: 248px;
        height: 52px;
        border-radius: 4px;
        text-align: center;
        margin: 0 20px;
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
      .access-button{
        background: radial-gradient(129.53% 327.88% at 69.76% 0%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
        box-shadow: 0px 77px 31px rgba(106, 38, 249, 0.01), 0px 43px 26px rgba(106, 38, 249, 0.05), 0px 19px 19px rgba(106, 38, 249, 0.09), 0px 5px 11px rgba(106, 38, 249, 0.1), 0px 0px 0px rgba(106, 38, 249, 0.1);
        color: #fff;
      }
      .view-button{
        background: linear-gradient(180deg, #FBFAFF 0%, #FFFFFF 25.98%, #EFEFFF 87.14%, #F5F3FD 100%);
        border: 1px solid rgba(40, 26, 240, 0.04);
        box-shadow: 0px 27px 11px rgba(40, 27, 240, 0.01), 0px 15px 9px rgba(40, 27, 240, 0.02), 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
        color: #2919F7;
      }
    }
    .description{
      max-width: 724px;
      margin: 0 auto 30px;
      font-family: "Basier Square";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 150%;
      text-align: center;
      letter-spacing: -0.2px;
      color: #000000;
    }
    .scroll-tip{
      font-family: 'Basier Square';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #5A20FB;
      opacity: 0.4;
      text-align: center;
      margin-top: 100px;
    }
    .background {
      background-size: cover;
      background-position: center bottom;
    }
  }
  .slide1a {
    .container{
      height: auto !important;
    }
    .link-wrap{
      opacity: 0.4;
      display: flex;
      margin-top: 40px;
      margin-bottom: 100px;
      .link-item{
        flex-shrink: 0;
        margin-right: 40px;
        svg{
          width: 100%;
          height: 100%;
        }
      }
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
    .content-body{
      width: 100%;
      display: flex;
      .body-left{
        width: 340px;
        flex-shrink: 0;
        margin-right: 42px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title{
          font-family: 'Basier Square';
          font-style: normal;
          font-weight: 700;
          font-size: 48px;
          line-height: 110%;
          color: #000000;
          text-align: left;
        }
        .input-wrap{
          width: 303px;
          height: 52px;
          box-sizing: border-box;
          padding-left: 18px;
          padding-right: 5px;
          background: linear-gradient(180deg, #FBFAFF 0%, #FFFFFF 25.98%, #EFEFFF 87.14%, #F5F3FD 100%);
          border: 1px solid rgba(40, 26, 240, 0.04);
          box-shadow: 0px 27px 11px rgba(40, 27, 240, 0.01), 0px 15px 9px rgba(40, 27, 240, 0.02), 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .input{
            border: 0;
            background: none;
            outline: none;
            font-weight: 500;
            font-size: 16px;
            color:#281AF0;
            &::placeholder{
              color: rgba(40, 26, 240, 0.3);
            }
          }
          .btn-wrap{
            width: 42px;
            height: 42px;
            background: radial-gradient(189.29% 189.29% at 69.05% 0%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
            box-shadow: 0px 27px 11px rgba(40, 27, 240, 0.01), 0px 15px 9px rgba(40, 27, 240, 0.02), 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .btn{
              width: 24px;
              height: 24px;
              color:#fff;
            }
          }
          .success-wrap{
            display: none;
          }
        }
        .input-wrap_success{
          position: relative;
          .success-wrap{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 18px;
            background: radial-gradient(129.53% 327.88% at 69.76% 0%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
            box-shadow: 0px 77px 31px rgba(106, 38, 249, 0.01), 0px 43px 26px rgba(106, 38, 249, 0.05), 0px 19px 19px rgba(106, 38, 249, 0.09), 0px 5px 11px rgba(106, 38, 249, 0.1), 0px 0px 0px rgba(106, 38, 249, 0.1);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              font-weight: 500;
              font-size: 16px;
              color: #FFFFFF;
            }
            svg{
              width: 18px;
              height: 18px;
            }
          }
        }
      }
      .body-right{
        flex: 1;
        .wrap-title{
          font-weight: 500;
          font-size: 24px;
          line-height: 100%;
          letter-spacing: -0.2px;
          color: rgba(40, 26, 240, 0.4);
          text-align: left;
          margin-bottom: 27px;
        }
        .chain-wrap{
          display: flex;
          flex-wrap: wrap;
          border-top: 1px solid #DBD9FD;
          border-left: 1px solid #DBD9FD;
          .chain-item{
            display: flex;
            flex-direction: column;
            width: 16.66%;
            flex-shrink: 0;
            padding: 25px 25px 5px;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #DBD9FD;
            border-right: 1px solid #DBD9FD;
            position: relative;
            .icon{
              width: 50px;
              border-radius: 10px;
              display: block;
              margin-bottom: 10px;
            }
            .name{
              font-weight: 500;
              font-size: 14px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .coming-soon{
              position: absolute;
              width: 31px;
              height: 18px;
              right: 6px;
              top: 6px;
              line-height: 18px;
              text-align: center;
              background: rgba(40, 26, 240, 0.08);
              border-radius: 4px;
              font-weight: 500;
              font-size: 10px;
              color: #817AFC;
            }
          }
          .chain-item_more{
            font-weight: 500;
            font-size: 14px;
            color: #A9A3F9;
            padding-bottom: 25px;
          }
        }
      }
    }
  }
  .slide3{
    .container{
      height: auto !important;
      .code-wrap{
        margin-top: 80px;
        width: 100%;
        .img{
          width: 100%;
        }
      }
    }
  }
  .slide4 {
    background: #FAFAFF !important;
    .container{
      height: auto !important;
    }
    .section-title{
      font-size: 50px;
    }
    .slide-content{
      width: 100%;
      border: 1px solid rgba(40, 26, 240, 0.08);
      border-radius: 12px;
      margin-top: 110px;
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

  .slide11 {
    background: #ffffff !important;
    .container{
      height: auto !important;
    }
    .section-subtitle{
      text-align: center;
    }
    .section-title{
      font-size: 50px;
    }
    .title-desc{
      font-size: 28px;
      line-height: 150%;
      max-width: 950px;
      text-align: center;
      margin: 30px auto 100px;
    }
    .content-content{
      .item{
        display: flex;
        align-items: center;
        margin-bottom: 140px;
        text-align: left;
        .item-left{
          width: 50%;
        }
        .item-right{
          width: 50%;
        }
        .item-title{
          font-weight: 700;
          font-size: 54px;
          line-height: 100%;
        }
        .item-description{
          font-weight: 400;
          font-size: 20px;
          line-height: 150%;
          color: #000000;
          opacity: 0.6;
          padding-bottom: 30px;
          margin: 20px 0 35px;
        }
        .item-tip{
          padding: 0 20px;
          line-height: 1.6;
          background: #F9F9FF;
          border: 1px solid rgba(40, 26, 240, 0.2);
          border-radius: 4px;
          font-size: 14px;
          color: #5A20FB;
          opacity: 0.6;
        }
        .item-img-wrap{
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 53.731%;
          background: #FFFFFF;
          border: 2px solid rgba(40, 26, 240, 0.1);
          box-shadow: 0px 20px 45px rgba(50, 28, 242, 0.05), 0px 0px 0px rgba(50, 28, 242, 0.05);
          border-radius: 10px;
          overflow: hidden;
          .item-img-inner{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
          }
          .img{
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
          }
        }
        .item-swiper{
          width: 100%;
          height: 100%;
          .swiper-img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .swiper-pagination{
            position: absolute !important;
            bottom: 10px;
            right: 10px;
            width: 100px;
            display: flex;
            justify-content: space-around;
            height: 28px;
            align-items: center;
            .swiper-pagination-bullet{
              background: rgba(40, 26, 240, 0.5) !important;
            }
            .swiper-pagination-bullet-active{
              background: #281AF0 !important;
            }
          }
        }
        .item-menu{
          width: 100%;
          min-width: 500px;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          .menu-item{
            padding: 8px 12px;
            margin-right: 10px;
            height: 32px;
            line-height: 14px;
            background: linear-gradient(180deg, #FBFAFF 0%, #FFFFFF 25.98%, #EFEFFF 87.14%, #F5F3FD 100%);
            border: 1px solid rgba(40, 26, 240, 0.04);
            box-shadow: 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
            border-radius: 50px;
            font-weight: 500;
            font-size: 16px;
            letter-spacing: -0.2px;
            color: rgba(40, 26, 240, 0.5);
            cursor: pointer;
            &.active{
              background: radial-gradient(129.53% 327.88% at 69.76% 0%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
              box-shadow: 0px 19px 19px rgba(106, 38, 249, 0.09), 0px 5px 11px rgba(106, 38, 249, 0.1), 0px 0px 0px rgba(106, 38, 249, 0.1);
              color: #fff;
            }
          }
        }

        &:nth-child(1){
          .item-left{
            padding-right: 100px;
          }
          .item-info{
            max-width: 540px;
          }
          .item-tip{
            padding: 0;
            text-align: center;
            max-width: 320px;
          }
          .item-description{
            border-bottom: 1px solid rgba(40, 26, 240, 0.2);
          }
        }
        &:nth-child(2){
          .item-right{
            padding-left: 100px;
          }
          .item-info{
            max-width: 540px;
          }
          .item-tip{
            border: 0;
            padding: 0;
            background: #fff;
            min-height: 64px;
          }
          .item-description{
            border-bottom: 1px solid rgba(40, 26, 240, 0.2);
          }

        }
        &:nth-child(3){
          .item-left{
            padding-right: 100px;
          }
          .item-info{
            max-width: 550px;
          }
        }
        &:nth-child(4){
          .item-right{
            padding-left: 100px;
          }
          .item-info{
            max-width: 540px;
          }
        }
        &:nth-child(5){
          margin-bottom: 40px;
          .item-left{
            padding-right: 100px;
          }
          .item-info{
            max-width: 550px;
          }
        }
      }
    }
  }

  .slide5 {
    .container{
      height: auto !important;
    }
    .section-title{
      text-align: left;
      &::before{
        left: unset;
        right: 0;
        transform: translate(0,-50%);
      }
    }
    .menu{
      margin-top: 40px;
      position: relative;
      display: flex;
      .menu-item{
        z-index: 10;
        margin-right: 30px;
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
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .active {
        color: #fff;
        // background: transparent;
        // transition-delay: 0.3s;
        background: radial-gradient(129.53% 327.88% at 69.76% 0%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
        box-shadow: 0px 77px 31px rgba(106, 38, 249, 0.01), 0px 43px 26px rgba(106, 38, 249, 0.05), 0px 19px 19px rgba(106, 38, 249, 0.09), 0px 5px 11px rgba(106, 38, 249, 0.1), 0px 0px 0px rgba(106, 38, 249, 0.1);
        border-radius: 99px;
        transition: all .4s;
        transition-timing-function: ease-in-out;
      }
      &::before {
        position: absolute;
        left: var(--left);
        width: var(--width);
        height: 100%;
        background: radial-gradient(129.53% 327.88% at 69.76% 0%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
        box-shadow: 0px 77px 31px rgba(106, 38, 249, 0.01), 0px 43px 26px rgba(106, 38, 249, 0.05), 0px 19px 19px rgba(106, 38, 249, 0.09), 0px 5px 11px rgba(106, 38, 249, 0.1), 0px 0px 0px rgba(106, 38, 249, 0.1);
        border-radius: 99px;
        transition: all .4s;
        transition-timing-function: ease-in-out;
      }
    }
    .swiper{
      width: 100%;
      margin-top: 100px;
      padding-bottom: 20px;
      // height: 520px;
      .swiper-slide{
        width: 100%;
        height: 100%;
        display: flex;
        box-sizing: border-box;
        padding: 0 5px;
        .content-left{
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-right: 30px;
          .title-img{
            margin-bottom: 40px;
            height: 90px;
          }
          .title-img_large{
            height: 180px;
          }
          .info-list{
            flex: 1;
            .info-item{
              position: relative;
              padding-left: 20px;
              text-align: left;
              font-weight: 400;
              font-size: 24px;
              line-height: 36px;
              color: #000000;
              &::before{
                content: '';
                position: absolute;
                top: 11px;
                left: 0;
                width: 0;
                height: 0;
                border-color: transparent transparent transparent  #571FFA;
                border-width: 7px 0 7px 12px;
                border-style: solid;
              }
            }
          }
          .button{
            width: 255px;
            height: 52px;
            margin: 0;
            margin-top: 20px;
            font-weight: 500;
            font-size: 18px;
            box-sizing: border-box;
            color: #2919F7;
            background: linear-gradient(180deg, #FBFAFF 0%, #FFFFFF 25.98%, #EFEFFF 87.14%, #F5F3FD 100%);
            border: 1px solid rgba(40, 26, 240, 0.04);
            box-shadow: 0px 27px 11px rgba(40, 27, 240, 0.01), 0px 15px 9px rgba(40, 27, 240, 0.02), 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            overflow: visible;
            svg{
              width: 24px;
              height: 24px;
              flex-shrink: 0;
            }

            .coming-soon{
              position: absolute;
              width: 100%;
              height: 37px;
              line-height: 37px;
              text-align: center;
              left: 0;
              top: -47px;
              background: #F9F9FF;
              border: 1px solid rgba(40, 26, 240, 0.08);
              border-radius: 4px;
              font-weight: 600;
              font-size: 14px;
              letter-spacing: 2px;
              text-transform: uppercase;
              color: rgba(90, 32, 251, 0.4);
              pointer-events: none;
              opacity: 0;
            }
            .coming-soon_show{
              opacity: 1;
            }
          }
        }
        .content-right{
          flex: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            width: 100%;
            display: block;
            object-fit: cover;
          }
        }
      }
    }
  }
  .slide6 {
    .container{
      height: auto !important;
    }
    .fix-12-12{
      display: flex;
      position: relative;
      .fix-title{
        width: 256px !important;
        height: 188px !important;
        margin-right: 90px !important;
        position: relative;
        flex-shrink: 0;
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
        .swiper{
          display: flex;
          .swiper-slide{
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
            box-sizing: border-box;

            .item-icon{
              width: 24px;
              height: 15px;
            }
            .item-title{
              margin-top: 24px;
              font-family: 'Basier Square';
              font-style: normal;
              font-weight: 500;
              font-size: 32px;
              line-height: 130%;
              letter-spacing: -0.2px;
              color: #000000;
              flex: 1;
            }
            .item-footer{
              display: flex;
              align-items: center;
              justify-content: space-between;

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
              .chain-icon{
                width: 54px;
                height: 54px;
              }
            }
          }
          .swiper-button-next{
            position: absolute;
            left: 0;
            top: 0 ;
            width: 30px;
            height: 30px;
            background: red;
          }
        }
      }
      .swiper-button{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 88px;
        height: 44px;
        .button-item{
          width: 44px;
          height: 44px;
          cursor: pointer;
        }
        .disabled{
          opacity: .35;
          cursor: auto;
          pointer-events: none;
        }
      }
    }
  }
  .slide7 {
    .container{
      height: auto !important;
    }
    .section-title{
      text-align: left;
      &::before{
        left: unset;
        right: 0;
        transform: translate(0,-50%);
      }
    }
    .content-content{
      display: flex;
      margin-top: 60px;
      .content-left{
        flex: 1;
        .item{
          margin-bottom: 32px;
          display: flex;
          text-align: left;
          .item-icon-wrap{
            width: 54px;
            height: 54px;
            flex-shrink: 0;
            background: #F5F5FF;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 24px;
            .item-icon{
              width: 32px;
              height: 32px;
            }
          }
          .item-content{
            .item-title{
              font-weight: 600;
              font-size: 24px;
              line-height: 100%;
              color: #000000;
              margin-bottom: 8px;
            }
            .item-desc{
              font-size: 16px;
              line-height: 100%;
              color: #000000;
            }
          }
        }
      }
      .content-right{
        .item{
          width: 460px;
          // height: 128px;
          background: linear-gradient(180deg, #FBFAFF 0%, #FFFFFF 25.98%, #FAFAFE 87.14%, #F6F5FB 100%);
          border: 1px solid rgba(40, 26, 240, 0.04);
          box-shadow: 0px 27px 11px rgba(40, 27, 240, 0.01), 0px 15px 9px rgba(40, 27, 240, 0.02), 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
          border-radius: 4px;
          margin-bottom: 20px;
          padding: 30px 40px;
          text-align: left;
          .title{
            font-weight: 600;
            font-size: 36px;
            line-height: 100%;
            color: #281AF0;
          }
          .desc{
            font-size: 16px;
            line-height: 150%;
            letter-spacing: -0.2px;
            color: #000000;
          }
        }

      }
    }

  }

  .slide8{
    .container{
      height: auto !important;
      background: #FAFAFF;
      .newslette{
        width: 100%;
        background: linear-gradient(180deg, rgba(251, 250, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 25.98%, rgba(239, 239, 255, 0.4) 87.14%, rgba(245, 243, 253, 0.4) 100%), #FFFFFF;
        border: 1px solid rgba(40, 26, 240, 0.04);
        box-shadow: 0px 27px 11px rgba(40, 27, 240, 0.01), 0px 15px 9px rgba(40, 27, 240, 0.02), 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
        border-radius: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 25px 50px;
        .newslette-left{
          max-width: 520px;
          margin: 20px 0;
          h1{
            font-weight: 700;
            font-size: 40px;
            line-height: 110%;
            display: flex;
            align-items: center;
            letter-spacing: 0.6px;
            color: #000000;
            text-align: left;
            background: radial-gradient(53.72% 255.12% at 60.89% 41.25%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #281AF0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          h2{
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
            color: #3E31F1;
            opacity: 0.5;
            text-align: left;
            margin-top: 10px;
          }
        }
        .newslette-right{
          // width: 260px;
          margin: 20px 0;
          .button{
            width: 100%;
            height: 52px;
            line-height: 52px;
            background: radial-gradient(129.53% 327.88% at 69.76% 0%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
            box-shadow: 0px 77px 31px rgba(106, 38, 249, 0.01), 0px 43px 26px rgba(106, 38, 249, 0.05), 0px 19px 19px rgba(106, 38, 249, 0.09), 0px 5px 11px rgba(106, 38, 249, 0.1), 0px 0px 0px rgba(106, 38, 249, 0.1);
            border-radius: 4px;
            margin-bottom: 11px;
            margin-left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .button-text{
              font-family: 'Basier Square';
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
            }
            .button-icon{
              width: 24px;
              height: 24px;
              margin-left: 5px;
              margin-top: 1px;
              color: #fff;
            }
          }
          p{
            font-family: 'Basier Square';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 150%;
            letter-spacing: -0.2px;
            color: #3E31F1;
            opacity: 0.5;
            text-align: left;
          }
        }
      }
    }
  }

  .slide9{
    .container{
      height: auto !important;
      background: #000000;
      .footer{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        .footer-item{
          width: 50%;
          .logo{
            display: flex;
            align-items: center;
            .logo-icon{
              width: 32px;
              height: 32px;
              margin-right: 21px;
            }
            .logo-text{
              width: 172px;
              height: 27px;
              color: #fff;
            }
          }
          .description{
            flex: 1;
            max-width: 400px;
            margin-top: 38px;
            font-family: 'Basier Square';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 160%;
            letter-spacing: -0.2px;
            color: #FFFFFF;
            opacity: 0.7;
            text-align: left;
            margin-right: 30px;
            margin-bottom: 45px;
          }
          .subtitle{
            font-family: 'Basier Square';
            font-style: normal;
            font-weight: 500;
            font-size: 28px;
            line-height: 110%;
            letter-spacing: -0.2px;
            color: #FFFFFF;
            text-align: left;
            margin-bottom: 30px;
          }
          .social-wrap{
            width: 100%;
            margin-bottom: 40px;
            display: flex;
            .social-item{
              width: 80px;
              height: 80px;
              flex-shrink: 0;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1.66667px solid #414141;
              margin-left: -12px;

              svg{
                width: 32px;
                height: 32px;
              }

              &:nth-child(1){
                margin-left: 0;
              }
            }
          }
          .sign-up-wrap{
            width: 100%;
            max-width: 540px;
            height: 52px;
            padding: 0 15px;
            box-sizing: border-box;
            border: 1px solid #414141;
            form{
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              input{
                height: 32px;
                line-height: 32px;
                font-weight: 400;
                font-size: 20px;
                background: transparent;
                border: 0;
                background:none;
                outline:none;
                color: #ffffff;
                flex: 1;
              }
              .button{
                display: flex;
                align-items: center;
                cursor: pointer;
                background: transparent;
                padding: 0;
                margin: 0 0 0 10px;
                span{
                  font-weight: 600;
                  font-size: 20px;
                  color: #FFFFFF;
                  margin-right: 6px;
                }
                svg{
                  width: 26px;
                  height: 26px;
                  color: #FFFFFF;
                }
              }
            }
          }
        }
        .item-left{
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
  .slide10{
    .container{
      height: auto !important;
      background: radial-gradient(155.96% 713.49% at 81.1% 50%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
      box-shadow: 0px 77px 31px rgba(106, 38, 249, 0.01), 0px 43px 26px rgba(106, 38, 249, 0.05), 0px 19px 19px rgba(106, 38, 249, 0.09), 0px 5px 11px rgba(106, 38, 249, 0.1), 0px 0px 0px rgba(106, 38, 249, 0.1);
    }
    .fix-12-12{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 33px 0;
      .copyright{
        font-weight: 600;
        font-size: 24px;
        line-height: 100%;
        color: #fff;
      }
      .menu{
        .menu-item{
          font-weight: 500;
          font-size: 16px;
          line-height: 100%;
          letter-spacing: -0.2px;
          text-transform: uppercase;
          color: #FFFFFF;
          margin-left: 40px;
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
  }
  @media screen and (max-width: 767px) {
  }
</style>
