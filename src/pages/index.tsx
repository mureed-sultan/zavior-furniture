import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Layout from "../components/Layout";
import Preloader from "../components/Preloader";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (!loading) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-container",
        { y: "100vh" },
        { y: "0", duration: 1.5, ease: "power4.out" }
      )
        .fromTo(
          ".hero-video",
          { opacity: 0, scale: 2 },
          { opacity: 1, scale: 2, duration: 2, ease: "power4.out" },
          "-=1"
        );
    }
  }, [loading]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const video = document.querySelector<HTMLVideoElement>(".hero-video");
      if (video) {
        if (scrollY > 100) {
          gsap.to(video, { scale: Math.max(1, 2 - scrollY / 500), duration: 1, ease: "power4.out" });
          video.play();
        } else {
          gsap.to(video, { scale: 2, duration: 1, ease: "power4.out" });
          video.pause();
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <Layout>
          <main className="relative w-full">
            {/* Hero Section */}
            <section className="relative h-[150vh] flex flex-col items-center justify-center hero-container">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover hero-video"
                playsInline
                muted
                loop
              >
                <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
              </video>
              <motion.div 
                className="absolute top-28 left-1/2 transform -translate-x-1/2 z-10 text-white hero-text text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.5 }}
              >
                {"ZAVIOR".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block text-6xl md:text-8xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div 
                className="absolute left-0 z-10 text-white flex flex-col gap-6 items-start text-left ml-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 2.5 }}
              >
                <motion.p
                  className="text-2xl text-white max-w-lg"
                >
                  {"ADD ELEGANCE AND CHARM TO YOUR SPACE WITH FURNITURE THAT EXPRESSES YOUR INDIVIDUALITY".split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 2.5 + index * 0.1 }}
                    >
                      {word} 
                    </motion.span>
                  ))}
                </motion.p>
                <motion.button
                  className="px-6 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all w-max"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 3 }}
                >
                  Explore Collection
                </motion.button>
              </motion.div>
              <div 
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-center cursor-pointer"
                onClick={() => setExpanded(!expanded)}
              >
        
                <motion.div
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <Image src="/product.png" alt="Product" width={200} height={200} />
                </motion.div>
                <motion.p 
                  className="text-lg text-white mb-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  Product of the Day
                </motion.p>
              </div>
            </section>
          </main>
        </Layout>
      )}
    </>
  );
}
