import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenu(openMenu === index ? null : index);
  };
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 w-full bg-[#f4f0ea] border-b border-[#4d3d30] shadow-md z-50"
    >
      <div className="header-area header-v2 absolute top-0 left-0 right-0 z-10 w-full border-b-[3px] border-[#EEF1F3] dark:border-bdr-clr-drk bg-white bg-opacity-50 dark:bg-dark-secondary dark:bg-opacity-50">
        <div
          className="absolute top-full left-0 h-[3px] w-0 bg-tertiary"
          id="indicator"
        ></div>
        <div className="container">
          <div className="flex items-center justify-between gap-5 relative py-3 sm:py-5 max-w-1366 mx-auto header-wrapper">
            <div className="flex items-center gap-5 sm:gap-8 md:gap-12">
              <Link className="cursor-pointer block" href="index.html">
                <Image
                  src={"/Zavior-web.webp"}
                  width={100}
                  height={100}
                  alt="logo"
                />
              </Link>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className={`hamburger hamburger-v2 transform translate-y-1 sm:translate-y-[6px] ${
                  isOpen ? "opened" : ""
                }`}
              >
                <svg
                  className="stroke-current text-title dark:text-white"
                  width="40"
                  viewBox="0 0 100 100"
                >
                  <path
                    className="line line1"
                    d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                  />
                  <path className="line line2" d="M 20,50 H 80" />
                  <path
                    className="line line3"
                    d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              <button className="hdr_profile_btn">
                <svg
                  className="fill-current text-title dark:text-white w-[18px] sm:w-[24px]"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.7879 14.7253C18.5884 13.5259 17.1608 12.638 15.6031 12.1005C17.2714 10.9514 18.3675 9.0284 18.3675 6.85394C18.3675 3.34338 15.5114 0.487305 12.0008 0.487305C8.49028 0.487305 5.6342 3.34338 5.6342 6.85394C5.6342 9.0284 6.73025 10.9514 8.39861 12.1005C6.84094 12.638 5.41326 13.5259 4.2138 14.7253C2.1338 16.8054 0.988281 19.5709 0.988281 22.5124H2.70899C2.70899 17.3889 6.87729 13.2206 12.0008 13.2206C17.1244 13.2206 21.2927 17.3889 21.2927 22.5124H23.0134C23.0134 19.5709 21.8679 16.8054 19.7879 14.7253ZM12.0008 11.4999C9.43908 11.4999 7.35491 9.41573 7.35491 6.85394C7.35491 4.29214 9.43908 2.20802 12.0008 2.20802C14.5626 2.20802 16.6468 4.29214 16.6468 6.85394C16.6468 9.41573 14.5626 11.4999 12.0008 11.4999Z" />
                </svg>
              </button>
              <div className="hdr_profile_menu absolute z-50 top-full right-[50px] sm:right-[80px] min-w-[180px] sm:min-w-[220px] bg-white dark:bg-title py-[10px] sm:py-[20px] px-5 sm:px-[30px] border border-tertiary opacity-0 invisible transition-all transform translate-y-5 mt-[3px]">
                <ul className="text-lg text-title dark:text-white leading-none">
                  <li className="py-[10px] duration-300 transform hover:translate-x-1 hover:text-tertiary">
                    <Link href="login.html">Login</Link>
                  </li>
                  <li className="py-[10px] duration-300 transform hover:translate-x-1 hover:text-tertiary">
                    <Link href="register.html">Register</Link>
                  </li>
                  <li className="py-[10px] duration-300 transform hover:translate-x-1 hover:text-tertiary">
                    <Link href="forger-password.html">Forger Password</Link>
                  </li>
                </ul>
              </div>
              <button className="relative before:absolute before:w-[10px] before:h-[10px] before:bg-secondary before:top-[2px] before:-right-1 before:rounded-full hdr_wishList_btn">
                <svg
                  className="fill-current text-title dark:text-white w-[22px] sm:w-[25px]"
                  viewBox="0 0 25 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.9005 0.591797C15.9541 0.591797 14.2479 1.45969 12.9662 3.10171C12.7953 3.3207 12.6429 3.53979 12.5079 3.75198C12.3728 3.53974 12.2205 3.3207 12.0496 3.10171C10.7679 1.45969 9.06162 0.591797 7.11524 0.591797C3.43837 0.591797 0.808594 3.67049 0.808594 7.36477C0.808594 11.589 4.27071 15.5701 12.0343 20.2733C12.1798 20.3614 12.3439 20.4055 12.5079 20.4055C12.6719 20.4055 12.8359 20.3615 12.9815 20.2733C20.7451 15.5702 24.2072 11.589 24.2072 7.36482C24.2072 3.67246 21.5795 0.591797 17.9005 0.591797ZM19.9642 12.6247C18.3479 14.4281 15.9055 16.327 12.5079 18.4205C9.11029 16.327 6.66784 14.4281 5.05155 12.6247C3.42654 10.8115 2.63661 9.09096 2.63661 7.36482C2.63661 4.70487 4.43419 2.41981 7.11524 2.41981C8.48059 2.41981 9.64476 3.01346 10.5754 4.1843C11.3196 5.12066 11.6332 6.08754 11.6354 6.09444C11.7544 6.47626 12.108 6.73634 12.5079 6.73634C12.9079 6.73634 13.2614 6.47631 13.3805 6.09444C13.3834 6.08521 13.6875 5.14849 14.4072 4.22644C15.3429 3.02762 16.5183 2.41976 17.9005 2.41976C20.5844 2.41976 22.3792 4.70702 22.3792 7.36477C22.3792 9.09092 21.5892 10.8114 19.9642 12.6247Z" />
                </svg>
              </button>
              <div className="wishlist_popup w-80 md:w-96 absolute z-50 top-full right-0 sm:right-20 xl:right-11 bg-white dark:bg-title py-5 md:py-[30px] pl-5 md:pl-[30px] pr-[10px] md:pr-[15px] border border-tertiary mt-[3px]">
                <h4 className="font-medium leading-none dark:text-white mb-4 text-xl">
                  Wishlist
                </h4>
                <div className="pr-4 md:pr-5 wishlist-item">
                  <Link
                    href="#"
                    className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] md:w-auto"
                      src="/assets/img/gallery/wishList-01.jpg"
                      alt="wishlist"
                    />
                    <div className="">
                      <span className="text-[14px] md:text-[15px] leading-none block">
                        13 November , 2020
                      </span>
                      <h6 className="text-base md:text-lg font-semibold leading-none mt-3">
                        Modern Sofa Set
                      </h6>
                    </div>
                    <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group duration-300 hover:bg-primary dark:hover:bg-primary">
                      <svg
                        className="fill-current text-title dark:text-white duration-300 group-hover:text-white"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] md:w-auto"
                      src="/assets/img/gallery/wishList-02.jpg"
                      alt="wishlist"
                    />
                    <div className="">
                      <span className="text-[14px] md:text-[15px] leading-none block">
                        13 November , 2020
                      </span>
                      <h6 className="text-base md:text-lg font-semibold leading-none mt-3">
                        Classic Chair with Vase
                      </h6>
                    </div>
                    <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group duration-300 hover:bg-primary dark:hover:bg-primary">
                      <svg
                        className="fill-current text-title dark:text-white duration-300 group-hover:text-white"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] md:w-auto"
                      src="/assets/img/gallery/wishList-03.jpg"
                      alt="wishlist"
                    />
                    <div className="">
                      <span className="text-[14px] md:text-[15px] leading-none block">
                        13 November , 2020
                      </span>
                      <h6 className="text-base md:text-lg font-semibold leading-none mt-3">
                        Luxury Hanging Lamp
                      </h6>
                    </div>
                    <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group duration-300 hover:bg-primary dark:hover:bg-primary">
                      <svg
                        className="fill-current text-title dark:text-white duration-300 group-hover:text-white"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] md:w-auto"
                      src="/assets/img/gallery/wishList-04.jpg"
                      alt="wishlist"
                    />
                    <div className="">
                      <span className="text-[14px] md:text-[15px] leading-none block">
                        13 November , 2020
                      </span>
                      <h6 className="text-base md:text-lg font-semibold leading-none mt-3">
                        Premium Quality Vase
                      </h6>
                    </div>
                    <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group duration-300 hover:bg-primary dark:hover:bg-primary">
                      <svg
                        className="fill-current text-title dark:text-white duration-300 group-hover:text-white"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] md:w-auto"
                      src="/assets/img/gallery/wishList-05.jpg"
                      alt="wishlist"
                    />
                    <div className="">
                      <span className="text-[14px] md:text-[15px] leading-none block">
                        13 November , 2020
                      </span>
                      <h6 className="text-base md:text-lg font-semibold leading-none mt-3">
                        Classic White Chair
                      </h6>
                    </div>
                    <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group duration-300 hover:bg-primary dark:hover:bg-primary">
                      <svg
                        className="fill-current text-title dark:text-white duration-300 group-hover:text-white"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] md:w-auto"
                      src="/assets/img/gallery/wishList-01.jpg"
                      alt="wishlist"
                    />
                    <div className="">
                      <span className="text-[14px] md:text-[15px] leading-none block">
                        13 November , 2020
                      </span>
                      <h6 className="text-base md:text-lg font-semibold leading-none mt-3">
                        Modern Sofa Set
                      </h6>
                    </div>
                    <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group duration-300 hover:bg-primary dark:hover:bg-primary">
                      <svg
                        className="fill-current text-title dark:text-white duration-300 group-hover:text-white"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] md:w-auto"
                      src="/assets/img/gallery/wishList-02.jpg"
                      alt="wishlist"
                    />
                    <div className="">
                      <span className="text-[14px] md:text-[15px] leading-none block">
                        13 November , 2020
                      </span>
                      <h6 className="text-base md:text-lg font-semibold leading-none mt-3">
                        Classic Chair with Vase
                      </h6>
                    </div>
                    <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group duration-300 hover:bg-primary dark:hover:bg-primary">
                      <svg
                        className="fill-current text-title dark:text-white duration-300 group-hover:text-white"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] md:w-auto"
                      src="/assets/img/gallery/wishList-03.jpg"
                      alt="wishlist"
                    />
                    <div className="">
                      <span className="text-[14px] md:text-[15px] leading-none block">
                        13 November , 2020
                      </span>
                      <h6 className="text-base md:text-lg font-semibold leading-none mt-3">
                        Luxury Hanging Lamp
                      </h6>
                    </div>
                    <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group duration-300 hover:bg-primary dark:hover:bg-primary">
                      <svg
                        className="fill-current text-title dark:text-white duration-300 group-hover:text-white"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <button className="relative before:absolute before:w-[10px] before:h-[10px] before:bg-secondary before:top-[2px] before:-right-1 before:rounded-full hdr_cart_btn">
                <svg
                  className="fill-current text-title dark:text-white w-[18px] sm:w-[19px]"
                  viewBox="0 0 19 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.8284 5.7238H15.2408C14.9035 2.85886 12.4608 0.628906 9.50675 0.628906C6.55269 0.628906 4.11002 2.85886 3.7727 5.7238H1.18509C0.716102 5.7238 0.335938 6.10397 0.335938 6.57295V21.518C0.335938 21.987 0.716102 22.3671 1.18509 22.3671H17.8284C18.2974 22.3671 18.6776 21.987 18.6776 21.518V6.57295C18.6776 6.10397 18.2974 5.7238 17.8284 5.7238ZM9.50675 2.3272C11.5228 2.3272 13.2014 3.79857 13.5257 5.7238H5.48777C5.81214 3.79857 7.4907 2.3272 9.50675 2.3272ZM16.9793 20.6688H2.03424V7.4221H3.73253V9.96955C3.73253 10.4385 4.1127 10.8187 4.58168 10.8187C5.05067 10.8187 5.43083 10.4385 5.43083 9.96955V7.4221H13.5827V9.96955C13.5827 10.4385 13.9628 10.8187 14.4318 10.8187C14.9008 10.8187 15.281 10.4385 15.281 9.96955V7.4221H16.9793V20.6688Z" />
                </svg>
              </button>
              <div className="hdr_cart_popup w-80 md:w-96 absolute z-50 top-full right-0 sm:right-10 xl:right-0 bg-white dark:bg-title p-5 md:p-[30px] border border-tertiary mt-[3px]">
                <h4 className="font-medium leading-none mb-4 text-xl">
                  Cart List
                </h4>
                <div className="hdr-cart-item">
                  <Link
                    href="#"
                    className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk group"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] md:w-auto"
                      src="/assets/img/gallery/wishList-01.jpg"
                      alt="cart"
                    />
                    <div className="">
                      <span className="text-[14px] md:text-[15px] leading-none block">
                        13 November , 2020
                      </span>
                      <h6 className="text-base md:text-lg font-semibold leading-none mt-3">
                        Modern Sofa Set
                      </h6>
                    </div>
                    <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group hover:bg-primary dark:hover:bg-primary opacity-0 group-hover:opacity-100 text-title dark:text-white duration-300 hover:text-white">
                      <svg
                        className="fill-current"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk group"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] md:w-auto"
                      src="/assets/img/gallery/wishList-02.jpg"
                      alt="cart"
                    />
                    <div className="">
                      <span className="text-[14px] md:text-[15px] leading-none block">
                        13 November , 2020
                      </span>
                      <h6 className="text-base md:text-lg font-semibold leading-none mt-3">
                        Classic Chair with Vase
                      </h6>
                    </div>
                    <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group hover:bg-primary dark:hover:bg-primary opacity-0 group-hover:opacity-100 text-title dark:text-white duration-300 hover:text-white">
                      <svg
                        className="fill-current"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk group"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] md:w-auto"
                      src="/assets/img/gallery/wishList-03.jpg"
                      alt="cart"
                    />
                    <div className="">
                      <span className="text-[14px] md:text-[15px] leading-none block">
                        13 November , 2020
                      </span>
                      <h6 className="text-base md:text-lg font-semibold leading-none mt-3">
                        Luxury Hanging Lamp
                      </h6>
                    </div>
                    <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group hover:bg-primary dark:hover:bg-primary opacity-0 group-hover:opacity-100 text-title dark:text-white duration-300 hover:text-white">
                      <svg
                        className="fill-current"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z" />
                      </svg>
                    </div>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-[15px] relative pb-[15px] mb-[15px] border-b border-bdr-clr dark:border-bdr-clr-drk group"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[70px] md:w-auto"
                      src="/assets/img/gallery/wishList-04.jpg"
                      alt="cart"
                    />
                    <div className="">
                      <span className="text-[14px] md:text-[15px] leading-none block">
                        13 November , 2020
                      </span>
                      <h6 className="text-base md:text-lg font-semibold leading-none mt-3">
                        Premium Quality Vase
                      </h6>
                    </div>
                    <div className="wishList_item_close absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-title dark:bg-white bg-opacity-10 dark:bg-opacity-10 group hover:bg-primary dark:hover:bg-primary opacity-0 group-hover:opacity-100 text-title dark:text-white duration-300 hover:text-white">
                      <svg
                        className="fill-current"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.636719 1.56306L1.56306 0.636719L4.98839 4.06204L8.41371 0.636719L9.31851 1.54152L5.89319 4.96685L9.3616 8.43526L8.43526 9.3616L4.96685 5.89319L1.54152 9.31851L0.636719 8.41371L4.06204 4.98839L0.636719 1.56306Z" />
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="mt-5 md:mt-6">
                  <Link
                    href="cart.html"
                    className="btn btn-outline btn-sm"
                    data-text="View Cart"
                  >
                    <span>View Cart</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`hdr-v2-menu absolute top-full left-0 w-64 sm:w-80 bg-tertiary-light py-[15px] px-5 sm:px-[30px] transform translate-y-[3px] z-50 dark:bg-dark-secondary shadow-lg -translate-x-[256px] sm:-translate-x-[300px] opacity-0 invisible ${
            isOpen ? "active" : ""
          }`}
        >
          <ul className="space-y-2">
            {/* Home Menu */}
            <li className="relative">
              <button
                onClick={() => toggleMenu(0)}
                className="w-full text-left"
              >
                Home
              </button>
              {openMenu === 0 && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="sub-menu bg-white dark:bg-dark-secondary shadow-md rounded-md overflow-hidden"
                >
                  <li>
                    <Link
                      href="home-v1.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Home Minimal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="home-v2.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Home Stylish
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="home-v3.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Home Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="home-v4.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Home Collection
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="home-v5.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Home Luxury
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="home-v6.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Home Retro
                    </Link>
                  </li>
                </motion.ul>
              )}
            </li>

            {/* Shop Menu */}
            <li className="relative">
              <button
                onClick={() => toggleMenu(1)}
                className="w-full text-left"
              >
                Shop
              </button>
              {openMenu === 1 && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="sub-menu bg-white dark:bg-dark-secondary shadow-md rounded-md overflow-hidden"
                >
                  <li>
                    <Link
                      href="shop-v1.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Shop 01
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="shop-v2.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Shop 02
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="shop-v3.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Shop 03
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="shop-v4.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Shop 04
                    </Link>
                  </li>
                </motion.ul>
              )}
            </li>

            {/* Blog Menu */}
            <li className="relative">
              <button
                onClick={() => toggleMenu(2)}
                className="w-full text-left"
              >
                Blog
              </button>
              {openMenu === 2 && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="sub-menu bg-white dark:bg-dark-secondary shadow-md rounded-md overflow-hidden"
                >
                  <li>
                    <Link
                      href="blog-v1.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Blog List 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="blog-v2.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Blog List 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="blog-details-v1.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Blog Details 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="blog-details-v2.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Blog Details 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="blog-details-v3.html"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Blog Details 3
                    </Link>
                  </li>
                </motion.ul>
              )}
            </li>

            {/* Contact Menu */}
            <li>
              <Link
                href="contact.html"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
