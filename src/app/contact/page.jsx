"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const leftText = "Connect with me";

  // TODO: Email functionality not yet added.

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col xl:w-[85vw] h-[calc(100vh-6rem)]  lg:mx-auto md:flex-row gap-10 justify-center items-center">
        {/* Left side */}
        <motion.div className="w-full flex justify-center items-center p-2 lg:p-0">
          <div className="text-2xl md:text-4xl  xl:text-6xl">
            {"Connect with me".split("").map((letter, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.12,
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
        {/* Right side */}
        <div className="flex flex-col w-full md:w-4/5 justify-center bg-orange-50 rounded-2xl md:h-[80vh] h-full p-20 gap-5">
          <div>Dear Sumit Mandal,</div>
          <textarea className="bg-none h-40 bg-transparent border border-black resize-none outline-none" />
          <div>My email address is: </div>
          <input
            type="text"
            className="border-b-[1px] border-black bg-transparent outline-none"
          />
          <button className="bg-orange-500 hover:scale-105 hover:shadow-lg transition-all duration-300 opacity-90 hover:opacity-100 text-black hover:text mt-5 p-2 rounded">
            Send
          </button>
          {success && (
            <div className="font-semibold text-green-600 mt-5 text-lg">
              Your message has been sent successfully!
            </div>
          )}
          {error && (
            <div className="font-semibold text-red-600 mt-5 text-lg">
              Something went wrong!
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
