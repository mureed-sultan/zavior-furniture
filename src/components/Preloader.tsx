"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = "black";

    // Animate text appearance
    gsap.fromTo(
      ".characters",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        onUpdate: () => {
          document.querySelectorAll(".characters").forEach((el) => {
            (el as HTMLElement).style.opacity = "1"; // Force opacity
          });
        },
      }
    );

    // Rotate spinner smoothly
    gsap.to(".spinner", {
      rotation: 360,
      repeat: -1,
      duration: 1.2,
      ease: "linear",
    });

    // Preloader exit animation after delay
    setTimeout(() => {
      gsap.to("#preloader", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          setLoading(false);
          document.body.style.backgroundColor = "white"; // Restore background
          onComplete();
        },
      });
    }, 2500);
  }, []);

  return loading ? (
    <div
      id="preloader"
      className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black text-white z-50"
    >
      {/* Spinner */}
      <div className="spinner w-12 h-12 border-4 border-white border-t-transparent rounded-full mb-6"></div>

      {/* Text Animation */}
      <div className="txt-loading flex space-x-2 text-3xl font-bold tracking-widest">
        {"ZAVIOR".split("").map((letter, index) => (
          <span key={index} className="characters">{letter}</span>
        ))}
      </div>
    </div>
  ) : null;
};

export default Preloader;
