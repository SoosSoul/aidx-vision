import { motion } from "framer-motion";
import {
  Scale,
  ShieldAlert,
  EyeOff,
  FileCheck,
  HeartHandshake,
} from "lucide-react";

export default function Slide11_Risks() {
  const rows = [
    {
      icon: <Scale className="w-5 h-5 text-black" />,
      risk: "Bias",
      note: "Unbalanced training data can yield unfair results (e.g., lower accuracy for certain demographics).",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-black" />,
      risk: "Data privacy & security",
      note: "Sensitive PHI must be protected end-to-end (storage, access controls, audit logs, encryption).",
    },
    {
      icon: <EyeOff className="w-5 h-5 text-black" />,
      risk: "Black-box models",
      note: "Hard to explain decisions; clinicians need rationale, feature attributions, and confidence scores.",
    },
    {
      icon: <FileCheck className="w-5 h-5 text-black" />,
      risk: "Regulation",
      note: "Strict validation, post-market surveillance, and compliance with standards before clinical use.",
    },
    // Highlight row (like the 'Total' row)
    {
      icon: <HeartHandshake className="w-5 h-5 text-black" />,
      risk: "Responsible AI takeaway",
      note: "Human-in-the-loop + bias audits + explainability + robust privacy practices = safer deployment.",
      isTotal: true,
    },
  ];

  return (
    <motion.section
      id="risks"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-[#FECACA] text-black text-xl sm:text-2xl font-semibold px-4 py-1 rounded-md">
          Challenges
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-full md:max-w-2xl">
          Build responsibly understand the common risks and how they affect
          clinical deployment.
        </p>
      </motion.div>

      {/* Table */}
      <div className="rounded-lg border border-black shadow-[0_4px_0_0_#2B2D31] overflow-hidden">
        <table className="w-full text-sm text-left bg-white">
          <thead className="bg-[#2B2D31] text-white">
            <tr>
              <th className="px-4 py-3 font-semibold border-r border-gray-700">
                Risk
              </th>
              <th className="px-4 py-3 font-semibold">
                What it means / examples
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={i}
                whileHover={{ scale: 1.01 }}
                className={`transition duration-200 ${
                  row.isTotal
                    ? "font-bold bg-[#FECACA]/30"
                    : i % 2 === 1
                    ? "bg-gray-100"
                    : ""
                } hover:bg-[#FECACA]/40`}
              >
                <td className="px-4 py-3 border-t border-gray-300 flex items-center gap-2">
                  {row.icon}
                  {row.risk}
                </td>
                <td className="px-4 py-3 border-t border-gray-300">
                  {row.note}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}
