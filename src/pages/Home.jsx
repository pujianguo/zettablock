/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import { Autoplay, Pagination, Navigation, FreeMode, EffectFade } from 'swiper';
import 'swiper/css/navigation';

import logoMain from '../images/logo-main.svg';
import featureIcon1 from '../images/feature-icon-1.svg';
import featureIcon2 from '../images/feature-icon-2.svg';
import featureIcon3 from '../images/feature-icon-3.svg';
import featureIcon4 from '../images/feature-icon-4.svg';
import cliIcon1 from '../images/cli-icon-1.svg';
import cliIcon2 from '../images/cli-icon-3.svg';
import cliIcon3 from '../images/cli-icon-2.svg';
import socialIcon1 from '../images/social-icon-linkedin.svg';
import socialIcon2 from '../images/social-icon-twitter.svg';
import socialIcon3 from '../images/social-icon-slack.svg';
import socialIcon4 from '../images/social-icon-discord.svg';
import MailchimpFormContainer from '../components/MailchimpFormContainer';
import arrowRight from '../images/arrow_right.svg';
import arrowRightBlack from '../images/arrow_right_black.svg';
import middleImage from '../images/middle.svg';
import toolsImage from '../images/tools.svg';
import useCasesImage from '../images/usecase.png';

import { useState } from 'react';
import CustomForm from '../components/CustomForm';
import SubscriptionForm from '../components/SubscriptionForm';

import('scroll-behavior-polyfill');

const TEXT = [
  {
    title: 'Assemble',
    content: 'Modern data stack provisioning automation to drive innovation.',
  },
  {
    title: 'Deploy',
    content:
      'Deploy data applications without complex microservices. All you need is SQL.',
  },
  {
    title: 'Manage',
    content:
      'A near-zero management platform that delivers virtually unlimited scale and concurrency.',
  },
];

