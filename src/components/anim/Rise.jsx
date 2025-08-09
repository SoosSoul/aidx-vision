import { motion } from "framer-motion";
export default function Rise({ children, delay = 0, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay, type: "spring", stiffness: 100, damping: 16 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
