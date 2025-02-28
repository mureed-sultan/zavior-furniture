"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = "black";

    // Text animation: appear from bottom
    gsap.fromTo(
      ".characters",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Logo rotation animation
    gsap.to(".logo", {
      rotation: 360,
      repeat: -1,
      duration: 2,
      ease: "linear",
    });

    // Exit animation
    setTimeout(() => {
      gsap.to("#preloader", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          setLoading(false);
          document.body.style.backgroundColor = "white";
          onComplete();
        },
      });
    }, 3000);
  }, []);

  return loading ? (
    <div
      id="preloader"
      className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black text-white z-50"
    >
      {/* Rotating Logo */}
      <div className="logo mb-6">
        <Image src="/assets/imgs/logo.png" alt="Logo" width={150} height={150} className="animate-spin" />
      </div>

      {/* Animated Text */}
      <div className="txt-loading flex space-x-2 text-4xl font-bold tracking-widest">
        {"ZAVIOR".split("").map((letter, index) => (
          <span key={index} className="characters">{letter}</span>
        ))}
      </div>
    </div>
  ) : null;
};

export default Preloader;
