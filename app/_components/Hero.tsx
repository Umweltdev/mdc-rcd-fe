'use client'
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
// import "./hero.css"; // external styles for glassmorphism, shimmer, float

function Hero() {
  const [mounted, setMounted] = useState(false);
  const [badgeHovered, setBadgeHovered] = useState(false);
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Floating particles
  const particles = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className="absolute rounded-full backdrop-blur-[1px]"
      style={{
        width: `${Math.random() * 60 + 20}px`,
        height: `${Math.random() * 60 + 20}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        background: `linear-gradient(135deg, rgba(103, 126, 234, ${
          Math.random() * 0.1 + 0.05
        }), rgba(139, 92, 246, ${Math.random() * 0.1 + 0.05}))`,
        animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  ));

  return (
    <div className="relative flex items-center min-h-screen px-5 py-20 text-center overflow-hidden" id='home'>
      {particles}

      {/* Gradient orb backgrounds */}
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full blur-[60px] z-[1]"
        style={{ background: "radial-gradient(circle, rgba(103, 126, 234, 0.1) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-[10%] left-[10%] w-[250px] h-[250px] rounded-full blur-[60px] z-[1]"
        style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div
          className={`glass-card transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <div className="py-20 px-10">
            {/* Badge */}
            <div className="mb-8">
              <span
                className={`badge shimmer-effect inline-block transition-all ${
                  badgeHovered ? "scale-105 -translate-y-0.5 shadow-lg" : ""
                }`}
                onMouseEnter={() => setBadgeHovered(true)}
                onMouseLeave={() => setBadgeHovered(false)}
              >
                Self-Hosted Pricing Intelligence
              </span>
            </div>

            {/* Title */}
            <h1
              className={`gradient-text hero-title text-[56px] font-extrabold leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-br from-gray-800 to-gray-600 transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              The MCD-RCD System
            </h1>

            {/* Subtitle */}
            <p
              className={`hero-subtitle text-2xl md:text-[28px] font-semibold text-gray-700 max-w-[800px] mx-auto mb-4 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Smart Pricing That Works for Everyone
            </p>

            {/* Description */}
            <p
              className={`text-lg text-gray-500 max-w-[700px] mx-auto mb-10 leading-relaxed transition-all duration-700 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Automatically balance marketing costs with customer loyalty.
              Prices adjust to cover advertising while loyal customers earn growing discounts.
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <button
                className={`primary-btn flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-transform ${
                  primaryHovered ? "scale-105 -translate-y-1 shadow-xl" : ""
                }`}
                onMouseEnter={() => setPrimaryHovered(true)}
                onMouseLeave={() => setPrimaryHovered(false)}
              >
                Get Started <ArrowRight size={20} />
              </button>

              <button
                className={`secondary-btn px-8 py-4 rounded-xl font-semibold text-[#667eea] transition-transform ${
                  secondaryHovered ? "scale-105 -translate-y-1 shadow-lg" : ""
                }`}
                onMouseEnter={() => setSecondaryHovered(true)}
                onMouseLeave={() => setSecondaryHovered(false)}
              >
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;