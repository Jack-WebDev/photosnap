"use client";

import { motion } from "framer-motion";

type Props = {
  packageType: string;
  price: string;
  content: string;
  cycle: string;
  scale?: string;
  bgColor?: string;
  buttonBGColor?: string;
};

export default function PricingCard({
  packageType,
  price,
  bgColor,
  buttonBGColor,
  content,
  scale,
  cycle,
}: Props) {
  return (
    <motion.div
      className={`rounded-2xl p-8 flex flex-col gap-y-6 justify-between text-center shadow-lg ${bgColor} ${scale}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.h2
        className="text-xl font-semibold tracking-wide uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {packageType}
      </motion.h2>

      <motion.p
        className={`${bgColor}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
      >
        {content}
      </motion.p>

      <motion.p
        className={`text-4xl font-extrabold ${bgColor}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        {price}
      </motion.p>

      <motion.p
        className={`text-sm ${bgColor}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        {cycle}
      </motion.p>

      <motion.button
        className={`${buttonBGColor} py-2 px-6 rounded-lg transition duration-300`} 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        PICK PLAN
      </motion.button>
    </motion.div>
  );
}
