import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  Stethoscope,
  ShieldCheck,
  ScanSearch,
} from "lucide-react";

const fadeCard = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] },
  viewport: { once: true, amount: 0.3 },
});

export default function Slide04_AIIntro() {
  const cards = [
    {
      label: "Definition",
      icon: BrainCircuit,
      title: "AI in Diagnostics",
      description:
        "Algorithms learn from medical data to recognize patterns and support clinical decisions. Results are fast, consistent, and reproducible across large case volumes.",
      footIcon: Cpu,
      delay: 0.1,
    },
    {
      label: "Role",
      icon: Stethoscope,
      title: "Augment, Not Replace",
      description:
        "AI provides a data-driven second opinion; clinicians keep judgment, empathy, and accountability. The aim is safer, quicker decisions with fewer missed findings.",
      footIcon: ShieldCheck,
      delay: 0.2,
    },
    {
      label: "How It Helps",
      icon: Cpu,
      title: "From Data → Insight",
      description:
        "Prioritizes risky cases, highlights subtle signals, and reduces repetitive workload. This lets teams focus time on complex patients and treatment planning.",
      footIcon: ScanSearch,
      delay: 0.3,
    },
  ];

  return (
    <motion.section
      id="ai-intro"
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
          AI Foundations
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-full md:max-w-2xl">
          What is AI in diagnostics? Augment clinicians, don’t replace them.
        </p>
      </motion.div>

      {/* 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => {
          const Icon = card.icon;
          const FootIcon = card.footIcon;
          return (
            <motion.div
              key={i}
              variants={fadeCard(card.delay)}
              initial="initial"
              whileInView="whileInView"
              transition="transition"
              viewport="viewport"
              className="bg-white text-black border border-black rounded-2xl overflow-hidden shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.01] hover:shadow-lg transition duration-300 flex flex-col"
            >
              {/* Label + Title */}
              <div className="px-6 pt-6">
                <div className="inline-flex items-center gap-2 bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
                  <Icon className="w-4 h-4" />
                  {card.label}
                </div>
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                {/* Line under the title */}
                <div className="border-t border-black w-full my-2" />
              </div>

              {/* Description */}
              <div className="px-6 pb-6 flex-1">
                <p className="text-sm text-gray-800 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Single footer icon */}
              <div className="px-6 pb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#FECACA] w-fit p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]"
                >
                  <FootIcon className="w-4 h-4 text-black" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
