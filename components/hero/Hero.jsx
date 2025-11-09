"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const statsRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (
      heroRef.current &&
      titleRef.current &&
      subtitleRef.current &&
      buttonRef.current
    ) {
      // Initial state
      gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 30,
      });

      // Background animation
      const backgroundTl = gsap.timeline({ repeat: -1, yoyo: true });
      backgroundTl.to(heroRef.current, {
        background:
          "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 25%, rgba(15, 23, 42, 0.15) 50%)",
        duration: 8,
        ease: "power1.inOut",
      });

      // Animation timeline
      const tl = gsap.timeline();

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        );

      // Stats animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1) 0%, rgba(15, 23, 42, 0) 50%)`,
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-[200%] h-[200%]">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h1
            ref={titleRef}
            className="py-4 text-4xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in"
          >
            Transform Your Digital Presence
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in"
          >
            We help businesses thrive in the digital world with cutting-edge
            marketing strategies, beautiful websites, and powerful software
            solutions that drive real results.
          </p>
          <div
            ref={buttonRef}
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:from-blue-700 hover:to-purple-700"
            >
              Get Started
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:-translate-y-2 transition-all duration-500 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: "500+", label: "Clients Satisfied" },
            { value: "98%", label: "Success Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div
              key={index}
              className="stats-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
