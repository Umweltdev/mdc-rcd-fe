"use client";

import React from "react";
import { Shield, Zap, DollarSign, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { styles } from "../utils";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 12 },
  },
};

function Benefit() {
  const benefits = [
    {
      icon: <Shield size={24} color="white" />,
      gradient: "from-indigo-400 to-purple-500",
      title: "Self-Hosted",
      text: "Runs on your own servers. No cloud fees, no data sharing, complete control.",
    },
    {
      icon: <Zap size={24} color="white" />,
      gradient: "from-green-400 to-green-600",
      title: "Automatic",
      text: "Set it once and forget it. Prices and discounts adjust automatically.",
    },
    {
      icon: <DollarSign size={24} color="white" />,
      gradient: "from-red-400 to-orange-500",
      title: "Profitable",
      text: "Marketing costs never eat your margins. Guaranteed profitability.",
    },
    {
      icon: <Users size={24} color="white" />,
      gradient: "from-purple-500 to-violet-700",
      title: "Viral Growth",
      text: "Customers recruit customers through mutual benefit referrals.",
    },
  ];

  return (
    <div className="px-5 py-16" id='benefit'>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
          viewport={{ once: true }}
          className="text-4xl font-bold gradient-text text-center mb-16"
        >
          Why Businesses Love It
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
            //   variants={itemVariants}
              initial={{y: 90 + (i * 80)}}
              animate={{y: 0}}
              whileHover={{scale: 1.06}}
              transition={{duration: 2}}
              className={`statCard ease-in-out rounded-md hover:shadow-2xl shadow-sm p-6`}
            >
              <div
                className={`w-12 h-12 group-hover:translate-4 animate-pulse rounded-xl bg-gradient-to-r ${b.gradient} flex items-center justify-center mb-4`}
              >
                {b.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {b.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Benefit;
