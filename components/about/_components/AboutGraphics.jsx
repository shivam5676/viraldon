import React from "react";

export default function AboutGraphics({ imageRef }) {
  return (
    <div ref={imageRef} className="lg:w-1/2 relative">
      <div className="sticky top-20">
        {/* Floating elements */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-3xl w-full h-96 flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
          <div className="text-center p-8 relative z-10">
            <div className="text-7xl mb-6 animate-pulse">🚀</div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Innovation & Excellence
            </h3>
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
  );
}
