"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientButton from "@/app/ui/GradientButton";
import { FaPaperPlane } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (contactRef.current && titleRef.current && formRef.current) {
      // Initial state
      gsap.set([titleRef.current, formRef.current], { opacity: 0, y: 30 });

      // Animation on scroll
      ScrollTrigger.create({
        trigger: contactRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });

          gsap.to(formRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3,
          });
        },
      });

      // Animate form inputs
      inputRefs.current.forEach((input, index) => {
        if (input) {
          gsap.fromTo(
            input,
            { opacity: 0, x: -20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: 0.5 + index * 0.1,
              scrollTrigger: {
                trigger: input,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const setInputRef = (index) => (el) => {
    inputRefs.current[index] = el;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Animation feedback
    if (formRef.current) {
      gsap.to(formRef.current, {
        scale: 0.98,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 -left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to grow your business? Let's discuss your project and create
            something amazing together.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-50/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div ref={setInputRef(0)}>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-3 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:outline-none transition-all shadow-sm"
                  placeholder="Your name"
                  required
                />
              </div>
              <div ref={setInputRef(1)}>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-3 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:outline-none transition-all shadow-sm"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div ref={setInputRef(2)}>
              <label
                htmlFor="subject"
                className="block text-gray-700 dark:text-gray-300 mb-3 font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:outline-none transition-all shadow-sm"
                placeholder="How can we help?"
                required
              />
            </div>
            <div ref={setInputRef(3)}>
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 mb-3 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 focus:outline-none transition-all shadow-sm"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>
            <GradientButton className={"w-full py-4"}>
              <div className="flex justify-center gap-2 items-center">
                <FaPaperPlane /> Send Message
              </div>
            </GradientButton>
          </form>
        </div>
      </div>
    </section>
  );
}
