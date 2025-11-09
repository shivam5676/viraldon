"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function TeamClient() {
  const [activeTab, setActiveTab] = useState("all");
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const tabsRef = useRef(null);
  const cultureRef = useRef(null);
  const memberRefs = useRef([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Animate title and subtitle
    if (titleRef.current && subtitleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1 }
      );
    }

    // Animate tabs
    if (tabsRef.current) {
      gsap.fromTo(
        tabsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.2 }
      );
    }

    // Animate team members with stagger effect
    memberRefs.current.forEach((member, index) => {
      if (member) {
        gsap.fromTo(
          member,
          { opacity: 0, y: 30, rotationY: -10 },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 0.6,
            delay: 0.3 + index * 0.1,
            scrollTrigger: {
              trigger: member,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Animate culture section
    if (cultureRef.current) {
      gsap.fromTo(
        cultureRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.4,
          scrollTrigger: {
            trigger: cultureRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [activeTab]);

  const setMemberRef = (index) => (el) => {
    memberRefs.current[index] = el;
  };

  const teamMembers = [
    {
      id: 1,
      name: "Ajay Pratap Singh",
      role: "CEO & Founder",
      department: "Leadership",
      bio: "Digital marketing expert with 10+ years of experience helping businesses grow their online presence.",
      image: "/team/ajay_pratap_singh.jpg",
      social: [
        {
          type: "instagram",
          icon: FaInstagram,
          link: "https://instagram.com/ajay_thakur__50",
        },
      ],
    },
    {
      id: 2,
      name: "Shivam Singh ",
      role: "CTO,Creative Director & Lead Developer ",
      department: "Design",
      bio: "Award-winning Developer and Creative Director specializing in brand identity and user experience.",
      image: "/team/Shivam_singh.jpg",
      social: [
        {
          type: "linkedin",
          icon: FaLinkedin,
          link: "https://linkedin.com/in/shivam-singh-rajawat",
        },
        {
          type: "instagram",
          icon: FaInstagram,
          link: "https://instagram.com/thakur_sahab24",
        },
      ],
    },
    {
      id: 3,
      name: "Vijay Singh",
      role: "Lead Developer",
      department: "Development",
      bio: "Full-stack developer with expertise in modern web technologies and scalable solutions.",
      image: "/team/vijay_singh.jpg",
      social: [
        {
          type: "linkedin",
          icon: FaLinkedin,
          link: "https://linkedin.com/in/theajthakur",
        },
        {
          type: "x",
          icon: FaXTwitter,
          link: "https://linkedin.com/in/theajthakur",
        },
        {
          type: "instagram",
          icon: FaInstagram,
          link: "https://instagram.com/aj_thakur_rock",
        },
      ],
    },
  ];

  const departments = [
    "all",
    "Leadership",
    "Design",
    "Development",
    "Marketing",
  ];

  const filteredMembers =
    activeTab === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.department === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0) 70%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Meet the talented professionals dedicated to helping your business
            thrive in the digital world
          </p>
        </div>

        {/* Department Tabs */}
        <div
          ref={tabsRef}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveTab(dept)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === dept
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-2xl"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg"
              }`}
            >
              {dept.charAt(0).toUpperCase() + dept.slice(1)}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              ref={setMemberRef(index)}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>

                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-56 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentNode.nextSibling.style.display = "flex";
                      }}
                    />
                  </div>
                  <div
                    className="bg-gray-200 border-2 border-dashed rounded-2xl w-36 h-36 flex items-center justify-center relative z-10"
                    style={{ display: "none" }}
                  >
                    <span className="text-gray-500 text-lg">Profile Image</span>
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-white dark:bg-gray-900 px-4 py-2 rounded-full text-sm font-bold text-blue-600 shadow-lg">
                  {member.department}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4 font-medium">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {member.bio}
                </p>
                <div className="flex space-x-4">
                  {member.social?.map((e, i) => {
                    const Icon = e.icon;
                    return (
                      <div
                        key={i}
                        className="flex justify-center items-center p-2 rounded-full bg-white/10 text-white hover:text-blue-600 hover:bg-blue-600/10 transition-all"
                      >
                        <a href={e.link} target="_blank">
                          <Icon className="text-xl" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Culture Section */}
        <div
          ref={cultureRef}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Culture
              </span>
            </h2>
            <p className="text-xl mb-12">
              We believe in fostering an environment of creativity,
              collaboration, and continuous learning. Our team is passionate
              about staying ahead of industry trends and delivering exceptional
              results for our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
              {[
                {
                  icon: "🤝",
                  title: "Collaboration",
                  description: "We work together to achieve common goals",
                },
                {
                  icon: "🚀",
                  title: "Innovation",
                  description:
                    "We embrace new ideas and cutting-edge technologies",
                },
                {
                  icon: "🌱",
                  title: "Growth",
                  description:
                    "We invest in our team's professional development",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg opacity-90">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
