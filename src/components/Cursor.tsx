"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      gsap.to(".cursor1", { x: e.clientX, y: e.clientY, ease: "power2.out", duration: 0.15 });
      gsap.to(".cursor2", { x: e.clientX, y: e.clientY, ease: "power2.out", duration: 0.2 });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div className="cursor1"></div>
      <div className="cursor2"></div>
    </>
  );
};

export default Cursor;
