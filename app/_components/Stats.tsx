"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { styles } from "../utils";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 12 },
  },
};

function Stats() {
  const stats = [
    {
      value: "8.7%",
      gradient: "from-indigo-400 to-purple-500",
      label: "Average Price Adjustment",
    },
    {
      value: "12.3%",
      gradient: "from-green-400 to-green-600",
      label: "Top Customer Discount",
    },
    {
      value: "83.5",
      gradient: "from-red-400 to-orange-500",
      label: "Equilibrium Score",
    },
    {
      value: "∞",
      gradient: "from-purple-500 to-violet-700",
      label: "Referral Duration",
    },
  ];

  return (
    <div className="px-5 py-16">
      <div className="max-w-6xl mx-auto">
        <div style={styles.glassCard}>
          <div className="p-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 60 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-800 text-center mb-16"
            >
              The Numbers Speak
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-10 sm:grid-cols-2 relative lg:grid-cols-4 text-center"
            >
              {stats.map((stat, i) => (
                <motion.div key={i} variants={itemVariants} className="hover:scale-105">
                  <div
                    className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
