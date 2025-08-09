import { motion } from "framer-motion";
import {
  Workflow,
  Eye,
  BrainCircuit,
  Microscope,
  ActivitySquare,
  Play,
} from "lucide-react";

// ⬇️ Add this
import asset from "../asset";

const fadeCard = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] },
  viewport: { once: true, amount: 0.3 },
});

export default function Slide08_CaseDeepMind() {
  return (
    <motion.section
      id="cs-deepmind"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header (matches Slide06 design) */}
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="bg-[#FECACA] text-black text-xl sm:text-2xl font-semibold px-4 py-1 rounded-md">
          Case study
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-full md:max-w-2xl">
          Google DeepMind eye disease detection. Triaging sight-threatening
          cases.
        </p>
      </motion.div>

      {/* Single full-width card */}
      <div className="grid grid-cols-1">
        <motion.div
          variants={fadeCard(0.1)}
          initial="initial"
          whileInView="whileInView"
          transition="transition"
          viewport="viewport"
          className="bg-white text-black border border-black rounded-2xl overflow-hidden shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.01] hover:shadow-lg transition duration-300"
        >
          {/* Label + Title */}
          <div className="px-6 pt-6">
            <div className="inline-flex items-center gap-2 bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
              <Workflow className="w-4 h-4" />
              DeepMind
            </div>
            <h3 className="text-lg font-semibold">
              Retinal AI what it achieves
            </h3>
            <div className="border-t border-black w-full my-2" />
          </div>

          {/* Points + extra context */}
          <div className="px-6 pb-4">
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 leading-relaxed space-y-2">
              <li>
                Detects <strong>50+ eye diseases</strong> from retinal scans.
              </li>
              <li>
                Matches or exceeds <strong>top specialist performance</strong>{" "}
                in trials.
              </li>
              <li>
                <strong>Prioritizes urgent cases</strong> within 24 hours to
                reduce vision loss.
              </li>
            </ul>

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              This AI system analyzes high-resolution retinal images to identify
              patterns linked to conditions like diabetic retinopathy, macular
              degeneration, and glaucoma. By combining deep learning with
              large-scale medical datasets, it flags risk, ranks likely
              diagnoses, and routes urgent cases for rapid review helping
              clinicians intervene earlier and prevent irreversible vision loss.
            </p>
          </div>

          {/* Video (slightly taller, still compact) */}
          <div className="px-6 pb-6">
            <div className="w-full h-64 sm:h-72 md:h-80 rounded-lg border border-black overflow-hidden shadow-[0_2px_0_0_#2B2D31]">
              {/* Local video example */}
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                src={asset("videos/deepmind-retina.mp4")}
              />
            </div>
          </div>

          {/* Footer icons (same style as Slide06) */}
          <div className="px-6 pb-6 flex items-center gap-3">
            <div className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
              <Eye className="w-4 h-4 text-black" />
            </div>
            <div className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
              <Microscope className="w-4 h-4 text-black" />
            </div>
            <div className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
              <BrainCircuit className="w-4 h-4 text-black" />
            </div>
            <div className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
              <ActivitySquare className="w-4 h-4 text-black" />
            </div>
            <div className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
              <Play className="w-4 h-4 text-black" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
