import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import '../styles/pages/home.css'
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const clientImages = [
  "/assets/imgs/brand/img-s-1-light.webp",
  "/assets/imgs/brand/img-s-2-light.webp",
  "/assets/imgs/brand/img-s-3-light.webp",
  "/assets/imgs/brand/img-s-4-light.webp",
  "/assets/imgs/brand/img-s-5-light.webp",
  "/assets/imgs/brand/img-s-6-light.webp",
];
const skills = [
  {
    id: "pills-1",
    title: "Creativity",
    description:
      "Add the best talent on the market, an agile skilled management & seamless involvement",
    iconLight: "/assets/imgs/icon/icon-s-27.webp",
    iconDark: "/assets/imgs/icon/icon-s-27-light.webp",
    mainImage: "/assets/imgs/gallery/img-s-72.webp",
    smallImage: "/assets/imgs/gallery/img-s-73.webp",
  },
  {
    id: "pills-2",
    title: "Relationships",
    description:
      "Add the best talent on the market, an agile skilled management & seamless involvement",
    iconLight: "/assets/imgs/icon/icon-s-28.webp",
    iconDark: "/assets/imgs/icon/icon-s-28-light.webp",
    mainImage: "/assets/imgs/gallery/img-s-74.webp",
    smallImage: "/assets/imgs/gallery/img-s-73.webp",
  },
  {
    id: "pills-3",
    title: "Responsibility",
    description:
      "Add the best talent on the market, an agile skilled management & seamless involvement",
    iconLight: "/assets/imgs/icon/icon-s-29.webp",
    iconDark: "/assets/imgs/icon/icon-s-29-light.webp",
    mainImage: "/assets/imgs/gallery/img-s-72.webp",
    smallImage: "/assets/imgs/gallery/img-s-73.webp",
  },
  {
    id: "pills-4",
    title: "Cost effective",
    description:
      "Add the best talent on the market, an agile skilled management & seamless involvement",
    iconLight: "/assets/imgs/icon/icon-s-30.webp",
    iconDark: "/assets/imgs/icon/icon-s-30-light.webp",
    mainImage: "/assets/imgs/gallery/img-s-74.webp",
    smallImage: "/assets/imgs/gallery/img-s-73.webp",
  },
];
const works = [
  { id: 1, img: "/assets/imgs/project/img-s-6.webp" },
  { id: 2, img: "/assets/imgs/project/img-s-7.webp" },
  { id: 3, img: "/assets/imgs/project/img-s-8.webp" },
  { id: 4, img: "/assets/imgs/project/img-s-9.webp" },
  { id: 5, img: "/assets/imgs/project/img-s-10.webp" },
  { id: 6, img: "/assets/imgs/project/img-s-11.webp" },
];

const testimonials = [
  {
    id: 1,
    rating: 4.9,
    ratingLabel: "(out of 5 stars)",
    text: "We full service digital agency that build’s fascinating users experiences...",
    quoteIcon: "/assets/imgs/icon/quote-9.webp",
    avatar: "/assets/imgs/client/img-s-1.webp",
    name: "Ceyhan Özçivit",
    title: "Mid-Level Developer",
  },
  {
    id: 2,
    rating: 4.8,
    ratingLabel: "(out of 5 stars)",
    text: "We full service digital agency that build’s fascinating users experiences...",
    quoteIcon: "/assets/imgs/icon/quote-9.webp",
    avatar: "/assets/imgs/client/img-s-1.webp",
    name: "Ceyhan Özçivit",
    title: "Mid-Level Developer",
  },
  {
    id: 3,
    rating: 4.6,
    ratingLabel: "(out of 5 stars)",
    text: "We full service digital agency that build’s fascinating users experiences...",
    quoteIcon: "/assets/imgs/icon/quote-9.webp",
    avatar: "/assets/imgs/client/img-s-1.webp",
    name: "Ceyhan Özçivit",
    title: "Mid-Level Developer",
  },
];

