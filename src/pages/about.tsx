import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import "../styles/pages/about.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    text: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
    name: "Mike David",
    position: "Developer",
    lightIcon: "/assets/imgs/icon/quote-5.webp",
    darkIcon: "/assets/imgs/icon/quote-5-light.webp",
  },
  {
    id: 2,
    text: "Alts has transformed the way we work, providing a reliable and efficient collaboration. Their support is unmatched, and we truly value their expertise.",
    name: "Sarah Johnson",
    position: "Project Manager",
    lightIcon: "/assets/imgs/icon/quote-5.webp",
    darkIcon: "/assets/imgs/icon/quote-5-light.webp",
  },
  {
    id: 3,
    text: "A fantastic team to work with! Their professionalism and dedication have exceeded our expectations, making them an integral part of our success.",
    name: "James Anderson",
    position: "CEO",
    lightIcon: "/assets/imgs/icon/quote-5.webp",
    darkIcon: "/assets/imgs/icon/quote-5-light.webp",
  },
];

function About() {
  return (
    <Layout>
      <main>
        <section className="hero-area">
          <div className="container large">
            <div className="hero-area-inner">
              <div className="section-content">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h1 className="section-title large has_fade_anim">
                      We are ”Arolax” - product and branding and creative agency
                      based in California
                    </h1>
                  </div>
                </div>
                <div className="content-last">
                  <div
                    className="subtitle-wrapper has_fade_anim"
                    data-fade-from="right"
                  >
                    <span className="section-subtitle has-right-line">
                      01. about us
                    </span>
                  </div>
                  <div className="text-wrapper">
                    <p className="text has_fade_anim" data-fade-from="left">
                      Unlocking creative horizons: the story behind “Arolax” a
                      global digital agency crafting experiences, building
                      dreams, and shaping success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="counter-area">
          <div className="counter-area-inner">
            <div className="thumb">
              <Image
                width={1024}
                height={100}
                src="/assets/imgs/gallery/img-s-27.webp"
                alt="image"
              />
            </div>
            <div className="counter-wrapper-box">
              <div className="counter-wrapper">
                <div className="thumb overflow-hidden">
                  <Image
                    width={1024}
                    height={100}
                    src="/assets/imgs/gallery/img-s-28.webp"
                    data-speed="0.9"
                    alt="image"
                  />
                </div>
                <div className="counter-box">
                  <h2 className="text has_fade_anim">
                    We have 100+ <br />
                    satisfied clients
                  </h2>
                  <h2 className="number wc-counter has_fade_anim">100+</h2>
                </div>
                <div className="counter-box dark">
                  <h2 className="text has_fade_anim">
                    We helped to get <br />
                    companies with $25M+ <br />
                    funding
                  </h2>
                  <h2 className="number wc-counter has_fade_anim">25M+</h2>
                </div>
                <div className="thumb overflow-hidden">
                  <Image
                    width={1024}
                    height={100}
                    src="/assets/imgs/gallery/img-s-29.webp"
                    data-speed="0.9"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="awards-area">
          <div className="container">
            <div className="awards-area-inner section-spacing">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle has-left-line">
                      02. Who we are
                    </span>
                  </div>
                  <div className="title-wrapper">
                    <h2 className="section-title has_fade_anim">
                      We make storable strategy growth your company with arolax
                      agency!
                    </h2>
                  </div>
                </div>
              </div>
              <div className="section-content">
                <div className="text-wrapper">
                  <p className="text has_fade_anim" data-fade-from="left">
                    We deploy world-class creative design, team on demand. that
                    can design surest measure's of success is when a client
                    partner with more than once build, ship scale your vision
                    most efficient.
                  </p>
                </div>
                <div className="awards-list has_fade_anim">
                  <ul>
                    <li>
                      <div className="meta">
                        <div className="icon">
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/icon-s-40.webp"
                            alt="icon"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/icon-s-40-light.webp"
                            alt="icon"
                          />
                        </div>
                        <div className="content">
                          <h3 className="number wc-counter">50+</h3>
                          <p className="text">projects success rate 99% </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="meta">
                        <div className="icon">
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/icon-s-41.webp"
                            alt="icon"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/icon-s-41-light.webp"
                            alt="icon"
                          />
                        </div>
                        <div className="content">
                          <h3 className="number wc-counter">12+</h3>
                          <p className="text">award for digital innovation</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="about-thumbs">
                <div className="thumb-first">
                  <Image
                    width={1024}
                    height={100}
                    src="/assets/imgs/gallery/img-s-3.webp"
                    className="has_fade_anim"
                    data-fade-from="right"
                    alt="image"
                  />
                </div>
                <div className="thumb-second">
                  <Image
                    width={1024}
                    height={100}
                    src="/assets/imgs/gallery/img-s-4.webp"
                    className="has_fade_anim"
                    data-fade-from="left"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area container-hd">
          <div className="about-area-inner">
            <div className="thumb">
              <Image
                width={1024}
                height={100}
                src="/assets/imgs/gallery/img-s-30.webp"
                alt="gallery image"
              />
            </div>
            <div className="section-content">
              <div className="bg">
                <Image
                  width={1024}
                  height={100}
                  src="/assets/imgs/gallery/img-s-31.webp"
                  alt="image"
                />
              </div>
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title has_fade_anim">
                    We’re simple but pro-level agency
                  </h2>
                </div>
              </div>
              <div className="text-wrapper">
                <p className="text has_fade_anim" data-fade-from="left">
                  Theme Builder, you have complete control over the
                  <span>static elements</span> of your website
                </p>
              </div>
              <div className="btn-wrapper has_fade_anim" data-ease="bounce">
                <a
                  href="contact.html"
                  className="wc-btn wc-btn-primary btn-text-flip"
                >
                  <span data-text="Learn More">Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="testimonial-area has_fade_anim">
          <div className="container">
            <div className="testimonial-area-inner section-spacing">
              <div className="testimonial-wrapper-box">
                <div className="testimonial-wrapper">
                  <div className="swiper testimonial-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="content">
                            <div className="icon">
                              <Image
                                width={1024}
                                height={100}
                                className="quote-icon show-light"
                                src="/assets/imgs/icon/quote-5.webp"
                                alt="Quote Icon"
                              />
                              <Image
                                width={1024}
                                height={100}
                                className="quote-icon show-dark"
                                src="/assets/imgs/icon/quote-5-light.webp"
                                alt="Quote Icon"
                              />
                            </div>
                            <div className="text-wrapper">
                              <p className="text">
                                When we talk about Alts, we do not mean a
                                typical business partner, but rather a team that
                                collaborates with us daily, always there for us
                                when we encounter difficulties and celebrate
                                achievements. We see in Alts our best ally for
                                success!
                              </p>
                            </div>
                            <div className="author">
                              <div className="meta">
                                <span className="name">Mike David, </span>
                                <span className="post">Developer</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="content">
                            <div className="icon">
                              <Image
                                width={1024}
                                height={100}
                                className="quote-icon show-light"
                                src="/assets/imgs/icon/quote-5.webp"
                                alt="Quote Icon"
                              />
                              <Image
                                width={1024}
                                height={100}
                                className="quote-icon show-dark"
                                src="/assets/imgs/icon/quote-5-light.webp"
                                alt="Quote Icon"
                              />
                            </div>
                            <div className="text-wrapper">
                              <p className="text">
                                When we talk about Alts, we do not mean a
                                typical business partner, but rather a team that
                                collaborates with us daily, always there for us
                                when we encounter difficulties and celebrate
                                achievements. We see in Alts our best ally for
                                success!
                              </p>
                            </div>
                            <div className="author">
                              <div className="meta">
                                <span className="name">Mike David, </span>
                                <span className="post">Developer</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="content">
                            <div className="icon">
                              <Image
                                width={1024}
                                height={100}
                                className="quote-icon show-light"
                                src="/assets/imgs/icon/quote-5.webp"
                                alt="Quote Icon"
                              />
                              <Image
                                width={1024}
                                height={100}
                                className="quote-icon show-dark"
                                src="/assets/imgs/icon/quote-5-light.webp"
                                alt="Quote Icon"
                              />
                            </div>
                            <div className="text-wrapper">
                              <p className="text">
                                When we talk about Alts, we do not mean a
                                typical business partner, but rather a team that
                                collaborates with us daily, always there for us
                                when we encounter difficulties and celebrate
                                achievements. We see in Alts our best ally for
                                success!
                              </p>
                            </div>
                            <div className="author">
                              <div className="meta">
                                <span className="name">Mike David, </span>
                                <span className="post">Developer</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-item">
                          <div className="content">
                            <div className="icon">
                              <Image
                                width={1024}
                                height={100}
                                className="quote-icon show-light"
                                src="/assets/imgs/icon/quote-5.webp"
                                alt="Quote Icon"
                              />
                              <Image
                                width={1024}
                                height={100}
                                className="quote-icon show-dark"
                                src="/assets/imgs/icon/quote-5-light.webp"
                                alt="Quote Icon"
                              />
                            </div>
                            <div className="text-wrapper">
                              <p className="text">
                                When we talk about Alts, we do not mean a
                                typical business partner, but rather a team that
                                collaborates with us daily, always there for us
                                when we encounter difficulties and celebrate
                                achievements. We see in Alts our best ally for
                                success!
                              </p>
                            </div>
                            <div className="author">
                              <div className="meta">
                                <span className="name">Mike David, </span>
                                <span className="post">Developer</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-nav">
                  <div className="testimonial-button-prev nav-icon">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/icon/angle-left.webp"
                      alt="icon"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/icon/angle-left-light.webp"
                      alt="icon"
                    />
                  </div>
                  <div className="testimonial-button-next nav-icon">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/icon/angle-right.webp"
                      alt="icon"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/icon/angle-right-light.webp"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="testimonial-area has_fade_anim">
          <div className="container">
            <div className="testimonial-area-inner section-spacing">
              <div className="testimonial-wrapper-box">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".testimonial-button-next",
                    prevEl: ".testimonial-button-prev",
                  }}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  className="testimonial-slider"
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="testimonial-item">
                        <div className="content">
                          <div className="icon">
                            <Image
                              width={50}
                              height={100}
                              className="quote-icon show-light"
                              src={testimonial.lightIcon}
                              alt="Quote Icon"
                            />
                            <Image
                              width={50}
                              height={100}
                              className="quote-icon show-dark"
                              src={testimonial.darkIcon}
                              alt="Quote Icon"
                            />
                          </div>
                          <div className="text-wrapper">
                            <p className="text">{testimonial.text}</p>
                          </div>
                          <div className="author">
                            <div className="meta">
                              <span className="name">{testimonial.name}, </span>
                              <span className="post">
                                {testimonial.position}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="slider-nav">
                  <div className="testimonial-button-prev nav-icon">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/icon/angle-left.webp"
                      alt="icon"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/icon/angle-left-light.webp"
                      alt="icon"
                    />
                  </div>
                  <div className="testimonial-button-next nav-icon">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/icon/angle-right.webp"
                      alt="icon"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/icon/angle-right-light.webp"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="team-area">
          <div className="container">
            <div className="team-area-inner section-spacing">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title has_fade_anim">
                      Quality team
                    </h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim">
                    We deploy world-class creative design, team on demand. that
                    can design surest measure's of success is when a client
                    partner with more than once build, ship scale your vision
                    most efficient.
                  </p>
                </div>
              </div>
              <div className="team-wrapper-box">
                <div className="team-wrapper">
                  <div
                    className="team-box has_fade_anim"
                    data-fade-from="left"
                    data-delay="0.15"
                  >
                    <a href="team-details.html">
                      <div className="thumb">
                        <Image
                          width={1024}
                          height={100}
                          src="/assets/imgs/team/img-s-1.webp"
                          alt="team icon"
                        />
                      </div>
                      <div className="content">
                        <h3 className="title">Kamal Abraham</h3>
                        <p className="text">CEO, Wealcoder</p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="team-box has_fade_anim"
                    data-fade-from="left"
                    data-delay="0.30"
                  >
                    <a href="team-details.html">
                      <div className="thumb">
                        <Image
                          width={1024}
                          height={100}
                          src="/assets/imgs/team/img-s-2.webp"
                          alt="team icon"
                        />
                      </div>
                      <div className="content">
                        <h3 className="title">Selina Gomaze</h3>
                        <p className="text">Junior Executive</p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="team-box has_fade_anim"
                    data-fade-from="left"
                    data-delay="0.45"
                  >
                    <a href="team-details.html">
                      <div className="thumb">
                        <Image
                          width={1024}
                          height={100}
                          src="/assets/imgs/team/img-s-3.webp"
                          alt="team icon"
                        />
                      </div>
                      <div className="content">
                        <h3 className="title">Pedrik Vadra</h3>
                        <p className="text">Sr. Developer</p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="team-box has_fade_anim"
                    data-fade-from="left"
                    data-delay="0.60"
                  >
                    <a href="team-details.html">
                      <div className="thumb">
                        <Image
                          width={1024}
                          height={100}
                          src="/assets/imgs/team/img-s-4.webp"
                          alt="team icon"
                        />
                      </div>
                      <div className="content">
                        <h3 className="title">Thomas Ribbon</h3>
                        <p className="text">UX Designer</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-area">
          <div className="container">
            <div className="pricing-area-inner section-spacing">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title has_fade_anim">
                      Special offer! choose your pack today
                    </h2>
                  </div>
                </div>
              </div>
              <div className="pricing-wrapper-box">
                <div className="pricing-wrapper">
                  <div
                    className="pricing-box has_fade_anim"
                    data-fade-from="left"
                    data-delay="0.60"
                  >
                    <span className="tag">Basic</span>
                    <h3 className="price">$9.00</h3>
                    <div className="feature-list">
                      <ul>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Unlimited cards
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Automated management
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          SOX compliance
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Enterprise ERP integrations
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Limited tools
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Local video issuance
                        </li>
                      </ul>
                    </div>
                    <a
                      href="contact.html"
                      className="wc-btn wc-btn-primary btn-text-flip bordered"
                    >
                      {" "}
                      <span data-text="Learn More">Learn More</span>
                    </a>
                  </div>
                  <div
                    className="pricing-box has_fade_anim"
                    data-fade-from="left"
                    data-delay="0.60"
                  >
                    <span className="tag">Standard</span>
                    <h3 className="price">$29.00</h3>
                    <div className="feature-list">
                      <ul>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Unlimited cards
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Automated management
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          SOX compliance
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Enterprise ERP integrations
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Limited tools
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Local video issuance
                        </li>
                      </ul>
                    </div>
                    <a
                      href="contact.html"
                      className="wc-btn wc-btn-primary btn-text-flip bordered"
                    >
                      {" "}
                      <span data-text="Learn More">Learn More</span>
                    </a>
                  </div>
                  <div
                    className="pricing-box has_fade_anim"
                    data-fade-from="left"
                    data-delay="0.60"
                  >
                    <span className="tag">Premium</span>
                    <h3 className="price">$69.00</h3>
                    <div className="feature-list">
                      <ul>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Unlimited cards
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Automated management
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          SOX compliance
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Enterprise ERP integrations
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Unlimited tools
                        </li>
                        <li>
                          <Image
                            width={1024}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/check-2.webp"
                            alt="icon image"
                          />
                          <Image
                            width={1024}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/check-2-light.webp"
                            alt="icon image"
                          />
                          Local video issuance
                        </li>
                      </ul>
                    </div>
                    <a
                      href="contact.html"
                      className="wc-btn wc-btn-primary btn-text-flip bordered"
                    >
                      {" "}
                      <span data-text="Learn More">Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-area">
          <div className="container">
            <div className="contact-area-inner section-spacing">
              <div className="shape-1">
                <Image
                  width={1024}
                  height={100}
                  src="/assets/imgs/shape/img-s-73.webp"
                  alt="shape"
                />
              </div>
              <div className="section-content">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title has_fade_anim">
                      Start your experience with Arolax
                    </h2>
                  </div>
                </div>
                <div className="btn-wrapper has_fade_anim">
                  <a
                    href="contact.html"
                    className="wc-btn wc-btn-underline btn-text-flip"
                  >
                    {" "}
                    <span data-text="Let’s get in touch">
                      Let’s get in touch
                    </span>{" "}
                    <Image
                      width={1024}
                      height={100}
                      src="/assets/imgs/icon/arrow-right-half-light.webp"
                      alt="icon image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="client-area">
          <div className="container">
            <div className="client-area-inner section-spacing">
              <div className="client-area-text">
                <h2 className="text has_fade_anim">
                  We worked with largest global brands
                </h2>
              </div>
              <div className="clients-wrapper-box has_fade_anim">
                <div className="clients-wrapper">
                  <div className="client-box">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/brand/img-s-1.webp"
                      alt="client image"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/brand/img-s-1-light.webp"
                      alt="client image"
                    />
                  </div>
                  <div className="client-box">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/brand/img-s-2.webp"
                      alt="client image"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/brand/img-s-2-light.webp"
                      alt="client image"
                    />
                  </div>
                  <div className="client-box">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/brand/img-s-3.webp"
                      alt="client image"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/brand/img-s-3-light.webp"
                      alt="client image"
                    />
                  </div>
                  <div className="client-box">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/brand/img-s-4.webp"
                      alt="client image"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/brand/img-s-4-light.webp"
                      alt="client image"
                    />
                  </div>
                  <div className="client-box">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/brand/img-s-5.webp"
                      alt="client image"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/brand/img-s-5-light.webp"
                      alt="client image"
                    />
                  </div>
                  <div className="client-box">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/brand/img-s-6.webp"
                      alt="client image"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/brand/img-s-6-light.webp"
                      alt="client image"
                    />
                  </div>
                  <div className="client-box">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/brand/img-s-7.webp"
                      alt="client image"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/brand/img-s-7-light.webp"
                      alt="client image"
                    />
                  </div>
                  <div className="client-box">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/brand/img-s-8.webp"
                      alt="client image"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/brand/img-s-8-light.webp"
                      alt="client image"
                    />
                  </div>
                  <div className="client-box">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/brand/img-s-9.webp"
                      alt="client image"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/brand/img-s-9-light.webp"
                      alt="client image"
                    />
                  </div>
                  <div className="client-box">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/brand/img-s-10.webp"
                      alt="client image"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/brand/img-s-10-light.webp"
                      alt="client image"
                    />
                  </div>
                  <div className="client-box">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/brand/img-s-11.webp"
                      alt="client image"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/brand/img-s-11-light.webp"
                      alt="client image"
                    />
                  </div>
                  <div className="client-box">
                    <Image
                      width={1024}
                      height={100}
                      className="show-light"
                      src="/assets/imgs/brand/img-s-12.webp"
                      alt="client image"
                    />
                    <Image
                      width={1024}
                      height={100}
                      className="show-dark"
                      src="/assets/imgs/brand/img-s-12-light.webp"
                      alt="client image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
