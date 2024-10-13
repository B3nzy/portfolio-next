"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const welcomeText = "Hi, I'm Sumit.";

  const introductionSentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 1 },
    },
  };

  const introductionLetterVarints = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col xl:w-[85vw] lg:mx-auto lg:flex-row gap-10 justify-center items-center mt-20">
        {/* Image Container */}
        <div className="w-full flex justify-center items-center p-2 lg:p-0">
          <Image
            src="/bg-icons/Homepage.gif"
            width={600}
            height={600}
            className="object-contain"
            unoptimized
          />
        </div>
        {/* Text Container */}
        <div className="w-full p-5 xl:p-0 flex flex-col gap-5">
          <motion.h1
            className="text-4xl lg:text-5xl font-mono font-semibold"
            initial="hidden"
            animate="visible"
            variants={introductionSentenceVariants}
          >
            {welcomeText.split("").map((char, index) => {
              return (
                <motion.span key={index} variants={introductionLetterVarints}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
          <p className="text-xl">
            A passionate Full-Stack Developer with a focus on building dynamic
            and user-friendly web applications. With a deep understanding of
            both frontend and backend technologies, I thrive on turning complex
            problems into elegant, scalable solutions. Whether it&apos;s
            designing responsive interfaces or optimizing backend performance,
            I&apos;m always excited to learn, innovate, and push the boundaries
            of technology. I enjoy collaborating with teams to create seamless
            digital experiences and constantly seek new challenges to enhance my
            skills.
          </p>
          <p className="text-xl">
            Let&apos;s create something amazing together!
          </p>
          <div className="flex gap-8 mt-5">
            <Link
              className="p-2 border bg-orange-700 opacity-90 hover:opacity-100 text-white text-xl font-mono rounded flex items-center justify-center hover:scale-105 hover:shadow-lg transition-all duration-300"
              href={"/portfolio"}
            >
              View My Work
            </Link>
            <Link
              className="p-2 border text-orange-600 border-orange-500 text-xl flex items-center justify-center hover:bg-orange-700 rounded hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
              href={"/contact"}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
