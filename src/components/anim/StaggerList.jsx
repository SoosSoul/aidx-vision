import { motion } from "framer-motion";
export default function StaggerList({
  as: Tag = "ul",
  items = [],
  ordered = false,
}) {
  const list = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };
  const Comp = motion(Tag);
  const ItemComp = motion.li;
  return (
    <Comp
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className="space-y-1"
    >
      {items.map((t, i) => (
        <ItemComp key={i} variants={item}>
          {t}
        </ItemComp>
      ))}
    </Comp>
  );
}