const faqs = [
  {
    question: "How does the Agile Manifesto address planning?",
    answer:
      "People know what an FAQ is, so make that your page title. Don’t overcomplicate things by calling it something else. Sometimes people put the frequently asked question section on their contact page, but you can create your own page and put it right in your website navigation menu or footer so it’s easy to find.",
  },
  {
    question: "Reflects your audience’s need?",
    answer:
      "People know what an FAQ is, so make that your page title. Don’t overcomplicate things by calling it something else. Sometimes people put the frequently asked question section on their contact page, but you can create your own page and put it right in your website navigation menu or footer so it’s easy to find.",
  },
  {
    question: "What Is a Statement of Work in Project Management?",
    answer:
      "People know what an FAQ is, so make that your page title. Don’t overcomplicate things by calling it something else. Sometimes people put the frequently asked question section on their contact page, but you can create your own page and put it right in your website navigation menu or footer so it’s easy to find.",
  },
  {
    question: "When is an FAQ page appropriate?",
    answer:
      "People know what an FAQ is, so make that your page title. Don’t overcomplicate things by calling it something else. Sometimes people put the frequently asked question section on their contact page, but you can create your own page and put it right in your website navigation menu or footer so it’s easy to find.",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(skills[0].id);

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  return (
    <Layout>
      <main className="body-wrapper body-web-agency font-heading-teko-bold">
        {/* Hero Section   */}
        <section className="hero-area">
          <div className="container large">
            <div className="hero-area-inner">
              <div className="area-shape-1">
                <Image
                  width={500}
                  height={100}
                  className="show-light"
                  src="/assets/imgs/shape/img-s-64.webp"
                  alt="shape"
                />
                <Image
                  width={500}
                  height={100}
                  className="show-dark"
                  src="/assets/imgs/shape/img-s-64-dark.webp"
                  alt="shape"
                />
              </div>
              <div className="info-text has_word_anim" data-delay="0.75">
                BUILDING OUTSTANDING DESIGN & DEVELOPMENT
              </div>
              <div className="section-content">
                <div className="content-first">
                  <div className="section-title-wrapper">
                    <div className="title-wrapper">
                      <h1 className="section-title has_fade_anim">
                        We are Skilled in
                        <span className="marked">
                          Web <br />
                          Design
                        </span>
                        and <span className="rotated">development</span>
                        <span className="shape-1">
                          <Image
                            width={100}
                            height={100}
                            className="show-light has_fade_anim"
                            data-fade-offset="0"
                            src="/assets/imgs/shape/img-s-60.webp"
                            alt="shape"
                          />
                          <Image
                            width={100}
                            height={100}
                            className="show-dark has_fade_anim"
                            data-fade-offset="0"
                            src="/assets/imgs/shape/img-s-60-light.webp"
                            alt="shape"
                          />
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div className="content-bottom">
                    <div
                      className="scroll-down has_fade_anim"
                      data-fade-offset="0"
                      data-on-scroll="0"
                      data-delay="0.75"
                    >
                      <Image
                        width={50}
                        height={50}
                        className="show-light"
                        src="/assets/imgs/shape/img-s-61.webp"
                        alt="image"
                      />
                      <Image
                        width={50}
                        height={50}
                        className="show-dark"
                        src="/assets/imgs/shape/img-s-61-light.webp"
                        alt="image"
                      />
                    </div>
                    <div className="text-wrapper">
                      <p
                        className="text has_fade_anim"
                        data-on-scroll="0"
                        data-delay="0.30"
                      >
                        We are a full-service digital agency that builds
                        fascinating user experiences. our team creates and
                        exceptional UI design and functionality. 
                      </p>
                    </div>
                    <div className="btn-wrapper has_fade_anim">
                      <Link
                        href="contact-bold.html"
                        className="wc-btn wc-btn-underline btn-text-flip"
                      >
                        <span data-text="get started now">get started now</span>
                        <Image
                          width={20}
                          height={20}
                          className="show-light"
                          src="/assets/imgs/icon/arrow-right-half.webp"
                          alt="icon image"
                        />
                        <Image
                          width={50}
                          height={50}
                          className="show-dark"
                          src="/assets/imgs/icon/arrow-right-half-light.webp"
                          alt="icon image"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="content-last">
                  <div className="thumb-wrapper">
                    <div className="shape-1 has_fade_anim">
                      <Image
                        width={100}
                        height={100}
                        className="show-light"
                        src="/assets/imgs/shape/img-s-62.webp"
                        alt="shape"
                      />
                      <Image
                        width={100}
                        height={100}
                        className="show-dark"
                        src="/assets/imgs/shape/img-s-62-light.webp"
                        alt="shape"
                      />
                    </div>
                    <div className="video-btn-box">
                      <div
                        className="video-btn has_fade_anim"
                        data-fade-from="right"
                        data-delay="0.60"
                      >
                        <Link
                          href="https://crowdytheme.com/assets/wp-content/uploads/2024/05/insurance-video.mp4"
                          className="wc-btn wc-btn-circle video-popup"
                        >
                          <FaPlay className=" text-xl" />
                        </Link>
                        <span className="text">
                          Watch <br />
                          Video
                        </span>
                      </div>
                    </div>
                    <div className="hero-thumb">
                      <div className="thumb-1 has_fade_anim">
                        <Image
                          width={250}
                          height={100}
                          src="/assets/imgs/gallery/img-s-68.webp"
                          alt="image"
                        />
                      </div>
                      <div
                        className="thumb-2 has_fade_anim"
                        data-fade-from="top"
                      >
                        <Image
                          width={250}
                          height={100}
                          src="/assets/imgs/gallery/img-s-69.webp"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="customer-wrapper-box">
                    <div className="customer-wrapper">
                      <div className="icon">
                        <Image
                          width={100}
                          height={100}
                          className="show-light"
                          src="/assets/imgs/shape/img-s-63.webp"
                          alt="shape"
                        />
                        <Image
                          width={100}
                          height={100}
                          className="show-dark"
                          src="/assets/imgs/shape/img-s-63-light.webp"
                          alt="shape"
                        />
                      </div>
                      <div className="thumb">
                        <Image
                          width={100}
                          height={100}
                          className="show-light"
                          src="/assets/imgs/client/img-s-3.webp"
                          alt="image"
                        />
                        <Image
                          width={100}
                          height={100}
                          className="show-dark"
                          src="/assets/imgs/client/img-s-3-light.webp"
                          alt="image"
                        />
                      </div>
                      <p className="text">
                        <span className="text-underline">We have 18k+</span>
                        customers <br />
                        word-wide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company icons  */}
        <div className="container-hd">
          <div className="clients-area">
            <div className="container">
              <div className="clients-area-inner">
                <div className="shape-1">
                  <Image
                    width={100}
                    height={100}
                    src="/assets/imgs/shape/img-s-65.webp"
                    alt="shape"
                  />
                </div>
                <div className="client-slider has_fade_anim">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={5} // Show multiple logos at once
                    loop={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                    }}
                    speed={4000} // Controls the continuous scrolling speed
                    allowTouchMove={false} // Prevents manual sliding
                    className="swiper client-slider-active"
                  >
                    <div className="swiper-wrapper">
                      {clientImages.map((image, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                          <div className="client-box">
                            <Image
                              width={100}
                              height={100}
                              src={image}
                              alt={`client image ${index + 1}`}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About us section  */}
        <section className="about-area">
          <div className="container">
            <div className="about-area-inner section-spacing">
              <div className="shape-1 has_fade_anim" data-fade-offset="0">
                <Image
                  width={300}
                  height={100}
                  className="show-light"
                  src="/assets/imgs/shape/img-s-66.webp"
                  alt="image"
                />
                <Image
                  width={100}
                  height={100}
                  className="show-dark"
                  src="/assets/imgs/shape/img-s-66-light.webp"
                  alt="image"
                />
              </div>
              <div className="section-content">
                <div className="section-title-wrapper">
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle has_fade_anim">
                      01. Who we are
                    </span>
                  </div>
                  <div className="title-wrapper has_fade_anim">
                    <h2 className="section-title">
                      Have a brilliant idea boost the
                      <span>growth development</span> agency your branding!
                    </h2>
                  </div>
                </div>
                <div className="content-bottom">
                  <div
                    className="clients-wrapper has_fade_anim"
                    data-fade-from="left"
                  >
                    <div className="thumb">
                      <Image
                        width={100}
                        height={100}
                        className="show-light"
                        src="/assets/imgs/client/img-s-4.webp"
                        alt="image"
                      />
                      <Image
                        width={100}
                        height={100}
                        className="show-dark"
                        src="/assets/imgs/client/img-s-4-dark.webp"
                        alt="image"
                      />
                    </div>
                    <div className="info">
                      <h3 className="number">32k+</h3>
                      <p className="text">happy clients of our Services </p>
                    </div>
                  </div>
                  <div className="info-wrapper">
                    <div className="text-wrapper">
                      <p className="text has_fade_anim">
                        Consumers today rely heavily on digital means to
                        research products. We research a brand of bldend
                        engaging with it, according to the meanwhile, 51% of
                        consumers
                      </p>
                    </div>
                    <div
                      className="btn-wrapper has_fade_anim"
                      // data-fade-from="top"
                      // data-fade-offset="100"
                      // data-ease="bounce"
                    >
                      <div className="btn-wrapper btn-move">
                        <Link
                          href="about-bold.html"
                          className="wc-btn wc-btn-circle btn-hover-bgchange btn-item"
                        >
                          Explore Us
                          <br />
                          More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-gallery-wrapper">
                <div className="thumb-1 has_fade_anim">
                  <Image
                    width={500}
                    height={100}
                    src="/assets/imgs/gallery/img-s-70.webp"
                    alt="image"
                  />
                </div>
                <div className="thumb-2">
                  <Image
                    width={500}
                    height={100}
                    src="/assets/imgs/gallery/img-s-71.webp"
                    className="has_fade_anim"
                    data-fade-from="right"
                    data-fade-offset="50"
                    data-delay="0.45"
                    alt="image"
                  />
                  <div
                    className="about-service-box has_fade_anim"
                    data-fade-from="top"
                    data-fade-offset="0"
                    data-delay="0.90"
                  >
                    <div className="thumb">
                      <Image
                        width={20}
                        height={20}
                        className="show-light"
                        src="/assets/imgs/shape/img-s-67.webp"
                        alt="image"
                      />
                      <Image
                        width={20}
                        height={20}
                        className="show-dark"
                        src="/assets/imgs/shape/img-s-67-light.webp"
                        alt="image"
                      />
                    </div>
                    <p className="text">
                      Make your business prosper with our great team of experts.
                      We’ll make your.
                    </p>
                    <div className="counts">
                      <span className="number">1.8</span>
                      <span className="x">x</span>
                      <span className="text">Faster Service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section  */}
        <section className="feature-area">
          <div className="container">
            <div className="feature-area-inner section-spacing-top">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div
                    className="shape-1 has_fade_anim"
                    data-fade-offset="0"
                    data-delay="0.8"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="/assets/imgs/shape/img-s-68.webp"
                      alt="image"
                    />
                  </div>
                  <div className="title-wrapper">
                    <h2 className="section-title has_text_move_anim">
                      take charge steering your product
                    </h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim">
                    Our ability to combine expertise and systems thinking is
                    what fuels us as a team.
                  </p>
                </div>
              </div>
              <div className="features-wrapper-box">
                <div className="features-wrapper">
                  <div
                    className="feature-box has_fade_anim"
                    data-fade-from="left"
                    data-delay="0.15"
                  >
                    <div className="thumb">
                      <Image
                        width={100}
                        height={100}
                        src="/assets/imgs/icon/icon-s-24.webp"
                        alt="feature icon"
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">
                        Dedicated <br />
                        Team
                      </h3>
                      <p className="text">
                        Find the best fit engineers led by senior, seasoned, and
                        skilled our tech- lead.
                      </p>
                    </div>
                  </div>
                  <div
                    className="feature-box has_fade_anim"
                    data-fade-from="right"
                    data-delay="0.30"
                  >
                    <div className="thumb">
                      <Image
                        width={100}
                        height={100}
                        src="/assets/imgs/icon/icon-s-25.webp"
                        alt="feature icon"
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">
                        Product <br />
                        Team
                      </h3>
                      <p className="text">
                        Get top-notch service from an experienced Product
                        Designer Manager team.
                      </p>
                    </div>
                  </div>
                  <div
                    className="feature-box has_fade_anim"
                    data-fade-from="left"
                    data-delay="0.45"
                  >
                    <div className="thumb">
                      <Image
                        width={100}
                        height={100}
                        src="/assets/imgs/icon/icon-s-26.webp"
                        alt="feature icon"
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">
                        End-to-End <br />
                        Team
                      </h3>
                      <p className="text">
                        Hire an elite squad of leading have professionals to
                        turn idea into an ready-to-market product
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Area  */}
        <section className="skill-area">
          <div className="container">
            <div className="skill-area-inner section-spacing-top">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title has_text_move_anim">
                      Empowering skills to help you!
                    </h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim">
                    Add the best talent on the market, an agile skilled
                    management & seamless involvement
                  </p>
                </div>
              </div>
              <div className="skills-wrapper-box">
                <div className="skills-wrapper">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    {skills.map((skill) => (
                      <li
                        key={skill.id}
                        className="nav-item has_fade_anim"
                        role="presentation"
                      >
                        <div
                          className={`nav-link ${
                            activeTab === skill.id ? "active" : ""
                          }`}
                          id={`${skill.id}-tab`}
                          onClick={() => setActiveTab(skill.id)}
                          role="tab"
                          aria-controls={skill.id}
                          aria-selected={activeTab === skill.id}
                        >
                          <div className="skill-nav">
                            <div className="icon">
                              <Image
                                className="show-light"
                                src={skill.iconLight}
                                alt="icon"
                                width={50}
                                height={50}
                              />
                              <Image
                                className="show-dark"
                                src={skill.iconDark}
                                alt="icon"
                                width={50}
                                height={50}
                              />
                            </div>
                            <div className="content">
                              <h3 className="title">{skill.title}</h3>
                              <p className="text">{skill.description}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    {skills.map((skill) => (
                      <div
                        key={skill.id}
                        className={`tab-pane fade ${
                          activeTab === skill.id ? "show active" : ""
                        }`}
                        id={skill.id}
                        role="tabpanel"
                        aria-labelledby={`${skill.id}-tab`}
                      >
                        <div
                          className="skill-thumb has_fade_anim"
                          data-fade-offset="0"
                          data-delay="0.45"
                        >
                          <Image
                            className="main-image"
                            src={skill.mainImage}
                            alt="image"
                            width={600}
                            height={600}
                          />
                          <Image
                            className="small-image"
                            src={skill.smallImage}
                            alt="image"
                            width={250}
                            height={250}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise area   */}
        <div className="enterprise-area">
          <div className="container">
            <div className="enterprise-area-inner section-spacing">
              <div className="section-header">
                <div className="text-wrapper">
                  <p className="text has_text_move_anim">
                    Our Arolax Technology Expertise includes
                  </p>
                </div>
              </div>
              <div className="expertise-wrapper-box">
                <div className="expertise-wrapper">
                  <div
                    className="expertise-box has_fade_anim"
                    data-fade-from="right"
                  >
                    <div className="icon">
                      <Image
                        width={50}
                        height={50}
                        className="show-light"
                        src="/assets/imgs/icon/icon-s-31.webp"
                        alt="icon"
                      />
                      <Image
                        width={50}
                        height={50}
                        className="show-dark"
                        src="/assets/imgs/icon/icon-s-31-light.webp"
                        alt="icon"
                      />
                    </div>
                    <p className="name">WordPress</p>
                  </div>
                  <div
                    className="expertise-box has_fade_anim"
                    data-fade-from="right"
                  >
                    <div className="icon">
                      <Image
                        width={50}
                        height={50}
                        className="show-light"
                        src="/assets/imgs/icon/icon-s-32.webp"
                        alt="icon"
                      />
                      <Image
                        width={50}
                        height={50}
                        className="show-dark"
                        src="/assets/imgs/icon/icon-s-32-light.webp"
                        alt="icon"
                      />
                    </div>
                    <p className="name">React.js</p>
                  </div>
                  <div
                    className="expertise-box has_fade_anim"
                    data-fade-from="right"
                  >
                    <div className="icon">
                      <Image
                        width={50}
                        height={50}
                        className="show-light"
                        src="/assets/imgs/icon/icon-s-33.webp"
                        alt="icon"
                      />
                      <Image
                        width={50}
                        height={50}
                        className="show-dark"
                        src="/assets/imgs/icon/icon-s-33-light.webp"
                        alt="icon"
                      />
                    </div>
                    <p className="name">Node.js</p>
                  </div>
                  <div
                    className="expertise-box has_fade_anim"
                    data-fade-from="left"
                  >
                    <div className="icon">
                      <Image
                        width={50}
                        height={50}
                        className="show-light"
                        src="/assets/imgs/icon/icon-s-34.webp"
                        alt="icon"
                      />
                      <Image
                        width={50}
                        height={50}
                        className="show-dark"
                        src="/assets/imgs/icon/icon-s-34-light.webp"
                        alt="icon"
                      />
                    </div>
                    <p className="name">Flutter</p>
                  </div>
                  <div
                    className="expertise-box has_fade_anim"
                    data-fade-from="left"
                  >
                    <div className="icon">
                      <Image
                        width={50}
                        height={50}
                        className="show-light"
                        src="/assets/imgs/icon/icon-s-35.webp"
                        alt="icon"
                      />
                      <Image
                        width={50}
                        height={50}
                        className="show-dark"
                        src="/assets/imgs/icon/icon-s-35-light.webp"
                        alt="icon"
                      />
                    </div>
                    <p className="name">Redux</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work-area has_fade_anim overflow-hidden">
          <div className="container-hd">
            <div className="work-area-inner">
              <div className="works-wrapper-box">
                <div className="works-wrapper">
                  {/* 🔵 Top Swiper - Moves Right to Left (Non-Draggable) */}
                  <Swiper
                    modules={[Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={30}
                    allowTouchMove={true}
                    loop={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                    }}
                    speed={4000}
                    freeMode={true}
                    className="swiper work-slider-active"
                    dir="rtl"
                  >
                    {[...works, ...works].map((work, index) => (
                      <SwiperSlide key={`rtl-${index}`} className="w-auto">
                        <Link href="work-details-bold.html">
                          <div className="work-box">
                            <div className="thumb">
                              <Image
                                src={work.img}
                                alt="Work Image"
                                width={1024}
                                height={200}
                                unoptimized
                              />
                            </div>
                            <div className="content">
                              <div className="icon">
                                <Image
                                  src="/assets/imgs/shape/img-s-69.webp"
                                  alt="Icon"
                                  width={50}
                                  height={50}
                                  unoptimized
                                />
                              </div>
                              <h3 className="title">Mastartery</h3>
                              <span className="meta">Design - 2019</span>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <Swiper
                    modules={[Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                    }}
                    speed={4000}
                    allowTouchMove={true} // 🔹 ENABLE manual drag
                    freeMode={true}
                    className="swiper work-slider-active mt-10"
                    dir="ltr"
                  >
                    {[...works, ...works].map((work, index) => (
                      <SwiperSlide key={`ltr-${index}`} className="w-auto">
                        <Link href="work-details-bold.html">
                          <div className="work-box">
                            <div className="thumb">
                              <Image
                                src={work.img}
                                alt="Work Image"
                                width={1024}
                                height={200}
                                unoptimized
                              />
                            </div>
                            <div className="content">
                              <div className="icon">
                                <Image
                                  src="/assets/imgs/shape/img-s-69.webp"
                                  alt="Icon"
                                  width={50}
                                  height={50}
                                  unoptimized
                                />
                              </div>
                              <h3 className="title">Mastartery</h3>
                              <span className="meta">Design - 2019</span>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="service-area">
          <div className="container">
            <div className="service-area-inner section-spacing">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div
                    className="shape-1 has_fade_anim"
                    data-fade-offset="0"
                    data-delay="0.9"
                  >
                    <Image
                      width={100}
                      height={100}
                      src="/assets/imgs/shape/img-s-68.webp"
                      alt="image"
                    />
                  </div>
                  <div className="title-wrapper has_text_move_anim">
                    <h2 className="section-title">
                      we <span>provide</span> premium arolax service
                    </h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim">
                    Our ability to combine expertise and systems thinking is
                    what fuels us as a team.
                  </p>
                </div>
              </div>
              <div className="services-wrapper-box">
                <div className="services-wrapper">
                  <div className="has_fade_anim">
                    <Link href="service-details-bold.html">
                      <div className="service-box">
                        <span className="number">01.</span>
                        <div className="content">
                          <h3 className="title">
                            Project <br />
                            Management
                          </h3>
                          <div className="content-last">
                            <p className="text">
                              Creative Design team on demand that can design,
                              build, ship and scale your real has development
                              agency.
                            </p>
                            <div className="feature-list">
                              <ul>
                                <li>+ Mobile & Web Design</li>
                                <li>+ Interation Design</li>
                                <li>+ UX Research & Plan</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="icon">
                          <Image
                            width={100}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/icon-s-36.webp"
                            alt="icon"
                          />
                          <Image
                            width={100}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/icon-s-36-light.webp"
                            alt="icon"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="has_fade_anim">
                    <Link href="service-details-bold.html">
                      <div className="service-box">
                        <span className="number">02.</span>
                        <div className="content">
                          <h3 className="title">
                            Product <br />
                            Management
                          </h3>
                          <div className="content-last">
                            <p className="text">
                              Creative Design team on demand that can design,
                              build, ship and scale your real has development
                              agency.
                            </p>
                            <div className="feature-list">
                              <ul>
                                <li>+ Mobile & Web Design</li>
                                <li>+ Interation Design</li>
                                <li>+ UX Research & Plan</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="icon">
                          <Image
                            width={100}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/icon-s-37.webp"
                            alt="icon"
                          />
                          <Image
                            width={100}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/icon-s-37-light.webp"
                            alt="icon"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="has_fade_anim">
                    <Link href="service-details-bold.html">
                      <div className="service-box">
                        <span className="number">03.</span>
                        <div className="content">
                          <h3 className="title">
                            Web <br />
                            Design
                          </h3>
                          <div className="content-last">
                            <p className="text">
                              Creative Design team on demand that can design,
                              build, ship and scale your real has development
                              agency.
                            </p>
                            <div className="feature-list">
                              <ul>
                                <li>+ Mobile & Web Design</li>
                                <li>+ Interation Design</li>
                                <li>+ UX Research & Plan</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="icon">
                          <Image
                            width={100}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/icon-s-38.webp"
                            alt="icon"
                          />
                          <Image
                            width={100}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/icon-s-38-light.webp"
                            alt="icon"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="has_fade_anim">
                    <Link href="service-details-bold.html">
                      <div className="service-box">
                        <span className="number">04.</span>
                        <div className="content">
                          <h3 className="title">
                            Backend <br />
                            Development
                          </h3>
                          <div className="content-last">
                            <p className="text">
                              Creative Design team on demand that can design,
                              build, ship and scale your real has development
                              agency.
                            </p>
                            <div className="feature-list">
                              <ul>
                                <li>+ Mobile & Web Design</li>
                                <li>+ Interation Design</li>
                                <li>+ UX Research & Plan</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="icon">
                          <Image
                            width={100}
                            height={100}
                            className="show-light"
                            src="/assets/imgs/icon/icon-s-39.webp"
                            alt="icon"
                          />
                          <Image
                            width={100}
                            height={100}
                            className="show-dark"
                            src="/assets/imgs/icon/icon-s-39-light.webp"
                            alt="icon"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="image-wrapper overflow-hidden">
          <Image
            width={1280}
            height={100}
            className="w-100"
            data-speed="0.8"
            src="/assets/imgs/gallery/img-s-19.webp"
            alt="gallery image"
          />
        </div>

        <section className="testimonial-area">
          <div className="container">
            <div className="testimonial-area-inner section-spacing">
              <div className="section-content">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title has_text_move_anim">
                      Trusted clients testimonial
                    </h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim">
                    Consumers today rely heavily on digital means to research
                    products. We research a brand of blend
                  </p>
                </div>
                <div
                  className="btn-wrapper has_fade_anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-fade-offset="50"
                >
                  <div className="btn-wrapper btn-move">
                    <Link
                      href="about-bold.html"
                      className="wc-btn wc-btn-circle btn-hover-bgchange btn-item"
                    >
                      Explore Us <br /> More
                    </Link>
                  </div>
                </div>
              </div>

              {/* Testimonial Slider */}
              <div className="testimonial-wrapper-box">
                <div className="testimonial-wrapper">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    onSwiper={setSwiperInstance}
                    className="swiper testimonial-slider-active has_fade_anim"
                    data-fade-from="right"
                    data-delay="0.45"
                  >
                    {testimonials.map((testimonial) => (
                      <SwiperSlide
                        key={testimonial.id}
                        className="swiper-slide"
                      >
                        <div className="testimonial-box">
                          <div className="content">
                            <span className="rating">
                              {testimonial.rating}
                              <Image
                                width={25}
                                height={25}
                                src="/assets/imgs/icon/star-5.webp"
                                alt="icon"
                              />
                            </span>
                            <p className="rating-label">
                              {testimonial.ratingLabel}
                            </p>
                            <p className="text">{testimonial.text}</p>
                            <div className="icon">
                              <Image
                                width={100}
                                height={100}
                                src={testimonial.quoteIcon}
                                alt="icon"
                              />
                            </div>
                          </div>
                          <div className="author">
                            <div className="avatar">
                              <Image
                                width={100}
                                height={100}
                                src={testimonial.avatar}
                                alt="image"
                              />
                            </div>
                            <div>
                              <h2 className="name">{testimonial.name}</h2>
                              <span className="meta-title">
                                {testimonial.title}
                              </span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Navigation Buttons */}
                <div className="slider-nav">
                  <div
                    ref={prevRef}
                    className="testimonial-button-prev nav-icon"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                  <div
                    ref={nextRef}
                    className="testimonial-button-next nav-icon"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-area">
          <div className="container">
            <div className="team-area-inner section-spacing">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title has_text_move_anim">
                      Introducing arolax skilled team!
                    </h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim">
                    Our ability to combine expertise and systems thinking is
                    what fuels us as a team.
                  </p>
                </div>
              </div>
              <div className="team-wrapper-box">
                <div className="team-wrapper">
                  <div
                    className="team-box has_fade_anim"
                    data-fade-from="bottom"
                    data-delay="0.15"
                    data-fade-offset="30"
                    data-duration="0.75"
                  >
                    <Link href="team-details-bold.html">
                      <div className="thumb">
                        <Image
                          width={1280}
                          height={100}
                          src="/assets/imgs/team/img-s-1.webp"
                          alt="team icon"
                        />
                      </div>
                      <div className="content">
                        <h3 className="title">Kamal Abraham</h3>
                        <p className="text">CEO, Wealcoder</p>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="team-box has_fade_anim"
                    data-fade-from="top"
                    data-delay="0.30"
                    data-fade-offset="30"
                    data-duration="0.75"
                  >
                    <Link href="team-details-bold.html">
                      <div className="thumb">
                        <Image
                          width={1280}
                          height={100}
                          src="/assets/imgs/team/img-s-2.webp"
                          alt="team icon"
                        />
                      </div>
                      <div className="content">
                        <h3 className="title">Selina Gomaze</h3>
                        <p className="text">Junior Executive</p>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="team-box has_fade_anim"
                    data-fade-from="bottom"
                    data-delay="0.45"
                    data-fade-offset="30"
                    data-duration="0.75"
                  >
                    <Link href="team-details-bold.html">
                      <div className="thumb">
                        <Image
                          width={1280}
                          height={100}
                          src="/assets/imgs/team/img-s-3.webp"
                          alt="team icon"
                        />
                      </div>
                      <div className="content">
                        <h3 className="title">Pedrik Vadra</h3>
                        <p className="text">Sr. Developer</p>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="team-box has_fade_anim"
                    data-fade-from="top"
                    data-delay="0.60"
                    data-fade-offset="30"
                    data-duration="0.75"
                  >
                    <Link href="team-details-bold.html">
                      <div className="thumb">
                        <Image
                          width={1280}
                          height={100}
                          src="/assets/imgs/team/img-s-4.webp"
                          alt="team icon"
                        />
                      </div>
                      <div className="content">
                        <h3 className="title">Thomas Ribbon</h3>
                        <p className="text">UX Designer</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-area py-16 bg-gray-100">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="faq-area-inner section-spacing">
              <div className="section-content">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title has_text_move_anim">
                      frequently asked questions
                    </h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text has_fade_anim">
                    Frequently asked question (FAQ) pages to find answars.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition flex justify-between items-center"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <span className="text-gray-500">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: openIndex === index ? "auto" : 0,
                        opacity: openIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-gray-50 text-gray-700">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-area">
          <div className="container">
            <div className="contact-area-inner section-spacing">
              <div className="shape-1">
                <Image
                  width={100}
                  height={100}
                  src="/assets/imgs/shape/img-s-70.webp"
                  alt="shape"
                />
              </div>
              <div className="section-content">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title has_text_move_anim">
                      Let’s start your experience with Arolax
                    </h2>
                  </div>
                </div>
                <div className="btn-wrapper has_fade_anim">
                  <Link
                    href="contact-bold.html"
                    className="wc-btn wc-btn-underline btn-text-flip"
                  >
                    <span data-text="Let’s get in touch">
                      Let’s get in touch
                    </span>
                    <Image
                      width={100}
                      height={100}
                      src="/assets/imgs/icon/arrow-right-half-light.webp"
                      alt="icon image"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-area">
          <div className="container">
            <div className="blog-area-inner section-spacing">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="title-wrapper">
                    <h2 className="section-title has_text_move_anim">
                      journal insight of arolax
                    </h2>
                  </div>
                </div>
                <div
                  className="content-last has_fade_anim"
                  data-fade-from="right"
                  data-delay="0.45"
                >
                  <div className="text-wrapper">
                    <p className="text">
                      Our ability to combine expertise and systems thinking is
                      what fuels us as a team.
                    </p>
                  </div>
                  <div className="btn-wrapper">
                    <Link
                      href="blog-bold.html"
                      className="wc-btn wc-btn-underline btn-text-flip"
                    >
                      <span data-text="All blog">All blog</span>
                      <Image
                        width={100}
                        height={100}
                        className="show-light"
                        src="/assets/imgs/icon/arrow-right-half.webp"
                        alt="icon image"
                      />
                      <Image
                        width={100}
                        height={100}
                        className="show-dark"
                        src="/assets/imgs/icon/arrow-right-half-light.webp"
                        alt="icon image"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blogs-wrapper-box">
                <div className="blogs-wrapper">
                  <div
                    className="has_fade_anim"
                    data-fade-from="left"
                    data-delay="0.15"
                  >
                    <Link href="blog-details-bold.html">
                      <article className="blog">
                        <h2 className="title text-underline">
                          Arolax the quest exceptional talent our team
                        </h2>
                        <div className="thumb">
                          <Image
                            width={1280}
                            height={100}
                            src="/assets/imgs/blog/img-s-12.webp"
                            alt="blog image"
                          />
                        </div>
                        <p className="text">
                          We lead by the design philosophy that every deal only
                          visually...
                        </p>
                        <div className="meta-list">
                          <h3 className="name">Oliver Kugar</h3>
                          <span className="meta">jQuery, Ajax - 01 nov</span>
                        </div>
                      </article>
                    </Link>
                  </div>
                  <div
                    className="has_fade_anim"
                    data-fade-from="left"
                    data-delay="0.30"
                  >
                    <Link href="blog-details-bold.html">
                      <article className="blog">
                        <h2 className="title text-underline">
                          Arolax selected 32+ best web agency and development
                          tool
                        </h2>
                        <div className="thumb">
                          <Image
                            width={1280}
                            height={100}
                            src="/assets/imgs/blog/img-s-13.webp"
                            alt="blog image"
                          />
                        </div>
                        <p className="text">
                          We lead by the design philosophy that every deal only
                          visually...
                        </p>
                        <div className="meta-list">
                          <h3 className="name">Tuya Terekh</h3>
                          <span className="meta">jQuery, Ajax - 01 nov</span>
                        </div>
                      </article>
                    </Link>
                  </div>
                  <div
                    className="has_fade_anim"
                    data-fade-from="left"
                    data-delay="0.45"
                  >
                    <Link href="blog-details-bold.html">
                      <article className="blog">
                        <h2 className="title text-underline">
                          arolax development tech agency we talent meet
                          opportunity
                        </h2>
                        <div className="thumb">
                          <Image
                            width={1280}
                            height={100}
                            src="/assets/imgs/blog/img-s-14.webp"
                            alt="blog image"
                          />
                        </div>
                        <p className="text">
                          We lead by the design philosophy that every deal only
                          visually...
                        </p>
                        <div className="meta-list">
                          <h3 className="name">Oliver Kugar</h3>
                          <span className="meta">jQuery, Ajax - 01 nov</span>
                        </div>
                      </article>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-area">
          <div className="container">
            <div className="cta-area-inner section-spacing">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle has_fade_anim">
                      🖐️ Hello
                      <Image
                        width={100}
                        height={100}
                        className="show-light"
                        src="/assets/imgs/shape/img-s-6.webp"
                        alt="image"
                      />
                      <Image
                        width={100}
                        height={100}
                        className="show-dark"
                        src="/assets/imgs/shape/img-s-6-light.webp"
                        alt="image"
                      />
                    </span>
                  </div>
                  <div className="title-wrapper">
                    <h2 className="section-title has_fade_anim">
                      Let’s Talk with us
                    </h2>
                  </div>
                </div>
                <div className="btn-wrapper has_fade_anim">
                  <Link
                    href="mailto:hello@example.com"
                    className="wc-btn wc-btn-underline"
                  >
                    hello@example.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
