import { motion } from "framer-motion";
import {
  BrainCircuit,
  Layers,
  ScanSearch,
  FileText,
  Cpu,
  Network,
  Camera,
  MessageSquareText,
  Activity,
} from "lucide-react";

const fadeCard = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] },
  viewport: { once: true, amount: 0.3 },
});

export default function Slide05_Tech() {
  const cards = [
    {
      label: "Machine Learning (ML)",
      icon: BrainCircuit,
      title: "Learns Patterns → Predicts Outcomes",
      description:
        "Finds relationships in structured data (labs, vitals, demographics) to estimate risk and suggest likely diagnoses fast and consistent at scale.",
      footIcon: Cpu,
      delay: 0.1,
      className: "lg:col-span-2", // WIDE
    },
    {
      label: "Deep Learning (DL)",
      icon: Layers,
      title: "Neural Nets for Complex Signals",
      description:
        "Convolutional and transformer models extract features from images, waveforms, and high dimensional data with minimal manual tuning, improving accuracy over time.",
      footIcon: Network,
      delay: 0.2,
      className: "lg:row-span-2 lg:col-start-3", // TALL
    },
    {
      label: "Computer Vision",
      icon: ScanSearch,
      title: "Sees What’s Subtle in Imaging",
      description:
        "Detects nodules, fractures, bleeds, and segmentation masks on X‑rays, CT, MRI enabling rapid triage and consistent decision support.",
      footIcon: Camera,
      delay: 0.25,
      className: "", // NORMAL
    },
    // NEW card to fill the blank beside Computer Vision
    {
      label: "Time Series Modeling",
      icon: Activity,
      title: "ECG/EEG & Vitals Understanding",
      description:
        "Learns temporal patterns to spot arrhythmias, seizures, and instability from continuous monitors; smooths noise and flags early anomalies.",
      footIcon: Activity,
      delay: 0.28,
      className: "", // NORMAL (sits next to Computer Vision)
    },
    {
      label: "Natural Language Processing (NLP)",
      icon: FileText,
      title: "Understands Clinical Text",
      description:
        "Summarizes notes, extracts key findings, links reports to codes, and surfaces longitudinal trends turning free text into structured insight.",
      footIcon: MessageSquareText,
      delay: 0.3,
      className: "lg:col-span-3", // FULL WIDTH
    },
  ];

  return (
    <motion.section
      id="tech"
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
        <span className="bg[#FECACA] bg-[#FECACA] text-black text-xl sm:text-2xl font-semibold px-4 py-1 rounded-md">
          Toolbox
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-full md:max-w-2xl">
          Core AI technologies used the stack behind modern diagnostic systems.
        </p>
      </motion.div>

      {/* Collage layout: wide + tall + (normal + normal) + full width */}
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
              className={`bg-white text-black border border-black rounded-2xl overflow-hidden shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.01] hover:shadow-lg transition duration-300 flex flex-col ${card.className}`}
            >
              {/* Label + Title */}
              <div className="px-6 pt-6">
                <div className="inline-flex items-center gap-2 bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
                  <Icon className="w-4 h-4" />
                  {card.label}
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
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
