"use client";

import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../styles/pages/portfolio.css";

const images = [
  "img-s-12.webp",
  "img-s-13.webp",
  "img-s-14.webp",
  "img-s-15.webp",
  "img-s-16.webp",
];

const Portfolio: React.FC = () => {
  return (
    <Layout>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="body-wrapper body-portfolio-2">
            <div className="overlay-switcher-close"></div>

            <main>
              <section className="portfolio-area">
                <div className="container large">
                  <div className="portfolio-area-inner">
                    <div className="portfolio-slider">
                      <Swiper
                        modules={[Navigation, Pagination, EffectCoverflow]}
                        navigation={{
                          nextEl: ".portfolio-button-next",
                          prevEl: ".portfolio-button-prev",
                        }}
                        pagination={{
                          el: ".portfolio-pagination",
                          clickable: true,
                        }}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        loop
                        coverflowEffect={{
                          rotate: 20,
                          stretch: 0,
                          depth: 200,
                          modifier: 1,
                          slideShadows: false,
                        }}
                        breakpoints={{
                          640: { slidesPerView: 1 },
                          1024: { slidesPerView: 2 },
                          1440: { slidesPerView: 3 },
                        }}
                        className="swiper swiper-material portfolio-active"
                      >
                        {images.map((image, index) => (
                          <SwiperSlide key={index} className="swiper-slide has_fade_anim" data-fade-from="left">
                            <div className="swiper-material-wrapper">
                              <div className="swiper-material-content">
                                <Image
                                  src={`/assets/imgs/project/${image}`}
                                  alt={`Portfolio Image ${index + 1}`}
                                  width={1280}
                                  height={1000}
                                  className="demo-material-image"
                                  data-swiper-material-scale="1.25"
                                />
                                <div className="demo-material-label swiper-material-animate-opacity">
                                  <h2 className="title">Deeshape buzz</h2>
                                  <span className="tag">Branding - 2014</span>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>

                      <div className="slider-nav overflow-hidden">
                        <div
                          className="portfolio-button-prev nav-icon has_fade_anim"
                          data-fade-from="left"
                          data-on-scroll="0"
                          data-delay="0.30"
                        >
                          <i className="fa-solid fa-angle-left"></i>Prev
                        </div>
                        <div
                          className="portfolio-button-next nav-icon has_fade_anim"
                          data-fade-from="right"
                          data-on-scroll="0"
                          data-delay="0.30"
                        >
                          Next<i className="fa-solid fa-angle-right"></i>
                        </div>
                      </div>

                      <div
                        className="portfolio-pagination has_fade_anim"
                        data-fade-from="bottom"
                        data-fade-offset="0"
                        data-on-scroll="0"
                        data-delay="0.45"
                      ></div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
