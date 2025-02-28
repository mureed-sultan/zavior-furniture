"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./Preloader";
import Cursor from "./Cursor";
import { Analytics } from "@vercel/analytics/react"

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (showContent) {
      gsap.to(".left-panel", {
        x: "-100%",
        duration: 1.5,
        ease: "power4.inOut",
      });

      gsap.to(".right-panel", {
        x: "100%",
        duration: 1.5,
        ease: "power4.inOut",
        onComplete: () => {
          setTimeout(() => {
            const overlay = document.querySelector(".window-overlay");
            console.log("overlay" , overlay , overlay?.parentNode)
            if (overlay ) {
              const computedStyles = window.getComputedStyle(overlay);
              
              console.log((overlay as HTMLElement).style.zIndex="0"  )

              // overlay.parentNode?.removeChild(overlay);
            }
          }, 50); 
        },
        
      });
    }

    // Scroll-triggered fade-in animations
    const fadeElements = gsap.utils.toArray<HTMLElement>(
      ".has_fade_anim, .has_text_move_anim, .skill-thumb"
    );

    fadeElements.forEach((el) => {
      const element = el as HTMLElement;
      const fadeFrom: string = element.getAttribute("data-fade-from") || "bottom";
      const fadeOffset: number = parseFloat(
        element.getAttribute("data-fade-offset") || "50"
      );
      const duration: number = parseFloat(
        element.getAttribute("data-duration") || "1.15"
      );
      const delay: number = parseFloat(
        element.getAttribute("data-delay") || "0.15"
      );
      const ease: string = element.getAttribute("data-ease") || "power2.out";

      const animationConfig: gsap.TweenVars = {
        opacity: 0,
        ease,
        duration,
        delay,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      };

      switch (fadeFrom) {
        case "top":
          animationConfig.y = -fadeOffset;
          break;
        case "left":
          animationConfig.x = -fadeOffset;
          break;
        case "bottom":
          animationConfig.y = fadeOffset;
          break;
        case "right":
          animationConfig.x = fadeOffset;
          break;
        default:
          break;
      }

      gsap.from(element, animationConfig);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [showContent]);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 100) {
        header?.classList.add("sticky");
      } else {
        header?.classList.remove("sticky");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <>
      {!showContent && <Preloader onComplete={() => setShowContent(true)} />}
      {showContent && (
        <>
        <Analytics/>
          <Cursor />
          <div className="window-overlay fixed top-0 left-0 w-full h-full flex">
            <div className="left-panel w-1/2 h-full bg-black"></div>
            <div className="right-panel w-1/2 h-full bg-black"></div>
          </div>
          <Header />
          <>{children}</>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
