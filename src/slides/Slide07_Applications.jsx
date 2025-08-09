import { motion } from "framer-motion";
import {
  ScanSearch,
  Microscope,
  HeartPulse,
  Eye,
  Camera,
  Activity,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

// ⬇️ add this
import asset from "@/asset";

const fadeCard = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] },
  viewport: { once: true, amount: 0.3 },
});

export default function Slide07_Applications() {
  const cards = [
    // Row 1: Radiology (wide) + Pathology (normal)
    {
      label: "Radiology",
      icon: ScanSearch,
      title: "Tumor & Fracture Detection",
      image: "/images/apps/radiology.avif",
      description:
        "Flags nodules, bleeds, and fractures in seconds to speed triage and reduce misses.",
      footIcon: Camera,
      delay: 0.1,
      className: "lg:col-span-2", // wide hero
    },
    {
      label: "Pathology",
      icon: Microscope,
      title: "Biopsy Slide Analysis",
      image: "/images/apps/pathology.avif",
      description:
        "Classifies tissue patterns and highlights suspicious regions for review.",
      footIcon: Microscope,
      delay: 0.2,
      className: "", // normal
    },

    // Row 2: Cardiology (normal) + Ophthalmology (now wide beside it)
    {
      label: "Cardiology",
      icon: HeartPulse,
      title: "Arrhythmias & Risk",
      image: "/images/apps/cardiology.avif",
      description:
        "Reads ECGs, predicts heart‑failure risk, and prioritizes high‑risk cases.",
      footIcon: Stethoscope,
      delay: 0.25,
      className: "", // normal
    },
    {
      label: "Ophthalmology",
      icon: Eye,
      title: "Diabetic Retinopathy Screening",
      image: "/images/apps/ophthalmology.avif",
      description:
        "Detects early retinal changes to prevent avoidable vision loss.",
      footIcon: ShieldCheck,
      delay: 0.28,
      className: "lg:col-span-2", // make this take two columns
    },
  ];

  return (
    <motion.section
      id="apps"
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
          In practice
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-full md:max-w-2xl">
          Real world applications across specialties.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => {
          const Icon = card.icon;
          const FootIcon = card.footIcon;

          const imgHeight = card.className?.includes("col-span-2")
            ? "h-36 sm:h-40 md:h-44"
            : "h-28 sm:h-32 md:h-36";

          return (
            <motion.article
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

              {/* Image */}
              {card.image && (
                <div className={`w-full ${imgHeight} overflow-hidden`}>
                  <img
                    src={asset(card.image)}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Description + footer icon UNDER the text */}
              <div className="px-6 pt-4 pb-6 flex flex-col items-start gap-3 flex-1">
                <p className="text-sm text-gray-800 leading-relaxed">
                  {card.description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]"
                  aria-hidden="true"
                >
                  <FootIcon className="w-4 h-4 text-black" />
                </motion.div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
