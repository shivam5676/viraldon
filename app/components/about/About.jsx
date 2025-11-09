'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (aboutRef.current && imageRef.current && contentRef.current) {
      // Initial state
      gsap.set([imageRef.current, contentRef.current], { opacity: 0, y: 30 });
      
      // Animation on scroll
      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(imageRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
          });
          
          gsap.to(contentRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3
          });
        }
      });
    }
    
    // Animate stats
    if (statsRef.current) {
      gsap.fromTo(statsRef.current.children,
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0) 70%)`
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div 
            ref={imageRef}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
              
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-3xl w-full h-96 flex items-center justify-center overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
                <div className="text-center p-8 relative z-10">
                  <div className="text-7xl mb-6 animate-pulse">🚀</div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Innovation & Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Delivering cutting-edge digital solutions since 2019
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-12 h-12 border-2 border-blue-400 rounded-full animate-ping opacity-20"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-purple-500 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MarketGang</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
              At MarketGang, we believe in the power of digital transformation. Our team of experts combines creativity, technology, and strategic thinking to deliver exceptional results for our clients.
            </p>
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                To empower businesses with innovative digital solutions that create sustainable growth 
                and competitive advantages in the ever-evolving digital landscape.
              </p>
            </div>
            
            <div 
              ref={statsRef}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "5+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "30+", label: "Team Members" },
                { number: "20+", label: "Industries Served" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-5 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{item.number}</div>
                  <div className="text-gray-600 dark:text-gray-300 mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}