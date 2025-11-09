import React from "react";

export default function AboutCompany({ contentRef, statsRef }) {
  return (
    <div ref={contentRef} className="lg:w-1/2">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
        About{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ViralDon
        </span>
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        At ViralDon, we believe in the power of digital transformation. Our team
        of experts combines creativity with technical excellence to deliver
        solutions that drive real business growth.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        With years of experience in digital marketing, web development, and
        software engineering, we've helped hundreds of businesses establish a
        strong online presence and achieve their goals.
      </p>

      <div className="mb-10">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Our Mission
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          To empower businesses with innovative digital solutions that create
          sustainable growth and competitive advantages in the ever-evolving
          digital landscape.
        </p>
      </div>

      <div ref={statsRef} className="grid grid-cols-2 gap-6">
        {[
          { number: "5+", label: "Years Experience" },
          { number: "50+", label: "Projects Completed" },
          { number: "30+", label: "Team Members" },
          { number: "20+", label: "Industries Served" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-5 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {item.number}
            </div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
