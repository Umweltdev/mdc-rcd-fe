import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { styles } from "../utils";

function CTA() {
  return (
    <div
      style={{ padding: "80px 20px", textAlign: "center" }}
      className="bg-slate-900"
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontSize: "40px",
            fontWeight: "700",
            color: "white",
            marginBottom: "24px",
          }}
        >
          Ready to Balance Your Pricing?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            fontSize: "20px",
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "40px",
          }}
        >
          Join businesses using smart algorithms to maintain profitability while
          rewarding loyalty.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{
              ...styles.button,
              fontSize: "18px",
              padding: "16px 40px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Install on Your Server <ArrowRight size={24} />
          </motion.button>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontSize: "14px",
            color: "rgba(255, 255, 255, 0.7)",
            marginTop: "24px",
          }}
        >
          No cloud subscription • Own your data • One-time setup
        </motion.p>
      </div>
    </div>
  );
}

export default CTA;
