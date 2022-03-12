/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import "swiper/css/scrollbar";
import { Pagination, Navigation, FreeMode } from "swiper";
import "swiper/css/navigation";

import featureIcon1 from "../images/feature-icon-13.svg";
import featureIcon2 from "../images/feature-icon-22.svg";
import featureIcon3 from "../images/feature-icon-1.svg";
import featureIcon4 from "../images/ff44.svg";
import MailchimpFormContainer from "../components/MailchimpFormContainer";

import { useState } from "react";
import CustomForm from "../components/CustomForm";
import SubscriptionForm from "../components/SubscriptionForm";

const TEXT = [
  {
    title: "Assemble",
    content: "Modern data stack provisioning automation to drive innovation.",
  },
  {
    title: "Deploy",
    content:
      "Deploy data applications without complex microservices. All you need is SQL.",
  },
  {
    title: "Manage",
    content:
      "A near-zero management platform that delivers virtually unlimited scale and concurrency.",
  },
];

const Home = () => {
  // Throw away work
  const handleSmoothScroll = (id, el) => {
    document.querySelectorAll(".links>a").forEach((link) => {
      link.classList.remove("active");
    });
    el.classList.add("active");
    const scrollTo = document.querySelector(`#${id}`);
    scrollTo.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Throw away work
  const toggleNavButton = (swiper) => {
    if (swiper.isEnd) {
      document.querySelector(".feature-next-button").classList.add("hide");
      document.querySelector(".feature-prev-button").classList.remove("hide");
      return;
    }
    if (swiper.isBeginning) {
      document.querySelector(".feature-prev-button").classList.add("hide");
      document.querySelector(".feature-next-button").classList.remove("hide");
      return;
    }
  };

  const [displaySignupForm, setDisplaySignupForm] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">
          <img
            src={require("../images/zettablock.png")}
            alt="zettablock_logo"
          />
        </div>
        <div className="links">
          <a
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("banner", e.target);
            }}
            href="#"
            className="active"
          >
            HOME
          </a>

          <a
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("features", e.target);
            }}
            href="#"
          >
            FEATURES
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("product", e.target);
            }}
            href="#"
          >
            PRODUCT
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("blog", e.target);
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
              handleSmoothScroll("signup", e.target);
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
      </nav>

      <main>
        <section className="banner" id="banner">
          <Swiper
            // allowSlidePrev={false}
            // allowSlideNext={false}
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
              el: ".custom-swiper-pagination",
              clickable: true,
              // type: 'custom',

              renderBullet: function (index, className) {
                return `
                  <div class="${className}">
                    <div class="bullet">
                      0${index + 1} ${TEXT[index].title}
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
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div className="image-wrapper">
                  <img src={require("../images/slide1.png")} />
                </div>
                <div className="slide-content">
                  <p></p>
                  <h1>Deploying a Modern Data Stack in 5 Minutes</h1>
                  <h3>
                    The easiest way to assemble, deploy and manage a
                    programmable data stack.
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide1 slide-container"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {" "}
                <div className="image-wrapper">
                  <img src={require("../images/slide1.png")} />
                </div>
                <div className="slide-content">
                  <p></p>
                  <h1>The Orchestrate Morden Data Stack</h1>
                  <h3>Web3 Data More Accessible, Better Trading Decision</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slide1 slide-container"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <div className="image-wrapper">
                  <img src={require("../images/slide1.png")} />
                </div>
                <div className="slide-content">
                  <p></p>
                  <h1>The Orchestrate Morden Data Stack</h1>
                  <h3>Web3 Data More Accessible, Better Trading Decision</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="custom-swiper-pagination"></div>
        </section>
        <section className="features" id="features">
          <div className="title">
            <h2>Features</h2>
            <p style={{ visibility: "hidden" }}>
              #1 Data Infrastructure Solution for Web3
            </p>
          </div>
          <div className="container">
            <div className="content">
              <div className="intro">
                <p className="excerpt">
                  Deliver Modern Data Stack as Code with ZettaBlock
                </p>
                <div className="bottom">
                  <div className="image-wrapper">
                    <img src={require("../images/f1.png")} alt="" />
                  </div>
                  <div className="image-wrapper">
                    <img src={require("../images/f2.png")} alt="" />
                  </div>
                  <div className="image-wrapper">
                    <img src={require("../images/f3.png")} alt="" />
                  </div>
                  <div className="image-wrapper">
                    <img src={require("../images/f4.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className="feature-list">
                <Swiper
                  modules={[Pagination, Navigation, FreeMode]}
                  navigation={{
                    nextEl: ".feature-next-button",
                    prevEl: ".feature-prev-button",
                  }}
                  // modules={[FreeMode]}
                  spaceBetween={30}
                  // freeMode={true}
                  // mousewheel={{
                  //   releaseOnEdges: true,
                  // }}
                  slidesPerView={"auto"}
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
                      <div className="bottom"></div>
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
                      <div className="bottom"></div>
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
                      <div className="bottom"></div>
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
                      <div className="bottom"></div>
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
                  <img src={require("../images/rightarrow.png")} alt="" />
                </div>
                <div className="feature-prev-button">
                  <img src={require("../images/leftarrow.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="middle" style={{ dislay: "none" }}>
          <div className="container">
            <h3>Your Data Stack Maintained from the CLI in Minutes</h3>
            <p>
              The visual guide will provide a view to the customer of what their
              website or project will end up looking like.
            </p>
            <div className="image-wrapper">
              <img src={require("../images/middle.png")} alt="" />
            </div>
            <div className="one-third">
              <div className="image-text">
                <div className="image">
                  <img src={require("../images/Chart.png")} />
                </div>
                <div className="text">
                  <h5>Orchestrate in Minutes</h5>
                  <p>The visual guide will provide a view to the customer</p>
                </div>
              </div>
              <div className="image-text">
                <div className="image">
                  <img src={require("../images/icon2.png")} />
                </div>
                <div className="text">
                  <h5>Deploy Anywhere</h5>
                  <p>
                    The visual guide will provide a view to the customer of what
                  </p>
                </div>
              </div>
              <div className="image-text">
                <div className="image">
                  <img src={require("../images/Border.png")} />
                </div>
                <div className="text">
                  <h5>Modularized & Customizable</h5>
                  <p>
                    The visual guide will provide a view to the customer of what
                    their website
                  </p>
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
                The visual guide will provide a view to the customer of what
                their website or project will end up looking like.
              </p>
              <a href="">Request a demo</a>
            </div>
            <div className="mid">
              <img src={require("../images/left.png")} alt="" />
            </div>
            <div className="right">
              <img src={require("../images/right.png")} alt="" />
            </div>
          </div>
        </section>
        <section className="blog" id="blog">
          <div className="container">
            <div className="title">
              <h2>Blog</h2>
              <p style={{ visibility: "hidden" }}>
                #1 Data Infrastructure Solution for Web3
              </p>
            </div>
            <div className="content">
              <div className="left">
                <div className="primary-blog">
                  <div className="sub-title">Zettablock</div>
                  <h3>Get started with ZettaBlock</h3>
                  <p>Deploying a modern data stack in 5 minutes</p>
                  <a href="">READ</a>
                </div>
              </div>
              <div className="right">
                <a href="#" className="other-blog">
                  <div className="title">Rethinking the morden data stack</div>
                </a>
                <a href="#" className="other-blog">
                  <div className="title">
                    Orchestrate a data platform for Solana
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="fade-effect"></div>
        </section>
        <section className="testimonial" style={{ display: "none" }}>
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
                  nextEl: ".next-button",
                  prevEl: ".prev-button",
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                  clickable: true,
                  el: ".custom-swiper-pagination2",
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
                        <img src={require("../images/opensea.png")} />
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
                        <img src={require("../images/anchain.png")} />
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
                        <img src={require("../images/opensea.png")} />
                      </div>
                      <div className="right">Crypto NFT Market</div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="prev-button">
                <img src={require("../images/leftarrow.png")} alt="" />
              </div>
              <div className="next-button">
                <img src={require("../images/rightarrow.png")} alt="" />
              </div>
              <div className="custom-swiper-pagination2"></div>
            </div>
          </div>
          <div className="conpanies-container">
            <div className="companies">
              <div className="company">
                <img src={require("../images/logo1.png")} alt="" />
              </div>
              <div className="company">
                <img src={require("../images/logo2.png")} alt="" />
              </div>
              <div className="company">
                <img src={require("../images/logo3.png")} alt="" />
              </div>
              <div className="company">
                <img src={require("../images/logo4.png")} alt="" />
              </div>
              <div className="company">
                <img src={require("../images/logo5.png")} alt="" />
              </div>
              <div className="company">
                <img src={require("../images/logo6.png")} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="news-letter">
          <div className="container">
            <div className="left">
              <div className="image-wrapper">
                <img src={require("../images/zettablock.png")} alt="" />
              </div>
              <p>Deploying a Modern Data Stack in 5 Minutes</p>
              <h5 id="signup">SUBSCRIBE TO OUR MAILING LIST</h5>
              {/* <div id="signup" className="input">
                <img src={require("../images/input.png")} alt="" />
              </div> */}
              <MailchimpFormContainer
                u="1ff0f35da3b86da52617aadd6"
                id="bc40fdafb4"
                closeModal={() => {}}
                Component={SubscriptionForm}
              ></MailchimpFormContainer>
            </div>
            <div className="right">
              <h4>
                Information is separate from both knowledge and data, and lies
                nebulously between them. It is information about objects.
              </h4>
              <div className="row">
                <div className="col">
                  <div className="title">First column</div>
                  <div className="content">
                    Incorporating user needs collected during user research into
                    the designs
                  </div>
                </div>
                <div className="col">
                  <div className="title">Second column</div>
                  <div className="content">
                    Maintaining consistency throughout the system
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="copyright">
          <div className="container">
            <div className="links">
              <a href="">Privacy Policy</a>
              <a href="">Term of service</a>
              <a href="">Language</a>
            </div>
            <div className="social-media">
              <img src={require("../images/media.png")} />
            </div>
            <div className="copy">© 2022 Zettablock Inc.</div>
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
