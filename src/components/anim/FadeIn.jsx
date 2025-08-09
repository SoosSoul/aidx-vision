import { motion } from "framer-motion";
export default function FadeIn({ children, delay = 0, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay, duration: 0.6 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
