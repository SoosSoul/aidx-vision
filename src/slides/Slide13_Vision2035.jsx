import { motion } from "framer-motion";
import {
  Activity,
  ScanSearch,
  Dna,
  ShieldCheck,
  Sparkles,
  Cpu,
} from "lucide-react";

const fadeCard = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] },
  viewport: { once: true, amount: 0.3 },
});

export default function Slide13_Vision2035() {
  const steps = [
    {
      icon: Activity,
      label: "Always‑on monitoring",
      text: "Wearables quietly track vitals for months  secure, low‑power, effortless.",
      delay: 0.15,
    },
    {
      icon: ScanSearch,
      label: "Pre‑visit analysis",
      text: "AI pre‑reads scans and labs, flags trends, and drafts notes before you arrive.",
      delay: 0.25,
    },
    {
      icon: Dna,
      label: "Personalized plan",
      text: "Genetics + history tailor prevention and treatment to each person.",
      delay: 0.35,
    },
  ];

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Fewer late‑stage cases",
      desc: "Earlier detection shifts diagnoses to stages I–II. Fewer emergencies, shorter stays, and better survival.",
    },
    {
      icon: Cpu,
      title: "Specialist Insight",
      desc: "Decision support brings subspecialist‑grade triage to any clinic, 24/7  reducing disparities.",
    },
    {
      icon: Sparkles,
      title: "Prevention by default",
      desc: "Risk scores + gentle nudges turn annual checkups into continuous, proactive care with tailored plans.",
    },
  ];

  return (
    <motion.section
      id="vision-2035"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="bg-[#FECACA] text-black text-xl sm:text-2xl font-semibold px-4 py-1 rounded-md">
          2035 vision
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-full md:max-w-2xl">
          Clinic of 2035: proactive, personalized, always‑on prevention as the
          default.
        </p>
      </motion.div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hero (row-span-2) */}
        <motion.div
          {...fadeCard(0.05)}
          className="lg:col-span-2 lg:row-span-2 bg-white text-black border border-black rounded-2xl overflow-hidden shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.01] hover:shadow-lg transition duration-300 flex flex-col"
        >
          <div className="px-6 pt-6">
            <div className="inline-flex items-center gap-1.5 bg-[#2B2D31] text-white font-semibold text-xs sm:text-sm px-2 py-[2px] rounded-md mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Clinic of 2035
            </div>
            <h3 className="text-lg font-semibold">
              From reactive to preventive care
            </h3>
            <div className="border-t border-black w-full my-2" />
          </div>

          <div className="px-6 pb-6 space-y-3">
            <ol className="list-decimal list-inside text-sm sm:text-base text-gray-800 leading-relaxed space-y-2">
              <li>Wearables monitor vitals for months quietly and securely.</li>
              <li>
                AI pre‑analyzes scans, labs, and genetics before your visit.
              </li>
              <li>
                A personalized plan is ready conditions predicted and prevented.
              </li>
            </ol>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              No more long waits. Care teams act early, visit time is spent on
              decisions (not data entry), and outcomes improve across entire
              populations.
            </p>
          </div>

          {/* Footer icons */}
          <div className="px-6 pb-6 flex items-center gap-3">
            {[Activity, ScanSearch, Dna].map((I, idx) => (
              <div
                key={idx}
                className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]"
              >
                <I className="w-4 h-4 text-black" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column steps 1 & 2 */}
        {steps.slice(0, 2).map((s, i) => {
          const Icon = s.icon;
          const rowClass = i === 0 ? "lg:row-start-1" : "lg:row-start-2";
          return (
            <motion.div
              key={i}
              {...fadeCard(s.delay)}
              className={`lg:col-start-3 ${rowClass} bg-white text-black border border-black rounded-2xl overflow-hidden shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.02] hover:shadow-lg transition duration-300 flex flex-col justify-between`}
            >
              <div className="px-6 pt-6">
                <div className="inline-flex items-center gap-2 bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
                  <Icon className="w-4 h-4" />
                  {s.label}
                </div>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  {s.text}
                </p>
                <div className="border-t border-black w-full my-4" />
              </div>

              <div className="px-6 pb-6">
                <div className="bg-[#FECACA] w-fit p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
                  <Icon className="w-4 h-4 text-black" />
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Row 3: Highlights fill cols 1–2 and MATCH style */}
        <div className="lg:col-span-2 lg:row-start-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={i}
                {...fadeCard(0.5 + i * 0.05)}
                className="bg-white text-black border border-black rounded-2xl shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.02] transition duration-300 flex flex-col justify-between"
              >
                {/* Header badge to match steps */}
                <div className="px-4 pt-4">
                  <div className="inline-flex items-center gap-2 bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
                    <Icon className="w-4 h-4" />
                    {h.title}
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    {h.desc}
                  </p>
                  <div className="border-t border-black w-full my-4" />
                </div>

                {/* Footer icon chip to match steps */}
                <div className="px-4 pb-4">
                  <div className="bg-[#FECACA] w-fit p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
                    <Icon className="w-4 h-4 text-black" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Row 3: Step 3 in col 3 */}
        <motion.div
          {...fadeCard(steps[2].delay)}
          className="lg:col-start-3 lg:row-start-3 bg-white text-black border border-black rounded-2xl overflow-hidden shadow-[0_4px_0_0_#2B2D31] hover:scale-[1.02] hover:shadow-lg transition duration-300 flex flex-col justify-between"
        >
          <div className="px-6 pt-6">
            <div className="inline-flex items-center gap-2 bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
              <Dna className="w-4 h-4" />
              {steps[2].label}
            </div>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              {steps[2].text}
            </p>
            <div className="border-t border-black w-full my-4" />
          </div>

          <div className="px-6 pb-6">
            <div className="bg-[#FECACA] w-fit p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
              <Dna className="w-4 h-4 text-black" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
