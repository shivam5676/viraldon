"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // Initial state
      gsap.set(ref.current, { opacity: 0, y: 30 });

      // Animation on scroll
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(ref.current, {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power3.out",
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return ref;
};