const Home = () => {
  // Throw away work
  const handleSmoothScroll = (id, el) => {
    document.querySelectorAll('.links>a').forEach((link) => {
      link.classList.remove('active');
    });
    el.classList.add('active');
    const scrollTo = document.querySelector(`#${id}`);
    scrollTo.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Throw away work
  const toggleNavButton = (swiper) => {
    if (swiper.isEnd) {
      document.querySelector('.feature-next-button').classList.add('hide');
      document.querySelector('.feature-prev-button').classList.remove('hide');
      return;
    }
    if (swiper.isBeginning) {
      document.querySelector('.feature-prev-button').classList.add('hide');
      document.querySelector('.feature-next-button').classList.remove('hide');
      return;
    }
  };

  const toggleHamburgerMenu = () => {
    const hamburger = document.querySelector('.hamburger>button');
    const innerMenu = document.querySelector('.mobile-inner');
    hamburger.classList.toggle('opened');
    innerMenu.classList.toggle('expand');
    hamburger.setAttribute(
      'aria-expanded',
      hamburger.classList.contains('opened')
    );
  };

  const [displaySignupForm, setDisplaySignupForm] = useState(false);

  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <img src={logoMain} alt="zettablock_logo" />
          </div>
          <div className="links">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('banner', e.target);
              }}
              href="#"
              className="active"
            >
              HOME
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('usecases', e.target);
              }}
              href="#"
              className="active"
            >
              USE CASES
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('features', e.target);
              }}
              href="#"
            >
              FEATURES
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('product', e.target);
              }}
              href="#"
            >
              PRODUCT
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('blog', e.target);
              }}
              href="#"
            >
              BLOG
            </a>
          </div>
          <div className="action-buttons">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('signup', e.target);
              }}
              href="#"
            >
              SIGN UP
            </a>
            <a
              href="#"
              onClick={(e) => {
                console.log(123);
                e.preventDefault();
                setDisplaySignupForm(true);
              }}
            >
              Request a DEMO
            </a>
          </div>
        </div>
        <div className="mobile-nav">
          <div className="mobile-logo">
            <img src={logoMain} alt="zettablock_logo" />
          </div>
          <div className="hamburger">
            <button
              class="menu"
              onClick={toggleHamburgerMenu}
              aria-label="Main Menu"
            >
              <svg width="20" height="20" viewBox="0 0 100 100">
                <path
                  class="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path class="line line2" d="M 20,50 H 80" />
                <path
                  class="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
          <div className="mobile-inner">
            <a
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('banner', e.target);
              }}
              href="#"
              className="active"
            >
              HOME
            </a>

            <a
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('features', e.target);
              }}
              href="#"
            >
              FEATURES
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('product', e.target);
              }}
              href="#"
            >
              PRODUCT
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll('blog', e.target);
              }}
              href="#"
            >
              BLOG
            </a>
            <div className="separator">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="bot-links">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll('signup', e.target);
                }}
                href="#"
                className=""
              >
                SIGN UP
              </a>
              <a
                href="#"
                className=""
                onClick={(e) => {
                  console.log(123);
                  e.preventDefault();
                  setDisplaySignupForm(true);
                }}
              >
                Request a DEMO
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="banner" id="banner">
          <div className="slide-content">
            <p>ZETTABLOCK</p>
            <h1>Build Essential Data Infrastructure for Web3</h1>
            <h3>
              The platform provides queryable APIs to generate core insights via
              on-chain and off-chain signals - all without the complexity of
              maintaining infrastructure
            </h3>
          </div>
          <div className="image-cover"></div>
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            effect={'fade'}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
              el: '.custom-swiper-pagination',
              clickable: true,
              // type: 'custom',

              renderBullet: function (index, className) {
                return `
                  <div class="${className}">
                    <div class="bullet">
                      <span>0${index + 1}&nbsp;&nbsp;&nbsp;${
                  TEXT[index].title
                }</span>
                    </div>
                    <div class="bullet-text">
                      ${TEXT[index].content}
                    </div>
                  </div>
                  `;
              },
            }}
          >
            <SwiperSlide>
              <div
                className="slide1 slide-container"
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <div className="image-wrapper">
                  <img src={require('../images/slide1.png')} />
                </div>
                <div className="slide-text">
                  <div className="top">01 Assemble</div>
                  <div className="bottom">
                    Modern data stack provisioning automation to drive
                    innovation.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide1 slide-container"
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                {' '}
                <div className="image-wrapper">
                  <img src={require('../images/slide2.png')} />
                </div>{' '}
                <div className="slide-text">
                  <div className="top">02 Deploy</div>
                  <div className="bottom">
                    Deploy data applications without complex microservices. All
                    you need is SQL.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide1 slide-container"
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <div className="image-wrapper">
                  <img src={require('../images/slide3.png')} />
                </div>{' '}
                <div className="slide-text">
                  <div className="top">03 Manage</div>
                  <div className="bottom">
                    A near-zero management platform that delivers virtually
                    unlimited scale and concurrency.
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="custom-swiper-pagination"></div>
          <div className="slide-content-mobile">
            <p>ZETTABLOCK</p>
            <h1>Build Essential Data Infrastructure for Web3</h1>
            <h3>
              The platform provides queryable APIs to generate core insights via
              on-chain and off-chain signals - all without the complexity of
              maintaining infrastructure
            </h3>
            <div className="request-demo">
              <a
                href="#"
                onClick={(e) => {
                  console.log(123);
                  e.preventDefault();
                  setDisplaySignupForm(true);
                }}
              >
                Request a demo
              </a>
              <img width="20" src={arrowRight} />
            </div>
          </div>
        </section>
        <section className="features" id="features">
          <div className="container">
            <div className="content">
              <div className="intro">
                <div className="title">
                  <h2>Features</h2>
                  {/* <p style={{ visibility: 'hidden' }}>#1 Data Infrastructure Solution for Web3</p> */}
                </div>
                <p className="excerpt">
                  Delivering Modern Data Stack as Code with ZettaBlock.
                </p>
                <div className="bottom">
                  <div className="image-wrapper">
                    <img src={featureIcon1} alt="" />
                  </div>
                  <div className="image-wrapper">
                    <img src={featureIcon2} alt="" />
                  </div>
                  <div className="image-wrapper">
                    <img src={featureIcon3} alt="" />
                  </div>
                  <div className="image-wrapper">
                    <img src={featureIcon4} alt="" />
                  </div>
                </div>
              </div>
              <div className="feature-list">
                <Swiper
                  modules={[Pagination, Navigation, FreeMode]}
                  navigation={{
                    nextEl: '.feature-next-button',
                    prevEl: '.feature-prev-button',
                  }}
                  // modules={[FreeMode]}
                  spaceBetween={30}
                  // freeMode={true}
                  // mousewheel={{
                  //   releaseOnEdges: true,
                  // }}
                  slidesPerView={'auto'}
                  onReachEnd={toggleNavButton}
                  onReachBeginning={toggleNavButton}
                >
                  <SwiperSlide>
                    <div className="feature-card">
                      <div className="top">
                        <div className="half">
                          <div className="text">Zero Time to Market</div>
                          <div className="icon">
                            <img src={featureIcon1} alt="" />
                          </div>
                        </div>
                        <p>
                          Connect sources, deploy SQL, and trigger actions
                          without tedious configurations.
                        </p>
                      </div>
                      <div className="bottom">
                        <img src={require('../images/feature-image-1.png')} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feature-card">
                      <div className="top">
                        <div className="half">
                          <div className="text">Self-Serve Data Platform</div>
                          <div className="icon">
                            <img src={featureIcon2} alt="" />
                          </div>
                        </div>
                        <p>
                          Self-serve accurate and low-latency data from our
                          unified batch & streaming platform.
                        </p>
                      </div>
                      <div className="bottom">
                        <img src={require('../images/feature-image-2.png')} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feature-card">
                      <div className="top">
                        <div className="half">
                          <div className="text">Extensible</div>
                          <div className="icon">
                            <img src={featureIcon3} alt="" />
                          </div>
                        </div>
                        <p>
                          Plug and play a wide range of tools to quickly rollout
                          your very own modern data stack.
                        </p>
                      </div>
                      <div className="bottom">
                        <img src={require('../images/feature-image-3.png')} />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="feature-card">
                      <div className="top">
                        <div className="half">
                          <div className="text">DevOps Best Practices</div>
                          <div className="icon">
                            <img src={featureIcon4} alt="" />
                          </div>
                        </div>
                        <p>
                          Deploy collaboratively and safely using isolated
                          environments, Git-enabled version control.
                        </p>
                      </div>
                      <div className="bottom">
                        <img src={require('../images/feature-image-4.png')} />
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <div
                      style={{
                        width: 50,
                      }}
                    ></div>
                  </SwiperSlide> */}
                </Swiper>
                <div className="feature-next-button">
                  <img src={require('../images/rightarrow.png')} alt="" />
                </div>
                <div className="feature-prev-button hide">
                  <img src={require('../images/leftarrow.png')} alt="" />
                </div>
              </div>
              <div className="feature-list-mobile">
                <div className="feature-card-mobile">
                  <div className="first">
                    <div className="top">Zero Time to Market</div>
                    <div className="bottom">
                      Connect sources, deploy SQL, and trigger actions without
                      tedious configurations.
                    </div>
                  </div>
                  <div className="second">
                    <img
                      src={require('../images/feature-image-1.png')}
                      alt=""
                    />
                    <div className="icon-top-right">
                      <img src={featureIcon1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="feature-card-mobile">
                  <div className="first">
                    <div className="top">Self-Serve Data Platform</div>
                    <div className="bottom">
                      Self-serve accurate and low-latency data from our unified
                      batch & streaming platform.
                    </div>
                  </div>
                  <div className="second">
                    <img
                      src={require('../images/feature-image-2.png')}
                      alt=""
                    />
                    <div className="icon-top-right">
                      <img src={featureIcon2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="feature-card-mobile">
                  <div className="first">
                    <div className="top">Extensible</div>
                    <div className="bottom">
                      Plug and play a wide range of tools to quickly rollout
                      your very own modern data stack.
                    </div>
                  </div>
                  <div className="second">
                    <img
                      src={require('../images/feature-image-3.png')}
                      alt=""
                    />
                    <div className="icon-top-right">
                      <img src={featureIcon3} alt="" />
                    </div>
                  </div>
                </div>
                <div className="feature-card-mobile">
                  <div className="first">
                    <div className="top">DevOps Best Practices</div>
                    <div className="bottom">
                      Deploy collaboratively and safely using isolated
                      environ-ments, Git-enabled version control.
                    </div>
                  </div>
                  <div className="second">
                    <img
                      src={require('../images/feature-image-4.png')}
                      alt=""
                    />
                    <div className="icon-top-right">
                      <img src={featureIcon4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mobile-middle">
          <img src={middleImage} alt="" />
        </section>
        <section className="middle">
          <div className="container">
            <h3>
              Unlocking the Power of Data with Programmable Modern Data Stack
            </h3>
            <p>
              ZettaBlock is building a customizable and managed data stack. This
              infrastructure-as-code tool dramatically reduces the time and
              engineering resources customers need to orchestrate a modern data
              platform.
            </p>
            <div className="image-wrapper">
              <img src={require('../images/dataflow.png')} alt="" />
            </div>
            <div className="one-third">
              <div className="image-text">
                <div className="image">
                  <img src={cliIcon1} />
                </div>
                <div className="text">
                  <h5>Orchestrate in Minutes</h5>
                  <p>
                    Provisioning modern data stacks have never been easier, no
                    Ph.D. required.
                  </p>
                </div>
              </div>
              <div className="image-text">
                <div className="image">
                  <img src={cliIcon2} />
                </div>
                <div className="text">
                  <h5>Modularized & Customizable</h5>
                  <p>
                    Lego-like, plug-and-play experience to give you the power to
                    build your ideal data stack.
                  </p>
                </div>
              </div>
              <div className="image-text">
                <div className="image">
                  <img src={cliIcon3} />
                </div>
                <div className="text">
                  <h5>Cloud-Native</h5>
                  <p>
                    Build, deploy and maintain a scalable data stack with the
                    modern cloud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="use-cases" id='usecases'>
          <div className="container">
            <h2>Use Case</h2>
            <div className="content">
              <div className="image-wrapper">
                <img src={useCasesImage} alt="use-cases" />
                <a
                  className="preview"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Comming Soon...');
                  }}
                >
                  <img src="/zettatrade-video-play.svg" alt="preview-video" />
                </a>
              </div>
              <div className="row">
                <div className="col">
                  <div className="title">
                    <div className="left">
                      <img src="/zettatrade-feature-1.svg" alt="" />
                    </div>
                    <div className="right">
                      STATE OF THE ART <br />
                      DATA INFRASTRUCTURE
                    </div>
                  </div>
                  <div className="text">
                    Built by infrastructure engineers from the best data driven
                    companies in Silicon Valley, deploy data applications
                    without complex microservices, all you need is SQL.
                  </div>
                </div>
                <div className="col">
                  <div className="title">
                    <div className="left">
                      <img src="/zettatrade-feature-2.svg" alt="" />
                    </div>
                    <div className="right">
                      Discover <br />
                      new opportunities
                    </div>
                  </div>
                  <div className="text">
                    Identify the most prominent wallets from comprehensive
                    on-chain data. Create your own alerts, charts and dashboard
                    using SQL.
                  </div>
                </div>
                <div className="col">
                  <div className="title">
                    <div className="left">
                      <img src="/zettatrade-feature-3.svg" alt="" />
                    </div>
                    <div className="right">
                      TRADE <br />
                      Ahead of the curve
                    </div>
                  </div>
                  <div className="text">
                    Automated trading in sub-seconds when a prominent wallet has
                    been moving its funds.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tools" id="product">
          <div className="container">
            <div className="left">
              <h2>
                <span className="blue">Zetta</span>Block Tools
              </h2>
              <p>
                Zettablock provides both code and visual editors to help build
                customizable and managed modern data stack.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  console.log(123);
                  e.preventDefault();
                  setDisplaySignupForm(true);
                }}
              >
                Request a demo
              </a>
              <div className="mobile-display">
                <img src={toolsImage} />
                <div className="request-demo">
                  <a
                    href="#"
                    onClick={(e) => {
                      console.log(123);
                      e.preventDefault();
                      setDisplaySignupForm(true);
                    }}
                  >
                    Request a demo
                  </a>
                  <img width="20" src={arrowRightBlack} />
                </div>
              </div>
            </div>
            <div className="mid">
              <img src={require('../images/tools-core-item.png')} alt="" />
              <img src={require('../images/tools-core-bg.png')} alt="" />
              <h3>
                <span className="blue">Zetta</span>Block
                <br />
                <span> Core</span>
              </h3>
            </div>
            <div className="right">
              <img src={require('../images/tools-cloud-item.png')} alt="" />
              <img src={require('../images/tools-cloud-bg.png')} alt="" />
              <h3>
                <span className="blue">Zetta</span>Block
                <br />
                <span> Cloud</span>
              </h3>
            </div>
          </div>
        </section>
        <section className="blog" id="blog">
          <div className="container">
            <div className="title">
              <h2>Blog</h2>
              <p style={{ visibility: 'hidden' }}>
                #1 Data Infrastructure Solution for Web3
              </p>
            </div>
            <div className="content">
              <div className="blog">
                <div className="info">
                  <h4>Zettablock</h4>
                  <h3>Get started with ZettaBlock</h3>
                  <p>Deploying a modern data stack in 5 minutes</p>
                  <button href="#">READ</button>
                </div>
                <img src={require('../images/blog-cover-1.png')} alt="" />
              </div>
              <div className="blog secondary">
                <div className="info">
                  <h3 className="secondary">
                    Rethinking the modern data stack
                  </h3>
                  <button href="#">READ</button>
                </div>
                <img src={require('../images/blog-cover-2.png')} alt="" />
              </div>
              <div className="blog secondary">
                <div className="info">
                  <h3 className="secondary">
                    Orchestrate a data platform for Solana
                  </h3>
                  <button href="#">READ</button>
                </div>
                <img src={require('../images/blog-cover-3.png')} alt="" />
              </div>
            </div>
          </div>
          <div className="fade-effect"></div>
        </section>
        <section className="testimonial" style={{ display: 'none' }}>
          <div className="container">
            <div className="title">
              <h2>Customer Quotes</h2>
            </div>
            <div className="slides">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={2}
                navigation={{
                  nextEl: '.next-button',
                  prevEl: '.prev-button',
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                  clickable: true,
                  el: '.custom-swiper-pagination2',
                  renderBullet: function (index, className) {
                    return `
                      <div class="${className}">
                        <div class="span"></div>
                      </div>
                      `;
                  },
                }}
              >
                <SwiperSlide>
                  <div className="quote">
                    <p>
                      For over 10 years, Bitly has been the Internet’s go-to
                      tool for shortening a link. What you might not know is
                      that apart from saving us from character limits, the
                      company also developed.
                    </p>
                    <div className="bottom">
                      <div className="left">
                        <img src={require('../images/opensea.png')} />
                      </div>
                      <div className="right">Crypto NFT Market</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="quote">
                    <p>
                      In a few short years, Frame.io has upended the traditional
                      model of video collaboration with a modern, cloud-based
                      solution. The platform is both fast and intuitive, racking
                      up an impressive list.
                    </p>
                    <div className="bottom">
                      <div className="left">
                        <img src={require('../images/anchain.png')} />
                      </div>
                      <div className="right">Crypto Smart Chain</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="quote">
                    <p>
                      In a few short years, Frame.io has upended the traditional
                      model of video collaboration with a modern, cloud-based
                      solution. The platform is both fast and intuitive, racking
                      up an impressive list.
                    </p>
                    <div className="bottom">
                      <div className="left">
                        <img src={require('../images/opensea.png')} />
                      </div>
                      <div className="right">Crypto NFT Market</div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="prev-button">
                <img src={require('../images/leftarrow.png')} alt="" />
              </div>
              <div className="next-button">
                <img src={require('../images/rightarrow.png')} alt="" />
              </div>
              <div className="custom-swiper-pagination2"></div>
            </div>
          </div>
          <div className="conpanies-container">
            <div className="companies">
              <div className="company">
                <img src={require('../images/logo1.png')} alt="" />
              </div>
              <div className="company">
                <img src={require('../images/logo2.png')} alt="" />
              </div>
              <div className="company">
                <img src={require('../images/logo3.png')} alt="" />
              </div>
              <div className="company">
                <img src={require('../images/logo4.png')} alt="" />
              </div>
              <div className="company">
                <img src={require('../images/logo5.png')} alt="" />
              </div>
              <div className="company">
                <img src={require('../images/logo6.png')} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="news-letter">
          <div className="container">
            <div className="left">
              <div className="image-wrapper">
                <img src={logoMain} alt="" />
              </div>
              <p>Deploying a Modern Data Stack in 5 Minutes.</p>
              <div className="mobile-text">
                ZettaBlock is building a customizable and managed data stack.
                This infrastructure-as-code tool dramatically reduces the time
                and engineering resources customers need to orchestrate a modern
                data platform.
              </div>
              <h5 id="signup">SUBSCRIBE TO OUR MAILING LIST</h5>
              {/* <div id="signup" className="input">
                <img src={require("../images/input.png")} alt="" />
              </div> */}
              <MailchimpFormContainer
                u="1ff0f35da3b86da52617aadd6"
                id="bc40fdafb4"
                placeholder="Please Input E-mail"
                closeModal={() => {}}
                Component={SubscriptionForm}
              ></MailchimpFormContainer>
            </div>
            <div className="right">
              <h4>We are hiring. Come to work with us at ZettaBlock!</h4>
              <p>
                Careers:{' '}
                <a href="mailto:founders@zettablock.com">
                  founders@zettablock.com
                </a>
              </p>
              <div className="row">
                <div className="col">
                  <div className="title">FOLLOW US</div>
                  <ul className="content">
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/company/zettablockhq/"
                      >
                        <img src={socialIcon1} alt="Linkedin" />
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/ZettaBlockHQ"
                      >
                        <img src={socialIcon2} alt="Twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://zettablockcommunity.slack.com/"
                      >
                        <img src={socialIcon3} alt="Slack" />
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://discord.gg/px42xPBFkN"
                      >
                        <img src={socialIcon4} alt="Discord" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div className="col">
                  <div className="title">Second column</div>
                  <div className="content">Maintaining consistency throughout the system</div>
                </div> */}
              </div>
            </div>
            <div className="links-mobile">
              <a>Privacy Policy</a>
              <a>Term of service</a>
              <a>Language</a>
            </div>
          </div>
        </section>
        <div className="copyright">
          <div className="container">
            <div className="copy">
              © 2022&nbsp;&nbsp;&nbsp;DataLego Inc.&nbsp;&nbsp;-&nbsp;&nbsp;All
              Rights Reserved.
            </div>
            <div className="links">
              <a>Privacy Policy</a>
              <a>Term of service</a>
              <a>Language</a>
            </div>
          </div>
        </div>
        {displaySignupForm && (
          <div className="modal-container">
            <MailchimpFormContainer
              u="1ff0f35da3b86da52617aadd6"
              id="bc40fdafb4"
              closeModal={setDisplaySignupForm}
              Component={CustomForm}
            ></MailchimpFormContainer>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
