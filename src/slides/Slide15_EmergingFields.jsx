import { motion } from "framer-motion";
import {
  Microscope,
  Brain,
  Activity,
  FileSearch,
  SatelliteDish,
  PhoneCall,
  Wifi,
  AlertTriangle,
  Watch,
  HeartPulse,
  ShieldCheck,
  BellRing,
} from "lucide-react";

export default function Slide15_EmergingFields() {
  return (
    <motion.section
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 lg:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Section Header */}
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="bg-[#FECACA] text-black text-xl sm:text-2xl font-semibold px-4 py-1 rounded-md">
          Innovation
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-2xl">
          AI in Emerging Diagnostic Fields Breaking new ground in healthcare.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Card 1 */}
        <motion.div
          className="bg-white text-black border border-black rounded-2xl px-6 pt-6 pb-8 shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.01] hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
            Rare Diseases
          </div>
          <h3 className="text-lg font-semibold mb-2">Rare disease detection</h3>
          <div className="border-t border-black w-full my-2" />
          <ul className="space-y-2 text-sm text-gray-800 leading-relaxed">
            <li className="flex items-start gap-2">
              <Microscope className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Model ensembles flag ultra-low prevalence conditions earlier.
            </li>
            <li className="flex items-start gap-2">
              <Brain className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Multimodal inputs (labs + imaging + notes) boost precision.
            </li>
            <li className="flex items-start gap-2">
              <Activity className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Few-shot learning adapts to small labeled cohorts safely.
            </li>
            <li className="flex items-start gap-2">
              <FileSearch className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Continuous learning with clinician feedback loops.
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
            Remote Care
          </div>
          <h3 className="text-lg font-semibold mb-2">Remote diagnostics</h3>
          <div className="border-t border-black w-full my-2" />
          <ul className="space-y-2 text-sm text-gray-800 leading-relaxed">
            <li className="flex items-start gap-2">
              <SatelliteDish className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Edge models triage cases offline in rural clinics.
            </li>
            <li className="flex items-start gap-2">
              <PhoneCall className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Telemedicine + AI summaries reduce specialist load.
            </li>
            <li className="flex items-start gap-2">
              <Wifi className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Low-bandwidth compression for images & waveforms.
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Risk scoring to prioritize urgent follow-ups.
            </li>
          </ul>
        </motion.div>

        {/* Full-width Card */}
        <motion.div
          className="md:col-span-2 bg-white text-black border border-black rounded-2xl px-6 pt-6 pb-8 shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.01] hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
            Wearables
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Wearables & real time AI
          </h3>
          <div className="border-t border-black w-full my-2" />
          <ul className="space-y-2 text-sm text-gray-800 leading-relaxed">
            <li className="flex items-start gap-2">
              <Watch className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Continuous vitals (HRV, SpO₂, temp, ECG patches) streamed
              securely.
            </li>
            <li className="flex items-start gap-2">
              <HeartPulse className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Anomaly detection for arrhythmias, sleep apnea, glycemic risk.
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              On-device inference preserves privacy and lowers latency.
            </li>
            <li className="flex items-start gap-2">
              <BellRing className="w-5 h-5 text-[#2B2D31] mt-0.5" />
              Context-aware nudges improve adherence and outcomes.
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
