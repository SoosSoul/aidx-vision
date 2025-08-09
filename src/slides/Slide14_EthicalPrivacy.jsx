import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileLock,
  Scale,
  Eye,
  Lock,
  AlertTriangle,
} from "lucide-react";

const challenges = [
  {
    icon: FileLock,
    text: "Protecting patient data from misuse, breaches, or unauthorized access  ensuring confidentiality at all times.",
  },
  {
    icon: ShieldCheck,
    text: "Meeting HIPAA, GDPR, and other international compliance requirements for all AI-powered diagnostic systems.",
  },
  {
    icon: Scale,
    text: "Reducing bias in algorithms to avoid diagnostic errors that may disproportionately affect certain demographics.",
  },
  {
    icon: Eye,
    text: "Ensuring transparency in AI decision-making so clinicians and patients can understand how diagnoses are made.",
  },
  {
    icon: Lock,
    text: "Maintaining up-to-date security protocols to protect sensitive medical data from evolving cyber threats.",
  },
  {
    icon: AlertTriangle,
    text: "Balancing innovation with ethical responsibility  avoiding misuse of AI tools in unverified clinical settings.",
  },
];

export default function Slide14_EthicalPrivacy() {
  const midpoint = Math.ceil(challenges.length / 2);
  const leftList = challenges.slice(0, midpoint);
  const rightList = challenges.slice(midpoint);

  return (
    <motion.section
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 lg:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
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
          Ethical & Privacy Challenges
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-2xl">
          Safeguarding trust in AI diagnostics by addressing risks in privacy,
          fairness, and transparency.
        </p>
      </motion.div>

      {/* Full-width Card */}
      <motion.div
        className="bg-white text-black border border-black rounded-2xl px-6 pt-6 pb-8 shadow-[0_4px_0_0_#2B2D31] hover:shadow-lg transition duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="inline-block bg-[#2B2D31] text-white font-semibold text-sm px-3 py-1 rounded-md mb-3">
          Challenges
        </div>
        <h3 className="text-lg font-semibold mb-2">
          Key Risks & Responsibilities
        </h3>
        <div className="border-t border-black w-full my-2 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          {/* Left Column */}
          <ul className="space-y-4 text-sm text-gray-800 leading-relaxed">
            {leftList.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
                    <Icon className="w-4 h-4 text-black" />
                  </div>
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>

          {/* Right Column */}
          <ul className="space-y-4 text-sm text-gray-800 leading-relaxed border-l border-gray-300 md:pl-10">
            {rightList.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i} className="flex items-start gap-3">
                  <div className="bg-[#FECACA] p-2 rounded-md border border-black shadow-[0_2px_0_0_#2B2D31]">
                    <Icon className="w-4 h-4 text-black" />
                  </div>
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}
