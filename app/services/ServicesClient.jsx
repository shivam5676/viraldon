'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesClient() {
  const [activeService, setActiveService] = useState(0);
  const servicesRef = useRef(null);
  const serviceCardsRef = useRef([]);
  const detailViewRef = useRef(null);

  useEffect(() => {
    // Auto rotate services
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % servicesData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (servicesRef.current) {
      serviceCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, rotationX: -15 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.8,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }
    
    // Animate detail view when active service changes
    if (detailViewRef.current) {
      gsap.fromTo(
        detailViewRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.6, 
          ease: "power3.out"
        }
      );
    }
  }, [activeService]);

  const servicesData = [
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your brand visibility and drive conversions.",
      icon: "📈",
      features: [
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising (PPC)",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing Campaigns",
        "Analytics & Reporting"
      ]
    },
    {
      title: "Web Development",
      description: "Custom websites and web applications that are fast, responsive, and user-friendly.",
      icon: "💻",
      features: [
        "Responsive Website Design",
        "E-commerce Solutions",
        "CMS Development",
        "Web Application Development",
        "Website Maintenance",
        "Performance Optimization"
      ]
    },
    {
      title: "Software Solutions",
      description: "Tailored software solutions to streamline your business operations and increase productivity.",
      icon: "⚙️",
      features: [
        "Custom Software Development",
        "Mobile App Development",
        "Enterprise Solutions",
        "API Integration",
        "System Automation",
        "Cloud Solutions"
      ]
    },
    {
      title: "Brand Strategy",
      description: "Building and strengthening your brand identity to stand out in the competitive market.",
      icon: "🎯",
      features: [
        "Brand Identity Design",
        "Market Research & Analysis",
        "Competitor Analysis",
        "Brand Positioning",
        "Visual Branding",
        "Brand Guidelines"
      ]
    }
  ];

  const setServiceCardRef = (index) => (el) => {
    serviceCardsRef.current[index] = el;
  };

  return (
    <section 
      id="services" 
      ref={servicesRef}
      className="py-32 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden min-h-screen"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            End-to-end digital solutions designed to accelerate your business growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              ref={setServiceCardRef(index)}
              className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-800 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer ${
                activeService === index ? 'ring-4 ring-blue-500 scale-105' : ''
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline text-sm"
              >
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Detailed Service View */}
        <div 
          ref={detailViewRef}
          className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 text-center">
              <div className="text-8xl mb-4 transition-transform duration-500 hover:scale-110">{servicesData[activeService].icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {servicesData[activeService].title}
              </h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                {servicesData[activeService].description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicesData[activeService].features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-4 bg-white/50 dark:bg-gray-700/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-600"
                  >
                    <span className="text-blue-500 mr-3 mt-1 text-xl">●</span>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}