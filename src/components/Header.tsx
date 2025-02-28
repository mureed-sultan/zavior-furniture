"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaBars,
  FaChevronDown,
  FaMoon,
  FaSun,
  FaTimes,
} from "react-icons/fa";
import SearchModal from "./SearchModal";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<any>({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };
  const toggleSubMenu = (index: any) => {
    setOpenSubMenus((prev: any) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const menuItems = [
    {
      title: "Demos",
      link: "#",
      subMenu: [
        { title: "Branding Agency", link: "/branding-agency.html" },
        { title: "Web Agency", link: "/web-agency.html" },
        { title: "SEO Agency", link: "/seo-agency.html" },
        { title: "Design Agency", link: "/design-studio.html" },
        { title: "Video Agency", link: "/video-production.html" },
        { title: "AI Agency", link: "/ai-agency.html" },
        {
          title: "Creative Agency Classic",
          link: "/creative-agency-classic.html",
        },
        { title: "Marketing Agency", link: "/marketing-agency.html" },
        { title: "Corporate Agency", link: "/corporate-agency.html" },
        { title: "Startup Agency", link: "/startup-agency.html" },
        { title: "Modern Agency", link: "/modern-agency.html" },
        { title: "Photography Agency", link: "/photography-studio.html" },
        { title: "Creative Agency", link: "/creative-agency.html" },
        { title: "Digital Agency", link: "/digital-agency.html" },
      ],
    },
    { title: "About", link: "/about" },
    {
      title: "Portfolio",
      link: "/portfolio",
      subMenu: [
        { title: "Portfolio Carousel", link: "/portfolio-carousel.html" },
        { title: "Portfolio Material", link: "/portfolio-material.html" },
        { title: "Portfolio Slicer", link: "/portfolio-slicer.html" },
        { title: "Portfolio Spring", link: "/portfolio-spring.html" },
      ],
    },
    {
      title: "Pages",
      link: "#",
      subMenu: [
        {
          title: "Service Pages",
          link: "#",
          subMenu: [
            { title: "Services", link: "/services.html" },
            { title: "Service Details", link: "/service-details.html" },
          ],
        },
        {
          title: "Project Pages",
          link: "#",
          subMenu: [
            { title: "Project", link: "/works.html" },
            { title: "Project Details", link: "/work-details.html" },
          ],
        },
        {
          title: "Team Pages",
          link: "#",
          subMenu: [
            { title: "Team", link: "/team.html" },
            { title: "Team Details", link: "/team-details.html" },
          ],
        },
        {
          title: "Career Pages",
          link: "#",
          subMenu: [
            { title: "Career", link: "/career.html" },
            { title: "Career Details", link: "/career-details.html" },
          ],
        },
        { title: "FAQ", link: "/faq.html" },
        { title: "404 Page", link: "/404.html" },
      ],
    },
    {
      title: "Blog",
      link: "#",
      subMenu: [
        { title: "Blog", link: "/blog.html" },
        { title: "Blog Details", link: "/blog-details.html" },
      ],
    },
    { title: "Contact", link: "/contact.html" },
  ];

  return (
    <>
      <header className="header-area">
        <div className="container  m-auto">
          <div className="header-area__inner">
            <div className="header__logo">
              <Link className="no-underline" href="/">
                <Image
                  className="show-light"
                  src="/assets/imgs/logo.png"
                  alt="Site Logo"
                  width={100}
                  height={50}
                />
                <Image
                  className="show-dark"
                  src="/assets/imgs/logo-dark.png"
                  alt="Site Logo"
                  width={100}
                  height={50}
                />
              </Link>
            </div>

            {/* Navigation */}
            <div className="header__nav pos-center">
              <nav className="main-menu">
                <ul>
                  {menuItems.map((menu, index) => (
                    <li
                      key={index}
                      className={menu.subMenu ? "menu-item-has-children" : ""}
                    >
                      <Link className="no-underline" href={menu.link}>
                        {menu.title}
                      </Link>

                      {/* First Level Dropdown */}
                      {menu.subMenu && (
                        <ul className="dp-menu">
                          {menu.subMenu.map((submenu, subIndex) => (
                            <li
                              key={subIndex}
                              className={
                                submenu.subMenu ? "menu-item-has-children" : ""
                              }
                            >
                              <Link
                                className="no-underline"
                                href={submenu.link}
                              >
                                {submenu.title}
                              </Link>

                              {/* Second Level Dropdown */}
                              {submenu.subMenu && (
                                <ul>
                                  {submenu.subMenu.map(
                                    (nestedSub, nestedIndex) => (
                                      <li key={nestedIndex}>
                                        <Link
                                          className="no-underline"
                                          href={nestedSub.link}
                                        >
                                          {nestedSub.title}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Search Icon */}
            <div
              className="header-search"
              onClick={() => {
                setIsSearchOpen(true);
              }}
            >
              <Image
                className="show-light"
                src="/assets/imgs/icon/search.webp"
                alt="search-icon"
                width={24}
                height={24}
              />
              <Image
                className="show-dark"
                src="/assets/imgs/icon/search-light.webp"
                alt="search-icon"
                width={24}
                height={24}
              />
            </div>

            {/* Get Started Button */}
            <div className="header__button">
              <Link
                href="/contact-bold.html"
                className="wc-btn wc-btn-primary btn-text-flip"
              >
                <span>Get Started</span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="header__navicon d-xl-none">
              <button className="open-offcanvas">
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
            >
              {isDarkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4">
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="border-b border-gray-300 dark:border-gray-700 py-2"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleSubMenu(index)}
                >
                  <Link href={menu.link}>{menu.title}</Link>
                  {menu.subMenu && (
                    <FaChevronDown
                      className={`transform ${
                        openSubMenus[index] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {menu.subMenu && openSubMenus[index] && (
                  <div className="pl-4 mt-2">
                    {menu.subMenu.map((submenu, subIndex) => (
                      <Link
                        key={subIndex}
                        href={submenu.link}
                        className="block py-1 text-sm"
                      >
                        {submenu.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Header;
