import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import { motion } from "framer-motion";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);
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

  // Open menu immediately when hovered
  const handleMouseEnter = (menu: string) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setOpenMenu(menu);
  };

  // Add a delay before closing menu (prevents accidental closing)
  const handleMouseLeave = () => {
    menuTimeout.current = setTimeout(() => {
      setOpenMenu(null);
    }, 300); // 300ms delay before hiding
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 w-full bg-[#f4f0ea] border-b border-[#4d3d30] shadow-md z-50"
    >
      {/* Top Bar with Currency, Language & Social Icons */}
      <div className="flex justify-between items-center px-6 py-2 bg-[#e4d7c5] text-[#1b1816] text-sm">
        <div className="flex space-x-4">
          <select className="bg-transparent border-none outline-none cursor-pointer">
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
          <select className="bg-transparent border-none outline-none cursor-pointer">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <div className="flex space-x-4">
          <Link href="#"><FaFacebookF className="cursor-pointer hover:text-[#4d3d30]" /></Link>
          <Link href="#"><FaInstagram className="cursor-pointer hover:text-[#4d3d30]" /></Link>
          <Link href="#"><FaTwitter className="cursor-pointer hover:text-[#4d3d30]" /></Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <Link href="/">
          <Image src="/Zavior-web.webp" width={100} height={100} alt="Logo" />
        </Link>
        <nav>
          <ul className="flex space-x-6 relative">
            {[
              { label: "Home", link: "/" },
              {
                label: "Living Room",
                subcategories: [
                  { label: "Sofas & Couches", link: "/living/sofas" },
                  { label: "Coffee Tables", link: "/living/coffee-tables" },
                  { label: "TV Stands", link: "/living/tv-stands" },
                ],
              },
              {
                label: "Dining, Kitchen and Bar",
                subcategories: [
                  { label: "Dinner, Kitchen & Bar Furniture", link: "/dining/furniture" },
                  { label: "Kitchen & Dining Sets", link: "/dining/sets" },
                  { label: "Dining Chairs", link: "/dining/chairs" },
                  { label: "Dining Tables", link: "/dining/tables" },
                  { label: "Bar Tables", link: "/dining/bar-tables" },
                  { label: "Kitchen Furniture", link: "/dining/kitchen-furniture" },
                ],
                description: "A dining room is where meals are shared with loved ones, furnished with a table and chairs for comfort and conversation.",
                image: "/dining-room.jpg",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={item.link || "#"} className="hover:text-[#4d3d30]">
                  {item.label}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.subcategories && openMenu === item.label && (
                  <motion.div
                    className="absolute left-0 top-full w-96 bg-[#f4f0ea] shadow-lg border border-[#4d3d30] mt-2 p-4 flex space-x-4 transition-opacity duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex flex-col space-y-2">
                      {item.subcategories.map((sub, subIndex) => (
                        <motion.a
                          key={subIndex}
                          href={sub.link}
                          className="hover:text-[#4d3d30] cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          {sub.label}
                        </motion.a>
                      ))}
                      {item.description && (
                        <div className="mt-4 text-sm text-[#4d3d30] italic">
                          {item.description}
                        </div>
                      )}
                    </div>

                    {/* Menu Image */}
                    {item.image && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-32 h-32 bg-gray-300"
                      >
                        <Image src={item.image} width={128} height={128} alt="Category Image" className="rounded-lg" />
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
