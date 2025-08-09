import { motion } from "framer-motion";
import Rise from "../components/anim/Rise";
import {
  AlertTriangle,
  SearchCheck,
  HeartPulse,
  Award,
  ExternalLink,
} from "lucide-react";

const fadeCard = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.25, 1, 0.5, 1],
  },
  viewport: { once: true, amount: 0.3 },
});

const scenarios = [
  {
    role: "The Problem",
    title: "Millions Suffer",
    details: [
      "Each year, millions suffer due to late or inaccurate diagnoses, leading to advanced disease stages that are harder and more expensive to treat.",
      "Many conditions remain undetected until symptoms become severe, reducing survival chances dramatically.",
    ],
    icon: AlertTriangle,
    // WHO – Promoting cancer early diagnosis (works)
    link: "https://www.who.int/activities/promoting-cancer-early-diagnosis",
    delay: 0.1,
  },
  {
    role: "The Opportunity",
    title: "Early Detection",
    details: [
      "AI can analyze medical data fast, spotting subtle patterns humans may miss.",
      "Catching warning signs earlier lets patients start treatment sooner and recover better.",
    ],
    icon: SearchCheck,
    // American Cancer Society – Cervical cancer early detection (works)
    link: "https://www.cancer.org/cancer/types/cervical-cancer/detection-diagnosis-staging/detection.html",
    delay: 0.2,
  },
  {
    role: "The Impact",
    title: "Saving Lives",
    details: [
      "Research shows AI can improve detection in areas like breast cancer screening.",
      "Anticipating risk enables prevention and earlier, targeted care.",
    ],
    icon: HeartPulse,
    // Nature paper (with PubMed mirror if paywalled)
    link: "https://pubmed.ncbi.nlm.nih.gov/31894144/",
    delay: 0.3,
  },
  {
    role: "The Goal",
    title: "Better Outcomes",
    details: [
      "Early detection means less invasive care, shorter recovery, and lower costs.",
      "Aim: make healthcare more proactive, accessible, and effective.",
    ],
    icon: Award,
    // NIH Research Matters – early screening/diagnosis stories (works)
    link: "https://www.nih.gov/news-events/nih-research-matters/app-aids-early-screening-autism",
    delay: 0.4,
  },
];

export default function Slide02_Why() {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-3 sm:gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="bg-[#FECACA] text-black text-lg sm:text-xl md:text-2xl font-semibold px-4 py-1 rounded-md">
          Why this matters
        </span>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg md:ml-0 md:max-w-2xl max-w-full leading-relaxed break-words">
          <Rise>
            Late diagnoses cost lives. AI can change that. Earlier is better.
          </Rise>
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {scenarios.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={fadeCard(item.delay)}
              className="bg-white text-black rounded-3xl border border-black shadow-[0_4px_0_0_#2B2D31] px-5 sm:px-6 pt-6 pb-6 flex flex-col justify-between h-full will-change-transform transition-transform duration-300 md:hover:scale-[1.02] md:hover:shadow-lg"
            >
              {/* Role badge + icon */}
              <div className="inline-flex items-center gap-2 bg-[#2B2D31] text-white font-semibold text-xs sm:text-sm px-3 py-1 rounded-md mb-4 w-fit">
                <Icon className="w-4 h-4" />
                {item.role}
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <div className="border-t border-black w-full my-2" />

              <ul className="list-disc list-inside text-sm sm:text-base text-gray-800 leading-relaxed space-y-1 sm:space-y-1.5 mb-4">
                {item.details.map((line, idx) => (
                  <li key={idx} className="break-words">
                    {line}
                  </li>
                ))}
              </ul>

              {/* Per-card Read more */}
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm sm:text-base font-medium underline underline-offset-4 text-[#2B2D31] hover:opacity-80"
                whileHover={{ x: 2 }}
                aria-label={`Read more about ${item.title}`}
              >
                Read more <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
