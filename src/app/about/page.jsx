"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <div>AboutPage</div>
    </motion.div>
  );
}
