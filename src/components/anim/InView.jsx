import { motion } from "framer-motion";
export default function InView({
  children,
  amount = 0.6,
  once = true,
  ...rest
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount, once }}
      transition={{ type: "spring", stiffness: 90, damping: 18 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
