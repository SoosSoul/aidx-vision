import { motion } from "framer-motion";
import {
  Workflow,
  Database,
  LibraryBig,
  BrainCircuit,
  Stethoscope,
} from "lucide-react";

const fadeCard = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] },
  viewport: { once: true, amount: 0.3 },
});

export default function Slide06_Pipeline() {
  return (
    <motion.section
      id="pipeline"
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
          Workflow
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-full md:max-w-2xl">
          How AI works in diagnostics a clear path from raw data to actionable
          insight.
        </p>
      </motion.div>

      {/* Full-width card */}
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
              Pipeline
            </div>
            <h3 className="text-lg font-semibold">How AI flows end-to-end</h3>
            <div className="border-t border-black w-full my-2" />
          </div>

          {/* Steps */}
          <div className="px-6 pb-6">
            <ol className="list-decimal list-inside text-sm sm:text-base text-gray-800 leading-relaxed space-y-2">
              <li>
                <strong>Data collection:</strong> Patient history, lab results,
                and imaging are gathered and converted into a standardized
                format. This ensures every detail is consistent and ready for
                analysis.
              </li>
              <li>
                <strong>Model comparison:</strong> The system compares case
                features against massive medical databases. This helps it find
                patterns and match similarities with past cases quickly.
              </li>
              <li>
                <strong>Prediction:</strong> The AI produces a ranked list of
                possible diagnoses along with probability scores and supporting
                evidence, helping narrow down the options.
              </li>
              <li>
                <strong>Decision support:</strong> The clinician reviews the
                AI’s suggestions, cross-checks with their expertise, and decides
                on the most suitable next step or treatment plan.
              </li>
            </ol>
          </div>

          {/* Footer icons */}
          <div className="px-6 pb-6 flex items-center gap-3">
            <div className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
              <Database className="w-4 h-4 text-black" />
            </div>
            <div className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
              <LibraryBig className="w-4 h-4 text-black" />
            </div>
            <div className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
              <BrainCircuit className="w-4 h-4 text-black" />
            </div>
            <div className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
              <Stethoscope className="w-4 h-4 text-black" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
