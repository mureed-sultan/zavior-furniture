import React, { useEffect } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getStyle } from "@/utils/loadCss";

const imagePaths: string[] = [
  "/assets/imgs/brand/img-s-1-light.webp",
  "/assets/imgs/brand/img-s-2-light.webp",
  "/assets/imgs/brand/img-s-3-light.webp",
  "/assets/imgs/brand/img-s-4-light.webp",
  "/assets/imgs/brand/img-s-5-light.webp",
  "/assets/imgs/brand/img-s-6-light.webp",
];

const services = [
  {
    id: 1,
    title: "Interaction Design",
    iconLight: "/assets/imgs/icon/icon-s-1.webp",
    iconDark: "/assets/imgs/icon/icon-s-1-light.webp",
    features: [
      "User Interface",
      "User Experience",
      "Design System",
      "Wireframe",
      "Prototype",
      "Website & Mobile App",
      "IOS + Android",
    ],
    delay: "0.15",
  },
  {
    id: 2,
    title: "Branding Design",
    iconLight: "/assets/imgs/icon/icon-s-2.webp",
    iconDark: "/assets/imgs/icon/icon-s-2-light.webp",
    features: [
      "User Interface",
      "User Experience",
      "Design System",
      "Wireframe",
      "Prototype",
      "Website & Mobile App",
      "IOS + Android",
    ],
    delay: "0.30",
  },
  {
    id: 3,
    title: "Design & Development",
    iconLight: "/assets/imgs/icon/icon-s-3.webp",
    iconDark: "/assets/imgs/icon/icon-s-3-light.webp",
    features: [
      "User Interface",
      "User Experience",
      "Design System",
      "Wireframe",
      "Prototype",
      "Website & Mobile App",
      "IOS + Android",
    ],
    delay: "0.45",
  },
  {
    id: 4,
    title: "eCommerce Development",
    iconLight: "/assets/imgs/icon/icon-s-4.webp",
    iconDark: "/assets/imgs/icon/icon-s-4-light.webp",
    features: [
      "User Interface",
      "User Experience",
      "Design System",
      "Wireframe",
      "Prototype",
      "Website & Mobile App",
      "IOS + Android",
    ],
    delay: "0.60",
  },
];

function Services() {
  useEffect(() => {
    const cleanup = getStyle("service");
    return cleanup;
  }, []);
  return (
    <Layout>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="body-wrapper body-corporate-agency">
            <div className="overlay-switcher-close"></div>

            <main>
              <section className="hero-area">
                <div className="container">
                  <div className="hero-area-inner">
                    <div className="section-content">
                      <div className="section-title-wrapper">
                        <div className="title-wrapper">
                          <h1 className="section-title large has_text_move_anim">
                            We make design that lead and inspire.
                          </h1>
                        </div>
                      </div>
                      <div className="text-wrapper">
                        <p className="text has_fade_anim">
                          We take a similar approach to design commercial we do
                          impactfully approache, over the flowchart of user
                          friendly wireframe.
                        </p>
                      </div>
                      <div className="icon has_fade_anim" data-on-scroll="0">
                        <Image
                          width={30}
                          height={30}
                          className="show-light"
                          src="/assets/imgs/shape/img-s-82.webp"
                          alt="image"
                        />
                        <Image
                          width={30}
                          height={30}
                          className="show-dark"
                          src="/assets/imgs/shape/img-s-82-light.webp"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="thumb">
                      <Image
                        width={1024}
                        height={100}
                        src="/assets/imgs/gallery/img-s-86.webp"
                        className="has_fade_anim"
                        data-fade-offset="0"
                        data-delay="0.45"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <div className="container-hd has_fade_anim">
                <div className="clients-area">
                  <div className="container">
                    <div className="clients-area-inner">
                      <div className="shape-1">
                        <Image
                          width={1024}
                          height={100}
                          src="/assets/imgs/shape/img-s-83.webp"
                          alt="shape"
                        />
                      </div>
                      <div className="client-slider">
                        <Swiper spaceBetween={30} slidesPerView={6} loop={true}>
                          {imagePaths.map((path, index) => (
                            <SwiperSlide key={index}>
                              <div className="client-box">
                                <Image
                                  width={100}
                                  height={100}
                                  src={path}
                                  alt="client image"
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="service-area section-spacing">
                <div className="container">
                  <div className="service-top-wrapper">
                    <div className="section-heading">
                      <h2 className="section-title has_text_move_anim">
                        Our exclusive <br /> services
                      </h2>
                    </div>
                    <div className="content">
                      <p className="text has_fade_anim">
                        We bet on brands that shift categories and add value to
                        people's lives; and on founders who are motivated to
                        shape
                      </p>
                    </div>
                  </div>
                  <div className="services-wrapper-box">
                    <div className="services-grid">
                      {services.map((service) => (
                        <div
                          key={service.id}
                          className="service-item has_fade_anim"
                          data-delay={service.delay}
                        >
                          <div className="icon">
                            <Image
                              width={50}
                              height={50}
                              className="show-light"
                              src={service.iconLight}
                              alt="service-icon"
                            />
                            <Image
                              width={50}
                              height={50}
                              className="show-dark"
                              src={service.iconDark}
                              alt="service-icon"
                            />
                          </div>
                          <h2 className="title">{service.title}</h2>
                          <ul className="service-features">
                            {service.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
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
                        <h2 className="section-title has_text_move_anim">
                          We’re simple but pro-level agency
                        </h2>
                      </div>
                    </div>
                    <div className="text-wrapper">
                      <p className="text has_fade_anim">
                        Theme Builder, you have complete control over the{" "}
                        <span>static elements</span> of your website
                      </p>
                    </div>
                    <div
                      className="btn-wrapper has_fade_anim"
                      data-ease="bounce"
                    >
                      <a
                        href="contact.html"
                        className="wc-btn wc-btn-primary btn-text-flip"
                      >
                        {" "}
                        <span data-text="Learn More">Learn More</span>
                      </a>
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
                          <h2 className="section-title has_text_move_anim">
                            Special offer! choose your pack today
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-wrapper-box">
                      <div className="pricing-wrapper">
                        <div
                          className="pricing-box has_fade_anim"
                          data-delay="0.15"
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
                          data-delay="0.30"
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
                          data-delay="0.45"
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
                          <h2 className="section-title has_text_move_anim">
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

              <div className="client-area has_fade_anim">
                <div className="container">
                  <div className="client-area-inner section-spacing">
                    <div className="client-area-text">
                      <h2 className="text">
                        We worked with largest global brands
                      </h2>
                    </div>
                    <div className="clients-wrapper-box">
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

        
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Services;
