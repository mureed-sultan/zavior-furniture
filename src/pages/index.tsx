import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const sectionRef = useRef(null);
  const imagesRef = useRef<any>([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 80%", // Trigger when 80% of the section is visible
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    AOS.init({ duration: 1000, once: true });
  }, []);

  const setImageRef = (el: HTMLDivElement | null, index: number) => {
    if (el) imagesRef.current[index] = el;
  };

  const products = [
    {
      id: 1,
      img: "/assets/img/home-v2/product/pdct-01.jpg",
      title: "Luxury Sofa Set",
      count: 26,
    },
    {
      id: 2,
      img: "/assets/img/home-v2/product/pdct-02.jpg",
      title: "Table & Chair",
      count: 40,
    },
    {
      id: 3,
      img: "/assets/img/home-v2/product/pdct-03.jpg",
      title: "Vases & Lamp",
      count: 14,
    },
    {
      id: 4,
      img: "/assets/img/home-v2/product/pdct-04.jpg",
      title: "Interior Collection",
      count: 32,
    },
  ];

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <Layout>
          <div
            ref={sectionRef}
            className="relative pt-36 sm:pt-52 lg:pt-[250px] pb-12 sm:pb-16 lg:pb-36 2xl:py-[360px] bg-[#F5FAFE] dark:bg-dark-secondary overflow-hidden"
          >
            {/* Background Shape with GSAP Animation */}
            <div className="absolute -z-[1] top-0 left-0 w-[60%] 2xl:w-[955px]">
              <svg
                className="fill-current text-[#85A3B4] dark:text-title w-[100%]"
                viewBox="0 0 955 780"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M830.97 723.759C971.43 620.07 992.216 359.628 893.195 163.09C862.083 101.856 819.328 46.7521 768.467 0H0V470.225C59.4825 536.72 135.112 598.064 218.046 647.736C429.653 775.193 690.606 828.224 830.97 723.759Z"
                />
              </svg>
            </div>

            {/* Image Elements with Animation */}
            <div
              ref={(el) => setImageRef(el, 0)}
              className="absolute bottom-0 left-0 -z-[1] hidden 2xl:block"
            >
              <Image
                src="/assets/img/home-v2/banner-shape-01.png"
                alt="banner-shape"
                width={400}
                height={400}
              />
            </div>

            <div
              ref={(el) => setImageRef(el, 1)}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-[1] w-[17%] hidden lg:block"
            >
              <Image
                src="/assets/img/home-v2/banner-shape-02.png"
                alt="banner-shape"
                width={400}
                height={400}
              />
            </div>

            <div
              ref={(el) => setImageRef(el, 2)}
              className="absolute bottom-0 right-0 z-[1] w-[40%] md:w-40 lg:w-64 2xl:w-auto"
            >
              <Image
                src="/assets/img/home-v2/banner-shape-03.png"
                alt="banner-shape"
                width={400}
                height={400}
              />
            </div>

            {/* Main Content */}
            <div className="container">
              <div className="max-w-1366 mx-auto flex flex-col gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.h4
                    className="leading-none font-medium dark:text-white"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    All product in Store
                  </motion.h4>

                  <motion.h2
                    className="leading-none text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-6 dark:text-white"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  >
                    Get <span className="text-tertiary">25%</span> Off
                  </motion.h2>

                  <motion.p
                    className="mt-4 md:mt-5 dark:text-white-light md:max-w-[350px] lg:max-w-xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur purus integer
                    elementum in. Tellus vulputate habitasse ut diam. Auctor sit
                    elementum habitant vel tempor varius.
                  </motion.p>

                  <motion.div
                    className="button"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
                  >
                    <a
                      className="btn btn-outline mt-6"
                      href="#"
                      data-text="Let's Shop Now"
                    >
                      <span>Let's Shop Now</span>
                    </a>
                  </motion.div>
                </motion.div>

                {/* Product Image */}
                <motion.div
                  className="relative md:absolute bottom-0 right-0 2xl:right-24 w-full md:max-w-[400px] lg:max-w-[40%] 2xl:w-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <Image
                    src="/assets/img/home-v2/banner-shape-04.png"
                    alt="thumb"
                    width={400}
                    height={400}
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="s-py-100-50" id="sec-2">
            <div className="container">
              <div className="max-w-[1365px] mx-auto flex 2xl:items-center gap-[30px] md:gap-10 justify-between flex-col 2xl:flex-row">
                <div className="2xl:max-w-[360px] w-full" data-aos="fade-up">
                  <svg
                    width="67"
                    height="65"
                    viewBox="0 0 67 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.758 51.3601C12.1788 55.3028 11.7852 59.3357 11.7852 63H17.2873C17.2873 63 18.121 58.2701 19.53 52.2941"
                      stroke="#85A3B4"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M54.2173 51.3601C54.7965 55.3028 55.1902 59.3357 55.1902 63H49.688C49.688 63 48.8543 58.2701 47.4453 52.2941"
                      stroke="#85A3B4"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M60.6476 46.513C62.8649 40.3526 64.1991 33.2862 64.9036 28.7084C64.9492 28.4106 64.972 28.1129 64.972 27.8202C64.972 25.3672 63.4186 23.1334 61.0378 22.3174C57.8613 21.2277 54.4327 23.0485 53.5369 26.2858C53.0123 28.1813 52.5195 30.405 52.2483 32.7477C51.9176 35.6087 49.2682 37.6221 46.4249 37.1659C43.4448 36.687 39.2028 36.2689 33.4858 36.2689C27.7689 36.2689 23.5268 36.687 20.5467 37.1659C17.7035 37.6221 15.0541 35.6087 14.7234 32.7477C14.4522 30.405 13.9593 28.1813 13.4348 26.2858C12.7151 23.6871 10.3635 22.0006 7.82049 22.0006C7.19584 22.0006 6.55978 22.102 5.93385 22.3174C3.26798 23.2309 1.63983 25.9222 2.06809 28.7084C2.84099 33.7335 4.37412 41.7565 6.99817 48.2894C7.56201 49.6933 8.81259 50.7056 10.3039 50.9603C14.7297 51.7155 24.7014 53.2334 33.4858 53.2334C42.2703 53.2334 52.242 51.7155 56.6678 50.9603C57.5167 50.8159 58.2871 50.4243 58.8978 49.8567"
                      stroke="#85A3B4"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.67188 22.0039C7.67314 19.2379 7.75677 16.472 7.92402 13.7047C8.08113 11.1212 9.02128 8.75057 10.5101 6.83352"
                      stroke="#85A3B4"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.2656 4.23101C15.094 2.96902 17.2771 2.18979 19.6402 2.07449C28.8719 1.62342 38.1036 1.62342 47.3353 2.07449C53.6351 2.38238 58.6665 7.4113 59.0479 13.7047C59.2152 16.472 59.2988 19.2379 59.3001 22.0039"
                      stroke="#85A3B4"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.6133 31.8984C16.3972 30.2599 20.5919 27.5935 29.3709 26.9441C30.6434 26.8501 32.0123 26.7987 33.4841 26.7987C45.1101 26.7987 50.3114 30.0217 52.3549 31.8984"
                      stroke="#85A3B4"
                      stroke-width="2.2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h2 className="mt-[15px] leading-none">Popular Collection</h2>
                  <p className="mt-[10px] md:mt-[15px]">
                    Lorem ipsum dolor sit amet, consectetur purusvel tempor
                    varius.{" "}
                  </p>
                  <a
                    className="btn btn-outline mt-4 md:mt-6"
                    href="shop-v2.html"
                    data-text="See all Product"
                  >
                    <span>See all Product</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 lg::gap-8 2xl:max-w-[903px] w-full">
                  <div
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        width={100}
                        height={100}
                        className="w-full transform duration-300 group-hover:scale-110"
                        src="/assets/img/shortcode/product-card/pdct-01.jpg"
                        alt="product-card"
                      />
                      <button className="absolute z-10 top-3 left-3 btn-tag">
                        -10%
                      </button>
                      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 flex gap-2">
                        <a
                          href="#"
                          className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                        >
                          <svg
                            className="dark:text-white fill-current"
                            width="20"
                            height="24"
                            viewBox="0 0 19 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.8186 5.5949H15.231C14.8937 2.72995 12.451 0.5 9.49699 0.5C6.54292 0.5 4.10026 2.72995 3.76293 5.5949H1.17532C0.706336 5.5949 0.326172 5.97506 0.326172 6.44405V21.3891C0.326172 21.8581 0.706336 22.2382 1.17532 22.2382H17.8186C18.2876 22.2382 18.6678 21.8581 18.6678 21.3891V6.44405C18.6678 5.97506 18.2876 5.5949 17.8186 5.5949ZM9.49699 2.1983C11.513 2.1983 13.1916 3.66966 13.516 5.5949H5.478C5.80238 3.66966 7.48093 2.1983 9.49699 2.1983ZM16.9695 20.5399H2.02447V7.29319H3.72277V9.84064C3.72277 10.3096 4.10293 10.6898 4.57192 10.6898C5.0409 10.6898 5.42107 10.3096 5.42107 9.84064V7.29319H13.5729V9.84064C13.5729 10.3096 13.9531 10.6898 14.4221 10.6898C14.891 10.6898 15.2712 10.3096 15.2712 9.84064V7.29319H16.9695V20.5399Z" />
                          </svg>
                        </a>

                        <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center faveIcon translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <svg
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="dark:text-white fill-current"
                          >
                            <path d="M17.3908 0.15625C15.4444 0.15625 13.7381 1.02415 12.4564 2.66616C12.2855 2.88515 12.1332 3.10424 11.9981 3.31643C11.8631 3.1042 11.7107 2.88515 11.5398 2.66616C10.2581 1.02415 8.55185 0.15625 6.60548 0.15625C2.92861 0.15625 0.298828 3.23495 0.298828 6.92922C0.298828 11.1534 3.76095 15.1346 11.5245 19.8377C11.6701 19.9259 11.8341 19.97 11.9981 19.97C12.1621 19.97 12.3262 19.9259 12.4717 19.8378C20.2353 15.1346 23.6974 11.1535 23.6974 6.92927C23.6974 3.23691 21.0698 0.15625 17.3908 0.15625ZM19.4545 12.1891C17.8382 13.9925 15.3957 15.8915 11.9981 17.985C8.60052 15.8915 6.15807 13.9925 4.54179 12.1891C2.91677 10.3759 2.12684 8.65542 2.12684 6.92927C2.12684 4.26933 3.92442 1.98426 6.60548 1.98426C7.97082 1.98426 9.13499 2.57791 10.0657 3.74875C10.8099 4.68511 11.1234 5.65199 11.1256 5.65889C11.2447 6.04072 11.5982 6.3008 11.9982 6.3008C12.3981 6.3008 12.7517 6.04076 12.8707 5.65889C12.8736 5.64966 13.1777 4.71294 13.8975 3.79089C14.8332 2.59208 16.0085 1.98422 17.3908 1.98422C20.0746 1.98422 21.8694 4.27147 21.8694 6.92922C21.8694 8.65537 21.0795 10.3759 19.4545 12.1891Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-6 flex items-center gap-3">
                      <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center bg-tertiary-light group-hover:bg-tertiary transition duration-300 dark:bg-dark-secondary dark:group-hover:bg-tertiary">
                        <h5 className="font-semibold leading-none group-hover:text-white duration-300">
                          $40
                        </h5>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-normal dark:text-white">
                          <a href="#" className="text-underline">
                            White Minimal Chair
                          </a>
                        </h5>
                        <span className="text-tertiary mt-1">
                          Classic Chair
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        width={100}
                        height={100}
                        className="w-full transform duration-300 group-hover:scale-110"
                        src="/assets/img/shortcode/product-card/pdct-02.jpg"
                        alt="product-card"
                      />
                      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 flex gap-2">
                        <a
                          href="#"
                          className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                        >
                          <svg
                            className="dark:text-white fill-current"
                            width="20"
                            height="24"
                            viewBox="0 0 19 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.8186 5.5949H15.231C14.8937 2.72995 12.451 0.5 9.49699 0.5C6.54292 0.5 4.10026 2.72995 3.76293 5.5949H1.17532C0.706336 5.5949 0.326172 5.97506 0.326172 6.44405V21.3891C0.326172 21.8581 0.706336 22.2382 1.17532 22.2382H17.8186C18.2876 22.2382 18.6678 21.8581 18.6678 21.3891V6.44405C18.6678 5.97506 18.2876 5.5949 17.8186 5.5949ZM9.49699 2.1983C11.513 2.1983 13.1916 3.66966 13.516 5.5949H5.478C5.80238 3.66966 7.48093 2.1983 9.49699 2.1983ZM16.9695 20.5399H2.02447V7.29319H3.72277V9.84064C3.72277 10.3096 4.10293 10.6898 4.57192 10.6898C5.0409 10.6898 5.42107 10.3096 5.42107 9.84064V7.29319H13.5729V9.84064C13.5729 10.3096 13.9531 10.6898 14.4221 10.6898C14.891 10.6898 15.2712 10.3096 15.2712 9.84064V7.29319H16.9695V20.5399Z" />
                          </svg>
                        </a>

                        <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center faveIcon translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <svg
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="dark:text-white fill-current"
                          >
                            <path d="M17.3908 0.15625C15.4444 0.15625 13.7381 1.02415 12.4564 2.66616C12.2855 2.88515 12.1332 3.10424 11.9981 3.31643C11.8631 3.1042 11.7107 2.88515 11.5398 2.66616C10.2581 1.02415 8.55185 0.15625 6.60548 0.15625C2.92861 0.15625 0.298828 3.23495 0.298828 6.92922C0.298828 11.1534 3.76095 15.1346 11.5245 19.8377C11.6701 19.9259 11.8341 19.97 11.9981 19.97C12.1621 19.97 12.3262 19.9259 12.4717 19.8378C20.2353 15.1346 23.6974 11.1535 23.6974 6.92927C23.6974 3.23691 21.0698 0.15625 17.3908 0.15625ZM19.4545 12.1891C17.8382 13.9925 15.3957 15.8915 11.9981 17.985C8.60052 15.8915 6.15807 13.9925 4.54179 12.1891C2.91677 10.3759 2.12684 8.65542 2.12684 6.92927C2.12684 4.26933 3.92442 1.98426 6.60548 1.98426C7.97082 1.98426 9.13499 2.57791 10.0657 3.74875C10.8099 4.68511 11.1234 5.65199 11.1256 5.65889C11.2447 6.04072 11.5982 6.3008 11.9982 6.3008C12.3981 6.3008 12.7517 6.04076 12.8707 5.65889C12.8736 5.64966 13.1777 4.71294 13.8975 3.79089C14.8332 2.59208 16.0085 1.98422 17.3908 1.98422C20.0746 1.98422 21.8694 4.27147 21.8694 6.92922C21.8694 8.65537 21.0795 10.3759 19.4545 12.1891Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-6 flex items-center gap-3">
                      <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center bg-tertiary-light group-hover:bg-tertiary transition duration-300 dark:bg-dark-secondary dark:group-hover:bg-tertiary">
                        <h5 className="font-semibold leading-none group-hover:text-white duration-300">
                          $99
                        </h5>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-normal dark:text-white">
                          <a href="#" className="text-underline">
                            Premium Luxury Sofa
                          </a>
                        </h5>
                        <span className="text-tertiary mt-1">Premium Sofa</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        width={100}
                        height={100}
                        className="w-full transform duration-300 group-hover:scale-110"
                        src="/assets/img/shortcode/product-card/pdct-03.jpg"
                        alt="product-card"
                      />
                      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 flex gap-2">
                        <a
                          href="#"
                          className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                        >
                          <svg
                            className="dark:text-white fill-current"
                            width="20"
                            height="24"
                            viewBox="0 0 19 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.8186 5.5949H15.231C14.8937 2.72995 12.451 0.5 9.49699 0.5C6.54292 0.5 4.10026 2.72995 3.76293 5.5949H1.17532C0.706336 5.5949 0.326172 5.97506 0.326172 6.44405V21.3891C0.326172 21.8581 0.706336 22.2382 1.17532 22.2382H17.8186C18.2876 22.2382 18.6678 21.8581 18.6678 21.3891V6.44405C18.6678 5.97506 18.2876 5.5949 17.8186 5.5949ZM9.49699 2.1983C11.513 2.1983 13.1916 3.66966 13.516 5.5949H5.478C5.80238 3.66966 7.48093 2.1983 9.49699 2.1983ZM16.9695 20.5399H2.02447V7.29319H3.72277V9.84064C3.72277 10.3096 4.10293 10.6898 4.57192 10.6898C5.0409 10.6898 5.42107 10.3096 5.42107 9.84064V7.29319H13.5729V9.84064C13.5729 10.3096 13.9531 10.6898 14.4221 10.6898C14.891 10.6898 15.2712 10.3096 15.2712 9.84064V7.29319H16.9695V20.5399Z" />
                          </svg>
                        </a>

                        <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center faveIcon translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <svg
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="dark:text-white fill-current"
                          >
                            <path d="M17.3908 0.15625C15.4444 0.15625 13.7381 1.02415 12.4564 2.66616C12.2855 2.88515 12.1332 3.10424 11.9981 3.31643C11.8631 3.1042 11.7107 2.88515 11.5398 2.66616C10.2581 1.02415 8.55185 0.15625 6.60548 0.15625C2.92861 0.15625 0.298828 3.23495 0.298828 6.92922C0.298828 11.1534 3.76095 15.1346 11.5245 19.8377C11.6701 19.9259 11.8341 19.97 11.9981 19.97C12.1621 19.97 12.3262 19.9259 12.4717 19.8378C20.2353 15.1346 23.6974 11.1535 23.6974 6.92927C23.6974 3.23691 21.0698 0.15625 17.3908 0.15625ZM19.4545 12.1891C17.8382 13.9925 15.3957 15.8915 11.9981 17.985C8.60052 15.8915 6.15807 13.9925 4.54179 12.1891C2.91677 10.3759 2.12684 8.65542 2.12684 6.92927C2.12684 4.26933 3.92442 1.98426 6.60548 1.98426C7.97082 1.98426 9.13499 2.57791 10.0657 3.74875C10.8099 4.68511 11.1234 5.65199 11.1256 5.65889C11.2447 6.04072 11.5982 6.3008 11.9982 6.3008C12.3981 6.3008 12.7517 6.04076 12.8707 5.65889C12.8736 5.64966 13.1777 4.71294 13.8975 3.79089C14.8332 2.59208 16.0085 1.98422 17.3908 1.98422C20.0746 1.98422 21.8694 4.27147 21.8694 6.92922C21.8694 8.65537 21.0795 10.3759 19.4545 12.1891Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-6 flex items-center gap-3">
                      <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center bg-tertiary-light group-hover:bg-tertiary transition duration-300 dark:bg-dark-secondary dark:group-hover:bg-tertiary">
                        <h5 className="font-semibold leading-none group-hover:text-white duration-300">
                          $99
                        </h5>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-normal dark:text-white">
                          <a href="#" className="text-underline">
                            Table with Pops
                          </a>
                        </h5>
                        <span className="text-tertiary mt-1">Interior</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            ref={carouselRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Starts animation when 30% is in view
            className="s-py-50 overflow-hidden aos-init aos-animate"
            data-aos="fade-up"
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={2}
              autoplay={{ delay: 3000 }}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="w-full"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="relative">
                  <motion.img
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.8, delay: product.id * 0.1 },
                      },
                    }}
                    className="w-full object-cover"
                    src={product.img}
                    alt={product.title}
                  />
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, delay: product.id * 0.15 },
                      },
                    }}
                    className="min-w-[250px] absolute bottom-5 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 bg-white bg-opacity-80 dark:bg-title dark:bg-opacity-80 p-5 z-10"
                  >
                    <h4 className="leading-none font-semibold whitespace-nowrap">
                      <a href="#">{product.title}</a>
                    </h4>
                    <p className="leading-none mt-[10px]">
                      {product.count} Products
                    </p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <div className="s-py-50-100">
            <div className="container max-w-[1365px] mx-auto">
              <div
                className="max-w-[547px] mx-auto mb-8 md:mb-12 text-center"
                data-aos="fade-up"
              >
                <svg
                  className="mx-auto w-14 sm:w-[70px]"
                  viewBox="0 0 73 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7435 61.797C13.7435 62.4613 13.2025 62.9998 12.5353 62.9998H1.20822C0.54098 62.9998 0 62.4613 0 61.797C0 61.1327 0.54098 60.5941 1.20822 60.5941H12.5353C13.2025 60.5941 13.7435 61.1327 13.7435 61.797ZM28.0911 8.72061C32.7545 8.72061 36.5486 12.4979 36.5486 17.1407V19.2457C36.5486 19.91 36.0076 20.4485 35.3404 20.4485H20.8418C20.1745 20.4485 19.6336 19.91 19.6336 19.2457V17.1407C19.6336 12.4979 23.4277 8.72061 28.0911 8.72061ZM22.05 17.1407V18.0428H34.1322V17.1407C34.1322 13.8244 31.4222 11.1263 28.0911 11.1263C24.76 11.1263 22.05 13.8244 22.05 17.1407ZM10.0433 58.1884C10.7106 58.1884 11.2524 57.6497 11.2515 56.9839L11.1881 9.97069C11.1825 5.79104 14.5782 2.40558 18.7768 2.40558H19.2944C21.7168 2.40558 23.9371 3.51672 25.3857 5.45409C25.7842 5.9868 26.5411 6.09732 27.0763 5.70067C27.6116 5.30403 27.7224 4.55043 27.324 4.01757C25.4428 1.50193 22.441 0 19.2944 0H18.7768C13.2418 0 8.76427 4.46308 8.77167 9.974L8.8351 56.9872C8.83601 57.6509 9.37669 58.1884 10.0433 58.1884V58.1884ZM67.0562 41.7994V33.9562C67.0562 30.4048 64.1539 27.5154 60.5866 27.5154H27.6134C24.0461 27.5154 21.1438 30.4048 21.1438 33.9562V36.8376C21.1438 37.5018 21.6848 38.0404 22.3521 38.0404C23.0193 38.0404 23.5603 37.5018 23.5603 36.8376V33.9562C23.5603 31.7312 25.3785 29.9211 27.6134 29.9211H43.0428V43.4533C43.0428 44.1176 43.5838 44.6562 44.251 44.6562C44.9183 44.6562 45.4592 44.1176 45.4592 43.4533V29.9211H60.5866C62.8215 29.9211 64.6397 31.7312 64.6397 33.9562V41.8312C61.9265 42.1223 59.8068 44.4153 59.8068 47.1927V48.2648C59.8068 48.929 60.3478 49.4676 61.0151 49.4676C61.6823 49.4676 62.2233 48.929 62.2233 48.2648V47.1927C62.2233 45.5454 63.5694 44.2051 65.224 44.2051H67.076C68.7306 44.2051 70.0767 45.5454 70.0767 47.1927V57.6067C70.0767 59.254 68.7306 60.5943 67.076 60.5943H62.2233C62.2233 52.7215 62.2292 53.206 62.2129 53.0764C62.305 52.3419 61.7281 51.7231 61.0151 51.7231H33.9812C33.3139 51.7231 32.7729 52.2617 32.7729 52.926C32.7729 53.5903 33.3139 54.1289 33.9812 54.1289H59.8068V61.7971C59.8068 62.4614 60.3478 63 61.0151 63H67.076C70.063 63 72.4932 60.5806 72.4932 57.6067V47.1927C72.4932 44.2577 70.1101 41.7994 67.0562 41.7994ZM54.8229 60.5941C53.7304 60.5941 23.1422 60.5941 21.4263 60.5941C19.7716 60.5941 18.4253 59.2538 18.4253 57.6065V47.1927C18.4253 45.5454 19.7716 44.2051 21.4263 44.2051H23.278C24.9327 44.2051 26.2789 45.5454 26.2789 47.1927V53.9784C26.2789 54.6426 26.8199 55.1812 27.4871 55.1812C28.1544 55.1812 28.6954 54.6426 28.6954 53.9784V47.1927C28.6954 44.2188 26.2652 41.7994 23.278 41.7994H21.4263C18.4391 41.7994 16.0089 44.2188 16.0089 47.1927V57.6067C16.0089 60.5806 18.4391 63 21.4263 63H54.8229C55.4902 63 56.0312 62.4614 56.0312 61.7971C56.0312 61.1329 55.4902 60.5941 54.8229 60.5941Z"
                    fill="#85A3B4"
                  />
                </svg>

                <h2 className="mt-[15px] leading-none">New Arrival</h2>
                <p className="mt-[10px] md:mt-[15px]">
                  Lorem ipsum dolor sit amet, consectetur purus habitasse ut
                  diam. Auctor sit elementum habitant vel tempor varius.{" "}
                </p>
              </div>
              <div
                className="grid lg:grid-cols-2 gap-[30px]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="grid gap-[30px]">
                  <div className="grid sm:grid-cols-2 gap-[30px]">
                    <div className="group">
                      <div className="relative overflow-hidden">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full transform duration-300 group-hover:scale-110"
                          src="/assets/img/shortcode/product-card/pdct-01.jpg"
                          alt="product-card"
                        />
                        <button className="absolute z-10 top-3 left-3 btn-tag">
                          -10%
                        </button>
                        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 flex gap-2">
                          <a
                            href="#"
                            className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            <svg
                              className="dark:text-white fill-current"
                              width="20"
                              height="24"
                              viewBox="0 0 19 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M17.8186 5.5949H15.231C14.8937 2.72995 12.451 0.5 9.49699 0.5C6.54292 0.5 4.10026 2.72995 3.76293 5.5949H1.17532C0.706336 5.5949 0.326172 5.97506 0.326172 6.44405V21.3891C0.326172 21.8581 0.706336 22.2382 1.17532 22.2382H17.8186C18.2876 22.2382 18.6678 21.8581 18.6678 21.3891V6.44405C18.6678 5.97506 18.2876 5.5949 17.8186 5.5949ZM9.49699 2.1983C11.513 2.1983 13.1916 3.66966 13.516 5.5949H5.478C5.80238 3.66966 7.48093 2.1983 9.49699 2.1983ZM16.9695 20.5399H2.02447V7.29319H3.72277V9.84064C3.72277 10.3096 4.10293 10.6898 4.57192 10.6898C5.0409 10.6898 5.42107 10.3096 5.42107 9.84064V7.29319H13.5729V9.84064C13.5729 10.3096 13.9531 10.6898 14.4221 10.6898C14.891 10.6898 15.2712 10.3096 15.2712 9.84064V7.29319H16.9695V20.5399Z" />
                            </svg>
                          </a>

                          <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center faveIcon translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                            <svg
                              width="24"
                              height="20"
                              viewBox="0 0 24 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="dark:text-white fill-current"
                            >
                              <path d="M17.3908 0.15625C15.4444 0.15625 13.7381 1.02415 12.4564 2.66616C12.2855 2.88515 12.1332 3.10424 11.9981 3.31643C11.8631 3.1042 11.7107 2.88515 11.5398 2.66616C10.2581 1.02415 8.55185 0.15625 6.60548 0.15625C2.92861 0.15625 0.298828 3.23495 0.298828 6.92922C0.298828 11.1534 3.76095 15.1346 11.5245 19.8377C11.6701 19.9259 11.8341 19.97 11.9981 19.97C12.1621 19.97 12.3262 19.9259 12.4717 19.8378C20.2353 15.1346 23.6974 11.1535 23.6974 6.92927C23.6974 3.23691 21.0698 0.15625 17.3908 0.15625ZM19.4545 12.1891C17.8382 13.9925 15.3957 15.8915 11.9981 17.985C8.60052 15.8915 6.15807 13.9925 4.54179 12.1891C2.91677 10.3759 2.12684 8.65542 2.12684 6.92927C2.12684 4.26933 3.92442 1.98426 6.60548 1.98426C7.97082 1.98426 9.13499 2.57791 10.0657 3.74875C10.8099 4.68511 11.1234 5.65199 11.1256 5.65889C11.2447 6.04072 11.5982 6.3008 11.9982 6.3008C12.3981 6.3008 12.7517 6.04076 12.8707 5.65889C12.8736 5.64966 13.1777 4.71294 13.8975 3.79089C14.8332 2.59208 16.0085 1.98422 17.3908 1.98422C20.0746 1.98422 21.8694 4.27147 21.8694 6.92922C21.8694 8.65537 21.0795 10.3759 19.4545 12.1891Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mt-5 md:mt-6 flex items-center gap-3">
                        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center bg-tertiary-light group-hover:bg-tertiary transition duration-300 dark:bg-dark-secondary dark:group-hover:bg-tertiary">
                          <h5 className="font-semibold leading-none group-hover:text-white duration-300">
                            $40
                          </h5>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-normal dark:text-white">
                            <a href="#" className="text-underline">
                              White Minimal Chair
                            </a>
                          </h5>
                          <span className="text-tertiary mt-1">
                            Classic Chair
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <div className="relative overflow-hidden">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full transform duration-300 group-hover:scale-110"
                          src="/assets/img/shortcode/product-card/pdct-02.jpg"
                          alt="product-card"
                        />
                        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 flex gap-2">
                          <a
                            href="#"
                            className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            <svg
                              className="dark:text-white fill-current"
                              width="20"
                              height="24"
                              viewBox="0 0 19 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M17.8186 5.5949H15.231C14.8937 2.72995 12.451 0.5 9.49699 0.5C6.54292 0.5 4.10026 2.72995 3.76293 5.5949H1.17532C0.706336 5.5949 0.326172 5.97506 0.326172 6.44405V21.3891C0.326172 21.8581 0.706336 22.2382 1.17532 22.2382H17.8186C18.2876 22.2382 18.6678 21.8581 18.6678 21.3891V6.44405C18.6678 5.97506 18.2876 5.5949 17.8186 5.5949ZM9.49699 2.1983C11.513 2.1983 13.1916 3.66966 13.516 5.5949H5.478C5.80238 3.66966 7.48093 2.1983 9.49699 2.1983ZM16.9695 20.5399H2.02447V7.29319H3.72277V9.84064C3.72277 10.3096 4.10293 10.6898 4.57192 10.6898C5.0409 10.6898 5.42107 10.3096 5.42107 9.84064V7.29319H13.5729V9.84064C13.5729 10.3096 13.9531 10.6898 14.4221 10.6898C14.891 10.6898 15.2712 10.3096 15.2712 9.84064V7.29319H16.9695V20.5399Z" />
                            </svg>
                          </a>

                          <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center faveIcon translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                            <svg
                              width="24"
                              height="20"
                              viewBox="0 0 24 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="dark:text-white fill-current"
                            >
                              <path d="M17.3908 0.15625C15.4444 0.15625 13.7381 1.02415 12.4564 2.66616C12.2855 2.88515 12.1332 3.10424 11.9981 3.31643C11.8631 3.1042 11.7107 2.88515 11.5398 2.66616C10.2581 1.02415 8.55185 0.15625 6.60548 0.15625C2.92861 0.15625 0.298828 3.23495 0.298828 6.92922C0.298828 11.1534 3.76095 15.1346 11.5245 19.8377C11.6701 19.9259 11.8341 19.97 11.9981 19.97C12.1621 19.97 12.3262 19.9259 12.4717 19.8378C20.2353 15.1346 23.6974 11.1535 23.6974 6.92927C23.6974 3.23691 21.0698 0.15625 17.3908 0.15625ZM19.4545 12.1891C17.8382 13.9925 15.3957 15.8915 11.9981 17.985C8.60052 15.8915 6.15807 13.9925 4.54179 12.1891C2.91677 10.3759 2.12684 8.65542 2.12684 6.92927C2.12684 4.26933 3.92442 1.98426 6.60548 1.98426C7.97082 1.98426 9.13499 2.57791 10.0657 3.74875C10.8099 4.68511 11.1234 5.65199 11.1256 5.65889C11.2447 6.04072 11.5982 6.3008 11.9982 6.3008C12.3981 6.3008 12.7517 6.04076 12.8707 5.65889C12.8736 5.64966 13.1777 4.71294 13.8975 3.79089C14.8332 2.59208 16.0085 1.98422 17.3908 1.98422C20.0746 1.98422 21.8694 4.27147 21.8694 6.92922C21.8694 8.65537 21.0795 10.3759 19.4545 12.1891Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mt-5 md:mt-6 flex items-center gap-3">
                        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center bg-tertiary-light group-hover:bg-tertiary transition duration-300 dark:bg-dark-secondary dark:group-hover:bg-tertiary">
                          <h5 className="font-semibold leading-none group-hover:text-white duration-300">
                            $99
                          </h5>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-normal dark:text-white">
                            <a href="#" className="text-underline">
                              Premium Luxury Sofa
                            </a>
                          </h5>
                          <span className="text-tertiary mt-1">
                            Premium Sofa
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full object-cover"
                      src="/assets/img/home-v2/arrival-01.jpg"
                      alt="arrival"
                    />
                    <div className="absolute z-10 bg-white bg-opacity-50 dark:bg-title dark:bg-opacity-50 p-5 md:p-[30px] top-5 sm:top-8 md:top-12 right-5 sm:right-8 md:right-12">
                      <h2 className="text-5xl sm:text-7xl leading-none italic">
                        30%{" "}
                        <sup className="text-lg sm:text-2xl leading-none">
                          OFF
                        </sup>
                      </h2>
                      <h6 className="sm:mt-[10px]">All new Arival Sofa</h6>
                      <a
                        className="btn btn-outline mt-4 md:mt-6"
                        href="shop-v2.html"
                        data-text="See all Product"
                      >
                        <span>See all Product</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col-reverse lg:grid gap-[30px]">
                  <div className="relative">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full object-cover"
                      src="/assets/img/home-v2/arrival-02.jpg"
                      alt="arrival"
                    />
                    <div className="absolute z-10 bg-white bg-opacity-50 dark:bg-title dark:bg-opacity-50 p-5 md:p-[30px] top-5 sm:top-8 md:top-12 right-5 sm:right-8 md:right-12">
                      <h2 className="text-5xl sm:text-7xl leading-none italic">
                        45%
                        <sup className="text-lg sm:text-2xl leading-none ">
                          OFF
                        </sup>
                      </h2>
                      <h6 className="sm:mt-[10px]">All new Flower Vase</h6>
                      <a
                        className="btn btn-outline mt-4 md:mt-6"
                        href="shop-v2.html"
                        data-text="See all Product"
                      >
                        <span>See all Product</span>
                      </a>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-[30px]">
                    <div className="group">
                      <div className="relative overflow-hidden">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full transform duration-300 group-hover:scale-110"
                          src="/assets/img/shortcode/product-card/pdct-03.jpg"
                          alt="product-card"
                        />
                        <button className="absolute z-10 top-3 left-3 btn-tag">
                          Hot Sale
                        </button>
                        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 flex gap-2">
                          <a
                            href="#"
                            className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            <svg
                              className="dark:text-white fill-current"
                              width="20"
                              height="24"
                              viewBox="0 0 19 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M17.8186 5.5949H15.231C14.8937 2.72995 12.451 0.5 9.49699 0.5C6.54292 0.5 4.10026 2.72995 3.76293 5.5949H1.17532C0.706336 5.5949 0.326172 5.97506 0.326172 6.44405V21.3891C0.326172 21.8581 0.706336 22.2382 1.17532 22.2382H17.8186C18.2876 22.2382 18.6678 21.8581 18.6678 21.3891V6.44405C18.6678 5.97506 18.2876 5.5949 17.8186 5.5949ZM9.49699 2.1983C11.513 2.1983 13.1916 3.66966 13.516 5.5949H5.478C5.80238 3.66966 7.48093 2.1983 9.49699 2.1983ZM16.9695 20.5399H2.02447V7.29319H3.72277V9.84064C3.72277 10.3096 4.10293 10.6898 4.57192 10.6898C5.0409 10.6898 5.42107 10.3096 5.42107 9.84064V7.29319H13.5729V9.84064C13.5729 10.3096 13.9531 10.6898 14.4221 10.6898C14.891 10.6898 15.2712 10.3096 15.2712 9.84064V7.29319H16.9695V20.5399Z" />
                            </svg>
                          </a>

                          <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center faveIcon translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                            <svg
                              width="24"
                              height="20"
                              viewBox="0 0 24 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="dark:text-white fill-current"
                            >
                              <path d="M17.3908 0.15625C15.4444 0.15625 13.7381 1.02415 12.4564 2.66616C12.2855 2.88515 12.1332 3.10424 11.9981 3.31643C11.8631 3.1042 11.7107 2.88515 11.5398 2.66616C10.2581 1.02415 8.55185 0.15625 6.60548 0.15625C2.92861 0.15625 0.298828 3.23495 0.298828 6.92922C0.298828 11.1534 3.76095 15.1346 11.5245 19.8377C11.6701 19.9259 11.8341 19.97 11.9981 19.97C12.1621 19.97 12.3262 19.9259 12.4717 19.8378C20.2353 15.1346 23.6974 11.1535 23.6974 6.92927C23.6974 3.23691 21.0698 0.15625 17.3908 0.15625ZM19.4545 12.1891C17.8382 13.9925 15.3957 15.8915 11.9981 17.985C8.60052 15.8915 6.15807 13.9925 4.54179 12.1891C2.91677 10.3759 2.12684 8.65542 2.12684 6.92927C2.12684 4.26933 3.92442 1.98426 6.60548 1.98426C7.97082 1.98426 9.13499 2.57791 10.0657 3.74875C10.8099 4.68511 11.1234 5.65199 11.1256 5.65889C11.2447 6.04072 11.5982 6.3008 11.9982 6.3008C12.3981 6.3008 12.7517 6.04076 12.8707 5.65889C12.8736 5.64966 13.1777 4.71294 13.8975 3.79089C14.8332 2.59208 16.0085 1.98422 17.3908 1.98422C20.0746 1.98422 21.8694 4.27147 21.8694 6.92922C21.8694 8.65537 21.0795 10.3759 19.4545 12.1891Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mt-5 md:mt-6 flex items-center gap-3">
                        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center bg-tertiary-light group-hover:bg-tertiary transition duration-300 dark:bg-dark-secondary dark:group-hover:bg-tertiary">
                          <h5 className="font-semibold leading-none group-hover:text-white duration-300">
                            $40
                          </h5>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-normal dark:text-white">
                            <a href="#" className="text-underline">
                              Table with Vases
                            </a>
                          </h5>
                          <span className="text-tertiary mt-1">Interior</span>
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <div className="relative overflow-hidden">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full transform duration-300 group-hover:scale-110"
                          src="/assets/img/shortcode/product-card/pdct-02.jpg"
                          alt="product-card"
                        />
                        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 flex gap-2">
                          <a
                            href="#"
                            className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center transform translate-y-8 opacity-0 transition-all group-hover:duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                          >
                            <svg
                              className="dark:text-white fill-current"
                              width="20"
                              height="24"
                              viewBox="0 0 19 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M17.8186 5.5949H15.231C14.8937 2.72995 12.451 0.5 9.49699 0.5C6.54292 0.5 4.10026 2.72995 3.76293 5.5949H1.17532C0.706336 5.5949 0.326172 5.97506 0.326172 6.44405V21.3891C0.326172 21.8581 0.706336 22.2382 1.17532 22.2382H17.8186C18.2876 22.2382 18.6678 21.8581 18.6678 21.3891V6.44405C18.6678 5.97506 18.2876 5.5949 17.8186 5.5949ZM9.49699 2.1983C11.513 2.1983 13.1916 3.66966 13.516 5.5949H5.478C5.80238 3.66966 7.48093 2.1983 9.49699 2.1983ZM16.9695 20.5399H2.02447V7.29319H3.72277V9.84064C3.72277 10.3096 4.10293 10.6898 4.57192 10.6898C5.0409 10.6898 5.42107 10.3096 5.42107 9.84064V7.29319H13.5729V9.84064C13.5729 10.3096 13.9531 10.6898 14.4221 10.6898C14.891 10.6898 15.2712 10.3096 15.2712 9.84064V7.29319H16.9695V20.5399Z" />
                            </svg>
                          </a>

                          <button className="w-9 lg:w-12 h-9 p-2 lg:h-12 bg-white dark:bg-title bg-opacity-80 flex items-center justify-center faveIcon translate-y-8 opacity-0 transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                            <svg
                              width="24"
                              height="20"
                              viewBox="0 0 24 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="dark:text-white fill-current"
                            >
                              <path d="M17.3908 0.15625C15.4444 0.15625 13.7381 1.02415 12.4564 2.66616C12.2855 2.88515 12.1332 3.10424 11.9981 3.31643C11.8631 3.1042 11.7107 2.88515 11.5398 2.66616C10.2581 1.02415 8.55185 0.15625 6.60548 0.15625C2.92861 0.15625 0.298828 3.23495 0.298828 6.92922C0.298828 11.1534 3.76095 15.1346 11.5245 19.8377C11.6701 19.9259 11.8341 19.97 11.9981 19.97C12.1621 19.97 12.3262 19.9259 12.4717 19.8378C20.2353 15.1346 23.6974 11.1535 23.6974 6.92927C23.6974 3.23691 21.0698 0.15625 17.3908 0.15625ZM19.4545 12.1891C17.8382 13.9925 15.3957 15.8915 11.9981 17.985C8.60052 15.8915 6.15807 13.9925 4.54179 12.1891C2.91677 10.3759 2.12684 8.65542 2.12684 6.92927C2.12684 4.26933 3.92442 1.98426 6.60548 1.98426C7.97082 1.98426 9.13499 2.57791 10.0657 3.74875C10.8099 4.68511 11.1234 5.65199 11.1256 5.65889C11.2447 6.04072 11.5982 6.3008 11.9982 6.3008C12.3981 6.3008 12.7517 6.04076 12.8707 5.65889C12.8736 5.64966 13.1777 4.71294 13.8975 3.79089C14.8332 2.59208 16.0085 1.98422 17.3908 1.98422C20.0746 1.98422 21.8694 4.27147 21.8694 6.92922C21.8694 8.65537 21.0795 10.3759 19.4545 12.1891Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mt-5 md:mt-6 flex items-center gap-3">
                        <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center bg-tertiary-light group-hover:bg-tertiary transition duration-300 dark:bg-dark-secondary dark:group-hover:bg-tertiary">
                          <h5 className="font-semibold leading-none group-hover:text-white duration-300">
                            $99
                          </h5>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-normal dark:text-white">
                            <a href="#" className="text-underline">
                              Premium Luxury Sofa
                            </a>
                          </h5>
                          <span className="text-tertiary mt-1">
                            Premium Sofa
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}
