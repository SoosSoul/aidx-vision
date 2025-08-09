import { useState } from "react";
import {
  Minus,
  Plus,
  HeartPulse,
  SearchCheck,
  Globe2,
  Stethoscope,
  PiggyBank,
  BrainCircuit,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const cardHover = {
  whileHover: {
    scale: 1.03,
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.08)",
    transition: { duration: 0.3 },
  },
};

const benefits = [
  {
    icon: <HeartPulse className="w-6 h-6 text-black" />,
    title: "Early Detection",
    description: (
      <p>
        Improves survival rates by identifying conditions at earlier, more
        treatable stages.
      </p>
    ),
    delay: 0.1,
  },
  {
    icon: <SearchCheck className="w-6 h-6 text-black" />,
    title: "Higher Accuracy",
    description: (
      <p>
        Spots subtle patterns and anomalies that human eyes may miss, increasing
        diagnostic confidence.
      </p>
    ),
    delay: 0.2,
  },
  {
    icon: <Globe2 className="w-6 h-6 text-black" />,
    title: "Accessibility",
    description: (
      <p>
        Enables tele-diagnostics for underserved and remote regions, reducing
        healthcare gaps.
      </p>
    ),
    delay: 0.3,
  },
  {
    icon: <Stethoscope className="w-6 h-6 text-black" />,
    title: "Efficiency",
    description: (
      <p>
        Frees clinicians to focus on complex cases and patient interactions
        rather than repetitive tasks.
      </p>
    ),
    delay: 0.4,
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-black" />,
    title: "Cost Savings",
    description: (
      <p>
        Reduces unnecessary tests, optimizes resource usage, and improves
        long-term financial sustainability.
      </p>
    ),
    delay: 0.5,
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-black" />,
    title: "Continuous Learning",
    description: (
      <p>
        AI models improve over time with new data, adapting to emerging diseases
        and evolving medical knowledge.
      </p>
    ),
    delay: 0.6,
  },
];

export default function Slide10_Benefits() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      const newOpen = [...openIndexes, index];
      if (newOpen.length > 2) newOpen.shift(); // keep max 2 open
      setOpenIndexes(newOpen);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24">
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row md:items-center gap-3 mb-10 md:mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true }}
      >
        <span className="bg-[#FECACA] text-black text-xl sm:text-2xl font-bold px-4 py-1 rounded-md">
          Benefits
        </span>
        <p className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-2xl">
          Why hospitals are adopting AI in clinical workflows.
        </p>
      </motion.div>

      {/* Accordion Cards */}
      <div className="flex flex-col gap-4">
        {benefits.map((benefit, index) => {
          const isOpen = openIndexes.includes(index);

          return (
            <motion.div
              key={index}
              {...fadeCard(benefit.delay)}
              whileHover={cardHover.whileHover}
              animate={{
                backgroundColor: isOpen ? "#FECACA" : "#F4F4F4",
              }}
              className="rounded-[36px] text-black shadow-[0_4px_0_0_#2B2D31] overflow-hidden"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full px-4 sm:px-6 py-5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-left"
              >
                <div className="flex items-center gap-3">
                  {benefit.icon}
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black px-4 py-1 rounded-md">
                    {benefit.title}
                  </h3>
                </div>

                <motion.div
                  className="border border-black rounded-full p-1 mt-2 sm:mt-0"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{
                      maxHeight: 0,
                      opacity: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                    animate={{
                      maxHeight: 500,
                      opacity: 1,
                      paddingTop: 16,
                      paddingBottom: 24,
                    }}
                    exit={{
                      maxHeight: 0,
                      opacity: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.25, 0.8, 0.25, 1],
                    }}
                    className="overflow-hidden px-4 sm:px-6 border-t border-[#2B2D31]"
                  >
                    <motion.div
                      whileHover={{ scale: 1.015 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-700 text-base sm:text-lg md:ml-4 max-w-2xl space-y-2"
                    >
                      {benefit.description}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
