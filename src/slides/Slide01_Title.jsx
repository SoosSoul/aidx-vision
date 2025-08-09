import React, { useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

// ⬇️ add this
import asset from "@/asset";

export default function Slide01_Title() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <div
      className="bg-white text-black min-h-screen flex items-center"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <section className="max-w-7xl mx-auto px-10 py-20 flex flex-col lg:flex-row justify-between items-center gap-20 w-full">
        {/* Left Text Section */}
        <motion.div
          className="w-full lg:w-1/2 space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {/* Kicker */}
          <motion.span
            className="text-[#C40000] font-medium tracking-wider uppercase mx-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI in Healthcare
          </motion.span>

          {/* Title */}
          <motion.h2
            className="text-5xl font-semibold tracking-tight leading-snug"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AI in Medical Diagnostics
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Over the past decade, medical diagnostics has shifted from relying
            solely on human expertise to combining it with AI driven insights.
            This transformation means faster results, higher accuracy, and the
            ability to detect diseases earlier than ever before.
          </motion.p>
        </motion.div>

        {/* Right 3D Section */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {/* Loader while spline is loading */}
          {!isSplineLoaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white rounded-xl shadow-md">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#C40000] border-t-transparent"></div>
            </div>
          )}

          <div className="w-full h-[500px] overflow-hidden rounded-xl shadow-md">
            <Spline
              scene={asset("models/soul_neuron.splinecode")} // ⬅️ use asset()
              onLoad={() => setIsSplineLoaded(true)}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
