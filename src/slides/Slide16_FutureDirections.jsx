import { motion } from "framer-motion";
import {
  UserCog,
  SlidersHorizontal,
  Dna,
  Atom,
  Cpu,
  Zap,
  LineChart,
  Radar,
  BellRing,
} from "lucide-react";

export default function Slide16_FutureDirections() {
  return (
    <motion.section
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 lg:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Section Header  SAME AS Slide15 */}
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="bg-[#FECACA] text-black text-xl sm:text-2xl font-semibold px-4 py-1 rounded-md">
          Looking Ahead
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-2xl">
          Future Directions &amp; Innovations Where AI diagnostics is heading
          next.
        </p>
      </motion.div>

      {/* 3 Cards in One Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {/* Card 1 */}
        <motion.div
          className="bg-white text-black border border-black rounded-2xl px-6 pt-6 pb-8 shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.01] hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
            Personalization
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Personalized treatment plans powered by AI
          </h3>
          <div className="border-t border-black w-full my-2" />
          <ul className="space-y-2 text-sm text-gray-800 leading-relaxed">
            <li className="flex items-start gap-2">
              <UserCog className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Patient specific models adapt to comorbidities & lifestyle.
            </li>
            <li className="flex items-start gap-2">
              <SlidersHorizontal className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Closed loop dose adjustments from real world outcomes.
            </li>
            <li className="flex items-start gap-2">
              <Dna className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Genomic & proteomic signals guide targeted therapies.
            </li>
          </ul>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white text-black border border-black rounded-2xl px-6 pt-6 pb-8 shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.01] hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
            AI × Quantum
          </div>
          <h3 className="text-lg font-semibold mb-2">
            AI + quantum computing for ultra-fast diagnostics
          </h3>
          <div className="border-t border-black w-full my-2" />
          <ul className="space-y-2 text-sm text-gray-800 leading-relaxed">
            <li className="flex items-start gap-2">
              <Atom className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Quantum kernels speed up pattern discovery in omics.
            </li>
            <li className="flex items-start gap-2">
              <Cpu className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Hybrid QPU/GPU pipelines for heavy workloads.
            </li>
            <li className="flex items-start gap-2">
              <Zap className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Rapid sims for drug response & molecule docking.
            </li>
          </ul>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white text-black border border-black rounded-2xl px-6 pt-6 pb-8 shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.01] hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
            Prevention
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Predictive analytics to stop diseases early
          </h3>
          <div className="border-t border-black w-full my-2" />
          <ul className="space-y-2 text-sm text-gray-800 leading-relaxed">
            <li className="flex items-start gap-2">
              <LineChart className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Early warning risk scores for proactive care.
            </li>
            <li className="flex items-start gap-2">
              <Radar className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Population-level surveillance & outbreak signals.
            </li>
            <li className="flex items-start gap-2">
              <BellRing className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Smart reminders for screenings & follow-ups.
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
