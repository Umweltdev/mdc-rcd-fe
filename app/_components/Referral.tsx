"use client";

import { Check } from "lucide-react";
import React from "react";
import { styles } from "../utils";

function Referral() {
  return (
    <div className="px-5 py-16 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold gradient-text text-center mb-16 animate-fade-in">
          The Viral Referral Network
        </h2>

        <div style={styles.glassCard}>
          <div className="p-4 md:p-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left side */}
              <div className="animate-slide-up p-4 md:p-0">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Everyone Wins, Forever
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Unlike traditional referral programs with one-time bonuses, our
                  system creates permanent economic bonds between customers.
                  Every purchase benefits both parties.
                </p>

                <div className="space-y-4">
                  {[
                    "Every customer gets a unique sharing code",
                    "Collect codes from multiple friends",
                    "Both parties benefit on every transaction",
                    "Higher discount = more valuable referrer",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 animate-fade-in"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <Check className="text-green-500" size={20} />
                      <span className="text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg animate-fade-in-up">
                <h4 className="text-sm font-semibold text-gray-500 mb-6 tracking-wide">
                  EXAMPLE SCENARIO
                </h4>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      color: "bg-indigo-500",
                      text: "Friend shares code (15% discount tier)",
                    },
                    {
                      step: "2",
                      color: "bg-indigo-500",
                      text: "You shop using their code",
                    },
                    {
                      step: "3",
                      color: "bg-green-500",
                      text: "Both get permanent benefits!",
                      bold: true,
                    },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 animate-slide-up"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      <div
                        className={`${s.color} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold`}
                      >
                        {s.step}
                      </div>
                      <span
                        className={`${
                          s.bold ? "font-semibold" : ""
                        } text-gray-700`}
                      >
                        {s.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stats box */}
                <div className="bg-white rounded-xl p-4 flex justify-around mt-6 shadow-md animate-bounce-slow">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">
                      FRIEND GAINS
                    </div>
                    <div className="text-xl font-bold text-indigo-500">
                      +0.5%
                    </div>
                  </div>
                  <div className="w-px bg-gray-200" />
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">YOU GAIN</div>
                    <div className="text-xl font-bold text-green-500">
                      +0.5%
                    </div>
                  </div>
                </div>
              </div>
              {/* End right side */}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
        .animate-slide-up {
          animation: slide-up 1s ease forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Referral;
