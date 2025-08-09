import { motion } from "framer-motion";
import {
  Stethoscope,
  Activity,
  HeartPulse,
  FlaskConical,
  Microscope,
  TestTubes,
  BrainCircuit,
  ShieldCheck,
  FileSearch,
} from "lucide-react";

// ⬇️ add this
import asset from "@/asset";

export default function Slide03_Diagnostics() {
  const cards = [
    {
      label: "Definition",
      icon: Stethoscope,
      title: "Medical Diagnostics",
      image: "/images/diagnostics/definition.avif",
      description:
        "Identifying diseases by examining patient history, symptoms, and test results. It’s the bridge between data and accurate treatment.",
      extraIcons: [Activity, HeartPulse, FileSearch],
      delay: 0.1,
    },
    {
      label: "Core Inputs",
      icon: FlaskConical,
      title: "What We Use",
      image: "/images/diagnostics/core.avif",
      description:
        "Uses imaging for structure, lab tests for internal health, and physical exams for signs that machines can’t detect.",
      extraIcons: [Microscope, TestTubes, ShieldCheck],
      delay: 0.2,
    },
    {
      label: "Workflow",
      icon: BrainCircuit,
      title: "From Data → Decision",
      image: "/images/diagnostics/workflow.avif",
      description:
        "Gather information, analyze patterns, confirm with targeted tests, and decide on a treatment plan.",
      extraIcons: [ShieldCheck, Activity, HeartPulse],
      delay: 0.3,
      full: true,
    },
  ];

  return (
    <motion.section
      id="diagnostics"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="bg-[#FECACA] text-black text-xl sm:text-2xl font-semibold px-4 py-1 rounded-md">
          Foundations
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-full md:max-w-2xl">
          What is medical diagnostics? Turning patient data into clear clinical
          decisions.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards
          .filter((c) => !c.full)
          .map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                className="bg-white text-black border border-black rounded-2xl overflow-hidden shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.01] hover:shadow-lg transition duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: card.delay }}
                viewport={{ once: true }}
              >
                {/* Label + Title */}
                <div className="px-6 pt-6">
                  <div className="inline-flex items-center gap-2 bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
                    <Icon className="w-4 h-4" />
                    {card.label}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                </div>

                {/* Image */}
                {card.image && (
                  <div className="w-full h-28 sm:h-32 md:h-36 overflow-hidden">
                    <img
                      src={asset(card.image)}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Description + Icons */}
                <div className="px-6 pt-4 pb-8 flex flex-col justify-between flex-1">
                  <p className="text-sm text-gray-800 leading-relaxed mb-3">
                    {card.description}
                  </p>
                  <div className="flex gap-3">
                    {card.extraIcons.map((ExtraIcon, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]"
                      >
                        <ExtraIcon className="w-4 h-4 text-black" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}

        {/* Full-width card */}
        {cards
          .filter((c) => c.full)
          .map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={`full-${i}`}
                className="sm:col-span-2 bg-white text-black border border-black rounded-2xl overflow-hidden shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.01] hover:shadow-lg transition duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: card.delay }}
                viewport={{ once: true }}
              >
                {/* Label + Title */}
                <div className="px-6 pt-6">
                  <div className="inline-flex items-center gap-2 bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
                    <Icon className="w-4 h-4" />
                    {card.label}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                </div>

                {/* Image */}
                {card.image && (
                  <div className="w-full h-32 sm:h-36 md:h-40 overflow-hidden">
                    <img
                      src={asset(card.image)}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Description + Icons */}
                <div className="px-6 pt-4 pb-8 flex flex-col justify-between flex-1">
                  <p className="text-sm text-gray-800 leading-relaxed mb-3">
                    {card.description}
                  </p>
                  <div className="flex gap-3">
                    {card.extraIcons.map((ExtraIcon, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]"
                      >
                        <ExtraIcon className="w-4 h-4 text-black" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>
    </motion.section>
  );
}
